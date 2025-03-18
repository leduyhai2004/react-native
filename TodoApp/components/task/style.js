import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    backgroundColor: "white",
    marginTop: 20,
    marginBottom: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  squares: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "80%", //chiem 80 phan tran con lai so voi cai so
    fontSize: 22,
  },
});
export default styles;
