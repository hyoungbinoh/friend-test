import React from "react";
import styled from "styled-components";

import {useHistory} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"

import { loadRankFB } from "./redux/modules/ranking";

const Ranking = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    React.useEffect(()=>{
        dispatch(loadRankFB());
    }, []);

    // const _user_data = [
    //     {score: 100, user_name: "오형빈", message: "형빈아 안녕"},
    //     {score: 75, user_name: "오형빈", message: "형빈아 안녕"},
    //     {score: 50, user_name: "오형빈", message: "형빈아 안녕"},
    // ];

    const _user_data = useSelector(state => state.ranking.ranking);
    const user_data = _user_data.sort((a, b) => {
        return b.score - a.score;
    })
    return(
        <Container>
            <TopBar>
                <p><span>{user_data.length}명</span>의 사람들 중 당신은?</p>
            </TopBar>
            <RankWrap>
                {_user_data.map((u, idx) => {
                    return(
                        <RankBox key={idx}>
                            <RankNum>{idx+1}등</RankNum>
                            <RankUser>
                                <p>{u.user_name}</p>
                                <p>{u.message}</p>
                            </RankUser>
                        </RankBox>
                    );
                })}
            </RankWrap>
            <Button onClick={() => {history.push("/")}}>다시하기</Button>
        </Container>        
    )
}

const Container = styled.div`
    margin: 10vh auto;
    width: 450px;
    height: 800px;
    background-color: #fff;
    text-align: center;
    overflow: hidden;
    position: relative;
`

const TopBar = styled.div`
    width: 450px;
    border-bottom: 2px solid #bbb;
    font-size: 18px;
    font-weight: bold;
    & span {
        background-color: #ffd593;
        padding: 5px;
        border-radius: 15px;
    }
`

const RankWrap = styled.div`
    height: 650px;
    overflow-y: scroll;
`

const RankBox = styled.div`
    width: 350px;
    border: 2px #bbb solid;
    border-radius: 10px;
    display: flex;
    margin: 30px auto;
    padding: 8px 16px;
`

const RankNum = styled.h3`
    margin: auto;
    padding: 10px 26px 10px 10px;
    margin: auto 0px;
    border-right: 2px #bbb solid;
    font-size: 30px;
`

const RankUser =  styled.div`
    padding-left: 26px;
    text-align: left;
    font-size: 16px;
    font-weight: bold;
`

const Button = styled.button`
    width: 400px;
    height: 45px;
    background-color: #d8bbff;
    border: 1px transparent solid;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
    margin: 15px auto;

    &:hover {
        background-color: #9141ff;
        color: #fff;
    }
`

export default Ranking;