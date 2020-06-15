# Sula

## Descrição

Este é um protótipo de um projeto idealizado para o [Hackaton CCR](https://hackathonccr.shawee.io/),
organizado pela [Shawee](https://shawee.io/), que ocorreu entre os dias 12 e 14 de junho de 2020.

A solução foi pensada para ser um aplicativo nativo, mas por conta do tempo disponível e da pouca experiência dos desenvolvedores do time com produção de aplicativos nativos, este protótipo foi feito como uma Single Page Application (SPA).

## Requisitos para iniciar a aplicação

* Node versão 10.16.2 ou superior
* NPM versão 6.10.3 ou superior
* Angular versão 9.1.11 ou superior
* Uma chave válida para a API do Google Maps

## Limitações

Os testes foram realizados com nos seguintes ambientes:
* Google Chrome versão 83.0.4103.97 em um computador com Windows 10;
* Google Chrome versão 83.0.4103.101 em um smartphone com Android 9

Não há garantia de funcione com outros ambientes, visto que a aplicação faz uso da Web Speech API, e não são todos os navegadores que suportam (por exemplo, não foi possível abrir a aplicação em um iPhone no Safari).


## Como executar

Depois de verificar os requisitos e as limitações, siga os seguintes passos para executar e abrir a aplicação:

* Altere o arquivo `index.html` colocando uma chave válida para a API do Google Maps (mais informações [aqui](https://developers.google.com/maps/gmp-get-started)).
* Instale todas as dependências com o comando `npm install`
* Execute o comando `ng serve`
* No navegador, acesse `http://localhost:4200`

## Funcionalidades para testar

Após seguir as etapas acima, é possível executar algumas ações na aplicação.:

1. Clique em "Quero me cadastrar" e preencha o formulário. Ao final você será redirecionado para a tela de login.
2. Em vez de fazer o passo 1, clique em "Já sou cadastrado". Você também será redirecionado para a tela de login.
3. Informe qualquer email e qualquer senha e clique em "Entrar".
4. Clique em "Fale com a Sula" e tente dizer "oi", "alô", "olá", "que horas são" e "quem é você". Ela irá responder com alguma coisa.
5. Clique no botão "Voltar" depois clique em "GPS".
6. fale as seguintes frases e veja o resultado no mapa e escute a resposta:
    * Estou com fome
    * Preciso fazer exames
    * Estou doente
    * Preciso ir no médico
    * Estou cansado
    * Preciso dormir
    * Preciso descansar

    As frases do passo 4 também podem ser ditas aqui, mas elas não interferem no mapa.

