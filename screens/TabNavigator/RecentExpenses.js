import { ScrollView } from "react-native";
import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import ExpenseCard from "../../components/ExpenseCard";

const RecentExpenses = () => {
  const expenses = useSelector((state) => state.expenses);

  const recentExpenses = expenses.slice(0, 5);

  useLayoutEffect(() => {}, [expenses]);

  return (
    <ScrollView>
      {recentExpenses.map((item) => {
        return <ExpenseCard item={item} key={item.id} />;
      })}
    </ScrollView>
  );
};

export default RecentExpenses;
