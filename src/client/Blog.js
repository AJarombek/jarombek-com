/* eslint-disable react/prop-types */
/**
 * Blog component
 * @author Andrew Jarombek
 * @since 4/8/2018 (Refactored 8/1/2018)
 */

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'isomorphic-fetch';

import WebsiteTemplate from './WebsiteTemplate';
import BlogPost from './BlogPost';
import Modal from './Modal';
import Loading from './Loading';
import TitleImage from './TitleImage';
import Subscribe from './Subscribe';
import BlogDelegator from './BlogDelegator';
import BaseURL from './BaseURL';

const Blog = () => {
  const { name: postName } = useParams();

  const [post, setPost] = useState(null);
  const [subscribing, setSubscribing] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (postName) {
      fetchPost(postName);
    }
  }, [postName]);

  /**
   * Fetch a single post from the API and set it to the state
   * @param name - the name of the post in MongoDB
   */
  const fetchPost = async (name) => {
    const baseUrl = BaseURL.get();
    const { post, loaded } = await BlogDelegator.fetchPost(baseUrl, name);
    setPost(post);

    // Increment the viewed count for the fetched post
    BlogDelegator.viewedPost(loaded, baseUrl);
  };

  return (
    <WebsiteTemplate subscribeAction={() => setSubscribing(true)}>
      <div className="jarombek-background">
        <div className="jarombek-blog">
          {post ? (
            <div>
              <BlogPost key={post.name} {...post} />
            </div>
          ) : (
            <Loading className="jarombek-blog-none" />
          )}
          <Link className="jarombek-blog-footer" to="/blog">
            <TitleImage className="footer-icon" src="./assets/jarombek.png" title="BLOG" />
          </Link>
        </div>
      </div>
      {subscribing ? (
        <Modal clickBackground={() => setSubscribing(false)}>
          <Subscribe exit={() => setSubscribing(false)} />
        </Modal>
      ) : null}
    </WebsiteTemplate>
  );
};

export default Blog;
