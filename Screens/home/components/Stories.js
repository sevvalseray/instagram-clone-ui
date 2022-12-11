import { ScrollView, StyleSheet, View, Text, Image } from "react-native";
import stories from "../../../data/stories";
import { LinearGradient } from 'expo-linear-gradient';

function Stories() {
    return (
        <View style={styles.stories}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {stories.map(story => (
                    <View key={story.id} style={styles.story}>
                        <LinearGradient
                            colors={['#DE0046', '#F7A34B']}
                            style={styles.cover}>
                            <Image
                                style={styles.avatar}
                                source={{
                                    uri: story.user.avatar
                                }}
                            />
                        </LinearGradient>
                        <Text style={styles.username} numberOfLines={1}>{story.user.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Stories;

const styles = StyleSheet.create({
    stories: {
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#dadada'
    },
    story: {
        width: 67,
        marginHorizontal: 8
    },
    cover: {
        width: 67,
        height: 67,
        borderRadius: 33.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 4
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: '#fff'
    },
    username: {
        fontSize: 12
    }
})