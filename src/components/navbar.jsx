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
const language = styled.span `
font-size:14px;
cursor:pointer;
`
const Centre= styled.div`flex:1;`
const Right= styled.div`flex:1;`


const navbar = () => {
  return (
    <div>
   <Container>
   <Wrapper> <Left>
   <language>En</language>
   <SerachContainer>
   input
   icon
   </SerachContainer>
   </Left>
   <Centre>Centre</Centre>
   <Right>Right</Right></Wrapper>
   
   </Container>
    </div>
  )
}

export default navbar
