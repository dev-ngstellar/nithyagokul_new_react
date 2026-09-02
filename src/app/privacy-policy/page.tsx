import React from "react";
import YesterdayDate from "@/components/YesterdayDate";

export const metadata = {
  title: "Privacy Policy | Nithya Gokul Associates",
  description: "Read our privacy policy to understand how we collect, process, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="block w-full">
      {/* Hero Banner */}
      <section className="bg-navy text-white py-[70px] md:py-[90px] lg:py-[120px] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#071B38,#0F2E5E)]" />
        {/* Ambient background glow orbs */}
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-gold font-semibold">
            Legal &amp; Compliance
          </span>
          <h1 className="font-serif text-4xl md:text-[52px] lg:text-[64px] font-bold leading-[1.1]">
            Privacy Policy
          </h1>
          <p className="text-[16px] md:text-[18px] text-slate-300 max-w-xl mx-auto leading-[1.8]">
            Last updated: <YesterdayDate />
          </p>
        </div>

      </section>

      {/* Main Content Section */}
      <section className="py-[70px] md:py-[90px] lg:py-[120px] bg-slate-50/50">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm text-slate-700 font-sans leading-relaxed space-y-10">

            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-navy border-b border-slate-100 pb-2">
                1. GENERAL
              </h2>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start gap-2">
                  <span className="text-gold font-semibold mt-0.5">a.</span>
                  <p>
                    This Website with the URL of <a href="https://www.nithyagokul.in" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">www.nithyagokul.in</a> (“Website/Site”) is operated by nithyagokul (“We/Our/Us”). We are committed to protecting and respecting your privacy. We do collect your personal information and process your personal data in accordance with the IT Act, 2000 (21 of 2000) and other national and state laws which relate to the processing of personal data. Please read the following carefully to understand our views and practices regarding your personal data.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-semibold mt-0.5">b.</span>
                  <p>
                    We collect your personal information in order to provide and continually improve our products and services.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-semibold mt-0.5">c.</span>
                  <p>
                    Our privacy policy is subject to change at any time without notice. To make sure you are aware of any changes, please review this policy periodically.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-semibold mt-0.5">d.</span>
                  <p>
                    All partners and any third-party working with or for Us, and who have access to personal information, will be expected to read and comply with this policy. No third party may access or process sensitive personal information held by Us without having first entered into a confidentiality agreement.
                  </p>
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-navy border-b border-slate-100 pb-2">
                2. HOW WE COLLECT THE INFORMATION
              </h2>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start gap-2">
                  <span className="text-gold font-semibold mt-0.5">a.</span>
                  <p>
                    <strong>From you directly and through this Site:</strong> We may collect information through the Website when you visit. The data we collect depends on the context of your interactions with our Website.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-semibold mt-0.5">b.</span>
                  <p>
                    <strong>Through business interaction:</strong> We may collect information through business interaction with you or your employees.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-semibold mt-0.5">c.</span>
                  <div className="space-y-3">
                    <p>
                      <strong>From other sources:</strong> We may receive information from other sources, such as public databases; joint marketing partners; social media platforms; or other third parties such as:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                      <li>Updated delivery and address information from our carriers or other third parties, which we use to correct our records and deliver your next purchase or communication more easily.</li>
                      <li>Information about your interactions with the products and services offered by our subsidiaries.</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-navy border-b border-slate-100 pb-2">
                3. INFORMATION WE COLLECT
              </h2>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start gap-2">
                  <span className="text-gold font-semibold mt-0.5">a.</span>
                  <p>We collect information primarily to provide better services to all of our customers.</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-semibold mt-0.5">b.</span>
                  <p>
                    When you visit our Site, some information is automatically collected. This may include information such as the Operating Systems (OS) running on your device, Internet Protocol (IP) address, access times, browser type, and language, and the website you visited before our Site. We also collect information about how you use Our products or services.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-semibold mt-0.5">c.</span>
                  <p>
                    We automatically collect purchase or content use history, which we sometimes aggregate with similar information from other customers to create features such as Best Seller, Top Rated, etc…
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-semibold mt-0.5">d.</span>
                  <p>
                    The full Uniform Resource Locators (URL) clickstream to, through and from our website (including date and time); cookie number; products and/or content you viewed or searched for; page response times; download errors; length of visits to certain pages; page interaction information (such as scrolling, clicks, and mouse-overs).
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-semibold mt-0.5">e.</span>
                  <p>
                    We automatically collect information using “Cookies”. Cookies are small data files stored on your hard drive. Among other things, cookies help us improve our Site, our marketing activities, and your experience. We use cookies to see which areas and features are popular and to count visits to our Site.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-semibold mt-0.5">f.</span>
                  <p>
                    Most Web browsers are set to accept cookies by default. If you prefer, you can choose to set your browser to remove cookies and to reject cookies. If you set your browser to reject cookies, some features will be unavailable. For more information on how to reject cookies, see your browser’s instructions on changing your cookie settings.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-semibold mt-0.5">g.</span>
                  <p>
                    By using this Website, you are agreeing that We may advertise your feedback on the Website and marketing materials.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-semibold mt-0.5">h.</span>
                  <p>
                    We will retain your information as long as we require this to provide you with the goods and services and for such a period as mandated by the concerned laws.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-semibold mt-0.5">i.</span>
                  <p>
                    If you opt to receive marketing correspondence from us, subscribe to our mailing list or newsletters, enter into any of our competitions or provide us with your details at networking events, we may use your personal data for our legitimate interests in order to provide you with details about our goods, services, business updates and events.
                  </p>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-navy border-b border-slate-100 pb-2">
                4. HOW WE USE INFORMATION
              </h2>
              <ul className="space-y-3 list-none pl-0">
                <li className="flex items-start gap-2">
                  <span className="text-gold font-semibold mt-0.5">a.</span>
                  <p>We use the information we collect primarily to provide, maintain, protect and improve our current products and services.</p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-semibold mt-0.5">b.</span>
                  <div className="space-y-3">
                    <p>We use the information collected through this website as described in this policy and we may use your information to:</p>
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                      <li>Improve our services, Site and how we operate our businesses;</li>
                      <li>Understand and enhance your experience using our Site, products and services;</li>
                      <li>Personalize our products or services and make recommendations;</li>
                      <li>It is strictly forbidden for you to engage in any activity that interferes with our Resources, including either our servers or networks to which they are connected.</li>
                      <li>Provide and deliver products and services you request;</li>
                      <li>Process, manage, complete, and account for transactions;</li>
                      <li>Provide customer support and respond to your requests, comments, and inquiries;</li>
                      <li>Create and manage the online accounts you manage on our Website;</li>
                      <li>Send you related information, including confirmations, invoices, technical notices, updates, security alerts and support and administrative messages;</li>
                      <li>Communicate with you about promotions, upcoming events and news about products and services;</li>
                      <li>We may process your personal information without your knowledge or consent where required by applicable law or regulation for the purposes of verification of identity or for prevention, detection or investigation, including of cyber incidents, prosecution and punishment of offences;</li>
                      <li>Protect, investigate and deter against fraudulent, unauthorized or illegal activity.</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-navy border-b border-slate-100 pb-2">
                5. DATA TRANSFER
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>Information about our user is an important part of our business and we take due care to protect the same.</p>
                <p>We share your data with your consent or to complete any transaction or provide any product or service you have requested or authorized. We also share data with our affiliates and subsidiaries, with vendors working on our behalf.</p>
                <p>We may employ other companies and individuals to perform functions on our behalf. The functions include fulfilling orders for products or services, delivering packages, sending postal mail and e-mail, removing repetitive information from customer lists, providing marketing assistance, providing search results and links (including paid listings and links), processing payments, transmitting content, scoring credit risk, and providing customer service.</p>
                <p>These third-party service providers have access to personal information needed to perform their functions but may not use it for other purposes. Further, they must process the personal information in accordance with this Privacy Policy and as permitted by applicable data protection laws.</p>
                <p>We release account and other personal information when we believe is appropriate to comply with the law, enforce or apply our conditions of use, and other agreements, protect the rights, property or safety of Us, our users or others. This includes exchanging information with other companies and organizations for fraud protection and credit risk reduction.</p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-navy border-b border-slate-100 pb-2">
                6. COOKIES
              </h2>
              <div className="space-y-4">
                <p className="text-slate-600">
                  To optimize our web presence, we use cookies. These are small text files stored on your computer’s main memory. These cookies are deleted after you close the browser. Other cookies remain on your computer (long-term cookies) and permit its recognition on your next visit. This allows us to improve your access to our site. This helps us to learn more about your interests, and provide you with essential features and services and for additional purposes, including:
                </p>
                <ul className="space-y-3 list-none pl-0">
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-semibold mt-0.5">a.</span>
                    <p>Keeping track of items stored in your shopping basket.</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-semibold mt-0.5">b.</span>
                    <p>Conducting research and diagnostics to improve the content, products, and services.</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-semibold mt-0.5">c.</span>
                    <p>Preventing fraudulent activity.</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-semibold mt-0.5">d.</span>
                    <p>Improving security.</p>
                  </li>
                </ul>
                <ul className="list-decimal pl-5 space-y-3 text-slate-600">
                  <li value="2">Our cookies allow you to take advantage of some of our essential features. For instance, if you block or otherwise reject our cookies, you will not be able to add items to your shopping basket, proceed to checkout, or use any products or services that require you to sign in.</li>
                  <li>Approved third parties also may set cookies when you interact with Our services.</li>
                  <li>Third parties include search engines, providers of measurement and analytics services, social media networks, and advertising companies.</li>
                  <li>Third parties use cookies in the process of delivering content, including ads relevant to your interests, to measure the effectiveness of their ads, and to perform services on behalf of Us.</li>
                  <li>You can prevent the storage of cookies by choosing a “disable cookies” option in your browser settings. But this can limit the functionality of our services.</li>
                </ul>
              </div>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-navy border-b border-slate-100 pb-2">
                7. DATA SECURITY
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>We take due care to protect customer data. Technical measures are in place to prevent unauthorized or unlawful access to data and against accidental loss or destruction of, or damage to, data. The employees who are dealing with the data have been trained to protect the data from any illegal or unauthorized usage.</p>
                <p>All transactions on the Website are secure and protected. In order to protect the User against unintentional disclosure of information when transacting on the Website, all information entered by the User is encrypted. In no case does the Company / Website store, retain or receive a User’s credit and debit card information.</p>
                <p>By supplying this information, the User is making direct contact with the relevant payment gateway, which is authorized to handle it and in compliance with the specifications and requirements of various banks and institutions as well as payment franchisees that it is associated with.</p>
                <p>We maintain physical, electronic, and procedural safeguards in connection with the collection, storage, and disclosure of personal customer information.</p>
                <p>We take reasonable steps to help protect your personal information in an effort to prevent the loss, misuse, and unauthorized access, disclosure, alteration and destruction. It is your responsibility to protect your usernames and passwords to help prevent anyone from accessing or abusing your accounts and services. You should not use or reuse the same passwords you use with other accounts as your password for our services.</p>
                <p>It is important for you to protect against unauthorized access to your password and your computers, devices, and applications. Be sure to sign off when you finish using a shared computer.</p>
                <p>Information you provide to us is shared on our secure servers. We have implemented appropriate physical, technical and organizational measures designed to secure your information against accidental loss and unauthorized access, use, alteration or disclosure. In addition, we limit access to personal data to those employees, agents, contractors, and other third parties that have a legitimate business need for such access.</p>
                <p>Information collected from you will be stored for such period as required to complete the transaction entered into with you or such period as mandated under the applicable laws.</p>
              </div>
            </div>

            {/* Section 8 */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-navy border-b border-slate-100 pb-2">
                8. LINKS TO THIRD PARTY SITE/APPS
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>Our Site may, from time to time, contain links to and from other websites of third parties. Please note that if you follow a link to any of these websites, such websites will apply different terms to the collection and privacy of your personal data and we do not accept any responsibility or liability for these policies. When you leave our Site, we encourage you to read the privacy policy of every website you visit.</p>
              </div>
            </div>

            {/* Section 9 */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-navy border-b border-slate-100 pb-2">
                9. SOCIAL NETWORK PLUGINS
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>This Website incorporates plugins and/or buttons for social networks, in order to allow easy sharing on your favourite social networks. These plugins are programmed so as not to set any cookies when assessing the page to safeguard the privacy of users. Cookies may be set, if you make voluntary use of the plugin. The collection and use of information obtained by means of the plugin are governed by the respective privacy policies of the social networks.</p>
              </div>
            </div>

            {/* Section 10 */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-navy border-b border-slate-100 pb-2">
                10. SHARING OF PERSONAL INFORMATION
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>We do not share your personal data with third parties without your prior consent other than:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>With third parties who work on our behalf provided such third parties adhere to the data protection principles set out in the IT Act, 2000 (21 of 2000) and other applicable legislation, or enter into a written agreement with Us requiring that the third party provide at least the same level of privacy protection as is required by such principles;</li>
                  <li>To comply with laws or to respond to lawful requests and legal process;</li>
                  <li>To protect the rights and property of Us, our agents, customers, and others including to enforce our agreements, policies and terms of use;</li>
                  <li>In an emergency, including to protect the personal safety of any person; and</li>
                  <li>For the purpose of a business deal (or negotiation of a business deal) involving the sale or transfer of all or a part of our business or assets (business deals may include, for example, any merger, financing, acquisition, divestiture or bankruptcy transaction or proceeding).</li>
                </ul>
              </div>
            </div>

            {/* Section 11 */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-navy border-b border-slate-100 pb-2">
                11. CHANGES TO THIS POLICY
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>We may change this policy from time to time. You agree that your continued use of our services after such changes have been published to our services will constitute your acceptance of such revised policy.</p>
              </div>
            </div>

            {/* Section 12 */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-navy border-b border-slate-100 pb-2">
                12. NEWSLETTER
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>Following subscription to the newsletter, your e-mail address is used for our advertising purposes until you cancel the newsletter again. Cancellation is possible at any time. The following consent has been expressly granted by you separately, or possibly in the course of an ordering process: (I am accepting to receive a newsletter from this website), you may revoke your consent at any time with future effect. If you no longer want to receive the newsletter, then unsubscribe by clicking on the unsubscribe option given in the email footer.</p>
                <p>If you have any concerns about privacy or grievances with Us, please contact us with a thorough description and we will try to resolve the issue for you.</p>
              </div>
            </div>

            {/* Section 13 */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-navy border-b border-slate-100 pb-2">
                13. DISPUTE RESOLUTION AND JURISDICTION
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>The Parties to this Policy expressly agree that any disputes arising from the formation, interpretation, and implementation of this Policy will be resolved through a two-step Alternative Dispute Resolution (“ADR”) process. Both Parties agree that the content of this Section will survive the termination or expiration of the Terms and/or Policy.</p>
                <ul className="list-decimal pl-5 space-y-3">
                  <li>
                    <strong>Mediation:</strong> If, at any time, the parties cannot agree on anything, the parties will attempt to resolve the dispute amicably amongst themselves. In case of failure to reach an amicable solution within sixty (60) days after one Party notifies the other of the dispute, the matter will be resolved by arbitration, as described herein below.
                  </li>
                  <li>
                    <strong>Arbitration:</strong> A dispute that cannot be resolved by mediation will be submitted to arbitration by a sole arbitrator selected by the Company, whose award will be valid and binding on both parties. Unless the sole arbitrator directs either Party to shoulder the entire cost of the proceedings, the Parties will bear their own costs. A neutral arbitrator shall conduct the arbitration in English, and the arbitration shall take place in Chennai, India.
                  </li>
                </ul>
                <p>In addition to the Terms and Policy, any other agreements entered into between the parties will be governed by the laws, rules, and regulations of India, and any disputes between the parties will be heard exclusively by the courts in Erode, Tamil Nadu, India.</p>
              </div>
            </div>

            {/* Section 14 */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-navy border-b border-slate-100 pb-2">
                14. GRIEVANCE OFFICER
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>In accordance with Information Technology Act 2000 and rules made there under, the name and contact details of the Grievance Officer are provided below:</p>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-6 space-y-2 text-[15px]">
                  <p><strong>Name:</strong> CS R. Nithya Gokul</p>
                  <p><strong>E-mail:</strong> <a href="mailto:office@nithyagokul.com" className="text-blue hover:underline">office@nithyagokul.com</a></p>
                  <p><strong>Phone:</strong> <a href="tel:+9176958 58055" className="text-blue hover:underline">+91 76958 58055</a></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
