class Quiz{
    highLigth = (index) => {
        console.log(this.selected)
        if(this.selected == index){
            return 'button-selected'
        }
    }

    select = (index) => this.update(() => {
        this.selected = index
    })

    Choices = choices => choices.map((choice, i) => {
        return /*html*/`
            <div
                class="center-things button-choice text-center text-button-choices ${this.highLigth(i)}"
                onclick="${this.self}.select(${i})")
            >${choice}</div>
        `
    }).join('')

    Buttons = (index) => {
        let result = ''
        if(this.index < this.questions.length -1){
            result += /*html*/`
            <button class="center-things button-next" onclick="${this.self}.confirm(${index})">
                <span class="text-button">Próxima</span>
            </button>
        `}else{
            result += /*html*/`
            <button class="center-things button-next" onclick="${this.self}.confirm(${index})">
                <span class="text-button">Finalizar</span>
            </button>
        `}
        if(this.index != 0){
            result += /*html*/`
            <button class="center-things button-next" onclick="${this.self}.goBack(${index})">
                <span class="text-button">Anterior</span>
            </button>
            `
        }
        return result
    }

    Result = () => /*html*/`
        Voce é ${this.result}
    `

    Question = (index, question) => /*html*/`

    <div class="card">
		<img
			class="card-img-top center-things"
			src="https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/ce2ece60-9b32-11e6-95ab-00163ed833e7/260663710/the-test-fun-for-friends-screenshot.jpg"
			alt="Card image cap"
		>
		<div class="card-body">
		    <h5 class="card-title text-center">Pergunta ${index+1}:</h5>
			<p class="text-center">${question.title}</p>
            ${this.Choices(question.choices)}
            ${this.Buttons(index)}
		</div>
	</div>
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
        let choice = this.selected
        console.log(choice)
        if(choice || choice == 0){
            this.answers[index] = this.questions[index].results[choice]
            if(this.index < this.questions.length -1){
                this.selected = undefined
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
