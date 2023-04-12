import React from "react";
import { Button, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import Bullet from "./TextComponents/Bullet";
import texts from "../../../styles/TextStyles";

export default function TOS() {
  return (
    <View style={[styles.container,{flexDirection: 'column', flex:1},]}>
      <StatusBar/>
      <View style={[styles.headerContainer, {flexDirection: 'column'},]}>
        <Text style={styles.title}>Terms of Service</Text>
      </View>
      <View style={[styles.contentContainer, {flexDirection: 'column'},]}>
        <ScrollView style = {{width: "100%"}}>
          <Text style={[styles.sectionTitle, {paddingBottom: '4%'}]}>Our Terms of Use</Text>
          <Text style={[styles.mainText, {paddingBottom: '15%'}]}>Welcome to SWiiFT referred hereto as “us,” “we,” the “Company” or “SWiiFT”. 
          SWiiFT and you being each individually referred to as a “Party” or collectively as “the Parties”.</Text>
          <Text style={[styles.sectionTitle, {paddingBottom: '2%'}]}>1. Agreement on our Terms of Use</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>By creating a SWiiFT account or using any SWiiFT service via the SWiiFT app (the “Service”), you agree to be bound by our Terms of Use and any terms disclosed to you (this “Agreement”). 
          If you do not accept and agree to be bound by all of the terms of this Agreement, you should not access or use the Service.</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>We may make changes to this Agreement and to the Service from time to time to reflect changes in or requirements of the law, new features, changes in business practices or any other reason. You should regularly check for the most recent version on swiiftapp.com that is the version that applies. If the changes include material changes to your rights or obligations, we will notify you in advance of the changes (unless we are unable to do so under applicable law) by any reasonable mean. If you continue to use the Service after the changes become effective, then you agree to the revised Agreement that shall supersede any prior agreements and shall govern your entire relationship with SWiiFT.</Text>
          <Text style={[styles.mainText, {paddingBottom: '15%'}]}>To improve the Service, we may add new product features or enhancements from time to time as well as remove some features, and if these actions do not materially affect your rights or obligations, we may not provide you with notice before taking them. We may even suspend the Service entirely, in which event we will notify you in advance unless extenuating circumstances, such as safety or security concerns, prevent us from doing so.</Text>
          <Text style={[styles.sectionTitle, {paddingBottom: '4%'}]}>2. Eligibility Conditions</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>You must be at least 18 years of age to open an account on SWiiFT and use the Service. By opening an account and using the Service, you represent and warrant that:
          you can enter into a binding contract with SWiiFT,</Text>

          <Bullet text="You are not a person who is barred from using the Service under the laws of the United States or any other applicable jurisdiction,"></Bullet>
          <Bullet text="You will comply with this Agreement and all applicable local, state, national and international laws, rules and regulations, "></Bullet>
          <Bullet text="You have not committed, been convicted of, or pled no contest to a felony, a sex crime, or any crime involving violence or a threat of violence, and you are not required to register as a sex offender with any state, federal or local sex offender registry, "></Bullet>
          <Bullet text="You do not have more than one account on the Service, and"></Bullet>
          <Bullet text="You have not previously been removed from the Service by us, unless you have our express written permission to open a new account."></Bullet>

          <Text style={[styles.mainText, {paddingBottom: '15%'}]}>If at any time you cease to meet these requirements, all authorization to access our Service or systems will be automatically revoked and you must immediately delete your account.</Text>
          <Text style={[styles.sectionTitle, {paddingBottom: '4%'}]}>3. Your SWiiFT Account</Text>
          <Text style={[styles.mainText, {paddingBottom: '4%'}]}>In order to use SWiiFT, you may sign in using you email address. You are responsible for maintaining the confidentiality of the login credentials you use to sign up for SWiiFT, and you are solely responsible for all activities that occur under those credentials. If you think someone has gained access to your account, please immediately contact us at swiift.help@gmail.com. SWiiFT may terminate your account at any time without notice if it believes that you have violated this Agreement, and/or you do any of the following:</Text>
          <Bullet text="Use the Service or any content contained in the Service for any commercial purposes without our written consent,"></Bullet>
          <Bullet text="Copy, modify, transmit, make use of, or reproduce in any way any copyrighted material, images, trademarks, trade names, service marks, or other intellectual property, content or proprietary information accessible through the Service without our prior written consent,"></Bullet>
          <Bullet text="Express or imply that any statements you make are endorsed by SWiiFT,"></Bullet>
          <Bullet text="Reproduce or circumvent in any way the navigational structure or presentation of the Service or its contents,"></Bullet>
          <Bullet text="Use the Service in any way that could interfere with, disrupt or negatively affect the Service or the servers or networks connected to the Service,"></Bullet>
          <Bullet text="Upload viruses or other malicious code or otherwise compromise the security of the Service,"></Bullet>
          <Bullet text="Forge headers or otherwise manipulate identifiers in order to disguise the origin of any information transmitted to or through the Service,"></Bullet>
          <Bullet text="Use any reference to SWiiFT or the Service to direct any person to any other app or website for any purpose,"></Bullet>
          <Bullet text="Use, access, or publish the SWiiFT application programming interface without our prior written consent,"></Bullet>
          <Bullet text="Probe, scan or test the vulnerability of our Service,"></Bullet>
          <Bullet text="Encourage, promote, or agree to engage in any activity that violates this Agreement."></Bullet>
          <Text style={[styles.mainText, {paddingTop: '4%', paddingBottom: '2%'}]}>You may terminate your account at any time, for any reason, by following the relevant instructions in the Service.</Text>
          <Text style={[styles.mainText, {paddingBottom: '15%'}]}>You agree that your SWiiFT account is non-transferable and all of your rights to your account (including its Content as defined in Section 4) terminate upon your death.</Text>
          <Text style={[styles.sectionTitle, {paddingBottom: '4%'}]}>4. License</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>By SWiiFT:</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>SWiiFT grants you a personal, worldwide, royalty-free, non-assignable, non-exclusive, revocable, and non-sublicensable license to access and use the Service pursuant to this Agreement. This license and any authorization to access the Service are automatically revoked in any event causing the termination of your Account.</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>In consideration for SWiiFT allowing you to use the Service, you agree that we, our affiliates and our third-party partners may place advertising on the Service.</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>By YOU:</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>By creating an account, you grant to SWiiFT a worldwide, transferable, sub-licensable, royalty-free, right and license to host, store, use, copy, display, reproduce, adapt, edit, publish, modify, reformat, incorporate into other works, advertise, distribute, and otherwise make available to the general public information you post, upload, display or otherwise make available ( “post”) on the Service or transmit to other members ( “Content”) or authorize us to access from third parties. </Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>SWiiFT’s license to your Content shall be non-exclusive, except that SWiiFT’s license shall be exclusive with respect to derivative works created through use of the Service. Our license to your Content is subject to your rights under applicable law (including laws regarding personal data protection) and is for the limited purpose of operating, developing, providing, and improving the Service and researching and developing new ones. You agree that any Content you place or that you authorize us to place on the Service may be viewed by other members and may be viewed by any person visiting or participating in the Service.</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>You guarantee agree that all information that you submit upon creation of your account is accurate and truthful and you have the right to post the Content on the Service and grant the license to SWiiFT above.</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>You understand and agree that we may monitor or review any Content you post as part of the Service. We may delete any Content, in whole or in part, that in our sole judgment violates this Agreement or may harm the reputation of the Service.</Text>
          <Text style={[styles.mainText, {paddingBottom: '4%'}]}>You agree that SWiiFT may access, store, and disclose your Account information and Content if required to do so by law, by performing the Agreement or in a good faith belief that such access, storage or disclosure satisfies a legitimate interest, including to:</Text>
          <Bullet text="Comply with legal process,"></Bullet>
          <Bullet text="Enforce the Agreement,"></Bullet>
          <Bullet text="Respond to claims that any Content violates the rights of third parties,"></Bullet>
          <Bullet text="Respond to your requests for customer service, or"></Bullet>
          <Bullet text="Protect the rights, property or personal safety of the Company or any other person."></Bullet>
          <Text style={[styles.mainText, {paddingBottom: '15%'}]}></Text>

          <Text style={[styles.sectionTitle, {paddingBottom: '4%'}]}>SWiiFT Rules</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>By using the Service, you undertake to not:</Text>
          <Bullet text="Use the Service for any purpose that is illegal, prohibited by this Agreement or any SWiiFT rules,"></Bullet>
          <Bullet text="use the Service for any harmful or nefarious purpose,"></Bullet>
          <Bullet text="use the Service in order to damage SWiiFT,"></Bullet>
          <Bullet text="spam or solicit money or other items of value from another member, whether as a gift, loan, or other form of compensation, or otherwise defraud any members,"></Bullet>
          <Bullet text="impersonate any person or entity or post any images of another person without his or her permission,"></Bullet>
          <Bullet text="bully, “stalk,” intimidate, assault, harass, mistreat or defame, or otherwise mistreat any person,"></Bullet>
          <Bullet text="post any Content that violates or infringes anyone’s rights, including rights of publicity, privacy, copyright, trademark or other intellectual property or contract right,"></Bullet>
          <Bullet text="post any Content that is hate speech, threatening, sexually explicit or pornographic, incites violence or contains nudity or graphic or gratuitous violence,"></Bullet>
          <Bullet text="post any Content that promotes racism, bigotry, hatred or physical harm of any kind against any group or individual,"></Bullet>
          <Bullet text="solicit passwords for any purpose, or personal identifying information for commercial or unlawful purposes from other users or disseminate another person’s personal information without his or her permission,"></Bullet>
          <Bullet text="use another user’s account, share an account with another user, or maintain more than one account,"></Bullet>
          <Bullet text="misrepresent your identity, age, current or previous positions, qualifications, or affiliations with a person or entity,"></Bullet>
          <Bullet text="create another account if we have already terminated your account, unless you have our permission."></Bullet>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>SWiiFT reserves the right to investigate and/or terminate
          your account without any indemnity or refund if you have violated this Agreement, misused the Service or behaved 
          in a way that SWiiFT regards as inappropriate or unlawful, including actions or communications that occur on or off the Service. In the event that you violate these rules, your account and your license to use the Service will be automatically terminated.</Text>
          <Text style={[styles.mainText, {paddingBottom: '15%'}]}></Text>

          <Text style={[styles.sectionTitle, {paddingBottom: '4%'}]}>6. Your Interactions on the Service</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>You:</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>You agree to treat other users in a courteous and respectful manner, both on and off our Services and to be respectful when 
          communicating with any of our customer care representatives or other employees. </Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>Other Members:</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>SWiiFT is not responsible for the conduct of any member on or off of the Service. You agree to use caution in all interactions with other members, particularly if you decide to communicate off the Service or meet in person. You agree that you will not provide your financial information (for example, your credit card or bank account information), 
          or wire or otherwise send money to other members.</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>You are solely responsible for your interactions with other members. You understand that SWiiFT does not conduct criminal background checks on its members or otherwise inquire into the background of its members. SWiiFT makes no representations or warranties as to the conduct or compatibility of members. SWiiFT reserves the right to conduct – and you authorize SWiiFT to conduct – any criminal background check or other screenings (such as sex offender register searches) at any time using available public records or through a consumer reporting agency,
          and you agree that any information you provide may be used for that purpose.</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>Third Parties:</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>The Service may contain advertisements and promotions offered by third parties and links to other websites or resources. SWiiFT is not responsible for the availability (or lack of availability) of such external websites or resources. If you choose to interact with the third parties made available through our Service, such party’s terms will govern their relationship with you. SWiiFT is not 
          responsible or liable for such third parties’ terms or actions.</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>Copyright infringement</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>If you believe that your work has been copied and posted on the Service in a way that constitutes copyright infringement, please submit a detailed request to swiift.help@gmail.com. SWiiFT will investigate 
          and terminate the accounts of repeat infringers.</Text>
          <Text style={[styles.mainText, {paddingBottom: '15%'}]}></Text>

          <Text style={[styles.sectionTitle, {paddingBottom: '4%'}]}>7. SWiiFT’s Liability</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>Liability Exclusion:</Text>
          <Bullet text="SWiiFT provides the Service on an “as is” and “as available” basis and to the extent permitted by applicable law, grants no warranties of any kind, whether express, implied, statutory or otherwise with respect to the Service including, 
          without limitation, any implied warranties of satisfactory quality, merchantability, fitness for a particular purpose or non-infringement. "></Bullet>
          <Bullet text="SWiiFT does not represent or warrant that (a) the Service will be uninterrupted, secure or error free, (b) any defects or errors in the Service will be discovered or corrected, or (c) that any content or information you obtain on or through the Service will be accurate, or appropriate for your purposes."></Bullet>
          <Bullet text="SWiiFT assumes no responsibility for any Content that you or another member or third party posts, sends or receives through the Service. Any material downloaded 
          or otherwise obtained through the use of the Service is accessed at your own discretion and risk."></Bullet>
          <Bullet text="SWiiFT disclaims and assumes no responsibility for any conduct of you or any other Member, on or off the service."></Bullet>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>Liability Limitation:</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>To the fullest extent permitted by applicable law, in no event shall</Text>
          <Bullet text="SWiiFT, its affiliates, employees, licensors or service providers be liable for any indirect, consequential, exemplary, incidental, special, punitive, fixed, or enhanced damages, including, without limitation, loss of profits, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from: (a) your access to or use of or inability to access or use the Service; (b) the conduct or content of any Members or third parties on or through any of our websites or in connection with the Service; or (c) any unauthorized access, use or alteration of your 
          Content, even if  SWiiFT has been advised at any time of the possibility of such damages. "></Bullet>
          <Bullet text="SWiiFT’s aggregate liability to you for any and all claims arising out of or relating to the Service or this Agreement exceed the amount paid, if any, by you to SWiiFT during the twenty-four (24) month period immediately preceding the date that you first file a lawsuit, arbitration or any other legal proceeding against SWiiFT, whether in law or in equity, in any tribunal. This damages limitation hereto applies (a) regardless of the ground upon which liability is based (whether default, contract, tort, statute, or otherwise), (b) irrespective of the type of 
          breach of obligations, and (c) with respect to all events, the Service, and this Agreement."></Bullet>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>Some jurisdictions do not allow the exclusion or limitation of certain damages, so some or all of the exclusions and 
          limitations in this section may not apply to you.</Text>
          <Text style={[styles.mainText, {paddingBottom: '15%'}]}></Text>

          <Text style={[styles.sectionTitle, {paddingBottom: '4%'}]}>8. Dispute</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>If you are dissatisfied with our Service for any reason, please contact SWiiFT Customer 
          Service first so we can try to resolve your concerns. </Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>However, if you choose to pursue a dispute, claim or controversy against SWiiFT (including its employees, licensors or service providers) that arises from or relates in any way to this Agreement (including any alleged breach), the Service, or our relationship
          with you (altogether referred as “Dispute”), the following terms shall apply: </Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>Notice of Dispute and Informal Dispute Resolution</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>Before formally pursuing a Dispute in arbitration or small claims court, you agree to first send a fully detailed Dispute notice (“Notice”) to swiift.help@gmail.com. We will contact you and endeavour to solve the Dispute by friendly negotiation and settlement. If the Dispute is not resolved within 60 days after receipt of the Notice, any Party may initiate arbitration or small claims court case as provided below. Completion of this informal dispute resolution is a condition precedent to filing any demand 
          for arbitration proceeding or small claims court action. </Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>Arbitration or Small Claims Court </Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>Any Dispute shall be exclusively resolved through final and binding arbitration except as specifically provided otherwise in this Dispute Section. Notwithstanding the foregoing, either you or SWiiFT may elect to have an individual claim heard in small claims court. If the request to proceed in small claims court is made after an arbitration has been initiated but before an arbitrator has been appointed, such arbitration shall be administratively closed. Any controversy over the small claims court’s jurisdiction shall be determined by the small claims court. All other issues are exclusively for the arbitrator to decide, including but not limited to scope and enforceability of this Dispute Section, as well as any request to proceed in small claims court that is made after an arbitrator has been appointed. If you or SWiiFT challenges the small claims court election in your Dispute, and a court of competent jurisdiction determines that the small claims court election is unenforceable, then such election shall be severed from this Agreement as to your Dispute. However, such court determination shall not be considered or 
          deemed binding with respect to SWiiFT’s other contracting parties. </Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>In the event Dispute Section is for any reason held to be unenforceable, any litigation against SWiiFT (except for small claims court actions) may be commenced only in the federal or state courts located in Alameda County, California. You hereby irrevocably consent to those courts’ exercise of personal jurisdiction over you for such purposes and waive 
          any claim that such courts constitute an inconvenient forum.</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>NAM Arbitration</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>This subsection applies when no small claims court election is made by either Party. The Parties agree that any Dispute shall be resolved through final and binding Arbitration to be administrated by (“NAM”) National Arbitration and Mediation and governed by NAM’s 
          Comprehensive Dispute Resolution Rules and Procedures in effect at the time such claim is filed. Any award of the Arbitrator is final and binding and may be entered as a judgment in any court having jurisdiction.</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>For a copy of the NAM Rules, please visit https://www.namadr.com/resources/rules-fees-forms or contact NAM’s National Processing Center at 990 Stewart Avenue, 1st Floor, Garden City, NY 11530 and email address commercial@namadr.com. </Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>If, at any time, 25 or more similar demands for arbitration are asserted against SWiiFT or related parties by the same or coordinated counsel or entities (“Mass Filing”), 
          consistent with the definition and criteria of Mass Filings set forth in the NAM’s Mass Filing Supplemental Dispute Resolution Rules and Procedures (“NAM’s Mass Filing Rules”, available at the web site mentioned here above), NAM’s Mass Filing Rules shall apply. </Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>The Federal Arbitration Act shall
           also apply to any Dispute administered by NAM.</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>Jury Trial and Class Action Waiver</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>To the fullest extent allowable by law, </Text>
          <Bullet text="You and SWiiFT each waive the right to a jury trial;"></Bullet>
          <Bullet text="You and SWiiFT each waive the right to file or participate in a class action against the other or otherwise to seek relief 
          on a class basis, including any currently pending actions against SWiiFT;"></Bullet>
          <Bullet text="There shall be no right or authority for any claims to be arbitrated or litigated on a class, collective, 
          representative, consolidated, or private attorney general basis; "></Bullet>
          <Bullet text="The arbitrator can award the same relief available in court provided that the arbitrator may only award final relief (including injunctive or declaratory relief) in favor of the individual party seeking relief and only to the extent necessary 
          to provide final relief warranted by that individual party’s claim;"></Bullet>
          <Bullet text="The arbitrator may not award final relief for, against, or on behalf of anyone who is not a party to the 
          arbitration on a class, collective, representative, or private attorney general basis."></Bullet>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>If a court determines that any of these prohibitions in this paragraph are unenforceable as to a particular claim or request for relief (such as a request for public injunctive relief), and all appeals of that decision are exhausted or the decision is otherwise final, then you and SWiiFT agree that that particular claim or request for relief shall proceed in court but shall be stayed pending individual arbitration of the remaining claims for relief that you have brought. If this specific paragraph is found to be unenforceable, then the entirety of this arbitration provision (except for the jury trial waiver and the informal dispute resolution process) shall be null and void. 
          This paragraph is an essential part of this arbitration agreement.</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>Changes to the Agreement and retroactivity</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>This Dispute Section applies to all Disputes between the Parties, including for any claims that accrued against you or SWiiFT prior to the time of your consent to this Agreement and to any claims that accrue against you or SWiiFT after your consent to this Agreement. Notwithstanding any provision in this Agreement to the contrary, you may elect to opt out of the retroactive application of this Dispute Section as to claims that have accrued against you or against SWiiFT prior to the time of your consent to this Agreement. You may opt out by sending us written notice, within 30 days of the time you consent to this Agreement, to the following email address: swiift.help@gmail.com. If you opt out of the retroactive application of this Dispute Section, you will still be subject to and bound by any Dispute Sections and Arbitration Procedures you previously agreed to, including any arbitration provisions, 
          class action waivers, and retroactive application sections. </Text>
          <Text style={[styles.mainText, {paddingBottom: '15%'}]}></Text>

          <Text style={[styles.sectionTitle, {paddingBottom: '4%'}]}>9. Governing Law</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>The laws of California, U.S.A., shall apply to any Dispute.</Text>
          <Text style={[styles.mainText, {paddingBottom: '15%'}]}></Text>

          <Text style={[styles.sectionTitle, {paddingBottom: '4%'}]}>10. Indemnity by You</Text>
          <Text style={[styles.mainText, {paddingBottom: '2%'}]}>You agree, to the extent permitted under applicable law, to indemnify, defend and hold harmless SWiiFT, our affiliates, and our respective officers, directors, agents, and employees from and against any and all complaints, demands, claims, damages, losses, costs, liabilities and expenses, 
          including attorney’s fees, due to, arising out of, or relating in any way to your access to or use of the Service, your Content, or your breach of this Agreement.</Text>
          <Text style={[styles.mainText, {paddingBottom: '15%'}]}></Text>

          <Text style={[styles.sectionTitle, {paddingBottom: '4%'}]}>11. Miscellaneous</Text>
          <Bullet text="This Agreement which includes the Privacy Policy contains the entire agreement between you and SWiiFT regarding your relationship with SWiiFT and the use of the Service, save for anyone who opted out of the retroactive application of the Dispute Section who is still subject to and bound by any prior agreements 
          to arbitrate with SWiiFT as well as this agreement to arbitrate on a going forward basis."></Bullet>
          <Bullet text="If any provision of this Agreement is held invalid, 
          the remainder of this Agreement shall continue in full force and effect."></Bullet>
          <Bullet text="SWiiFT’s failure to exercise or enforce any right or provision of this Agreement 
          shall not constitute a waiver of such right or provision."></Bullet>
          <Bullet text="No agency, partnership, joint venture, fiduciary or other special relationship or employment is created as a result of this Agreement, 
          and you may not make any representations on behalf of or bind SWiiFT in any manner."></Bullet>
          <Text style={[styles.mainText, {paddingBottom: '15%'}]}></Text>

























          <Text style={[styles.mainText, {paddingBottom: '15%'}]}></Text>


        </ScrollView>
      </View>
    </View>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#2D2C2E",
  },

  headerContainer: {
    flex: 208,
    alignItems: "center",
    justifyContent: "center"
  },

  bulletPointContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: 'row'
  },


  contentContainer: {
    flex: 756,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginRight: '8%',
    marginLeft: '8%',
  },

  subContentContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: '2%',
    marginRight: '3%',  
    marginLeft: '7%',
  },

  mainText: {
    fontFamily: "Inter_400Regular",
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 21,
    display: "flex",
    alignItems: "center",
    letterSpacing: 0.055,
    color: "white",
  },

  sectionTitle: {
    fontFamily: "Inter_700Bold",
    fontWeight: "700",
    fontSize: 22,
    lineHeight: 24.2,
    color: "white",
  },

  title: {
    fontFamily: "Inter_700Bold",
    fontWeight: "700",
    color: "white",
    fontSize: 28,
  },

  buttonText: {
    fontFamily: "Inter_400Regular",
    fontWeight: "400",
    fontSize: 24,
    lineHeight: 29,
    display: "flex",
    alignItems: "center",
    letterSpacing: 0.055,
    color: "#BC7BBC",
  },

  button: {

  }
});
