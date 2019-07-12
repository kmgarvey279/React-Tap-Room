import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';
import EditKegForm from './EditKegForm';
import NewKegForm from './NewKegForm';

function Employees(props){
  let optionalEditKegContent = null;
  if (props.selectedKeg !=null){
    optionalEditKegContent = <EditKegForm onKegEdit={props.onKegEdit} 
                              selectedKegId={props.selectedKegId} 
                              selectedKeg={props.kegList[props.selectedKeg]}/>;
  }
  return (
    <div>
    <style jsx>{`
      div {
        text-align: center;
      }
    `}</style>
      <h2>Employee Functions</h2>
      <NewKegForm
        onNewKegCreation={props.onNewKegCreation}/>
      {optionalEditKegContent}
      <KegList
        kegList={props.kegList}
        currentRouterPath={props.currentRouterPath}
        onSellPintClick={props.onSellPintClick}
        onSellGrowlerClick={props.onSellGrowlerClick}
        onSellLargeGrowlerClick={props.onSellLargeGrowlerClick}
        onKegSelection={props.onKegSelection}
        onReplaceClick={props.onReplaceClick}/>
    </div>
  );
}
  
Employees.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onKegSelection: PropTypes.func.isRequired,
  onNewKegCreation: PropTypes.func.isRequired,
  onKegEdit: PropTypes.func.isRequired,
  onSellPintClick: PropTypes.func.isRequired,
  onSellGrowlerClick: PropTypes.func.isRequired,
  onSellLargeGrowlerClick: PropTypes.func.isRequired,
  onReplaceClick: PropTypes.func.isRequired,
  selectedKeg: PropTypes.string,
  selectedKegId: PropTypes.string
};

export default Employees;