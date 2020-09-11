import React from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    TouchableOpacity,
    Dimensions,
    Keyboard,
} from 'react-native';
import {colors} from '../assets/theme';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBar = ({value, onChangeText, onClearText, backStyle, placeHolder}) => {
    return (
        <View style={[styles.container, backStyle]}>
            <TouchableOpacity
                activeOpacity={value.length > 0 ? 0.7 : 1}
                onPress={value.length > 0 ? onClearText || Keyboard.dismiss : undefined}
                style={styles.buttonStyle}
            >
                {value.length > 0 ?
                    <Icon size={22} color={colors.gray} name={'ios-close'}/> :
                    <Icon size={22} color={colors.gray} name={'ios-search'}/>
                }
            </TouchableOpacity>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={styles.textInputStyle}
                placeholder={placeHolder ? placeHolder : 'جستجو'}
                placeholderTextColor={colors.grey}
                underlineColorAndroid='transparent'
                blurOnSubmit={false}
                onSubmitEditing={Keyboard.dismiss}
                returnKeyType={'done'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width - 20,
        height: 40,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 5,
        borderColor: colors.lightGrey,
        borderWidth: 1,
        alignSelf: 'center',
        marginTop: 10,
    },
    textInputStyle: {
        fontSize: 14,
        color: colors.black,
        left: 0,
        width: Dimensions.get('screen').width - 60,
        paddingHorizontal: 5,
    },
    buttonStyle: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export {SearchBar};
