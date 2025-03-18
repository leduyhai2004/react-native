import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

const { width, height } = Dimensions.get("screen");
const HomeScreen = () => {
  const [number, setNumber] = useState(60);
  const [action, setAction] = useState(false);

  useEffect(() => {
    let interval;
    if (action && number > 0) {
      interval = setInterval(() => {
        setNumber((preTime) => preTime - 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [number, action]);

  const handlePlay = () => {
    setAction(true);
  };
  const handlePause = () => {
    setAction(false);
  };
  const handleRefresh = () => {
    setAction(false);
    setNumber(60);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imageBackground}
        src={
          "https://img5.thuthuatphanmem.vn/uploads/2021/12/08/anh-nen-anime-dep-yen-tinh_101044752.jpg"
        }
      />
      <View style={styles.viewBody}>
        <Text style={styles.textView}>{number}</Text>
        <View style={styles.viewButton}>
          <TouchableOpacity onPress={handlePlay} style={styles.button}>
            <Feather name="pause-circle" size={64} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePause} style={styles.button}>
            <AntDesign name="play" size={64} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRefresh} style={styles.button}>
            <Ionicons name="reload-circle-sharp" size={64} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewBody: {
    flex: 1,
    justifyContent: "space-around",
  },
  textView: {
    fontSize: 150,
    borderWidth: 2,
    textAlign: "center",
  },
  imageBackground: {
    width: width,
    height: height,
    position: "absolute",
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    width: 80,
    height: 80,
    color: "pink",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "100",
  },
  viewButton: {
    flexDirection: "row",
    justifyContent: "space-evenly", // chia deu khoang cach
  },
});
