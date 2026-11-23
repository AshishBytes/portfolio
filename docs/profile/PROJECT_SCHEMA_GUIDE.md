# Portfolio Projects - Complete Schema Guide

## 📊 All Projects Overview

### Complete Project Schema
Every project now has **all fields explicitly defined**:

```typescript
{
  slug: string,              // Required: URL-friendly identifier
  title: string,             // Required: Display name
  subtitle: string,          // Required: One-line description
  description: string,       // Required: Full description
  period: string,            // Required: Time range (e.g., "2026", "Feb 2025")
  category: string,          // Required: Project type
  technologies: string[],    // Required: Tech stack
  achievements: string[],    // Required: Key accomplishments
  
  // Optional fields (can be true/false/undefined)
  metrics?: ProjectMetric[], // Optional: Stats to display
  featured: boolean,         // Required: Show prominently
  experiment: boolean,       // Required: "Currently Working" badge
  pinned: boolean,          // Required: Show first in lists
  
  // Optional URL fields (null if not available)
  liveUrl?: string,         // Optional: Deployed/live project URL
  githubUrl?: string,       // Optional: Source code repository
  image?: string,           // Optional: Custom thumbnail image
}
```

---

## 📁 Current Projects Configuration

### 1. **Reef Bot** (Completed Project)
```typescript
{
  slug: "reef-platform",
  featured: true,
  experiment: false,         // ✅ Not currently working
  pinned: false,            // ✅ Not pinned
  liveUrl: "...",          // ✅ Has live URL (Discord OAuth)
  githubUrl: "...",        // ✅ Has GitHub URL
  image: "/images/...",    // ✅ Has custom image
}
```
**Display:** Shows on projects page with GitHub + Live links

---

### 2. **AI Video Studio** (Active Development + Pinned)
```typescript
{
  slug: "ai-video-studio",
  featured: true,
  experiment: true,         // ✅ Shows "Currently Working" badge
  pinned: true,            // ✅ Shows first in projects list
  githubUrl: "...",        // ✅ Has GitHub URL
  liveUrl: undefined,      // ❌ No live deployment yet
  image: undefined,        // ❌ Uses fallback artwork
}
```
**Display:** 
- **Projects page:** Shows FIRST with "Pinned" + "Currently Working" badges
- **Homepage experiments:** Shows FIRST (pinned priority)

---

### 3. **StreamSync Capture Studio** (Active Development)
```typescript
{
  slug: "streamsync-capture-studio",
  featured: true,
  experiment: true,         // ✅ Shows "Currently Working" badge
  pinned: false,           // ❌ Not pinned
  githubUrl: "...",        // ✅ Has GitHub URL
  liveUrl: undefined,      // ❌ No live deployment
  image: undefined,        // ❌ Uses fallback artwork
}
```
**Display:**
- **Projects page:** Shows with "Currently Working" badge
- **Homepage experiments:** Shows second (sorted by year)

---

### 4. **HackIITK Blockchain** (Active Development)
```typescript
{
  slug: "hackiitk-blockchain",
  featured: false,
  experiment: true,         // ✅ Shows "Currently Working" badge
  pinned: false,           // ❌ Not pinned
  githubUrl: "...",        // ✅ Has GitHub URL
  liveUrl: undefined,      // ❌ No live deployment
  image: undefined,        // ❌ Uses fallback artwork
}
```
**Display:**
- **Projects page:** Shows with "Currently Working" badge
- **Homepage experiments:** Shows third (sorted by year: Feb 2025)

---

### 5. **DocQA Tutor** (Active Development)
```typescript
{
  slug: "docqa-tutor",
  featured: false,
  experiment: true,         // ✅ Shows "Currently Working" badge
  pinned: false,           // ❌ Not pinned
  githubUrl: "...",        // ✅ Has GitHub URL
  liveUrl: undefined,      // ❌ No live deployment
  image: undefined,        // ❌ Uses fallback artwork
}
```
**Display:**
- **Projects page:** Shows with "Currently Working" badge
- **Homepage experiments:** Included (top 3 limit)

---

