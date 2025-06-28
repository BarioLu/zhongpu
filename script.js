// 全局变量
let currentSlide = 0; // 当前轮播图索引
let slideInterval;    // 轮播图自动播放定时器
let isEnglish = false; // 当前语言标志

// 语言配置对象，包含所有页面的中英文文本
const translations = {
    zh: {
        // 导航
        home: "首页",
        about: "关于我们",
        products: "产品中心",
        contact: "联系我们",
        
        // 首页
        hero_title_1: "专业铝型材挤压制造商",
        hero_desc_1: "佛山市中普铝业有限公司致力于为客户提供高品质的铝型材产品",
        hero_title_2: "创新技术，优质服务",
        hero_desc_2: "采用先进挤压工艺，确保产品品质稳定可靠",
        hero_title_3: "全球供应链解决方案",
        hero_desc_3: "为建筑、工业、装饰等领域提供专业铝型材解决方案",
        view_products: "查看产品",
        learn_more: "了解更多",
        contact_us: "联系我们",
        
        // 关于我们页面
        about_title: "关于我们",
        about_subtitle: "了解中普铝业的发展历程和企业文化",
        company_intro: "公司简介",
        company_desc_1: "佛山市中普铝业有限公司成立于2010年，是一家专业从事铝型材挤压生产的高新技术企业。公司位于广东省佛山市南海区，地理位置优越，交通便利。",
        company_desc_2: "经过多年发展，公司已建立了完善的生产体系和质量管理系统，拥有多条先进的挤压生产线，年生产能力达到50,000吨。我们的产品广泛应用于建筑、工业、装饰、交通运输等领域。",
        company_desc_3: "公司始终坚持'质量第一、客户至上、诚信经营、持续创新'的经营理念，致力于为客户提供高品质、多样化的铝型材产品和专业的技术服务。",
        years_experience: "行业经验",
        annual_capacity: "年生产能力",
        customers: "客户信赖",
        service_support: "服务支持",
        history: "发展历程",
        culture: "企业文化",
        vision: "企业愿景",
        vision_desc: "成为铝型材行业的领军企业，为客户创造更大价值",
        mission: "企业使命",
        mission_desc: "提供高品质铝型材产品，推动行业技术进步",
        values: "核心价值观",
        values_desc: "诚信、创新、品质、服务",
        team_spirit: "团队精神",
        team_desc: "团结协作，追求卓越，共同成长",
        equipment: "生产设备",
        equipment_title: "先进的生产设备",
        equipment_desc: "公司拥有多条国际先进的挤压生产线，包括：",
        quality_assurance: "质量保证",
        quality_system: "质量管理体系",
        quality_system_desc: "通过ISO9001:2015质量管理体系认证，建立完善的质量管理制度",
        testing_equipment: "检测设备",
        testing_desc: "配备先进的检测设备，对产品进行全方位质量检测",
        quality_commitment: "品质承诺",
        quality_commit_desc: "承诺产品质量，提供完善的售后服务和技术支持",
        
        // 产品页面
        products_title: "产品中心",
        products_subtitle: "高品质铝型材产品，满足您的各种需求",
        wave_board: "波浪板",
        greatwall_board: "长城板",
        aluminum_square: "铝方管",
        wave_desc: "高品质铝制波浪板，采用先进挤压工艺制造，具有优异的耐腐蚀性、抗冲击性和装饰效果。广泛应用于建筑外墙、室内装饰、工业设备等领域。",
        greatwall_desc: "经典长城板设计，采用优质铝合金材料，具有独特的装饰效果和良好的实用性。适用于建筑外墙、室内装饰、广告牌等领域。",
        square_desc: "标准铝方管产品，规格齐全，品质稳定。采用优质铝合金材料，具有轻质、高强度、耐腐蚀等特点，广泛应用于建筑、工业、装饰等领域。",
        product_features: "产品特点",
        technical_params: "技术参数",
        material: "材质",
        thickness: "厚度",
        width: "宽度",
        length: "长度",
        surface_treatment: "表面处理",
        color: "颜色",
        specification: "规格",
        wall_thickness: "壁厚",
        tolerance: "公差",
        applications: "应用领域",
        construction: "建筑装饰",
        construction_desc: "外墙装饰、室内装修、门窗框架等",
        industry: "工业设备",
        industry_desc: "机械设备框架、输送设备、工作台等",
        transportation: "交通运输",
        transport_desc: "汽车配件、轨道交通、船舶装饰等",
        household: "家居用品",
        household_desc: "家具框架、装饰品、日用品等",
        custom_inquiry: "需要定制产品？",
        custom_desc: "我们提供专业的定制服务，可根据您的具体需求设计和生产铝型材产品",
        
        // 联系我们页面
        contact_title: "联系我们",
        contact_subtitle: "随时为您提供专业的服务和支持",
        phone_consultation: "电话咨询",
        email_contact: "邮箱联系",
        company_address: "公司地址",
        business_hours: "营业时间",
        online_consultation: "在线咨询",
        consultation_desc: "请填写以下信息，我们会尽快与您联系",
        name: "姓名",
        company_name: "公司名称",
        phone: "联系电话",
        email: "邮箱地址",
        interested_product: "感兴趣的产品",
        select_product: "请选择产品",
        custom_product: "定制产品",
        inquiry_content: "咨询内容",
        inquiry_placeholder: "请详细描述您的需求...",
        submit_inquiry: "提交咨询",
        company_location: "公司位置",
        map_loading: "地图加载中...",
        traffic_guide: "交通指南",
        driving: "自驾车",
        driving_desc: "从佛山市区沿南海大道前往狮山镇工业园",
        bus: "公交车",
        bus_desc: "乘坐南海公交K5路至狮山镇工业园站",
        subway: "地铁",
        subway_desc: "乘坐广佛线至狮山站，转乘公交前往",
        service_promise: "服务承诺",
        response_24h: "24小时响应",
        response_desc: "收到咨询后24小时内回复",
        technical_support: "技术支持",
        tech_desc: "提供专业的技术咨询和解决方案",
        fast_delivery: "快速交付",
        delivery_desc: "标准产品7-15天交付",
        quality_guarantee: "质量保证",
        quality_desc: "所有产品提供质量保证",
        faq: "常见问题",
        faq_1: "如何选择合适的铝型材产品？",
        faq_1_answer: "我们建议您根据使用环境、承载要求、装饰需求等因素来选择合适的产品。我们的技术团队可以为您提供专业的选型建议。",
        faq_2: "是否提供定制服务？",
        faq_2_answer: "是的，我们提供专业的定制服务。可以根据您的具体需求设计和生产铝型材产品，最小起订量请咨询我们的销售团队。",
        faq_3: "产品交付周期是多久？",
        faq_3_answer: "标准产品通常7-15天交付，定制产品根据复杂程度可能需要15-30天。我们会根据您的具体需求提供准确的交付时间。",
        faq_4: "是否提供安装指导？",
        faq_4_answer: "是的，我们提供详细的安装指导和技术支持。对于大型项目，我们还可以派遣技术人员现场指导安装。",
        
        // 页脚
        company_full_name: "佛山市中普铝业有限公司",
        company_desc: "专业铝型材挤压制造商",
        company_mission: "致力于为客户提供高品质的铝型材产品",
        phone_label: "电话",
        email_label: "邮箱",
        address_label: "地址",
        quick_links: "快速链接",
        copyright: "保留所有权利"
    },
    en: {
        // 导航
        home: "Home",
        about: "About Us",
        products: "Products",
        contact: "Contact",
        
        // 首页
        hero_title_1: "Professional Aluminum Extrusion Manufacturer",
        hero_desc_1: "Foshan Zhongpu Aluminum Industry Co., Ltd. is committed to providing high-quality aluminum profiles",
        hero_title_2: "Innovative Technology, Quality Service",
        hero_desc_2: "Advanced extrusion technology ensures stable and reliable product quality",
        hero_title_3: "Global Supply Chain Solutions",
        hero_desc_3: "Professional aluminum profile solutions for construction, industry, and decoration",
        view_products: "View Products",
        learn_more: "Learn More",
        contact_us: "Contact Us",
        
        // 关于我们页面
        about_title: "About Us",
        about_subtitle: "Learn about Zhongpu Aluminum's development history and corporate culture",
        company_intro: "Company Introduction",
        company_desc_1: "Foshan Zhongpu Aluminum Industry Co., Ltd. was established in 2010 and is a high-tech enterprise specializing in aluminum profile extrusion production. The company is located in Nanhai District, Foshan City, Guangdong Province, with excellent geographical location and convenient transportation.",
        company_desc_2: "After years of development, the company has established a complete production system and quality management system, with multiple advanced extrusion production lines and an annual production capacity of 50,000 tons. Our products are widely used in construction, industry, decoration, transportation and other fields.",
        company_desc_3: "The company always adheres to the business philosophy of 'Quality First, Customer First, Honest Operation, Continuous Innovation' and is committed to providing customers with high-quality, diversified aluminum profile products and professional technical services.",
        years_experience: "Years Experience",
        annual_capacity: "Annual Capacity",
        customers: "Customers",
        service_support: "Service Support",
        history: "Development History",
        culture: "Corporate Culture",
        vision: "Corporate Vision",
        vision_desc: "To become a leading enterprise in the aluminum profile industry and create greater value for customers",
        mission: "Corporate Mission",
        mission_desc: "Provide high-quality aluminum profile products and promote industry technological progress",
        values: "Core Values",
        values_desc: "Integrity, Innovation, Quality, Service",
        team_spirit: "Team Spirit",
        team_desc: "Unity and collaboration, pursuit of excellence, grow together",
        equipment: "Production Equipment",
        equipment_title: "Advanced Production Equipment",
        equipment_desc: "The company has multiple internationally advanced extrusion production lines, including:",
        quality_assurance: "Quality Assurance",
        quality_system: "Quality Management System",
        quality_system_desc: "Passed ISO9001:2015 quality management system certification and established a complete quality management system",
        testing_equipment: "Testing Equipment",
        testing_desc: "Equipped with advanced testing equipment for comprehensive quality testing of products",
        quality_commitment: "Quality Commitment",
        quality_commit_desc: "Commit to product quality and provide comprehensive after-sales service and technical support",
        
        // 产品页面
        products_title: "Products",
        products_subtitle: "High-quality aluminum profile products to meet your various needs",
        wave_board: "Wave Board",
        greatwall_board: "Great Wall Board",
        aluminum_square: "Aluminum Square Tube",
        wave_desc: "High-quality aluminum panels manufactured with advanced extrusion technology, featuring excellent corrosion resistance, impact resistance, and decorative effects. Widely used in building facades, interior decoration, industrial equipment, and more.",
        greatwall_desc: "Classic Great Wall board design, using high-quality aluminum alloy materials, with unique decorative effects and good practicality. Suitable for building facades, interior decoration, billboards and other fields.",
        square_desc: "Standard aluminum square tube products, complete specifications, stable quality. Using high-quality aluminum alloy materials, with light weight, high strength, corrosion resistance and other characteristics, widely used in construction, industry, decoration and other fields.",
        product_features: "Product Features",
        technical_params: "Technical Parameters",
        material: "Material",
        thickness: "Thickness",
        width: "Width",
        length: "Length",
        surface_treatment: "Surface Treatment",
        color: "Color",
        specification: "Specification",
        wall_thickness: "Wall Thickness",
        tolerance: "Tolerance",
        applications: "Applications",
        construction: "Construction & Decoration",
        construction_desc: "Exterior wall decoration, interior decoration, door and window frames, etc.",
        industry: "Industrial Equipment",
        industry_desc: "Mechanical equipment frames, conveying equipment, workbenches, etc.",
        transportation: "Transportation",
        transport_desc: "Automotive parts, rail transit, ship decoration, etc.",
        household: "Household Items",
        household_desc: "Furniture frames, decorations, daily necessities, etc.",
        custom_inquiry: "Need Custom Products?",
        custom_desc: "We provide professional customization services and can design and produce aluminum profile products according to your specific needs",
        
        // 联系我们页面
        contact_title: "Contact Us",
        contact_subtitle: "Always provide you with professional service and support",
        phone_consultation: "Phone Consultation",
        email_contact: "Email Contact",
        company_address: "Company Address",
        business_hours: "Business Hours",
        online_consultation: "Online Consultation",
        consultation_desc: "Please fill in the following information and we will contact you as soon as possible",
        name: "Name",
        company_name: "Company Name",
        phone: "Phone",
        email: "Email",
        interested_product: "Interested Product",
        select_product: "Please Select Product",
        custom_product: "Custom Product",
        inquiry_content: "Inquiry Content",
        inquiry_placeholder: "Please describe your needs in detail...",
        submit_inquiry: "Submit Inquiry",
        company_location: "Company Location",
        map_loading: "Map Loading...",
        traffic_guide: "Traffic Guide",
        driving: "Driving",
        driving_desc: "From Foshan city center along Nanhai Avenue to Shishan Town Industrial Park",
        bus: "Bus",
        bus_desc: "Take Nanhai Bus K5 to Shishan Town Industrial Park Station",
        subway: "Subway",
        subway_desc: "Take Guangfo Line to Shishan Station, then transfer to bus",
        service_promise: "Service Promise",
        response_24h: "24-Hour Response",
        response_desc: "Respond within 24 hours after receiving inquiry",
        technical_support: "Technical Support",
        tech_desc: "Provide professional technical consultation and solutions",
        fast_delivery: "Fast Delivery",
        delivery_desc: "Standard products delivered in 7-15 days",
        quality_guarantee: "Quality Guarantee",
        quality_desc: "All products come with quality guarantee",
        faq: "FAQ",
        faq_1: "How to choose the right aluminum profile product?",
        faq_1_answer: "We recommend choosing the right product based on factors such as usage environment, load requirements, and decorative needs. Our technical team can provide you with professional selection advice.",
        faq_2: "Do you provide customization services?",
        faq_2_answer: "Yes, we provide professional customization services. We can design and produce aluminum profile products according to your specific needs. Please consult our sales team for minimum order quantities.",
        faq_3: "What is the product delivery cycle?",
        faq_3_answer: "Standard products are usually delivered in 7-15 days, and custom products may take 15-30 days depending on complexity. We will provide accurate delivery times based on your specific needs.",
        faq_4: "Do you provide installation guidance?",
        faq_4_answer: "Yes, we provide detailed installation guidance and technical support. For large projects, we can also send technical personnel to provide on-site installation guidance.",
        
        // 页脚
        company_full_name: "Foshan Zhongpu Aluminum Industry Co., Ltd.",
        company_desc: "Professional Aluminum Extrusion Manufacturer",
        company_mission: "Committed to providing high-quality aluminum profile products",
        phone_label: "Phone",
        email_label: "Email",
        address_label: "Address",
        quick_links: "Quick Links",
        copyright: "All Rights Reserved"
    }
};

