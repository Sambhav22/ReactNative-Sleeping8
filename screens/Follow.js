import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderTitle } from 'react-navigation-stack';
      defaultNavigationOptions:{
        title:"hi"
        headerTintColor:"#fff" }
  
        
export default class Follow extends React.Component {
  
    render(){

    const text1=this.props.navigation.getParam("text1","0")
    return (
    <View style={styles.container}>
      <Text>Second Screen</Text>
      <Text>{text1}</Text>
      
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
