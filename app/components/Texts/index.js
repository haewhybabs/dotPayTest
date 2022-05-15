import React from "react";
import {Text} from "react-native";
import styles from "./styles";
export default function Texts({
  children,
  style,
  medium,
  bold,
  regular,
}) {
  return (
    <Text
      style={{...styles.text,...style,
        fontFamily: medium
        ? "Roboto-Medium"
        : bold
        ? "Roboto-Bold"
        : regular
        ? "Roboto-Regular"
        : "Roboto-Regular"}}>
      {children}
    </Text>
  );
}
