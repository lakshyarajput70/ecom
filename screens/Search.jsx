import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import styles from "./search.style";
import { TouchableOpacity } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import { COLORS, SIZES } from "../constants/index";

const Search = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name="camera-outline" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onPressIn={() => {}}
            placeholder="What are you looking for ?"
          />
        </View>

        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Feather name="search" size={SIZES.xLarge} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
