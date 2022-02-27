import * as React from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {AvatarWithImage} from "../../../components/avatars/AvatarWithImage";
import {FC} from "react";
import {IconSvgTrash} from "../../../components/icons/IconSvgTrash";
import {useDispatch} from "react-redux";
import {deleteCommentAction} from "../../../store/commentsSlice";

type Props = {
    body: string
    commentId: number
}

export const Comment:FC<Props> = ({body,commentId}) => {

    const dispatch = useDispatch()

    const deleteHandler = () => {
        dispatch(deleteCommentAction(commentId))
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.commentContainer}>
                <AvatarWithImage/>
                <View style={styles.textContainer}>
                    <View style={styles.textTitleContainer}>
                        <Text style={styles.name}>Anna Barber</Text>
                        <Text style={styles.date}>2 days ago</Text>
                    </View>
                    <Text style={styles.text}>{body}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.icon} onPress={deleteHandler}>
                <IconSvgTrash/>
            </TouchableOpacity>
        </View>


    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#E5E5E5',
    },
    commentContainer: {
        flexDirection: 'row',
        paddingVertical: 14,
        paddingHorizontal: 9,
        width: 300,
    },
    textContainer: {
        marginLeft: 9,
    },
    textTitleContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    name: {
        fontSize: 17,
        lineHeight: 20,
        color: '#514D47',
    },
    date: {
        marginLeft: 6,
        fontSize: 13,
        lineHeight: 15,
        color: '#9C9C9C',
    },
    text: {
        marginTop: 2,
        fontSize: 17,
        lineHeight: 20,
        color: '#514D47',
    },
    icon: {
        marginTop: 10,
        marginRight: 10,
    }
});

