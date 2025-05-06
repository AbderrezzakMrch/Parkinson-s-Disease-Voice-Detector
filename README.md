# 🎤 Parkinson's Disease Voice Detector 🧠

![Project Banner]([https://via.placeholder.com/1200x400?text=Parkinson's+Disease+Voice+Detector](https://www.lifestation.com/wp-content/uploads/dynamic/2024/03/Medical-Alert-System-for-Parkinsons-Disease-Patients-1538x0-c-default.png)) 

A web application that detects Parkinson's Disease through voice analysis using machine learning. Built for [Hackathon Name].

## 🌟 Features

- **Voice Recording**: Record your voice directly in the browser
- **File Upload**: Upload existing voice recordings for analysis
- **ML Analysis**: FastAPI backend with SVM model processes voice samples
- **Results Dashboard**: Clear visualization of prediction results
- **Responsive Design**: Works on desktop and mobile devices

## 🛠️ Technologies Used

**Frontend**:
- ⚡ React + Vite (Frontend Framework)
- 🎨 Tailwind CSS (Styling)
- 🎤 Web Audio API (Voice Recording)

**Backend**:
- 🐍 FastAPI (Python Backend)
- 🤖 Scikit-learn (SVM Model)
- 🐼 Pandas/Numpy (Data Processing)

**ML Model**:
- Trained on [Parkinson's Voice Dataset Name]
- SVM Classifier for healthy vs Parkinson's prediction
- Feature Extraction: [List key audio features used]

## 🌐 Browser Support

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome  | ✅ Full | Recommended browser |
| Firefox | ✅ Full |  |
| Edge    | ✅ Full |  |
| Safari  | ⚠️ Partial | Voice recording may have limitations |
| Mobile Chrome | ✅ Full |  |
| Mobile Safari | ⚠️ Partial |  |

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- Python (v3.8+)
- npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AbderrezzakMrch/Parkinson-s-Disease-Voice-Detector.git
   cd parkinsons-voice-detector

2. **Set up backend** 
   ```bash
   cd ml
   pip install -r requirements.txt
   uvicorn main:app --reload
   
3. **Set up frontend** 
   ```bash
    npm install
    npm run dev


📜 License
Distributed under the MIT License. See LICENSE for more information.

✉️ Contact
Maireche Abderrezzak 

Project Link: https://github.com/AbderrezzakMrch/Parkinson-s-Disease-Voice-Detector

## Key Styling Elements Used:
- Emoji headers for visual scanning
- Tables for browser support and model metrics
- Code blocks for installation commands
- Clear section headers with consistent formatting
- Placeholder images (replace with actual screenshots)
- Badges (you can add more from shields.io)
