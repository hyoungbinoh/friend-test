
import React from 'react';
import styled from 'styled-components';
import {Route} from "react-router-dom";

import Start from './Start';
import Quiz from './Quiz';
import Score from './Score';
import Message from './Message';
import Ranking from './Ranking';

function App() {
  const[name, setName] = React.useState("오형빈")
  return (
    <Container>
      <Route path="/" exact>
        <Start name={name}/>
      </Route>
      <Route path="/quiz">
        <Quiz/>
      </Route>
      <Route path="/score">
        <Score name={name}/>
      </Route>
      <Route path="/message">
        <Message name={name}/>
      </Route>
      <Route path="/ranking">
        <Ranking name={name}/>
      </Route>
    </Container>
  );
};

const Container = styled.div`
margin: 0;
padding: 0;
width: 100%;
height: 100vh;
background-color: #eee;
display: flex;
justify-content: center;
align-items: center;
`

export default App;
