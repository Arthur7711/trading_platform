import React, { useState } from "react";
import Watchlistindices from "../watchlistIndices/WatchlistIndices";

const Wlist = () => {
  const [incomingData, setIncomingData] = useState([
    { id: 1, notify: true },
    { id: 2, notify: false },
    { id: 3, notify: true },
    { id: 4, notify: false },
    { id: 5, notify: true },
  ]);

  return (
    <div>
      {incomingData.map((el) => (
        <Watchlistindices key={el.id} data={el} />
      ))}
    </div>
  );
};

export default Wlist;
