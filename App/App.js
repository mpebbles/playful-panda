import React, { Component } from "react";
import { AppRegistry, View } from "react-native";
import Routes from "./Routes.js";
import { Provider } from "react-redux";
import { createStore } from "redux";
import lessonReducer from "./LessonReducer";

const store = createStore(lessonReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
export default App;
AppRegistry.registerComponent("App", () => App);
