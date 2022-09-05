/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */
 
 import React from "react";
 import ReactDOM from "react/dom";
 
 function LoveReact(){
  <div>
   <h1>Reasons I Love React.</h1>
   <ol list-style-type="decimal">
     <li>I love React because of its versatility of flexibilty.</li>
     <li>I love React because of its reusable components.</li>
     <li>I love React because it makes me better at coding Javascript.</li>
     <li>React allows me work smarted not harder</li>
    </ol>
  </div>
 };

ReactDOM.render(<LoveReact />, document.getElementById("root"));
