import React, {useState, Component} from 'react';
import ProductList from './ProductList';

const listCar = (props) => {
     let cantidad = 0;
    const cantidadTotal = () => {
        props.cart &&
        props.cart.map((item) => {
            cantidad += parseFloat(item.price);
        })
        return cantidad;
    }
    const MostrarCantPorProducto =(index) => {
        let total = 0;
        const cantidadPorProductos = props.cart.reduce(function (total, itemId) {
            return itemId === index ? total += 1 : total;
        }, 0)
    }
    return (
        <div className="row bg-dark ">
                {props.cart.map((item, i) => {
                    return (
                        <div className="col-12" key={i}>
                            <div className="col-4">{props.title}</div>
                            <div className="col-4">{MostrarCantPorProducto()}</div>
                            <div className="col-4">{props.price}</div>
                        </div>
                    );
                })}

            <div className="col-12 mt-3">
                <h4 className="text-white">Total productos: <span className="badge">{cantidadTotal()}</span></h4>

            </div>
        </div>
    );
}

export default listCar;
