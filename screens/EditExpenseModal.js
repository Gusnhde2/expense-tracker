import { useLayoutEffect, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  useWindowDimensions,
  Button,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { editExpense } from "../store/expenseSlice";

const EditExpenseModal = ({ navigation, route }) => {
  const { height, width } = useWindowDimensions();
  const expenses = useSelector((state) => state.expenses);

  const expense = expenses.filter((item) => {
    if (item.id == route.params) {
      return item;
    }
  });

  const [text, setText] = useState(expense[0].title ?? "");
  const [expenseAmount, setAmount] = useState(expense[0].amount);

  const dispatch = useDispatch();

  const editExpenseHandler = () => {
    dispatch(
      editExpense({
        title: text,
        amount: expenseAmount,
        id: route.params,
      })
    );
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input(width)}
          onChangeText={setText}
          //   value={expense.title}
          placeholder={expense[0].title}
        />
      </View>
      <View>
        <TextInput
          onChangeText={setAmount}
          style={styles.input(width)}
          //   value={expense.amount}
          keyboardType="numeric"
          placeholder={expense[0].amount}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.btn}>
          <Button title="Cancel" onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.btn}>
          <Button title="Edit" onPress={editExpenseHandler} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: 40 },
  input: (width) => ({
    width: width * 0.9,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }),

  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-evenly",
  },
  btn: {
    backgroundColor: "#777",
    flex: 1,
  },
});
export default EditExpenseModal;
