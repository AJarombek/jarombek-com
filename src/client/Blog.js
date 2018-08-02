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

class Blog extends React.Component {

    constructor(props) {
        super(props);
        console.log('Inside Blog constructor');

        this.baseUrl = (process.env.NODE_ENV === 'production') ?
            'https://jarombek.com' :
            'http://localhost:8080';

        console.info(`The environment: ${process.env.NODE_ENV}`);
        console.info(`The URL to call: ${this.baseUrl}`);

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
        console.info("Inside Blog ComponentWillMount");

        if (this.props.post) {
            console.info(`Mounting Component with Post in State: ${this.props.post.name}`);
            this.setState({
                post: [JSXConverter.createPostJSX(this.props.post)]
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
        console.info("Inside Blog ComponentDidMount");

        console.info(this.props);

        // Get the post name from the props.  This is populated by react router
        const {name} = this.props.match.params;

        // If the post name exists, display the post with that name.
        if (name) {

            if (!this.state.post) {
                console.info(`Fetching Post with name ${name}`);
                this.fetchPostAndUpdate(name)
                    .catch(err => {
                        console.error(err);
                        this.setState({post: []});
                    });
            } else {
                console.info(`Post Was in Initial State`);
            }
        }
    }

    /**
     * Called after the component updated.
     * @param prevProps - the props of the component before the update occurred
     */
    componentDidUpdate(prevProps) {
        console.info("Inside Blog componentDidUpdate");
        // If viewing a new post, scroll to the top of the page.  This is needed because by default
        // react router will change routes and not scroll back to the top
        if (this.props.location.pathname !== prevProps.location.pathname) {
            console.info("Scrolling to Top");
            window.scrollTo(0, 0);
        }
    }

    /**
     * Called when the component is about to receive new props
     * @param nextProps - the props that are about to replace the existing props
     */
    componentWillReceiveProps(nextProps) {
        console.info("Inside Blog ComponentWillReceiveProps");

        const {name} = nextProps.match.params;

        if (name) {
            this.fetchPostAndUpdate(name)
                .catch(err => {
                    console.error(err);
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
        console.info(post);

        // Increment the viewed count for the fetched post
        BlogDelegator.viewedPost(loaded, this.baseUrl);

        this.setState({post});
    }

    /**
     * Render the JSX
     */
    render() {
        const {post} = this.state;
        console.log('Inside Blog Render');
        console.info(this.state);
        return (
            <WebsiteTemplate subscribeAction={ () => this.setState({subscribing: true}) }>
                <div className="jarombek-background">
                    <div className="jarombek-blog">
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
                        { (this.state.post) ?
                            <Loading className="jarombek-blog-none" />:
                            <BlogPost key={post.name} {...post} />
                        }
                        <Link className="jarombek-blog-footer" to='/'>
                            <TitleImage className="footer-icon" src="./assets/jarombek.png"
                                        title="HOME" />
                        </Link>
                    </div>
                </div>
                { (this.state.subscribing) ?
                    <Modal clickBackground={() => this.setState({subscribing: false})}>
                        <Subscribe exit={() => this.setState({subscribing: false})} />
                    </Modal> : null
                }
            </WebsiteTemplate>
        );
    }
}

export default Blog;