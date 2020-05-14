const State = {
    index: 0,
    result: undefined,
    answers: []
}

const Actions = {
    confirm:(quiz,index,alt) => App(action => {
        let option = quiz.questions[index].results[alt]
        //console.log('pergunta:',index+1, 'opcao',option)
        State.answers[index] = option

        if(State.index < quiz.questions.length -1){
            State.index++
        }
        else{
            State.result = Functions.getResult()
        }
    })
}

const Functions = {
    getResult:() => {
        let each = {}
        State.answers.forEach(item => {
            each[item] = 0
        })
        State.answers.forEach(item => {
            each[item]++
        })
        let result = Object.keys(each).reduce((ax, x) =>
            each[ax] >= each[x] ?
                ax : x
        )

        return parseInt(result)
    },
}

const View = (data,name) => {
    const Choices = (choices,gif,questionNum) => choices.map((choice, alt) => {
        return /*html*/`
            <div class="col-6"><button
                class="btn center-things button-choice text-center text-button-choices"
                onclick="Actions.confirm(${name},${questionNum},${alt})")
            ><img
             class="card-img-answer center-things"
            src= "${gif[alt]}"
            >${choice}

            </button></div>
        `
    }).join('')

    const Question = (number, question) => /*html*/`
        <div class="card">
            <img
                class="card-img-top center-things"
                src= "${question.imagegif}"
            >
            <div class="card-body">
                <p class="text-center" style="font-size:22px"><b>${question.title}</b></p>
                <div class="row">${Choices(question.choices,question.choicesgif, number)}</div>
            </div>
        </div>
        `

    const Result = (data) => {
            let result = data.results[State.result]
            console.log(result)
            return /*html*/`
            <div class="card">
            <img
                class="card-img-top center-things"
                src= "${result.imagegif}"
            >
            <div class="card-body" style="padding:0px">
                <h5 class="card-title text-center" style="font-size:24px"><b>Voce é ${result.title}</b></h5>
                <p class="text-center" style="font-size:22px">${result.text}</p>
          <a href="http://groupjungle.site/quiz.html"><button class="btn center-things button-choice text-center text-button-choices">
              <span class="text-button">Refazer Quiz</span>
          </button></a>
            </div>
        </div>
            `
    }

    const Content = () => State.result ? /*html*/`
            ${Result(data)}`
            : /*html*/`
            ${Question(State.index,data.questions[State.index])}
            `
    return Content()
}

const Quiz = (data, name) => (update = () => {}) => {
    update()
    document.querySelector('#quiz').innerHTML = View(data,name)
}
