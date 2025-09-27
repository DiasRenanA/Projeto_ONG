import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#7D9D87',
    },

    container: {
        alignItems: 'center',
    },

    headText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 18,
        marginBottom: 10,
        textAlign: 'center',
    },

    bodyText: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'center',
        paddingHorizontal: 35,
        marginBottom: 20
    },

    textDestacadosYellow: {
        color: '#F6FD32',
    },

    linha: {
        marginVertical: 20,
        height: 3,                   
        width: '80%',                
        backgroundColor: '#FFFFFF', 
        borderRadius: 5,           
    },

    ButtonsMenu: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '90%',
        justifyContent: 'center',
        gap: 10,
        marginBottom: 30
    }
})