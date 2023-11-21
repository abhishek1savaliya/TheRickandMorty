import React, { useState, useEffect, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Character from '../component/Character';

const Location = () => {
  const [location, setLocation] = useState('');
  const [characterData, setCharacterData] = useState([]);
  const [id, setId] = useState([1]);
  const [string, setString] = useState()
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/location?name=${location}`);
      const data = await response.json();
      console.log(data);

      const residentIds = data.results
        ? data.results.flatMap((result) => {
          return result.residents.map((residentLink) => {
            const matches = residentLink.match(/\/(\d+)$/);
            return matches ? matches[1] : null;
          });
        })
        : [];

      setId(residentIds);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    setString(id.join(','));
  }, [id]);



  useEffect(() => {
    fetchData();
  }, [location]);

  const fetchUser = async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${string}`);
      const data = await response.json();
      const info = data.info;
      setInfo(info);
  
      console.log(data);
      setCharacterData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchMoreData = async () => {
    
  };
  


  useEffect(() => {
    fetchUser()
  }, [id])

  console.log(characterData)




  const locations = [
    "Earth (C-137)",
    "Abadango",
    "Citadel of Ricks",
    "Worldender's lair",
    "Anatomy Park",
    "Interdimensional Cable",
    "Immortality Field Resort",
    "Post-Apocalyptic Earth",
    "Purge Planet",
    "Venzenulon 7",
    "Bepis 9",
    "Cronenberg Earth",
    "Nuptia 4",
    "Giant's Town",
    "Bird World",
    "St. Gloopy Noops Hospital",
    "Earth (5-126)",
    "Mr. Goldenfold's dream",
    "Gromflom Prime",
    "Earth (Replacement Dimension)",
    "Hamster in Butt World",
    "Earth (Giant Telepathic Spiders Dimension)",
    "Alphabetrium",
    "Jerryboree",
    "Krootabulon",
    "Zigerion's Base",
    "Pluto",
    "Fantasy World",
    "Zeep Xanflorp's Miniverse",
    "Kyle's Teenyverse",
    "Larva Alien's Planet",
    "Earth (K-22)",
    "Mr. Meeseeks Box",
    "Vindicator's Base",
    "Pawn Shop Planet",
    "Mega Gargantuan Kingdom",
    "Gear World",
    "Earth (D-99)",
    "Earth (D716)",
    "Earth (D716-B)",
    "Earth (D716-C)",
    "Earth (J-22)",
    "Froopyland",
    "Detoxifier",
    "Trunk World",
    "Plopstar",
    "Blips and Chitz",
    "Girvonesk",
    "Earth (C-35)",
    "Snuffles' Dream",
    "Earth (Pizza Dimension)",
    "Earth (Phone Dimension)",
    "Greasy Grandma World",
    "Earth (Chair Dimension)",
    "Árboles Mentirosos",
    "Alien Day Spa",
    "Earth (Fascist Dimension)",
    "Snake Planet",
    "Forbodulon Prime",
    "Earth (Fascist Shrimp Dimension)",
    "Earth (Fascist Teddy Bear Dimension)",
    "Earth (Wasp Dimension)",
    "Monogatron Mothership",
    "Gorgon Quadrant",
    "Midland Quasar",
    "Mount Space Everest",
    "Globaflyn",
    "Heist-Con",
    "Heistotron Base",
    "Mount Olympus",
    "Plitzville Montana",
    "Earth (Tusk Dimension)",
    "Gramuflack",
    "Draygon",
    "New Improved Galactic Federation Quarters",
    "Story Train",
    "Non-Diegetic Alternative Reality",
    "Tickets Please Guy Nightmare",
    "Morty’s Story",
    "Ricks’s Story",
    "Glorzo Asteroid",
    "Alien Acid Plant",
    "Merged Universe",
    "Near-Duplicate Reality",
    "NX-5 Planet Remover",
    "Gaia",
    "Defiance's Ship",
    "Defiance's Base",
    "The Ocean",
    "Narnia Dimension",
    "Elemental Rings",
    "Morglutz",
    "Ferkus 9",
    "Morty",
    "Space",
    "Hell",
    "Z. Q. P. D.",
    "Space Tahoe",
    "France",
    "Birdperson's Consciousness",
    "Rick's Consciousness",
    "Avian Planet",
    "Normal Size Bug Dimension",
    "Slartivart",
    "Rick and Two Crows Planet",
    "Rick's Memories"
  ]





  return (
<div>
  <section className="section-padding bg-gray-800 mb-6">
    <div className="flex flex-wrap items-center justify-center">
      <div className="flex items-center">
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg justify-center focus:ring-white focus:border-white block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        >
          <option selected disabled>
            Location
          </option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
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
    </div>
  </section>
</div>

  );
};

export default Location;
