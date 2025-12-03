import React from "react";
import styled from 'styled-components'

function StyledComponent() {
    const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: lightblue;
  `;

  const Title = styled.h1`
    color: darkblue;
    font-size: 24px;
    font-weight: bold;
  `;

  const Description = styled.p`
    color: darkgray;
    font-size: 18px;
  `;

  return (
    <>

     <Container>
      <Title>Welcome to My App</Title>
      <Description>This is a simple component with styles.</Description>
     </Container>

    </>
  )
}

export default StyledComponent;