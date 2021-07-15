import React from "react";
import styled from "styled-components";
import {useSelector, useDispatch} from "react-redux";
import {actionCreators as trailActions} from "../redux/modules/trail";

const TrailEdit= (props) => {
  const dispatch = useDispatch();
  const trail_list =useSelector(state =>state.trail.list);
 
  const id = parseInt(props.match.params.idx)
   console.log(id)
 
  const trail_idx = trail_list.findIndex(t =>t.id ===id);

  const trail = trail_list[trail_idx+1];

  const [name,setName] = React.useState(trail.name);
  const [country,setCountry] = React.useState(trail.country);
  const [length,setLength] = React.useState(trail.length);
  const [time,setTime] = React.useState(trail.time);
  const [detail,setDetail] = React.useState(trail.detail);

  const changeName = (e)=>{
    setName(e.target.value)
  };
  const changeCountry = (e)=>{
    setCountry(e.target.value)  
  };
  const changeLength = (e)=>{
    setLength(e.target.value)  
  };

  const changeTime = (e)=>{
    setTime(e.target.value)  
  };
  const changeDetail = (e)=>{
    setDetail(e.target.value)
  };
 

    //   게시글을 추가하는 함수

    const editTrail = () => {
        dispatch(trailActions.editTrail(id));
        props
            .history
            .push("/")
    };

return (
    <React.Fragment>
        <Grid>
            <InputBox>
                <Input label="이름" value={name} onChange = {changeName}/>
                <Input label="나라" value={country}onChange={changeCountry}/>  
            </InputBox>
            <InputBox>
                <Input label="길이" value={length} onChange={changeLength}/>  
                <Input label="소요기간" value={time} onChange={changeTime}/>   
            </InputBox>
            <InputBox2>
                <Input2 label="상세내용" value={detail}onChange={changeDetail}/> 
                <Button
                    onClick={() => {
                        editTrail();
                    }}>트레일 수정하기</Button>
            
            </InputBox2>
        </Grid>

    </React.Fragment>
)
};

const Grid = styled.div`
padding: 40px 20px 20px 20px;
width: 70%;
height: 50%;
margin: auto;
overflowX: auto;
background-color:#8E9775;
box-sizing:border-box;
display:block;
`;

const Button = styled.button`
margin: 10px auto;
width: 30%;
height: 30px;
border-radius: 10px;
border:none;
display:block;
`;

const InputBox=styled.div`
margin: auto;
display:flex;
`;
const InputBox2=styled.div`
margin: auto;
display:blcok;
`;


const Input = styled.input`
margin: 10px auto;
width: 39%;
height: 30px;
border-radius:10px;
border:none;
background-color:#FAF2DA;

`;
const Input2 = styled.input`
margin :20px auto ;
width: 90%;
height: 100px;
box-sizing:border-box;
border-radius:10px;
border:none;
display:block;
background-color:#FAF2DA;
`;

export default TrailEdit;