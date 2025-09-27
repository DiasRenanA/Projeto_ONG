import { ButtonVoltar } from "@/src/components/buttonsComponent/buttons";
import { Head } from "@/src/components/headComponent/head";
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { Styles } from "./styles";

export const Resultados = () => {
    const handlePress = () => {
        Alert.alert('Botão Pressionado!', 'A ação do beneficiário seria iniciada aqui.');
    };
    return (
        <ScrollView 
            style={Styles.scrollView}
            contentContainerStyle={Styles.container}>
        <Head/>

        <Text style={Styles.headText}>Nossos <Text style={Styles.textDestacadosYellow}>Resultados!</Text>
        </Text>

        <Text style={Styles.bodyText}>
            Por isso, compartilhamos alguns dos nossos resultados:
        </Text>

        <View style={Styles.itensView}>
            <Text style={Styles.itensText}>• 🍼 Litros de leite distribuídos: 120 por mês</Text>
            <Text style={Styles.itensText}>• 👨‍👩‍👧‍👦 Famílias beneficiadas: 45</Text>
            <Text style={Styles.itensText}>• 🙌 Voluntários ativos: 12</Text>
            <Text style={Styles.itensText}>• 💖 Anos de dedicação: mais de 10</Text>
        </View>

        <Image
            style={Styles.imagens}
            source={require('../../screens/images/grafico.png')}
        />

        <Text style={Styles.bodyText}>Cada número aqui representa vidas transformadas e histórias de esperança. Com sua ajuda, podemos ir ainda mais longe!</Text>


        <ButtonVoltar
            titulo = 'Voltar'
            onPress = {handlePress}
        />

        </ScrollView>
        
    )
}

