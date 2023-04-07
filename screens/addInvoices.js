import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { add, button1, cancel } from '../assets/common/button'
import { errormessage, formgroup, head1, head2, input, input1, label, link, link2 } from '../assets/common/formcss'
import axios from 'axios';
import { showMessage, hideMessage } from "react-native-flash-message";
import {url} from '../constants/url';

const AddInvoices = ({ navigation }) => {
    const [fdata, setFdata] = useState({
        brand: '',
        salesRepId: '',
        salesmanName: '',
        invoiceAmount: '',
        retailerId: '',
        retailerName: '',
        retailerPhoneNo: '',
        invoiceDate: '',
        billNo: '',
        pendingAmount: '',
        collectionDate: '',
    })
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const [errormsg, setErrormsg] = useState(null)

    const submit = async() =>{
        if (fdata.brand == '' ||
            fdata.salesRepId == '' ||
            fdata.salesmanName == '' ||
            fdata.invoiceAmount == '' ||
            fdata.retailerId == '' ||
            fdata.retailerName == '' ||
            fdata.retailerPhoneNo == '' ||
            fdata.invoiceDate == '' ||
            fdata.billNo == '' ||
            fdata.pendingAmount == '' ||
            fdata.collectionDate == '' ) {
            setErrormsg('All fields are required');
            return;
        } 
        if ((fdata.retailerPhoneNo).length !== 10) {
            setErrormsg('Invalid Phone Number');
            return;
        }
        try {
            console.log('in here')
            const req = await axios.post(`${url}/addInvoice`, fdata)
            showMessage({
                message: "Successfully added Invoice",
                type: "success",
              });
            navigation.navigate('invoice',{reload: true})
        } catch (err) {
            showMessage({
				message: "Something went wrong",
				type: "danger",
			});
          }
    }

    const setCollectionDate = (event, date) => {
        setFdata({ ...fdata, collectionDate: event.nativeEvent.timestamp })
      };

    const setInvoiceDate = (event, date) => {
        setFdata({ ...fdata, invoiceDate: event.nativeEvent.timestamp })
    };

  return (
    <View style={styles.container}>
        {
            errormsg ? <Text style={errormessage}>{errormsg}</Text> : null
        }
        <ScrollView style={styles.s2}>
            <View style={formgroup}>
                <Text style={label}>Brand Name</Text>
                <TextInput style={input} placeholder="Enter your Brand Name"
                    onPressIn={() => setErrormsg(null)}
                    onChangeText={(text) => setFdata({ ...fdata, brand: text })}
                />
            </View>

            <View style={formgroup}>
                <Text style={label}>Sales Rep Id</Text>
                <TextInput style={input} placeholder="Enter your Sales Rep Id"
                    onPressIn={() => setErrormsg(null)}
                    onChangeText={(text) => setFdata({ ...fdata, salesRepId: text })}
                />
            </View>

            <View style={formgroup}>
                <Text style={label}>Salesman name</Text>
                <TextInput style={input} placeholder="Enter your Salesman name"
                    onPressIn={() => setErrormsg(null)}
                    onChangeText={(text) => setFdata({ ...fdata, salesmanName: text })}
                />
            </View>

            <View style={formgroup}>
                <Text style={label}>Invoice Amount</Text>
                <TextInput style={input} placeholder="Enter your Invoice Amount"
                    onPressIn={() => setErrormsg(null)}
                    keyboardType="numeric"
                    onChangeText={(text) => setFdata({ ...fdata, invoiceAmount: text })}
                />
            </View>

            <View style={formgroup}>
                <Text style={label}>Retailer Id</Text>
                <TextInput style={input} placeholder="Enter your Retailer Id"
                    onPressIn={() => setErrormsg(null)}
                    onChangeText={(text) => setFdata({ ...fdata, retailerId: text })}
                />
            </View>

            <View style={formgroup}>
                <Text style={label}>Retailer Name</Text>
                <TextInput style={input} placeholder="Enter your Retailer Name"
                    onPressIn={() => setErrormsg(null)}
                    onChangeText={(text) => setFdata({ ...fdata, retailerName: text })}
                />
            </View>

            <View style={formgroup}>
                <Text style={label}>Retailer Phone no</Text>
                <TextInput style={input} placeholder="Enter your Retailer Ph no"
                    onPressIn={() => setErrormsg(null)}
                    keyboardType="numeric"
                    onChangeText={(text) => setFdata({ ...fdata, retailerPhoneNo: text })}
                />
            </View>

            <View style={formgroup}>
                <Text style={label}>Invoice Date</Text>
                <TextInput style={input} placeholder="Enter Invoice date"
                    onPressIn={() => setErrormsg(null)}
                    onChangeText={(text) => setFdata({ ...fdata, invoiceDate: text })}
                />
            </View>

            <View style={formgroup}>
                <Text style={label}>Bill No.</Text>
                <TextInput style={input} placeholder="Enter your Bill No."
                    onPressIn={() => setErrormsg(null)}
                    onChangeText={(text) => setFdata({ ...fdata, billNo: text })}
                />
            </View>

            <View style={formgroup}>
                <Text style={label}>Pending Amount</Text>
                <TextInput style={input} placeholder="Enter your Pending Amount"
                    onPressIn={() => setErrormsg(null)}
                    keyboardType="numeric"
                    onChangeText={(text) => setFdata({ ...fdata, pendingAmount: text })}
                />
            </View>

            <View style={formgroup}>
                <Text style={label}>Collection Date</Text>
                <TextInput style={input} placeholder="Enter Collection date"
                        onPressIn={() => setErrormsg(null)}
                        onChangeText={(text) => setFdata({ ...fdata, collectionDate: text })}
                    />
            </View>



        <View style={styles.s1}>
            <TouchableOpacity
                onPress={()=>{navigation.navigate('invoice')}}
            >
        <Text style={cancel} >Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={submit}
            >
        <Text style={add}>Add</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>

    </View>
  )
}

export default AddInvoices

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
    },
    container1: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '90%',
        width: '100%',
    },
    s1: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
        marginBottom:100,
        marginTop:20,
    },
    small1: {
		marginTop: 20,
        fontSize: 20,
    }
    ,
    h1: {
        fontSize: 30,
        color:'#fff',

    },
    input: {
        height: 40,
        width:'50%',
        borderWidth: 1,
      },
    s2: {
        display: 'flex',
        backgroundColor: '#fff',
        width: '100%',
        height: '90%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,

    },
})