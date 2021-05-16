import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const GoalContainer = ({ item, deleteGoal }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={deleteGoal.bind(this, item.id)}
        >
            <View style={styles.listContainer}>
                <Text>{item.value}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default GoalContainer

const styles = StyleSheet.create({
    listContainer: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#ccc',
        padding: 10,
        marginVertical: 10
    }
})