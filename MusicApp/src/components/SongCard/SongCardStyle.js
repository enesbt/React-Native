import { StyleSheet } from "react-native";

export default  StyleSheet.create({
    container:{
        padding:10,
        flexDirection:'row',
    },
    image:{
        width:100,
        height:100,
        borderRadius:50,

    },
    innercontainer:{
        padding:10,
        flex:1,
        justifyContent:'center',

    },
    title:{
        fontWeight:'bold',
        fontSize:25
    },
    infocontainer:{
        flexDirection:'row',
        flex:1,
        alignItems:'center'
    },
    artist:{

    },
    year:{
        marginLeft:10,
        color:'gray',
        fontWeight:'bold',
        fontSize:12

    },
    soldoutcontainer:{
        borderWidth:1,
        borderColor:'red',
        padding:5,
        borderRadius:5,
    },
    soldouttext:{
        color:'red'
    },
    contentcontainer:{
        flexDirection:'row',
              
    }


})