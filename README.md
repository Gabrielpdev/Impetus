<h2 align="center"> 
<img alt="Impetus logo" title="#Impetus" src=".github/Impetus.png" width="250px" />
</h2>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Gabrielpdev/Impetus?style=flat-square&color=FF5844">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Gabrielpdev/Impetus?style=flat-square&color=FF5844">
  <img alt="GitHub stars" src="https://img.shields.io/github/stars/Gabrielpdev/Impetus?style=flat-square&color=FF5844"> 
</p>

<h3 align="center"> A Impetus é uma ideia tirada do papel, e uma evolução contínua. Permitimos ao RH mais autonomia, agilidade e eficiência nos processos seletivos humanizados. </h3>

<p align="center">
  <a href="#bookmark-Funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#construction-Requerimentos">Requerimentos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-Tecnologias-usadas">Tecnologias usadas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#arrow_forward-Rodando-a-aplicação">Rodando a aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-Contribuindo">Contribuindo</a>
</p>

## :rotating_light: Motivação

- Devido a pandemia a taxa de desemprego subiu para 13,3% com um fechamento de 8,9 milhões de postos de trabalho em apenas 3 meses de acordo com IBGE.  Também devido ao afastamento social muitas empresas modificaram seus processos para serem realizado a distância utilizando a tecnologia, em muitas delas o processo de seleção foi um deles. Com a recuperação da economia é esperado que grande parte dessas pessoas volte a passar por processos seletivos para serem realocadas, o alto volume de candidatos traz consigo um problema latente a dificuldade de comunicação Segundo dados da pesquisa realizada pelo nosso time com 53 pessoas, 90,6% delas declararam que se sentem frustradas quando o resultado do processo seletivo não é disponibilizado, E ainda declararam que um dos principais problemas dos processos seletivos é a falta de transparência e feedback.
- Pensando nisso, desenvolvemos a Impetus. Uma solução que resolve tanto os problemas das empresas quanto dos candidatos. A empresa se cadastra através de uma plataforma web e a partir daí pode cadastrar vagas de emprego, A Impetus então disponibiliza um link para a empresa divulgar para os candidatos. O candidato acessa o link e se inscreve no processo seletivo através do site da empresa, A partir daí nosso Bot entra em contato com o candidato através do WhatsApp, Criando assim um canal de comunicação, onde candidato terá acesso as informações sobre a vaga, resultados do processo seletivo e receberá feedbacks referentes ao seu desempenho.
- Futuramente, será implementado uma funcionalidade de pré-seleção que irá eliminar alguns candidatos antes mesmo da empresa analisar os currículos, através de pequenos testes. Mas agora você deve ter se perguntado? Como a Impetus ganha dinheiro? Para o candidato é 100% gratuito e para as empresas um perídodo de 7 dias grátis Depois do período de avaliação a empresa pode optar pelo plano Enterprise, no qual a empresa paga por candidato Ou o plano Premium, no qual personalizamos o custo de acordo com a necessidade da empresa. Como objetivo maior, nós buscamos revolucionar a forma de encontrar candidatos para vagas de emprego, Melhorando a comunicação entre o RH e cada candidato, criando uma relação amigável. A Impetus foi desenvolvida por Giovany Nogueira, João Vitor, Erick Cintra, Júlia Stefanoni e Gabriel Pereira. Impetus Por um RH mais humano, rápido e inteligente.

## :bookmark: Funcionalidades
<p> :heavy_check_mark: &nbsp Cadastrar vagas </p>
<p> :heavy_check_mark: &nbsp Cadastrar templates de feedback </p>
<p> :heavy_check_mark: &nbsp Gerenciamento das etapas do processo seletivo e feedbacks relativos a etapas </p>
<p> :heavy_check_mark: &nbsp Broadcast enviado ao número do whatsapp do candidato a cada alteração no status da vaga, próximas etapas e feedbacks </p>

## ⚙ Acesso a plataforma
[Clique aqui](https://friendly-poincare-9e8d11.netlify.app/)

## :construction: Requerimentos 
 
- [Git](https://git-scm.com/)
- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [NPM](https://www.npmjs.com/) (Optional)

## :rocket: Tecnologias usadas

-  [Typescript](https://www.typescriptlang.org/)
-  [ReactJS](https://reactjs.org/)
-  [ESLint](https://eslint.org/)
-  [Prettier](https://prettier.io/)
-  [Styled-Components](https://styled-components.com/)
-  [Axios](https://github.com/axios/axios)

## :arrow_forward: Rodando a aplicação

### No terminal 

```sh
# Clone o projeto
git clone https://github.com/Gabrielpdev/Impetus.git

# Vá para a pasta do projeto
cd Impetus

# Instale as dependências
yarn install

# Execute a aplicação
yarn start
```

Agora a aplicação estará disponível localmente em: http://localhost:3000/

## :rocket: Contribuindo

Contribuições com o projeto são muito apreciadas. Para isso:

- Faça um Fork do projeto

- Crie uma branch para sua feature
```
git checkout -b feature
```

- Adicione as mudanças
```
git add . 
```

- _Commit as mudanças 
```
git commit -m 'Adicionando a feature X'
```

- Faça o push da branch 
```
git push origin feature
```

- Abra um Pull Request
