import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const CarItem = (props) => {
	return (
        <View style={styles.carContainer}>
        <ImageBackground
          source={require('../../assets/images/ModelX.jpeg')}
          style={styles.image}
          />
        <View style={styles.titles}>
         
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69,420</Text>
        </View>

        <View style={styles.buttonsContainer}> 
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom Order was pressed");
          }}
        />

          
        <StyledButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing Inventory was pressed");
          }}
        />
        </View>
        
      </View>
      
	);
	};
	
	export default CarItem ;