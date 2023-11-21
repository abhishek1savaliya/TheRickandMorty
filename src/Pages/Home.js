import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import Character from '../component/Character';

const Home = () => {
  const [characterData, setCharacterData] = useState([]);

  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [type, setType] = useState('');

  const [info, setInfo] = useState('')
  const [page, setPage] = useState(1);

  useEffect(() => {
    setCharacterData([]);
    setPage(1);
    fetchCharacterData();
  }, [name, status, species, gender, type]);

  const fetchCharacterData = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://rickandmortyapi.com/api/character?type=${type}&species=${species}&status=${status}&gender=${gender}&name=${name}&page=${page}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setInfo(response.data.info)
        setCharacterData((prevData) => [...prevData, ...response.data.results]);
        setPage(page + 1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchMoreData = () => {
    fetchCharacterData();
  };

  return (
    <section className="section-padding bg-gray-800">
      <div className="flex flex-wrap items-center justify-center mb-6">
        <div className="flex items-center">
          <input
            type="text"
            className="bg-gray-200 border-gray-300 focus:outline-none focus:border-indigo-500 rounded-lg py-2 w-0 px-4 sm:w-1/3 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 mr-4"
            placeholder="Search Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <input
            type="text"
            className="bg-gray-200 border-gray-300 focus:outline-none focus:border-indigo-500 rounded-lg py-2 px-4 w-1/2 sm:w-1/3 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 mr-4"
            placeholder="Search Type"
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
          
          <select
            id="countries"
            className="bg-gray-50 mr-5 border border-gray-300 text-gray-900 text-sm rounded-lg justify-center focus:ring-white focus:border-white block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <option selected disabled>
              Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="unknown">Unknown</option>
          </select>

          <select
            id="countries"
            className="bg-gray-50 mr-5 border border-gray-300 text-gray-900 text-sm rounded-lg justify-center focus:ring-white focus:border-white block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white"
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          >
            <option selected disabled>
              Status
            </option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>

          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg justify-center focus:ring-white focus:border-white block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white"
            onChange={(e) => {
              setSpecies(e.target.value);
            }}
          >
            <option selected>Species</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>


      {characterData.length === 0 ? (
        <div className='text-white h-screen'>No More Character</div>
      ) : (
        <InfiniteScroll
          dataLength={characterData.length}
          next={fetchMoreData}
          hasMore={Boolean(info && info.next)}
          loader={<h4 className='text-white'>Loading...</h4>}
        >
          <div className="flex justify-center items-center flex-wrap">
            <Character characters={characterData} />
          </div>
        </InfiniteScroll>
      )}
    </section>
  );
};

export default Home;
