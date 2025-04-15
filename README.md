# 📄 Resume Analyzer

A web app that analyzes your resume against a job description and gives a job-fit percentage, along with missing skills or experience. Helps job seekers know where they stand before applying.

---

## 🚀 Features

- Upload your resume (PDF/DOCX)
- Paste the job description
- Get:
  - Job match percentage
  - List of missing skills/experience

---

## 🛠️ Tech Stack

- **Frontend:** React, Next.js, TailwindCSS
- **Backend:** Next.js API routes
- **AI/NLP:** OpenAI API (GPT-3.5 or GPT-4)
- **Parsing:** `pdf-parse` or `mammoth` for resume text extraction

---

## 🧠 How It Works

1. User uploads a resume and provides a job description, skills, YOE required.
2. Resume content is extracted and sent to OpenAI API with the job description.
3. GPT analyzes both and returns:
   - Fit percentage
   - Missing skills or experience
4. Results are displayed on screen.

---

## 👨‍💻 Contributor

- **Your Name**  
  [GitHub](https://github.com/MohsinKing2002) | [LinkedIn](https://www.linkedin.com/in/md-mohsin-raja-628370244/)

---

## 🧪 Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/MohsinKing2002/resume-analyzer.git
cd resume-analyzer
```
