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

// ============================================
// DOM Ready
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    renderHerbs();
    initFilters();
    initBodyMap();
    initPointCards();
});

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
        <div class="herb-card" data-category="${herb.category}">
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

    // Add click handlers
    grid.querySelectorAll('.herb-card').forEach(card => {
        card.addEventListener('click', () => {
            // Future: open detail modal
            console.log('Herb clicked:', card.querySelector('h3').textContent);
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
