import React, { useState } from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';
 
const ResterScreen = () => {
const[Name,setName] = useState ("hdusfrr")
const[Email,setEmail] = useState ("nice8eff@yopmail.com") 
const[password,setpassword] = useState ("12345678")
const[phone_number,setphone_number] = useState ("1234567881")
 
let device_token = DeviceInfo.getDeviceId();
let device_id	 = DeviceInfo.getDeviceType();

const ResterApi = () => {

fetch('https://pixelt.in/shreemobile/public/api/register', {
method: 'POST',
headers: {
Accept: 'application/json',
'Content-Type': 'application/json',
},
body: JSON.stringify({
name :Name,   
email: Email,
password: password,
phone_number: phone_number,
device_token:  device_token,
device_id: device_id

}),
})
 
.then(response => response.json())
.then(json => {
console.log("-------",json);
   
})
.catch(error => {
  console.error(error);
});   

}

  return (
<View style={{ flex: 1,}}>

<View style={{marginTop:20,}}> 
 <TextInput style={{ backgroundColor: '#00B4C7', fontSize: 22,borderRadius:10,}}
placeholder='Name'
placeholderTextColor={'white'}
onChangeText={(test) => setEmail(test)}
value={Name}

/> 
</View>
 <View style={{marginTop:20,}}> 
 <TextInput style={{ backgroundColor: '#00B4C7', fontSize: 22,borderRadius:10,}}
placeholder='Email'
placeholderTextColor={'white'}
onChangeText={(test) => setEmail(test)}
value={Email}

/>

</View>

<View style={{position:'relative'}}> 

<TextInput style={{ backgroundColor: '#00B4C7', fontSize: 22, marginVertical: 20,borderRadius:10,}}
placeholder='password'
placeholderTextColor={'white'} 
onChangeText={(test) => setpassword(test)}
value={password}
 
/>

<Image style={{width:30,height:30,position:'absolute',right:20,top:30,tintColor:'white'}} source={require('../assets/Image/eye.png')}/>
</View>

 <View style={{position:'relative'}}> 

<TextInput style={{ backgroundColor: '#00B4C7', fontSize: 22,borderRadius:10, }}
placeholder='confirm_password'
placeholderTextColor={'white'}
onChangeText={(test) => setphone_number(test)}
value={phone_number}
 
/>
 <Image style={{width:30,height:30,position:'absolute',right:20,top:15,tintColor:'white'}} source={require('../assets/Image/eye.png')}/>
</View>  

<TouchableOpacity onPress={() => {ResterApi()}} style={{ marginTop: 40, }}>
<Text style={{ backgroundColor: '#62D5CC', fontSize: 22, color: 'white', textAlign: 'center', padding: 15, borderRadius: 30, }}>OTPScreen</Text>
</TouchableOpacity> 


</View>
  );
};

export default ResterScreen; 

