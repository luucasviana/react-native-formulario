import React, { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import UsersContext from "../context/UsersContext";

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const { dispatch }= useContext(UsersContext)

    return (
        <View style={style.form}>
            <Text style={style.title}>Nome</Text>
            <TextInput 
            style={style.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Informe o Nome"
                value={user.name}
            />
            <Text style={style.title}>Parentesco</Text>
            <TextInput 
            style={style.input}
                onChangeText={parentesco => setUser({...user, parentesco})}
                placeholder="Informe o Parentesco"
                value={user.parentesco}
            />
            <Text style={style.title}>Url do Avatar</Text>
            <TextInput 
            style={style.input}
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                placeholder="Informe a Url Avatar"
                value={user.avatarUrl}
            />
            <Button 
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
                    navigation.goBack()
                }}
            />
        </View>      
    )
}

const style = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '500',
    },
    form: {
        padding: 15,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
    }
})