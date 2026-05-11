import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { BlurView } from 'expo-blur';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';

export default function Support() {
  const handleEmailSupport = () => {
    Linking.openURL('mailto:papergo.dev@gmail.com?subject=Go Pro Movers Support Request');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <Animated.View entering={FadeInUp.duration(800).springify()} style={styles.authCardWrapper}>
        <BlurView intensity={80} tint="light" style={styles.authCard}>
          
          <Text style={styles.title}>Help & Support</Text>

          {/* VISUAL GUIDE / SCREENSHOTS SECTION */}
          <View style={styles.section}>
            <Text style={styles.heading}>How to use Go Pro Movers</Text>
            <Text style={styles.text}>Swipe to see the quick workflow guide:</Text>
            
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carouselContainer}>
              
              {/* Screenshot 1 Placeholder */}
              <View style={styles.screenshotPlaceholder}>
                <Feather name="image" size={32} color="#8E8E93" />
                <Text style={styles.screenshotText}>Step 1: Create Quote</Text>
                {/* TO DO BEFORE DEPLOY: Replace this View with your actual image */}
                {/* <Image source={require('../assets/images/screenshot1.png')} style={styles.actualImage} /> */}
              </View>

              {/* Screenshot 2 Placeholder */}
              <View style={styles.screenshotPlaceholder}>
                <Feather name="image" size={32} color="#8E8E93" />
                <Text style={styles.screenshotText}>Step 2: Convert to LR</Text>
              </View>

              {/* Screenshot 3 Placeholder */}
              <View style={styles.screenshotPlaceholder}>
                <Feather name="image" size={32} color="#8E8E93" />
                <Text style={styles.screenshotText}>Step 3: Generate Bill</Text>
              </View>

              {/* Screenshot 4 Placeholder */}
              <View style={styles.screenshotPlaceholder}>
                <Feather name="image" size={32} color="#8E8E93" />
                <Text style={styles.screenshotText}>Step 4: Share PDF</Text>
              </View>

            </ScrollView>
          </View>

          {/* CONTACT US SECTION */}
          <View style={styles.section}>
            <Text style={styles.heading}>Contact Us</Text>
            <Text style={styles.text}>Need help with the app, setting up your business profile, or billing? Reach out to our support team:</Text>
            
            <TouchableOpacity style={styles.emailButton} onPress={handleEmailSupport}>
              <Feather name="mail" size={20} color="#FFF" />
              <Text style={styles.emailButtonText}>papergo.dev@gmail.com</Text>
            </TouchableOpacity>
          </View>

          {/* ACCOUNT DELETION SECTION */}
          <View style={[styles.section, { borderBottomWidth: 0, marginBottom: 0 }]}>
            <Text style={styles.heading}>Account & Data Deletion</Text>
            <Text style={styles.text}>
              If you wish to delete your Go Pro Movers account and permanently erase all associated data (including Quotations, Invoices, and LR records), please send an email to our support team with the subject line "Account Deletion Request".
            </Text>
            <Text style={[styles.text, { marginTop: 10 }]}>
              Please include the phone number registered with your account. Data deletion requests are processed and wiped from our servers within 48 hours.
            </Text>
          </View>

        </BlurView>
      </Animated.View>

      {/* FOOTER */}
      <Animated.View entering={FadeInUp.duration(800).delay(200).springify()} style={styles.footer}>
        <Text style={styles.footerText}>© {new Date().getFullYear()} Go Pro Movers. All rights reserved.</Text>
        <Text style={styles.footerText}>Contact: papergo.dev@gmail.com</Text>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: { flexGrow: 1, padding: 20, alignItems: 'center', paddingTop: 40, paddingBottom: 60 },
  authCardWrapper: { shadowColor: '#000', shadowOffset: { width: 0, height: 20 }, shadowOpacity: 0.1, shadowRadius: 35, width: '100%', maxWidth: 700 },
  authCard: { borderRadius: 32, padding: 40, backgroundColor: 'rgba(255,255,255,0.7)' }, 
  title: { fontSize: 32, fontWeight: '800', color: '#1C1C1E', marginBottom: 30, textAlign: 'center' },
  section: { borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.1)', paddingBottom: 24, marginBottom: 24 },
  heading: { fontSize: 20, fontWeight: '700', marginBottom: 12, color: '#1C1C1E' },
  text: { fontSize: 16, color: '#444', lineHeight: 24 },
  
  carouselContainer: { marginTop: 16, paddingBottom: 10 },
  screenshotPlaceholder: { width: 140, height: 260, backgroundColor: '#E5E5EA', borderRadius: 16, marginRight: 16, justifyContent: 'center', alignItems: 'center', padding: 10, borderWidth: 1, borderColor: '#D1D1D6' },
  screenshotText: { fontSize: 12, color: '#8E8E93', fontWeight: '600', marginTop: 12, textAlign: 'center' },
  actualImage: { width: '100%', height: '100%', borderRadius: 16, resizeMode: 'cover' }, // Use this style when you add the Image tag

  emailButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#007AFF', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 12, alignSelf: 'flex-start', marginTop: 12 },
  emailButtonText: { color: '#FFF', fontSize: 16, fontWeight: '600', marginLeft: 8 },

  footer: { marginTop: 30, alignItems: 'center', opacity: 0.6 },
  footerText: { fontSize: 14, color: '#1C1C1E', marginBottom: 4, fontWeight: '500' },
});