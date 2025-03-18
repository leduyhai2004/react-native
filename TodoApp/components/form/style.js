import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  addTask: {
    marginBottom: 30,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 60,
    paddingLeft: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
  },
  iconWrapper: {
    width: 54,
    height: 54,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderWidth: 2,
  },
  icon: {
    fontSize: 32,
  },
});
export default styles;
