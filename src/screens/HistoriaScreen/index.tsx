import { ButtonVoltar } from "@/src/components/buttonsComponent/buttons";
import { Head } from "@/src/components/headComponent/head";
import { Alert, Image, ScrollView, Text } from "react-native";
import { Styles } from "./styles";

export const Historia = () => {
    const handlePress = () => {
        Alert.alert('Botão Pressionado!', 'A ação do beneficiário seria iniciada aqui.');
    };
    return (
        <ScrollView 
            style={Styles.scrollView}
            contentContainerStyle={Styles.container}>
        <Head/>

        <Text style={Styles.headText}>Um pouco de história
            {'\n'} da Ong e de nossa
            {'\n'} querida <Text style={Styles.textDestacadosYellow}>Jacira!</Text>
        </Text>

        <Text style={Styles.bodyText}>Dona Jacira, aos 85 anos, é o coração e a alma da nossa ONG. Com uma trajetória de mais de cinco décadas, ela dedica seu tempo e sua energia para garantir que famílias carentes tenham acesso ao leite que tanto precisam. Sua jornada começou em 1972, quando, ao presenciar injustiças na distribuição de doações, decidiu fazer algo para mudar essa realidade. Dois anos depois, em 1974, ela fundou a ONG que até hoje continua sendo um porto seguro para quem mais precisa.</Text>

        <Image
            style={Styles.imagens}
            source={require('../../screens/images/DonaJacira.jpg')}
        />

        <Text style={Styles.bodyText}>Além de distribuir leite, Dona Jacira cria oportunidades para quem deseja aprender. Em sua ONG, ela ensina crochê para pessoas de todas as idades, criando um espaço de convivência e aprendizado. Essas aulas de crochê não só fortalecem laços entre os participantes, mas também oferecem uma forma de terapia e geração de renda para muitos.</Text>

        <Text style={Styles.bodyText}>Ela também lidera iniciativas para arrecadar doações de roupas, alimentos e recursos financeiros, visitando empresas e distribuindo folhetos para conscientizar a comunidade. Mesmo com a idade avançada, ela não mede esforços para garantir que o projeto continue funcionando e que mais pessoas sejam beneficiadas.</Text>

        <Image
            style={Styles.imagens}
            source={require('../../screens/images/Ong.png')}
        />

        <Text style={Styles.bodyText}>Dona Jacira acredita que a verdadeira mudança vem do apoio mútuo e da empatia. Através de sua ONG, ela oferece mais do que leite e aulas: ela oferece esperança, dignidade e uma rede de suporte para aqueles que mais precisam. Se você quer fazer parte dessa corrente do bem, seja se cadastrando para receber o benefício ou contribuindo com doações, está no lugar certo.</Text>

        <Text style={Styles.bodyText}>Aqui, cada gesto conta, cada doação transforma, e cada abraço acolhe. Com amor e dedicação, Dona Jacira inspira uma comunidade inteira a cuidar uns dos outros, com o coração aberto. Sua missão vai além do alimento: ela nutre sonhos, fortalece laços e planta sementes de um futuro mais humano e justo. Venha fazer parte dessa caminhada e descubra como pequenos atos podem gerar grandes mudanças.</Text>

        <ButtonVoltar
            titulo = 'Voltar'
            onPress = {handlePress}
        />

        </ScrollView>
        
    )
}

