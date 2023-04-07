import { StyleSheet, Text, View,Image } from 'react-native'
import React,{useEffect} from 'react'
import logo from '../assets/images/tik.png'


const SuccessPage = ({ route, navigation }) => {
	const { item, amount, selectedPayment} = route.params;

	useEffect(() => {
		setTimeout(() => {
			navigation.navigate('invoice',{reload: true});
		}, 10000);
	},[]);
	
  return (
    <View style={styles.container}>
			<Image style={styles.logo} source={logo} />
			<Text style={styles.item1} >{item.retailerId}/{item.billNo}</Text>
			<Text style={styles.item2} >₹{amount}</Text>
			<Text style={styles.item3} >{item.retailerName}</Text>
			<Text ellipsizeMode="clip" numberOfLines={1} style={{color:'white', fontSize:20}}>
      - - - - - - - - - - - - - - - - - - - - - - - - 
    </Text>
		<Text style={styles.item4} >PAID BY {selectedPayment.toUpperCase()}</Text>
		<Text style={styles.item5} >Redirecting to HomeScreen...</Text>
    </View>
  )
}


const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		display: 'flex',
		backgroundColor:'green',
		justifyContent:'flex-start',
		alignItems:'center'
},
logo: {
	resizeMode: 'contain',
	marginTop:100,
	marginBottom:20,
},
item1: {
	fontSize: 25,
	fontWeight:'300',
	color:'white',
	marginBottom:5,
},
item2: {
	fontSize: 40,
	fontWeight:'600',
	color:'white',
	marginBottom:25,
},
item3: {
	fontSize: 25,
	fontWeight:'300',
	color:'white',
	marginBottom:25,
},
item4: {
	fontSize: 30,
	fontWeight:'400',
	color:'white',
	marginBottom:50,
	marginTop:20
},
item5: {
	fontSize: 16,
	fontWeight:'300',
	color:'white',
	marginTop:100
},
})

export default SuccessPage
