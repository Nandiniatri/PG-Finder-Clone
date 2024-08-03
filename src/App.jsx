import './App.css'
// import Area from './Area/area'
import Carousel from './Carousel/carouselFile'
import filter from './Filters/filter'
import FooterFile from './Footer/footer'
import HeaderFile from './Header/headerFile'
import PGData from './PG/pg'
import Brief from './StanzaBrief/brief'
import { useState , useEffect } from 'react';
import pgsData from '../public/Data/allPGData.json';
import Filter from './Filters/filter'


function App() {
  const [pgs , setPgs] = useState([]);
  const [filters , setFilters] = useState({
    location: [],
    budget: [],
    amenities: [],
    gender:[],
    price_range: 2000,
    // move_in_date: ''
});


  useEffect(() => {
    let filteredPgs = pgsData.pgs;
    console.log(filteredPgs);

    if (filters.location.length > 0) {
      filteredPgs = filteredPgs.filter(pg => filters.location.includes(pg.location));
    }

    if (filters.budget.length > 0) {
      filteredPgs = filteredPgs.filter(pg => filters.budget.includes(pg.budget));
    }

    
    if (filters.amenities.length > 0) {
      filteredPgs = filteredPgs.filter(pg =>
        filters.amenities.every(amenity => pg[amenity.replace(/ /g, '_').toLowerCase()])
      );
    }
    
    if(filters.gender.length > 0){
      filteredPgs = filteredPgs.filter(pg => filters.gender.includes(pg.gender))
    }
    
    if (filters.price_range) {
      filteredPgs = filteredPgs.filter(pg => pg.price_per_month <= filters.price_range);
    }
    setPgs(filteredPgs);
  }, [filters])


  const handleFilterChange = (name, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };
  
  return (
    <> 
        <HeaderFile />
        <Carousel />
        {/* <Area /> */}
        <Filter filters={filters} onChange={handleFilterChange} />
        <PGData pgs={pgs} />
        <Brief />
        <FooterFile />
    </>
  )
}

export default App

// filterdata type , value


// async function flatData(){
//   const data = await fetch('public/Data/FlatData.json');
//   console.log(data);
//   const response = await data.json();
//   console.log(response);
//   setPgData(response.flatData);
// }

// async function femalePgData(){
//   const data = await fetch('public/Data/femalePGData.json');
//   console.log(data);
//   const response = await data.json();
//   console.log(response);
//   setPgData(response.femalePgData);
// }

// async function malePgData(){
//   const data = await fetch('public/Data/malePGData.json');
//   console.log(data);
//   const response = await data.json();
//   console.log(response);
//   setPgData(response.malePgData);
// }

// async function unisexPgData(){
//   const data = await fetch('public/Data/unisexPGData.json');
//   console.log(data);
//   const response = await data.json();
//   console.log(response);
//   setPgData(response.unisexPgData);
// }

// async function economicPgData(){
//   const data = await fetch('public/Data/economicData.json');
//   console.log(data);
//   const response = await data.json();
//   console.log(response);
//   setPgData(response.economicPgData);
// }

// async function luxuryPgData(){
//   const data = await fetch('public/Data/luxuryData.json');
//   console.log(data);
//   const response = await data.json();
//   console.log(response);
//   setPgData(response.luxuryPgData);
// }




// async function allPGData(){
//   const data = await fetch('public/Data/allPGData.json');
//   console.log(data);
//   const response = await data.json();
//   console.log(response);
//   setPgData(response.allPgData.pgHostelsData);
// }



// useEffect(() =>{
// allPGData();
// } , [])