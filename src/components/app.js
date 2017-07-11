import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryAction, { fetchAllCountries } from '../data/country/CountryAction';
import CountrySelectors from '../data/country/CountrySelectors';

class App extends Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  
  onClick(event){
    this.props.fetchAllCountries();
  }
  
  render() {
    const allContriesTemplate = [];
    this.props.contries.map((country, i) => {
      allContriesTemplate.push(<li key={i}>{country.name}</li>);
    });
    return (
      <div className="app">
        <button onClick={this.onClick}>Get All Contries</button>
        <ul>
          {allContriesTemplate}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contries: CountrySelectors.allCountries(state),
});

const mapDispatchToProps = (Dispatch) => ({
  fetchAllCountries: () => Dispatch(CountryAction.fetchAllCountries()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

