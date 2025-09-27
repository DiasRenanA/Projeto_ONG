import { ButtonVoltar } from "@/src/components/buttonsComponent/buttons";
import { Head } from "@/src/components/headComponent/head";
import { Alert, ScrollView, Text, View } from "react-native";
import { Styles } from "./styles";

export const FeedBack = () => {
    const handlePress = () => {
        Alert.alert('Botão Pressionado!', 'A ação do beneficiário seria iniciada aqui.');
    };
    return (
        <ScrollView 
            style={Styles.scrollView}
            contentContainerStyle={Styles.container}>
        <Head/>

        <Text style={Styles.headText}>Nossos <Text style={Styles.textDestacadosYellow}>depoimentos!</Text>
        </Text>
        
        <View style={Styles.itensView}>
            <Text style={Styles.itensText}>📌 Depoimentos</Text>
            <Text style={Styles.itensText}>1. Maria Silva - Mãe beneficiada"Graças à ONG, meu filho nunca ficou sem leite. Eles realmente se importam com a nossa família!"</Text>
            <Text style={Styles.itensText}>2. João Pereira - Voluntário"Participar da entrega de leite e das aulas de crochê me fez perceber como pequenas ações podem transformar vidas. Também gostei muito de fazer as bonequinhas!"</Text>
            <Text style={Styles.itensText}>3. Ana Costa - Mãe beneficiada"As doações chegaram na hora certa e ajudaram muito minha família. Sou muito grata por essa ajuda."</Text>
            <Text style={Styles.itensText}>4. Lucas Fernandes - Voluntário"Ver o sorriso das crianças ao receber o leite é a    melhor recompensa. Recomendo a todos que queiram ajudar."</Text>
            <Text style={Styles.itensText}>5. Dona Jacira - Fundadora da ONG
            "Cada gota de leite, cada fio de crochê e cada sorriso recebido faz meu coração feliz. Estamos juntos nessa missão!"</Text>
        </View>

        <ButtonVoltar
            titulo = 'Voltar'
            onPress = {handlePress}
        />

        </ScrollView>
        
    )
}

