import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Square(props: { value: string | number; onPress: () => void }) {
    const styles = StyleSheet.create({
        signStyles: {
            width: 100,
            height: 100,
            backgroundColor: props.value ? (props.value === 'X' ? '#ff6347' : '#4682b4') : '#fff',
            borderWidth: 1,
            borderColor: '#999',
            fontSize: 24,
            fontWeight: "bold" as "bold",
            cursor: 'pointer',
            color: '#fff',
            textAlign: 'center', // Center the text
        },
      });

    return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={styles.signStyles}>{props.value}</Text>
    </TouchableOpacity>
  );
}