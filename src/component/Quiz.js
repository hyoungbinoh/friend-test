import React, {useEffect} from "react";
import styled from "styled-components";
import img from "../hyoungbin.jpg";

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { addAnswer } from "../redux/modules/quiz";
import Progress from "./Progress";


const Quiz = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const quiz_list = useSelector((state) => state.quiz.quiz_list);
    const user_answer_list = useSelector((state) => state.quiz.user_answer_list)

    const setAnswer = (user_answer) => {
        dispatch(addAnswer(user_answer));
    }

    useEffect(() => {
        if (user_answer_list.length === quiz_list.length) {
            history.push("/score");
            return;
        };
    }, [user_answer_list]);

    if (user_answer_list.length === quiz_list.length) {
        return;
    }

    return (
        <Container>
            <Wrapper>
                <Progress />
                <h1>{user_answer_list.length + 1}번문제</h1>
                <img src={img} alt="사진" />
                <p>Q. {quiz_list[user_answer_list.length].question}</p>
                <Button>
                    <button onClick={() => { setAnswer(true) }}>O</button>
                    <button onClick={() => { setAnswer(false) }}>X</button>
                </Button>
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
    display: flex;
    flex-direction: column;
    align-items: center;

    & h1 {
    width: 80px;
    margin-top: 18px ;
    padding: 10px;
    background-color: #ffd593;
    font-size: 18px; 
    font-weight: bold;
    border-radius: 10px;
    };

    & img {
    width: 250px;
    border-radius: 10px;
    margin-top: 18px;
    };

    & p {
        font-size: 20px; 
        font-weight: bold;
        margin-top: 20px;
    };

`

const Button = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 18px;

    
    & button{
        margin: 10px 20px;
        padding: 20px 40px;
        font-size: 60px;
        font-weight: bold;
        background-color: #d8bbff;
        border-radius: 10px;
        border: none;
    }
    
    & button:hover{
        cursor: pointer;
        background-color: #9141ff;
        color: #fff;
    }
`

export default Quiz