import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { Checkbox } from "expo-checkbox";
import React, { useState } from "react";
import Icon from '@expo/vector-icons/Ionicons';

import { LabelProps } from "./task";
import { theme } from "@/theme";
import { styles } from "./styles";

export function Label({ title, onPress, onCheckboxChange }: LabelProps) {
    const [isChecked, setChecked] = useState(false);

    const handleCheckboxChange = (value: boolean) => {
        setChecked(value);
        if (onCheckboxChange) {
            onCheckboxChange(value);
        }
    }

    return (
        <TouchableWithoutFeedback>

            <View style={styles.container}>
                <View style={styles.content} >

                    <Checkbox
                        value={isChecked}
                        onValueChange={handleCheckboxChange}
                        color={isChecked ? theme.color.purple.dark : theme.color.blue.default}
                        style={styles.checkbox}
                    />

                    <View style={styles.titleLabel}>
                        <Text style={[styles.title,
                        {
                            textDecorationLine: isChecked ? "line-through" : "none",
                            color: isChecked ? theme.color.gray[300] : theme.color.gray[100]
                        }
                        ]}>{title}</Text>
                    </View>

                    <TouchableOpacity onPress={onPress} style={styles.delete}>

                        <Icon
                            name='trash'
                            size={20}
                            color={theme.color.gray[300]}
                        />

                    </TouchableOpacity>
                </View>
            </View>

        </TouchableWithoutFeedback>

    )
}

