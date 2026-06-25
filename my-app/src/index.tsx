import { StyleSheet,Text, View, Button ,TouchableOpacity} from "react-native";
import axios from 'axios';


const baseURl =  'https://api.adviceslip.com/advice'

const requestApi = async () =>{
    await axios.get("https://api.adviceslip.com/advice").then((response)=>{
        console.log(response.data);
        
    }); 
    
};

export const Index = () => {
    return(
        <View style={styles.container}>
            <Button style ={styles.button} title="Ver Conselho" onPress={requestApi}></Button>

        
        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  button:{
    height: 40,
    width: 200,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 16
  },
  textButton: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
    justifyContent: "center"
  }
});