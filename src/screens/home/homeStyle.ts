import { StyleSheet } from "react-native";
import color from "../../colors/colors";

const styles = StyleSheet.create ({
    safeArea: {
        flex: 1,
      },
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center", 
        backgroundColor: color.backgroundColor,
      },
      backButton:{
        position: 'absolute', 
        top: 75, 
        left: 20, 
        height:40, 
        width:40, 
        backgroundColor: color.inputColor, 
        justifyContent:'center', 
        alignItems:"center", 
        borderRadius:20,
      },

      tittle: {
        color: color.tittleColor, 
        marginBottom:60,
        marginTop:-150,
        fontSize:25,
      },

      genderChoose: {
         backgroundColor: color.inputColor,
         borderWidth:1, 
         borderRadius:25, 
         gap:20, 
         padding:20 ,
         width:236, 
         height:143, 
         justifyContent:'center', 
         alignItems:"flex-start",
      },

})

export default styles;