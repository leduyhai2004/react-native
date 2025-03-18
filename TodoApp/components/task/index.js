import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";

const Tasks = (props) => {
  const { number } = props;
  const numberText = number < 10 ? `0${number}` : number;
  return (
    <View>
      <TouchableOpacity onPress={props.onDeleteTask}>
        <View style={styles.item}>
          <View style={styles.squares}>
            <Text style={styles.number}>{numberText}</Text>
          </View>
          <Text style={styles.content}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Tasks;
