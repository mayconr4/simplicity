/* Selecionando os elementos que serão manipulados*/
const formulario = document.querySelector("form");
const campoCep = formulario.querySelector("#cep");
const campoEndereco = formulario.querySelector("#endereco");
const campoBairro = formulario.querySelector("#bairro");
const campoCidade = formulario.querySelector("#cidade");
const campoEstado = formulario.querySelector("#estado");
const botaoBuscar = formulario.querySelector("#buscar");
const mensagemStatus = formulario.querySelector("#status");

/* Capturando o clique no botão buscar */
botaoBuscar.addEventListener("click", function(){
    /* Verificando se o CEP não tem 9 digitos */
    if ( campoCep.value.length !== 9 ){
        //informar o usuario sobre o erro
        mensagemStatus.textContent = "Digite um CEP válido";
        mensagemStatus.style.color = "purple";

        //parar completamente a execução do script 
        return;
    }  
     
    /* Guardando o valor do cep didgitado */
    let cepDigitado = campoCep.value; 

   
    
     /* AJAX - asyncronous JavaScript And XML
        tecnica de comunicação (transmissão, recebimento) de dados muito usada
        entre sistemas e tecnologias diferentes. */
    

});// final do evento do botão