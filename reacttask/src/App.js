import React, { useState } from 'react';
import FilterButton from './components/filtersbutton';
import Dropdown from './components/dropdown';

 const App=()=> {
   const [isDropDownOpen, setIsDropDownOpen] = useState(false);
   const handelfilteronClick =()=>{
    setIsDropDownOpen(!isDropDownOpen);
  };
  return (
    <div>
      <FilterButton filter = "Filters" onClick={()=>handelfilteronClick("Filters")}/>
      
      {isDropDownOpen && <Dropdown/>}
    </div>
   
  );
};

export default App;
