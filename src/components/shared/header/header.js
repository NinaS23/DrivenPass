import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import lock from "../../../assets/images/lock.svg";
import out from "../../../assets/images/out.svg";

export default function Header({ type,pathBack }) {
    const location = useLocation();

    function canRenderHeader() {
        return !["/", "/sign-up"].includes(location.pathname);
    }
   const text = "< voltar"
    return canRenderHeader() ? (
        <>
            <HeaderContent>
                <div>
                    <StyledLink to={"/menu"}>
                        <img src={lock} alt="cadeado" />
                    </StyledLink>
                    <h2>DrivenPass</h2>
                </div>
                <ImageLink to={"/"}>
                    <img src={out} alt="cadeado" />
                </ImageLink>
            </HeaderContent>
            <Status>
                <h3>{type}</h3>
                <StyledLink to={pathBack}><h3>{text}</h3></StyledLink>
                </Status>
        </>
    ) : null;
}

const HeaderContent = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
img{
    margin-right: 7%;
    
}
div{
    display: flex;
    justify-content: center;
    align-items: center;
    img{
    margin-left: 17%;
    height:60px ;
    width: 45px;
    margin-bottom: 3%;
  }
    h2{
        margin-top: 7%;
        margin-left: 4%;
     font-family: 'Righteous';
     font-style: normal;
     font-weight: 400;
     font-size: 36px;
     line-height: 45px;
     display: flex;
     align-items: center;
     text-align: center;
     letter-spacing: -0.012em;
     color: #005985;
  }
}

`
const Status = styled.div`
width: 100%;
height: 41px;
background-color: #005985;
justify-content: space-between;
align-items:center;
padding-right: 2%;
padding-left: 3%;
padding-top:2%;
display: flex;
h3{
    font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #FFFFFF;

}

`
const StyledLink = styled(Link)`
text-decoration: none;
`
const ImageLink = styled(Link)`
text-decoration: none;
margin-top: 1.63%;
`
