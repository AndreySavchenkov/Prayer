import * as React from "react";
import {StyleSheet, View, Text, ScrollView, TextInput, TouchableOpacity} from "react-native";
import {Comment} from "./Comment";
import Svg, {Path} from "react-native-svg";
import {Controller, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {FC} from "react";
import {addCommentAction} from "../../../store/commentsSlice";

type Props = {
    prayerId: number
}

export const PrayerComments: FC<Props> = ({prayerId}) => {

    const dispatch = useDispatch();

    const comments = useSelector((state: RootState) => state.comment.comments);
    const commentsInThisPrayer = comments.filter(item => item.prayerId === prayerId)

    const {register, setValue, handleSubmit, control, reset, formState: {errors}} = useForm({
        defaultValues: {
            Text: ''
        }
    });

    const onSubmit = (data) => {
        dispatch(addCommentAction(data.Text, prayerId))
        console.log('text -> ',data.Text)
    }

    return (
        <View  style={styles.container}>
            <View>
                <Text style={styles.commentsTitle}>COMMENTS</Text>
            </View>
            <View>
                {
                    commentsInThisPrayer.map(item => <Comment key={item.id}
                                                              body={item.body}
                                                              commentId={item.id}/>)
                }
            </View>
            <View>
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
                <View style={styles.addCommentIcon}>
                    <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                        <Svg width={20} height={20} fill="none">
                            <Path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 2a1 1 0 0 0-1 1v13.586l2.293-2.293A1 1 0 0 1 5 14h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3ZM.879.879A3 3 0 0 1 3 0h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5.414l-3.707 3.707A1 1 0 0 1 0 19V3A3 3 0 0 1 .879.879Z"
                                fill="#BFB393"
                            />
                        </Svg>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    commentsTitle: {
        marginBottom: 15,
        marginLeft: 15,
        fontSize: 13,
        lineHeight: 15,
        textTransform: 'uppercase',
        color: '#72A8BC',
    },
    input: {

        marginBottom: 20,
        paddingLeft: 50,
        width: '100%',
        height: 50,
        fontSize: 17,
        lineHeight: 20,
        color: '#9C9C9C',
    },
    addCommentIcon: {
        zIndex: 1,
        elevation: 1,
        position: 'absolute',
        top: 16,
        left: 16,
    }
})