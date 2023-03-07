import { StyleSheet, Text, View, Image } from "react-native";

export default function SingleMessage(props: { timestamp: string; avatar: string; username: string; displayMessage: string;}) 
{
    return ( 
        <View style={[styles.singleMessageContainer, {flexDirection: 'row'}]}>
            <Image style={styles.avatar} source={{ uri: props.avatar }} ></Image>
            <View style={[{flexDirection: 'column'}, styles.centerText]}>
                <Text style={styles.messageText}>{props.username}</Text>
                <Text style={styles.messageText}>{props.displayMessage}</Text>
            </View>
            <View style={[{flexDirection: 'column'}]}>
                <Text style={styles.messageText}>{props.timestamp}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    singleMessageContainer: {
        justifyContent: "center",
        alignItems: "center",
        color: 'white',
        marginTop: 15,
        marginBottom:15
    },

    avatar: {
        justifyContent: "flex-start",
        width: 50,
        height: 50,
        borderRadius: 50/2
    },

    centerText: {
        justifyContent: "flex-start",
    },

    messageText: {
        fontSize: 15,
        color: 'white',
    }
});