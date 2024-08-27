import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Button,
  Linking,
  View,
  Text,
  Image,
  ScrollView,
  Alert,
  FlatList,
} from "react-native";
import { PageStyle } from "../Style/PageStyle";
import { useState } from "react";
import Sidebar from "../components/SideBar";
import Dashboard from "../components/Dashboard";
import Title from "./Title";
import Login from "./Login";
import Report from "./Report";

export default function App() {
  return (
    <ScrollView>
        <View style={PageStyle.main}>
            <Sidebar/>
        </View>
    </ScrollView>
  );
}
