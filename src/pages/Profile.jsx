import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Profile = () => {
  const [product, setProduct] = useState({})
  let { userId } = useParams();

  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${userId}`)
    .then(data => setProduct(data.data))
    .catch(error => console.log(error))
  },[])

  
  return (
    <>

      <h1>{product.title}</h1>
      <h2>$: {product.price}</h2>
      <img src={product.img}/>
      <p>{product.description}</p>
    </>
  )
}

export default Profile

// {
//   "id": 1,
//   "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   "price": 109.95,
//   "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   "category": "men's clothing",
//   "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   "rating": {
//   "rate": 3.9,
//   "count": 120
//   }
//   }