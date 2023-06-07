
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import './App.css'

function App() {
 

  const schema = yup.object().shape({
    FirstName: yup.string().required('FirstName is required'),
    PhoneNumber:yup.number().positive().integer().required(),
    email : yup.string().email().required(),
    passward :yup.string().max(10).min(2),
    date : yup.string(). required("input the curent date")

  })
  const {register, handleSubmit , formState: {errors}}= useForm({resolver:yupResolver(schema)})
  const confirmSubmision = (data) =>{
    console.log(data)
  }

  return (
    <div style={{backgroundColor:'whitesmoke', width:'95%', padding:'20px' ,margin:'20px',paddingLeft:'10rem' ,alignItems:'center'}}>
        <form onSubmit={handleSubmit(confirmSubmision)} style={{ width:'30%', display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <label>First Name</label>
            <input type='text' placeholder='Enter fist name'{...register('FirstName')}/><br/>
            <p>{ errors.FirstName?.message}</p>
            <label >Phone Number</label>
            <input type='number' placeholder='Enter phone number'{...register('PhoneNumber')}/><br/>
            <p>{ errors.PhoneNumber?.message}</p>
            <label>Email</label>
            <input type='text' placeholder='Enter Email'{...register('email')}/><br/>
            <p>{ errors.email?.message}</p>
            <label >Enter Password</label>
            <input type='type' placeholder='Enter password'{...register('passward')}/><br/>
            <p>{ errors.passward?.message}</p>
            <input type='date'{...register('date')} />
            <p>{ errors.data?.message}</p><br/> 
            <input type='submit' value='submit form' style={{width:'50%', color:'black', backgroundColor:'green', 
        fontWeight:'bolder', padding:'5px'}} />

        </form>
    </div>
  )
}

export default App
