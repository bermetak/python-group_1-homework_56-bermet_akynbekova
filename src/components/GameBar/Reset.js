import React from 'react';


function Reset(props) {
    return <div className='reset'>
        <button onClick={props.reset}>
            Reset
        </button>
    </div>
}


export default Reset;
