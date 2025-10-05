import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#7D9D87',
    },

    container: {
        alignItems: 'center',
        paddingHorizontal: '10%',
        paddingBottom: 20,
    },

    headText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        paddingVertical: 10,
    },

    itensView:{
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '5%',
        gap: 10,
        paddingBottom: 20
    },

    itensText:{
        color: '#fff',
        flex: 1,
    },

    textDestacadosYellow: {
        color: '#F6FD32',
    },

    bodyText: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'left',
        marginBottom: 20
    },

    boxInputContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 4,               
        borderColor: '#F6FD32',
        borderRadius: 30,
        padding: 15,
        gap: 10,
        marginBottom: 30,
    },

    boxInputText:{
        fontSize: 15,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600',
    },

    boxInputInput:{
        backgroundColor: '#fff',
        borderWidth: 1,               
        borderColor: '#000',
        borderRadius: 20,
        padding: 5,
        textAlign:'center',
        width: '80%',
    }
})