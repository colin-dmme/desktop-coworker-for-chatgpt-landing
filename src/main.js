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
    heroConnected: 'Đã kết nối', chatMockSub: 'Desktop Coworker đã kết nối',
    screenPrompt: 'Các báo cáo ở đây D:\\BaoCao\\Thang8\\. Đọc toàn bộ, tìm những điểm quan trọng và làm cho tôi một bản tổng hợp ngắn gọn. Lưu thành file mới, không sửa file gốc.',
    chatWorked: 'Worked for 2m 14s', chatTool1: 'Đọc 12 file trong thư mục', chatTool2: 'Đối chiếu dữ liệu và tìm điểm đáng chú ý', chatTool3: 'Tạo file báo cáo mới',
    chatDoneTitle: 'Xong rồi.', chatDoneText: 'Tôi đã đọc 12 file, tổng hợp các điểm quan trọng và lưu kết quả thành một file mới trong cùng thư mục.', chatOutputFile: 'D:\\BaoCao\\Thang8\\BaoCao_TongHop_Thang8.docx',
    reportBadge: 'BÁO CÁO ĐÃ HOÀN THÀNH', reportTitle: 'Báo cáo tổng hợp — Tháng 8', reportPoint1: '12 file đã được đọc', reportPoint2: '4 điểm đáng chú ý', reportPoint3: 'File gốc được giữ nguyên', reportPoint4: 'Đã lưu thành file mới', reportFileLabel: 'FILE',
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
    caseChatSub: 'Đang làm việc với Desktop Coworker', caseOldLabel: 'Trước đây phải tự làm', caseIllustration: 'Ví dụ minh họa',
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
    macMeta: 'Apple Silicon · M1/M2/M3/M4 trở lên', macDownloadText: 'Bản macOS Apple Silicon đang được chuẩn bị phát hành. Chưa hỗ trợ Mac Intel.', macDownloadCta: 'Sắp phát hành',
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
    heroConnected: 'Connected', chatMockSub: 'Desktop Coworker connected',
    screenPrompt: 'The reports are here D:\\Reports\\August\\. Read them all, pull out the important points, and make me a short summary. Save it as a new file and leave the originals unchanged.',
    chatWorked: 'Worked for 2m 14s', chatTool1: 'Read 12 files in the folder', chatTool2: 'Compare data and find notable points', chatTool3: 'Create a new report file',
    chatDoneTitle: 'Done.', chatDoneText: 'I read 12 files, summarized the important points, and saved the result as a new file in the same folder.', chatOutputFile: 'D:\\Reports\\August\\August_Summary_Report.docx',
    reportBadge: 'REPORT COMPLETE', reportTitle: 'August summary report', reportPoint1: '12 files reviewed', reportPoint2: '4 notable findings', reportPoint3: 'Source files unchanged', reportPoint4: 'Saved as a new file', reportFileLabel: 'FILE',
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
    caseChatSub: 'Working with Desktop Coworker', caseOldLabel: 'What you used to do manually', caseIllustration: 'Illustrative example',
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
    macMeta: 'Apple Silicon · M1/M2/M3/M4 or newer', macDownloadText: 'The Apple Silicon macOS build is being prepared for release. Intel Macs are not supported yet.', macDownloadCta: 'Coming soon',
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
      prompt: '“Các file bán hàng tháng 09 ở đây D:\\BaoCao\\Thang_09\\. Dựng cho tôi một báo cáo tổng hợp giống mẫu tháng trước, nêu luôn chỗ nào lệch dữ liệu. Lưu thành file mới, không sửa file gốc.”',
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
      prompt: '“Hai file công nợ ở đây D:\\CongNo\\Quy3\\. Đối chiếu giúp tôi xem chỗ nào lệch giữa sổ nội bộ và file đối tác gửi. Xuất ra một file kết quả riêng, đừng sửa file gốc.”',
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
      prompt: '“Thư mục dự án này ở đây D:\\DuAn\\Campaign_T9\\. Sắp xếp lại file theo nhóm, đổi tên ảnh theo ngày chụp, và liệt kê các file trùng. Cho tôi xem kế hoạch trước khi thực hiện.”',
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
      prompt: '“Tài liệu thương hiệu ở đây D:\\Brand\\TaiLieuNoiBo\\. Viết cho tôi 3 phương án nội dung giới thiệu sản phẩm, chỉ dùng thông tin trong tài liệu này và ghi rõ chỗ nào chưa đủ dữ liệu.”',
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
      prompt: '“The September sales files are here D:\\Reports\\September\\. Build a consolidated report that follows last month’s template, and flag any data mismatches. Save it as a new file and leave the source files unchanged.”',
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
      prompt: '“The two receivables files are here D:\\Receivables\\Q3\\. Compare our internal ledger with the partner file and show me every mismatch. Export the result to a separate file and do not modify the originals.”',
      old: 'Open two spreadsheets side by side, inspect row after row, mark mismatches, and build a separate issue list.',
      newWay: 'ChatGPT reads both files, compares them by the criteria you set, and gathers the mismatches into a reviewable list.',
      title: 'A mismatch list instead of visual scanning',
      result: 'You focus on the rows that need attention rather than inspecting the entire sheet manually.',
      proof: 'For sensitive data, you can ask it to read only and leave the original files unchanged.',
      files: [['internal_receivables.xlsx', 'internal sheet'], ['customer_receivables.xlsx', 'comparison sheet'], ['invoices/', 'supporting documents']]
    },
    {
      id: 'organize', tab: 'Clean up a messy folder', icon: '🗂️', folder: 'D:\\Project\\Raw_Documents\\', folderShort: 'Raw_Documents',
      prompt: '“This project folder is here D:\\Projects\\Campaign_Sep\\. Organize files by group, rename images by capture date, and list duplicates. Show me the plan for approval before making any changes.”',
      old: 'Open files to figure out what they are, rename them manually, then drag them into the right folders.',
      newWay: 'ChatGPT inspects what it needs, proposes an organization plan, and performs it within the access you allow.',
      title: 'A clean folder with a repeatable rule',
      result: 'Files become easier to find, names are consistent, and the folder structure can be reused next time.',
      proof: 'You can ask to preview the rename plan before allowing any changes.',
      files: [['scan_001.pdf', '→ Contract_2026-08-12.pdf'], ['IMG_4421.jpg', '→ Quote_2026-08-15.jpg'], ['file-final-final.xlsx', '→ Invoice_2026-08.xlsx']]
    },
    {
      id: 'content', tab: 'Write from internal guidelines', icon: '📝', folder: 'D:\\Marketing\\Brand_Guide\\', folderShort: 'Brand_Guide',
      prompt: '“The brand materials are here D:\\Brand\\Internal_Materials\\. Write three product-introduction options using only these documents, and clearly flag anything that does not have enough source data.”',
      old: 'Open the guide, copy important rules into chat, and keep reminding ChatGPT so the writing stays on-brand.',
      newWay: 'ChatGPT reads the guide from the folder and uses it as the source while drafting.',
      title: 'Drafts that follow your existing rules',
      result: 'You get writing that is closer to your house style without pasting the whole guide into every new chat.',
      proof: 'Useful for SOPs, guidelines, past examples, and internal reference material you reuse often.',
      files: [['brand_voice.pdf', 'tone and voice'], ['blocked_terms.xlsx', 'words to avoid'], ['good_examples.docx', 'reference examples']]
    }
  ]
};

