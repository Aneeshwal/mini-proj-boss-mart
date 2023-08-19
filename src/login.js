import React,{useState} from 'react';
import Service from "./service"

export default function Login() {

    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);

    const handleInput = event => {

        const{id,value} = event.target;
        if(id === "email"){
            setEmail(value);
        }
        if(id == "pass") {
                setPassword(value);
        }
    }

    var boss=[];

    let e=0;
    let p=0;

    const handleLogin = (event) =>{

        event.preventDefault();

        Service.getAllBoss().then((res)=>{
            
            // setBoss=(res.data)
            boss=res.data
        })
        for(var i=0;i<boss.length;i++){

            if(boss[i].email===email){
                e=1;
                if(boss[i].password===password){
                    p=1;
                    break;
                }
                else{
                    p=0;                    
                }
            }
            else{
                e=0;
            }
        }

        if(e===1 && p===1){
            event.preventDefault();
            alert("Login Sucessful");
            window.location.href = 'http://localhost:3000';
        }
        else if(e===1 && p===0){
            alert("Incorrect Password");
        }
        else{
            alert("Enter Correct email address");
            
        }

    }

    // const [authType, setAuthType] = useState("login");
    // const setType = (event) =>{
    //     if(event.target.data==="login"){
    //         setAuthType("sginup")
    //     }
    //     else{
    //         setAuthType("login")
    //     }
    // }

    const register = ()=>{
        window.location.href = 'http://localhost:3000/register';
    }

    return (
        <>
   
            <div className="Auth-form-container">
                <form className="Auth-form" id='login'  >
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Login Now</h3>
                        {/* <Link to="/register#signup" onClick={setAuthType("signup")}>Do Not Have An Account?</Link> */}
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
                        <br/>
                        <div className="d-grid gap-2 mt-3">
                            <button className="button" type='submit' onClick={handleLogin}>
                                Submit
                            </button>
                        </div>
                        <h6>Do Not Have An Account?</h6>
                <button className="button"  onClick={register}>
                    Sginup
                </button>
                        
                    </div>
                </form>  
                
            </div>
        </>
    )
}