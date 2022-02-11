import React,{useState,useEffect,Component} from "react"
import { StyleSheet, Text, View,KeyboardAvoidingView,TouchableWithoutFeedback,ScrollView,Image,Keyboard,TextInput,Button,BackHandler,Alert,TouchableOpacity,Linking } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { NavigationContainer,NavigateActions} from '@react-navigation/native';
import {createStackNavigator,StackActions} from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { roundToNearestPixel } from "react-native/Libraries/Utilities/PixelRatio";
import { Directions } from "react-native-gesture-handler";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function HomeScreen() {
  const [event,setuser]=useState(0);
  const [blog,setblog]=useState(0);
 
  var eventdisplay=[];
  var blogdisplay=[];
  
  const events=()=>{
      fetch('https://kcecorner.pythonanywhere.com/api/event/', {
          method: 'GET',
          mode: 'no-cors',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          
          
        }).then((response)=>response.json())
          .then((responseData)=>{
            setuser(responseData)
          
          }).done();
        };      
          
    events();
    const blogs=()=>{

      fetch('https://kcecorner.pythonanywhere.com/api/blog/', {
            method: 'GET',
            mode: 'no-cors',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            
            
          }).then((response)=>response.json())
            .then((responseData)=>{
              setblog(responseData)
            
            }).done();
          };
    blogs();
    
    for(let i =0; i < blog.length; i++){
      blogdisplay.push(
        <View style={{backgroundColor:'#fce1fb',width:200,height:200,margin:5,alignItems:"center"}} key={blog[i].id}>
                <Text style={{fontWeight:"bold",fontSize:15}}>{blog[i].blogtitle}</Text>
                <Text style={{fontSize:15,margin:5}} onPress={()=>{Linking.openURL(blog[i].bloglink)}}>{blog[i].aboutblog}</Text>
                
        </View>
      )
    }; 
    for(let i =0; i < event.length; i++){
      eventdisplay.push(
        <View style={{backgroundColor:"#ECFB2E",width:200,height:200,margin:5,alignItems:"center"}} key={event[i].id}>
                <Text style={{fontWeight:"bold",fontSize:15}}>{event[i].eventname}</Text>
                <Text style={{fontSize:15,margin:5}} onPress={()=>{Linking.openURL(event[i].eventlink)}}>{event[i].aboutevent}</Text>
                <Text style={{fontWeight:"bold",fontSize:12,margin:5,backgroundColor:"white"}} onPress={()=>{Linking.openURL(event[i].eventlink)}}>  Participate  </Text>
        </View>
      )
    }; 
    

    return (
      <ScrollView>
        <View style={{alignItems:"center",borderWidth:1,margin:15,backgroundColor:"white",borderColor:"white",borderRadius:10}}>
          <Text style={{fontWeight:"bold",fontSize:15,color:"grey"}}>Welcome Back!</Text>
          <Text style={{fontWeight:"bold",fontSize:20,color:"black"}}>{user}!<Image source={require("./images/user.png")} style={{width:30,height:30,marginLeft:10}} /></Text>
          
        </View>
        <View style={{margin:15,backgroundColor:"white",borderRadius:10}}>
          <Text style={{fontSize:20,fontWeight:"bold"}}> Recommendations</Text>
          <ScrollView horizontal={true}>
          <View style={{flexDirection:"row",justifyContent:"space-between",direction:"rtl"}}>
            <View style={{backgroundColor:"#D7F7F3",width:150,height:150,margin:5,alignItems:"center"}}>
              <Text style={{fontWeight:"bold",fontSize:15}}>Student Login Portal!(KCE)</Text>
              <Text style={{fontSize:15,margin:5}} onPress={()=>{Linking.openURL('http://www.karpagam.edu.in/Automation/studentOnline.do?param=login&Id=2')}}>Click! here to get your marks</Text>
              <Text style={{fontWeight:"bold",fontSize:12,margin:5,backgroundColor:"white"}} onPress={()=>{Linking.openURL('http://www.karpagam.edu.in/Automation/studentOnline.do?param=login&Id=2')}}>  Get My Marks  </Text>
            </View>
            <View style={{backgroundColor:"#D7F7F3",width:150,height:150,margin:5,alignItems:"center"}}>
              <Text style={{fontWeight:"bold",fontSize:15}}>Student Login Portal!(KIT)</Text>
              <Text style={{fontSize:15,margin:5}} onPress={()=>{Linking.openURL('http://www.karpagam.edu.in/Automation/studentOnline.do?param=login&Id=4')}}>Click! here to get your marks</Text>
              <Text style={{fontWeight:"bold",fontSize:12,margin:5,backgroundColor:"white"}} onPress={()=>{Linking.openURL('http://www.karpagam.edu.in/Automation/studentOnline.do?param=login&Id=4')}}>  Get My Marks  </Text>
            </View>
            <View style={{backgroundColor:"#D7F7F3",width:150,height:150,margin:5,alignItems:"center"}}>
              <Text style={{fontWeight:"bold",fontSize:15}}>Student Login Portal!(KAHE)</Text>
              <Text style={{fontSize:15,margin:5}} onPress={()=>{Linking.openURL('http://www.karpagam.edu.in/Automation/studentOnline.do?param=login&Id=1')}}>Click! here to get your marks</Text>
              <Text style={{fontWeight:"bold",fontSize:12,margin:5,backgroundColor:"white"}} onPress={()=>{Linking.openURL('http://www.karpagam.edu.in/Automation/studentOnline.do?param=login&Id=1')}}>  Get My Marks  </Text>
            </View>
          </View>
          </ScrollView>
        </View>
        <View style={{margin:15,backgroundColor:"white",borderRadius:10}}>
          <Text style={{fontSize:20,fontWeight:"bold"}}> Coding Communities</Text>
          <ScrollView horizontal={true}>
          <View style={{flexDirection:"row",justifyContent:"space-between",direction:"rtl"}}>
            <View style={{backgroundColor:"#9FF984",width:150,height:150,margin:5,alignItems:"center"}}>
              <Text style={{fontWeight:"bold",fontSize:15}}>HackerEarth</Text>
              <Text style={{fontSize:15,margin:5}} onPress={()=>{Linking.openURL('https://www.hackerearth.com/challenges/')}}>Master your skills with Hackerearth!</Text>
              <Image source={require("./images/hackerearth.png")} style={{width:35,height:35}}/>
              <Text style={{fontWeight:"bold",fontSize:12,margin:5,backgroundColor:"white"}} onPress={()=>{Linking.openURL('https://www.hackerearth.com/challenges/')}}>  Login  </Text>
            </View>
            <View style={{backgroundColor:"#9FF984",width:150,height:150,margin:5,alignItems:"center"}}>
              <Text style={{fontWeight:"bold",fontSize:15}}>HackerRank!</Text>
              <Text style={{fontSize:15,margin:5}} onPress={()=>{Linking.openURL('https://www.hackerrank.com/')}}>Master your skills with HackerRank!</Text>
              <Image source={require("./images/hackerrank.png")} style={{width:35,height:35}}/>
              <Text style={{fontWeight:"bold",fontSize:12,margin:5,backgroundColor:"white"}} onPress={()=>{Linking.openURL('https://www.hackerrank.com/')}}>  Login  </Text>
            </View>
            <View style={{backgroundColor:"#9FF984",width:150,height:150,margin:5,alignItems:"center"}}>
              <Text style={{fontWeight:"bold",fontSize:15}}>CodeChef</Text>
              <Text style={{fontSize:15,margin:5}} onPress={()=>{Linking.openURL('https://www.codechef.com/')}}>Master your skills with CodeChef!</Text>
              <Image source={require("./images/codechef.png")} style={{width:60,height:35}}/>
              <Text style={{fontWeight:"bold",fontSize:12,margin:5,backgroundColor:"white"}} onPress={()=>{Linking.openURL('https://www.codechef.com/')}}>  Login  </Text>
            </View>
          </View>
          </ScrollView>
        </View>

        <View style={{margin:15,backgroundColor:"white",borderRadius:10}}>
          <Text style={{fontSize:20,fontWeight:"bold"}}> Events</Text>
          <ScrollView horizontal={true}>
          <View style={{flexDirection:"row",justifyContent:"space-between",direction:"rtl"}}>
            {eventdisplay}
            
          </View>
          </ScrollView>
        </View>
        <View style={{margin:15,backgroundColor:"white",borderRadius:10}}>
          <Text style={{fontSize:20,fontWeight:"bold"}}> Blogs of Week</Text>
          <ScrollView horizontal={true}>
          <View style={{flexDirection:"row",justifyContent:"space-between",direction:"rtl"}}>
            {blogdisplay}
          </View>
          </ScrollView>
        </View>
        
      </ScrollView>
    );
  }
  
  function SettingsScreen({navigation}) {
    
    return (
      <ScrollView>
        <View style={{alignItems:"center",backgroundColor:"white"}}>
          <Image source={require("./images/user.png")} />
          <Text style={{fontSize:15,fontWeight:"bold",fontStyle:"italic"}}>{user}</Text>
          <Text style={{fontSize:15,fontWeight:"bold",color:"grey"}}>{email}</Text>
        </View>
       
        <View style={{backgroundColor:"white",margin:10,borderRadius:10,height:50}}>
          <Text style={{fontSize:15,fontWeight:"bold",margin:13}} onPress={()=>navigation.navigate("ChangePassword",{passwordemail:email})}>Change Password <Ionicons name="arrow-forward" size={18} color="black"  /></Text>
        </View>
        <View style={{backgroundColor:"white",margin:10,borderRadius:10,height:50}}>
          <Text style={{fontSize:15,fontWeight:"bold",margin:13}} onPress={()=>{Linking.openURL('http://47.89.33.217/Privacypolicy/InstaBox/PrivacyPolicy.html')}}>Terms & Privacy Policy <Ionicons name="arrow-forward" size={18} color="black"  /></Text>
        </View>
        
        <View style={{backgroundColor:"white",margin:10,borderRadius:10,height:50}}>
          <Text style={{fontSize:15,fontWeight:"bold",margin:13}} onPress={()=>navigation.navigate("Home")}>Logout <Ionicons name="arrow-forward" size={18} color="black"  /></Text>
        </View>
      </ScrollView>
    );
  }
  function Courses() {
    const Tab = createMaterialTopTabNavigator();
    return (
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Materials" component={Materials}></Tab.Screen>
        <Tab.Screen name="Videos" component={Videos}></Tab.Screen>
        <Tab.Screen name="Projects" component={Projects}></Tab.Screen>
      </Tab.Navigator>
    );
  }
  function Materials(){
    return(
      <ScrollView>
        <View style={{alignItems:"center",margin:10,backgroundColor:"white",borderRadius:10}}>
          <Text style={{margin:10,fontWeight:"bold",fontSize:15}} onPress={()=>{Linking.openURL('https://drive.google.com/folderview?id=1ADVafavdlVh6jZtYUG5CLqgV_jtG4DWQ')}}>Programming in C <Ionicons name="arrow-down-circle" size={18} color="black"  /></Text>
        </View>
        <View style={{alignItems:"center",margin:10,backgroundColor:"white",borderRadius:10}}>
          <Text style={{margin:10,fontWeight:"bold",fontSize:15}} onPress={()=>{Linking.openURL('https://drive.google.com/folderview?id=1AG0Ilftn9x2sMU0cS1NaZZNkEdwHtNHa')}}>Programming in Java <Ionicons name="arrow-down-circle" size={18} color="black"  /></Text>
        </View>
        <View style={{alignItems:"center",margin:10,backgroundColor:"white",borderRadius:10}}>
          <Text style={{margin:10,fontWeight:"bold",fontSize:15}} onPress={()=>{Linking.openURL('https://drive.google.com/folderview?id=1AHlX-XuvYY2v_tV-y1FuHFfrdFOxHEZa')}}>Programming in python <Ionicons name="arrow-down-circle" size={18} color="black"  /></Text>
        </View>
        <View style={{alignItems:"center",margin:10,backgroundColor:"white",borderRadius:10}}>
          <Text style={{margin:10,fontWeight:"bold",fontSize:15}}  onPress={()=>{Linking.openURL('https://drive.google.com/folderview?id=1ANHgl7rb5OUGY6WKTXpFi0kU5QMfgt2s')}}>Html & Css <Ionicons name="arrow-down-circle" size={18} color="black"  /></Text>
        </View>
        <View style={{alignItems:"center",margin:10,backgroundColor:"white",borderRadius:10}}>
          <Text style={{margin:10,fontWeight:"bold",fontSize:15}} onPress={()=>{Linking.openURL('https://drive.google.com/folderview?id=1AO-BDb6PMa2zG5tJQ9GUi7jW2zHGMQZE')}} >JavaScript <Ionicons name="arrow-down-circle" size={18} color="black"  /></Text>
        </View>
        <View style={{alignItems:"center",margin:10,backgroundColor:"white",borderRadius:10}}>
          <Text style={{margin:10,fontWeight:"bold",fontSize:15}} onPress={()=>{Linking.openURL('https://drive.google.com/folderview?id=1AQwMYSl6wJQ-HjRMgrV_WGDz9WHoHSti')}}>An Introduction in Ethical Hacking <Ionicons name="arrow-down-circle" size={18} color="black"  /></Text>
        </View>
        <View style={{alignItems:"center",margin:10,backgroundColor:"white",borderRadius:10}}>
          <Text style={{margin:10,fontWeight:"bold",fontSize:15}}  onPress={()=>{Linking.openURL('https://drive.google.com/folderview?id=1ARIT7Ay2jd8Z9Ze7TpOqUh3IBqhoi-Ob')}}>Machine Learning <Ionicons name="arrow-down-circle" size={18} color="black"  /></Text>
        </View>
        <View style={{alignItems:"center",margin:10,backgroundColor:"white",borderRadius:10}}>
          <Text style={{margin:10,fontWeight:"bold",fontSize:15}} onPress={()=>{Linking.openURL('https://drive.google.com/folderview?id=1ATT09hbK83hy55TtEFfJ7GRXlXyD_ltv')}}>Artificial Intelligence <Ionicons name="arrow-down-circle" size={18} color="black"  /></Text>
        </View>
        <View style={{alignItems:"center",margin:10,backgroundColor:"white",borderRadius:10}}>
          <Text style={{margin:10,fontWeight:"bold",fontSize:15}} onPress={()=>{Linking.openURL('https://drive.google.com/folderview?id=1AZGaKYHohfDigvza9_GiRZS8DY-Il9dW')}}>Data Science <Ionicons name="arrow-down-circle" size={18} color="black"  /></Text>
        </View>
        <View style={{alignItems:"center",margin:10,backgroundColor:"white",borderRadius:10}}>
          <Text style={{margin:10,fontWeight:"bold",fontSize:15}} onPress={()=>{Linking.openURL('https://drive.google.com/folderview?id=1A_Mx8cEgKSiTmRY8kT0wKhC6zZTpQ6Vy')}} >Data Science using python <Ionicons name="arrow-down-circle" size={18} color="black"  /></Text>
        </View>
      </ScrollView>
    );
  }
  function Projects(){
    return(
      <View style={{alignItems:"center",margin:50}}>
          <Text style={{fontSize:15,fontWeight:"bold",color:"orange"}}>Comming Soon!</Text>
      </View>
    );
  }
  function Videos(){
    return(
      <ScrollView>
        <View style={{alignItems:"center",margin:10,backgroundColor:"white",borderRadius:10}}>
          <Text style={{margin:10,fontWeight:"bold",fontSize:15}} onPress={()=>{Linking.openURL('https://youtu.be/8PopR3x-VMY')}}>Programming in C <Ionicons name="arrow-forward" size={18} color="black"  /></Text>
        </View>
        <View style={{alignItems:"center",margin:10,backgroundColor:"white",borderRadius:10}}>
          <Text style={{margin:10,fontWeight:"bold",fontSize:15}} onPress={()=>{Linking.openURL('https://youtu.be/eIrMbAQSU34')}}>Programming in Java <Ionicons name="arrow-forward" size={18} color="black"  /></Text>
        </View>
        <View style={{alignItems:"center",margin:10,backgroundColor:"white",borderRadius:10}}>
          <Text style={{margin:10,fontWeight:"bold",fontSize:15}} onPress={()=>{Linking.openURL('https://youtu.be/_uQrJ0TkZlc')}}>Programming in python <Ionicons name="arrow-forward" size={18} color="black"  /></Text>
        </View>
        <View style={{alignItems:"center",margin:10,backgroundColor:"white",borderRadius:10}}>
          <Text style={{margin:10,fontWeight:"bold",fontSize:15}} onPress={()=>{Linking.openURL('https://youtu.be/qz0aGYrrlhU')}}>Html & Css <Ionicons name="arrow-forward" size={18} color="black"  /></Text>
        </View>
        <View style={{alignItems:"center",margin:10,backgroundColor:"white",borderRadius:10}}>
          <Text style={{margin:10,fontWeight:"bold",fontSize:15}} onPress={()=>{Linking.openURL('https://youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP')}}>JavaScript <Ionicons name="arrow-forward" size={18} color="black"  /></Text>
        </View>
        <View style={{alignItems:"center",margin:10,backgroundColor:"white",borderRadius:10}}>
          <Text style={{margin:10,fontWeight:"bold",fontSize:15}} onPress={()=>{Linking.openURL('https://youtu.be/dz7Ntp7KQGA')}}>An Introduction in Ethical Hacking <Ionicons name="arrow-forward" size={18} color="black"  /></Text>
        </View>
        <View style={{alignItems:"center",margin:10,backgroundColor:"white",borderRadius:10}}>
          <Text style={{margin:10,fontWeight:"bold",fontSize:15}} onPress={()=>{Linking.openURL('https://youtu.be/GwIo3gDZCVQ')}}>Machine Learning <Ionicons name="arrow-forward" size={18} color="black"  /></Text>
        </View>
        <View style={{alignItems:"center",margin:10,backgroundColor:"white",borderRadius:10}}>
          <Text style={{margin:10,fontWeight:"bold",fontSize:15}} onPress={()=>{Linking.openURL('https://youtu.be/JMUxmLyrhSk')}}>Artificial Intelligence <Ionicons name="arrow-forward" size={18} color="black"  /></Text>
        </View>
        <View style={{alignItems:"center",margin:10,backgroundColor:"white",borderRadius:10}}>
          <Text style={{margin:10,fontWeight:"bold",fontSize:15}} onPress={()=>{Linking.openURL('https://youtu.be/-ETQ97mXXF0')}}>Data Science <Ionicons name="arrow-forward" size={18} color="black"  /></Text>
        </View>
        <View style={{alignItems:"center",margin:10,backgroundColor:"white",borderRadius:10}}>
          <Text style={{margin:10,fontWeight:"bold",fontSize:15}} onPress={()=>{Linking.openURL('https://youtu.be/-6RqxhNO2yY')}}>Data Science using python <Ionicons name="arrow-forward" size={18} color="black"  /></Text>
        </View>
      </ScrollView>
    );
  }
  function Jobs() {
    const Tab = createMaterialTopTabNavigator();
    return (
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Internships" component={Internships}></Tab.Screen>
        <Tab.Screen name="Work" component={Work}></Tab.Screen>
      </Tab.Navigator>
    );
  }
  function Internships() {
    const [intern,setintern]=useState(0);
    var interndisplay=[];
    const internship=()=>{
      fetch('https://kcecorner.pythonanywhere.com/api/internship/', {
          method: 'GET',
          mode: 'no-cors',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          
          
        }).then((response)=>response.json())
          .then((responseData)=>{
            setintern(responseData)
          
          }).done();
        };  
    internship();
    for(let i =0; i < intern.length; i++){
      interndisplay.push(
        <View style={{backgroundColor:"white",margin:10,borderRadius:10}} key={intern[i].id}>
          <View style={{alignItems:"center"}}>
            <Text style={{fontWeight:"bold"}}>Name of the Company:{intern[i].company}</Text>
          </View>
          <View style={{margin:5}}>
            <Text style={{fontSize:15}}>{intern[i].about}</Text>
          </View>
          <View style={{flexDirection:"row",justifyContent:"space-between",margin:5}}>
            <Text style={{fontWeight:"bold"}}>Mobile: {intern[i].mobile}</Text>
            <Text style={{fontWeight:"bold"}}>Address: {intern[i].address}</Text>
          </View>
          <View style={{margin:5}}>
            <Text style={{fontSize:15}} onPress={()=>{Linking.openURL(intern[i].site)}}>Visit Us :{intern[i].site}</Text>
          </View>
        </View>
      )
    };  
    return (
      <ScrollView>
        {interndisplay}
      </ScrollView>
    );
  }
  function Work() {
    const [works,setworks]=useState(0);
    var workdisplay=[];
    const workings=()=>{
      fetch('https://kcecorner.pythonanywhere.com/api/jobs/', {
          method: 'GET',
          mode: 'no-cors',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          
          
        }).then((response)=>response.json())
          .then((responseData)=>{
            setworks(responseData)
          
          }).done();
        }; 
        workings();
        for(let i =0; i < works.length; i++){
          workdisplay.push(
            <View style={{backgroundColor:"white",margin:10,borderRadius:10}} key={works[i].id}>
          <View style={{alignItems:"center"}}>
            <Text style={{fontWeight:"bold"}}>Name of the Company: {works[i].company}</Text>
          </View>
          <View style={{margin:5}}>
            <Text style={{fontSize:15}}>{works[i].about}</Text>
          </View>
          <View style={{flexDirection:"row",justifyContent:"space-between",margin:5}}>
            <Text style={{fontWeight:"bold"}}>Role: {works[i].role}</Text>
            <Text style={{fontWeight:"bold"}}>Experience: {works[i].experience}</Text>
          </View>
          <View style={{flexDirection:"row",justifyContent:"space-between",margin:5}}>
            <Text style={{fontWeight:"bold"}}>Skills: {works[i].skills}</Text>
            <Text style={{fontWeight:"bold"}}>Location: {works[i].location}</Text>
          </View>
          <View style={{flexDirection:"row",justifyContent:"space-between",margin:5}}>
            <Text style={{fontWeight:"bold"}}>Mobile: {works[i].mobile}</Text>
            <Text style={{fontWeight:"bold"}}>Email: {works[i].email}</Text>
          </View>
          <View style={{margin:5}}>
            <Text style={{fontSize:15}} onPress={()=>{Linking.openURL(works[i].site)}}>Visit Us: {works[i].site}</Text>
          </View>
        </View>
            
          )
        };   
    
    return (
      <ScrollView>
        {workdisplay}
      </ScrollView>
    );
  }





const Dashboard =(name) =>{
    const Tab = createBottomTabNavigator();
   
    global.user=String(name.route.params.name.name);
    global.email=String(name.route.params.name.email);
    return(
     <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarLabel: 'Home',tabBarIcon: ({ color, size }) => (<Ionicons name="home" color={color} size={size} />),}} />
      <Tab.Screen name="Courses" component={Courses} options={{tabBarLabel:'Courses',tabBarIcon:({color,size})=>(<Ionicons name="book" color={color} size={size} />),}} />
      <Tab.Screen name="Jobs" component={Jobs} options={{tabBarLabel:'Jobs',tabBarIcon:({color,size})=>(<Ionicons name="briefcase" color={color} size={size} />),}} />
      <Tab.Screen name="Settings" component={SettingsScreen}options={{tabBarLabel:'Settings',tabBarIcon:({color,size})=>(<Ionicons name="cog" color={color} size={size} />),}} />
    </Tab.Navigator>

    );
};


export default Dashboard;