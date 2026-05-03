/* ============================================
   Herbal Atlas — Main JavaScript
   ============================================ */

// Herb Data (will be loaded from JSON in production)
const herbsData = [
    {
        id: "ginseng",
        name: "Ginseng",
        chinese: "人参 (Rén Shēn)",
        icon: "⚡",
        iconBg: "#fff8e1",
        description: "Commonly used in soups, teas, and tonic formulas. Can be sliced and steeped in hot water.",
        benefits: ["Boosts energy and reduces fatigue", "Enhances cognitive function", "Strengthens immune system", "Supports cardiovascular health", "Anti-aging properties"],
        category: "energy",
        scientificName: "Panax ginseng",
        origin: "Northeast China, Korea, Siberia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Panax+ginseng"
    },
    {
        id: "astragalus",
        name: "Astragalus",
        chinese: "黄芪 (Huáng Qí)",
        icon: "🛡️",
        iconBg: "#e8f5e9",
        description: "Often used in soups, teas, and herbal formulas. Can be added to chicken soup for immune support.",
        benefits: ["Strengthens immune system", "Supports heart health", "Promotes wound healing", "Anti-aging effects", "Enhances energy (Qi)"],
        category: "immunity",
        scientificName: "Astragalus membranaceus",
        origin: "Northern China, Mongolia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Astragalus+membranaceus"
    },
    {
        id: "goji",
        name: "Goji Berries",
        chinese: "枸杞子 (Gǒu Qǐ Zǐ)",
        icon: "👁️",
        iconBg: "#e3f2fd",
        description: "Eat raw as a snack, add to teas, or use in cooking. Popular in trail mixes and health foods.",
        benefits: ["Supports eye health and vision", "Rich in antioxidants", "Boosts immune function", "Promotes longevity", "Nourishes Liver and Kidneys"],
        category: "eye_health",
        scientificName: "Lycium barbarum",
        origin: "Ningxia, China, Tibet",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Lycium+barbarum"
    },
    {
        id: "reishi",
        name: "Reishi Mushroom",
        chinese: "灵芝 (Líng Zhī)",
        icon: "🌙",
        iconBg: "#ede7f6",
        description: "Available as tea, extract, powder, or capsules. Can be sliced and steeped in hot water.",
        benefits: ["Promotes restful sleep", "Supports immune function", "Reduces stress and anxiety", "Supports liver health", "Anti-aging properties"],
        category: "sleep",
        scientificName: "Ganoderma lucidum",
        origin: "China, Japan, Korea",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Ganoderma+lucidum"
    },
    {
        id: "turmeric",
        name: "Turmeric",
        chinese: "姜黄 (Jiāng Huáng)",
        icon: "🫁",
        iconBg: "#e0f2f1",
        description: "Used in cooking (curry), teas, and supplements. Combine with black pepper for better absorption.",
        benefits: ["Powerful anti-inflammatory", "Supports joint health", "Aids digestion", "Antioxidant properties", "Supports liver function"],
        category: "digestion",
        scientificName: "Curcuma longa",
        origin: "Southern China, India, Southeast Asia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Curcuma+longa"
    },
    {
        id: "echinacea",
        name: "Echinacea",
        chinese: "紫锥菊 (Zhuǐ Zhuī Jú)",
        icon: "🛡️",
        iconBg: "#e8f5e9",
        description: "Tea, tincture, capsules, or topical cream. Steep dried root in hot water for 10 minutes.",
        benefits: ["Boosts immune system naturally", "Fights cold and flu symptoms", "Reduces inflammation", "Supports respiratory health"],
        category: "immunity",
        scientificName: "Echinacea purpurea",
        origin: "North America, Central United States",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Echinacea+purpurea"
    },
    {
        id: "chamomile",
        name: "Chamomile",
        chinese: "洋甘菊 (Yáng Gān Jú)",
        icon: "🌙",
        iconBg: "#ede7f6",
        description: "Tea, essential oil, or topical application. Steep flowers in hot water for 5-10 minutes.",
        benefits: ["Promotes restful sleep", "Soothes digestive issues", "Reduces anxiety and stress", "Anti-inflammatory properties"],
        category: "sleep",
        scientificName: "Matricaria chamomilla",
        origin: "Europe, Western Asia, North America",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Matricaria+chamomilla"
    },
    {
        id: "peppermint",
        name: "Peppermint",
        chinese: "薄荷 (Bò He)",
        icon: "🫁",
        iconBg: "#e0f2f1",
        description: "Tea, essential oil, topical cream, or fresh leaves. Steep leaves in hot water for 5-7 minutes.",
        benefits: ["Relieves headaches and migraines", "Aids digestion and reduces bloating", "Clears nasal congestion", "Soothes sore muscles"],
        category: "digestion",
        scientificName: "Mentha × piperita",
        origin: "Europe, Middle East, North America",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Mentha+×+piperita"
    },
    {
        id: "lavender",
        name: "Lavender",
        chinese: "薰衣草 (Xūn Yī Cǎo)",
        icon: "🌙",
        iconBg: "#ede7f6",
        description: "Essential oil for aromatherapy, topical application, or tea. Add flowers to bath water.",
        benefits: ["Promotes deep sleep", "Reduces anxiety and depression", "Heals burns and wounds", "Relieves headaches"],
        category: "sleep",
        scientificName: "Lavandula angustifolia",
        origin: "Mediterranean, Europe, North America",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Lavandula+angustifolia"
    },
    {
        id: "garlic",
        name: "Garlic",
        chinese: "大蒜 (Dà Suàn)",
        icon: "🛡️",
        iconBg: "#e8f5e9",
        description: "Raw in cooking, aged garlic extract, or supplements. Crush and let sit 10 minutes before cooking to activate allicin.",
        benefits: ["Powerful natural antibiotic", "Lowers blood pressure and cholesterol", "Boosts immune function", "Antioxidant properties"],
        category: "immunity",
        scientificName: "Allium sativum",
        origin: "Central Asia, Worldwide cultivation",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Allium+sativum"
    },
    {
        id: "ginger",
        name: "Ginger",
        chinese: "生姜 (Shēng Jiāng)",
        icon: "🫁",
        iconBg: "#e0f2f1",
        description: "Fresh in cooking, tea, or supplements. Slice and steep in hot water for ginger tea.",
        benefits: ["Relieves nausea and vomiting", "Aids digestion", "Reduces muscle pain", "Anti-inflammatory effects"],
        category: "digestion",
        scientificName: "Zingiber officinale",
        origin: "Southeast Asia, India",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Zingiber+officinale"
    },
    {
        id: "cinnamon",
        name: "Cinnamon",
        chinese: "肉桂 (Ròu Guì)",
        icon: "☀️",
        iconBg: "#fff8e1",
        description: "Spice in cooking, tea, or supplements. Add to warm drinks and desserts.",
        benefits: ["Warms the body", "Improves circulation", "Lowers blood sugar", "Anti-microbial properties"],
        category: "warming",
        scientificName: "Cinnamomum verum",
        origin: "Sri Lanka, South China, Southeast Asia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Cinnamomum+verum"
    },
    {
        id: "rosemary",
        name: "Rosemary",
        chinese: "迷迭香 (Mí Dié Xiāng)",
        icon: "🧠",
        iconBg: "#e3f2fd",
        description: "Cooking herb, tea, essential oil, or hair rinse. Steep fresh or dried leaves in hot water.",
        benefits: ["Enhances memory and concentration", "Improves blood circulation", "Stimulates hair growth", "Relieves muscle pain"],
        category: "cognitive",
        scientificName: "Salvia rosmarinus",
        origin: "Mediterranean, Europe",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Salvia+rosmarinus"
    },
    {
        id: "thyme",
        name: "Thyme",
        chinese: "百里香 (Bǎi Lǐ Xiāng)",
        icon: "🫁",
        iconBg: "#e8f5e9",
        description: "Cooking herb, tea, essential oil, or throat gargle. Steep leaves in hot water for respiratory support.",
        benefits: ["Treats coughs and bronchitis", "Natural antiseptic", "Aids digestion", "Rich in antioxidants"],
        category: "respiratory",
        scientificName: "Thymus vulgaris",
        origin: "Mediterranean, Europe, North Africa",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Thymus+vulgaris"
    },
    {
        id: "valerian",
        name: "Valerian",
        chinese: "缬草 (Xié Cǎo)",
        icon: "🌙",
        iconBg: "#ede7f6",
        description: "Tea, tincture, or capsules. Steep root in hot water for 10-15 minutes before bed.",
        benefits: ["Promotes deep sleep", "Reduces anxiety", "Relieves menstrual cramps", "Lowers blood pressure"],
        category: "sleep",
        scientificName: "Valeriana officinalis",
        origin: "Europe, Northern Asia, North America",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Valeriana+officinalis"
    },
    {
        id: "milk_thistle",
        name: "Milk Thistle",
        chinese: "水飞蓟 (Shuǐ Fēi Jì)",
        icon: "🫀",
        iconBg: "#e8f5e9",
        description: "Capsules, tincture, or tea. Standardized extract (silymarin) is most common.",
        benefits: ["Protects liver cells", "Supports detoxification", "Rich in antioxidants", "May help with hangover recovery"],
        category: "liver",
        scientificName: "Silybum marianum",
        origin: "Mediterranean, Europe, North America",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Silybum+marianum"
    },
    {
        id: "dandelion",
        name: "Dandelion",
        chinese: "蒲公英 (Pú Gōng Yīng)",
        icon: "🫀",
        iconBg: "#e0f2f1",
        description: "Root tea, leaf salad, or supplements. Roasted root makes a coffee substitute.",
        benefits: ["Supports liver health", "Natural diuretic", "Aids digestion", "Rich in vitamins A, C, K"],
        category: "liver",
        scientificName: "Taraxacum officinale",
        origin: "Europe, Asia, North America",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Taraxacum+officinale"
    },
    {
        id: "elderberry",
        name: "Elderberry",
        chinese: "接骨木莓 (Jiē Gǔ Mù Méi)",
        icon: "🛡️",
        iconBg: "#e8f5e9",
        description: "Syrup, tea, capsules, or gummies. Cook berries before eating (raw berries are toxic).",
        benefits: ["Fights cold and flu viruses", "Rich in antioxidants", "Reduces inflammation", "Supports heart health"],
        category: "immunity",
        scientificName: "Sambucus nigra",
        origin: "Europe, North America, North Africa",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Sambucus+nigra"
    },
    {
        id: "calendula",
        name: "Calendula",
        chinese: "金盏花 (Jīn Zhǎn Huā)",
        icon: "🧴",
        iconBg: "#fce4ec",
        description: "Topical cream, oil infusion, tea, or wash. Apply directly to skin irritations.",
        benefits: ["Heals wounds and burns", "Soothes skin irritation", "Anti-fungal properties", "Reduces menstrual cramps"],
        category: "skin",
        scientificName: "Calendula officinalis",
        origin: "Mediterranean, Europe",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Calendula+officinalis"
    },
    {
        id: "ashwagandha",
        name: "Ashwagandha",
        chinese: "南非醉茄 (Nán Fēi Zuì Qié)",
        icon: "🌿",
        iconBg: "#fff8e1",
        description: "Powder, capsules, or tea. Mix powder with warm milk or water.",
        benefits: ["Reduces stress and cortisol levels", "Boosts energy and stamina", "Enhances cognitive function", "Supports immune system"],
        category: "adaptogen",
        scientificName: "Withania somnifera",
        origin: "India, Middle East, North Africa",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Withania+somnifera"
    },
    {
        id: "st_johns_wort",
        name: "St. John's Wort",
        chinese: "贯叶连翘 (Guàn Yè Lián Qiāo)",
        icon: "😊",
        iconBg: "#fce4ec",
        description: "Tea, tincture, capsules, or oil. Steep flowers in hot water for 10 minutes.",
        benefits: ["Supports emotional well-being", "Relieves mild depression", "Heals wounds and burns", "Reduces nerve pain"],
        category: "mood",
        scientificName: "Hypericum perforatum",
        origin: "Europe, North America",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Hypericum+perforatum"
    },
    {
        id: "ginkgo",
        name: "Ginkgo Biloba",
        chinese: "银杏 (Yín Xìng)",
        icon: "🧠",
        iconBg: "#e3f2fd",
        description: "Standardized extract (EGb 761), tea, or capsules.",
        benefits: ["Improves memory and cognition", "Enhances blood circulation", "Antioxidant protection", "May help with tinnitus"],
        category: "cognitive",
        scientificName: "Ginkgo biloba",
        origin: "China, Japan, Korea",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Ginkgo+biloba"
    },
    {
        id: "saw_palmetto",
        name: "Saw Palmetto",
        chinese: "锯棕榈 (Jù Zōng Lǘ)",
        icon: "🫘",
        iconBg: "#f5f5f5",
        description: "Capsules, tincture, or tea. Standardized extract is most common.",
        benefits: ["Supports prostate health", "Reduces urinary symptoms", "Anti-inflammatory", "May support hair growth"],
        category: "prostate",
        scientificName: "Serenoa repens",
        origin: "Southeastern United States",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Serenoa+repens"
    },
    {
        id: "feverfew",
        name: "Feverfew",
        chinese: "小白菊 (Xiǎo Bái Jú)",
        icon: "💆",
        iconBg: "#fff3e0",
        description: "Fresh leaves, tea, or capsules. Chew 2-3 fresh leaves daily for migraine prevention.",
        benefits: ["Prevents migraines", "Reduces fever", "Anti-inflammatory", "Relieves arthritis pain"],
        category: "pain_relief",
        scientificName: "Tanacetum parthenium",
        origin: "Europe, North America",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Tanacetum+parthenium"
    },
    {
        id: "lemon_balm",
        name: "Lemon Balm",
        chinese: "柠檬香蜂草 (Níng Méng Xiāng Fēng Cǎo)",
        icon: "🕊️",
        iconBg: "#ede7f6",
        description: "Tea, essential oil, or capsules. Steep fresh or dried leaves in hot water.",
        benefits: ["Calms anxiety and stress", "Improves sleep quality", "Enhances memory", "Soothes digestive issues"],
        category: "calming",
        scientificName: "Melissa officinalis",
        origin: "Europe, Mediterranean",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Melissa+officinalis"
    },
    {
        id: "dong_quai",
        name: "Dong Quai",
        chinese: "当归 (Dāng Guī)",
        icon: "♀️",
        iconBg: "#ffebee",
        description: "Decoction, capsules, or added to soups. Common in women's health formulas.",
        benefits: ["Nourishes and activates blood", "Regulates menstruation", "Relieves pain", "Moistens intestines"],
        category: "blood",
        scientificName: "Angelica sinensis",
        origin: "China, Japan, Korea",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Angelica+sinensis"
    },
    {
        id: "licorice",
        name: "Licorice Root",
        chinese: "甘草 (Gān Cǎo)",
        icon: "🤝",
        iconBg: "#e8f5e9",
        description: "Tea, decoction, or added to herbal formulas as a harmonizer.",
        benefits: ["Harmonizes other herbs in formulas", "Soothes sore throat", "Supports adrenal function", "Relieves cough"],
        category: "harmonizer",
        scientificName: "Glycyrrhiza glabra",
        origin: "China, Mediterranean, Central Asia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Glycyrrhiza+glabra"
    },
    {
        id: "honeysuckle",
        name: "Honeysuckle",
        chinese: "金银花 (Jīn Yín Huā)",
        icon: "🦠",
        iconBg: "#e0f7fa",
        description: "Tea, decoction, or external wash. Steep flowers in hot water for 10 minutes.",
        benefits: ["Clears heat and toxins", "Reduces fever", "Treats respiratory infections", "Anti-bacterial properties"],
        category: "antiviral",
        scientificName: "Lonicera japonica",
        origin: "China, Japan, Korea",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Lonicera+japonica"
    },
    {
        id: "chrysanthemum",
        name: "Chrysanthemum",
        chinese: "菊花 (Jú Huā)",
        icon: "👁️",
        iconBg: "#e3f2fd",
        description: "Tea, eye wash (cooled), or cooking. Steep flowers in hot water for 5-10 minutes.",
        benefits: ["Clears the eyes", "Reduces fever", "Relieves headaches", "Calms the liver"],
        category: "eye_health",
        scientificName: "Chrysanthemum morifolium",
        origin: "China, Japan",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Chrysanthemum+morifolium"
    },
    {
        id: "isatis_root",
        name: "Isatis Root",
        chinese: "板蓝根 (Bǎn Lán Gēn)",
        icon: "🦠",
        iconBg: "#e0f7fa",
        description: "Granules dissolved in hot water, capsules, or decoction.",
        benefits: ["Treats colds and flu", "Clears heat and toxins", "Reduces sore throat", "Anti-viral properties"],
        category: "antiviral",
        scientificName: "Isatis tinctoria",
        origin: "China, Europe",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Isatis+tinctoria"
    },
    {
        id: "bupleurum",
        name: "Bupleurum",
        chinese: "柴胡 (Chái Hú)",
        icon: "🌡️",
        iconBg: "#e0f2f1",
        description: "Decoction or capsules. Key ingredient in Xiao Chai Hu Tang formula.",
        benefits: ["Reduces fever", "Soothes liver Qi stagnation", "Relieves chest congestion", "Treats malaria"],
        category: "fever",
        scientificName: "Bupleurum chinense",
        origin: "China, Japan, Korea",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Bupleurum+chinense"
    },
    {
        id: "poria",
        name: "Poria",
        chinese: "茯苓 (Fú Líng)",
        icon: "💧",
        iconBg: "#e0f2f1",
        description: "Decoction, powder, or added to soups. Often used in classical formulas.",
        benefits: ["Strengthens spleen and digestion", "Promotes urination", "Calms the mind", "Boosts immunity"],
        category: "diuretic",
        scientificName: "Wolfiporia cocos",
        origin: "China, Japan, North America",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Wolfiporia+cocos"
    },
    {
        id: "atractylodes",
        name: "Atractylodes",
        chinese: "白术 (Bái Zhú)",
        icon: "🫁",
        iconBg: "#e0f2f1",
        description: "Decoction or powder. Commonly paired with Poria in formulas.",
        benefits: ["Strengthens spleen function", "Dries dampness", "Stops sweating", "Supports fetal health"],
        category: "digestion",
        scientificName: "Atractylodes macrocephala",
        origin: "China, Japan",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Atractylodes+macrocephala"
    },
    {
        id: "safflower",
        name: "Safflower",
        chinese: "红花 (Hóng Huā)",
        icon: "🩸",
        iconBg: "#ffebee",
        description: "Decoction, tincture, or topical oil. Used in blood-moving formulas.",
        benefits: ["Activates blood circulation", "Relieves pain", "Regulates menstruation", "Reduces bruises"],
        category: "blood",
        scientificName: "Carthamus tinctorius",
        origin: "China, India, Central Asia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Carthamus+tinctorius"
    },
    {
        id: "notoginseng",
        name: "Notoginseng",
        chinese: "三七 (Sān Qī)",
        icon: "🩸",
        iconBg: "#ffebee",
        description: "Powder, capsules, or decoction. Taken internally or applied topically for wounds.",
        benefits: ["Stops bleeding", "Activates blood circulation", "Reduces swelling and pain", "Supports heart health"],
        category: "blood",
        scientificName: "Panax notoginseng",
        origin: "Yunnan, China, Guangxi, China",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Panax+notoginseng"
    },
    {
        id: "dendrobium",
        name: "Dendrobium",
        chinese: "石斛 (Shí Hú)",
        icon: "☯️",
        iconBg: "#e3f2fd",
        description: "Decoction, tea, or capsules. Often simmered for 30+ minutes.",
        benefits: ["Nourishes yin and fluids", "Benefits the stomach", "Clears heat", "Improves vision"],
        category: "yin",
        scientificName: "Dendrobium officinale",
        origin: "China, Southeast Asia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Dendrobium+officinale"
    },
    {
        id: "gastrodia",
        name: "Gastrodia",
        chinese: "天麻 (Tiān Má)",
        icon: "🤕",
        iconBg: "#f5f5f5",
        description: "Decoction, powder, or capsules. Often paired with Gastrodia-Uncaria formula.",
        benefits: ["Relieves headaches and migraines", "Stops dizziness", "Calms spasms and convulsions", "Improves circulation"],
        category: "headache",
        scientificName: "Gastrodia elata",
        origin: "China, Japan, Korea",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Gastrodia+elata"
    },
    {
        id: "eucommia",
        name: "Eucommia",
        chinese: "杜仲 (Dù Zhòng)",
        icon: "🦴",
        iconBg: "#fff8e1",
        description: "Decoction, capsules, or tea. Simmer bark for 20-30 minutes.",
        benefits: ["Strengthens bones and joints", "Lowers blood pressure", "Supports kidney function", "Reduces lower back pain"],
        category: "bone",
        scientificName: "Eucommia ulmoides",
        origin: "China",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Eucommia+ulmoides"
    },
    {
        id: "pinellia",
        name: "Pinellia",
        chinese: "半夏 (Bàn Xià)",
        icon: "🫁",
        iconBg: "#e8f5e9",
        description: "Decoction (processed form only). Must be processed before use - raw form is toxic.",
        benefits: ["Dries dampness and phlegm", "Stops vomiting", "Reduces nausea", "Relieves chest congestion"],
        category: "respiratory",
        scientificName: "Pinellia ternata",
        origin: "China, Japan, Korea",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Pinellia+ternata"
    },
    {
        id: "tangerine_peel",
        name: "Tangerine Peel",
        chinese: "陈皮 (Chén Pí)",
        icon: "🫁",
        iconBg: "#e0f2f1",
        description: "Tea, decoction, or added to cooking. Aged peel is more valued.",
        benefits: ["Regulates Qi", "Dries dampness", "Relieves bloating", "Reduces phlegm"],
        category: "digestion",
        scientificName: "Citrus reticulata",
        origin: "China, Japan, Southeast Asia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Citrus+reticulata"
    },
    {
        id: "black_cohosh",
        name: "Black Cohosh",
        chinese: "黑升麻 (Hēi Shēng Má)",
        icon: "♀️",
        iconBg: "#fff8e1",
        description: "Used for menopause, menstrual cramps, and PMS.",
        benefits: ["Relieves menopausal symptoms", "Reduces hot flashes", "Supports hormonal balance"],
        category: "women-health",
        scientificName: "Actaea racemosa",
        origin: "North America",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Actaea+racemosa"
    },
    {
        id: "cranberry",
        name: "Cranberry",
        chinese: "蔓越莓 (Màn Yuè Méi)",
        icon: "🧹",
        iconBg: "#e8f5e9",
        description: "Used for UTI prevention and general urinary health.",
        benefits: ["Prevents urinary tract infections", "Rich in antioxidants", "Supports bladder health"],
        category: "detox",
        scientificName: "Vaccinium macrocarpon",
        origin: "North America",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Vaccinium+macrocarpon"
    },
    {
        id: "maca",
        name: "Maca",
        chinese: "玛卡 (Mǎ Kǎ)",
        icon: "⚡",
        iconBg: "#fff8e1",
        description: "Used for sexual dysfunction, fertility, and athletic performance.",
        benefits: ["Boosts libido", "Enhances fertility", "Increases energy and stamina"],
        category: "energy",
        scientificName: "Lepidium meyenii",
        origin: "Peru",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Lepidium+meyenii"
    },
    {
        id: "rhodiola",
        name: "Rhodiola",
        chinese: "红景天 (Hóng Jǐng Tiān)",
        icon: "🧘",
        iconBg: "#fce4ec",
        description: "Used for stress, fatigue, and cognitive decline.",
        benefits: ["Reduces fatigue", "Enhances mental performance", "Adaptogenic properties"],
        category: "stress",
        scientificName: "Rhodiola rosea",
        origin: "Europe, Asia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Rhodiola+rosea"
    },
    {
        id: "bacopa",
        name: "Bacopa",
        chinese: "假马齿苋 (Jiǎ Mǎ Chǐ Xiàn)",
        icon: "🌙",
        iconBg: "#ede7f6",
        description: "Used for memory enhancement, anxiety, and ADHD.",
        benefits: ["Improves memory", "Reduces anxiety", "Supports cognitive function"],
        category: "sleep",
        scientificName: "Bacopa monnieri",
        origin: "India, Southeast Asia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Bacopa+monnieri"
    },
    {
        id: "schisandra",
        name: "Schisandra",
        chinese: "五味子 (Wǔ Wèi Zǐ)",
        icon: "⚡",
        iconBg: "#fff8e1",
        description: "Used for liver health, fatigue, and respiratory conditions.",
        benefits: ["Protects liver", "Increases stamina", "Adaptogenic effects"],
        category: "energy",
        scientificName: "Schisandra chinensis",
        origin: "China, Russia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Schisandra+chinensis"
    },
    {
        id: "berberine",
        name: "Berberine",
        chinese: "黄连素 (Huáng Lián Sù)",
        icon: "🫁",
        iconBg: "#e0f2f1",
        description: "Used for diabetes, infections, and cholesterol management.",
        benefits: ["Lowers blood sugar", "Antimicrobial", "Supports heart health"],
        category: "digestion",
        scientificName: "Berberis aristata",
        origin: "India, China",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Berberis+aristata"
    },
    {
        id: "andrographis",
        name: "Andrographis",
        chinese: "穿心莲 (Chuān Xīn Lián)",
        icon: "🛡️",
        iconBg: "#e8f5e9",
        description: "Used for colds, flu, and upper respiratory infections.",
        benefits: ["Boosts immune system", "Reduces inflammation", "Antiviral properties"],
        category: "immunity",
        scientificName: "Andrographis paniculata",
        origin: "India, Sri Lanka",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Andrographis+paniculata"
    },
    {
        id: "cats_claw",
        name: "Cat's Claw",
        chinese: "猫爪藤 (Māo Zhuǎ Téng)",
        icon: "🛡️",
        iconBg: "#e8f5e9",
        description: "Used for arthritis, digestive issues, and immune support.",
        benefits: ["Reduces inflammation", "Supports immune function", "Relieves arthritis pain"],
        category: "immunity",
        scientificName: "Uncaria tomentosa",
        origin: "Peru, Amazon",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Uncaria+tomentosa"
    },
    {
        id: "horny_goat_weed",
        name: "Horny Goat Weed",
        chinese: "淫羊藿 (Yín Yáng Huò)",
        icon: "💕",
        iconBg: "#fff8e1",
        description: "Used for sexual dysfunction, low libido, and osteoporosis.",
        benefits: ["Enhances libido", "Improves erectile function", "Supports bone health"],
        category: "reproductive",
        scientificName: "Epimedium grandiflorum",
        origin: "China, Japan",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Epimedium+grandiflorum"
    },
    {
        id: "stiff_silkworm",
        name: "Stiff Silkworm",
        chinese: "僵蚕 (Jiāng Cán)",
        icon: "🐛",
        iconBg: "#e8f5e9",
        description: "Used for convulsions, seizures, facial paralysis, and swollen lymph nodes. Also treats cough with phlegm and skin rashes.",
        benefits: ["Dispels wind and stops spasms", "Resolves phlegm and dissipates nodules", "Relieves headache and sore throat"],
        category: "animal-derived",
        scientificName: "Bombyx mori (infected with Beauveria bassiana)",
        origin: "China, Japan, Korea",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Bombyx+mori+(infected+with+Beauveria+bassiana)"
    },
    {
        id: "centipede",
        name: "Centipede",
        chinese: "蜈蚣 (Wú Gōng)",
        icon: "🐛",
        iconBg: "#f3e5f5",
        description: "Used for severe convulsions, tetanus, migraine, arthritis, and venomous bites.",
        benefits: ["Extinguishes wind and stops spasms", "Unblocks collaterals and relieves pain", "Detoxifies and dissolves masses"],
        category: "animal-derived",
        scientificName: "Scolopendra subspinipes",
        origin: "China, Southeast Asia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Scolopendra+subspinipes"
    },
    {
        id: "scorpion",
        name: "Scorpion",
        chinese: "全蝎 (Quán Xiē)",
        icon: "🐛",
        iconBg: "#f3e5f5",
        description: "Used for convulsions, epilepsy, hemiplegia, facial paralysis, and chronic pain.",
        benefits: ["Extinguishes wind and stops spasms", "Unblocks collaterals and relieves pain", "Reduces swelling and detoxifies"],
        category: "animal-derived",
        scientificName: "Buthus martensii",
        origin: "China, Mongolia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Buthus+martensii"
    },
    {
        id: "ground_beetle",
        name: "Ground Beetle",
        chinese: "土鳖虫 (Tǔ Biē Chóng)",
        icon: "🐛",
        iconBg: "#f3e5f5",
        description: "Used for amenorrhea, abdominal masses, traumatic injury, and fractures.",
        benefits: ["Breaks blood stasis and promotes menstruation", "Relieves pain and reduces swelling", "Heals fractures and trauma"],
        category: "animal-derived",
        scientificName: "Eupolyphaga sinensis",
        origin: "China, Japan",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Eupolyphaga+sinensis"
    },
    {
        id: "earthworm",
        name: "Earthworm",
        chinese: "地龙 (Dì Lóng)",
        icon: "🐛",
        iconBg: "#e8f5e9",
        description: "Used for high fever with convulsions, asthma, hypertension, and joint pain.",
        benefits: ["Clears heat and stops spasms", "Unblocks collaterals and relieves asthma", "Promotes urination and reduces swelling"],
        category: "animal-derived",
        scientificName: "Pheretima aspergillum",
        origin: "China, Southeast Asia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Pheretima+aspergillum"
    },
    {
        id: "cicada_fungus",
        name: "Cicada Fungus",
        chinese: "蝉花 (Chán Huā)",
        icon: "🍄",
        iconBg: "#e8f5e9",
        description: "Used for pediatric convulsions, night blindness, and immune deficiency.",
        benefits: ["Clears heat and stops spasms", "Nourishes liver and improves vision", "Boosts immunity and reduces fatigue"],
        category: "fungi",
        scientificName: "Cordyceps cicadae",
        origin: "China, Japan, Southeast Asia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Cordyceps+cicadae"
    },
    {
        id: "beehive",
        name: "Beehive",
        chinese: "蜂房 (Fēng Fáng)",
        icon: "🐛",
        iconBg: "#fce4ec",
        description: "Used for skin infections, abscesses, mastitis, and parasitic infestations.",
        benefits: ["Detoxifies and reduces swelling", "Relieves pain and kills parasites", "Promotes healing of skin ulcers"],
        category: "animal-derived",
        scientificName: "Apis cerana (hive)",
        origin: "Worldwide",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Apis+cerana+(hive)"
    },
    {
        id: "gecko",
        name: "Gecko",
        chinese: "蛤蚧 (Gé Jiè)",
        icon: "🐛",
        iconBg: "#e8f5e9",
        description: "Used for chronic cough, asthma, impotence, and kidney deficiency.",
        benefits: ["Tonifies lung and kidney", "Relieves cough and asthma", "Strengthens bones and improves vitality"],
        category: "animal-derived",
        scientificName: "Gekko gecko",
        origin: "China, Southeast Asia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Gekko+gecko"
    },
    {
        id: "black_snake",
        name: "Black Snake",
        chinese: "乌梢蛇 (Wū Shāo Shé)",
        icon: "🐛",
        iconBg: "#fce4ec",
        description: "Used for rheumatoid arthritis, chronic eczema, urticaria, and convulsions.",
        benefits: ["Dispels wind and unblocks collaterals", "Relieves itching and stops spasms", "Treats chronic skin diseases"],
        category: "animal-derived",
        scientificName: "Zaocys dhumnades",
        origin: "China, Southeast Asia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Zaocys+dhumnades"
    },
    {
        id: "pit_viper",
        name: "Pit Viper",
        chinese: "蕲蛇 (Qí Shé)",
        icon: "🐛",
        iconBg: "#f3e5f5",
        description: "Used for severe arthritis, hemiplegia, convulsions, and venomous bites.",
        benefits: ["Dispels wind and stops spasms", "Unblocks collaterals and relieves pain", "Detoxifies and reduces swelling"],
        category: "animal-derived",
        scientificName: "Agkistrodon acutus",
        origin: "China, Vietnam",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Agkistrodon+acutus"
    },
    {
        id: "aloe_vera",
        name: "Aloe Vera",
        chinese: "芦荟 (Lú Huì)",
        icon: "🧴",
        iconBg: "#fce4ec",
        description: "Gel for burns and skin conditions. Internal use for constipation and digestive health.",
        benefits: ["Skin healing", "Digestive support", "Anti-inflammatory"],
        category: "skin",
        scientificName: "Aloe vera",
        origin: "Arabian Peninsula",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Aloe+vera"
    },
    {
        id: "senna",
        name: "Senna",
        chinese: "番泻叶 (Fān Xiè Yè)",
        icon: "🫁",
        iconBg: "#e0f2f1",
        description: "Stimulant laxative for short-term constipation relief. One of the oldest known laxatives.",
        benefits: ["Constipation relief", "Bowel stimulation", "Detox support"],
        category: "digestion",
        scientificName: "Senna alexandrina",
        origin: "Egypt, Sudan",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Senna+alexandrina"
    },
    {
        id: "evening_primrose",
        name: "Evening Primrose",
        chinese: "月见草 (Yuè Jiàn Cǎo)",
        icon: "♀️",
        iconBg: "#fce4ec",
        description: "Evening primrose oil (EPO) rich in GLA for PMS, eczema, and breast pain.",
        benefits: ["PMS relief", "Skin health", "Hormonal balance"],
        category: "women-health",
        scientificName: "Oenothera biennis",
        origin: "North America, Europe",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Oenothera+biennis"
    },
    {
        id: "flaxseed",
        name: "Flaxseed",
        chinese: "亚麻籽 (Yà Má Zǐ)",
        icon: "🫁",
        iconBg: "#e0f2f1",
        description: "Rich in ALA omega-3 and lignans. Used for constipation, heart health, and inflammation.",
        benefits: ["Omega-3 source", "Fiber for digestion", "Heart health"],
        category: "digestion",
        scientificName: "Linum usitatissimum",
        origin: "Middle East, Mediterranean",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Linum+usitatissimum"
    },
    {
        id: "lions_mane",
        name: "Lion's Mane",
        chinese: "猴头菇 (Hóu Tóu Gū)",
        icon: "🧠",
        iconBg: "#e3f2fd",
        description: "Medicinal mushroom for brain health. Stimulates Nerve Growth Factor (NGF). Used for memory and focus.",
        benefits: ["Neuroprotection", "Nerve regeneration", "Cognitive enhancement"],
        category: "cognitive",
        scientificName: "Hericium erinaceus",
        origin: "North America, Europe, Asia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Hericium+erinaceus"
    },
    {
        id: "turkey_tail",
        name: "Turkey Tail",
        chinese: "云芝 (Yún Zhī)",
        icon: "🛡️",
        iconBg: "#e8f5e9",
        description: "One of the most studied medicinal mushrooms for immune support, especially as cancer therapy adjunct.",
        benefits: ["Immune support", "Cancer adjunct therapy", "Gut health"],
        category: "immunity",
        scientificName: "Trametes versicolor",
        origin: "Worldwide",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Trametes+versicolor"
    },
    {
        id: "chaga",
        name: "Chaga Mushroom",
        chinese: "白桦茸 (Bái Huà Róng)",
        icon: "🛡️",
        iconBg: "#e8f5e9",
        description: "Called 'King of Mushrooms' in Siberian folk medicine. Extremely high ORAC antioxidant score.",
        benefits: ["Antioxidant powerhouse", "Immune support", "Anti-inflammatory"],
        category: "immunity",
        scientificName: "Inonotus obliquus",
        origin: "Siberia, Northern Europe, North America",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Inonotus+obliquus"
    },
    {
        id: "cordyceps",
        name: "Cordyceps",
        chinese: "冬虫夏草 (Dōng Chóng Xià Cǎo)",
        icon: "⚡",
        iconBg: "#fff8e1",
        description: "One of the most prized TCM herbs for energy, respiratory health, and kidney support. Used by athletes for performance.",
        benefits: ["Energy & stamina", "Lung support", "Kidney tonification"],
        category: "energy",
        scientificName: "Ophiocordyceps sinensis",
        origin: "Tibet, China, Nepal",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Ophiocordyceps+sinensis"
    },
    {
        id: "cicada_slough",
        name: "Cicada Slough",
        chinese: "蝉蜕 (Chán Tuì)",
        icon: "🫁",
        iconBg: "#e8f5e9",
        description: "Used for sore throat, hoarse voice, itchy skin rashes, and eye conditions in TCM.",
        benefits: ["Anti-itch", "Voice improvement", "Eye clearing"],
        category: "respiratory",
        scientificName: "Cryptotympana atrata",
        origin: "China, East Asia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Cryptotympana+atrata"
    }
];

