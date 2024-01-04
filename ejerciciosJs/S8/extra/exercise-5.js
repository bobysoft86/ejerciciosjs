
let aciertos = 0;



const getQuestions = async () => {
  let response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple');
  let resJson = await response.json();
    // console.log(resJson.results)
  return resJson.results;
};


const selectQuestions = (num, data)=>{
    let finalQuestions = []
    for (let i = 0 ; i < num ; i++) {
        finalQuestions = [...finalQuestions, data[i]]
    }
  return  finalQuestions;

}
const getQuantQuest = (data) => {
    let input = document.querySelector('[data-function="questions-number"]');
    let sendNumber = document.querySelector('[data-function="start-game"]');
  
    console.log();
  
    sendNumber.addEventListener("focus", function () {
      if (input.value > 10) {
        alert("maximo 10 preguntas");
        location.reload();
      }
      
      const final = selectQuestions(input.value, data);;
      printQuestions(final);
    });
  };
const printQuestions = (data) =>{
    let gameboard = document.querySelector('[data-function="gameboard"]')
     for (const question of data) {
        let myQuestDiv = document.createElement("div");
        let myQuestion = document.createElement("h3")
        myQuestion.innerText= question.question;
        
        gameboard.appendChild(myQuestDiv);
        myQuestDiv.appendChild(myQuestion);
            for (const incorrect of question.incorrect_answers ) {
                let myAnswer = document.createElement("button")
                myAnswer.innerText = incorrect;
                myQuestDiv.appendChild(myAnswer);


              console.log(data)
            }
            let myAnswer = document.createElement("button")
            myAnswer.innerText = question.correct_answer;
            myAnswer.addEventListener("click", function () {
                aciertos++;
                console.log("Soy la correcta");
              });
            myQuestDiv.appendChild(myAnswer);
        // console.log(question.incorrect_answers)

     }

}





const init = async () => {
    let checkGame = document.querySelector('[data-function="check-game"]')
    
    let questions = await getQuestions();
    let finalQuestions = getQuantQuest(questions)
    checkGame.addEventListener("click", function(){
        alert(`el numero de clicks con correctos fueron ${aciertos}`);
    })


};

init()
