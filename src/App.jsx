// App.jsx
import React, { useState, useEffect } from 'react';
import HeaderFile from './Header/headerFile';
import Carousel from './Carousel/carouselFile';
import Filter from './Filters/filter';
import FooterFile from './Footer/footer';
import PGData from './PG/pg';
import Brief from './StanzaBrief/brief';
import pgsData from '../public/Data/allPGData.json';
import PGCard from './PG/PGCart';

function App() {
  const [pgs, setPgs] = useState([]);
  const [filters, setFilters] = useState({
    location: [],
    budget: [],
    amenities: [],
    gender: [],
    price_range: 50000,
  });

  useEffect(() => {
    try {
      let filteredPgs = pgsData.pgs;
      console.log('my PG Data', filteredPgs);

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

      if (filters.gender.length > 0) {
        filteredPgs = filteredPgs.filter(pg => filters.gender.includes(pg.gender));
      }

      if (filters.price_range) {
        filteredPgs = filteredPgs.filter(pg => pg.price_per_month <= filters.price_range);
      }
      setPgs(filteredPgs);
    } catch (error) {
      console.log('error hai bro');
    }
  }, [filters]);

  const handleFilterChange = (name, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className='app'>
      <HeaderFile />
      <Carousel />
      <Filter filters={filters} onChange={handleFilterChange} />
      <PGCard pgs={pgs} setPgs={setPgs} />
      <Brief />
      <FooterFile />
    </div>
  );
}

export default App;
