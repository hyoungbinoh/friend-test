import React from "react";
import styled from "styled-components";
import img from "./hyoungbin.jpg";

import {useHistory} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"
import {addAnswer} from "./redux/modules/quiz";
import Score from "./Score";
import Progress from "./Progress";


const Quiz = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    // const quiz_list = [
    //     {question:"오형빈의 종교는 불교이다.", answer: false},
    //     {question:"오형빈은 신맛을 좋아한다.", answer: true},
    //     {question:"오형빈은 지리학과를 전공하였다.", answer: false},
    //     {question:"오형빈의 고향은 서울이다.", answer: true}
    // ]
    const quiz_list = useSelector((state)=>state.quiz.quiz_list);

    // const [user_answer_list, setAnswerList] = React.useState([]);

    const user_answer_list = useSelector((state)=>state.quiz.user_answer_list)

    const setAnswer = (user_answer) => {
        // setAnswerList([...user_answer_list, user_answer]);
        dispatch(addAnswer(user_answer));    
    }

    React.useEffect(()=>{
        if(user_answer_list.length === quiz_list.length){
            // const _score = (100/quiz_list.length) * quiz_list.filter((q, idx) => {
            //     return q.answer === user_answer_list[idx];
            // }).length;
            // const score = Math.round(_score);
            // console.log(_score, score) 
            history.push("/score");
            return;
        };          
    },[user_answer_list]);

    if(user_answer_list.length === quiz_list.length){
        // history.push("/score");
        return;
    } 

    return(
        <Container>
            <Wrapper>
                <Progress/>
                <p>{user_answer_list.length + 1}번문제</p>
                <img src={img} alt="사진"/>
                <h3>Q. {quiz_list[user_answer_list.length].question}</h3>
                <div>
                    <button onClick={() => {setAnswer(true)}}>O</button>
                    <button onClick={() => {setAnswer(false)}}>X</button>
                </div>
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

    & p {
    width: 80px;
    margin: 20px auto;
    padding: 10px;
    background-color: #ffd593;
    font-size: 18px; 
    font-weight: bold;
    border-radius: 10px;
    };

    & img {
    width: 300px;
    border-radius: 10px;
    margin:auto;
    };

    & h3 {
        font-size: 20px; 
        font-weight: bold;
    };
    
    & div{
        display: flex;
        justify-content: center;
    };
    
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