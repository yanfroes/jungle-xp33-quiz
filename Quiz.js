class Quiz{
    Choices = choices => choices.map((choice, i) => /*html*/`
    <li>
        <input type="radio" name="answer" value="${i}">
        ${choice}
    </li>
    `).join('')    

    Buttons = (index) => {
        let result = ''
        if(this.index < this.questions.length -1){
            result += /*html*/`
            <button class="btn btn-block btn-outline-primary" onclick="${this.self}.confirm(${index})">
                Próxima
            </button>
        `}else{
            result += /*html*/`
            <button class="btn btn-block btn-outline-primary" onclick="${this.self}.confirm(${index})">
                Finalizar
            </button>
        `}
        if(this.index != 0){
            result += /*html*/`
            <button class="btn btn-block btn-outline-primary" onclick="${this.self}.goBack(${index})">
                Anterior
            </button>
            `
        }
        return result
    }

    Result = () => /*html*/`
        Voce é ${this.result}
    `

    Question = (index, question) => /*html*/`
    <h2>Pergunta ${index+1}:</h2>
    <p>${question.title}</p>
    <ul id="choices">
        ${this.Choices(question.choices)}
    </ul>
    ${this.Buttons(index)}
    `

    Content = () => this.result ? /*html*/`
        ${this.Result()}`
        : /*html*/`
        ${this.Question(this.index,this.questions[this.index])}
        `

    update(action = () => {}){
        action()
        this.render()
    }

    constructor(self){
        this.questions = QUESTIONS
        this.self = self
        this.index = 0
        this.answers = []
        this.render()
    }

    getResult = () => {
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

        return JSON.stringify(result)
    }

    confirm = (index) => this.update(() => {
        let choice = document.querySelector('#choices [name=answer]:checked')
        console.log(choice)
        if(choice){
            this.answers[index] = this.questions[index].results[choice.value]
            if(this.index < this.questions.length -1){
                this.index++
            }
            else{
                this.result = this.getResult()
            }
        }
        console.log(this.answers,this.questions.length, this.finish)        
    })

    goBack = (index) => this.update(() => {
        this.index--
    })

    render(){
        document.querySelector('#quiz').innerHTML = this.Content()
    }    
}

quiz = new Quiz('quiz')