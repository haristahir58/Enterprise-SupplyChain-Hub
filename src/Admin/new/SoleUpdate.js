import React,{useEffect} from 'react'
import Navbar from '../Components/navbar/Navbar'
import Sidebar from '../Components/sidebar/Sidebar'
import {useNavigate} from "react-router-dom";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import "../new/new.scss"
import {useParams} from 'react-router-dom'

const SoleUpdate = () => {

    const navigate = useNavigate();

    const [file, setFile] = useState("");
    let name,value;
    const [sole, setSole] = useState({
        username:"", name:"", email:"", phone:"", profession :"", address :"", country :""
    });
   
    const params = useParams();
    useEffect(()=>{
getSoleDetails();
    },[])

    const getSoleDetails = async()=>{
        console.log(params)
        let result = await fetch(`/admin/users/${params.id}`)
        result = await result.json();
        console.log(result)
        setSole({
            ...sole,
            username: result.username,
            name: result.name,
            email: result.email,
            phone: result.phone,
            profession: result.profession,
            address: result.address,
            country: result.country,
          });
       
    }


    const handleInputs = (e) => {
        console.log(e)
        name = e.target.name;
        value = e.target.value;
        setSole({...sole, [name]:value})
    }

    const updateData = async(e) => {
      e.preventDefault();
      const { username, name, email, phone, profession, address, country } = sole;
      console.log(sole);
      let result = await fetch(`/admin/users/${params.id}`, {
        method: "Put",
        body: JSON.stringify({
          username,
          name,
          email,
          phone,
          profession,
          address,
          country,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    
      if (result.status === 200) {
        window.alert("Sole Distributor Updation Successfull");
        navigate("/admin");
      } else {
        console.log("Error updating Sole Distributor");
      }
    };

  return (
    <>
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>Update Sole Distributor</h1>
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

                
                <div className="formInput">
                  <label>Username</label>
                  <input type="text" placeholder='ali_shk' name="username" id="username" autoComplete='off' value={sole.username}  onChange={handleInputs}  />
                </div>

                <div className="formInput">
                  <label>Name and surname</label>
                  <input type="text" placeholder='Ali Sheikh' name="name" id="name" autoComplete='off' value={sole.name}  onChange={handleInputs} />
                </div>
                
                <div className="formInput">
                  <label>Email</label>
                  <input type="email" placeholder='ali_shk@gmail.com' name="email" id="email" autoComplete='off' value={sole.email}  onChange={handleInputs} />
                </div>
                
                <div className="formInput">
                  <label>Phone</label>
                  <input type="text" placeholder='+92 349 567 89' name="phone" id="phone" autoComplete='off' value={sole.phone}  onChange={handleInputs} />
                </div>
              
                <div className="formInput">
                  <label>Profession</label>
                  <input type="text" placeholder='Sole Distributor' name="profession" id="profession" autoComplete='off' value={sole.profession}  onChange={handleInputs} />
                </div>
                
                <div className="formInput">
                  <label>Address</label>
                  <input type="text" placeholder='Police Foundation Islamabad' name="address" id="address" autoComplete='off' value={sole.address}  onChange={handleInputs} />
                </div>
                
                <div className="formInput">
                  <label>Country</label>
                  <input type="text" placeholder='Pakistan' name="country" id="country" autoComplete='off' value={sole.country}  onChange={handleInputs} />
                </div>

                <input type="submit" name='send' id='send' value={"Update"} className="button"
                    onClick={updateData}
                            /> 

            </form>

          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default SoleUpdate