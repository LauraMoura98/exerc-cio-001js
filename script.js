var btn = document.querySelector(".botao");
  var nome = document.querySelector(".nome")
  var pais = document.querySelector(".pais")
  var text = document.querySelector(".texto")
  
  pais.addEventListener("keydown" , function(e){
    if(e.key == 'Enter')
      clica()
  })

 nome.addEventListener("keydown" , function(e){
    if(e.key == 'Enter')
      clica()
  })
  
function clica(){
  let n1 = nome.value
  let p1 = pais.value.toLowerCase()
  text.innerHTML = `Olá <strong>${n1}</strong>! Aqui está seu resultado: <br>`
     
    if (p1 == "brasil"){
    text.innerHTML += `Seu país se chama "${p1}"? Então, sim! Você é brasileiro!c;`
  }
  else {
    text.innerHTML += `Seu país se chama "${p1}"? Desculpe, você não é brasileiro :c!`
  }
 
}