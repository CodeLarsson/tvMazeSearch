import {useTheme} from '@react-navigation/native';
import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';

type IconButtonProps = {
  Icon: any;
  onPress: () => void;
  color?: string;
};

export const IconButton = ({Icon, onPress, color}: IconButtonProps) => {
  const {colors} = useTheme();

  if (!color) {
    color = colors.text;
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>
        <Icon color={color} height={24} width={24} strokeWidth={2} />
      </View>
    </TouchableWithoutFeedback>
  );
};
