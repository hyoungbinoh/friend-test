import { collection, getDocs, addDoc } from "firebase/firestore"
import { db } from "../../firebase"

const LOAD_RANK = "ranking/LOAD_RANK";
const ADD_RANK = "ranking/ADD_RANK";

export const loadRank = (ranking_list) => {
    return { type: LOAD_RANK, ranking_list }
}

export const addRank = (user_ranking) => {
    return { type: ADD_RANK, user_ranking };
}

const initialState = {
    ranking: []
}

export const loadRankFB = () => {
    return async function (dispatch) {
        const ranking_data = await getDocs(collection(db, "ranking"));
        let ranking_list = [];
        ranking_data.forEach((r) => {
            ranking_list.push({ ...r.data() });
        });
        dispatch(loadRank(ranking_list));
    }
}

export const addRankFB = (user_ranking) => {
    return async function () {
        await addDoc(collection(db, "ranking"), user_ranking);
    }
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "ranking/LOAD_RANK": {
            return { ...state, ranking: action.ranking_list };
        }

        case "ranking/ADD_RANK": {
            const new_ranking_list = [...state.ranking, action.user_ranking];
            return { ...state, ranking: new_ranking_list };
        }
        default:
            return state;
    }
}
