import { StyleSheet } from "react-native";
import color from "../../colors/colors";

const styles = StyleSheet.create ({
    input: {
        borderWidth: 2,
        borderRadius: 5,
        width: 315,
        height: 41,
        color: color.textColor,
        backgroundColor: color.inputColor,
        opacity: 0.6,
        marginBottom: 30,
        marginTop:6,
        paddingLeft:15,
        
      },

      button: {
        backgroundColor: color.inputColor,
        height: 49, // Aumenta a altura do botão
        width: 311, // Aumenta a largura do botão
        borderRadius: 10, // Ajusta o arredondamento dos cantos
        justifyContent:'center',
        alignItems:'center',
      },

      buttonText: {
        color: color.tittleColor,
        fontSize: 16, // Aumenta o tamanho do texto
        fontWeight: 'bold',
      },

})

export default styles;