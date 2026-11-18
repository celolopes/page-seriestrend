import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "隱私政策 | SeriesTrend",
  description: "SeriesTrend 應用程式隱私政策 - 我們如何處理您的資料與個人資訊",
};

export default function PrivacyPolicy() {
  return (
    <main className="pt-28 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-sm p-8 rounded-lg text-gray-800">
          <Link
            href="/zh"
            className="text-accent hover:underline mb-8 inline-block"
          >
            ← 返回主頁
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-accent">SeriesTrend</span> 隱私政策
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500 mb-8 text-center">
              最後更新：<time dateTime="2026-11-18">2026/11/18</time>
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">簡介</h2>
            <p>
              SeriesTrend（「我們」）致力於保護 SeriesTrend
              應用程式（「App」）用戶的隱私。本隱私政策說明我們如何在您使用本
              App 時收集、使用、披露及保護您的資訊。
            </p>
            <p>
              使用
              SeriesTrend，即表示您同意依本政策收集和使用資訊。我們收集的個人資訊僅用於提供和改進本
              App。我們不會將您的資訊用於本政策所述以外的用途，也不會與任何人分享。
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">我們收集的資訊</h2>
            <p>
              為了讓您獲得更好的使用體驗，我們可能會收集某些可識別個人身份的資訊，包括但不限於：
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">帳戶資訊</h3>
            <p>
              當您在 SeriesTrend
              創建帳戶時，我們可能會要求您提供用戶名、電子郵件地址和密碼。這些資訊用於建立和管理您的帳戶、驗證您的存取權限，並個性化您的
              App 體驗。
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">使用資訊</h3>
            <p>
              我們會收集您如何使用本 App
              的資訊，包括您追蹤的影集、內容偏好、與其他用戶的互動以及您使用的功能。這些資訊有助於我們個性化您的體驗並改進服務。
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">裝置資訊</h3>
            <p>
              我們可能會收集您用於存取本 App
              的裝置資訊，包括硬體型號、作業系統、裝置唯一識別碼和行動網路資訊。這些資訊用於提升
              App 效能及排除技術問題。
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">位置資訊</h3>
            <p>
              經您同意後，我們可能會收集和處理您的大致位置資訊。這些資訊用於提供基於位置的功能並提升內容的相關性。
            </p>

            <h2
              id="google-drive-backup"
              className="text-2xl font-semibold mt-8 mb-4"
            >
              Google Drive 心情記錄備份（Android）
            </h2>
            <p>
              Android 版的 Premium 訂閱者可以授權 SeriesTrend 使用 Google Drive
              備份及還原心情記錄。Google 會將備份儲存在您授權的 Google 帳戶中，使用專供
              SeriesTrend 存取的資料夾。<code>drive.appdata</code>{" "}
              權限僅允許 SeriesTrend 存取該資料夾。這個資料夾不會顯示在 Drive
              的一般檔案清單中。
            </p>
            <p>
              備份可能包含心情與其強度、影集和集數的識別碼及標題、日期、您選擇的
              同伴及場所類別、標籤和備註。場所欄位使用您選擇的類別，不會收集 GPS 座標。
              備份亦可能包含來源平台、備份版本，以及適用時用來識別相關 Trakt
              帳戶的資訊。
            </p>
            <p>
              取得授權後，您每次儲存記錄的變更時，App 都會排程自動更新備份。
              啟動此功能時，App 可以自動還原記錄，並會先嘗試使用最新的歷史版本。
              如果無法使用該版本，則會嘗試使用目前的備份副本。
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              備份保留方式
            </h3>
            <p>
              SeriesTrend 會儲存目前的備份，並嘗試保留最近的 10 個歷史版本。
              清除舊版本時可能失敗，因此 Drive 可能保留更多版本。App 並未設定
              備份副本的到期時間。
            </p>
            <p>
              登出帳戶或清除裝置上的資料不會刪除 Drive 中的備份。在裝置上刪除
              的記錄可能仍保留於先前的版本，並在還原備份時重新出現。
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              如何刪除備份或撤銷存取權
            </h3>
            <p>
              若要刪除備份，請在瀏覽器中使用同一個 Google 帳戶開啟 Google Drive。
              在<strong>設定</strong>中開啟<strong>管理應用程式</strong>，選擇刪除
              SeriesTrend 的隱藏應用程式資料。刪除後，這些備份就無法用於還原。請參閱
              <a
                href="https://support.google.com/drive/answer/6374270?hl=zh-TW"
                className="text-accent underline"
              >
                Google Drive 說明
              </a>
              。
            </p>
            <p>
              您可以在
              <a
                href="https://myaccount.google.com/connections"
                className="text-accent underline"
              >
                Google 帳戶的連結設定
              </a>
              中撤銷存取權。撤銷後，SeriesTrend 將無法存取 Drive。若要移除已有的
              備份，請使用 Drive 的刪除功能。如果刪除後存取權仍然有效，SeriesTrend
              可能會建立新的備份。
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              我們如何使用您的資訊
            </h2>
            <p>我們收集的資訊將用於以下目的：</p>
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
              <li>提供、維護和改進本 App 及其功能；</li>
              <li>根據您的偏好和互動個性化您的體驗；</li>
              <li>開發新功能、產品和服務；</li>
              <li>就更新、特別優惠和相關資訊與您聯繫；</li>
              <li>分析使用趨勢及 App 功能的有效性；</li>
              <li>偵測、防止並處理技術和安全問題；</li>
              <li>遵守法律和法規義務。</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              資訊的分享與披露
            </h2>
            <p>
              我們不會將您的個人資訊出售或出租給第三方。我們僅在以下情況下分享您的資訊：
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">服務供應商</h3>
            <p>
              我們可能會與協助我們提供、維護和改進本 App
              的第三方公司和個人（如主機供應商、數據分析和客服）分享您的資訊。這些合作夥伴需遵守保密和安全的合約義務。
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">法律要求</h3>
            <p>若法律、法規、法律程序或政府要求，我們可能會披露您的資訊。</p>
            <h3 className="text-xl font-semibold mt-6 mb-3">權益保護</h3>
            <p>我們可能會披露資訊以保護我們、用戶或他人的權益、財產或安全。</p>
            <h3 className="text-xl font-semibold mt-6 mb-3">業務轉移</h3>
            <p>
              若我們涉及合併、收購或資產出售，您的資訊可能會作為該過程的一部分被轉移。我們會通知您個人資訊的所有權或用途變更。
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">資料安全</h2>
            <p>
              我們非常重視您的資訊安全。我們實施技術、管理和實體措施，以防止未經授權的存取、遺失、濫用或更改您的資訊。然而，互聯網傳輸或電子儲存方式並非百分之百安全，因此我們雖致力於保護您的個人資訊，但無法保證其絕對安全。
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">廣告與分析</h2>
            <p>
              我們可能會使用第三方服務進行廣告和數據分析，如 Google Analytics
              及廣告工具。這些服務可能會收集您的裝置發送的資訊，包括瀏覽的頁面和在
              App 內的互動。欲了解 Google 如何收集和處理數據，請參閱：
              <a
                href="https://policies.google.com/privacy"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://policies.google.com/privacy
              </a>
              。
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">兒童隱私</h2>
            <p>
              我們的 App 並非針對 13 歲以下兒童設計。我們不會有意識地收集 13
              歲以下兒童的個人資訊。如果您是家長或監護人，並知悉您的孩子向我們提供了個人資訊，請與我們聯繫，以便我們採取必要措施。
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">您的權利與選擇</h2>
            <p>您對您的個人資訊擁有以下權利：</p>
            <ul className="list-disc pl-5 mt-2 mb-4 space-y-2">
              <li>存取、更正或刪除您的個人資訊；</li>
              <li>隨時撤回您的同意；</li>
              <li>選擇不接收行銷資訊；</li>
              <li>要求限制處理您的資訊；</li>
              <li>要求資料可攜性。</li>
            </ul>
            <p>若要行使這些權利，請使用下方提供的聯絡資訊與我們聯繫。若要管理
              Drive 中的備份，請參閱
              <a
                href="#google-drive-backup"
                className="text-accent underline"
              >
                備份說明
              </a>
              。</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">隱私政策的變更</h2>
            <p>
              我們可能會不時更新本隱私政策。若有變更，我們會在本頁面發布新政策，若屬重大變更，將提供更明顯的通知（如電子郵件或
              App 內通知）。
            </p>
            <p>
              建議您定期查閱本隱私政策以了解最新變更。政策變更自發布於本頁面時生效。
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">聯絡我們</h2>
            <p>如果您對本隱私政策有任何疑問，請聯絡我們：</p>
            <ul className="list-none mt-2 mb-4 space-y-2">
              <li>
                <strong>電子郵件：</strong> marcelo.cae@gmail.com
              </li>
              <li>
                <strong>聯絡表單：</strong>{" "}
                <Link
                  href="/zh/contact"
                  className="text-accent hover:underline"
                >
                  聯絡我們
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
