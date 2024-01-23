import React from 'react';
import Header from '../Header/Header';
import DisplaySection from '../DisplaySection/DisplaySection';
import FeatureProducts from '../FeatureProducts/FeatureProducts';
import Advertisement from '../Advertisement/Advertisement';
import TopSell from '../TopSell/TopSell';
import Brands from '../Brand/Brand';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Route } from 'react-router-dom';
import Blog from '../Blog/Blog';
const Home =() => {
  return (
    <div >
<Header/>
<Navbar/>
<DisplaySection/>
<FeatureProducts/>
<Advertisement/>
<TopSell/>
<Brands/>
<Blog/>

<Footer/>

  </div>
  );
}

export default Home;
