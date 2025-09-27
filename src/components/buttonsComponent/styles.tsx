import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    buttonBig: {
        backgroundColor: '#F6FD32',
        paddingVertical: 15,      
        paddingHorizontal: 40,
        borderRadius: 50,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    textButtonBig: {
        color: '#46584C',    
        fontSize: 18,
        fontWeight: 'bold',
    },

    buttonMenu: {
        backgroundColor: '#fff',
        borderWidth: 6,               
        borderColor: '#CCFF00',
        borderRadius: 50,
        paddingVertical:10,
        paddingHorizontal:20,
        width: '40%',
        height: '30%',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    textButtonMenu: {
        color: '#7D9D87',    
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',  
    },

    buttonVoltar: {
        backgroundColor: '#F6FD32',
        paddingVertical: 15,      
        paddingHorizontal: 40,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    textButtonVoltar: {
        color: '#46584C',    
        fontSize: 18,
        fontWeight: 'bold',
    }
})