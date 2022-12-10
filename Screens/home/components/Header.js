import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Logo, Plus, Heart, Messenger } from "../../../Icons";

function Header() {
    return (
        <View style={styles.header}>
            <Logo size={104} fill="#000" />
            <View style={styles.actions}>
                <TouchableOpacity activeOpacity={0.5}>
                    <Plus size={24} fill="#000" />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} style={styles.button}>
                    <Heart size={24} fill="#000" />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.5} style={styles.button}>
                    <Messenger size={24} fill="#000" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        height: 36,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    actions: {
        flexDirection: 'row',

    },
    button: {
        marginLeft: 20
    }
})