// DOM加载完成后执行初始化
// 包括轮播图、菜单、FAQ、产品切换、表单、滚动、语言切换、产品画廊等
// 这样保证所有功能在页面加载后可用
document.addEventListener('DOMContentLoaded', function() {
    // 初始化轮播图
    initSlider();
    
    // 初始化移动端菜单
    initMobileMenu();
    
    // 初始化FAQ
    initFAQ();
    
    // 初始化产品切换
    initProductTabs();
    
    // 初始化表单验证
    initFormValidation();
    
    // 初始化滚动效果
    initScrollEffects();
    
    // 初始化语言切换
    initLanguageToggle();
    
    // 初始化产品画廊
    initProductGallery();
});

// 初始化语言切换下拉菜单及事件
// 支持多语言切换，分层法显示/隐藏内容
function initLanguageToggle(skipSetLanguage) {
    const languageDropdowns = document.querySelectorAll('.language-dropdown');
    languageDropdowns.forEach(dropdown => {
        const languageBtn = dropdown.querySelector('.language-btn');
        const languageMenu = dropdown.querySelector('.language-menu');
        const languageOptions = dropdown.querySelectorAll('.language-option');

        // 移除旧事件监听器（通过克隆节点实现）
        const newBtn = languageBtn.cloneNode(true);
        languageBtn.parentNode.replaceChild(newBtn, languageBtn);
        const btn = dropdown.querySelector('.language-btn');

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });

        languageOptions.forEach(option => {
            const newOption = option.cloneNode(true);
            option.parentNode.replaceChild(newOption, option);
        });
        const newOptions = dropdown.querySelectorAll('.language-option');
        newOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const lang = option.getAttribute('data-lang');
                setLanguage(lang);
                dropdown.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    });
    if (!skipSetLanguage) {
        setLanguage('zh');
    }
}

