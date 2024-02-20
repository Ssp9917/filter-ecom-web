import React, { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const FilterContext = createContext();

const Context = (props) => {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState([]);
 

  const addToCart = (index) => {
    console.log(index);
    if (count.indexOf(index) == -1) {
      setCount([...count, index]);
    }
    
  };

  const removeFromCart = (removeIndex) => {
    console.log(removeIndex)
   const  newCount = count.filter(
      (d)=>{
        if(d==removeIndex) return false
        else return true
      }
    )
    setCount(newCount)
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((success) => {
        setProduct(success.data);
      
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);


  // cart item set in localhost
  useEffect(
    ()=>{
      if(count.length != 0){
        localStorage.setItem('filter',JSON.stringify(count))
      }
    },[count]
  )

  // get product from localhost

  useEffect(
    ()=>{
      const lsData = localStorage.getItem('filter');
      if(lsData != null){
        setCount(JSON.parse(lsData))
      }
    },[]
  )

  return (
    <FilterContext.Provider value={{ addToCart, product, count,removeFromCart,setProduct}}>
      {props.children}
    </FilterContext.Provider>
  );
};

export default Context;

export { FilterContext };
