import React from 'react';
import {SafeAreaView , Text, StyleSheet,FlatList , ScrollView,Image, Dimensions} from 'react-native';
import news_data from './news_data.json';
import NewsCard from './components/NewsCard';
import NewsBanner_Data from './news_banner_data.json';

const App = () => {
  const renderNews = ({item}) => <NewsCard news={item} />
  return(
    <SafeAreaView style={styles.container}>  
        <Text style={styles.title}>News</Text>
        <FlatList 
          ListHeaderComponent={()=>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            NewsBanner_Data.map(bannernews => (
            <Image
             source={{uri : bannernews.imageUrl}}
             style={styles.bannerimage}
             />
             ))
          }
        </ScrollView>}
          data={news_data}
          renderItem={renderNews}
        />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#eceff1',
    flex:1,
  },
  bannerimage:{
    height:Dimensions.get('window').height /5,
    width:Dimensions.get('window').width /2,
  },
  title:{
    fontSize:50,
    fontWeight:'bold',
    color:'black'

  }
})

export default App;
