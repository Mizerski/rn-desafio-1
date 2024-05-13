import { StyleSheet } from "react-native";

import { theme } from "@/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.color.gray[600],
    },

    inputLabel: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
    },
    inputView: {
        flexDirection: 'column',
        marginTop: 5,
        width: '100%'
    },
    inputText: {
        fontFamily: 'Inter_400Regular',
        color: theme.color.gray[100],
        backgroundColor: theme.color.gray[500],
        borderColor: theme.color.gray[700],
        width: '100%',
        marginTop: 8,
        borderWidth: 1,
        height: 54,
        padding: 16,
        borderRadius: 6,
        fontSize: 16,
    },
    inputTextDetails: {
        fontFamily: 'Inter_400Regular',
        color: theme.color.gray[100],
        backgroundColor: theme.color.gray[500],
        borderColor: theme.color.gray[700],
        width: '100%',
        height: 300,
        marginTop: 8,
        borderWidth: 1,
        padding: 16,
        borderRadius: 6,
        fontSize: 16,
    },
    button: {
        width: 54,
        height: 54,
        backgroundColor: theme.color.blue.default,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'Inter_400Regular',
        color: theme.color.gray[100],
        fontSize: 16
    },
    todoCount: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: theme.color.gray[500],
        borderBottomWidth: 1.5,
        paddingBottom: 20,
        marginHorizontal: 24,
        marginTop: 62,
    },
    todoContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    createdText: {
        fontFamily: 'Inter_700Bold',
        color: theme.color.blue.default,
        fontSize: 16,
    },
    completedText: {
        fontFamily: 'Inter_700Bold',
        color: theme.color.purple.default,
        fontSize: 16,
    },
    countText: {
        fontFamily: 'Inter_700Bold',
        color: theme.color.gray[100],
        fontSize: 12,
    },
    createdNumber: {
        backgroundColor: theme.color.gray[400],
        padding: 2,
        width: 25,
        marginLeft: 8,
        borderRadius: 50,
        alignItems: 'center',
    },
    todoList: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 24,
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContent: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    addTaskButton: {
        position: 'absolute',
        bottom: 50,
        right: 20,
        width: 60,
        height: 60,
        backgroundColor: theme.color.blue.default,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addTaskText: {
        color: theme.color.gray[100],
        fontSize: 30,
    },
});
