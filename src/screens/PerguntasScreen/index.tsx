import { Head } from "@/src/components/headComponent/head";
import { ScrollView, Text, View } from "react-native";
import { Styles } from "./styles";

export const Perguntas = () => {
    return (
        <ScrollView 
            style={Styles.scrollView}
            contentContainerStyle={Styles.container}>
        <Head/>

        <Text style={Styles.headText}>FAQ - Perguntas <Text style={Styles.textDestacadosYellow}>Frequentes</Text>
        </Text>
        
        <View style={Styles.itensView}>
            <Text style={Styles.itensText}>1. Quem pode se cadastrar para receber leite?</Text>
            <Text style={Styles.itensText}>Famílias que possuam crianças de até 6 anos e 11 meses e que estejam cadastradas no CRAS com renda de até 2 salários mínimos.</Text>

            <Text style={Styles.itensText}>2. Como faço o cadastro para receber o benefício?</Text>
            <Text style={Styles.itensText}>É necessário comparecer ao CRAS da sua região, levar os documentos exigidos e solicitar o encaminhamento para o projeto. Depois disso, é só apresentar a documentação na ONG.</Text>

            <Text style={Styles.itensText}>3. Posso doar em pequenas quantidades?</Text>
            <Text style={Styles.itensText}>Sim! Toda doação é bem-vinda, seja de 1 litro de leite, roupas, alimentos ou valores financeiros. Pequenos gestos fazem uma grande diferença.</Text>

            <Text style={Styles.itensText}>4. Como sei que minha doação chegou até a ONG?</Text>
            <Text style={Styles.itensText}>Assim que a doação é recebida, ela é registrada e destinada para as famílias atendidas. Você pode entrar em contato pelo WhatsApp da ONG para confirmar a chegada da sua contribuição.</Text>

            <Text style={Styles.itensText}>5. Posso me voluntariar para ajudar?</Text>
            <Text style={Styles.itensText}>Claro! Você pode ajudar na distribuição de alimentos, nas aulas de crochê ou em outras atividades. Basta entrar em contato conosco para mais informações.</Text>

            <Text style={Styles.itensText}>6. Onde encontro os dados para doação em dinheiro?</Text>
            <Text style={Styles.itensText}>Você pode doar via PIX ou depósito bancário. Os dados completos estão na seção “Doe Agora” do site.</Text>
        </View>

        </ScrollView>
        
    )
}

