import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css';

export const Statistics = props => {
  const liItem = props.stats.map(e => {
    return (
      <li className="stat-list__item" key={e.id}>
        <span className="stat-list__label">{e.label}</span>
        <span className="percentage">{e.percentage} %</span>
      </li>
    );
  });

  return (
    <section className="statistics">
      <h2 className="title">{props.title}</h2>

      <ul className="stat-list">{liItem}</ul>
    </section>
  );
};

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
  title: PropTypes.string,
};
