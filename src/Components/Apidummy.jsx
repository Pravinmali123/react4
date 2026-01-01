import React, { useState } from 'react'
import axios from 'axios'
export const Apidummy = () => {
    const[list,setlist] = useState([])
     axios.get("https://dummyjson.com/products")
     .then ((dum)=>{
console.log(dum.data)
setlist(dum.data.products)
     })
       .catch((error) =>{
        console.log(error)
    })
  return (
    <div  style={{marginTop:"120px"}}>
       <table border={1} cellPadding={3}>
<tr>
  
    <th>Id</th>
    <th>availabilityStatus</th>
    <th>brand</th>
    <th>category</th>
    <th>description</th>
    <th>dimensions</th>
    <th>discountPercentage</th>
    <th>images</th>
    <th>meta</th>
    <th>minimumOrderQuantity</th>
    <th>price</th>
    <th>rating</th>
    <th>returnPolicy</th>
    {/* <th>reviews</th> */}
    <th>shippingInformation</th>
    <th>sku</th>
    <th>stock</th>
    {/* <th>tags</th> */}
    <th>thumbnail</th>
    <th>title</th>
    <th>warrantyInformation</th>
    <th>weight</th>

</tr>
<tbody>
{
    list.map((i,index) =>(
        <tr>
            <td>{i.id}</td>
            
            <td>{i.availabilityStatus}</td>
            <td>{i.brand}</td>
            <td>{i.category}</td>
            <td>{i.description}</td>
            <td>width:{i.dimensions.width} <br />depth:{i.dimensions.depth}</td>
            <td>{i.discountPercentage}</td>
            <td><img src={i.images[0]} width={100} /></td>
            <td>barcode:{i.meta.barcode} <br />createdAt:{i.meta.createdAt}</td>
            <td>{i.minimumOrderQuantity}</td>
            <td>{i.price}</td>
            <td>{i.rating}</td>
            <td>{i.returnPolicy}</td>
            {/* <td>comment:{i.reviews.comment} <br />date:{i.reviews.date} <br />rating:{i.reviews.rating} <br />reviewerEmail:{i.reviews.reviewerEmail}</td> */}
            <td>{i.shippingInformation}</td>
            <td>{i.sku}</td>
            <td>{i.stock}</td>
            {/* <td>{i.tags}</td> */}
            <td><img src={i.thumbnail} width={100} /></td>
            <td>{i.title}</td>
            <td>{i.warrantyInformation}</td>
            <td>{i.weight}</td>
         
        </tr>
    ))

    
}
</tbody>
</table>
    </div>
  )
}
