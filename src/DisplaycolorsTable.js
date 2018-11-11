import React from 'react';
import { Table, Button } from 'reactstrap';

const DisplaycolorsTable = (props) => {
    return (
        <div>
            <h3>Saved colors schemes</h3>
            {props.savedcolors.map((colorList, id) => {
                const bgcolor = { background: colorList.color, };
                return (
                    <div key={id} className='savedcolorsdiv' style={bgcolor}>
                        {colorList.color} {colorList.bordercolor} {colorList.fSize}
                        <button id={colorList.id} onClick={props.delete} color="danger">DELETE IT!</button>
                        <button id={colorList.id} onClick={e => props.update(e, colorList)} color="success">DISPLAY IT!</button>
                    </div>
                )
            })
            }
        </div>
    );
}



export default DisplaycolorsTable;