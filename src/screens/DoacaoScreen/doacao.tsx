import { ButtonVoltar } from "@/src/components/buttonsComponent/buttons";
import { Head } from "@/src/components/headComponent/head";
import { Alert, ScrollView, Text } from "react-native";
import { Styles } from "./styles";

export const Doacao = () => {
    const handlePress = () => {
        Alert.alert('Botão Pressionado!', 'A ação do beneficiário seria iniciada aqui.');
    };
    return (
        <ScrollView 
            style={Styles.scrollView}
            contentContainerStyle={Styles.container}>
        <Head/>

        <Text style={Styles.headText}>Você gostaria de
            {'\n'}
            ajudar a nossa <Text style={Styles.textDestacadosYellow}>ONG?</Text>
        </Text>

        <Text style={Styles.bodyText}>A nossa ONG depende da generosidade de pessoas como você para continuar levando leite e assistência a tantas famílias e idosos necessitados. Existem diversas formas de contribuir com o nosso trabalho e cada ajuda faz uma enorme diferença.</Text>

        <Text style={Styles.bodyText}>Doação de Roupas e Alimentos</Text>

        <Text style={Styles.bodyText}>Você pode doar roupas, alimentos não perecíveis e outros itens essenciais diretamente na sede da nossa ONG. Sua contribuição vai para as famílias que mais precisam e ajuda a manter a comunidade que atendemos</Text>

        <Text style={Styles.bodyText}>As doações podem ser entregues no endereço:<Text style={Styles.textDestacadosYellow}>R. Paulo Augusto de Andrade, 355 - Jardim Sao Judas Tadeu de segunda a sexta-feira, das 8h às 17h.</Text></Text>

        <Text style={Styles.bodyText}>Doação em Dinheiro</Text>

        <Text style={Styles.bodyText}>Para aqueles que desejam fazer uma doação monetária, temos duas opções seguras para sua contribuição:</Text>

        <Text style={Styles.bodyText}><Text style={Styles.textDestacadosYellow}>
            Via PIX: Para doar pelo PIX, basta usar a nossa chave:
            Chave PIX: a4f89b7d-3e29-47ab-9c2d-e123f0a45678
            Depósito ou Transferência Bancária: 
            Banco: 0000
            Agência: 0000
            Conta Corrente: 000000-00
            Titular: Jacira
        </Text>
        </Text>

        <Text style={Styles.bodyText}>Cada contribuição é um passo a mais para manter viva a missão da Dona Jacira e da nossa ONG. Agradecemos imensamente sua generosidade!</Text>

        <ButtonVoltar
            titulo = 'Voltar'
            onPress = {handlePress}
        />

        </ScrollView>
        
    )
}

