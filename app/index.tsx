import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';
import { Feather } from '@expo/vector-icons';
import Animated, { FadeInUp } from 'react-native-reanimated';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <Animated.View entering={FadeInUp.duration(1000).springify()} style={styles.authCardWrapper}>
        <BlurView intensity={80} tint="light" style={styles.authCard}>
          
          <Text style={styles.heroTitle}>The Complete Digital Workspace for Packers & Movers</Text>
          <Text style={styles.heroSubtitle}>
            Generate Quotations, LR/Bilty, and Final Bills instantly from your phone. Send PDFs to clients via WhatsApp in 30 seconds.
          </Text>

          <View style={styles.featureGrid}>
             <View style={styles.featureItem}><Feather name="file-text" size={24} color="#007AFF" /><Text style={styles.featureText}>Instant Quotations</Text></View>
             <View style={styles.featureItem}><Feather name="truck" size={24} color="#5856D6" /><Text style={styles.featureText}>LR & Bilty Generation</Text></View>
             <View style={styles.featureItem}><Feather name="credit-card" size={24} color="#34C759" /><Text style={styles.featureText}>Money Receipts</Text></View>
          </View>

          <TouchableOpacity style={styles.primaryButton} activeOpacity={0.8}>
            <Text style={styles.primaryButtonText}>Coming Soon to Google Play</Text>
          </TouchableOpacity>

        </BlurView>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  authCardWrapper: { shadowColor: '#000', shadowOffset: { width: 0, height: 20 }, shadowOpacity: 0.1, shadowRadius: 35, width: '100%', maxWidth: 700 },
  authCard: { borderRadius: 32, padding: 40, backgroundColor: 'rgba(255,255,255,0.7)', alignItems: 'center' }, 
  heroTitle: { fontSize: 36, fontWeight: '800', color: '#1C1C1E', textAlign: 'center', marginBottom: 16 },
  heroSubtitle: { fontSize: 18, color: '#555', textAlign: 'center', lineHeight: 28, marginBottom: 40 },
  
  featureGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 20, marginBottom: 40 },
  featureItem: { alignItems: 'center', backgroundColor: '#FFF', padding: 20, borderRadius: 16, minWidth: 160, shadowColor: '#000', shadowOffset: {width:0, height:4}, shadowOpacity: 0.05, shadowRadius: 8 },
  featureText: { marginTop: 12, fontSize: 16, fontWeight: '600', color: '#1C1C1E' },

  primaryButton: { backgroundColor: '#007AFF', paddingHorizontal: 40, height: 60, borderRadius: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', shadowColor: '#007AFF', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.3, shadowRadius: 16 },
  primaryButtonText: { color: '#FFFFFF', fontSize: 18, fontWeight: '700' },
});