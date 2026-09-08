import './style.css';

const copy = {
  vi: {
    metaTitle: 'Desktop Coworker for ChatGPT — Để ChatGPT làm việc ngay trên máy bạn',
    metaDescription: 'Bớt copy-paste, bớt mở từng file. Để ChatGPT làm việc với file và dự án trên máy bạn. Thử miễn phí 24 giờ sử dụng, gói 7 ngày chỉ 10.000đ.',
    navHow: 'Cách hoạt động', navUse: 'Việc có thể giao', navPrice: 'Giá', navFaq: 'Hỏi đáp', navDownload: 'Tải miễn phí',
    eyebrow: 'ChatGPT trả lời rất giỏi. Giờ để nó làm luôn.',
    heroTitle: 'Đừng copy-paste công việc cho ChatGPT nữa.',
    heroText: 'Cho ChatGPT làm việc với file, thư mục và project ngay trên máy bạn — đọc, chỉnh, chạy các bước cần thiết và kiểm tra lại. Bạn chỉ cần nói kết quả muốn có.',
    heroPrimary: 'Tải miễn phí cho Windows', heroSecondary: 'Xem nó giúp được gì',
    heroNote: '24 giờ sử dụng miễn phí · Không cần nhập thẻ · Gói 7 ngày chỉ 10.000đ',
    screenLabel: 'Một việc thật, làm ngay trong ChatGPT',
    screenPrompt: '“Project này đang lỗi. Tìm nguyên nhân, sửa giúp tôi rồi kiểm tra lại.”',
    screenStep1: 'Đã đọc project', screenStep2: 'Đã tìm thấy lỗi', screenStep3: 'Đã sửa và kiểm tra lại',
    painEyebrow: 'VẤN ĐỀ KHÔNG NẰM Ở CÂU TRẢ LỜI',
    painTitle: 'Phần mất thời gian nhất là những việc bạn vẫn phải tự làm sau đó.',
    painText: 'ChatGPT có thể nói chính xác phải làm gì. Nhưng nếu bạn vẫn phải tự tìm file, tải lên, copy kết quả về, mở từng thư mục và bấm từng bước thì công việc vẫn chưa thật sự nhẹ đi.',
    pain1Title: 'Tài liệu nằm khắp máy', pain1Text: 'Không muốn tải từng file lên rồi hỏi lại từ đầu.',
    pain2Title: 'Project đang lỗi', pain2Text: 'Không biết phải copy đoạn code nào để ChatGPT hiểu đủ ngữ cảnh.',
    pain3Title: 'Việc lặp lại quá nhiều bước', pain3Text: 'Ngày nào cũng mở đúng những file đó và làm lại đúng quy trình đó.',
    pain4Title: 'ChatGPT chỉ hướng dẫn', pain4Text: 'Cuối cùng bạn vẫn là người phải thực hiện mọi thao tác trên máy.',
    promptsEyebrow: 'CỨ NÓI NHƯ ĐANG GIAO VIỆC', promptsTitle: 'Không cần học câu lệnh kỹ thuật.',
    prompt1: '“Trong thư mục Hợp đồng, tìm các file sửa trong tháng này và tóm tắt phần thay đổi.”',
    prompt2: '“Đống ảnh này tên lộn xộn quá. Đổi tên theo ngày và chia lại thư mục giúp tôi.”',
    prompt3: '“Đọc các báo cáo trong thư mục này rồi tạo cho tôi một bản tổng hợp.”',
    prompt4: '“Project này không chạy. Xem nguyên nhân, sửa rồi chạy kiểm tra lại.”',
    howEyebrow: 'CÀI MỘT LẦN', howTitle: 'Sau đó cứ dùng ChatGPT như bình thường.',
    how1Title: '1. Cài ứng dụng', how1Text: 'Tải file cài cho Windows và mở Desktop Coworker.',
    how2Title: '2. Kết nối với ChatGPT', how2Text: 'Trình hướng dẫn mới đi từng bước, có link trực tiếp, nút copy và hình minh họa. Bạn có thể dừng rồi làm tiếp sau.',
    how3Title: '3. Giao việc trong chat', how3Text: 'Nói việc muốn hoàn thành. ChatGPT có thể làm với những file và thư mục bạn cho phép.',
    outcomeEyebrow: 'TỪ “CHỈ CÁCH” SANG “LÀM GIÚP”', outcomeTitle: 'Một công cụ, nhiều việc rất đời thường.',
    outcome1Title: 'Đọc và tổng hợp cả thư mục', outcome1Text: 'Tìm thông tin trong nhiều tài liệu, so sánh thay đổi, tạo bản tổng hợp mà không phải upload từng file.',
    outcome2Title: 'Dọn và đổi tên file hàng loạt', outcome2Text: 'Sắp xếp thư mục, đổi tên, phân loại và xử lý những đống file lộn xộn.',
    outcome3Title: 'Sửa project thật', outcome3Text: 'Cho ChatGPT xem project đầy đủ, tìm lỗi, chỉnh file, chạy lệnh và kiểm tra kết quả.',
    outcome4Title: 'Giao các quy trình nhiều bước', outcome4Text: 'Thay vì nhận hướng dẫn rồi tự bấm, có thể để ChatGPT thực hiện nhiều bước liên tiếp giúp bạn.',
    safetyEyebrow: 'BẠN VẪN GIỮ QUYỀN KIỂM SOÁT', safetyTitle: 'Cho phép đến đâu, làm đến đó.',
    safetyText: 'Desktop Coworker có các lớp kiểm soát để bạn không phải đưa toàn bộ máy tính cho ChatGPT.',
    safety1: 'Giới hạn phạm vi thư mục theo từng kết nối.', safety2: 'Có checkpoint để quay lại trước các thay đổi.', safety3: 'Có thể yêu cầu bạn duyệt trước thao tác chỉnh sửa hoặc chạy lệnh.', safety4: 'Mỗi kết nối có workspace, trạng thái và thiết lập riêng.',
    priceEyebrow: 'THỬ VIỆC THẬT TRƯỚC KHI TRẢ TIỀN', priceTitle: 'Nếu nó giải quyết được việc của bạn, 10.000đ là đủ để dùng tiếp 7 ngày — nhiều nơi còn chưa bằng một ổ bánh mì.',
    priceText: 'Bản payment hiện tại dùng 24 giờ runtime miễn phí cho mỗi tài khoản. Khi hết thời lượng, bạn chọn gói nếu muốn tiếp tục.',
    freeName: 'Dùng thử', freePrice: '0đ', freeUnit: '24 giờ sử dụng thực tế', freeFeat1: 'Tạo tài khoản miễn phí', freeFeat2: 'Dùng thử trước khi quyết định', freeCta: 'Tải và thử ngay',
    d7Name: '7 ngày', d7Price: '10.000đ', d7Old: '50.000đ', d7Feat1: 'Không giới hạn thời gian chạy', d7Feat2: 'Đầy đủ tính năng Pro', d7Cta: 'Bắt đầu với 10k', d7Badge: 'Dễ thử nhất',
    m1Name: '30 ngày', m1Price: '100.000đ', m1Old: '200.000đ', m1Feat1: 'Không giới hạn thời gian chạy', m1Feat2: 'Đầy đủ tính năng Pro', m1Feat3: 'Ưu tiên hỗ trợ', m1Cta: 'Tải để bắt đầu', m1Badge: 'Phổ biến',
    y1Name: '1 năm', y1Price: '999.000đ', y1Old: '2.000.000đ', y1Unit: '~2.700đ/ngày', y1Feat1: 'Không giới hạn thời gian chạy', y1Feat2: 'Đầy đủ tính năng Pro', y1Feat3: 'Ưu tiên hỗ trợ', y1Cta: 'Tải để bắt đầu', y1Badge: 'Tiết kiệm',
    payTrust1: 'Quét QR hoặc chuyển khoản ngân hàng', payTrust2: 'Kích hoạt Pro tự động sau khi nhận tiền', payTrust3: 'Hết gói vẫn giữ dữ liệu và cấu hình',
    faqEyebrow: 'HỎI NHANH', faqTitle: 'Những điều nên biết trước khi cài.',
    faq1Q: 'Tôi có cần biết code hay MCP không?', faq1A: 'Không. Landing này cố tình không bắt bạn học thuật ngữ kỹ thuật. Khi sử dụng, bạn chủ yếu nói việc muốn làm bằng ngôn ngữ bình thường. Phần kết nối ban đầu đã có wizard từng bước.',
    faq2Q: 'Tôi cần máy và tài khoản gì?', faq2A: 'Ứng dụng dành cho Windows. Bạn cần tài khoản ChatGPT có thể bật Developer mode và dùng kết nối tương ứng; khả năng này có thể phụ thuộc gói hoặc chính sách workspace của tài khoản ChatGPT.',
    faq3Q: '24 giờ miễn phí tính như thế nào?', faq3A: 'Theo cấu hình payment branch hiện tại, đây là 1.440 phút runtime miễn phí, tức thời gian sử dụng thực tế của Desktop Coworker chứ không phải cứ đăng ký xong là đồng hồ 24 giờ đếm liên tục.',
    faq4Q: 'Thanh toán xong có phải chờ duyệt thủ công không?', faq4A: 'Không theo flow hiện tại. Bạn quét QR hoặc chuyển khoản đúng số tiền và nội dung; hệ thống xác nhận rồi kích hoạt Pro tự động.',
    faq5Q: 'Tôi có thể giới hạn ChatGPT chỉ làm trong một thư mục không?', faq5A: 'Có. Bạn có thể cấu hình phạm vi file theo từng connection và dùng thêm cơ chế duyệt thao tác nếu muốn kiểm soát chặt hơn.',
    faq6Q: 'Sản phẩm này có phải của OpenAI không?', faq6A: 'Không. Đây là dự án độc lập dành cho ChatGPT và không liên kết hay được OpenAI chứng thực.',
    finalEyebrow: 'ĐỪNG MUA VÌ DANH SÁCH TÍNH NĂNG', finalTitle: 'Hãy thử bằng đúng việc bạn đang ngại làm hôm nay.',
    finalText: 'Nếu Desktop Coworker không giúp bạn bớt thao tác thật, bạn không cần mua. Nếu nó giải quyết được việc, gói đầu tiên chỉ 10.000đ.',
    finalPrimary: 'Tải Desktop Coworker miễn phí', finalSecondary: 'Xem hướng dẫn cài đặt',
    footerNote: 'Dự án độc lập, không liên kết hoặc được OpenAI chứng thực.',
    footerVersion: 'Nội dung pricing đối chiếu theo payment branch v1.6.2.'
  },
  en: {
    metaTitle: 'Desktop Coworker for ChatGPT — Let ChatGPT work on your PC',
    metaDescription: 'Stop moving work back and forth. Let ChatGPT work with files and projects on your PC. Try 24 hours of actual runtime free, then continue from ₫10,000 for 7 days.',
    navHow: 'How it works', navUse: 'What to delegate', navPrice: 'Pricing', navFaq: 'FAQ', navDownload: 'Free download',
    eyebrow: 'ChatGPT already knows what to do. Now let it do the work.',
    heroTitle: 'Stop copy-pasting your work into ChatGPT.',
    heroText: 'Let ChatGPT work with the files, folders, and projects already on your PC — read, edit, run the needed steps, and check the result. You just describe the outcome you want.',
    heroPrimary: 'Free download for Windows', heroSecondary: 'See what it can handle',
    heroNote: '24 hours of actual runtime free · No card required · 7-day plan from ₫10,000',
    screenLabel: 'A real task, handled from ChatGPT',
    screenPrompt: '“This project is failing. Find the cause, fix it, then check that it works again.”',
    screenStep1: 'Project inspected', screenStep2: 'Cause found', screenStep3: 'Fixed and verified',
    painEyebrow: 'THE ANSWER IS NOT THE SLOW PART',
    painTitle: 'The time sink is everything you still have to do after ChatGPT answers.',
    painText: 'ChatGPT can tell you exactly what to do. But if you still have to find files, upload them, paste results back, open folders, and click through every step, the work is not really off your plate.',
    pain1Title: 'Documents are scattered everywhere', pain1Text: 'You do not want to upload files one by one and rebuild context every time.',
    pain2Title: 'A project is broken', pain2Text: 'You should not have to guess which code snippets ChatGPT needs to understand the problem.',
    pain3Title: 'The same workflow has too many steps', pain3Text: 'You keep opening the same files and repeating the same process every day.',
    pain4Title: 'ChatGPT only gives instructions', pain4Text: 'You still end up performing every action on the computer yourself.',
    promptsEyebrow: 'JUST DELEGATE THE JOB', promptsTitle: 'No technical command language required.',
    prompt1: '“In my Contracts folder, find files changed this month and summarize what changed.”',
    prompt2: '“These photos are a mess. Rename them by date and sort them into folders for me.”',
    prompt3: '“Read the reports in this folder and create one clean summary.”',
    prompt4: '“This project does not run. Find the cause, fix it, and run the checks again.”',
    howEyebrow: 'SET IT UP ONCE', howTitle: 'Then keep using ChatGPT the way you already do.',
    how1Title: '1. Install the app', how1Text: 'Download the Windows installer and open Desktop Coworker.',
    how2Title: '2. Connect ChatGPT', how2Text: 'The new guided setup walks through each step with direct links, copy actions, and screenshots. You can pause and resume later.',
    how3Title: '3. Delegate in chat', how3Text: 'Describe what you want completed. ChatGPT can work with the files and folders you allow.',
    outcomeEyebrow: 'FROM “HERE IS HOW” TO “DONE”', outcomeTitle: 'One bridge, many ordinary jobs.',
    outcome1Title: 'Read and summarize whole folders', outcome1Text: 'Search across several documents, compare changes, and create summaries without uploading every file.',
    outcome2Title: 'Clean up and batch-rename files', outcome2Text: 'Organize folders, rename files, classify items, and deal with messy file collections.',
    outcome3Title: 'Fix the real project', outcome3Text: 'Let ChatGPT inspect the full project, find bugs, edit files, run commands, and verify the result.',
    outcome4Title: 'Hand off multi-step workflows', outcome4Text: 'Instead of receiving instructions and doing the clicking yourself, let ChatGPT carry out more of the sequence.',
    safetyEyebrow: 'YOU STILL CONTROL THE BOUNDARIES', safetyTitle: 'It only works within the access you choose.',
    safetyText: 'Desktop Coworker includes controls so you do not have to hand over unrestricted access to your entire computer.',
    safety1: 'Limit file access per connection.', safety2: 'Use checkpoints to roll back changes.', safety3: 'Require your approval before edits or commands.', safety4: 'Keep separate workspaces, status, and settings per connection.',
    priceEyebrow: 'TRY REAL WORK BEFORE YOU PAY', priceTitle: 'If it solves your problem, ₫10,000 keeps it going for 7 days — less than a quick snack in many places.',
    priceText: 'The current payment build includes 24 hours of free runtime per account. When that allowance is used, choose a plan only if you want to continue.',
    freeName: 'Free trial', freePrice: '₫0', freeUnit: '24 hours of actual runtime', freeFeat1: 'Create a free account', freeFeat2: 'Try it before deciding', freeCta: 'Download and try',
    d7Name: '7 days', d7Price: '₫10,000', d7Old: '₫50,000', d7Feat1: 'Unlimited runtime', d7Feat2: 'All Pro features', d7Cta: 'Start for ₫10k', d7Badge: 'Easy to try',
    m1Name: '30 days', m1Price: '₫100,000', m1Old: '₫200,000', m1Feat1: 'Unlimited runtime', m1Feat2: 'All Pro features', m1Feat3: 'Priority support', m1Cta: 'Download to start', m1Badge: 'Popular',
    y1Name: '1 year', y1Price: '₫999,000', y1Old: '₫2,000,000', y1Unit: '~₫2,700/day', y1Feat1: 'Unlimited runtime', y1Feat2: 'All Pro features', y1Feat3: 'Priority support', y1Cta: 'Download to start', y1Badge: 'Best value',
    payTrust1: 'Pay by QR code or bank transfer', payTrust2: 'Pro activates automatically after payment', payTrust3: 'Your data and settings remain after expiry',
    faqEyebrow: 'QUICK ANSWERS', faqTitle: 'What to know before installing.',
    faq1Q: 'Do I need to know code or MCP?', faq1A: 'No. You mainly describe the result you want in normal language. The initial connection process has a guided step-by-step wizard.',
    faq2Q: 'What computer and ChatGPT account do I need?', faq2A: 'The app is for Windows. You need a ChatGPT account that can enable Developer mode and use the required connection flow; availability can depend on your plan or workspace policy.',
    faq3Q: 'How is the free 24 hours counted?', faq3A: 'In the current payment branch it is configured as 1,440 minutes of free runtime. It is actual Desktop Coworker usage time, not a 24-hour wall-clock countdown that starts when you register.',
    faq4Q: 'Do I have to wait for manual approval after paying?', faq4A: 'Not in the current flow. Pay the exact amount and transfer content shown by QR or bank transfer; the system confirms payment and activates Pro automatically.',
    faq5Q: 'Can I restrict ChatGPT to one folder?', faq5A: 'Yes. File-access scope can be configured per connection, and you can also require approval for higher-impact actions.',
    faq6Q: 'Is this an OpenAI product?', faq6A: 'No. This is an independent project built for ChatGPT and is not affiliated with or endorsed by OpenAI.',
    finalEyebrow: 'DO NOT BUY A FEATURE LIST', finalTitle: 'Try it on the task you are avoiding today.',
    finalText: 'If Desktop Coworker does not remove real work from your plate, you do not need to buy it. If it does, the first paid plan is only ₫10,000.',
    finalPrimary: 'Download Desktop Coworker free', finalSecondary: 'Read the installation guide',
    footerNote: 'Independent project; not affiliated with or endorsed by OpenAI.',
    footerVersion: 'Pricing copy verified against payment branch v1.6.2.'
  }
};

