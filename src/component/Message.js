import React, {useRef} from "react";
import styled from "styled-components";
import img from "../hyoungbin.jpg";

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setMessage } from "../redux/modules/user";
import { addRankFB } from "../redux/modules/ranking";

const Message = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const message_ref = useRef(null);
    const user_name = useSelector(state => state.user.user_name);
    const quiz_list = useSelector(state => state.quiz.quiz_list);
    const user_answer_list = useSelector(state => state.quiz.user_answer_list);
    const _score = (100 / quiz_list.length) * quiz_list.filter((q, idx) => {
        return q.answer === user_answer_list[idx];
    }).length;
    const score = Math.round(_score);

    return (
        <Container>
            <Wrapper>
                <img src={img} alt="사진" />
                <h1><span>{props.name}</span>에게 남기는 한마디!</h1>
                <input ref={message_ref} />
                <button onClick={async () => {
                    dispatch(setMessage(message_ref.current.value));
                    dispatch(addRankFB({
                        score: score,
                        user_name: user_name,
                        message: message_ref.current.value,
                    }));
                    history.push("/ranking");
                }}>한마디 하고 랭킹보러 가기</button>
            </Wrapper>
        </Container>
    )
}

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
h1 {
    font-size: 18px; 
    font-weight: bold;
    margin-top: 26px;
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
    margin-top: 26px;
};
button {
    width: 305px;
    height: 45px;
    background-color: #d8bbff;
    border: 1px transparent solid;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
    margin-top: 18px;
};
button:hover {
    background-color: #9141ff;
    color: #fff;
}
`

export default Message