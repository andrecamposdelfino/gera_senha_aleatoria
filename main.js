let btnGeraSenha = document.getElementById("btnGeraSenha");
let input = document.getElementById("input");
let container = document.querySelector(".container");
let btnVisualizaSenha = document.getElementById("btnVisualizaSenha");
let display = document.getElementById("display");
let card = document.querySelector(".card")



function gerarSenha() {
  let charset = "abcdefghijklmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXYZ0123456789";
  let senha = "";

  for (let i = 0; i <= 7; i++) {
    let numeroAleatorio = Math.floor(Math.random() * charset.length);
    senha += charset[numeroAleatorio];
  }
  input.value = senha;
  localStorage.setItem("senha", JSON.stringify(senha))
  senha = "";
}

function muda_cor_de_fundo() {
  let cores = [
    "#F44336",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#CDDC39",
    "#FFEB3B",
  ];
  setInterval(function () {
    let nal = Math.floor(Math.random() * cores.length)
    for(let i=0; i<cores.length; i++){
        container.style.backgroundColor = cores[nal]     
    }
    
  }, 5000);
}

card.addEventListener("mouseover", function(e){
  e.preventDefault()
  
  let storage = localStorage.getItem("senha") || '[]'
  let senha = JSON.parse(storage)
  display.textContent = senha
})


btnVisualizaSenha.addEventListener("click", function(e){
  e.preventDefault()
 
  let storage = localStorage.getItem("senha") || '[]'
  let senha = JSON.parse(storage)
  display.textContent = senha

})

muda_cor_de_fundo();
btnGeraSenha.addEventListener("click", function (e) {
  e.preventDefault();
  gerarSenha();
  
});
