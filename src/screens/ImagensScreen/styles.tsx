import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#7D9D87',
    },
    container: {
        alignItems: 'center',
        paddingHorizontal: '5%',
        paddingBottom: 40,
    },
    headText: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
    textDestacadosYellow: {
        color: '#F6FD32',
    },

    imageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
    },
    
    imageHalf: {
        width: '49%', 
        height: 180,
        borderRadius: 8,
        resizeMode: 'cover', 
    },
    
    imageFull: {
        width: '100%',
        height: 200, 
        borderRadius: 8,
        marginTop: 10,
        resizeMode: 'cover', 
    },

    button: {
        backgroundColor: '#F6FD32',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 30,
        marginTop: 30,
    },
    buttonText: {
        color: '#3A4A3F',
        fontSize: 18,
        fontWeight: 'bold',
    }
});