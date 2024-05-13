import { View, Text, TouchableOpacity } from 'react-native';
import { DefaultButtonProps } from './btn';
import { styles } from './style';



export function DefaultButton({ title, onPress }: DefaultButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.submitButton}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}