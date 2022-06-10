import React from 'react'
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'

import ListFooterStyles from './ListFooterStyles'

function ListFooter() {
  return (
    <View style={[ListFooterStyles.container]}>
        <Text>Footer</Text>
    </View>
  )
}

export default ListFooter;
