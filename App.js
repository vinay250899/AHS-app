import React from 'react';
import { View, Text } from 'react-native';

class App extends React.Component {

   constructor(props){
      super(props);
   
  this.state = {
     description : '',
     data: []
  }
}
  componentDidMount = () => {
     fetch('https://api.thingspeak.com/channels/746557/feeds.json?api_key=1TCK739HAMETXJDG&results=2', {
        method: 'GET'
     })
     .then((response) => response.json())
     .then((responseJson) => {
        console.log(responseJson);
        this.setState({
           data: responseJson
        })
     })
     .catch((error) => {
        console.error(error);
     });
  }
  render() {
     const {data} = this.state
     return (
            <View>
               <Text>{this.state.data.id}</Text>
            <Text>Hello</Text>
            {data.map(data1 => <Text>{data1.channel.id}</Text>)}
            </View>
       
       
     );
  }
}

export default App