// Acupressure Points Data
const pointsData = {
    yintang: {
        name: "Yintang (印堂)",
        english: "Hall of Impression",
        location: "Midpoint between the eyebrows",
        benefits: "Calms the mind, relieves headache, reduces anxiety, improves sleep quality",
        instructions: "Using your thumb or index finger, apply firm pressure to the point between your eyebrows. Massage in small circles for 1-3 minutes. Breathe deeply and focus on relaxing.",
        category: "stress"
    },
    taiyang: {
        name: "Taiyang (太阳)",
        english: "Supreme Yang",
        location: "In the temple area, about 1 finger-width behind the midpoint between the outer end of the eyebrow and the outer corner of the eye",
        benefits: "Relieves headache, migraine, eye strain, and temple pain",
        instructions: "Press firmly with your fingertips and massage in small circles. Apply for 1-3 minutes on each side. Can be used with essential oils for enhanced effect.",
        category: "stress"
    },
    li4: {
        name: "Hegu (合谷)",
        english: "Joining Valley",
        location: "On the back of the hand, between the thumb and index finger, in the fleshy area between the two bones",
        benefits: "Master point for headache relief, also helps with toothache, neck pain, and general pain relief",
        instructions: "Press firmly with your opposite thumb. You should feel a strong sensation. Massage for 2-3 minutes on each hand. Note: Avoid during pregnancy.",
        category: "stress"
    },
    pc6: {
        name: "Neiguan (内关)",
        english: "Inner Pass",
        location: "On the inner forearm, 3 finger-widths from the wrist crease, between the two tendons",
        benefits: "Relieves nausea, motion sickness, anxiety, and carpal tunnel symptoms",
        instructions: "Press firmly with your thumb and massage in small circles. Apply for 2-3 minutes on each wrist. This is the same point used in anti-nausea wristbands.",
        category: "stress"
    },
    st36: {
        name: "Zusanli (足三里)",
        english: "Leg Three Miles",
        location: "On the outer leg, 4 finger-widths below the kneecap, one finger-width outward from the shinbone",
        benefits: "Boosts energy, improves digestion, strengthens immunity, promotes longevity",
        instructions: "Press firmly with your thumb and massage for 2-3 minutes on each leg. Traditionally stimulated daily for overall health and vitality.",
        category: "energy"
    },
    kd1: {
        name: "Yongquan (涌泉)",
        english: "Bubbling Spring",
        location: "On the sole of the foot, in the depression formed when the toes are curled, at the junction of the anterior 1/3 and posterior 2/3 of the sole",
        benefits: "Promotes deep sleep, relieves fatigue, calms anxiety, grounds energy",
        instructions: "Massage firmly with your thumb for 3-5 minutes before bed. Can also be stimulated by walking barefoot on natural surfaces.",
        category: "sleep"
    },
    lung1: {
        name: "Zhongfu (中府)",
        english: "Central Palace",
        location: "On the upper chest, 6 finger-widths from the midline, just below the collarbone",
        benefits: "Improves breathing, relieves cough, boosts lung function and immunity",
        instructions: "Press gently with your fingertips and massage in small circles for 1-2 minutes. Deep breathing enhances the effect.",
        category: "immunity"
    },
    ren17: {
        name: "Shanzhong (膻中)",
        english: "Chest Center",
        location: "On the midline of the chest, at the level of the nipples, between the 4th and 5th ribs",
        benefits: "Improves breathing, relieves chest tightness, balances emotions",
        instructions: "Press gently with your fingertips and massage for 1-2 minutes. Often used for emotional release and breathing difficulties.",
        category: "stress"
    },
    ren6: {
        name: "Qihai (气海)",
        english: "Sea of Qi",
        location: "On the lower abdomen, 1.5 finger-widths below the navel",
        benefits: "Boosts energy, strengthens the core, supports reproductive health",
        instructions: "Press gently and massage in clockwise circles for 2-3 minutes. Traditionally considered the center of vital energy.",
        category: "energy"
    },
    sp6: {
        name: "Sanyinjiao (三阴交)",
        english: "Three Yin Intersection",
        location: "On the inner leg, 4 finger-widths above the ankle bone, on the back edge of the shinbone",
        benefits: "Women's health, menstrual regulation, sleep aid, digestive support",
        instructions: "Press firmly and massage for 2-3 minutes on each leg. Avoid during pregnancy. One of the most important points for women's health.",
        category: "sleep"
    }
};