// 设置当前语言，并切换所有分层内容的显示
function setLanguage(lang) {
    isEnglish = lang === 'en';
    
    // 现在使用分层法，按钮文本会通过 .lang-zh/.lang-en 的显隐自动切换
    // 不需要直接修改按钮的文本节点
    
    // 更新语言选项的激活状态
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach((option) => {
        const optionLang = option.getAttribute('data-lang');
        if (optionLang === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
    
    // 更新页面内容
    updatePageContent();
    
    // 重新绑定事件监听器
    initLanguageToggle(true);
}

// 轮播图初始化，自动播放与鼠标悬停暂停
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0) return;
    
    // 自动播放
    slideInterval = setInterval(nextSlide, 5000);
    
    // 鼠标悬停时暂停
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.addEventListener('mouseenter', () => clearInterval(slideInterval));
        hero.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 5000);
        });
    }
}

// 显示指定索引的轮播图
function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if (n >= slides.length) currentSlide = 0;
    if (n < 0) currentSlide = slides.length - 1;
    
    // 隐藏所有幻灯片
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // 显示当前幻灯片
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

// 切换到下一张轮播图
function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

// 切换轮播图（前/后）
function changeSlide(n) {
    currentSlide += n;
    showSlide(currentSlide);
}

// 跳转到指定轮播图
function currentSlide(n) {
    currentSlide = n - 1;
    showSlide(currentSlide);
}

