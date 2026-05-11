import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';
import Animated, { FadeInUp } from 'react-native-reanimated';

export default function Terms() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <Animated.View entering={FadeInUp.duration(800).springify()} style={styles.authCardWrapper}>
        <BlurView intensity={80} tint="light" style={styles.authCard}>
          
          <Text style={styles.title}>Terms & Conditions</Text>

          <View style={styles.section}>
            <Text style={styles.heading}>1. Acceptance of Terms</Text>
            <Text style={styles.text}>
              Thank you for using the Go Pro Movers application. These Terms of Use, together with the Go Pro Movers Privacy Policy, apply to all users who visit, browse, create, share, upload, or download documents via the App. By using the App, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>2. Scope of Services</Text>
            <Text style={styles.text}>
              Go Pro Movers provides a digital platform for Packers and Movers and Relocation Service Providers to generate Bilties (Lorry Receipts), Quotations, Bills, and Goods Lists online. The app allows you to send these documents directly to clients to save time and streamline business operations.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>3. Rights & Responsibilities</Text>
            <Text style={styles.text}>
              As a user, you agree NOT to:{"\n"}
              • Obtain unauthorized access to the services, systems, or data.{"\n"}
              • Violate any applicable local or national laws.{"\n"}
              • Infringe upon any patent, trademark, copyright, or proprietary rights.{"\n"}
              • Make available viruses or code designed to interrupt or destroy the app's functionality.{"\n"}
              • Interfere with or disrupt the servers or networks connected to Go Pro Movers.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>4. Confidentiality</Text>
            <Text style={styles.text}>
              Each party is obliged to treat non-public data as confidential. However, confidentiality rules do not apply to information that must be passed to third parties or authorities due to legal obligations. 
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>5. Limitation of Liability</Text>
            <Text style={styles.text}>
              Go Pro Movers and the Go Pro Movers app:{"\n"}
              • Take no responsibility for the pricing, payment terms, or contracts entered into between you (the service provider) and your consignors/consignees or vehicle owners.{"\n"}
              • Shall not be liable for any disputes regarding quantity, quality, packing, or damages of goods transported.{"\n"}
              • Shall not be liable for late pickups, deliveries, or waiting charges.{"\n"}
              • Shall be held harmless from any claims, losses, or legal fees arising from your misuse of the app or breach of these terms.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>6. Intellectual Property</Text>
            <Text style={styles.text}>
              The Go Pro Movers name, logo, graphics, and services are trademarks of Go Pro Movers. You may not copy, imitate, or use them in whole or in part without prior written permission.
            </Text>
          </View>

          <View style={[styles.section, { borderBottomWidth: 0, marginBottom: 0 }]}>
            <Text style={styles.heading}>7. General Law & Jurisdiction</Text>
            <Text style={styles.text}>
              These terms are governed by Indian laws. Any dispute, conflict, or claim arising out of your use of the App shall first be mandatorily submitted to mediation for sixty (60) days. If unresolved, it shall be exclusively settled by arbitration under the Arbitration and Conciliation Act, 1996, presided by a Sole Arbitrator appointed by Go Pro Movers. The seat of mediation and arbitration shall be Navi Mumbai, Maharashtra, India.
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
  footer: { marginTop: 30, alignItems: 'center', opacity: 0.6 },
  footerText: { fontSize: 14, color: '#1C1C1E', marginBottom: 4, fontWeight: '500' },
});