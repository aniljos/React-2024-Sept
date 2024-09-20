import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTitle } from "../hooks/useTitle";

export function useLogin(){

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useTitle("Login");

    

    async function login(e){

        //debugger;
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
    return {message, name, password, setName, setPassword, login}
}