import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/


function App(){
  return(
    <div>
      <Navbar />
      <Hero />
      <Card 
        image={require("./Images/image 12 (1).png")} alt="person"
        rating= "5.0"
        review = {6}
        country = "South Africa"
        title = "Life Lessons With Kate"
        price = {136}
      />
    </div>
  )
}

export default App;
