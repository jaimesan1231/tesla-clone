import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Container = styled.div`
  height: 100vh;
`;

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Visite una tienda"
        backgroundImg="model-s.jpg"
        leftBtnText="Orden Personalizada"
        rigthBtnText="Inventario de autos nuevos"
      />
      <Section
        title="Model 3"
        description="Visite una tienda"
        backgroundImg="model-3.jpg"
        leftBtnText="Orden Personalizada"
        rigthBtnText="Inventario de autos nuevos"
      />
      <Section
        title="Model X"
        description="Visite una tienda"
        backgroundImg="model-x.jpg"
        leftBtnText="Orden Personalizada"
        rigthBtnText="Inventario de autos nuevos"
      />
      <Section
        title="Model Y"
        description="Visite una tienda"
        backgroundImg="model-y.jpg"
        leftBtnText="Orden Personalizada"
        rigthBtnText="Inventario de autos nuevos"
      />
      <Section
        title="Energia solar y Powerwall"
        description="Totalmente eléctrico"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Más Información"
      />
    </Container>
  );
}

export default Home;
