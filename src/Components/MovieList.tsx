import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'


function MovieList(genreId:any) {

    const elementRef=useRef(null);
    const [MovieList, setMovieList] = useState<any>([])
    useEffect(()=>{
        getMovieListByGenreId();
    },[])

    const slideRight=(element:any)=>{

        element.scrollLeft+=500;
    }

    const slideLeft=(element:any)=>{

        element.scrollLeft-=500;
    }
    // const slideRight=(element:any)=>{
    //     element.scrollLeft+=500;
    // }
    // const slideLeft=(element:any)=>{
    //     element.scrollLeft-=500;
    // }

    const getMovieListByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId.genreId).then((resp:any)=>{
            setMovieList(resp.data.results);
            console.log(resp.data.results)
        })
    }
  
    return (
    <div className='flex items-center'>
        <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)}  className='text-[40px] text-white bg-black p-2 
        mb-[120px] cursor-pointer z-10 rounded-full'/>
         <div id='slider' className='w-full overflow-scroll scroll-smooth 
         overflow-x-auto whitespace-nowrap scrollbar-hide mb-16  ml-[-20px] mr-[-20px]
         ' ref={elementRef}>
        {MovieList.map((item:any,index:any)=>index<7&&(
       
            <MovieCard movie={item}/>
          ))}
            </div>
            <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)} className='text-[40px] text-white bg-black p-2 
         mb-[120px]  ml-[-40px] cursor-pointer rounded-full'/>

      </div>
  )
}

export default MovieList