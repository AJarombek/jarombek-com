/**
 * BlogPost Component
 * @author Andrew Jarombek
 * @since 4/8/2018
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import TagList from './TagList';
import { v4 as uuid } from 'uuid';

const BlogPost = ({ name, title, type, date, tags = [], content, sources = [] }) => {
  let count = 0;
  return (
    <div className="jarombek-blog-post">
      <div className="jarombek-blog-headers">
        <p className="jarombek-blog-type">{type.toUpperCase()}</p>
        <p className="jarombek-blog-date">{moment(date).format('MMMM Do, YYYY')}</p>
      </div>
      <Link className="jarombek-blog-title" to={`/blog/${name}`}>
        <p className="jarombek-blog-title-content">{title}</p>
      </Link>
      <div className="jarombek-blog-tags">
        <TagList tagList={tags} />
      </div>
      <div className="jarombek-blog-content">{content}</div>
      <div className="jarombek-blog-sources">
        {sources.map((src) => (
          <p key={uuid()} className="jarombek-blog-source">
            {`[${++count}] ${src.startName}`}
            <a href={`${src.link}`}>{`${src.linkName}`}</a>
            {`${src.endName}`}
          </p>
        ))}
      </div>
    </div>
  );
};

BlogPost.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
  tags: PropTypes.array,
  sources: PropTypes.array
};

export default BlogPost;
