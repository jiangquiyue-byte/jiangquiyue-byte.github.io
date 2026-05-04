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
        benefits: ["['Boosts energy and reduces fatigue', 'Enhances cognitive function', 'Strengthens immune system', 'Supports cardiovascular health', 'Anti-aging properties']"],
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
        benefits: ["['Strengthens immune system', 'Supports heart health', 'Promotes wound healing', 'Anti-aging effects', 'Enhances energy (Qi)']"],
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
        benefits: ["['Supports eye health and vision', 'Rich in antioxidants', 'Boosts immune function', 'Promotes longevity', 'Nourishes Liver and Kidneys']"],
        category: "eye_health",
        scientificName: "Lycium barbarum",
        origin: "Ningxia, China, Tibet",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Lycium+barbarum"
    },
    {
        id: "reishi",
        name: "Reishi Mushroom",
        chinese: "灵芝 (Líng Zhī)",
        icon: "😴",
        iconBg: "#f3e5f5",
        description: "Available as tea, extract, powder, or capsules. Can be sliced and steeped in hot water.",
        benefits: ["['Promotes restful sleep', 'Supports immune function', 'Reduces stress and anxiety', 'Supports liver health', 'Anti-aging properties']"],
        category: "sleep",
        scientificName: "Ganoderma lucidum",
        origin: "China, Japan, Korea",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Ganoderma+lucidum"
    },
    {
        id: "turmeric",
        name: "Turmeric",
        chinese: "姜黄 (Jiāng Huáng)",
        icon: "🍽️",
        iconBg: "#fce4ec",
        description: "Used in cooking (curry), teas, and supplements. Combine with black pepper for better absorption.",
        benefits: ["['Powerful anti-inflammatory', 'Supports joint health', 'Aids digestion', 'Antioxidant properties', 'Supports liver function']"],
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
        benefits: ["['Boosts immune system naturally', 'Fights cold and flu symptoms', 'Reduces inflammation', 'Supports respiratory health']"],
        category: "immunity",
        scientificName: "Echinacea purpurea",
        origin: "North America, Central United States",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Echinacea+purpurea"
    },
    {
        id: "chamomile",
        name: "Chamomile",
        chinese: "洋甘菊 (Yáng Gān Jú)",
        icon: "😴",
        iconBg: "#f3e5f5",
        description: "Tea, essential oil, or topical application. Steep flowers in hot water for 5-10 minutes.",
        benefits: ["['Promotes restful sleep', 'Soothes digestive issues', 'Reduces anxiety and stress', 'Anti-inflammatory properties']"],
        category: "sleep",
        scientificName: "Matricaria chamomilla",
        origin: "Europe, Western Asia, North America",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Matricaria+chamomilla"
    },
    {
        id: "peppermint",
        name: "Peppermint",
        chinese: "薄荷 (Bò He)",
        icon: "🍽️",
        iconBg: "#fce4ec",
        description: "Tea, essential oil, topical cream, or fresh leaves. Steep leaves in hot water for 5-7 minutes.",
        benefits: ["['Relieves headaches and migraines', 'Aids digestion and reduces bloating', 'Clears nasal congestion', 'Soothes sore muscles']"],
        category: "digestion",
        scientificName: "Mentha × piperita",
        origin: "Europe, Middle East, North America",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Mentha+×+piperita"
    },
    {
        id: "lavender",
        name: "Lavender",
        chinese: "薰衣草 (Xūn Yī Cǎo)",
        icon: "😴",
        iconBg: "#f3e5f5",
        description: "Essential oil for aromatherapy, topical application, or tea. Add flowers to bath water.",
        benefits: ["['Promotes deep sleep', 'Reduces anxiety and depression', 'Heals burns and wounds', 'Relieves headaches']"],
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
        benefits: ["['Powerful natural antibiotic', 'Lowers blood pressure and cholesterol', 'Boosts immune function', 'Antioxidant properties']"],
        category: "immunity",
        scientificName: "Allium sativum",
        origin: "Central Asia, Worldwide cultivation",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Allium+sativum"
    },
    {
        id: "ginger",
        name: "Ginger",
        chinese: "生姜 (Shēng Jiāng)",
        icon: "🍽️",
        iconBg: "#fce4ec",
        description: "Fresh in cooking, tea, or supplements. Slice and steep in hot water for ginger tea.",
        benefits: ["['Relieves nausea and vomiting', 'Aids digestion', 'Reduces muscle pain', 'Anti-inflammatory effects']"],
        category: "digestion",
        scientificName: "Zingiber officinale",
        origin: "Southeast Asia, India",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Zingiber+officinale"
    },
    {
        id: "cinnamon",
        name: "Cinnamon",
        chinese: "肉桂 (Ròu Guì)",
        icon: "🔥",
        iconBg: "#fff3e0",
        description: "Spice in cooking, tea, or supplements. Add to warm drinks and desserts.",
        benefits: ["['Warms the body', 'Improves circulation', 'Lowers blood sugar', 'Anti-microbial properties']"],
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
        iconBg: "#e8eaf6",
        description: "Cooking herb, tea, essential oil, or hair rinse. Steep fresh or dried leaves in hot water.",
        benefits: ["['Enhances memory and concentration', 'Improves blood circulation', 'Stimulates hair growth', 'Relieves muscle pain']"],
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
        iconBg: "#e0f7fa",
        description: "Cooking herb, tea, essential oil, or throat gargle. Steep leaves in hot water for respiratory support.",
        benefits: ["['Treats coughs and bronchitis', 'Natural antiseptic', 'Aids digestion', 'Rich in antioxidants']"],
        category: "respiratory",
        scientificName: "Thymus vulgaris",
        origin: "Mediterranean, Europe, North Africa",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Thymus+vulgaris"
    },
    {
        id: "valerian",
        name: "Valerian",
        chinese: "缬草 (Xié Cǎo)",
        icon: "😴",
        iconBg: "#f3e5f5",
        description: "Tea, tincture, or capsules. Steep root in hot water for 10-15 minutes before bed.",
        benefits: ["['Promotes deep sleep', 'Reduces anxiety', 'Relieves menstrual cramps', 'Lowers blood pressure']"],
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
        iconBg: "#f1f8e9",
        description: "Capsules, tincture, or tea. Standardized extract (silymarin) is most common.",
        benefits: ["['Protects liver cells', 'Supports detoxification', 'Rich in antioxidants', 'May help with hangover recovery']"],
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
        iconBg: "#f1f8e9",
        description: "Root tea, leaf salad, or supplements. Roasted root makes a coffee substitute.",
        benefits: ["['Supports liver health', 'Natural diuretic', 'Aids digestion', 'Rich in vitamins A, C, K']"],
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
        benefits: ["['Fights cold and flu viruses', 'Rich in antioxidants', 'Reduces inflammation', 'Supports heart health']"],
        category: "immunity",
        scientificName: "Sambucus nigra",
        origin: "Europe, North America, North Africa",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Sambucus+nigra"
    },
    {
        id: "calendula",
        name: "Calendula",
        chinese: "金盏花 (Jīn Zhǎn Huā)",
        icon: "✨",
        iconBg: "#fffde7",
        description: "Topical cream, oil infusion, tea, or wash. Apply directly to skin irritations.",
        benefits: ["['Heals wounds and burns', 'Soothes skin irritation', 'Anti-fungal properties', 'Reduces menstrual cramps']"],
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
        iconBg: "#e8f5e9",
        description: "Powder, capsules, or tea. Mix powder with warm milk or water.",
        benefits: ["['Reduces stress and cortisol levels', 'Boosts energy and stamina', 'Enhances cognitive function', 'Supports immune system']"],
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
        iconBg: "#fff9c4",
        description: "Tea, tincture, capsules, or oil. Steep flowers in hot water for 10 minutes.",
        benefits: ["['Supports emotional well-being', 'Relieves mild depression', 'Heals wounds and burns', 'Reduces nerve pain']"],
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
        iconBg: "#e8eaf6",
        description: "Standardized extract (EGb 761), tea, or capsules.",
        benefits: ["['Improves memory and cognition', 'Enhances blood circulation', 'Antioxidant protection', 'May help with tinnitus']"],
        category: "cognitive",
        scientificName: "Ginkgo biloba",
        origin: "China, Japan, Korea",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Ginkgo+biloba"
    },
    {
        id: "saw_palmetto",
        name: "Saw Palmetto",
        chinese: "锯棕榈 (Jù Zōng Lǘ)",
        icon: "🩺",
        iconBg: "#e8eaf6",
        description: "Capsules, tincture, or tea. Standardized extract is most common.",
        benefits: ["['Supports prostate health', 'Reduces urinary symptoms', 'Anti-inflammatory', 'May support hair growth']"],
        category: "prostate",
        scientificName: "Serenoa repens",
        origin: "Southeastern United States",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Serenoa+repens"
    },
    {
        id: "feverfew",
        name: "Feverfew",
        chinese: "小白菊 (Xiǎo Bái Jú)",
        icon: "💊",
        iconBg: "#fce4ec",
        description: "Fresh leaves, tea, or capsules. Chew 2-3 fresh leaves daily for migraine prevention.",
        benefits: ["['Prevents migraines', 'Reduces fever', 'Anti-inflammatory', 'Relieves arthritis pain']"],
        category: "pain_relief",
        scientificName: "Tanacetum parthenium",
        origin: "Europe, North America",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Tanacetum+parthenium"
    },
    {
        id: "lemon_balm",
        name: "Lemon Balm",
        chinese: "柠檬香蜂草 (Níng Méng Xiāng Fēng Cǎo)",
        icon: "🧘",
        iconBg: "#e0f2f1",
        description: "Tea, essential oil, or capsules. Steep fresh or dried leaves in hot water.",
        benefits: ["['Calms anxiety and stress', 'Improves sleep quality', 'Enhances memory', 'Soothes digestive issues']"],
        category: "calming",
        scientificName: "Melissa officinalis",
        origin: "Europe, Mediterranean",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Melissa+officinalis"
    },
    {
        id: "dong_quai",
        name: "Dong Quai",
        chinese: "当归 (Dāng Guī)",
        icon: "🩸",
        iconBg: "#ffebee",
        description: "Decoction, capsules, or added to soups. Common in women's health formulas.",
        benefits: ["['Nourishes and activates blood', 'Regulates menstruation', 'Relieves pain', 'Moistens intestines']"],
        category: "blood",
        scientificName: "Angelica sinensis",
        origin: "China, Japan, Korea",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Angelica+sinensis"
    },
    {
        id: "licorice",
        name: "Licorice Root",
        chinese: "甘草 (Gān Cǎo)",
        icon: "⚖️",
        iconBg: "#f1f8e9",
        description: "Tea, decoction, or added to herbal formulas as a harmonizer.",
        benefits: ["['Harmonizes other herbs in formulas', 'Soothes sore throat', 'Supports adrenal function', 'Relieves cough']"],
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
        iconBg: "#f3e5f5",
        description: "Tea, decoction, or external wash. Steep flowers in hot water for 10 minutes.",
        benefits: ["['Clears heat and toxins', 'Reduces fever', 'Treats respiratory infections', 'Anti-bacterial properties']"],
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
        benefits: ["['Clears the eyes', 'Reduces fever', 'Relieves headaches', 'Calms the liver']"],
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
        iconBg: "#f3e5f5",
        description: "Granules dissolved in hot water, capsules, or decoction.",
        benefits: ["['Treats colds and flu', 'Clears heat and toxins', 'Reduces sore throat', 'Anti-viral properties']"],
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
        iconBg: "#fff3e0",
        description: "Decoction or capsules. Key ingredient in Xiao Chai Hu Tang formula.",
        benefits: ["['Reduces fever', 'Soothes liver Qi stagnation', 'Relieves chest congestion', 'Treats malaria']"],
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
        iconBg: "#e0f7fa",
        description: "Decoction, powder, or added to soups. Often used in classical formulas.",
        benefits: ["['Strengthens spleen and digestion', 'Promotes urination', 'Calms the mind', 'Boosts immunity']"],
        category: "diuretic",
        scientificName: "Wolfiporia cocos",
        origin: "China, Japan, North America",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Wolfiporia+cocos"
    },
    {
        id: "atractylodes",
        name: "Atractylodes",
        chinese: "白术 (Bái Zhú)",
        icon: "🍽️",
        iconBg: "#fce4ec",
        description: "Decoction or powder. Commonly paired with Poria in formulas.",
        benefits: ["['Strengthens spleen function', 'Dries dampness', 'Stops sweating', 'Supports fetal health']"],
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
        benefits: ["['Activates blood circulation', 'Relieves pain', 'Regulates menstruation', 'Reduces bruises']"],
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
        benefits: ["['Stops bleeding', 'Activates blood circulation', 'Reduces swelling and pain', 'Supports heart health']"],
        category: "blood",
        scientificName: "Panax notoginseng",
        origin: "Yunnan, China, Guangxi, China",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Panax+notoginseng"
    },
    {
        id: "dendrobium",
        name: "Dendrobium",
        chinese: "石斛 (Shí Hú)",
        icon: "🌙",
        iconBg: "#ede7f6",
        description: "Decoction, tea, or capsules. Often simmered for 30+ minutes.",
        benefits: ["['Nourishes yin and fluids', 'Benefits the stomach', 'Clears heat', 'Improves vision']"],
        category: "yin",
        scientificName: "Dendrobium officinale",
        origin: "China, Southeast Asia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Dendrobium+officinale"
    },
    {
        id: "gastrodia",
        name: "Gastrodia",
        chinese: "天麻 (Tiān Má)",
        icon: "🌿",
        iconBg: "#e8f5e9",
        description: "Decoction, powder, or capsules. Often paired with Gastrodia-Uncaria formula.",
        benefits: ["['Relieves headaches and migraines', 'Stops dizziness', 'Calms spasms and convulsions', 'Improves circulation']"],
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
        iconBg: "#efebe9",
        description: "Decoction, capsules, or tea. Simmer bark for 20-30 minutes.",
        benefits: ["['Strengthens bones and joints', 'Lowers blood pressure', 'Supports kidney function', 'Reduces lower back pain']"],
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
        iconBg: "#e0f7fa",
        description: "Decoction (processed form only). Must be processed before use - raw form is toxic.",
        benefits: ["['Dries dampness and phlegm', 'Stops vomiting', 'Reduces nausea', 'Relieves chest congestion']"],
        category: "respiratory",
        scientificName: "Pinellia ternata",
        origin: "China, Japan, Korea",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Pinellia+ternata"
    },
    {
        id: "tangerine_peel",
        name: "Tangerine Peel",
        chinese: "陈皮 (Chén Pí)",
        icon: "🍽️",
        iconBg: "#fce4ec",
        description: "Tea, decoction, or added to cooking. Aged peel is more valued.",
        benefits: ["['Regulates Qi', 'Dries dampness', 'Relieves bloating', 'Reduces phlegm']"],
        category: "digestion",
        scientificName: "Citrus reticulata",
        origin: "China, Japan, Southeast Asia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Citrus+reticulata"
    },
    {
        id: "black_cohosh",
        name: "Black Cohosh",
        chinese: "黑升麻 (Hēi Shēng Má)",
        icon: "🌿",
        iconBg: "#e8f5e9",
        description: "Used for menopause, menstrual cramps, and PMS.",
        benefits: ["['Relieves menopausal symptoms', 'Reduces hot flashes', 'Supports hormonal balance']"],
        category: "women-health",
        scientificName: "Actaea racemosa",
        origin: "North America",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Actaea+racemosa"
    },
    {
        id: "cranberry",
        name: "Cranberry",
        chinese: "蔓越莓 (Màn Yuè Méi)",
        icon: "🧪",
        iconBg: "#fffde7",
        description: "Used for UTI prevention and general urinary health.",
        benefits: ["['Prevents urinary tract infections', 'Rich in antioxidants', 'Supports bladder health']"],
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
        benefits: ["['Boosts libido', 'Enhances fertility', 'Increases energy and stamina']"],
        category: "energy",
        scientificName: "Lepidium meyenii",
        origin: "Peru",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Lepidium+meyenii"
    },
    {
        id: "rhodiola",
        name: "Rhodiola",
        chinese: "红景天 (Hóng Jǐng Tiān)",
        icon: "💆",
        iconBg: "#e0f2f1",
        description: "Used for stress, fatigue, and cognitive decline.",
        benefits: ["['Reduces fatigue', 'Enhances mental performance', 'Adaptogenic properties']"],
        category: "stress",
        scientificName: "Rhodiola rosea",
        origin: "Europe, Asia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Rhodiola+rosea"
    },
    {
        id: "bacopa",
        name: "Bacopa",
        chinese: "假马齿苋 (Jiǎ Mǎ Chǐ Xiàn)",
        icon: "😴",
        iconBg: "#f3e5f5",
        description: "Used for memory enhancement, anxiety, and ADHD.",
        benefits: ["['Improves memory', 'Reduces anxiety', 'Supports cognitive function']"],
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
        benefits: ["['Protects liver', 'Increases stamina', 'Adaptogenic effects']"],
        category: "energy",
        scientificName: "Schisandra chinensis",
        origin: "China, Russia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Schisandra+chinensis"
    },
    {
        id: "berberine",
        name: "Berberine",
        chinese: "黄连素 (Huáng Lián Sù)",
        icon: "🍽️",
        iconBg: "#fce4ec",
        description: "Used for diabetes, infections, and cholesterol management.",
        benefits: ["['Lowers blood sugar', 'Antimicrobial', 'Supports heart health']"],
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
        benefits: ["['Boosts immune system', 'Reduces inflammation', 'Antiviral properties']"],
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
        benefits: ["['Reduces inflammation', 'Supports immune function', 'Relieves arthritis pain']"],
        category: "immunity",
        scientificName: "Uncaria tomentosa",
        origin: "Peru, Amazon",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Uncaria+tomentosa"
    },
    {
        id: "horny_goat_weed",
        name: "Horny Goat Weed",
        chinese: "淫羊藿 (Yín Yáng Huò)",
        icon: "🌱",
        iconBg: "#e8f5e9",
        description: "Used for sexual dysfunction, low libido, and osteoporosis.",
        benefits: ["['Enhances libido', 'Improves erectile function', 'Supports bone health']"],
        category: "reproductive",
        scientificName: "Epimedium grandiflorum",
        origin: "China, Japan",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Epimedium+grandiflorum"
    },
    {
        id: "stiff_silkworm",
        name: "Stiff Silkworm",
        chinese: "僵蚕 (Jiāng Cán)",
        icon: "🐾",
        iconBg: "#efebe9",
        description: "Used for convulsions, seizures, facial paralysis, and swollen lymph nodes. Also treats cough with phlegm and skin rashes.",
        benefits: ["['Dispels wind and stops spasms', 'Resolves phlegm and dissipates nodules', 'Relieves headache and sore throat']"],
        category: "animal",
        scientificName: "Bombyx mori (infected with Beauveria bassiana)",
        origin: "China, Japan, Korea",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Bombyx+mori+(infected+with+Beauveria+bassiana)"
    },
    {
        id: "centipede",
        name: "Centipede",
        chinese: "蜈蚣 (Wú Gōng)",
        icon: "🐾",
        iconBg: "#efebe9",
        description: "Used for severe convulsions, tetanus, migraine, arthritis, and venomous bites.",
        benefits: ["['Extinguishes wind and stops spasms', 'Unblocks collaterals and relieves pain', 'Detoxifies and dissolves masses']"],
        category: "animal",
        scientificName: "Scolopendra subspinipes",
        origin: "China, Southeast Asia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Scolopendra+subspinipes"
    },
    {
        id: "scorpion",
        name: "Scorpion",
        chinese: "全蝎 (Quán Xiē)",
        icon: "🐾",
        iconBg: "#efebe9",
        description: "Used for convulsions, epilepsy, hemiplegia, facial paralysis, and chronic pain.",
        benefits: ["['Extinguishes wind and stops spasms', 'Unblocks collaterals and relieves pain', 'Reduces swelling and detoxifies']"],
        category: "animal",
        scientificName: "Buthus martensii",
        origin: "China, Mongolia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Buthus+martensii"
    },
    {
        id: "ground_beetle",
        name: "Ground Beetle",
        chinese: "土鳖虫 (Tǔ Biē Chóng)",
        icon: "🐾",
        iconBg: "#efebe9",
        description: "Used for amenorrhea, abdominal masses, traumatic injury, and fractures.",
        benefits: ["['Breaks blood stasis and promotes menstruation', 'Relieves pain and reduces swelling', 'Heals fractures and trauma']"],
        category: "animal",
        scientificName: "Eupolyphaga sinensis",
        origin: "China, Japan",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Eupolyphaga+sinensis"
    },
    {
        id: "earthworm",
        name: "Earthworm",
        chinese: "地龙 (Dì Lóng)",
        icon: "🐾",
        iconBg: "#efebe9",
        description: "Used for high fever with convulsions, asthma, hypertension, and joint pain.",
        benefits: ["['Clears heat and stops spasms', 'Unblocks collaterals and relieves asthma', 'Promotes urination and reduces swelling']"],
        category: "animal",
        scientificName: "Pheretima aspergillum",
        origin: "China, Southeast Asia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Pheretima+aspergillum"
    },
    {
        id: "cicada_fungus",
        name: "Cicada Fungus",
        chinese: "蝉花 (Chán Huā)",
        icon: "🍄",
        iconBg: "#f1f8e9",
        description: "Used for pediatric convulsions, night blindness, and immune deficiency.",
        benefits: ["['Clears heat and stops spasms', 'Nourishes liver and improves vision', 'Boosts immunity and reduces fatigue']"],
        category: "mushroom",
        scientificName: "Cordyceps cicadae",
        origin: "China, Japan, Southeast Asia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Cordyceps+cicadae"
    },
    {
        id: "beehive",
        name: "Beehive",
        chinese: "蜂房 (Fēng Fáng)",
        icon: "🐾",
        iconBg: "#efebe9",
        description: "Used for skin infections, abscesses, mastitis, and parasitic infestations.",
        benefits: ["['Detoxifies and reduces swelling', 'Relieves pain and kills parasites', 'Promotes healing of skin ulcers']"],
        category: "animal",
        scientificName: "Apis cerana (hive)",
        origin: "Worldwide",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Apis+cerana+(hive)"
    },
    {
        id: "gecko",
        name: "Gecko",
        chinese: "蛤蚧 (Gé Jiè)",
        icon: "🐾",
        iconBg: "#efebe9",
        description: "Used for chronic cough, asthma, impotence, and kidney deficiency.",
        benefits: ["['Tonifies lung and kidney', 'Relieves cough and asthma', 'Strengthens bones and improves vitality']"],
        category: "animal",
        scientificName: "Gekko gecko",
        origin: "China, Southeast Asia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Gekko+gecko"
    },
    {
        id: "black_snake",
        name: "Black Snake",
        chinese: "乌梢蛇 (Wū Shāo Shé)",
        icon: "🐾",
        iconBg: "#efebe9",
        description: "Used for rheumatoid arthritis, chronic eczema, urticaria, and convulsions.",
        benefits: ["['Dispels wind and unblocks collaterals', 'Relieves itching and stops spasms', 'Treats chronic skin diseases']"],
        category: "animal",
        scientificName: "Zaocys dhumnades",
        origin: "China, Southeast Asia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Zaocys+dhumnades"
    },
    {
        id: "pit_viper",
        name: "Pit Viper",
        chinese: "蕲蛇 (Qí Shé)",
        icon: "🐾",
        iconBg: "#efebe9",
        description: "Used for severe arthritis, hemiplegia, convulsions, and venomous bites.",
        benefits: ["['Dispels wind and stops spasms', 'Unblocks collaterals and relieves pain', 'Detoxifies and reduces swelling']"],
        category: "animal",
        scientificName: "Agkistrodon acutus",
        origin: "China, Vietnam",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Agkistrodon+acutus"
    },
    {
        id: "aloe_vera",
        name: "Aloe Vera",
        chinese: "芦荟 (Lú Huì)",
        icon: "✨",
        iconBg: "#fffde7",
        description: "Gel for burns and skin conditions. Internal use for constipation and digestive health.",
        benefits: ["['Skin healing', 'Digestive support', 'Anti-inflammatory']"],
        category: "skin",
        scientificName: "Aloe vera",
        origin: "Arabian Peninsula",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Aloe+vera"
    },
    {
        id: "senna",
        name: "Senna",
        chinese: "番泻叶 (Fān Xiè Yè)",
        icon: "🍽️",
        iconBg: "#fce4ec",
        description: "Stimulant laxative for short-term constipation relief. One of the oldest known laxatives.",
        benefits: ["['Constipation relief', 'Bowel stimulation', 'Detox support']"],
        category: "digestion",
        scientificName: "Senna alexandrina",
        origin: "Egypt, Sudan",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Senna+alexandrina"
    },
    {
        id: "evening_primrose",
        name: "Evening Primrose",
        chinese: "月见草 (Yuè Jiàn Cǎo)",
        icon: "🌿",
        iconBg: "#e8f5e9",
        description: "Evening primrose oil (EPO) rich in GLA for PMS, eczema, and breast pain.",
        benefits: ["['PMS relief', 'Skin health', 'Hormonal balance']"],
        category: "women-health",
        scientificName: "Oenothera biennis",
        origin: "North America, Europe",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Oenothera+biennis"
    },
    {
        id: "flaxseed",
        name: "Flaxseed",
        chinese: "亚麻籽 (Yà Má Zǐ)",
        icon: "🍽️",
        iconBg: "#fce4ec",
        description: "Rich in ALA omega-3 and lignans. Used for constipation, heart health, and inflammation.",
        benefits: ["['Omega-3 source', 'Fiber for digestion', 'Heart health']"],
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
        iconBg: "#e8eaf6",
        description: "Medicinal mushroom for brain health. Stimulates Nerve Growth Factor (NGF). Used for memory and focus.",
        benefits: ["['Neuroprotection', 'Nerve regeneration', 'Cognitive enhancement']"],
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
        benefits: ["['Immune support', 'Cancer adjunct therapy', 'Gut health']"],
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
        benefits: ["['Antioxidant powerhouse', 'Immune support', 'Anti-inflammatory']"],
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
        benefits: ["['Energy & stamina', 'Lung support', 'Kidney tonification']"],
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
        iconBg: "#e0f7fa",
        description: "Used for sore throat, hoarse voice, itchy skin rashes, and eye conditions in TCM.",
        benefits: ["['Anti-itch', 'Voice improvement', 'Eye clearing']"],
        category: "respiratory",
        scientificName: "Cryptotympana atrata",
        origin: "China, East Asia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Cryptotympana+atrata"
    },
    {
        id: "human-sediment-crystal",
        name: "Human Sediment Crystal",
        chinese: "人中白 (Rén Zhōng Bái)",
        icon: "🔬",
        iconBg: "#fce4ec",
        description: "Sore throat, bleeding gums, fevers, ulcers",
        benefits: ["Clears heat, cools blood, reduces swelling"],
        category: "special",
        scientificName: "Homo sapiens (urine crystallized)",
        origin: "China",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Homo+sapiens+(urine+crystallized)"
    },
    {
        id: "human-yellow",
        name: "Human Yellow",
        chinese: "人中黄 (Rén Zhōng Huáng)",
        icon: "🔬",
        iconBg: "#fce4ec",
        description: "High fever, delirium, toxic sores, skin infections",
        benefits: ["Clears heat, detoxifies, cools blood"],
        category: "special",
        scientificName: "Homo sapiens (feces processed)",
        origin: "China",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Homo+sapiens+(feces+processed)"
    },
    {
        id: "human-placenta",
        name: "Human Placenta",
        chinese: "紫河车 (Zǐ Hé Chē)",
        icon: "🔬",
        iconBg: "#fce4ec",
        description: "Infertility, chronic weakness, asthma, impotence",
        benefits: ["Tonifies Qi and blood, nourishes essence"],
        category: "special",
        scientificName: "Homo sapiens placenta",
        origin: "China",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Homo+sapiens+placenta"
    },
    {
        id: "charred-human-hair",
        name: "Charred Human Hair",
        chinese: "血余炭 (Xuè Yú Tàn)",
        icon: "🔬",
        iconBg: "#fce4ec",
        description: "Bleeding, dysuria, chronic ulcers",
        benefits: ["Stops bleeding, promotes urination, generates flesh"],
        category: "special",
        scientificName: "Homo sapiens hair carbonized",
        origin: "China",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Homo+sapiens+hair+carbonized"
    },
    {
        id: "flying-squirrel-feces",
        name: "Flying Squirrel Feces",
        chinese: "五灵脂 (Wǔ Líng Zhī)",
        icon: "🔬",
        iconBg: "#fce4ec",
        description: "Pain from blood stasis, amenorrhea, bleeding",
        benefits: ["Activates blood, alleviates pain, stops bleeding"],
        category: "special",
        scientificName: "Trogopterus xanthipes",
        origin: "Northeast China, Hebei",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Trogopterus+xanthipes"
    },
    {
        id: "bat-feces",
        name: "Bat Feces",
        chinese: "夜明砂 (Yè Míng Shā)",
        icon: "🔬",
        iconBg: "#fce4ec",
        description: "Night blindness, eye inflammation, cataracts",
        benefits: ["Clears liver, brightens eyes, disperses stasis"],
        category: "special",
        scientificName: "Vespertilio superans",
        origin: "China, Japan",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Vespertilio+superans"
    },
    {
        id: "rabbit-feces",
        name: "Rabbit Feces",
        chinese: "望月砂 (Wàng Yuè Shā)",
        icon: "🔬",
        iconBg: "#fce4ec",
        description: "Night blindness, eye翳膜, cough",
        benefits: ["Brightens eyes, clears lung heat"],
        category: "special",
        scientificName: "Oryctolagus cuniculus",
        origin: "China",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Oryctolagus+cuniculus"
    },
    {
        id: "sparrow-feces",
        name: "Sparrow Feces",
        chinese: "白丁香 (Bái Dīng Xiāng)",
        icon: "🔬",
        iconBg: "#fce4ec",
        description: "Carbuncles, throat blockage, food accumulation",
        benefits: ["Detoxifies, reduces swelling, disperses accumulation"],
        category: "special",
        scientificName: "Passer montanus",
        origin: "China",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Passer+montanus"
    },
    {
        id: "processed-urine-salt",
        name: "Processed Urine Salt",
        chinese: "秋石 (Qiū Shí)",
        icon: "🔬",
        iconBg: "#fce4ec",
        description: "Tidal fever, chronic cough, seminal emission",
        benefits: ["Nourishes yin, reduces fever, consolidates essence"],
        category: "special",
        scientificName: "Homo sapiens urine + salt",
        origin: "China",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Homo+sapiens+urine+++salt"
    },
    {
        id: "honey",
        name: "Honey",
        chinese: "蜂蜜 (Fēng Mì)",
        icon: "🐾",
        iconBg: "#efebe9",
        description: "Cough, dry skin, constipation, wound healing",
        benefits: ["Moisturizes lungs, detoxifies, nourishes spleen"],
        category: "animal",
        scientificName: "Apis mellifera",
        origin: "Global",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Apis+mellifera"
    },
    {
        id: "royal-jelly",
        name: "Royal Jelly",
        chinese: "蜂王浆 (Fēng Wáng Jiāng)",
        icon: "🐾",
        iconBg: "#efebe9",
        description: "Fatigue, infertility, menopause, immune weakness",
        benefits: ["Boosts immunity, anti-aging, enhances fertility"],
        category: "animal",
        scientificName: "Apis mellifera secretion",
        origin: "Global",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Apis+mellifera+secretion"
    },
    {
        id: "propolis",
        name: "Propolis",
        chinese: "蜂胶 (Fēng Jiāo)",
        icon: "🐾",
        iconBg: "#efebe9",
        description: "Oral health, wound healing, cold sores, infections",
        benefits: ["Antimicrobial, anti-inflammatory, immune boost"],
        category: "animal",
        scientificName: "Apis mellifera resin",
        origin: "Global",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Apis+mellifera+resin"
    },
    {
        id: "deer-antler",
        name: "Deer Antler Velvet",
        chinese: "鹿茸 (Lù Róng)",
        icon: "🐾",
        iconBg: "#efebe9",
        description: "Impotence, infertility, weakness, anemia, developmental delays",
        benefits: ["Tonifies yang, strengthens bones, nourishes blood"],
        category: "animal",
        scientificName: "Cervus nippon / Cervus elaphus",
        origin: "China, Russia, Korea, New Zealand",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Cervus+nippon+/+Cervus+elaphus"
    },
    {
        id: "ox-bezoar",
        name: "Ox Bezoar",
        chinese: "牛黄 (Niú Huáng)",
        icon: "🐾",
        iconBg: "#efebe9",
        description: "High fever, coma, convulsions, sore throat",
        benefits: ["Clears heat, opens orifices, calms spirit"],
        category: "animal",
        scientificName: "Bos taurus gallstone",
        origin: "China, India, Australia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Bos+taurus+gallstone"
    },
    {
        id: "donkey-gelatin",
        name: "Donkey Gelatin",
        chinese: "阿胶 (Ē Jiāo)",
        icon: "🐾",
        iconBg: "#efebe9",
        description: "Anemia, dry cough, uterine bleeding, dizziness",
        benefits: ["Tonifies blood, stops bleeding, moisturizes lungs"],
        category: "animal",
        scientificName: "Equus asinus skin",
        origin: "Shandong, China",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Equus+asinus+skin"
    },
    {
        id: "musk",
        name: "Musk",
        chinese: "麝香 (Shè Xiāng)",
        icon: "🐾",
        iconBg: "#efebe9",
        description: "Coma, pain, tumors, difficult labor",
        benefits: ["Opens orifices, activates blood, reduces swelling"],
        category: "animal",
        scientificName: "Moschus moschiferus",
        origin: "Himalayas, China, Nepal, Russia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Moschus+moschiferus"
    },
    {
        id: "bear-bile",
        name: "Bear Bile",
        chinese: "熊胆 (Xióng Dǎn)",
        icon: "🐾",
        iconBg: "#efebe9",
        description: "Jaundice, gallstones, eye inflammation, febrile seizures",
        benefits: ["Clears heat, brightens eyes, stops spasms"],
        category: "animal",
        scientificName: "Ursus thibetanus",
        origin: "China, Korea, Southeast Asia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Ursus+thibetanus"
    },
    {
        id: "pearl",
        name: "Pearl",
        chinese: "珍珠 (Zhēn Zhū)",
        icon: "🐾",
        iconBg: "#efebe9",
        description: "Eye disorders, insomnia, skin ulcers, epilepsy",
        benefits: ["Brightens eyes, calms spirit, clears heat, generates skin"],
        category: "animal",
        scientificName: "Pteria martensii / Hyriopsis cumingii",
        origin: "China, Japan, Australia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Pteria+martensii+/+Hyriopsis+cumingii"
    },
    {
        id: "seahorse",
        name: "Seahorse",
        chinese: "海马 (Hǎi Mǎ)",
        icon: "🐾",
        iconBg: "#efebe9",
        description: "Impotence, infertility, asthma, pain, tumors",
        benefits: ["Tonifies kidney yang, disperses masses, relieves pain"],
        category: "animal",
        scientificName: "Hippocampus spp.",
        origin: "Indo-Pacific, South China Sea",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Hippocampus+spp."
    },
    {
        id: "moringa",
        name: "Moringa",
        chinese: "辣木 (Là Mù)",
        icon: "🥗",
        iconBg: "#f1f8e9",
        description: "Malnutrition, diabetes, inflammation, anemia",
        benefits: ["Anti-inflammatory, blood sugar regulation, rich in nutrients"],
        category: "nutrition",
        scientificName: "Moringa oleifera",
        origin: "India, Africa",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Moringa+oleifera"
    },
    {
        id: "psyllium",
        name: "Psyllium",
        chinese: "车前子壳 (Chē Qián Zǐ Ké)",
        icon: "🍽️",
        iconBg: "#fce4ec",
        description: "Constipation, IBS, high cholesterol, hemorrhoids",
        benefits: ["Bulk-forming laxative, lowers cholesterol, regulates blood sugar"],
        category: "digestion",
        scientificName: "Plantago ovata",
        origin: "India, Mediterranean",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Plantago+ovata"
    },
    {
        id: "chicken-gizzard",
        name: "Chicken Gizzard Lining",
        chinese: "鸡内金 (Jī Nèi Jīn)",
        icon: "🐾",
        iconBg: "#efebe9",
        description: "Indigestion, food stagnation, bedwetting, gallstones/kidney stones",
        benefits: ["Strengthens stomach, aids digestion, dissolves stones"],
        category: "animal",
        scientificName: "Gallus gallus domesticus",
        origin: "Global",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Gallus+gallus+domesticus"
    },
    {
        id: "silkworm-feces",
        name: "Silkworm Feces",
        chinese: "蚕砂 (Cán Shā)",
        icon: "🐾",
        iconBg: "#efebe9",
        description: "Arthritis, cramps, eye redness, skin rashes",
        benefits: ["Dispels wind-damp, harmonizes stomach, brightens eyes"],
        category: "animal",
        scientificName: "Bombyx mori",
        origin: "China, Japan, India",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=Bombyx+mori"
    },
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
    ginseng: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Ginsengpflanze.jpg/500px-Ginsengpflanze.jpg",
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
    dong_quai: "https://upload.wikimedia.org/wikipedia/commons/2/24/Danggui_Angelica_sinensis.jpg",
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
    cranberry: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Vaccinium_macrocarpon_5445082.jpg/500px-Vaccinium_macrocarpon_5445082.jpg",
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
    ground_beetle: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Eupolyphaga_sinensis1.jpg/500px-Eupolyphaga_sinensis1.jpg",
    earthworm: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Photo_of_earthworm_head_%28Eisenia_hortensis%29_taken_with_a_scanning_electron_microscope.jpg/500px-Photo_of_earthworm_head_%28Eisenia_hortensis%29_taken_with_a_scanning_electron_microscope.jpg",
    cicada_fungus: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Isaria_sinclarii_fungus.jpg/500px-Isaria_sinclarii_fungus.jpg",
    beehive: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Cerana.jpg/500px-Cerana.jpg",
    gecko: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Gekko_gecko.jpg/500px-Gekko_gecko.jpg",
    black_snake: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Ptyas_dhumnades_62027076.jpg/500px-Ptyas_dhumnades_62027076.jpg",
    pit_viper: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Deinagkistrodon_acutus_295892035.jpg/500px-Deinagkistrodon_acutus_295892035.jpg",
    aloe_vera: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Aloe_vera%2C_01.jpg/500px-Aloe_vera%2C_01.jpg",
    senna: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Senna_sp_00978.jpg/500px-Senna_sp_00978.jpg",
    evening_primrose: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Oenothera_biennis%2C_Vic-la-Gardiole_01.jpg/500px-Oenothera_biennis%2C_Vic-la-Gardiole_01.jpg",
    flaxseed: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Linum_usitatissimum_qtl1.jpg/500px-Linum_usitatissimum_qtl1.jpg",
    lions_mane: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Hericium_erinaceus_101875852.jpg/500px-Hericium_erinaceus_101875852.jpg",
    turkey_tail: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Trametes_Versicolor-20191227-RM-145922.jpg/500px-Trametes_Versicolor-20191227-RM-145922.jpg",
    chaga: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Inonotus_obliquus.jpg/500px-Inonotus_obliquus.jpg",
    cordyceps: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Cordyceps_sinensis.jpg/500px-Cordyceps_sinensis.jpg",
    cicada_slough: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Cryptotympana_atrata.jpg/500px-Cryptotympana_atrata.jpg",
    "human-sediment-crystal": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/CADAL06200531_%E5%8F%A4%E6%9C%AC%E5%B0%8F%E8%AA%AA%E9%9B%86%E6%88%90%EF%BC%9A%E4%BA%BA%E4%B8%AD%E7%95%AB.djvu/page1-500px-CADAL06200531_%E5%8F%A4%E6%9C%AC%E5%B0%8F%E8%AA%AA%E9%9B%86%E6%88%90%EF%BC%9A%E4%BA%BA%E4%B8%AD%E7%95%AB.djvu.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "human-yellow": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Clouded_yellow_Colias_croceus_Ichkeul.jpg/500px-Clouded_yellow_Colias_croceus_Ichkeul.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "human-placenta": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Human_placenta_just_after_delivery.jpg/500px-Human_placenta_just_after_delivery.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "charred-human-hair": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/CADAL11102523_%E8%A1%80%E6%9F%93%E9%BB%83%E5%B7%9E.djvu/page1-500px-CADAL11102523_%E8%A1%80%E6%9F%93%E9%BB%83%E5%B7%9E.djvu.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "flying-squirrel-feces": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Trogopterus_xanthipes.jpg/500px-Trogopterus_xanthipes.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "bat-feces": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Vespertilio_sinensis.jpg/250px-Vespertilio_sinensis.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "rabbit-feces": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/European_rabbit_%28Oryctolagus_cuniculus%29_kitten.jpg/500px-European_rabbit_%28Oryctolagus_cuniculus%29_kitten.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "sparrow-feces": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Eurasian_tree_sparrow_at_Tenn%C5%8Dji_Park_in_Osaka%2C_December_2015.jpg/500px-Eurasian_tree_sparrow_at_Tenn%C5%8Dji_Park_in_Osaka%2C_December_2015.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "processed-urine-salt": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Y%C3%BC_Chi_-_Lady_on_a_Bench_-_Walters_3522.jpg/500px-Y%C3%BC_Chi_-_Lady_on_a_Bench_-_Walters_3522.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    honey: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Honey_Dale.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "royal-jelly": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/2-Decenedioic_acid.svg/500px-2-Decenedioic_acid.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    propolis: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Propolis_in_beehives.jpg/500px-Propolis_in_beehives.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "deer-antler": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Meiogyne_pannosa_04.jpg/500px-Meiogyne_pannosa_04.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "ox-bezoar": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/HK_YTM_%E6%B2%B9%E5%B0%96%E6%97%BA_Yau_Tsim_Mong_%E6%97%BA%E8%A7%92_Mong_Kok_%E5%A5%B6%E8%B7%AF%E8%87%A3%E8%A1%97_6G_Nelson_Street_shop_%E9%BE%8D%E8%B1%90%E9%9B%86%E5%9C%98_Fung_Dispensary_Mall_October_2025_N13P_05.jpg/500px-HK_YTM_%E6%B2%B9%E5%B0%96%E6%97%BA_Yau_Tsim_Mong_%E6%97%BA%E8%A7%92_Mong_Kok_%E5%A5%B6%E8%B7%AF%E8%87%A3%E8%A1%97_6G_Nelson_Street_shop_%E9%BE%8D%E8%B1%90%E9%9B%86%E5%9C%98_Fung_Dispensary_Mall_October_2025_N13P_05.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "donkey-gelatin": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Donkey-hide_gelatin_%28E%27jiao%29_slices.jpg/500px-Donkey-hide_gelatin_%28E%27jiao%29_slices.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    musk: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Muskox_%28Ovibos_moschatus%29_male_Dovrefjell_1.jpg/500px-Muskox_%28Ovibos_moschatus%29_male_Dovrefjell_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "bear-bile": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Bear_bile_01.jpg/500px-Bear_bile_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    pearl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/500px-1665_Girl_with_a_Pearl_Earring.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    seahorse: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Hippocampus_hippocampus_%28on_Ascophyllum_nodosum%29.jpg/500px-Hippocampus_hippocampus_%28on_Ascophyllum_nodosum%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    moringa: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flower_of_Moringa_oleifera.jpg/500px-Flower_of_Moringa_oleifera.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    psyllium: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/CADAL06211067_%E5%8D%81%E5%AD%90%E5%85%A8%E6%9B%B8%EF%BC%9A%E8%8D%80%E5%AD%90.djvu/page1-500px-CADAL06211067_%E5%8D%81%E5%AD%90%E5%85%A8%E6%9B%B8%EF%BC%9A%E8%8D%80%E5%AD%90.djvu.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "chicken-gizzard": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/CADAL06211660_%E5%A2%A8%E6%B5%B7%E9%87%91%E5%A3%BA%EF%BC%9A%E6%BA%96%E9%BD%8B%E9%9B%9C%E8%AA%AA%E5%A2%A8%E6%B5%B7%E9%87%91%E5%A3%BA%EF%BC%9A%E5%85%A7%E8%A8%93.djvu/page1-500px-CADAL06211660_%E5%A2%A8%E6%B5%B7%E9%87%91%E5%A3%BA%EF%BC%9A%E6%BA%96%E9%BD%8B%E9%9B%9C%E8%AA%AA%E5%A2%A8%E6%B5%B7%E9%87%91%E5%A3%BA%EF%BC%9A%E5%85%A7%E8%A8%93.djvu.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "silkworm-feces": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/CADAL11100309_%E7%A0%82%E4%B8%81.djvu/page1-500px-CADAL11100309_%E7%A0%82%E4%B8%81.djvu.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
};


