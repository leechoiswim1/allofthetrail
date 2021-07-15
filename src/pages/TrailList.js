import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Trail from '../components/Trail';


const TrailList = (props) => {
   
    const trail_list = useSelector((state) => state.trail.list);
    const {history} =props;
        return (
            <React.Fragment>
                <Button onClick={()=>{history.push("/write")}}>트레일 추가하기</Button>                
                <TrailTable>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">번호</TableCell>
                                <TableCell align="center">이름</TableCell>
                                <TableCell align="center">나라</TableCell>
                                <TableCell align="center">길이</TableCell>
                                <TableCell align="center">소요기간</TableCell>
                            </TableRow>
                        </TableHead>
                     
                        {trail_list.map((t,idx) => {
                                return (
                            <TableBody key={idx}
                                    onClick={()=>{
                                        props.history.push("/trail/"+ idx);
                                    }}>
                                    <TableCell align="center">{idx+1}</TableCell>    
                                    <TableCell align="center">{t.name}</TableCell>   
                                    <TableCell align="center">{t.country}</TableCell>   
                                    <TableCell align="center">{t.length}</TableCell>   
                                    <TableCell align="center">{t.time}</TableCell> 
                                    </TableBody>
                                );
                            })}
                    </Table>
                </TrailTable>
                
            </React.Fragment>
    );
};

const TrailTable = styled.div `
    width: 70%;
    height: 52%;
    margin: auto;
    text-align:center;
    overflowX: auto;
    background-color:#FAF2DA;

`;

const Button = styled.button`
margin: 10px auto;
width: 20%;
height: 30px;
border-radius: 10px;
border:none;
display:block;
background-color:#8E9775;
`;


TrailList.defaultProps = {};

export default TrailList;
