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

  const [errorText, setErrorText] = useState(false);
  const [errorAmount, setErrorAmount] = useState(false);

  // let errorText = false;

  const addExpenseHandler = () => {
    const id = Date.now();
    setErrorAmount(false);
    setErrorAmount(false);
    if (
      typeof text === "undefined" ||
      text.trim().length === 0 ||
      typeof expenseAmount === "undefined" ||
      expenseAmount.trim().length === 0
    ) {
      setErrorText(true);
      setErrorAmount(true);
    } else {
      const expense = {
        id: id,
        title: text,
        amount: parseInt(expenseAmount),
        date: Date.now(),
      };
      dispatch(addExpense(expense));
      navigation.navigate("All");
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.inputTitle}>Expense title</Text>
        <TextInput
          style={styles.input(width)}
          onChangeText={setText}
          placeholder={errorText ? "Must enter title" : null}
          placeholderTextColor={"red"}
        />
      </View>
      <View>
        <Text style={styles.inputTitle}>Expense amount</Text>
        <TextInput
          onChangeText={setAmount}
          style={styles.input(width)}
          keyboardType="numeric"
          placeholder={errorAmount ? "Must enter value" : null}
          placeholderTextColor={"red"}
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
  mainContainer: {
    maxWidth: "98%",
    alignItems: "center",
  },
  input: (width) => ({
    width: width * 0.9,
    marginVertical: 12,
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
  inputTitle: {
    fontSize: 20,
  },
});

export default ExpenseInput;
