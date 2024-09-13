import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Alert,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Header from "../components/Header"; // Importing Header component

export default function VerifyDetail() {
  const route = useRoute(); // To get the passed user data
  const navigation = useNavigation();
  const { user } = route.params; // Destructure passed user data
  const [modalVisible, setModalVisible] = useState(false);
  const [result, setResult] = useState(""); // To store Pass/Unpass result

  // Function to handle confirmation after approving or disapproving
  const handleConfirm = (status) => {
    setResult(status); // Set the status (pass/unpass)
    setModalVisible(true); // Open the modal for confirmation
  };

  // Function to send data to backend
  const sendResultToBackend = () => {
    // Here you can make an API call to send the result to your backend
    Alert.alert(`User ${result}`);
    setModalVisible(false);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Include Header */}
      <Header />
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: user.profilePicture
                ? `https://ku-man.runnakjeen.com/${user.profilePicture}` // If profilePicture is a valid path
                : "https://via.placeholder.com/150", // Fallback image
            }}
            style={styles.image}
          />
        </View>
        
        {/* Display user details */}
        <Text style={styles.userInfoTitle}>User Details</Text>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfoLabel}>ชื่อผู้ใช้: </Text>
          <Text style={styles.userInfo}>{user.username}</Text>
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfoLabel}>อีเมล: </Text>
          <Text style={styles.userInfo}>{user.email}</Text>
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfoLabel}>เบอร์โทรศัพท์: </Text>
          <Text style={styles.userInfo}>{user.phoneNumber}</Text>
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfoLabel}>บัญชีรับเงิน: </Text>
          <Text style={styles.userInfo}>{user.bankAccountName}</Text>
        </View>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfoLabel}>เลขที่บัญชี: </Text>
          <Text style={styles.userInfo}>{user.bankAccountNo}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.unpassButton}
            onPress={() => handleConfirm("ไม่ผ่าน")}
          >
            <Text style={styles.buttonText}>ไม่ผ่าน</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.passButton}
            onPress={() => handleConfirm("ผ่าน")}
          >
            <Text style={styles.buttonText}>ผ่าน</Text>
          </TouchableOpacity>
        </View>

        {/* Modal for confirmation */}
        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>
                {`คุณยืนยันที่จะให้ user คนนี้ ${result}?`}
              </Text>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={sendResultToBackend} // Send the result to backend when confirmed
              >
                <Text style={styles.confirmButtonText}>ยืนยัน</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#ccc",
  },
  userInfoTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  userInfoContainer: {
    flexDirection: "row",
    marginVertical: 5,
    alignItems: "center",
  },
  userInfoLabel: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#555",
    width: 150,
    textAlign: "right",
    marginRight: 10,
  },
  userInfo: {
    fontSize: 20,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 50,
    width: "50%",
  },
  passButton: {
    padding: 15,
    backgroundColor: "green",
    borderRadius: 10,
    alignItems: "center",
    width: "40%",
  },
  unpassButton: {
    padding: 15,
    backgroundColor: "red",
    borderRadius: 10,
    alignItems: "center",
    width: "40%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  confirmButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: "center",
  },
  confirmButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
