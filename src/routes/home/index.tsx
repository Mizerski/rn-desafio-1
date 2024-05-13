import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, FlatList, Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import Ionicons from '@expo/vector-icons/Ionicons';

import Logo from '@public/logo.png';

import { theme } from '@/theme';
import { Label } from '@/components/taskCard';
import { styles } from './styles';

export function Home() {

    const [taskCard, setTaskCard] = useState<string[]>([])
    const [newTask, setNewTask] = useState('')
    const [countCreated, setCreatedDone] = useState(0)
    const [countCompleted, setCompletedDone] = useState(0)

    const [fontsLoaded, fontError] = useFonts({
        Inter_400Regular,
        Inter_700Bold
    })

    if (!fontsLoaded && !fontError) {
        return null;
    }


    const handleAddTask = () => {
        if (taskCard.includes(newTask)) return Alert.alert('Erro', 'Tarefa já adicionada')
        if (!newTask) return Alert.alert('Alerta!', 'Digite uma tarefa para adicionar')

        setTaskCard(prevState => [newTask, ...prevState])
        setNewTask('')
        setCreatedDone(countCreated + 1)
    }

    const confirmDelete = (taskItem: string) => {
        Alert.alert(
            'Confirmação',
            `Deseja realmente excluir a tarefa ${taskItem}?`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Confirmar',
                    onPress: () => handleDeleteTask(taskItem)
                }
            ]
        )
    }

    const handleDeleteTask = (taskItem: string) => {

        setTaskCard(taskCard.filter(task => task !== taskItem))
        setCreatedDone(countCreated - 1)
    }

    const handleCheckboxChange = (value: boolean, index: number) => {
        setCompletedDone(prev => value ? prev + 1 : prev - 1);

        let updatedTaskCard = [...taskCard];
        let task = updatedTaskCard.splice(index, 1)[0];

        if (value) {
            updatedTaskCard.push(task);
        } else {
            updatedTaskCard.unshift(task);
        }

        setTaskCard(updatedTaskCard);
    }


    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <StatusBar style='auto' />

                    <View style={styles.header}>
                        <Image source={Logo} style={styles.logo} />
                        <View style={styles.inputLabel}>
                            <TextInput
                                placeholder='Adicione uma nova tarefa'
                                placeholderTextColor={theme.color.gray[300]}
                                style={styles.inputText}
                                onChangeText={setNewTask}
                                value={newTask}
                            />

                            <TouchableOpacity style={styles.button}
                                onPress={() => handleAddTask()}
                            >
                                <Ionicons
                                    name='add-circle-outline'
                                    color={theme.color.gray[100]}
                                    size={24} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.todoCount}>
                        <View style={styles.todoContent}>
                            <Text style={styles.createdText}>Criadas</Text>
                            <View style={styles.createdNumber}>
                                <Text style={styles.countText}>{countCreated}</Text>
                            </View>
                        </View>
                        <View style={styles.todoContent}>
                            <Text style={styles.completedText}>Completas</Text>
                            <View style={styles.createdNumber}>
                                <Text style={styles.countText}>{countCompleted}</Text>
                            </View>
                        </View>
                    </View>


                    <FlatList
                        style={styles.todoList}
                        data={taskCard}
                        keyExtractor={item => item}
                        renderItem={({ item, index }) => (
                            <Label title={item} onPress={() => confirmDelete(item)}
                                onCheckboxChange={(value: boolean) => handleCheckboxChange(value, index)}
                            />
                        )}
                        ListEmptyComponent={
                            <Text style={{ color: theme.color.gray[100] }}>Nenhuma tarefa encontrada</Text>
                        }
                    />
                </View>

            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

