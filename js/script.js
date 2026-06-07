const themeConfig = {
  background: "#F7FAF9",
  surface: "#FFFFFF",
  primary: "#0F766E",
  secondary: "#1E3A8A",
  accent: "#F59E0B",
  border: "#D7E7E2"
};

const profileItems = [
  {
    label: "Hồ sơ",
    title: "Thông tin học tập",
    text: "Mình hiện là sinh viên Trường Đại học Y Dược, Đại học Quốc gia Hà Nội, mã lớp VNU1001_E252028 UMP.E8. Mình quan tâm đến lĩnh vực Y Dược, chăm sóc người bệnh, an toàn trong thực hành y khoa và ứng dụng công nghệ số trong học tập."
  },
  {
    label: "Mục tiêu",
    title: "Mục tiêu học phần",
    text: "Mình muốn rèn luyện kỹ năng sử dụng công cụ số, bao gồm quản lý tệp, tìm kiếm và đánh giá thông tin, viết prompt hiệu quả, hợp tác trực tuyến, sáng tạo nội dung với AI, sử dụng AI có trách nhiệm và khai thác công cụ AI để tổng quan tài liệu khoa học."
  },
  {
    label: "Lý do",
    title: "Lý do xây dựng portfolio",
    text: "Portfolio này giúp mình hệ thống hóa quá trình học tập, lưu trữ minh chứng thực hành và nhìn lại sự tiến bộ qua từng bài tập. Đây cũng là nơi thể hiện cách sinh viên khối sức khỏe kết hợp kỹ năng số với tư duy chuyên môn và trách nhiệm học thuật."
  },
  {
    label: "Kỹ năng",
    title: "Kỹ năng muốn phát triển",
    text: "Mình hướng tới phát triển kỹ năng tổ chức tài liệu, tìm kiếm nguồn y khoa đáng tin cậy, đánh giá rủi ro trong chăm sóc sức khỏe, viết prompt, làm việc nhóm, truyền thông sức khỏe và kiểm chứng thông tin AI tạo ra."
  },
  {
    label: "Định hướng",
    title: "Y Dược và Điều dưỡng",
    text: "Định hướng học tập của mình tập trung vào an toàn người bệnh, quản lý rủi ro y khoa, chăm sóc sức khỏe và sử dụng công nghệ một cách thận trọng trong môi trường Y Dược."
  }
];

