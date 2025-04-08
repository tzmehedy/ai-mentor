import React from 'react';
import Banner from './Banner';
import WhatWeDo from './WhatWeDo';
import HugeCollection from './HugeCollection';
import About from './About';

const Home = () => {
    return (
      <div className="">
        <Banner></Banner>
        <WhatWeDo></WhatWeDo>
        <div className='mt-20'>
          <HugeCollection></HugeCollection>
        </div>
        <div className='mt-20'>
            <About></About>
        </div>
      </div>
    );
};

export default Home;