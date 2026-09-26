# AdvoChat Design System — Counsel Editorial

This document specifies the visual design system extracted directly from the official **Stitch AdvoChat** project (`projects/13013767363775808186`), titled **"Counsel Editorial"**.

---

## 🏛️ Brand & Visual Ethos

This design system embodies the stately poise, intellectual depth, and bespoke tactility of classic legal stationery reimagined for modern conversational intelligence. It targets discerning legal professionals, corporate counsels, and high-value clients who value discretion, unimpeachable rigor, and clarity over tech-industry artifice.

The visual ethos blends **Editorial Minimalism** with **Restrained Luxury**:
- **Tactile Paper Aesthetics**: Warm, rich ivory canvases (`#FBF9F5`) evoking archival cotton paper stocks replace sterile blue-tinted digital whites.
- **Bespoke Craft**: Hairline rules, balanced typographic hierarchy, and precise micro-radii reference bound legal volumes and engraved letterheads.
- **Zero Gimmicks**: Strictly no diffuse glowing gradients, no neon saturated highlights, and no frosted glass blurs. Depth is conveyed purely through warm surface layers, exquisite typographic cadence, and deliberate ink contrasts.
- **Emotional Resonance**: Dignified, calm, authoritative, human, and meticulously composed.

---

## 🎨 Color Palette & Tokens

### Primary Surfaces
| Token | Hex | Role | Usage |
|---|---|---|---|
| **Canvas Base** | `#FBF9F5` | Core desk surface | Main application background, primary reading stream |
| **Surface Inset** | `#F5F2EB` | Recessed utility | Search wells, input trays, user chat turns, badge backgrounds |
| **Surface Raised** | `#FFFFFF` | Parchment sheets | Document preview cards, modal sheets, active query bubbles |
| **Hairline Rule** | `#E2DDD5` | Elevation borders | 1px continuous micro-borders referencing debossed stationery |
| **Border Dark** | `#D4CDC3` | Active borders | Hover state borders, divider rules |

### Brand & Editorial Inks
| Token | Hex | Role | Usage |
|---|---|---|---|
| **Forest Ink** | `#1B382B` | Primary Brand | Primary buttons, active navigation, key icons, verified stamps |
| **Forest Dark** | `#142B21` | Brand Hover | Button hover states, active headers |
| **Charcoal Ink** | `#1F2421` | Primary Text | Headings, primary body text, high contrast typography |
| **Slate Charcoal** | `#2C3531` | Secondary Text | Subtitles, section captions, card secondary content |
| **Muted Sage** | `#4A5D52` | Tertiary Text / Icons | Metadata labels, timestamp chips, legal citation stamps |
| **Light Sage Chip**| `#E8ECE9` | Chip Surface | Citation pills, category chips, docket badge backgrounds |
| **Antique Brass** | `#C5A880` | Accent Gold | Rule dividers, highlighted clauses, historical badges |
| **Antique Brass Muted** | `#EADBC8` | Muted Accent | 15% opacity highlights, subtle badge outlines |

### Semantic State Colors
| Token | Hex | Usage |
|---|---|---|
| **Risk / Critical Alert** | `#9E2A2B` | One-sided indemnity flags, forfeiture clauses, danger badges |
| **Risk Inset** | `#FBF0F0` | Danger card backgrounds, warning banner insets |
| **Risk Border** | `#F0C4C4` | Danger alert 1px borders |
| **Caution / Amber** | `#C57B28` | Advisory notices, lock-in alerts, review items |
| **Caution Inset** | `#FDF6EE` | Warning banner insets |
| **Valid / Success** | `#2D6A4F` | Verified attorney badges, mastered quiz answers, safe clauses |
| **Valid Inset** | `#EEF5F1` | Success banner insets, completed lesson tags |

---

## 🔤 Typography & Hierarchy

### Font Families
- **Display & Headings**: `Playfair Display`, serif (`font-serif`) — Used for editorial headings, screen titles, and section headlines.
- **Body & Controls**: `Plus Jakarta Sans` / `Inter`, sans-serif (`font-sans`) — Used for paragraphs, buttons, navigation, and inputs.
- **Legal & Evidentiary**: `JetBrains Mono` / monospace (`font-mono`) — Used for clause numbers, statutory references, docket IDs, and bar council numbers.

### Typographic Scale
- **Display Hero (`headline-xl`)**: `Playfair Display`, 32px – 40px, font-weight 700, line-height 1.15, letter-spacing `-0.02em`.
- **Screen Title (`headline-lg`)**: `Playfair Display`, 24px – 28px, font-weight 700, line-height 1.25.
- **Section Subtitle (`headline-sm`)**: `Playfair Display`, 18px – 20px, font-weight 600, line-height 1.35.
- **Body Regular (`body-md`)**: `Plus Jakarta Sans`, 14px – 15px, font-weight 400, line-height 1.6, text `#1F2421`.
- **Caption / Label (`label-sm`)**: `Plus Jakarta Sans`, 11px – 12px, font-weight 600, uppercase, letter-spacing `0.05em`, text `#4A5D52`.
- **Legal Docket (`code-sm`)**: `JetBrains Mono`, 12px, font-weight 500, text `#2C3531`.

---

## 📐 Layout, Spacing & Elevation