// Wikimedia Commons photos for herbs (verified URLs from API)
const herbPhotos = {
    ginseng: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Panax_ginseng_in_Kitchen.jpg/500px-Panax_ginseng_in_Kitchen.jpg",
    astragalus: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Astragalus_membranaceus.jpg/500px-Astragalus_membranaceus.jpg",
    goji: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Lycium_barbarum.jpg/500px-Lycium_barbarum.jpg",
    reishi: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Ganoderma_lucidum.jpg/500px-Ganoderma_lucidum.jpg",
    turmeric: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Curcuma_longa.jpg/500px-Curcuma_longa.jpg",
    echinacea: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Echinacea_purpurea.jpg",
    chamomile: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Matricaria_chamomilla.jpg/500px-Matricaria_chamomilla.jpg",
    peppermint: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Mentha_%C3%97_piperita%E2%80%93IMG_6075.jpg/500px-Mentha_%C3%97_piperita%E2%80%93IMG_6075.jpg",
    lavender: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Lavandula_angustifolia.jpg/500px-Lavandula_angustifolia.jpg",
    garlic: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Garlic_bulbs_and_cloves.jpg/500px-Garlic_bulbs_and_cloves.jpg",
    ginger: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ginger_Plant_vs.jpg/500px-Ginger_Plant_vs.jpg",
    cinnamon: "https://upload.wikimedia.org/wikipedia/commons/d/de/Cinnamomum_verum.jpg",
    rosemary: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Salvia_rosmarinus.jpg/500px-Salvia_rosmarinus.jpg",
    thyme: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Thymus_vulgaris.jpg",
    valerian: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Valeriana_officinalis.jpg/500px-Valeriana_officinalis.jpg",
    milk_thistle: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Silybum_marianum.jpg/500px-Silybum_marianum.jpg",
    dandelion: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Taraxacum_officinale.jpg/500px-Taraxacum_officinale.jpg",
    elderberry: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Sambucus_nigra.jpg/500px-Sambucus_nigra.jpg",
    calendula: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Calendula_officinalis.jpg/500px-Calendula_officinalis.jpg",
    ashwagandha: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Withania_somnifera.jpg/500px-Withania_somnifera.jpg",
    st_johns_wort: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Hypericum_perforatum.jpg/500px-Hypericum_perforatum.jpg",
    ginkgo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Ginkgo_biloba.jpg/500px-Ginkgo_biloba.jpg",
    saw_palmetto: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Serenoa_repens.jpg/500px-Serenoa_repens.jpg",
    feverfew: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Tanacetum_parthenium.jpg/500px-Tanacetum_parthenium.jpg",
    lemon_balm: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Melissa_officinalis.jpg/500px-Melissa_officinalis.jpg",
    dong_quai: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Dongquai_cr.jpg",
    licorice: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Glycyrrhiza_glabra_kz01.jpg/500px-Glycyrrhiza_glabra_kz01.jpg",
    honeysuckle: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Lonicera_japonica.jpg/500px-Lonicera_japonica.jpg",
    chrysanthemum: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Chrysanthemum_morifolium.jpg/500px-Chrysanthemum_morifolium.jpg",
    isatis_root: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Isatis_tinctoria_MHNT.BOT.2011.3.12.jpg/500px-Isatis_tinctoria_MHNT.BOT.2011.3.12.jpg",
    bupleurum: "https://upload.wikimedia.org/wikipedia/commons/9/98/Bupleurum_chinense.jpg",
    poria: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Tuckahoe.jpg/500px-Tuckahoe.jpg",
    atractylodes: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Baizhu_roots.jpg/500px-Baizhu_roots.jpg",
    safflower: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Carthamus_tinctorius.jpg/500px-Carthamus_tinctorius.jpg",
    notoginseng: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Panax_notoginseng.jpg/500px-Panax_notoginseng.jpg",
    dendrobium: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Dendrobium_officinale.jpg/500px-Dendrobium_officinale.jpg",
    gastrodia: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Gastrodia_elata_1.JPG/500px-Gastrodia_elata_1.JPG",
    eucommia: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Eucommia-ulmoides.JPG/500px-Eucommia-ulmoides.JPG",
    pinellia: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Pinellia_ternata.jpg/500px-Pinellia_ternata.jpg",
    tangerine_peel: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Citrus_reticulata.jpg/500px-Citrus_reticulata.jpg",
    black_cohosh: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Cimicifuga_racemosa_002.jpg/500px-Cimicifuga_racemosa_002.jpg",
    cranberry: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Cranberrys_beim_Ernten.jpeg/500px-Cranberrys_beim_Ernten.jpeg",
    maca: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Lepidium_meyenii.jpg/500px-Lepidium_meyenii.jpg",
    rhodiola: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Rhodiola_rosea.jpg/500px-Rhodiola_rosea.jpg",
    bacopa: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Bacopa_monnieri.jpg/500px-Bacopa_monnieri.jpg",
    schisandra: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Schisandra_chinensis.jpg/500px-Schisandra_chinensis.jpg",
    berberine: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/BerberisAculeata.jpg/500px-BerberisAculeata.jpg",
    andrographis: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Andrographis_paniculata.jpg/500px-Andrographis_paniculata.jpg",
    cats_claw: "https://upload.wikimedia.org/wikipedia/commons/9/94/Uncaria_tomentosa.jpg",
    horny_goat_weed: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Epimedium_grandiflorum_1.jpg/500px-Epimedium_grandiflorum_1.jpg",
    stiff_silkworm: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Pairedmoths.jpg/500px-Pairedmoths.jpg",
    centipede: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Scolopendra_subspinipes.jpg/500px-Scolopendra_subspinipes.jpg",
    scorpion: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Buthus_martensii.jpg",
    ground_beetle: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Eupolyphaga_sinensis.jpg",
    earthworm: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Photo_of_earthworm_head_%28Eisenia_hortensis%29_taken_with_a_scanning_electron_microscope.jpg/500px-Photo_of_earthworm_head_%28Eisenia_hortensis%29_taken_with_a_scanning_electron_microscope.jpg",
    cicada_fungus: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Isaria_Cicadae_Range_Map.png/500px-Isaria_Cicadae_Range_Map.png",
    beehive: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Cerana.jpg/500px-Cerana.jpg",
    gecko: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Gekko_gecko.jpg/500px-Gekko_gecko.jpg",
    black_snake: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Ptyas_dhumnades_62027076.jpg/500px-Ptyas_dhumnades_62027076.jpg",
    pit_viper: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Deinagkistrodon_acutus_295892035.jpg/500px-Deinagkistrodon_acutus_295892035.jpg",
    aloe_vera: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Aloe_vera_flower_bud.jpg/500px-Aloe_vera_flower_bud.jpg",
    senna: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Senna_sp_00978.jpg/500px-Senna_sp_00978.jpg",
    evening_primrose: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Oenothera_biennis%2C_Vic-la-Gardiole_01.jpg/500px-Oenothera_biennis%2C_Vic-la-Gardiole_01.jpg",
    flaxseed: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Linum_usitatissimum_qtl1.jpg/500px-Linum_usitatissimum_qtl1.jpg",
    lions_mane: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Hericium_erinaceus_101875852.jpg/500px-Hericium_erinaceus_101875852.jpg",
    turkey_tail: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Trametes_Versicolor-20191227-RM-145922.jpg/500px-Trametes_Versicolor-20191227-RM-145922.jpg",
    chaga: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Inonotus_obliquus.jpg/500px-Inonotus_obliquus.jpg",
    cordyceps: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Cordyceps_sinensis.jpg/500px-Cordyceps_sinensis.jpg",
    cicada_slough: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Cryptotympana_atrata.jpg/500px-Cryptotympana_atrata.jpg"
};

