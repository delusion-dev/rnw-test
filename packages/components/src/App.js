import React from 'react';
import {
  View,
} from 'react-native';

import { NativeRouter } from "react-router-native";
import { Routes, Route } from "react-router-dom";
import { Home } from './screens/Home';
import { HelloWorld } from './screens/HelloWorld';

const App = () => {
  return (
    <View>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/hello" element={<HelloWorld />}></Route>
        </Routes>
      </NativeRouter>
    </View>
  );
}

export default App;
