import React, { useReducer } from 'react';

const BlogContext = React.createContext();

const blogPostsReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogPost':
            return [...state, { title: `Blog post #${state.length + 1}`}]
        default:
            return state;
    }
};

export const BlogProvider = ({ children }) => {
    const [blogPosts, dispatch] = useReducer(blogPostsReducer, []);

    const addBlogPost = () => {
        dispatch({ type: 'add_blogPost'});
    };

    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>
        {children}
    </BlogContext.Provider>
};

export default BlogContext;