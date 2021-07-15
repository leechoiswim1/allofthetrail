import React from "react";
import styled from "styled-components";
import {history} from "../redux/configureStore";

const Header = (props) => {
    return (
        <React.Fragment>
            <Header1>
                <h4>세모트: 세상의 모든 트레일</h4>
            </Header1>
            <Header2 onClick={() => {
            history.replace("/");}}>
                <Text>All Trails In The World</Text>    
            </Header2>
        </React.Fragment>
    );
};  

const Header2 = styled.div `
width: 70%;
height: 30%;
padding: 16px 0px;
margin: auto;

text-align:center;
font-size: 50px;
padding : 50px;

`;
const Header1 = styled.div `
width: 70%;
height: 20%;
margin: auto;
padding:1px;auto;
text-align:center;
background-color:#FAF2DA;

`;

const Text = styled.text `
font-size:2rem;
`;



Header.defaultProps = {};

export default Header;