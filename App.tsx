import { Provider } from 'react-redux';
import { store } from './app/store/store';
import { PostsList } from './app/store/features/posts/postList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AddPost } from './app/store/features/posts/addPost';

export default function App() {

  const Stack = createNativeStackNavigator();
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Posts'>
          <Stack.Screen name='Posts' component={PostsList} />
          <Stack.Screen name='Add Post' component={AddPost} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}