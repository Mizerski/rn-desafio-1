import { StyleSheet } from "react-native";

import { theme } from "@/theme";

export const styles = StyleSheet.create({
    blurView: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
    },
    content: {
        padding: 20,
        borderRadius: 10,
        width: "92%",
        height: "80%",
        overflow: "hidden",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    footer: {
        alignItems: "center",
        justifyContent: "flex-end",
    },
    text: {
        fontFamily: 'Inter_400Regular',
        color: theme.color.gray[100],
        fontSize: 16
    },
});
