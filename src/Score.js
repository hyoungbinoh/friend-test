import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom"
import {useSelector} from "react-redux";

const Score = (props) => {
    const history = useHistory()
    const quiz_list = useSelector(state => state.quiz.quiz_list);
    const user_answer_list = useSelector(state => state.quiz.user_answer_list);
    const _score = (100/quiz_list.length) * quiz_list.filter((q, idx) => {
        return q.answer === user_answer_list[idx];
    }).length;
    const score = Math.round(_score);

    return(
        <Container>
            <Wrapper>
                <p className="score"><span>{props.name}</span> 퀴즈에 대한 <br/> 나의 점수는?</p>
                <h3><span>{score}</span>점</h3>
                <p className="evaluation">둘도 없는 단짝이어요!</p>
                <button onClick={()=>{history.push("/message")}}>{props.name}에게 한마디</button>
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
    margin: 10vh auto;
    width: 450px;
    height: 800px;
    background-color: #fff;
    text-align: center;
    overflow: hidden;
    position: relative;
`

const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    & .score {
        font-size: 24px; 
        font-weight: bold;
    };
    & h3 {
        font-size: 32px; 
        font-weight: bold;
    };
    & .evaluation {
        font-size: 18px; 
    };
    & span {
        background-color: #ffd593;
        padding: 5px;
        border-radius: 15px;
    };
    & button {
        width: 305px;
        height: 45px;
        background-color: #d8bbff;
        border: 1px transparent solid;
        border-radius: 10px;
        font-size: 18px;
        font-weight: bold;
        margin: 15px auto;
    };
    & button:hover {
        background-color: #9141ff;
        color: #fff;
    }
`

export default Score 