// 移动端菜单初始化，支持汉堡菜单展开/收起
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // 点击菜单项时关闭菜单
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// 更新页面所有内容（导航、标题、首页、关于、产品、联系我们、页脚等）
function updatePageContent() {
    const lang = isEnglish ? 'en' : 'zh';
    const texts = translations[lang];
    
    // 更新导航
    updateNavigation(texts);
    
    // 更新页面标题
    updatePageTitles(texts);
    
    // 更新首页内容
    updateHomeContent(texts);
    
    // 更新关于我们页面内容
    updateAboutContent(texts);
    
    // 更新产品页面内容
    updateProductsContent();
    
    // 更新联系我们页面内容
    updateContactContent(texts);
    
    // 更新页脚
    updateFooter(texts);

    // 更新关于我们部分
    const aboutTitle = document.querySelector('.about-text h2');
    if (aboutTitle) aboutTitle.textContent = texts.about_title;
    
    const aboutDesc = document.querySelector('.about-text p');
    if (aboutDesc) aboutDesc.textContent = texts.about_desc;
    
    // 更新公司理念标语
    const companySlogan = document.getElementById('company-slogan');
    if (companySlogan) {
        let slogan = texts.company_slogan;
        // 优先使用 window.LanguageUtils 的 company_slogan（如有）
        if (window.LanguageUtils && window.LanguageUtils.translations && window.LanguageUtils.translations[lang] && window.LanguageUtils.translations[lang].company_slogan) {
            slogan = window.LanguageUtils.translations[lang].company_slogan;
        }
        companySlogan.textContent = slogan;
    }
    
    // 统一更新所有 .lang-zh/.lang-en 分层内容的显隐
    document.querySelectorAll('.lang-zh').forEach(el => {
        el.style.display = (lang === 'zh') ? '' : 'none';
    });
    document.querySelectorAll('.lang-en').forEach(el => {
        el.style.display = (lang === 'en') ? '' : 'none';
    });
}

