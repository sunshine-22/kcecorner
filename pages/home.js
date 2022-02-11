import React,{useState,useEffect,Component} from "react"
import { StyleSheet, Text, View,KeyboardAvoidingView,TouchableWithoutFeedback,ScrollView,Image,Keyboard,TextInput,Button,BackHandler,Alert,Linking,ActivityIndicator,TouchableOpacity } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator,StackActions} from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';


 
const Home= ({navigation}) =>{
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
    {label: 'Student', value: 'student'},
    {label: 'Faculty', value: 'faculty'}
    ]);
    const [user,username]=useState(null);
    const [password,pasword]=useState(null);
    const [data,setdata]=useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const handleClick= ()=>{
        setIsLoading(!isLoading);
        if(user ==="" || password ===""){
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
        fetch('https://kcecorner.pythonanywhere.com/api/login/', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "email":user,
            "password":password,
          })
          
        }).then((response)=>response.json())
          .then((responseData)=>{
              if(responseData.message=="success")
              {
                setIsLoading(false);
                navigation.navigate("Dashboard",{name:responseData,navigation});

            
             }
             else{
                 setdata(responseData.message);
                 setIsLoading(false);
             }

          }).done();
          

        };
    return(
        <View style={{backgroundColor:"white",flex:1}}>
            <ScrollView nestedScrollEnabled={true}>
            <View style={{alignItems:"center"}}>
                <Image style={{width:350,height:200}} source={require("./images/logo1.png")} />
                
            </View>
           
            <View style={{marginTop:15}}>
                <View style={{marginLeft:10}}>
                    <Text style={{fontSize:28,fontWeight:"bold"}}>Login</Text>
                    <Text style={{fontSize:15,fontWeight:"bold",color:"grey"}}>Please Sign-in to continue.</Text>
                 </View>
                 <DropDownPicker open={open} value={value} items={items} setOpen={setOpen} setValue={setValue} setItems={setItems} style={{width:390,height:45,margin:10}} placeholder="Select Login Type" listMode="SCROLLVIEW" />
                <TextInput placeholder="  Enter User Name" style={{height:45,borderColor:"grey",borderWidth:1,margin:15,padding:10,borderRadius:10}} onChangeText={username}></TextInput>
                
                <TextInput placeholder="  Enter Password" secureTextEntry={true} style={{height:45,borderColor:"grey",borderWidth:1,margin:15,padding:10,borderRadius:10}} onChangeText={pasword}></TextInput>
                <Text style={{marginLeft:280,fontWeight:"bold"}} onPress={()=>navigation.navigate("ResetPassword")}>Forgot Password?</Text>
            </View>
            <View style={{alignItems:"center"}}>
                <Text style={{color:"red"}}>{data}</Text>
            </View>
            <View style={{width:390,marginLeft:10,marginTop:15}}>
                {isLoading && <ActivityIndicator size="large" color="red" />}
                <Button title="Sign-In" color={"#51e607"} onPress={()=>{handleClick();}}></Button>
            </View>
            <View style={{alignItems:"center",flexDirection:"row",marginLeft:10,margin:12}}>
                <Text style={{fontWeight:"bold",fontSize:15}}>Don't have Account?</Text>
                <Text style={{fontWeight:"bold",fontSize:15,color:"blue"}} onPress={()=>navigation.navigate("Register")}> Create New</Text>
            </View>
            <View style={{alignItems:"center"}}>
                <Text style={{fontWeight:"bold",fontSize:15}}>Login With</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                <View style={{width:190,marginLeft:10,marginTop:20}}>
                    <TouchableOpacity>
                        <Button title="Google" color={"red"}></Button>
                    </TouchableOpacity>
                </View>
                <View style={{width:190,marginRight:10,marginTop:20}}>
                    <Button title="Facebook" color={"blue"}></Button>
                </View>
            </View>
            <View style={{alignItems:"center"}}>
                <Text style={{fontWeight:"bold",fontSize:15,color:"grey",margin:12}} onPress={()=>{Linking.openURL('http://47.89.33.217/Privacypolicy/InstaBox/PrivacyPolicy.html')}}>Privacy policy</Text>
            </View>
            </ScrollView>
           
        </View>
        
    );
};

export default Home;