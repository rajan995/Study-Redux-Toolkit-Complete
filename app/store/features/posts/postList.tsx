import { View, StyleSheet, FlatList, Text, Button } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import react, { useEffect } from 'react';
import { postsActins,fetchPosts } from "./posts.slice";
import { fetchUsers } from "../users/user.slice";
import { PostAuthor } from "./postAuthor";

type props = NativeStackScreenProps<any>;

export const PostsList: react.FC<props> = ({ navigation, route }) => {
    const posts = useSelector((state: any) => state.posts.posts );
    const status = useSelector((state: any) => state.posts.status );
    const error = useSelector((state: any) => state.posts.error );
    const dispatch = useDispatch<any>();

 useEffect(()=>{
    if(status === 'idle'){
        dispatch(fetchPosts());
        dispatch(fetchUsers());
    }
 },[dispatch,posts])

 if(status == 'loading'){
    return <View style={{flex:1,alignItems:'center',justifyContent:"space-around"}}>Loading...</View>
 }
 if(status == 'failed'){
    return <View style={{flex:1,alignItems:'center',justifyContent:"space-around"}}>{error}</View>
 }
 if(status == 'succeeded'){
    return <View style={{ flex: 1, margin: 10 }}> 
    <FlatList data={posts} renderItem={(item) =>
        <View style={styles.listStyle}>
            <Text style={{ fontSize: 16, fontWeight: "bold", marginVertical: 5 }}>Id: {item.item.id}</Text>
            <Text style={{ marginVertical: 5 }}>Title: {item.item.title}</Text>
            <Text style={{ marginVertical: 5 }}>Content: {item.item.content}</Text>
            <PostAuthor userId={item.item.userId}/>
            <View style={{ marginVertical: 5 }}>

                <Button title="Delete" onPress={() => {
                    dispatch(postsActins.deletePost(item.item.id))
                }}></Button>
            </View>
        </View>

    }></FlatList>
        <Button title="Add" onPress={() => navigation.navigate('Add Post')}></Button>
    </View>
}}

const styles = StyleSheet.create({
    listStyle: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 12,
        margin: 12,
        borderRadius: 12
    }
})