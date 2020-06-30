// --- change color ---
const btnChangeColor = document.querySelector('.btnChangeColor');
let outColor = document.querySelector('.outColor');

colorArr = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

btnChangeColor.addEventListener('click', changeColor);

function changeColor() {
    let color = '';
    for (let i = 0; i < 6; i++) {
        let randColor = Math.floor(Math.random() * colorArr.length);
        color += colorArr[randColor];
    }
    outColor.style.backgroundColor = `#${color}`;
}


// --- quotes ---

const quotes = [
    {
        name: 'Jeff Atwood',
        quote: 'Any app that can be written in JavaScript, will eventually be written in JavaScript.',
    },
    {
        name: 'Eric Freeman',
        quote: "JavaScript: Don't judge me by my bad parts, learn the good stuff and stick with that!",
    },
    {
        name: 'Douglas Crockford',
        quote: "JavaScript is the world's most misunderstood programming language.",
    },
    {
        name: 'Kyle Simpson',
        quote: 'JavaScript is as related to Java as Carnival is to Car.',
    },
    {
        name: 'Reg Braithwaite',
        quote: 'The strength of JavaScript is that you can do anything. The weakness is that you will.',
    },
];

let outquote = document.querySelector('.outquote');
let author = document.querySelector('.author');
const btnQuote = document.querySelector('.btnQuote');

const funQuote = () => {
    let i = Math.floor(Math.random() * quotes.length);
    outquote.innerHTML = quotes[i].quote;
    author.innerHTML = quotes[i].name;
}
btnQuote.addEventListener('click', funQuote);


// --- passMessage ---

const btnSendMess = document.querySelector('.btnSendMess');
let messIn = document.querySelector('.messIn');
let messOut = document.querySelector('.messOut');
btnSendMess.addEventListener('click', funSendMess);

function funSendMess() {
    if (messIn.value == '') {
        alert('Right somethin...')
    } else {
        messOut.innerHTML = messIn.value;
        messIn.value = '';
    }
}