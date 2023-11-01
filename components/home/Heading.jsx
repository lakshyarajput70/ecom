import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import { COLORS , SIZE } from '../../constants/index' 
import styles from './heading.style'

const Heading = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>New Rivals</Text>
            <TouchableOpacity>
                <Ionicons name='ios-grid' size={24} color={COLORS.primary} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Heading