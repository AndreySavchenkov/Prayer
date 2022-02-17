import * as React from 'react';
import {Text, View, StyleSheet, TextInput, Button, Alert} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Routes} from "../../routes";
import {useNavigation} from "@react-navigation/native";
// import Constants from 'expo-constants';


export const SignInScreen = () => {

    const navigation = useNavigation();

    const {register, setValue, handleSubmit, control, reset, formState: {errors}} = useForm({
        defaultValues: {
            Email: '',
            Password: ''
        }
    });
    const onSubmit = data => {
        console.log(data);
    };

    const onChange = arg => {
        return {
            value: arg.nativeEvent.text,
        };
    };

    console.log('errors', errors);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
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
                    title="Sign In"
                    onPress={handleSubmit(onSubmit)}
                />
            </View>
            <View style={styles.button}>
                <Button
                    style={styles.buttonInner}
                    color
                    title="Sign Up"
                    onPress={() => navigation.navigate(Routes.SignUpScreen)}
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
        backgroundColor: '#ec5990',
        borderRadius: 4,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 40,
        padding: 8,
        backgroundColor: '#0e101c',
    },
    input: {
        backgroundColor: 'white',
        height: 40,
        padding: 10,
        borderRadius: 4,
    },
});