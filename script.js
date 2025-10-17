const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunta = document.querySelector(".caixa-pergunta");
const caixaAlternativa = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const pergunta = [
    {
        enunciado: "Pergunta 1",
        alternativas:[
            "alternativa 1",
            "alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas:[
            "alternativa 1",
            "alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 3",
        alternativas:[
            "alternativa 1",
            "alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 4",
        alternativas:[
            "alternativa 1",
            "alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 5",
        alternativas:[
            "alternativa 1",
            "alternativa 2"
        ]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = pergunta[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

function mostrAlternativa(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button")
        botaoAlternativas.textContent = alternativa;
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}

mostraPergunta();