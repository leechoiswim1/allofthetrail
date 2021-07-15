import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


const Trail =(props) =>{
    return (
        <React.Fragment>
            <TableRow>
                <TableCell>{props.id}</TableCell>
                <TableCell>{props.name}</TableCell>
                <TableCell>{props.contury}</TableCell>
                <TableCell>{props.length}</TableCell>
                <TableCell>{props.time}</TableCell>
            </TableRow>
        </React.Fragment>
    );
};

Trail.defaultProps ={
    id:1,
    name:'pct',
    contury:'usa',
    length:'4300km',
    time:'6M',
};

export default Trail;

