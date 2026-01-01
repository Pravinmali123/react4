import React, { useState } from "react";

export const Cruad = () => {
  const [name, setName] = useState("");
  const [phi, setPhi] = useState("");
  const [gio, setGio] = useState("");
  const [com, setCom] = useState("");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(null)
  const [search,setSearch] = useState()

const handleClick = () => {

  const a = parseInt(phi);
  const b = parseInt(gio);
  const c = parseInt(com);

  const total = a + b + c;
  const percentage = total / 300 * 100;

var grade = "";
    var Pf = "";

    if (a < 33 || b < 33 || c < 33) {
        grade = "Fail";
        Pf = "Fail";
    } else {
        if (percentage >= 90) {
            grade = "A+";
            Pf = "Pass";
        } else if (percentage >= 80) {
            grade = "A";
            Pf = "Pass";
        } else if (percentage >= 70) {
            grade = "B";
            Pf = "Pass";
        } else if (percentage >= 60) {
            grade = "C";
            Pf = "Pass";
        } else if (percentage >= 33) {
            grade = "D";
            Pf = "Pass";
        } else {
            grade = "Fail";
            Pf = "Fail";
        }
    }
if(edit != null){
    let copy = [...list]
    copy[edit] = {name,phi,gio,com,total,percentage,grade,Pf}
    setList(copy)
    setEdit(null)
}else{
setList([...list, {name,phi,gio,com,total,percentage,grade,Pf}]);
}
  
  setName("");
  setPhi("");
  setGio("");
  setCom("");
};
const handleDelete = (index)=>{
    let copy = [...list]
    copy.splice(index,1)
    setList(copy)
}
const handleEdit = (data,index) =>{
    setName(data.name)
    setPhi(data.phi)
    setGio(data.gio)
    setCom(data.com)
    setEdit(index)

}
const handelesearch = () => {
  let copy = [...list]  
  let filterData = copy.filter(i => i.name == search)
  setList(filterData)

};



  return (
    <div style={{margin: "50px 10px 10px 10px"}}>
      <h2>CRUD Operation </h2>

      <div>
        <input
          style={{ marginRight: 5, width: 230, padding: 6 }} type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)}
        />
        <input style={{ margin: 5, width: 120, padding: 6 }} type="number" placeholder="Philosophy" value={phi} onChange={(e) => setPhi(e.target.value)}
        />
        <input style={{ margin: 5, width: 120, padding: 6 }} type="number" placeholder="Geography" value={gio} onChange={(e) => setGio(e.target.value)}
        />
        <input style={{ marginLeft: 5, width: 140, padding: 6 }} type="number" placeholder="Computer Science" value={com} onChange={(e) => setCom(e.target.value)}
        />
        <button style={{ margin: 5, padding: 6 }} onClick={handleClick}>ADD</button> <br />

        <input type="text"  style={{ marginRight: 5, width: 230, padding: 6 }} placeholder="Search Your Name" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button style={{ margin: 5, padding: 6 }} onClick={handelesearch}>Search</button>

      </div>

      <table border={1} cellPadding={8}>
        
          <tr>
            <th>NAME</th>
            <th>Philosophy</th>
            <th>Geography</th>
            <th>Computer</th>
            <th>Total Marks</th>
            <th>Percentage</th>
            <th>Grade</th>
            <th>Pass/Fail</th>
            <th>DeleteBtn</th>
            <th>EditBtn</th>
          </tr>
       
        <tbody>
          {
            list.map((i, index) => (
              <tr>
                <td>{i.name}</td>
                <td>{i.phi}</td>
                <td>{i.gio}</td>
                <td>{i.com}</td>
                <td>{i.total}</td>
                <td>{i.percentage}%</td>
                <td>{i.grade}</td>
                <td>{i.Pf}</td>
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
};