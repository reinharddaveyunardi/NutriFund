import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {Colors, componentsStyles, Styles} from "../style/Styles";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function MarketScreen({navigation}: any) {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{marginTop: 20}}>
                    <View style={[{width: "100%"}]}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={[Styles.flexRow, {gap: 5, alignItems: "center"}]}>
                            <View>
                                <Ionicons name="chevron-back" size={24} color="black" />
                            </View>
                            <Text style={[Styles.boldLarge]}>Market</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginTop: 20, marginHorizontal: 20}}>
                    <View>
                        <View style={[Styles.flexRow, {gap: 10}]}>
                            <View>
                                <Image source={require("@/assets/images/rice.jpg")} style={[Styles.roundedMd, {width: 130, height: 130}]} />
                            </View>
                            <View>
                                <Text style={[Styles.boldLarge]}>Rice</Text>
                                <Text>Price: Rp 73.000</Text>
                                <Text>Weight: 5kg</Text>
                                <View style={[Styles.flexRow, {gap: 10}]}>
                                    <TouchableOpacity style={[componentsStyles.button, {width: 70, marginTop: 10, backgroundColor: Colors.green}]}>
                                        <Text>Buy Now</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[componentsStyles.button, {width: 70, marginTop: 10, backgroundColor: Colors.red}]}>
                                        <Text>Sell Now</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={[
                                            componentsStyles.button,
                                            {
                                                width: 30,
                                                marginTop: 10,
                                                backgroundColor: Colors.white,
                                                borderWidth: 1,
                                                borderColor: Colors.black,
                                                paddingHorizontal: 2,
                                            },
                                        ]}
                                    >
                                        <Text>
                                            <Ionicons name="information-circle" size={24} color="black" />
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
