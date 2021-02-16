import React, {useState, Component} from 'react';
import ProductList from './ProductList';



const listCar = (props) => {
  let cantidad = 0;
   const cantidadTotal =()=>{
     props.cart&&
     props.cart.map((item) =>{
     cantidad += parseFloat(item.price);
     })
   return cantidad;

  }

  return (
    <div className="card">
      <div className="card-body">
        <table className="table">
          <tr className="bg-danger">
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
          {props.cart &&
            props.cart.map((item) => (
              <tr>
                <td>{item.title}</td>
                <td></td>
                <td>{item.price}c/u</td>
              </tr>
            ))}
        </table>
        <span>Pago total:{cantidadTotal()}
        </span>
      </div>
    </div>
  );
};
export default listCar;
