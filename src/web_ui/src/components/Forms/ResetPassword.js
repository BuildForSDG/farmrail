import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";


const StyledCard = styled(Card)({
    width:"700px",
    margin:"150px auto",
    padding:0
})

const Button = styled.button`
    width:100%;
    background:springgreen;
    color:black;
    border-radius:4px;
    padding:10px;
    border:0;
`
const Input = styled.input`
    width: 100%;
    padding: 10px 15px;
    margin: 15px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`
const H6 = styled.h4`
    margin:0;
    text-align:center;
`
const H1 = styled.h1`
    margin:5px;
    color:green;
    text-align:center;
`
const Paragraph = styled.p`
    margin:15px 0 0;
    text-align:'left';
`
const Img = styled.img`
    width:250px;
    height:250px;
    border-radius:50%;
`
const Div = styled.div`
    width:250px;
    height:250px;
    margin-left:-10%;
    margin-top:-10%;

`
const Wrapper = styled.div`
    width:230px;
    margin: -15% auto 0;
    padding-bottom:30px;
`


const ResetPassword = () =>{
    return (
        <StyledCard>
            <CardContent>
                <Div>
                    <Img src="/images/resetimg.jpg"></Img>
                </Div>
                <Wrapper>
                    <H1>Farmrail</H1>
                    <H6>RESET PASSWORD</H6>
                    <form>
                        <Input type="text"/>
                        <Button>Send Reset Password Link</Button>
                    </form>
                    <Paragraph>Back to Home</Paragraph>
                </Wrapper>
            </CardContent>
        </StyledCard>
    )
}
export default ResetPassword;