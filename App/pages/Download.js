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
import * as RNFS from "react-native-fs";


const goToHome = () => {
  Actions.home();
};

class Download extends React.Component {
  render() {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={this.props.lessons.jsonFiles}
        extraData={this.props}
        renderItem={({ item }) => (
          <Text style={styles.item} key={item} onPress={goToHome}>
            {item}
          </Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
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
    height: 48,
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
)(Download);
