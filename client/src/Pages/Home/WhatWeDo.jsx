import React from 'react';
import WhatToDoSlider from '../../Components/WhatToDoSlider';

const WhatWeDo = () => {
    return (
      <div>
        <div className="text-center text-white">
          <h1 className="text-[#00FCDB] text-lg uppercase">What We Do</h1>
          <p className='text-4xl mt-8'>
            Unleash the Potential of Al Development Tools Crafted with
            Brilliance, <br /> Style, Quality, and Creativity
          </p>
        </div>
        <div className='container mx-auto mt-10'>
          <WhatToDoSlider></WhatToDoSlider>
        </div>
      </div>
    );
};

export default WhatWeDo;