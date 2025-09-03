// components/HomeCalendar.tsx
import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { ComponentStyles } from '../constants/ComponentStyles';
import { getCompletedHabitsByDate } from '../utils/localStorage';

interface HomeCalendarProps {}

const HomeCalendar: React.FC<HomeCalendarProps> = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [markedDates, setMarkedDates] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    setCurrentDate(formattedDate);

    const fetchCompletedHabits = async () => {
      const completedHabits = await getCompletedHabitsByDate();
      const markings: { [key: string]: any } = {};

      Object.keys(completedHabits).forEach(date => {
        const percent = completedHabits[date]; // value between 0-1
        const fadedColor = `rgba(255, 165, 0, ${percent})`; // orange with opacity
        markings[date] = {
          customStyles: {
            container: { backgroundColor: fadedColor, borderRadius: 8 },
            text: { color: 'black', fontWeight: '600' },
          },
        };
      });

      // Highlight today
      markings[formattedDate] = {
        ...markings[formattedDate],
        customStyles: {
          container: {
            backgroundColor: '#FFA500', // solid orange
            borderRadius: 8,
            borderWidth: 2,
            borderColor: '#FF8C00',
          },
          text: { color: 'white', fontWeight: 'bold' },
        },
      };

      setMarkedDates(markings);
    };

    fetchCompletedHabits();
  }, []);

  const onDayPress = (day: any) => {
    Alert.alert("Habits for " + day.dateString, "Show completed habits or navigate to details");
  };
  

  return (
    <View style={[ComponentStyles.calendarContainer, {
      margin: 16,
      borderRadius: 12,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 5,
      backgroundColor: '#ffffff',
      padding: 10,
    }]}>
      <Calendar
        onDayPress={onDayPress}
        markingType="custom"
        markedDates={markedDates}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#7f8c8d',
          todayTextColor: '#FF8C00',
          dayTextColor: '#2c3e50',
          textDisabledColor: '#bdc3c7',
          dotColor: '#FF8C00',
          selectedDotColor: 'white',
          arrowColor: '#FF8C00',
          monthTextColor: '#2c3e50',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '600',
          textDayFontSize: 16,
          textMonthFontSize: 20,
          textDayHeaderFontSize: 14,
        }}
        style={{
          borderRadius: 10,
        }}
      />
    </View>
  );
};

export default HomeCalendar;
