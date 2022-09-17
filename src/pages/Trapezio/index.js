import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

//Import do componente de navegação (Menu)
import { useNavigation } from '@react-navigation/native';

import { Css } from '../../Css/global';

export default function Home(props) {
  const navegar = useNavigation();

  function irParaCirculo() {
      navegar.navigate('Circulo');
    }
    
    var [base, setBase] = useState("")
    var [bASE, setBASE] = useState("")
    var [altura, setAltura] = useState("")
    var [b1, setB1] = useState("")
    var [b2, setB2] = useState("")
    var [l1, setL1] = useState("")
    var [l2, setL2] = useState("")
    var [result, setResult] = useState("")


    function perimetro(result){

      setResult(parseFloat(b1)+parseFloat(b2)+parseFloat(l2)+parseFloat(l1))

    }

    function area(result){

      setResult(((parseFloat(base)+parseFloat(bASE))*parseFloat(altura))/2)

    }


  return (
    <View style={Css.body}>
      <View style={Css.texto}>
        <Text style={Css.titulo}> Trapezio </Text>
      </View>
      <View style={Css.grup}>
        <TextInput
          style={Css.caixaTextoPequena}
          placeholder="base"
          placeholderTextColor="#808080" 
          kayboardType='numeric'
          onChangeText={function(base){setBase(base)}} 
        />
        <TextInput
          style={Css.caixaTextoPequena}
          placeholder="Base"
          placeholderTextColor="#808080" 
          kayboardType='numeric'
          onChangeText={function(bASE){setBASE(bASE)}} 
        />
        <TextInput
          style={Css.caixaTextoPequena}
          placeholder="Altura"
          placeholderTextColor="#808080" 
          kayboardType='numeric'
          onChangeText={function(altura){setAltura(altura)}} 
        />
    </View>
    <View style={Css.grup2}>
        <TextInput
          style={Css.caixaTextoMuitoPequena}
          placeholder="B"
          placeholderTextColor="#808080" 
          kayboardType='numeric'
          onChangeText={function(b1){setB1(b1)}} 
        />
        <TextInput
          style={Css.caixaTextoMuitoPequena}
          placeholder="b"
          placeholderTextColor="#808080" 
          kayboardType='numeric'
          onChangeText={function(b2){setB2(b2)}} 
        />
        <TextInput
          style={Css.caixaTextoMuitoPequena}
          placeholder="L1"
          placeholderTextColor="#808080" 
          kayboardType='numeric'
          onChangeText={function(l1){setL1(l1)}} 
        />
        <TextInput
          style={Css.caixaTextoMuitoPequena}
          placeholder="L2"
          placeholderTextColor="#808080" 
          kayboardType='numeric'
          onChangeText={function(l2){setL2(l2)}} 
        />
    </View>

    <Text style={Css.caixaResposata}>{result}</Text>

      <View style={Css.container}>
        <TouchableOpacity style={Css.botao} onPress={area}>
          <Text style={Css.botaoText}> ÁREA </Text>
        </TouchableOpacity>
        <TouchableOpacity style={Css.botao} onPress={perimetro}>
          <Text style={Css.botaoText}> PERÍMETRO </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
