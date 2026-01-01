import axios from 'axios'
import React, { useState } from 'react'

export const Apicalling = () => {
    const[list,setList] = useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((tdo) => {
        console.log(tdo.data)
        
        setList(tdo.data)
    })
    .catch((error) =>{
        console.log(error)
    })
  return (
    <div style={{marginTop:"120px"}}>
<table border={1} cellPadding={3}>
<tr>
    <th>Index</th>
    <th>Id</th>
    <th>name</th>
    <th>username</th>
    <th>email</th>
    <th>website</th>
    <th>phone</th>
    <th>city</th>
    <th>company name</th>
</tr>
<tbody>
{
    list.map((i,index) =>(
        <tr>
            <td>{index + 1}</td>
            
            <td>{i.id}</td>
            <td>{i.name}</td>
            <td>{i.username}</td>
            <td>{i.email}</td>
            <td>{i.website}</td>
            <td>{i.phone}</td>
             <td>{i.address.city} ,{i.address.zipcode}</td>
             <td>{i.company.name}</td>
        </tr>
    ))

    
}
</tbody>
</table>
    </div>
  )
}
