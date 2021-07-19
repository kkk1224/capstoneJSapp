import React from 'react';
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function ImgaeItem(props) {
    
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Image source={props.image} style={{width: 300, height: 300, alignSelf: "center"}} />
        </TouchableOpacity>
    )
}
