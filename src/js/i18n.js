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
        'hero.subtitle': 'Evidence-based guide to Chinese herbal medicine and acupressure. Rooted in the Ben Cao Gang Mu (本草纲目), validated by modern science.',
        'herbs.title': 'Herbal Medicine',
        'herbs.subtitle': 'Explore the most important herbs in Traditional Chinese Medicine',
        'acupressure.title': 'Acupressure Points',
        'acupressure.subtitle': 'Key points for natural healing and wellness',
        'teas.title': 'Healing Tea Recipes',
        'teas.subtitle': 'Traditional tea blends for health and wellness',
        'basics.title': 'TCM Fundamentals',
        'basics.subtitle': 'Understanding the core principles of Chinese medicine'
    },
    zh: {
        'nav.herbs': '草药',
        'nav.acupressure': '穴位',
        'nav.teas': '茶饮',
        'nav.basics': '中医基础',
        'hero.label': '中医药',
        'hero.title': '古老的治愈艺术<br>现代化呈现',
        'hero.subtitle': '基于科学的中草药和穴位指南。源自《本草纲目》，经现代科学验证。',
        'herbs.title': '草药医学',
        'herbs.subtitle': '探索中医药中最重要的草药',
        'acupressure.title': '穴位按摩',
        'acupressure.subtitle': '自然疗愈和健康的关键穴位',
        'teas.title': '养生茶饮',
        'teas.subtitle': '传统养生茶配方',
        'basics.title': '中医基础',
        'basics.subtitle': '了解中医的核心原理'
    },
    ja: {
        'nav.herbs': '薬草',
        'nav.acupressure': 'ツボ',
        'nav.teas': 'お茶',
        'nav.basics': '中医基礎',
        'hero.label': '漢方医学',
        'hero.title': '古代の治癒術<br>現代化',
        'hero.subtitle': '科学に基づいた漢方薬とツボのガイド。『本草綱目』に基づき、現代科学で検証。',
        'herbs.title': '漢方薬',
        'herbs.subtitle': '漢方医学で最も重要な薬草を探る',
        'acupressure.title': '指圧ポイント',
        'acupressure.subtitle': '自然治癒と健康のための重要なポイント',
        'teas.title': '健康茶',
        'teas.subtitle': '伝統的な健康茶のブレンド',
        'basics.title': '中医の基礎',
        'basics.subtitle': '漢方医学の核心原則を理解する'
    },
    fr: {
        'nav.herbs': 'Herbes',
        'nav.acupressure': 'Acupression',
        'nav.teas': 'Thés',
        'nav.basics': 'Base TCM',
        'hero.label': 'Médecine Traditionnelle Chinoise',
        'hero.title': 'L\'art ancien de<br>la guérison, modernisé.',
        'hero.subtitle': 'Guide basé sur la science de la phytothérapie chinoise et de l\'acupression. Enraciné dans le Ben Cao Gang Mu (本草纲目), validé par la science moderne.',
        'herbs.title': 'Phytothérapie',
        'herbs.subtitle': 'Explorez les herbes les plus importantes de la MTC',
        'acupressure.title': 'Points d\'Acupression',
        'acupressure.subtitle': 'Points clés pour la guérison naturelle',
        'teas.title': 'Thés Curatifs',
        'teas.subtitle': 'Mélanges de thés traditionnels pour la santé',
        'basics.title': 'Fondamentaux TCM',
        'basics.subtitle': 'Comprendre les principes fondamentaux de la médecine chinoise'
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
