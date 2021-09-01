import axios from 'axios'
import { showMessage } from 'react-native-flash-message'

import { storage } from '@/utils'
import { MAIN_SOURCE_URL } from '@/config'

export const axiosInit = async () => {
	// add baseURL
	axios.defaults.baseURL = MAIN_SOURCE_URL

	// add token to every request
	/*
	const storedToken = await storage.getItem('token')
	axios.defaults.headers.common['Authorization'] = storedToken ?  'Bearer ' + storedToken.access_token : null
	*/

	// shorten res.data to res
	/*
	axios.interceptors.response.use(
		res => {
			const isRootRes = typeof res === 'object' && 'headers' in res && 'config' in res && 'request' in res
			return isRootRes ? res.data : res
		},
		err => Promise.reject(err)
	)
	*/

	// global error handler
	axios.interceptors.response.use(
		res => res,
		err => {
			const ignoredUrls = [] // response error handled manually

			if (err.response) {
				if (!ignoredUrls.includes(err.response?.config?.url)) {
					console.error('response err', err.response)
					
					showMessage({
						message: err.response.data.error || err.response.data.message || err.response.data,
						type: 'danger',
						icon: 'danger',
						duration: 5000
					})
						
					// handle unauthorized error
					if ([400, 401].includes(err.response.status)) console.error('unauthorized')
				}
			} else {
				console.error(err.request)
				console.error(err)

				showMessage({
					message: err.message,
					type: 'danger',
					icon: 'danger',
					duration: 5000
				})
			}

			throw err
		}
	)
}