#!/usr/bin/env python3
"""
TCM Herb Scraper — Multilingual Content Collector
Scrapes Chinese herbal medicine data from multiple sources and languages.
Uses Scrapling for adaptive web scraping.
"""

import json
import os
import sys
import time
import asyncio
from pathlib import Path

# Add parent to path
sys.path.insert(0, str(Path(__file__).parent.parent))

# Data directory
DATA_DIR = Path(__file__).parent.parent / "src" / "data"
DATA_DIR.mkdir(parents=True, exist_ok=True)

# ============================================
# Multilingual TCM Sources
# ============================================
SOURCES = {
    "english": [
        {
            "name": "Root & Spring - Top Herbs",
            "url": "https://rootandspring.com/blogs/news/top-10-chinese-herbs-for-wellness",
            "type": "blog",
            "selectors": {
                "title": "h1",
                "content": ".article-content, .blog-content, main",
                "herbs": "h2, h3"
            }
        },
        {
            "name": "Dr. Axe - Chinese Herbs",
            "url": "https://draxe.com/nutrition/top-chinese-herbs-and-superfoods/",
            "type": "article",
            "selectors": {
                "title": "h1",
                "content": ".article-content, .entry-content, main",
                "herbs": "h2, h3"
            }
        },
        {
            "name": "Healthline - Acupressure",
            "url": "https://www.healthline.com/health/acupressure",
            "type": "medical",
            "selectors": {
                "title": "h1",
                "content": "article, .content, main",
                "herbs": "h2, h3"
            }
        },
        {
            "name": "WebMD - Chinese Herbal Medicine",
            "url": "https://www.webmd.com/vitamins-and-supplements/chinese-herbal-medicine",
            "type": "medical",
            "selectors": {
                "title": "h1",
                "content": "article, .content, main",
                "herbs": "h2, h3"
            }
        }
    ],
    "chinese": [
        {
            "name": "中药材数据库",
            "url": "https://www.zhongyoo.com/",
            "type": "database",
            "selectors": {
                "title": "h1, .title",
                "content": ".content, .detail, main",
                "herbs": "h2, h3, .herb-name"
            }
        },
        {
            "name": "本草纲目在线",
            "url": "https://www.bencaogangmu.com/",
            "type": "reference",
            "selectors": {
                "title": "h1, .title",
                "content": ".content, .article, main",
                "herbs": "h2, h3"
            }
        }
    ],
    "japanese": [
        {
            "name": "漢方薬情報",
            "url": "https://www.kampo-js.or.jp/",
            "type": "association",
            "selectors": {
                "title": "h1, .title",
                "content": "article, .content, main",
                "herbs": "h2, h3"
            }
        }
    ],
    "french": [
        {
            "name": "Médecine Chinoise",
            "url": "https://www.medecine-chinoise.com/",
            "type": "information",
            "selectors": {
                "title": "h1, .title",
                "content": "article, .content, main",
                "herbs": "h2, h3"
            }
        }
    ]
}

