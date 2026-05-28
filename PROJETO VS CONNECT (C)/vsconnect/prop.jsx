import { useState } from "react";

 function Saudacao(props) {
    return <h1>Olá, {props.nome}!</h1>
}

<Saudacao nome="Caian"/>

function Produto(props) {
    return (
        <div>
            <h2>{props.nome}</h2>
            <p>R$ {props.preco}</p>
        </div>
    );
}

<Produto nome="Notebook" preco="3500"/>

function Botao(props) {
    return (
        <button>
            {props.texto}
        </button>
    );
}

<Botao texto="Salvar"/>

/// (DESESTRUTURAÇÃO)
function Saudacao2({nome}){
    let nome = props.nome
}

function Usuario({nome, idade, cidade}){
    return (
        <div>
            <h1>{nome}</h1>
            <p>{idade}</p>
            <p>{cidade}</p>
        </div>
    )
}
<Usuario
    nome="Caian"
    idade={22}
    cidade=""
/> 





//Estado com arrays

const [listaItens, setListaItens] = useState([]);

function adicionarItem(novoItem) {

    setListaItens([...listaItens, novoItem])
}

listaItens.push("React")

function removerItens(itemParaRemover) {

    setListaItens(listaItens.filter(item => item != itemParaRemover))
}


import { useEffect } from "react";

function MeuComponente() {

    useEffect(() => {

        console.log("Componente Carregado")

    }, [])

    return <div>...</div>

}

import { useState, useEffect } from "react";

import api from "../../utils/api";

function ListaServicos() {

    const [servicos, setServicos] = useState([]);

    function buscarServicos() {

        api.get("servicos")

        .then((response) => {

            setServicos(response.data);

        })

        .catch((error) => {

            console.log("Erro:", error)

        })

    }

    useEffect(() => {

        buscarServicos();

    }, [])

    return (

        <ul>

            {servicos.map((servico, index) => (

                <li key={index}>
             
             {servico.nome}
                
                </li>
            
            ))}

        </ul>
    )
}

function cadastrarUsuario(event) {

    event.preventDefault();

    const formData = new FormData();

    formData.append("nome", nome);

    formData.append("email", email);

    formData.append("user_img", foto);

    api.post("users", formData)
    
}


