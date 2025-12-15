import React, { useState } from "react";
import { useFormik } from "formik";

function Form() {
    const [list, setList] = useState([])
    const [edit, setEdit] = useState(null)
     const [search,setSearch] = useState()
    const [ins, setins] = useState({
      name: "",
      surname: "",
      age: "",
    })
  const formik = useFormik({
    initialValues: ins,
    onSubmit: (values) => {
      if(edit != null){
    const copy = [...list];
    copy[edit] = values;
     setList(copy)
    setEdit(null)
  }else{
       setList([...list , values])
       }
            formik.handleReset()
  
    }
  });
  const handleDelete = (index)=>{
    let copy = [...list]
    copy.splice(index,1)
    setList(copy)
}
const handleEdit = (i,index) =>{
  formik.setValues(i)
  setEdit(index)

}
const handelesearch = () => {
  let copy = [...list]  
  let filterData = copy.filter((i => i.name == search || i.surname == search || i.age == search))
  setList(filterData)

};
  return (
     <div>
    <form onSubmit={formik.handleSubmit}>
      <input type="text" name="name" placeholder="Enter name" value={formik.values.name} onChange={formik.handleChange}
      />

      <input type="text" name="surname" placeholder="Enter surname" value={formik.values.surname} onChange={formik.handleChange}
      />
      
        <input type="number" name="age" placeholder="Enter age" value={formik.values.age} onChange={formik.handleChange}
      />

      <button type="submit">Submit</button> <br />
</form>
      <input type="text" name="search" id="" placeholder="Search Your Name" value={formik.values.search} onChange={(e) => setSearch(e.target.value)}/>
      <button type="button" onClick={handelesearch}>Search</button>
    

      <table border={1} cellPadding={3}>
        
          <tr>
            <th>NAME</th>
            <th>SURNAME</th>
            <th>AGE</th>
            <th>DELETE</th>
            <th>EDIT</th>
          </tr>
       
        <tbody>
          {
            list.map((i, index) => (
              <tr>
                <td>{i.name}</td>
                <td>{i.surname}</td>
                <td>{i.age}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
                <td>
                     <button onClick={() => handleEdit(i,index)}>Edit</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

   </div>
  );
}

export default Form;
