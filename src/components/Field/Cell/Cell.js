import React from 'react';


function Cell(props) {
    // собираем строку, представляющую классы ячейки
    let cellClass = 'cell';

    // 'cell visible' или 'cell invisible'
    cellClass += props.cell.closed ? ' visible' : ' invisible';

    // 'cell ... has-item' или 'cell ...'
    // тернарный оператор обязательно принимает второй аргумент для else
    // если в else ничего нет - он должен быть пустым, в зависимости от типа данных:
    // пустой строкой (''), null, false, undefined, 0, [] и т.д.
    cellClass += props.cell.hasItem ? ' has-item' : '';

    return <div className={cellClass} onClick={props.click}/>
}


export default Cell;
