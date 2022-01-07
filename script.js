const quizData =  [
    {
        Question: 'Q1- HTML is considered as ______ ?',
        a: 'Programming language',
        b: 'OOP language',
        c: 'High level language',
        d: 'Markup language',
        ans: 'answer4'
    },
    {
        Question: 'Q2- HTML uses ______?',
        a: 'User-defined tags',
        b: 'Predefined tags',
        c: 'Fixed tags defined by the languag',
        d: 'Tags for links only',
        ans: 'answer3'
    },
    {
        Question: 'Q3- A stricter type of HTML document is known as ______?',
        a: 'DHTML',
        b: 'XHTML',
        c: 'XML',
        d: 'HTML',
        ans: 'answer2'
    },
    {
        Question: 'Q4- The HTML tag that specifies a CSS style embedded in an element is called ____?',
        a: 'Design',
        b: 'style',
        c: 'Modify',
        d: 'Define',
        ans: 'answer2'
    },
    {
        Question: 'Q5- If we want to set the style for just one element, which css selector will we use?',
        a: 'id',
        b: 'text',
        c: 'class',
        d: 'name',
        ans: 'answer1'
    },
];

const question = document.querySelector('.Questions');
const option1 = document.querySelector('#Option1');
const option2 = document.querySelector('#Option2');
const option3 = document.querySelector('#Option3');
const option4 = document.querySelector('#Option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#Result') 


let questionCount = 0;
let score = 0;
const loadQuestion = () =>{
    question.innerHTML = quizData[questionCount].Question;
    option1.innerHTML = quizData[questionCount].a; 
    option2.innerHTML = quizData[questionCount].b; 
    option3.innerHTML = quizData[questionCount].c; 
    option4.innerHTML = quizData[questionCount].d; 
};

loadQuestion();

const getCheckAnswer =()=>{
    let answer;
    answers.forEach((currAnsEle)=>{
        if(currAnsEle.checked){
            answer = currAnsEle.id;
        }
    });
    return answer;
};

const deselectAll = ()=>{
    answers.forEach((currAnsEle)=>{
        currAnsEle.checked = false;
    });
}

submit.addEventListener('click', ()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer ===quizData[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizData.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
        <h3>Your Score is ${score}/${quizData.length}</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;

        showScore.classList.remove('score');
    };
});