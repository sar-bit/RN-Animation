import React from 'react';
 import AppNavigation from './navigation/AppNavigation';
 import {RootSiblingParent} from 'react-native-root-siblings';
 import {LogBox, PermissionsAndroid} from 'react-native';


 LogBox.ignoreAllLogs();
 const App = () => {
   return (
         <RootSiblingParent>
           <AppNavigation />
         </RootSiblingParent>
   );
 };
 
 export default App;
 