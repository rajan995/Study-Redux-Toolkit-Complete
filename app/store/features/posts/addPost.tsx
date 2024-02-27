import { View, TextInput, Text, Button } from "react-native"
import react, { useState, useId } from 'react';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import { addNewPosts, postsActins } from "./posts.slice";
import { v4 as uuidv4 } from 'uuid';
import { Picker } from '@react-native-picker/picker';

type props = NativeStackScreenProps<any>;

export const AddPost: react.FC<props> = ({ route, navigation }) => {
    const users = useSelector((d: any) => d.users);

    const dispatch = useDispatch<any>();
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [userId, setUserId] = useState<string>('');

    const submit = () => {
        if (title && content) {
            // dispatch(postsActins.postAdded({ id:uuidv4().substring(0,10).replaceAll("-",""), title: title, content: content ,userId}))
            try {
                dispatch(addNewPosts({ title: title, content: content, userId: userId }));
            } catch (err) {
                console.log('Failed to save the post', err);
            } finally {

            }
            navigation.pop();
        }
    }
    return <View style={{ padding: 10, }}>
        <View style={{ paddingVertical: 10 }}>
            <Text>Title</Text>
            <View style={{ borderColor: 'gray', borderWidth: 2, flex: 1 }}>
                <TextInput style={{ height: 30, padding: 10 }} onChangeText={setTitle} placeholder="Please enter title" />
            </View>
        </View>
        <View style={{ paddingVertical: 10 }}>
            <Text>Content</Text>
            <View style={{ borderColor: 'gray', borderWidth: 2, flex: 1 }}>
                <TextInput style={{ height: 30, padding: 10 }} onChangeText={setContent} placeholder="Please enter Content" />
            </View>
        </View>
        <Picker selectedValue={userId} onValueChange={(item, index) => setUserId(item)}>
            {users.map((d: any) => <Picker.Item label={d.name} value={d.id} />)}
        </Picker>
        <View style={{ paddingVertical: 10 }}>
            <Button title="Submit" onPress={submit} />
        </View>
    </View>
}

