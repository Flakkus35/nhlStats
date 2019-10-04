import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Period extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scoringPlays: [],
      penaltyPlays: []
    };
  }

  componentDidMount() {
    const { liveData } = this.props;

    const scores = [];
    liveData.plays.scoringPlays.forEach((play) => {
      scores.push(liveData.plays.allPlays[play]);
    });

    const penalties = [];
    liveData.plays.penaltyPlays.forEach((play) => {
      penalties.push(liveData.plays.allPlays[play]);
    });

    this.setState({
      scoringPlays: scores,
      penaltyPlays: penalties
    });
  }

  render() {
    const { scoringPlays, penaltyPlays } = this.state;
    const { liveData } = this.props;

    return (
      <div>
        <div className="list">
          <div className="header-section">
            1st Period
          </div>
          <div className="half-section">
            <div className="first-element border-right">
              {scoringPlays.filter((ele) => ele.about.period === 1).map((play) => (
                <div className="list">
                  <div className="header-section header-section--small">
                    {play.team.name}
                    &nbsp;
                    (
                    {play.about.periodTimeRemaining}
                    )
                    &nbsp;
                    {play.about.goals.home}
                    -
                    {play.about.goals.away}
                  </div>
                  {play.players.filter((data) => data.playerType !== 'Goalie').map((player) => (
                    player.playerType === 'Scorer'
                      ? (
                        <div className="padding-small center--text">
                          (G)&nbsp;
                          {player.player.fullName}
                        </div>
                      )
                      : (
                        <div className="padding-small center--text">
                          (A)&nbsp;
                          {player.player.fullName}
                        </div>
                      )
                  ))}
                </div>
              ))}
            </div>
            <div className="half-section second-element">
              <div className="first-element">
                {penaltyPlays.filter((ele) => ele.about.period === 1).map((play) => (
                  <div className="list">
                    <div className="header-section header-section--small">
                      {play.team.name}
                      &nbsp;
                      (
                      {play.about.periodTimeRemaining}
                      )
                    </div>
                    <div className="padding-small">{play.players[0].player.fullName}</div>
                  </div>
                ))}
              </div>
              <div className="second-element">
                {penaltyPlays.filter((ele) => ele.about.period === 1).map((play) => (
                  <div className="list">
                    <div className="header-section header-section--small hidden">--------</div>
                    <div className="padding-small">{play.result.secondaryType}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="list">
          <div className="header-section">
            2nd Period
          </div>
          <div className="half-section">
            <div className="first-element border-right">
              {scoringPlays.filter((ele) => ele.about.period === 2).map((play) => (
                <div className="list">
                  <div className="header-section header-section--small">
                    {play.team.name}
                    &nbsp;
                    (
                    {play.about.periodTimeRemaining}
                    )
                    &nbsp;
                    {play.about.goals.home}
                    -
                    {play.about.goals.away}
                  </div>
                  {play.players.filter((data) => data.playerType !== 'Goalie').map((player) => (
                    player.playerType === 'Scorer'
                      ? (
                        <div className="padding-small">
                          (G)&nbsp;
                          {player.player.fullName}
                        </div>
                      )
                      : (
                        <div className="padding-small">
                          (A)&nbsp;
                          {player.player.fullName}
                        </div>
                      )
                  ))}
                </div>
              ))}
            </div>
            <div className="half-section">
              <div className="first-element">
                {penaltyPlays.filter((ele) => ele.about.period === 2).map((play) => (
                  <div className="list">
                    <div className="header-section header-section--small">
                      {play.team.name}
                      &nbsp;
                      (
                      {play.about.periodTimeRemaining}
                      )
                    </div>
                    <div className="padding-small">{play.players[0].player.fullName}</div>
                  </div>
                ))}
              </div>
              <div className="second-element">
                {penaltyPlays.filter((ele) => ele.about.period === 2).map((play) => (
                  <div className="list">
                    <div className="header-section header-section--small hidden">--------</div>
                    <div className="padding-small">{play.result.secondaryType}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="list">
          <div className="header-section">
            3rd Period
          </div>
          <div className="half-section">
            <div className="first-element border-right">
              {scoringPlays.filter((ele) => ele.about.period === 3).map((play) => (
                <div className="list">
                  <div className="header-section header-section--small">
                    {play.team.name}
                    &nbsp;
                    (
                    {play.about.periodTimeRemaining}
                    )
                    &nbsp;
                    {play.about.goals.home}
                    -
                    {play.about.goals.away}
                  </div>
                  {play.players.filter((data) => data.playerType !== 'Goalie').map((player) => (
                    player.playerType === 'Scorer'
                      ? (
                        <div className="padding-small">
                          (G)&nbsp;
                          {player.player.fullName}
                        </div>
                      )
                      : (
                        <div className="padding-small">
                          (A)&nbsp;
                          {player.player.fullName}
                        </div>
                      )
                  ))}
                </div>
              ))}
            </div>
            <div className="half-section">
              <div className="first-element">
                {penaltyPlays.filter((ele) => ele.about.period === 3).map((play) => (
                  <div className="list">
                    <div className="header-section header-section--small">
                      {play.team.name}
                      &nbsp;
                      (
                      {play.about.periodTimeRemaining}
                      )
                    </div>
                    <div className="padding-small">{play.players[0].player.fullName}</div>
                  </div>
                ))}
              </div>
              <div className="second-element">
                {penaltyPlays.filter((ele) => ele.about.period === 3).map((play) => (
                  <div className="list">
                    <div className="header-section header-section--small hidden">--------</div>
                    <div className="padding-small">{play.result.secondaryType}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {liveData.linescore.currentPeriod === 4
          ? (
            <div className="list">
              <div className="header-section">
                OT
              </div>
              <div className="half-section">
                <div className="first-element border-right">
                  {scoringPlays.filter((ele) => ele.about.period === 4).map((play) => (
                    <div className="list">
                      <div className="header-section header-section--small">
                        {play.team.name}
                        &nbsp;
                        (
                        {play.about.periodTimeRemaining}
                        )
                        &nbsp;
                        {play.about.goals.home}
                        -
                        {play.about.goals.away}
                      </div>
                      {play.players.filter((data) => data.playerType !== 'Goalie').map((player) => (
                        player.playerType === 'Scorer'
                          ? (
                            <div className="padding-small">
                              (G)&nbsp;
                              {player.player.fullName}
                            </div>
                          )
                          : (
                            <div className="padding-small">
                              (A)&nbsp;
                              {player.player.fullName}
                            </div>
                          )
                      ))}
                    </div>
                  ))}
                </div>
                <div className="half-section">
                  <div className="first-element">
                    {penaltyPlays.filter((ele) => ele.about.period === 4).map((play) => (
                      <div className="list">
                        <div className="header-section header-section--small">
                          {play.team.name}
                          &nbsp;
                          (
                          {play.about.periodTimeRemaining}
                          )
                        </div>
                        <div className="padding-small">{play.players[0].player.fullName}</div>
                      </div>
                    ))}
                  </div>
                  <div className="second-element">
                    {penaltyPlays.filter((ele) => ele.about.period === 4).map((play) => (
                      <div className="list">
                        <div className="header-section header-section--small hidden">--------</div>
                        <div className="padding-small">{play.result.secondaryType}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
          : null}
      </div>
    );
  }
}

Period.propTypes = ({
  liveData: PropTypes.object.isRequired // eslint-disable-line
});

export default withRouter(Period);
