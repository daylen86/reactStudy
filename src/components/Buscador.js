import React, {Component, useState} from "react";
import Navigation from "./Navigation";
import TodoForm from "./TodoForm";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";


 const Buscador =()=>{
     return (
         <form onSubmit={this.handleSubmitSearch}>
             <div className="row">
                 <div className="form-group col-md-8">
                     <input ref={this.searchRef} type="text" className="form-control form-control-lg border-primary"
                            placeholder="busca el producto..."/>
                 </div>
                 <div className="form-group col-md-2">
                     <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar"/>
                 </div>
                 <div className="form-group col-md-2">
                     <button type="button" onClick={this.restore} className="btn btn-lg btn-info btn-block">Limpiar</button>
                 </div>
             </div>
         </form>
     )
 }


//Old buscador
class app extends Component {
    searchRef = React.createRef();
    handleSubmitSearch =(e)=>{
        e.preventDefault();
        const termino = this.searchRef.current.value;
        this.props.dataSearch(termino);
    }
    restore = ()=>{
        this.props.restoreTodo();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmitSearch}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.searchRef} type="text" className="form-control form-control-lg border-primary"
                               placeholder="busca el producto..."/>
                    </div>
                    <div className="form-group col-md-2">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar"/>
                    </div>
                    <div className="form-group col-md-2">
                        <button type="button" onClick={this.restore} className="btn btn-lg btn-info btn-block">Limpiar</button>
                    </div>
                </div>
            </form>
        )
    }

}

export default Buscador;