import React, { useState, createContext } from "react";
//1- importamos e inicializamos nuestro createContext
const cartCtx = createContext();

//2- Definimos nuestro Provider
export default function CartContextProvider({children}){
    //5- creamos estado vacío
    const [cart, setCart] = useState([]);

    //6- creo funcion addItem
    function addItem(data, count){
        let newCart = cart;
        
        newCart.push({ ...data, count: count})
        setCart(newCart);
        console.log("hola context", data, count)
    }

    return (
        //3- pasamos el objeto value a los componentes hijos
        <cartCtx.Provider value={{ cart, addItem}}>
            {children}
        </cartCtx.Provider>
    )
}

export {cartCtx};