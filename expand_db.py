#!/usr/bin/env python3
"""Expand TCM databases using deepseek-v4-flash (fast model)."""
import json, urllib.request, ssl, time, re
from pathlib import Path

DATA_DIR = Path("/root/.openclaw/workspace/tcm-wellness/src/data")
API_URL = "https://integrate.api.nvidia.com/v1/chat/completions"
API_KEY = "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"
MODEL = "deepseek-ai/deepseek-v4-flash"
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def call_nvidia(prompt, max_tokens=4000):
    data = json.dumps({"model":MODEL,"messages":[{"role":"user","content":prompt}],"max_tokens":max_tokens,"temperature":0.3}).encode()
    req = urllib.request.Request(API_URL, data=data, headers={"Content-Type":"application/json","Authorization":f"Bearer {API_KEY}"})
    resp = urllib.request.urlopen(req, timeout=90, context=ctx)
    return json.loads(resp.read())["choices"][0]["message"]["content"]

def extract_json(text):
    start = text.find('[')
    end = text.rfind(']') + 1
    if start >= 0 and end > start:
        cleaned = text[start:end]
        cleaned = re.sub(r',\s*]', ']', cleaned)
        cleaned = re.sub(r',\s*}', '}', cleaned)
        return json.loads(cleaned)
    return None

HERB_TEMPLATE = """Return a JSON array of exactly these {count} herbs. Each herb object must have these keys: id, names (object: en, zh, zh_pinyin, ja, ja_reading, fr), scientific_name, family, origin (array), parts_used (array), nature, flavor, meridians (array), categories (array), benefits (object: en array of 3, zh array of 3), uses (object: en string, zh string), precautions (object: en string, zh string), modern_research (string), ben_cao_ref (string).

Herbs: {herbs}

Output ONLY the JSON array."""

POINTS_TEMPLATE = """Return a JSON array of exactly these {count} acupressure points. Each point must have: id, names (object: en, zh, zh_pinyin, ja, ja_reading, fr), meridian, location (object: en, zh, ja, fr), benefits (object: en array, zh array, ja array, fr array), instructions (object: en, zh, ja, fr), precaution (string).

Points: {points}

Output ONLY the JSON array."""

HERB_BATCHES = [
    ["Echinacea","Chamomile","Peppermint","Lavender","Garlic","Ginger","Cinnamon","Rosemary","Thyme","Valerian"],
    ["Milk Thistle","Dandelion","Elderberry","Calendula","Ashwagandha","St. Johns Wort","Ginkgo Biloba","Saw Palmetto","Feverfew","Lemon Balm"],
    ["Ginseng","Astragalus","Goji Berries","Reishi Mushroom","Licorice Root","Dong Quai","Honeysuckle","Chrysanthemum","Isatis Root","Bupleurum"],
    ["Poria","Atractylodes","Safflower","Notoginseng","Dendrobium","Gastrodia","Eucommia","Pinellia","Tangerine Peel","Perilla Leaf"],
]

POINT_BATCHES = [
    ["LI4 (合谷)","PC6 (内关)","ST36 (足三里)","KD1 (涌泉)","GV20 (百会)","EX-HN5 (太阳)","GB20 (风池)","LI11 (曲池)","SP6 (三阴交)","LV3 (太冲)"],
    ["HT7 (神门)","CV12 (中脘)","CV6 (气海)","CV4 (关元)","BL40 (委中)","BL57 (承山)","LI20 (迎香)","EX-HN3 (印堂)","GB34 (阳陵泉)","KD3 (太溪)"],
]

def main():
    herbs_file = DATA_DIR / "herbs_multilingual.json"
    points_file = DATA_DIR / "points_multilingual.json"
    existing_herbs = json.loads(herbs_file.read_text()) if herbs_file.exists() else []
    existing_points = json.loads(points_file.read_text()) if points_file.exists() else []
    existing_herb_ids = {h["id"] for h in existing_herbs}
    existing_pt_ids = {p["id"] for p in existing_points}
    
    print(f"Existing: {len(existing_herbs)} herbs, {len(existing_points)} points\n")

    for i, batch in enumerate(HERB_BATCHES):
        print(f"Batch {i+1}/4: {len(batch)} herbs...")
        try:
            result = call_nvidia(HERB_TEMPLATE.format(count=len(batch), herbs=", ".join(batch)))
            new_herbs = extract_json(result)
            if new_herbs:
                added = 0
                for h in new_herbs:
                    hid = h.get("id","")
                    if hid and hid not in existing_herb_ids:
                        existing_herbs.append(h)
                        existing_herb_ids.add(hid)
                        added += 1
                print(f"  +{added} herbs (total: {len(existing_herbs)})")
            else:
                print(f"  parse failed")
        except Exception as e:
            print(f"  error: {e}")
        time.sleep(1)

    for i, batch in enumerate(POINT_BATCHES):
        print(f"Points batch {i+1}/2: {len(batch)} points...")
        try:
            result = call_nvidia(POINTS_TEMPLATE.format(count=len(batch), points=", ".join(batch)))
            new_points = extract_json(result)
            if new_points:
                added = 0
                for p in new_points:
                    pid = p.get("id","")
                    if pid and pid not in existing_pt_ids:
                        existing_points.append(p)
                        existing_pt_ids.add(pid)
                        added += 1
                print(f"  +{added} points (total: {len(existing_points)})")
            else:
                print(f"  parse failed")
        except Exception as e:
            print(f"  error: {e}")
        time.sleep(1)

    herbs_file.write_text(json.dumps(existing_herbs, ensure_ascii=False, indent=2))
    points_file.write_text(json.dumps(existing_points, ensure_ascii=False, indent=2))
    print(f"\nFinal: {len(existing_herbs)} herbs, {len(existing_points)} points")

if __name__ == "__main__":
    main()
