import { useLogin } from "../hooks/useLogin"
import Input from "./Input"

export function Login(){

    const {message, name, password, setName, setPassword, login, nameInputRef} = useLogin()
    
    return (
        <div>
            <h4>Login</h4>

            {message ? <div className="alert alert-warning">{message}</div>: null}

            <form onSubmit={login}>

                {/* <div className="form-group">
                    <label htmlFor="userName">Name</label>
                    <input ref={nameInputRef} className="form-control" type="text" id="userName" value={name} 
                                                        onChange={e => setName(e.target.value)} />
                </div> */}
                <Input ref={nameInputRef} label="Name" type="text" id="userName" value={name} onChange={e => setName(e.target.value)}/>

                {/* <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input  className="form-control" type="password" id="password" value={password}
                                                        onChange={e => setPassword(e.target.value)}/>
                </div> */}
                <Input label="Password" type="password" id="password" value={password}
                                                                        onChange={e => setPassword(e.target.value)}/>

                <br/>

                <div>
                    <button className="btn btn-primary">Login</button>
                </div>

            </form>
        </div>
    )
}