import React from 'react'
import styled from 'styled-components'

const Container=styled.div
`
height:60px;
`
const Wrapper=styled.div
`padding:10px 20px;
display:flex;
justify-content:space-between;`
const Left= styled.div
`flex:1;
`
const Centre= styled.div`flex:1;`
const Right= styled.div`flex:1;`


const navbar = () => {
  return (
    <div>
   <Container>
   <Wrapper> <Left>Left</Left>
   <Centre>Centre</Centre>
   <Right>Right</Right></Wrapper>
   
   </Container>
    </div>
  )
}

export default navbar
