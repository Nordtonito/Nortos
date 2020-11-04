import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { reserveAction, cancelAction } from '../actions';

class Main extends React.Component {
  state = {
    time: '',
  };

  showTables = (tables) => {
    return tables.map((table) => (
      <li key={table.id} id={table.id} className="table">
        <p>Table: {table.id}</p>
        <button className="button reserve" onClick={this.onReserve}>
          RESERVE
        </button>
        <button className="button cancel" onClick={this.onCancel}>
          CANCEL
        </button>
        <p>Time:</p>
        <form id="timeline" method="post">
          <select id="time" form="timeline" onChange={this.onChange}>
            <option value="default">Select a time</option>
            <option value="12">12:00</option>
            <option value="13">13:00</option>
            <option value="14">14:00</option>
            <option value="15">15:00</option>
            <option value="16">16:00</option>
            <option value="17">17:00</option>
            <option value="18">18:00</option>
            <option value="19">19:00</option>
            <option value="20">20:00</option>
            <option value="21">21:00</option>
            <option value="22">22:00</option>
            <option value="23">23:00</option>
          </select>
        </form>
      </li>
    ));
  };

  onReserve = (event) => {
    const target = event.target.closest('li');
    event.preventDefault();

    const { reserve } = this.props;

    reserve(+target.id);
  };

  onCancel = (event) => {
    const target = event.target.closest('li');
    event.preventDefault();
    this.props.cancel(+target.id);
  };

  onChange = (event) => {
    const time = event.target.value;

    this.setState({
      time,
    });
  };

  render() {
    const { tables } = this.props;

    return (
      <div className="container">
        <h1 className="main-header">Welcome to Nortos</h1>
        <div>
          <ul className="tables-cluster">{this.showTables(tables)}</ul>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  reserve: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  tables: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    tables: state.tables,
  };
};

const mapDispatchToProps = (dispatch) => ({
  reserve: (table) => dispatch(reserveAction(table)),
  cancel: (table) => dispatch(cancelAction(table)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
