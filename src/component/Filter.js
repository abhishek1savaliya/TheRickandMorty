import React from 'react';

const Filter = ({
  setName,
  setType,
  setGender,
  setStatus,
  setSpecies
}) => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center">
        <input
          type="text"
          className="bg-gray-200 border-gray-300 focus:outline-none focus:border-indigo-500 rounded-lg py-2 px-4 w-1/2 sm:w-1/3 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 mr-4  mt-5"
          placeholder="Search Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <input
          type="text"
          className="bg-gray-200 border-gray-300 focus:outline-none focus:border-indigo-500 rounded-lg py-2 px-4 w-1/2 sm:w-1/3 leading-5 transition duration-150 ease-in-out sm:text-sm sm:leading-5 mr-4 mt-5"
          placeholder="Search Type"
          onChange={(e) => {
            setType(e.target.value);
          }}
        />

        <select
          id="countries"
          className="bg-gray-50 mr-5 border border-gray-300 text-gray-900 text-sm rounded-lg justify-center focus:ring-white focus:border-white block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white mt-5"
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
          className="bg-gray-50 mr-5 border border-gray-300 text-gray-900 text-sm rounded-lg justify-center focus:ring-white focus:border-white block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white mt-5"
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
          className="bg-gray-50 mr-5 border border-gray-300 text-gray-900 text-sm rounded-lg justify-center focus:ring-white focus:border-white block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-white dark:focus:border-white mt-5"
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
  );
};

export default Filter;
