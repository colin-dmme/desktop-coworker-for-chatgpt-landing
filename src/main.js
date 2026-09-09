import './style.css';

const copy = {
  vi: {
    metaTitle: 'Desktop Coworker for ChatGPT — Chỉ chỗ cho ChatGPT, việc làm ngay trên máy bạn',
    metaDescription: 'Không cần tải từng file lên ChatGPT. Chỉ cần chỉ thư mục hoặc tài liệu trên PC và nói kết quả bạn muốn. Dùng thử miễn phí, trả phí từ 10.000đ.',
    navHow: 'Cách hoạt động', navUse: 'Ví dụ thực tế', navPrice: 'Chi phí', navFaq: 'Hỏi đáp', navDownload: 'Dùng thử miễn phí',
    eyebrow: 'Bạn chỉ cần chỉ chỗ. ChatGPT lo phần còn lại.',
    heroTitle: 'Bạn chỉ cần chỉ chỗ cho ChatGPT Web. Việc được làm ngay trên máy của bạn.',
    heroText: 'Không còn phải tải lên từng file. Chỉ cần copy đường dẫn file hoặc thư mục trên PC, dán thẳng vào ChatGPT và nói kết quả bạn muốn. Desktop Coworker giúp ChatGPT đọc, đối chiếu, sắp xếp và xử lý ngay trên máy của bạn.',
    heroPill1: 'Windows & macOS', heroPill2: 'Dùng thử miễn phí', heroPill3: 'Bắt đầu từ 10.000đ',
    heroPrimary: 'Chọn bản tải miễn phí', heroSecondary: 'Xem ví dụ thực tế',
    heroNote: 'Dùng thử miễn phí · Bắt đầu trả phí từ 10.000đ · Chi tiết gói xem ngay trong app',
    heroWorkspaceTitle: 'Công việc hôm nay', heroWorkspaceSub: 'Desktop Coworker đang hỗ trợ', heroConnected: 'Đã kết nối',
    screenLabel: 'Một việc thật, giao ngay trong ChatGPT',
    screenPrompt: '“Các báo cáo ở đây D:\\BaoCao\\Thang8\\. Đọc toàn bộ, tìm những điểm quan trọng và làm cho tôi một bản tổng hợp ngắn gọn. Lưu thành file mới, không sửa file gốc.”',
    screenStep1: 'Đã đọc tài liệu', screenStep2: 'Đã tổng hợp nội dung', screenStep3: 'Bản tóm tắt đã sẵn sàng',
    heroMeta1: 'Tài liệu & file', heroMeta2: 'Đã phân tích', heroMeta3: 'Hoàn tất',
    painEyebrow: 'VẤN ĐỀ KHÔNG NẰM Ở CÂU TRẢ LỜI',
    painTitle: 'Phần mất thời gian nhất là những việc bạn vẫn phải tự làm sau đó.',
    painText: 'ChatGPT có thể nói chính xác phải làm gì. Nhưng nếu bạn vẫn phải tự tìm file, tải lên, copy kết quả về, mở từng thư mục và bấm từng bước thì công việc vẫn chưa thật sự nhẹ đi.',
    pain1Title: 'Tài liệu nằm khắp máy', pain1Text: 'Không muốn tải từng file lên rồi hỏi lại từ đầu.',
    pain2Title: 'Nhiều file phải đối chiếu', pain2Text: 'Mở từng tài liệu, dò từng phiên bản rồi tự ghép thông tin rất mất thời gian.',
    pain3Title: 'Việc lặp lại quá nhiều bước', pain3Text: 'Ngày nào cũng mở đúng những file đó và làm lại đúng quy trình đó.',
    pain4Title: 'ChatGPT chỉ hướng dẫn', pain4Text: 'Cuối cùng bạn vẫn là người phải thực hiện mọi thao tác trên máy.',
    casesEyebrow: 'CHỈ CHỖ → GIAO VIỆC → NHẬN KẾT QUẢ',
    casesTitle: 'Bạn nói như đang giao việc cho một đồng nghiệp.',
    casesText: 'Không cần câu lệnh kỹ thuật. Copy đường dẫn file hoặc thư mục, dán thẳng vào tin nhắn rồi nói kết quả bạn cần. Chọn một ví dụ bên dưới để xem cách dùng thật.',
    caseRequestLabel: '1. Bạn chỉ cần nói', caseOldLabel: '2. Trước đây bạn phải tự làm', caseNewLabel: '3. Desktop Coworker giúp làm', caseResultLabel: '4. Bạn nhận được', caseIllustration: 'Ví dụ minh họa',
    whyEyebrow: 'VÌ SAO NÓ KHÁC VỚI CHỈ CHAT NHƯ BÌNH THƯỜNG',
    whyTitle: 'ChatGPT không chỉ biết câu trả lời. Nó có chỗ để làm việc.',
    whyText: 'Desktop Coworker nối cuộc chat với đúng file và thư mục bạn cho phép, để bớt phần tải lên, copy qua lại và làm tay sau câu trả lời.',
    why1Title: 'File vẫn ở đúng chỗ', why1Text: 'Không cần gom rồi tải từng file lên chat. Bạn chỉ đúng thư mục đang làm việc.',
    why2Title: 'Đọc được nhiều tài liệu cùng lúc', why2Text: 'Word, Excel, PDF, ghi chú và các file liên quan trong phạm vi bạn cho phép.',
    why3Title: 'Làm xong việc, không chỉ chỉ cách', why3Text: 'Có thể tạo file tổng hợp, sắp xếp thư mục, chỉnh tài liệu hoặc thực hiện các bước bạn yêu cầu.',
    why4Title: 'Dễ kiểm tra lại căn cứ', why4Text: 'Bạn có thể yêu cầu ghi rõ file nào, phần nào hoặc dữ liệu nào được dùng để đi đến kết quả.',
    beforeLabel: 'TRƯỚC ĐÂY', beforeText: 'Tìm file → tải lên → copy câu trả lời → mở file gốc → chỉnh lại → lưu bản mới.', beforeNote: 'ChatGPT trả lời xong nhưng phần thao tác vẫn nằm ở bạn.',
    nowLabel: 'BÂY GIỜ', nowText: 'Chỉ chỗ → nói kết quả cần → ChatGPT làm trong phạm vi được phép → báo lại những gì đã làm.', nowNote: 'Bạn dành thời gian để xem và quyết định, thay vì làm tay từng bước.',
    howEyebrow: 'CÀI MỘT LẦN', howTitle: 'Sau đó cứ dùng ChatGPT như bình thường.',
    how1Title: '1. Cài ứng dụng', how1Text: 'Chọn đúng bản Windows hoặc macOS, tải về và mở Desktop Coworker.',
    how2Title: '2. Kết nối với ChatGPT', how2Text: 'Trình hướng dẫn đi từng bước, có link trực tiếp, nút copy và hình minh họa. Bạn có thể dừng rồi làm tiếp sau.',
    how3Title: '3. Giao việc trong chat', how3Text: 'Nói việc muốn hoàn thành. ChatGPT có thể làm với những file và thư mục bạn cho phép.',
    downloadEyebrow: 'CHỌN ĐÚNG BẢN CHO MÁY CỦA BẠN',
    downloadTitle: 'Tải Desktop Coworker miễn phí.',
    downloadText: 'Hai bản dùng cùng tài khoản và cùng tính năng. Chỉ cần chọn đúng hệ điều hành bạn đang dùng.',
    downloadRecommended: 'Bản phổ biến',
    windowsMeta: 'Windows 10/11 · 64-bit', windowsDownloadText: 'Bộ cài .exe dành cho máy Windows x64.', windowsDownloadCta: 'Tải cho Windows',
    windowsNoticeTitle: 'Lưu ý khi cài trên Windows', windowsNoticeText: 'Bộ cài hiện chưa được ký số nên Windows SmartScreen có thể hiện cảnh báo “Windows đã bảo vệ máy tính của bạn”. Chọn “Thông tin thêm” (More info) rồi “Vẫn chạy” (Run anyway) để tiếp tục.',
    macMeta: 'Apple Silicon · M1/M2/M3/M4 trở lên', macDownloadText: 'Bản .dmg hiện dành cho Mac dùng chip Apple Silicon. Chưa hỗ trợ Mac Intel.', macDownloadCta: 'Tải cho macOS',
    macNoticeTitle: 'Lưu ý khi cài trên macOS', macNoticeText: 'Bản hiện tại chưa ký Developer ID/notarize nên macOS có thể chặn lần mở đầu tiên. Nhấp phải vào ứng dụng → Open; nếu vẫn bị chặn, vào System Settings → Privacy & Security → Open Anyway.',
    downloadSourceNote: 'Nên chỉ tải bộ cài từ trang này hoặc kho phát hành chính thức của Desktop Coworker.',
    outcomeEyebrow: 'TỪ “CHỈ CÁCH” SANG “LÀM GIÚP”', outcomeTitle: 'Một công cụ, nhiều việc rất đời thường.',
    outcome1Title: 'Đọc và tổng hợp cả thư mục', outcome1Text: 'Tìm thông tin trong nhiều tài liệu, so sánh thay đổi, tạo bản tổng hợp mà không phải upload từng file.',
    outcome2Title: 'Dọn và đổi tên file hàng loạt', outcome2Text: 'Sắp xếp thư mục, đổi tên, phân loại và xử lý những đống file lộn xộn.',
    outcome3Title: 'Soạn tài liệu theo mẫu có sẵn', outcome3Text: 'Dùng mẫu cũ, quy định nội bộ và dữ liệu nguồn để tạo bản nháp mới mà không phải copy từng phần vào chat.',
    outcome4Title: 'Giao các quy trình nhiều bước', outcome4Text: 'Thay vì nhận hướng dẫn rồi tự bấm, có thể để ChatGPT thực hiện nhiều bước liên tiếp giúp bạn.',
    safetyEyebrow: 'BẠN VẪN GIỮ QUYỀN KIỂM SOÁT', safetyTitle: 'Bạn quyết định nó được phép mở chỗ nào.',
    safetyText: 'Không cần mở toàn bộ máy tính. Bạn có thể giới hạn đúng thư mục cần làm và chọn mức kiểm soát phù hợp với từng công việc.',
    safety1: 'Chỉ mở những thư mục bạn cho phép.', safety2: 'Có thể quay lại trước thay đổi nếu cần.', safety3: 'Việc quan trọng có thể yêu cầu bạn duyệt trước.', safety4: 'Tách riêng từng tài khoản và kết nối trên cùng một máy.',
    priceEyebrow: 'CỨ THỬ TRƯỚC',
    priceTitle: 'Dùng thử miễn phí. Hợp thì dùng tiếp từ 10.000đ.',
    priceText: 'Không cần đọc cả bảng giá trước khi biết sản phẩm có giúp được mình hay không. Tải về, thử bằng việc thật; khi cần dùng tiếp, chọn gói ngay trong app.',
    priceChip1: '✓ Dùng thử miễn phí', priceChip2: '🎉 Ưu đãi ra mắt từ 10.000đ', priceChip3: '✓ Nâng cấp ngay trong app',
    launchOfferBadge: 'ƯU ĐÃI RA MẮT', countdownLead: 'Ưu đãi kết thúc sau',
    countdownDays: 'ngày', countdownHours: 'giờ', countdownMinutes: 'phút', countdownSeconds: 'giây',
    priceStartLabel: 'Bắt đầu trả phí chỉ từ', priceStartText: 'Cho toàn bộ tính năng.', priceDetailText: 'Chi tiết thời hạn và các gói khác xem ngay trong ứng dụng.', priceCta: 'Tải và dùng thử miễn phí',
    faqEyebrow: 'HỎI NHANH', faqTitle: 'Những điều nên biết trước khi cài.',
    faq1Q: 'Tôi có cần biết code hay MCP không?', faq1A: 'Không. Khi sử dụng, bạn chủ yếu nói việc muốn làm bằng ngôn ngữ bình thường. Phần kết nối ban đầu đã có hướng dẫn từng bước.',
    faq2Q: 'Tôi cần máy và tài khoản gì?', faq2A: 'Ứng dụng có bản Windows 10/11 x64 và macOS Apple Silicon. Bạn cần tài khoản ChatGPT có thể bật Developer mode và dùng kết nối tương ứng; khả năng này có thể phụ thuộc gói hoặc chính sách workspace của tài khoản ChatGPT.',
    faq3Q: 'Dùng thử miễn phí có tự hết khi tôi không dùng không?', faq3A: 'Không theo cách một gói 24 giờ theo đồng hồ. Bản hiện tại tính theo thời gian Desktop Coworker thực sự chạy; khi bạn không dùng, thời lượng không tự trôi.',
    faq4Q: 'Thanh toán xong có phải chờ duyệt thủ công không?', faq4A: 'Không theo flow hiện tại. Bạn quét QR hoặc chuyển khoản đúng số tiền và nội dung; hệ thống xác nhận rồi kích hoạt Pro tự động.',
    faq5Q: 'Tôi có thể giới hạn ChatGPT chỉ làm trong một thư mục không?', faq5A: 'Có. Bạn có thể giới hạn phạm vi file theo từng kết nối và bật thêm cơ chế duyệt thao tác nếu muốn kiểm soát chặt hơn.',
    faqMultiQ: 'Một máy có thể dùng nhiều tài khoản ChatGPT không?', faqMultiA: 'Có. Control Center quản lý nhiều tài khoản và kết nối riêng trên cùng một máy; bạn có thể bật hoặc dừng từng tài khoản độc lập.',
    faq6Q: 'Sản phẩm này có phải của OpenAI không?', faq6A: 'Không. Đây là dự án độc lập dành cho ChatGPT và không liên kết hay được OpenAI chứng thực.',
    finalEyebrow: 'ĐỪNG MUA VÌ DANH SÁCH TÍNH NĂNG', finalTitle: 'Hãy thử bằng đúng việc bạn đang ngại làm hôm nay.',
    finalText: 'Nếu Desktop Coworker không giúp bạn bớt thao tác thật, bạn không cần mua. Nếu hợp, bạn có thể dùng tiếp chỉ từ 10.000đ.',
    finalPrimary: 'Dùng thử miễn phí', finalSecondary: 'Xem hướng dẫn cài đặt',
    footerNote: 'Dự án độc lập, không liên kết hoặc được OpenAI chứng thực.', footerVersion: 'Chi tiết gói và thanh toán hiển thị trong ứng dụng.'
  },
  en: {
    metaTitle: 'Desktop Coworker for ChatGPT — Point ChatGPT to the files on your PC',
    metaDescription: 'No more uploading files one by one. Point ChatGPT to a folder or document on your PC and describe the result you want. Try free, then continue from ₫10,000.',
    navHow: 'How it works', navUse: 'Real examples', navPrice: 'Cost', navFaq: 'FAQ', navDownload: 'Try free',
    eyebrow: 'Just point ChatGPT to the right place. It handles the rest.',
    heroTitle: 'Point ChatGPT Web to the right place. Get the work done on your computer.',
    heroText: 'No more uploading files one by one. Copy the file or folder path from your PC, paste it directly into ChatGPT, and describe the result you want. Desktop Coworker helps ChatGPT read, compare, organize, and handle the work on your computer.',
    heroPill1: 'Windows & macOS', heroPill2: 'Try free', heroPill3: 'Paid plans from ₫10,000',
    heroPrimary: 'Choose your free download', heroSecondary: 'See real examples',
    heroNote: 'Try free · Paid plans start at ₫10,000 · Full plan details are shown in the app',
    heroWorkspaceTitle: 'Today’s work', heroWorkspaceSub: 'Desktop Coworker is helping', heroConnected: 'Connected',
    screenLabel: 'A real task, delegated in ChatGPT',
    screenPrompt: '“The reports are here D:\\Reports\\August\\. Read them, pull out the important points, and make me a short summary. Save it as a new file and leave the originals unchanged.”',
    screenStep1: 'Documents read', screenStep2: 'Content summarized', screenStep3: 'Summary ready',
    heroMeta1: 'Documents & files', heroMeta2: 'Analyzed', heroMeta3: 'Complete',
    painEyebrow: 'THE ANSWER IS NOT THE SLOW PART',
    painTitle: 'The time sink is everything you still have to do after ChatGPT answers.',
    painText: 'ChatGPT can tell you exactly what to do. But if you still have to find files, upload them, paste results back, open folders, and click through every step, the work is not really off your plate.',
    pain1Title: 'Documents are scattered everywhere', pain1Text: 'You do not want to upload files one by one and rebuild context every time.',
    pain2Title: 'Too many files to compare', pain2Text: 'Opening documents one by one, checking versions, and piecing the information together takes time.',
    pain3Title: 'The same workflow has too many steps', pain3Text: 'You keep opening the same files and repeating the same process every day.',
    pain4Title: 'ChatGPT only gives instructions', pain4Text: 'You still end up performing every action on the computer yourself.',
    casesEyebrow: 'POINT → DELEGATE → GET THE RESULT',
    casesTitle: 'Talk to it like you are delegating to a coworker.',
    casesText: 'No technical command language. Copy a file or folder path, paste it directly into the message, then describe the result you need. Pick an example below to see how it works in practice.',
    caseRequestLabel: '1. You only say', caseOldLabel: '2. What you used to do manually', caseNewLabel: '3. Desktop Coworker helps', caseResultLabel: '4. What you get', caseIllustration: 'Illustrative example',
    whyEyebrow: 'WHY THIS FEELS DIFFERENT FROM NORMAL CHAT',
    whyTitle: 'ChatGPT does not just know the answer. It has a place to work.',
    whyText: 'Desktop Coworker connects the chat to the files and folders you allow, reducing uploads, copy-paste, and the manual work that usually comes after an answer.',
    why1Title: 'Files stay where they already are', why1Text: 'No need to gather and upload files one by one. Point to the folder you are already working in.',
    why2Title: 'Read several documents together', why2Text: 'Word, Excel, PDF, notes, and related files within the scope you allow.',
    why3Title: 'Finish the task, not just explain it', why3Text: 'It can create summaries, organize folders, edit documents, or carry out the steps you request.',
    why4Title: 'Easier to verify the source', why4Text: 'Ask it to show which file, section, or data point supports the result.',
    beforeLabel: 'BEFORE', beforeText: 'Find the file → upload it → copy the answer → open the original → make the change → save a new version.', beforeNote: 'ChatGPT answered, but the computer work still stayed with you.',
    nowLabel: 'NOW', nowText: 'Point to the place → describe the result → ChatGPT works within the allowed scope → it reports what it did.', nowNote: 'You spend your time reviewing and deciding instead of repeating the clicks.',
    howEyebrow: 'SET IT UP ONCE', howTitle: 'Then keep using ChatGPT the way you already do.',
    how1Title: '1. Install the app', how1Text: 'Choose the Windows or macOS build, download it, and open Desktop Coworker.',
    how2Title: '2. Connect ChatGPT', how2Text: 'The guided setup walks through each step with direct links, copy actions, and screenshots. You can pause and resume later.',
    how3Title: '3. Delegate in chat', how3Text: 'Describe what you want completed. ChatGPT can work with the files and folders you allow.',
    downloadEyebrow: 'CHOOSE THE RIGHT BUILD FOR YOUR COMPUTER',
    downloadTitle: 'Download Desktop Coworker for free.',
    downloadText: 'Both builds use the same account and features. Choose the operating system you use.',
    downloadRecommended: 'Most common',
    windowsMeta: 'Windows 10/11 · 64-bit', windowsDownloadText: 'The .exe installer for Windows x64.', windowsDownloadCta: 'Download for Windows',
    windowsNoticeTitle: 'Windows installation note', windowsNoticeText: 'The installer is not code-signed yet, so Windows SmartScreen may show “Windows protected your PC”. Choose “More info” and then “Run anyway” to continue.',
    macMeta: 'Apple Silicon · M1/M2/M3/M4 or newer', macDownloadText: 'The current .dmg build is for Apple Silicon Macs. Intel Macs are not supported yet.', macDownloadCta: 'Download for macOS',
    macNoticeTitle: 'macOS installation note', macNoticeText: 'The current build is not Developer ID signed/notarized yet, so macOS may block the first launch. Right-click the app → Open; if it is still blocked, go to System Settings → Privacy & Security → Open Anyway.',
    downloadSourceNote: 'Only download installers from this site or the official Desktop Coworker release repository.',
    outcomeEyebrow: 'FROM “HERE IS HOW” TO “DONE”', outcomeTitle: 'One tool, many everyday jobs.',
    outcome1Title: 'Read and summarize whole folders', outcome1Text: 'Search across several documents, compare changes, and create summaries without uploading every file.',
    outcome2Title: 'Clean up and batch-rename files', outcome2Text: 'Organize folders, rename files, classify items, and deal with messy file collections.',
    outcome3Title: 'Draft from an existing template', outcome3Text: 'Use previous templates, internal rules, and source data to create a new draft without pasting every piece into chat.',
    outcome4Title: 'Hand off multi-step workflows', outcome4Text: 'Instead of receiving instructions and doing the clicking yourself, let ChatGPT carry out more of the sequence.',
    safetyEyebrow: 'YOU STILL CONTROL THE BOUNDARIES', safetyTitle: 'You decide which places it is allowed to open.',
    safetyText: 'You do not have to expose the whole computer. Limit access to the folder that matters and choose the level of control that fits the task.',
    safety1: 'Open only the folders you allow.', safety2: 'Roll back to before a change when needed.', safety3: 'Require your approval for important actions.', safety4: 'Keep separate accounts and connections on the same machine.',
    priceEyebrow: 'TRY IT FIRST',
    priceTitle: 'Try it free. Keep going from only ₫10,000 if it helps.',
    priceText: 'You do not need a full pricing table before you know whether the product is useful. Download it, try a real task, then choose a plan in the app only when you need more.',
    priceChip1: '✓ Try free', priceChip2: '🎉 Launch offer from ₫10,000', priceChip3: '✓ Upgrade in the app',
    launchOfferBadge: 'LAUNCH OFFER', countdownLead: 'Offer ends in',
    countdownDays: 'days', countdownHours: 'hours', countdownMinutes: 'mins', countdownSeconds: 'secs',
    priceStartLabel: 'Paid plans start at', priceStartText: 'All features included.', priceDetailText: 'Plan duration and other options are shown inside the app.', priceCta: 'Download and try free',
    faqEyebrow: 'QUICK ANSWERS', faqTitle: 'What to know before installing.',
    faq1Q: 'Do I need to know code or MCP?', faq1A: 'No. You mainly describe the result you want in normal language. The initial connection process has a guided step-by-step flow.',
    faq2Q: 'What computer and ChatGPT account do I need?', faq2A: 'There are builds for Windows 10/11 x64 and macOS Apple Silicon. You need a ChatGPT account that can enable Developer mode and use the required connection flow; availability can depend on your plan or workspace policy.',
    faq3Q: 'Does the free trial expire while I am not using it?', faq3A: 'Not like a 24-hour wall-clock trial. The current build counts actual Desktop Coworker runtime, so the allowance does not simply tick away while you are not using it.',
    faq4Q: 'Do I have to wait for manual approval after paying?', faq4A: 'Not in the current flow. Pay the exact amount and transfer content shown by QR or bank transfer; the system confirms payment and activates Pro automatically.',
    faq5Q: 'Can I restrict ChatGPT to one folder?', faq5A: 'Yes. File-access scope can be configured per connection, and you can also require approval for higher-impact actions.',
    faqMultiQ: 'Can one computer use multiple ChatGPT accounts?', faqMultiA: 'Yes. Control Center can manage multiple separate accounts and connections on the same machine, and each one can be started or stopped independently.',
    faq6Q: 'Is this an OpenAI product?', faq6A: 'No. This is an independent project built for ChatGPT and is not affiliated with or endorsed by OpenAI.',
    finalEyebrow: 'DO NOT BUY A FEATURE LIST', finalTitle: 'Try it on the task you are avoiding today.',
    finalText: 'If Desktop Coworker does not remove real work from your plate, you do not need to buy it. If it helps, paid use starts from ₫10,000.',
    finalPrimary: 'Try free', finalSecondary: 'Read the installation guide',
    footerNote: 'Independent project; not affiliated with or endorsed by OpenAI.', footerVersion: 'Plan and payment details are shown in the app.'
  }
};

