import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button,
  FlatList
} from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addLesson } from "../LessonActions";

const goToPlaceHolder = () => {
  Actions.placeHolder();
};

//const Home = () => {
class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title={`Add`} onPress={() => this.props.addLesson("test")} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.props.lessons.jsonFiles}
          extraData={this.props}
          renderItem={({ item }) => (
            <Text style={styles.item} key={item}>
              {item}
            </Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    textAlign: "center"
  }
});

const mapStateToProps = state => {
  const { lessons } = state;
  return { lessons };
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addLesson
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

//<TouchableOpacity style={{ margin: 128 }} onPress={goToPlaceHolder}>
//  <Text>This is HOME!</Text>
//</TouchableOpacity>

//{this.props.lessons.jsonFiles.map((fileName, index) => (
//  <Text key={fileName}>{fileName}</Text>
//<Button
//  key={fileName}
//  title={`Text ${fileName}`}
//  onPress={() => {} } //this.props.screenProps.addFriend(index)}
///>
//))}
//<FlatList
//  showsVerticalScrollIndicator={false}
//  data={this.props.lessons.jsonFiles}
//  renderItem={({ item }) => (
//    <Text style={styles.item} key={item}>
//      {item}
//    </Text>
//  )}
///>
