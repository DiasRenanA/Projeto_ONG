import { Head } from "@/src/components/headComponent/head";
import { Image, ScrollView, Text, View } from "react-native";
import { Styles } from "./styles";

// Para o exemplo, vou usar a mesma imagem várias vezes. 
// Substitua pelos seus caminhos corretos.
const bonecaRosa = require('../../screens/images/bonecarosa.jpg');
const donaJacira = require('../../screens/images/DonaJacira.jpg');
const desastre = require('../../screens/images/Ong.png');
const turma = require('../../screens/images/turma.jpg');
const comunidade = require('../../screens/images/comunidade.jpg');

export const Imagens = () => {

    return (
        <ScrollView 
            style={Styles.scrollView}
            contentContainerStyle={Styles.container}
        >
            <Head />

            <Text style={Styles.headText}>
                Olhe nosso <Text style={Styles.textDestacadosYellow}>Álbum!</Text>
            </Text>

            <View style={Styles.imageRow}>
                <Image
                    style={Styles.imageHalf}
                    source={bonecaRosa}
                />
                <Image
                    style={Styles.imageHalf}
                    source={donaJacira}
                />
            </View>

            <View style={Styles.imageRow}>
                <Image
                    style={Styles.imageHalf}
                    source={desastre}
                />
                <Image
                    style={Styles.imageHalf}
                    source={turma}
                />
            </View>

            <Image
                style={Styles.imageFull}
                source={comunidade}
            />

        </ScrollView>
    );
};