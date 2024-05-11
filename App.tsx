import { StatusBar } from 'expo-status-bar';
import { Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import Ionicons from '@expo/vector-icons/Ionicons';

import Logo from './assets/Logo.png';
import { theme } from './theme';
import { Label } from './components/label';

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={styles.container}>
          <StatusBar style="light" />

          <View style={styles.header}>
            <Image source={Logo} style={styles.logo} />

            <View style={styles.inputLabel}>
              <TextInput
                placeholder='Adicione uma nova tarefa'
                placeholderTextColor={theme.color.gray[300]}
                style={styles.inputText}

              />

              <TouchableOpacity style={styles.button}>
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
                <Text style={styles.countText}>0</Text>
              </View>
            </View>
            <View style={styles.todoContent}>
              <Text style={styles.completedText}>Completas</Text>
              <View style={styles.createdNumber}>
                <Text style={styles.countText}>0</Text>
              </View>
            </View>
          </View>

          <View style={styles.todoList}>
            <Label title='Integer urna interdum massa libero auctor neque turpis turpis semper.' />
            <Label title='Integer urna interdum massa libero auctor neque turpis turpis semper.' />
            <Label title='Integer urna interdum massa libero auctor neque turpis turpis semper.' />
            <Label title='Integer urna interdum massa libero auctor neque turpis turpis semper.' />
            <Label title='Integer urna interdum massa libero auctor neque turpis turpis semper.' />
            <Label title='Integer urna interdum massa libero auctor neque turpis turpis semper.' />
            <Label title='Integer urna interdum massa libero auctor neque turpis turpis semper.' />
            <Label title='Integer urna interdum massa libero auctor neque turpis turpis semper.' />
            <Label title='Integer urna interdum massa libero auctor neque turpis turpis semper.' />
            <Label title='Integer urna interdum massa libero auctor neque turpis turpis semper.' />
          </View>

        </View>

      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.gray[600],
  },
  header: {
    backgroundColor: theme.color.gray[700],
    height: 173,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 110,
    height: 32,
    resizeMode: 'contain',
    marginTop: 24,
  },
  inputLabel: {
    top: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 24,
  },
  inputText: {
    fontFamily: 'Inter_400Regular',
    color: theme.color.gray[100],
    backgroundColor: theme.color.gray[500],
    borderColor: theme.color.gray[700],
    borderWidth: 1,
    flex: 1,
    height: 54,
    padding: 16,
    borderRadius: 6,
    fontSize: 16,
    marginRight: 6,
  },
  button: {
    width: 54,
    height: 54,
    backgroundColor: theme.color.blue.default,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Inter_400Regular',
    color: theme.color.gray[100],
    fontSize: 16
  },
  todoCount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: theme.color.gray[500],
    borderBottomWidth: 1.5,
    paddingBottom: 20,
    marginHorizontal: 24,
    marginTop: 62,
  },
  todoContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  createdText: {
    fontFamily: 'Inter_700Bold',
    color: theme.color.blue.default,
    fontSize: 16,
  },
  completedText: {
    fontFamily: 'Inter_700Bold',
    color: theme.color.purple.default,
    fontSize: 16,
  },
  countText: {
    fontFamily: 'Inter_700Bold',
    color: theme.color.gray[100],
    fontSize: 12,
  },
  createdNumber: {
    backgroundColor: theme.color.gray[400],
    padding: 2,
    width: 25,
    marginLeft: 8,
    borderRadius: 50,
    alignItems: 'center',
  },
  todoList: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 24,
  }
});
