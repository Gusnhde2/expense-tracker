import { useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native";
import ExpenseInput from "./ExpenseInput";

const AddExpenseModal = ({ navigation }) => {
  const [addExpense, setAddExpense] = useState(false);

  const addExpenseHandler = () => {
    setAddExpense(true);
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <View style={styles.mainContainer}>
      {addExpense ? (
        <ExpenseInput />
      ) : (
        <View style={styles.buttonsContainer}>
          <View style={styles.btn}>
            <Button title="Cancel" onPress={() => navigation.goBack()} />
          </View>
          <View style={styles.btn}>
            <Button title="Add" onPress={addExpenseHandler} />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: 100,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
    width: "90%",
    justifyContent: "space-evenly",
  },
  btn: {
    flex: 1,
  },
});
export default AddExpenseModal;
