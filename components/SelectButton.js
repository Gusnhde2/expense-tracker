import { Pressable, Text, StyleSheet } from "react-native";
import { useState } from "react";

const SelectButton = ({ title }) => {
  const [isActive, setIsActive] = useState(false);

  const color = isActive ? "#999a" : "";

  const setActiveHandler = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <Pressable onPress={setActiveHandler} style={styles.button(color)}>
      <Text>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: (color) => ({
    backgroundColor: color,
    flex: 1,
    height: 20,
  }),
});

export default SelectButton;
