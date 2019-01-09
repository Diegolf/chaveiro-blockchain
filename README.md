# chaveiro-blockchain

Aplicação para poder armazernar chaves (usuários e senhas) em Blockchain da Ethereum utilizando MetaMask e a biblioteca web3.js para javascript

## Iniciando

O aplicativo está disponível em https://chaveiro-blockchain.herokuapp.com para testes e uso.

### Prerequesitos

Para poder utilizar o chaveiro, é necessário instalar o plugin do <code> MetaMask </code> no navegador, ter uma conta e Ether.

#### Instalando e criando uma nova carteira no MetaMask

Na página para gereciamento e instalação de plugins para o navegador (no exemplo utilizaremos Google Chrome) busque por <code>MetaMask</code> e adicione ao navegador:

<p align="center">
  <img src="img/1.png?raw=true"/>
</p>

Após a instalação, uma página de boas vinda deve abrir. Clique em <code>CONTINUE</code> :

<p align="center">
  <img src="img/2.png?raw=true"/>
</p>

Agora devemos criar uma senha. Essa senha será necessária para poder acessar a sua carteira e realizar transações. Digite a senha e clique em <code>CREATE</code>.
Nesta tela, há também a opção <code>Import with seed phrase
</code> para o caso de que você já tenha uma carteira <code>Ethereum</code> e queira apenas importar ela utilizando o código mnemônico (veremos sobre isso em seguida).

<p align="center">
  <img src="img/3.png?raw=true"/>
</p>

A seguir é exibido um texto explicando que uma imagem única foi gerada para a sua conta e que essa imagem vai aparecer sempre que for necessário confirmar uma transação. Clique em <code>NEXT</code>.

<p align="center">
  <img src="img/4.png?raw=true"/>
</p>

Agora os termos de uso. Leia com atenção e após a leitura clique em <code>ACCEPT</code>.

<p align="center">
  <img src="img/5.png?raw=true"/>
</p>

Notícia de privacidade dizendo que sua conta estará visível para todos os sites que você visitar, por isso recomenda-se que você desconecte-se de sua conta sempre que terminar de utilizar. Quando terminar de ler clique em <code>ACCEPT</code>.

<p align="center">
  <img src="img/6.png?raw=true"/>
</p>

Aviso de <i>Phishing</i> dizendo que há vários casos de sites foram temporariamente comprometidos. O que involve abrir janelas falsas do <code>MetaMask</code> pedindo pelo código mnemônico do usuário. O aviso diz que o MetaMask nunca vai pedir tal informação e pede para que os usuários reportem tais ocorrências para o suporte em <code> support@metamask.io</code>. Após a leitura clique em <code>ACCPET</code>.

<p align="center">
  <img src="img/7.png?raw=true"/>
</p>

Agora é gerado o seu Mnemônico, uma sequência de 12 (doze) palavras aleatórias que serão utilizadas para gerar a chave privada. É possivel modificar as palavras agora e elas serão utilizadas sempre que você quiser importar a sua carteira em outro navegador ou máquina. 
<strong>Atenção:</strong> Guarde bem o seu mnemônico, pois qualquer pessoa que tenha acesso à ele e sua senha terá acesso total à sua carteira.

Após escolher e memorizar o seu mnemônico clique em <code>NEXT</code>

<p align="center">
  <img src="img/8.png?raw=true"/>
</p>

Agora, para confirmar, basta clicar nas palavras na mesma sequência do seu mnemônico e clicar em <code>CONFIRM</code>.

<p align="center">
  <img src="img/10.png?raw=true"/>
</p>

Agora toda vez que for utilizar a sua conta Ethereum será necessário apenas informar a sua senha no plugin do MetaMask.

#### Como conseguir Ether para utulizar network de teste da Ethereum

Vale lembrar que a <code>Main Network</code> da ethereum utiliza dinheiro real para realizar transações, por isso, para poder testar a aplicação utilizaremos a network <code>Rinkeby</code> da Ethereum que é possivel receber alguns Ethers "de graça" (o Ether nessa network não tem valor real). Na tela que abriu modifique a network atual para a Rinkeby:

<p align="center">
  <img src="img/9.png?raw=true"/>
</p>

Para receber alguns Ethers na network Rinkeby é necessário seguir alguns passos:

##### 1. Copie o endereço da sua conta:

<p align="center">
  <img src="img/11.png?raw=true"/>
</p>

##### 2. Faça uma publicação no Google+, Twitter ou Facebook com apenas o endereço da sua conta: 

<p align="center">
  <img src="img/12.png?raw=true"/>
</p>

##### 3. Copie o endereço da postagem, cole em: https://faucet.rinkeby.io/ e selecione à direita a quantiade de Ether que deseja receber. Os tempos informados significam a quantiade de tempo necessário esperar para requistar mais Ether utilizando a mesma conta (Google+ no caso):

<p align="center">
  <img src="img/13.png?raw=true"/>
</p>

