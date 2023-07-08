import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  useWindowDimensions,
  Text,
  Button,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "../store/expenseSlice";

const ExpenseInput = () => {
  const navigation = useNavigation();
  const { height, width } = useWindowDimensions();
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  const [text, setText] = useState();
  const [expenseAmount, setAmount] = useState();

  const addExpenseHandler = () => {
    const id = Date.now();
    const expense = { id: id, title: text, amount: parseInt(expenseAmount) };
    dispatch(addExpense(expense));
    navigation.navigate("All");
  };

  return (
    <View>
      <View>
        <Text>Expense title</Text>
        <TextInput style={styles.input(width)} onChangeText={setText} />
      </View>
      <View>
        <Text>Expense amount</Text>
        <TextInput
          onChangeText={setAmount}
          style={styles.input(width)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.btn}>
          <Button
            title="Cancel"
            onPress={() => navigation.navigate("Recent")}
          />
        </View>
        <View style={styles.btn}>
          <Button title="Add" onPress={addExpenseHandler} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  //   mainContainer: (height) => ({
  //     height: height,
  //   }),
  input: (width) => ({
    width: width * 0.9,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }),

  buttonsContainer: {
    // backgroundColor: "#999",
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-evenly",
  },
  btn: {
    backgroundColor: "#777",
    flex: 1,
  },
});

export default ExpenseInput;
