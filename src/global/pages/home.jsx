import React from 'react'
import Layout from "../../components/Layout" ;
import Carousal from '../../components/carousal';
import Category from '../../components/category';


const home = () => {
  return (
    <Layout>
    <Carousal />
    <Category />
    </Layout>
  )
};

export default home
