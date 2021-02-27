import React, {useState} from "react";

const TodoForm = (props)=>{
    const [todoForm, setTodoForm] = useState({
        title: '',
        price: '',
        description: '',
        qty:''
    });
    const handleSubmit =(e)=>{
        e.preventDefault();
        props.onAddTodo(todoForm);

    }
    const handleInput =(e)=>{
        const {value, name} = e.target;
        setTodoForm({...todoForm, [name]: value})
    }
    return (
        <div className="card my-0 mx-auto">
            <form action="" className="card-body" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" name="title" onChange={handleInput} placeholder="Producto"
                           className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="text" name="price" onChange={handleInput} placeholder="Precio"
                           className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="text" name="description" onChange={handleInput} placeholder="descripcion"
                           className="form-control"/>
                </div>
                <button className="bg-primary">Guardar</button>
            </form>
        </div>
    )


}

export default TodoForm;