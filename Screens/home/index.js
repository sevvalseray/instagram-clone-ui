import { View, Text, StyleSheet, ScrollView } from "react-native";
import posts from "../../data/posts";
import Post from "../../components/shared/Post";
import Header from "./components/Header";
import Stories from "./components/Stories";

function Home() {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView>
                <Stories />
                {
                    posts.map(post => (
                        <Post key={post.id} post={post}></Post>
                    ))
                }
            </ScrollView>

        </View>
    )

}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})