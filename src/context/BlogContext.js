import createDataContext from './createDataContext';

const blogPostsReducer = (state, action) => {
    switch (action.type) {
        case 'delete_blogPost':
            return state.filter(blogPost => blogPost.id !== action.payload)
        case 'add_blogPost':
            return [...state, { id: Math.floor(Math.random() * 999), title: `Blog post #${state.length + 1}`}]
        default:
            return state;
    }
};

const addBlogPost = dispatch => {
    return () => {
        dispatch({ type: 'add_blogPost'});
    };
};

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_blogPost', payload: id});
    };
};

export const { Context, Provider } = createDataContext(
    blogPostsReducer, 
    { addBlogPost, deleteBlogPost }, 
    []);