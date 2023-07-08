import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AddButton = () => {
  const navigation = useNavigation();

  const openModalHandler = () => {
    navigation.navigate("AddExpenseModal");
  };
  return (
    <TouchableOpacity onPress={openModalHandler}>
      <Ionicons name="add" size={30} color="black" />
    </TouchableOpacity>
  );
};

export default AddButton;
