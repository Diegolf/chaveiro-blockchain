$(document).ready(() => {

    web3 = new Web3(window.web3.currentProvider);

    const abi = [ { "constant": false, "inputs": [ { "name": "_chaveGeral", "type": "bytes32" } ], "name": "setChaveGeral", "outputs": [], "payable": false, "type": "function", "stateMutability": "nonpayable" }, { "constant": true, "inputs": [ { "name": "_id", "type": "uint256" } ], "name": "getChave", "outputs": [ { "name": "", "type": "string" }, { "name": "", "type": "string" }, { "name": "", "type": "string" } ], "payable": false, "type": "function", "stateMutability": "view" }, { "constant": false, "inputs": [ { "name": "_id", "type": "uint256" } ], "name": "removeChave", "outputs": [], "payable": false, "type": "function", "stateMutability": "nonpayable" }, { "constant": false, "inputs": [ { "name": "_destino", "type": "string" }, { "name": "_usuario", "type": "string" }, { "name": "_senha", "type": "string" } ], "name": "adicionarChave", "outputs": [], "payable": false, "type": "function", "stateMutability": "nonpayable" }, { "constant": true, "inputs": [], "name": "getChaveGeral", "outputs": [ { "name": "", "type": "bytes32" } ], "payable": false, "type": "function", "stateMutability": "view" }, { "constant": true, "inputs": [], "name": "getChavesIds", "outputs": [ { "name": "", "type": "uint256[]" } ], "payable": false, "type": "function", "stateMutability": "view" }, { "inputs": [ { "name": "_chaveGeral", "type": "bytes32" } ], "payable": false, "type": "constructor", "stateMutability": "nonpayable" } ];
    const bytecode = "6060604052341561000c57fe5b60405160208061098583398101604052515b60008054600160a060020a03191633600160a060020a03161790556002819055600180555b505b610931806100546000396000f3006060604052361561005c5763ffffffff60e060020a6000350416630521e9e3811461005e57806330fd79c21461007357806343006654146101ed578063c745e7d914610202578063cad76d19146102d4578063d9463661146102f6575bfe5b341561006657fe5b610071600435610361565b005b341561007b57fe5b610086600435610387565b604051808060200180602001806020018481038452878181518152602001915080519060200190808383600083146100d9575b8051825260208311156100d957601f1990920191602091820191016100b9565b505050905090810190601f1680156101055780820380516001836020036101000a031916815260200191505b5084810383528651815286516020918201918801908083838215610144575b80518252602083111561014457601f199092019160209182019101610124565b505050905090810190601f1680156101705780820380516001836020036101000a031916815260200191505b50848103825285518152855160209182019187019080838382156101af575b8051825260208311156101af57601f19909201916020918201910161018f565b505050905090810190601f1680156101db5780820380516001836020036101000a031916815260200191505b50965050505050505060405180910390f35b34156101f557fe5b6100716004356105ad565b005b341561020a57fe5b610071600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284375050604080516020601f89358b0180359182018390048302840183019094528083529799988101979196509182019450925082915084018382808284375050604080516020601f89358b0180359182018390048302840183019094528083529799988101979196509182019450925082915084018382808284375094965061064f95505050505050565b005b34156102dc57fe5b6102e461072d565b60408051918252519081900360200190f35b34156102fe57fe5b610306610753565b604080516020808252835181830152835191928392908301918581019102808383821561034e575b80518252602083111561034e57601f19909201916020918201910161032e565b5050509050019250505060405180910390f35b60005433600160a060020a0390811691161461037d5760006000fd5b60028190555b5b50565b61038f6107cf565b6103976107cf565b61039f6107cf565b600084815260036020526040812054859190116103bc5760006000fd5b60005433600160a060020a039081169116146103d85760006000fd5b6000858152600360208181526040928390206001808201805486516002938216156101000260001901909116839004601f810186900486028201860190975286815290959183019492909201928591908301828280156104795780601f1061044e57610100808354040283529160200191610479565b820191906000526020600020905b81548152906001019060200180831161045c57829003601f168201915b5050855460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152959850879450925084019050828280156105075780601f106104dc57610100808354040283529160200191610507565b820191906000526020600020905b8154815290600101906020018083116104ea57829003601f168201915b5050845460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152959750869450925084019050828280156105955780601f1061056a57610100808354040283529160200191610595565b820191906000526020600020905b81548152906001019060200180831161057857829003601f168201915b505050505090509350935093505b5b5b509193909250565b600081815260036020526040812054829190116105ca5760006000fd5b60005433600160a060020a039081169116146105e65760006000fd5b60008281526003602052604081208181559061060560018301826107e1565b6106136002830160006107e1565b6106216003830160006107e1565b505060048054600019840190811061063557fe5b906000526020600020900160005b50600090555b5b5b5050565b60005433600160a060020a0390811691161461066b5760006000fd5b60408051608081018252600180548083526020808401888152848601889052606085018790526000928352600382529490912083518155935180519394936106ba938501929190910190610829565b50604082015180516106d6916002840191602090910190610829565b50606082015180516106f2916003840191602090910190610829565b5050600480549091506001810161070983826108a8565b916000526020600020900160005b5060018054918290559081019055505b5b505050565b6000805433600160a060020a0390811691161461074a5760006000fd5b506002545b5b90565b61075b6107cf565b60005433600160a060020a039081169116146107775760006000fd5b60048054806020026020016040519081016040528092919081815260200182805480156107c357602002820191906000526020600020905b8154815260200190600101908083116107af575b505050505090505b5b90565b60408051602081019091526000815290565b50805460018160011615610100020316600290046000825580601f106108075750610383565b601f01602090049060005260206000209081019061038391906108e4565b5b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061086a57805160ff1916838001178555610897565b82800160010185558215610897579182015b8281111561089757825182559160200191906001019061087c565b5b506108a49291506108e4565b5090565b815481835581811511610727576000838152602090206107279181019083016108e4565b5b505050565b60408051602081019091526000815290565b61074f91905b808211156108a457600081556001016108ea565b5090565b905600a165627a7a72305820bdfb9292af389ca81e582971840763f84e78c5e8e37268d68ebc1a6aa7e833460029";
    const contrato = web3.eth.contract(abi);

    const chaves_table_cabecalho = '<tr class="w3-border-bottom">'+
        '<th class="w3-center"> Destino </th>'+
        '<th class="w3-center"> Usuário </th>'+
        '<th class="w3-center"> Ações </th>'+
    '</tr>';

    const chaves_table_chave = '<tr class="w3-border-bottom">'+
        '<td class="w3-center"> #DESTINO </td>'+
        '<td class="w3-center"> #USUARIO </td>'+
        '<td class="w3-center"> '+
            '<input class="w3-btn w3-teal w3-round ac-btn copiar_senha" chave="#IDCHAVE" type="button" value="Copiar Senha" title="Copiar senha da chave">'+
            '<input class="w3-btn w3-red w3-circle ac-btn w3-margin-left-min remove_chave" chave="#IDCHAVE" type="button" value=" X " title="Excluir chave">'+
        '</td>'+
    '</tr>';

    const toast_div = '<div class="w3-center toast-message" numero="#NUM">'+
            '#TOASTMESSAGE'+
        '</div>';

    const TOAST_DEFAULT_TIME = 7000;
    const TEMPO_DESBLOQUEIO = 60000;

    let instancia_contrato;
    let conectado = false;
    let ps;

    let chaves = {};

    $('#login_tab').css('display','block');
    // $('.side-menu[value="mudar_conta"]').css('display','block');

    $("#w3_open").click(() => {
        let mySidebar = document.getElementById("mySidebar");
        let overlayBg = document.getElementById("myOverlay");
        if (mySidebar.style.display === 'block') {
            mySidebar.style.display = 'none';
            overlayBg.style.display = "none";
        } else {
            mySidebar.style.display = 'block';
            overlayBg.style.display = "block";
        }
    });

    $("#w3_close").click(() => {
        let mySidebar = document.getElementById("mySidebar");
        let overlayBg = document.getElementById("myOverlay");
        mySidebar.style.display = "none";
        overlayBg.style.display = "none";
    });

    // Carrega o contrato a partir do endereço
    function carregarContrato(_endereco_contrato, callback) {

        if (!conectado) {
            toast('Web3 não está connectado com nenhuma rede da ethereum. Verifique o console para mais informações.', 7000);
            return;
        }

        instancia_contrato = contrato.at(_endereco_contrato, callback);
    }

    function enviarNovoContrato(callback) {

        if (!conectado) {
            toast('Web3 não está connectado com nenhuma rede da ethereum. Verifique o console para mais informações.', TOAST_DEFAULT_TIME);
            return;
        }

        // console.log("gas" +web3.eth.estimateGas({data: bytecode}));

        contrato.new("0x00", { from: conta, gas: '1000000', data: "0x"+bytecode }, callback);
    }

    function checarSenhaGeral(_senha, callback) {
        if (!conectado) {
            toast('Web3 não está connectado com nenhuma rede da ethereum. Verifique o console para mais informações.', TOAST_DEFAULT_TIME);
            return;
        }
        if (!instancia_contrato) {
            toast('Nenhuma instancia do contrato iniciada. Envie uma nova ou informe o endereço da existente.', TOAST_DEFAULT_TIME);
            return;
        }
        instancia_contrato.getChaveGeral.call({ from: conta }, function (err, result) {
            if (err) {
                callback({error: 1, response: err});
            } else {
                if (web3.sha3(_senha) == result) {
                    callback({error: 0, response: result});
                } else {
                    callback({error: 2, response: 'A senha informada está errada ou o contrato pertence a outra conta.'});
                }
            }
        });
    }

    function setChaveGeral(_senha, _senhaConta, callback) {
        if (!conectado) {
            toast('Web3 não está connectado com nenhuma rede da ethereum. Verifique o console para mais informações.', TOAST_DEFAULT_TIME);
            return;
        }
        if (!instancia_contrato) {
            toast('Nenhuma instancia do contrato iniciada. Envie uma nova ou informe o endereço da existente.', TOAST_DEFAULT_TIME);
            return;
        }
        
        instancia_contrato.setChaveGeral.sendTransaction(web3.sha3(_senha),{ from: conta, gas: 1000000 }, callback);
        
    }

    function liberarConta(_conta, _senha, callback) {
        if (!conectado) {
            toast('Web3 não está connectado com nenhuma rede da ethereum. Verifique o console para mais informações.', TOAST_DEFAULT_TIME);
            return;
        }

        web3.personal.unlockAccount(_conta, _senha, TEMPO_DESBLOQUEIO/1000, callback);
    }

    function adicionarChave(_destino, _usuario, _senha, callback){
        if (!conectado) {
            toast('Web3 não está connectado com nenhuma rede da ethereum. Verifique o console para mais informações.', TOAST_DEFAULT_TIME);
            return;
        }
        if (!instancia_contrato) {
            toast('Nenhuma instancia do contrato iniciada. Envie uma nova ou informe o endereço da existente.', TOAST_DEFAULT_TIME);
            return;
        }
        
        let destinoCriptografado = CryptoJS.AES.encrypt(_destino, conta).toString();
        let usuarioCriptografado = CryptoJS.AES.encrypt(_usuario, conta).toString();
        let senhaCriptografada = CryptoJS.AES.encrypt(_senha, conta).toString();
        instancia_contrato.adicionarChave.sendTransaction(destinoCriptografado, usuarioCriptografado, senhaCriptografada,{ from: conta, gas: 1000000 }, callback);
    }
    
    function getChavesIds(callback){
        if (!conectado) {
            toast('Web3 não está connectado com nenhuma rede da ethereum. Verifique o console para mais informações.', TOAST_DEFAULT_TIME);
            return;
        }
        if (!instancia_contrato) {
            toast('Nenhuma instancia do contrato iniciada. Envie uma nova ou informe o endereço da existente.', TOAST_DEFAULT_TIME);
            return;
        }

        instancia_contrato.getChavesIds.call({ from: conta }, callback);

    }

    function getChave(_id, callback){ 
        if (!conectado) {
            toast('Web3 não está connectado com nenhuma rede da ethereum. Verifique o console para mais informações.', TOAST_DEFAULT_TIME);
            return;
        }
        if (!instancia_contrato) {
            toast('Nenhuma instancia do contrato iniciada. Envie uma nova ou informe o endereço da existente.', TOAST_DEFAULT_TIME);
            return;
        }

        instancia_contrato.getChave.call(_id, {from: conta}, callback);

    }
    
    function removeChave(_id, callback){
        if (!conectado) {
            toast('Web3 não está connectado com nenhuma rede da ethereum. Verifique o console para mais informações.', TOAST_DEFAULT_TIME);
            return;
        }
        if (!instancia_contrato) {
            toast('Nenhuma instancia do contrato iniciada. Envie uma nova ou informe o endereço da existente.', TOAST_DEFAULT_TIME);
            return;
        }

        instancia_contrato.removeChave.sendTransaction(_id, {from: conta, gas: 1000000}, callback);
    }

    function listar_chaves(){
        
        getChavesIds((err, result) => {
            if(!err){
                let chvs = result.toString().split(',').filter( i => i != 0);
                $('#lista_chaves_table').html(chaves_table_cabecalho);
                let chave_percorrida = 0;

                if(chvs.length == 0){
                    toast('Nenhuma chave encontrada.',TOAST_DEFAULT_TIME);
                    return;
                }

                for (i in chvs){
                    getChave(chvs[i], (err, result) => {
                        if(err){
                            toast('Ocorreu um erro ao tentar recuperar a chave de id <'+chvs[i]+'> verifique o console para mais informações.', TOAST_DEFAULT_TIME);
                            console.log(err);
                        }else{
                            let linha = chaves_table_chave.replace('#DESTINO', CryptoJS.AES.decrypt(result[0], conta).toString(CryptoJS.enc.Utf8))
                                .replace('#USUARIO', CryptoJS.AES.decrypt(result[1], conta).toString(CryptoJS.enc.Utf8))
                                .replace(/#IDCHAVE/g, chvs[chave_percorrida]) ;
                            chaves[chvs[chave_percorrida++]] = result[2];
                            $('#lista_chaves_table').append(linha);

                            $('.copiar_senha').off('click').on('click', function() {
                                copyToClipboard(CryptoJS.AES.decrypt(chaves[$(this).attr('chave')], conta).toString(CryptoJS.enc.Utf8));
                                toast('Senha copiada para a área de transferência.', TOAST_DEFAULT_TIME);
                            });

                            $('.remove_chave').off('click').on('click', function() {
                                let chv = $(this).attr('chave');
                                let botao = $(this);

                                toast('Transação enviada. Aguarde a confirmação...', TOAST_DEFAULT_TIME);
                                removeChave(chv, (err, result) => {
                                    if(err){
                                        toast('Ocorreu um erro ao tentar remover a chave. Verifique o console para mais informações', TOAST_DEFAULT_TIME);
                                        console.log(err);
                                    }else{
                                        toast('Chave removida. Endereço da transação copiado para o console.', TOAST_DEFAULT_TIME);
                                        console.log(result);
                                        botao.parent().parent().remove();
                                    }
                                });
                            });
                        }
                    });
                }
            }else{
                toast('Ocorreu um erro ao tentar ler o ID das chaves. Verifique o console para mais informações', TOAST_DEFAULT_TIME);
                console.log(err);
            }
        });

    }

    $('#verificar_senha_btn').click(() => {

        let login_end_contrato = $('#login_end_contrato').val();

        if( login_end_contrato && ! web3.isAddress(login_end_contrato) ){
            toast('O o endereço do cotrato iformado é inválido.', TOAST_DEFAULT_TIME);
            return;
        }

        toast('Transação enviada. Aguardando confirmação ...', 3000);
        liberarConta(conta, pswd, (err, result) => {
            if (err){
                toast('Ocorreu um erro ao desbloquear a conta. Verifique o console para mais informações.',TOAST_DEFAULT_TIME);
                console.log(err);
            }else{
                $('#login_end_contrato').val('');
                desbloquear(login_end_contrato);
            }
        });

    });

    $('.side-menu').click(function(){
        $('.tab-content').css('display','none');

        switch($(this).attr('value')){

            case 'mudar_conta':
                $('#mudar_conta_tab').css('display', 'block');
                break;

            case 'gerenciar_contrato':
                $('#gerenciar_contrato_tab').css('display', 'block');
                break;

            case 'listar':
                if(! instancia_contrato){
                    toast('Nenhum contrato carregado.',TOAST_DEFAULT_TIME);
                    $('.side-menu[value="gerenciar_contrato"]').click();
                    return;
                }
                $('#listar_tab').css('display', 'block');  
                break;
            case 'logout':
                bloquear();
                break;
        }
        $("#w3_close").click();
    });

    $('#nova_chave').click(() => {
        let destino = $('#novo_destino').val();
        let usuario = $('#novo_usuario').val();
        let senha = $('#nova_senha').val();

        if (!destino || !usuario || !senha){
            toast('Informe todos os dados (destino, usuário e senha).', TOAST_DEFAULT_TIME);
            return;
        } 
        
        toast('Transação enviada. Aguarde a confirmação...',TOAST_DEFAULT_TIME);

        adicionarChave(destino, usuario, senha, (err, result) => {
            if(err){
                toast('Ocorreu um erro ao tentar adicionar a chave. Verifique o console para mais informações', TOAST_DEFAULT_TIME);
                console.log(err);
            }else{
                $('#novo_destino').val('');
                $('#novo_usuario').val('');
                $('#nova_senha').val('');
                toast('Chave adicionada. Endereço da transação copiado para o console.', TOAST_DEFAULT_TIME);
                console.log(result);
                listar_chaves();
            }
        });
    });

    $('#novo_contrato').click( () => {
        enviarNovoContrato( (err, myContract) => {
            if (!err) {
                if (!myContract.address) {
                    console.log("Hash da transação: " + myContract.transactionHash);

                } else {
                    toast('Contrato criado. Endereço copiado para a área de transferência e para o console.');
                    console.log("Transação confirmada, endereço do contrato: " + myContract.address);
                    copyToClipboard(myContract.address);

                    $('#end_contrato').val(myContract.address);
                    $('#carregar_contrato').click();
                }
            } else {
                console.log(err);
                toast('Erro ao enviar contrato. Verifique o console para mais informações.', TOAST_DEFAULT_TIME);
            }
        });
    });

    $('#carregar_contrato').click(() => {

        let endereco = $('#end_contrato').val();
        
        if ( ! endereco ){
            toast('Informe o endereço do contrato.',TOAST_DEFAULT_TIME);
            return;
        }

        toast('Verificando o endereço informado ...', TOAST_DEFAULT_TIME);
        if ( ! web3.isAddress(endereco) ){
            toast('O endereço informadio é inválido.', TOAST_DEFAULT_TIME);
            return;
        }

        carregarContrato(endereco, (err, result) =>{
            if(err){
                toast('Ocorreu um erro ao tentar carregar o contrato. Verifique o console para mais informações.', TOAST_DEFAULT_TIME);
                console.log(err);
            }else{
                toast('Contrato carregado.', TOAST_DEFAULT_TIME);
                $('.side-menu[value="listar"]').click();
                setTimeout(() =>{
                    toast('Carregando as chaves do contrato informado.', TOAST_DEFAULT_TIME);
                    listar_chaves();
                },2000);
            }
        });

    });

    function desbloquear(login_end_contrato){
        $('#w3_open').css('display','block');

        if (login_end_contrato){
            $('#end_contrato').val(login_end_contrato);
            $('#carregar_contrato').click();
        }else{
            $('.tab-content').css('display','none');
            $('#gerenciar_contrato_tab').css('display', 'block');
            
        }

        // Bloqueia e pede a senha novamente após 2 minutos
        window.setTimeout(bloquear,TEMPO_DESBLOQUEIO);
    }

    function bloquear(){
        $('#w3_open').css('display','none');
        $('.tab-content').css('display','none');
        $('#login_tab').css('display','block');
    }

    function checkWeb3() {
        if (web3 && web3.isConnected()) {
            console.info('Connected');
            $('#status_conexao').addClass('w3-text-green fa-check-circle');
            $('#status_conexao').removeClass('w3-text-red fa-times-circle');
            $('#status_conexao').attr("title", "Connectado");
            conectado = true;
            window.web3 = web3;
        } else {
            console.info('Not Connected');
            $('#status_conexao').removeClass('w3-text-green fa-check-circle');
            $('#status_conexao').addClass('w3-text-red fa-times-circle');
            $('#status_conexao').attr("title", "Desconnectado");
            coonectado = false;
        }
    }

    function copyToClipboard(text) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(text).select();
        document.execCommand("copy");
        $temp.remove();
    }

    let toast_id = 0; // Usado para gerenciar várias ocorrências de toast simultâneas
    function toast(mensagem, tempo){
        let x = $("#toast");
        let id = toast_id++;

        if (x.html() == ""){
            x.toggleClass("show");
        }
        x.append(toast_div.replace('#NUM',id).replace('#TOASTMESSAGE',mensagem));

        setTimeout( function () { 
            $('.toast-message[numero="'+id+'"]').remove();
            if (x.html() == ""){
                x.toggleClass("show");
            }
            
        }, tempo);
    }

    checkWeb3();

});


/*

 var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
//U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=

var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
//4d657373616765

decrypted.toString(CryptoJS.enc.Utf8);
*/