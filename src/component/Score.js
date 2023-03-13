import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom"
import { useSelector } from "react-redux";

const Score = (props) => {
    const history = useHistory()
    const quiz_list = useSelector(state => state.quiz.quiz_list);
    const user_answer_list = useSelector(state => state.quiz.user_answer_list);
    const _score = (100 / quiz_list.length) * quiz_list.filter((q, idx) => {
        return q.answer === user_answer_list[idx];
    }).length;
    const score = Math.round(_score);

    return (
        <Container>
            <Wrapper>
                <h1><span>{props.name}</span> 퀴즈에 대한 <br /> 나의 점수는?</h1>
                <h2><span>{score}</span>점</h2>
                <p>{score > 50 ? `${props.name}을 잘 아시는 군요!` : '우리 조금 더 알아가봐요!'}</p>
                <button onClick={() => { history.push("/message") }}>{props.name}에게 한마디</button>
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100vh;
    text-align: center;
    overflow: hidden;
    position: relative;
`

const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & h1 {
        font-size: 24px; 
        font-weight: bold;
        line-height: 36px;
    };

    & h2 {
        font-size: 32px; 
        font-weight: bold;
        margin-top: 18px;
    };

    & p {
        font-size: 18px; 
        margin-top: 36px;
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
        margin-top: 30px;
    };
    & button:hover {
        background-color: #9141ff;
        color: #fff;
    }
`

export default Score;