import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

type IconButtonProps = {
  Icon: any;
  onPress: () => void;
  color?: string;
  title?: string;
  iconSize?: number;
  titleTextSize?: number;
  testID?: string;
  disabled?: boolean;
};

export const IconButton = ({
  Icon,
  onPress,
  color,
  title,
  iconSize,
  titleTextSize,
  disabled,
}: IconButtonProps) => {
  const {colors} = useTheme();

  if (!color) {
    color = colors.text;
  }

  const localstyles = StyleSheet.create({
    button: {
      paddingVertical: 4,
      paddingHorizontal: 8,
    },
    hasTitle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      verticalAlign: 'middle',
      gap: 4,
    },
    title: {
      fontSize: titleTextSize ?? 14,
    },
  });

  return (
    <TouchableHighlight
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.6}
      underlayColor={colors.background}
    >
      <View
        style={
          title
            ? {...localstyles.hasTitle, ...localstyles.button}
            : localstyles.button
        }
      >
        <Icon
          color={color}
          height={iconSize ?? 24}
          width={iconSize ?? 24}
          strokeWidth={2}
        />
        <Text style={title ? {...localstyles.title, color} : {}}>
          {title ?? ''}
        </Text>
      </View>
    </TouchableHighlight>
  );
};
