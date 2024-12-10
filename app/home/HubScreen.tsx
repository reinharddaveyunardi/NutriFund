import React, {useEffect, useRef, useState} from "react";
import {View, Text} from "react-native";
import MapView from "react-native-maps";
import {Picker} from "@react-native-picker/picker";
import {deviceWidth} from "@/utils";
import {Styles} from "../style/Styles";

export default function HubScreen() {
    const [location, setLocation] = useState([
        {
            latitude: -6.4528098959522495,
            longitude: 107.03969899267133,
        },
        {
            latitude: -6.2907796,
            longitude: 106.7849243,
        },
    ]);
    const [selectedValue, setSelectedValue] = useState("");
    const mapViewRef = useRef<MapView>(null);

    const handleLocationChange = (itemValue: any) => {
        if (itemValue === "SCB") {
            setLocation([
                {
                    latitude: -6.4528098959522495,
                    longitude: 107.03969899267133,
                },
            ]);
        } else if (itemValue === "SCK") {
            setLocation([
                {
                    latitude: -6.2907796,
                    longitude: 106.7849243,
                },
            ]);
        }
        setSelectedValue(itemValue);
    };
    useEffect(() => {
        console.log("Location changed:", location);
        const newRegion = {
            latitude: location[0].latitude,
            longitude: location[0].longitude,
            latitudeDelta: 0.0009,
            longitudeDelta: 0.0009,
        };
        mapViewRef.current?.animateToRegion(newRegion, 1000);
    }, [location]);
    return (
        <View>
            <MapView
                ref={mapViewRef}
                mapType="satellite"
                style={{width: "100%", height: "100%"}}
                initialRegion={{latitude: location[0].latitude, longitude: location[0].longitude, latitudeDelta: 0.0009, longitudeDelta: 0.0009}}
            />
            <View
                style={{
                    position: "absolute",
                    top: 20,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    justifyContent: "flex-start",
                    alignItems: "center",
                }}
            >
                <View style={{backgroundColor: "white", width: deviceWidth / 1.2, elevation: 5, borderRadius: 20, padding: 10}}>
                    <View style={{paddingLeft: 15, paddingVertical: 5}}>
                        <Text>Location: {selectedValue !== "" ? selectedValue : "SCB"}</Text>
                    </View>
                    <View style={[Styles.devider]} />
                    <Picker selectedValue={selectedValue} onValueChange={handleLocationChange}>
                        <Picker.Item label="SCB Citra Berkat" value="SCB" />
                        <Picker.Item label="SCB Citra Kasih" value="SCK" />
                    </Picker>
                </View>
            </View>
        </View>
    );
}
