
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useState, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { Tooltip } from "react-tooltip"; 
import "react-tooltip/dist/react-tooltip.css"; 


import Slider from "../components/Slider";
import FeatureGroup from "../components/FeatureGroup";
import WhyChoose from "../components/WhyChoose";
import FAQ from "../components/FAQ";
import CustomerFed from "../components/CustomerFed";




const Home = () => {

   const [loading, setLoading] = useState(true); 

  useEffect(() => {
    // Simulate data fetching or add actual logic here
    const fetchData = async () => {
      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <LoadingSpinner />; 
  }

  return (
    <div>
      
      <Slider />
      {/* Featured Groups */}
     <FeatureGroup></FeatureGroup>

     <WhyChoose></WhyChoose>
     <FAQ></FAQ>
     <CustomerFed></CustomerFed>

     
       {/* Tooltip Component */}
      <Tooltip id="group-tooltip" place="top" className="z-50" />
     
    </div>
  );
};

export default Home;
