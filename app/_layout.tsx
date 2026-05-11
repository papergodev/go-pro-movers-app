import { DancingScript_700Bold, useFonts } from '@expo-google-fonts/dancing-script';
import { BlurView } from 'expo-blur';
import { Link, Slot } from 'expo-router';
import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

export default function RootLayout() {
  let [fontsLoaded] = useFonts({ DancingScript_700Bold });

  // Animation Values
  const bubble1Y = useSharedValue(0);
  const bubble2Y = useSharedValue(0);
  const bubble3Y = useSharedValue(0);

  useEffect(() => {
    bubble1Y.value = withRepeat(withTiming(-50, { duration: 6000, easing: Easing.inOut(Easing.ease) }), -1, true);
    bubble2Y.value = withRepeat(withTiming(-70, { duration: 7000, easing: Easing.inOut(Easing.ease) }), -1, true);
    bubble3Y.value = withRepeat(withTiming(-60, { duration: 8000, easing: Easing.inOut(Easing.ease) }), -1, true);
  }, []);

  const animatedBubble1Style = useAnimatedStyle(() => ({ transform: [{ translateY: bubble1Y.value }] }));
  const animatedBubble2Style = useAnimatedStyle(() => ({ transform: [{ translateY: bubble2Y.value }] }));
  const animatedBubble3Style = useAnimatedStyle(() => ({ transform: [{ translateY: bubble3Y.value }] }));

  if (!fontsLoaded) return null;

  return (
    <View style={styles.mainContainer}>
      {/* BACKGROUND ANIMATION */}
      <View style={styles.backgroundContainer}>
        <Animated.View style={[styles.bubble, styles.bubble1, animatedBubble1Style]} />
        <Animated.View style={[styles.bubble, styles.bubble2, animatedBubble2Style]} />
        <Animated.View style={[styles.bubble, styles.bubble3, animatedBubble3Style]} />
        <BlurView intensity={90} style={StyleSheet.absoluteFill} tint="default" />
      </View>

      {/* TOP NAVBAR */}
      <View style={styles.navbar}>
        <Link href="/" style={{ textDecorationLine: 'none' }}>
          <View style={styles.logoRow}>
            <Text style={styles.brandPaper}>Go Pro </Text>
            <Text style={styles.brandGo}>Movers</Text>
            <View style={styles.dot} />
          </View>
        </Link>
        <View style={styles.navLinks}>
          <Link href="/terms" style={styles.link}>Terms</Link>
          <Link href="/support" style={styles.link}>Support</Link>
          <Link href="/privacy" style={styles.link}>Privacy Policy</Link>
        </View>
      </View>

      {/* PAGE CONTENT (Renders index, support, or privacy here) */}
      <Slot />
      
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#F2F2F7' },
  
  backgroundContainer: { ...StyleSheet.absoluteFillObject, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', zIndex: -1 },
  bubble: { position: 'absolute' },
  bubble1: { width: 400, height: 400, borderRadius: 200, backgroundColor: '#007AFF', top: '10%', right: width > 800 ? '10%' : -50, opacity: 0.7 }, 
  bubble2: { width: 350, height: 350, borderRadius: 175, backgroundColor: '#5856D6', bottom: '15%', left: width > 800 ? '10%' : -50, opacity: 0.6 }, 
  bubble3: { width: 250, height: 250, borderRadius: 125, backgroundColor: '#AF52DE', top: '40%', left: '40%', opacity: 0.6 },

  navbar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 40, paddingVertical: 20, zIndex: 10 },
  logoRow: { flexDirection: 'row', alignItems: 'flex-end' },
  brandPaper: { fontFamily: 'DancingScript_700Bold', fontSize: 36, color: '#1C1C1E' },
  brandGo: { fontFamily: 'DancingScript_700Bold', fontSize: 36, color: '#007AFF' },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#34C759', marginBottom: 10, marginLeft: 4 },
  
  navLinks: { flexDirection: 'row', gap: 30, alignItems: 'center' },
  link: { fontSize: 16, color: '#1C1C1E', fontWeight: '600', textDecorationLine: 'none' },
});