// 更新导航栏文本
function updateNavigation(texts) {
    const navLinks = document.querySelectorAll('.nav-link');
    if (navLinks.length >= 4) {
        navLinks[0].textContent = texts.home;
        navLinks[1].textContent = texts.about;
        navLinks[2].textContent = texts.products;
        navLinks[3].textContent = texts.contact;
    }
}

// 更新页面标题
function updatePageTitles(texts) {
    // 更新页面标题
    const pageHeader = document.querySelector('.page-header h1');
    if (pageHeader) {
        const currentPage = window.location.pathname.split('/').pop();
        switch(currentPage) {
            case 'about.html':
                pageHeader.textContent = texts.about_title;
                break;
            case 'products.html':
                pageHeader.textContent = texts.products_title;
                break;
            case 'contact.html':
                pageHeader.textContent = texts.contact_title;
                break;
        }
    }
    
    const pageSubtitle = document.querySelector('.page-header p');
    if (pageSubtitle) {
        const currentPage = window.location.pathname.split('/').pop();
        switch(currentPage) {
            case 'about.html':
                pageSubtitle.textContent = texts.about_subtitle;
                break;
            case 'products.html':
                pageSubtitle.textContent = texts.products_subtitle;
                break;
            case 'contact.html':
                pageSubtitle.textContent = texts.contact_subtitle;
                break;
        }
    }
}

