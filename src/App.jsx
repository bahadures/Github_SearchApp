import { useEffect, useState } from 'react'
import './App.css';
import Search_box from './components/Search_box';
import ContactCard from './components/ContactCard';

function App() {
  const [IsSearched, setIsSearched] = useState(false);
  const [card, setCard] = useState()

  const handleSearchClick = async (value) => {
    console.log("value", value);
    let username = value;
    if (username === null || username === "") {
      console.log("username", username);
      setCard([])
      setIsSearched(false)
    }
    else {
      const result = await fetch("https://api.github.com/users/" + username + "/repos");
      const data = await result.json();
      let realData = []
      console.log(data)
      data && data.length > 0 && data.map((val) => {
        realData.push({
          "avtar": val.owner && val.owner.avatar_url ? val.owner.avatar_url : "",
          "name": val.full_name,
          "stars": String(val.stargazers_count),
          "description": val.description ? val.description : "",
          "language": val.language
        })
      })
      setCard(realData)
      setIsSearched(true)
    }
  }

  // const showCard = ()=>{
  //   setIsSearched(true)
  // }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyItems: "center", gap: "23px" }}>
      <Search_box handleSearchClick={handleSearchClick} />
      {
        IsSearched && <ContactCard IsSearched={IsSearched} card={card} setCard={setCard} />
      }


    </div>
  )
}

export default App