const herbHabitat = {
    ginseng: "Origin: Northeast China, Korea, Siberia. Parts used: Root. Nature: Warm. Flavor: Sweet, Slightly bitter. Meridians: Spleen, Lung, Heart.",
    astragalus: "Origin: Northern China, Mongolia. Parts used: Root. Nature: Warm. Flavor: Sweet. Meridians: Spleen, Lung.",
    goji: "Origin: Ningxia, China, Tibet. Parts used: Fruit. Nature: Neutral. Flavor: Sweet. Meridians: Liver, Kidney.",
    reishi: "Origin: China, Japan, Korea. Parts used: Fruiting body, Spores. Nature: Neutral. Flavor: Bitter. Meridians: Heart, Lung, Liver.",
    turmeric: "Origin: Southern China, India, Southeast Asia. Parts used: Root/Rhizome. Nature: Warm. Flavor: Bitter, Spicy. Meridians: Spleen, Liver.",
    echinacea: "Origin: North America, Central United States. Parts used: Root, Flower, Leaf. Nature: Warm. Flavor: Pungent, Slightly bitter. Meridians: Lung, Liver.",
    chamomile: "Origin: Europe, Western Asia, North America. Parts used: Flower. Nature: Cool. Flavor: Sweet, Slightly bitter. Meridians: Liver, Heart, Stomach.",
    peppermint: "Origin: Europe, Middle East, North America. Parts used: Leaf, Stem, Flower. Nature: Cool. Flavor: Pungent, Sweet. Meridians: Lung, Liver.",
    lavender: "Origin: Mediterranean, Europe, North America. Parts used: Flower, Leaf. Nature: Cool. Flavor: Pungent, Slightly sweet. Meridians: Heart, Lung.",
    garlic: "Origin: Central Asia, Worldwide cultivation. Parts used: Bulb. Nature: Warm. Flavor: Pungent, Spicy. Meridians: Spleen, Stomach, Lung.",
    ginger: "Origin: Southeast Asia, India. Parts used: Root/Rhizome. Nature: Warm. Flavor: Pungent, Slightly sweet. Meridians: Spleen, Stomach, Lung.",
    cinnamon: "Origin: Sri Lanka, South China, Southeast Asia. Parts used: Bark. Nature: Hot. Flavor: Pungent, Sweet. Meridians: Spleen, Kidney, Heart.",
    rosemary: "Origin: Mediterranean, Europe. Parts used: Leaf, Flower. Nature: Warm. Flavor: Pungent, Bitter. Meridians: Spleen, Liver.",
    thyme: "Origin: Mediterranean, Europe, North Africa. Parts used: Leaf, Flower, Essential oil. Nature: Warm. Flavor: Pungent, Slightly bitter. Meridians: Lung, Spleen.",
    valerian: "Origin: Europe, Northern Asia, North America. Parts used: Root. Nature: Warm. Flavor: Bitter, Pungent. Meridians: Heart, Liver.",
    milk_thistle: "Origin: Mediterranean, Europe, North America. Parts used: Seed, Fruit. Nature: Cool. Flavor: Bitter. Meridians: Liver, Gallbladder.",
    dandelion: "Origin: Europe, Asia, North America. Parts used: Whole plant, Root, Leaf. Nature: Cool. Flavor: Bitter, Sweet. Meridians: Liver, Stomach.",
    elderberry: "Origin: Europe, North America, North Africa. Parts used: Berry, Flower. Nature: Warm. Flavor: Sweet, Sour. Meridians: Lung, Kidney.",
    calendula: "Origin: Mediterranean, Europe. Parts used: Flower. Nature: Cool. Flavor: Bitter. Meridians: Liver, Heart.",
    ashwagandha: "Origin: India, Middle East, North Africa. Parts used: Root. Nature: Warm. Flavor: Bitter, Astringent. Meridians: Kidney, Liver, Heart.",
    st_johns_wort: "Origin: Europe, North America. Parts used: Flower, Leaf. Nature: Warm. Flavor: Bitter, Astringent. Meridians: Liver, Heart.",
    ginkgo: "Origin: China, Japan, Korea. Parts used: Leaf, Seed. Nature: Neutral. Flavor: Sweet, Bitter. Meridians: Heart, Lung.",
    saw_palmetto: "Origin: Southeastern United States. Parts used: Berry. Nature: Warm. Flavor: Sweet. Meridians: Kidney, Bladder.",
    feverfew: "Origin: Europe, North America. Parts used: Leaf, Flower. Nature: Cool. Flavor: Bitter, Pungent. Meridians: Liver.",
    lemon_balm: "Origin: Europe, Mediterranean. Parts used: Leaf. Nature: Cool. Flavor: Pungent, Sweet. Meridians: Heart, Liver.",
    dong_quai: "Origin: China, Japan, Korea. Parts used: Root. Nature: Warm. Flavor: Sweet, Pungent. Meridians: Liver, Heart, Spleen.",
    licorice: "Origin: China, Mediterranean, Central Asia. Parts used: Root. Nature: Neutral. Flavor: Sweet. Meridians: Spleen, Stomach, Heart, Lung.",
    honeysuckle: "Origin: China, Japan, Korea. Parts used: Flower, Vine. Nature: Cool. Flavor: Sweet. Meridians: Lung, Heart, Stomach.",
    chrysanthemum: "Origin: China, Japan. Parts used: Flower. Nature: Cool. Flavor: Sweet, Bitter. Meridians: Liver, Lung.",
    isatis_root: "Origin: China, Europe. Parts used: Root, Leaf. Nature: Cool. Flavor: Bitter. Meridians: Heart, Stomach.",
    bupleurum: "Origin: China, Japan, Korea. Parts used: Root. Nature: Cool. Flavor: Bitter, Pungent. Meridians: Liver, Gallbladder.",
    poria: "Origin: China, Japan, North America. Parts used: Sclerotium (fungal body). Nature: Neutral. Flavor: Sweet, Bland. Meridians: Spleen, Heart, Kidney.",
    atractylodes: "Origin: China, Japan. Parts used: Rhizome. Nature: Warm. Flavor: Bitter, Sweet. Meridians: Spleen, Stomach.",
    safflower: "Origin: China, India, Central Asia. Parts used: Flower. Nature: Warm. Flavor: Pungent. Meridians: Heart, Liver.",
    notoginseng: "Origin: Yunnan, China, Guangxi, China. Parts used: Root. Nature: Warm. Flavor: Sweet, Slightly bitter. Meridians: Liver, Stomach.",
    dendrobium: "Origin: China, Southeast Asia. Parts used: Stem. Nature: Cool. Flavor: Sweet, Bland. Meridians: Stomach, Kidney.",
    gastrodia: "Origin: China, Japan, Korea. Parts used: Tuber. Nature: Neutral. Flavor: Sweet. Meridians: Liver.",
    eucommia: "Origin: China. Parts used: Bark. Nature: Warm. Flavor: Sweet. Meridians: Liver, Kidney.",
    pinellia: "Origin: China, Japan, Korea. Parts used: Tuber. Nature: Warm. Flavor: Pungent. Meridians: Spleen, Stomach, Lung.",
    tangerine_peel: "Origin: China, Japan, Southeast Asia. Parts used: Dried peel. Nature: Warm. Flavor: Pungent, Bitter. Meridians: Spleen, Lung.",
    black_cohosh: "Origin: North America. Parts used: Root, Rhizome. Nature: Cool. Flavor: Bitter. Meridians: Liver, Kidney.",
    cranberry: "Origin: North America. Parts used: Fruit. Nature: Cool. Flavor: Sour. Meridians: Bladder, Kidney.",
    maca: "Origin: Peru. Parts used: Root. Nature: Warm. Flavor: Sweet. Meridians: Kidney, Spleen.",
    rhodiola: "Origin: Europe, Asia. Parts used: Root. Nature: Cool. Flavor: Bitter. Meridians: Lung, Spleen, Kidney.",
    bacopa: "Origin: India, Southeast Asia. Parts used: Whole plant. Nature: Cool. Flavor: Bitter. Meridians: Heart, Liver, Kidney.",
    schisandra: "Origin: China, Russia. Parts used: Fruit. Nature: Warm. Flavor: Sour. Meridians: Lung, Heart, Kidney.",
    berberine: "Origin: India, China. Parts used: Root, Bark. Nature: Cold. Flavor: Bitter. Meridians: Heart, Liver, Large Intestine.",
    andrographis: "Origin: India, Sri Lanka. Parts used: Leaf, Whole plant. Nature: Cold. Flavor: Bitter. Meridians: Lung, Large Intestine, Stomach.",
    cats_claw: "Origin: Peru, Amazon. Parts used: Bark, Root. Nature: Cool. Flavor: Bitter. Meridians: Liver, Kidney, Large Intestine.",
    horny_goat_weed: "Origin: China, Japan. Parts used: Aerial parts. Nature: Warm. Flavor: Pungent. Meridians: Liver, Kidney.",
    stiff_silkworm: "Origin: China, Japan, Korea. Parts used: Larva (dried, infected). Nature: Neutral. Flavor: Salty. Meridians: Liver, Lung.",
    centipede: "Origin: China, Southeast Asia. Parts used: Whole body (dried). Nature: Warm. Flavor: Pungent. Meridians: Liver.",
    scorpion: "Origin: China, Mongolia. Parts used: Whole body (dried). Nature: Neutral. Flavor: Salty. Meridians: Liver.",
    ground_beetle: "Origin: China, Japan. Parts used: Whole body (dried). Nature: Cold. Flavor: Salty. Meridians: Liver, Heart.",
    earthworm: "Origin: China, Southeast Asia. Parts used: Whole body (dried). Nature: Cold. Flavor: Salty. Meridians: Liver, Spleen, Bladder.",
    cicada_fungus: "Origin: China, Japan, Southeast Asia. Parts used: Fruiting body (dried). Nature: Cool. Flavor: Sweet. Meridians: Liver, Lung.",
    beehive: "Origin: Worldwide. Parts used: Hive (dried). Nature: Neutral. Flavor: Sweet. Meridians: Liver, Stomach.",
    gecko: "Origin: China, Southeast Asia. Parts used: Whole body (dried, tail removed). Nature: Neutral. Flavor: Salty. Meridians: Lung, Kidney.",
    black_snake: "Origin: China, Southeast Asia. Parts used: Whole body (dried, skinned). Nature: Neutral. Flavor: Sweet. Meridians: Liver, Spleen.",
    pit_viper: "Origin: China, Vietnam. Parts used: Whole body (dried, venom removed). Nature: Warm. Flavor: Pungent. Meridians: Liver, Spleen.",
    aloe_vera: "Origin: Arabian Peninsula. Parts used: Gel, Latex. Nature: Cold. Flavor: Bitter. Meridians: Liver, Large Intestine, Stomach.",
    senna: "Origin: Egypt, Sudan. Parts used: Leaves, Pods. Nature: Cold. Flavor: Bitter, Sweet. Meridians: Large Intestine, Liver.",
    evening_primrose: "Origin: North America, Europe. Parts used: Seeds, Oil. Nature: Cool. Flavor: Sweet, Bland. Meridians: Liver, Kidney.",
    flaxseed: "Origin: Middle East, Mediterranean. Parts used: Seeds. Nature: Warm. Flavor: Sweet. Meridians: Liver, Kidney, Large Intestine.",
    lions_mane: "Origin: North America, Europe, Asia. Parts used: Fruiting body. Nature: Neutral. Flavor: Sweet. Meridians: Spleen, Heart, Liver.",
    turkey_tail: "Origin: Worldwide. Parts used: Fruiting body. Nature: Cool. Flavor: Sweet. Meridians: Spleen, Stomach, Liver.",
    chaga: "Origin: Siberia, Northern Europe, North America. Parts used: Sclerotium. Nature: Cool. Flavor: Bitter, Sweet. Meridians: Spleen, Liver, Heart.",
    cordyceps: "Origin: Tibet, China, Nepal. Parts used: Fruiting body, Stroma. Nature: Warm. Flavor: Sweet. Meridians: Lung, Kidney.",
    cicada_slough: "Origin: China, East Asia. Parts used: Exuviae. Nature: Cool. Flavor: Sweet. Meridians: Liver, Lung.",
    "human-sediment-crystal": "Origin: China. Parts used: Urine sediment. Nature: Cold. Flavor: Salty. Meridians: Liver, Lung, Stomach.",
    "human-yellow": "Origin: China. Parts used: Processed feces. Nature: Cold. Flavor: Sweet, Bitter. Meridians: Heart, Stomach.",
    "human-placenta": "Origin: China. Parts used: Placenta. Nature: Warm. Flavor: Sweet, Salty. Meridians: Lung, Liver, Kidney.",
    "charred-human-hair": "Origin: China. Parts used: Carbonized hair. Nature: Neutral. Flavor: Bitter. Meridians: Liver, Stomach.",
    "flying-squirrel-feces": "Origin: Northeast China, Hebei. Parts used: Dried feces. Nature: Warm. Flavor: Bitter, Sweet, Salty. Meridians: Liver, Spleen.",
    "bat-feces": "Origin: China, Japan. Parts used: Dried feces. Nature: Cold. Flavor: Xin. Meridians: Liver.",
    "rabbit-feces": "Origin: China. Parts used: Dried feces. Nature: Neutral. Flavor: Xin. Meridians: Liver, Lung.",
    "sparrow-feces": "Origin: China. Parts used: Dried feces. Nature: Warm. Flavor: Ku, Xin. Meridians: Liver, Kidney.",
    "processed-urine-salt": "Origin: China. Parts used: Crystallized salt. Nature: Cold. Flavor: Xian. Meridians: Kidney, Lung.",
    honey: "Origin: Global. Parts used: Honey. Nature: Neutral. Flavor: Sweet. Meridians: Spleen, Lung, Large Intestine.",
    "royal-jelly": "Origin: Global. Parts used: Glandular secretion. Nature: Neutral. Flavor: Sweet, Sour. Meridians: Liver, Kidney.",
    propolis: "Origin: Global. Parts used: Bee glue. Nature: Warm. Flavor: Bitter, Xin. Meridians: Spleen, Lung.",
    "deer-antler": "Origin: China, Russia, Korea, New Zealand. Parts used: Young antler. Nature: Warm. Flavor: Sweet, Salty. Meridians: Liver, Kidney.",
    "ox-bezoar": "Origin: China, India, Australia. Parts used: Gallstone. Nature: Cool. Flavor: Bitter, Sweet. Meridians: Heart, Liver.",
    "donkey-gelatin": "Origin: Shandong, China. Parts used: Skin gelatin. Nature: Neutral. Flavor: Sweet. Meridians: Lung, Liver, Kidney.",
    musk: "Origin: Himalayas, China, Nepal, Russia. Parts used: Glandular secretion. Nature: Warm. Flavor: Xin. Meridians: Heart, Spleen, Liver.",
    "bear-bile": "Origin: China, Korea, Southeast Asia. Parts used: Bile. Nature: Cold. Flavor: Bitter. Meridians: Liver, Gallbladder, Heart.",
    pearl: "Origin: China, Japan, Australia. Parts used: Pearl. Nature: Cold. Flavor: Sweet, Xian. Meridians: Heart, Liver.",
    seahorse: "Origin: Indo-Pacific, South China Sea. Parts used: Whole dried animal. Nature: Warm. Flavor: Sweet, Salty. Meridians: Liver, Kidney.",
    moringa: "Origin: India, Africa. Parts used: Leaves, Seeds, Pods. Nature: Warm. Flavor: Sweet, Pungent. Meridians: Spleen, Liver, Kidney.",
    psyllium: "Origin: India, Mediterranean. Parts used: Seed husk. Nature: Neutral. Flavor: Sweet, Bland. Meridians: Large Intestine, Small Intestine, Kidney.",
    "chicken-gizzard": "Origin: Global. Parts used: Gizzard lining membrane. Nature: Neutral. Flavor: Sweet. Meridians: Spleen, Stomach, Small Intestine, Bladder.",
    "silkworm-feces": "Origin: China, Japan, India. Parts used: Dried feces. Nature: Warm. Flavor: Sweet, Xin. Meridians: Liver, Spleen, Stomach.",
};


