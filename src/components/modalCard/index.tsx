import { View, Text, Modal, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { BlurView } from "expo-blur";
import { ModalCardProps } from "./modal";
import { DefaultButton } from "../button";

export function ModalCard({ isOpen, setIsOpen, children, backgroundColor, title, onPress }: ModalCardProps) {

    return (
        <Modal
            animationType='fade'
            visible={isOpen}
            transparent={true}
            onRequestClose={() => setIsOpen(false)}
        >
            <BlurView style={styles.blurView}>
                <View style={styles.container}>
                    <View
                        style={[styles.content, { backgroundColor: backgroundColor }]}>

                        <View style={styles.header}>
                            <Text style={styles.text}>{title}</Text>
                            <TouchableOpacity
                                onPress={() => setIsOpen(false)}
                            >
                                <Text style={styles.text}>X</Text>
                            </TouchableOpacity>
                        </View>


                        <View style={{ flex: 1 }}>
                            {children}
                        </View>


                        <View style={styles.footer}>
                            <DefaultButton
                                title="Fechar"
                                onPress={() => setIsOpen(false)}
                            />
                            <DefaultButton
                                title="Salvar"
                                onPress={onPress}
                            />
                        </View>

                    </View>
                </View>
            </BlurView>
        </Modal>
    )
}