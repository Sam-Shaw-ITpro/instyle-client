import React from 'react';

const DisplaycolorsTable = (props) => {
    return (
        <div>
            <b>All saved color schemes.</b>
            <br />
            {props.savedcolors.map((colorList, id) => {
                const bgcolor = { background: colorList.color, };
                // return ( console.log(colorList.color + colorList.bordercolor + colorList.fSize));
                return (
                    <div key={id} className='savedcolorsdiv' style={bgcolor}>
                        {colorList.color} {colorList.bordercolor} {colorList.fSize}
                        <button id={colorList.id} onClick={props.delete} color="danger">DELETE IT!</button>
                        <button id={colorList.id} onClick={e => props.update(e, colorList)} color="success">UPDATE IT!</button>
                        <button id={colorList.id} onClick={e => props.display(e, colorList)} color="success">DISPLAY N/W</button>
             </div>
                )
            })
            }
        </div>
    );
}
export default DisplaycolorsTable;