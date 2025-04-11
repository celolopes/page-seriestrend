import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | SeriesTrend",
  description:
    "Terms of Use for the SeriesTrend app - Rules and conditions for using the service",
};

export default function TermsOfService() {
  return (
    <main className="pt-28 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-sm p-8 rounded-lg text-gray-800">
          <Link
            href="/en"
            className="text-accent hover:underline mb-8 inline-block"
          >
            ← Back to home page
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Terms of Use for <span className="text-accent">SeriesTrend</span>
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500 mb-8 text-center">
              Last updated: {new Date().toLocaleDateString("en-US")}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, or using the SeriesTrend application
              ("Application"), you agree to be bound by these Terms of Use. If
              you do not agree with any part of these terms, you may not access
              or use our Application.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              2. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these terms at any time. Changes
              will take effect immediately upon posting of the updated terms.
              Your continued use of the Application after the posting of changes
              will constitute your acceptance of the revised terms.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              3. Use of the Application
            </h2>
            <p>
              SeriesTrend is an application designed to help users track trends
              and information about TV series. By using our Application, you
              agree to:
            </p>
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
              <li>
                Use the Application only for lawful purposes and in accordance
                with these Terms;
              </li>
              <li>
                Not use the Application in any way that could damage, disable,
                or overload our servers or networks;
              </li>
              <li>
                Not attempt to access any part of the Application through
                unauthorized means;
              </li>
              <li>
                Not use the Application to distribute viruses, malware, or other
                malicious code;
              </li>
              <li>Not collect or harvest user data without consent;</li>
              <li>Follow all applicable laws when using the Application.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              4. Account Creation
            </h2>
            <p>
              Some features of the Application may require you to create an
              account. By creating an account, you agree to:
            </p>
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
              <li>Provide accurate, current, and complete information;</li>
              <li>Maintain and update your information as needed;</li>
              <li>
                Be responsible for maintaining the confidentiality of your
                password and restricting access to your account;
              </li>
              <li>
                Be responsible for all activities that occur under your account;
              </li>
              <li>
                Notify us immediately of any unauthorized use of your account.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              5. Intellectual Property
            </h2>
            <p>
              The Application and all of its content, features, and
              functionality (including but not limited to text, graphics, logos,
              design, software, and code) are owned by SeriesTrend and protected
              by national and international intellectual property laws.
            </p>
            <p>You are not authorized to:</p>
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
              <li>
                Modify, disassemble, decompile, or reverse engineer the
                Application;
              </li>
              <li>
                Remove copyright notices, trademarks, or other proprietary
                notices;
              </li>
              <li>
                Use the content of the Application for commercial purposes
                without prior written authorization;
              </li>
              <li>
                Transfer, sublicense, or transfer your rights under these Terms.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              6. User Content
            </h2>
            <p>
              The Application may allow you to post, link, store, share, or
              otherwise make available certain information, text, graphics,
              videos, or other materials ("User Content"). You are responsible
              for any User Content you provide.
            </p>
            <p>
              By providing User Content, you grant SeriesTrend a non-exclusive,
              transferable, sub-licensable, royalty-free, worldwide right and
              license to use, reproduce, modify, perform, display, distribute,
              and create derivative works from your User Content in connection
              with the Application.
            </p>
            <p>You represent and warrant that:</p>
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
              <li>
                You own or have the necessary licenses, rights, consents, and
                permissions to use and authorize SeriesTrend to use your User
                Content;
              </li>
              <li>
                The User Content does not violate the privacy rights, publicity
                rights, copyrights, contractual rights, or any other rights of
                any person.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              7. Third-Party Content
            </h2>
            <p>
              The Application may contain links to third-party websites,
              services, advertisements, or other content that are not owned or
              controlled by SeriesTrend. We do not endorse or assume any
              responsibility for the content, privacy policies, or practices of
              any third-party websites or services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              8. Disclaimer of Warranties
            </h2>
            <p>
              The Application is provided "as is" and "as available," without
              warranties of any kind, express or implied. We do not guarantee
              that the Application will function without interruption or be
              error-free, that defects will be corrected, or that the
              Application or the server making it available are free of viruses
              or other harmful components.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              9. Limitation of Liability
            </h2>
            <p>
              In no event shall SeriesTrend, its directors, employees, partners,
              agents, suppliers, or affiliates be liable for any indirect,
              incidental, special, consequential, or punitive damages, including
              without limitation, loss of profits, data, use, goodwill, or other
              intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
              <li>
                Your access to or use of or inability to access or use the
                Application;
              </li>
              <li>
                Any conduct or content of any third party on the Application;
              </li>
              <li>Any content obtained from the Application;</li>
              <li>
                Unauthorized access, use, or alteration of your transmissions or
                content.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              10. Indemnification
            </h2>
            <p>
              You agree to defend, indemnify, and hold harmless SeriesTrend and
              its licensors and licensees, employees, contractors, agents,
              suppliers, and successors from any claims, damages, liabilities,
              costs, or debt, and expenses (including but not limited to
              attorney's fees) arising from:
            </p>
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
              <li>Your use of and access to the Application;</li>
              <li>Your violation of these Terms;</li>
              <li>
                Your violation of any third party rights, including but not
                limited to, copyright, property, or privacy rights.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              11. Termination
            </h2>
            <p>
              We may terminate or suspend your account and access to the
              Application immediately, without prior notice or liability, for
              any reason, including, without limitation, if you breach the
              Terms.
            </p>
            <p>
              Upon termination, your right to use the Application will cease
              immediately. If you wish to terminate your account, you may simply
              discontinue using the Application or notify us.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              12. Applicable Law
            </h2>
            <p>
              These Terms shall be governed and construed in accordance with the
              laws of Brazil, without regard to its conflict of law provisions.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms will
              not be considered a waiver of those rights. If any provision of
              these Terms is held to be invalid or unenforceable by a court, the
              remaining provisions of these Terms will remain in effect.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">13. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
              <a
                href="mailto:contact@seriestrend.com"
                className="text-accent hover:underline"
              >
                contact@seriestrend.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
