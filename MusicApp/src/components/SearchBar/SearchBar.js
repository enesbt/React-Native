import React from "react";
import { TextInput, View } from "react-native";
import styles from './SearchBarStyle';

const SearchBar = ({onsearch}) => {

    return(
        <View style={styles.container}>
            <TextInput
                placeholder="Ara.."
                onChangeText={onsearch}
            />
        </View>

    );
}
export default SearchBar;