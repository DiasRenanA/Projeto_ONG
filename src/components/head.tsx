import { Image, StyleSheet, Text, View } from "react-native"

export const Head = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>ONG</Text>
            <Image
                style={styles.logo}
                source={require('../screens/images/Logo.png')}
            />
            <Text style={styles.texto}>Jacira</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    logo: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
  }
})