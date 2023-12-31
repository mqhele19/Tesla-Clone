import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: '100%',
      },
        titles: {
          marginTop: '30%',
          alignItems:'center',
    
     
        },
        title:{
          fontSize: 40,
          fontWeight: '600',
    
        },
        
        subtitle:{
          fontSize: 20,
          color: '#5c5e62'
          
         },
         image:{
          width: '100%',
          height: '100%',
          resizeMode: 'contain',
          position: 'absolute',
    
         },
         buttonsContainer: {
          position: 'absolute',
          bottom: 50,
          width: '100%',

         }
         
    
	
});

export default styles;