// 更新首页内容（轮播图、产品卡片等）
function updateHomeContent(texts) {
    // 更新轮播图内容
    const slideTitles = document.querySelectorAll('.slide-title');
    const slideDescriptions = document.querySelectorAll('.slide-description');
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    if (slideTitles.length >= 3) {
        slideTitles[0].textContent = texts.hero_title_1;
        slideTitles[1].textContent = texts.hero_title_2;
        slideTitles[2].textContent = texts.hero_title_3;
    }
    
    if (slideDescriptions.length >= 3) {
        slideDescriptions[0].textContent = texts.hero_desc_1;
        slideDescriptions[1].textContent = texts.hero_desc_2;
        slideDescriptions[2].textContent = texts.hero_desc_3;
    }
    
    // 只更新span内容，不覆盖a标签结构
    if (ctaButtons.length >= 3) {
        const zhSpans = ctaButtons[0].querySelectorAll('.lang-zh');
        const enSpans = ctaButtons[0].querySelectorAll('.lang-en');
        if (zhSpans.length > 0) zhSpans[0].textContent = texts.view_products;
        if (enSpans.length > 0) enSpans[0].textContent = texts.view_products;
        // 其它按钮同理
        const zhSpans2 = ctaButtons[1].querySelectorAll('.lang-zh');
        const enSpans2 = ctaButtons[1].querySelectorAll('.lang-en');
        if (zhSpans2.length > 0) zhSpans2[0].textContent = texts.learn_more;
        if (enSpans2.length > 0) enSpans2[0].textContent = texts.learn_more;
        const zhSpans3 = ctaButtons[2].querySelectorAll('.lang-zh');
        const enSpans3 = ctaButtons[2].querySelectorAll('.lang-en');
        if (zhSpans3.length > 0) zhSpans3[0].textContent = texts.contact_us;
        if (enSpans3.length > 0) enSpans3[0].textContent = texts.contact_us;
    }
    
    // 更新产品卡片
    const productCards = document.querySelectorAll('.product-card h3');
    if (productCards.length >= 3) {
        productCards[0].textContent = texts.wave_board;
        productCards[1].textContent = texts.greatwall_board;
        productCards[2].textContent = texts.aluminum_square;
    }
}

// 更新关于我们页面内容
function updateAboutContent(texts) {
    // 更新公司介绍
    const aboutText = document.querySelector('.intro-text h2');
    if (aboutText) aboutText.textContent = texts.company_intro;
    
    const aboutParagraphs = document.querySelectorAll('.intro-text p');
    if (aboutParagraphs.length >= 3) {
        aboutParagraphs[0].textContent = texts.company_desc_1;
        aboutParagraphs[1].textContent = texts.company_desc_2;
        aboutParagraphs[2].textContent = texts.company_desc_3;
    }
    
    // 更新统计数据
    const statLabels = document.querySelectorAll('.stat-item p');
    if (statLabels.length >= 4) {
        statLabels[0].textContent = texts.years_experience;
        statLabels[1].textContent = texts.annual_capacity;
        statLabels[2].textContent = texts.customers;
        statLabels[3].textContent = texts.service_support;
    }
    
    // 更新企业文化
    const cultureItems = document.querySelectorAll('.culture-item h3');
    if (cultureItems.length >= 4) {
        cultureItems[0].textContent = texts.vision;
        cultureItems[1].textContent = texts.mission;
        cultureItems[2].textContent = texts.values;
        cultureItems[3].textContent = texts.team_spirit;
    }
    
    const cultureDescs = document.querySelectorAll('.culture-item p');
    if (cultureDescs.length >= 4) {
        cultureDescs[0].textContent = texts.vision_desc;
        cultureDescs[1].textContent = texts.mission_desc;
        cultureDescs[2].textContent = texts.values_desc;
        cultureDescs[3].textContent = texts.team_desc;
    }
}

// 更新产品中心页面内容（分层法）
function updateProductsContent() {
    const lang = LanguageUtils ? LanguageUtils.getCurrentLanguage() : (window.isEnglish ? 'en' : 'zh');
    document.querySelectorAll('.lang-zh').forEach(el => el.style.display = (lang === 'zh' ? '' : 'none'));
    document.querySelectorAll('.lang-en').forEach(el => el.style.display = (lang === 'en' ? '' : 'none'));
}

