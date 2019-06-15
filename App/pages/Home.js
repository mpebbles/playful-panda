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

const goToPlaceHolder = () => {
  Actions.placeHolder();
};

const goToDownloads = () => {
  Actions.downloads();
};

//const Home = () => {
class Home extends React.Component {
  componentWillMount() {
    const path = RNFS.DocumentDirectoryPath;
    RNFS.readDir(path)
      .then(res => {
        const lessonFiles = res.filter(x => x.name.startsWith("LESSON_"));
        alert(lessonFiles.length);
      })
      .catch(err => {
        alert(err.message);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title={`Create file`}
          onPress={() => {
            const path = RNFS.DocumentDirectoryPath + "/LESSON_1";

            // write the file
            RNFS.writeFile(path, "Lorem ipsum dolor sit amet", "utf8")
              .then(success => {
                alert("FILE WRITTEN!");
              })
              .catch(err => {
                alert(err.message);
              });
          }}
        />
        <Button title={`Add`} onPress={() => this.props.addLesson("test")} />
        <Button title={`GOTO Downloads`} onPress={goToDownloads} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={this.props.lessons.jsonFiles}
          extraData={this.props}
          renderItem={({ item }) => (
            <Text style={styles.item} key={item} onPress={goToPlaceHolder}>
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
