import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import { colors, sizes } from '@/constants'
import { DEFAULT_ICON_SIZE, DEFAULT_ICON_COLOR } from '@/config'

const VectorIcon = ({ name, color, size, style }) => {
	color = color ? colors[color] : colors[DEFAULT_ICON_COLOR]
	size = size ? (Number(size) || sizes[size]) : sizes[DEFAULT_ICON_SIZE]

	return <Icon name={name} color={color} size={size} style={style} />
}

export default VectorIcon