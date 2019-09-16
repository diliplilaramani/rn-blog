import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return <BlogPostForm 
                initialValues={{id: blogPost.id, title: blogPost.title, content: blogPost.content}}
                onSubmit={(title, content) => {
                    // console.log(title);
                    editBlogPost(blogPost.id, title, content, () => {
                        navigation.pop();
                    });
                }}
            />
};

const styles = StyleSheet.create({

});

export default EditScreen;