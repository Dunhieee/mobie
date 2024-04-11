import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {RadioButton, Text} from 'react-native-paper';

const SelectComponent = ({languages, value,  setValue}) => {
//   const [value, setValue] = React.useState(null);

  const handleLanguageSelect = newValue => {
    setValue(newValue);
   
    // Thực hiện các tác vụ khác liên quan đến chọn ngôn ngữ ở đây
  };

  return (
    <View style={{paddingHorizontal: 20}}>
      <RadioButton.Group onValueChange={handleLanguageSelect} value={value}>
        {languages.map(language => (
          <View key={language.code} style={styles.radioButtonContainer}>
            <View>
              {/* <Image
                style={{height: 150, width: 150}}
                source={require('../../assets/Images/logo.png')}
            /> */}
            </View>
            <View style={styles.languageSelect}>
              <Text>{language.name}</Text>
            </View>
            <View>
              <RadioButton value={language.code} />
            </View>
          </View>
        ))}
      </RadioButton.Group>
    </View>
  );
};

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#ccc',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10

  },
  languageSelect: {
    width: '85%'
  }
});

export default SelectComponent;
