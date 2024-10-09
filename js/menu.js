// Selecionando o link com a palavra menu
const botaoMenu = document.querySelector(".titulo-menu a");

// Selecionando a lista de links do menu
const listaDeLinks = document.querySelector(".links-menu")

//ouvinte de eventos para o click no botão menu
botaoMenu.addEventListener("click", function( event ){ 
    /* Anulando o comportamento padrão de recarregar a página atarvés de um link */
    event.preventDefault();
    
    /* Abrimos/fechamos a lista de links usando o toggle na classe aberto */
    listaDeLinks.classList.toggle("aberto"); 

    if (listaDeLinks.classList.contains("aberto")) {
        botaoMenu.innerHTML = "Fechar &times";
    } else {
        botaoMenu.innerHTML = "Menu &equiv;"    
    }
   
    
});