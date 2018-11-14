import React from 'react';

const DisplaycolorsTable = (props) => {

    return (
        <div>
            <b>All saved color schemes.</b>
            <br />
            {props.savedcolors.map((colorList, id) => {
                const bgcolor = { background: colorList.color, };
                return (
                    <div key={id} className='savedcolorsdiv' style={bgcolor}>
                        {colorList.color} {colorList.bordercolor} {colorList.fSize}
                        <button id={colorList.id} onClick={props.delete} color="danger">DELETE IT!</button>
                        <button id={colorList.id} onClick={e => props.update(e, colorList)} color="success">UPDATE IT!</button>
                        <button id={colorList.id}  onClick={e => props.test(e, colorList)} color="success">DISPLAY IT!</button>

{/* <button id={colorList.id} fSize={colorList.fSize} background={colorList.background} color={colorList.color} onClick={e => props.test(e, colorList)} color="success">DISPLAY N/W</button> */}
                      
                        {/* <button id={colorList.id} onClick={e => props.update(e, setcolors(colorList))} color="success">DISPLAY N/W</button> */}



            </div>
                )
            })
            }
        </div>
    );
}
export default DisplaycolorsTable;