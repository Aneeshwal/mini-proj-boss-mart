import React,{useState} from 'react';
import Service from "./service"
// import { useEffect } from 'react';
// import { Link } from "react-router-dom";
export default function Register() {

    //const form = useRef();

    // const [type, setType] = useState(null);

    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [password, setPassword] = useState(null);
    const [cpass, setCpass] = useState(null);
    const [email, setEmail] = useState(null);

    const handleInput = event => {

        const{id,value} = event.target;
        if(id === "full_name"){
            setName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "phone"){
            setPhone(value);
        }
        if(id == "pass") {
                setPassword(value);
        }
        if(id == "cpass"){
                setCpass(value);
        }
    }

   

    const handleSubmit = (event) =>{

        event.preventDefault()

        if(password!=cpass){
            alert("Password Not Matching");
        }

        let boss={

            name:name,
            phone:phone,
            email:email,
            password:password
        };
        
        Service.saveBoss(boss).then(res=>{
            alert("Registration Sucessful")
            alert(res.name)
            window.location.href = 'http://localhost:3000';
        })

    }

    // const [boss, setBoss] = useState([]);
    // var boss=[];

    // let e=0;
    // let p=0;

    // const handleLogin = (event) =>{

    //     event.preventDefault();

    //     Service.getAllBoss().then((res)=>{
            
    //         // setBoss=(res.data)
    //         boss=res.data
    //     })
    //     for(var i=0;i<boss.length;i++){

    //         if(boss[i].email===email){
    //             e=1;
    //             if(boss[i].password===password){
    //                 p=1;
    //                 break;
    //             }
    //             else{
    //                 p=0;                    
    //             }
    //         }
    //         else{
    //             e=0;
    //         }
    //     }

    //     if(e===1 && p===1){
    //         alert("Login Sucessful");
    //     }
    //     else if(e===1 && p===0){
    //         alert("Incorrect Password");
    //     }
    //     else{
    //         alert("Enter Correct email address");
    //         window.location.href = 'http://localhost:3000';
    //     }

    // }

    // const [authType, setAuthType] = useState("login");

    const login =()=>{

        window.location.href = 'http://localhost:3000/login';
        
    }
    // const setType = (event) =>{
    //     if(event.target.data==="login"){
    //         setAuthType("sginup")
    //     }
    //     else{
    //         setAuthType("login")
    //     }
    // }


    // return (
    //     <>
   
    //         <div className="Auth-form-container">
    //             {authType==="login" && <form className="Auth-form" id='login' setAuthType={setAuthType}   ref={form} onSubmit={handleLogin}>
    //                 <div className="Auth-form-content">
    //                     <h3 className="Auth-form-title">Login Now</h3>
    //                     {/* <Link to="/register#signup" onClick={setAuthType("signup")}>Do Not Have An Account?</Link> */}
    //                     <div className="form-group mt-3">
    //                         <label>Email...</label>
    //                         <br />
    //                         <input
    //                             id='email'
    //                             name='email'
    //                             type="email"
    //                             className="w3-input"
    //                             placeholder="Enter email"
    //                             onChange={handleInput} required
    //                         />
    //                     </div>
    //                     <div className="form-group mt-3">
    //                         <label>Password...</label>
    //                         <br />
    //                         <input
    //                             id='pass'
    //                             name='pass'
    //                             type="password"
    //                             className="w3-input"
    //                             placeholder="Enter Password"
    //                             onChange={handleInput} required
    //                         />
    //                     </div>
    //                     <br/>
    //                     <div className="d-grid gap-2 mt-3">
    //                         <button className="button" type='submit'>
    //                             Submit
    //                         </button>
    //                     </div>
                        
    //                 </div>
    //         </form> }   
    //         <h6>Do Not Have An Account?</h6>
    //                     <button className="button"  onClick={() => setAuthType("signup")}>
    //                         Sginup
    //                     </button>
    return (
        <>
   
            <div className="Auth-form-container">
                <form className="Auth-form"id='sginup'   >
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Register Now</h3>
                    
                        <div className="form-group mt-3">
                            <label>Name...</label>
                            <br />
                            <input
                                id='full_name'
                                name='full_name'
                                type="name"
                                className="w3-input"
                                placeholder="Enter name"
                                onChange={handleInput} required
                            />
                        </div> 
                        <div className="form-group mt-3">
                            <label>Phone...</label>
                            <br />
                            <input
                                id='phone'
                                name='phone'
                                type="phone"
                                className="w3-input"
                                placeholder="Enter phone"
                                onChange={handleInput} required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Email...</label>
                            <br />
                            <input
                                id='email'
                                name='email'
                                type="email"
                                className="w3-input"
                                placeholder="Enter email"
                                onChange={handleInput} required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password...</label>
                            <br />
                            <input
                                id='pass'
                                name='pass'
                                type="password"
                                className="w3-input"
                                placeholder="Enter Password"
                                onChange={handleInput} required
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Confirm Password ...</label>
                            <br />
                            <input
                                id='cpass'
                                name='cpass'
                                type="password"
                                className="w3-input"
                                placeholder="Confirm Password"
                                onChange={handleInput} required
                            />
                        </div>
                        <br/>
                        <div className="d-grid gap-2 mt-3">
                            <button className="button" type='submit' onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                        <h6>Already Have An Account?</h6>
                        <button className="button"  onClick={login}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
      </>
  );
}