// Growing habitat info for each herb
const herbHabitat = {
    ginseng: "Grows in cool, temperate forests with well-drained, humus-rich soil. Found in mountainous regions of Northeast China (Changbai Mountains), Korea, and Russian Far East. Prefers shaded areas at 200-900m elevation. Requires 4-6 years to mature.",
    astragalus: "Thrives in dry, sandy grasslands and open mountain slopes. Native to northern China (Inner Mongolia, Hebei, Shanxi) and Mongolia. Drought-tolerant, prefers full sun and alkaline soil (pH 7-8). Root harvested after 4-5 years.",
    goji: "Grows in alkaline, saline soils along river valleys and plains. Native to Ningxia, China (Yellow River region). Extremely hardy — tolerates drought, frost, and poor soil. Also grows wild in Tibet, Inner Mongolia, and parts of Europe.",
    reishi: "Found on decaying hardwood trees (oak, maple, plum) in humid forests. Native to East Asia (China, Japan, Korea). Grows in warm, humid climates at 300-1500m elevation. Now widely cultivated on sawdust substrates.",
    turmeric: "Tropical plant requiring warm temperatures (20-30°C) and heavy rainfall. Native to Southeast Asia and southern India. Grows in rich, well-drained soil with partial shade. Requires 8-10 months of growing season.",
    chamomile: "Thrives in temperate climates with moderate rainfall. Native to Europe and Western Asia, now naturalized worldwide. Grows in open fields, roadsides, and waste places. Prefers well-drained soil and full sun to partial shade.",
    elderberry: "Grows in moist, fertile soils along streams, hedgerows, and woodland edges. Native to Europe, North Africa, and Western Asia. Naturalized in North America. Tolerates partial shade but fruits best in full sun.",
    echinacea: "Native to eastern and central North America. Grows in prairies, open woodlands, and grasslands. Prefers well-drained soil and full sun. Very drought-tolerant once established. Roots harvested after 3-4 years.",
    valerian: "Grows in damp meadows, riverbanks, and woodland clearings across Europe and Asia. Prefers rich, moist soil and full sun to partial shade. Naturalized in North America. Roots harvested in autumn after 2 years.",
    peppermint: "Hybrid plant (M. aquatica × M. spicata) found in moist habitats. Native to Europe and Middle East, now cultivated worldwide. Grows best in cool, damp conditions with partial shade. Spreads aggressively via runners.",
    ashwagandha: "Thrives in dry, arid regions with sandy, well-drained soil. Native to India, Middle East, and parts of Africa. Prefers temperatures 20-30°C and low rainfall (300-500mm/year). Drought-tolerant once established.",
    lavender: "Grows in dry, rocky, calcareous soils in Mediterranean climate. Native to Mediterranean region (France, Spain, Italy). Requires full sun, excellent drainage, and low humidity. Tolerates poor soil and drought."
};

