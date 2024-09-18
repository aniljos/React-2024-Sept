import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export function Login(){

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function login(e){
        e.preventDefault();

        if(name && password){
            setMessage("");
            try {
                
                const loginUrl = "http://localhost:9000/login";
                const response = await axios.post(loginUrl, {name, password});
                dispatch({type: "auth_success", payload: {
                    isAuthenticated: true,
                    user: name,
                    accessToken: response.data.accessToken,
                    refreshToken: response.data.refreshToken
                }});
                

                navigate("/products");

            } catch (error) {
                setMessage("Invalid credentials");
                dispatch({type: 'auth_logout'})
            }


        }
        else{
            setMessage("Enter the credentials");
        }
    }

    return (
        <div>
            <h4>Login</h4>

            {message ? <div className="alert alert-warning">{message}</div>: null}

            <form onSubmit={login}>

                <div className="form-group">
                    <label htmlFor="userName">Name</label>
                    <input className="form-control" type="text" id="userName" value={name} 
                                                        onChange={e => setName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input  className="form-control" type="password" id="password" value={password}
                                                        onChange={e => setPassword(e.target.value)}/>
                </div>

                <br/>

                <div>
                    <button className="btn btn-primary">Login</button>
                </div>

            </form>
        </div>
    )
}