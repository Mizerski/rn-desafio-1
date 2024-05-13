import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 64,
        marginVertical: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: theme.color.gray[400],
        backgroundColor: theme.color.gray[500],

        alignItems: 'center',
        justifyContent: 'center',

    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    checkbox: {
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        marginRight: 8,
    },
    title: {
        fontFamily: 'Inter_400Regular',
        fontSize: 14,
        color: theme.color.gray[100],
        textAlign: 'center'
    },
    delete: {
        padding: 8,
    },
    titleLabel: {
        flex: 1,
    }
})