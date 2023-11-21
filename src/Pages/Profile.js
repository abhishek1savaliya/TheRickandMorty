import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const [singleData, setSingleData] = useState({});
    console.log(id)

    useEffect(() => {
        if (id) {
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://rickandmortyapi.com/api/character/${id}`,
                headers: {},
            };

            axios
                .request(config)
                .then((response) => {
                    setSingleData(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [id]);

    console.log(singleData)

    if (!singleData.name) {
        // Data is not yet available
        return <div>Loading...</div>;
    }

    return (
        <div className="flex justify-center p-4 bg-gray-700 text-white w-full">

        <div className="max-w-xl p-6 bg-gray-500 rounded-lg shadow-lg">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">{singleData.name}</h1>
          </div>
  
          <div className="mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="mb-4">
                <div className="item-img">
                  <img className="w-full h-auto" src={singleData.image} alt={singleData.name} />
                </div>
              </div>
  
              <div className="flex flex-col justify-between">
                <div className="items-info text-left">
                  <div className="mb-2">
                    <span className="text-white">Species:</span> {singleData.species}
                  </div>
                  <div className="mb-2">
                    <span className="text-white">Gender:</span> {singleData.gender}
                  </div>
                  <div className="mb-2">
                    <span className="text-white">Status:</span> {singleData.status}
                  </div>
                  <div className="mb-2">
                    <span className="text-white">Origin:</span> {singleData.origin.name}
                  </div>
                  <div className="mb-2">
                    <span className="text-white">Location:</span> {singleData.location.name}
                  </div>
                  <div className="mb-2">
                    <span className="text-gray-900">Episodes:</span>
                    <ul>
                      {singleData.episode.map((episode, index) => (
                       
                          <a href={episode} key={index} >Episode {index + 1} ,</a>         
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
      </div>
  
    );
};

export default Profile;
