Quiz_Data = {
    questions: [{
        title: "O que você fala na hora de indicar uns mimos/produtos?",
        imagegif: "",
        choices: ["É criativo na hora de indicar a alguém", "Repete a mesma fala de quem te indicou ", "Indica um produto e posta usando outro", "Não indica nada nunca, só pagando "],
        results: [4, 3,2 ,1 ],
        choicesgif: ['','','',''],
    },
    {
        title: "O que você fala quando começa a gravar um storie?",
        imagegif: "",
        choices: ["Geeente", "Falaaa Galeraaa", "Muita gente tá me pedindo…", "Não falo nada, só posto foto"],
        results: [3,4 ,2 ,1 ],
        choicesgif: ['','','',''],
    },
    {
        title: "Você é do tipo que:",
        imagegif: "images/gif4.gif",
        choices: ["Não passa um dia sem postar nada ", "Gosta de dar uma sumida", "Posta uma quantidade certa de stories por dia", "Posta quase 50 stories durante o dia, seus seguidores que lutem"],
        results: [2, 1, 3, 4],
        choicesgif: ['','','',''],
    },
    {
        title: "Conteúdo:",
        imagegif: "images/gif5.gif",
        choices: ["Você ama compartilhar novidades de make e cuidados com a pele", "Você gosta de polêmicas", "Você ama compartilhar tudo sobre roupas e moda ", "Você não tem conteúdo específico "],
        results: [3, 2, 4,1 ],
        choicesgif: ['','','',''],
    },
    {
        title: "O seu feed:",
        imagegif: "images/gif6.gif",
        choices: ["Tem trabalho e sua rotina também", "Tem só cliques por fotógrafos ", "Muita natureza e reflexões", "Só usando produtos de grife "],
        results: [3, 4,1 ,2 ],
        choicesgif: ['','','',''],
    },
    {
        title: "Qual é o seu tipo de feed? ",
        imagegif: "images/gif7.gif",
        choices: ["Trabalho com paleta de cores ", "As fotos precisam estar sequenciadas em 3-3", "Eu não ligo pra isso, posto a foto do momento no qual eu to vivendo ", "Eu só vivo de #TBT"],
        results: [4, 1, 2, 3],
        choicesgif: ['','','',''],
    },
    ],
    results: [{
        title: "Just for fun",
        imagegif: "",
        text: "Você está nas redes pra se divertir!<br>Não encara seu perfil como uma obrigação, não curte ter que postar regularmente nem segue um tipo de conteúdo específico: deu vontade, você tá postando!<br>Afinal, o perfil é seu, e você faz o que quiser. Quem te segue é porque gosta das suas fotos e se identifica com o seu estilo. Ah, mas você não abre mão de um perfil lindo e organizado. Você adora planejar seu feed e combinar as fotos com frases legais pra deixar tudo com a sua cara. Adora usar a criatividade e se expressar através do seu feed."
    },
    {
        title: "Eu vim para causar!",
        imagegif: "",
        text: "Eu ouvi publi? Falou em vender é contigo. Você mal termina de postar e já tem gente querendo te copiar, o que você pode fazer, né minha filha? Estilo é estilo!<br>Roupas básicas? Isso não é pra você, brilhar com os melhores looks e com as melhores marcas, isso sim é a sua cara. Com você cada movimento é um clique e por isso você nunca deixa de postar, nada de fotos conceituais com fotógrafo e tudo mais, você vive o momento e faz questão de deixá-los registrados no feed.<br>Você é um falso(a) do c*ralho? Esse é o seu lema na hora das polêmicas, o que você pode fazer se até a confusão te ama?"
    },
    {
        title: "Bem blogueirinha",
        imagegif: "",
        text: "Não pode ver um tutorial de make, um challenge, que já ama e quer fazer. Ama skin care, vídeo de rotina da noite e indicar seus achados, é per-fei-to. Aqueles vídeos relaxantes, com zoom na cara passando a maquiagem, é demais né? Eu sei. Adora fazer um tbt e mostrar seu dia a dia, trabalhando, estudando, vendo netflix, adora compartilhar tudo, mas com cuidado, gosta de prestar atenção no seu engajamento."
    },
    {
        title: "Fashionista",
        imagegif: "",
        text: "Fashion, stylish, viciada em moda, e completamente a frente do seu tempo. Ouvi Manu Gavassi? Não, é você mesmo. Adora posar, pagar de modelo, extremamente divertida, e fala demais. Quem te segue que lute para acompanhar seus vídeos. Adora passar tempo pensando em como montar seu feed, e sempre se arruma para gravar um vídeo."
    },
    {
        title: "Lifestyle",
        imagegif: "",
        text: "Bom, você não é uma pessoa de um conteúdo só para você tudo importa para mostrar para os seguidores, uma praia, uma balada, uma dieta…. qualquer boom em um perfil de fofoca é interessante. Para você o que mais importa é um cotidiano bem produzido e pautado. É estranho falar que cotidiano seja algo legal, mas pra você é instigante ter um cotidiano diferente do normal."
    }
    ],
}

App = Quiz(Quiz_Data,'Quiz_Data')
App()