const releaseUrl = 'https://github.com/colin-dmme/desktop-coworker-releases/releases/latest';
const installGuideUrl = 'https://colin-dmme.github.io/desktop-coworker-for-chatgpt/install/';

function setLanguage(lang) {
  const safeLang = lang === 'en' ? 'en' : 'vi';
  const dict = copy[safeLang];
  document.documentElement.lang = safeLang;
  document.title = dict.metaTitle;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', dict.metaDescription);

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key] !== undefined) node.textContent = dict[key];
  });

  document.querySelectorAll('[data-lang-switch]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.langSwitch === safeLang));
  });

  try { localStorage.setItem('dcw-landing-lang', safeLang); } catch {}
  const url = new URL(window.location.href);
  if (safeLang === 'en') url.searchParams.set('lang', 'en');
  else url.searchParams.delete('lang');
  window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
}

function initialLanguage() {
  const url = new URL(window.location.href);
  const queryLang = url.searchParams.get('lang');
  if (queryLang === 'en' || queryLang === 'vi') return queryLang;
  try {
    const stored = localStorage.getItem('dcw-landing-lang');
    if (stored === 'en' || stored === 'vi') return stored;
  } catch {}
  return 'vi';
}

document.querySelectorAll('[data-lang-switch]').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.langSwitch));
});

document.querySelectorAll('[data-download]').forEach((link) => link.setAttribute('href', releaseUrl));
document.querySelectorAll('[data-install-guide]').forEach((link) => link.setAttribute('href', installGuideUrl));

setLanguage(initialLanguage());
