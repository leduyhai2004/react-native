import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";
import { useState } from "react";

const Form = (props) => {
  const [task, setTask] = useState("");
  const handleAddTask = () => {
    if (task.length === 0) {
      alert("Please enter task");
      return false;
    }
    props.onAddTask(task);
    setTask("");
  };
  return (
    <View style={styles.addTask}>
      <TextInput
        value={task}
        onChangeText={(text) => setTask(text)}
        placeholder="your task"
        style={styles.input}
      />
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
