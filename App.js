import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


class AnyColorButton extends Component {
   displayAlert(){
    alert('Play Sound!!')
  }
  render(){
    return(
      <Button color={this.props.color} title="Sound 1" onPress={this.displayAlert}/>
      
    )
  }

}

export default class App extends Component {
 
  render() {
    return (
      <View style={{marginTop: 20}}>
        <AnyColorButton color="red" />
          
           <View style={{marginTop: 50}}>
        <AnyColorButton color="blue" />
         
          <View style={{marginTop: 50}}>
        <AnyColorButton color="purple" />

 <View style={{marginTop: 50}}>
        <AnyColorButton color="green" />
      </View> 
      </View>
       </View> 
        </View> 
        );
  }
  
}
