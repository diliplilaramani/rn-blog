import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));
    return <Text>{ blogPost.title }</Text>
};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: (
            <TouchableOpacity onPress={() => { navigation.navigate('Edit', { id: navigation.getParam('id')}) }}>
                <Feather name="edit" size={25}/>
            </TouchableOpacity>
        )
    }
};

const styles = StyleSheet.create({});

export default ShowScreen;