const caseFlows = {
  vi: {
    contract: {
      worked: 'Worked for 38s',
      tools: ['Đọc 9 tài liệu trong hồ sơ', 'Tìm điều khoản “bảo hành” và “24 tháng”', 'Đối chiếu hợp đồng, báo giá và email'],
      doneTitle: 'Có cam kết bảo hành 24 tháng.',
      doneText: 'Căn cứ chính nằm trong hop_dong_ky_2025.pdf, Điều 8.2. Tôi cũng đã đối chiếu báo giá và trao đổi email; không thấy nội dung mâu thuẫn.',
      outputIcon: '📑', output: 'D:\\HoSo\\KhachHang_Minh_An\\hop_dong_ky_2025.pdf',
      badge: 'ĐÃ KIỂM TRA HỒ SƠ', status: 'Có căn cứ', tone: 'success',
      title: 'Kết luận có nguồn để kiểm tra lại',
      result: 'Không chỉ trả lời “có”. Kết quả chỉ rõ tài liệu và điều khoản làm căn cứ để bạn mở lại kiểm tra ngay.',
      metrics: [['3', 'nguồn đã đối chiếu'], ['24 tháng', 'cam kết xác nhận'], ['0', 'nội dung mâu thuẫn'], ['✓', 'không suy đoán']],
      listIcon: '🔎', listTitle: 'Nguồn làm căn cứ',
      files: [['hop_dong_ky_2025.pdf', 'Điều 8.2 — bảo hành 24 tháng'], ['bao_gia_v2.xlsx', 'ghi chú cùng nội dung'], ['email_trao_doi/', 'không thấy mâu thuẫn']],
      proof: 'Kết luận bám theo hồ sơ thật: có file, có mục, có thể kiểm tra lại.'
    },
    report: {
      worked: 'Worked for 1m 47s',
      tools: ['Đọc 8 file bán hàng tháng 09', 'Mở mẫu báo cáo tháng trước và đối chiếu cấu trúc', 'Tìm chỗ lệch dữ liệu và tạo file báo cáo mới'],
      doneTitle: 'Xong rồi.',
      doneText: 'Tôi đã dựng báo cáo theo mẫu tháng trước, đánh dấu 3 chỗ dữ liệu chưa khớp và lưu kết quả thành file mới. File gốc không bị sửa.',
      outputIcon: '📊', output: 'D:\\BaoCao\\Thang_09\\BaoCao_TongHop_Thang09.xlsx',
      badge: 'BÁO CÁO ĐÃ HOÀN THÀNH', status: 'Đã lưu file', tone: 'success',
      title: 'Báo cáo tổng hợp — Tháng 09',
      result: 'Một file mới theo đúng mẫu cũ, kèm các điểm lệch cần kiểm tra thay vì phải tự mở từng bảng rồi ghép lại.',
      metrics: [['8', 'file đã đọc'], ['1', 'mẫu tháng trước'], ['3', 'chỗ dữ liệu lệch'], ['✓', 'file gốc giữ nguyên']],
      listIcon: '📁', listTitle: 'File và điểm đáng chú ý',
      files: [['BaoCao_TongHop_Thang09.xlsx', 'file kết quả mới'], ['sales_09.xlsx', '2 dòng thiếu mã đơn'], ['doi_soat_09.xlsx', '1 tổng tiền chưa khớp']],
      proof: 'Kết quả được lưu riêng; dữ liệu nguồn vẫn giữ nguyên để đối chiếu.'
    },
    email: {
      worked: 'Worked for 42s',
      tools: ['Đọc hợp đồng và phụ lục của An Phú', 'Tìm điều khoản về thời hạn thanh toán', 'Soạn email chỉ từ nội dung có trong hợp đồng'],
      doneTitle: 'Tôi đã soạn bản nháp. Chưa gửi.',
      doneText: 'Email bám theo điều khoản thanh toán trong hợp đồng. Tôi đang dừng ở bước chờ bạn xem và duyệt trước khi có bất kỳ hành động gửi nào.',
      outputIcon: '✉️', output: 'D:\\KhachHang\\AnPhu\\Draft_Email_ThanhToan.txt',
      badge: 'BẢN NHÁP EMAIL', status: 'Chờ bạn duyệt', tone: 'review',
      title: 'Email trả lời về thời hạn thanh toán',
      result: 'Bản nháp đi kèm nguồn hợp đồng để bạn kiểm tra trước. Không mô phỏng đã gửi khi chưa có sự đồng ý của bạn.',
      metrics: [['2', 'tài liệu đã đọc'], ['1', 'điều khoản làm căn cứ'], ['0', 'thông tin tự thêm'], ['⏸', 'chưa gửi email']],
      listIcon: '📎', listTitle: 'Căn cứ và bản nháp',
      files: [['hop_dong_chinh_thuc.pdf', 'Điều 5.1 — thời hạn thanh toán'], ['phu_luc_01.pdf', 'không thay đổi Điều 5.1'], ['Draft_Email_ThanhToan.txt', 'bản nháp chờ duyệt']],
      proof: 'Hành động gửi được giữ lại cho tới khi bạn duyệt nội dung.'
    },
    debt: {
      worked: 'Worked for 1m 12s',
      tools: ['Đọc hai bảng công nợ trong thư mục', 'Ghép dòng theo mã khách và số hóa đơn', 'Tách các dòng lệch và xuất file kết quả riêng'],
      doneTitle: 'Đối chiếu xong.',
      doneText: 'Có 326 dòng khớp và 7 dòng lệch. Tôi đã gom riêng các chênh lệch để bạn kiểm tra và không sửa hai file nguồn.',
      outputIcon: '🧾', output: 'D:\\CongNo\\Quy3\\doi_chieu_cong_no_ket_qua.xlsx',
      badge: 'ĐỐI CHIẾU ĐÃ HOÀN THÀNH', status: '7 dòng lệch', tone: 'info',
      title: 'Kết quả đối chiếu công nợ — Quý 3',
      result: 'Bạn chỉ cần tập trung vào những dòng có vấn đề thay vì dò bằng mắt toàn bộ hai bảng.',
      metrics: [['326', 'dòng khớp'], ['7', 'dòng lệch'], ['3', 'mã khách bị ảnh hưởng'], ['✓', 'file gốc giữ nguyên']],
      listIcon: '⚠️', listTitle: 'Một số chênh lệch cần kiểm tra',
      files: [['KH-018', 'lệch 1.250.000đ'], ['KH-042', 'thiếu hóa đơn INV-8821'], ['KH-107', 'khác ngày thanh toán']],
      proof: 'File kết quả chỉ chứa phần cần xử lý, giúp việc rà soát ngắn hơn và rõ hơn.'
    },
    organize: {
      worked: 'Worked for 29s',
      tools: ['Quét 146 file trong thư mục dự án', 'Nhóm file và đọc ngày chụp của ảnh', 'Tìm file trùng và dựng kế hoạch thay đổi'],
      doneTitle: 'Tôi đã lập kế hoạch. Chưa thay đổi file nào.',
      doneText: 'Tôi có thể sắp xếp theo 4 nhóm, đổi tên 18 ảnh theo ngày chụp và thấy 6 file có khả năng trùng. Tôi đang chờ bạn duyệt kế hoạch trước khi rename hoặc move.',
      outputIcon: '🗂️', output: 'D:\\DuAn\\Campaign_T9\\ke_hoach_sap_xep.txt',
      badge: 'KẾ HOẠCH SẮP XẾP', status: 'Chờ bạn duyệt', tone: 'review',
      title: 'Kế hoạch dọn thư mục Campaign_T9',
      result: 'Bạn xem trước chính xác những gì sẽ được nhóm, đổi tên và đánh dấu trùng trước khi cho phép thực hiện thay đổi hàng loạt.',
      metrics: [['146', 'file đã quét'], ['4', 'nhóm đề xuất'], ['18', 'ảnh cần đổi tên'], ['6', 'file nghi trùng']],
      listIcon: '🧭', listTitle: 'Thay đổi dự kiến',
      files: [['Ảnh chiến dịch', '18 ảnh → tên theo ngày chụp'], ['Tài liệu / Bảng tính', 'gom theo loại file'], ['File trùng', '6 file → chỉ đánh dấu, chưa xóa']],
      proof: 'Chưa rename, move hay xóa gì cho tới khi bạn duyệt kế hoạch.'
    },
    content: {
      worked: 'Worked for 51s',
      tools: ['Đọc 5 tài liệu thương hiệu và sản phẩm', 'Tách thông tin có căn cứ và các phần còn thiếu', 'Viết 3 phương án và đánh dấu chỗ chưa đủ dữ liệu'],
      doneTitle: 'Đã viết 3 phương án.',
      doneText: 'Cả 3 bản chỉ dùng thông tin có trong tài liệu nội bộ. Có 2 chi tiết sản phẩm chưa đủ căn cứ nên tôi đã đánh dấu thay vì tự điền.',
      outputIcon: '📝', output: 'D:\\Brand\\TaiLieuNoiBo\\3_phuong_an_gioi_thieu.docx',
      badge: 'NỘI DUNG ĐÃ SOẠN', status: '3 phương án', tone: 'success',
      title: '3 phương án giới thiệu sản phẩm',
      result: 'Nội dung bám theo tài liệu thương hiệu và chủ động chỉ ra phần thiếu dữ liệu, thay vì lấp chỗ trống bằng thông tin tưởng tượng.',
      metrics: [['5', 'tài liệu nguồn'], ['3', 'phương án nội dung'], ['2', 'chỗ thiếu căn cứ'], ['0', 'claim tự bịa']],
      listIcon: '✍️', listTitle: 'Các bản nội dung',
      files: [['Phương án 1', 'ngắn, trực tiếp'], ['Phương án 2', 'nhấn lợi ích có căn cứ'], ['Phương án 3', 'giọng kể nhẹ hơn']],
      proof: 'Những chỗ chưa đủ dữ liệu được ghi rõ để bạn bổ sung, không tự suy diễn.'
    }
  },
  en: {
    contract: {
      worked: 'Worked for 38s', tools: ['Read 9 documents in the customer folder', 'Find “warranty” and “24 months” clauses', 'Cross-check the contract, quote, and email thread'],
      doneTitle: 'Yes — there is a 24-month warranty commitment.', doneText: 'The primary source is signed_contract_2025.pdf, section 8.2. I also cross-checked the quote and email thread and found no conflicting language.',
      outputIcon: '📑', output: 'D:\\Files\\Customer_Minh_An\\signed_contract_2025.pdf', badge: 'CUSTOMER FILE CHECKED', status: 'Source found', tone: 'success',
      title: 'A conclusion you can verify', result: 'The answer points to the exact source and section so you can open the document and verify it immediately.',
      metrics: [['3', 'sources cross-checked'], ['24 months', 'warranty confirmed'], ['0', 'conflicts found'], ['✓', 'no guessing']], listIcon: '🔎', listTitle: 'Sources used',
      files: [['signed_contract_2025.pdf', 'Section 8.2 — 24-month warranty'], ['quote_v2.xlsx', 'matching note'], ['email_thread/', 'no conflicting language']], proof: 'The conclusion is grounded in the customer files, with a document and section you can verify.'
    },
    report: {
      worked: 'Worked for 1m 47s', tools: ['Read 8 September sales files', 'Open last month’s report template', 'Flag mismatches and create a new report file'],
      doneTitle: 'Done.', doneText: 'I built the report using last month’s structure, flagged three data mismatches, and saved the result as a new file. The source files were not changed.',
      outputIcon: '📊', output: 'D:\\Reports\\September\\September_Summary_Report.xlsx', badge: 'REPORT COMPLETE', status: 'File saved', tone: 'success',
      title: 'September summary report', result: 'A new report follows the existing template and surfaces the mismatches that need attention.',
      metrics: [['8', 'files reviewed'], ['1', 'previous template'], ['3', 'data mismatches'], ['✓', 'sources unchanged']], listIcon: '📁', listTitle: 'Output and findings',
      files: [['September_Summary_Report.xlsx', 'new output file'], ['sales_sep.xlsx', '2 rows missing order IDs'], ['reconciliation_sep.xlsx', '1 total does not match']], proof: 'The result is saved separately, leaving every source file intact for verification.'
    },
    email: {
      worked: 'Worked for 42s', tools: ['Read An Phu’s contract and appendix', 'Find the payment-term clause', 'Draft a reply using only contract information'],
      doneTitle: 'Draft ready. Nothing has been sent.', doneText: 'The reply is grounded in the payment clause. I stopped at the approval step and will not send anything until you review it.',
      outputIcon: '✉️', output: 'D:\\Customers\\AnPhu\\Payment_Terms_Email_Draft.txt', badge: 'EMAIL DRAFT', status: 'Awaiting approval', tone: 'review',
      title: 'Payment terms reply', result: 'You get a source-grounded draft plus the exact clause to verify before any send action happens.',
      metrics: [['2', 'documents reviewed'], ['1', 'source clause'], ['0', 'invented details'], ['⏸', 'not sent']], listIcon: '📎', listTitle: 'Source and draft',
      files: [['final_contract.pdf', 'Section 5.1 — payment terms'], ['appendix_01.pdf', 'no change to Section 5.1'], ['Payment_Terms_Email_Draft.txt', 'draft awaiting approval']], proof: 'Sending remains blocked until you explicitly approve the draft.'
    },
    debt: {
      worked: 'Worked for 1m 12s', tools: ['Read the two receivables sheets', 'Match rows by customer and invoice ID', 'Export mismatches to a separate result file'],
      doneTitle: 'Reconciliation complete.', doneText: '326 rows match and 7 rows differ. I collected the mismatches in a separate file and did not modify either source sheet.',
      outputIcon: '🧾', output: 'D:\\Receivables\\Q3\\receivables_reconciliation_result.xlsx', badge: 'RECONCILIATION COMPLETE', status: '7 mismatches', tone: 'info',
      title: 'Q3 receivables reconciliation', result: 'You can focus on the rows that need attention instead of visually scanning both spreadsheets end to end.',
      metrics: [['326', 'matching rows'], ['7', 'mismatches'], ['3', 'customers affected'], ['✓', 'sources unchanged']], listIcon: '⚠️', listTitle: 'Examples to review',
      files: [['CUST-018', 'amount differs by ₫1,250,000'], ['CUST-042', 'invoice INV-8821 missing'], ['CUST-107', 'payment date differs']], proof: 'The output isolates only the issues that need review, while preserving both originals.'
    },
    organize: {
      worked: 'Worked for 29s', tools: ['Scan 146 project files', 'Group files and read image capture dates', 'Detect duplicates and prepare a change plan'],
      doneTitle: 'Plan ready. No files changed yet.', doneText: 'I can organize the folder into four groups, rename 18 images by capture date, and found 6 possible duplicates. I am waiting for your approval before any rename or move.',
      outputIcon: '🗂️', output: 'D:\\Projects\\Campaign_Sep\\organization_plan.txt', badge: 'ORGANIZATION PLAN', status: 'Awaiting approval', tone: 'review',
      title: 'Campaign_Sep cleanup plan', result: 'You see the exact proposed grouping, renames, and duplicate flags before allowing any batch changes.',
      metrics: [['146', 'files scanned'], ['4', 'proposed groups'], ['18', 'images to rename'], ['6', 'possible duplicates']], listIcon: '🧭', listTitle: 'Proposed changes',
      files: [['Campaign images', '18 images → capture-date names'], ['Docs / Sheets', 'group by file type'], ['Duplicates', '6 files → flagged only, not deleted']], proof: 'No rename, move, or delete happens until you approve the plan.'
    },
    content: {
      worked: 'Worked for 51s', tools: ['Read 5 brand and product documents', 'Separate sourced facts from missing information', 'Draft 3 options and flag unsupported gaps'],
      doneTitle: 'Three options are ready.', doneText: 'All three drafts use only the internal source material. Two product details do not have enough support, so I flagged them instead of filling them in.',
      outputIcon: '📝', output: 'D:\\Brand\\Internal_Materials\\3_product_intro_options.docx', badge: 'CONTENT DRAFTED', status: '3 options', tone: 'success',
      title: 'Three product-introduction options', result: 'The drafts follow the internal material and explicitly surface missing facts instead of inventing claims.',
      metrics: [['5', 'source documents'], ['3', 'draft options'], ['2', 'unsupported gaps'], ['0', 'invented claims']], listIcon: '✍️', listTitle: 'Draft options',
      files: [['Option 1', 'short and direct'], ['Option 2', 'benefit-led, source-backed'], ['Option 3', 'softer narrative tone']], proof: 'Anything without enough source support is clearly marked for you to fill in.'
    }
  }
};

