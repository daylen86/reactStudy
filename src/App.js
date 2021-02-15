import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { todos } from './todos.json';
import TodoForm from './components/TodoForm.js';
import Buscador from './components/Buscador';
import classes from './components/Buscador.Module.css';
import ShoppingCart from './components/ShoppingCart';
import ProductList from './components/ProductList';

const initialState = todos;
const cart = [];

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: initialState,
    };
    // this.addTodoForm = this.addTodoForm.bind(this);
  }

  addTodoForm = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  };

  //otra forma de eliminar
  /*deleteTask =(index)=>{
        const deleted = this.state.todos;
        deleted.splice(index, 1)
       this.setState({
           todos: deleted
       })
    }*/
  deleteTask = (index) => {
    const deleted = this.state.todos.filter((todo, i) => i !== index);
    this.setState({
      todos: deleted,
    });
  };
  dataSearch = (termino) => {
    this.setState(
      {
        todos: initialState,
      },
      () => {
        const filtrados = this.state.todos.filter((todo) =>
          todo.title.trim().toLowerCase().includes(termino.toLowerCase().trim())
        );
        this.setState({
          todos: filtrados,
        });
        console.log(filtrados);
      }
    );
  };
  restoreTodo = () => {
    this.setState({
      todos: initialState,
    });
  };
 /* addShopCart = (index) => {
    const item = this.state.todos.find((todo, i) => i === index);
    cart.push(item);
    this.setState({
      cart
    });
  };*/

  render() {
    return (
      <div className="App">

        <Navigation total={todos.length} />
        <div className="container mt-3 p-0">
          <div className="jumbotron bg-light p-4">
            <h3>Buscador</h3>
            <Buscador dataSearch={this.dataSearch} restoreTodo={this.restoreTodo} />
          </div>
        </div>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <div className="container">
          <div className="row text-center">
            <div className="col-12"><h1 className="text-center">Listado de productos</h1></div>
            <div className="col-md-3 mt-3 border-right">
              <h3>Insertar Producto</h3>
              <TodoForm onAddTodo={this.addTodoForm} />
            </div>
            <div className="col-md-9">
              <div className="row">
                <ProductList listProducts={this.state.todos}/>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-12">
              <h4 className="bg-white" id="shopCar">
                Listado carro de compra
              </h4>
              <ShoppingCart cart={this.state.cart} />
              <br />
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