// 更新联系我们页面内容
function updateContactContent(texts) {
    // 更新联系信息标题
    const contactTitles = document.querySelectorAll('.contact-details h3');
    if (contactTitles.length >= 4) {
        contactTitles[0].textContent = texts.phone_consultation;
        contactTitles[1].textContent = texts.email_contact;
        contactTitles[2].textContent = texts.company_address;
        contactTitles[3].textContent = texts.business_hours;
    }
    
    // 更新表单标题
    const formTitle = document.querySelector('.contact-form h2');
    if (formTitle) formTitle.textContent = texts.online_consultation;
    
    const formDesc = document.querySelector('.contact-form p');
    if (formDesc) formDesc.textContent = texts.consultation_desc;
    
    // 更新表单标签
    const formLabels = document.querySelectorAll('.form-group label');
    if (formLabels.length >= 6) {
        formLabels[0].textContent = texts.name + ' *';
        formLabels[1].textContent = texts.company_name;
        formLabels[2].textContent = texts.phone + ' *';
        formLabels[3].textContent = texts.email + ' *';
        formLabels[4].textContent = texts.interested_product;
        formLabels[5].textContent = texts.inquiry_content + ' *';
    }
    
    // 更新表单选项
    const productSelect = document.querySelector('#product');
    if (productSelect) {
        const options = productSelect.querySelectorAll('option');
        if (options.length >= 5) {
            options[0].textContent = texts.select_product;
            options[1].textContent = texts.wave_board;
            options[2].textContent = texts.greatwall_board;
            options[3].textContent = texts.aluminum_square;
            options[4].textContent = texts.custom_product;
        }
    }
    
    // 更新提交按钮
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) submitBtn.textContent = texts.submit_inquiry;
    
    // 更新地图标题
    const mapTitle = document.querySelector('.contact-map h2');
    if (mapTitle) mapTitle.textContent = texts.company_location;
    
    // 更新交通指南
    const trafficTitle = document.querySelector('.map-info h3');
    if (trafficTitle) trafficTitle.textContent = texts.traffic_guide;
    
    const transportItems = document.querySelectorAll('.transport-item h4');
    if (transportItems.length >= 3) {
        transportItems[0].textContent = texts.driving;
        transportItems[1].textContent = texts.bus;
        transportItems[2].textContent = texts.subway;
    }
    
    const transportDescs = document.querySelectorAll('.transport-item p');
    if (transportDescs.length >= 3) {
        transportDescs[0].textContent = texts.driving_desc;
        transportDescs[1].textContent = texts.bus_desc;
        transportDescs[2].textContent = texts.subway_desc;
    }
    
    // 更新服务承诺
    const promiseTitle = document.querySelector('.service-promise h2');
    if (promiseTitle) promiseTitle.textContent = texts.service_promise;
    
    const promiseItems = document.querySelectorAll('.promise-item h3');
    if (promiseItems.length >= 4) {
        promiseItems[0].textContent = texts.response_24h;
        promiseItems[1].textContent = texts.technical_support;
        promiseItems[2].textContent = texts.fast_delivery;
        promiseItems[3].textContent = texts.quality_guarantee;
    }
    
    const promiseDescs = document.querySelectorAll('.promise-item p');
    if (promiseDescs.length >= 4) {
        promiseDescs[0].textContent = texts.response_desc;
        promiseDescs[1].textContent = texts.tech_desc;
        promiseDescs[2].textContent = texts.delivery_desc;
        promiseDescs[3].textContent = texts.quality_desc;
    }
    
    // 更新FAQ
    const faqTitle = document.querySelector('.faq-section h2');
    if (faqTitle) faqTitle.textContent = texts.faq;
    
    const faqQuestions = document.querySelectorAll('.faq-question h3');
    if (faqQuestions.length >= 4) {
        faqQuestions[0].textContent = texts.faq_1;
        faqQuestions[1].textContent = texts.faq_2;
        faqQuestions[2].textContent = texts.faq_3;
        faqQuestions[3].textContent = texts.faq_4;
    }
    
    const faqAnswers = document.querySelectorAll('.faq-answer p');
    if (faqAnswers.length >= 4) {
        faqAnswers[0].textContent = texts.faq_1_answer;
        faqAnswers[1].textContent = texts.faq_2_answer;
        faqAnswers[2].textContent = texts.faq_3_answer;
        faqAnswers[3].textContent = texts.faq_4_answer;
    }
}

