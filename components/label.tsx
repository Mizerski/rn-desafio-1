import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Checkbox } from "expo-checkbox";
import React, { useState } from "react";
import Icon from '@expo/vector-icons/Ionicons';

import { theme } from "../theme";

interface LabelProps {
    isChecked?: boolean;
    setChecked?: (value: boolean) => void;
    title?: string;
}

export function Label({ title }: LabelProps) {
    const [isChecked, setChecked] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Checkbox
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? theme.color.purple.dark : theme.color.blue.default}
                    style={styles.checkbox}

                />


                <View style={styles.titleLabel}>
                    <Text style={[styles.title,
                    {
                        textDecorationLine: isChecked ? "line-through" : "none",
                        color: isChecked ? theme.color.gray[300] : theme.color.gray[100]
                    }]}>{title}</Text>
                </View>

                <TouchableOpacity>
                    <Icon
                        name='trash'
                        size={20}
                        color={theme.color.gray[300]}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
        padding: 8,
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
    titleLabel: {
        flex: 1,
    }
})