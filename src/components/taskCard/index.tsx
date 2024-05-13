import { View, Text, TouchableOpacity, TouchableWithoutFeedback, TextInput } from "react-native";
import { Checkbox } from "expo-checkbox";
import React, { useState } from "react";
import Icon from '@expo/vector-icons/Ionicons';

import { TaskCardProps } from "./task";
import { styles } from "./styles";
import { theme } from "@/theme";

export function TaskCard({ title, onPress, onCheckboxChange, onEdit }: TaskCardProps) {
    const [isChecked, setChecked] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

    const handleCheckboxChange = (value: boolean) => {
        setChecked(value);
        if (onCheckboxChange) {
            onCheckboxChange(value);
        }
    }


    const handleTitlePress = () => {
        setIsEditing(true);
    }

    const handleTitleChange = (text: string) => {
        setEditedTitle(text);
    }

    const handleTitleSubmit = () => {
        setIsEditing(false);
        if (onEdit) {
            onEdit(editedTitle);
        }
    }


    return (
        <View>

            <View style={[styles.container,
            {
                borderColor: isChecked ? theme.color.purple.dark : theme.color.gray[400],
            }
            ]}>
                <View style={styles.content} >

                    <Checkbox
                        value={isChecked}
                        onValueChange={handleCheckboxChange}
                        color={isChecked ? theme.color.purple.dark : theme.color.blue.default}
                        style={styles.checkbox}
                    />

                    <TouchableOpacity style={styles.titleLabel} onPress={handleTitlePress}>
                        {isEditing ? (
                            <TextInput
                                value={editedTitle}
                                onChangeText={handleTitleChange}
                                onSubmitEditing={handleTitleSubmit}
                                style={styles.title}
                                autoFocus={true}
                            />
                        ) : (
                            <Text style={[styles.title,
                            {
                                textDecorationLine: isChecked ? "line-through" : "none",
                                color: isChecked ? theme.color.gray[300] : theme.color.gray[100]
                            }
                            ]}>{title}</Text>
                        )}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPress} style={styles.delete}>

                        <Icon
                            name='trash'
                            size={20}
                            color={theme.color.gray[300]}
                        />

                    </TouchableOpacity>
                </View>
            </View>

        </View>

    )
}

