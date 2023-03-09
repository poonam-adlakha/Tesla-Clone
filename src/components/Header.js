import React from 'react';
import styled from 'styled-components';

function header() {
  return (
    <Container>
        <a> 
            <img src='./images/logo.svg'></img>
            </a>

        <Menu>
            
        </Menu>
    </Container>
  )
}

export default header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;

`
const Menu = styled.div`


`