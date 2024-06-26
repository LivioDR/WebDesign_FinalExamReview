import questions from "./questions.js";

let arrayOfAsked = (JSON.parse(localStorage.getItem("asked"))||[])
if(arrayOfAsked.length > questions.length*0.8){
  arrayOfAsked = []
}
let index;
do{
  index = Math.floor(Math.random() * questions.length)
}
while(arrayOfAsked.includes(index))

arrayOfAsked.push(index)
arrayOfAsked.sort((a,b) => {return a - b})
localStorage.setItem('asked',JSON.stringify(arrayOfAsked))

let question = questions[index].question
let answers = questions[index].answers
shuffle(answers)

const questContainer = document.getElementById('question')
const container = document.getElementById('answers')

for(let i=0; i<answers.length; i++){
  let answerP = document.createElement('p')
  answerP.innerText = answers[i].option
  answerP.classList.add(answers[i].isCorrect ? 'correct' : 'incorrect')
  container.appendChild(answerP)
}

questContainer.innerText = question


const showAnswer = () => {
    const correctAnswer = document.querySelector('.correct')
    correctAnswer.style.backgroundColor = "green"
    correctAnswer.style.color = 'white'
}
// const hideAnswer = () => {
//     const correctAnswer = document.querySelector('.correct')
//     correctAnswer.style.backgroundColor = "white"
//     correctAnswer.style.color = 'black'
// }

const buttonContainer = document.createElement('div')
buttonContainer.style.display = 'flex'
buttonContainer.style.justifyContent = 'space-around'
buttonContainer.style.marginTop = '10%'

const reloadBtn = document.createElement('button')
reloadBtn.innerText = 'Next question'


const button = document.createElement('button')
button.innerText = "Show answer"

buttonContainer.append(button, reloadBtn)

container.appendChild(buttonContainer)
button.addEventListener('click',showAnswer)
// button.addEventListener('mouseup',hideAnswer)
reloadBtn.addEventListener('click',()=>{location.reload()})

function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }