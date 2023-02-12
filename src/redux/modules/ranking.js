import { async } from "@firebase/util";

import {collection, doc, getDoc, getDocs, addDoc} from "firebase/firestore"
import {db} from "../../firebase"

const LOAD_RANK = "ranking/LOAD_RANK";
const ADD_RANK = "ranking/ADD_RANK";

export const loadRank = (ranking_list) => {
    return {type: LOAD_RANK, ranking_list}
}

export const addRank = (user_ranking) => {
    return {type: ADD_RANK, user_ranking};
}

const initialState = {
    ranking: [
        // {score: 100, user_name: "오형빈2", message: "형빈아 안녕"},
        // {score: 75, user_name: "오형빈1", message: "형빈아 안녕"},
        // {score: 50, user_name: "오형빈3", message: "형빈아 안녕"},
    ]
}

export const loadRankFB = () => {
    return async function (dispatch) {
        const ranking_data = await getDocs(collection(db, "ranking"));
        // console.log(ranking_data);
        let ranking_list = [];

        ranking_data.forEach((r) => {
            ranking_list.push({...r.data()});
        });
        // console.log(ranking_list);
        dispatch(loadRank(ranking_list));
    }
}

export const addRankFB = (user_ranking) => {
    return async function (dispatch) {
        const docRef = await addDoc(collection(db, "ranking"), user_ranking);
        // dispatch(addRank(user_ranking));
    }
}

export default function reducer(state = initialState, action = {}){
    switch(action.type){
        case "ranking/LOAD_RANK": {
            return {...state, ranking: action.ranking_list};
        }

        case "ranking/ADD_RANK": {
            // console.log(action);
            // console.log(state);
            const new_ranking_list = [...state.ranking, action.user_ranking];
            return {...state, ranking : new_ranking_list};
        }
        default:
            return state;
    }
}
