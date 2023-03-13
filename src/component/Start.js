import React, { useRef, useEffect } from "react";
import styled from "styled-components"

import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setName } from "../redux/modules/user";

import img from "../hyoungbin.jpg"

const Start = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const name_ref = useRef(null);

    return (
        <Container>
            <Wrapper>
                <img src={img} alt="사진" />
                <p>나는 <span>{props.name}</span>에 대해서</p>
                <p>얼마나 알고 있을까?</p>
                <input placeholder="이름을 입력하세요." ref={name_ref} />
                <button onClick={() => {
                    if (name_ref.current.value === "") {
                        alert('이름을 입력하세요')
                        return
                    }
                    history.push("/quiz")
                    dispatch(setName(name_ref.current.value))
                }}>시작하기</button>
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

img {
    width: 300px;
    border-radius: 10px;
};

p {
    margin-top: 18px;
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
    margin-top: 18px;
};

button {
    width: 305px;
    height: 45px;
    background-color: #d8bbff;
    border: 1px transparent solid;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
    margin-top: 16px;
};

button:hover {
    background-color: #9141ff;
    color: #fff;
}
`

export default Start;