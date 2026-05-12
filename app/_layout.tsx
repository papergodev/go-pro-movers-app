import { DancingScript_700Bold, useFonts } from '@expo-google-fonts/dancing-script';
import { BlurView } from 'expo-blur';
import { Link, Slot } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, useWindowDimensions, TouchableOpacity } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming, FadeInDown, FadeOutUp } from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';

export default function RootLayout() {
  let [fontsLoaded] = useFonts({ DancingScript_700Bold });
  
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Background Animation Values
  const bubble1Y = useSharedValue(0);
  const bubble2Y = useSharedValue(0);
  const bubble3Y = useSharedValue(0);

  useEffect(() => {
    // Firing the animations once when the layout mounts
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
      
      {/* BACKGROUND ANIMATION - Fixed Web Z-Index Bug */}
      <View style={styles.backgroundContainer}>
        <Animated.View style={[styles.bubble, styles.bubble1, animatedBubble1Style]} />
        <Animated.View style={[styles.bubble, styles.bubble2, animatedBubble2Style]} />
        <Animated.View style={[styles.bubble, styles.bubble3, animatedBubble3Style]} />
        {/* Lowered intensity to 60 so the bubbles pop more through the glass */}
        <BlurView intensity={60} style={StyleSheet.absoluteFill} tint="light" />
      </View>

      {/* TOP NAVBAR - Always one horizontal line */}
      <View style={[styles.navbar, isMobile && styles.navbarMobile]}>
        
        {/* LOGO */}
        <Link href="/" style={{ textDecorationLine: 'none' }}>
          <View style={styles.logoRow}>
            <Text style={[styles.brandPaper, isMobile && styles.brandTextMobile]}>Go Pro </Text>
            <Text style={[styles.brandGo, isMobile && styles.brandTextMobile]}>Movers</Text>
            <View style={styles.dot} />
          </View>
        </Link>

        {/* DESKTOP LINKS */}
        {!isMobile && (
          <View style={styles.navLinks}>
            <Link href="/" style={styles.link}>Home</Link>
            <Link href="/terms" style={styles.link}>Terms</Link>
            <Link href="/support" style={styles.link}>Support</Link>
            <Link href="/privacy" style={styles.link}>Privacy</Link>
          </View>
        )}

        {/* MOBILE HAMBURGER BUTTON */}
        {isMobile && (
          <TouchableOpacity 
            style={styles.hamburgerButton} 
            onPress={() => setIsMenuOpen(!isMenuOpen)}
            activeOpacity={0.7}
          >
            <Feather name={isMenuOpen ? "x" : "menu"} size={28} color="#1C1C1E" />
          </TouchableOpacity>
        )}
      </View>

      {/* MOBILE DROPDOWN MENU */}
      {isMobile && isMenuOpen && (
        <Animated.View entering={FadeInDown.duration(300)} exiting={FadeOutUp.duration(300)} style={styles.mobileMenu}>
          <BlurView intensity={95} tint="light" style={styles.mobileMenuBlur}>
            <Link href="/" onPress={() => setIsMenuOpen(false)} style={styles.mobileLink}>Home</Link>
            <Link href="/terms" onPress={() => setIsMenuOpen(false)} style={styles.mobileLink}>Terms & Conditions</Link>
            <Link href="/support" onPress={() => setIsMenuOpen(false)} style={styles.mobileLink}>Help & Support</Link>
            <Link href="/privacy" onPress={() => setIsMenuOpen(false)} style={styles.mobileLink}>Privacy Policy</Link>
          </BlurView>
        </Animated.View>
      )}

      {/* PAGE CONTENT */}
      <Slot />
      
    </View>
  );
}

const styles = StyleSheet.create({
  /* Removed solid background here so it doesn't cover the bubbles */
  mainContainer: { flex: 1 }, 
  
  /* Restored Background Styles - Moved solid background color here! */
  backgroundContainer: { ...StyleSheet.absoluteFillObject, backgroundColor: '#F2F2F7', overflow: 'hidden', justifyContent: 'center', alignItems: 'center' },
  bubble: { position: 'absolute' },
  bubble1: { width: '40%', aspectRatio: 1, borderRadius: 999, backgroundColor: '#007AFF', top: '5%', right: '-10%', opacity: 0.6 }, 
  bubble2: { width: '45%', aspectRatio: 1, borderRadius: 999, backgroundColor: '#5856D6', bottom: '10%', left: '-10%', opacity: 0.5 }, 
  bubble3: { width: '30%', aspectRatio: 1, borderRadius: 999, backgroundColor: '#AF52DE', top: '35%', left: '35%', opacity: 0.5 },

  /* Navbar Styles */
  navbar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 40, paddingVertical: 20, zIndex: 50 },
  navbarMobile: { paddingHorizontal: 20, paddingVertical: 16 }, 
  
  logoRow: { flexDirection: 'row', alignItems: 'flex-end' },
  brandPaper: { fontFamily: 'DancingScript_700Bold', fontSize: 36, color: '#1C1C1E' },
  brandGo: { fontFamily: 'DancingScript_700Bold', fontSize: 36, color: '#007AFF' },
  brandTextMobile: { fontSize: 30 }, 
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#34C759', marginBottom: 8, marginLeft: 4 },
  
  /* Desktop Links */
  navLinks: { flexDirection: 'row', gap: 32, alignItems: 'center' },
  link: { fontSize: 16, color: '#1C1C1E', fontWeight: '600', textDecorationLine: 'none' },

  /* Mobile Menu Styles */
  hamburgerButton: { padding: 4 },
  mobileMenu: { position: 'absolute', top: 75, left: 20, right: 20, zIndex: 40, borderRadius: 24, overflow: 'hidden', shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.1, shadowRadius: 20, elevation: 10 },
  mobileMenuBlur: { padding: 24, paddingVertical: 32, gap: 24, backgroundColor: 'rgba(255,255,255,0.7)' },
  mobileLink: { fontSize: 18, color: '#1C1C1E', fontWeight: '700', textDecorationLine: 'none', textAlign: 'center' },
});