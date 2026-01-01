// import React from 'react'
import React, { useState } from 'react'
import axios from 'axios'
export const Apidemo = () => {
      const[list,setlist] = useState([])
     axios.get("https://dummyjson.com/recipes")
     .then ((dum)=>{
console.log(dum.data)
setlist(dum.data.recipes)
     })
       .catch((error) =>{
        console.log(error)
    })
  return (
    <div  style={{marginTop:"120px"}}>
        <table border={1} cellPadding={3}>
<tr>
    <th>index</th>
    <th>caloriesPerServing</th>
    <th>Id</th>
    <th>name</th>
    <th>cookTimeMinutes</th>
    <th>cuisine</th>
    <th>difficulty</th>
    <th>image</th>
    <th>prepTimeMinutes</th>
    <th>rating</th>
    <th>tags</th>
</tr>
<tbody>
{
    list.map((i,index) =>(
        <tr>
            <td>{index+1}</td>
            <td>{i.caloriesPerServing}</td>
            
            <td>{i.id}</td>
            <td>{i.name}</td>
            <td>{i.cookTimeMinutes}</td>
            <td>{i.cuisine}</td>
            <td>{i.difficulty}</td>
            <td><img src={i.image} width={100} /></td>
             <td>{i.prepTimeMinutes}</td>
             <td>{i.rating}</td>
             <td>{i.tags[0]}</td>
        </tr>
    ))

    
}
</tbody>
</table>

    </div>
  )
}
