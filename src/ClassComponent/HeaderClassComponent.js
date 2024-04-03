//1-Import
import React from "react";

//2-Inheritance - inherits from Parent class
class HeaderClassComponent extends React.Component
{
    //3-constructor - used to initialize a Class
    constructor()
    {
        //4-super - used to initialize a Parent class
        super();
    }

    //5-render() - used to render/send output from the Component
    render()
    {
        return <div>
                <h1>
                    Amazon.com            
                </h1>              
            </div>
    }
}

//6-Export this Component
export default HeaderClassComponent;