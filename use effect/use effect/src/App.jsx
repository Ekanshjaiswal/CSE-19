import React,{useState,useEffect} from 'react'



const App =()=>{
    const [formData,setformData]=useState({
        name:"",
        email:"",
        password:""
    })
    useEffect(()=>{
        console.log("form data update",formData);

    },[formData])
const handlchange=(e)=>{
    setformData({
        ...formData,
        [e.target.name]:e.target.value,
    })
const handleSubmit=(e)=>{
    e.preventDefault()
    alert("regestration successfully");
    console.log(formData);
}
}


    return(
        <div>
            <form onSubmit={handleSubmit}>
                
                <input type ='text'
                name="name"
                placeholder='enter your name'
                value={formData.name}
                onChange={handlrChange}
                />
                <br />
                 <br />
            <input type='email'
            name="email"
            placeholder='enter your email'
            value={formData.email}
                onChange={handlrChange}
            />
<br/>
            <br/>
            <input type='password'
            name='password'
            placeholder='enter your password'
            value={formData.password}
                onChange={handlrChange}
            />
            <br/>
            <button type ='submit'>Registration</button>
            </form>
        </div>
    )
}