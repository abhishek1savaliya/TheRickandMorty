import React from 'react';
import { Link } from 'react-router-dom';

const Character = ({ characters }) => (
  <>
    {Array.isArray(characters) ? (
      characters.map((i) => (
        <Link to={`/profile?id=${i.id}`} className='cursor-pointer' key={i.id}>
         <div className="item w-full sm:w-96 h-auto bg-gray-700 rounded-md m-2 flex flex-col sm:flex-row overflow-hidden">
  <div className="item-img flex-shrink-0 sm:w-48">
    <img src={i.image} className="w-full h-full object-cover" alt={i.name} />
  </div>
  <div className="item-info flex-1 p-2 text-white">
    <div className="items-name mb-3">
      <h1 className="text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
        <span>Name: </span> <a href="#" className="text-white">{i.name}</a>
      </h1>
      <span className="status text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg">
        <span>{i.status}</span>
        <span>-</span>
        <span>{i.species}</span>
      </span>
    </div>
    <div className="items-location mb-3">
      <span>Origin: </span>
      <a href="#" className="text-white">{i.origin.name}</a>
    </div>
    <div className="items-seen mb-3">
      <span>Location: </span>
      <a href="#" className="text-white">{i.location.name}</a>
    </div>
    <div className="items-gender mb-3">
      <span>Gender: </span>
      <span className="text-white">{i.gender}</span>
    </div>
  </div>
</div>

        </Link>
      ))
    ) : (
      <div className='text-white'>No characters to display.</div>
    )}
  </>
);

export default Character;

