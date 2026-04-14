# 🚀 AI Knowledge Copilot (RAG SaaS)

A **multi-user AI Knowledge Copilot** that allows users to upload documents, perform semantic search, and interact with their data using LLM-powered chat.

Built with a scalable architecture using **LangChain, Qdrant, Supabase, and OpenRouter**.

---

## ✨ Features

* 📄 **Document Ingestion**

  * Upload PDFs, text files, and structured data
  * Automatic chunking and embedding

* 🔍 **Semantic Search**

  * Vector-based retrieval using Qdrant
  * Context-aware search results

* 💬 **AI Chat Interface**

  * Ask questions about your documents
  * Context-aware responses using RAG pipeline

* 👥 **Multi-User Support**

  * User authentication via Supabase
  * Data isolation per user

* ⚡ **Scalable Backend**

  * Modular architecture for production readiness
  * Easily extendable pipelines

---

## 🏗️ Tech Stack

### Backend

* Node.js / Python (depending on your setup)
* LangChain
* OpenRouter (LLM Gateway)

### Database & Storage

* Supabase (Auth + DB + Storage)
* Qdrant (Vector Database)

### Frontend (if applicable)

* React.js / Next.js
* Tailwind CSS

---

## 📂 Project Structure

```
ai-knowledge-copilot/
│
├── backend/
│   ├── src/
│   │   ├── ingestion/        # Document processing pipeline
│   │   ├── retrieval/        # Vector search logic
│   │   ├── chat/             # RAG + LLM interaction
│   │   ├── db/               # Supabase + Qdrant clients
│   │   └── utils/
│   └── server.js
│
├── frontend/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── scripts/                  # Automation / ingestion scripts
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-knowledge-copilot.git
cd ai-knowledge-copilot
```

---

### 2. Install Dependencies

```bash
npm install
```

or (for Python backend)

```bash
pip install -r requirements.txt
```

---

### 3. Environment Setup

Create a `.env` file:

```env
# Supabase
SUPABASE_URL=
SUPABASE_ANON_KEY=

# Qdrant
QDRANT_URL=
QDRANT_API_KEY=

# LLM (OpenRouter)
OPENROUTER_API_KEY=

# App
PORT=5000
```

---

### 4. Run the Application

```bash
npm run dev
```

or

```bash
npm start
```

---

## 🔄 How It Works (RAG Pipeline)

1. **Upload Document**
2. **Chunking & Embedding**
3. **Store in Qdrant**
4. **User Query**
5. **Semantic Retrieval**
6. **LLM Response with Context**

---

## 🧠 Example Use Cases

* Personal knowledge assistant
* Resume / document analyzer
* Research assistant
* Internal company knowledge base
* AI-powered PDF chatbot

---

## 📌 Roadmap

* [ ] File type expansion (DOCX, CSV)
* [ ] Streaming responses
* [ ] Chat history persistence
* [ ] Role-based access control
* [ ] API usage dashboard
* [ ] Fine-tuned embeddings

---

## 🤝 Contributing

Contributions are welcome!

```bash
fork → clone → create branch → commit → PR
```

---

## 🛡️ License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Sakti Sriraj Mishra**

* GitHub: https://github.com/saktisriraj
* LinkedIn: https://linkedin.com/in/sakti-sriraj-mishra

---

## ⭐ Support

If you find this project useful:

* ⭐ Star the repo
* 🍴 Fork it
* 🧠 Share with others
