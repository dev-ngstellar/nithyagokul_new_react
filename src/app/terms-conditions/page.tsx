import React from "react";
import YesterdayDate from "@/components/YesterdayDate";

export const metadata = {
  title: "Terms & Conditions | Nithya Gokul Associates",
  description: "Read our terms and conditions governing the use of nithyagokul.com and our corporate secretarial and legal advisory services.",
};

export default function TermsConditionsPage() {
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
            Terms &amp; Conditions
          </h1>
          <p className="text-[16px] md:text-[18px] text-slate-300 max-w-xl mx-auto leading-[1.8]">
            Last updated: <YesterdayDate />
          </p>
        </div>

      </section>

      {/* Main Content Section */}
      <section className="py-[70px] md:py-[90px] lg:py-[120px] bg-slate-50/50">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm text-slate-700 font-sans leading-relaxed space-y-8">
            
            {/* Introductory Text */}
            <div className="space-y-4 text-slate-600 text-[15px] md:text-[16px] leading-[1.7]">
              <p>
                Thank you for visiting <a href="https://www.nithyagokul.com" className="text-blue hover:underline">nithyagokul.com</a>. This website is owned and operated by Nithya Gokul Associates, with office at CS R Nithya Gokul LLB,FCS., Company Secretary, Bharathipalayam 1 Street Opposite lane to Kotak Mahindra Bank Nethaji Nagar, Moolapalam, Erode – 638002. The use of this website and services on this website provided by Nithya Gokul (hereinafter referred to as “Owner“) are subject to the following Terms &amp; Conditions (hereinafter the “Terms of Service“), all parts and sub-parts of which are specifically incorporated by reference here. Following are the Terms of Service governing your use of <a href="https://www.nithyagokul.com" className="text-blue hover:underline">nithyagokul.com</a> (the “Website“), all pages on the Website and any services provided by or on this Website (“Services“).
              </p>
              <p>
                By accessing either directly or through a hyperlink, the Website, and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the Terms of Service including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation vendors, buyers, customers, merchants, browsers and/ or contributors of content.
              </p>
              <p>
                We reserve the right to change this User Agreement at any time without prior notice. You acknowledge and agree that it is your responsibility to review this User Agreement periodically to keep up to date on any modifications. By continuing to use this site after such modifications, you acknowledge and agree to the modified terms and conditions.
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h2 className="font-serif text-2xl font-bold text-navy">
                1. DEFINITIONS
              </h2>
              <p className="text-slate-600">The parties referred to in these Terms of Service shall be defined as follows:</p>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex items-start gap-2">
                  <span className="text-gold font-semibold mt-0.5">a)</span>
                  <p>
                    <strong>Owner, Us, We:</strong> The Owner, as the creator, operator, and publisher of the Website, makes the Website, and certain Services on it, available to users. Nithya Gokul, Owner, Us, We, Our, Ours and other first-person pronouns will refer to the Owner, as well as all employees and affiliates of the Owner.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-semibold mt-0.5">b)</span>
                  <p>
                    <strong>You, the User, the Client:</strong> You, as the user of the Website, will be referred to throughout these Terms of Service with second-person pronouns such as You, Your, Yours, or as User or Client. For the purpose of these Terms of Service, the term “User” or “you” shall mean any natural or legal person who is accessing the Website. The term “Your” shall be construed accordingly.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold font-semibold mt-0.5">c)</span>
                  <p>
                    <strong>Parties:</strong> Collectively, the parties to these Terms of Service (the Owner and You) will be referred to as Parties.
                  </p>
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h2 className="font-serif text-2xl font-bold text-navy">
                2. ASSENT &amp; ACCEPTANCE
              </h2>
              <div className="space-y-3 text-slate-600">
                <p>
                  By using the Website, You warrant that You have read and reviewed these Terms of Service and that You agree to be bound by it. If You do not agree to be bound by these Terms of Service, please leave the Website immediately. The Owner only agrees to provide use of this Website and Services to You if You assent to these Terms of Service.
                </p>
                <p>
                  Further, based on the Services obtained by a User, additional terms and conditions in respect of the specific Services may apply, which shall be deemed an agreement between the Users and the Owner.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h2 className="font-serif text-2xl font-bold text-navy">
                3. AGE RESTRICTION
              </h2>
              <div className="space-y-3 text-slate-600">
                <p>
                  You must be at least 18 (eighteen) years of age to use this Website or any Services contained herein. By using this Website, You represent and warrant that You are at least 18 years of age and may legally agree to these Terms of Service. The Owner assumes no responsibility or liability for any misrepresentation of Your age.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h2 className="font-serif text-2xl font-bold text-navy">
                4. ACCEPTABLE USE
              </h2>
              <div className="space-y-3 text-slate-600">
                <p>
                  You agree not to use the Website or Services for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the Website or Services in any way that could damage the Website, Services or general business of the Owner.
                </p>
                <p>You acknowledge that:</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  <li>
                    We may require you to supply certain details about yourself (such as name, email, telephone number, etc.) as part of the registration process, or as part of your ability to use the Resources. By providing information, you agree that it is always accurate, correct, and up-to-date.
                  </li>
                  <li>
                    Access to our Resources requires you to keep any username and password for your account confidential. You are therefore responsible for all activities on your account/s.
                  </li>
                  <li>
                    It is strictly forbidden to access (or attempt to access) any of our Resources through a method other than the one we provide. We specifically prohibit your access to our Resources (or your attempt to access them) by any automated, unethical, or unconventional means.
                  </li>
                  <li>
                    It is strictly forbidden for you to engage in any activity that interferes with our Resources, including either our servers or networks to which they are connected.
                  </li>
                  <li>
                    It is strictly prohibited to copy, duplicate or reproduce our resources, or to sell, trade, or resell them.
                  </li>
                  <li>
                    Depending on the service offering chosen by any person or entity while checking out on various service pages on the website, <a href="https://www.nithyagokul.com" className="text-blue hover:underline">nithyagokul.com</a> requires a specimen signature as part of the order documentation, whether it is for completion of the order or not, and this signature can be used for self-attestation.
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