# ============================================
# Pre-defined herb database (multilingual)
# We'll use this as base data, then enrich with scrapers
# ============================================
HERBS_DATABASE = [
    {
        "id": "ginseng",
        "names": {
            "en": "Ginseng",
            "zh": "人参",
            "zh_pinyin": "Rén Shēn",
            "ja": "人蔵",
            "ja_reading": "ニンジン",
            "fr": "Ginseng"
        },
        "scientific_name": "Panax ginseng",
        "family": "Araliaceae",
        "origin": ["Northeast China", "Korea", "Siberia"],
        "parts_used": ["Root"],
        "nature": "Warm",
        "flavor": "Sweet, Slightly bitter",
        "meridians": ["Spleen", "Lung", "Heart"],
        "categories": ["energy", "immunity", "cognitive"],
        "benefits": {
            "en": [
                "Boosts energy and reduces fatigue",
                "Enhances cognitive function",
                "Strengthens immune system",
                "Supports cardiovascular health",
                "Anti-aging properties"
            ],
            "zh": [
                "大补元气",
                "复脉固脱",
                "补脾益肺",
                "生津养血",
                "安神益智"
            ]
        },
        "uses": {
            "en": "Commonly used in soups, teas, and tonic formulas. Can be sliced and steeped in hot water.",
            "zh": "常用于炖汤、泡茶、入药方。可切片冲泡热水饮用。",
            "ja": "スープ、お茶、薬膳に使用。薄切りにして熱湯で浸します。",
            "fr": "Utilisé couramment dans les soupes, thés et toniques. Peut être tranché et infusé dans l'eau chaude."
        },
        "precautions": {
            "en": "Not recommended for pregnant women or people with high blood pressure. Consult a healthcare provider before use.",
            "zh": "孕妇及高血压患者慎用。使用前请咨询医生。",
            "ja": "妊娠中または高血圧の方は使用を避けてください。",
            "fr": "Non recommandé pour les femmes enceintes ou les personnes souffrant d'hypertension."
        },
        "modern_research": "Multiple studies show ginseng may improve cognitive performance, boost immune function, and reduce fatigue. (PubMed: 23717137, 21154383, 29624410)",
        "image_url": "",
        "ben_cao_ref": "本草纲目·草部·人参"
    },
    {
        "id": "astragalus",
        "names": {
            "en": "Astragalus",
            "zh": "黄芪",
            "zh_pinyin": "Huáng Qí",
            "ja": "黄耆",
            "ja_reading": "オウギ",
            "fr": "Astragale"
        },
        "scientific_name": "Astragalus membranaceus",
        "family": "Fabaceae",
        "origin": ["Northern China", "Mongolia"],
        "parts_used": ["Root"],
        "nature": "Warm",
        "flavor": "Sweet",
        "meridians": ["Spleen", "Lung"],
        "categories": ["immunity", "energy", "heart"],
        "benefits": {
            "en": [
                "Strengthens immune system",
                "Supports heart health",
                "Promotes wound healing",
                "Anti-aging effects",
                "Enhances energy (Qi)"
            ],
            "zh": [
                "补气升阳",
                "固表止汗",
                "利水消肿",
                "生津养血",
                "托毒排脓"
            ]
        },
        "uses": {
            "en": "Often used in soups, teas, and herbal formulas. Can be added to chicken soup for immune support.",
            "zh": "常用于煲汤、泡茶、入药方。可加入鸡汤中增强免疫力。",
            "ja": "スープやお茶、漢方方剤に使用。鶏スープに加えて免疫を強化します。",
            "fr": "Utilisé dans les soupes, thés et formules herbalistes. Peut être ajouté au poulet pour soutenir l'immunité."
        },
        "precautions": {
            "en": "Not suitable for people with autoimmune diseases or those taking immunosuppressants.",
            "zh": "自身免疫性疾病患者及服用免疫抑制剂者不宜使用。",
            "ja": "自己免疫疾患の方や免疫抑制剤を使用の方は避けてください。",
            "fr": "Non adapté aux personnes atteintes de maladies auto-immunes ou prenant des immunosuppresseurs."
        },
        "modern_research": "Research shows astragalus may boost immune function and protect cardiovascular health. (PubMed: 28830214, 32382301)",
        "image_url": "",
        "ben_cao_ref": "本草纲目·草部·黄芪"
    },
    {
        "id": "goji",
        "names": {
            "en": "Goji Berries",
            "zh": "枸杞子",
            "zh_pinyin": "Gǒu Qǐ Zǐ",
            "ja": "枸杞",
            "ja_reading": "コケイ",
            "fr": "Baies de Goji"
        },
        "scientific_name": "Lycium barbarum",
        "family": "Solanaceae",
        "origin": ["Ningxia, China", "Tibet"],
        "parts_used": ["Fruit"],
        "nature": "Neutral",
        "flavor": "Sweet",
        "meridians": ["Liver", "Kidney"],
        "categories": ["eye_health", "immunity", "longevity"],
        "benefits": {
            "en": [
                "Supports eye health and vision",
                "Rich in antioxidants",
                "Boosts immune function",
                "Promotes longevity",
                "Nourishes Liver and Kidneys"
            ],
            "zh": [
                "滋补肝肾",
                "益精明目",
                "养血安神",
                "生津止渴",
                "润肺止咳"
            ]
        },
        "uses": {
            "en": "Eat raw as a snack, add to teas, or use in cooking. Popular in trail mixes and health foods.",
            "zh": "可直接食用、泡茶、煲汤。常用于养生零食和健康食品。",
            "ja": "スナックとして生で食べたり、お茶や料理に使います。",
            "fr": "Consommé cru comme snack, ajouté aux thés ou en cuisine. Populaire dans les mélanges trail et aliments santé."
        },
        "precautions": {
            "en": "May interact with blood thinners and diabetes medications. Use in moderation.",
            "zh": "可能与抗凝血药物和糖尿病药物相互作用。适量食用。",
            "ja": "血液凝固薬や糖尿病薬と相互作用する可能性があります。",
            "fr": "Peut interagir avec les anticoagulants et les médicaments contre le diabète."
        },
        "modern_research": "Studies show goji berries improve vision, boost immunity, and are rich in antioxidants. (PubMed: 35898713, 21169874, 30728882)",
        "image_url": "",
        "ben_cao_ref": "本草纲目·木部·枸杞"
    },
    {
        "id": "reishi",
        "names": {
            "en": "Reishi Mushroom",
            "zh": "灵芝",
            "zh_pinyin": "Líng Zhī",
            "ja": "霊芝",
            "ja_reading": "レイシ",
            "fr": "Champignon Reishi"
        },
        "scientific_name": "Ganoderma lucidum",
        "family": "Ganodermataceae",
        "origin": ["China", "Japan", "Korea"],
        "parts_used": ["Fruiting body", "Spores"],
        "nature": "Neutral",
        "flavor": "Bitter",
        "meridians": ["Heart", "Lung", "Liver"],
        "categories": ["sleep", "immunity", "stress"],
        "benefits": {
            "en": [
                "Promotes restful sleep",
                "Supports immune function",
                "Reduces stress and anxiety",
                "Supports liver health",
                "Anti-aging properties"
            ],
            "zh": [
                "补气安神",
                "止咳平喘",
                "滋补强壮",
                "扶正固本",
                "延年益寿"
            ]
        },
        "uses": {
            "en": "Available as tea, extract, powder, or capsules. Can be sliced and steeped in hot water.",
            "zh": "可制成茶、提取物、粉剂或胶囊。可切片冲泡热水。",
            "ja": "お茶、エキス、パウダー、カプセルとして利用可能。",
            "fr": "Disponible en thé, extrait, poudre ou gélules. Peut être tranché et infusé."
        },
        "precautions": {
            "en": "May interact with blood pressure and blood thinning medications.",
            "zh": "可能与降压药和抗凝血药物相互作用。",
            "ja": "血圧薬や血液凝固薬と相互作用する可能性があります。",
            "fr": "Peut interagir avec les médicaments contre l'hypertension et les anticoagulants."
        },
        "modern_research": "Research indicates reishi may support immune function, reduce stress, and improve sleep quality. (PubMed: 29782718)",
        "image_url": "",
        "ben_cao_ref": "本草纲目·菜部·灵芝"
    },
    {
        "id": "turmeric",
        "names": {
            "en": "Turmeric",
            "zh": "姜黄",
            "zh_pinyin": "Jiāng Huáng",
            "ja": "ウコン",
            "ja_reading": "ウコン",
            "fr": "Curcuma"
        },
        "scientific_name": "Curcuma longa",
        "family": "Zingiberaceae",
        "origin": ["Southern China", "India", "Southeast Asia"],
        "parts_used": ["Root/Rhizome"],
        "nature": "Warm",
        "flavor": "Bitter, Spicy",
        "meridians": ["Spleen", "Liver"],
        "categories": ["digestion", "anti_inflammatory", "pain"],
        "benefits": {
            "en": [
                "Powerful anti-inflammatory",
                "Supports joint health",
                "Aids digestion",
                "Antioxidant properties",
                "Supports liver function"
            ],
            "zh": [
                "破血行气",
                "通经止痛",
                "消肿散结",
                "祛风除湿",
                "活血化瘀"
            ]
        },
        "uses": {
            "en": "Used in cooking (curry), teas, and supplements. Combine with black pepper for better absorption.",
            "zh": "用于烹饪（咖喱）、泡茶、补充剂。与黑胡椒同用可增强吸收。",
            "ja": "料理（カレー）、お茶、サプリメントに使用。ペッパーと一緒に吸収を向上。",
            "fr": "Utilisé en cuisine (curcuma), thés et compléments. Combiner avec du poivre noir pour une meilleure absorption."
        },
        "precautions": {
            "en": "May interact with blood thinners. Consult doctor before high-dose supplementation.",
            "zh": "可能与抗凝血药物相互作用。高剂量补充前请咨询医生。",
            "ja": "血液凝固薬と相互作用する可能性があります。",
            "fr": "Peut interagir avec les anticoagulants. Consultez un médecin avant la supplémentation à haute dose."
        },
        "modern_research": "Extensive research shows curcumin (active compound) has potent anti-inflammatory and antioxidant effects. (PubMed: 29065496)",
        "image_url": "",
        "ben_cao_ref": "本草纲目·草部·姜黄"
    }
]

