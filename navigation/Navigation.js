import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigator from "../screens/TabNavigator/TabNavigator";
import AddButton from "../components/AddButton";
import AddExpenseModal from "../screens/AddExpenseModal";
import EditExpenseModal from "../screens/EditExpenseModal";

import { getHeaderTitle } from "../functions/headerTitle";

const Navigation = ({ route }) => {
  const Stack = createNativeStackNavigator();

  console.log(route);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerRight: AddButton,
        }}
      >
        <Stack.Group>
          <Stack.Screen
            name="tabs"
            component={TabNavigator}
            options={({ route }) => ({
              headerTitle: getHeaderTitle(route),
            })}
          />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            presentation: "modal",
            animation: "slide_from_bottom",
          }}
        >
          <Stack.Screen name="AddExpenseModal" component={AddExpenseModal} />
          <Stack.Screen name="Edit" component={EditExpenseModal} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
