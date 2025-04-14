import React from 'react';
import axios from "axios"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const GeneratePaintings = () => {
  const navigate = useNavigate()
  const handelGenerateImage = async(e)=>{
    e.preventDefault()
    const form = e.target 
    const prompt = form.prompt.value
    const {data}=await axios.post("http://localhost:5000/paintings/generate", {prompt})
    console.log(data)
    if(data?.insertedId){
      toast.success("The painting generate complete")
      navigate(`/paintings/${data?.insertedId}`);
    }

  }
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
          <form onSubmit={handelGenerateImage}>
            <input
              className="w-8/12 lg:w-11/12 px-3 py-3 border-4 border-white bg-white rounded-lg"
              type="text"
              name="prompt"
              id=""
              placeholder="Write a text to generate a painting "
            />

            <input
              className="px-3 py-3 bg-[#3500FC] ml-2 rounded-lg text-white font-bold cursor-pointer "
              type="submit"
              value="Generate"
            />
          </form>
        </div>
      </div>
    );
};

export default GeneratePaintings;