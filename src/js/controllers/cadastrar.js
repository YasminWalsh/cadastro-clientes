import { Api } from "../Api.js";

let cadastro= document.getElementById('botaoCadastro');
cadastro.addEventListener('click', (event)=>{
    const calculoIdade=(dataNascimento)=>{
        dataNascimento = new Date(dataNascimento);
        const hoje = new Date();
        return hoje.getFullYear() - dataNascimento.getFullYear() + (
            parseInt(`${dataNascimento.getMonth()}${dataNascimento.getDay()}`) > parseInt(`${hoje.getMonth()}${hoje.getDay()}`) ?
            1 : 0
        );
    }; //função maneiríssima e curta

    const campo= document.getElementsByClassName("field");
    let pessoaCadastrada = {
        nome:campo[0].value,
        idade:calculoIdade(campo[2].value),
        cpf:campo[1].value, //cpf precisa ter 11 numeros pelo menos, '-'
        data_nasc:campo[2].value.split('-').reverse().join('/'), //a data sai ao contrário e com -
        sexo:campo[3].value,
        email:campo[4].value,
        endereco:{
            cep: campo[5].value,
            rua:campo[6].value,
            numero: parseInt(campo[7].value),
            bairro:campo[8].value,
            cidade:campo[9].value,
            estado:campo[10].value,
        },
        telefone_fixo:campo[11].value,
    }
/*     let pessoaCadastrada = {
        nome: "lero",
        idade: 85,
        cpf: "46469467342",
        data_nasc: "27/02/1950",
        sexo: "Masculino",
        email: "guilhermeemanuelbarbosa@toyota.com.br",
        endereco: {
            cep: "38055292",
            rua: "Rua Dois",
            numero: 698,
            bairro: "Residencial Veneza",
            cidade: "Uberaba",
            estado: "MG"
        },
        telefone_fixo: "3425232094"
	
} */
    Api.cadastrarCliente(pessoaCadastrada);
}) 