import React from 'react';
import { StyleSheet, Text, View,Button,TextInput} from 'react-native';

export default class Home extends React.Component {





  render(){
    return (
    <View style={styles.container}>
      <TextInput  
                    style={{height: 40,backgroundColor: 'azure',width: '80%', fontSize: 20}}  
                    placeholder="Enter Your Text"  
                    onChangeText={(text) => this.setState({text})} /> 
      <br />
      <Button title="Submit" onPress={()=>{
          this.props.navigation.navigate("Follow",{
              text1:this.state.text
          })
      }}/>
      
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
