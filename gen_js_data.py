#!/usr/bin/env python3
"""Generate herbsData, herbPhotos, herbHabitat, herbFullDesc from JSON for main.js"""
import json

with open('src/data/herbs_multilingual.json') as f:
    herbs = json.load(f)

# Category mapping from JSON categories to site categories
cat_map = {
    'energy': 'energy', 'immunity': 'immunity', 'eye_health': 'eye_health',
    'sleep': 'sleep', 'digestion': 'digestion', 'warming': 'warming',
    'cognitive': 'cognitive', 'respiratory': 'respiratory', 'liver': 'liver',
    'skin': 'skin', 'adaptogen': 'adaptogen', 'mood': 'mood',
    'prostate': 'prostate', 'pain_relief': 'pain_relief', 'calming': 'calming',
    'blood': 'blood', 'antiviral': 'antiviral', 'fever': 'fever',
    'diuretic': 'diuretic', 'harmonizer': 'harmonizer', 'bone': 'bone',
    'yin': 'yin', 'reproductive': 'reproductive', 'stress': 'stress',
    'detox': 'detox', 'nutrition': 'nutrition',
    'animal': 'animal', 'animal-derived': 'animal', 'special': 'special',
    'fungi': 'mushroom',
}

# Icon mapping
icon_map = {
    'energy': '⚡', 'immunity': '🛡️', 'eye_health': '👁️', 'sleep': '😴',
    'digestion': '🍽️', 'warming': '🔥', 'cognitive': '🧠', 'respiratory': '🫁',
    'liver': '🫀', 'skin': '✨', 'adaptogen': '🌿', 'mood': '😊',
    'prostate': '🩺', 'pain_relief': '💊', 'calming': '🧘', 'blood': '🩸',
    'antiviral': '🦠', 'fever': '🌡️', 'diuretic': '💧', 'harmonizer': '⚖️',
    'bone': '🦴', 'yin': '🌙', 'reproductive': '🌱', 'stress': '💆',
    'detox': '🧪', 'nutrition': '🥗', 'animal': '🐾', 'animal-derived': '🐾',
    'special': '🔬', 'mushroom': '🍄',
}

bg_map = {
    'energy': '#fff8e1', 'immunity': '#e8f5e9', 'eye_health': '#e3f2fd',
    'sleep': '#f3e5f5', 'digestion': '#fce4ec', 'warming': '#fff3e0',
    'cognitive': '#e8eaf6', 'respiratory': '#e0f7fa', 'liver': '#f1f8e9',
    'skin': '#fffde7', 'adaptogen': '#e8f5e9', 'mood': '#fff9c4',
    'prostate': '#e8eaf6', 'pain_relief': '#fce4ec', 'calming': '#e0f2f1',
    'blood': '#ffebee', 'antiviral': '#f3e5f5', 'fever': '#fff3e0',
    'diuretic': '#e0f7fa', 'harmonizer': '#f1f8e9', 'bone': '#efebe9',
    'yin': '#ede7f6', 'reproductive': '#e8f5e9', 'stress': '#e0f2f1',
    'detox': '#fffde7', 'nutrition': '#f1f8e9', 'animal': '#efebe9',
    'animal-derived': '#efebe9', 'special': '#fce4ec', 'mushroom': '#f1f8e9',
}

# herbPhotos
print("const herbPhotos = {")
for h in herbs:
    hid = h['id']
    url = h.get('image_url', '')
    if url:
        print(f'    {hid}: "{url}",')
print("};")
print()

# herbHabitat
print("const herbHabitat = {")
for h in herbs:
    hid = h['id']
    origin = h.get('origin', [])
    if isinstance(origin, list):
        origin_str = ', '.join(origin)
    else:
        origin_str = str(origin)
    parts = h.get('parts_used', [])
    if isinstance(parts, list):
        parts_str = ', '.join(parts)
    else:
        parts_str = str(parts)
    nature = h.get('nature', '')
    flavor = h.get('flavor', '')
    meridians = h.get('meridians', [])
    if isinstance(meridians, list):
        mer_str = ', '.join(meridians)
    else:
        mer_str = str(meridians)
    habitat = f"Origin: {origin_str}. Parts used: {parts_str}. Nature: {nature}. Flavor: {flavor}. Meridians: {mer_str}."
    print(f'    {hid}: "{habitat}",')
print("};")
print()

# herbFullDesc
print("const herbFullDesc = {")
for h in herbs:
    hid = h['id']
    uses = h.get('uses', {})
    if isinstance(uses, dict):
        desc = uses.get('en', '')
    else:
        desc = str(uses)
    desc = desc.replace('"', '\\"').replace('\n', ' ')
    benefits = h.get('benefits', {})
    if isinstance(benefits, dict):
        ben = benefits.get('en', '')
    elif isinstance(benefits, list):
        ben = '. '.join(str(b) for b in benefits)
    else:
        ben = str(benefits)
    ben = str(ben).replace('"', '\\"').replace('\n', ' ')
    sci = h.get('scientific_name', '')
    full = f"{sci}. {ben}. {desc}"
    print(f'    {hid}: "{full}",')
print("};")
print()

# herbsData (new format)
print("// Generated herbsData from JSON")
print("const herbsDataFromJSON = [")
for h in herbs:
    hid = h['id']
    name_en = h.get('names', {}).get('en', hid)
    name_zh = h.get('names', {}).get('zh', '')
    pinyin = h.get('names', {}).get('zh_pinyin', '')
    chinese_display = f"{name_zh} ({pinyin})" if pinyin else name_zh
    
    cats = h.get('categories', ['unknown'])
    if isinstance(cats, list):
        cat = cats[0] if cats else 'unknown'
    else:
        cat = str(cats)
    site_cat = cat_map.get(cat, cat)
    
    icon = icon_map.get(site_cat, '🌿')
    bg = bg_map.get(site_cat, '#e8f5e9')
    
    uses = h.get('uses', {})
    if isinstance(uses, dict):
        desc = uses.get('en', '')
    else:
        desc = str(uses)
    desc = desc.replace('\\', '\\\\').replace('"', '\\"').replace('\n', ' ')[:200]
    
    benefits = h.get('benefits', {})
    if isinstance(benefits, dict):
        ben_text = benefits.get('en', '')
    elif isinstance(benefits, list):
        ben_text = '. '.join(str(b) for b in benefits)
    else:
        ben_text = str(benefits)
    # Split into array of benefit items
    ben_items = [b.strip() for b in str(ben_text).replace('\\', '\\\\').replace('"', '\\"').split('.') if b.strip()][:5]
    ben_array = ', '.join([f'"{b}"' for b in ben_items])
    
    sci = h.get('scientific_name', '')
    origin = h.get('origin', [])
    if isinstance(origin, list):
        origin_str = ', '.join(origin)
    else:
        origin_str = str(origin)
    
    print(f'    {{')
    print(f'        id: "{hid}",')
    print(f'        name: "{name_en}",')
    print(f'        chinese: "{chinese_display}",')
    print(f'        icon: "{icon}",')
    print(f'        iconBg: "{bg}",')
    print(f'        description: "{desc}",')
    print(f'        benefits: [{ben_array}],')
    print(f'        category: "{site_cat}",')
    print(f'        scientificName: "{sci}",')
    print(f'        origin: "{origin_str}",')
    print(f'        research: "https://pubmed.ncbi.nlm.nih.gov/?term={sci.replace(" ", "+")}"')
    print(f'    }},')
print("];")
