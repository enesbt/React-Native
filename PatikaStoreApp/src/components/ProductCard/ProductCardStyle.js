import { StyleSheet,Dimensions } from 'react-native';

export default StyleSheet.create({
    container:{
        backgroundColor:'#dddddd',
        margin:10,
        borderRadius:10,
        flex:1,
        borderRadius:10,

    },
    cardbody:{
        padding:10,
    },
    image:{
        height: Dimensions.get('window').height/4,
        resizeMode: 'contain',
        borderRadius:10,
        margin:5,
        marginTop:10,
    },
    title:{
        color:'black',
        fontWeight:'bold',
        fontSize:20,
    },
    text:{},
    stok:{
        color:'red',
        fontSize:15
    }
});