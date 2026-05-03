#!/usr/bin/env python3
"""
Herbal Atlas — Static Site Builder
Generates the complete static site from data files.
"""

import json
import os
import shutil
from pathlib import Path

# Paths
ROOT = Path(__file__).parent
SRC_DIR = ROOT / "src"
CONTENT_DIR = ROOT / "content"
PUBLIC_DIR = ROOT / "public"
DATA_DIR = SRC_DIR / "data"

def load_data(filename):
    filepath = DATA_DIR / filename
    if filepath.exists():
        with open(filepath, 'r', encoding='utf-8') as f:
            return json.load(f)
    return []

def build():
    print("🔨 Building Herbal Atlas...")
    
    # Clean public directory
    if PUBLIC_DIR.exists():
        shutil.rmtree(PUBLIC_DIR)
    PUBLIC_DIR.mkdir(parents=True)
    
    # Copy static files
    print("  📁 Copying static files...")
    shutil.copy(ROOT / "index.html", PUBLIC_DIR / "index.html")
    shutil.copytree(SRC_DIR / "css", PUBLIC_DIR / "src" / "css")
    shutil.copytree(SRC_DIR / "js", PUBLIC_DIR / "src" / "js")
    
    # Copy data files
    if DATA_DIR.exists():
        shutil.copytree(DATA_DIR, PUBLIC_DIR / "src" / "data")
    
    # Copy content pages
    if CONTENT_DIR.exists():
        shutil.copytree(CONTENT_DIR, PUBLIC_DIR / "content")
    
    # Generate sitemap
    print("  🗺️ Generating sitemap...")
    generate_sitemap()
    
    # Generate robots.txt
    print("  🤖 Generating robots.txt...")
    generate_robots()
    
    print("✅ Build complete!")
    print(f"📁 Output: {PUBLIC_DIR}")

def generate_sitemap():
    """Generate a simple sitemap.xml"""
    herbs = load_data("herbs_multilingual.json")
    points = load_data("points_multilingual.json")
    
    urls = [
        {"loc": "/", "priority": "1.0"},
        {"loc": "/#herbs", "priority": "0.9"},
        {"loc": "/#acupressure", "priority": "0.9"},
        {"loc": "/#teas", "priority": "0.8"},
        {"loc": "/#basics", "priority": "0.8"},
    ]
    
    for herb in herbs:
        urls.append({"loc": f"/content/herbs/{herb['id']}.html", "priority": "0.7"})
    
    xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    for url in urls:
        xml += f'  <url>\n    <loc>https://jiangquiyue-byte.github.io{url["loc"]}</loc>\n    <priority>{url["priority"]}</priority>\n  </url>\n'
    xml += '</urlset>'
    
    with open(PUBLIC_DIR / "sitemap.xml", 'w') as f:
        f.write(xml)

def generate_robots():
    """Generate robots.txt"""
    content = """User-agent: *
Allow: /

Sitemap: https://jiangquiyue-byte.github.io/sitemap.xml
"""
    with open(PUBLIC_DIR / "robots.txt", 'w') as f:
        f.write(content)

if __name__ == "__main__":
    build()
