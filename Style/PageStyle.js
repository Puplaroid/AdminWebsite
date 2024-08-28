import { StyleSheet } from "react-native";

export const PageStyle = StyleSheet.create({
  titleImage: {
    flex: 1,
  },
  main: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    padding: 10,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "flex-start", // Align items to the top along the cross axis
    justifyContent: "flex-start", // Align items to the left along the main axis
  },


  // Login
  loginBg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 280,
  },
  loginHeaderText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "Black",
    marginBottom: 20,
  },
  loginContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f8f8f8",
    width: 400,
    justifyContent: "center",
    alignItems: "center", 
     
    height: 200, // Adjusted for better fit
    borderRadius: 10,
  },
  loginHeader: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  loginInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: "100%",
  },
  loginButton: {
    backgroundColor: "lightgreen",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
  },
  loginButtonText: {
    color: "black",
    fontSize: 16,
  },

  // Report
  RP_container: {
    flex: 1,
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  RP_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  RP_title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  RP_searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  RP_searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 8,
  },
  RP_content: {
    flexDirection: 'row',
  },
  RP_requesterList: {
    flex: 1,
    marginRight: 16,
  },
  RP_walkerList: {
    flex: 1,
  },
  RP_listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  // Order
  OR_container: {
    flex: 1,
    padding: 16,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  OR_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  OR_title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  OR_searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  OR_searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 8,
  },
  OR_content: {
    flexDirection: 'row',
  },
  OR_orderList: {
    flex: 1,
  },
  OR_listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  //Caferteria
  CA_container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  CA_grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CA_button: {
    width: '48%',
    paddingVertical: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CA_buttonText: {
    textAlign: 'center',
    fontSize: 16,
  },

  //Verify
  VE_container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  VE_buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  VE_button: {
    width: "70%",
    paddingVertical: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#dcdcdc",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  VE_buttonText: {
    textAlign: "center",
    fontSize: 16,
  },

  //User
  US_container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0", // Light gray background
  },
  US_buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  US_button: {
    backgroundColor: "#4CAF50", // Green background for buttons
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  US_buttonText: {
    color: "#ffffff", // White text color
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

});
