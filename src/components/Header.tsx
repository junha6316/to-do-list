import styled from "styled-components"



const HeaderText = styled.h1`
    font-size: 48px;
`

const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    padding: 10px 0;
`

export default function Header(){
    return (
    <Container>
        <HeaderText>This Todo Application</HeaderText>
    </Container>
    )
}