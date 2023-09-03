/* eslint-disable react/prop-types */
/**
 * BlogList component
 * @author Andrew Jarombek
 * @since 8/1/2018
 */

import React, {useEffect, useMemo, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import 'isomorphic-fetch';

import WebsiteTemplate from './WebsiteTemplate';
import Loading from './Loading';
import BlogPreview from './BlogPreview';
import BlogDelegator from './BlogDelegator';
import PaginationBar from './PaginationBar';
import SearchBar from './SearchBar';
import BaseURL from './BaseURL';

const BlogList = () => {
  const navigate = useNavigate();
  const { page = '1', query = '_' } = useParams();

  const [posts, setPosts] = useState([]);
  const [last, setLast] = useState('1');
  const [searchQuery, setSearchQuery] = useState(query);

  const queryUrl = useMemo(() => query && query !== '_' ? `query=${query}&` : '', [query]);
  const paginationLink = useMemo(() => {
    return query === '_' ? '/blog?page=' : `/blog?${queryUrl}page=`;
  }, [queryUrl]);

  useEffect(async () => {
    window.scrollTo(0, 0);

    const {
      posts: postsList,
      last: lastLink,
    } = await BlogDelegator.fetchPosts(BaseURL.get(), `/api/post/preview?${queryUrl}page=${page}`);

    setPosts(postsList);
    setLast(lastLink);
  }, [page, queryUrl]);

  /**
   * When a key is typed into the text search bar.  If the enter button is pressed and the
   * search bar isn't empty, execute the text search.
   * @param e - the React event that occurred (which corresponds to a DOM event)
   */
  const onKeyUpSearchBar = (e) => {
    if (e.keyCode === 13 && searchQuery) {
      navigate(`/blog?query=${searchQuery}&page=${page}`);
    }
  }

  /**
   * When the value in the text search bar changes, add it to the state under the property
   * 'potentialQuery'.  This is a query that has yet to be executed, but can be once the enter
   * key is pressed or the execution button is pressed.
   * @param e - the React event that occurred (which corresponds to a DOM event)
   */
  const onChangeSearchBar = (e) => {
    setSearchQuery(e.target.value.trim());
  }

  /**
   * When clicking the button to execute a text search, check if any value was entered.
   * If so, perform the text search, otherwise do nothing.
   */
  const onClickSearch = () => {
    if (searchQuery) {
      navigate(`/blog?query=${searchQuery}&page=${page}`);
    }
  }

  return (
      <WebsiteTemplate>
        <div className="jarombek-background">
          {posts ? (
              <div className="jarombek-blog-list">
                <div className="jarombek-blog-list-search">
                  <SearchBar
                      onSearch={onClickSearch}
                      onChangeSearch={onChangeSearchBar}
                      onKeyPressSearch={onKeyUpSearchBar}
                      value={searchQuery}
                  />
                </div>
                <div className="jarombek-posts-grid">
                  {posts.map((post) => (
                      <BlogPreview key={post.name} {...post} />
                  ))}
                </div>
              </div>
          ) : (
              <div className="jarombek-blog-list">
                <Loading className="jarombek-blog-list-none" />
              </div>
          )}
          <div className="jarombek-blog-list-footer">
            <PaginationBar current={+page} last={+last} link={paginationLink} />
          </div>
        </div>
      </WebsiteTemplate>
  );
}

export default BlogList;
