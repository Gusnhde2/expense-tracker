import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import RecentExpenses from "./RecentExpenses";
import AllExpenses from "./AllExpenses";

import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TabNavigator = ({ route }) => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator tabBarOptions={{ showIcon: true }}>
      <Tab.Screen
        name="Recent"
        component={RecentExpenses}
        options={{
          tabBarIcon: () => {
            return <Ionicons name="md-hourglass" size={24} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="All"
        component={AllExpenses}
        options={{
          tabBarLabel: "All expenses",
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons
                name="calendar-multiselect"
                size={24}
                color="black"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
