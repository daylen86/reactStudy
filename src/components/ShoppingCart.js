import React, {useState, Component} from 'react';
import ProductList from './ProductList';

const listCar = (props) => {
     let cantidad = 0;
    const cantidadTotal = () => {
        props.cart &&
        props.cart.map((item) => {
            //Aquí se modifica el total multiplicando el precio * la cantidad de cada producto
            cantidad += parseFloat(item.price * item.qty);
        })
        return cantidad;
    }

    return (
        <div className="row">
          <table className="table">
            <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
            </thead>
            <tbody>
                {props.cart && props.cart.map((item, i) => {
                    return (
                        <tr key={i}>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.qty}</td>
                            <td>{item.price * item.qty}</td>
                        </tr>
                    );
                })}
                </tbody>
                </table>

            <div className="col-12 mt-3">
                <h4 className="text-white">Total productos: <span className="badge">{cantidadTotal()}</span></h4>

            </div>
        </div>
    );
}

export default listCar;
