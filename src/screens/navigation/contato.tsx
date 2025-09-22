import { ButtonVoltar } from "@/src/components/buttons";
import { Head } from "@/src/components/head";
import { Alert, ScrollView, StyleSheet, Text } from "react-native";

export const Contato = () => {
    const handlePress = () => {
        Alert.alert('Botão Pressionado!', 'A ação do beneficiário seria iniciada aqui.');
    };
    return(
                <ScrollView 
                    style={styles.scrollView}
                    contentContainerStyle={styles.container}>
                <Head/>
        
                <Text style={styles.headText}>Fale com a gente,
                    {'\n'}
                    entre em  <Text style={styles.textDestacadosYellow}>contato!</Text>
                </Text>
        
                <Text style={styles.bodyText}>Dona Jacira está sempre disponível para atender e esclarecer dúvidas sobre a ONG, seja para doações, cadastro de beneficiários, ou qualquer outra questão relacionada ao nosso trabalho. Existem duas formas principais de entrar em contato:</Text>
        
                <Text style={styles.bodyText}><Text style={styles.textDestacadosYellow}>
                    ◉ Telefone de Contato: (11) 97254-7074

                    ◉ CNPJ: 18.236.120/0001-58

                    ◉ E-mail: donaJacira443@gmail.com
                    ◉ Horário de Atendimento: Segunda a sexta, das 9h às 17h</Text></Text>
        
                <Text style={styles.bodyText}>Se preferir, você também pode visitar a nossa sede para falar diretamente com Dona Jacira. Ela recebe beneficiários e doadores pessoalmente, sempre com muita atenção e carinho.</Text>
        
                <Text style={styles.bodyText}>Para aqueles que desejam fazer uma doação monetária, temos duas opções seguras para sua contribuição:</Text>
        
                <Text style={styles.bodyText}><Text style={styles.textDestacadosYellow}>
                    ◉ Endereço:</Text>
                    R. Paulo Augusto de Andrade, 355 - Jardim Sao Judas Tadeu
                </Text>
        
                <Text style={styles.bodyText}><Text style={styles.textDestacadosYellow}>
                    ◉ Horário de Atendimento </Text>
                    Presencial: Segunda a sexta, das 8h às 17h
                </Text>
        
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