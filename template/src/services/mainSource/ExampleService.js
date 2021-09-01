import axios from 'axios'

export default {
	getAll () {
		return axios.get('/example')
	},
	getDetail (id) {
		return axios.get('/example/' + id)
	}
}