// Full herb descriptions (longer, for modal)
const herbFullDesc = {
    ginseng: "Known as the 'King of Herbs' in Chinese medicine, Ginseng (Panax ginseng) has been used for over 2,000 years. The word 'Panax' means 'all-healing' in Greek. Modern research confirms its adaptogenic properties — it helps the body resist stress and maintain homeostasis. Active compounds called ginsenosides have been shown to boost energy, enhance cognitive function, support immune health, and regulate blood sugar.",
    astragalus: "A fundamental herb in Traditional Chinese Medicine, Astragalus (Huang Qi) has been used for over 2,000 years to strengthen Qi (vital energy). Modern studies show it contains polysaccharides and saponins that support immune function, protect the heart, and have anti-aging properties. It's commonly added to soups and teas in Chinese households for daily wellness.",
    goji: "Goji berries (Gou Qi Zi) have been used in Chinese medicine for over 2,000 years. The 'Ben Cao Gang Mu' (本草纲目) describes them as beneficial for the eyes, liver, and kidneys. Rich in antioxidants (zeaxanthin, beta-carotene, vitamin C), modern research supports their role in eye health, immune function, and longevity. The best quality comes from Ningxia, China.",
    reishi: "Known as 'Ling Zhi' (灵芝) or the 'Mushroom of Immortality,' Reishi has been revered in Chinese culture for over 2,000 years. It was once reserved for royalty. Modern research confirms its immunomodulatory, anti-inflammatory, and stress-reducing properties. It contains triterpenoids and polysaccharides that support immune function and may have anti-cancer potential.",
    turmeric: "Used in both Chinese and Ayurvedic medicine for thousands of years, Turmeric (Jiang Huang) contains curcumin — one of the most studied natural anti-inflammatory compounds. Research shows curcumin matches the effectiveness of some anti-inflammatory drugs without side effects. It supports joint health, digestion, and may help prevent chronic diseases.",
    chamomile: "Chamomile (Gan Ju) is one of the most widely used medicinal herbs globally. In Chinese medicine, it's used to clear heat and calm the spirit. Modern research confirms its anxiolytic and sleep-promoting effects, primarily due to the flavonoid apigenin. It's considered one of the safest herbs for daily use, including for children.",
    elderberry: "Elderberry (Jie Gu Mu) has been used in European folk medicine for centuries. Modern clinical trials show that elderberry extract can significantly reduce the duration and severity of colds and flu. Rich in anthocyanins and vitamin C, it supports immune function and has antiviral properties. The berries must be cooked before consumption — raw berries are toxic.",
    echinacea: "Echinacea (Zi Zhui Ju) is the most popular herbal remedy in North America for cold prevention. Native American tribes used it for various ailments long before European contact. Modern studies show it can reduce cold risk by 58% and shorten duration by 1-4 days. The purple coneflower's roots, leaves, and flowers all contain medicinal compounds.",
    valerian: "Valerian (Xie Cao) has been used since ancient Greek and Roman times for insomnia and anxiety. In Chinese medicine, it calms the spirit and regulates Qi. Modern clinical trials support its use for improving sleep quality without the morning grogginess associated with prescription sleep aids. It works by increasing GABA levels in the brain.",
    peppermint: "Peppermint (Bo He) is a hybrid plant with a long history in both Western and Chinese herbal medicine. Its active compound, menthol, relaxes smooth muscles in the digestive tract, making it effective for IBS, bloating, and nausea. In Chinese medicine, it's used to release wind-heat and clear the head and eyes. The essential oil is also widely used in aromatherapy.",
    ashwagandha: "Ashwagandha (Nan Zui Qie) is one of the most important herbs in Ayurvedic medicine and increasingly recognized in TCM. As an adaptogen, it helps the body manage stress by regulating cortisol levels. Clinical trials show it can reduce anxiety by 44%, improve sleep quality, boost testosterone in men, and enhance physical performance.",
    lavender: "Lavender (Xun Yi Cao) is the most widely used aromatic herb in the world. In Chinese medicine, it calms the spirit and harmonizes the middle burner. Modern research confirms its anxiolytic effects through inhalation and oral use. The essential oil contains linalool and linalyl acetate, which interact with GABA receptors to produce calming effects."
};

