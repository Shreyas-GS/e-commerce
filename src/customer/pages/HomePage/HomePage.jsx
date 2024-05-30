import React from 'react'
import MainCarousel from '../../components/homecarousel/mainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import {mens_kurta} from '../../../Data/MensKurta.js'
import { mens_shirt } from '../../../Data/MensShirt.js'
import { mens_shoes } from '../../../Data/MensShoes.js'
import { womens_dress } from "../../../Data/WomensDress.js";
import { saree } from '../../../Data/WomensSaree.js'
const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px">
        <HomeSectionCarousel data={mens_kurta} sectionName="Men's kurta" />
        <HomeSectionCarousel data={mens_shoes} sectionName="Men's shoes" />
        <HomeSectionCarousel data={mens_shirt} sectionName="Men's shirts" />
        <HomeSectionCarousel data={saree} sectionName="Women's saree" />
        <HomeSectionCarousel data={womens_dress} sectionName="Women's dress" />
      </div>
    </div>
  );
}

export default HomePage