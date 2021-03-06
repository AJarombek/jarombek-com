/* eslint-disable react/prop-types */
/**
 * Blog component
 * @author Andrew Jarombek
 * @since 4/8/2018 (Refactored 8/1/2018)
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import 'isomorphic-fetch';
import {Helmet} from 'react-helmet';

import WebsiteTemplate from './WebsiteTemplate';
import BlogPost from './BlogPost';
import Modal from './Modal';
import Loading from "./Loading";
import TitleImage from './TitleImage';
import Subscribe from "./Subscribe";
import BlogDelegator from "./BlogDelegator";
import JSXConverter from "./JSXConverter";
import BaseURL from './BaseURL';

class Blog extends React.Component {

    constructor(props) {
        super(props);

        // Get the Base URL of the API depending on the environment.
        this.baseUrl = BaseURL.get();

        // Only set an empty state if it does not already exist -
        // it may have been set on the server side render
        if (!this.state) {
            this.state = {};
        }
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
        post: PropTypes.object
    };

    /**
     * Called when a component is about to mount.  Here we check if an initial state was passed
     * down from the server and act accordingly.
     * NOTE: This lifecycle call IS made on server side React.  This is simply a preparation
     * call before interacting with the DOM
     */
    componentWillMount() {
        if (this.props.post && this.props.post.name === this.props.match.params.name) {
            this.setState({
                post: JSXConverter.createPostJSX(this.props.post)
            });
        }
    }

    /**
     * Called when the component first mounts.  Here is where we should make setup API calls
     * and initialize the state
     * NOTE: This lifecycle call is NOT made on server side React.  Mounting occurs while
     * interacting with the DOM, so this only happens on client side code
     */
    componentDidMount() {
        if (this.props.location.hash.length === 0) {
            window.scrollTo(0, 0);
        }

        // Get the post name from the props.  This is populated by react router
        const {name} = this.props.match.params;

        // If the post name exists, display the post with that name.
        if (name) {

            if (!this.state.post || this.state.post.name !== name) {
                this.fetchPostAndUpdate(name)
                    .catch(() => {
                        this.setState({post: null});
                    });
            }
        }
    }

    /**
     * Called after the component updated.
     */
    componentDidUpdate() {
        if (this.props.location.hash.length === 0) {
            window.scrollTo(0, 0);
        }
    }

    /**
     * Called when the component is about to receive new props
     * @param nextProps - the props that are about to replace the existing props
     */
    componentWillReceiveProps(nextProps) {
        const {name} = nextProps.match.params;

        if (name) {
            this.fetchPostAndUpdate(name)
                .catch(() => {
                    this.setState({post: []});
                });
        }
    }

    /**
     * Fetch a single post from the API and set it to the state
     * @param name - the name of the post in MongoDB
     */
    async fetchPostAndUpdate(name) {
        const {post, loaded} = await BlogDelegator.fetchPost(this.baseUrl, name);

        // Increment the viewed count for the fetched post
        BlogDelegator.viewedPost(loaded, this.baseUrl);

        this.setState({post});
    }

    /**
     * Render the JSX
     */
    render() {
        const {post, subscribing} = this.state;
        return (
            <WebsiteTemplate subscribeAction={ () => this.setState({subscribing: true}) }>
                <div className="jarombek-background">
                    <div className="jarombek-blog">
                        { post ?
                            <div>
                                <Helmet>
                                    <title>{post.title}</title>
                                    <meta name="author" content="Andrew Jarombek" />
                                    <meta name="description"
                                          content={post.description ||
                                          `${post.title} | Andrew Jarombek`} />
                                    <link rel="canonical"
                                          href={`https://jarombek.com/blog/${post.name}`} />
                                    <link rel="icon" href={ require(`./assets/jarombek.png`) } />
                                </Helmet>
                                <BlogPost key={post.name} {...post} />
                            </div>:
                            <Loading className="jarombek-blog-none" />
                        }
                        <Link className="jarombek-blog-footer" to='/blog'>
                            <TitleImage className="footer-icon" src="./assets/jarombek.png"
                                        title="BLOG" />
                        </Link>
                    </div>
                </div>
                { (subscribing) ?
                    <Modal clickBackground={() => this.setState({subscribing: false})}>
                        <Subscribe exit={() => this.setState({subscribing: false})} />
                    </Modal> : null
                }
            </WebsiteTemplate>
        );
    }
}

export default Blog;