# 🌿 Herbal Atlas

A modern, evidence-based guide to Traditional Chinese Medicine (TCM), featuring Chinese herbal medicine and acupressure points.

## 🌟 Features

- **Herbal Encyclopedia** — Detailed profiles of Chinese herbs with multilingual support
- **Acupressure Guide** — Interactive body map with pressure point locations
- **Herbal Tea Recipes** — Simple home remedies
- **TCM Basics** — Introduction to Yin & Yang, Qi, Five Elements, and Meridians

## 📚 Data Sources

- **Ben Cao Gang Mu (本草纲目)** — The foundational text of Chinese herbal medicine
- **PubMed Research** — Modern scientific validation
- **Multilingual Content** — English, Chinese (中文), Japanese (日本語), French (Français)

## 🛠️ Tech Stack

- **Frontend** — Pure HTML, CSS, JavaScript (no frameworks)
- **Design** — Inspired by anthropic.com/research (clean, minimal, scientific)
- **Scraper** — Python + Scrapling (adaptive web scraping)
- **Hosting** — GitHub Pages (free)

## 🚀 Getting Started

### Development

```bash
# Install dependencies
pip install scrapling

# Run the scraper
python scrapers/herb_scraper.py

# Build the site
python build.py

# Serve locally
cd public
python -m http.server 8000
```

### Deploy to GitHub Pages

1. Push to GitHub repository
2. Enable GitHub Pages in Settings → Pages
3. Select "Deploy from branch" → `main` → `/public`

## 📁 Project Structure

```
tcm-wellness/
├── index.html              # Main page
├── build.py                # Static site builder
├── README.md
├── src/
│   ├── css/style.css       # Styles (Anthropic-inspired)
│   ├── js/main.js          # Interactivity
│   └── data/               # Herb & point databases
├── scrapers/
│   └── herb_scraper.py     # Multilingual scraper
└── content/
    ├── herbs/              # Individual herb pages
    ├── acupressure/        # Acupressure point pages
    ├── teas/               # Tea recipe pages
    └── basics/             # TCM basics pages
```

## 🌍 Multilingual Support

All content is available in:
- 🇺🇸 English
- 🇨🇳 Chinese (中文)
- 🇯🇵 Japanese (日本語)
- 🇫🇷 French (Français)

## 📝 Content

Herbs are sourced from:
- The Ben Cao Gang Mu (本草纲目)
- Western herbs commonly used in TCM practice
- Modern scientific research (PubMed)

Each herb profile includes:
- Traditional Chinese name and Pinyin
- Scientific name and family
- Nature, flavor, and meridian affinities
- Health benefits (multilingual)
- Usage instructions
- Precautions and contraindications
- Modern research references

## 📜 License

Educational purposes only. Not medical advice. Always consult a healthcare professional before using herbal remedies.

---

Built with ❤️ by Herbal Atlas
# Rebuild trigger Mon May  4 00:11:56 CST 2026
