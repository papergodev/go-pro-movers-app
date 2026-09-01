import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { BlurView } from 'expo-blur';
import Animated, { FadeInUp } from 'react-native-reanimated';

export default function Privacy() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <Animated.View entering={FadeInUp.duration(800).springify()} style={styles.authCardWrapper}>
        <BlurView intensity={80} tint="light" style={styles.authCard}>
          
          <Text style={styles.title}>Privacy Policy</Text>

          <View style={styles.section}>
            <Text style={styles.heading}>1. Introduction</Text>
            <Text style={styles.text}>
              This Privacy Policy is an Electronic Record in the form of an Electronic Contract in accordance with the Information Technology Act, 2000 and the amended provisions pertaining to electronic records. This document describes the policies and procedures on the collection, use, disclosure, and protection of your information when you use the Go Pro Movers mobile application made available by Go Pro Movers, located in Navi Mumbai, Maharashtra, India. By using the app, you agree to be legally bound by this Privacy Policy.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>2. What Information Do We Collect?</Text>
            <Text style={styles.text}>
              We collect and store personal information while providing services. {"\n\n"}
              • User Information: Name, address, email, phone number, GSTIN, business logo, bank details, and documents generated (Invoices, Bilties, Goods Lists, Quotations, Receipts).{"\n"}
              • Client Information: We also collect your clients' names, contact numbers, addresses, GSTINs, and emails to provide convenience in generating accounting documents.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>3. How We Use Your Information</Text>
            <Text style={styles.text}>
              We use your information exclusively for:{"\n"}
              • Account Registration and seamless communication.{"\n"}
              • Maintaining internal records and proper user logs.{"\n"}
              • Improving our services and resolving customer support issues.{"\n"}
              • Using Non-Personal Information to update services with recent trends and customize user experiences.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>4. Information Sharing & Disclosure</Text>
            <Text style={styles.text}>
              We consider protecting your personal information vital and do not sell, trade, or rent your Personal Information to third parties for direct marketing. We only share data in exceptional cases:{"\n"}
              • With authorized third-party vendors (like payment processors) necessary to provide requested services.{"\n"}
              • If required by law or to respond to a legal process.{"\n"}
              • In the event of a merger, acquisition, or transfer of assets to a new owner.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>5. Data Security & Protection</Text>
            <Text style={styles.text}>
              The security of your data is important to us. We apply standard security practices, including firewalls, to protect from unauthorized electronic access. However, no method of electronic storage over the internet is 100% secure. Any credit or debit card information is provided directly to authorized payment gateways and is never stored by us.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>6. Links to Other Web Pages</Text>
            <Text style={styles.text}>
              The app may contain links to websites outside our control. These are for user convenience only. We are not responsible for the privacy policies or data handling of such third-party sites, and we recommend reading their policies before browsing.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.heading}>7. Dispute Resolution & Jurisdiction</Text>
            <Text style={styles.text}>
              Any dispute arising out of this policy will be resolved through a two-step Alternative Dispute Resolution (ADR) mechanism. Parties will first attempt amicable Mediation for 30 days. If unresolved, the dispute will be settled through Arbitration by a Sole Arbitrator appointed by Go Pro Movers. The seat of arbitration and exclusive jurisdiction will be Navi Mumbai, Maharashtra.
            </Text>
          </View>

          <View style={[styles.section, { borderBottomWidth: 0, marginBottom: 0 }]}>
            <Text style={styles.heading}>8. Contact Us</Text>
            <Text style={styles.text}>
              If you have any questions or queries regarding this Privacy Policy or our Terms and Conditions, please contact us at papergo.dev@gmail.com.
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