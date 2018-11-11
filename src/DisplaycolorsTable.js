import React from 'react';
import { Table, Button } from 'reactstrap';
import Displaysavedcolors from './Displaysavedcolors';

const DisplaycolorsTable = (props) => {
    return (
        <div>
            <h3>Saved colors schemes</h3>
            <hr />
            <Table>
                <tbody>
                    {props.savedcolors.map((colorList, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row"></th>
                                    <td>{colorList.color} {colorList.bordercolor} {colorList.fSize}</td>
                                    <td>
                                        <Button id={colorList.id} onClick={props.delete} color="danger">DELETE IT!</Button>
                    <Button id={colorList.id} onClick={e => props.update(e, colorList)} color="success">DISPLAY IT!</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}
export default DisplaycolorsTable;