import * as React from "react";
import {View, Text, StyleSheet, TextInput, Button} from "react-native";
import {Controller, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addColumnAction} from "../../../store/columnSlice";
import {FC} from "react";

type Props = {
    isShow: boolean,
    setIsShow: (isShow: boolean) => void
}

export const ModalAddColumn:FC<Props> = ({isShow,setIsShow}) => {

    const dispatch = useDispatch();

    const {register, setValue, handleSubmit, control, reset, formState: {errors}} = useForm({
        defaultValues: {
            Text: ''
        }
    });

    const onSubmit = (data) => {
        dispatch(addColumnAction(data.Text))
        setIsShow(!isShow)
    }

    return(
       <View style={styles.container}>
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
               name="Text"
               rules={{required: true}}
           />
           <Button
               style={styles.button}
               title="Create Column"
               onPress={handleSubmit(onSubmit)}
           />
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        zIndex: 20,
        position: 'absolute',
        backgroundColor: '#E5E5E5',
        width: '100%',
        height: 600,
        left: 0,
        top: 65,

    },
    input: {
        backgroundColor: '#fff',
        marginTop: 40,
        marginBottom: 40,
        borderRadius: 10,
    },
    button: {
        backgroundColor: '#AC5253',
        marginLeft: 10,
        marginRight: 10,
    }

})