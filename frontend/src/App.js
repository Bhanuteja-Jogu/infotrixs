import './App.css';
import React from "react";
import Api from "./api-requests.js"
function App() {
  const [quote,setQuote]= React.useState(null)
  const [searchName, setName] = React.useState("")

  function setSearchName(val){
    setName(val.target.value)
  }
  function search(){
    Api.search(searchName)
    .then((props)=>{
      setQuote(props.data)
      console.log(props.data)
    })
    .catch((e=> console.log(e)))
  }

  React.useEffect(()=>{
    search()
  },[])
  
  return (
    <div className="App">
      {quote===null?"Loading...":
      <div className="top-container">
        <div id="heading">Quote Website</div>
        <div className="searchbar">
                <input className="search-input" placeholder="Search" value={searchName} onChange={setSearchName}></input>
                <button className="search-button" onClick={search}>
                    <img className="search-image" src="../../search-icon.png" alt="search"></img>
                </button>
        </div>
        <div id="vertical-flex">
          {quote.map(props=>{
            return(
            <div className="quote-container">
              <div className="quote-text">{props.data}</div>
              <div className="quote-author">~ {props.author}</div>
          </div>)
          })}
        </div>
      </div>
      }
    </div>
  );
}

export default App;
