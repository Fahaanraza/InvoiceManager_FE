import { StyleSheet, Text, View,TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React,{useState} from 'react'
import { showMessage, hideMessage } from "react-native-flash-message";
import axios from 'axios';
import {url} from '../constants/url';

const PaymentScreen = ({ route, navigation }) => {
	const { item } = route.params;
	const { pendingAmount } = item;
	const [amount, setAmount] = useState(pendingAmount.toString())
	const [selectedPayment, setSelectedPayment] = useState('');
	
	const PaymentButton = ({ title, selected, onPress }) => {
		return (
			<TouchableOpacity onPress={onPress}>
				<View style={{ backgroundColor: selected ? '#DEE7F4' : '#D5D6D6', borderRadius: 5,margin:5, padding: 10,height:130,width:110, borderWidth: 1, borderColor: selected ? '#5E88C8' : '#EFEFEE', alignItems: 'center',justifyContent:'center' }}>
					<Text style={{ color: 'black', fontSize:16 }}>{title}</Text>
				</View>
			</TouchableOpacity>
		);
	};
	
	
		const handlePaymentSelection = (paymentType) => {
			setSelectedPayment(paymentType);
		};
	

	const submit=async()=>{
		if (pendingAmount < +amount) {
			showMessage({
				message: "Please enter Amount less than Pending amount",
				type: "danger",
			});
			return
		}
		try {
		const remainingAmount = pendingAmount - +amount
		const payload = {amount: remainingAmount, id: item._id}
		const req = await axios.post(`${url}/updateAmount`, payload)
		navigation.navigate('SuccessPage', {item, amount, selectedPayment})
		} catch (err) {
			showMessage({
				message: "Something went wrong",
				type: "danger",
			});

		}
	}

  return (
    <View style={styles.container}>

			<View style={styles.itemBackground}>
					<Text style={styles.item1} >{item.retailerId}/{item.billNo}</Text>
					<Text style={styles.item2}>{item.retailerName}</Text>
			</View>
			<ScrollView style={styles.s2} keyboardDismissMode="interactive">
			<Text style={styles.label}>Amount (in ₹)</Text>
				<TextInput 
				style={styles.input}
        value={amount}
				onChangeText={setAmount}
				keyboardType="number-pad"
				/>
			</ScrollView>
			<View style={styles.itemBackground3}>
				<Text style={styles.item3}>Choose Payment Mode</Text>
					<View style={styles.containerz}>
					<PaymentButton title="Online" selected={selectedPayment === 'online'} onPress={() => handlePaymentSelection('online')} />
					<PaymentButton title="Cash" selected={selectedPayment === 'cash'} onPress={() => handlePaymentSelection('cash')} />
					<PaymentButton title="Cheque" selected={selectedPayment === 'cheque'} onPress={() => handlePaymentSelection('cheque')} />
					</View>
			</View>
			<View style={selectedPayment ? styles.itemBackground2 :styles.itemBackgrounddisabled}>
			<TouchableOpacity disabled={selectedPayment ? false:true}
                onPress={submit}
            >
        <Text style={styles.small1}>Confirm</Text>
            </TouchableOpacity>
			</View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
    },
		itemBackground: {
			display: 'flex',
      flexDirection: 'column',
			backgroundColor: 'black',
			paddingLeft:20,
			paddingTop:30,
		},
		itemBackground2: {
			display: 'flex',
			backgroundColor: '#2660B6',
			paddingLeft:20,
			paddingTop:20,
			height:'10%'
		},
		itemBackgrounddisabled: {
			display: 'flex',
			backgroundColor: '#D5D6D6',
			paddingLeft:20,
			paddingTop:20,
			height:'10%'
		},
		itemBackground3: {
			display: 'flex',
			alignItems:'center',
			justifyContent:'center',
			paddingLeft:20,
			paddingTop:30,
			height:'55%'
		},
		item1: {
			fontSize: 18,
			fontWeight:'700',
			color:'white',
		},
		item2: {
			fontSize: 14,
			fontWeight:'400',
			color:'white',
		},
		item3: {
			fontSize: 20,
			fontWeight:'900',
			color:'black',
		},
		label: {
			fontSize: 14,
			color: 'white',
			marginLeft: 10,
			marginBottom: 3,
			marginTop:30,
	},
	input: {
		backgroundColor: "#242629",
		color:'white',
		borderRadius: 20,
		marginTop: 10,
		fontSize:20,
		paddingHorizontal: 10,
		paddingVertical: 10,
		height:50,
	},
    s1: {
        display: 'flex',
        justifyContent: 'center',
				color: "#2B2D30",
        alignItems: 'center',
        height: '60%',
    },
    small1: {
			display:'flex',
			fontSize: 17,
			color:'white',
			textAlign:'center'
    },
    s2: {
        display: 'flex',
        backgroundColor: 'black',
        width: '100%',
        height: '25%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        padding: 20,
    },
		containerz: {
			display: 'flex',
			flexDirection:'row',
			justifyContent: 'center',
			alignItems: 'center',
			marginTop:40,
		},
		button: {
			backgroundColor: '#007AFF',
			padding: 10,
			borderRadius: 5,
			marginBottom: 10,
		},
		buttonText: {
			color: 'white',
			fontWeight: 'bold',
		},
})

export default PaymentScreen
