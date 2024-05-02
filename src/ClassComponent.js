import React from "react";

class ClassComponent extends React.Component{

    render(){
        const {user}= this.props;
        return(

            <>
            <h1>Welcome {user}</h1>
            </>
        )
    }
};
export default ClassComponent;