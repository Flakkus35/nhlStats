import React, { setGlobal } from 'reactn';
import ReactDOM from 'react-dom';
import teamLogos from "./util/teams.json";
import './index.css';
import App from './App';

setGlobal({
	teamLogos,
	teams: [],
	teamInfo: {},
	roster: [],
	player: {},
	sideBar: -1
})

ReactDOM.render(<App />, document.getElementById('root'));
