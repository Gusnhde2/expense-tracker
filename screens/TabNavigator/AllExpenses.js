import { ScrollView, Pressable, Text, View, Switch } from "react-native";
import { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import ExpenseCard from "../../components/ExpenseCard";
import SelectButton from "../../components/SelectButton";
import { sortArrayByAmount } from "../../functions/sort";

const AllExpenses = () => {
  const data = useSelector((state) => state.expenses);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  // const expenses = [
  //   { id: 1, amount: 100, title: "" },
  //   { id: 2, amount: 50, title: "" },
  //   { id: 3, amount: 200, title: "" },
  //   { id: 4, amount: 75, title: "" },

  // ];

  const expenses = sortArrayByAmount([...data], isEnabled ? "desc" : "asc");

  useLayoutEffect(() => {}, [data]);
  console.log(expenses);

  return (
    <View>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <Text>Ascending</Text>
        <View style={{ flexDirection: "row", gap: 20 }}>
          <View>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <Text>Descending</Text>
      </View>
      <ScrollView>
        {expenses.map((item) => {
          return <ExpenseCard item={item} key={item.id} />;
        })}
      </ScrollView>
    </View>
  );
};

export default AllExpenses;