const releaseVersion = '1.7.0';
const windowsDownloadUrl = `https://github.com/colin-dmme/desktop-coworker-releases/releases/download/v${releaseVersion}/DesktopCoworker-Payment-Setup-${releaseVersion}-x64.exe`;
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
  const flow = caseFlows[currentLang][selected.id];
  activeCaseId = selected.id;

  const tabs = document.querySelector('[data-case-tabs]');
  if (tabs) {
    tabs.innerHTML = '';
    studies.forEach((item) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'case-tab focus-ring inline-flex w-full items-center justify-center gap-2 rounded-2xl border px-3 py-2.5 text-center text-sm font-bold leading-5 transition sm:w-auto sm:rounded-full sm:px-4';
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
  setText('[data-case-prompt]', selected.prompt.replace(/^“|”$/g, ''));
  setText('[data-case-old]', selected.old);
  setText('[data-case-worked]', flow.worked);
  setText('[data-case-done-title]', flow.doneTitle);
  setText('[data-case-done-text]', flow.doneText);
  setText('[data-case-output-icon]', flow.outputIcon);
  setText('[data-case-output]', flow.output);
  setText('[data-case-card-badge]', flow.badge);
  setText('[data-case-status]', flow.status);
  setText('[data-case-title]', flow.title);
  setText('[data-case-result]', flow.result);
  setText('[data-case-list-icon]', flow.listIcon);
  setText('[data-case-list-title]', flow.listTitle);
  setText('[data-case-proof]', flow.proof);

  const tones = {
    success: {
      badge: 'text-emerald-600',
      status: 'bg-emerald-50 text-emerald-700',
      proof: 'border-emerald-100 bg-emerald-50/60 text-emerald-900',
      proofIcon: 'bg-emerald-600 text-white'
    },
    review: {
      badge: 'text-amber-600',
      status: 'bg-amber-50 text-amber-700',
      proof: 'border-amber-100 bg-amber-50/70 text-amber-950',
      proofIcon: 'bg-amber-500 text-white'
    },
    info: {
      badge: 'text-blue-600',
      status: 'bg-blue-50 text-blue-700',
      proof: 'border-blue-100 bg-blue-50/70 text-blue-950',
      proofIcon: 'bg-blue-600 text-white'
    }
  };
  const tone = tones[flow.tone] || tones.info;
  const badge = document.querySelector('[data-case-card-badge]');
  const status = document.querySelector('[data-case-status]');
  const proofWrap = document.querySelector('[data-case-proof-wrap]');
  const proofIcon = document.querySelector('[data-case-proof-icon]');
  if (badge) badge.className = `text-[11px] font-black uppercase tracking-[0.13em] ${tone.badge}`;
  if (status) status.className = `shrink-0 rounded-full px-3 py-1 text-xs font-bold ${tone.status}`;
  if (proofWrap) proofWrap.className = `mt-5 flex items-start gap-3 rounded-2xl border px-4 py-3.5 text-sm ${tone.proof}`;
  if (proofIcon) proofIcon.className = `flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-bold ${tone.proofIcon}`;

  const tools = document.querySelector('[data-case-tools]');
  if (tools) {
    tools.innerHTML = '';
    flow.tools.forEach((toolText) => {
      const row = document.createElement('div');
      row.className = 'tool-row flex items-center justify-between rounded-xl px-1 py-2.5 text-sm text-zinc-300';
      const left = document.createElement('div');
      left.className = 'flex min-w-0 items-start gap-3';
      const icon = document.createElement('span');
      icon.className = 'font-mono text-base text-zinc-400';
      icon.textContent = '{ }';
      const textWrap = document.createElement('div');
      textWrap.className = 'min-w-0';
      const called = document.createElement('span');
      called.className = 'block font-medium';
      called.textContent = 'Called tool';
      const detail = document.createElement('span');
      detail.className = 'mt-0.5 block text-xs leading-5 text-zinc-500';
      detail.textContent = toolText;
      const chevron = document.createElement('span');
      chevron.className = 'text-zinc-600';
      chevron.textContent = '⌄';
      textWrap.append(called, detail);
      left.append(icon, textWrap);
      row.append(left, chevron);
      tools.appendChild(row);
    });
  }

  const metrics = document.querySelector('[data-case-metrics]');
  if (metrics) {
    metrics.innerHTML = '';
    flow.metrics.forEach(([value, label]) => {
      const item = document.createElement('div');
      item.className = 'rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3';
      const valueNode = document.createElement('div');
      valueNode.className = 'text-base font-black text-slate-950';
      valueNode.textContent = value;
      const labelNode = document.createElement('div');
      labelNode.className = 'mt-0.5 text-xs leading-5 text-slate-500';
      labelNode.textContent = label;
      item.append(valueNode, labelNode);
      metrics.appendChild(item);
    });
  }

  const files = document.querySelector('[data-case-files]');
  if (files) {
    files.innerHTML = '';
    flow.files.forEach(([name, note]) => {
      const row = document.createElement('div');
      row.className = 'flex items-start justify-between gap-3 rounded-xl bg-white px-3.5 py-3 shadow-sm';
      const fileName = document.createElement('span');
      fileName.className = 'min-w-0 break-words text-xs font-bold text-slate-700';
      fileName.textContent = name;
      const fileNote = document.createElement('span');
      fileNote.className = 'max-w-[52%] text-right text-xs leading-5 text-blue-600';
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
document.querySelectorAll('[data-install-guide]').forEach((link) => link.setAttribute('href', installGuideUrl));

setLanguage(initialLanguage());
updateLaunchCountdown();
setInterval(updateLaunchCountdown, 1000);
