import { Dimensions, Image } from "react-native";

// 1080 x 607
const width = Dimensions.get('window').width
const ratio = 1080 / width
const height = 607 / ratio

function FitImage({ src }) {
    return (
        <Image
            style={{
                height: height,
                width: width
            }}
            source={{ uri: src }} />
    )
}

export default FitImage;