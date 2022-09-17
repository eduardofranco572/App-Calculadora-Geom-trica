import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

//Import do componente de navegação (Menu)
import { useNavigation } from '@react-navigation/native';

import { Css } from '../../Css/global';

export default function Home(props) {
  const navegar = useNavigation();

  function irParaCirculo() {
    navegar.navigate('Circulo');
  }

  function irParaTrapezio() {
    navegar.navigate('Trapezio');
  }

  function irParaTriangulo() {
    navegar.navigate('Triangulo');
  }

  function irParaPitagoras() {
    navegar.navigate('Pitagoras');
  }

  return (
    <View style={Css.body1}>
      <View style={Css.texto}>
        <Image
          source={{
            uri: 'https://cdn.oldskull.net/wp-content/uploads/2015/04/geometric-animations-3-1.gif',
          }}
          style={{
            marginTop: '10rem',
            resizeMode:'contain', // Melhora a qualidade da imagem e ajusta a imagem
            alignSelf: 'center', //centraliza a imagem

            height: 200,
            width: 200,
            paddingStart: 30,
          }}>
          {' '}
        </Image>
        <Text style={Css.titulo}> CALCULADORA GEOMÉTRICA </Text>
      </View>

      <View style={Css.container}>
        <TouchableOpacity style={Css.botao} onPress={irParaCirculo}>
          <Text style={Css.botaoText}> CIRCULO </Text>
        </TouchableOpacity>

        <TouchableOpacity style={Css.botao} onPress={irParaTriangulo}>
          <Text style={Css.botaoText}> TRIANGULO </Text>
        </TouchableOpacity>

        <TouchableOpacity style={Css.botao} onPress={irParaTrapezio}>
          <Text style={Css.botaoText}> TRAPÉZIO </Text>
        </TouchableOpacity>

        <TouchableOpacity style={Css.botao} onPress={irParaPitagoras}>
          <Text style={Css.botaoText}> PITÁGORAS </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
