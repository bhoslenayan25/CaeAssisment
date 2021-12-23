import { StyleSheet } from 'react-native';
 
export default StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    tabStyle:{ flex:1,justifyContent:'center',alignItems:'center',paddingVertical:10,},
    row:{ flexDirection: 'row', alignItems: 'center', padding: 15, borderBottomWidth: 1, borderColor: 'grey' },
    text: { marginLeft: 15, color: '#000', fontWeight: 'bold' },
    flightText: { flex: 1, marginLeft: 15, color: '#000', fontWeight: 'bold' },
    departure: { marginLeft: 15, color: 'red' },
    headerDate:{ padding: 10, backgroundColor: '#f3f3f3', borderBottomWidth: 1, borderColor: 'grey'} ,
    date:{ fontWeight: 'bold', color: '#000' }
});
