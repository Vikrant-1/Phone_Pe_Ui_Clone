import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import BottomTabs from './src/route/bottomTabs';



function App(){
  useEffect(()=>{
    SplashScreen.hide();
  },[])
 
  return (
    <NavigationContainer>
      <BottomTabs/>
    </NavigationContainer>
   

  );
}



export default App;
