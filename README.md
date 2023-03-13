# friends-test

> ##### Javascript, React, Redux 등을 활용한 사이드 프로젝트 진행
![friendtest](https://user-images.githubusercontent.com/108599126/224625387-e359ea90-7025-4b36-b6f5-00b1fd1cdfba.JPG)
##### URL: https://friendstest-f96d2.web.app/

### 1. 개발목표   
* 회사에서 M2E 프로토타입 홈페이지를 만들기 전, 연습을 위해 제작한 사이드 프로젝트   
* 강의를 통해 배운 react.js를 복습하고 응용하는데 목표를 둠
<br/><br/>

### 2. 제작인원
* 프론트엔드 개발자 1명(본인)
<br/><br/>

### 3. 사용기술
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/Styled--Components-DB7093?style=flat&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black">
<br/><br/>

### 4. 구현기능 
* Async를 활용한 Firebase와의 통신
<img src="https://user-images.githubusercontent.com/108599126/224647007-33316b2a-0003-4195-94cf-8ef4546b4b68.JPG" width="630" height="340">

```
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

// 이하 
```

* Redux를 활용한 전역 상태 관리
<img src="https://user-images.githubusercontent.com/108599126/224646141-89359f18-2cf8-4e5f-b3e1-c9ee08c43c8c.JPG" width="630" height="340">

```
const initialState = {
    quiz_name: "오형빈",
    quiz_list: [
        {question:"오형빈은 웹디자이너 일을 했다.", answer: false},
        {question:"오형빈은 개발자가 되고자 한다.", answer: true},
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
            const new_user_answer_list = [...state.user_answer_list, action.user_answer]
            return {...state, user_answer_list: new_user_answer_list}
        }
        default:
            return state;
    }
}
```

### 5. 문제해결
* 리덕스 사용시 리듀서 함수를 입력할 때 에러가 나는 현상이 있었고, 구글링 결과 state와 action의 기본값을 입력해줘야 한다는 점을 알게 되어 입력하여 해결하였습니다.
* 위 사례 외에도 에러가 발생하는 경우가 많았고 앞서 들었던 강의와 구글링 내용들을 참고하여 해결해나갔습니다.
<br/><br/>

### 6. 보완할 점
* 퀴즈 정답 페이지 추가 필요
* React Route 업데이트 후 useHistory를 useNavigate로 변경 필요
<br/><br/>
