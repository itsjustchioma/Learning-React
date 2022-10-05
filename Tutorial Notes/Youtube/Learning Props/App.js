import React from "react";
import Product from "./Product";

function App(){
  return(
    <div>
      <h1>Hello World</h1>
      <Product name = "Amazon Echo" description="Your AI assistant" price={59.99}/>
    </div>
  )
}
