import { Pressable, Text, View, Button, StyleSheet } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../store/expenseSlice";
import { getDate } from "../functions/date";

const ExpenseCard = ({ item }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);
  const date = getDate(item.date);
  const expandHandler = () => {
    setExpanded((prevState) => !prevState);

    // console.log();
  };

  const deleteHandler = () => {
    dispatch(deleteExpense(item.id));
  };
  return (
    <Pressable style={styles.card} onPress={expandHandler}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 20 }}>{item.title}</Text>
        </View>
        <View>
          <Text style={{ fontSize: 25 }}>{item.amount} KM</Text>
        </View>
      </View>
      <Text style={{ padding: 8, fontSize: 18 }}>Date: {date}</Text>
      {expanded ? (
        <View style={{ flexDirection: "row", gap: 20 }}>
          <View style={{ flex: 1 }}>
            <Button title="Delete" onPress={deleteHandler} />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              title="Edit"
              onPress={() => navigation.navigate("Edit", item.id)}
            />
          </View>
        </View>
      ) : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 8,
    backgroundColor: "#999a",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});

export default ExpenseCard;
