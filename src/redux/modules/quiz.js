const GET_QUIZ = "quiz/GET_QUIZ";
const ADD_ANSWER = "quiz/ADD_ANSWER";
const RESET_ANSWER = "quiz/RESET_ANSWER"



const initialState = {
    quiz_name: "오형빈",
    quiz_list: [
        {question:"오형빈의 종교는 불교이다.", answer: false},
        {question:"오형빈은 신맛을 좋아한다.", answer: true},
        {question:"오형빈은 지리학과를 전공하였다.", answer: false},
        {question:"오형빈의 고향은 서울이다.", answer: true}
    ],
    user_answer_list: [],
}

export const getQuiz = (quiz_list) => {
    return{type: GET_QUIZ, quiz_list}
};

export const addAnswer = (user_answer) => {
    return{ type: ADD_ANSWER, user_answer }
}

export const resetAnswer = () => {
    return{type: RESET_ANSWER}
};

export default function reducer(state = initialState, action = {}) {
    switch(action.type) {
        case "quiz/GET_QUIZ": {
            return {...state, quiz: action.quiz_list}
        }
            
        case "quiz/ADD_ANSWER": {
            console.log(action)
            // return state
            const new_user_answer_list = [...state.user_answer_list, action.user_answer]
            console.log(new_user_answer_list)
            return {...state, user_answer_list: new_user_answer_list}
        }
        default:
            return state;
    }
}

