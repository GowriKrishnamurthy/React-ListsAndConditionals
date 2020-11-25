import React from 'react'

const inputValidator=(props)=>
{
    let validationMessage = 'Text long enough';
    
    if(props.inputLen<=5)
        validationMessage='Text too short';

        return(<div>
            <p>{validationMessage}</p>
        </div>
        );
};

export default inputValidator;