import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

export default function Order_DB() {
  const data = [
    {
      name: "On going",
      count: 230,
      color: "orange",
      legendFontColor: "#000",
      legendFontSize: 15
    },
    {
      name: "Complete",
      count: 1000,
      color: "green",
      legendFontColor: "#000",
      legendFontSize: 15
    },
    {
      name: "Cancel",
      count: 4,
      color: "red",
      legendFontColor: "#000",
      legendFontSize: 15
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Order</Text>
      <Text style={styles.text}>All order : 1234</Text>
      {/* <Text style={styles.text}>On going : 230</Text>
      <Text style={styles.text}>Complete : 1000</Text>
      <Text style={styles.text}>Cancel : 4</Text> */}

      <PieChart
        data={data}
        width={Dimensions.get("window").width*0.3}
        height={220}
        chartConfig={{
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor={"count"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        center={[10, 10]}
        absolute
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});
