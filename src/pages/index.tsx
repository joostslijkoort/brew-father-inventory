import * as React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'

const StyledMain = styled.main`
  padding: 4rem;
  font-family: Helvetica, sans-serif;
`

const Heading = styled.h1`
  color: #663399;
  border-bottom: 1px solid #663399;
  padding-bottom: 6px;
`

const ListItem = styled.div`
  color: #171717;
  margin-bottom: 1rem;
`

const Bold = styled.div`
  font-weight: bold;
`

const SubName = styled.span`
  font-weight: 300;
  opacity: .6;
  padding-left: .25rem;
`

const Content = styled.div`
  font-weight: 300;
  opacity: .6;
`

const IndexPage = ({ data }) => {

  const Hops = data.allHops.nodes.map(item => (
  <ListItem key={item.id}>
    <Bold>{item.name} <SubName>{item.inventory}{item.unit}g</SubName></Bold>
    <Content>{item.alpha} alpha</Content>
    <Content>{item.type}</Content>
  </ListItem>
  ))

  const Fermentables = data.allFermentables.nodes.map(item => (
    <ListItem key={item.id}>
      <Bold>{item.name} <SubName>{item.inventory}kg</SubName></Bold>
      <Content>{item.supplier}</Content>
      <Content>{item.type}</Content>
    </ListItem>
    ))

  const Yeasts = data.allYeasts.nodes.map(item => (
    <ListItem key={item.id}>
      <Bold>{item.name} <SubName>{item.inventory}{item.unit}</SubName></Bold>
      <Content>{item.type}</Content>
    </ListItem>
    ))

  const Miscs = data.allMiscs.nodes.map(item => (
    <ListItem key={item.id}>
      <Bold>{item.name} <SubName>{item.inventory}{item.unit}</SubName></Bold>
      <Content>{item.type}</Content>
    </ListItem>
    ))

  return (
    <StyledMain>
      <title>BrewFather Inventory</title>
      <Heading>Hops</Heading>
      {Hops}
      <Heading>Fermentables</Heading>
      {Fermentables}
      <Heading>Yeasts</Heading>
      {Yeasts}
      <Heading>Miscs</Heading>
      {Miscs}
    </StyledMain>
  )
}

export default IndexPage

export const query = graphql`
  query DataQuery {
    allFermentables {
      nodes {
        name
        inventory
        supplier
        type
        id
      }
    }
    allHops {
      nodes {
        name
        type
        use
        alpha
        id
        inventory
      }
    }
    allMiscs {
      nodes {
        inventory
        name
        type
        use
        id
        unit
      }
    }
    allYeasts {
      nodes {
        attenuation
        id
        inventory
        name
        type
        unit
      }
    }
  }
`