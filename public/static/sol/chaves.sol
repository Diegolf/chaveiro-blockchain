pragma solidity ^0.4.10;
contract Chaveiro {
    
    address private owner;
    uint private ultimoId;
    bytes32 private chaveGeral;
    
    struct Chave{
        uint id;
        string destino; // página a qual a senha se refere
        string usuario;
        string senha;
    }
    
    // Basicamente como um objeto em java com id e um valor
    mapping(uint => Chave) chaves;
    uint[] chavesIds;

    function Chaveiro(bytes32 _chaveGeral) public {
        owner = msg.sender;
        chaveGeral = _chaveGeral;
        ultimoId = 1;
    }
    
    // funções com esse modificador podem ser utilizadas apenas pela pessoa que fez o deploy do contrato
    modifier apenasDono() {
        require (msg.sender == owner);
        _;
    }

    // modifier executa antes da execução de uma função
    modifier chaveExiste(uint _id){
        // Em ethereum, quando se usa mapping, se um "objeto" não existe, ele tem todos os valores 0
        require(chaves[_id].id > 0);
        _;
    }

    function getChaveGeral() public apenasDono constant returns(bytes32){
        return chaveGeral;
    }

    function setChaveGeral(bytes32 _chaveGeral) public apenasDono{
        chaveGeral = _chaveGeral;
    }

    function getChavesIds() public apenasDono constant returns(uint[]){
        return chavesIds;
    }

    function adicionarChave(string _destino, string _usuario, string _senha) public apenasDono{
        chaves[ultimoId] = Chave(ultimoId, _destino, _usuario, _senha);
        chavesIds.push(ultimoId);
        ultimoId++;
    }

    function removeChave(uint _id) chaveExiste(_id) public apenasDono{
        delete chaves[_id];
        // Primeira chave indexada a partir da posição 0
        delete chavesIds[_id - 1];
    }

    function getChave(uint _id) chaveExiste(_id) public apenasDono constant returns(string, string, string){
        return (chaves[_id].destino, chaves[_id].usuario, chaves[_id].senha);
    }
}