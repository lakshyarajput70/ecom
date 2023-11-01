
import { FlatList, Text, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/index";
import ProductCardView from "./ProductCardView";
import styles from "./productRow.style";

const ProductRow = () => {
  const products = [1, 2, 3, 4];
  return (
    <View style={{marginTop:SIZES.medium}}>
      <FlatList
        data={products}
        // renderItem={({item})=><Text>fhg</Text>}
        renderItem={({ item })=><ProductCardView/>}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
};

export default ProductRow;
