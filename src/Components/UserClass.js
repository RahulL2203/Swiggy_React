import React from "react";


class UserClass extends React.Component{
constructor(props){
    super(props);

    this.state = {
        userInfo:{
            name:"Dummy",
            location:"Dummy Location", 
        }
    }

    // this.state ={
    //     count :0,
    //     count2:2,  
    // } 

   // console.log(this.props.name + "Child Constructor");
}
async  componentDidMount(){
    //API Calls here
   // console.log(this.props.name + "Child component Did Mount");

   const data = await fetch("https://api.github.com/users/RahulL2203 ");
   const json = await data.json();

   this.setState({
    userInfo:json, 
   })
   console.log(json);
}


componentDidUpdate(){
    console.log("Component Did Update ");
}
    render(){  
       // const {name, location}   = this.props;
        // const {count,count2} = this.state;

        //console.log(this.props.name + "Child Render");

        const {name, location} =this.state.userInfo;
       // debugger;  
    return (
        <div className="user-card"> 
            {/* <h3>Count: {  count }</h3>
            <button onClick={()=>{

                //NEVER UPDATE STATE VARIABLES DIRECTLY  
                this.setState({
                    count:this.state.count +1,
                })
            }}>Count++</button>
            <h3>Count2: {  count2 }</h3> */}
            <h3>Name from Class  : {name }</h3>
            <h3>Location:{location}</h3>
            <h3>Contact: Rahul_Lakkavarapu</h3 >
        </div>
    ); 
}
}
export default UserClass;

/**
 * 
 * ----Mounting
 *    
 * Constructor(Dummy Data)
 * Render(Dummy)
 *          <Html Dummy>
 * ComponentDidMount()
 *      API Call
 *      this.setState -->State variable is Updated
 * 
 * -----Update Phase
 * 
 *   render(API data)
 *  Html (new API data)
 * 
 * componentDidUpdate 
 * 
 */