import React from "react";
import Keg from "./Keg";

var masterKegList = [
  {
    name: 'Kirkhammer Pale Ale',
    brand: 'Old Hunter Brewery',
    price: 6.00,
    alcoholLvl: 5.9,
    remainingTaps: 124
  },
  {
    name: 'Bloodletter Red Ale',
    brand: 'Cosmic Kin Brewery',
    price: 5.00,
    alcoholLvl: 4.9,
    remainingTaps: 124
  },
  {
    name: 'Monkey Booze',
    brand: 'Orangutan Brewery',
    price: 7.00,
    alcoholLvl: 8.2,
    remainingTaps: 124
  },
  {
    name: 'Siegbrau',
    brand: 'Catarina Brewery',
    price: 7.00,
    alcoholLvl: 8.2,
    remainingTaps: 124
  },
  {
    name: 'Dragonspring Ale',
    brand: 'Ashina Brewery',
    price: 5.00,
    alcoholLvl: 4.2,
    remainingTaps: 124 
  },
  {
    name: 'Lon Lon Milk Stout',
    brand: 'Termina Brewery',
    price: 6.00,
    alcoholLvl: 3.4,
    remainingTaps: 124
  },
  {
    name: 'Midgar Mead',
    brand: 'Shinra Brewery',
    price: 7.00,
    alcoholLvl: 7.5,
    remainingTaps: 124
  }  
];

function KegList() {
  return (
    <div id="outer">
      <style jsx>{`
        div#outer {
          columns: 3 auto;
          min-width 200px;
          column-gap: 10px;
          margin-top: 10px;
          margin-left: 5px;
          margin-right: 5px;
        }
        
        div#inner {
          break-inside: avoid-column;
          min-height: 300px;
          border: solid darkred 3px;
          margin-bottom: 10px;
          text-align: center;
        }
        
        #bubbles {
          object-fit: cover;
          z-index: 0;
          position: absolute;
        }
    `}</style>
      {masterKegList.map((keg, index) =>
        <div id="inner">
            
          <Keg name={keg.name}
            brand={keg.brand}
            price={keg.price}
            alcoholLvl={keg.alcoholLvl}
            remainingTaps={keg.remainingTaps}
            key={index}/>
        </div>    
      )}
    </div>
  );
}

export default KegList;