const caseStudies = {
  vi: [
    {
      id: 'contract', tab: 'Kiểm tra hồ sơ khách hàng', icon: '📑', folder: 'D:\\HoSo\\KhachHang_Minh_An\\', folderShort: 'KhachHang_Minh_An',
      prompt: '“Hồ sơ khách Minh An ở đây D:\\HoSo\\KhachHang_Minh_An\\. Kiểm tra xem có cam kết bảo hành 24 tháng không. Cho tôi biết có hay không và chỉ rõ file nào, mục nào làm căn cứ. Đừng suy đoán.”',
      old: 'Mở từng PDF, Word và email; Ctrl+F nhiều từ khóa; tự ghi lại xem thông tin nằm ở đâu rồi mới kết luận.',
      newWay: 'ChatGPT đọc các file trong đúng thư mục bạn chỉ, đối chiếu nội dung và tìm phần liên quan đến bảo hành.',
      title: 'Một câu trả lời có nguồn để kiểm tra lại',
      result: 'Bạn nhận câu trả lời ngắn gọn: có hay không, kèm tên file và vị trí nội dung liên quan — thay vì một câu trả lời dựa trên suy đoán.',
      proof: 'Điểm quan trọng: ChatGPT trả lời dựa trên chính hồ sơ bạn chỉ, không cần bạn upload từng file.',
      files: [
        ['hop_dong_ky_2025.pdf', 'đọc điều khoản bảo hành'],
        ['bao_gia_v2.xlsx', 'đối chiếu ghi chú'],
        ['email_trao_doi/', 'kiểm tra trao đổi liên quan']
      ]
    },
    {
      id: 'report', tab: 'Làm báo cáo tháng', icon: '📊', folder: 'D:\\BaoCao\\DoanhSo_Thang8\\', folderShort: 'DoanhSo_Thang8',
      prompt: '“Dữ liệu bán hàng ở đây D:\\BaoCao\\DoanhSo_Thang8\\. Tổng hợp doanh số tháng 8 theo nhân viên, so với tháng 7 và cho tôi 5 điểm đáng chú ý nhất. Lưu bản tổng hợp thành file mới trong cùng thư mục, không sửa file gốc.”',
      old: 'Mở nhiều file Excel, copy số liệu sang một bảng mới, tự đối chiếu tháng trước rồi viết phần nhận xét.',
      newWay: 'ChatGPT đọc các bảng trong thư mục, gom dữ liệu cần thiết, so sánh và viết phần tóm tắt theo yêu cầu.',
      title: 'Bản tổng hợp sẵn để bạn xem và chỉnh',
      result: 'Bạn có bảng tổng hợp và các điểm nổi bật theo đúng dữ liệu trong thư mục, không phải chuyển từng bảng qua chat.',
      proof: 'Bạn vẫn có thể yêu cầu: “rút xuống còn 1 trang” hoặc “lưu kết quả vào file mới”.',
      files: [
        ['doanh_so_T8.xlsx', 'nguồn tháng hiện tại'],
        ['doanh_so_T7.xlsx', 'mốc so sánh'],
        ['ghi_chu_sales.docx', 'bổ sung bối cảnh']
      ]
    },
    {
      id: 'email', tab: 'Soạn email theo hợp đồng', icon: '✉️', folder: 'D:\\KhachHang\\AnPhu\\', folderShort: 'KhachHang_AnPhu',
      prompt: '“Đọc hợp đồng của An Phú ở đây D:\\KhachHang\\AnPhu\\ rồi soạn email trả lời về thời hạn thanh toán. Chỉ dùng thông tin có trong hợp đồng, đừng tự thêm. Cho tôi duyệt trước khi gửi.”',
      old: 'Tìm đúng bản hợp đồng, đọc lại điều khoản thanh toán, mở email và tự viết sao cho không sai cam kết.',
      newWay: 'ChatGPT đọc hợp đồng trong thư mục bạn chỉ, lấy đúng điều khoản liên quan rồi soạn bản trả lời bám sát tài liệu.',
      title: 'Một bản nháp email bám đúng tài liệu',
      result: 'Bạn nhận nội dung trả lời rõ ràng, có thể kiểm tra lại điều khoản trước khi gửi — giảm việc nhớ nhầm hoặc tự suy diễn.',
      proof: 'Desktop Coworker giúp đưa tài liệu thật vào ngữ cảnh; quyết định gửi vẫn là của bạn.',
      files: [
        ['hop_dong_chinh_thuc.pdf', 'nguồn điều khoản'],
        ['phu_luc_01.pdf', 'kiểm tra thay đổi'],
        ['ghi_chu_khach_hang.txt', 'bối cảnh nội bộ']
      ]
    },
    {
      id: 'debt', tab: 'Đối chiếu công nợ', icon: '🧾', folder: 'D:\\KeToan\\CongNo\\', folderShort: 'CongNo',
      prompt: '“Các file công nợ ở đây D:\\KeToan\\CongNo\\. So sánh file nội bộ với file khách gửi. Liệt kê những dòng lệch số tiền, thiếu hóa đơn hoặc khác ngày thanh toán. Chỉ đọc, không sửa file gốc; lưu kết quả đối chiếu thành file mới.”',
      old: 'Mở hai bảng cạnh nhau, dò từng dòng, đánh dấu khác biệt và tự tạo danh sách cần xử lý.',
      newWay: 'ChatGPT đọc hai file, đối chiếu theo tiêu chí bạn yêu cầu và gom các khác biệt thành một danh sách dễ kiểm tra.',
      title: 'Danh sách chênh lệch thay vì dò bằng mắt',
      result: 'Bạn tập trung vào những dòng có vấn đề, thay vì mất thời gian đi qua toàn bộ bảng để tìm chỗ lệch.',
      proof: 'Có thể yêu cầu chỉ đọc, không sửa file gốc, nếu đây là dữ liệu cần kiểm soát chặt.',
      files: [
        ['cong_no_noi_bo.xlsx', 'bảng nội bộ'],
        ['cong_no_khach_gui.xlsx', 'bảng đối chiếu'],
        ['hoa_don/', 'nguồn kiểm tra bổ sung']
      ]
    },
    {
      id: 'organize', tab: 'Dọn thư mục lộn xộn', icon: '🗂️', folder: 'D:\\DuAn\\TaiLieu_Raw\\', folderShort: 'TaiLieu_Raw',
      prompt: '“Dọn thư mục này D:\\DuAn\\TaiLieu_Raw\\ giúp tôi: đổi tên file theo KhachHang_Ngay_LoaiTaiLieu và chia vào các thư mục Hợp đồng, Báo giá, Hóa đơn. Trước khi đổi tên hoặc di chuyển file, hãy đưa kế hoạch cho tôi duyệt.”',
      old: 'Mở từng file để đoán nội dung, rename thủ công rồi kéo thả sang từng thư mục.',
      newWay: 'ChatGPT đọc tên và nội dung cần thiết, đề xuất cách sắp xếp rồi thực hiện theo phạm vi bạn cho phép.',
      title: 'Một thư mục sạch và có quy tắc rõ ràng',
      result: 'File dễ tìm hơn, tên nhất quán hơn và cấu trúc thư mục có thể dùng tiếp cho các lần sau.',
      proof: 'Bạn có thể yêu cầu xem trước kế hoạch đổi tên trước khi cho phép thực hiện.',
      files: [
        ['scan_001.pdf', '→ HopDong_2026-08-12.pdf'],
        ['IMG_4421.jpg', '→ BaoGia_2026-08-15.jpg'],
        ['file-final-final.xlsx', '→ HoaDon_2026-08.xlsx']
      ]
    },
    {
      id: 'content', tab: 'Viết theo tài liệu nội bộ', icon: '📝', folder: 'D:\\Marketing\\CamNangThuongHieu\\', folderShort: 'CamNangThuongHieu',
      prompt: '“Cẩm nang thương hiệu và tài liệu sản phẩm ở đây D:\\Marketing\\CamNangThuongHieu\\. Dựa đúng vào các file đó, viết 3 mẫu bài giới thiệu sản phẩm. Giữ đúng cách xưng hô, tránh các từ bị cấm và đừng tự thêm thông tin sản phẩm không có trong tài liệu.”',
      old: 'Mở cẩm nang, copy các quy tắc quan trọng sang chat, rồi liên tục nhắc lại để nội dung không lệch giọng.',
      newWay: 'ChatGPT đọc tài liệu hướng dẫn ngay trong thư mục và dùng nó làm căn cứ khi viết nội dung.',
      title: 'Nội dung bám đúng quy tắc bạn đã có',
      result: 'Bạn nhận các bản nháp gần với giọng thương hiệu hơn mà không phải paste lại cả cẩm nang mỗi lần.',
      proof: 'Hữu ích với SOP, guideline, mẫu cũ và các tài liệu nội bộ cần dùng lặp lại.',
      files: [
        ['brand_voice.pdf', 'cách xưng hô'],
        ['tu_khoa_cam.xlsx', 'từ cần tránh'],
        ['mau_bai_tot.docx', 'ví dụ tham khảo']
      ]
    }
  ],
  en: [
    {
      id: 'contract', tab: 'Check a customer file', icon: '📑', folder: 'D:\\Files\\Customer_Minh_An\\', folderShort: 'Customer_Minh_An',
      prompt: '“Minh An’s customer files are here D:\\Files\\Customer_Minh_An\\. Check whether there is a 24-month warranty commitment. Tell me yes or no and cite the exact file and section. Do not guess.”',
      old: 'Open PDFs, Word files, and emails one by one; search multiple keywords; take notes before you can answer.',
      newWay: 'ChatGPT reads the files in the folder you point to, compares the content, and finds the relevant warranty information.',
      title: 'A sourced answer you can verify',
      result: 'You get a concise yes/no answer with the file and relevant location, instead of an answer based on guesswork.',
      proof: 'The answer is grounded in the files you pointed to. No one-by-one uploads required.',
      files: [['signed_contract_2025.pdf', 'check warranty clause'], ['quote_v2.xlsx', 'cross-check notes'], ['email_thread/', 'review related messages']]
    },
    {
      id: 'report', tab: 'Build a monthly report', icon: '📊', folder: 'D:\\Reports\\Sales_August\\', folderShort: 'Sales_August',
      prompt: '“The sales data is here D:\\Reports\\Sales_August\\. Summarize August sales by rep, compare it with July, and give me the five most important takeaways. Save the summary as a new file in the same folder and do not modify the source files.”',
      old: 'Open several spreadsheets, copy figures into a new sheet, compare the previous month, then write the commentary yourself.',
      newWay: 'ChatGPT reads the relevant sheets, gathers the data, compares the periods, and writes the summary you asked for.',
      title: 'A report draft ready for review',
      result: 'You get a consolidated view and key takeaways based on the files in the folder, without moving each table into chat.',
      proof: 'You can follow up with “make it one page” or “save the result as a new file.”',
      files: [['sales_aug.xlsx', 'current month'], ['sales_jul.xlsx', 'comparison month'], ['sales_notes.docx', 'extra context']]
    },
    {
      id: 'email', tab: 'Draft from a contract', icon: '✉️', folder: 'D:\\Customers\\AnPhu\\', folderShort: 'Customer_AnPhu',
      prompt: '“Read An Phu’s contract here D:\\Customers\\AnPhu\\ and draft a reply about the payment terms. Use only what is in the contract, do not invent anything, and let me approve it before sending.”',
      old: 'Find the right contract, reread the payment clause, open your email, and draft carefully so you do not misstate the agreement.',
      newWay: 'ChatGPT reads the contract you pointed to, finds the relevant clause, and drafts a response grounded in that document.',
      title: 'An email draft grounded in the source',
      result: 'You get a clear reply you can verify against the contract before sending, reducing memory errors and assumptions.',
      proof: 'Desktop Coworker provides the real document context; you still decide what gets sent.',
      files: [['final_contract.pdf', 'payment terms'], ['appendix_01.pdf', 'check amendments'], ['customer_notes.txt', 'internal context']]
    },
    {
      id: 'debt', tab: 'Reconcile two sheets', icon: '🧾', folder: 'D:\\Finance\\Receivables\\', folderShort: 'Receivables',
      prompt: '“The receivables files are here D:\\Finance\\Receivables\\. Compare our internal sheet with the customer’s sheet. List rows with amount differences, missing invoices, or different payment dates. Read only; do not modify the originals. Save the comparison as a new file.”',
      old: 'Open two spreadsheets side by side, inspect row after row, mark mismatches, and build a separate issue list.',
      newWay: 'ChatGPT reads both files, compares them by the criteria you set, and gathers the mismatches into a reviewable list.',
      title: 'A mismatch list instead of visual scanning',
      result: 'You focus on the rows that need attention rather than inspecting the entire sheet manually.',
      proof: 'For sensitive data, you can ask it to read only and leave the original files unchanged.',
      files: [['internal_receivables.xlsx', 'internal sheet'], ['customer_receivables.xlsx', 'comparison sheet'], ['invoices/', 'supporting documents']]
    },
    {
      id: 'organize', tab: 'Clean up a messy folder', icon: '🗂️', folder: 'D:\\Project\\Raw_Documents\\', folderShort: 'Raw_Documents',
      prompt: '“Clean up this folder D:\\Project\\Raw_Documents\\: rename files as Customer_Date_DocumentType and sort them into Contracts, Quotes, and Invoices. Show me the proposed changes for approval before renaming or moving anything.”',
      old: 'Open files to figure out what they are, rename them manually, then drag them into the right folders.',
      newWay: 'ChatGPT inspects what it needs, proposes an organization plan, and performs it within the access you allow.',
      title: 'A clean folder with a repeatable rule',
      result: 'Files become easier to find, names are consistent, and the folder structure can be reused next time.',
      proof: 'You can ask to preview the rename plan before allowing any changes.',
      files: [['scan_001.pdf', '→ Contract_2026-08-12.pdf'], ['IMG_4421.jpg', '→ Quote_2026-08-15.jpg'], ['file-final-final.xlsx', '→ Invoice_2026-08.xlsx']]
    },
    {
      id: 'content', tab: 'Write from internal guidelines', icon: '📝', folder: 'D:\\Marketing\\Brand_Guide\\', folderShort: 'Brand_Guide',
      prompt: '“The brand guide and product materials are here D:\\Marketing\\Brand_Guide\\. Use only those files to write three product intro posts. Keep the approved tone, avoid prohibited wording, and do not invent product details that are not in the source material.”',
      old: 'Open the guide, copy important rules into chat, and keep reminding ChatGPT so the writing stays on-brand.',
      newWay: 'ChatGPT reads the guide from the folder and uses it as the source while drafting.',
      title: 'Drafts that follow your existing rules',
      result: 'You get writing that is closer to your house style without pasting the whole guide into every new chat.',
      proof: 'Useful for SOPs, guidelines, past examples, and internal reference material you reuse often.',
      files: [['brand_voice.pdf', 'tone and voice'], ['blocked_terms.xlsx', 'words to avoid'], ['good_examples.docx', 'reference examples']]
    }
  ]
};

