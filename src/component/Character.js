import React from 'react';
import { Link } from 'react-router-dom';

const Character = ({ characters }) => (
  <>
    {Array.isArray(characters) ? (
      characters.map((i) => (
        <Link to={`/profile?id=${i.id}`} className='cursor-pointer' key={i.id}>
          <div className="item w-96 h-48 bg-gray-700 rounded-md m-2 flex overflow-hidden">
            <div className="item-img flex-shrink-0">
              <img src={i.image} className="w-full h-full" alt={i.name} />
            </div>
            <div className="item-info flex-1 p-2 text-white">
              <div className="items-name mb-3">
                <h1>
                  <span>Name: </span> <a href="#" className="text-white">{i.name}</a>
                </h1>
                <span className="status">
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

