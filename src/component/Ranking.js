import React, {useEffect} from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { loadRankFB } from "../redux/modules/ranking";

const Ranking = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadRankFB());
    }, []);

    const _user_data = useSelector(state => state.ranking.ranking);
    const user_data = _user_data.sort((a, b) => {
        return b.score - a.score;
    })
    return (
        <Container>
            <Wrapper>
                <TopBar>
                    <p><span>{user_data.length}명</span>의 사람들 중 당신은?</p>
                </TopBar>
                <RankWrap>
                    {_user_data.map((u, idx) => {
                        return (
                            <RankBox key={idx}>
                                <RankNum>{idx + 1}등</RankNum>
                                <RankUser>
                                    <p>{u.user_name}</p>
                                    <p>{u.message}</p>
                                </RankUser>
                            </RankBox>
                        );
                    })}
                </RankWrap>
                <Button onClick={() => { history.push("/") }}>다시하기</Button>
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
    align-items: center;
`

const TopBar = styled.div`
    width: 305px;
    height: 50px;
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
    height: 450px;
    width: 305px;
    overflow-y: scroll;
    margin-top: 18px;
`

const RankBox = styled.div`
    width: 265px;
    border: 2px #bbb solid;
    border-radius: 10px;
    display: flex;
    margin: 16px auto;
    padding: 20px 10px;
`

const RankNum = styled.h3`
    margin: auto;
    padding: 10px 26px 10px 10px;
    margin: auto 0px;
    border-right: 2px #bbb solid;
    font-size: 30px;
`

const RankUser = styled.div`
    padding-left: 26px;
    text-align: left;
    font-weight: bold;

    & p {
        font-size: 16px;
        margin-top: 6px;
    }
`

const Button = styled.button`
    width: 305px;
    height: 45px;
    background-color: #d8bbff;
    border: 1px transparent solid;
    border-radius: 10px;
    font-size: 18px;
    font-weight: bold;
    margin-top: 18px; 

    &:hover {
        background-color: #9141ff;
        color: #fff;
    }
`

export default Ranking;