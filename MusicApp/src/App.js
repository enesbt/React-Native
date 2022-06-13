import React, {useState} from "react";
import {View, FlatList, SafeAreaView ,StyleSheet } from 'react-native';
import MusicData from './music-data.json';
import SongCard from "./components/SongCard";
import SearchBar from "./components/SearchBar";

const App = () => {
  const[list,setList] = useState(MusicData)

  const renderSong = ({item}) => <SongCard song={item} />;
  const renderSeperator = () => <View style={styles.Seperator} />;

  const handlesearch = text => {
    const filteredlist = MusicData.filter(song => {
      const searcedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searcedText) > -1;
    });
    setList(filteredlist);
  };

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.Container}>
        <SearchBar onsearch={handlesearch} />
        <FlatList
          keyExtractor={item => item.id}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeperator}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});

export default App;