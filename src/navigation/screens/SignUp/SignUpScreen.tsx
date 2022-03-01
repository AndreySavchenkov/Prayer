import * as React from 'react';
import {Text, View, StyleSheet, TextInput, Button, Alert} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Routes} from "../../routes";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {signUpAction} from "../../../store/loginSlice";

export const SignUpScreen = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation<any>();

    const {handleSubmit, control, formState: {errors}} = useForm({
        defaultValues: {
            Email: '',
            Name: '',
            Password: ''
        }
    });

    const onSubmit = data => {
        dispatch(signUpAction(data.Email, data.Name, data.Password))
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.label}>Email</Text>
            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
                name="Email"
                rules={{required: true}}
            />
            <Text style={styles.label}>Name</Text>
            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
                name="Name"
                rules={{required: true}}
            />
            <Text style={styles.label}>Password</Text>
            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
                name="Password"
                rules={{required: true}}
            />

            <View style={styles.button}>
                <Button
                    style={styles.buttonInner}
                    color
                    title="Sign Up"
                    onPress={handleSubmit(onSubmit)}
                />
            </View>
            <View style={styles.button}>
                <Button
                    style={styles.buttonInner}
                    color
                    title="Sign In"
                    onPress={() => navigation.navigate(Routes.SignInScreen)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 25,
    },
    label: {
        color: 'white',
        margin: 20,
        marginLeft: 0,
    },
    button: {
        marginTop: 40,
        color: 'white',
        height: 40,
        backgroundColor: '#AC5253',
        borderRadius: 4,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 40,
        padding: 8,
        backgroundColor: '#72A8BC',
    },
    input: {
        backgroundColor: 'white',
        height: 40,
        padding: 10,
        borderRadius: 4,
    },
});
