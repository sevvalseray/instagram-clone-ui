import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { More } from "../../Icons";
import FitImage from "./FitImage";

function Post({ post }) {
    return (
        <View>
            <View style={styles.header}>
                <View style={styles.username}>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri: post.user.avatar
                        }}
                    />
                    <Text style={styles.text}>{post.user.name}</Text>
                </View>
                <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center'}} activeOpacity={0.5}>
                    <More size={15} />
                </TouchableOpacity>
            </View>
            <FitImage src={post.image}/>
        </View>
    )
}

export default Post;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        height: 49,
        paddingHorizontal: 8,
        paddingRight: 14
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 30,
        marginRight: 10,

    },
    username: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text:{
        fontSize: 14,
        fontWeight: '700'
    }
})