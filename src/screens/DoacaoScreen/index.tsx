import { Head } from "@/src/components/headComponent/head";
import { ScrollView, Text, View } from "react-native";
import { Styles } from "./styles";

export const Doacao = () => {
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

        <View style={Styles.h2Container}>
            <Text style={Styles.h2Text}>Doação de Roupas e Alimentos</Text>
        </View>

        <Text style={Styles.bodyText}>Você pode doar roupas, alimentos não perecíveis e outros itens essenciais diretamente na sede da nossa ONG. Sua contribuição vai para as famílias que mais precisam e ajuda a manter a comunidade que atendemos</Text>

        <Text style={Styles.bodyText}>As doações podem ser entregues no endereço:<Text style={Styles.textDestacadosYellow}> R. Paulo Augusto de Andrade, 355 - Jardim Sao Judas Tadeu de segunda a sexta-feira, das 8h às 17h.</Text></Text>

        <View style={Styles.h2Container}>
            <Text style={Styles.h2Text}>Doação em Dinheiro</Text>
        </View>

        <Text style={Styles.bodyText}>Para aqueles que desejam fazer uma doação monetária, temos duas opções seguras para sua contribuição:</Text>

        <View style={Styles.listContainer}>
            <Text style={Styles.bodyText}><Text style={Styles.textDestacadosYellow}>• Via PIX: </Text>Para doar pelo PIX, basta usar a nossa chave: </Text>
                <View style={Styles.subListContainer}>
                    <Text style={Styles.bodyText}>• Chave PIX: {'\n'}
                        a4f89b7d-3e29-47ab-9c2d-e123f0a45678</Text>
                </View>
            
            <Text style={Styles.bodyText}><Text style={Styles.textDestacadosYellow}>• Depósito ou Transferência Bancária: {'\n'}</Text>
                <View style={Styles.subListContainer}>
                    <Text>• Banco: 0000</Text>
                    <Text>• Agência: 0000</Text>
                    <Text>• Conta Corrente: 000000-00 </Text>
                    <Text>• Titular: Jacira</Text>
                </View>
            </Text>
        </View>

        <Text style={Styles.bodyText}>Cada contribuição é um passo a mais para manter viva a missão da Dona Jacira e da nossa ONG. Agradecemos imensamente sua generosidade!</Text>

        </ScrollView>
        
    )
}

