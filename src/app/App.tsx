import React from 'react';
import {WrapperApp} from "./App.styled";
import Main from "../features/main/Main";
import Header from "../features/header/Header";
import Page from "../features/pages/page/Page";


function App() {

  return (
    <WrapperApp>
      <Main>
        <Header/>
        <Page/>
      </Main>
    </WrapperApp>
  );
}

export default App;
