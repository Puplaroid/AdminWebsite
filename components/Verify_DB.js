import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Verify_DB() {
  const verify_user = [
    { username: "yyyyy", time: "9:42" },
    { username: "yyyyy", time: "9:41" },
    { username: "yyyyy", time: "9:38" },
    { username: "yyyyy", time: "9:38" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Verify</Text>
      {verify_user.map((user, index) => (
        <TouchableOpacity key={index} style={styles.reportContainer}>
          <Text style={styles.reportText}>user: {user.username}</Text>
          <Text style={styles.reportTime}>{user.time}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginLeft: 10,
    width: "20%",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  reportContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#ffffff",
  },
  reportText: {
    fontSize: 16,
  },
  reportTime: {
    fontSize: 14,
    color: "#0000ff",
  },
});
