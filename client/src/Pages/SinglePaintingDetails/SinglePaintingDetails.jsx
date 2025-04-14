import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SinglePaintingDetails = () => {
    const data = useLoaderData()
    console.log(data)
    return (
      <div className="container mx-auto pt-32 flex flex-col md:flex-row space-x-10">
        <div className='md:w-1/2'>
          <img src={data?.image_url} alt="" />
        </div>
        <div className='text-white flex flex-col justify-center md:w-1/2 space-y-10'>
            <h1 className='text-2xl uppercase'>{data?.title}</h1>
            <p className='text-justify opacity-70'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur amet aut, doloremque, obcaecati blanditiis corrupti inventore saepe ea illo velit repellendus quidem nihil laborum placeat. Doloremque saepe architecto atque tenetur? Totam, nemo atque temporibus cum cumque neque velit eveniet rerum provident optio, esse consequatur, veniam sapiente eius accusamus quisquam id tenetur ipsam voluptates corporis? Sit repellendus vitae veritatis deleniti in, reiciendis voluptatem inventore blanditiis sapiente. Nemo pariatur eaque quia reprehenderit distinctio alias voluptatem quidem harum est illo, totam, aut commodi, quasi nulla nihil possimus voluptatibus eius porro dolor! Maxime obcaecati numquam dolorem architecto dolore iure, quibusdam corporis a fugit! Quis?</p>

        </div>
      </div>
    );
};

export default SinglePaintingDetails;