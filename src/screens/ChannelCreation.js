import React from 'react';
import styled from 'styled-components/native';
import { Text, Button, Image, StyleSheet, View } from 'react-native';
import ImageItem from '../components/ImageItem';




const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
`;

const ChannelCreation = ({ navigation }) => {
    return (
        <Container>
            <View>
                <Image style={styles.Logo} source={require('../image/Logo.png')} />
            </View>
            <ImageItem image={require('../image/nfccard.png')} />  
            <Text style={{ flex: 1.5, color: '#638943', fontWeight:"bold", fontSize: 20, marginTop: 20}}>NFC Tagging을 진행해주세요.</Text>
        </Container>
    );
};
const styles = StyleSheet.create({
    Logo: { width:400, height:90, resizeMode:"contain", backgroundColor: '#fff', alignItems: 'center', marginBottom: "15%", marginTop: "5%"}
})

export default ChannelCreation;