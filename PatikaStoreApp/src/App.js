import React from 'react';
import {View,Text ,SafeAreaView, StyleSheet,TextInput, FlatList} from 'react-native';
import product_data from './product.json';
import ProductCard from './components/ProductCard';

const App = () => {
  const render_product = ({item}) => <ProductCard product={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>PATIKASTORE</Text>
        <TextInput
          style={styles.input}
          placeholder="Ara.."
        />
        <FlatList 
          data={product_data}
          renderItem={render_product} 
          numColumns={2}
         />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex:1,
  },
  header:{
    color:'#660099',
    fontWeight:'bold',
    fontSize:30,
    margin:10,

  },
  input:{
    backgroundColor:'#dddddd',
    borderRadius:10,
    margin:10
  }

});

export default App;