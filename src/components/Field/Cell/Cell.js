import React from 'react';


function Cell(props) {
    let hiddenItem = null;
    if (props.cell.hasItem) {
        hiddenItem = <span className='hidden-item'>O</span>;
    }

    let cellStyle = {
        background: 'transparent',
        color: 'black'
    };
    if (props.cell.closed) {
        cellStyle.background = 'red';
        cellStyle.color = 'red';
    }

    return <div className='cell' style={cellStyle} onClick={props.click}>
        {hiddenItem}
    </div>
}


export default Cell;
