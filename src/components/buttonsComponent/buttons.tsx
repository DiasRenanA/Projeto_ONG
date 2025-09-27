import { Text, TouchableOpacity } from "react-native";
import { Styles } from "./styles";

type typeButton = {
  titulo: string;
  onPress: () => void;
};

export function ButtonBig({ titulo, onPress }: typeButton) {
    return(
        <TouchableOpacity style={Styles.buttonBig} onPress={onPress} activeOpacity={0.7}>
            <Text style={Styles.textButtonBig}>{titulo}</Text>
        </TouchableOpacity>
    )
}

export function ButtonMenu({titulo, onPress}: typeButton){
    return(
        <TouchableOpacity style={Styles.buttonMenu} onPress={onPress} activeOpacity={0.7}>
            <Text style={Styles.textButtonMenu}>{titulo}</Text>
        </TouchableOpacity>
    )
}

export function ButtonVoltar({titulo, onPress}: typeButton){
    return(
        <TouchableOpacity style={Styles.buttonVoltar} onPress={onPress} activeOpacity={0.7}>
            <Text style={Styles.textButtonVoltar}>{titulo}</Text>
        </TouchableOpacity>
    )
}

