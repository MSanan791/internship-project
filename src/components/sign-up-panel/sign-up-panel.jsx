import { useState } from "react";
import React, {useEffect} from "react";
import axios from "axios";
import fs from "fs";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export default function Signup(){

  const [file, setfile] = useState(null)
  const [progress, setProgress] = useState({started: false, pc :0})
  const [msg, setMsg] = useState(null);
  const[pfpSrc, setPfpSrc] = useState('/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg')

    async function SignUp(){
        try{
          console.log(`coming from signup function: ${user}`)
          let response = await axios.post('http://localhost:9000/login/:1', user)
          window.alert(response.data)
        }catch(err){
          console.error("error occured: ", err);
        }
      }

      const [user, setUser] = useState({
        name : '',
        email:'',
        password : ''
      })
    
      function updateUser(e){
        const {name,value} = e.target
        //console.log(value);
        setUser({
          ...user,
          [name] : value
        })
      }
    
      function handleUpload(){
        if(!file){
          console.log("No file is selected")
          return;
        }
        const fd = new FormData();
        fd.append('file', file);

        setMsg("file is Uploading...")
        setProgress(prevState => {
          return ({...prevState, started : true} )
        })
        //clconsole.log(file)
        axios.post('http://localhost:9000/signup/uploadfile', fd, {
          onUploadProgress: (progressEvent) => { setProgress(prevState => 
          { 
            return {...prevState, pc :  progressEvent.progress*100}
          }
          ) },
          headers:{
            "Custom-Header": "value",
          }
        }).then(res =>{
          setMsg('Upload Successful')
          console.log(res.data)}).catch(err =>{
            setMsg('Upload Failed')
            console.log(err)})
      }

    return(
        <div>
            
            <div className="container">
            <div className="pfp-container">
            <div className="card">
        
        <div className="card_title">
          <h1>Create Account</h1>
          <span>Already have an account? <a href="login">Sign In</a></span>
        </div>
        <div className="form">
        <form  onSubmit={(e) => {e.preventDefault()}}>
        <div className="pfp">
          <img src ={pfpSrc}/>
        </div>
          <input type="text" name="name" id="username" placeholder="UserName" value = {user.name} onChange={(e)=>updateUser(e)} />
          <input type="email" name="email" placeholder="Email" id="email" value = {user.email} onChange={(e)=>updateUser(e)} />
          <input type="password" name="password" placeholder="Password" id="password" value = {user.password} onChange={(e)=>updateUser(e)} />
          <input onChange={(e) => {setfile(e.target.files[0]), console.log(e.target.files[0]) ,setPfpSrc(URL.createObjectURL(e.target.files[0]))}} type="file" name="myFile" />
          <button onClick={handleUpload}>Upload pfp</button>
          <button onClick={SignUp}>Sign Up</button>
          {progress.started && <progress max = '100' value={progress.pc}></progress>}
          {msg && <span>{msg}</span>}
          </form>
        </div>
        <div className="card_terms">
            <input type="checkbox" name="" id="terms"/> <span>I have read and agree to the <a href="">Terms of Service</a></span>
        </div>
      </div>
     
            </div>
    
    </div>

        </div>  

    )
}