
/************************************** 
            CRIAR BOTÕES  
***************************************/
function criarBtn(opt, funcName, opt2, funcName2) {
    
    var btns = document.querySelector('.btns');
    btns.innerHTML = `
    <button onclick="${funcName}()">${opt}</button>
    <button onclick="${funcName2}()">${opt2}</button>`
    
}


/************************************** 
            EXIBIR MENSAGENS 
***************************************/

function mensagens(text){
    var mensagem = document.querySelector('.mensagem');
    mensagem.innerHTML = `${text}`

    function animarTexto(elemento){
        const textArray = elemento.innerHTML.split('')
        elemento.innerHTML = '';
        textArray.forEach((letra, i) =>{
            setTimeout(function(){
                elemento.innerHTML += letra
            }, 50 * i)
        });
    }
    animarTexto(mensagem);
}


/************************************** 
             GAME OVER 
***************************************/

function gameOver(){
    mensagens('Voce foi cercado por zumbis! Game Over!');
    var back = document.querySelector('.background');
    back.classList.add('back');
    criarBtn('Iniciar novo jogo', 'start', 'sair do jogo', 'quit' );
}



/************************************** 
                START
***************************************/
function start(){
    var back = document.querySelector('.background');
    back.classList.remove('back');
    mensagens(`A noite de 25 de Abril parecia tranquila até que tudo ficou agitado, Gritaria, explosões correria e pânico para todos os lados! Você está em casa e não sabe o que esta acontecendo...`);
    criarBtn('fica em casa.', 'FicarEmCasa', 'sair de casa', 'SairDeCasa' );
}




/************************************** 
            CAMINHOS DO GAME
***************************************/

function FicarEmCasa(){ 
    mensagens('Você decidiu ficar em casa e agora tem 2 opcoes!');
    criarBtn('Ligar para o irmao.', 'ligaIrmao', 'continuar em casa', 'gameOver' );
}

function SairDeCasa(){
    mensagens('oba');
    criarBtn('fica em casa.', 'FicarEmCasa', 'sair de casa', 'SairDeCasa' );
}




criarBtn('iniciar.', 'start', 'instruction', 'instruction')

