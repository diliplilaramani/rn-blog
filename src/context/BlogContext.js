import createDataContext from './createDataContext';

const blogPostsReducer = (state, action) => {
    switch (action.type) {
        case 'edit_blogPost':
            return state.map((blogPost) => {
                if(blogPost.id === action.payload.id){
                    return action.payload;
                } else {
                    return blogPost;
                }
            });
        case 'delete_blogPost':
            return state.filter(blogPost => blogPost.id !== action.payload)
        case 'add_blogPost':
            return [...state, { id: Math.floor(Math.random() * 999), title: action.payload.title, content: action.payload.content}]
        default:
            return state;
    }
};

const addBlogPost = dispatch => {
    return (title, content, callback) => {
        dispatch({ type: 'add_blogPost', payload: {title: title, content: content}});
        if(callback){
            callback();
        }
    };
};

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_blogPost', payload: id});
    };
};

const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({ type: 'edit_blogPost', payload: {id: id, title: title, content: content}})
        if(callback){
            callback();
        }
    };
};

export const { Context, Provider } = createDataContext(
    blogPostsReducer, 
    { addBlogPost, deleteBlogPost, editBlogPost }, 
    [{id: 1, title: 'Test Post', content: "Test Content"}]);