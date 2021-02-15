import React, {useState, Component} from "react";


const productList = (props)=>{
  const [cart, setCartState] = useState(0);
   const addShopCart = (index) => {
        const item = props.listProducts.find((todo, i) => i === index);
        cart.push(item);
        setCartState({
            cart
        })
    };

    return (
        <div className="row">
            {props.listProducts.map((todo, i)=>{
                return (
                    <div className="col-md-4 mt-3" key={i}>
                        <div className="card">
                            <div className="card-header">
                                <h1>{todo.title}</h1>
                            </div>
                            <div className="card-body">
                                <h5>
                                    Precio: <span className="text-black-50">{todo.price}</span>
                                </h5>
                                <p>{todo.description}</p>
                            </div>
                            <div className="card-footer">
                                {/*<button className="bg-danger" onClick={this.deleteTask.bind(this, i)}>
                Delete
              </button>*/}
                                <button onClick={addShopCart.bind(this,i)} className="bg-success btn-sm">
                                    Pagar
                                </button>
                                <button className="bg-success btn-sm">Carro compra</button>
                            </div>
                        </div>
                    </div>
                );
            })
            }
        </div>
    )
}
export default productList;