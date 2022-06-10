const elementResposta = document.querySelector("#resposta")
const elementInput = document.querySelector("#inputPergunta")
const elementbutton = document.querySelector("#buttonPerguntar")
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]


//clicar em fazer pergunta 
function fazerPergunta() {
  if (elementInput.value == "") {
    alert("Digite sua pergunta!")
    return
  }
  elementbutton.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"
  //gerar numero aleatorio
const totalRespostas = respostas.length
const numeroaleatorio = Math.floor(Math.random() * totalRespostas)

elementResposta.innerHTML = pergunta + respostas[numeroaleatorio]
elementResposta.style.opacity = 1;
// sumir com a resposta depois de 3 segundos 
setTimeout(function(){
  elementResposta.style.opacity = 0 ;
  elementbutton.removeAttribute("disabled")
}, 3000)
}