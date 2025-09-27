import { ButtonVoltar } from "@/src/components/buttonsComponent/buttons";
import { Head } from "@/src/components/headComponent/head";
import { Alert, ScrollView, Text } from "react-native";
import { Styles } from "./styles";

export const Contato = () => {
    const handlePress = () => {
        Alert.alert('Botão Pressionado!', 'A ação do beneficiário seria iniciada aqui.');
    };
    return(
            <ScrollView 
                    style={Styles.scrollView}
                    contentContainerStyle={Styles.container}>
                <Head/>
        
                <Text style={Styles.headText}>Fale com a gente,
                    {'\n'}
                    entre em  <Text style={Styles.textDestacadosYellow}>contato!</Text>
                </Text>
        
                <Text style={Styles.bodyText}>Dona Jacira está sempre disponível para atender e esclarecer dúvidas sobre a ONG, seja para doações, cadastro de beneficiários, ou qualquer outra questão relacionada ao nosso trabalho. Existem duas formas principais de entrar em contato:</Text>
        
                <Text style={Styles.bodyText}><Text style={Styles.textDestacadosYellow}>
                    ◉ Telefone de Contato: (11) 97254-7074

                    ◉ CNPJ: 18.236.120/0001-58

                    ◉ E-mail: donaJacira443@gmail.com
                    ◉ Horário de Atendimento: Segunda a sexta, das 9h às 17h</Text></Text>
        
                <Text style={Styles.bodyText}>Se preferir, você também pode visitar a nossa sede para falar diretamente com Dona Jacira. Ela recebe beneficiários e doadores pessoalmente, sempre com muita atenção e carinho.</Text>
        
                <Text style={Styles.bodyText}>Para aqueles que desejam fazer uma doação monetária, temos duas opções seguras para sua contribuição:</Text>
        
                <Text style={Styles.bodyText}><Text style={Styles.textDestacadosYellow}>
                    ◉ Endereço:</Text>
                    R. Paulo Augusto de Andrade, 355 - Jardim Sao Judas Tadeu
                </Text>
        
                <Text style={Styles.bodyText}><Text style={Styles.textDestacadosYellow}>
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