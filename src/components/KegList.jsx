import React from "react";
import Keg from "./Keg";

var masterKegList = [
  {
    name: 'Kirkhammer',
    brand: 'Old Hunter Brewery',
    price: 6.00,
    alcoholLvl: 5.9,
    remainingTaps: 124
  },
  {
    name: 'Bloodletter',
    brand: 'Cosmic Kin Brewery',
    price: 5.00,
    alcoholLvl: 4.9,
    remainingTaps: 124
  },
  {
    name: 'Monkey Booze',
    brand: 'Orangutan Brewing',
    price: 7.00,
    alcoholLvl: 8.2,
    remainingTaps: 124
  }
];

function KegList() {
  return (
    <div id="outer">
      <style jsx>{`
    `}</style>
      {masterKegList.map((keg, index) =>
        <Keg name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcoholLvl={keg.alcoholLvl}
          remainingTaps={keg.remainingTaps}
          key={index}/>
      )}
    </div>
  );
}