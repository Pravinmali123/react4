import { useFormik } from 'formik'
import React, { useState } from 'react'

const UseFormik = () => {

    const [ini , setIni] = useState({
        name : '',
        surname : ''
    })

    const [list , setList] = useState([])

    const f = useFormik({
        initialValues : ini,
        onSubmit : (values) => {
            console.log(values);
            setList([...list , values])
            f.handleReset()
        }
    })

  return (
    <>
        <form action="" onSubmit={f.handleSubmit} style={{marginTop:"120px"}}>
            <input type="text" name="name" value={f.values.name} id="" onChange={f.handleChange}/> <br /><br />
            <input type="text" name="surname" value={f.values.surname} id="" onChange={f.handleChange} /> <br /><br />
            <button type="submit">Submit</button>
        </form>
    </>
  )
}

export default UseFormik