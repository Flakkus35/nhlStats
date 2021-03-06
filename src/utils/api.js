import axios from 'axios';

export default {
  loadTeam(id) {
    return axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${id}`);
  },
  loadTeamStats(id) {
    return axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${id}/?expand=team.stats&season=20192020`);
  },
  loadRoster(id) {
    return axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${id}/roster`);
  },
  loadPlayer(id) {
    return axios.get(`https://statsapi.web.nhl.com/api/v1/people/${id}?expand=person.stats&stats=yearByYear`);
  },
  loadPlayerCareer(id) {
    return axios.get(`https://statsapi.web.nhl.com/api/v1/people/${id}?expand=person.stats&stats=careerRegularSeason`);
  },
  loadPlayerPlayoffsSingle(id) {
    return axios.get(`https://statsapi.web.nhl.com/api/v1/people/${id}?expand=person.stats&stats=yearByYearPlayoffs`);
  },
  loadPlayerPlayoffsCareer(id) {
    return axios.get(`https://statsapi.web.nhl.com/api/v1/people/${id}?expand=person.stats&stats=careerPlayoffs`);
  },
  loadPlayerSeasonGames(id, date) {
    return axios.get(`https://statsapi.web.nhl.com/api/v1/people/${id}?expand=person.stats&stats=gameLog&season=${date}`);
  },
  loadGameStats(id, date) {
    return axios.get(`https://statsapi.web.nhl.com/api/v1/people/${id}?expand=person.stats&stats=gameLog&season=${date}`);
  },
  loadGame(id) {
    return axios.get(`https://statsapi.web.nhl.com/api/v1/game/${id}/feed/live`);
  },
  loadGames(id, start, end) {
    return axios.get(`https://statsapi.web.nhl.com/api/v1/schedule?teamId=${id}&startDate=${start}&endDate=${end}`);
  },
  loadSchedule(date) {
    return axios.get(`https://statsapi.web.nhl.com/api/v1/schedule?date=${date}`);
  },
  loadStandings(date, type) {
    return axios.get(`https://statsapi.web.nhl.com/api/v1/standings/${type}?date=${date}`);
  },
  loadStandingsOld(season) {
    return axios.get(`https://statsapi.web.nhl.com/api/v1/standings?season=${season}`);
  },
  loadSeasons() {
    return axios.get('https://statsapi.web.nhl.com/api/v1/seasons');
  },
  loadDraft(year) {
    return axios.get(`https://statsapi.web.nhl.com/api/v1/draft/${year}`);
  },
  loadAllPlayers(id) {
    return axios.get(`https://records.nhl.com/site/api/player/byTeam/${id}`);
  }
};
