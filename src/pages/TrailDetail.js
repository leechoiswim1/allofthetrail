import React from "react";
import Trail from "../components/Trail";
import styled from "styled-components";
import {useSelector, useDispatch} from "react-redux";
import {actionCreators as trailActions} from "../redux/modules/trail";


const TrailDetail = (props) => {
    const dispatch = useDispatch();
    const id = parseInt(props.match.params.idx)
    const trail_list = useSelector((store) => store.trail.list);
    const trail = trail_list[id];
  
    const {history} = props;

    const deleteTrail = () => {
        dispatch(trailActions.deleteTrail(id));
        history.replace("/");
            }
    

    return (
        <React.Fragment>
            <Grid>
                <TextBox >
                    <Text>{trail.name}</Text>
                    <Text>{trail.country}</Text>
                </TextBox>
                <TextBox >
                    <Text>{trail.length}</Text>
                    <Text>{trail.time}</Text>
                </TextBox>
                <TextBox2>
                    <Text2 >{trail.detail}</Text2>

                    <Button
                        onClick={() => {
                            history.push("/edittrail/"+id)
                        }}>트레일 수정하기
                    </Button>

                    <Button
                        onClick={() => {
                            deleteTrail();
                        }}>트레일 삭제하기
                    </Button>

                    <Button
                        onClick={() => {
                            history.replace("/");
                        }}>메인으로 돌아가기
                    </Button>

                </TextBox2>
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

const TextBox=styled.div`
margin: auto;
display:flex;
`;
const TextBox2=styled.div`
margin: auto;
display:blcok;
`;


const Text = styled.div`
margin: 10px auto;
width: 39%;
height: 30px;
border-radius:10px;
border:none;
background-color:#FAF2DA;

`;
const Text2 = styled.div`
margin :20px auto ;
width: 90%;
height: 100px;
box-sizing:border-box;
border-radius:10px;
border:none;
display:block;
background-color:#FAF2DA;
`;


export default TrailDetail;