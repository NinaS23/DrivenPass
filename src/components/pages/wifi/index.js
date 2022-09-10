import styled from "styled-components";
import Confirmation from "../../shared/modalConfirmation.js";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function RegisterWifi({ setType }) {
    setType("wifi")
    const text = "< voltar";
    const [wifiInfo, setWifiInfo] = useState({
        name: "",
        label: "",
        password: ""
    });
    const [disabled, setDisabled] = useState(false);//setar true depois
    const body = {
        networkName: wifiInfo.name,
        password: wifiInfo.password,
        title: wifiInfo.label
    }
    return (
        <>
            <Register>cadastro</Register>
            <ContentMenu>
                <Items>
                    <h3>Nome da rede</h3>
                    <input 
                    type="text" 
                    placeholder="" 
                    disabled={disabled} 
                    value={wifiInfo.name}
                    onChange={e => { setWifiInfo({ ...wifiInfo, name: e.target.value }) }}
                    />
                </Items>
                <Items>
                    <h3>Rótulo da rede</h3>
                    <input 
                    type="text" 
                    placeholder="" 
                    disabled={disabled} 
                    value={wifiInfo.label}
                    onChange={e => { setWifiInfo({ ...wifiInfo, label: e.target.value }) }}
                    />
                </Items>
                <Items>
                    <h3>Senha da rede</h3>
                    <input 
                    type="text" 
                    placeholder="" 
                    disabled={disabled} 
                    value={wifiInfo.password}
                    onChange={e => { setWifiInfo({ ...wifiInfo, password: e.target.value }) }}
                    />
                </Items>
            </ContentMenu>
            <Footer>
                <Link to={"/wifi"}>
                    <Voltar>{text}</Voltar>
                </Link>
                <Confirmation
                    body={body}
                    pathBack={'/network'}
                    setDisabled={setDisabled}
                    pathFront={'/wifi'}
                />
            </Footer>
        </>

    )
}


const Register = styled.h2`
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
margin-top: 5%;
margin-left: 5%;
color: #222222;

`
const ContentMenu = styled.div`
padding-top:5%;
display: flex;
align-items: center;
flex-direction: column;
justify-content:center;
div{
    margin-left:3%;
    margin-right:3%;
    display: flex;
    justify-content:space-between;
    margin-top:5%;
}
`
const Footer = styled.div`
 position: absolute;
bottom:30px;
width: 100%;
display: flex;
padding-left: 5%;
padding-right:15%;
justify-content: space-between;
`
const Voltar = styled.h3`
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
margin-top: 5%;
font-size: 18px;
line-height: 22px;
/* identical to box height */

text-align: center;
text-decoration-line: underline;

color: #000000;
`

const Items = styled.div`
display: flex;
flex-direction: column;

h3{
    font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #222222;
}
input{
    
background: #FFFFFF;
border: 3px solid #005985;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
border-radius: 5px;
width:338px;
height: 40px;
}
textarea{
    background: #FFFFFF;
border: 3px solid #005985;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
border-radius: 5px;
width:338px;
height: 300px; 
}
`
