import firestore from '@react-native-firebase/firestore'

export default {
	getAll () {
		return firestore().collection('example').get()
	},
	getById (id) {
		return firestore().collection('example').doc(id).get()
	}
}