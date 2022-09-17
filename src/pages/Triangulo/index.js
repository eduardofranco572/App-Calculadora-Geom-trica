import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

//Import do componente de navegação (Menu)
import { useNavigation } from '@react-navigation/native';

import { Css } from '../../Css/global';

export default function Home(props) {

  const navegar = useNavigation();

  var [base, setBase] = useState("")
  var [alt, setAlt] = useState("")
  var [la, setLa] = useState("")
  var [lb, setLB] = useState("")
  var [lc, setLc] = useState("")
  var [resul,setResultado] = useState("")


function perimetro(resul){

   setResultado(parseFloat(la)+parseFloat(lb)+parseFloat(lc))

}

function area(resul){

  setResultado((parseFloat(base)*parseFloat(alt))/2)
 
}

return(

    <View style={Css.body}>
      <View style={Css.texto}>
        <Text style={Css.titulo}> Triangulo </Text>
      </View>
       <View style={Css.grupT}>
        <TextInput
          style={Css.caixaTextoPequena2}
          placeholder="Base"
          placeholderTextColor="#808080" 
          kayboardType='numeric'
          onChangeText={function(base){setBase(base)}}
        />
        <TextInput
          style={Css.caixaTextoPequena2}
          placeholder="Altura"
          placeholderTextColor="#808080" 
          kayboardType='numeric'
          onChangeText={function(alt){setAlt(alt)}}
        />
    </View>
    <View style={Css.grupT2}>
        <TextInput
          style={Css.caixaTextoMuitoPequena2}
          placeholder="LA"
          placeholderTextColor="#808080" 
          kayboardType='numeric'
          onChangeText={function(la){setLa(la)}}
        />
        <TextInput
          style={Css.caixaTextoMuitoPequena2}
          placeholder="LB"
          placeholderTextColor="#808080" 
          kayboardType='numeric'
          onChangeText={function(lb){setLB(lb)}}
        />
        <TextInput
          style={Css.caixaTextoMuitoPequena2}
          placeholder="LC"
          placeholderTextColor="#808080" 
          kayboardType='numeric'
          onChangeText={function(lc){setLc(lc)}}
        />
    </View>
    <Text style={Css.caixaResposata}>{resul}</Text>

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
