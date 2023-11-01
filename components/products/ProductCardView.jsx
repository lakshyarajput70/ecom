import { TouchableOpacity, Text, View, Image } from "react-native";
import React from "react";
import styles from "./productCardView.style";
import {Ionicons} from '@expo/vector-icons'
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";


const ProductCardView = () => {
    const navigation = useNavigation('ProductDetails');
  return (
    <TouchableOpacity onPress={() => navigation.navigate('')}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images2/avatar.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
            <Text style={styles.title} numberOfLines={1}>Product mobule</Text>
            <Text style={styles.supplier} numberOfLines={1}>Product</Text>
            <Text style={styles.price}>$520</Text>
        </View>
        <TouchableOpacity style={styles.addbtn}>
        {/* <Ionicons name="add-circle" size={35} color={COLORS.primary}/> */}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
