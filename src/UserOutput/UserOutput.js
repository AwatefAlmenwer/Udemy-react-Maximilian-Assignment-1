import React from 'react';

import './UserOutput.css';


const userOutput = (props) => {

    return (
        <div className="UserOutput">
            <p onClick={props.click}> UserOutput component</p>
            <p >Username :{props.username}  </p>
        </div>
    )

}

export default userOutput