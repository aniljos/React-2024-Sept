import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute(props){

    const auth = useSelector(state => state.auth);
    const location = useLocation();

    if(auth.isAuthenticated){
        return (
            <>
                {props.children}
            </>
        )
    }
    else{
        return <Navigate to={`/login?redirectFrom=${location.pathname}`}/>
    }

   
}

export default ProtectedRoute