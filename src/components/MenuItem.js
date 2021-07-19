import React from 'react';
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function MenuItem(props) {
    
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Image source={props.image} style={{width: 160, height: 160, alignSelf: "center"}} />
        </TouchableOpacity>
    )
}
