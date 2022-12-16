import ReadMore from "@fawazahmed/react-native-read-more";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { BookMark, Comment, Heart, More, Share } from "../../Icons";
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
                <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} activeOpacity={0.5}>
                    <More size={15} />
                </TouchableOpacity>
            </View>
            <FitImage src={post.image} />
            <View style={styles.content}>
                <View style={styles.actions}>
                    <View style={styles.leftActions}>
                        <TouchableOpacity style={{ marginRight: 14 }} activeOpacity={0.5}>
                            <Heart size={24} fill={"black"} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginRight: 14 }} activeOpacity={0.5}>
                            <Comment size={24} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginRight: 14 }} activeOpacity={0.5}>
                            <Share size={24} />
                        </TouchableOpacity>
                    </View>
                    <BookMark size={24} />
                </View>
                <View>
                    <Text style={styles.likes}>{post.likes} Likes</Text>
                </View>
                <ReadMore numberOfLines={2}
                    seeMoreStyle={{
                        color: '#999'
                    }}
                    expandOnly={true}
                    seeMoreText="more">
                    <Text style={{ fontWeight: "600" }}>{post.user.name}</Text>
                    {' '}
                    {post.description}
                </ReadMore>
            </View>

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
    text: {
        fontSize: 14,
        fontWeight: '700'
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        height: 40,
    },
    leftActions: {
        flexDirection: "row",
    },
    content: {
        paddingHorizontal: 15,
    },
    likes: {
        fontWeight: "600"
    }
})