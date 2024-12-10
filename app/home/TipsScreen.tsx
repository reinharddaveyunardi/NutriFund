import {ImageBackground, ScrollView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {Colors, componentsStyles, Styles} from "../style/Styles";
import {deviceWidth} from "@/utils";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function TipsScreen() {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: Colors.gray}}>
            <StatusBar barStyle={"dark-content"} backgroundColor={Colors.gray} />
            <View style={{marginTop: 20, padding: 20}}>
                <View>
                    <Text style={[Styles.boldLarge]}>Best Tips For You!</Text>
                </View>
                <View style={{padding: 10}}>
                    <Text style={[Styles.boldMedium]}>Vegetables</Text>
                    <View style={{padding: 5}}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} centerContent>
                            <View style={{flexDirection: "row", gap: 20}}>
                                <ImageBackground
                                    resizeMode="cover"
                                    blurRadius={1.5}
                                    source={require("@/assets/images/plantVege.jpg")}
                                    style={{
                                        width: deviceWidth - 70,
                                        height: 180,
                                        justifyContent: "flex-end",
                                        zIndex: 1,
                                    }}
                                    imageStyle={{borderRadius: 10}}
                                >
                                    <View
                                        style={[
                                            Styles.flexRow,
                                            {
                                                backgroundColor: "rgba(255, 255, 255, 0.5)",
                                                width: "auto",
                                                height: 80,
                                                borderBottomRightRadius: 10,
                                                borderBottomLeftRadius: 10,
                                                padding: 10,
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            },
                                        ]}
                                    >
                                        <View>
                                            <Text style={[Styles.boldMedium]}>Plant your veggies</Text>
                                            <Text>
                                                {"Start your day with a healthy breakfast of fresh veggies".length > 20
                                                    ? `${"Start your day with a healthy breakfast of fresh veggies".slice(0, 20)}...`
                                                    : "Start your day with a healthy breakfast of fresh veggies"}
                                            </Text>
                                        </View>
                                        <View>
                                            <TouchableOpacity
                                                style={[
                                                    componentsStyles.button,
                                                    Styles.flexRow,
                                                    {width: "auto", right: 10, paddingHorizontal: 10, marginTop: 10, height: 30, backgroundColor: Colors.black},
                                                ]}
                                            >
                                                <View style={[Styles.flexRow, {gap: 10, justifyContent: "space-between", alignItems: "center"}]}>
                                                    <Text style={{color: "white"}}>Read more</Text>
                                                    <Ionicons name="chevron-forward" size={24} color="white" />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </ImageBackground>
                                <ImageBackground
                                    resizeMode="cover"
                                    blurRadius={1.5}
                                    source={require("@/assets/images/recomendationVege.jpg")}
                                    style={{
                                        width: deviceWidth - 70,
                                        height: 180,
                                        justifyContent: "flex-end",
                                        zIndex: 1,
                                    }}
                                    imageStyle={{borderRadius: 10}}
                                >
                                    <View
                                        style={[
                                            Styles.flexRow,
                                            {
                                                backgroundColor: "rgba(255, 255, 255, 0.5)",
                                                width: "auto",
                                                height: 80,
                                                borderBottomRightRadius: 10,
                                                borderBottomLeftRadius: 10,
                                                padding: 10,
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            },
                                        ]}
                                    >
                                        <View>
                                            <Text style={[Styles.boldMedium, {width: "80%"}]}>Recomendation Vegetables for you</Text>
                                            <Text>
                                                {"Best Vegetables that you can plant at home!".length > 20
                                                    ? `${"Best Vegetables that you can plant at home!".slice(0, 20)}...`
                                                    : "Best Vegetables that you can plant at home!"}
                                            </Text>
                                        </View>
                                        <View>
                                            <TouchableOpacity
                                                style={[
                                                    componentsStyles.button,
                                                    Styles.flexRow,
                                                    {width: "auto", right: 10, paddingHorizontal: 10, marginTop: 10, height: 30, backgroundColor: Colors.black},
                                                ]}
                                            >
                                                <View style={[Styles.flexRow, {gap: 10, justifyContent: "space-between", alignItems: "center"}]}>
                                                    <Text style={{color: "white"}}>Read more</Text>
                                                    <Ionicons name="chevron-forward" size={24} color="white" />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <View style={{padding: 10}}>
                    <Text style={[Styles.boldMedium]}>Fruits</Text>
                    <View style={{padding: 5}}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} centerContent>
                            <View style={{flexDirection: "row", gap: 20}}>
                                <ImageBackground
                                    resizeMode="cover"
                                    blurRadius={1.5}
                                    source={require("@/assets/images/plantFruit.jpg")}
                                    style={{
                                        width: deviceWidth - 70,
                                        height: 180,
                                        justifyContent: "flex-end",
                                        zIndex: 1,
                                    }}
                                    imageStyle={{borderRadius: 10}}
                                >
                                    <View
                                        style={[
                                            Styles.flexRow,
                                            {
                                                backgroundColor: "rgba(255, 255, 255, 0.5)",
                                                width: "auto",
                                                height: 80,
                                                borderBottomRightRadius: 10,
                                                borderBottomLeftRadius: 10,
                                                padding: 10,
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            },
                                        ]}
                                    >
                                        <View>
                                            <Text style={[Styles.boldMedium]}>Plant your fruits</Text>
                                            <Text>
                                                {"Start to planting a fruit tree".length > 20
                                                    ? `${"Start to planting a fruit tree".slice(0, 20)}...`
                                                    : "Start to planting a fruit tree"}
                                            </Text>
                                        </View>
                                        <View>
                                            <TouchableOpacity
                                                style={[
                                                    componentsStyles.button,
                                                    Styles.flexRow,
                                                    {width: "auto", right: 10, paddingHorizontal: 10, marginTop: 10, height: 30, backgroundColor: Colors.black},
                                                ]}
                                            >
                                                <View style={[Styles.flexRow, {gap: 10, justifyContent: "space-between", alignItems: "center"}]}>
                                                    <Text style={{color: "white"}}>Read more</Text>
                                                    <Ionicons name="chevron-forward" size={24} color="white" />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </ImageBackground>
                                <ImageBackground
                                    resizeMode="cover"
                                    blurRadius={1.5}
                                    source={require("@/assets/images/recomendationFruits.jpg")}
                                    style={{
                                        width: deviceWidth - 70,
                                        height: 180,
                                        justifyContent: "flex-end",
                                        zIndex: 1,
                                    }}
                                    imageStyle={{borderRadius: 10}}
                                >
                                    <View
                                        style={[
                                            Styles.flexRow,
                                            {
                                                backgroundColor: "rgba(255, 255, 255, 0.5)",
                                                width: "auto",
                                                height: 80,
                                                borderBottomRightRadius: 10,
                                                borderBottomLeftRadius: 10,
                                                padding: 10,
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            },
                                        ]}
                                    >
                                        <View>
                                            <Text style={[Styles.boldMedium, {width: "80%"}]}>Recomendation Fruits for you</Text>
                                            <Text>
                                                {"Best Fruits that you can plant at home!".length > 20
                                                    ? `${"Best Fruits that you can plant at home!".slice(0, 20)}...`
                                                    : "Best Fruits that you can plant at home!"}
                                            </Text>
                                        </View>
                                        <View>
                                            <TouchableOpacity
                                                style={[
                                                    componentsStyles.button,
                                                    Styles.flexRow,
                                                    {width: "auto", right: 10, paddingHorizontal: 10, marginTop: 10, height: 30, backgroundColor: Colors.black},
                                                ]}
                                            >
                                                <View style={[Styles.flexRow, {gap: 10, justifyContent: "space-between", alignItems: "center"}]}>
                                                    <Text style={{color: "white"}}>Read more</Text>
                                                    <Ionicons name="chevron-forward" size={24} color="white" />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <View style={{padding: 10}}>
                    <Text style={[Styles.boldMedium]}>Stop wasting food</Text>
                    <View style={{padding: 5}}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} centerContent>
                            <View style={{flexDirection: "row", gap: 20}}>
                                <ImageBackground
                                    resizeMode="cover"
                                    blurRadius={1.5}
                                    source={require("@/assets/images/stopWasting.jpg")}
                                    style={{
                                        width: deviceWidth - 70,
                                        height: 180,
                                        justifyContent: "flex-end",
                                        zIndex: 1,
                                    }}
                                    imageStyle={{borderRadius: 10}}
                                >
                                    <View
                                        style={[
                                            Styles.flexRow,
                                            {
                                                backgroundColor: "rgba(255, 255, 255, 0.5)",
                                                width: "auto",
                                                height: 80,
                                                borderBottomRightRadius: 10,
                                                borderBottomLeftRadius: 10,
                                                padding: 10,
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            },
                                        ]}
                                    >
                                        <View>
                                            <Text style={[Styles.boldMedium]}>Stop wasting your food</Text>
                                            <Text>
                                                {"Stop throwing away food start consuming enough".length > 20
                                                    ? `${"Stop throwing away food start consuming enough".slice(0, 20)}...`
                                                    : "Stop throwing away food start consuming enough"}
                                            </Text>
                                        </View>
                                        <View>
                                            <TouchableOpacity
                                                style={[
                                                    componentsStyles.button,
                                                    Styles.flexRow,
                                                    {width: "auto", right: 10, paddingHorizontal: 10, marginTop: 10, height: 30, backgroundColor: Colors.black},
                                                ]}
                                            >
                                                <View style={[Styles.flexRow, {gap: 10, justifyContent: "space-between", alignItems: "center"}]}>
                                                    <Text style={{color: "white"}}>Read more</Text>
                                                    <Ionicons name="chevron-forward" size={24} color="white" />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </ImageBackground>
                                <ImageBackground
                                    resizeMode="cover"
                                    blurRadius={1.5}
                                    source={require("@/assets/images/scarce.jpg")}
                                    style={{
                                        width: deviceWidth - 70,
                                        height: 180,
                                        justifyContent: "flex-end",
                                        zIndex: 1,
                                    }}
                                    imageStyle={{borderRadius: 10}}
                                >
                                    <View
                                        style={[
                                            Styles.flexRow,
                                            {
                                                backgroundColor: "rgba(255, 255, 255, 0.5)",
                                                width: "auto",
                                                height: 80,
                                                borderBottomRightRadius: 10,
                                                borderBottomLeftRadius: 10,
                                                padding: 10,
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            },
                                        ]}
                                    >
                                        <View>
                                            <Text style={[Styles.boldMedium, {width: "80%"}]}>Be wise!</Text>
                                            <Text>
                                                {"Use our app to give them food".length > 20
                                                    ? `${"Use our app to give them food".slice(0, 20)}...`
                                                    : "Use our app to give them food"}
                                            </Text>
                                        </View>
                                        <View>
                                            <TouchableOpacity
                                                style={[
                                                    componentsStyles.button,
                                                    Styles.flexRow,
                                                    {width: "auto", right: 10, paddingHorizontal: 10, marginTop: 10, height: 30, backgroundColor: Colors.black},
                                                ]}
                                            >
                                                <View style={[Styles.flexRow, {gap: 10, justifyContent: "space-between", alignItems: "center"}]}>
                                                    <Text style={{color: "white"}}>Read more</Text>
                                                    <Ionicons name="chevron-forward" size={24} color="white" />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