// 更新页脚内容
function updateFooter(texts) {
    const footerSections = document.querySelectorAll('.footer-section');
    if (footerSections.length >= 3) {
        const companySection = footerSections[0];
        const contactSection = footerSections[1];
        const linksSection = footerSections[2];
        
        // 更新公司信息
        const companyTitle = companySection.querySelector('h3');
        if (companyTitle) companyTitle.textContent = texts.company_full_name;
        
        const companyDesc = companySection.querySelectorAll('p');
        if (companyDesc.length >= 2) {
            companyDesc[0].textContent = texts.company_desc;
            companyDesc[1].textContent = texts.company_mission;
        }
        
        // 更新联系方式标题
        const contactTitle = contactSection.querySelector('h3');
        if (contactTitle) contactTitle.textContent = texts.contact;
        
        // 更新快速链接标题
        const linksTitle = linksSection.querySelector('h3');
        if (linksTitle) linksTitle.textContent = texts.quick_links;
    }
    
    // 更新版权信息
    const copyright = document.querySelector('.footer-bottom p');
    if (copyright) {
        const year = new Date().getFullYear();
        copyright.textContent = `© ${year} ${texts.company_full_name}. ${texts.copyright}.`;
    }
}

// 产品标签切换功能初始化
function initProductTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = btn.getAttribute('data-product');
            showProduct(productId);
        });
    });
}

// 切换显示指定产品区块
function showProduct(productId) {
    // 更新标签按钮状态
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-product') === productId) {
            btn.classList.add('active');
        }
    });
    
    // 更新产品区域显示
    const productSections = document.querySelectorAll('.product-section');
    productSections.forEach(section => {
        section.classList.remove('active');
        if (section.id === productId) {
            section.classList.add('active');
        }
    });
}

// FAQ功能初始化，绑定点击事件
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            toggleFAQ(question);
        });
    });
}

// 切换FAQ展开/收起
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // 关闭其他FAQ
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // 切换当前FAQ
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// 表单验证初始化，绑定提交事件
function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', submitForm);
    }
}

// 表单提交处理，含简单校验和模拟提交
function submitForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // 简单的表单验证
    if (!data.name || !data.phone || !data.email || !data.message) {
        alert('请填写所有必填字段');
        return;
    }
    
    // 邮箱格式验证
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('请输入有效的邮箱地址');
        return;
    }
    
    // 模拟表单提交
    const submitBtn = event.target.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = '提交中...';
    submitBtn.disabled = true;
    
    // 模拟API调用
    setTimeout(() => {
        alert('感谢您的咨询！我们会尽快与您联系。');
        event.target.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// 页面滚动相关效果初始化
function initScrollEffects() {
    // 导航栏滚动效果
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // 滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    const animatedElements = document.querySelectorAll('.product-card, .feature-item, .culture-item, .quality-item, .application-item, .promise-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// 图片上传处理
function uploadImage(input) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.querySelector('.image-preview');
            if (preview) {
                preview.src = e.target.result;
                preview.style.display = 'block';
            }
        };
        reader.readAsDataURL(file);
    }
}

// 平滑滚动到指定锚点
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 回到顶部按钮功能
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 添加回到顶部按钮
function addBackToTopButton() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.onclick = scrollToTop;
    
    // 添加样式
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #3498db;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 18px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(backToTopBtn);
    
    // 显示/隐藏按钮
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });
}

// 页面加载完成后添加返回顶部按钮
document.addEventListener('DOMContentLoaded', addBackToTopButton);

// 导出函数供HTML调用
window.toggleLanguage = toggleLanguage;
window.changeSlide = changeSlide;
window.currentSlide = currentSlide;
window.showProduct = showProduct;
window.toggleFAQ = toggleFAQ;
window.submitForm = submitForm;
window.uploadImage = uploadImage;
window.smoothScroll = smoothScroll;
window.scrollToTop = scrollToTop;

function initProductGallery() {
    document.querySelectorAll('.product-gallery').forEach(function(gallery) {
        const mainImg = gallery.querySelector('.gallery-image');
        const thumbItems = gallery.querySelectorAll('.thumb-item');
        thumbItems.forEach(function(thumb) {
            thumb.addEventListener('click', function() {
                // 切换主图
                const imgSrc = thumb.getAttribute('data-img');
                if (mainImg && imgSrc) {
                    mainImg.src = imgSrc;
                }
                // 高亮当前缩略图
                thumbItems.forEach(function(item) {
                    item.classList.remove('active');
                });
                thumb.classList.add('active');
            });
        });
    });
} 