# ============================================
# Acupressure Points Database (Multilingual)
# ============================================
POINTS_DATABASE = [
    {
        "id": "li4",
        "names": {
            "en": "Hegu (LI4)",
            "zh": "合谷",
            "zh_pinyin": "Hé Gǔ",
            "ja": "合谷",
            "ja_reading": "ゴウコク",
            "fr": "Hegu (IG4)"
        },
        "meridian": "Large Intestine",
        "location": {
            "en": "On the back of the hand, between the thumb and index finger",
            "zh": "手背，第一、二掌骨之间",
            "ja": "手の甲、親指と人差し指の間",
            "fr": "Sur le dos de la main, entre le pouce et l'index"
        },
        "benefits": {
            "en": ["Headache relief", "Toothache", "Neck pain", "General pain relief"],
            "zh": ["头痛", "牙痛", "颈痛", "各种疼痛"],
            "ja": ["頭痛", "歯痛", "首の痛み", "痛みの緩和"],
            "fr": ["Soulage les maux de tête", "Mal de dents", "Douleur du cou", "Soulage la douleur"]
        },
        "instructions": {
            "en": "Press firmly with opposite thumb for 2-3 minutes. Strong sensation expected.",
            "zh": "用对侧拇指用力按压2-3分钟。应有较强酸胀感。",
            "ja": "反対側の親指で強く2-3分押し続けます。",
            "fr": "Appuyez fermément avec le pouce opposé pendant 2-3 minutes."
        },
        "precaution": "Avoid during pregnancy"
    },
    {
        "id": "pc6",
        "names": {
            "en": "Neiguan (PC6)",
            "zh": "内关",
            "zh_pinyin": "Nèi Guān",
            "ja": "内関",
            "ja_reading": "ナイカン",
            "fr": "Neiguan (MC6)"
        },
        "meridian": "Pericardium",
        "location": {
            "en": "Inner forearm, 3 finger-widths from wrist crease, between two tendons",
            "zh": "前臂内侧，腕横纹上3寸，两筋之间",
            "ja": "前腕内側、手首のシワから3指幅",
            "fr": "Avant-bras intérieur, 3 largeurs de doigts du pli du poignet"
        },
        "benefits": {
            "en": ["Nausea relief", "Motion sickness", "Anxiety relief", "Carpal tunnel"],
            "zh": ["止呕", "晕车", "焦虑", "手腕综合症"],
            "ja": ["吐き気", "乗り物酔い", "不安", "手根管症候群"],
            "fr": ["Soulage les nausées", "Mal des transports", "Anxiété", "Syndrome du canal carpien"]
        },
        "instructions": {
            "en": "Press firmly and massage in small circles for 2-3 minutes on each wrist.",
            "zh": "用力按压并以小圆圈按摩2-3分钟，每侧手腕。",
            "ja": "強く押しながら小円を描くように2-3分按摩します。",
            "fr": "Appuyez fermément et massez en petits cercles pendant 2-3 minutes."
        },
        "precaution": "None significant"
    },
    {
        "id": "st36",
        "names": {
            "en": "Zusanli (ST36)",
            "zh": "足三里",
            "zh_pinyin": "Zú Sān Lǐ",
            "ja": "足三里",
            "ja_reading": "ソクサンリ",
            "fr": "Zusanli (E36)"
        },
        "meridian": "Stomach",
        "location": {
            "en": "Outer leg, 4 finger-widths below kneecap, one finger-width outward from shinbone",
            "zh": "小腿外侧，犊鼻下3寸，胫骨前嵴外一横指",
            "ja": "脛の外側、膝蓋骨から4指幅下",
            "fr": "Jambe extérieure, 4 largeurs de doigts sous la rotule"
        },
        "benefits": {
            "en": ["Energy boost", "Digestive health", "Immune support", "Longevity"],
            "zh": ["补中益气", "健脾和胃", "扶正培元", "延年益寿"],
            "ja": ["活力増強", "消化器健康", "免疫サポート", "長寿"],
            "fr": ["Énergie", "Santé digestive", "Immunité", "Longévité"]
        },
        "instructions": {
            "en": "Press firmly and massage for 2-3 minutes on each leg. Stimulate daily for vitality.",
            "zh": "用力按压并按摩2-3分钟，每条腿。每日刺激可增强体质。",
            "ja": "強く押し2-3分按摩します。毎日刺激すると活力が増します。",
            "fr": "Appuyez fermément et massez pendant 2-3 minutes sur chaque jambe."
        },
        "precaution": "None significant"
    },
    {
        "id": "kd1",
        "names": {
            "en": "Yongquan (KD1)",
            "zh": "涌泉",
            "zh_pinyin": "Yǒng Quán",
            "ja": "湧泉",
            "ja_reading": "ユウセン",
            "fr": "Yongquan (R1)"
        },
        "meridian": "Kidney",
        "location": {
            "en": "Sole of foot, in depression when toes are curled, at 1/3 point from toes",
            "zh": "足底，蜷足时足前部凹陷处",
            "ja": "足の裏、つま先を曲げた時の凹み",
            "fr": "Plante du pied, dans la dépression quand les orteils sont recroquevillis"
        },
        "benefits": {
            "en": ["Better sleep", "Relieves fatigue", "Calms anxiety", "Grounds energy"],
            "zh": ["安神助眠", "消除疲劳", "缓解焦虑", "引火归元"],
            "ja": ["安眠", "疲労回復", "不安軽減", "気の安定"],
            "fr": ["Meilleur sommeil", "Fatigue", "Anxiété", "Énergie stable"]
        },
        "instructions": {
            "en": "Massage firmly with thumb for 3-5 minutes before bed. Walk barefoot on natural surfaces.",
            "zh": "睡前用拇指用力按摩3-5分钟。赤脚走在自然地面上也可刺激。",
            "ja": "寝る前に親指で強く3-5分按摩します。",
            "fr": "Massez fermément avec le pouce pendant 3-5 minutes avant le coucher."
        },
        "precaution": "Avoid during pregnancy"
    }
]

