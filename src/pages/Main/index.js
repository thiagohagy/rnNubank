import React from 'react';

import {
  Text, Image, StyleSheet, Dimensions, ImageBackground, StatusBar, View, 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import { Container, Content, Card, CardHeader, CardContent, CardFooter, Description, Annotation, Title } from './styles';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

const Main = () => {
  const translateY = new Animated.Value(0);
  let offset = 0;
  
  const animatedEvent = new Animated.event([
    {
      nativeEvent: {
        translationY: translateY,
      }
    }
  ],
  { useNativeDriver: true }
  );

  const onHandlerStateChanged = (e) =>{
    if (e.nativeEvent.oldState === State.ACTIVE) {
      const {translationY} = e.nativeEvent;
      let opened = false;

      offset += translationY;
      translateY.setOffset(offset);
      translateY.setValue(0);

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setOffset(0);
        translateY.setValue(offset);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    } 
  }

  return (
    <>
      <Container>
        <Header />
        <Content>
          <Menu translateY={translateY} />

          <PanGestureHandler
            onGestureEvent={animatedEvent}
            onHandlerStateChange={onHandlerStateChanged}
          >
            <Card style={{
              transform:[{
                translateY: translateY.interpolate({
                  inputRange: [-350, 0, 380],
                  outputRange: [-50, 0, 380],
                  extrapolate: 'clamp',
                }) 
              }]
            }}>
              <CardHeader>
                <Icon name="attach-money" size={28} color="#666" />
                <Icon name="visibility-off" size={28} color="#666" />
              </CardHeader>
              <CardContent>
                <Title>Saldo disponível</Title>
                <Description>R$ 123.456,00</Description>
              </CardContent>
              <CardFooter>
                <Annotation>
                  Transferencia de R$ 20,00 de Thiago Hagy  recebida hoje as 12:00
                </Annotation>
              </CardFooter>
            </Card>
          </PanGestureHandler>
        </Content>
        <Tabs translateY={translateY} />
      </Container>
    </>
  );
};

export default Main;
