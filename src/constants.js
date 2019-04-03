export const URL_WEATHER = `http://api.openweathermap.org/data/2.5/weather?zip=`;
export const WEATHER_API_KEY = `68164a451833b86253068b25ae03d285`;
export const URL_PLACES = `https://api.yelp.com/v3/businesses/search?location=NY `;
export const PLACES_API_KEY = `tcUtoLFop1Soic0c7bchNOiQHRBQRGYxl4FZUzxLlWsiv3eVrKdmsVLBYnCDsUocTZQ_w9elFfSvirdt36Rt9BquQF9tU6zlDeHFPcUzyu6d6lf-0BxAW-DRBsqjXHYx`;

export const URL_TRAFFIC = `http://dev.virtualearth.net/REST/v1/Traffic/Incidents/`;
export const TRAFFIC_API_KEY = `Atn_u4NLEb_kYQvm0FSqNOLrqp-AQoEpSsVGtqtUk3AQQjKHfzV5uZhYABzbqRAV`;

export const URL_CRIME = `https://data.cityofnewyork.us/resource/7x9x-zpz6.json?jurisdiction_code=0&law_cat_cd=FELONY&$where=within_box(lat_lon,`;
export const CRIME_API_KEY = `ntKrW4IM7tt2bdmm6uNBShREI`;

export const CATEGORIES_PLACES = [
  { label: "Food", value: `restaurants,coffee,fooddeliveryservices,foodtrucks,grocery,markets` },
  { label: "Health", value: `hospitals,dentists,physicians,medcenters` },
  { label: "Public Services", value: `policedepartments,firedepartments,embassy,landmarks,municipality,postoffices,taxoffice,townhall` },
  { label: "Hotels", value: `hotels,guesthouses,healthretreats` },
  { label: "Education", value: `education` }
];