const herbFullDesc = {
    ginseng: "Panax ginseng. ['Boosts energy and reduces fatigue', 'Enhances cognitive function', 'Strengthens immune system', 'Supports cardiovascular health', 'Anti-aging properties']. Commonly used in soups, teas, and tonic formulas. Can be sliced and steeped in hot water.",
    astragalus: "Astragalus membranaceus. ['Strengthens immune system', 'Supports heart health', 'Promotes wound healing', 'Anti-aging effects', 'Enhances energy (Qi)']. Often used in soups, teas, and herbal formulas. Can be added to chicken soup for immune support.",
    goji: "Lycium barbarum. ['Supports eye health and vision', 'Rich in antioxidants', 'Boosts immune function', 'Promotes longevity', 'Nourishes Liver and Kidneys']. Eat raw as a snack, add to teas, or use in cooking. Popular in trail mixes and health foods.",
    reishi: "Ganoderma lucidum. ['Promotes restful sleep', 'Supports immune function', 'Reduces stress and anxiety', 'Supports liver health', 'Anti-aging properties']. Available as tea, extract, powder, or capsules. Can be sliced and steeped in hot water.",
    turmeric: "Curcuma longa. ['Powerful anti-inflammatory', 'Supports joint health', 'Aids digestion', 'Antioxidant properties', 'Supports liver function']. Used in cooking (curry), teas, and supplements. Combine with black pepper for better absorption.",
    echinacea: "Echinacea purpurea. ['Boosts immune system naturally', 'Fights cold and flu symptoms', 'Reduces inflammation', 'Supports respiratory health']. Tea, tincture, capsules, or topical cream. Steep dried root in hot water for 10 minutes.",
    chamomile: "Matricaria chamomilla. ['Promotes restful sleep', 'Soothes digestive issues', 'Reduces anxiety and stress', 'Anti-inflammatory properties']. Tea, essential oil, or topical application. Steep flowers in hot water for 5-10 minutes.",
    peppermint: "Mentha × piperita. ['Relieves headaches and migraines', 'Aids digestion and reduces bloating', 'Clears nasal congestion', 'Soothes sore muscles']. Tea, essential oil, topical cream, or fresh leaves. Steep leaves in hot water for 5-7 minutes.",
    lavender: "Lavandula angustifolia. ['Promotes deep sleep', 'Reduces anxiety and depression', 'Heals burns and wounds', 'Relieves headaches']. Essential oil for aromatherapy, topical application, or tea. Add flowers to bath water.",
    garlic: "Allium sativum. ['Powerful natural antibiotic', 'Lowers blood pressure and cholesterol', 'Boosts immune function', 'Antioxidant properties']. Raw in cooking, aged garlic extract, or supplements. Crush and let sit 10 minutes before cooking to activate allicin.",
    ginger: "Zingiber officinale. ['Relieves nausea and vomiting', 'Aids digestion', 'Reduces muscle pain', 'Anti-inflammatory effects']. Fresh in cooking, tea, or supplements. Slice and steep in hot water for ginger tea.",
    cinnamon: "Cinnamomum verum. ['Warms the body', 'Improves circulation', 'Lowers blood sugar', 'Anti-microbial properties']. Spice in cooking, tea, or supplements. Add to warm drinks and desserts.",
    rosemary: "Salvia rosmarinus. ['Enhances memory and concentration', 'Improves blood circulation', 'Stimulates hair growth', 'Relieves muscle pain']. Cooking herb, tea, essential oil, or hair rinse. Steep fresh or dried leaves in hot water.",
    thyme: "Thymus vulgaris. ['Treats coughs and bronchitis', 'Natural antiseptic', 'Aids digestion', 'Rich in antioxidants']. Cooking herb, tea, essential oil, or throat gargle. Steep leaves in hot water for respiratory support.",
    valerian: "Valeriana officinalis. ['Promotes deep sleep', 'Reduces anxiety', 'Relieves menstrual cramps', 'Lowers blood pressure']. Tea, tincture, or capsules. Steep root in hot water for 10-15 minutes before bed.",
    milk_thistle: "Silybum marianum. ['Protects liver cells', 'Supports detoxification', 'Rich in antioxidants', 'May help with hangover recovery']. Capsules, tincture, or tea. Standardized extract (silymarin) is most common.",
    dandelion: "Taraxacum officinale. ['Supports liver health', 'Natural diuretic', 'Aids digestion', 'Rich in vitamins A, C, K']. Root tea, leaf salad, or supplements. Roasted root makes a coffee substitute.",
    elderberry: "Sambucus nigra. ['Fights cold and flu viruses', 'Rich in antioxidants', 'Reduces inflammation', 'Supports heart health']. Syrup, tea, capsules, or gummies. Cook berries before eating (raw berries are toxic).",
    calendula: "Calendula officinalis. ['Heals wounds and burns', 'Soothes skin irritation', 'Anti-fungal properties', 'Reduces menstrual cramps']. Topical cream, oil infusion, tea, or wash. Apply directly to skin irritations.",
    ashwagandha: "Withania somnifera. ['Reduces stress and cortisol levels', 'Boosts energy and stamina', 'Enhances cognitive function', 'Supports immune system']. Powder, capsules, or tea. Mix powder with warm milk or water.",
    st_johns_wort: "Hypericum perforatum. ['Supports emotional well-being', 'Relieves mild depression', 'Heals wounds and burns', 'Reduces nerve pain']. Tea, tincture, capsules, or oil. Steep flowers in hot water for 10 minutes.",
    ginkgo: "Ginkgo biloba. ['Improves memory and cognition', 'Enhances blood circulation', 'Antioxidant protection', 'May help with tinnitus']. Standardized extract (EGb 761), tea, or capsules.",
    saw_palmetto: "Serenoa repens. ['Supports prostate health', 'Reduces urinary symptoms', 'Anti-inflammatory', 'May support hair growth']. Capsules, tincture, or tea. Standardized extract is most common.",
    feverfew: "Tanacetum parthenium. ['Prevents migraines', 'Reduces fever', 'Anti-inflammatory', 'Relieves arthritis pain']. Fresh leaves, tea, or capsules. Chew 2-3 fresh leaves daily for migraine prevention.",
    lemon_balm: "Melissa officinalis. ['Calms anxiety and stress', 'Improves sleep quality', 'Enhances memory', 'Soothes digestive issues']. Tea, essential oil, or capsules. Steep fresh or dried leaves in hot water.",
    dong_quai: "Angelica sinensis. ['Nourishes and activates blood', 'Regulates menstruation', 'Relieves pain', 'Moistens intestines']. Decoction, capsules, or added to soups. Common in women's health formulas.",
    licorice: "Glycyrrhiza glabra. ['Harmonizes other herbs in formulas', 'Soothes sore throat', 'Supports adrenal function', 'Relieves cough']. Tea, decoction, or added to herbal formulas as a harmonizer.",
    honeysuckle: "Lonicera japonica. ['Clears heat and toxins', 'Reduces fever', 'Treats respiratory infections', 'Anti-bacterial properties']. Tea, decoction, or external wash. Steep flowers in hot water for 10 minutes.",
    chrysanthemum: "Chrysanthemum morifolium. ['Clears the eyes', 'Reduces fever', 'Relieves headaches', 'Calms the liver']. Tea, eye wash (cooled), or cooking. Steep flowers in hot water for 5-10 minutes.",
    isatis_root: "Isatis tinctoria. ['Treats colds and flu', 'Clears heat and toxins', 'Reduces sore throat', 'Anti-viral properties']. Granules dissolved in hot water, capsules, or decoction.",
    bupleurum: "Bupleurum chinense. ['Reduces fever', 'Soothes liver Qi stagnation', 'Relieves chest congestion', 'Treats malaria']. Decoction or capsules. Key ingredient in Xiao Chai Hu Tang formula.",
    poria: "Wolfiporia cocos. ['Strengthens spleen and digestion', 'Promotes urination', 'Calms the mind', 'Boosts immunity']. Decoction, powder, or added to soups. Often used in classical formulas.",
    atractylodes: "Atractylodes macrocephala. ['Strengthens spleen function', 'Dries dampness', 'Stops sweating', 'Supports fetal health']. Decoction or powder. Commonly paired with Poria in formulas.",
    safflower: "Carthamus tinctorius. ['Activates blood circulation', 'Relieves pain', 'Regulates menstruation', 'Reduces bruises']. Decoction, tincture, or topical oil. Used in blood-moving formulas.",
    notoginseng: "Panax notoginseng. ['Stops bleeding', 'Activates blood circulation', 'Reduces swelling and pain', 'Supports heart health']. Powder, capsules, or decoction. Taken internally or applied topically for wounds.",
    dendrobium: "Dendrobium officinale. ['Nourishes yin and fluids', 'Benefits the stomach', 'Clears heat', 'Improves vision']. Decoction, tea, or capsules. Often simmered for 30+ minutes.",
    gastrodia: "Gastrodia elata. ['Relieves headaches and migraines', 'Stops dizziness', 'Calms spasms and convulsions', 'Improves circulation']. Decoction, powder, or capsules. Often paired with Gastrodia-Uncaria formula.",
    eucommia: "Eucommia ulmoides. ['Strengthens bones and joints', 'Lowers blood pressure', 'Supports kidney function', 'Reduces lower back pain']. Decoction, capsules, or tea. Simmer bark for 20-30 minutes.",
    pinellia: "Pinellia ternata. ['Dries dampness and phlegm', 'Stops vomiting', 'Reduces nausea', 'Relieves chest congestion']. Decoction (processed form only). Must be processed before use - raw form is toxic.",
    tangerine_peel: "Citrus reticulata. ['Regulates Qi', 'Dries dampness', 'Relieves bloating', 'Reduces phlegm']. Tea, decoction, or added to cooking. Aged peel is more valued.",
    black_cohosh: "Actaea racemosa. ['Relieves menopausal symptoms', 'Reduces hot flashes', 'Supports hormonal balance']. Used for menopause, menstrual cramps, and PMS.",
    cranberry: "Vaccinium macrocarpon. ['Prevents urinary tract infections', 'Rich in antioxidants', 'Supports bladder health']. Used for UTI prevention and general urinary health.",
    maca: "Lepidium meyenii. ['Boosts libido', 'Enhances fertility', 'Increases energy and stamina']. Used for sexual dysfunction, fertility, and athletic performance.",
    rhodiola: "Rhodiola rosea. ['Reduces fatigue', 'Enhances mental performance', 'Adaptogenic properties']. Used for stress, fatigue, and cognitive decline.",
    bacopa: "Bacopa monnieri. ['Improves memory', 'Reduces anxiety', 'Supports cognitive function']. Used for memory enhancement, anxiety, and ADHD.",
    schisandra: "Schisandra chinensis. ['Protects liver', 'Increases stamina', 'Adaptogenic effects']. Used for liver health, fatigue, and respiratory conditions.",
    berberine: "Berberis aristata. ['Lowers blood sugar', 'Antimicrobial', 'Supports heart health']. Used for diabetes, infections, and cholesterol management.",
    andrographis: "Andrographis paniculata. ['Boosts immune system', 'Reduces inflammation', 'Antiviral properties']. Used for colds, flu, and upper respiratory infections.",
    cats_claw: "Uncaria tomentosa. ['Reduces inflammation', 'Supports immune function', 'Relieves arthritis pain']. Used for arthritis, digestive issues, and immune support.",
    horny_goat_weed: "Epimedium grandiflorum. ['Enhances libido', 'Improves erectile function', 'Supports bone health']. Used for sexual dysfunction, low libido, and osteoporosis.",
    stiff_silkworm: "Bombyx mori (infected with Beauveria bassiana). ['Dispels wind and stops spasms', 'Resolves phlegm and dissipates nodules', 'Relieves headache and sore throat']. Used for convulsions, seizures, facial paralysis, and swollen lymph nodes. Also treats cough with phlegm and skin rashes.",
    centipede: "Scolopendra subspinipes. ['Extinguishes wind and stops spasms', 'Unblocks collaterals and relieves pain', 'Detoxifies and dissolves masses']. Used for severe convulsions, tetanus, migraine, arthritis, and venomous bites.",
    scorpion: "Buthus martensii. ['Extinguishes wind and stops spasms', 'Unblocks collaterals and relieves pain', 'Reduces swelling and detoxifies']. Used for convulsions, epilepsy, hemiplegia, facial paralysis, and chronic pain.",
    ground_beetle: "Eupolyphaga sinensis. ['Breaks blood stasis and promotes menstruation', 'Relieves pain and reduces swelling', 'Heals fractures and trauma']. Used for amenorrhea, abdominal masses, traumatic injury, and fractures.",
    earthworm: "Pheretima aspergillum. ['Clears heat and stops spasms', 'Unblocks collaterals and relieves asthma', 'Promotes urination and reduces swelling']. Used for high fever with convulsions, asthma, hypertension, and joint pain.",
    cicada_fungus: "Cordyceps cicadae. ['Clears heat and stops spasms', 'Nourishes liver and improves vision', 'Boosts immunity and reduces fatigue']. Used for pediatric convulsions, night blindness, and immune deficiency.",
    beehive: "Apis cerana (hive). ['Detoxifies and reduces swelling', 'Relieves pain and kills parasites', 'Promotes healing of skin ulcers']. Used for skin infections, abscesses, mastitis, and parasitic infestations.",
    gecko: "Gekko gecko. ['Tonifies lung and kidney', 'Relieves cough and asthma', 'Strengthens bones and improves vitality']. Used for chronic cough, asthma, impotence, and kidney deficiency.",
    black_snake: "Zaocys dhumnades. ['Dispels wind and unblocks collaterals', 'Relieves itching and stops spasms', 'Treats chronic skin diseases']. Used for rheumatoid arthritis, chronic eczema, urticaria, and convulsions.",
    pit_viper: "Agkistrodon acutus. ['Dispels wind and stops spasms', 'Unblocks collaterals and relieves pain', 'Detoxifies and reduces swelling']. Used for severe arthritis, hemiplegia, convulsions, and venomous bites.",
    aloe_vera: "Aloe vera. ['Skin healing', 'Digestive support', 'Anti-inflammatory']. Gel for burns and skin conditions. Internal use for constipation and digestive health.",
    senna: "Senna alexandrina. ['Constipation relief', 'Bowel stimulation', 'Detox support']. Stimulant laxative for short-term constipation relief. One of the oldest known laxatives.",
    evening_primrose: "Oenothera biennis. ['PMS relief', 'Skin health', 'Hormonal balance']. Evening primrose oil (EPO) rich in GLA for PMS, eczema, and breast pain.",
    flaxseed: "Linum usitatissimum. ['Omega-3 source', 'Fiber for digestion', 'Heart health']. Rich in ALA omega-3 and lignans. Used for constipation, heart health, and inflammation.",
    lions_mane: "Hericium erinaceus. ['Neuroprotection', 'Nerve regeneration', 'Cognitive enhancement']. Medicinal mushroom for brain health. Stimulates Nerve Growth Factor (NGF). Used for memory and focus.",
    turkey_tail: "Trametes versicolor. ['Immune support', 'Cancer adjunct therapy', 'Gut health']. One of the most studied medicinal mushrooms for immune support, especially as cancer therapy adjunct.",
    chaga: "Inonotus obliquus. ['Antioxidant powerhouse', 'Immune support', 'Anti-inflammatory']. Called 'King of Mushrooms' in Siberian folk medicine. Extremely high ORAC antioxidant score.",
    cordyceps: "Ophiocordyceps sinensis. ['Energy & stamina', 'Lung support', 'Kidney tonification']. One of the most prized TCM herbs for energy, respiratory health, and kidney support. Used by athletes for performance.",
    cicada_slough: "Cryptotympana atrata. ['Anti-itch', 'Voice improvement', 'Eye clearing']. Used for sore throat, hoarse voice, itchy skin rashes, and eye conditions in TCM.",
    "human-sediment-crystal": "Homo sapiens (urine crystallized). Clears heat, cools blood, reduces swelling. Sore throat, bleeding gums, fevers, ulcers",
    "human-yellow": "Homo sapiens (feces processed). Clears heat, detoxifies, cools blood. High fever, delirium, toxic sores, skin infections",
    "human-placenta": "Homo sapiens placenta. Tonifies Qi and blood, nourishes essence. Infertility, chronic weakness, asthma, impotence",
    "charred-human-hair": "Homo sapiens hair carbonized. Stops bleeding, promotes urination, generates flesh. Bleeding, dysuria, chronic ulcers",
    "flying-squirrel-feces": "Trogopterus xanthipes. Activates blood, alleviates pain, stops bleeding. Pain from blood stasis, amenorrhea, bleeding",
    "bat-feces": "Vespertilio superans. Clears liver, brightens eyes, disperses stasis. Night blindness, eye inflammation, cataracts",
    "rabbit-feces": "Oryctolagus cuniculus. Brightens eyes, clears lung heat. Night blindness, eye翳膜, cough",
    "sparrow-feces": "Passer montanus. Detoxifies, reduces swelling, disperses accumulation. Carbuncles, throat blockage, food accumulation",
    "processed-urine-salt": "Homo sapiens urine + salt. Nourishes yin, reduces fever, consolidates essence. Tidal fever, chronic cough, seminal emission",
    honey: "Apis mellifera. Moisturizes lungs, detoxifies, nourishes spleen. Cough, dry skin, constipation, wound healing",
    "royal-jelly": "Apis mellifera secretion. Boosts immunity, anti-aging, enhances fertility. Fatigue, infertility, menopause, immune weakness",
    propolis: "Apis mellifera resin. Antimicrobial, anti-inflammatory, immune boost. Oral health, wound healing, cold sores, infections",
    "deer-antler": "Cervus nippon / Cervus elaphus. Tonifies yang, strengthens bones, nourishes blood. Impotence, infertility, weakness, anemia, developmental delays",
    "ox-bezoar": "Bos taurus gallstone. Clears heat, opens orifices, calms spirit. High fever, coma, convulsions, sore throat",
    "donkey-gelatin": "Equus asinus skin. Tonifies blood, stops bleeding, moisturizes lungs. Anemia, dry cough, uterine bleeding, dizziness",
    musk: "Moschus moschiferus. Opens orifices, activates blood, reduces swelling. Coma, pain, tumors, difficult labor",
    "bear-bile": "Ursus thibetanus. Clears heat, brightens eyes, stops spasms. Jaundice, gallstones, eye inflammation, febrile seizures",
    pearl: "Pteria martensii / Hyriopsis cumingii. Brightens eyes, calms spirit, clears heat, generates skin. Eye disorders, insomnia, skin ulcers, epilepsy",
    seahorse: "Hippocampus spp.. Tonifies kidney yang, disperses masses, relieves pain. Impotence, infertility, asthma, pain, tumors",
    moringa: "Moringa oleifera. Anti-inflammatory, blood sugar regulation, rich in nutrients. Malnutrition, diabetes, inflammation, anemia",
    psyllium: "Plantago ovata. Bulk-forming laxative, lowers cholesterol, regulates blood sugar. Constipation, IBS, high cholesterol, hemorrhoids",
    "chicken-gizzard": "Gallus gallus domesticus. Strengthens stomach, aids digestion, dissolves stones. Indigestion, food stagnation, bedwetting, gallstones/kidney stones",
    "silkworm-feces": "Bombyx mori. Dispels wind-damp, harmonizes stomach, brightens eyes. Arthritis, cramps, eye redness, skin rashes",
};


