import React from 'react'
import Layout from "../../components/Layout" ;
import Carousal from '../../components/carousal';
import Category from '../../components/category';
import Trending from '../../components/Trending';
import Listing from '../../components/Listing';
import { products } from "../../data_json.js";

const home = () => {
    const FashionProducts = products.filter(
      (product) => product.Type === "Fashion"
    );
    const ElectronicsProducts = products.filter(
      (product) => product.Type === "Electronics"
    );
  return (
    <Layout className='scrollbar-hide'>
    <Carousal />
    <Category />
    <Trending />
    <Listing Productjson={FashionProducts} title="Men's Fashion" />
    <Listing Productjson={ElectronicsProducts} title="Electronics" />
    </Layout>
  )
};

export default home
