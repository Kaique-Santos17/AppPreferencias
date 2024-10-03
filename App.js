import React, { useState } from 'react';
import { View, Text, Slider, Switch, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';  // Importação corrigida

const App = () => {
  // Estados
  const [theme, setTheme] = useState('Claro');
  const [fontSize, setFontSize] = useState(16);
  const [isNightMode, setIsNightMode] = useState(false);

  // Função para resetar as preferências
  const resetPreferences = () => {
    setTheme('Claro');
    setFontSize(16);
    setIsNightMode(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações de Preferências</Text>

      {/* Picker para Tema */}
      <Text style={styles.label}>Tema:</Text>
      <Picker
        selectedValue={theme}
        style={styles.picker}
        onValueChange={(itemValue) => setTheme(itemValue)}
      >
        <Picker.Item label="Claro" value="Claro" />
        <Picker.Item label="Escuro" value="Escuro" />
        <Picker.Item label="Automático" value="Automático" />
      </Picker>

      {/* Slider para Tamanho da Fonte */}
      <Text style={styles.label}>Tamanho da Fonte: {fontSize}</Text>
      <Slider
        style={styles.slider}
        minimumValue={12}
        maximumValue={30}
        value={fontSize}
        step={1}
        onValueChange={(value) => setFontSize(value)}
      />

      {/* Switch para Modo Noturno */}
      <Text style={styles.label}>Modo Noturno: {isNightMode ? 'Ativado' : 'Desativado'}</Text>
      <Switch
        value={isNightMode}
        onValueChange={(value) => setIsNightMode(value)}
      />

      {/* Botão de Reset */}
      <Button title="Resetar Preferências" onPress={resetPreferences} />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  slider: {
    width: '100%',
    height: 40,
  },
});

export default App;