// ============================================
// Modal Functions
// ============================================
function openHerbModal(herbId) {
    const herb = herbsData.find(h => h.id === herbId);
    if (!herb) return;

    const modal = document.getElementById('herb-modal');
    const modalBody = document.getElementById('modal-body');
    if (!modal || !modalBody) return;

    const photoUrl = herbPhotos[herbId] || '';
    const habitat = herbHabitat[herbId] || '';
    const fullDesc = herbFullDesc[herbId] || herb.description;

    modalBody.innerHTML = `
        <div class="modal-hero">
            <img src="${photoUrl}" alt="${herb.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="modal-hero-fallback" style="display:none; font-size:80px; height:200px; align-items:center; justify-content:center; background:${herb.iconBg}">${herb.icon}</div>
        </div>
        <div class="modal-content">
            <h2 class="modal-title">${herb.name}</h2>
            <p class="modal-subtitle">${herb.chinese}</p>
            <p style="color: var(--color-text-secondary); font-style: italic; margin-bottom: 16px;">${herb.scientificName}</p>
            
            <div class="modal-section">
                <h4>📖 Overview</h4>
                <p>${fullDesc}</p>
            </div>
            
            <div class="modal-section">
                <h4>🌱 Growing Habitat & Distribution</h4>
                <p>${habitat}</p>
            </div>
            
            <div class="modal-section">
                <h4>✅ Key Benefits</h4>
                <ul>${herb.benefits.map(b => `<li>${b}</li>`).join('')}</ul>
            </div>
            
            <div class="modal-section">
                <h4>📍 Origin</h4>
                <p>${herb.origin}</p>
            </div>
            
            <div class="modal-section">
                <h4>🔗 Scientific Research</h4>
                <p><a href="${herb.research}" target="_blank" rel="noopener" style="color: var(--color-primary);">View studies on PubMed →</a></p>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeHerbModal() {
    const modal = document.getElementById('herb-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ============================================
// Tea Recipes Data
// ============================================
const teaRecipes = {
    'astragalus': {
        name: 'Astragalus Immune Tea',
        chinese: '黄芪养生茶',
        emoji: '🍵',
        tag: 'Immunity',
        time: '15 min',
        ingredients: '3 ingredients',
        description: 'A classic Chinese herbal tea for strengthening Qi and boosting immunity. This gentle, slightly sweet tea is perfect for daily wellness, especially during cold and flu season.',
        ingredientList: [
            '10g Astragalus root slices (黄芪)',
            '5 Goji berries (枸杞)',
            '3 Red dates (红枣), pitted'
        ],
        instructions: '1. Rinse all ingredients under cold water.<br>2. Add 500ml water to a pot and bring to a boil.<br>3. Add Astragalus and red dates, reduce heat and simmer for 10 minutes.<br>4. Add Goji berries in the last 2 minutes.<br>5. Strain and serve. Can be re-steeped 2-3 times.',
        benefits: ['Strengthens immune system', 'Boosts energy and vitality', 'Supports heart health', 'Anti-aging properties'],
        bestTime: 'Morning or early afternoon'
    },
    'goji-sleep': {
        name: 'Chamomile & Goji Sleep Tea',
        chinese: '甘菊枸杞安眠茶',
        emoji: '🌙',
        tag: 'Sleep',
        time: '10 min',
        ingredients: '4 ingredients',
        description: 'A calming bedtime blend that combines the relaxing properties of chamomile with the nourishing benefits of Goji berries. Perfect for winding down after a long day.',
        ingredientList: [
            '2g dried chamomile flowers (甘菊)',
            '5 Goji berries (枸杞)',
            '1 tsp honey (optional)',
            '2 dried longan (龙眼)'
        ],
        instructions: '1. Boil 400ml water and let cool to 85°C.<br>2. Add chamomile and longan to a cup.<br>3. Pour hot water over ingredients.<br>4. Steep for 5-7 minutes with a lid.<br>5. Add Goji berries and honey in the last minute.<br>6. Drink 30 minutes before bed.',
        benefits: ['Promotes restful sleep', 'Calms the mind', 'Reduces anxiety', 'Nourishes the eyes'],
        bestTime: '30 minutes before bed'
    },
    'ginseng-energy': {
        name: 'Ginseng & Red Date Energy Tea',
        chinese: '人参红枣补气茶',
        emoji: '❤️',
        tag: 'Energy',
        time: '20 min',
        ingredients: '3 ingredients',
        description: 'A powerful energy-boosting tea that provides natural vitality without the crash of coffee. Ginseng is the king of Chinese herbs for a reason — it truly revitalizes.',
        ingredientList: [
            '3-5g Ginseng slices (人参)',
            '5 Red dates (红枣), pitted',
            '10g Goji berries (枸杞)'
        ],
        instructions: '1. Rinse Ginseng slices briefly with warm water.<br>2. Add 600ml water to a pot.<br>3. Add Ginseng and red dates, bring to a boil.<br>4. Reduce heat and simmer for 15 minutes.<br>5. Add Goji berries in the last 3 minutes.<br>6. Strain and serve. Best consumed in the morning.',
        benefits: ['Natural energy boost', 'Enhances cognitive function', 'Strengthens immunity', 'Supports adrenal health'],
        bestTime: 'Morning, before noon'
    }
};

// TCM Basics Data
const basicsData = {
    'yinyang': {
        name: 'Yin & Yang',
        chinese: '阴阳',
        emoji: '☯️',
        description: 'The fundamental duality of the universe. In TCM, health is maintained when Yin (cool, passive, nourishing) and Yang (warm, active, transforming) are in balance within the body.',
        details: 'Yin and Yang are not opposing forces — they are complementary. Every organ has both Yin and Yang aspects. For example, the stomach\'s Yin is its mucous lining (nourishing), while its Yang is its digestive fire (transforming). When Yin is deficient, you may feel hot, restless, or dry. When Yang is deficient, you may feel cold, tired, or sluggish.',
        applications: ['Dietary balance (cooling vs warming foods)', 'Lifestyle adjustments by season', 'Understanding disease patterns', 'Guiding herbal prescriptions']
    },
    'qi': {
        name: 'Qi (Vital Energy)',
        chinese: '气',
        emoji: '🌀',
        description: 'The life force that flows through all living things. When Qi flows freely, the body is healthy. When Qi is blocked or deficient, illness occurs.',
        details: 'Qi has multiple functions: it transforms (digestion), transports (circulation), holds (organ position), protects (immune defense), and warms (body temperature). There are different types of Qi — Yuan Qi (original/ancestral), Gu Qi (food Qi), Kong Qi (air Qi), and Ying Qi (nutritive Qi). Acupressure works by stimulating Qi flow along meridians.',
        applications: ['Breathing exercises (Qi Gong)', 'Dietary therapy', 'Acupressure and acupuncture', 'Movement practices (Tai Chi)']
    },
    'five-elements': {
        name: 'Five Elements',
        chinese: '五行',
        emoji: '🔥',
        description: 'Wood, Fire, Earth, Metal, Water — each element corresponds to specific organs, emotions, colors, seasons, and tastes in the body.',
        details: 'The Five Elements form a cycle of creation (Wood feeds Fire, Fire creates Earth/ash, Earth bears Metal, Metal collects Water, Water nourishes Wood) and a cycle of control (Wood parts Earth, Earth dams Water, Water extinguishes Fire, Fire melts Metal, Metal cuts Wood). Understanding these cycles helps practitioners diagnose imbalances and design treatments.',
        applications: ['Diagnostic framework', 'Herbal selection by element', 'Emotional healing', 'Seasonal wellness practices']
    },
    'meridians': {
        name: 'Meridian System',
        chinese: '经络',
        emoji: '🫀',
        description: 'The network of energy pathways connecting the body. There are 12 primary meridians, each associated with a major organ. Acupressure points lie along these meridians.',
        details: 'The 12 primary meridians form a continuous loop through the body: Lung → Large Intestine → Stomach → Spleen → Heart → Small Intestine → Bladder → Kidney → Pericardium → Triple Heater → Gallbladder → Liver. There are also 8 extraordinary meridians that act as reservoirs. When a meridian is blocked, the corresponding organ system is affected.',
        applications: ['Acupressure point selection', 'Understanding pain patterns', 'Organ system diagnosis', 'Energy healing practices']
    }
};

// ============================================
// DOM Ready
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    renderHerbs();
    initFilters();
    initBodyMap();
    initPointCards();
    initTeaCards();
    initModal();
    initTeaCards();
    initBasicCards();
});

function initModal() {
    // Close on X button
    document.getElementById('modal-close')?.addEventListener('click', closeHerbModal);
    // Close on overlay click
    document.getElementById('herb-modal')?.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeHerbModal();
    });
    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeHerbModal();
    });
}

// ============================================
// Navigation
// ============================================
function initNavigation() {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');

    if (toggle && links) {
        toggle.addEventListener('click', () => {
            links.classList.toggle('active');
        });

        // Close on link click
        links.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                links.classList.remove('active');
            });
        });
    }

    // Scroll effect
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.borderBottomColor = 'var(--color-border)';
        } else {
            nav.style.borderBottomColor = 'var(--color-border-light)';
        }
    });
}

// ============================================
// Render Herbs
// ============================================
function renderHerbs(category = 'all') {
    const grid = document.getElementById('herbs-grid');
    if (!grid) return;

    const filtered = category === 'all' 
        ? herbsData 
        : herbsData.filter(h => h.category === category);

    grid.innerHTML = filtered.map(herb => {
        const photoUrl = herbPhotos[herb.id] || '';
        return `
        <div class="herb-card" data-category="${herb.category}" data-herb-id="${herb.id}">
            <div class="herb-card-img">
                <img src="${photoUrl}" alt="${herb.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="herb-card-img-fallback" style="display:none; font-size:48px; width:100%; height:100%; align-items:center; justify-content:center; background:${herb.iconBg}">${herb.icon}</div>
            </div>
            <div class="herb-card-body">
                <div class="herb-card-header">
                    <div class="herb-icon" style="background: ${herb.iconBg}">${herb.icon}</div>
                    <div>
                        <h3>${herb.name}</h3>
                        <span class="herb-chinese">${herb.chinese}</span>
                    </div>
                </div>
                <p>${herb.description}</p>
                <div class="herb-tags">
                    ${herb.benefits.map(b => `<span class="herb-tag">${b}</span>`).join('')}
                </div>
            </div>
        </div>
        `;
    }).join('');

    // Add click handlers — open modal with real photos
    grid.querySelectorAll('.herb-card').forEach(card => {
        card.addEventListener('click', () => {
            const herbId = card.dataset.herbId;
            if (herbId) openHerbModal(herbId);
        });
    });
}

// ============================================
// Filters
// ============================================
function initFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter herbs
            const category = btn.dataset.filter;
            renderHerbs(category);
        });
    });
}

// ============================================
// Body Map
// ============================================
function initBodyMap() {
    const points = document.querySelectorAll('.point');
    const infoPanel = document.getElementById('point-info');
    const defaultInfo = infoPanel?.querySelector('.point-info-default');
    const detailInfo = infoPanel?.querySelector('.point-info-detail');
    const nameEl = document.getElementById('point-name');
    const benefitEl = document.getElementById('point-benefit');
    const instructionsEl = document.getElementById('point-instructions');

    points.forEach(point => {
        point.addEventListener('click', () => {
            const pointId = point.dataset.point;
            const data = pointsData[pointId];
            
            if (data && defaultInfo && detailInfo) {
                defaultInfo.style.display = 'none';
                detailInfo.style.display = 'block';
                nameEl.textContent = data.name + ' — ' + data.english;
                benefitEl.textContent = data.benefits;
                instructionsEl.innerHTML = `
                    <strong>📍 Location:</strong> ${data.location}<br><br>
                    <strong>💆 How to stimulate:</strong><br>${data.instructions}
                `;
            }

            // Highlight selected point
            points.forEach(p => p.style.opacity = '0.5');
            point.style.opacity = '1';

            // Also open modal for full details
            openPointModal(pointId);
        });
    });
}

// ============================================
// Point Cards — open detail modal
// ============================================
function initPointCards() {
    const cards = document.querySelectorAll('.point-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const pointId = card.dataset.point;
            openPointModal(pointId);
        });
    });
}

// ============================================
// Acupressure Point Modal
// ============================================
function openPointModal(pointId) {
    const data = pointsData[pointId];
    if (!data) return;

    const modal = document.getElementById('herb-modal');
    const modalBody = document.getElementById('modal-body');
    if (!modal || !modalBody) return;

    modalBody.innerHTML = `
        <div class="modal-hero" style="background: linear-gradient(135deg, #e8eaf6, #c5cae9); display: flex; align-items: center; justify-content: center; height: 200px;">
            <span style="font-size: 80px;">📍</span>
        </div>
        <div class="modal-content">
            <h2 class="modal-title">${data.name}</h2>
            <p class="modal-subtitle">${data.english}</p>
            
            <div class="modal-section">
                <h4>📍 Location</h4>
                <p>${data.location}</p>
            </div>
            
            <div class="modal-section">
                <h4>✅ Benefits</h4>
                <p>${data.benefits}</p>
            </div>
            
            <div class="modal-section">
                <h4>💆 How to Stimulate</h4>
                <p>${data.instructions}</p>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ============================================
// Tea Recipe Data
// ============================================
const teaData = {
    "astragalus": {
        name: "Astragalus Immunity Tea",
        chinese: "黄芪养生茶",
        tag: "Immunity",
        time: "15 min",
        servings: "2 cups",
        ingredients: [
            "10g sliced Astragalus root (黄芪)",
            "5g Goji berries (枸杞)",
            "3 red dates (红枣), pitted",
            "500ml water",
            "Honey to taste (optional)"
        ],
        instructions: "Rinse all herbs briefly with hot water. Add astragalus and red dates to a pot with 500ml cold water. Bring to a boil, then simmer on low heat for 15 minutes. Add goji berries in the last 5 minutes. Strain and serve warm. Add honey if desired.",
        benefits: "Strengthens Qi and boosts immune function. Excellent for preventing colds during seasonal changes. The combination of astragalus with goji and red dates creates a balanced tonic that supports energy without overstimulation.",
        caution: "Avoid during active infections or fever. Not recommended for pregnant women without medical advice."
    },
    "goji-sleep": {
        name: "Goji Berry Sleep Tea",
        chinese: "枸杞安神茶",
        tag: "Sleep",
        time: "10 min",
        servings: "1 cup",
        ingredients: [
            "15g Goji berries (枸杞)",
            "5g dried Chrysanthemum flowers (菊花)",
            "5g Longan fruit (龙眼肉)",
            "300ml water",
            "Rock sugar to taste (optional)"
        ],
        instructions: "Bring water to 80°C (not boiling — boiling damages goji antioxidants). Add all ingredients and steep for 8-10 minutes. Strain and serve. Best consumed 30 minutes before bedtime for optimal sleep benefits.",
        benefits: "Calms the mind and promotes restful sleep. Goji berries nourish liver and kidney yin, chrysanthemum clears heat and calms the spirit, while longan nourishes blood and calms anxiety. A gentle, natural sleep aid.",
        caution: "Avoid if you have diarrhea or cold/flu symptoms."
    },
    "ginseng-energy": {
        name: "Ginseng Energy Tea",
        chinese: "人参提神茶",
        tag: "Energy",
        time: "20 min",
        servings: "2 cups",
        ingredients: [
            "5g sliced Ginseng root (人参) or American Ginseng (西洋参)",
            "5g Astragalus root (黄芪)",
            "3 red dates (红枣)",
            "2 slices of ginger (生姜)",
            "500ml water"
        ],
        instructions: "Add ginseng, astragalus, red dates, and ginger to cold water. Bring to a boil, then reduce heat and simmer for 20 minutes. Strain and serve warm. Best consumed in the morning or early afternoon — avoid evening use as it may interfere with sleep.",
        benefits: "Boosts energy, enhances mental clarity, and strengthens the immune system. Ginseng provides adaptogenic support while astragalus strengthens Qi. Ginger aids digestion and warming. Ideal for combating fatigue and seasonal tiredness.",
        caution: "Not recommended for those with high blood pressure, insomnia, or during acute illness. Avoid with caffeine."
    }
};

// ============================================
// Tea Card Click Handlers
// ============================================
function initTeaCards() {
    const cards = document.querySelectorAll('.tea-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const teaId = card.dataset.tea;
            openTeaModal(teaId);
        });
    });
}