const modules = [
  {
    number: "01",
    type: "Patient Safety",
    title: "Quản lý tệp và thư mục",
    pdf: "files/tuan1.pdf",
    featured: false,
    tags: ["Dữ liệu", "Tổ chức file", "Học tập số"],
    summary: "Thực hành tạo, đổi tên, sao chép, di chuyển, xóa và khôi phục dữ liệu học tập trên máy tính.",
    details: {
      "Mục tiêu": "Rèn luyện kỹ năng quản lý tệp và thư mục trên máy tính, biết cách tạo thư mục, tạo tệp văn bản, đổi tên, tạo thư mục con, sao chép, di chuyển, xóa và khôi phục dữ liệu.",
      "Tóm tắt quá trình": "Mình thực hành mở File Explorer, truy cập ổ đĩa hoặc thư mục Documents, tạo thư mục ThucHanh_NguyenAnhThu, tạo tệp GhiChu.txt, đổi tên thành GhiChuQuanTrong.txt, tạo thư mục TaiLieu và thực hiện các thao tác sao chép, di chuyển, xóa hoặc khôi phục tệp.",
      "Kết quả": "Hoàn thành chuỗi thao tác quản lý tệp cơ bản. Mình biết cách tổ chức dữ liệu học tập theo cấu trúc rõ ràng, hỗ trợ việc lưu trữ, tìm kiếm và kiểm soát tài liệu hiệu quả hơn.",
      "Bài học": "Quản lý tệp là kỹ năng nền tảng trong học tập số. Khi dữ liệu được sắp xếp khoa học, người học giảm rủi ro thất lạc file và dễ kiểm soát các phiên bản tài liệu.",
      "Ứng dụng thực tế": "Trong học tập Y Dược, sinh viên cần quản lý giáo trình, bài báo khoa học, tài liệu chuyên môn, báo cáo thực hành và hình ảnh minh chứng. Kỹ năng tổ chức thư mục giúp quá trình học tập chính xác, gọn gàng và chuyên nghiệp hơn."
    }
  },
  {
    number: "02",
    type: "Patient Safety",
    title: "An toàn phẫu thuật và quản lý rủi ro trong gây mê",
    pdf: "files/tuan2.pdf",
    featured: true,
    tags: ["Bảng kiểm", "Phẫu thuật", "Rủi ro y khoa"],
    summary: "Tìm kiếm và đánh giá tài liệu về bảng kiểm an toàn phẫu thuật, gây mê hồi sức và phòng ngừa sai sót lâm sàng.",
    details: {
      "Mục tiêu": "Rèn luyện khả năng tìm kiếm, chọn lọc và đánh giá thông tin học thuật về tối ưu hóa an toàn bệnh nhân thông qua bảng kiểm an toàn phẫu thuật và quản lý rủi ro trong gây mê.",
      "Tóm tắt quá trình": "Mình lựa chọn chủ đề tối ưu hóa an toàn bệnh nhân thông qua việc triển khai bảng kiểm an toàn phẫu thuật và quản lý rủi ro trong gây mê. Quá trình tìm kiếm tập trung vào bài báo khoa học, sách chuyên khảo, hướng dẫn của WHO, tài liệu gây mê hồi sức và nguồn mở đáng tin cậy.",
      "Kết quả": "Mình xây dựng được danh mục tài liệu tham khảo gồm nghiên cứu về surgical safety checklist, các tổng quan hệ thống về bảng kiểm phẫu thuật, WHO Guidelines for Safe Surgery và các nguồn liên quan đến an toàn gây mê.",
      "Bài học": "Trong lĩnh vực y tế, độ tin cậy của nguồn tài liệu có ảnh hưởng trực tiếp đến chất lượng lập luận và thực hành. Các nguồn có phương pháp nghiên cứu rõ ràng, tổ chức uy tín và tính ứng dụng lâm sàng cao cần được ưu tiên.",
      "Ứng dụng thực tế": "Chủ đề an toàn phẫu thuật giúp mình hiểu vai trò của bảng kiểm, giao tiếp nhóm phẫu thuật, phòng ngừa sai sót và quản lý rủi ro trong môi trường lâm sàng."
    }
  },
  {
    number: "03",
    type: "Prompt",
    title: "Viết prompt hiệu quả cho các tác vụ học tập",
    pdf: "files/tuan3.pdf",
    featured: false,
    tags: ["Prompt", "Tóm tắt", "Ôn tập"],
    summary: "Thử nghiệm prompt cơ bản, cải tiến và nâng cao cho các tác vụ học tập khác nhau.",
    details: {
      "Mục tiêu": "Phát triển kỹ năng viết prompt để khai thác hiệu quả mô hình ngôn ngữ lớn trong học tập, thông qua các tác vụ tóm tắt tài liệu học thuật, giải thích khái niệm phức tạp và tạo câu hỏi ôn tập.",
      "Tóm tắt quá trình": "Mình xây dựng ba mức prompt: cơ bản, cải tiến và nâng cao. Các tác vụ gồm tóm tắt tài liệu học thuật về hệ vi sinh vật đường ruột/probiotics, giải thích khái niệm rối rắm lượng tử và tạo bộ câu hỏi ôn tập về Cách mạng Pháp năm 1789.",
      "Kết quả": "Prompt cải tiến và prompt nâng cao cho kết quả tốt hơn prompt cơ bản. Prompt nâng cao giúp AI trả lời có cấu trúc, có chiều sâu, đúng định dạng và bám sát yêu cầu học tập hơn.",
      "Bài học": "Prompt không chỉ là câu hỏi ngắn mà là cách định hướng đầu ra cho AI. Người học cần xác định mục tiêu, vai trò, đối tượng, định dạng và mức độ tư duy mong muốn để kiểm soát chất lượng kết quả.",
      "Ứng dụng thực tế": "Trong học tập Y Dược, prompt hiệu quả có thể hỗ trợ tóm tắt tài liệu chuyên môn, giải thích khái niệm khó, tạo câu hỏi ôn tập và hệ thống hóa kiến thức. Nội dung y khoa vẫn cần luôn được kiểm chứng bằng nguồn chuyên môn."
    }
  },
  {
    number: "04",
    type: "Collaboration",
    title: "Số hóa quản lý công việc nhóm bằng Trello",
    pdf: "files/tuan4.pdf",
    featured: false,
    tags: ["Trello", "Google Docs", "Nhóm"],
    summary: "Quản lý nhiệm vụ nhóm bằng Trello, Google Docs, Google Drive và Google Meet trong một dự án học tập.",
    details: {
      "Mục tiêu": "Rèn luyện kỹ năng sử dụng công cụ hợp tác trực tuyến để quản lý nhiệm vụ, soạn thảo tài liệu, lưu trữ dữ liệu và giao tiếp nhóm trong một dự án học tập.",
      "Tóm tắt quá trình": "Mình thực hiện dự án Số hóa quản lý công việc nhóm bằng Trello. Các công cụ được sử dụng gồm Trello để quản lý dự án, Google Docs để soạn thảo cộng tác, Google Drive để lưu trữ và chia sẻ tài liệu, Google Meet để giao tiếp nhóm.",
      "Kết quả": "Mình biết cách phân rã công việc, nhận nhiệm vụ, thiết lập hạn hoàn thành, đính kèm Google Docs vào Trello và cập nhật trạng thái công việc. Quy trình này giúp nhóm minh bạch tiến độ và hạn chế bỏ sót nhiệm vụ.",
      "Bài học": "Hợp tác trực tuyến hiệu quả cần quy trình rõ ràng, quy tắc cập nhật thống nhất và một nền tảng trung tâm để theo dõi tiến độ. Việc chỉ nhắn tin rời rạc dễ gây trôi thông tin và thiếu minh bạch.",
      "Ứng dụng thực tế": "Trong học tập và thực hành y khoa, làm việc nhóm là năng lực quan trọng. Kỹ năng quản lý công việc bằng công cụ số có thể áp dụng vào chuẩn bị báo cáo, phân công nhiệm vụ nhóm và tổ chức tài liệu chuyên môn."
    }
  },
  {
    number: "05",
    type: "Storytelling",
    title: "Chiếc áo Blouse trắng và ký ức tuổi thơ",
    pdf: "files/tuan5.pdf",
    featured: true,
    tags: ["Storytelling", "Blouse", "Canva AI"],
    summary: "Dự án storytelling về lý do chọn ngành Điều dưỡng, kết hợp kịch bản cá nhân với công cụ AI tạo sinh.",
    details: {
      "Mục tiêu": "Thực hành sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung số, cụ thể là video ngắn hoặc bài thuyết trình storytelling về lý do chọn ngành Điều dưỡng.",
      "Tóm tắt quá trình": "Mình lựa chọn chủ đề Chiếc áo Blouse trắng và ký ức tuổi thơ: Tại sao tôi chọn ngành Điều dưỡng? Google Gemini được dùng để phát triển cốt truyện và viết kịch bản phân cảnh, DALL-E 3 hỗ trợ tạo storyboard minh họa ký ức với bà, Canva AI hỗ trợ thiết kế poster hoặc thumbnail.",
      "Kết quả": "Mình xây dựng được kịch bản video theo cấu trúc 3 hồi: ký ức bên bà, hạt mầm ước mơ và hiện tại trong màu áo blouse. Sản phẩm kết hợp đầu ra AI với chỉnh sửa cá nhân để giữ giọng văn thật và cảm xúc cá nhân.",
      "Bài học": "AI có thể hỗ trợ tốt ở khâu lên cấu trúc, tạo hình ảnh minh họa và gợi ý bố cục. Tuy nhiên, AI không thể thay thế trải nghiệm thật, cảm xúc thật và lựa chọn cá nhân trong một dự án truyền cảm hứng.",
      "Ứng dụng thực tế": "Kỹ năng storytelling có thể áp dụng vào truyền thông sức khỏe, giáo dục người bệnh, chia sẻ động lực nghề nghiệp và xây dựng nội dung nhân văn trong môi trường chăm sóc sức khỏe."
    }
  },
  {
    number: "06",
    type: "Responsible AI",
    title: "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    pdf: "files/tuan6.pdf",
    featured: false,
    tags: ["AI có trách nhiệm", "Bảo mật", "Kiểm chứng"],
    summary: "Tìm hiểu nguyên tắc sử dụng AI trong môi trường Y Dược, đặc biệt về bảo mật dữ liệu và liêm chính học thuật.",
    details: {
      "Mục tiêu": "Hiểu và thực hành nguyên tắc sử dụng AI có trách nhiệm trong học tập, đặc biệt trong bối cảnh Y Dược, Dược học và các ngành sức khỏe.",
      "Tóm tắt quá trình": "Mình nghiên cứu chính sách sử dụng AI của Trường Đại học Y Dược thuộc ĐHQGHN và so sánh với Trường Đại học Dược Hà Nội. Nội dung tập trung vào khai báo AI, bảo mật dữ liệu y tế, không dùng AI thay thế tư duy lâm sàng, đối chiếu thông tin thuốc và không đưa dữ liệu nhạy cảm lên nền tảng AI công cộng.",
      "Kết quả": "Mình nhận diện được các nguyên tắc quan trọng như minh bạch, kiểm chứng, bảo mật dữ liệu, không dùng AI để gian lận học thuật và không xem AI là bằng chứng chuyên môn độc lập trong lĩnh vực sức khỏe.",
      "Bài học": "Sử dụng AI trong Y Dược cần tiêu chuẩn thận trọng cao hơn nhiều lĩnh vực khác. Mọi thông tin liên quan đến chẩn đoán, thuốc, điều trị hoặc dữ liệu bệnh nhân cần được kiểm chứng và xử lý có trách nhiệm.",
      "Ứng dụng thực tế": "Kỹ năng sử dụng AI có trách nhiệm giúp sinh viên bảo vệ dữ liệu nhạy cảm, duy trì liêm chính học thuật và hình thành tư duy an toàn khi tiếp cận công nghệ trong chăm sóc sức khỏe."
    }
  },
  {
    number: "07",
    type: "Research Review",
    title: "Tổng quan tài liệu khoa học về AI trong chẩn đoán y tế",
    pdf: "files/tuan7.pdf",
    featured: true,
    tags: ["AI y tế", "Elicit", "Consensus"],
    summary: "Dùng công cụ AI để tổng quan tài liệu khoa học về Deep Learning, CNN và chẩn đoán y tế từ hình ảnh.",
    details: {
      "Mục tiêu": "Sử dụng công cụ AI như Elicit và Consensus để tổng quan tài liệu khoa học về ứng dụng trí tuệ nhân tạo, đặc biệt là Deep Learning và CNN, trong chẩn đoán y tế từ hình ảnh.",
      "Tóm tắt quá trình": "Mình lựa chọn chủ đề Ứng dụng Trí tuệ Nhân tạo trong Chẩn đoán Y tế, đặt câu hỏi nghiên cứu về độ chính xác của AI trong chẩn đoán bệnh từ hình ảnh y tế và mức độ AI có thể hỗ trợ bác sĩ lâm sàng.",
      "Kết quả": "Mình tổng hợp được 6 bài báo khoa học liên quan đến AI trong chẩn đoán y tế, gồm các nghiên cứu về deep learning trong chẩn đoán hình ảnh, đái tháo đường võng mạc, ảnh đáy mắt/OCT, dermoscopy và AI tạo sinh trong chẩn đoán.",
      "Bài học": "Công cụ AI nghiên cứu giúp tăng tốc quá trình tổng quan tài liệu nhưng không thay thế việc đọc hiểu và đánh giá của người học. Cần xem xét phương pháp nghiên cứu, cỡ mẫu, độ lệch dữ liệu và khả năng áp dụng lâm sàng.",
      "Ứng dụng thực tế": "Bài tập giúp mình hiểu rõ tiềm năng và giới hạn của AI trong chẩn đoán y tế. AI có thể hỗ trợ bác sĩ nhưng cần được đánh giá nghiêm ngặt về độ chính xác, tính công bằng, dữ liệu huấn luyện và trách nhiệm chuyên môn."
    }
  }
];

