import React, { useState, useEffect } from 'react';
import { View, Text } from "react-native";
import { ComponentStyles } from '../../../constants/ComponentStyles';
import { getCurrentStreak } from "../../../utils/localStorage";
import Navbar from '../../../components/navbar';
import InformationCard from '@/components/Profile/InformationCard';
import { usePathname, Link } from "expo-router";
import HomeCalendar from '../../../components/HomeCalendar';
import quotes from '../../../constants/quotes'

export default function HomeScreen() {
  const pathname = usePathname();
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [quote, setQuote] = useState<string>('');

  useEffect(() => {
    const fetchStreak = async () => {
      const streak = await getCurrentStreak();
      setCurrentStreak(streak);
    };
    fetchStreak();

    const today = new Date();
    const dayIndex = today.getDate() % quotes.length; // cycles through quotes
    setQuote(quotes[dayIndex]);
  }, []);

  return (
    <View style={ComponentStyles.fullScreenContainer}>
      <View style={ComponentStyles.container}>
        
        <HomeCalendar /> 

        <Link href={{ pathname: "/(tabs)/(home)/habits-details/[id]", params: { id: '1' } }}>
          Habit Details (ID 1)
        </Link>

        <View style={ComponentStyles.horizontalContainer}>
          <InformationCard title="Habits Complete" value={currentStreak} />
          <InformationCard title="Current Streak" value={currentStreak} />
        </View>

        {/* Motivational Quote */}
        <View style={ComponentStyles.quoteContainer}>
          <Text style={ComponentStyles.quoteText}>{quote}</Text>
        </View>
      </View>
      <Navbar activeRoute={pathname} />
    </View>
  );
}
