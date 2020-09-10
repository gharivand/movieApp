import React from 'react';
import {RefreshControl, ScrollView, StyleSheet, View} from 'react-native';
import {colors} from '../assets/theme';

const ScrollViewContainer = ({children, isContentCenter, styleContainer, header, footer, refreshing, onRefresh, context, onContentSizeChange}) => {
    return (
        <View style={styles.viewContainer}>
            {header}
            <ScrollView
                ref={ref => context = ref}
                onContentSizeChange={() => onContentSizeChange ? onContentSizeChange(context) : {}}
                keyboardShouldPersistTaps='handled'
                showsVerticalScrollIndicator={false}
                refreshControl={onRefresh ?
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/> : null
                }
                contentContainerStyle={[isContentCenter ? styles.containerCenter : styles.scrollContainer, styleContainer]}>
                {children}
            </ScrollView>
            {footer}
        </View>
    );
};

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: colors.backColor,
    },
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: colors.backColor,
    },
    containerCenter: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backColor,
    },
});

export {ScrollViewContainer};
