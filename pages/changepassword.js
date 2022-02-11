import React,{useState,useEffect,Component} from "react"
import { StyleSheet, Text, View,KeyboardAvoidingView,TouchableWithoutFeedback,ScrollView,Image,Keyboard,TextInput,Button,BackHandler,Alert,ActivityIndicator } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { NavigationContainer} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const ChangePassword =(passwordemail) =>{
    global.user=String(passwordemail.route.params.passwordemail)

    const [message, setmessage] = useState(null);
    const [oldpassword,setoldpassword]=useState(null)
    const [newpassword,setnewpassword]=useState(null);
    const [npassword2,setnpassword2]=useState(null);
    const [isLoading, setIsLoading] = useState(false);
    console.log(oldpassword,newpassword);
    const handleClick= ()=>{
        setIsLoading(!isLoading);
        if(oldpassword ==="" || newpassword ===""||npassword2===""){
            Alert.alert(
                "Alert",
                "Please enter all the required fields",
                [
                  {text: "Ok",
                   
                    style: "cancel",
                  },
                ],
                
              );
              setIsLoading(false);
        }
        
        fetch('https://kcecorner.pythonanywhere.com/api/changepassword/', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "email":email, 
            "password":oldpassword,
            "newpassword":newpassword,
          })
          
        }).then((response)=>response.json())
          .then((responseData)=>{
              console.log(responseData.message);
              setmessage(responseData.message);
              setoldpassword(null);
              setnpassword2(null);
              setnewpassword(null);
              setIsLoading(false);

          }).done();
          

        };
    return(
        
        <View style={{flex:1,backgroundColor:"white"}}>
            <ScrollView>
            <View style={{alignItems:"center"}}>
                <Image source={require("./images/changepassword.png")} style={{width:350,height:350}} />
            </View>
            <View>
                <Text style={{fontWeight:"bold",fontSize:20,margin:10}}>Change Password</Text>
                
            </View>
            <View>
                <TextInput  style={{height:45,margin:15,borderWidth:1,borderColor:"grey",borderRadius:10,padding:10}} placeholder=" Enter Current Password" onChangeText={setoldpassword}></TextInput>
            </View>
            <View>
                <TextInput  style={{height:45,margin:15,borderWidth:1,borderColor:"grey",borderRadius:10,padding:10}} placeholder=" Enter New Password" onChangeText={setnewpassword}></TextInput>
            </View>
            <View>
                <TextInput  style={{height:45,margin:15,borderWidth:1,borderColor:"grey",borderRadius:10,padding:10}} placeholder=" Retype Password" onChange={setnpassword2}></TextInput>
            </View>
            <View style={{width:370,marginLeft:15,borderRadius:10}}>
                {isLoading && <ActivityIndicator size="large" color="red" />}
                <Button title="Change Password" color={"red"} onPress={()=>{handleClick();}}></Button>
            </View>
            <View style={{alignItems:"center",margin:10}}>
            <Text style={{fontSize:15,fontWeight:"bold"}}>{message}</Text>
            </View>
            </ScrollView>
        </View>
        
    );
};


export default ChangePassword;