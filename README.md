# HimPath - Centre of Excellence on Sustainable Vernacular Architecture (CEVA)

A full-stack **Next.js 14** web platform with **Prisma ORM** and **PostgreSQL** for the **Centre of Excellence on Sustainable Vernacular Architecture (CEVA)** at **IIT Ropar**, funded by the **National Mission on Himalayan Studies (NMHS)**, Ministry of Environment, Forest & Climate Change (MoEF&CC), Government of India.

---

## 🏔️ Features

- **Indigenous Architectural Typologies**: Comprehensive technical documentation of *Kath-Kuni*, *Dhajji-Dewari*, *Thathara*, and *Rammed Earth* systems.
- **Seismic & Thermal Performance**: Research data on dry-joint energy dissipation and passive solar performance in Himalayan regions.
- **Interactive Visual Gallery**: Categorized high-resolution field photos, isometric joinery CAD blueprints, and shake-table testing models.
- **Open-Access Publications & Downloads**: Design manuals, seismic retrofitting guidelines, and annual project reports.
- **Contact & Inquiry System**: Dynamic contact form connected to PostgreSQL via Prisma ORM.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router, TypeScript)
- **Styling**: Tailwind CSS, Lucide React Icons
- **Database & ORM**: PostgreSQL with Prisma ORM

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Ayush-1574/HimPath.git
cd HimPath
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
Create a `.env` file in the root directory:
```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@localhost:5432/himpath_db?schema=public"
```

### 4. Sync Prisma schema & seed data
```bash
npx prisma db push
npm run seed
```

### 5. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.
