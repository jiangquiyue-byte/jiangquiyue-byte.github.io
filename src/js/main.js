/* ============================================
   Herbal Atlas — Main JavaScript
   ============================================ */

// Herb Data (will be loaded from JSON in production)
const herbsData = [
    {
        id: "ginseng",
        name: "Ginseng",
        chinese: "人参 (Rén Shēn)",
        icon: "🌱",
        iconBg: "#e8f5e9",
        description: "The king of Chinese herbs. Used for thousands of years to boost energy, enhance cognitive function, and strengthen the immune system.",
        benefits: ["Energy boost", "Cognitive support", "Immune health"],
        category: "energy",
        scientificName: "Panax ginseng",
        origin: "Northeast China, Korea",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=ginseng+panax"
    },
    {
        id: "astragalus",
        name: "Astragalus",
        chinese: "黄芪 (Huáng Qí)",
        icon: "🌿",
        iconBg: "#f0f7ec",
        description: "A cornerstone of Chinese herbal medicine for strengthening Qi and boosting immunity. Often used in soups and teas.",
        benefits: ["Immune boost", "Heart health", "Anti-aging"],
        category: "immunity",
        scientificName: "Astragalus membranaceus",
        origin: "Northern China, Mongolia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=astragalus+immunity"
    },
    {
        id: "goji",
        name: "Goji Berries",
        chinese: "枸杞子 (Gǒu Qǐ Zǐ)",
        icon: "🔴",
        iconBg: "#fce4ec",
        description: "Bright red superfruit rich in antioxidants. Supports eye health, liver function, and overall vitality.",
        benefits: ["Eye health", "Antioxidant", "Longevity"],
        category: "immunity",
        scientificName: "Lycium barbarum",
        origin: "Ningxia, China",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=lycium+barbarum"
    },
    {
        id: "reishi",
        name: "Reishi Mushroom",
        chinese: "灵芝 (Líng Zhī)",
        icon: "🍄",
        iconBg: "#efebe9",
        description: "The 'mushroom of immortality.' Supports immune function, reduces stress, and promotes restful sleep.",
        benefits: ["Sleep aid", "Stress relief", "Immune support"],
        category: "sleep",
        scientificName: "Ganoderma lucidum",
        origin: "China, Japan, Korea",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=ganoderma+lucidum"
    },
    {
        id: "turmeric",
        name: "Turmeric",
        chinese: "姜黄 (Jiāng Huáng)",
        icon: "🟡",
        iconBg: "#fff8e1",
        description: "Powerful anti-inflammatory herb used in both Chinese and Ayurvedic medicine. Supports joint and digestive health.",
        benefits: ["Anti-inflammatory", "Joint health", "Digestion"],
        category: "digestion",
        scientificName: "Curcuma longa",
        origin: "Southern China, India",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=curcuma+longa+anti-inflammatory"
    },
    {
        id: "chamomile",
        name: "Chamomile",
        chinese: "甘菊 (Gān Jú)",
        icon: "🌼",
        iconBg: "#fffde7",
        description: "Gentle calming herb used worldwide for anxiety relief and sleep support. Safe for daily use.",
        benefits: ["Sleep aid", "Anxiety relief", "Digestion"],
        category: "sleep",
        scientificName: "Matricaria chamomilla",
        origin: "Europe, Western Asia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=chamomile+anxiety"
    },
    {
        id: "elderberry",
        name: "Elderberry",
        chinese: "接骨木 (Jiē Gǔ Mù)",
        icon: "🫐",
        iconBg: "#ede7f6",
        description: "Powerful immune-boosting berry rich in vitamins and antioxidants. Traditionally used for colds and flu.",
        benefits: ["Immune boost", "Antiviral", "Rich in vitamins"],
        category: "immunity",
        scientificName: "Sambucus nigra",
        origin: "Europe, North America",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=sambucus+nigra+immune"
    },
    {
        id: "echinacea",
        name: "Echinacea",
        chinese: "紫锥菊 (Zǐ Zhuī Jú)",
        icon: "🌸",
        iconBg: "#fce4ec",
        description: "North American native herb widely used for preventing and treating colds and respiratory infections.",
        benefits: ["Cold prevention", "Respiratory health", "Immune support"],
        category: "immunity",
        scientificName: "Echinacea purpurea",
        origin: "North America",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=echinacea+cold"
    },
    {
        id: "valerian",
        name: "Valerian Root",
        chinese: "缬草 (Xié Cǎo)",
        icon: "🌙",
        iconBg: "#e8eaf6",
        description: "Natural sleep aid used for centuries in Europe and Asia. Helps improve sleep quality without morning grogginess.",
        benefits: ["Sleep aid", "Anxiety relief", "Muscle relaxation"],
        category: "sleep",
        scientificName: "Valeriana officinalis",
        origin: "Europe, Asia",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=valeriana+sleep"
    },
    {
        id: "peppermint",
        name: "Peppermint",
        chinese: "薄荷 (Bò He)",
        icon: "🍃",
        iconBg: "#e0f2f1",
        description: "Cooling herb that soothes digestive issues, headaches, and respiratory problems. Refreshing and invigorating.",
        benefits: ["Digestion", "Headache relief", "Respiratory"],
        category: "digestion",
        scientificName: "Mentha × piperita",
        origin: "Europe, Mediterranean",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=mentha+pepperita+digestion"
    },
    {
        id: "ashwagandha",
        name: "Ashwagandha",
        chinese: "南非醉茄 (Nán Zuì Qié)",
        icon: "🌾",
        iconBg: "#f3e5f5",
        description: "Adaptogenic herb from Ayurvedic and Chinese medicine. Reduces stress, boosts energy, and enhances cognitive function.",
        benefits: ["Stress relief", "Energy", "Cognitive support"],
        category: "stress",
        scientificName: "Withania somnifera",
        origin: "India, Middle East",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=withania+somnifera+stress"
    },
    {
        id: "lavender",
        name: "Lavender",
        chinese: "薰衣草 (Xūn Yī Cǎo)",
        icon: "💜",
        iconBg: "#ede7f6",
        description: "Calming aromatic herb used for anxiety, insomnia, and stress. Its essential oil is one of the most popular worldwide.",
        benefits: ["Anxiety relief", "Sleep aid", "Mood support"],
        category: "stress",
        scientificName: "Lavandula angustifolia",
        origin: "Mediterranean region",
        research: "https://pubmed.ncbi.nlm.nih.gov/?term=lavandula+anxiety"
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

// Wikimedia Commons photos for herbs (CC BY-SA / Public Domain)
const herbPhotos = {
    ginseng: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Panax_ginseng_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-025.jpg/400px-Panax_ginseng_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-025.jpg",
    astragalus: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Astragalus_membranaceus_Fisch._ex_Bunge_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-073.jpg/400px-Astragalus_membranaceus_Fisch._ex_Bunge_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-073.jpg",
    goji: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Goji_berries_drying.jpg/400px-Goji_berries_drying.jpg",
    reishi: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Ganoderma_lucidum_01.jpg/400px-Ganoderma_lucidum_01.jpg",
    turmeric: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Turmericroot.jpg/400px-Turmericroot.jpg",
    chamomile: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Matricaria_chamomilla_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-036.jpg/400px-Matricaria_chamomilla_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-036.jpg",
    elderberry: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Sambucus_nigra_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-020.jpg/400px-Sambucus_nigra_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-020.jpg",
    echinacea: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Head_of_Echinacea_purpea.jpg/400px-Head_of_Echinacea_purpea.jpg",
    valerian: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Valeriana_officinalis_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-053.jpg/400px-Valeriana_officinalis_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-053.jpg",
    peppermint: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Mentha_%C3%97_piperita_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-041.jpg/400px-Mentha_%C3%97_piperita_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-041.jpg",
    ashwagandha: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Withania_somnifera_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-153.jpg/400px-Withania_somnifera_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-153.jpg",
    lavender: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Lavandula_angustifolia_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-058.jpg/400px-Lavandula_angustifolia_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-058.jpg"
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
// DOM Ready
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    renderHerbs();
    initFilters();
    initBodyMap();
    initPointCards();
    initModal();
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

    grid.innerHTML = filtered.map(herb => `
        <div class="herb-card" data-category="${herb.category}" data-herb-id="${herb.id}">
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
    `).join('');

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
        });
    });
}

// ============================================
// Point Cards
// ============================================
function initPointCards() {
    const cards = document.querySelectorAll('.point-card');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const pointId = card.dataset.point;
            const pointEl = document.querySelector(`.point[data-point="${pointId}"]`);
            if (pointEl) {
                pointEl.click();
                // Scroll to body map
                document.getElementById('acupressure')?.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
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
