import React, { useState } from 'react'
import { Button, StyleSheet, FlatList, TextInput, View, Text, ToastAndroid } from 'react-native'
import GoalContainer from './components/GoalContainer'
import GoalInput from './components/Input'
const App = () => {

  // Text taken from the text input and added to the array
  const [text, setText] = useState('')

  // Array of all existing Goals
  const [courseGoals, setCourseGoals] = useState([])

  // Constant to show/hide the Input
  const [showInput, setShowInput] = useState(false)

  // handling the text by setting the text into the latest input given
  const onChangeHandler = (text) => setText(text)

  // Adding Goal By retrieving text and adding to the array
  const addGoal = () => {
    if (text !== '') {
      setCourseGoals(currentGoals => [...currentGoals, {
        id: Math.random().toString(),
        value: text
      }])
      setTimeout(() => {
        setText('')
        setShowInput(false)
      }, 270);
    } else {
      ToastAndroid.show("Please enter a Course Goal!", ToastAndroid.SHORT)
    }
  }

  // Deleting item by removing it from the array
  const deleteGoal = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId)
    })
  }

  return (
    <View style={styles.screen}>
      <Button title='Add Course Goal' onPress={() => setShowInput(true)} />
      {/* The input page */}
      <GoalInput
        text={text}
        onChangeHandler={onChangeHandler}
        visible={showInput}
        addGoal={addGoal}
        hideInput={() => { setShowInput(false); setText('') }}
      />
      {/* List View */}
      <FlatList
        keyExtractor={item => item.id}
        data={courseGoals}
        renderItem={data => (
          <GoalContainer
            item={data.item}
            deleteGoal={deleteGoal}
            addGoal={addGoal}
          />
        )}

      />

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
})