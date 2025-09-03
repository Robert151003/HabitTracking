import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface NavbarProps {
  activeRoute: string;
}

export default function Navbar({ activeRoute }: NavbarProps) {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const navigateTo = (path: string) => {
    router.replace(path as any);
  };

  return (
    <View style={[styles.navbarContainer, { paddingBottom: insets.bottom }]}>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigateTo('/(tabs)/(home)')}>
        <FontAwesome
          name="home"
          size={24}
          color={activeRoute === '/(tabs)/(home)' ? '#3498db' : '#7f8c8d'}
        />
        <Text style={[
          styles.navButtonText,
          activeRoute === '/(tabs)/(home)' ? { color: '#3498db' } : { color: '#7f8c8d' },
        ]}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigateTo('/(tabs)/(home)/habits')}>
        <FontAwesome
          name="list"
          size={24}
          color={activeRoute === '/(tabs)/(home)/habits' ? '#3498db' : '#7f8c8d'}
        />
        <Text style={[
          styles.navButtonText,
          activeRoute === '/(tabs)/(home)/habits' ? { color: '#3498db' } : { color: '#7f8c8d' },
        ]}>
          Habits
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigateTo('/(tabs)/profile')}>
        <FontAwesome
          name="user"
          size={24}
          color={activeRoute === '/(tabs)/profile' ? '#3498db' : '#7f8c8d'}
        />
        <Text style={[
          styles.navButtonText,
          activeRoute === '/(tabs)/profile' ? { color: '#3498db' } : { color: '#7f8c8d' },
        ]}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 10,
  },
  navButton: {
    alignItems: 'center',
    flex: 1,
  },
  navButtonText: {
    fontSize: 12,
    marginTop: 5,
  },
});
