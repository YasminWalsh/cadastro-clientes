import { Api } from "../Api.js";


const clientes= await Api.listarClientes();

const busca= document.getElementById('buscarClienteDelete');

clientes.forEach((cliente) => {
    const option = document.createElement('option');
    option.innerText= cliente.nome;
    option.value=cliente.id;

    busca.appendChild(option);
});

document.getElementById('botaoDelete').addEventListener('click', (event)=>{
    //clienteDeletado.select(busca.value);
    Api.deletarCliente(busca.value);
})