const reflections = [
  {
    title: "Đã học được",
    text: "Qua 7 bài tập, mình học được cách quản lý tài liệu số, tìm kiếm và đánh giá nguồn y khoa, viết prompt hiệu quả, hợp tác trực tuyến, sáng tạo nội dung bằng AI, sử dụng AI có trách nhiệm và tổng quan tài liệu khoa học bằng công cụ AI."
  },
  {
    title: "Kỹ năng cải thiện",
    text: "Các kỹ năng được cải thiện gồm tổ chức dữ liệu, đánh giá tài liệu, tư duy phản biện, viết prompt, làm việc nhóm, storytelling, truyền thông sức khỏe, kiểm chứng thông tin và nhận diện rủi ro đạo đức trong AI."
  },
  {
    title: "Khó khăn",
    text: "Khó khăn chính là chọn lọc nguồn đáng tin cậy, xử lý thuật ngữ chuyên ngành, viết prompt đủ cụ thể, kiểm chứng thông tin AI tạo ra và giữ cân bằng giữa hỗ trợ của AI với dấu ấn cá nhân."
  },
  {
    title: "Cách khắc phục",
    text: "Mình khắc phục bằng cách chia nhỏ nhiệm vụ, đối chiếu nhiều nguồn, dùng AI như công cụ hỗ trợ, tự biên tập nội dung, kiểm tra lại trích dẫn và giữ vai trò quyết định cuối cùng với sản phẩm học tập."
  },
  {
    title: "Định hướng tương lai",
    text: "Các kỹ năng này có thể tiếp tục áp dụng vào học tập Y Dược, làm báo cáo, nghiên cứu tài liệu, thiết kế nội dung truyền thông sức khỏe, phối hợp nhóm và tiếp cận AI y tế một cách thận trọng."
  },
  {
    title: "Liên hệ Y Dược/Điều dưỡng",
    text: "Portfolio cho thấy công cụ số và AI có thể hỗ trợ học tập hiệu quả nếu được sử dụng đúng cách. Điều quan trọng là kết hợp công nghệ với tính nhân văn, tư duy kiểm chứng, bảo mật dữ liệu và trách nhiệm với người bệnh."
  }
];

