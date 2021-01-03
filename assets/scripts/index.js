
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
                QUIT
***************************************/
function quit(){
    window.close();
}




/************************************** 
            CAMINHOS DO GAME
***************************************/

function FicarEmCasa(){ 
    mensagens('Você decidiu ficar e uma orda de zumbis se aproxima, voce precisa decidir . ');
    criarBtn('Ligar para o irmao.', 'ligarIrmao', 'continuar em casa', 'gameOver' );
}




function SairDeCasa(){
    mensagens('Voce decidiu sair de casa para explorar um pouco mais e tentar entender  que esta acontecendo, agora escolha ... ');
    criarBtn('Sair de carro', 'sairDeCarro', 'Sair a pe', 'sairApe' );
}




function sairApe(){
    mensagens('Voce foi corajoso e decidiu sair a pe. agora escolha qual caminho vai seguir...');
    criarBtn('Averiguar pela cidade', 'averiguarCidade', 'Ir a casa dos pais', 'casaDosPais'  );
}




function sairDeCarro(){
    mensagens('Voce decidiu que sair de carro e mais seguro e agora precisar escolher para onde vai... Voce pode Averiguar pela cidade ou Ir para casa de seus pais onde sua filha foi passar o fim de semana ');
    criarBtn('Averiguar pela cidade', 'averiguarCidade', 'Ir a casa dos pais', 'casaDosPais' );
}



function casaDosPais(){
    mensagens('Ohh... não um carro capotado no meio caminho, parece ser um acidente grave, Ao lado do carro um mulher com uma criança pede ajuda desesperadamente, o que voce vai fazer ?');
    criarBtn('Passar direto', 'chegouAcasaDosPais', 'Parar e ajudar', 'armadilha' );
}




function chegouAcasaDosPais(){
    mensagens('Chegando na casa dos seus pais não havia ninguém lá e voce nao sabe para onde todos foram. Voce sai e procura pelos familiares ou vasculha a casa em busca de pistas ?');
    criarBtn('Procurar por familiares', 'averiguarCidade', 'Procurar por pistas na casa', 'vasculharCasa' );
}




function armadilha(){
    mensagens('Era tudo uma armadilha, voce foi cercado por um grupo de pessoas cacando suprimentos. Game Over!');
    criarBtn('iniciar um novo jogo', 'start', 'Encerrar o jogo', 'quit' );
}




function averiguarCidade(){
    mensagens('As ruas estão um verdadeiro caos, um virus letal está tranformando todos em zumbis! Voce Volta e vai para a casa dos pais ou aproveita que esta na cidade e prossegue em busca de suprimentos');
    criarBtn('Vai a casa dos pais', 'chegouAcasaDosPais', 'Procurar por suprimentos', 'buscarSuprimentos' );
}




function buscarSuprimentos(){
    mensagens('Voce conseguiu coletar bons suprimentos em meio ao caos, parabens! mas agora decida: continuar buscando suprimentos ou ir a casa dos pais');
    criarBtn('Vai a casa dos pais', 'chegouAcasaDosPais', 'continuar a busca por suprimentos', 'gameOver' );
}




function vasculharCasa(){
    mensagens('Em sua busca por pistas na casa de seus pais você encontrou um bilhete: Fomos para o alto das montanhas ao norte! e gora voce precisar decidir...');
    criarBtn('Subir a montanhas', 'win', 'Procurar suprimentos', 'buscarSuprimentos' );
}



function win (){
    mensagens('Voce chegou no alto da montanha, e encontrou seus familiares e agora esta em seguranca! voce venceu!');
    criarBtn('Jogar novamente', 'start', 'Encerar o jogo', 'quit' );
}




function ligarIrmao(){
    mensagens('Seu irmão chegou na sua casa, e informou que um virus esta transformando todos em zumbis, agora vocês precisam decidir');
    criarBtn('continua em casa.', 'gameOver', 'sair de casa', 'SairDeCasa' );
}



criarBtn('iniciar.', 'start', 'instruction', 'instruction')

