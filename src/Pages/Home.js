import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import Character from '../component/Character';
import Filter from '../component/Filter';

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
        <Filter
          setName={setName}
          setType={setType}
          setGender={setGender}
          setStatus={setStatus}
          setSpecies={setSpecies}
        />
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
