import React from "react";
import { pageAlternates } from "@/lib/site-seo";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: pageAlternates("privacy", "en"),
  title: "Privacy Policy | SeriesTrend",
  description:
    "SeriesTrend application Privacy Policy - How we handle your data and personal information",
};

export default function PrivacyPolicy() {
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
            <span className="text-accent">SeriesTrend</span> Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500 mb-8 text-center">
              Last updated: <time dateTime="2026-11-18">11/18/2026</time>
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
            <p>
              SeriesTrend ("us", "we", or "our") is committed to protecting the
              privacy of SeriesTrend application ("App") users. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you use our App.
            </p>
            <p>
              By using SeriesTrend, you agree to the collection and use of
              information in accordance with this policy. The personal
              information we collect is used only to provide and improve the
              App. We will not use or share your information with anyone except
              as described in this Privacy Policy.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Information We Collect
            </h2>
            <p>
              To provide a better experience while using our App, we may collect
              certain personally identifiable information, including but not
              limited to:
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              Account Information
            </h3>
            <p>
              When you create an account in SeriesTrend, we may request
              information such as username, email address, and password. This
              information is used to create and manage your account,
              authenticate your access, and personalize your experience in the
              App.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              Usage Information
            </h3>
            <p>
              We collect information about how you use the App, including series
              you follow, content preferences, interactions with other users,
              and features you use. This information helps us personalize your
              experience and improve our services.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              Device Information
            </h3>
            <p>
              We may collect information about the device you use to access the
              App, including hardware model, operating system, unique device
              identifiers, and mobile network information. This information is
              used to improve App performance and troubleshoot technical issues.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">Location Data</h3>
            <p>
              With your permission, we may collect and process information about
              your approximate location. This information is used to provide
              location-based features and improve the relevance of content
              displayed.
            </p>

            <h2
              id="google-drive-backup"
              className="text-2xl font-semibold mt-8 mb-4"
            >
              Mood log backup in Google Drive (Android)
            </h2>
            <p>
              On Android, Premium subscribers can authorize SeriesTrend to use
              Google Drive to back up and restore their mood logs. Google
              stores the copies in the private SeriesTrend app data folder in the
              Google Account you authorized. The <code>drive.appdata</code>{" "}
              permission gives SeriesTrend access only to that folder, which
              is hidden from the regular Drive file list.
            </p>
            <p>
              The backup may include moods and their intensity, series and episode
              identifiers and titles, dates, categories you select for who you
              were with and where you were, tags, and notes. The location field
              uses selected categories and does not collect GPS coordinates.
              The copy may also include the source platform, the backup
              version, and a reference to the associated Trakt account,
              where applicable.
            </p>
            <p>
              After you grant access, the app schedules automatic backup updates
              when you save changes to your logs. When the feature starts,
              the app can restore your logs automatically. It tries the most
              recent historical version and, if it is unavailable, tries the
              current copy.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              Backup retention
            </h3>
            <p>
              SeriesTrend saves the current backup and tries to keep the 10
              most recent versions in its history. Cleanup can fail and leave
              additional versions in Drive. The app sets no expiration period
              for the copies.
            </p>
            <p>
              Signing out or clearing data on your device does not delete copies
              in Drive. Logs deleted on the device may remain in earlier
              versions and reappear when you restore a backup.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              How to delete backups or revoke access
            </h3>
            <p>
              To delete the copies, open Google Drive in a browser with the
              same Google Account. In <strong>Settings</strong>, open{" "}
              <strong>Manage apps</strong> and choose the option to delete
              SeriesTrend’s hidden app data. After deletion, those copies are
              no longer available to restore. See{" "}
              <a
                href="https://support.google.com/drive/answer/6374270?hl=en-419"
                className="text-accent underline"
              >
                Google Drive Help
              </a>
              .
            </p>
            <p>
              You can revoke access in your{" "}
              <a
                href="https://myaccount.google.com/connections"
                className="text-accent underline"
              >
                Google Account connections
              </a>
              . This stops SeriesTrend from accessing Drive. To remove copies
              already stored there, use Drive’s deletion control. If access
              remains active after deletion, SeriesTrend may create a new
              backup.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p>
              The information we collect is used for the following purposes:
            </p>
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
              <li>
                To provide, maintain, and improve the App and its features;
              </li>
              <li>
                To personalize your experience based on your preferences and
                interactions;
              </li>
              <li>To develop new features, products, and services;</li>
              <li>
                To communicate with you about updates, special offers, and
                relevant information;
              </li>
              <li>
                To analyze usage trends and effectiveness of App features;
              </li>
              <li>
                To detect, prevent, and address technical and security issues;
              </li>
              <li>To comply with legal and regulatory obligations.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Sharing and Disclosure of Information
            </h2>
            <p>
              We do not sell or rent your personal information to third parties.
              We may share your information in the following circumstances:
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              Service Providers
            </h3>
            <p>
              We may share your information with third-party companies and
              individuals that help us provide, maintain, and improve the App
              (such as hosting providers, data analysis, and customer service).
              These partners are subject to contractual obligations of
              confidentiality and security.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              Legal Requirements
            </h3>
            <p>
              We may disclose your information if required by law, regulation,
              legal process, or governmental request.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              Protection of Rights
            </h3>
            <p>
              We may disclose information to protect our rights, property, or
              safety, as well as those of our users or others.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              Business Transfers
            </h3>
            <p>
              If we are involved in a merger, acquisition, or sale of assets,
              your information may be transferred as part of that process. We
              will notify you of any change in ownership or use of your personal
              information.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
            <p>
              The security of your information is important to us. We implement
              technical, administrative, and physical measures designed to
              protect your information from unauthorized access, loss, misuse,
              or alteration. However, no method of transmission over the
              Internet or method of electronic storage is 100% secure.
              Therefore, while we strive to protect your personal information,
              we cannot guarantee its absolute security.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Advertising and Analytics
            </h2>
            <p>
              We may use third-party services for advertising and data analysis,
              such as Google Analytics and advertising tools. These services may
              collect information sent by your device, including pages visited
              and interactions within the App. For more information about how
              Google collects and processes data, visit:{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://policies.google.com/privacy
              </a>
              .
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Children's Privacy
            </h2>
            <p>
              Our App is not directed to individuals under 13 years of age. We
              do not knowingly collect personally identifiable information from
              children under 13. If you are a parent or guardian and know that
              your child has provided us with personal information, please
              contact us so we can take necessary action.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Your Rights and Choices
            </h2>
            <p>
              You have rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
              <li>
                Accessing, correcting, or deleting your personal information;
              </li>
              <li>Withdrawing your consent at any time;</li>
              <li>Opting out of marketing communications;</li>
              <li>Requesting restriction of processing of your information;</li>
              <li>Requesting data portability.</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information
              below. To manage your copies in Drive, see the{" "}
              <a
                href="#google-drive-backup"
                className="text-accent underline"
              >
                backup instructions
              </a>
              .
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and, if the changes are significant, we will provide a more
              prominent notice (such as an email or an in-App notification).
            </p>
            <p>
              We recommend that you review this Privacy Policy periodically for
              any changes. Changes to this Privacy Policy are effective when
              posted on this page.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <ul className="list-none mt-2 mb-4 space-y-2">
              <li>
                <strong>By email:</strong> marcelo.cae@gmail.com
              </li>
              <li>
                <strong>By contact form:</strong>{" "}
                <Link
                  href="/en/contact"
                  className="text-accent hover:underline"
                >
                  seriestrend.vercel.app/en/contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
