import React from 'react';
import { View, TextInput, Text, StyleSheet} from 'react-native';

interface InputWithStaticLabelProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
}

const InputWithStaticLabel: React.FC<InputWithStaticLabelProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.inputContainer}>
      {/* Label placed statically like legend */}
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}  // Empty placeholder
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 12,
    position: 'relative',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    paddingTop: 20, // Adjust padding for label space
    width: '100%', // Full width
  },
  label: {
    position: 'absolute',
    top: -10, // Positioned on the border outline
    left: 20, // Adjust for horizontal centering
    backgroundColor: '#FFF', // Matches the background to overlay correctly
    paddingHorizontal: 5, // Padding for "legend" effect
    fontSize: 14,
    color: '#000',
    zIndex: 1,
  },
  input: {
    height:25, // Reduced height for a less boxy appearance
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 5, // Vertical padding to center text
    color: "#000",
    zIndex: 0, // Ensure it's behind the label
  },
});

export default InputWithStaticLabel;
