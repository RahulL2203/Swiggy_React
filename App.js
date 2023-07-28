import React from "react";
import ReactDOM  from "react-dom/client";

//React.createElement ==> Object =>Becomes HTML Element upon rendering to DOM
const heading = React.createElement("h1",
{id: "headdding"},
"Hello World from React!!");

console.log(heading);

//JSX - JSX is HTML like syntax
const JSXheading = <h1 id="headingg">Jsx Heading</h1>
console.log(JSXheading);

const HeadingCompoponent = ()=>{
    return <h1>Hello Component1</h1>
}
const HeadingCompoponent2 = ()=>(
    <>    
    <HeadingCompoponent/>
    <h1>Hello Component2</h1> 
    </>

    )
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingCompoponent2/>);
