import React from 'react'
import Layout from "../../components/Layout" ;
import Carousal from '../../components/carousal';
import Category from '../../components/category';
import Trending from '../../components/Trending';


const home = () => {
  return (
    <Layout className='scrollbar-hide'>
    <Carousal />
    <Category />
    <Trending />
    </Layout>
  )
};

export default home
