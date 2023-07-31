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
      <img src={product.image}/>
      <p>{product.description}</p>
    </>
  )
}

export default Profile
