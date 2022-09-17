import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

//Import do componente de navegação (Menu)
import { useNavigation } from '@react-navigation/native';

import { Css } from '../../Css/global';

export default function Home(props) {
  const navegar = useNavigation();
  var [raio, setRaio] = useState('');
  var [result, setResult] = useState('');

  function perimetro(result) {
    setResult(3.14 * (parseFloat(raio) * parseFloat(raio)));
  }

  function area(result) {
    setResult(2 * 3.14 * parseFloat(raio));
  }

  return (
    <View style={Css.body}>
      <View style={Css.texto}>
        <Text style={Css.titulo}> CIRCULO </Text>
      </View>
      <TextInput
        style={Css.caixaTexto}
        placeholder="Digite o Raio"
        placeholderTextColor="#808080"
        kayboardType="numeric"
        onChangeText={function (raio) {
          setRaio(raio);
        }}
      />

      <Text style={Css.caixaResposata}>{result}</Text>

      <View style={Css.container}>
        <TouchableOpacity style={Css.botao} onPress={area}>
          ÁREA
        </TouchableOpacity>
        <TouchableOpacity style={Css.botao} onPress={perimetro}>
          PERÍMETRO
        </TouchableOpacity>
      </View>
    </View>
  );
}
