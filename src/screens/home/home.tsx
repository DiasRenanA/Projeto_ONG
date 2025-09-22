import { ButtonBig, ButtonMenu } from "@/src/components/buttons"
import { Head } from "@/src/components/head"
import { router } from "expo-router"
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native"


export const Home = () => {
    const irParaBeneficiario = () => {
        router.push('/beneficiario');
    };

    const irParaDoacao = () => {
        router.push('/doacao');
    };

    const irParaContato = () => {
        router.push('/contato');
    };

    return (
        <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={styles.container}>
            <Head/>

            <Text style={styles.headText}>Venha conhecer 
                {'\n'}
                essa <Text style={styles.textDestacadosYellow}>familia!</Text>
            </Text>

            <Text style={styles.bodyText}>Com um coração generoso e uma dedicação incansável, Dona Jacira transforma cada gota de leite em uma verdadeira fonte de esperança. Seu trabalho vai além da simples doação; ela aquece corações, nutre almas e constrói, com cada ação, um futuro mais solidário e inclusivo para todos.</Text>

            <Text style={styles.bodyText}>Dona Jacira acredita profundamente que a verdadeira transformação social surge do apoio mútuo, da empatia genuína e da união entre as pessoas. Se você quer fazer parte dessa corrente do bem, seja se cadastrando para receber o benefício ou contribuindo com doações, está no lugar certo. Junte-se a nós e ajude a multiplicar essa história de <Text style={styles.textDestacadosYellow}>solidariedade.</Text></Text>

            <ButtonBig
                titulo="Quero Doar" 
                onPress={irParaBeneficiario} 
            />

            <Text style={{textAlign:'center', fontSize: 15, color: '#fff', paddingVertical:10}}>ou</Text>

            <ButtonBig
                titulo="Fazer doação" 
                onPress={irParaDoacao} 
            >
            </ButtonBig>  

            <View style={styles.linha} />

            <View style={styles.ButtonsMenu}>
                <ButtonMenu
                    titulo="Contato" 
                    onPress={irParaContato} 
                />

                <ButtonMenu
                    titulo="História" 
                    onPress={handlePress} 
                />

                <ButtonMenu
                    titulo="Imagens" 
                    onPress={handlePress} 
                />

                <ButtonMenu
                    titulo="Resultados" 
                    onPress={handlePress} 
                />

                <ButtonMenu
                    titulo="Comentários" 
                    onPress={handlePress} 
                />

                <ButtonMenu
                    titulo="Perguntas" 
                    onPress={handlePress} 
                />
            </View>

            

        </ScrollView >
        
    )
}

const styles = StyleSheet.create({
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

const handlePress = () => {
    Alert.alert('Botão Pressionado!', 'A ação do beneficiário seria iniciada aqui.');
};