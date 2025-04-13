import React from 'react';

const GeneratePaintings = () => {
    return (
      <div className="min-h-screen pt-32 container mx-auto">
        <div className="text-center text-[#00FCDB]">
          <h1 className="text-5xl font-bold underline">
            Let&apos;s Generate a painting
          </h1>

          <div className="mt-10">
            <hr />
            <br />
            <hr />
          </div>
        </div>

        <div className="mt-10">
          <form>
            <input
              className="w-8/12 lg:w-11/12 px-3 py-3 border-4 border-white bg-white rounded-lg"
              type="text"
              name=""
              id=""
              placeholder="Write a text to generate a painting "
            />

            <input
              className="px-3 py-3 bg-[#3500FC] ml-2 rounded-lg text-white font-bold "
              type="submit"
              value="Generate"
            />
          </form>
        </div>
      </div>
    );
};

export default GeneratePaintings;