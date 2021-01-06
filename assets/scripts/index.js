/* QUERI SELECTOR REDUZIDO */
var $ = document.querySelector.bind(document);

/************************************** 
            TELA DE LOADING  
***************************************/
function loading(){
    var load = $('.load');
    var conteudo = $('.conteudo');
    var titleLoad = $('.titleLoad')

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
    
    var btns = $('.btns');
    btns.innerHTML = `
    <button onclick="${funcName}()">${opt}</button>
    <button onclick="${funcName2}()">${opt2}</button>`
    
}


/************************************** 
            EXIBIR MENSAGENS 
***************************************/

function mensagens(text){
    var mensagem = $('.mensagem');
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
    var back = $('.background');
    back.classList.add('back');
    criarBtn(...listaBtn[14]);
}



/************************************** 
            ESCONDER BTNS
***************************************/
function escoderBtns(time){
    var btns = $('.btns');
    btns.style.display = 'none'

    setTimeout(function(){
        btns.style.display = 'inline'
    }, time)
}



/************************************** 
                START
***************************************/
function start(){
    
    var back = $('.background');
    back.classList.remove('back');
    mensagens(listaMensagens[0]);
    escoderBtns(9000);
    criarBtn(...listaBtn[13]);  
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
    var backDark = $('body');
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
    mensagens(listaMensagens[1]);
    escoderBtns(4000);
    criarBtn(...listaBtn[0]);
}




function SairDeCasa(){
    mensagens(listaMensagens[2]);
    escoderBtns(5000);
    criarBtn(...listaBtn[1]);
}




function sairApe(){
    mensagens(listaMensagens[3]);
    escoderBtns(4000);
    criarBtn(...listaBtn[2]);
}




function sairDeCarro(){
    mensagens(listaMensagens[4]);
    escoderBtns(9000);
    criarBtn(...listaBtn[3]);
}



function casaDosPais(){
    mensagens(listaMensagens[5]);
    escoderBtns(8000);
    criarBtn(...listaBtn[4]);
}




function chegouAcasaDosPais(){
    mensagens(listaMensagens[6]);
    escoderBtns(8000);
    criarBtn(...listaBtn[5]);
}




function armadilha(){
    mensagens(listaMensagens[7]);
    escoderBtns(4000);
    criarBtn(...listaBtn[6]);
}




function averiguarCidade(){
    mensagens(listaMensagens[8]);
    escoderBtns(9000);
    criarBtn(...listaBtn[7]);
}




function buscarSuprimentos(){
    mensagens(listaMensagens[9]);
    escoderBtns(6000);
    criarBtn(...listaBtn[8]);
}




function vasculharCasa(){
    mensagens(listaMensagens[10]);
    escoderBtns(6000);
    criarBtn(...listaBtn[9]);
}



function win (){
    mensagens(listaMensagens[11]);
    escoderBtns(5000);
    criarBtn(...listaBtn[10]);
}




function ligarIrmao(){
    mensagens(listaMensagens[12]);
    escoderBtns(5000);
    criarBtn(...listaBtn[11]);
}



criarBtn(...listaBtn[12])

