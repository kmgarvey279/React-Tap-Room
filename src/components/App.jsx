import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Header from './Header';
import Home from './Home';
import KegList from './KegList';
import Error404 from './Error404';
import AboutUs from './AboutUs';
import Employees from './Employees';
import { v4 } from 'uuid';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: {
        'sampleKeg1' : {
          name: 'Kirkhammer Pale Ale',
          brand: 'Old Hunter Brewery',
          price: 6.00,
          alcoholLvl: 5.9,
          remainingTaps: 124
        },
        'sampleKeg2' : {
          name: 'Bloodletter Red Ale',
          brand: 'Cosmic Kin Brewery',
          price: 5.00,
          alcoholLvl: 4.9,
          remainingTaps: 124
        },
        'sampleKeg3' : {
          name: 'Monkey Booze',
          brand: 'Orangutan Brewery',
          price: 7.00,
          alcoholLvl: 8.2,
          remainingTaps: 124
        },
        'sampleKeg4' : {
          name: 'Siegbrau',
          brand: 'Catarina Brewery',
          price: 7.00,
          alcoholLvl: 8.2,
          remainingTaps: 124
        },
        'sampleKeg5' : {
          name: 'Dragonspring Ale',
          brand: 'Ashina Brewery',
          price: 5.00,
          alcoholLvl: 4.2,
          remainingTaps: 124
        },
        'sampleKeg6' : {
          name: 'Lon Lon Milk Stout',
          brand: 'Termina Brewery',
          price: 6.00,
          alcoholLvl: 3.4,
          remainingTaps: 124
        },
        'sampleKeg7' : {
          name: 'Midgar Mead',
          brand: 'Shinra Brewery',
          price: 7.00,
          alcoholLvl: 7.5,
          remainingTaps: 124
        }
      },
      selectedKeg: null,
      selectedKegId: null
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    this.handleChangingSelectedKeg = this.handleChangingSelectedKeg.bind(this);
    this.handleUpdatingKeg = this.handleUpdatingKeg.bind(this);
    this.handleSellPint = this.handleSellPint(this);
    this.handleSellGrowler = this.handleSellGrowler(this);
    this.handleSellLargeGrowler = this.handleSellLargeGrowler(this);
  }
  
  handleAddingNewKegToList(newKeg){
    var newKegId = v4()
    var newMasterKegList = Object.assign({}, this.state.masterKegList, {
      [newKegId]: newKeg
    });
    this.setState({masterKegList: newMasterKegList});
  }
  
  handleUpdatingKeg(updatedKeg){ 
    var newMasterKegList = Object.assign({}, this.state.masterKegList);
    var updatedKegId = updatedKeg.kegId;
    alert(newMasterKegList[updatedKegId]);
    newMasterKegList[updatedKegId] = updatedKeg;
    this.setState({masterKegList: newMasterKegList});
  }
  
  handleChangingSelectedKeg(kegId){
    this.setState({selectedKeg: kegId, selectedKegId: kegId});
  }
  
  handleSellPint(id) {
    var newMasterKegList = Object.assign({}, this.state.masterKegList);
    newMasterKegList[id].remainingTaps-= 1;
  }
  handleSellGrowler(id) {
    var newMasterKegList = Object.assign({}, this.state.masterKegList);
    newMasterKegList[id].remainingTaps-= 2;
  }
  handleSellLargeGrowler(id) {
    var newMasterKegList = Object.assign({}, this.state.masterKegList);
    newMasterKegList[id].remainingTaps-= 4;
  }

  render() {
    return (
      <div>
        <style jsx>{`
        div {
          background-color: black;
          color: white;
        }
      `}</style>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/keglist' render={()=><KegList kegList={this.state.masterKegList} />} />
          <Route exact path='/employees' render={(props)=><Employees kegList={this.state.masterKegList} 
            currentRouterPath={props.location.pathname}
            onNewKegCreation={this.handleAddingNewKegToList}  
            onKegEdit={this.handleUpdatingKeg}
            onKegSelection={this.handleChangingSelectedKeg} 
            selectedKeg={this.state.selectedKeg}
            selectedKegId={this.state.selectedKegId}
            onSellPintClick={(id) => this.handleSellPint(id)}
            onSellGrowlerClick={(id) => this.handleSellGrowler(id)}
            onSellLargeGrowlerClick={(id) => this.handleSellLargeGrowler(id)}/>} />
          <Route exact path='/aboutus' component={AboutUs} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;