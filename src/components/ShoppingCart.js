import React, {useState} from 'react';
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

    const deleted = () =>{
        props.deleteProduct();
    }
    return (
        <div className="row">
          <table className="table">
            <thead className="bg-success">
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th></th>
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
                            <td><button onClick={()=>deleted()}>Eliminar</button></td>
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
