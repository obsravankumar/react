import React, { Component } from 'react'
import './App.css'
export default class About extends Component {
  state={
    productList:[]
  }
  componentDidMount(){
    fetch("https://backendjap.onrender.com/products")
      .then((res)=>{
        return res.json()
      })
      .then((resjson)=>{
        this.setState({
          productList:resjson
        })
      })
  }
  render() {
    return (
      <div className='parent-product-item'>
        {
          this.state.productList.map((product)=>(
            <div classNmae='product-item'>
              <p>Name:{product.name}</p>
              <p>Price:<b>{product.price}</b></p>
              <img src={product.image} width="20%" alt={product.name}/>
              </div>
          ))
        }
      </div>
    )
  }
}
