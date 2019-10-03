import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import allTeams from '../utils/teams.json';
import api from '../utils/api';

class PlayerGameStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      logos: []
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;

    api.loadGameStats(id, '20182019').then((stats) => {
      const statsArray = stats.data.people[0].stats[0].splits.slice(0, 5);
      const logoArray = [];

      statsArray.forEach((team) => {
        if (team.isHome) {
          const home = allTeams.teams.filter((logo) => team.team.id == logo.id); // eslint-disable-line
          const away = allTeams.teams.filter((logo) => team.opponent.id == logo.id); // eslint-disable-line

          logoArray.push({
            home: home[0].url,
            away: away[0].url
          });
        } else {
          const away = allTeams.teams.filter((logo) => team.team.id == logo.id); // eslint-disable-line
          const home = allTeams.teams.filter((logo) => team.opponent.id == logo.id); // eslint-disable-line

          logoArray.push({
            home: home[0].url,
            away: away[0].url
          });
        }
      });

      this.setState({
        games: statsArray,
        logos: logoArray
      });
    });
  }

  render() {
    const { games, logos } = this.state;
    const { isGoalie } = this.props;
    console.log(games);

    if (!games[0]) { return (<div>loading...</div>); }

    return (
      <div>
        <div className="header-section">
          Last Five Games
        </div>
        {games.map((game, index) => (
          <div key={game.date}>
            <div className="quad-section quad-section__side-margin list">
              <div className="second-element">
                <div className="list--title">Home</div>
                <img src={logos[index].home} alt="home" className="logo__xs center" />
              </div>
              <div className="third-element">
                <div className="list--title">Away</div>
                <img src={logos[index].away} alt="away" className="logo__xs fourth-element center" />
              </div>
            </div>
            {isGoalie
              ? (
                <div />
              )
              : (
                <div className="dec-section list">
                  <div className="first-element">
                    <div className="padding-small">Date</div>
                    <div className="padding-small">{moment(game.date, 'YYYY-MM-DD').format('MM-DD-YYYY')}</div>
                  </div>
                  <div className="second-element">
                    <div className="padding-small">Goals</div>
                    <div className="padding-small">{game.stat.goals}</div>
                  </div>
                  <div className="third-element">
                    <div className="padding-small">Assists</div>
                    <div className="padding-small">{game.stat.assists}</div>
                  </div>
                  <div className="fourth-element">
                    <div className="padding-small">Points</div>
                    <div className="padding-small">{game.stat.points}</div>
                  </div>
                  <div className="fifth-element">
                    <div className="padding-small">+/-</div>
                    <div className="padding-small">{game.stat.plusMinus}</div>
                  </div>
                  <div className="sixth-element">
                    <div className="padding-small">Shots</div>
                    <div className="padding-small">{game.stat.shots}</div>
                  </div>
                  <div className="seventh-element">
                    <div className="padding-small">Hits</div>
                    <div className="padding-small">{game.stat.hits}</div>
                  </div>
                  <div className="eigth-element">
                    <div className="padding-small">PiM</div>
                    <div className="padding-small">{game.stat.pim}</div>
                  </div>
                  <div className="nineth-element">
                    <div className="padding-small">Time on Ice</div>
                    <div className="padding-small">{game.stat.timeOnIce}</div>
                  </div>
                  <div className="tenth-element">
                    <div className="padding-small">GameCenter</div>
                    <div className="padding-small" />
                  </div>
                </div>
              )}
          </div>
        ))}
      </div>
    );
  }
}

PlayerGameStats.propTypes = ({
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  isGoalie: PropTypes.bool.isRequired
});

export default withRouter(PlayerGameStats);
