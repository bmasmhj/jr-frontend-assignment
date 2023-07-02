import React from 'react';
import CountryFlag from 'react-country-flag';
import countryList from 'country-list';

type AvailableCountry = string;
interface CountryListProps {
    countryCodes: AvailableCountry[];
    // other props if any
  }

const CountryList: React.FC<CountryListProps> = ({ countryCodes }) => {
  return (
    <div>
      {countryCodes.map((code) => (
        <span className="relative group mx-2" key={code}>
            <CountryFlag countryCode={code} svg/>
            <span className="absolute bottom-0 left-0 w-50 bg-black bg-opacity-100 z-50 text-white py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {countryList.getName(code)}
            </span>
        </span>
    
      ))}
    </div>
  );
}

export default CountryList;
