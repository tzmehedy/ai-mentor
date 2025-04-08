import React from 'react';
import Banner from './Banner';
import WhatWeDo from './WhatWeDo';
import HugeCollection from './HugeCollection';

const Home = () => {
    return (
      <div className="">
        <Banner></Banner>
        <WhatWeDo></WhatWeDo>
        <div className='mt-20'>
          <HugeCollection></HugeCollection>
        </div>
      </div>
    );
};

export default Home;