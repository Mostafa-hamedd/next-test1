import { useState } from "react";
import ProductCard from "./ProductCard";

function Products({productsData}) {
  const [search, setSearch] = useState("")
  console.log(productsData)

    //search input
 

  return (
    <div style={{padding : "2rem"}}>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      {productsData?.filter((item) => {
        if(setSearch == ""){
          return item
        }else if (item.name.toLowerCase().includes(search.toLowerCase())){
          return item
        }
      })?.map((item , index) => (
        <div key={index}>
          <ProductCard  
            item={item} 
            cardText={item?.name} 
            cardDescription={item?.description}
            cardSlug={item?.slug} 
          />
        </div>
      ))}
    </div>
  );
}

export default Products;