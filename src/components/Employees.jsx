import React from 'react';
import PropTypes from 'prop-types';
import KegList from './KegList';
import EditKegForm from './EditKegForm';
import NewKegForm from './NewKegForm';

function Employees(props){
  let optionalEditKegContent = null;
  if (props.selectedKeg !=null){
    optionalEditKegContent = <EditKegForm onKegEdit={props.onKegEdit} selectedKeg={props.kegList[props.selectedKeg]}/>;
  }
  return (
    <div>
      <h2>Employee Functions</h2>
      {optionalEditKegContent}
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
  onKegEdit: PropTypes.func.isRequired,
  selectedKeg: PropTypes.string
};

export default Employees;