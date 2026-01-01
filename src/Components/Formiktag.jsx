import { Field,Formik,Form } from "formik";
import React,{useState} from "react";
function Formiktag (){
    const [list, setList] = useState([])
        const [edit, setEdit] = useState(null)
         const [search,setSearch] = useState()
    const [ins,setins] = useState({
        name:"",
        surname:"",
        age:""
    })
    const handlesubmit = (values , {resetForm})=>{
      
         if(edit != null){
    const copy = [...list];
    copy[edit] = values;
     setList(copy)
    setEdit(null)
  }else{
       setList([...list , values])
       }
       resetForm()
       setins({
        name:"",surname:"",age:""
       })
           
    
       
    }
    const handleDelete = (index)=>{
      let copy = [...list]
    copy.splice(index,1)
    setList(copy)
    }
    const handleEdit= (i,index) =>{
      // console.log(i);
      
      setins(i)
      setEdit(index)
    }
    const handelesearch= () =>{
       let copy = [...list]  
  let filterData = copy.filter((i => i.name == search || i.surname == search || i.age == search))
  setList(filterData)
  setSearch('')
    }
    return(
        <div style={{marginTop:"120px"}}>
          <h2>Formik tag use CRUD</h2>
            <Formik initialValues = {ins}
            enableReinitialize
                onSubmit={handlesubmit}>
                <Form>
                    <Field name="name" placeholder="Enter Name" ></Field>
                    <Field name="surname" placeholder="Enter Surname"></Field> 
                    <Field name="age" placeholder="Enter Age"></Field>
                    <button type="submit">Submit</button>

                </Form>
            </Formik>
              <input name="search" placeholder="Search Your Name" value={search} onChange={(e) => setSearch(e.target.value)}></input>
              <button type="button" onClick={handelesearch}>Search</button>

            <table border={1} cellPadding={3}>
        
          <tr>
            <th>NO.</th>
            <th>NAME</th>
            <th>SURNAME</th>
            <th>AGE</th>
            <th>DELETE</th>
            <th>EDIT</th> 
          </tr>
       
        <tbody>
          {
            list.map((i, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
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
    )
}
export default Formiktag;