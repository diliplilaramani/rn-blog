import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from "../components/BlogPostForm";
import { HeaderTitle } from 'react-navigation-stack';
import { NavigationEvents } from 'react-navigation';

const CreateScreen = ({ navigation }) => {
    const {state, addBlogPost } = useContext(Context);

    return (
        <BlogPostForm 
            onSubmit={(title, content) => {
                addBlogPost(title, content, () => {
                    navigation.navigate('Index');
                })
            }}
        />
    );
};

const styles = StyleSheet.create({});

export default CreateScreen;