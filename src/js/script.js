import { Api } from "./Api.js";
import { Template } from "./template.js";


const clientes = await Api.listarClientes()

const lista= new Template(document.querySelector("ul"));
lista.templateClientes(clientes);

