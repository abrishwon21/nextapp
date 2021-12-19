import React from 'react'

import Styled from 'styled-components'
import {useState} from 'react'
import {ApolloClient, InMemoryCache, gql } from '@apollo/client'

import Character from '../components/characters'

import {
Container,
InputArea,
HeaderContainer,
Logo,
SearchArea,
ThemeColor

} from '../components/Styles/Container.styled'

const ThemeContext = React.createContext()


function index(results) {
  const initialState = results;
  const [characters,setCharacters] = useState(initialState.characters)
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState(false)


  const searchByName = async (event) => {
    event.preventDefault();
    const results = await fetch("/api/SearchCharacter", {
      method: "post",
      body: search,
    });
    const { characters, error } = await results.json();
    if (error) {
      alert('Something wrong happen!')
    } else {
      setCharacters(characters);
    }
  }


  return (
    <Container style={{backgroundColor: theme?"darkgray":"white"}}>
 
<HeaderContainer>
   <Logo src = {'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/320px-Rick_and_Morty.svg.png'}/>
   <SearchArea>
   <form onSubmit={searchByName}>
          <div >
            <InputArea
              placeholder="Search"
              value={search}
              border="none"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
           
              type="submit"
            >Search  </button>
        
          </div>
        </form>
   </SearchArea>
   <ThemeColor onClick={() => setTheme(!theme)} type="submit">
        Dark
   </ThemeColor>
</HeaderContainer>



    <Character characters={characters}/>
     
    </Container>
  )
}

export default index

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),

  })
  const {data} = await client.query({
    query: gql`
    
    query{
      characters(page:1){
        info{
          count,
          pages
        }
        results{
          id,
          name,
          location{
            id 
            name
          },
          origin{
            id
            name
          }
          episode{
            id
            name
            episode
          }
          image
    
        }
      }
    }

    `
  })
  return{ 
    props: {
      characters: data.characters.results,
    }
  }
}

