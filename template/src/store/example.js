import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	users: [],
	counter: 0
}

const slice = createSlice({
	name: 'example',
	initialState: { ...initialState },
	reducers: {
		setUsers (state, action) {
			state.users = action.payload
		},
		increment (state) {
			state.counter++
		},
		decrement (state) {
			state.counter--
		},
		resetState () {
			return { ...initialState }
		}
	}
})

export const { setUsers } = slice.actions

export default slice.reducer