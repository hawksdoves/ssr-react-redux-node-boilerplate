import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import getPokemonWithAbility from '../actions/getPokemonWithAbility';

import List from '../components/List';

export const mapStateToProps = (state) => {
    return state;
}

export const mapDispatchToProps = (dispatch) => bindActionCreators({ getPokemonWithAbility }, dispatch)

const ListContainer = connect( mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
