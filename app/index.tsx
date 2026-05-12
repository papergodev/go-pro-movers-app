import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native';
import { BlurView } from 'expo-blur';
import { Feather } from '@expo/vector-icons';
import Animated, { FadeInUp } from 'react-native-reanimated';

export default function Home() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <ScrollView contentContainerStyle={[styles.scrollContent, isMobile && { padding: 16 }]} showsVerticalScrollIndicator={false}>
      <Animated.View entering={FadeInUp.duration(1000).springify()} style={styles.authCardWrapper}>
        <BlurView intensity={85} tint="light" style={[styles.authCard, isMobile && styles.authCardMobile]}>
          
          {/* HERO SECTION */}
          <View style={styles.heroSection}>
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>🚀 Launching Soon</Text>
            </View>
            <Text style={[styles.heroTitle, isMobile && styles.heroTitleMobile]}>
              The Digital Workspace for Packers & Movers
            </Text>
            <Text style={[styles.heroSubtitle, isMobile && styles.heroSubtitleMobile]}>
              Generate professional Quotations, LR/Bilties, and Final Bills instantly. Send polished PDFs directly to clients via WhatsApp in under 30 seconds.
            </Text>
          </View>

          {/* HOW IT WORKS PIPELINE */}
          <View style={[styles.pipelineSection, isMobile && styles.pipelineSectionMobile]}>
            <Text style={[styles.sectionHeading, isMobile && { textAlign: 'left' }]}>How Paper Go Works</Text>
            
            <View style={[styles.pipelineGrid, isMobile && styles.pipelineGridMobile]}>
              
              <View style={[styles.pipelineStep, isMobile && styles.pipelineStepMobile]}>
                <View style={[styles.stepIconWrapper, { backgroundColor: '#E6F4FE' }]}>
                  <Feather name="file-text" size={22} color="#007AFF" />
                </View>
                <View style={isMobile && styles.stepTextWrapperMobile}>
                  <Text style={[styles.stepTitle, isMobile && { textAlign: 'left' }]}>1. Quick Quote</Text>
                  <Text style={[styles.stepText, isMobile && { textAlign: 'left' }]}>Enter basic job details to generate a formatted cost estimate.</Text>
                </View>
              </View>

              <View style={[styles.pipelineStep, isMobile && styles.pipelineStepMobile]}>
                <View style={[styles.stepIconWrapper, { backgroundColor: '#F0EDFF' }]}>
                  <Feather name="truck" size={22} color="#5856D6" />
                </View>
                <View style={isMobile && styles.stepTextWrapperMobile}>
                  <Text style={[styles.stepTitle, isMobile && { textAlign: 'left' }]}>2. 1-Click Bilty</Text>
                  <Text style={[styles.stepText, isMobile && { textAlign: 'left' }]}>Convert quotes directly into a Lorry Receipt without re-typing.</Text>
                </View>
              </View>

              <View style={[styles.pipelineStep, isMobile && styles.pipelineStepMobile]}>
                <View style={[styles.stepIconWrapper, { backgroundColor: '#E8F8EE' }]}>
                  <Feather name="check-circle" size={22} color="#34C759" />
                </View>
                <View style={isMobile && styles.stepTextWrapperMobile}>
                  <Text style={[styles.stepTitle, isMobile && { textAlign: 'left' }]}>3. Final Bill</Text>
                  <Text style={[styles.stepText, isMobile && { textAlign: 'left' }]}>Generate the final GST invoice and securely save it to the cloud.</Text>
                </View>
              </View>

            </View>
          </View>

          {/* CORE FEATURES GRID */}
          <View style={styles.featuresContainer}>
            <Text style={[styles.sectionHeading, isMobile && { textAlign: 'left' }]}>Everything you need to scale</Text>
            <View style={styles.featureGrid}>
               
               <View style={[styles.featureItem, isMobile && styles.featureItemMobile]}>
                  <View style={styles.featureIconLeft}><Feather name="layout" size={20} color="#007AFF" /></View>
                  <Text style={styles.featureText}>LR & Bilty Generation</Text>
               </View>

               <View style={[styles.featureItem, isMobile && styles.featureItemMobile]}>
                  <View style={styles.featureIconLeft}><Feather name="file" size={20} color="#5856D6" /></View>
                  <Text style={styles.featureText}>Quotations & Bills</Text>
               </View>

               <View style={[styles.featureItem, isMobile && styles.featureItemMobile]}>
                  <View style={styles.featureIconLeft}><Feather name="list" size={20} color="#FF9500" /></View>
                  <Text style={styles.featureText}>Detailed Goods Lists</Text>
               </View>

               <View style={[styles.featureItem, isMobile && styles.featureItemMobile]}>
                  <View style={styles.featureIconLeft}><Feather name="pen-tool" size={20} color="#FF2D55" /></View>
                  <Text style={styles.featureText}>Add Logos & Signatures</Text>
               </View>

               <View style={[styles.featureItem, isMobile && styles.featureItemMobile]}>
                  <View style={styles.featureIconLeft}><Feather name="cloud" size={20} color="#34C759" /></View>
                  <Text style={styles.featureText}>Secure Cloud Sync</Text>
               </View>

               <View style={[styles.featureItem, isMobile && styles.featureItemMobile]}>
                  <View style={styles.featureIconLeft}><Feather name="share" size={20} color="#00C7BE" /></View>
                  <Text style={styles.featureText}>1-Tap WhatsApp Share</Text>
               </View>

            </View>
          </View>

          {/* CALL TO ACTION */}
          <View style={styles.ctaContainer}>
            <TouchableOpacity style={[styles.primaryButton, isMobile && styles.primaryButtonMobile]} activeOpacity={0.8}>
              <Feather name="play" size={20} color="#FFF" style={{ marginRight: 10 }} />
              <Text style={styles.primaryButtonText}>Coming Soon to Google Play</Text>
            </TouchableOpacity>
            <Text style={styles.ctaSubtext}>Stop losing paperwork. Start closing more deals.</Text>
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
  scrollContent: { flexGrow: 1, alignItems: 'center', padding: 24, paddingTop: 40, paddingBottom: 60 },
  authCardWrapper: { shadowColor: '#000', shadowOffset: { width: 0, height: 20 }, shadowOpacity: 0.08, shadowRadius: 40, width: '100%', maxWidth: 900 },
  authCard: { borderRadius: 32, padding: 56, backgroundColor: 'rgba(255,255,255,0.85)', overflow: 'hidden' }, 
  authCardMobile: { padding: 24, borderRadius: 28 },
  
  heroSection: { alignItems: 'center', marginBottom: 48, maxWidth: 700, alignSelf: 'center' },
  badgeContainer: { backgroundColor: 'rgba(0, 122, 255, 0.1)', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, marginBottom: 20 },
  badgeText: { color: '#007AFF', fontWeight: '700', fontSize: 14 },
  heroTitle: { fontSize: 48, fontWeight: '900', color: '#1C1C1E', textAlign: 'center', marginBottom: 16, lineHeight: 56, letterSpacing: -1 },
  heroTitleMobile: { fontSize: 32, lineHeight: 38, letterSpacing: -0.5 },
  heroSubtitle: { fontSize: 18, color: '#666', textAlign: 'center', lineHeight: 28, paddingHorizontal: 10 },
  heroSubtitleMobile: { fontSize: 16, lineHeight: 24 },
  
  sectionHeading: { fontSize: 22, fontWeight: '800', color: '#1C1C1E', textAlign: 'center', marginBottom: 24, letterSpacing: -0.5 },
  
  pipelineSection: { width: '100%', backgroundColor: 'rgba(255,255,255,0.6)', padding: 40, borderRadius: 24, marginBottom: 48, borderWidth: 1, borderColor: 'rgba(0,0,0,0.03)' },
  pipelineSectionMobile: { padding: 24, paddingVertical: 32 },
  pipelineGrid: { flexDirection: 'row', justifyContent: 'space-between', gap: 24 },
  pipelineGridMobile: { flexDirection: 'column', gap: 24 },
  
  pipelineStep: { flex: 1, alignItems: 'center' },
  pipelineStepMobile: { flexDirection: 'row', alignItems: 'flex-start', flex: undefined },
  stepIconWrapper: { width: 48, height: 48, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginBottom: 16 },
  stepTextWrapperMobile: { flex: 1, marginLeft: 16, justifyContent: 'center', marginTop: 2 },
  stepTitle: { fontSize: 18, fontWeight: '700', color: '#1C1C1E', marginBottom: 8, textAlign: 'center' },
  stepText: { fontSize: 15, color: '#666', textAlign: 'center', lineHeight: 22 },

  featuresContainer: { width: '100%', marginBottom: 48 },
  featureGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 16, width: '100%' },
  
  featureItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 20, borderRadius: 16, width: '31%', minWidth: 220, shadowColor: '#000', shadowOffset: {width:0, height:2}, shadowOpacity: 0.03, shadowRadius: 8, borderWidth: 1, borderColor: 'rgba(0,0,0,0.04)' },
  featureItemMobile: { width: '100%', padding: 18 },
  featureIconLeft: { marginRight: 14, backgroundColor: '#F2F2F7', padding: 10, borderRadius: 10 },
  featureText: { fontSize: 16, fontWeight: '600', color: '#1C1C1E' },

  ctaContainer: { alignItems: 'center', marginTop: 10 },
  primaryButton: { backgroundColor: '#1C1C1E', paddingHorizontal: 40, height: 60, borderRadius: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.15, shadowRadius: 16 },
  primaryButtonMobile: { width: '100%', height: 56 },
  primaryButtonText: { color: '#FFFFFF', fontSize: 14, fontWeight: '700' },
  ctaSubtext: { fontSize: 14, fontWeight: '500', color: '#8E8E93', marginTop: 16 },

  footer: { marginTop: 20, alignItems: 'center', opacity: 0.6 },
  footerText: { fontSize: 14, color: '#1C1C1E', marginBottom: 4, fontWeight: '500' },
});