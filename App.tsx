import React, {useState} from 'react';

import {View, Text, StatusBar} from 'react-native';

import Top from './src/components/Top';
import Bottom from './src/components/Bottom';

import styled from 'styled-components/native';
import Navigation from './src/Navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
`;



const App = () => {

  

  return (
    // <Container>
    //   <StatusBar />
    //   <Top  />
    //   <Bottom bgColor={'#edb183'} />
    // </Container>
    <NavigationContainer>
    <Navigation />

    </NavigationContainer>
  );
};

export default App;
