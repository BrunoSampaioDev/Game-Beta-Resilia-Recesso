/************************************** 
            TELA DE LOADING  
***************************************/
function loading(){
    var load = document.querySelector('.load');
    var conteudo = document.querySelector('.conteudo');
    var titleLoad = document.querySelector('.titleLoad')

    conteudo.style.display = 'none'
    load.classList.add('loading');

    setTimeout(function(){
        conteudo.style.display = 'inline'
        load.classList.remove('loading');
        titleLoad.style.display = 'none'
    }, 5000)
   
}
loading()




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
            ESCONDER BTNS
***************************************/
function escoderBtns(time){
    var btns = document.querySelector('.btns');
    btns.style.display = 'none'

    setTimeout(function(){
        btns.style.display = 'inline'
    }, time)
}



/************************************** 
                START
***************************************/
function start(){
    var back = document.querySelector('.background');
    back.classList.remove('back');
    mensagens(`A noite de 25 de Abril parecia tranquila até que tudo ficou agitado, Gritaria, explosões correria e pânico para todos os lados! Você está em casa e não sabe o que esta acontecendo...`);
    escoderBtns(9000);
    criarBtn('fica em casa.', 'FicarEmCasa', 'sair de casa', 'SairDeCasa' );  
}




/************************************** 
                QUIT
***************************************/
function quit(){
    window.close();
}



/************************************** 
              Dark Mode
***************************************/
function darkMode(){
    var backDark = document.querySelector('body');
    var radios = document.getElementsByName('mode');
    
    for(var i = 0 in radios){
        if(radios[i].checked && radios[i].value == 'Dark'){
            backDark.classList.add('backgroundBlack')
        }
        if(radios[i].checked && radios[i].value == 'White'){
            backDark.classList.remove('backgroundBlack')
        }
    }

}
darkMode()





/************************************** 
            CAMINHOS DO GAME
***************************************/

function FicarEmCasa(){ 
    mensagens('Você decidiu ficar e uma orda de zumbis se aproxima, voce precisa decidir . ');
    escoderBtns(4000);
    criarBtn('Ligar para o irmao.', 'ligarIrmao', 'continuar em casa', 'gameOver' );
}




function SairDeCasa(){
    mensagens('Voce decidiu sair de casa para explorar um pouco mais e tentar entender  que esta acontecendo, agora escolha ... ');
    escoderBtns(5000);
    criarBtn('Sair de carro', 'sairDeCarro', 'Sair a pe', 'sairApe' );
}




function sairApe(){
    mensagens('Voce foi corajoso e decidiu sair a pe. agora escolha qual caminho vai seguir...');
    escoderBtns(4000);
    criarBtn('Averiguar pela cidade', 'averiguarCidade', 'Ir a casa dos pais', 'casaDosPais'  );
}




function sairDeCarro(){
    mensagens('Voce decidiu que sair de carro e mais seguro e agora precisar escolher para onde vai... Voce pode Averiguar pela cidade ou Ir para casa de seus pais onde sua filha foi passar o fim de semana ');
    escoderBtns(9000);
    criarBtn('Averiguar pela cidade', 'averiguarCidade', 'Ir a casa dos pais', 'casaDosPais' );
}



function casaDosPais(){
    mensagens('Ohh... não um carro capotado no meio caminho, parece ser um acidente grave, Ao lado do carro um mulher com uma criança pede ajuda desesperadamente, o que voce vai fazer ?');
    escoderBtns(8000);
    criarBtn('Passar direto', 'chegouAcasaDosPais', 'Parar e ajudar', 'armadilha' );
}




function chegouAcasaDosPais(){
    mensagens('Chegando na casa dos seus pais não havia ninguém lá e voce nao sabe para onde todos foram. Voce sai e procura pelos familiares ou vasculha a casa em busca de pistas ?');
    escoderBtns(8000);
    criarBtn('Procurar por familiares', 'averiguarCidade', 'Procurar por pistas na casa', 'vasculharCasa' );
}




function armadilha(){
    mensagens('Era tudo uma armadilha, voce foi cercado por um grupo de pessoas cacando suprimentos. Game Over!');
    escoderBtns(4000);
    criarBtn('iniciar um novo jogo', 'start', 'Encerrar o jogo', 'quit' );
}




function averiguarCidade(){
    mensagens('As ruas estão um verdadeiro caos, um virus letal está tranformando todos em zumbis! Voce Volta e vai para a casa dos pais ou aproveita que esta na cidade e prossegue em busca de suprimentos');
    escoderBtns(9000);
    criarBtn('Vai a casa dos pais', 'chegouAcasaDosPais', 'Procurar por suprimentos', 'buscarSuprimentos' );
}




function buscarSuprimentos(){
    mensagens('Voce conseguiu coletar bons suprimentos em meio ao caos, parabens! mas agora decida: continuar buscando suprimentos ou ir a casa dos pais');
    escoderBtns(6000);
    criarBtn('Vai a casa dos pais', 'chegouAcasaDosPais', 'continuar a busca por suprimentos', 'gameOver' );
}




function vasculharCasa(){
    mensagens('Em sua busca por pistas na casa de seus pais você encontrou um bilhete: Fomos para o alto das montanhas ao norte! e gora voce precisar decidir...');
    escoderBtns(6000);
    criarBtn('Subir a montanhas', 'win', 'Procurar suprimentos', 'buscarSuprimentos' );
}



function win (){
    mensagens('Voce chegou no alto da montanha, e encontrou seus familiares e agora esta em seguranca! voce venceu!');
    escoderBtns(5000);
    criarBtn('Jogar novamente', 'start', 'Encerar o jogo', 'quit' );
}




function ligarIrmao(){
    mensagens('Seu irmão chegou na sua casa, e informou que um virus esta transformando todos em zumbis, agora vocês precisam decidir');
    escoderBtns(5000);
    criarBtn('continua em casa.', 'gameOver', 'sair de casa', 'SairDeCasa' );
}



criarBtn('iniciar.', 'start', 'instruction', 'instruction')

