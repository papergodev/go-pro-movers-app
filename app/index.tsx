import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native';
import { BlurView } from 'expo-blur';
import { Feather } from '@expo/vector-icons';
import Animated, { FadeInUp } from 'react-native-reanimated';

export default function Home() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <Animated.View entering={FadeInUp.duration(1000).springify()} style={styles.authCardWrapper}>
        <BlurView intensity={80} tint="light" style={[styles.authCard, isMobile && { padding: 24 }]}>
          
          {/* HERO SECTION */}
          <View style={styles.heroSection}>
            <Text style={[styles.heroTitle, isMobile && styles.heroTitleMobile]}>
              The Complete Digital Workspace for Packers & Movers
            </Text>
            <Text style={[styles.heroSubtitle, isMobile && styles.heroSubtitleMobile]}>
              Say goodbye to messy paper diaries. Paper Go lets you generate professional Quotations, LR/Bilties, and Final Bills instantly from your phone. Send polished PDFs to clients via WhatsApp in under 30 seconds.
            </Text>
          </View>

          {/* HOW IT WORKS PIPELINE */}
          <View style={styles.pipelineSection}>
            <Text style={styles.sectionHeading}>How Paper Go Streamlines Your Business</Text>
            <View style={[styles.pipelineGrid, isMobile && styles.pipelineGridMobile]}>
              <View style={styles.pipelineStep}>
                <View style={styles.stepCircle}><Text style={styles.stepNumber}>1</Text></View>
                <Text style={styles.stepTitle}>Quick Quote</Text>
                <Text style={styles.stepText}>Enter basic job details and instantly generate a beautifully formatted cost estimate.</Text>
              </View>
              <View style={styles.pipelineStep}>
                <View style={styles.stepCircle}><Text style={styles.stepNumber}>2</Text></View>
                <Text style={styles.stepTitle}>1-Click Bilty</Text>
                <Text style={styles.stepText}>Convert that quote directly into a Lorry Receipt (LR) without re-typing any data.</Text>
              </View>
              <View style={styles.pipelineStep}>
                <View style={styles.stepCircle}><Text style={styles.stepNumber}>3</Text></View>
                <Text style={styles.stepTitle}>Final Bill</Text>
                <Text style={styles.stepText}>Generate the final GST/Non-GST invoice and securely save it to the cloud.</Text>
              </View>
            </View>
          </View>

          {/* CORE FEATURES GRID */}
          <Text style={[styles.sectionHeading, { marginTop: 20 }]}>Everything You Need to Scale</Text>
          <View style={styles.featureGrid}>
             <View style={[styles.featureItem, isMobile && styles.featureItemMobile]}>
                <Feather name="truck" size={28} color="#007AFF" />
                <Text style={styles.featureText}>LR & Bilty Generation</Text>
             </View>
             <View style={[styles.featureItem, isMobile && styles.featureItemMobile]}>
                <Feather name="file-text" size={28} color="#5856D6" />
                <Text style={styles.featureText}>Quotations & Bills</Text>
             </View>
             <View style={[styles.featureItem, isMobile && styles.featureItemMobile]}>
                <Feather name="list" size={28} color="#FF9500" />
                <Text style={styles.featureText}>Detailed Goods Lists</Text>
             </View>
             <View style={[styles.featureItem, isMobile && styles.featureItemMobile]}>
                <Feather name="pen-tool" size={28} color="#FF2D55" />
                <Text style={styles.featureText}>Custom Logos & Signatures</Text>
             </View>
             <View style={[styles.featureItem, isMobile && styles.featureItemMobile]}>
                <Feather name="cloud" size={28} color="#34C759" />
                <Text style={styles.featureText}>Secure Cloud Backup</Text>
             </View>
             <View style={[styles.featureItem, isMobile && styles.featureItemMobile]}>
                <Feather name="share-2" size={28} color="#00C7BE" />
                <Text style={styles.featureText}>1-Tap WhatsApp Share</Text>
             </View>
          </View>

          {/* CALL TO ACTION */}
          <View style={styles.ctaContainer}>
            <Text style={styles.ctaSubtext}>Stop losing paperwork. Start closing more deals.</Text>
            <TouchableOpacity style={[styles.primaryButton, isMobile && styles.primaryButtonMobile]} activeOpacity={0.8}>
              <Feather name="play" size={20} color="#FFF" style={{ marginRight: 10 }} />
              <Text style={styles.primaryButtonText}>Coming Soon to Google Play</Text>
            </TouchableOpacity>
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
  scrollContent: { flexGrow: 1, alignItems: 'center', padding: 20, paddingTop: 40, paddingBottom: 60 },
  authCardWrapper: { shadowColor: '#000', shadowOffset: { width: 0, height: 20 }, shadowOpacity: 0.1, shadowRadius: 35, width: '100%', maxWidth: 900 },
  authCard: { borderRadius: 32, padding: 48, backgroundColor: 'rgba(255,255,255,0.75)', alignItems: 'center' }, 
  
  heroSection: { alignItems: 'center', marginBottom: 40, maxWidth: 700 },
  heroTitle: { fontSize: 46, fontWeight: '900', color: '#1C1C1E', textAlign: 'center', marginBottom: 16, lineHeight: 52 },
  heroTitleMobile: { fontSize: 32, lineHeight: 38 },
  heroSubtitle: { fontSize: 20, color: '#444', textAlign: 'center', lineHeight: 30 },
  heroSubtitleMobile: { fontSize: 16, lineHeight: 24 },
  
  sectionHeading: { fontSize: 24, fontWeight: '800', color: '#1C1C1E', textAlign: 'center', marginBottom: 24 },
  
  pipelineSection: { width: '100%', backgroundColor: 'rgba(255,255,255,0.5)', padding: 30, borderRadius: 24, marginBottom: 40 },
  pipelineGrid: { flexDirection: 'row', justifyContent: 'space-between', gap: 20 },
  pipelineGridMobile: { flexDirection: 'column', gap: 30 },
  pipelineStep: { flex: 1, alignItems: 'center' },
  stepCircle: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#007AFF', justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  stepNumber: { color: '#FFF', fontSize: 20, fontWeight: '800' },
  stepTitle: { fontSize: 18, fontWeight: '700', color: '#1C1C1E', marginBottom: 8 },
  stepText: { fontSize: 14, color: '#555', textAlign: 'center', lineHeight: 20 },

  featureGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 16, marginBottom: 40, width: '100%' },
  featureItem: { alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF', padding: 24, borderRadius: 20, width: '30%', minWidth: 200, shadowColor: '#000', shadowOffset: {width:0, height:4}, shadowOpacity: 0.04, shadowRadius: 10 },
  featureItemMobile: { width: '100%' }, // Takes full width on mobile so they stack perfectly
  featureText: { marginTop: 14, fontSize: 16, fontWeight: '700', color: '#1C1C1E', textAlign: 'center' },

  ctaContainer: { alignItems: 'center', marginTop: 10 },
  ctaSubtext: { fontSize: 16, fontWeight: '600', color: '#5856D6', marginBottom: 16 },
  primaryButton: { backgroundColor: '#1C1C1E', paddingHorizontal: 40, height: 64, borderRadius: 32, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.2, shadowRadius: 16 },
  primaryButtonMobile: { width: '100%', paddingHorizontal: 20 },
  primaryButtonText: { color: '#FFFFFF', fontSize: 18, fontWeight: '700' },

  footer: { marginTop: 40, alignItems: 'center', opacity: 0.6 },
  footerText: { fontSize: 14, color: '#1C1C1E', marginBottom: 4, fontWeight: '500' },
});