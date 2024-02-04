/**
 * BlogList component
 * @author Andrew Jarombek
 * @since 8/1/2018
 */

import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
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
  const [searchParams] = useSearchParams();

  const [page, setPage] = useState('1');
  const [query, setQuery] = useState('_');
  const [posts, setPosts] = useState([]);
  const [last, setLast] = useState('1');
  const [searchQuery, setSearchQuery] = useState('');

  const paginationLink = useMemo(() => {
    const queryUrl = query && query !== '_' ? `query=${query}&` : '';
    return query === '_' ? '/blog?page=' : `/blog?${queryUrl}page=`;
  }, [query]);

  /**
   * @param {string} pageNumber
   * @param {string} queryString
   * @return {Promise<void>}
   */
  const fetchPosts = async (pageNumber, queryString) => {
    const { posts: postsList, last: lastLink } = await BlogDelegator.fetchPosts(
      BaseURL.get(),
      `/api/post/preview?${queryString}page=${pageNumber}`,
    );

    setPosts(postsList);
    setLast(lastLink);
  };

  useEffect(() => {
    const newPage = searchParams.get('page') ?? '1';
    const newQuery = searchParams.get('query') ?? '_';

    setPage(newPage);
    setQuery(newQuery);
    setSearchQuery(newQuery === '_' ? '' : newQuery);

    const queryUrl = newQuery && newQuery !== '_' ? `query=${newQuery}&` : '';

    window.scrollTo(0, 0);
    fetchPosts(newPage, queryUrl);
  }, [searchParams]);

  /**
   * When a key is typed into the text search bar.  If the enter button is pressed and the
   * search bar isn't empty, execute the text search.
   * @param {React.KeyboardEvent} e - the React event that occurred (which corresponds to a DOM event)
   * @return {void}
   */
  const onKeyUpSearchBar = (e) => {
    if (e.keyCode === 13 && searchQuery) {
      navigate(`/blog?query=${searchQuery}&page=1`);
    }
  };

  /**
   * When the value in the text search bar changes, add it to the state under the property
   * 'potentialQuery'.  This is a query that has yet to be executed, but can be once the enter
   * key is pressed or the execution button is pressed.
   * @param {React.ChangeEvent} e - the React event that occurred (which corresponds to a DOM event)
   * @return {void}
   */
  const onChangeSearchBar = (e) => {
    setSearchQuery(e.target.value.trim());
  };

  /**
   * When clicking the button to execute a text search, check if any value was entered.
   * If so, perform the text search, otherwise do nothing.
   * @return {void}
   */
  const onClickSearch = () => {
    if (searchQuery) {
      navigate(`/blog?query=${searchQuery}&page=1`);
    }
  };

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
};

export default BlogList;
