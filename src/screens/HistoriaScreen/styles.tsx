import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#7D9D87',
    },

    container: {
        alignItems: 'center',
        paddingHorizontal: '10%',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
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
        textAlign: 'left',
    },

    textDestacadosYellow: {
        color: '#F6FD32',
    },

    ButtonsMenu: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '90%',
        justifyContent: 'center',
        gap: 10,
        marginBottom: 30,
    },

    imagens: {
        width: '100%',
        height: '30%',
        resizeMode: 'contain'
    },

})