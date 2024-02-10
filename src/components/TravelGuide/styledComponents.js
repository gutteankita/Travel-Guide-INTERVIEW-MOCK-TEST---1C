import styled from 'styled-components'
// import {MainContainer,Heading,CardsContainer,TravelGuidesection,Li,Img,Para,} from './styledComponents'

export const MainContainer = styled.div`
background-color: #eef4f7;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;

`

export const LoaderSection = styled.div`

min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
export const Heading = styled.h1`
color: #334155;
margin: 30px;
 border-bottom: 3px solid #52bbf0;
 `
export const CardsContainer = styled.div`
width: 70%;
margin-top: 50px;

`
export const TravelGuidesection = styled.ul`


display: flex;
flex-wrap: wrap;
justify-content: center;
list-style-type: none;


`
export const Li = styled.li`

background-color: #ffffff;
width: 500px;
margin: 10px;
border-radius: 10px;
`

export const Img = styled.img`
width: 500px;
`
export const Name = styled.h1`
color: #475569;
font-size: 22px;
font-weight: 500;
margin: 8px;

`
export const Description = styled.p`
color: #64748b;
margin: 8px;
`
