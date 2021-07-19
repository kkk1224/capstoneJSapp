import React from 'react';
import styled from 'styled-components/native';
import { Text, Button, View, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import MenuItem from '../components/MenuItem';
import { ProgressProvider } from '../contexts';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
`;


const ChannelList = ({ navigation }) => {
    const handleButton1 = () => navigation.navigate("NFC");
    const handleButton2 = () => Alert.alert("준비 중입니다.");
    const handleButton3 = () => Alert.alert("준비 중입니다.");
    const handleButton4 = () => Alert.alert("준비 중입니다.");

    return(
        <Container>
            <View>
                <Image style={styles.Logo} source={require('../image/Logo.png')} />
            </View>
            <View style={styles.grid}>
                <MenuItem image={require('../image/pregnent.png')} onPress={handleButton1} />
                <MenuItem image={require('../image/disabled.png')} onPress={handleButton2} />
                <MenuItem image={require('../image/bluetooth.png')} onPress={handleButton3} />
                <MenuItem image={require('../image/toilet.png')} onPress={handleButton4} />
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    grid: {flex: 1, flexDirection: "row", flexWrap: "wrap", alignItems: "center", padding: 25},
    image: {width: 160, height: 160, alignSelf: "center"},
    Logo: { width:400, height:90, resizeMode:"contain", backgroundColor: '#fff', alignItems: 'center', marginTop: "15%"}
})

export default ChannelList;