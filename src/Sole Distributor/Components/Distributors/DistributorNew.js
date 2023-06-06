import React from 'react'
import '../../../Admin/new/new.scss'
import Sidebar from '../Sidebar/SoleSidebar'
import {useNavigate} from "react-router-dom";
import Navbar from '../navbar/Navbar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const DistributorNew = ({inputs, title}) => {

    const navigate = useNavigate();

  const [file, setFile] = useState("");

  let name,value;
  const [user, setUser] = useState({
    username:"", name:"", email:"", phone:"", profession :"", address:"", city:""
  });
  
  const handleInputs = (e) => {
    console.log(e)
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]:value})
}

const PostData = async(e) =>{
    e.preventDefault();
    const {username, name, email, phone, profession,address,city} = user;

    const res = await fetch("/soleDistributor/users/new",{
    method: "POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      username, name, email, phone, profession,address,city
    })
    
  });
  
  const data = await res.json();
  if(res.status===422 || !data){
    window.alert("Invalid Distributor");
    console.log("Invalid Distributor")
  }
  else{
    window.alert("Distributor Submission Successfull");
    console.log("Distributor Submission Successfull");
    navigate("/soleDistributor");
  }

};


  return (
    <div className="new">
    <Sidebar/>
    <div className="newContainer">
      <Navbar/>
      <div className="top">
        <h1>Add New Distributor</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
        </div>

        <div className="right">
          
        <form method='POST'>
              <div className="formInput">
                <label htmlFor='file'>
                  Image:<DriveFolderUploadOutlinedIcon className='icon'/>
                </label>
                <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{display:"none"}}/>
              </div>

            {/* {inputs.map((input)=>(

              <div className="formInput" key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder}/>
              </div>
            ))} */}
              
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder='ali_shk' name="username" id="username" autoComplete='off' value={user.username}  onChange={handleInputs}  />
              </div>

              <div className="formInput">
                <label>Name and surname</label>
                <input type="text" placeholder='Ali Sheikh' name="name" id="name" autoComplete='off' value={user.name}  onChange={handleInputs} />
              </div>
              
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder='ali_shk@gmail.com' name="email" id="email" autoComplete='off' value={user.email}  onChange={handleInputs} />
              </div>
              
              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder='+92 349 567 89' name="phone" id="phone" autoComplete='off' value={user.phone}  onChange={handleInputs} />
              </div>
            
              <div className="formInput">
                <label>Profession</label>
                <input type="text" placeholder='Distributor' name="profession" id="profession" autoComplete='off' value={user.profession}  onChange={handleInputs} />
              </div>
              
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder='Police Foundation Islamabad' name="address" id="address" autoComplete='off' value={user.address}  onChange={handleInputs} />
              </div>
              
              <div className="formInput">
                <label>city</label>
                <input type="text" placeholder='Islamabad' name="city" id="city" autoComplete='off' value={user.city}  onChange={handleInputs} />
              </div>

              <input type="submit" name='send' id='send' value={"Send"} className="button"
                   onClick={PostData}
                          /> 

          </form>

        </div>
      </div>
    </div>
  </div>
  )
}

export default DistributorNew