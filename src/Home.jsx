import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Product from "./components/Product";
import axios from "axios";

function Home() {
  const [category, setCategory] = useState([]);
  
  const [cat, setCat] = useState([]);
  const [price,setPrice]=useState({
    from:0,
    to:0
  })
  const [rating,setRating]=useState(null)
  const [check,setCheck]=useState(false);
 

  const catHandler = (category) =>{

    if(category == null){
      setCat([])
      return
    }
    console.log(category)
      const i = cat.indexOf(category)
      if(i != -1){
        const newCat = cat.filter(
          (d,i)=>{
            if(d != category) return true
            else return false
          })
          setCat(newCat)
      } 
      else{
        setCat([...cat,category])
      }
  }


 
 
 
 


  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((category) => {
        setCategory(category.data);
      })
      .catch((error) => {
        console.log(error);
      });
  
      
  }, []);

  // console.log(category)
  // console.log(product )
  // console.log(cat);
  // console.log(price)
  // console.log(rating)
  // console.log(check)
 

  return (
    <>
   
    <div className="grid max-w-[1200px] grid-cols-5 mx-auto ">
      <Filter
        category={category}
        setCategory={setCategory}
        cat={cat}
        catHandler={catHandler}
        price={price}
        setPrice={setPrice}
        setRating={setRating}
        setCheck={setCheck}
      
      
      />
      <Product cat={cat} price={price} rating={rating} check={check} />
    </div>
    </>
  );
}

export default Home;
