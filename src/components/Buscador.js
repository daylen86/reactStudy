import React, {useState} from "react";

 const Buscador =(props)=>{
    const searchRef = React.createRef();
    const handleSubmitSearch =(e)=>{
         e.preventDefault();
         const termino = searchRef.current.value;
         props.dataSearch(termino);

     }
     const restore = ()=>{
         props.restoreTodo();
     }
     return (
         <form onSubmit={handleSubmitSearch}>
             <div className="row">
                 <div className="form-group col-md-8">
                     <input ref={searchRef} type="text" className="form-control form-control-lg border-primary"
                            placeholder="busca el producto..."/>
                 </div>
                 <div className="form-group col-md-2">
                     <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar"/>
                 </div>
                 <div className="form-group col-md-2">
                     <button type="button" onClick={()=>restore()} className="btn btn-lg btn-info btn-block">Limpiar</button>
                 </div>
             </div>
         </form>
     )
 }


export default Buscador;
