# OmniFind — Universal Semantic Search Across Folders, Emails & Messages

> **Universal AI Search: Find Anything Across Documents, Emails & Folders With One Prompt**  
> Single conversational search prompt that searches across local folders, cloud files, email threads, and exports without file-by-file opening.

---

## 1. Executive Summary & Problem Thesis
- **Target Audience:** 1,200,000 legal researchers, accountants, auditors, and ops managers ($417M TAM).
- **Core Problem:** Knowledge workers have files and communications scattered across Google Drive, local downloads, Slack exports, and email threads. Apple Spotlight and Windows Search rely on brittle filename keywords and fail when searching for semantic concepts (*"where is that agreement where we discussed a 10% penalty?"*). Finding one critical clause often requires 20 minutes of digging through nested directories.
- **Value Proposition:** One clean query locates the exact paragraph, file path, and context across all your documents in under 200ms, entirely offline or private.

---

## 2. Key In-Scope Features (Black Car MVP Scope)
1. **Multi-format Batch Parser:** Drag-and-drop local directory, ZIP archive, or file dropzone (`.pdf`, `.docx`, `.eml`, `.csv`, `.txt`).
2. **In-Browser / Local Vector Indexing:** Client-side vector embeddings simulation (Transformers.js all-MiniLM-L6-v2) with sub-second retrieval speeds and 100% offline security.
3. **Semantic Query Interface:** Conversational questions like *"Invoice for server upgrade from last summer"* or *"Where is that agreement where we discussed a 10% penalty?"*.
4. **Direct Snippet & Source Highlighter:** Renders exact paragraph context with file path, page number, and 1-click open link.

---

## 3. SEO & Go-To-Market Specification
- **H1 Header:** `Universal AI Search: Find Anything Across Documents, Emails & Folders With One Prompt`
- **Target URL Slug:** `/tools/universal-semantic-cross-app-search`
- **Primary Long-Tail Keywords:**
  - `universal cross app file search ai`
  - `semantic local document search`
  - `find documents with natural language prompt`
  - `ai desktop file retriever`
- **Customer Advisory Board (CAB) Outreach Script:**
  > *"We are assembling a 10-member Customer Advisory Board (CAB) for OmniFind to solve this exact bottleneck. We are offering a 70% lifetime platform discount and dedicated onboarding for our first cohort."*

---

## 4. Technical Architecture
- **Framework:** React 19 / Vite
- **Styling:** TailwindCSS v3.4 (Arctic Cyan / Deep Teal Theme, Spotlight Glow)
- **Vector Search Engine:** On-device all-MiniLM-L6-v2 vector cosine similarity
- **Deployment:** GitHub Pages via GitHub Actions CI/CD (`.github/workflows/deploy.yml`)