document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    renderHerbs();
    initFilters();
    initBodyMap();
    initPointCards();
    initTeaCards();
    initModal();
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
// Herb Modal — Open / Close
// ============================================
function openHerbModal(herbId) {
    const herb = herbsData.find(h => h.id === herbId);
    if (!herb) return;

    const modal = document.getElementById('herb-modal');
    const modalBody = document.getElementById('modal-body');
    if (!modal || !modalBody) return;

    const photoUrl = herbPhotos[herb.id] || '';
    // Benefits may be stored as stringified Python lists, e.g. "['a', 'b']"
    const parseBenefits = (arr) => {
        const items = [];
        arr.forEach(b => {
            if (typeof b === 'string' && b.startsWith('[')) {
                try {
                    // Try JSON parse (replace single quotes with double quotes)
                    const parsed = JSON.parse(b.replace(/'/g, '"'));
                    items.push(...parsed);
                } catch {
                    // Fallback: strip brackets and split
                    const cleaned = b.replace(/^\[|\]$/g, '').split("', '").map(s => s.replace(/^'|'$/g, '').trim());
                    items.push(...cleaned.filter(Boolean));
                }
            } else {
                items.push(b);
            }
        });
        return items;
    };
    const benefitsList = parseBenefits(herb.benefits).map(b => `<li>${b}</li>`).join('');

    modalBody.innerHTML = `
        <div class="modal-hero" style="background: linear-gradient(135deg, #e8f5e9, #c8e6c9); display:flex; align-items:center; justify-content:center; height:280px; overflow:hidden;">
            ${photoUrl
                ? `<img src="${photoUrl}" alt="${herb.name}" style="width:100%; height:100%; object-fit:cover;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"><span style="display:none; font-size:80px;">${herb.icon}</span>`
                : `<span style="font-size:80px;">${herb.icon}</span>`
            }
        </div>
        <div class="modal-content">
            <h2 class="modal-title">${herb.name}</h2>
            <p class="modal-subtitle">${herb.chinese}</p>
            <p style="color: var(--color-text-secondary); margin-bottom: 8px; font-style: italic;">${herb.scientificName || ''}</p>
            ${herb.origin ? `<p style="color: var(--color-text-secondary); margin-bottom: 16px;">📍 Origin: ${herb.origin}</p>` : ''}

            <div class="modal-section">
                <h4>📖 About</h4>
                <p>${herb.description}</p>
            </div>

            <div class="modal-section">
                <h4>✅ Benefits</h4>
                <ul>${benefitsList}</ul>
            </div>

            ${herb.research ? `
            <div class="modal-section">
                <h4>🔬 Scientific Research</h4>
                <p><a href="${herb.research}" target="_blank" rel="noopener" style="color: var(--color-primary);">View on PubMed →</a></p>
            </div>` : ''}
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeHerbModal() {
    const modal = document.getElementById('herb-modal');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
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
