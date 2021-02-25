import React, {useState} from "react";


const navigation = ({menuList, total}) => {
    return (
        <div className="row bg-dark ">
            <div className="col-8 mt-2">
                <nav className="navbar navbar-expand-lg navbar-light pt-0 pr-0">
                    <div className="collapse navbar-collapse" id="menuPrincNavDropdown">
                        <ul className="navbar-nav">
                            {menuList.map((item, i) => {
                                return (
                                    <li className="nav-item" key={i}>
                                        <a className="nav-link text-white bold text-uppercase" href="#">{item.title}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="col-4 mt-3">
                <h4 className="text-white">Total productos: <span className="badge">{total}</span></h4>

            </div>
        </div>
    )

}

export default navigation;