import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
// Import chart library here
import { LineChart, BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { ComStyle } from "../Style/ComponentStyle";

export default function Dashboard() {
    const screenWidth = Dimensions.get("window").width;
    // screenWidth = screenWidth*0.85
  return (
    <ScrollView style={ComStyle.DB_container}>
      {/* Dashboard Header */}
      <Text style={ComStyle.headerText}>Dashboard</Text>

      {/* KPI Boxes */}
      <View style={ComStyle.kpiContainer}>
        <View style={ComStyle.kpiBox}>
          <Text style={ComStyle.kpiTitle}>Today's Sales</Text>
          <Text style={ComStyle.kpiValue}>$53,000</Text>
        </View>
        <View style={ComStyle.kpiBox}>
          <Text style={ComStyle.kpiTitle}>Today's Users</Text>
          <Text style={ComStyle.kpiValue}>3,200</Text>
        </View>
        <View style={ComStyle.kpiBox}>
          <Text style={ComStyle.kpiTitle}>New Clients</Text>
          <Text style={ComStyle.kpiValue}>+1,200</Text>
        </View>
        <View style={ComStyle.kpiBox}>
          <Text style={ComStyle.kpiTitle}>New Orders</Text>
          <Text style={ComStyle.kpiValue}>$13,200</Text>
        </View>
      </View>

      {/* Charts */}
      <View style={ComStyle.chartContainer}>
        {/* Bar Chart */}
        <Text style={ComStyle.chartTitle}>Active Users</Text>
        <BarChart
          data={{
            labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
            datasets: [{ data: [400, 200, 300, 450, 350, 600, 400, 550, 600] }]
          }}
        //   width={screenWidth - 20} // from react-native
          width={screenWidth * 0.85}
          height={220}
          yAxisLabel=""
          chartConfig={ComStyle.chartConfig}
          style={ComStyle.chartStyle}
        />

        {/* Line Chart */}
        <Text style={ComStyle.chartTitle}>Traffic vs Sales</Text>
        <LineChart
          data={{
            labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
            datasets: [
              {
                data: [300, 200, 400, 500, 350, 450, 400, 600, 500],
                color: () => `#348feb`, // Blue
              },
              {
                data: [200, 100, 300, 400, 250, 350, 300, 500, 400],
                color: () => `#38c172`, // Green
              },
            ]
          }}
        //   width={screenWidth - 20}
          width={screenWidth * 0.85}
          height={220}
          chartConfig={ComStyle.chartConfig}
          style={ComStyle.chartStyle}
        />
      </View>
    </ScrollView>
  );
}
