class Quiz{
    View(action){    
        const Choices = (choices,questionNum) => choices.map((choice, alt) => {
            return /*html*/`
                <button
                    class="center-things button-choice text-center text-button-choices"
                    onclick="${action}.confirm(${questionNum},${alt})")
                >${choice}</button>
            `
        }).join('')
    
        const Buttons = (index) => {
            let result = ''
            if(this.index != 0){
                result += /*html*/`
                <!-- <button class="center-things button-next" onclick="${this.self}.goBack(${index})">
                    <span class="text-button">Anterior</span>
                </button> -->
                `
            }
            return result
        }
    
        const Result = () => {
            let result = RESULTS[this.result]
            return /*html*/`
            <div class="card">
            <img
                class="card-img-top center-things"
                src= "${result.imagegif}"
            >
            <div class="card-body">
                <h5 class="card-title text-center" style="font-size:24px"><b>Voce é ${result.title}</b></h5>
                <p class="text-center" style="font-size:22px">${result.text}</p>
          <a href="http://groupjungle.site/quiz.html"><button class="center-things button-next">
              <span class="text-button">Refazer Quiz</span>
          </button></a>
            </div>
        </div>
            `
        }
    
        const Question = (number, question) => /*html*/`
    
        <div class="card">
            <img
                class="card-img-top center-things"
                src= "${question.imagegif}"
            >
            <div class="card-body">
                <h5 class="card-title text-center" style="font-size:24px"><b>Pergunta ${number+1}</b></h5>
                <p class="text-center" style="font-size:22px">${question.title}</p>
                ${Choices(question.choices, number)}
                ${Buttons(number)}
            </div>
        </div>
        `
    
        const Content = () => this.result ? /*html*/`
            ${Result()}`
            : /*html*/`
            ${Question(this.index,this.questions[this.index])}
            `         
        return Content()
    }

    Actions = {
        select:(index) => this.update(() => {
            this.selected = index
        }),
    
        getResult:() => {
            let each = {}
            this.answers.forEach(item => {
                each[item] = 0
            })
            this.answers.forEach(item => {
                each[item]++
            })
            let result = Object.keys(each).reduce((ax, x) =>
                each[ax] >= each[x] ?
                    ax : x
            )
    
            return parseInt(result)
        },
    
        confirm:(index,alt) => this.update(action => {
            let option = this.questions[index].results[alt]
            console.log('pergunta:',index+1, 'opcao',option)
            this.answers[index] = option
    
            if(this.index < this.questions.length -1){
                this.index++
            }
            else{
                this.result = action.getResult()
            }
        }),
    
        goBack:(index) => this.update(() => {
            this.index--
        })
    }

    constructor(self){
        this.questions = QUESTIONS
        this.self = self
        this.index = 0
        this.answers = []
        this.update = (action = () => {}) => {
            action(this.Actions)
            document.querySelector('#quiz')
                .innerHTML = this.View(this.self+'.Actions')
        }
        this.update()
    }
}

quiz = new Quiz('quiz')
