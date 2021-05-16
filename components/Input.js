import React from 'react'
import { Modal, StyleSheet, TextInput, View, Button } from 'react-native'

const Input = ({ text, onChangeHandler, addGoal, visible, hideInput }) => {
    return (
        <Modal visible={visible}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Course Goal"
                    defaultValue={text}
                    onChangeText={onChangeHandler}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Add"
                            onPress={addGoal}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            color='red'
                            title='Cancel'
                            onPress={hideInput}
                        />
                    </View>
                </View>

            </View>
        </Modal>
    )
}

export default Input

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        width: '60%',
        flexDirection: 'row-reverse',
        justifyContent: 'space-around'
    },
    button: {
        width: '40%'
    }
})
