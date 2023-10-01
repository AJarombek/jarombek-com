/**
 * Data Access Object for Viewed items
 * @author Andrew Jarombek
 * @since 8/2/2018
 */

import Post from '../model/post';
import Viewed from '../model/viewed';
import Audit from '../model/audit';

class ViewedDao {
  /**
   * Update the viewed count for a blog post.  This update occurs in both the Post collection
   * and the Viewed collection.
   * @param post - an object representing a blog post
   * @return {Promise<*>} - Once resolved, an object representing the new viewed document in the
   * database.
   */
  static update = async (post) => {
    console.info(`Adding View to Post: ${post.name}`);
    const { views } = post;
    console.info(`Views: ${views}`);
    const postAdditionalView = { ...post, views: views + 1 };

    // Update the post with the additional view
    await Post.update({ name: postAdditionalView.name }, postAdditionalView);

    const updatedPost = await Post.findOne({
      name: postAdditionalView.name,
    }).exec();

    // Also update the viewed collection with the additional view
    const viewed = await Viewed.findOne({ name: updatedPost.name }).exec();
    console.info(`Viewed: ${viewed}`);
    let newViewed;

    // If the viewed document already exists, update it.  Otherwise create it
    if (viewed) {
      console.info('Already Viewed');

      const updatedViewed = { ...viewed.toObject(), views: updatedPost.views };
      console.info(`Updated Viewed ${JSON.stringify(updatedViewed)}`);

      await Viewed.update({ name: viewed.name }, updatedViewed);

      newViewed = await Viewed.findOne({ name: viewed.name }).exec();
    } else {
      console.info('Never Viewed, Creating New Viewed Document');

      const newViewedObject = new Viewed({
        name: updatedPost.name,
        date: updatedPost.date,
        type: 'post',
        views: updatedPost.views,
      });

      newViewed = await Viewed.create(newViewedObject);
    }

    // Add a document to the audit collection saying that someone viewed the post
    const audit = new Audit({
      item_id: updatedPost._id,
      type: 'post',
      message: `Post was Viewed with Name: ${updatedPost.title}`,
      source: 'Jarombek.com NodeJS/Express API',
    });

    await Audit.create(audit);

    return newViewed;
  };
}

export default ViewedDao;
