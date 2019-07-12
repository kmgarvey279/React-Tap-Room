import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
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
      {Object.keys(props.kegList).map(function(kegId) {
        var keg = props.kegList[kegId];
        return <div id="inner"><Keg name={keg.name}
            brand={keg.brand}
            price={keg.price}
            alcoholLvl={keg.alcoholLvl}
            remainingTaps={keg.remainingTaps}
            currentRouterPath={props.currentRouterPath}
            key={kegId}
            kegId={kegId}
            onKegSelection={props.onKegSelection}/>
          </div>;  
      })}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func
};

export default KegList;