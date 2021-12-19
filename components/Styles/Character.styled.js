import styled from 'styled-components'

export const CardRow = styled.div`
width: 100%;
justify-content: space-between;
 display: table;   
  

`

 export const CardColumn = styled.div`

float: left;
width: 33.33%;
padding: 10px;
display: flex;
justify-content: space-between;
`

export const CardBody = styled.div`
padding-left:5px;
font-size: 12px;


`
export const SeeEpisode = styled.button`

all: unset;
cursor: pointer;

`
export const LikeDislike = styled.button`

top:0;
all: unset;
margin-top:-120px;
float: right;
cursor: pointer;

`