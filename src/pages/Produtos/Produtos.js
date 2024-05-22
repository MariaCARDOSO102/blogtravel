import React from "react"; 
import styles from "./Produtos.module.css"; 
import { useState, useEffect } from "react"; 

const Register = () => { 

    const [Name, setName]=useState(''); 
    const [Tipo, setTipo]  = useState('');   
    const [Marca, setMarca]  = useState('');  
    const [Preco, setPreco]  = useState('');   
    const [error, setError] = useState(''); 

  return ( 
    <div> 
      <h2>Cadastrar Produto</h2> 
      <form> 
        <label> 
            <span> 
                Nome do Produto: 
            </span> 
            <input type="text" name="Name" required placeholder="Nome Produto" /> 
        </label> 
        <label> 
            <span> 
                Tipo do Produto: 
            </span> 
            <input type="text" name="Tipo" required placeholder="Tipo Produto" /> 
        </label> 
        <label> 
            <span> 
                Marca do Produto: 
            </span> 
            <input type="text" name="Marca" required placeholder="Marca Produto" /> 
        </label> 
        <label> 
            <span> 
                Preço do Produto: 
            </span> 
            <input type="text" name="Preco" required placeholder="Preço Produto" /> 
        </label> 
        <button className="btn"> 
            Cadastrar
        </button> 
      </form> 
    </div> 
  ); 
};  

export default Register; 