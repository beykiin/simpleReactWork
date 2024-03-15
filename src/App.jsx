// import { useState } from 'react'
import Nav1 from './components/Navbar'
import Category from './components/Category'
import Products from './components/Products'
import {Col, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Footer from "./components/Footer"
import React, { Component } from 'react'

export default class App extends Component {
  state={
    category:[
      {id:1,categoryName:"Murat"},
      {id:2,categoryName:"Ahmet"},
      {id:3,categoryName:"Umut"},
      {id:4,categoryName:"Osman"},
    ],
    currentCategory:""
  }
  changeCategory=(category)=>{
    this.setState({currentCategory:category})
  }
  render() {
    let info={
          title:"beken",
          baska:"burası başka"
        }
    return (
      <>
      <Nav1/>
      <Row>
        <Col xs={3}>
        <Category info={info} category={this.state.category} currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} />
        </Col>
        <Col xs={9}>
        <Products currentCategory={this.state.currentCategory}/>
        </Col>
      </Row>
      <Footer title={"ahmet"}/>


      </>
    )
  }
}




// function App() {

//   const [count, setCount] = useState(0)
//   let art=()=>{
//     setCount((count)=>count+1)
//   }
//   let azalt=()=>{setCount((count)=>{
//     return count<=0?0:count-1 //ternary if
//   })}

//   let categoryTitle="Category Title"
//   let info={
//     title:"beken",
//     baska:"burası başka"
//   }

//   let sekil={
//     backgroundColor:"red",
//     color:"white",
//     width:"100px"
//   }
//   return (
//     <>
//     <Nav1/>
//     <Row>
//       <Col xs={3}>
//       <Category title={categoryTitle} info={info}/>
//       </Col>
//       <Col xs={9}>
//       <Products/>
//       </Col>
//     </Row>
      
      
      
//       <button onClick={()=>art()}>Arttır</button>
//       <button onClick={()=>azalt()}>Azalt</button>
//       <p style={sekil}>{count}</p>
//     </>
//   )
// }

// export default App
