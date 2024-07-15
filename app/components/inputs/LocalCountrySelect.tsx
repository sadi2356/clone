 // change with kenyan counties
import { KenyanCities } from "@/app/KenyanCountries";
  
  const formattedCounties = KenyanCities.map((county) => ({
    value: county.iso2,
    label: county.city,
    flag: county.admin_name,
    latlng: county.lat ? { lat: parseFloat(county.lat), lng: parseFloat(county.lng) } : null,
    region: county.iso2,
  }));
  
 
 const useCountries = () => {
   const getAll = () => formattedCounties;
 
   const getByValue = (label: string) => {
     return formattedCounties.find((item) => item.value === label);
   }
 
   return {
     getAll,
     getByValue
   }
 };
 
 
 
 
 export default useCountries;
 