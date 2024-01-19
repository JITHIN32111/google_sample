import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useResultContext } from '../context/Resultcontextprovider';
import Loading from './Loading';

function Results() {
  const { results, isLoading, getResults, searchTerm } = useResultContext();
  const location = useLocation();

  useEffect(() => {
    if(searchTerm){
      console.log(":::::::::::::::::::::::::::::::::::");
      console.log(searchTerm);
      getResults(searchTerm);
    }
  }, [searchTerm]);

  if (isLoading) return <Loading />; // Assuming you have a Loading component

  return (
    <div>
      <div className='flex flex-wrap justify-between space-y-6 sm:px-56'>
        {results?.results?.map((result) => (
          <div className='md:w-2/5 w-full' key={result.position}>
            <a href={result.url} target='_blank' rel='noreferrer'>
              <p className='text-sm'>
                {result.url.length > 30 ? result.url.substring(0, 30) : result.url}
              </p>
              <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                {result.title}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results;
