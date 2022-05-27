class Api {

    static async listarClientes(){

        const response = await fetch("https://atividade-api-clientes.herokuapp.com/clientes")
        const data= await response.json()

        console.log(data)
        return data;
    }

   static async cadastrarCliente(data){
    console.log(JSON.stringify(data));
        let response = await fetch("https://atividade-api-clientes.herokuapp.com/clientes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data)
        });
        console.log(response);
    }

    static async editarCliente(id, data){
        
        let response = await fetch("https://atividade-api-clientes.herokuapp.com/clientes/"+id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data)
        });
    }

    static async deletarCliente(id){
      console.log(id)
        const response = await fetch("https://atividade-api-clientes.herokuapp.com/clientes/"+id, {
            method: "DELETE"
        });
        console.log(response)
    }
}


export {Api}