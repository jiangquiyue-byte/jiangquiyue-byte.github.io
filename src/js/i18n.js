/* ============================================
   语言切换功能
   ============================================ */

// 语言数据
const i18nData = {
    en: {
        'nav.herbs': 'Herbs',
        'nav.acupressure': 'Acupressure',
        'nav.teas': 'Tea Recipes',
        'nav.basics': 'TCM Basics',
        'hero.label': 'Traditional Chinese Medicine',
        'hero.title': 'The ancient art of<br>healing, modernized.',
        'hero.subtitle': 'Evidence-based guide to Chinese herbal medicine and acupressure. Rooted in the <em>Ben Cao Gang Mu</em> (本草纲目), validated by modern science.',
        'hero.explore': 'Explore Herbs',
        'hero.learn': 'Learn Acupressure',
        'stats.herbs': 'Herbs Documented',
        'stats.points': 'Acupressure Points',
        'stats.history': 'Years of History',
        'stats.meridians': 'Meridian Lines',
        'herbs.label': 'Herbal Encyclopedia',
        'herbs.title': 'Powerful herbs from the <em>Ben Cao Gang Mu</em>',
        'herbs.desc': 'Each herb is documented with its traditional use, modern scientific research, and practical applications for everyday wellness.',
        'filter.all': 'All',
        'filter.immunity': 'Immunity',
        'filter.energy': 'Energy',
        'filter.sleep': 'Sleep',
        'filter.digestion': 'Digestion',
        'filter.stress': 'Stress Relief',
        'acu.label': 'Acupressure Guide',
        'acu.title': 'Healing points, mapped precisely.',
        'acu.desc': 'Interactive guide to the body\'s pressure points. Learn how to find and stimulate key points for common ailments — no needles required.',
        'acu.explore': 'Explore Acupressure Points',
        'acu.click': 'Click on any point on the body map to learn about its benefits and how to stimulate it.',
        'acu.headache': 'Headache Relief',
        'acu.anxiety': 'Anxiety & Nausea',
        'acu.sleep': 'Better Sleep',
        'acu.digestion': 'Digestive Health',
        'teas.label': 'Herbal Tea Recipes',
        'teas.title': 'Simple remedies, brewed at home.',
        'teas.desc': 'Traditional herbal tea recipes you can make with readily available ingredients. Each recipe includes benefits, ingredients, and step-by-step instructions.',
        'tea.immunity': 'Immunity',
        'tea.sleep': 'Sleep',
        'tea.energy': 'Energy',
        'tea.astragalus.name': 'Astragalus Immune Tea',
        'tea.astragalus.desc': 'Boost your immune system with this classic Chinese herbal blend.',
        'tea.goji.name': 'Chamomile & Goji Sleep Tea',
        'tea.goji.desc': 'A gentle blend to calm the mind and promote restful sleep.',
        'tea.ginseng.name': 'Ginseng & Red Date Energy Tea',
        'tea.ginseng.desc': 'Natural energy boost without the crash of coffee.',
        'basics.label': 'TCM Fundamentals',
        'basics.title': 'Understanding the foundations.',
        'basics.desc': 'Traditional Chinese Medicine is built on centuries of observation and practice. Learn the core concepts that guide herbal prescriptions and acupressure treatments.'
    },
    zh: {
        'nav.herbs': '草药',
        'nav.acupressure': '穴位',
        'nav.teas': '茶饮',
        'nav.basics': '中医基础',
        'hero.label': '中医药',
        'hero.title': '古老的治愈艺术<br>现代化呈现',
        'hero.subtitle': '基于科学的中草药和穴位指南。源自《本草纲目》，经现代科学验证。',
        'hero.explore': '探索草药',
        'hero.learn': '学习穴位',
        'stats.herbs': '已记录草药',
        'stats.points': '穴位',
        'stats.history': '年历史',
        'stats.meridians': '经络',
        'herbs.label': '草药百科',
        'herbs.title': '来自《本草纲目》的<strong>强大草药</strong>',
        'herbs.desc': '每种草药都记录了其传统用途、现代科学研究和日常保健的实际应用。',
        'filter.all': '全部',
        'filter.immunity': '免疫',
        'filter.energy': '精力',
        'filter.sleep': '睡眠',
        'filter.digestion': '消化',
        'filter.stress': '减压',
        'acu.label': '穴位指南',
        'acu.title': '精确标注的疗愈穴位',
        'acu.desc': '身体穴位的互动指南。学习如何找到并刺激关键穴位来缓解常见不适——无需针灸。',
        'acu.explore': '探索穴位',
        'acu.click': '点击身体图上的任何穴位，了解其功效和刺激方法。',
        'acu.headache': '缓解头痛',
        'acu.anxiety': '焦虑与恶心',
        'acu.sleep': '改善睡眠',
        'acu.digestion': '消化健康',
        'teas.label': '养生茶饮',
        'teas.title': '在家就能做的简单养生茶',
        'teas.desc': '传统养生茶配方，材料简单易得。每个配方都包含功效、材料和详细步骤。',
        'tea.immunity': '免疫',
        'tea.sleep': '睡眠',
        'tea.energy': '精力',
        'tea.astragalus.name': '黄芪养生茶',
        'tea.astragalus.desc': '经典中药配方，增强免疫力。',
        'tea.goji.name': '甘菊枸杞安眠茶',
        'tea.goji.desc': '温和配方，安神助眠。',
        'tea.ginseng.name': '人参红枣补气茶',
        'tea.ginseng.desc': '天然提神，不会像咖啡那样 crash。',
        'basics.label': '中医基础',
        'basics.title': '了解中医的根基',
        'basics.desc': '中医药建立在几个世纪的观察和实践之上。了解指导草药配方和穴位治疗的核心概念。'
    },
    ja: {
        'nav.herbs': '薬草',
        'nav.acupressure': 'ツボ',
        'nav.teas': 'お茶',
        'nav.basics': '中医基礎',
        'hero.label': '漢方医学',
        'hero.title': '古代の治癒術<br>現代化',
        'hero.subtitle': '科学に基づいた漢方薬とツボのガイド。『本草綱目』に基づき、現代科学で検証。',
        'hero.explore': '薬草を探す',
        'hero.learn': 'ツボを学ぶ',
        'stats.herbs': '記録された薬草',
        'stats.points': 'ツボ',
        'stats.history': '年の歴史',
        'stats.meridians': '経絡',
        'herbs.label': '薬草百科',
        'herbs.title': '『本草綱目』の<strong>強力な薬草</strong>',
        'herbs.desc': '各薬草は伝統的な使用法、現代の科学研究、日常の健康への実践的な応用と共に記録されています。',
        'filter.all': 'すべて',
        'filter.immunity': '免疫',
        'filter.energy': 'エネルギー',
        'filter.sleep': '睡眠',
        'filter.digestion': '消化',
        'filter.stress': 'ストレス解消',
        'acu.label': 'ツボガイド',
        'acu.title': '正確にマッピングされた治癒ポイント',
        'acu.desc': '体のツボのインタラクティブガイド。一般的な症状に対する重要なツボの見つけ方と刺激の仕方を学びましょう。',
        'acu.explore': 'ツボを探す',
        'acu.click': '体のマップ上の任意のツボをクリックして、その効果と刺激方法を学びましょう。',
        'acu.headache': '頭痛緩和',
        'acu.anxiety': '不安と吐き気',
        'acu.sleep': '良い睡眠',
        'acu.digestion': '消化の健康',
        'teas.label': '健康茶レシピ',
        'teas.title': '自宅で作れる簡単レシピ',
        'teas.desc': '手に入りやすい材料で作れる伝統的な健康茶。各レシピには効能、材料、手順が含まれています。',
        'tea.immunity': '免疫',
        'tea.sleep': '睡眠',
        'tea.energy': 'エネルギー',
        'tea.astragalus.name': '黄耆免疫茶',
        'tea.astragalus.desc': 'この古典的な漢方ブレンドで免疫システムを強化しましょう。',
        'tea.goji.name': 'カモミールとクコの実の睡眠茶',
        'tea.goji.desc': '心を落ち着かせ、安らかな睡眠を促す優しいブレンド。',
        'tea.ginseng.name': '人参とナツメのエナジーティー',
        'tea.ginseng.desc': 'コーヒーのような crash なしに自然なエネルギーを。',
        'basics.label': '中医の基礎',
        'basics.title': '基盤を理解する',
        'basics.desc': '漢方医学は何世紀にもわたる観察と実践に基づいています。漢方処方とツボ治療を導く核心概念を学びましょう。'
    },
    fr: {
        'nav.herbs': 'Herbes',
        'nav.acupressure': 'Acupression',
        'nav.teas': 'Thés',
        'nav.basics': 'Base TCM',
        'hero.label': 'Médecine Traditionnelle Chinoise',
        'hero.title': 'L\'art ancien de<br>la guérison, modernisé.',
        'hero.subtitle': 'Guide basé sur la science de la phytothérapie chinoise et de l\'acupression. Enraciné dans le Ben Cao Gang Mu (本草纲目), validé par la science moderne.',
        'hero.explore': 'Explorer les Herbes',
        'hero.learn': 'Apprendre l\'Acupression',
        'stats.herbs': 'Herbes Documentées',
        'stats.points': 'Points d\'Acupression',
        'stats.history': 'Ans d\'Histoire',
        'stats.meridians': 'Méridiens',
        'herbs.label': 'Encyclopédie des Herbes',
        'herbs.title': 'Herbes puissantes du <em>Ben Cao Gang Mu</em>',
        'herbs.desc': 'Chaque herb est documentée avec son utilisation traditionnelle, la recherche scientifique moderne et les applications pratiques pour le bien-être quotidien.',
        'filter.all': 'Tous',
        'filter.immunity': 'Immunité',
        'filter.energy': 'Énergie',
        'filter.sleep': 'Sommeil',
        'filter.digestion': 'Digestion',
        'filter.stress': 'Anti-stress',
        'acu.label': 'Guide d\'Acupression',
        'acu.title': 'Points de guérison, cartographiés avec précision.',
        'acu.desc': 'Guide interactif des points de pression du corps. Apprenez à trouver et stimuler les points clés pour les maux courants — sans aiguilles.',
        'acu.explore': 'Explorer les Points',
        'acu.click': 'Cliquez sur n\'importe quel point sur la carte du corps pour connaître ses bienfaits et comment le stimuler.',
        'acu.headache': 'Soulager les Maux de Tête',
        'acu.anxiety': 'Anxiété & Nausée',
        'acu.sleep': 'Meilleur Sommeil',
        'acu.digestion': 'Santé Digestive',
        'teas.label': 'Recettes de Thé',
        'teas.title': 'Remèdes simples, préparés chez vous.',
        'teas.desc': 'Recettes de thés traditionnels avec des ingrédients facilement disponibles. Chaque recette comprend les bienfaits, les ingrédients et les instructions.',
        'tea.immunity': 'Immunité',
        'tea.sleep': 'Sommeil',
        'tea.energy': 'Énergie',
        'tea.astragalus.name': 'Thé Immunitaire à l\'Astragale',
        'tea.astragalus.desc': 'Renforcez votre système immunitaire avec ce mélange classique.',
        'tea.goji.name': 'Thé au Camomille et Baies de Goji',
        'tea.goji.desc': 'Un mélange doux pour apaiser l\'esprit et favoriser le sommeil.',
        'tea.ginseng.name': 'Thé Énergie Ginseng et Jujubes',
        'tea.ginseng.desc': 'Boost d\'énergie naturel sans le crash du café.',
        'basics.label': 'Fondamentaux TCM',
        'basics.title': 'Comprendre les fondations.',
        'basics.desc': 'La Médecine Traditionnelle Chinoise est construite sur des siècles d\'observation et de pratique. Apprenez les concepts fondamentaux qui guident les prescriptions et les traitements.'
    }
};

// 当前语言
let currentLang = localStorage.getItem('lang') || 'en';

// 切换语言
function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18nData[lang] && i18nData[lang][key]) {
            el.innerHTML = i18nData[lang][key];
        }
    });
    
    // 更新语言按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    
    // 更新 HTML lang 属性
    document.documentElement.lang = lang;
}

// 初始化语言切换器
function initLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
    
    // 应用保存的语言
    switchLanguage(currentLang);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
});
