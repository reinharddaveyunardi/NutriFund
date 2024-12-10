import {Dimensions, Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View} from "react-native";
import React, {useRef} from "react";
import {Colors, componentsStyles, Styles} from "../style/Styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import {deviceWidth} from "@/utils";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faAppleAlt, faCarrot} from "@fortawesome/free-solid-svg-icons";
import BottomSheet, {BottomSheetModal, BottomSheetScrollView} from "@gorhom/bottom-sheet";
const width = Dimensions.get("screen").width;
export default function HomeScreen({navigation}: any) {
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: Colors.gray}}>
            <ScrollView>
                <StatusBar barStyle={"dark-content"} backgroundColor={Colors.gray} />
                <View style={{margin: 10, gap: 10}}>
                    <View>
                        <Text style={[Styles.boldLarge]}>Hello, User!👋</Text>
                    </View>
                    <View style={[Styles.flexRow, {width: "100%", gap: 10, flex: 1}]}>
                        <View style={[Styles.roundedMd, {backgroundColor: "rgba(87, 150, 104, .4)", width: "100%", flex: 1, height: deviceWidth / 2.8}]}>
                            <View style={[Styles.center]}>
                                <Ionicons
                                    name="location"
                                    size={width / 3}
                                    style={{transform: [{rotate: "-25deg"}], opacity: 0.2}}
                                    color="rgba(217, 93, 93, .9)"
                                />
                            </View>
                            <View style={[Styles.flexCol, {position: "absolute", padding: 10, justifyContent: "space-between", height: "100%"}]}>
                                <Text style={[Styles.boldLarge, {color: Colors.black}]}>Find Food Hubs</Text>
                                <View style={[Styles.flexRow, {flex: 1, width: "100%", justifyContent: "space-between", alignItems: "flex-end"}]}>
                                    <View style={[Styles.flexRow, Styles.centerV, {gap: 10, justifyContent: "space-between", width: "100%"}]}>
                                        <TouchableOpacity
                                            style={(componentsStyles.button, {backgroundColor: Colors.black, padding: 5, borderRadius: 5})}
                                            onPress={() => navigation.navigate("Hub")}
                                        >
                                            <View style={[Styles.flexRow, {gap: 5, alignItems: "center"}]}>
                                                <Text style={[Styles.boldMedium, {color: Colors.white}]}>Go Find</Text>
                                                <Ionicons name="chevron-forward" color={Colors.white} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={[Styles.roundedMd, {backgroundColor: "rgba(207, 128, 162, .4)", width: "100%", flex: 1, height: deviceWidth / 2.8}]}>
                            <View style={[Styles.center, Styles.flexRow, {height: "100%"}]}>
                                <FontAwesomeIcon icon={faCarrot} color="rgba(0,0,0, .4)" size={width / 6} style={{opacity: 0.5, flex: 1}} />
                                <FontAwesomeIcon icon={faAppleAlt} color="rgba(0,0,0, .4)" size={width / 6} style={{opacity: 0.5, flex: 1}} />
                            </View>
                            <View style={[Styles.flexCol, {position: "absolute", padding: 10, justifyContent: "space-between", height: "100%"}]}>
                                <Text style={[Styles.boldLarge, {color: Colors.black}]}>Market</Text>
                                <View style={[Styles.flexRow, {flex: 1, width: "100%", justifyContent: "space-between", alignItems: "flex-end"}]}>
                                    <View style={[Styles.flexRow, {gap: 10, justifyContent: "flex-start", width: "100%"}]}>
                                        <TouchableOpacity
                                            style={(componentsStyles.button, {backgroundColor: Colors.black, padding: 5, borderRadius: 5})}
                                            onPress={() => navigation.navigate("Market")}
                                        >
                                            <View style={[Styles.flexRow, {gap: 5, alignItems: "center"}]}>
                                                <Text style={[Styles.boldMedium, {color: Colors.white}]}>Go Market</Text>
                                                <Ionicons name="chevron-forward" color={Colors.white} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[Styles.roundedMd, {backgroundColor: "rgba(136, 204, 241, .4)", width: "100%", flex: 1, height: deviceWidth / 2.8}]}>
                        <View style={[Styles.center]}>
                            <Ionicons
                                name="file-tray"
                                size={width / 3}
                                style={{transform: [{rotate: "-25deg"}], opacity: 0.8}}
                                color="rgba(255, 255, 255, .9)"
                            />
                        </View>
                        <View style={[Styles.flexCol, {position: "absolute", padding: 10, justifyContent: "space-between", height: "100%"}]}>
                            <Text style={[Styles.boldLarge, {color: Colors.black}]}>Inventory</Text>
                            <View style={[Styles.flexRow, {flex: 1, width: "100%", justifyContent: "space-between", alignItems: "flex-end"}]}>
                                <View style={[Styles.flexRow, {gap: 10, justifyContent: "flex-end", width: "100%"}]}>
                                    <TouchableOpacity
                                        style={(componentsStyles.button, {backgroundColor: Colors.black, padding: 5, borderRadius: 5})}
                                        onPress={() => bottomSheetRef.current?.expand()}
                                    >
                                        <View style={[Styles.flexRow, {gap: 5, alignItems: "center"}]}>
                                            <Text style={[Styles.boldMedium, {color: Colors.white}]}>Open Inventory</Text>
                                            <Ionicons name="chevron-forward" color={Colors.white} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <BottomSheet ref={bottomSheetRef} index={-1} snapPoints={[100, 500]} enableOverDrag={false} enablePanDownToClose>
                <BottomSheetScrollView style={{padding: 20}}>
                    <View style={[Styles.centerV, {width: "100%", padding: 20}]}>
                        <Text>Your Inventory</Text>
                    </View>
                    <View style={[Styles.flexRow, Styles.centerV, {width: "100%", padding: 20}]}>
                        <View>
                            <Image source={require("@/assets/images/rice.jpg")} style={[Styles.roundedLg, {width: 100, height: 100}]} />
                        </View>
                        <View>
                            <Text>Name: Rice</Text>
                        </View>
                    </View>
                </BottomSheetScrollView>
            </BottomSheet>
        </SafeAreaView>
    );
}