def save_data(data, filename):
    """Save data to JSON file"""
    filepath = DATA_DIR / filename
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"[OK] Saved: {filepath}")

def load_data(filename):
    """Load data from JSON file"""
    filepath = DATA_DIR / filename
    if filepath.exists():
        with open(filepath, 'r', encoding='utf-8') as f:
            return json.load(f)
    return None

# ============================================
# Scraper Functions
# ============================================
def scrape_with_fetcher(source):
    """Basic scrape using Fetcher (no anti-detection needed for most sites)"""
    try:
        from scrapling.fetchers import Fetcher
        
        print(f"  [SEARCH] Scraping: {source['name']}...")
        page = Fetcher.get(source['url'])
        
        result = {
            "source": source['name'],
            "url": source['url'],
            "title": "",
            "content": "",
            "headings": [],
            "success": False
        }
        
        # Extract title
        title_el = page.css('h1')
        if title_el:
            result['title'] = title_el[0].text.strip() if hasattr(title_el[0], 'text') else str(title_el[0])
        
        # Extract headings
        for sel in source.get('selectors', {}).get('herbs', 'h2, h3').split(','):
            headings = page.css(sel.strip())
            for h in headings[:20]:  # Limit
                text = h.text.strip() if hasattr(h, 'text') else str(h)
                if text and len(text) > 3:
                    result['headings'].append(text)
        
        # Extract content
        content_sel = source.get('selectors', {}).get('content', 'article, main')
        for sel in content_sel.split(','):
            content_el = page.css(sel.strip())
            if content_el:
                result['content'] = content_el[0].text[:5000] if hasattr(content_el[0], 'text') else str(content_el[0])[:5000]
                break
        
        result['success'] = bool(result['content'] or result['headings'])
        return result
        
    except Exception as e:
        print(f"  [ERROR] Error scraping {source['name']}: {e}")
        return {"source": source['name'], "url": source['url'], "error": str(e), "success": False}

