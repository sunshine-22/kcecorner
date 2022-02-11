import React,{useState,useEffect,Component} from "react"
import { StyleSheet, Text, View,KeyboardAvoidingView,TouchableWithoutFeedback,ScrollView,Image,Keyboard,TextInput,Button,BackHandler,Alert,ActivityIndicator } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { NavigationContainer} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const Register =() =>{
    const [name,username]=useState(null);
    const [email,mail]=useState(null);
    const [number,mobile]=useState(null);
    const [pasword,pswd]=useState(null);
    const [data,setdata]=useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const handleClick= ()=>{
        setIsLoading(!isLoading);
        if(name ==="" || email ==="" ||number===""||pasword===""){
            Alert.alert(
                "Alert",
                "Please enter all the required fields",
                [
                  {text: "Ok",
                   
                    style: "cancel",
                  },
                ],
                
              );
              
        }
        fetch('https://kcecorner.pythonanywhere.com/api/register/', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "name":name,
            "email":email,
            "mobile":number,
            "password":pasword,
            "is_active":false
          })
          
        }).then((response)=>response.json())
          .then((responseData)=>{
              console.log("inside response json");
              console.log(responseData)
              setdata(responseData.message);
              setIsLoading(false);
          }).done();

        };
    const clearInput = () => username("");
    return(
        <ScrollView style={{flex:1}}>
            <View style={{alignItems:"center"}}>
                <Image source={require("./images/registration.jpg")} style={{height:350,width:350}} />
            </View>
            <View style={{alignItems:"center"}}>
                <TextInput placeholder="Fullname (Required)" style={{height:45,borderColor:"grey",borderRadius:10,borderWidth:1,padding:10,margin:10,width:350}} onChangeText={username}></TextInput>
                <TextInput placeholder="E-mail (Required)" style={{height:45,borderColor:"grey",borderRadius:10,borderWidth:1,padding:10,margin:10,width:350}} onChangeText={mail}></TextInput>
                <TextInput placeholder="Mobile (Required)" style={{height:45,borderColor:"grey",borderRadius:10,borderWidth:1,padding:10,margin:10,width:350}} onChangeText={mobile} keyboardType={"numeric"}></TextInput>
                <TextInput placeholder="Password (Required)" style={{height:45,borderColor:"grey",borderRadius:10,borderWidth:1,padding:10,margin:10,width:350}} onChangeText={pswd}></TextInput>
            </View>
            <View style={{width:340,marginLeft:30,borderRadius:20}}>
                {isLoading && <ActivityIndicator size="large" color="red" />}
                <Button title="Create New Account" onPress={()=>{handleClick();clearInput();}}></Button>
            </View>
            <View style={{alignItems:"center"}}>
                <Text style={{color:"red"}}>{data}</Text>
            </View>
            <View style={{alignItems:"center",margin:10}}>
                <Text style={{color:"black",fontSize:15}}>By Creating an account, you accept KceCorner's</Text>
                <Text style={{fontWeight:"bold",fontSize:15,color:"blue",margin:12}} onPress={()=>{Linking.openURL('http://47.89.33.217/Privacypolicy/InstaBox/PrivacyPolicy.html')}}>Privacy policy</Text>
            </View>
        </ScrollView>
    );
};


export default Register;