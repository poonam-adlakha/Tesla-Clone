import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
        title="Model 3"
        description="Leasing starting at $349/mo"
        backgroundImg="model-3.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Demo Drive" />
        <Section 
        title="Model Y"
        description=" "
        backgroundImg="model-y.jpg"
        leftButtonText="Custom Order"
        rightButtonText="Demo Drive" />
        <Section 
        title="Model S"
        description="Schedule a Demo Drive"
        backgroundImg="model-s.jpg"
        leftButtonText="Custom Order"
        rightButtonText="View Inventory" />
        <Section 
        title="Model X"
        description="Schedule a Demo Drive"
        backgroundImg="model-x.jpg"
        leftButtonText="Custom Order"
        rightButtonText="View Inventory" />
        <Section 
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImg="solar-panel.jpg"
        leftButtonText="Order Now"
        rightButtonText="Learn More" />
        <Section 
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpg"
        leftButtonText="Order Now"
        rightButtonText="Learn More" />
        <Section 
        title="Accessories"
        description=" "
        backgroundImg="accessories.jpg"
        leftButtonText="Shop Now" />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
` 