function openTeaModal(teaId) {
    const data = teaData[teaId];
    if (!data) return;

    const modal = document.getElementById('herb-modal');
    const modalBody = document.getElementById('modal-body');
    if (!modal || !modalBody) return;

    modalBody.innerHTML = `
        <div class="modal-hero" style="background: linear-gradient(135deg, #f0f7ec, #dcedc8); display: flex; align-items: center; justify-content: center; height: 200px;">
            <span style="font-size: 80px;">🍵</span>
        </div>
        <div class="modal-content">
            <h2 class="modal-title">${data.name}</h2>
            <p class="modal-subtitle">${data.chinese}</p>
            <p style="color: var(--color-text-secondary); margin-bottom: 16px;">⏱ ${data.time} · 🍽 ${data.servings}</p>
            
            <div class="modal-section">
                <h4>📋 Ingredients</h4>
                <ul>${data.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
            </div>
            
            <div class="modal-section">
                <h4>👨‍🍳 Instructions</h4>
                <p>${data.instructions}</p>
            </div>
            
            <div class="modal-section">
                <h4>✅ Health Benefits</h4>
                <p>${data.benefits}</p>
            </div>
            
            <div class="modal-section">
                <h4>⚠️ Caution</h4>
                <p>${data.caution}</p>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ============================================
// Newsletter Form (placeholder)
// ============================================
document.querySelector('.newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    alert(`Thank you for subscribing with ${email}! We'll send you weekly TCM insights.`);
    e.target.reset();
});

