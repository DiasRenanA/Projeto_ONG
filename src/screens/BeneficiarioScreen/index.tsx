import { Head } from "@/src/components/headComponent/head";
import axios from 'axios';
import { useState } from "react";
import { Alert, Image, ScrollView, Text, TextInput, View } from "react-native";
import { Styles } from "./styles";

export const Beneficiario = () =>{

    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState(null);
    const [texto, setTexto] = useState('');

    const buscarCep = async () => {
        setTexto('');
        setEndereco(null);

        if (cep.length !== 8) {
            Alert.alert('Erro', 'O CEP deve conter 8 dígitos.');
            return;
        }

        try{
            await axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
                const {data} = response;
                console.log('RESPOSTA API', data.bairro);
                if (data.erro) {
                    setTexto('CEP não encontrado');
                } else {
                    if (data.bairro == 'Jardim São Judas Tadeu'){
                        setTexto("Esse CEP é atendido pela ONG!");
                    } else {
                        setTexto("Esse CEP não é atendido pela ONG!");
                    }
                }
            })
        }catch (error){
            Alert.alert('Erro', 'Houve um problema ao se conectar com a API.');
        }
        

    }


    return (
        <ScrollView 
            style={Styles.scrollView}
            contentContainerStyle={Styles.container}>
            <Head/>

            <Text style={Styles.headText}>Quer se cadastrar? 
                {'\n'}
                Então venha, é <Text style={Styles.textDestacadosYellow}>fácil!</Text>
            </Text>

            <View style={Styles.boxInputContainer}>
                <Text style={Styles.boxInputText}>Antes de começar, vamos saber se seu  <Text style={Styles.textDestacadosYellow}>CEP</Text> está no raio de doação da ONG?
                </Text>

                <TextInput
                    style={Styles.boxInputInput}
                    value={cep}
                    placeholder="Digite seu cep aqui:"
                    onChangeText={setCep}
                    keyboardType="numeric"
                    maxLength={8}

                >

                </TextInput>

                <button style={{backgroundColor: '#7d9d87', border: 'none'}} onClick={buscarCep}>
                    <Image source={require('../../screens/images/ok_icon.svg')}/>
                </button>

                <Text style={Styles.boxInputText}>
                    {texto}
                </Text>

            </View>

            <Text style={Styles.bodyText}>Para receber o benefício de distribuição de leite pela nossa ONG, o processo de cadastro é simples e feito em parceria com o CRAS (Centro de Referência de Assistência Social). Siga os passos abaixo para garantir que você ou sua família sejam elegíveis para o programa:</Text>

            <Text style={Styles.bodyText}><Text style={Styles.textDestacadosYellow}>1. Vá até o CRAS mais próximo: </Text>Para se cadastrar, é necessário comparecer ao CRAS da sua região e fazer o cadastro social. Eles irão avaliar sua situação e fornecer um documento que comprova sua elegibilidade</Text>

            <Text style={Styles.bodyText}><Text style={Styles.textDestacadosYellow}>2. Envie seu documento para a Dona Jacira: </Text>Após realizar o cadastro no CRAS, envie uma cópia do documento que você recebeu para nossa ONG. Isso pode ser feito pessoalmente ou através do nosso formulário de pré-cadastro online. Caso você ja possua esse documento o processo de envio é o mesmo.</Text>

            <Text style={Styles.bodyText}><Text style={Styles.textDestacadosYellow}>3. Aguarde a aprovação: </Text>A equipe da ONG enviará seus dados ao governo para verificar se você atende aos critérios de renda e idade:</Text>

            <View style={Styles.itensView}>
                <Text style={Styles.itensText}>◉ Famílias com renda de até dois salários mínimos.</Text>
                <Text style={Styles.itensText}>◉ Crianças de até 6 anos.</Text>
                <Text style={Styles.itensText}>◉ Idosos com 60 anos ou mais, recebendo até um salário mínimo.</Text>
                <Text style={Styles.itensText}>◉ Importante: Idosos aposentados não são elegíveis para o benefício.</Text>
            </View>

            <Text style={Styles.bodyText}><Text style={Styles.textDestacadosYellow}>4. Acompanhe sua inscrição: </Text>Se essa for sua primeira vez, você receberá a confirmação do cadastro por telefone. Lembre-se, é importante levar sua carteirinha toda vez que for retirar o leite.</Text>

        </ScrollView>
        
    )
}

