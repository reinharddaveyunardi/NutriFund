import {Text, View, Image, SafeAreaView, StatusBar, TextInput, TouchableOpacity} from "react-native";
import React from "react";
import {Colors, componentsStyles, loginStyles, Styles} from "@/app/style/Styles";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ResetScreen({route, navigation}: {route: any; navigation: any}) {
    const {email} = route.params;
    return (
        <SafeAreaView>
            <StatusBar barStyle={"dark-content"} />
            <View style={{paddingHorizontal: 20, paddingTop: 10}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={[Styles.roundedMd, Styles.shadowMd, {margin: 20, backgroundColor: Colors.white, gap: 20}]}>
                <View style={[Styles.center, {width: "100%", padding: 20}]}>
                    <View style={[Styles.flexRow, Styles.centerV]}>
                        <Image source={require("@/assets/images/icon.png")} style={[loginStyles.logo]} />
                        <View>
                            <Text style={[Styles.boldLarge, {color: Colors.darkGreen}]}>NutriFund</Text>
                        </View>
                    </View>
                    <View>
                        <View style={[Styles.flexRow, Styles.centerV, {width: "100%"}]}>
                            <Ionicons name="mail-outline" size={24} color="black" />
                            <TextInput
                                style={[
                                    loginStyles.inputStyle,
                                    {borderBottomWidth: email.length > 0 ? 1 : 1, borderBottomColor: email.length > 0 ? Colors.green : Colors.black},
                                ]}
                                value={email}
                                placeholder="Enter your email"
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View style={[Styles.center, {width: "100%", padding: 20}]}>
                <TouchableOpacity style={[componentsStyles.button, {backgroundColor: Colors.green}]}>
                    <Text style={[Styles.boldMedium, {color: Colors.white}]}>Reset Password</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
