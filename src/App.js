import React from 'react';
import styled from 'styled-components';
import { Route } from "react-router-dom";
import { useSelector } from "react-redux"

import Start from './component/Start';
import Quiz from './component/Quiz';
import Score from './component/Score';
import Message from './component/Message';
import Ranking from './component/Ranking';

function App() {
  const name = useSelector(state => state.quiz.quiz_name);

  return (
    <Container>
      <Route path="/" exact>
        <Start name={name} />
      </Route>
      <Route path="/quiz">
        <Quiz />
      </Route>
      <Route path="/score">
        <Score name={name} />
      </Route>
      <Route path="/message">
        <Message name={name} />
      </Route>
      <Route path="/ranking">
        <Ranking name={name} />
      </Route>
    </Container>
  );
};

const Container = styled.div`
margin: 0;
padding: 0;
width: 100%;
height: 100vh;
background-color: #fefefe;
display: flex;
justify-content: center;
align-items: center;
`

export default App;
