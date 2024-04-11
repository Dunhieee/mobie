import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,Modal} from 'react-native';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import Icon từ thư viện react-native-vector-icons

const CalendarPage = ({navigation}) => {
  const daysInMonth = 31;
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [modalVisible, setModalVisible] = useState(false);
  const firstDayOfMonth = new Date(2024, 2, 1);
  const startingDayOfWeek = firstDayOfMonth.getDay();
  const previousMonthDays = startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1;
  const totalDaysToShow = previousMonthDays + daysInMonth;

  const calendarDays = [];

  for (let i = previousMonthDays; i > 0; i--) {
    const date = new Date(2024, 1, i);
    calendarDays.unshift({
      day: i,
      month: date.getMonth(),
      year: date.getFullYear(),
      isCurrentMonth: false,
    });
  }

  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push({
      day: i,
      month: 2,
      year: 2024,
      isCurrentMonth: true,
    });
  }

  calendarDays.forEach(day => {
    const date = new Date(2024, 2, day.day);
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 2 || dayOfWeek === 4) {
      day.hasStar = true;
    } else {
      day.hasStar = false;
    }
  });
  const handleDayPress = () => {
    // Xử lý sự kiện khi người dùng nhấn vào một ngày
    setModalVisible(true); // Hiển thị modal
  };

  return (
    <View style={styles.container}>
      <Header style={styles.header} />
      <View style={styles.calendarContainer}>
        <Text style={styles.title}>March 2024</Text>
        <View style={styles.weekdaysContainer}>
          {weekdays.map(day => (
            <Text key={day} style={styles.weekdayText}>{day}</Text>
          ))}
        </View>
        <View style={styles.daysContainer}>
          {calendarDays.map((item, index) => (
            
             <View key={index} style={item.isCurrentMonth ? styles.dayContainer : styles.emptyContainer}>
              {item.isCurrentMonth && (
                <TouchableOpacity onPress={handleDayPress}>
                <View style={styles.dayContent}>
                  <Text style={styles.dayText}>{item.day}</Text>
                
                  {item.hasStar && <Icon name="star" size={16} style={styles.starText} />}
                  
                </View>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>
      </View>
      <Menu navigation={navigation} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Bạn có lịch học từ vựng lúc 19h00</Text>
            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: '#6949FF' }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Đóng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A20',
    
  },
  calendarContainer: {
    // flex: 1,
    height: '55%',
    backgroundColor: '#ffffff',
    padding: 20,
    marginBottom: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  weekdaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  weekdayText: {
    fontSize: 16,
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayContainer: {
    width: '14.285%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  emptyContainer: {
    width: '14.285%',
    aspectRatio: 1,
  },
  dayText: {
    fontSize: 16,
    padding: 15,
  },
  starText: {
    color: 'gold', // Màu của biểu tượng sao
    position: 'absolute', // Để đặt sao trên ngày
    bottom: 2, // Điều chỉnh vị trí của sao
    right: 2, // Điều chỉnh vị trí của sao
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
  openButton: {
    backgroundColor: '#6949FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CalendarPage;
