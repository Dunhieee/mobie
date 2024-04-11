import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Starting from '../Vocabulary/Starting';
import Plan from './CalendarPage';
import PlanSche from './CalendarPage';
import CalendarPage from './CalendarPage';

const TimeLine = ({ navigation }) => {
  const [startModalVisible, setStartModalVisible] = useState(false);
  const [endModalVisible, setEndModalVisible] = useState(false);
  const [repeatModalVisible, setRepeatModalVisible] = useState(false);
  const [selectedStartHour, setSelectedStartHour] = useState(null);
  const [selectedEndHour, setSelectedEndHour] = useState(null);
  const [selectedRepeatHour, setSelectedRepeatHour] = useState(null);
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const [selectedWeekdays, setSelectedWeekdays] = useState([]);

  const weekdays = [
    { id: 0, name: 'Monday' ,value:'02'},
    { id: 1, name: 'Tuesday' ,value:'03'},
    { id: 2, name: 'Wednesday',value:'04' },
    { id: 3, name: 'Thursday' ,value:'05'},
    { id: 4, name: 'Friday' ,value:'06'},
    { id: 5, name: 'Saturday' ,value:'07'},
    { id: 6, name: 'Sunday' ,value:'CN'},
  ];

  const toggleWeekday = (weekday) => {
    if (selectedWeekdays.includes(weekday)) {
      setSelectedWeekdays(selectedWeekdays.filter(day => day !== weekday));
    } else {
      setSelectedWeekdays([...selectedWeekdays, weekday]);
    }
  };
  const handleStartHourSelect = (hour) => {
    setSelectedStartHour(hour);
    setStartModalVisible(false);
  };

  const handleEndHourSelect = (hour) => {
    setSelectedEndHour(hour);
    setEndModalVisible(false);
  };

  const handleRepeatHourSelect = (hour) => {
    setSelectedRepeatHour(hour);
    setRepeatModalVisible(false);
  };
  const handleButtonPress = page => {
    // Thực hiện chuyển sang trang mới tương ứng với page
    navigation.navigate(page);
  };
  const handleSave = () => {
    // Xử lý lưu dữ liệu đã chọn ở đây
    console.log('Dữ liệu đã chọn:', selectedWeekdays);
    setRepeatModalVisible(false);
  };
  return (
    <View
    style={{
      display: 'flex',
      // justifyContent: 'center',
      // paddingHorizontal: 10,
      backgroundColor: '#181A20',
      height: '100%',
      // paddingBottom: 80,
    }}>
      <Header style={styles.header} />
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          display: 'flex',
          alignItems: 'center',
          top: -40, 

        }}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            color: '#6949FF',
            fontSize: 25,
          }}>
          THỜI GIAN
        </Text>
      </View>
      <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setStartModalVisible(true)}
      >
        <Text style={styles.buttonText}>Bắt đầu: {selectedStartHour !== null ? `${selectedStartHour.toString().padStart(2, '0')}:00` : 'Chọn giờ'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setEndModalVisible(true)}
      >
        <Text style={styles.buttonText}>Kết thúc: {selectedEndHour !== null ? `${selectedEndHour.toString().padStart(2, '0')}:00` : 'Chọn giờ'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setRepeatModalVisible(true)}
      >
        <Text style={styles.buttonText}>Lặp lại: {selectedWeekdays !== null ? `${selectedWeekdays.sort().toString()}` : 'Chọn '}</Text>
      </TouchableOpacity>

      <Modal
        visible={startModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setStartModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}
           showsVerticalScrollIndicator={false}>
            
            {hours.map((hour) => (
              <TouchableOpacity
                key={hour}
                style={[styles.hourButton, selectedStartHour === hour && styles.selectedHourButton]}
                onPress={() => handleStartHourSelect(hour)}
              >
                <Text style={styles.hourText}>{hour.toString().padStart(2, '0')}:00</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>

      <Modal
        visible={endModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setEndModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}>
          
            {hours.map((hour) => (
              <TouchableOpacity
                key={hour}
                style={[styles.hourButton, selectedEndHour === hour && styles.selectedHourButton]}
                onPress={() => handleEndHourSelect(hour)}
              >
                <Text style={styles.hourText}>{hour.toString().padStart(2, '0')}:00</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>

      <Modal
        visible={repeatModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setRepeatModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          {weekdays.map(weekday => (
            <TouchableOpacity
              key={weekday.id}
              style={[styles.weekdayButton, selectedWeekdays.includes(weekday.value) && styles.selectedWeekdayButton]}
              onPress={() => toggleWeekday(weekday.value)}
            >
              <Text style={styles.weekdayText}>{weekday.name}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleSave}
          >
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
    
    <TouchableOpacity
      style={styles.button1}
      onPress={() => handleButtonPress(CalendarPage)}>
      <View style={styles.nextButtonContainer}>
        <Text style={styles.nextButtonText}>NEXT</Text>
      </View>
    </TouchableOpacity>

    <View
        style={{
          
        }}>
        <Menu navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button1: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#6949FF',
    marginBottom: 100,
    width: '90%',
    borderRadius: 30,
    alignSelf: 'center', // Để căn giữa
  },
  nextButtonContainer: {
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
   
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: -50,
    padding: 20,
  },
  button: {
    backgroundColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

  },
  scrollViewContent: {
    alignItems: 'center',
    paddingTop: 50,

    
  },
  hourButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#eaeaea',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 10,
    padding: 15,
  },
  hourText: {
    fontSize: 16,
  },
  selectedHourButton: {
    backgroundColor: 'blue',
  },
  weekdayButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 10,
  },
  selectedWeekdayButton: {
    backgroundColor: '#00ccff', // Màu sắc khi được chọn
  },
  weekdayText: {
    fontSize: 16,
  },
  saveButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#00cc00', // Màu của nút "Save"
    borderRadius: 5,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default TimeLine;
