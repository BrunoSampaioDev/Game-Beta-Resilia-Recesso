var listaMensagens = [
    'A noite de 25 de Abril parecia tranquila até que tudo ficou agitado, Gritaria, explosões correria e pânico para todos os lados! Você está em casa e não sabe o que esta acontecendo...',
    'Você decidiu ficar e uma orda de zumbis se aproxima, voce precisa decidir . ',
    'Voce decidiu sair de casa para explorar um pouco mais e tentar entender  que esta acontecendo, agora escolha ... ',
    'Voce foi corajoso e decidiu sair a pe. agora escolha qual caminho vai seguir...',
    'Voce decidiu que sair de carro e mais seguro e agora precisar escolher para onde vai... Voce pode Averiguar pela cidade ou Ir para casa de seus pais onde sua filha foi passar o fim de semana ',
    'Ohh... não um carro capotado no meio caminho, parece ser um acidente grave, Ao lado do carro um mulher com uma criança pede ajuda desesperadamente, o que voce vai fazer ?',
    'Chegando na casa dos seus pais não havia ninguém lá e voce nao sabe para onde todos foram. Voce sai e procura pelos familiares ou vasculha a casa em busca de pistas ?',
    'Era tudo uma armadilha, voce foi cercado por um grupo de pessoas cacando suprimentos. Game Over!',
    'As ruas estão um verdadeiro caos, um virus letal está tranformando todos em zumbis! Voce Volta e vai para a casa dos pais ou aproveita que esta na cidade e prossegue em busca de suprimentos',
    'Voce conseguiu coletar bons suprimentos em meio ao caos, parabens! mas agora decida: continuar buscando suprimentos ou ir a casa dos pais',
    'Em sua busca por pistas na casa de seus pais você encontrou um bilhete: Fomos para o alto das montanhas ao norte! e gora voce precisar decidir...',
    'Voce chegou no alto da montanha, e encontrou seus familiares e agora esta em seguranca! voce venceu!',
    'Seu irmão chegou na sua casa, e informou que um virus esta transformando todos em zumbis, agora vocês precisam decidir'
]

var listaBtn = [
    ['Ligar para o irmao.', 'ligarIrmao', 'continuar em casa', 'gameOver' ],
    ['Sair de carro', 'sairDeCarro', 'Sair a pe', 'sairApe' ],
    ['Averiguar pela cidade', 'averiguarCidade', 'Ir a casa dos pais', 'casaDosPais'],
    ['Averiguar pela cidade', 'averiguarCidade', 'Ir a casa dos pais', 'casaDosPais'],
    ['Passar direto', 'chegouAcasaDosPais', 'Parar e ajudar', 'armadilha'],
    ['Procurar por familiares', 'averiguarCidade', 'Procurar por pistas na casa', 'vasculharCasa'],
    ['iniciar um novo jogo', 'start', 'Encerrar o jogo', 'quit' ],
    ['Vai a casa dos pais', 'chegouAcasaDosPais', 'Procurar por suprimentos', 'buscarSuprimentos' ],
    ['Vai a casa dos pais', 'chegouAcasaDosPais', 'procurar mais suprimentos', 'gameOver'],
    ['Subir a montanhas', 'win', 'Procurar suprimentos', 'buscarSuprimentos'],
    ['Jogar novamente', 'start', 'Encerar o jogo', 'quit' ],
    ['continua em casa.', 'gameOver', 'sair de casa', 'SairDeCasa' ],
    ['iniciar.', 'start', 'instruction', 'instruction'],
    ['fica em casa.', 'FicarEmCasa', 'sair de casa', 'SairDeCasa' ],
    ['Iniciar novo jogo', 'start', 'sair do jogo', 'quit' ]
]