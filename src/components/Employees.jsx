import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';
import EditKegForm from './EditKegForm';
import NewKegForm from './NewKegForm';

function Employees(props){
  let optionalEditKegComponent = null;
  if (props.selectedKeg !=null){
    optionalEditKegComponent = <EditKegForm selectedKeg={props.kegList[props.selectedKeg]}/>;
  }
  return (
    <div>
      <h2>Employee Functions</h2>
      {optionalEditKegComponent}
      <KegList
        kegList={props.kegList}
        currentRouterPath={props.currentRouterPath}
        onKegSelection={props.onKegSelection}/>
      <NewKegForm
        onNewKegCreation={props.onNewKegCreation}/>
    </div>
  );
}
  
Employees.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onKegSelection: PropTypes.func.isRequired,
  onNewKegCreation: PropTypes.func.isRequired,
  selectedKeg: PropTypes.string
};

export default Employees;