import React from 'react';
import YesterdaysGames from '../components/YesterdaysGames';
import UpcomingGames from '../components/UpcomingGames';

function News() {
  return (
    <div className="box-container">
      <UpcomingGames />
      <YesterdaysGames />
    </div>
  );
}

export default News;
