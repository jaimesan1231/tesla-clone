import React, { useState } from "react";
import styled from "styled-components";
import CancelIcon from '@material-ui/icons/Cancel';

function Header() {

  const [sidebarOpen,setSidebarOpen]=useState(false)

  return (
    <Container>
      <a href="!#">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="!#">Model S</a>

        <a href="!#">Model 3</a>

        <a href="!#">Model X</a>

        <a href="!#">Model Y</a>

        <a href="!#">Cybertruck</a>

        <a href="!#">Powerwall</a>
      </Menu>
      <RightMenu>
        <a href="!#">Cuenta</a>
        <a href="!#" onClick={()=>setSidebarOpen(true)}>Menu</a>
      </RightMenu>
      <SideBar show={sidebarOpen}>
        <CustomClose onClick={()=>setSidebarOpen(false)}/>
        <li>
          <a href="!#">Inventario existente</a>
        </li>
        <li>
          <a href="!#">Inventario usado</a>
        </li>
        <li>
          <a href="!#">Roadster</a>
        </li>
        <li>
          <a href="!#">Energia comercial</a>
        </li>
        <li>
          <a href="!#">Infraestructura</a>
        </li>
        <li>
          <a href="!#">Energia</a>
        </li>
        <li>
          <a href="!#">Prueba de manejo</a>
        </li>
        <li>
          <a href="!#">Carga</a>
        </li>
        <li>
          <a href="!#">Ubiquenos</a>
        </li>
        <li>
          <a href="!#">Soporte</a>
        </li>
      </SideBar>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  display: flex;
  min-height: 60px;
  width: 100%;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
  z-index:1;

`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    padding: 0 10px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  a {
    font-weight: 600;
    padding: 0 10px;
  }
`;
const SideBar = styled.div`
  position:fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width:300px;
  z-index:100;
  list-style:none;
  padding: 20px;
  display: flex;
  flex-direction:column;
  transform: ${props=>props.show?"translateX(0)":"translateX(100%)"};
  transition: transform 0.2s ease-in;
  li{
    padding: 12px 0;
    a{
    font-weight:600;
    }
  }

`;

const CustomClose=styled(CancelIcon)`
align-self: flex-end;
`

export default Header;