function applyTheme(theme) {
  const root = document.documentElement;
  root.style.setProperty("--bg", theme.background);
  root.style.setProperty("--surface", theme.surface);
  root.style.setProperty("--primary", theme.primary);
  root.style.setProperty("--secondary", theme.secondary);
  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--border", theme.border);
}

function renderIndex() {
  document.getElementById("index-list").innerHTML = modules
    .map((module) => `
      <a class="index-item" href="#module-${module.number}">
        <b>${module.number}</b>
        <span>${module.title}</span>
      </a>
    `)
    .join("");
}

function renderProfile() {
  document.getElementById("profile-grid").innerHTML = profileItems
    .map((item) => `
      <article class="profile-card">
        <span class="label">${item.label}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `)
    .join("");
}

function renderModules() {
  const target = document.getElementById("module-track");
  target.innerHTML = modules
    .map((module) => `
      <article class="module-card ${module.featured ? "is-featured" : ""}" id="module-${module.number}">
        <span class="module-number">Module ${module.number}</span>
        <span class="module-type">${module.type}</span>
        <h3>${module.title}</h3>
        <p>${module.summary}</p>
        <div class="tag-row">
          ${module.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <div class="module-actions">
          <button class="button" type="button" data-module="${module.number}">Xem chi tiết</button>
          <a class="button button-primary" href="${module.pdf}" target="_blank" rel="noopener">Mở PDF</a>
        </div>
      </article>
    `)
    .join("");

  target.querySelectorAll("[data-module]").forEach((button) => {
    button.addEventListener("click", () => openModule(button.dataset.module));
  });
}

