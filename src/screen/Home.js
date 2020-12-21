
import React,{useState} from 'react';
  import database from '@react-native-firebase/database'
import { LoginManager,AccessToken } from "react-native-fbsdk";
import auth from '@react-native-firebase/auth';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  Text,
  Button,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



function Home(props){
  // const[email,setEmail] = useState("")
  // const[password,setPassword] = useState("")
  // const save_data=()=>{
  //   let user ={
  //     email,
  //     password
  //   }
  //   database().ref('/').child('user').push(user)
  //   setEmail("")
  //   setPassword("")
  // }

  const facebook_login = async ()=>{
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

  // Sign-in the user with the credential
 auth().signInWithCredential(facebookCredential)
 .then ((user)=>{
console.log('user==>',user)
 } )
 .catch((err)=>{
   console.log('error=>',err)
 })
  }
  return(
<View>
    <Text>Home Screen</Text>
    {/* <Button onPress={()=>props.navigation.navigate("Imagepicker")} title="open picker" />
    <View>
      <TextInput value={email} onChangeText={(text)=>setEmail(text)} placeholder='Email'/>
    </View>
    <View>
      <TextInput secureTextEntry={true} value={password} onChangeText={(text)=>setPassword(text)} placeholder='password'/>
    </View> */}
    <Button onPress={facebook_login} title='facebook login'/>
</View>
)
}


// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

export default Home;
