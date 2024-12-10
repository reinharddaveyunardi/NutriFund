import {deviceWidth} from "@/utils";
import {StyleSheet} from "react-native";

export const Colors = {
    green: "#58a92c",
    darkGreen: "#2C5516",
    brown: "#795548",
    blue: "#2196F3",
    white: "#fff",
    red: "#F44336",
    black: "#000",
    gray: "#EAEAEA",
};

export const Styles = StyleSheet.create({
    flexRow: {
        flexDirection: "row",
    },
    flexCol: {
        flexDirection: "column",
    },
    centerV: {
        alignItems: "center",
    },
    centerH: {
        justifyContent: "center",
    },
    center: {
        justifyContent: "center",
        alignItems: "center",
    },
    startH: {
        justifyContent: "flex-start",
    },
    startV: {
        alignItems: "flex-start",
    },
    start: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    end: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    endH: {
        justifyContent: "flex-end",
    },
    endV: {
        alignItems: "flex-end",
    },
    devider: {
        width: "100%",
        height: 2,
        backgroundColor: "#000",
    },
    boldLarge: {
        fontWeight: "bold",
        fontSize: deviceWidth / 15,
    },
    boldMedium: {
        fontWeight: "bold",
        fontSize: 16,
    },
    boldSmall: {
        fontWeight: "bold",
        fontSize: 12,
    },
    regularLarge: {
        fontSize: 24,
    },
    regularMedium: {
        fontSize: 16,
    },
    regularSmall: {
        fontSize: 12,
    },
    roundedSm: {
        borderRadius: 5,
    },
    roundedMd: {
        borderRadius: 10,
    },
    roundedLg: {
        borderRadius: 15,
    },
    shadowSm: {
        elevation: 2,
        zIndex: 1,
    },
    shadowMd: {
        elevation: 5,
        zIndex: 1,
    },
    shadowLg: {
        elevation: 10,
        zIndex: 1,
    },
    textWhite: {
        color: Colors.white,
    },
});

export const componentsStyles = StyleSheet.create({
    button: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        borderRadius: 5,
    },
});

export const loginStyles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
    },
    logo: {
        width: 200,
        height: 200,
    },
    loginBox: {
        height: "auto",
        backgroundColor: Colors.white,
        borderRadius: 10,
        width: "100%",
        alignItems: "center",
        elevation: 5,
        zIndex: 1,
    },
    inputStyle: {
        flex: 1,
        height: 40,
        width: "100%",
        padding: 10,
    },
});
