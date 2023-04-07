import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React,{useCallback, useState, useEffect} from 'react'
import { button1 } from '../assets/common/button'
import axios from 'axios';
import {url} from '../constants/url';

const Invoices = ({ route, navigation }) => {
	const reload = route.params ? route.params.reload : false
	const [data, setData] = useState([])

	const getInvoices = async () =>{
		const req = await axios.get(`${url}/getInvoices`);
		const data = req.data;
		setData(data);
	};

	useEffect(() => {
		getInvoices();
	},[]);

	useEffect(() => {
    if (reload) {
			getInvoices();
    }
  }, [reload]);

	const renderListItem = ({ item }) => {
		const amount='₹'+item.pendingAmount
    return (
			<TouchableOpacity >
				<Text disabled={item.pendingAmount === 0 ? true:false} onPress={()=>{
						navigation.navigate('PaymentScreen', {
						item
          })}}>
      <View style={styles.listItem}>
      <View style={styles.itemBackground}>
				<View style={styles.itemBackground2}>
					<Text style={styles.item1} >{item.retailerId}/{item.billNo}</Text>
					<Text style={styles.item3}>{item.pendingAmount ? amount: 'PAID'}</Text>

				</View>
				<View style={styles.itemBackground3}>
					<Text style={styles.item2}>{item.retailerName}</Text>
				</View>
			</View>
    </View>
		</Text>
		</TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
			 <View style={styles.s1}>
        <Text style={button1} onPress={()=>{navigation.navigate('AddInvoices')}}>Add Invoice</Text>
        </View>

        <View style={styles.s2}>
				<FlatList
					data={data}
					renderItem={renderListItem}
					keyExtractor={(item) => item._id}
				/>
				
        </View>
       
    </View>
  )
}

const styles = StyleSheet.create({
	container: {
			flex: 1,
			display: 'flex',
	},
	container1: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100%',
			width: '100%',
	},
	s1: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
	},
	small1: {
			marginTop: 20,
			fontSize: 25,
			color:'#fff',
	},
	listItem: {
			width:'100%',
			alignItems: 'center',
			alignSelf: 'stretch',
	},
	itemBackground: {
			backgroundColor: '#fff',
			borderBottomColor: 'black',
			borderBottomWidth: StyleSheet.hairlineWidth,
			paddingLeft:20,
			paddingRight:10,
			paddingTop:20,
			height:80,
			width:'100%',
	},
	itemBackground2: {
			display: 'flex',
			flexDirection: 'row',
	},
	itemBackground3: {
			display: 'flex',
			flexDirection: 'column',
	},
	item1: {
			fontSize: 18,
			fontWeight:'700',
			color:'#656363',
			width:'50%',
	},
	item2: {
			fontSize: 14,
			fontWeight:'400',
			color:'#656363',
	},
	item3: {
			fontSize: 18,
			fontWeight:'700',
			color:'black',
			width:'50%',
			marginLeft:'30%'
	},
	s2: {
			display: 'flex',
			paddingBottom:100,
	},
})

export default Invoices
