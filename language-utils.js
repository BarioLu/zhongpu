// 通用语言切换工具
const LanguageUtils = {
    // 翻译内容
    translations: {
        zh: {
            home: "首页",
            about: "关于我们", 
            products: "产品中心",
            contact: "联系我们",
            // 首页内容
            hero_title_1: "专业铝型材挤压制造商",
            hero_desc_1: "佛山市中普铝业有限公司致力于为客户提供高品质的铝型材产品",
            hero_title_2: "创新技术，优质服务",
            hero_desc_2: "采用先进挤压工艺，确保产品品质稳定可靠",
            hero_title_3: "全球供应链解决方案",
            hero_desc_3: "为建筑、工业、装饰等领域提供专业铝型材解决方案",
            view_products: "查看产品",
            learn_more: "了解更多",
            contact_us: "联系我们",
            about_title: "关于中普铝业",
            about_desc: "佛山市中普铝业有限公司是一家专业从事铝型材挤压生产的企业，拥有先进的生产设备和专业的技术团队。我们致力于为客户提供高品质、多样化的铝型材产品，广泛应用于建筑、工业、装饰等领域。",
            products_title: "产品中心",
            decor_board: "装饰铝型材",
            decor_desc: "适用于建筑装饰、幕墙、家居等多种场景的高品质铝型材，包含波浪板、长城板等多种造型，满足不同装饰需求。",
            industrial_board: "工业铝型材",
            industrial_desc: "以高性能工业铝型材为核心，重塑轻量化智造未来。我们的铝型材精选优质铝合金，经精密挤压工艺成型，兼具轻质高强（密度仅为钢材 1/3，承载能力出众）、卓越耐蚀（天然氧化膜抵御恶劣环境）、灵活易装（模块化槽口设计，快速搭建无焊接）三大优势，更支持定制化表面处理与异形截面开发。从自动化生产线框架到新能源散热组件，我们以绿色环保、高性价比的解决方案，为工业领域提供可靠的结构支撑与创新可能。",
            aluminum_square: "铝方管",
            features_title: "我们的优势",
            company_name: "佛山市中普铝业有限公司",
            company_desc: "专业铝型材挤压制造商",
            company_mission: "致力于为客户提供高品质的铝型材产品",
            company_slogan: "公司秉承\"质量第一、客户至上\"的经营理念，通过持续的技术创新和品质管理，赢得了广大客户的信赖和支持",
            // 关于我们页面
            page_title: "关于我们",
            page_subtitle: "了解中普铝业的发展历程和企业文化",
            company_intro: "公司简介",
            company_desc_1: "佛山市中普铝业有限公司成立于2010年，是一家专业从事铝型材挤压生产的高新技术企业。公司位于广东省佛山市南海区，地理位置优越，交通便利。",
            company_desc_2: "经过多年发展，公司已建立了完善的生产体系和质量管理系统，拥有多条先进的挤压生产线，年生产能力达到50,000吨。我们的产品广泛应用于建筑、工业、装饰、交通运输等领域。",
            company_desc_3: "公司始终坚持质量第一、客户至上、诚信经营、持续创新的经营理念，致力于为客户提供高品质、多样化的铝型材产品和专业的技术服务。",
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
            products_page_title: "产品中心",
            products_page_subtitle: "高品质铝型材产品，满足您的各种需求",
            wave_desc: "高品质铝制波浪板，采用先进挤压工艺制造，具有优异的耐腐蚀性、抗冲击性和装饰效果。广泛应用于建筑外墙、室内装饰、工业设备等领域。",
            greatwall_desc: "经典长城板设计，采用优质铝合金材料，具有独特的装饰效果和良好的实用性。适用于建筑外墙、室内装饰、广告牌等领域。",
            square_desc: "以高性能工业铝型材为核心，重塑轻量化智造未来。我们的铝型材精选优质铝合金，经精密挤压工艺成型，兼具轻质高强（密度仅为钢材 1/3，承载能力出众）、卓越耐蚀（天然氧化膜抵御恶劣环境）、灵活易装（模块化槽口设计，快速搭建无焊接）三大优势，更支持定制化表面处理与异形截面开发。从自动化生产线框架到新能源散热组件，我们以绿色环保、高性价比的解决方案，为工业领域提供可靠的结构支撑与创新可能。",
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
            contact_page_title: "联系我们",
            contact_page_subtitle: "随时为您提供专业的服务和支持",
            phone_consultation: "电话咨询",
            email_contact: "邮箱联系",
            company_address: "公司地址",
            business_hours: "营业时间",
            online_consultation: "在线咨询",
            consultation_desc: "请填写以下信息，我们会尽快与您联系",
            name: "姓名",
            company_name_form: "公司名称",
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
            page_title_index: "佛山市中普铝业有限公司 - 专业铝型材挤压制造商",
            page_title_products: "产品中心 - 佛山市中普铝业有限公司",
            page_title_about: "关于我们 - 佛山市中普铝业有限公司",
            page_title_contact: "联系我们 - 佛山市中普铝业有限公司"
        },
        en: {
            home: "Home",
            about: "About Us",
            products: "Products", 
            contact: "Contact",
            // 首页内容
            hero_title_1: "Professional Aluminum Extrusion Manufacturer",
            hero_desc_1: "Foshan Zhongpu Aluminum Industry Co., Ltd. is committed to providing high-quality aluminum profiles",
            hero_title_2: "Innovative Technology, Quality Service",
            hero_desc_2: "Advanced extrusion technology ensures stable and reliable product quality",
            hero_title_3: "Global Supply Chain Solutions",
            hero_desc_3: "Professional aluminum profile solutions for construction, industry, and decoration",
            view_products: "View Products",
            learn_more: "Learn More",
            contact_us: "Contact Us",
            about_title: "About Zhongpu Aluminum",
            about_desc: "Foshan Zhongpu Aluminum Industry Co., Ltd. is a professional enterprise engaged in aluminum profile extrusion production, with advanced production equipment and professional technical team. We are committed to providing customers with high-quality, diversified aluminum profile products, widely used in construction, industry, decoration and other fields.",
            products_title: "Products",
            decor_board: "Decorative Aluminum Profile",
            decor_desc: "High-quality aluminum profiles for architectural decoration, curtain walls, and home applications, including wave and great wall shapes to meet various decorative needs.",
            industrial_board: "Industrial Aluminum Profile",
            industrial_desc: "Widely used in equipment frames, automation, assembly lines, and mechanical structures, supporting various specifications and customization.",
            aluminum_square: "Aluminum Square Tube",
            features_title: "Our Advantages",
            company_name: "Foshan Zhongpu Aluminum Industry Co., Ltd.",
            company_desc: "Professional Aluminum Extrusion Manufacturer",
            company_mission: "Committed to providing high-quality aluminum profile products",
            company_slogan: "The company adheres to the business philosophy of 'Quality First, Customer First', and has won the trust and support of customers through continuous technological innovation and quality management.",
            // 关于我们页面
            page_title: "About Us",
            page_subtitle: "Learn about Zhongpu Aluminum's development history and corporate culture",
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
            products_page_title: "Products",
            products_page_subtitle: "High-quality aluminum profile products to meet your various needs",
            wave_desc: "High-quality aluminum panels manufactured with advanced extrusion technology, featuring excellent corrosion resistance, impact resistance, and decorative effects. Widely used in building facades, interior decoration, industrial equipment, and more.",
            greatwall_desc: "Classic Great Wall board design, using high-quality aluminum alloy materials, with unique decorative effects and good practicality. Suitable for building facades, interior decoration, billboards and other fields.",
            square_desc: "以高性能工业铝型材为核心，重塑轻量化智造未来。我们的铝型材精选优质铝合金，经精密挤压工艺成型，兼具轻质高强（密度仅为钢材 1/3，承载能力出众）、卓越耐蚀（天然氧化膜抵御恶劣环境）、灵活易装（模块化槽口设计，快速搭建无焊接）三大优势，更支持定制化表面处理与异形截面开发。从自动化生产线框架到新能源散热组件，我们以绿色环保、高性价比的解决方案，为工业领域提供可靠的结构支撑与创新可能。",
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
            contact_page_title: "Contact Us",
            contact_page_subtitle: "Always ready to provide professional service and support",
            phone_consultation: "Phone Consultation",
            email_contact: "Email Contact",
            company_address: "Company Address",
            business_hours: "Business Hours",
            online_consultation: "Online Consultation",
            consultation_desc: "Please fill in the following information and we will contact you as soon as possible",
            name: "Name",
            company_name_form: "Company Name",
            phone: "Phone Number",
            email: "Email Address",
            interested_product: "Interested Product",
            select_product: "Please select product",
            custom_product: "Custom Product",
            inquiry_content: "Inquiry Content",
            inquiry_placeholder: "Please describe your needs in detail...",
            submit_inquiry: "Submit Inquiry",
            company_location: "Company Location",
            map_loading: "Map loading...",
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
            faq_1_answer: "We recommend choosing suitable products based on factors such as usage environment, load requirements, and decorative needs. Our technical team can provide professional selection advice.",
            faq_2: "Do you provide customization services?",
            faq_2_answer: "Yes, we provide professional customization services. We can design and produce aluminum profile products according to your specific needs. Please consult our sales team for minimum order quantities.",
            faq_3: "What is the product delivery cycle?",
            faq_3_answer: "Standard products are usually delivered in 7-15 days, while custom products may take 15-30 days depending on complexity. We will provide accurate delivery times based on your specific needs.",
            faq_4: "Do you provide installation guidance?",
            faq_4_answer: "Yes, we provide detailed installation guidance and technical support. For large projects, we can also send technical personnel to provide on-site installation guidance.",
            page_title_index: "Foshan Zhongpu Aluminum Co., Ltd. - Professional Aluminum Extrusion Manufacturer",
            page_title_products: "Products - Foshan Zhongpu Aluminum Co., Ltd.",
            page_title_about: "About Us - Foshan Zhongpu Aluminum Co., Ltd.",
            page_title_contact: "Contact - Foshan Zhongpu Aluminum Co., Ltd."
        }
    },

    // 获取当前语言
    getCurrentLanguage() {
        return localStorage.getItem('currentLanguage') || 'zh';
    },

    // 设置语言
    setLanguage(lang) {
        localStorage.setItem('currentLanguage', lang);
        this.currentLang = lang;
    },

    // 获取翻译文本
    getText(key) {
        const lang = this.getCurrentLanguage();
        return this.translations[lang][key] || key;
    },

    // 更新按钮文字
    updateLanguageButton() {
        // 现在使用分层法，不需要直接修改按钮文本
        // 按钮文本会通过 .lang-zh/.lang-en 的显隐自动切换
        console.log('Language button updated via layer method');
    },

    // 切换语言
    switchLanguage(lang) {
        console.log('Switching to language:', lang);
        this.setLanguage(lang);
        this.updateLanguageButton();
        
        // 关闭下拉菜单
        const dropdowns = document.querySelectorAll('.language-dropdown');
        dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        
        // 触发自定义事件，通知页面更新内容
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    },

    // 初始化语言切换
    initLanguageToggle() {
        const dropdowns = document.querySelectorAll('.language-dropdown');
        
        dropdowns.forEach(dropdown => {
            const btn = dropdown.querySelector('.language-btn');
            const options = dropdown.querySelectorAll('.language-option');
            
            // 按钮点击事件
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                dropdown.classList.toggle('active');
            });
            
            // 选项点击事件
            options.forEach(option => {
                option.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    const lang = this.getAttribute('data-lang');
                    LanguageUtils.switchLanguage(lang);
                });
            });
            
            // 点击外部关闭
            document.addEventListener('click', function(e) {
                if (!dropdown.contains(e.target)) {
                    dropdown.classList.remove('active');
                }
            });
        });
    },

    // 设置页面标签栏标题
    setPageTitle(pageKey) {
        const lang = this.getCurrentLanguage();
        let title = '';
        if (lang === 'zh') {
            title = this.translations.zh[pageKey] || document.title;
        } else {
            title = this.translations.en[pageKey] || document.title;
        }
        document.title = title;
    }
}; 