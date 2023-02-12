import React from "react";
import styled from "styled-components"

import {useHistory} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { setName } from "./redux/modules/user";

import img from "./hyoungbin.jpg"

const Start = (props) => {
    const history =  useHistory();
    const dispatch = useDispatch();
    const quiz_name = useSelector(state => state.quiz.quiz_name);
    const name_ref = React.useRef(null);

    return(
        <Container>
            <Wrapper>
                <img src={img} alt="사진"/>
                <p>나는 <span>{quiz_name}</span>에 대해서</p>
                <p>얼마나 알고 있을까?</p>
                <input placeholder="내이름" ref={name_ref}/>
                <button onClick={()=>{
                    history.push("/quiz")
                    // console.log(name_ref.current.value)
                    dispatch(setName(name_ref.current.value))
                }}>시작하기</button>
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

img {
    width: 300px;
    border-radius: 10px;
    margin: 10px auto;
};
p {
    font-size: 18px; 
    font-weight: bold;
};
span {
    background-color: #ffd593;
    padding: 5px;
    border-radius: 15px;
};
input {
    width: 300px;
    height: 40px;
    border: 1px #000 solid;
    border-radius: 10px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;
};
button {
    width: 305px;
    height: 45px;
    background-color: #d8bbff;
    border: 1px transparent solid;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
    margin: 15px auto;
};
button:hover {
    background-color: #9141ff;
    color: #fff;
}
`

export default Start;