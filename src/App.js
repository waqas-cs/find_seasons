import React, { useState } from "react";
import UpdatingTime from './UpdatingTime'
const App = () => {
  const [location, setLocation] = useState({});
  window.navigator.geolocation.getCurrentPosition(
    (position) => setLocation(position),
    (err) => console.log(err)
  );
  return (
    <div>
      <div>Hi there!</div>
      <div>Latitude: {location?.coords?.latitude}</div>
      <div>Latitude: {location?.coords?.longitude}</div>
      <div>The time is: <UpdatingTime/></div>
    </div>
  );
};

export default App;
