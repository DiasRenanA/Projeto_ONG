import { ButtonVoltar } from "@/src/components/buttons";
import { Head } from "@/src/components/head";
import { Alert, ScrollView, StyleSheet, Text } from "react-native";

export const Doacao = () => {
    const handlePress = () => {
        Alert.alert('Botão Pressionado!', 'A ação do beneficiário seria iniciada aqui.');
    };
    return (
        <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={styles.container}>
        <Head/>

        <Text style={styles.headText}>Você gostaria de
            {'\n'}
            ajudar a nossa <Text style={styles.textDestacadosYellow}>ONG?</Text>
        </Text>

        <Text style={styles.bodyText}>A nossa ONG depende da generosidade de pessoas como você para continuar levando leite e assistência a tantas famílias e idosos necessitados. Existem diversas formas de contribuir com o nosso trabalho e cada ajuda faz uma enorme diferença.</Text>

        <Text style={styles.bodyText}>Doação de Roupas e Alimentos</Text>

        <Text style={styles.bodyText}>Você pode doar roupas, alimentos não perecíveis e outros itens essenciais diretamente na sede da nossa ONG. Sua contribuição vai para as famílias que mais precisam e ajuda a manter a comunidade que atendemos</Text>

        <Text style={styles.bodyText}>As doações podem ser entregues no endereço:<Text style={styles.textDestacadosYellow}>R. Paulo Augusto de Andrade, 355 - Jardim Sao Judas Tadeu de segunda a sexta-feira, das 8h às 17h.</Text></Text>

        <Text style={styles.bodyText}>Doação em Dinheiro</Text>

        <Text style={styles.bodyText}>Para aqueles que desejam fazer uma doação monetária, temos duas opções seguras para sua contribuição:</Text>

        <Text style={styles.bodyText}><Text style={styles.textDestacadosYellow}>
            Via PIX: Para doar pelo PIX, basta usar a nossa chave:
            Chave PIX: a4f89b7d-3e29-47ab-9c2d-e123f0a45678
            Depósito ou Transferência Bancária: 
            Banco: 0000
            Agência: 0000
            Conta Corrente: 000000-00
            Titular: Jacira
        </Text>
        </Text>

        <Text style={styles.bodyText}>Cada contribuição é um passo a mais para manter viva a missão da Dona Jacira e da nossa ONG. Agradecemos imensamente sua generosidade!</Text>

        <ButtonVoltar
            titulo = 'Voltar'
            onPress = {handlePress}
        />

        </ScrollView>
        
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