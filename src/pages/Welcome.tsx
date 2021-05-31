import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import colors from "../../styles/colors";
import watering from "../../assets/watering.png";
import { Feather } from "@expo/vector-icons";
import fonts from "../../styles/fonts";
import { useNavigation } from "@react-navigation/core";
export function Welcome() {
  const navigation = useNavigation();
  function handlerStart() {
    navigation.navigate("User");
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Gerencie {"\n"}
        suas plantas de {"\n"}
        forma fácil
      </Text>
      <Image source={watering} style={styles.image} resizeMode="contain" />
      <Text style={styles.subTitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handlerStart}
      >
        <Feather name="chevron-right" style={styles.buttonIcon} />
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  image: {
    height: Dimensions.get("window").width * 0.7,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 34,
  },
  subTitle: {
    textAlign: "center",
    fontSize: 16,
    paddingHorizontal: 14,
    color: colors.heading,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },
  buttonText: {
    color: colors.white,
    fontSize: 24,
  },
  buttonIcon: {
    fontSize: 32,
    color: colors.white,
  },
});
