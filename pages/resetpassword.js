import React,{useState,useEffect,Component} from "react"
import { StyleSheet, Text, View,KeyboardAvoidingView,TouchableWithoutFeedback,ScrollView,Image,Keyboard,TextInput,Button,BackHandler,Alert,ActivityIndicator } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { NavigationContainer} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const ResetPassword =() =>{
    const [email,setemail]=useState(null);
    const [data,setdata]=useState(null);
    console.log(email);
    const [isLoading, setIsLoading] = useState(false);
    const handleClick= ()=>{
        setIsLoading(!isLoading);
        fetch('https://kcecorner.pythonanywhere.com/api/reset/', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "email":email,
            
          })
          
        }).then((response)=>response.json())
          .then((responseData)=>{
              setdata(responseData.message);
              setIsLoading(false);
          }).done();

        };
    return(
        
        <View style={{flex:1,backgroundColor:"white"}}>
            <ScrollView>
            <View style={{alignItems:"center"}}>
                <Image source={require("./images/forgot.png")} style={{width:350,height:420}} />
            </View>
            <View>
                <Text style={{fontWeight:"bold",fontSize:20,margin:10}}>Forgot Password</Text>
                <Text style={{fontSize:13,fontWeight:"bold",marginLeft:15,color:"grey"}}>Please Enter the Registered E-mail to Reset Password</Text>
            </View>
            <View>
                <TextInput  style={{height:45,margin:15,borderWidth:1,borderColor:"grey",borderRadius:10,padding:10}} placeholder=" Enter E-mail" onChangeText={setemail}></TextInput>
            </View>
            <View style={{width:370,marginLeft:15,borderRadius:10}}>
                {isLoading && <ActivityIndicator size="large" color="red" />}
                <Button title="Recover Password" color={"green"} onPress={()=>{handleClick();}}></Button>
            </View>
            <View style={{alignItems:"center"}}>
                <Text style={{fontSize:15,fontWeight:"bold",color:"red"}}>{data}</Text>
            </View>
            </ScrollView>
        </View>
        
    );
};


export default ResetPassword;