def scrape_with_stealthy(source):
    """Scrape with anti-detection (for sites with Cloudflare)"""
    try:
        from scrapling.fetchers import StealthyFetcher
        
        print(f"  [STEALTH] Stealth scraping: {source['name']}...")
        page = StealthyFetcher.fetch(source['url'], headless=True, network_idle=True)
        
        result = {
            "source": source['name'],
            "url": source['url'],
            "title": "",
            "content": "",
            "headings": [],
            "success": False
        }
        
        # Extract
        title_el = page.css('h1')
        if title_el:
            result['title'] = title_el[0].text.strip() if hasattr(title_el[0], 'text') else str(title_el[0])
        
        for h in page.css('h2, h3')[:20]:
            text = h.text.strip() if hasattr(h, 'text') else str(h)
            if text and len(text) > 3:
                result['headings'].append(text)
        
        content_el = page.css('article, main, .content')
        if content_el:
            result['content'] = content_el[0].text[:5000] if hasattr(content_el[0], 'text') else str(content_el[0])[:5000]
        
        result['success'] = bool(result['content'] or result['headings'])
        return result
        
    except Exception as e:
        print(f"  [ERROR] Error stealth scraping {source['name']}: {e}")
        return {"source": source['name'], "url": source['url'], "error": str(e), "success": False}

