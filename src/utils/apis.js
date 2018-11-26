import axios from "axios";

export default {
	getTeams: function() {
		return axios.get("https://statsapi.web.nhl.com/api/v1/teams")
	},
	getTeam: function(id) {
		return axios.get("https://statsapi.web.nhl.com/api/v1/teams/" + id)
	},
	getRoster: function(id) {
		return axios.get("https://statsapi.web.nhl.com/api/v1/teams/" + id + "/roster")
	},
	getPlayer: function(id) {
		return axios.get("https://statsapi.web.nhl.com/api/v1/people/" + id + "?expand=person.stats&stats=yearByYear")
	}
}