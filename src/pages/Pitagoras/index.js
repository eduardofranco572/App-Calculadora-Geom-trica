import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

//Import do componente de navegação (Menu)
import { useNavigation } from '@react-navigation/native';

import { Css } from '../../Css/global';

export default function Home(props) {

  const navegar = useNavigation();

  var [catetoAd, setCatetoAD] = useState("")
  var [catetoOp, setCatetoOp] = useState("")
  var [resul,setResultado] = useState("")


  function somar(resul){

    const soma = (parseFloat(catetoAd)*parseFloat(catetoAd)) + (parseFloat(catetoOp)*parseFloat(catetoOp))

    const rais = (Math.sqrt(soma))

    setResultado(rais)

  }

return(

    <View style={Css.body}>
      <View style={Css.texto}>
        <Text style={Css.titulo}> Triangulo </Text>
      </View>
       <View style={Css.grupT}>
        <TextInput
          style={Css.caixaTextoPequena2}
          placeholder="catetoAD"
          placeholderTextColor="#808080" 
          kayboardType='numeric'
          onChangeText={function(catetoAd){setCatetoAD(catetoAd)}}
        />
        <TextInput
          style={Css.caixaTextoPequena2}
          placeholder="catetoOp"
          placeholderTextColor="#808080" 
          kayboardType='numeric'
          onChangeText={function(catetoOp){setCatetoOp(catetoOp)}}
        />
    </View>

  <Text style={Css.caixaResposata}>{resul}</Text>

      <View style={Css.container}>
        <TouchableOpacity style={Css.botao} onPress={somar}>
          <Text style={Css.botaoText}> SOMAR </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
