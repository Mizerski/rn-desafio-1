import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 50,
        backgroundColor: theme.color.blue.default,
    },
    submitButton: {
        shadowColor: "rgba(0,0,0,0.5)",
        shadowRadius: 35,
        elevation: 5,
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
    },
});