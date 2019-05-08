import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

const goToPlaceHolder = () => {
  Actions.placeHolder()
}

//const Home = () => {
class Home extends React.Component {
   render() {
     return (
       <View>
       <TouchableOpacity style = {{ margin: 128 }} onPress = {goToPlaceHolder}>
          <Text>This is HOME!</Text>
       </TouchableOpacity>
       <Text> We have { this.props.lessons.current.length} lessons! </Text>
       </View>
      )
    }
}

const mapStateToProps = (state) => {
  const { lessons } = state
  return { lessons }
};

export default connect(mapStateToProps)(Home);
//export default Home
