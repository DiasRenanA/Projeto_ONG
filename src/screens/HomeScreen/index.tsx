import { ButtonBig, ButtonMenu } from "@/src/components/buttonsComponent/buttons"
import { Head } from "@/src/components/headComponent/head"
import { router } from "expo-router"
import { Alert, ScrollView, Text, View } from "react-native"
import { Styles } from "./styles"

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

    const irParaHistoria = () => {
        router.push('/historia');
    };

    const irParaImagens = () => {
        router.push('/imagens');
    };

    const irParaResultados = () => {
        router.push('/resultados');
    };

    const irParaFeedBack = () => {
        router.push('/feedBack');
    };

    const irParaPerguntas = () => {
        router.push('/perguntas');
    };

    return (
        <ScrollView 
            style={Styles.scrollView}
            contentContainerStyle={Styles.container}>
            <Head/>

            <Text style={Styles.headText}>Venha conhecer 
                {'\n'}
                essa <Text style={Styles.textDestacadosYellow}>familia!</Text>
            </Text>

            <Text style={Styles.bodyText}>Com um coração generoso e uma dedicação incansável, Dona Jacira transforma cada gota de leite em uma verdadeira fonte de esperança. Seu trabalho vai além da simples doação; ela aquece corações, nutre almas e constrói, com cada ação, um futuro mais solidário e inclusivo para todos.</Text>

            <Text style={Styles.bodyText}>Dona Jacira acredita profundamente que a verdadeira transformação social surge do apoio mútuo, da empatia genuína e da união entre as pessoas. Se você quer fazer parte dessa corrente do bem, seja se cadastrando para receber o benefício ou contribuindo com doações, está no lugar certo. Junte-se a nós e ajude a multiplicar essa história de <Text style={Styles.textDestacadosYellow}>solidariedade.</Text></Text>

            <ButtonBig
                titulo="Ser Beneficiário" 
                onPress={irParaBeneficiario} 
            />

            <Text style={{textAlign:'center', fontSize: 15, color: '#fff', paddingVertical:10}}>ou</Text>

            <ButtonBig
                titulo="Fazer doação" 
                onPress={irParaDoacao} 
            >
            </ButtonBig>  

            <View style={Styles.linha} />

            <View style={Styles.ButtonsMenu}>
                <ButtonMenu
                    titulo="Contato" 
                    onPress={irParaContato} 
                />

                <ButtonMenu
                    titulo="História" 
                    onPress={irParaHistoria} 
                />

                <ButtonMenu
                    titulo="Imagens" 
                    onPress={irParaImagens} 
                />

                <ButtonMenu
                    titulo="Resultados" 
                    onPress={irParaResultados} 
                />

                <ButtonMenu
                    titulo="Comentários" 
                    onPress={irParaFeedBack} 
                />

                <ButtonMenu
                    titulo="Perguntas" 
                    onPress={irParaPerguntas} 
                />
            </View>
        </ScrollView >
        
    )
}

const handlePress = () => {
    Alert.alert('Botão Pressionado!', 'A ação do beneficiário seria iniciada aqui.');
};