import { ButtonVoltar } from "@/src/components/buttons";
import { Head } from "@/src/components/head";
import { Alert, ScrollView, StyleSheet, Text } from "react-native";

export const Beneficiario = () =>{
    const handlePress = () => {
        Alert.alert('Botão Pressionado!', 'A ação do beneficiário seria iniciada aqui.');
    };
    return (
        <ScrollView 
            style={styles.scrollView}
            contentContainerStyle={styles.container}>
        <Head/>

        <Text style={styles.headText}>Quer se cadastrar? 
            {'\n'}
            Então venha, é <Text style={styles.textDestacadosYellow}>fácil!</Text>
        </Text>

        <Text style={styles.bodyText}>Para receber o benefício de distribuição de leite pela nossa ONG, o processo de cadastro é simples e feito em parceria com o CRAS (Centro de Referência de Assistência Social). Siga os passos abaixo para garantir que você ou sua família sejam elegíveis para o programa:</Text>

        <Text style={styles.bodyText}><Text style={styles.textDestacadosYellow}>1. Vá até o CRAS mais próximo:</Text>Para se cadastrar, é necessário comparecer ao CRAS da sua região e fazer o cadastro social. Eles irão avaliar sua situação e fornecer um documento que comprova sua elegibilidade</Text>

        <Text style={styles.bodyText}><Text style={styles.textDestacadosYellow}>2. Envie seu documento para a Dona Jacira:</Text>Após realizar o cadastro no CRAS, envie uma cópia do documento que você recebeu para nossa ONG. Isso pode ser feito pessoalmente ou através do nosso formulário de pré-cadastro online. Caso você ja possua esse documento o processo de envio é o mesmo.</Text>

        <Text style={styles.bodyText}><Text style={styles.textDestacadosYellow}>3. Aguarde a aprovação:</Text>A equipe da ONG enviará seus dados ao governo para verificar se você atende aos critérios de renda e idade:</Text>

        <Text style={styles.bodyText}><Text style={styles.textDestacadosYellow}>
            ◉ Famílias com renda de até dois salários mínimos.
            ◉ Crianças de até 6 anos.
            ◉ Idosos com 60 anos ou mais, recebendo até um salário mínimo.
            ◉ Importante: Idosos aposentados não são elegíveis para o benefício.</Text>
        </Text>

        <Text style={styles.bodyText}><Text style={styles.textDestacadosYellow}>4. Acompanhe sua inscrição:</Text>Se essa for sua primeira vez, você receberá a confirmação do cadastro por telefone. Lembre-se, é importante levar sua carteirinha toda vez que for retirar o leite.</Text>

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

    textDestacadosYellow: {
        color: '#F6FD32',
    },

    bodyText: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'center',
        paddingHorizontal: 35,
        marginBottom: 20
    }
})

