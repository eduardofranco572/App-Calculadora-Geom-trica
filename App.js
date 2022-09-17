import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'

//Passo1: Importar a Stack (pilha de navegação) 
import{NavigationContainer} from '@react-navigation/native'
import{createNativeStackNavigator} from '@react-navigation/native-stack'

//Passo2: Importar todas as "pages" que pretende navegar no porjeto
import Home from './src/pages/Home/index'
import Circulo from './src/pages/Circulo/index'
import Trapezio from './src/pages/Trapezio/index'
import Triangulo from './src/pages/Triangulo/index'
import Pitagoras from './src/pages/Pitagoras/index'


//Passo3: Criar uma constante que recebera a function createNativeStackNavigator
const Pilha = createNativeStackNavigator();


export default function App(){

  return(
    <NavigationContainer>
      {/*Aqui vamos indicar a pilha de paginas*/}
      <Pilha.Navigator intialRouteName='Home'>
        <Pilha.Screen 
          name='Home'
          component={Home}
          options={{
            title:'Início',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'black'},
            headerTitleAlign: 'center'

          }}
        />
        <Pilha.Screen 
          name='Circulo' 
          component={Circulo}
          options={{
            title:'Circulo',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'black'},
            headerTitleAlign: 'center'

          }}
        />
        <Pilha.Screen 
          name='Trapezio' 
          component={Trapezio}
          options={{
            title:'Trapezio',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'black'},
            headerTitleAlign: 'center'

          }}
        />
        <Pilha.Screen 
          name='Triangulo' 
          component={Triangulo}
          options={{
            title:'Triangulo',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'black'},
            headerTitleAlign: 'center'

          }}
        />
         <Pilha.Screen 
          name='Pitagoras' 
          component={Pitagoras}
          options={{
            title:'Pitagoras',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'black'},
            headerTitleAlign: 'center'

          }}
        />
      </Pilha.Navigator>
    
    </NavigationContainer>

  )

}