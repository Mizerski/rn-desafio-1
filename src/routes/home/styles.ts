import { StyleSheet } from "react-native";

import { theme } from "@/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.color.gray[600],
    },
    header: {
        backgroundColor: theme.color.gray[700],
        height: 173,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 110,
        height: 32,
        resizeMode: 'contain',
        marginTop: 24,
    },
    inputLabel: {
        top: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 24,
    },
    inputText: {
        fontFamily: 'Inter_400Regular',
        color: theme.color.gray[100],
        backgroundColor: theme.color.gray[500],
        borderColor: theme.color.gray[700],
        borderWidth: 1,
        flex: 1,
        height: 54,
        padding: 16,
        borderRadius: 6,
        fontSize: 16,
        marginRight: 6,
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
    }
});
