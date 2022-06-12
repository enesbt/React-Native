import React from 'react';
import { View,Image,Text } from 'react-native';

import styles from './ProductCardStyle';

const ProductCard = ({product}) => { 
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:product.imgURL}}/>
            <View style={styles.cardbody}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.text}>{product.inStock === true ? product.price: <Text style={styles.stok}>Stokta yok</Text>}</Text>
            </View>
        </View>
    );
}
export default ProductCard;