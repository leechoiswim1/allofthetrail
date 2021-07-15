import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as trailActions } from "../redux/modules/trail";


const TrailWrite = (props) => {
    const name_ref = React.useRef(null);
    const country_ref = React.useRef(null);
    const length_ref = React.useRef(null);
    const time_ref = React.useRef(null);
    const detail_ref = React.useRef(null);

  const dispatch =useDispatch();
  const {history} = props;
   //   게시글을 추가하는 함수
  const addTrail = () => {
    const trail ={
        name:name_ref.current.value,
        country:country_ref.current.value, 
        length:length_ref.current.value,
        time:time_ref.current.value,
        detail:detail_ref.current.value,
    }
    console.log(trail)
    dispatch(trailActions.addTrail(trail))
    history.push("/")
  };   

  

  return (
    <React.Fragment>    
        <Grid>
            <InputBox>
                <Input label="이름" placeholder="  트레일 이름을 입력해주세요" ref={name_ref}></Input> 
                <Input label="나라"placeholder="  나라를 입력해주세요" ref={country_ref}></Input> 
            </InputBox>
            <InputBox>
                <Input label="길이" placeholder="  길이를 입력해주세요" ref={length_ref}></Input> 
                <Input label="소요기간" placeholder="  소요기간을 입력해주세요" ref={time_ref}></Input> 
            </InputBox>
            <InputBox2>
                <Input2 label="상세내용" placeholder="  상세내용을 입력해주세요" ref={detail_ref}></Input2>     
                <Button onClick={() => {
            addTrail();
          }}>트레일 추가하기</Button>
          <Button  onClick={() => {
            history.replace("/");}}>메인으로 가기</Button>         
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

export default TrailWrite;