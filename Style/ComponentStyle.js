import { StyleSheet } from "react-native";

export const ComponentStyle = StyleSheet.create({
    // Sidebar
  sidebar: {
    backgroundColor: "#f8f8f8",
    flex: 1,
    width: "15%",
    height: "100%",
    minHeight: "97.5vh",
    borderRadius: 7,
    justifyContent: "space-between",
  },
  sidebarHeader: {
    fontSize: 30,
    fontWeight: "bold",
    color: "green",
    padding: 20,
    textAlign: "center",
  },
  sidebarContent: {
    padding: 10,
    marginTop: 10,
    flexDirection: "column",
    justifyContent: "center",
  },
  sidebarButton: {
    padding: 10,
    paddingLeft: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
  sidebarButtonPressed: {
    backgroundColor: "#FFF",
  },
  sidebarButtonText: {
    color: "black",
    fontSize: 24, // Adjust text size as needed
    textAlign: "center",
  },
  sidebarIconAndText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sidebarIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  sidebarSignOut: {
    alignItems: 'center',
    marginBottom: 10,
    width: "100%",
  },

  // Dashboard
  DB_container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f8f8f8",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  kpiContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  kpiBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  kpiTitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  kpiValue: {
    fontSize: 24,
    fontWeight: "bold",
  },
  chartContainer: {
    marginBottom: 20,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  chartConfig: {
    backgroundColor: "#fff",
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 10,
    },
  },
  chartStyle: {
    borderRadius: 10,
    marginVertical: 8,
  },

});