Uma tela de confirmação para evitar bots será exibida. Após a confirmação basta aguardar alguns segundos que os Ethers serão confirmados em sua conta.

<p align="center">
  <img src="img/14.png?raw=true"/>
</p>

## Utilizando a aplicação

Há duas formas de utilizar a aplicação, é possivel acessar <code>https://chaveiro-blockchain.herokuapp.com</code> ou clonar o projeto e rodar o servidor localmente:
Lembrando que para poder rodar a aplicação localmente é necessário ter o <code>NodeJS</code> instalado.

'''
    $ git clone https://github.com/Diegolf/chaveiro-blockchain.git
    $ cd chaveiro-blockchain
    $ npm install
    $ node index.js
'''

Agora basta acessar <code>127.0.0.1:5000</code> no navegador.

### Primeiros passos

Ao acessar a página, uma tela de boas vinda será exibida. Nela há dois campos a serem preenchidos para poder acessar o chaveiro:
<ul>
    <li><strong>Endereço do chaveiro</strong>: o endereço do contrato que iremos criar em breve </li>
    <li><strong>Senha da criptografia</strong>: será que será utilizada para criptogradar e descriptografar os dados que serão armazenados na blockchain de forma simétrica, uma vez que os dados armazenados nas networks da Ethereum são publicos, as informações serão criptografadas para garantir a privacidade dos dados. <strong>ATENÇÃO: </strong> essa senha não é a sua senha da carteira ethereum, é apenas uma sequência qualquer de caracteres de sua preferência</li>
</ul>

Na parte superior direita da tela há um ícone que indica o status da conexão com o web3.

Inialmente vamos clicar em <code>Novo Contrato</code>

<p align="center">
  <img src="img/15.png?raw=true"/>
</p>

Nesta tela vamos clicar em <code>Novo Contrato</code>. 
<strong>Importante: </strong> Para todas as transações que terão gasto de Ether (transações de escrita) será necessário confirmar estar de acordo com a tranação no MetaMask. Uma notificação do MetaMask exibindo a quantidade de Ether que será gasto e os detalhes dos dados que serão enviados vai aparecer pedindo para confirmar a transação. Clique em <code>CONFIRM</code>. 
Após isso a transação será enviada e deve demorar entre 10 à 22 segundos para ser confirmada, basta aguardar e assim que ela for confirmada o contrato será automaticamente carregado.
<strong>Atenção:</strong> 
<ul>
    <li>o endereço do contrato será copiado para o console e para a àrea de transferência. Lembre-se de guardar este endereço para poder acessar seus dados novamente.</li>
    <li>Apenas a conta que criou o contrato (fez o deploy) pode ler e modificar os dados do contrato.</li>
</ul>

<p align="center">
  <img src="img/16.png?raw=true"/>
</p>

Agora será requisitado uma senha para poder criptografar os dados que serão enviados para a blockchain. Lembrando que esta não é as sua senha da carteira e sim qualquer sequência de caracteres de sua preferência.

### Chaveiro

Nesta tela há dois principais quadros <code>Lista de chaves</code> e <code>Nova Chave</code>:

Para adicionar novas chaves ao seu chaveiros basta informar os três campos <code>destino</code>, <code>email</code> e <code>senha</code> e clicar em <code>Adicionar Nova Chave</code>. Após confirmar o envio da transação basta aguardar alguns segundos para que a transação seja confirmada pela Network e a chave será adicionada.
É possivel adicionar várias chaves simultâneamente.
Caso a transação demore mais do que 17 segundos (o tempo médio é de 15 segundos) para ser confirmada pela Network, basta deslogar e logar novamente para listar as chaves.

<p align="center">
  <img src="img/17.png?raw=true"/>
</p>

No quando de Lista de Chaves há dois botões para cada chave:
<ul>
    <li>Copiar Senha: descritografa e em seguida copia a senha para a àrea de transferência;</li>
    <li>Excluir Chave: remove a chave do chaveiro. Assim como qualquer outra transação é necessário aguardar que a Network confirme e é possivel excluir várias de uma vez.</li>
</ul>

<p align="center">
  <img src="img/18.png?raw=true"/>
</p>

### Menu de opções

Após acessar um contrato, um menu aparece no canto superior esquerdo com as opções:

<ul>
    <li>Gerenciar Contrato: nessa tela é possivel fazer o deploy de um novo contrato ou carregar um contrato existente utilizando o seu endereço;</li>
    <li>Gerenciar Chaves: nessa tela são listadas todas as chaves do chaveiro e é onde podemos incluir novas chaves; </li>
    <li>Logout: desconecta do contrato atual, limpando as chaves carregadas e a senha da criptografia da memória;</li>
</ul>

<strong>Importante:</strong> por motivos de segurança a aplicação vai desconectar automaticamente após um minuto e meio. Ainda será possível ver o status das transações que estiverem pendentes.

<p align="center">
  <img src="img/19.png?raw=true"/>
</p>
