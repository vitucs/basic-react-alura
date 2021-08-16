import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
  constructor(){
    super();
    this.state = {categorias: []};
    this._novasCategorias = this._novasCategorias.bind(this);
  }
  
  componentDidMount(){
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount(){
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias){
    this.setState({...this.state, categorias});
  }

  _handleEventoInput(e){
    if(e.key === "Enter"){
        e.stopPropagation();
        let valorCategoria = e.target.value;
        this.props.criarCategoria(valorCategoria);
    }
  }
  render() {
    return (
      <section className="categorias">
        <ul className="lista">
        {this.state.categorias.map((categorias, index) => {
          return (
            <li key={index} className="item">{categorias}</li>
          );
        })}
        </ul>
        <input 
        type="text"
        placeholder="Adicionar Categoria" 
        onKeyUp={this._handleEventoInput.bind(this)}/>
      </section>
    );
  }
}

export default ListaDeCategorias;
