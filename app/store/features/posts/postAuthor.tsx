import {  useSelector } from "react-redux";
import react, { useEffect } from 'react';
import { View, Text } from "react-native";

export const PostAuthor: react.FC<any> = ({ userId }) => {
  const users = useSelector((d: any) => d.users);
  const author = users.find((d: any) => d.id == userId);

  return <View>
    <Text>By {author.name ? author.name :'unavailable'} </Text>
  </View>
}