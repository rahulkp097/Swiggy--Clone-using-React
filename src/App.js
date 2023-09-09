import NavBar from "./Components/NavBar/NavBar"
import "./Components/NavBar/NavBar.css";
import Card from "./Components/Body/card";
import "./Components/Body/card.css"
import "./App.css"
import { burgerKing } from "./constent";
import { useState,useEffect } from "react";
import Shimmer from "./Components/Body/Shimmer";
import Error from "./Components/Error/Erorr";

import Footer from "./Components/Footer/Footer"






function App() {
  const [searchInput,SetSearchInput]=useState("")
  const [burgerKingData,setBurgerKingData]=useState([])
  const [filterData,setFilterData]=useState([])
  
  useEffect(()=>{
    
    apiCall()
  },[])


  async function apiCall(){
    const SwiggyApiData=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8985899&lng=77.6514648&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const swiggyApi= await SwiggyApiData.json()
   const data=swiggyApi?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants

    setBurgerKingData(data)
    setFilterData(data)
 
 
   
  }

  function searchData(searchInput, burgerKingData) {
    console.log("burger",burgerKingData)
    const result = burgerKingData.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
      
    );
    console.log("serachResult",result)
    return result;
  }
  

  if(filterData?.length===0)   <h1>Search Result not find </h1>
  return burgerKingData?.length==0?(<Shimmer/>): (

    <div >
     
        <NavBar/>
        <div className="searchBar">
        <input type="text"
        className='search-Input'
        placeholder='Serach'
        value={searchInput}
        onChange={(e)=>SetSearchInput(e.target.value)}
         />
         <button  className='btn-search' onClick={()=>{  const data=searchData(searchInput,burgerKingData)
         
         setFilterData(data)
        }
         
        }>Search</button>
        </div>
        <div className="cardItems">
       {filterData?.map((eachOne)=>{
   
        return <Card {...eachOne?.info} key={eachOne?.info?.id}/>
       })}
       </div>
       <Footer/>
    </div>

  );
}




export default App;
