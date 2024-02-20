import { View, Text, Pressable,StyleSheet,Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./counter.slice.";

export const Counter = () => {
        const counter = useSelector((state: any) => state.counter.count);
        const dispatch = useDispatch();
        return <View>
           <Pressable onPress={()=>dispatch(counterActions.increment())} >
                <View style={styles.btn}>
                Increment
                </View>
                </Pressable>
                <Text>{counter}</Text>
                <Pressable onPress={()=>dispatch(counterActions.decrement())} >
                <View style={styles.btn}>
                        Decrement
                </View>
                </Pressable>

                <Pressable onPress={()=>dispatch(counterActions.incrementByAmount(10))} >
                <View style={styles.btn}>
                        Increment By Amount
                </View>
                </Pressable>
        </View>;
}
const styles = StyleSheet.create({
       btn:{
 borderWidth:2,
 borderColor:'black',
 backgroundColor:'red',
 paddingHorizontal:10,
 paddingVertical:5,
 color:'white'
       } 
})