import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Report_DB() {
  const reports = [
    { user: "yyyyy", time: "9:42" },
    { user: "yyyyy", time: "9:41" },
    { user: "yyyyy", time: "9:38" },
    { user: "yyyyy", time: "9:38" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Report on order</Text>
      {reports.map((report, index) => (
        <TouchableOpacity key={index} style={styles.reportContainer}>
          <Text style={styles.reportText}>user: {report.user}</Text>
          <Text style={styles.reportTime}>{report.time}</Text>
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
    width: "30%",
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
