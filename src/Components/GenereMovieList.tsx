import React from "react";
import GenereList from "../Constant/GenresList";
import { IoChevronForwardSharp } from 'react-icons/io5'
import MovieList from "./MovieList";


function GenereMovieList() {
  return (
    <div className="mt-24 p-5 px-10 md:px-20 bg-[#1e2126]">
      
        {GenereList.genere.map((item:any,index)=>index<=4&&(
            <div className="">
            <h2 className='text-white text-[20px] font-bold '>{item.name}
            <span className="flex font-normal text-[16px] cursor-pointer text-gray-400 float-right">VIEW ALL<IoChevronForwardSharp className="text-white ml-1"/></span></h2>
            <MovieList genreId={item.id}/>
           </div>
            ))}

    </div>
  )
}

export default GenereMovieList;