const releaseVersion = '1.6.2';
const windowsDownloadUrl = `https://github.com/colin-dmme/desktop-coworker-releases/releases/download/v${releaseVersion}/DesktopCoworker-Setup-${releaseVersion}-x64.exe`;
const macDownloadUrl = `https://github.com/colin-dmme/desktop-coworker-releases/releases/download/v${releaseVersion}/DesktopCoworker-${releaseVersion}-macOS-arm64.dmg`;
const installGuideUrl = 'https://colin-dmme.github.io/desktop-coworker-for-chatgpt/install/';
const launchOfferEndsAt = new Date('2026-10-07T23:59:59+07:00').getTime();
let currentLang = 'vi';
let activeCaseId = 'contract';

function updateLaunchCountdown() {
  const remaining = Math.max(0, launchOfferEndsAt - Date.now());
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);

  const values = {
    '[data-countdown-days]': String(days),
    '[data-countdown-hours]': String(hours).padStart(2, '0'),
    '[data-countdown-minutes]': String(minutes).padStart(2, '0'),
    '[data-countdown-seconds]': String(seconds).padStart(2, '0')
  };

  Object.entries(values).forEach(([selector, value]) => {
    const node = document.querySelector(selector);
    if (node) node.textContent = value;
  });
}

function renderCase(caseId = activeCaseId) {
  const studies = caseStudies[currentLang];
  const selected = studies.find((item) => item.id === caseId) || studies[0];
  activeCaseId = selected.id;

  const tabs = document.querySelector('[data-case-tabs]');
  if (tabs) {
    tabs.innerHTML = '';
    studies.forEach((item) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'case-tab focus-ring inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold transition';
      button.dataset.caseId = item.id;
      button.setAttribute('aria-selected', String(item.id === activeCaseId));
      button.innerHTML = `<span>${item.icon}</span><span>${item.tab}</span>`;
      button.addEventListener('click', () => renderCase(item.id));
      tabs.appendChild(button);
    });
  }

  const setText = (selector, value) => {
    const node = document.querySelector(selector);
    if (node) node.textContent = value;
  };

  setText('[data-case-icon]', selected.icon);
  setText('[data-case-folder-short]', selected.folderShort);
  setText('[data-case-prompt]', selected.prompt);
  setText('[data-case-old]', selected.old);
  setText('[data-case-new]', selected.newWay);
  setText('[data-case-title]', selected.title);
  setText('[data-case-result]', selected.result);
  setText('[data-case-proof]', selected.proof);

  const files = document.querySelector('[data-case-files]');
  if (files) {
    files.innerHTML = '';
    selected.files.forEach(([name, note]) => {
      const row = document.createElement('div');
      row.className = 'flex items-start justify-between gap-4 rounded-xl bg-slate-50 px-3.5 py-3';
      const fileName = document.createElement('span');
      fileName.className = 'min-w-0 break-all font-mono text-xs font-semibold text-slate-700';
      fileName.textContent = name;
      const fileNote = document.createElement('span');
      fileNote.className = 'shrink-0 text-right text-xs text-blue-600';
      fileNote.textContent = note;
      row.append(fileName, fileNote);
      files.appendChild(row);
    });
  }
}

function setLanguage(lang) {
  currentLang = lang === 'en' ? 'en' : 'vi';
  const dict = copy[currentLang];
  document.documentElement.lang = currentLang;
  document.title = dict.metaTitle;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', dict.metaDescription);

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key] !== undefined) node.textContent = dict[key];
  });

  document.querySelectorAll('[data-lang-switch]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.langSwitch === currentLang));
  });

  renderCase(activeCaseId);

  try {
    localStorage.setItem('dcw-landing-lang', currentLang);
  } catch {}

  const url = new URL(window.location.href);
  if (currentLang === 'en') url.searchParams.set('lang', 'en');
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

document.querySelectorAll('[data-download-windows]').forEach((link) => link.setAttribute('href', windowsDownloadUrl));
document.querySelectorAll('[data-download-mac]').forEach((link) => link.setAttribute('href', macDownloadUrl));
document.querySelectorAll('[data-install-guide]').forEach((link) => link.setAttribute('href', installGuideUrl));

setLanguage(initialLanguage());
updateLaunchCountdown();
setInterval(updateLaunchCountdown, 1000);