# ============================================
# Main
# ============================================
def main():
    print("=" * 60)
    print("[HERB] TCM Herb Scraper — Multilingual Content Collector")
    print("=" * 60)
    
    # 1. Save pre-defined databases
    print("\n[BOOK] Saving herb database...")
    save_data(HERBS_DATABASE, "herbs_multilingual.json")
    
    print("\n[PIN] Saving acupressure points database...")
    save_data(POINTS_DATABASE, "points_multilingual.json")
    
    # 2. Scrape English sources
    print("\n[GLOBE] Scraping English sources...")
    en_results = []
    for source in SOURCES["english"]:
        result = scrape_with_fetcher(source)
        en_results.append(result)
        time.sleep(1)  # Be polite
    
    save_data(en_results, "scraped_english.json")
    
    # 3. Scrape Chinese sources
    print("\n[CN] Scraping Chinese sources...")
    zh_results = []
    for source in SOURCES["chinese"]:
        result = scrape_with_fetcher(source)
        zh_results.append(result)
        time.sleep(1)
    
    save_data(zh_results, "scraped_chinese.json")
    
    # 4. Generate content templates
    print("\n[DOC] Generating content templates...")
    generate_content_templates()
    
    # 5. Summary
    print("\n" + "=" * 60)
    print("[CHART] SCRAPING SUMMARY")
    print("=" * 60)
    print(f"  Herbs in database: {len(HERBS_DATABASE)}")
    print(f"  Points in database: {len(POINTS_DATABASE)}")
    print(f"  English sources scraped: {len(en_results)}")
    print(f"  Chinese sources scraped: {len(zh_results)}")
    print(f"  Data saved to: {DATA_DIR}")
    print("=" * 60)

def generate_content_templates():
    """Generate HTML content templates for each herb"""
    content_dir = Path(__file__).parent.parent / "content" / "herbs"
    content_dir.mkdir(parents=True, exist_ok=True)
    
    for herb in HERBS_DATABASE:
        html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{herb['names']['en']} — {herb['names']['zh']} | Herbal Atlas</title>
</head>
<body>
    <article class="herb-detail">
        <header>
            <h1>{herb['names']['en']}</h1>
            <p class="chinese-name">{herb['names']['zh']} ({herb['names']['zh_pinyin']})</p>
            <p class="scientific">{herb['scientific_name']}</p>
        </header>
        
        <section class="overview">
            <h2>Overview</h2>
            <p>{herb['uses']['en']}</p>
        </section>
        
        <section class="properties">
            <h2>Properties</h2>
            <ul>
                <li><strong>Nature:</strong> {herb['nature']}</li>
                <li><strong>Flavor:</strong> {herb['flavor']}</li>
                <li><strong>Meridians:</strong> {', '.join(herb['meridians'])}</li>
                <li><strong>Parts Used:</strong> {', '.join(herb['parts_used'])}</li>
                <li><strong>Origin:</strong> {', '.join(herb['origin'])}</li>
            </ul>
        </section>
        
        <section class="benefits">
            <h2>Health Benefits</h2>
            <ul>
                {chr(10).join(f'                <li>{b}</li>' for b in herb['benefits']['en'])}
            </ul>
        </section>
        
        <section class="traditional-use">
            <h2>Traditional Use (中医用法)</h2>
            <p>{herb['uses']['en']}</p>
            <div class="chinese-text">
                <h3>中文</h3>
                <p>{herb['uses']['zh']}</p>
            </div>
        </section>
        
        <section class="precautions">
            <h2>Precautions</h2>
            <p>{herb['precautions']['en']}</p>
        </section>
        
        <section class="research">
            <h2>Modern Research</h2>
            <p>{herb['modern_research']}</p>
        </section>
        
        <footer>
            <p class="ben-cao-ref">📖 Reference: {herb['ben_cao_ref']}</p>
        </footer>
    </article>
</body>
</html>"""
        
        filepath = content_dir / f"{herb['id']}.html"
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(html)
    
    print(f"  [OK] Generated {len(HERBS_DATABASE)} herb content templates")

if __name__ == "__main__":
    main()
