import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.top}>
          <Text style={styles.topText}>Top left</Text>
        </View>
      </View>
      <View style={styles.containerCenter}>
        <View style={styles.center}>
          <Text style={styles.centerText}>Center</Text>
        </View>
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>Bottom right</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    flex: 1,
  },
  containerTop: {
    backgroundColor: "yellow",
    flex: 1,
  },
  containerCenter: {
    backgroundColor: "blue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerBottom: {
    backgroundColor: "red",
    flex: 1,
  },
  top: {
    marginTop: 80,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "pink",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "red",
  },
  topText: {
    fontSize: 20,
    color: "green",
  },
  bottom: {
    marginTop: 90,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: "blue",
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 18,
  },
  bottomText: {
    textAlign: "right",
  },
  center: {
    width: 150,
    height: 150,
    backgroundColor: "grey",
    paddingVertical: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
