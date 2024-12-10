import {useState} from "react";
import {TextInput, View, TouchableOpacity, Text, Image, StatusBar} from "react-native";
import {loginStyles, Styles, componentsStyles, Colors} from "@/app/style/Styles";
import Ionicons from "react-native-vector-icons/Ionicons";
export default function RegisterScreen({navigation}: any) {
    const [f_name, setFName] = useState("");
    const [l_name, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [isHide, setIsHide] = useState(true);
    const hidePasswordHandler = () => setIsHide((prev) => !prev);
    return (
        <View style={[Styles.center, {padding: 20, flex: 1, backgroundColor: Colors.gray}]}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.gray} />
            <View style={[Styles.flexRow, Styles.centerV, Styles.centerH]}>
                <View>
                    <Image source={require("@/assets/images/icon.png")} style={loginStyles.logo} />
                </View>
                <View style={[Styles.flexCol, {width: "100%", flex: 1}]}>
                    <Text style={[Styles.boldLarge, {color: Colors.darkGreen}]}>NutriFund</Text>
                    <View style={{width: "80%"}}>
                        <View style={[Styles.devider, Styles.roundedMd]} />
                    </View>
                    <Text style={[Styles.boldMedium, {color: Colors.darkGreen}]}>Zero Hunger</Text>
                </View>
            </View>
            <View style={[loginStyles.loginBox, {paddingHorizontal: 15, paddingVertical: 30, alignItems: "flex-start", gap: 10}]}>
                <View>
                    <Text style={[Styles.boldLarge, {color: Colors.green}]}>Register</Text>
                </View>
                {/* First name Input */}
                <View style={{width: "100%"}}>
                    <View style={[Styles.flexCol, {gap: 2}]}>
                        <Text style={[Styles.boldMedium]}>First name</Text>
                        <View style={[Styles.flexRow, Styles.center, {width: "100%", gap: 5}]}>
                            <Ionicons name="person-outline" size={24} color="black" />
                            <TextInput
                                style={[
                                    loginStyles.inputStyle,
                                    {borderBottomWidth: email.length > 0 ? 1 : 1, borderBottomColor: email.length > 0 ? Colors.green : Colors.black},
                                ]}
                                value={f_name}
                                placeholder="Enter your first name"
                                onChangeText={setFName}
                            />
                        </View>
                    </View>
                </View>
                {/* Last name Input */}
                <View style={{width: "100%"}}>
                    <View style={[Styles.flexCol, {gap: 2}]}>
                        <Text style={[Styles.boldMedium]}>Last name</Text>
                        <View style={[Styles.flexRow, Styles.center, {width: "100%", gap: 5}]}>
                            <Ionicons name="person-outline" size={24} color="black" />
                            <TextInput
                                style={[
                                    loginStyles.inputStyle,
                                    {borderBottomWidth: email.length > 0 ? 1 : 1, borderBottomColor: email.length > 0 ? Colors.green : Colors.black},
                                ]}
                                value={l_name}
                                placeholder="Enter your first name"
                                onChangeText={setLName}
                            />
                        </View>
                    </View>
                </View>
                {/* Email Input */}
                <View style={{width: "100%"}}>
                    <View style={[Styles.flexCol, {gap: 2}]}>
                        <Text style={[Styles.boldMedium]}>Email</Text>
                        <View style={[Styles.flexRow, Styles.center, {width: "100%", gap: 5}]}>
                            <Ionicons name="mail-outline" size={24} color="black" />
                            <TextInput
                                style={[
                                    loginStyles.inputStyle,
                                    {borderBottomWidth: email.length > 0 ? 1 : 1, borderBottomColor: email.length > 0 ? Colors.green : Colors.black},
                                ]}
                                value={email}
                                placeholder="Enter your email"
                                onChangeText={setEmail}
                            />
                        </View>
                    </View>
                </View>
                {/* Password Input */}
                <View style={{width: "100%"}}>
                    <View style={[Styles.flexCol, {gap: 2}]}>
                        <Text style={[Styles.boldMedium]}>Password</Text>
                        <View style={[Styles.flexRow, Styles.center, {width: "100%", gap: 5}]}>
                            <Ionicons name="lock-closed-outline" size={24} color="black" />
                            {isHide ? (
                                <TextInput
                                    style={[
                                        loginStyles.inputStyle,
                                        {
                                            borderBottomWidth: password.length > 0 ? 1 : 1,
                                            borderBottomColor: password.length > 0 ? Colors.green : Colors.black,
                                        },
                                    ]}
                                    secureTextEntry
                                    value={password}
                                    placeholder="Enter your password"
                                    onChangeText={setPassword}
                                />
                            ) : (
                                <TextInput
                                    style={[
                                        loginStyles.inputStyle,
                                        {
                                            borderBottomWidth: password.length > 0 ? 1 : 1,
                                            borderBottomColor: password.length > 0 ? Colors.green : Colors.black,
                                        },
                                    ]}
                                    value={password}
                                    placeholder="Enter your password"
                                    onChangeText={setPassword}
                                />
                            )}
                            {isHide ? (
                                <TouchableOpacity onPress={hidePasswordHandler}>
                                    <Ionicons name="eye-outline" size={24} color="black" />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={hidePasswordHandler}>
                                    <Ionicons name="eye-off-outline" size={24} color="black" />
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                </View>
                {/* Confirm Password Input */}
                <View style={{width: "100%"}}>
                    <View style={[Styles.flexCol, {gap: 2}]}>
                        <Text style={[Styles.boldMedium]}>Confirm Password</Text>
                        <View style={[Styles.flexRow, Styles.center, {width: "100%", gap: 5}]}>
                            <Ionicons name="lock-closed-outline" size={24} color="black" />
                            <TextInput
                                style={[
                                    loginStyles.inputStyle,
                                    {
                                        borderBottomWidth: password.length > 0 ? 1 : 1,
                                        borderBottomColor: password.length > 0 ? Colors.green : Colors.black,
                                    },
                                ]}
                                secureTextEntry
                                value={cPassword}
                                placeholder="Re-enter your password"
                                onChangeText={setCPassword}
                            />
                        </View>
                    </View>
                </View>
                <View style={[Styles.centerV, {width: "100%"}]}>
                    <TouchableOpacity
                        style={[componentsStyles.button, Styles.shadowMd, Styles.roundedMd, {backgroundColor: Colors.green}]}
                        activeOpacity={0.8}
                        onPress={() => navigation.replace("Menu")}
                    >
                        <Text style={[Styles.textWhite, Styles.boldMedium]}>Register</Text>
                    </TouchableOpacity>
                </View>
                <View style={[Styles.centerV, {width: "100%"}]}>
                    <TouchableOpacity style={[componentsStyles.button, {backgroundColor: Colors.white}]} onPress={() => navigation.goBack()}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={[Styles.boldLarge]}>SCB-CI</Text>
            </View>
        </View>
    );
}
