const questions = [{
    'que': 'what is basic language of web ?',
    'a': 'HTML',
    'b': 'ReactJS',
    'c': 'CSS',
    'd': 'MongoDB',
    'correct': 'a'
},

{
    'que': 'what is Style language of web ?',
    'a': 'HTML',
    'b': 'ReactJS',
    'c': 'CSS',
    'd': 'MongoDB',
    'correct': 'c'
},

{
    'que': 'what is Trending language of web in 2024 ?',
    'a': 'HTML',
    'b': 'ReactJS',
    'c': 'CSS',
    'd': 'MongoDB',
    'correct': 'b'
},

{
    'que': 'which of follow is backend technology ?',
    'a': 'HTML',
    'b': 'ReactJS',
    'c': 'NodeJS',
    'd': 'MongoDB',
    'correct': 'c'
},

{
    'que': 'what is the use of DB ?',
    'a': 'Just for fun',
    'b': 'No Use',
    'c': 'Use for backend Operations',
    'd': 'To store the data of application',
    'correct': 'd'
}

]


let index = 0;
const quesBox = document.getElementById('quesBox');
const optionInputs = document.querySelectorAll('.Option')
const loadQuestion = () => {
    const data = questions[index]
    console.log(data);
    quesBox.innerText = `${index + 1} ${data.que}`;
    optionInputs[0].nextElementSibling.innerHTML = data.a;
    optionInputs[1].nextElementSibling.innerHTML = data.b;
    optionInputs[2].nextElementSibling.innerHTML = data.c;
    optionInputs[3].nextElementSibling.innerHTML = data.d;
}

const submitQuiz = () => {
    const ans = getAnswer()
}

const getAnswer = () => {
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                return input.value;
            }

        }
    )
}

loadQuestion();