function renderReflections() {
  document.getElementById("reflection-grid").innerHTML = reflections
    .map((item, index) => `
      <article class="reflection-card">
        <span class="reflection-index">${String(index + 1).padStart(2, "0")}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>
    `)
    .join("");
}

function openModule(number) {
  const module = modules.find((item) => item.number === number);
  const dialog = document.getElementById("clinical-dialog");
  if (!module) return;

  document.getElementById("dialog-label").textContent = `Module ${module.number}`;
  document.getElementById("dialog-title").textContent = module.title;
  document.getElementById("dialog-pdf").href = module.pdf;
  document.getElementById("dialog-tags").innerHTML = [module.type, ...module.tags]
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");
  document.getElementById("case-notes").innerHTML = Object.entries(module.details)
    .map(([title, text]) => `
      <section class="case-note">
        <h3>${title}</h3>
        <p>${text}</p>
      </section>
    `)
    .join("");

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    window.open(module.pdf, "_blank", "noopener");
  }
}

function setupDialog() {
  const dialog = document.getElementById("clinical-dialog");
  const close = dialog.querySelector(".dialog-close");
  close.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
}

function setupNavState() {
  const links = Array.from(document.querySelectorAll(".site-nav a"));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: "-45% 0px -45% 0px" });

  sections.forEach((section) => observer.observe(section));
}

applyTheme(themeConfig);
renderIndex();
renderProfile();
renderModules();
renderReflections();
setupDialog();
setupNavState();
