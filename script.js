document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const currentPage = body.dataset.page || "landing";
  const languageStorageKey = "site-language";
  let currentLanguage = "en";
  const loader = document.getElementById("loader");
  const navbar = document.getElementById("navbar");
  const menuToggle = document.getElementById("menu-toggle");
  const navPanel = document.querySelector(".nav-panel");
  const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = themeToggle?.querySelector(".theme-icon");
  const backToTop = document.getElementById("backToTop");
  const cursor = document.getElementById("cursor");
  const hoverItems = document.querySelectorAll("a, button, input, textarea, .surface-card");
  const revealCards = document.querySelectorAll(".reveal-card");
  const progressBars = document.querySelectorAll(".progress-bar");
  const sections = Array.from(document.querySelectorAll("main section[id]"));
  const terminalInput = document.getElementById("terminal-input");
  const terminalOutput = document.getElementById("terminal-output");
  const contactForm = document.querySelector(".contact-form");
  const contactFeedback = document.getElementById("contact-feedback");
  const technicalProjectsContainer = document.getElementById("technical-projects");
  const creativeProjectsContainer = document.getElementById("creative-projects");
  const repoContainer = document.getElementById("github-projects");
  const exitButton = document.getElementById("exit-terminal");
  const fullscreenTerminal = document.getElementById("fullscreen-terminal");
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");
  const todoEmpty = document.getElementById("todo-empty");
  const todoCount = document.getElementById("todo-count");
  const todoFilters = document.getElementById("todo-filters");
  const todoClearCompleted = document.getElementById("todo-clear-completed");
  const privateNotes = document.getElementById("private-notes");
  const openCount = document.getElementById("private-open-count");
  const doneCount = document.getElementById("private-done-count");
  const focusStatus = document.getElementById("focus-status");
  const focusTime = document.getElementById("focus-time");
  const focusStart = document.getElementById("focus-start");
  const focusPause = document.getElementById("focus-pause");
  const focusReset = document.getElementById("focus-reset");

  function getTerminalCommands() {
    if (currentPage === "technical") {
      return currentLanguage === "ar"
        ? {
            help: "الأوامر: help, about, skills, projects, contact, clear",
            about: "أنا Mohammad Adel وأركز على الشبكات والأمن السيبراني ولينكس والعمل المختبري التقني.",
            skills: "الشبكات | الأمن السيبراني | لينكس | حل المشكلات",
            projects: "المشاريع: ماسح الشبكة، لوحة مراقبة المنافذ، مختبر تحليل الترافيك",
            contact: "تواصل معي عبر قسم التواصل بخصوص المشاريع التقنية والتعاون."
          }
        : {
            help: "Commands: help, about, skills, projects, contact, clear",
            about: "I'm Mohammad Adel, focused on networking, cybersecurity, Linux, and technical lab work.",
            skills: "Networking | Cybersecurity | Linux | Problem Solving",
            projects: "Projects: Network Scanner, Port Monitor Dashboard, Traffic Analysis Lab",
            contact: "Reach me through the contact section for technical projects and collaboration."
          };
    }

    return currentLanguage === "ar"
      ? {
          help: "الأوامر: help, about, clear",
          about: "أنا Mohammad Adel.",
          contact: "تواصل معي عبر قسم التواصل."
        }
      : {
          help: "Commands: help, about, clear",
          about: "I'm Mohammad Adel.",
          contact: "Reach me through the contact section."
        };
  }

  const technicalProjects = [
    {
      title: "Network Scanner",
      titleAr: "ماسح الشبكة",
      tag: "Featured",
      tagAr: "مميز",
      description: "A simple scanner concept for discovering devices on a local network.",
      descriptionAr: "فكرة مشروع بسيطة لاكتشاف الأجهزة المتصلة على الشبكة المحلية.",
      href: "project-network-scanner.html",
      label: "View Project",
      labelAr: "عرض المشروع",
      featured: true,
      status: "Live",
      statusAr: "جاهز"
    },
    {
      title: "Password Strength Checker",
      titleAr: "فاحص قوة كلمة المرور",
      tag: "Utility",
      tagAr: "أداة",
      description: "A lightweight frontend idea for evaluating password quality and user guidance.",
      descriptionAr: "فكرة واجهة خفيفة لتقييم قوة كلمة المرور وتوجيه المستخدم.",
      href: "",
      label: "Coming Soon",
      labelAr: "قريبًا",
      status: "Planned",
      statusAr: "مخطط"
    },
    {
      title: "Cyber Portfolio Interface",
      titleAr: "واجهة بورتفوليو تقني",
      tag: "Portfolio",
      tagAr: "بورتفوليو",
      description: "A responsive personal site blending terminal visuals with clean content sections.",
      descriptionAr: "موقع شخصي متجاوب يمزج بين شكل التيرمينال وأقسام محتوى منظمة.",
      href: "#contact",
      label: "Work Together",
      labelAr: "لنعمل معًا",
      status: "Live",
      statusAr: "جاهز"
    },
    {
      title: "Port Monitor Dashboard",
      titleAr: "لوحة مراقبة المنافذ",
      tag: "Monitoring",
      tagAr: "مراقبة",
      description: "A dashboard concept for tracking open ports, exposed services, and suspicious changes across hosts.",
      descriptionAr: "فكرة لوحة لمتابعة المنافذ المفتوحة والخدمات الظاهرة والتغيرات المشبوهة على الأجهزة.",
      href: "",
      label: "Case Study Soon",
      labelAr: "دراسة حالة قريبًا",
      status: "Draft",
      statusAr: "مسودة"
    },
    {
      title: "Linux Hardening Notes",
      titleAr: "ملاحظات تقوية لينكس",
      tag: "Security",
      tagAr: "أمن",
      description: "A practical reference page for basic Linux hardening steps, permissions review, and defensive checklists.",
      descriptionAr: "مرجع عملي لخطوات تقوية لينكس الأساسية ومراجعة الصلاحيات وقوائم التحقق الدفاعية.",
      href: "",
      label: "Draft Version",
      labelAr: "نسخة أولية",
      status: "Draft",
      statusAr: "مسودة"
    },
    {
      title: "Traffic Analysis Lab",
      titleAr: "مختبر تحليل الترافيك",
      tag: "Lab",
      tagAr: "مختبر",
      description: "A guided practice project for reviewing packets, identifying protocols, and spotting unusual network behavior.",
      descriptionAr: "مشروع تدريبي لتحليل الحزم والتعرف على البروتوكولات واكتشاف السلوك غير المعتاد في الشبكة.",
      href: "",
      label: "In Progress",
      labelAr: "قيد التنفيذ",
      status: "Building",
      statusAr: "يُبنى"
    }
  ];

  const creativeProjects = [
    {
      title: "High-Contrast Promo Visuals",
      titleAr: "تصاميم دعائية عالية التباين",
      tag: "Thumbnail",
      tagAr: "صورة مصغرة",
      description: "Strong composition built for fast recognition and clear messaging.",
      descriptionAr: "تكوين بصري قوي مصمم للفت الانتباه بسرعة وإيصال الرسالة بوضوح.",
      size: "tall",
      status: "Concept",
      statusAr: "فكرة"
    },
    {
      title: "Short-Form Motion Flow",
      titleAr: "تدفق مونتاج قصير",
      tag: "Reel Edit",
      tagAr: "مونتاج ريل",
      description: "Energy through timing, transitions, captions, and rhythm.",
      descriptionAr: "طاقة بصرية عبر التوقيت والانتقالات والنصوص والإيقاع.",
      status: "Concept",
      statusAr: "فكرة"
    },
    {
      title: "Clean Visual Identity Pieces",
      titleAr: "قطع هوية بصرية نظيفة",
      tag: "Brand Post",
      tagAr: "منشور براند",
      description: "Layouts that feel organized, modern, and memorable.",
      descriptionAr: "تصميمات تبدو منظمة وعصرية وسهلة التذكر.",
      status: "Concept",
      statusAr: "فكرة"
    },
    {
      title: "Gaming Highlight Montage",
      titleAr: "مونتاج لقطات ألعاب",
      tag: "Montage",
      tagAr: "مونتاج",
      description: "Fast-paced edit direction with impact cuts, sound sync, and dramatic motion accents.",
      descriptionAr: "أسلوب مونتاج سريع بإيقاع قوي ومزامنة صوتية وحركة درامية.",
      status: "Draft",
      statusAr: "مسودة"
    },
    {
      title: "Product Promo Carousel",
      titleAr: "كاروسيل ترويجي لمنتج",
      tag: "Social Media",
      tagAr: "سوشيال ميديا",
      description: "A clean promotional concept built for scroll-stopping posts and short campaign visuals.",
      descriptionAr: "فكرة ترويجية نظيفة مصممة لمنشورات توقف التمرير وحملات بصرية قصيرة.",
      status: "Draft",
      statusAr: "مسودة"
    },
    {
      title: "Creator Branding Kit",
      titleAr: "هوية صانع محتوى",
      tag: "Branding",
      tagAr: "هوية",
      description: "A visual package concept including thumbnails, post layout style, and editable identity direction.",
      descriptionAr: "حزمة بصرية تتضمن صورًا مصغرة وأسلوب منشورات واتجاه هوية قابل للتطوير.",
      size: "tall",
      status: "Building",
      statusAr: "يُبنى"
    }
  ];

  function getLocalizedField(item, field) {
    return currentLanguage === "ar" && item[`${field}Ar`] ? item[`${field}Ar`] : item[field];
  }

  function setText(selector, value) {
    const element = document.querySelector(selector);
    if (element) {
      element.textContent = value;
    }
  }

  function setAttr(selector, attr, value) {
    const element = document.querySelector(selector);
    if (element) {
      element.setAttribute(attr, value);
    }
  }

  function createLanguageToggle() {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "lang-toggle-fixed";
    button.id = "lang-toggle";
    button.addEventListener("click", () => {
      currentLanguage = currentLanguage === "en" ? "ar" : "en";
      try {
        localStorage.setItem(languageStorageKey, currentLanguage);
      } catch (error) {
        // Ignore storage failures in restricted environments.
      }
      applyLanguage();
      renderTechnicalProjects();
      renderCreativeProjects();
      if (typeof window.__privateTodoRefresh === "function") {
        window.__privateTodoRefresh();
      }
      if (typeof window.__focusLanguageRefresh === "function") {
        window.__focusLanguageRefresh();
      }
    });
    document.body.appendChild(button);
    return button;
  }

  function applyLanguage() {
    document.documentElement.lang = currentLanguage === "ar" ? "ar" : "en";
    document.body.setAttribute("dir", currentLanguage === "ar" ? "rtl" : "ltr");

    const langToggle = document.getElementById("lang-toggle");
    if (langToggle) {
      langToggle.textContent = currentLanguage === "ar" ? "English" : "العربية";
    }

    if (currentPage === "landing") {
      document.title = currentLanguage === "ar" ? "اختر مسارك | Mohammad Adel" : "Choose Your Path | Mohammad Adel";
      setText(".landing-card .eyebrow", currentLanguage === "ar" ? "مرحبًا" : "Welcome");
      setText(".landing-card h1", currentLanguage === "ar" ? "اختر البورتفوليو المناسب لك." : "Choose the portfolio that fits your needs.");
      setText(".landing-text", currentLanguage === "ar" ? "هذه التجربة مقسمة إلى مسارين منفصلين حتى يرى كل زائر فقط ما يخصه." : "This experience is split into two separate tracks so every visitor sees only the work that matters to them.");
      const pathCards = document.querySelectorAll(".path-card");
      if (pathCards[0]) {
        pathCards[0].querySelector(".profile-pill").textContent = currentLanguage === "ar" ? "تقني" : "Technical";
        pathCards[0].querySelector("h2").textContent = currentLanguage === "ar" ? "الشبكات والأمن السيبراني" : "Networking & Cybersecurity";
        pathCards[0].querySelector("p").textContent = currentLanguage === "ar" ? "مختبرات وشهادات ومشاريع تقنية وأعمال تركز على البنية التحتية." : "Labs, certifications, technical projects, and infrastructure-focused work.";
        pathCards[0].querySelector(".button").textContent = currentLanguage === "ar" ? "ادخل الموقع التقني" : "Enter Technical Site";
      }
      if (pathCards[1]) {
        pathCards[1].querySelector(".profile-pill").textContent = currentLanguage === "ar" ? "إبداعي" : "Creative";
        pathCards[1].querySelector("h2").textContent = currentLanguage === "ar" ? "التصميم والمونتاج" : "Design & Montage";
        pathCards[1].querySelector("p").textContent = currentLanguage === "ar" ? "هوية بصرية ومونتاج ومحتوى سوشيال ميديا وأعمال إبداعية." : "Visual identity, editing, social media content, and creative showcase work.";
        pathCards[1].querySelector(".button").textContent = currentLanguage === "ar" ? "ادخل الموقع الإبداعي" : "Enter Creative Site";
      }
      return;
    }

    if (currentPage === "technical") {
      document.title = currentLanguage === "ar" ? "Mohammad Adel | البورتفوليو التقني" : "Mohammad Adel | Technical Portfolio";
      const nav = [currentLanguage === "ar" ? "نبذة" : "About", currentLanguage === "ar" ? "المهارات" : "Skills", currentLanguage === "ar" ? "المشاريع" : "Projects", currentLanguage === "ar" ? "المعمل" : "Cyber Lab", currentLanguage === "ar" ? "الشهادات" : "Certifications", "GitHub", currentLanguage === "ar" ? "التيرمينال" : "Terminal", currentLanguage === "ar" ? "تواصل" : "Contact"];
      navLinks.forEach((link, index) => { if (nav[index]) link.textContent = nav[index]; });
      setText(".hero .eyebrow", currentLanguage === "ar" ? "شبكات / أمن سيبراني / لينكس / مختبرات" : "Networking / Cybersecurity / Linux / Labs");
      setText(".hero h1", currentLanguage === "ar" ? "بورتفوليو تقني مبني حول الأنظمة الآمنة والتجارب العملية." : "Technical portfolio built around secure systems and hands-on labs.");
      setText(".hero-text", currentLanguage === "ar" ? "أنا Mohammad Adel، أركز على الشبكات والأمن السيبراني والعمل التقني العملي الذي يحول الدراسة إلى مشاريع واضحة." : "I'm Mohammad Adel, focused on networking, cybersecurity, and practical technical work that turns theory into usable projects and documented learning.");
      const heroButtons = document.querySelectorAll(".hero-actions .button");
      if (heroButtons[0]) heroButtons[0].textContent = currentLanguage === "ar" ? "عرض المشاريع" : "View Projects";
      if (heroButtons[1]) heroButtons[1].textContent = currentLanguage === "ar" ? "تواصل معي" : "Contact Me";
      const metricLabels = document.querySelectorAll(".metric-chip span");
      const metricTexts = currentLanguage === "ar" ? ["مجالات تقنية أساسية", "اتجاهات مختبرية", "هوية تقنية"] : ["Core technical areas", "Lab directions", "Technical identity"];
      metricLabels.forEach((item, index) => { if (metricTexts[index]) item.textContent = metricTexts[index]; });
      setText(".status-card strong", currentLanguage === "ar" ? "التركيز التقني" : "Technical focus");
      setText(".status-card p", currentLanguage === "ar" ? "الشبكات والمسح وتحليل الترافيك وأساسيات الأمن." : "Networking, scanning, traffic review, and security fundamentals.");
      setText("#about .eyebrow", currentLanguage === "ar" ? "نبذة" : "About");
      setText("#about h2", currentLanguage === "ar" ? "عمل تقني يركز على البنية التحتية والأمن." : "Technical work centered on infrastructure and security.");
      setText("#about .profile-pill", currentLanguage === "ar" ? "الملف التقني" : "Technical Profile");
      setText("#about h3", currentLanguage === "ar" ? "Mohammad Adel | الشبكات والأمن السيبراني" : "Mohammad Adel | Networking and Cybersecurity");
      setText("#about .about-card p", currentLanguage === "ar" ? "أحب التعلم عبر المختبرات والتطبيق العملي والمشاريع. يركز مساري الحالي على أساسيات الشبكات ولينكس ومفاهيم الأمن السيبراني وتحويل التعلم إلى أعمال واضحة." : "I enjoy learning through labs, structured practice, and project-based experimentation. My current path focuses on networking fundamentals, Linux workflows, cybersecurity concepts, and turning technical study into clear portfolio work.");
      setText("#skills .eyebrow", currentLanguage === "ar" ? "المهارات التقنية" : "Technical Skills");
      setText("#skills h2", currentLanguage === "ar" ? "مهارات المجال الحالي." : "Current field skills.");
      const skillNames = currentLanguage === "ar" ? ["الشبكات", "الأمن السيبراني", "لينكس", "حل المشكلات"] : ["Networking", "Cybersecurity", "Linux", "Problem Solving"];
      document.querySelectorAll("#skills .skill-header h3").forEach((item, index) => { if (skillNames[index]) item.textContent = skillNames[index]; });
      setText("#projects .eyebrow", currentLanguage === "ar" ? "المشاريع التقنية" : "Technical Projects");
      setText("#projects h2", currentLanguage === "ar" ? "مشاريع المسار التقني." : "Projects for the technical track.");
      setText("#lab .eyebrow", currentLanguage === "ar" ? "المعمل السيبراني" : "Cyber Lab");
      setText("#lab h2", currentLanguage === "ar" ? "موضوعات أجرّبها عمليًا." : "Topics I'm experimenting with in practice.");
      const labNames = currentLanguage === "ar" ? ["مسح الشبكة", "تحليل الحزم", "اختبارات الأمان"] : ["Network Scanning", "Packet Analysis", "Security Testing"];
      const labTexts = currentLanguage === "ar" ? ["أجرّب اكتشاف الأجهزة والخدمات ورؤية الشبكة بشكل أوضح.", "أراجع الحزم لفهم السلوك والبروتوكولات والأنماط غير المعتادة.", "أمارس فحوصات أمنية تمهيدية بطريقة آمنة ومنهجية."] : ["Experimenting with device discovery, host visibility, and service mapping.", "Reviewing packet flow to understand behavior, protocols, and anomalies.", "Practicing safe introductory vulnerability checks and defensive thinking."];
      document.querySelectorAll("#lab .lab-card").forEach((card, index) => {
        const title = card.querySelector("h3");
        const text = card.querySelector("p");
        if (title && labNames[index]) title.textContent = labNames[index];
        if (text && labTexts[index]) text.textContent = labTexts[index];
      });
      setText("#certifications .eyebrow", currentLanguage === "ar" ? "الشهادات" : "Certifications");
      setText("#certifications h2", currentLanguage === "ar" ? "مسار التعلم والمحطات الحالية." : "Learning path and current milestones.");
      setText("#github .eyebrow", "GitHub");
      setText("#github h2", currentLanguage === "ar" ? "المستودعات المميزة." : "Highlighted repositories.");
      setText("#terminal .eyebrow", currentLanguage === "ar" ? "التيرمينال" : "Terminal");
      setText("#terminal h2", currentLanguage === "ar" ? "جرّب بعض الأوامر السريعة." : "Try a few quick commands.");
      setAttr("#terminal-input", "placeholder", currentLanguage === "ar" ? "اكتب help أو أدخل كود الوصول" : "Type help or enter the access code");
      setText("#contact .eyebrow", currentLanguage === "ar" ? "تواصل" : "Contact");
      setText("#contact h2", currentLanguage === "ar" ? "لنتواصل." : "Let's connect.");
      setAttr(".contact-form input[type='text']", "placeholder", currentLanguage === "ar" ? "اسمك" : "Your Name");
      setAttr(".contact-form input[type='email']", "placeholder", currentLanguage === "ar" ? "بريدك الإلكتروني" : "Your Email");
      setAttr(".contact-form textarea", "placeholder", currentLanguage === "ar" ? "رسالتك" : "Your Message");
      setText(".contact-form button", currentLanguage === "ar" ? "إرسال الرسالة" : "Send Message");
      setText(".contact-info h3", currentLanguage === "ar" ? "معلومات مباشرة" : "Direct Info");
      setText(".footer p", currentLanguage === "ar" ? "© 2026 Mohammad Adel | البورتفوليو التقني" : "© 2026 Mohammad Adel | Technical Portfolio");
      return;
    }

    if (currentPage === "creative") {
      document.title = currentLanguage === "ar" ? "البورتفوليو الإبداعي | Mohammad Adel" : "Creative Portfolio | Mohammad Adel";
      const nav = [currentLanguage === "ar" ? "نبذة" : "About", currentLanguage === "ar" ? "المهارات" : "Skills", currentLanguage === "ar" ? "العرض" : "Showcase", currentLanguage === "ar" ? "المشاريع" : "Projects", currentLanguage === "ar" ? "التوجه" : "Direction", currentLanguage === "ar" ? "تواصل" : "Contact"];
      navLinks.forEach((link, index) => { if (nav[index]) link.textContent = nav[index]; });
      setText(".hero .eyebrow", currentLanguage === "ar" ? "تصميم / مونتاج / سوشيال ميديا / سرد بصري" : "Design / Montage / Social Media / Visual Storytelling");
      setText(".hero h1", currentLanguage === "ar" ? "بورتفوليو إبداعي مبني على الصورة والإيقاع وطريقة العرض." : "Creative portfolio shaped around visuals, rhythm, and presentation.");
      setText(".hero-text", currentLanguage === "ar" ? "هذا هو الجانب الإبداعي من Mohammad Adel: التصميم والمونتاج والهوية البصرية وصناعة المحتوى بطريقة نظيفة وملحوظة." : "This is the creative side of Mohammad Adel: design direction, montage work, visual identity, and content built to feel sharp, clean, and memorable.");
      const heroButtons = document.querySelectorAll(".hero-actions .button");
      if (heroButtons[0]) heroButtons[0].textContent = currentLanguage === "ar" ? "عرض المشاريع الإبداعية" : "View Creative Projects";
      if (heroButtons[1]) heroButtons[1].textContent = currentLanguage === "ar" ? "تواصل معي" : "Contact Me";
      const metricLabels = document.querySelectorAll(".metric-chip span");
      const metricTexts = currentLanguage === "ar" ? ["مهارات إبداعية", "عناصر عرض وهمية", "هوية إبداعية"] : ["Creative skill areas", "Mock showcase items", "Creative identity"];
      metricLabels.forEach((item, index) => { if (metricTexts[index]) item.textContent = metricTexts[index]; });
      setText(".status-card strong", currentLanguage === "ar" ? "التركيز الإبداعي" : "Creative focus");
      setText(".status-card p", currentLanguage === "ar" ? "المونتاج والتكوين والصور المصغرة والهوية والإيقاع البصري." : "Editing flow, composition, thumbnails, identity, and visual pacing.");
      setText("#about .eyebrow", currentLanguage === "ar" ? "نبذة" : "About");
      setText("#about h2", currentLanguage === "ar" ? "عمل إبداعي بهوية مستقلة خاصة به." : "Creative work with its own separate identity.");
      setText("#about .profile-pill", currentLanguage === "ar" ? "الملف الإبداعي" : "Creative Profile");
      setText("#about h3", currentLanguage === "ar" ? "Mohammad Adel | التصميم والمونتاج" : "Mohammad Adel | Design and Montage");
      setText("#about .about-card p", currentLanguage === "ar" ? "أركز على صناعة محتوى بصري يبدو مقصودًا ومصقولًا. يشمل عملي الإبداعي أفكار التصميم ومحتوى السوشيال ميديا والمونتاج واتخاذ قرارات عرض تجعل الفكرة أسهل في الملاحظة والتذكر." : "I focus on creating visuals that feel intentional and polished. My creative work includes design concepts, social media content, montage flow, and presentation choices that make ideas easier to notice and remember.");
      setText("#skills .eyebrow", currentLanguage === "ar" ? "المهارات الإبداعية" : "Creative Skills");
      setText("#skills h2", currentLanguage === "ar" ? "مهارات التصميم والمونتاج." : "Design and montage skills.");
      const skillNames = currentLanguage === "ar" ? ["التصميم الجرافيكي", "المونتاج", "السرد البصري", "محتوى السوشيال ميديا"] : ["Graphic Design", "Video Editing", "Visual Storytelling", "Social Media Content"];
      document.querySelectorAll("#skills .skill-header h3").forEach((item, index) => { if (skillNames[index]) item.textContent = skillNames[index]; });
      setText("#showcase .eyebrow", currentLanguage === "ar" ? "الهوية الإبداعية" : "Creative Identity");
      setText("#showcase h2", currentLanguage === "ar" ? "التصميم والمونتاج يحتاجان لغة بصرية مستقلة." : "Design and montage deserve their own visual language.");
      setText("#showcase .creative-copy p", currentLanguage === "ar" ? "يركز هذا الجانب من البورتفوليو على التكوين والإيقاع والصور المصغرة والريلز والاختيارات الحركية وتحويل الأفكار الخام إلى نتائج بصرية مصقولة." : "This side of the portfolio focuses on composition, rhythm, thumbnails, reels, motion choices, and transforming raw ideas into polished visual pieces.");
      const creativeCards = document.querySelectorAll(".creative-card");
      if (creativeCards[0]) { creativeCards[0].querySelector(".creative-badge").textContent = currentLanguage === "ar" ? "تصميم" : "Design"; creativeCards[0].querySelector("h3").textContent = currentLanguage === "ar" ? "تخطيطات نظيفة" : "Clean layouts"; creativeCards[0].querySelector("p").textContent = currentLanguage === "ar" ? "بوسترات وصور مصغرة واتجاهات هوية بصرية ومحتوى متوازن بصريًا." : "Posters, thumbnails, branding directions, and visually balanced content."; }
      if (creativeCards[1]) { creativeCards[1].querySelector(".creative-badge").textContent = currentLanguage === "ar" ? "مونتاج" : "Montage"; creativeCards[1].querySelector("h3").textContent = currentLanguage === "ar" ? "إيقاع مونتاج قوي" : "Sharp editing flow"; creativeCards[1].querySelector("p").textContent = currentLanguage === "ar" ? "سرعة مناسبة وانتقالات وتوقيت يجعل المحتوى أكثر جذبًا." : "Fast pacing, transitions, timing, and edits designed to keep attention high."; }
      setText("#projects .eyebrow", currentLanguage === "ar" ? "المشاريع الإبداعية" : "Creative Projects");
      setText("#projects h2", currentLanguage === "ar" ? "مشاريع المسار الإبداعي." : "Projects for the creative track.");
      setText("#direction .eyebrow", currentLanguage === "ar" ? "التوجه الإبداعي" : "Creative Direction");
      setText("#direction h2", currentLanguage === "ar" ? "كيف يتطور هذا الجانب." : "How this side is growing.");
      setText("#contact .eyebrow", currentLanguage === "ar" ? "تواصل" : "Contact");
      setText("#contact h2", currentLanguage === "ar" ? "لنصنع شيئًا قويًا." : "Let's create something strong.");
      setAttr(".contact-form input[type='text']", "placeholder", currentLanguage === "ar" ? "اسمك" : "Your Name");
      setAttr(".contact-form input[type='email']", "placeholder", currentLanguage === "ar" ? "بريدك الإلكتروني" : "Your Email");
      setAttr(".contact-form textarea", "placeholder", currentLanguage === "ar" ? "رسالتك" : "Your Message");
      setText(".contact-form button", currentLanguage === "ar" ? "إرسال الرسالة" : "Send Message");
      setText(".contact-info h3", currentLanguage === "ar" ? "معلومات مباشرة" : "Direct Info");
      setText(".footer p", currentLanguage === "ar" ? "© 2026 Mohammad Adel | البورتفوليو الإبداعي" : "© 2026 Mohammad Adel | Creative Portfolio");
      return;
    }

    if (currentPage === "portal") {
      document.title = currentLanguage === "ar" ? "بوابة خاصة | Mohammad Adel" : "Private Portal | Abo Nour";
      setText(".portal-container .eyebrow", currentLanguage === "ar" ? "منطقة مقيدة" : "Restricted Area");
      setText(".portal-container h1", currentLanguage === "ar" ? "دخول خاص" : "Private Access");
      setText(".portal-container p:not(#errorMessage)", currentLanguage === "ar" ? "أدخل كلمة المرور للمتابعة." : "Enter the password to continue.");
      setAttr("#passwordInput", "placeholder", currentLanguage === "ar" ? "أدخل كلمة المرور" : "Enter password");
      setText(".portal-container button", currentLanguage === "ar" ? "دخول" : "Enter");
      setText(".portal-container a", currentLanguage === "ar" ? "العودة" : "Back to Portfolio");
      return;
    }

    if (currentPage === "private") {
      document.title = currentLanguage === "ar" ? "منطقة خاصة | Mohammad Adel" : "Private Area | Abo Nour";
      setText(".secret-card .eyebrow", currentLanguage === "ar" ? "خاص" : "Private");
      setText(".secret-card > h1", currentLanguage === "ar" ? "مرحبًا، Mohammad Adel" : "Welcome, Abo Nour");
      setText(".secret-card > p", currentLanguage === "ar" ? "هذه المساحة مخصصة للوصول الخاص." : "This section is reserved for private access.");
      setText(".private-stat:nth-child(1) .private-stat-label", currentLanguage === "ar" ? "المهام المفتوحة" : "Open tasks");
      setText(".private-stat:nth-child(2) .private-stat-label", currentLanguage === "ar" ? "المكتملة" : "Completed");
      setText(".private-stat:nth-child(3) .private-stat-label", currentLanguage === "ar" ? "مؤقت التركيز" : "Focus timer");
      setText(".todo-header .eyebrow", currentLanguage === "ar" ? "المهام" : "To Do");
      setText(".todo-header h2", currentLanguage === "ar" ? "لوحة المهام الخاصة" : "Private task board");
      setAttr("#todo-input", "placeholder", currentLanguage === "ar" ? "أضف مهمة جديدة" : "Add a new task");
      setText("#todo-form button", currentLanguage === "ar" ? "إضافة مهمة" : "Add Task");
      const filterButtons = document.querySelectorAll(".todo-filter");
      const filterTexts = currentLanguage === "ar" ? ["الكل", "مفتوحة", "منتهية"] : ["All", "Open", "Done"];
      filterButtons.forEach((btn, index) => { if (filterTexts[index]) btn.textContent = filterTexts[index]; });
      setText("#todo-clear-completed", currentLanguage === "ar" ? "حذف المكتمل" : "Clear Completed");
      setText("#todo-empty", currentLanguage === "ar" ? "لا توجد مهام بعد. أضف أول مهمة." : "No tasks yet. Add your first one.");
      setText(".private-widget:nth-of-type(1) .eyebrow", currentLanguage === "ar" ? "ملاحظات" : "Notes");
      setText(".private-widget:nth-of-type(1) h2", currentLanguage === "ar" ? "ملاحظات سريعة" : "Quick notes");
      setAttr("#private-notes", "placeholder", currentLanguage === "ar" ? "احفظ هنا الأفكار والروابط والخطط..." : "Save ideas, reminders, links, or content plans here...");
      setText(".private-note-hint", currentLanguage === "ar" ? "يتم الحفظ تلقائيًا داخل المتصفح." : "Saved automatically in your browser.");
      setText(".private-widget:nth-of-type(2) .eyebrow", currentLanguage === "ar" ? "تركيز" : "Focus");
      setText(".private-widget:nth-of-type(2) h2", currentLanguage === "ar" ? "مؤقت تركيز صغير" : "Mini focus timer");
      setText(".focus-badge", currentLanguage === "ar" ? "25 دقيقة" : "25 min");
      setText("#focus-start", currentLanguage === "ar" ? "ابدأ" : "Start");
      setText("#focus-pause", currentLanguage === "ar" ? "إيقاف" : "Pause");
      setText("#focus-reset", currentLanguage === "ar" ? "إعادة" : "Reset");
      setText(".secret-card > a", currentLanguage === "ar" ? "العودة" : "Return to Portfolio");
      return;
    }

    if (currentPage === "project-network-scanner") {
      document.title = currentLanguage === "ar" ? "ماسح الشبكة | Mohammad Adel" : "Network Scanner | Abo Nour";
      setText(".project-details .eyebrow", currentLanguage === "ar" ? "مشروع" : "Project");
      setText(".project-details h1", currentLanguage === "ar" ? "ماسح الشبكة" : "Network Scanner");
      setText(".project-details p", currentLanguage === "ar" ? "يستكشف هذا المشروع فكرة مسح الأجهزة المتصلة بالشبكة المحلية وعرض النتائج بطريقة واضحة وعملية." : "This concept project explores scanning devices connected to a local network and presenting discovered hosts in a clear and practical way.");
      setText(".project-details h3", currentLanguage === "ar" ? "التقنيات المستخدمة" : "Technologies Used");
      setText(".project-details a", currentLanguage === "ar" ? "العودة" : "Back to Portfolio");
    }
  }

  function setTheme(mode) {
    const isLight = mode === "light";
    body.classList.toggle("light-mode", isLight);
    if (themeIcon) {
      themeIcon.textContent = isLight ? "Light" : "Dark";
    }
    try {
      localStorage.setItem("theme", mode);
    } catch (error) {
      // Ignore storage failures in restricted environments.
    }
  }

  function initializeTheme() {
    try {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        setTheme(savedTheme);
        return;
      }
    } catch (error) {
      // Ignore storage failures in restricted environments.
    }

    const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)").matches;
    setTheme(prefersLight ? "light" : "dark");
  }

  function closeMenu() {
    if (!menuToggle || !navPanel) {
      return;
    }
    menuToggle.setAttribute("aria-expanded", "false");
    navPanel.classList.remove("open");
    body.classList.remove("menu-open");
  }

  function openMenu() {
    if (!menuToggle || !navPanel) {
      return;
    }
    menuToggle.setAttribute("aria-expanded", "true");
    navPanel.classList.add("open");
    body.classList.add("menu-open");
  }

  function updateNavbarState() {
    if (!navbar) {
      return;
    }
    navbar.classList.toggle("scrolled", window.scrollY > 24);
  }

  function revealAbout() {
    if (!revealCards.length) {
      return;
    }
    revealCards.forEach((card) => {
      const position = card.getBoundingClientRect().top;
      if (position < window.innerHeight - 80) {
        card.classList.add("show");
      }
    });
  }

  function animateProgressBars() {
    progressBars.forEach((bar) => {
      const position = bar.getBoundingClientRect().top;
      if (position < window.innerHeight - 50) {
        bar.style.width = bar.dataset.width || "0%";
      }
    });
  }

  function updateActiveNavLink() {
    if (!sections.length || !navLinks.length) {
      return;
    }

    let currentId = sections[0].id;
    sections.forEach((section) => {
      const top = section.offsetTop - 180;
      if (window.scrollY >= top) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${currentId}`;
      link.classList.toggle("active", isActive);
    });
  }

  function updateBackToTop() {
    if (!backToTop) {
      return;
    }
    backToTop.classList.toggle("show", window.scrollY > 320);
  }

  function appendTerminalLine(text, className) {
    if (!terminalOutput) {
      return;
    }
    const line = document.createElement("div");
    line.className = className;
    line.textContent = text;
    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  function initializeTerminal() {
    if (!terminalInput || !terminalOutput) {
      return;
    }

    appendTerminalLine(currentLanguage === "ar" ? "اكتب help لعرض الأوامر المتاحة." : "Type help to explore available commands.", "terminal-response");

    terminalInput.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") {
        return;
      }

      const command = terminalInput.value.trim().toLowerCase();
      if (!command) {
        return;
      }

      appendTerminalLine(`> ${command}`, "terminal-entry");

      const terminalCommands = getTerminalCommands();

      if (command === "135246") {
        appendTerminalLine(currentLanguage === "ar" ? "تم السماح بالدخول. جار التحويل..." : "Access granted. Redirecting...", "terminal-response");
        window.setTimeout(() => {
          window.location.href = "secret.html";
        }, 500);
      } else if (command === "clear") {
        terminalOutput.innerHTML = "";
      } else {
        appendTerminalLine(terminalCommands[command] || (currentLanguage === "ar" ? "الأمر غير موجود" : "Command not found"), "terminal-response");
      }

      terminalInput.value = "";
    });
  }

  function initializeLoader() {
    const bootLines = document.querySelectorAll(".boot-line");
    if (!loader || !bootLines.length) {
      return;
    }

    let delay = 0;
    bootLines.forEach((line) => {
      window.setTimeout(() => {
        line.style.opacity = "1";
      }, delay);
      delay += 450;
    });

    window.setTimeout(() => {
      loader.style.display = "none";
    }, delay + 350);
  }

  function initializeTypingEffect() {
    if (typeof Typed === "undefined" || !document.getElementById("typing-text")) {
      return;
    }

    const typedStrings = currentPage === "technical"
      ? [
          "Initializing technical portfolio...",
          "Loading network modules...",
          "Cybersecurity mode activated.",
          "Welcome to Abo Nour's technical site."
        ]
      : [
          "Initializing portfolio...",
          "Welcome to Mohammad Adel's portfolio."
        ];

    new Typed("#typing-text", {
      strings: typedStrings,
      typeSpeed: 45,
      backSpeed: 24,
      loop: true
    });
  }

  function initializeParticles() {
    if (typeof particlesJS === "undefined" || !document.getElementById("particles-js")) {
      return;
    }

    particlesJS("particles-js", {
      particles: {
        number: {
          value: 90,
          density: {
            enable: true,
            value_area: 900
          }
        },
        color: {
          value: "#53c7ff"
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.38,
          random: true
        },
        size: {
          value: 2.8,
          random: true
        },
        line_linked: {
          enable: true,
          distance: 140,
          color: "#53c7ff",
          opacity: 0.18,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.2,
          direction: "none",
          out_mode: "out"
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab"
          },
          onclick: {
            enable: true,
            mode: "push"
          }
        },
        modes: {
          grab: {
            distance: 180,
            line_linked: {
              opacity: 0.35
            }
          },
          push: {
            particles_nb: 3
          }
        }
      },
      retina_detect: true
    });
  }

  function initializeAOS() {
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 700,
        once: true,
        offset: 40
      });
    }
  }

  function initializeCursor() {
    if (!cursor || window.matchMedia("(max-width: 820px)").matches) {
      return;
    }

    document.addEventListener("mousemove", (event) => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
    });

    hoverItems.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1.9)";
      });
      item.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
      });
    });
  }

  function initializeRepos() {
    if (!repoContainer) {
      return;
    }

    const pinnedProjects = ["ma3alem_elbehaira", "Mohammad_Adel.github.io"];

    fetch("https://api.github.com/users/ma8749850-afk/repos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("GitHub request failed");
        }
        return response.json();
      })
      .then((repos) => {
        const filtered = repos
          .filter((repo) => !repo.fork && pinnedProjects.includes(repo.name))
          .sort((a, b) => pinnedProjects.indexOf(a.name) - pinnedProjects.indexOf(b.name));

        if (!filtered.length) {
          repoContainer.innerHTML = '<p class="repo-placeholder">No pinned repositories available right now.</p>';
          return;
        }

        repoContainer.innerHTML = "";

        filtered.forEach((repo) => {
          const card = document.createElement("article");
          card.className = "repo-card surface-card";

          const previewImage = `project-previews/${repo.name}.png`;
          const liveDemo = `https://ma8749850-afk.github.io/${repo.name}`;
          const hasPagesDemo = repo.name.endsWith(".github.io") || repo.homepage;

          card.innerHTML = `
            <img src="${previewImage}" class="project-preview" alt="${repo.name} preview" onerror="this.remove()">
            <h3>${repo.name}</h3>
            <p>${repo.description || "No description available."}</p>
            <div class="repo-links">
              <a class="button button-secondary" href="${repo.html_url}" target="_blank" rel="noreferrer">View Code</a>
              ${hasPagesDemo ? `<a class="button button-primary" href="${repo.homepage || liveDemo}" target="_blank" rel="noreferrer">Live Demo</a>` : ""}
            </div>
          `;

          repoContainer.appendChild(card);
        });
      })
      .catch(() => {
        repoContainer.innerHTML = '<p class="repo-placeholder">Unable to load repositories right now.</p>';
      });
  }

  function renderTechnicalProjects() {
    if (!technicalProjectsContainer) {
      return;
    }

    technicalProjectsContainer.innerHTML = "";

    technicalProjects.forEach((project) => {
      const card = document.createElement("article");
      card.className = `project-card surface-card${project.featured ? " project-featured" : ""}`;

      if (project.featured) {
        card.innerHTML = `
          <div class="project-image" role="img" aria-label="${getLocalizedField(project, "title")} preview"></div>
          <div class="project-content">
            <div class="project-meta">
              <span class="project-tag">${getLocalizedField(project, "tag")}</span>
              <span class="project-status">${getLocalizedField(project, "status")}</span>
            </div>
            <h3>${getLocalizedField(project, "title")}</h3>
            <p>${getLocalizedField(project, "description")}</p>
            ${
              project.href
                ? `<a class="button button-primary" href="${project.href}">${getLocalizedField(project, "label")}</a>`
                : `<button class="button button-secondary" type="button" disabled>${getLocalizedField(project, "label")}</button>`
            }
          </div>
        `;
      } else {
        card.innerHTML = `
          <div class="project-content">
            <div class="project-meta">
              <span class="project-tag">${getLocalizedField(project, "tag")}</span>
              <span class="project-status">${getLocalizedField(project, "status")}</span>
            </div>
            <h3>${getLocalizedField(project, "title")}</h3>
            <p>${getLocalizedField(project, "description")}</p>
            ${
              project.href
                ? `<a class="button button-secondary" href="${project.href}">${getLocalizedField(project, "label")}</a>`
                : `<button class="button button-secondary" type="button" disabled>${getLocalizedField(project, "label")}</button>`
            }
          </div>
        `;
      }

      technicalProjectsContainer.appendChild(card);
    });
  }

  function renderCreativeProjects() {
    if (!creativeProjectsContainer) {
      return;
    }

    creativeProjectsContainer.innerHTML = "";

    creativeProjects.forEach((project) => {
      const card = document.createElement("article");
      card.className = `gallery-card${project.size === "tall" ? " gallery-card-tall" : ""}`;
      card.innerHTML = `
        <div class="project-meta">
          <span class="creative-badge">${getLocalizedField(project, "tag")}</span>
          <span class="creative-status">${getLocalizedField(project, "status")}</span>
        </div>
        <h3>${getLocalizedField(project, "title")}</h3>
        <p>${getLocalizedField(project, "description")}</p>
        <button class="button button-secondary" type="button" disabled>${currentLanguage === "ar" ? "معاينة قريبًا" : "Preview Soon"}</button>
      `;
      creativeProjectsContainer.appendChild(card);
    });
  }

  function initializeTodoApp() {
    if (!todoForm || !todoInput || !todoList || !todoEmpty || !todoCount) {
      return;
    }

    const storageKey = "private-todo-items";
    let todos = [];
    let activeFilter = "all";

    function saveTodos() {
      try {
        localStorage.setItem(storageKey, JSON.stringify(todos));
      } catch (error) {
        // Ignore storage failures in restricted environments.
      }
    }

    function updateTodoMeta() {
      const remaining = todos.filter((todo) => !todo.completed).length;
      const completed = todos.filter((todo) => todo.completed).length;
      const label = currentLanguage === "ar"
        ? (remaining === 1 ? "مهمة متبقية" : "مهام متبقية")
        : (remaining === 1 ? "task left" : "tasks left");
      todoCount.textContent = `${remaining} ${label}`;
      if (openCount) {
        openCount.textContent = `${remaining}`;
      }
      if (doneCount) {
        doneCount.textContent = `${completed}`;
      }
    }

    function renderTodos() {
      todoList.innerHTML = "";
      const visibleTodos = todos.filter((todo) => {
        if (activeFilter === "open") {
          return !todo.completed;
        }
        if (activeFilter === "done") {
          return todo.completed;
        }
        return true;
      });

      visibleTodos.forEach((todo) => {
        const item = document.createElement("li");
        item.className = `todo-item${todo.completed ? " is-complete" : ""}`;

        const checkbox = document.createElement("button");
        checkbox.type = "button";
        checkbox.className = "todo-toggle";
        checkbox.setAttribute("aria-label", currentLanguage === "ar" ? `تحديد ${todo.text}` : `Mark ${todo.text} as ${todo.completed ? "incomplete" : "complete"}`);
        checkbox.textContent = currentLanguage === "ar" ? (todo.completed ? "تم" : "مفتوحة") : (todo.completed ? "Done" : "Open");
        checkbox.addEventListener("click", () => {
          todos = todos.map((entry) => (
            entry.id === todo.id ? { ...entry, completed: !entry.completed } : entry
          ));
          saveTodos();
          renderTodos();
        });

        const text = document.createElement("span");
        text.className = "todo-text";
        text.textContent = todo.text;

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.className = "todo-delete";
        removeButton.setAttribute("aria-label", currentLanguage === "ar" ? `حذف ${todo.text}` : `Delete ${todo.text}`);
        removeButton.textContent = currentLanguage === "ar" ? "حذف" : "Delete";
        removeButton.addEventListener("click", () => {
          todos = todos.filter((entry) => entry.id !== todo.id);
          saveTodos();
          renderTodos();
        });

        item.appendChild(checkbox);
        item.appendChild(text);
        item.appendChild(removeButton);
        todoList.appendChild(item);
      });

      todoEmpty.style.display = visibleTodos.length ? "none" : "block";
      updateTodoMeta();
    }

    try {
      const storedTodos = localStorage.getItem(storageKey);
      todos = storedTodos ? JSON.parse(storedTodos) : [];
    } catch (error) {
      todos = [];
    }

    todoForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const value = todoInput.value.trim();

      if (!value) {
        todoInput.focus();
        return;
      }

      todos.unshift({
        id: Date.now().toString(),
        text: value,
        completed: false
      });

      todoInput.value = "";
      saveTodos();
      renderTodos();
      todoInput.focus();
    });

    if (todoFilters) {
      const filterButtons = Array.from(todoFilters.querySelectorAll(".todo-filter"));
      filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
          activeFilter = button.dataset.filter || "all";
          filterButtons.forEach((entry) => entry.classList.remove("is-active"));
          button.classList.add("is-active");
          renderTodos();
        });
      });
    }

    if (todoClearCompleted) {
      todoClearCompleted.addEventListener("click", () => {
        todos = todos.filter((todo) => !todo.completed);
        saveTodos();
        renderTodos();
      });
    }

    renderTodos();
    window.__privateTodoRefresh = renderTodos;
  }

  function initializePrivateNotes() {
    if (!privateNotes) {
      return;
    }

    const notesKey = "private-notes-content";

    try {
      privateNotes.value = localStorage.getItem(notesKey) || "";
    } catch (error) {
      privateNotes.value = "";
    }

    privateNotes.addEventListener("input", () => {
      try {
        localStorage.setItem(notesKey, privateNotes.value);
      } catch (error) {
        // Ignore storage failures in restricted environments.
      }
    });
  }

  function initializeFocusTimer() {
    if (!focusTime || !focusStart || !focusPause || !focusReset || !focusStatus) {
      return;
    }

    const defaultSeconds = 25 * 60;
    let remainingSeconds = defaultSeconds;
    let intervalId = null;

    function renderFocusState(state) {
      focusStatus.dataset.state = state;
      const labels = {
        Ready: currentLanguage === "ar" ? "جاهز" : "Ready",
        Running: currentLanguage === "ar" ? "يعمل" : "Running",
        Paused: currentLanguage === "ar" ? "متوقف" : "Paused",
        Finished: currentLanguage === "ar" ? "انتهى" : "Finished"
      };
      focusStatus.textContent = labels[state] || state;
    }

    function renderTime() {
      const minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, "0");
      const seconds = String(remainingSeconds % 60).padStart(2, "0");
      focusTime.textContent = `${minutes}:${seconds}`;
    }

    function stopTimer(statusText) {
      if (intervalId) {
        window.clearInterval(intervalId);
        intervalId = null;
      }
      renderFocusState(statusText);
    }

    focusStart.addEventListener("click", () => {
      if (intervalId) {
        return;
      }
      renderFocusState("Running");
      intervalId = window.setInterval(() => {
        if (remainingSeconds <= 0) {
          stopTimer("Finished");
          return;
        }
        remainingSeconds -= 1;
        renderTime();
        if (remainingSeconds === 0) {
          stopTimer("Finished");
        }
      }, 1000);
    });

    focusPause.addEventListener("click", () => {
      stopTimer("Paused");
    });

    focusReset.addEventListener("click", () => {
      remainingSeconds = defaultSeconds;
      renderTime();
      stopTimer("Ready");
    });

    renderTime();
    renderFocusState("Ready");
    window.__focusLanguageRefresh = () => {
      renderFocusState(focusStatus.dataset.state || "Ready");
    };
  }

  function initializeContactForm() {
    if (!contactForm || !contactFeedback) {
      return;
    }

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      contactFeedback.textContent = currentLanguage === "ar"
        ? "تم تجهيز الرسالة بنجاح. يمكنك ربط الإرسال الفعلي لاحقًا."
        : "Message drafted successfully. You can customize backend delivery later.";
      contactForm.reset();
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextMode = body.classList.contains("light-mode") ? "dark" : "light";
      setTheme(nextMode);
    });
  }

  if (menuToggle && navPanel) {
    menuToggle.addEventListener("click", () => {
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      if (expanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });
  }

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (exitButton && fullscreenTerminal) {
    exitButton.addEventListener("click", () => {
      fullscreenTerminal.style.display = "none";
      fullscreenTerminal.setAttribute("aria-hidden", "true");
    });
  }

  window.addEventListener("scroll", () => {
    updateNavbarState();
    revealAbout();
    animateProgressBars();
    updateActiveNavLink();
    updateBackToTop();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
      closeMenu();
    }
  });

  try {
    currentLanguage = localStorage.getItem(languageStorageKey) || "en";
  } catch (error) {
    currentLanguage = "en";
  }

  createLanguageToggle();
  applyLanguage();
  initializeTheme();
  initializeLoader();
  initializeTypingEffect();
  initializeParticles();
  initializeAOS();
  initializeCursor();
  initializeTerminal();
  renderTechnicalProjects();
  renderCreativeProjects();
  initializeRepos();
  initializeTodoApp();
  initializePrivateNotes();
  initializeFocusTimer();
  initializeContactForm();
  updateNavbarState();
  revealAbout();
  animateProgressBars();
  updateActiveNavLink();
  updateBackToTop();
});

function checkPassword() {
  const passwordInput = document.getElementById("passwordInput");
  const errorMessage = document.getElementById("errorMessage");

  if (!passwordInput || !errorMessage) {
    return;
  }

  if (passwordInput.value === "135246") {
    window.location.href = "secret.html";
    return;
  }

  errorMessage.textContent = "Access denied";
}
