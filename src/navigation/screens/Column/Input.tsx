import * as React from "react";
import {TextInput, StyleSheet, View, TouchableOpacity} from "react-native";
import Svg, {G, Mask, Path} from "react-native-svg";
import {Controller, useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addPrayerAction} from "../../../store/prayersSlice";
import {FC, memo} from "react";

type Props = {
    columnId: number,
}

export const Input:FC<Props> = memo(({columnId}) => {

    const dispatch = useDispatch();

    const {register, setValue, handleSubmit, control, reset, formState: {errors}} = useForm({
        defaultValues: {
            Text: ''
        }
    });

    const onSubmit = (data) => {
            dispatch(addPrayerAction(columnId, data.Text))
    }

    return (
        <View style={styles.inputContainer}>

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
            <View style={styles.iconAdd}>
                <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                    <Svg width={22} height={22} fill="none">
                        <Mask
                            id="a"
                            x={0}
                            y={0}
                            width={22}
                            height={22}
                        >
                            <Path
                                d="M10 21a1 1 0 1 0 2 0v-9h9a1 1 0 1 0 0-2h-9V1a1 1 0 1 0-2 0v9H1a1 1 0 1 0 0 2h9v9Z"
                                fill="#A369EC"
                            />
                        </Mask>
                        <G mask="url(#a)">
                            <Path fill="#72A8BC" d="M-1-1h24v24H-1z"/>
                        </G>
                    </Svg>
                </TouchableOpacity>
            </View>

        </View>

    )
})

const styles = StyleSheet.create({
    inputContainer: {
        margin: 15,
    },
    input: {
        paddingLeft: 50,
        width: 345,
        height: 50,
        borderRadius: 10,
        fontSize: 17,
        lineHeight: 20,
        color: '#A499B1',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E5E5E5',

    },
    iconAdd: {
        elevation: 12,
        zIndex: 2,
        position: 'absolute',
        top: 14,
        left: 13,
    },
});

