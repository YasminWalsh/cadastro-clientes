import { Api } from "../Api.js";

const clientes= await Api.listarClientes();

const busca= document.getElementById('buscarCliente');

clientes.forEach((cliente) => {
    const option = document.createElement('option');
    option.innerText= cliente.nome;
    option.value=cliente.id;

    busca.appendChild(option);
});

class FormEdit {
    constructor(htmlClass, clientes) {
        this.formField = document.getElementsByClassName(htmlClass);
        this.data = clientes;
        this.idSelecionado = undefined;
        this.condicaoEndereco = ['cep','rua','numero','bairro','cidade','estado']
    }

    async select(id) {
        this.idSelecionado = id
        let cliente = await this.data.find((item) => item.id == id)
        for(let field of this.formField) {
            //console.log('field ',field,'\nfield.value ', field.value, '\nfield.name ', field.name, '\ncliente[field.name]', cliente[field.name])
            if(this.condicaoEndereco.includes(field.name)){
                field.value = cliente.endereco[field.name] == undefined ? '' : cliente.endereco[field.name]
            }else{
                field.value = cliente[field.name] == undefined ? '' : cliente[field.name]
            }
        }
    }

    change(data) {
       Api.editarCliente(this.idSelecionado, data)
       
    }
}
const formEdit = new FormEdit('fieldEdit', clientes)

document.getElementById('botaoBusca').addEventListener('click', (event)=>{
    formEdit.select(busca.value)
})


document.getElementById('botaoEditar').addEventListener('click',async (event)=>{
    const campos= document.getElementsByClassName('fieldEdit');
    let clienteEditado={endereco:{}}
    for await (let campo of campos){
        if(formEdit.condicaoEndereco.includes(campo.name)){
            clienteEditado.endereco[campo.name] = campo.value;
        }else{
            clienteEditado[campo.name] = campo.value;
        }
    }
    formEdit.change(clienteEditado)
})