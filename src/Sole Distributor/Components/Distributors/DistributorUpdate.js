import React,{useEffect} from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from '../Sidebar/SoleSidebar'
import {useNavigate} from "react-router-dom";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import "../../../Admin/new/new.scss"
import {useParams} from 'react-router-dom'

const DistributorUpdate = () => {

  const navigate = useNavigate();

  const [file, setFile] = useState("");
  let name,value;
  const [dis, setDis] = useState({
      username:"", name:"", email:"", phone:"", profession :"", address :"", city :""
  });
 
  const params = useParams();
  useEffect(()=>{
getDisDetails();
  },[])

  const getDisDetails = async()=>{
      console.log(params)
      let result = await fetch(`/soleDistributor/users/${params.id}`)
      result = await result.json();
      console.log(result)
      setDis({
          ...dis,
          username: result.username,
          name: result.name,
          email: result.email,
          phone: result.phone,
          profession: result.profession,
          address: result.address,
          city: result.city,
        });
     
  }


  const handleInputs = (e) => {
      console.log(e)
      name = e.target.name;
      value = e.target.value;
      setDis({...dis, [name]:value})
  }

  const updateData = async(e) => {
    e.preventDefault();
    const { username, name, email, phone, profession, address, city } = dis;
    console.log(dis);
    let result = await fetch(`/soleDistributor/users/${params.id}`, {
      method: "Put",
      body: JSON.stringify({
        username,
        name,
        email,
        phone,
        profession,
        address,
        city,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (result.status === 200) {
      window.alert("Distributor Updation Successfull");
      navigate("/soleDistributor");
    } else {
      console.log("Error updating Distributor");
    }
  };

  return (
    <>
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>Update Distributor</h1>
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
                  <input type="text" placeholder='ali_shk' name="username" id="username" autoComplete='off' value={dis.username}  onChange={handleInputs}  />
                </div>

                <div className="formInput">
                  <label>Name and surname</label>
                  <input type="text" placeholder='Ali Sheikh' name="name" id="name" autoComplete='off' value={dis.name}  onChange={handleInputs} />
                </div>
                
                <div className="formInput">
                  <label>Email</label>
                  <input type="email" placeholder='ali_shk@gmail.com' name="email" id="email" autoComplete='off' value={dis.email}  onChange={handleInputs} />
                </div>
                
                <div className="formInput">
                  <label>Phone</label>
                  <input type="text" placeholder='+92 349 567 89' name="phone" id="phone" autoComplete='off' value={dis.phone}  onChange={handleInputs} />
                </div>
              
                <div className="formInput">
                  <label>Profession</label>
                  <input type="text" placeholder='Sole Distributor' name="profession" id="profession" autoComplete='off' value={dis.profession}  onChange={handleInputs} />
                </div>
                
                <div className="formInput">
                  <label>Address</label>
                  <input type="text" placeholder='Police Foundation Islamabad' name="address" id="address" autoComplete='off' value={dis.address}  onChange={handleInputs} />
                </div>
                
                <div className="formInput">
                  <label>City</label>
                  <input type="text" placeholder='Pakistan' name="city" id="city" autoComplete='off' value={dis.city}  onChange={handleInputs} />
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

export default DistributorUpdate