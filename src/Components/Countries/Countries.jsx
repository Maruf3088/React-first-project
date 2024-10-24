import { useState, useEffect } from "react";
import Country from "../Country/Country"; // Make sure this component is imported

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [likedCountries, setLikedCountries] = useState([]);

  // Handle adding a liked country
  const handleLike = (name, flag) => {
    const isAlreadyLiked = likedCountries.some(
      (country) => country.name === name
    );
    if (!isAlreadyLiked) {
      const newLikedCountry = [...likedCountries, { name, flag }];
      setLikedCountries(newLikedCountry);
      console.log(newLikedCountry);
    } else {
      console.log(`${name} is already liked.`);
    }
  };

  // Fetch countries on component mount
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="container mx-auto py-5">
      <h1 className="text-3xl font-bold text-red-500 mb-5">
        Country List: {countries.length}
      </h1>

      <p className="text-2xl font-bold mb-5 text-emerald-500">Liked Country List: {likedCountries.length}</p>
      <ul className="grid grid-cols-6 gap-5 mb-5">
        {likedCountries.map((country, index) => (
          <li key={index}>
            <h1 className="font-bold ">{country.name}</h1>
            <img className="h-[100px] w-[150px]" src={country.flag} alt={country.name} />
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {countries.map((country) => (
          <Country
            key={country.cca3} // Ensure unique key for each country
            handleLike={handleLike}
            country={country}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
