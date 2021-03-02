import React, {useState} from 'react';
import './App.css';
import Navigation from './components/Navigation';
import {menuList as initialStatee} from './menu.json';
import {todos as initialState} from './todos.json';
import TodoForm from './components/TodoForm.js';
import Buscador from './components/Buscador';
import ShoppingCart from './components/ShoppingCart';
import ProductList from './components/ProductList';

const AppFunctional = (props) => {
    const[menuList, setMenuList] = useState([...initialStatee]);
    const [cart, setCart] = useState([]);
    const [todos, setTodos] = useState([...initialState]);

    const [isFiltered, setIsFiltered] = useState(false);
    const [todosFiltered, SetTodosFiltered] = useState([]);

    const addTodoForm = (todo) => {
        setTodos([...todos, todo])
    };

    const addToCart = (product) => {
      let added = false; //para saber si está agregado ya
      for (let p of cart) { //un ciclo para recorrer el carrito
        if (p.id === product.id) { //ver si el producto ya está dentro
          p.qty += 1; //si está le adiciono uno a su cantidad
          added = true; //y pongo la bandera booleana para que no se agregue más
          break; //rompo el ciclo para seguir
        }
      }
      if (!added) { //si no está la bandera en true, entonces es que no existe ese producto en el carrito
        product.qty = 1; //le pongo cantidad 1
        cart.push(product); //y lo agrego por primera vez
      }
      setCart([...cart]); // al final actualizo el carrito con todo lo que quedó finalmente
    }

    const dataSearch = (termino) => {
        const filtrados = todos.filter(item =>
            item.title.trim().toLowerCase().includes(termino.toLowerCase().trim())
        );
        SetTodosFiltered(filtrados);
        setIsFiltered(true);
    };

    const restoreTodo = () => {
        setIsFiltered(false);
        SetTodosFiltered([]);
    };
    const deleteProduct =(index)=>{
        const deleteItem = cart.filter((index, i)=> i !==index);
        debugger
        setCart([]);


    }


    return (
        <div className="App">
            <div className="container">
                <Navigation menuList={menuList} total={todos.length}/>
            </div>
            {/*<Navigation total={todos.length}/>*/}
            <div className="container mt-3 p-0">
                <div className="jumbotron bg-light p-4">
                    <h3>Buscador</h3>
                    <Buscador dataSearch={dataSearch} restoreTodo={restoreTodo}/>
                </div>
            </div>
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            <div className="container">
                <div className="row text-center">
                    <div className="col-12"><h1 className="text-center">Listado de productos</h1></div>
                    <div className="col-md-3 mt-3 border-right">
                        <h3>Insertar Producto</h3>
                        <TodoForm onAddTodo={addTodoForm}/>
                    </div>
                    <div className="col-md-9">
                            {function () {
                                if (isFiltered)
                                    return (
                                        <ProductList listProducts={todosFiltered} addToCart={addToCart}/>
                                    )
                                else
                                    return (
                                        <ProductList listProducts={todos} addToCart={addToCart}/>
                                    )
                            }()}

                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-12">
                        <h4 id="shopCar">
                            Carro de compra
                        </h4>
                        <ShoppingCart cart={cart} deleteProduct={deleteProduct} />

                        {/*<ShoppingCart cart={cart} productsItem={todos}/>*/}
                        <br/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AppFunctional;
