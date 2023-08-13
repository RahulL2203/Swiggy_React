import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

 
class About extends React.Component{

    constructor(props){
        super(props)
       //   console.log("Parent Constructor")

    }
    componentDidMount(){
       // console.log("Parent component Did Mount");
    }
    render(){
       console.log("Parent Render");
        return (

            <div className="text-center p-4 mt-28">
                <h1>About US</h1>

                <div>
                    LoggedIn User:
                    <UserContext.Consumer>
                        {({loggedInUser})=>{
                            return <h1 className="font-bold  ">{loggedInUser}</h1>;
                        }}
                    </UserContext.Consumer>
                </div>
                <User name={"Rahul - Functional"}/>
                <UserClass name ={"First"} location ={"DELHI -CLASS"}/>
                {/* <UserClass name ={"Second"} location ={"DELHI -CLASS"}/> */}
            </div> 
        )

    }
}

{/**
//Render Phase
- Parent Constructor
- Parent Render
 

    -FirstChild Constructor
    -FirstChild Render

     -SecondChild Constructor
     -SecondChild Render
      
    <DOM Updated - In Single batch>
    //Commit Phase
    - FirstChild component Did Mount
    -SecondChild component Did Mount


- Parent component Did Mount

*/}

   

export default About;