### Grid System
- **Desktop (1024px and above)**: 12-column layout with 24px (`1.5rem`) gutters and a minimum 40px (`2.5rem`) outer margin. The primary conversational view is constrained to a comfortable, non-fatiguing reading column (768px – 840px), flanked by a docked contextual inspector or docket panel (320px – 380px).
- **Tablet (768px – 1023px)**: 6-column fluid structure where secondary sidebars collapse into a warm off-canvas drawer. Outer margins adjust to 32px (`2rem`).
- **Mobile (below 768px)**: Single-column layout with 16px (`1rem`) gutters and 20px (`1.25rem`) safe margins. Spacing scales down while preserving touch accessibility (minimum 44px touch targets).

### Elevation
- Strictly zero fuzzy synthetic drop shadows!
- Depth is achieved via **hairline borders (`1px solid #E2DDD5`)** and contrasting parchment surface layers (`#FFFFFF` on `#FBF9F5` or `#F5F2EB`).
- Rare ambient grounding for modal sheets: `box-shadow: 0 4px 24px rgba(31, 36, 33, 0.06)`.

---

## 🧩 Component Styles & Patterns

### 1. Navigation Header
- Warm ivory parchment background (`#FFFFFF` or `#FBF9F5`), 1px `#E2DDD5` bottom rule.
- Classic **AdvoChat Seal/Emblem**: Engraved scales inside a circular double hairline border.
- Serif brand mark: `AdvoChat` in Playfair Display (`#1F2421`), with a discrete subtitle `Juridical AI Assistant` in tracked uppercase (`#4A5D52`).
- Discrete navigation pills with 4px border radius and deep green active indicator.

### 2. Primary & Secondary Buttons
- **Primary**: Background `#1B382B`, text `#FBF9F5`, 4px border radius, medium weight, subtle transition to `#142B21`.
- **Secondary**: Background `#FFFFFF`, 1px border `#E2DDD5`, text `#1F2421`. Hover shifts background to `#F5F2EB` and border to `#C5A880`.
- **Antique Accent**: Transparent background, text `#C5A880` with antique brass underline on hover.

### 3. Conversational AI Counsel Interface
- **User Message**: Recessed `#F5F2EB` box, 8px radius, aligned right, `#1F2421` charcoal typography.
- **AI Legal Counsel Response**: Rests directly on `#FBF9F5` canvas, bordered on the left with a 2px `#1B382B` or `#C5A880` rule, accompanied by the engraved scales icon.
- **Citation Chips**: `#E8ECE9` chip with `#4A5D52` text and 4px radius, linking directly to the statutory clause.

### 4. Clause & Docket Inspector
- Dual-scrolling panel: Original contractual text on the left with 15% antique brass highlight wash; Plain-English translation and risk analysis on the right.

### 5. Verification Seal & Badges
- Circular hairline badge stamped with `VERIFIED COUNSEL` or `STATUTORY CITATION` in uppercase 10px tracking.

---

## 📱 Complete Stitch Screen Inventory (25 Screens)

1. **Splash & Authorization Initialize** (`7c50c1b4e5604edb96c78862dc94df0f`)
2. **Access Authorization (Email & Phone)** (`c44e396a188c490ca18d8fb5f922dd4b`)
3. **Google Enterprise SSO Verification** (`54f170f33b08466082315f02ec4901a3`)
4. **Juridical Home Dashboard** (`8cb30c2f29044609915bf1bd31461db4`)
5. **AI Legal Assistant Workspace** (`4fa7ad42122c40cd8af3f74ca82aeaac`)
6. **Document Ingestion & Privilege Vault** (`fea54c4f38604ec9bba176f8586a4570`)
7. **Document Analysis & Clause Deliberation** (`33c4fc02142b4801a51a9d9cfeacd8d2`)
8. **Clause Details & Deliberation Inspector** (`5d2ab3f8549b4242b374015d703ae4f6`)
9. **Document Comparison & Redline Intelligence** (`9ae0e5449597471f918f57dbbc3252f4`)
10. **Action Center & Execution Command** (`3dac9d35ad044d29a47abfefe32377ec`)
11. **Document History & Evidentiary Archive** (`8ca7315ca59345f58ecb002e481fb96f`)
12. **Law Library & Juris Academy** (`6bf7ba7b7d2348ca8a7d8c1fa31ed917`)
13. **Contract Law: Chapters & Sections** (`be169793df584c5e89cab037217b4860`)
14. **Interactive Law Lesson: Forfeiture-for-Competition (Sec. 2.4)** (`460dc7766953438a9a6c1f48586c16b7`)
15. **Interactive Doctrinal Assessment: Restraints of Trade (Quiz 2.4)** (`375ae1c2bca34e39baf8676014afaef4`)
16. **Find Counsel & Geolocation Discovery** (`80d1b2de2a5b4d1d8cac3f8b0ca1f04b`)
17. **Lawyer Profile: Eleanor Vance, Esq.** (`821ad551fbba4dd9ba76c59fc6766131`)
18. **Legal Updates & Articles** (`2b3421d72a4649f8bda322699f1ab897`)
19. **Article Details: The Death of 'Employee Choice'** (`727ab09b62ca4532ba58579b8c51a763`)
20. **User Profile & Counsel Account** (`9d5e112148e44bd288b263b3d0365347`)
21. **Settings & System Governance** (`e78a8bdf916749479149234d79058ec0`)
22. **Terms & Privacy Covenant** (`cfa01560f0bc402fb15475528d6d6d59`)
23. **Help, Privacy & Legal Disclaimer** (`5170eeb925394516bf2e98aeebc44bf3`)
24. **AdvoChat Emblem Logo** (`7991b5a2face4adea7dde5a7bd03def6`)
25. **Professional legal portrait of Eleanor Vance, Esq.** (`98bfb1b0a02d413ba59aee3b205aa791`)
