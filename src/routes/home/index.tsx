import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, FlatList, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';


import { theme } from '@/theme';
import { TaskCard } from '@/components/taskCard';
import { styles } from './styles';
import { ModalCard } from '@/components/modalCard';

export function Home() {

    const [taskCard, setTaskCard] = useState<string[]>([])
    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [newTaskDetails, setNewTaskDetails] = useState('')
    const [countCreated, setCreatedDone] = useState(0)
    const [countCompleted, setCompletedDone] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    const createNewTask = () => {
        setIsOpen(true)
    }

    const handleAddTask = () => {
        if (taskCard.includes(newTaskTitle)) return Alert.alert('Erro', 'Tarefa já adicionada')
        if (!newTaskTitle) return Alert.alert('Alerta!', 'Digite uma tarefa para adicionar')

        setTaskCard(prevState => [newTaskTitle, ...prevState])
        setNewTaskTitle('')
        setCreatedDone(countCreated + 1)

        setIsOpen(false)

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

    const handleEditTask = (index: number, newTitle: string) => {
        setIsOpen(true)

        let updatedTaskCard = [...taskCard];
        updatedTaskCard[index] = newTitle;

        setTaskCard(updatedTaskCard)
    }

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <StatusBar style='light' />



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
                            <TaskCard
                                title={item}
                                onPress={() => confirmDelete(item)}
                                onCheckboxChange={(value: boolean) => handleCheckboxChange(value, index)}
                                onEdit={() => handleEditTask(index, item)}
                            />
                        )}
                        ListEmptyComponent={
                            <Text style={{ color: theme.color.gray[100] }}>Nenhuma tarefa encontrada</Text>
                        }
                    />

                    {isOpen && (
                        <ModalCard
                            title=''
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            backgroundColor={theme.color.gray[600]}
                            onPress={handleAddTask}
                            children={
                                <View style={styles.inputLabel}>

                                    <View style={styles.inputView}>
                                        <Text style={styles.text}>Nome da Tarefa</Text>
                                        <TextInput
                                            placeholder='ex: Estudar React Native'
                                            placeholderTextColor={theme.color.gray[300]}
                                            style={styles.inputText}
                                            onChangeText={setNewTaskTitle}
                                            value={newTaskTitle}
                                        />
                                    </View>


                                    <View style={styles.inputView}>
                                        <Text style={styles.text}>Detalhes</Text>
                                        <TextInput
                                            placeholder='ex: estudar hooks, context, navegação'
                                            placeholderTextColor={theme.color.gray[300]}
                                            style={styles.inputTextDetails}
                                            onChangeText={setNewTaskDetails}
                                            value={newTaskDetails}
                                            multiline={true}
                                        />
                                    </View>

                                </View>
                            }
                        />
                    )}

                    <TouchableOpacity style={styles.addTaskButton} onPress={createNewTask}>
                        <Text style={styles.addTaskText}>+</Text>
                    </TouchableOpacity>

                </View>

            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