### 6. **TripLedger** (Active Development)
```typescript
{
  slug: "tripledger",
  featured: false,
  experiment: true,         // ✅ Shows "Currently Working" badge
  pinned: false,           // ❌ Not pinned
  githubUrl: "...",        // ✅ Has GitHub URL
  liveUrl: undefined,      // ❌ No live deployment
  image: undefined,        // ❌ Uses fallback artwork
}
```
**Display:**
- **Projects page:** Shows with "Currently Working" badge
- **Homepage experiments:** Not shown (outside top 3)

---

### 7. **TravelQuest** (Completed Project)
```typescript
{
  slug: "travelquest",
  featured: false,
  experiment: false,        // ✅ Not currently working
  pinned: false,           // ❌ Not pinned
  githubUrl: "...",        // ✅ Has GitHub URL
  liveUrl: undefined,      // ❌ No live deployment
  image: undefined,        // ❌ Uses fallback artwork
}
```
**Display:** Shows on projects page with GitHub link only

---

## 🎯 Sorting & Display Logic

### Projects Page (`/projects`)
**Sort order:**
1. **Pinned projects first** (`pinned: true`)
2. **Featured projects second** (`featured: true`)
3. **By year descending** (newest → oldest)

**Visual indicators:**
- 📌 **"Pinned"** badge (accent color)
- 🔨 **"Currently Working"** badge (amber color)
- 🏷️ **Category** badge
- 🔗 **GitHub** link (if `githubUrl` exists)
- 🚀 **Live** link (if `liveUrl` exists)

---

### Homepage Experiments (`/` → Experiments tab)
**Display logic:**
- Filters projects where `experiment: true`
- Shows **top 3** only
- Sorts by: **Pinned → Year**

**Visual indicators:**
- 🧪 Flask icon with amber "work in progress" dot
- 🔴 Small accent dot for pinned projects
- Compact text (smaller font sizes)

---

## 🔄 How to Update Projects

### Mark Project as "Currently Working":
```typescript
experiment: true,  // Shows badge + appears in experiments
```

### Pin Project to Top:
```typescript
pinned: true,  // Shows first in projects list
```

### Add GitHub Repository:
```typescript
githubUrl: "https://github.com/YourUsername/RepoName",
```

### Add Live Deployment:
```typescript
liveUrl: "https://your-app.vercel.app",
```

### Add Custom Thumbnail:
```typescript
image: "/images/projects/your-project.svg",
```

---

## ✅ Consistency Guarantees

### All Projects Have:
- ✅ Explicit `experiment` field (true/false)
- ✅ Explicit `pinned` field (true/false)
- ✅ Explicit `featured` field (true/false)
- ✅ GitHub URL (actual repo or profile link)
- ✅ Optional live URL (null if not deployed)
- ✅ Optional custom image (null = fallback artwork)

### Badge Labels:
- **Old:** "Experiment" ❌
- **New:** "Currently Working" ✅

### Image Hover Behavior:
- If `image` + `githubUrl` → Clickable with "View Source Code" overlay
- If `image` only → Static display
- If no `image` → Fallback artwork (category-specific or generic)

---

## 📸 Visual Examples

### Project Card (Projects Page):
```
┌─────────────────────────────────────┐
│  [Image/Artwork - Clickable]        │
├─────────────────────────────────────┤
│  📌 Pinned  🔨 Currently Working   │
│  🏷️ Category     📅 2026           │
│                                      │
│  AI Video Studio                    │
│  CLI + local browser workspace      │
│  Description text...                │
│                                      │
│  [Python] [React] [FastAPI]...      │
│  ─────────────────────────────       │
│  View case study →  Code  Live      │
└─────────────────────────────────────┘
```

### Experiments List (Homepage):
```
🧪 AI Video Studio                   🔴
   CLI + local browser workspace
   
🧪 StreamSync Capture Studio        
   Browser capture · local recording
   
🧪 DocQA Tutor                      
   Summarisation & question-answering
```

---

## 🚀 All Systems Ready!

- ✅ Complete schema for all 7 projects
- ✅ Consistent field naming (experiment, pinned)
- ✅ Clear badge labels ("Currently Working")
- ✅ Proper sorting (pinned → featured → year)
- ✅ All GitHub URLs added
- ✅ Clickable images synced across all projects
- ✅ Build verified and passing

Ready for deployment! 🎉