// ============================================
// Tea Cards
// ============================================
function initTeaCards() {
    document.querySelectorAll('.tea-card').forEach(card => {
        card.addEventListener('click', () => {
            const teaId = card.dataset.tea;
            if (teaId) openTeaModal(teaId);
        });
    });
}

function openTeaModal(teaId) {
    const tea = teaRecipes[teaId];
    if (!tea) return;

    const modal = document.getElementById('herb-modal');
    const modalBody = document.getElementById('modal-body');
    if (!modal || !modalBody) return;

    modalBody.innerHTML = `
        <div class="modal-hero" style="background: linear-gradient(135deg, #e8f5e9, #c8e6c9); display:flex; align-items:center; justify-content:center;">
            <span style="font-size: 100px;">${tea.emoji}</span>
        </div>
        <div class="modal-content">
            <h2 class="modal-title">${tea.name}</h2>
            <p class="modal-subtitle">${tea.chinese}</p>
            <div class="modal-tags">
                <span class="modal-tag">${tea.tag}</span>
                <span class="modal-tag">⏱ ${tea.time}</span>
                <span class="modal-tag">🌱 ${tea.ingredients}</span>
            </div>
            
            <div class="modal-section">
                <h4>📖 About This Tea</h4>
                <p>${tea.description}</p>
            </div>
            
            <div class="modal-section">
                <h4>🥄 Ingredients</h4>
                <ul>${tea.ingredientList.map(i => `<li>${i}</li>`).join('')}</ul>
            </div>
            
            <div class="modal-section">
                <h4>📝 Instructions</h4>
                <p>${tea.instructions}</p>
            </div>
            
            <div class="modal-section">
                <h4>✅ Benefits</h4>
                <ul>${tea.benefits.map(b => `<li>${b}</li>`).join('')}</ul>
            </div>
            
            <div class="modal-section">
                <h4>⏰ Best Time</h4>
                <p>${tea.bestTime}</p>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ============================================
// Basic Cards (TCM Fundamentals)
// ============================================
function initBasicCards() {
    document.querySelectorAll('.basic-card').forEach((card, index) => {
        const keys = ['yinyang', 'qi', 'five-elements', 'meridians'];
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            const key = keys[index];
            if (key) openBasicModal(key);
        });
    });
}

function openBasicModal(basicId) {
    const basic = basicsData[basicId];
    if (!basic) return;

    const modal = document.getElementById('herb-modal');
    const modalBody = document.getElementById('modal-body');
    if (!modal || !modalBody) return;

    modalBody.innerHTML = `
        <div class="modal-hero" style="background: linear-gradient(135deg, #f5f5f5, #e0e0e0); display:flex; align-items:center; justify-content:center;">
            <span style="font-size: 100px;">${basic.emoji}</span>
        </div>
        <div class="modal-content">
            <h2 class="modal-title">${basic.name}</h2>
            <p class="modal-subtitle">${basic.chinese}</p>
            
            <div class="modal-section">
                <h4>📖 Overview</h4>
                <p>${basic.description}</p>
            </div>
            
            <div class="modal-section">
                <h4>🔬 Deep Dive</h4>
                <p>${basic.details}</p>
            </div>
            
            <div class="modal-section">
                <h4>💡 Practical Applications</h4>
                <ul>${basic.applications.map(a => `<li>${a}</li>`).join('')}</ul>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}
