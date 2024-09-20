import { Component } from "react";

//class component
class AppErrorBoundary extends Component{

    state = {
        hasError: false,
        errorMessage: ""
    }

    componentDidMount(){
        console.log("AppErrorBoundary mounted")
    }

    componentDidCatch(error){
        console.log("componentDidCatch", error);

        this.setState({
            hasError: true,
            errorMessage: "Technical Error. Please reload the application."
        })
    }

    render(){

        if(this.state.hasError){
            return (
                <div className="alert alert-danger">
                    <p>This is the Application Error Boundary</p>
                    <p>Message: {this.state.errorMessage}</p>
                </div>
            )
        }
        else{
            return this.props.children
        }
        
    }
}

export default AppErrorBoundary;