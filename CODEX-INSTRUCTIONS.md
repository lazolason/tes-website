# CODEX IMPLEMENTATION INSTRUCTIONS

## Copy-Paste This Entire File to GPT-5.2 Codex

---

## PROJECT CONTEXT

You are implementing improvements to a Next.js 14 marketing website for Mexel Energy Sustain (TES) - a cooling-water efficiency solution company. The website is built with TypeScript and Tailwind CSS.

**Repository:** https://github.com/lazolason/tes-website
**Branch:** `feat/ui-token-pass`
**Working Directory:** `/tes-website/` (the Next.js app root)

---

## CRITICAL PROBLEMS TO FIX

### Problem 1: WRONG IMAGES ON INDUSTRY PAGES
The Mining page shows a schematic labeled "OIL & GAS PROCESS COOLING" - this is WRONG. Each industry page is showing incorrect or generic images instead of industry-specific content.

### Problem 2: NO WEBP IMAGES
All images are PNG/JPG (2-3MB each). Need to convert to WebP for performance.

### Problem 3: MISSING INDUSTRY SCHEMATICS
Only Power & Energy has a proper schematic (`CoolingSchematic.tsx`). The other 6 industries need their own unique schematics.

### Problem 4: ACCESSIBILITY GAPS
Site needs WCAG 2.1 AA compliance: skip links, ARIA labels, focus indicators.

---

## WHAT'S ALREADY DONE (Don't Redo This)

The following components have already been created:

```
components/icons/IndustryIcons.tsx  ✅ DONE
components/icons/index.ts           ✅ DONE
components/IndustryCTA.tsx          ✅ DONE
components/MexSteamSection.tsx      ✅ DONE
```

These files have already been updated to use shared icons:
- `components/Navbar.tsx` ✅ DONE
- `app/industries/page.tsx` ✅ DONE

---

## YOUR TASKS (In Order)

### TASK 1: Create 6 Industry-Specific Schematics

Create SVG schematic components for each industry. Use `components/CoolingSchematic.tsx` as the template.

**File Structure to Create:**
```
components/schematics/
├── PowerEnergySchematic.tsx    (rename existing CoolingSchematic.tsx)
├── MiningSchematic.tsx         (CREATE)
├── RefinerySchematic.tsx       (CREATE)
├── FoodBeverageSchematic.tsx   (CREATE)
├── AgricultureSchematic.tsx    (CREATE)
├── DataCentreSchematic.tsx     (CREATE)
├── PortsSchematic.tsx          (CREATE)
└── index.ts                    (CREATE - barrel export)
```

**Schematic Requirements Per Industry:**

| Industry | Must Show | DO NOT Show |
|----------|-----------|-------------|
| **Mining** | Concentrator, Mill, Open cooling circuit, Heat exchanger, Tailings interaction, TES dosing point | Turbine, Condenser, Oil & Gas equipment |
| **Refineries** | Distillation column, Process cooler, Fin-fan coolers, Cooling tower, TES dosing point | Mining equipment, Turbines |
| **Food & Beverage** | Pasteurizer/Chiller, Plate heat exchanger, Sanitary cooling system, TES dosing point | Heavy industrial equipment |
| **Agriculture** | Greenhouse, Evaporative cooler, Water reservoir, Irrigation connection, TES dosing point | Industrial cooling towers |
| **Data Centres** | Server racks, CRAC/CRAH units, Chilled water loop, Chiller, Hot/cold aisle, TES dosing point | Process equipment |
| **Ports** | Ship loading equipment, Hydraulic coolers, Compressor coolers, Seawater indicator, TES dosing point | Inland industrial equipment |

**SVG Style Guide (from existing CoolingSchematic.tsx):**
```tsx
// Colors
Primary (TES/active): #10b981 (emerald-500)
Secondary (equipment): #64748b (slate-500)
Tertiary (secondary flows): #94a3b8 (slate-400)
Background: #f8fafc (slate-50)

// Styling
Container: className="relative h-44 w-full overflow-hidden rounded-lg border border-slate-200 bg-white sm:h-48 md:h-40"
Font size: 7-8px for labels
Stroke width: 1-2px
Must include: <title> element for accessibility, Legend at bottom
Must include: role="img" and aria-labelledby on SVG
```

---

### TASK 2: Update Industry Pages to Use Correct Schematics

Update each industry page to import and use its specific schematic:

**Files to modify:**
```
app/industries/power-energy/page.tsx  - Use PowerEnergySchematic
app/industries/mining/page.tsx        - Use MiningSchematic
app/industries/refineries/page.tsx    - Use RefinerySchematic
app/industries/food-beverage/page.tsx - Use FoodBeverageSchematic
app/industries/agriculture/page.tsx   - Use AgricultureSchematic
app/industries/data-centres/page.tsx  - Use DataCentreSchematic
app/industries/ports/page.tsx         - Use PortsSchematic
```

**Example import:**
```tsx
import MiningSchematic from "../../../components/schematics/MiningSchematic";

// Then in JSX:
<MiningSchematic />
```

---

### TASK 3: Update Industry Pages to Use Shared Components

Replace duplicate CTA and MexSteam sections with shared components.

**IndustryCTA usage:**
```tsx
import IndustryCTA from "../../../components/IndustryCTA";

// Replace the CTA section with:
<IndustryCTA industry="mining" />
```

**MexSteamSection usage:**
```tsx
import MexSteamSection from "../../../components/MexSteamSection";

// Replace the MexSteam section with:
<MexSteamSection
  industry="mining"
  introText="Mining operations typically have boilers for process steam, heating or power generation. Mine-water quality (high TDS, variable chemistry) makes boiler feedwater treatment challenging."
  applicationsTitle="Typical boiler applications in mining"
  applications={[
    "Mine-water boilers where high TDS causes scaling",
    "Process steam generators for ore processing",
    "Condensate return systems with low pH corrosion",
    "Feedwater circuits with partial demineralisation",
    "Heat recovery systems requiring steam-side protection"
  ]}
/>
```

---

### TASK 4: Convert Images to WebP

**Step 1: Install sharp-cli**
```bash
npm install -g sharp-cli
```

**Step 2: Convert all images**
```bash
cd public/images
for file in **/*.{png,jpg,jpeg}; do
  sharp -i "$file" -o "${file%.*}.webp" --quality 80
done
```

**Step 3: Update all image references**
Change `.png` and `.jpg` to `.webp` in all TSX files.

**Step 4: Update next.config.mjs**
```javascript
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp', 'image/avif'],
  },
}
export default nextConfig;
```

---

### TASK 5: Add Accessibility Improvements

**5.1 Add Skip Link in `app/layout.tsx`:**
```tsx
// Add as first child inside <body>
<a
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-emerald-600 text-white px-4 py-2 rounded"
>
  Skip to main content
</a>
```

**5.2 Add id="main-content" to each page's <main> element:**
```tsx
<main id="main-content" className="min-h-screen bg-white">
```

**5.3 Add ARIA labels to Navbar mobile menu button:**
```tsx
<button
  onClick={() => setMobileOpen(!mobileOpen)}
  aria-label={mobileOpen ? "Close menu" : "Open menu"}
  aria-expanded={mobileOpen}
  className="..."
>
```

**5.4 Add aria-hidden to decorative icons:**
```tsx
<svg aria-hidden="true" className="w-4 h-4">...</svg>
```

---

## AVAILABLE SOURCE IMAGES

These images exist and are ready to use:

| File | Location | Use For |
|------|----------|---------|
| `before-after-tubes.png` | `public/images/hero/` | BeforeAfterSlider |
| `power-energy-hero.png` | `public/images/industries/` | Power & Energy page |
| `power-station-mexel-impact.png` | `public/images/infographics/` | Power & Energy infographic |
| `sustainable-future.png` | `public/images/infographics/` | TES page or Homepage |
| `tes-4-step-process.png` | `public/images/process/` | Process section |
| `tes-icons.png` | `public/images/` | Icon reference |

---

## IMAGES YOU NEED TO GENERATE (Use AI Image Generation)

| Industry | Prompt |
|----------|--------|
| **Mining** | "Industrial mining concentrator facility with cooling towers and heat exchangers, water treatment system visible, photorealistic, daytime, professional" |
| **Refineries** | "Oil refinery with distillation columns and cooling towers, process cooling equipment, industrial setting, photorealistic" |
| **Food & Beverage** | "Modern food processing facility with stainless steel equipment, plate heat exchangers, hygienic cooling systems, photorealistic" |
| **Agriculture** | "Large commercial greenhouse with evaporative cooling system, irrigation equipment, agricultural facility, photorealistic" |
| **Data Centres** | "Modern data centre server room with CRAC units, hot/cold aisle containment, cooling infrastructure, photorealistic" |
| **Ports** | "Industrial port with ship loading cranes, hydraulic equipment, cooling systems for machinery, photorealistic" |

Save generated images to: `public/images/industries/[industry-name]-hero.webp`

---

## FILE MANIFEST

### Files to CREATE:
```
components/schematics/MiningSchematic.tsx
components/schematics/RefinerySchematic.tsx
components/schematics/FoodBeverageSchematic.tsx
components/schematics/AgricultureSchematic.tsx
components/schematics/DataCentreSchematic.tsx
components/schematics/PortsSchematic.tsx
components/schematics/index.ts
```

### Files to RENAME:
```
components/CoolingSchematic.tsx → components/schematics/PowerEnergySchematic.tsx
```

### Files to MODIFY:
```
app/industries/mining/page.tsx
app/industries/refineries/page.tsx
app/industries/food-beverage/page.tsx
app/industries/agriculture/page.tsx
app/industries/data-centres/page.tsx
app/industries/ports/page.tsx
app/industries/power-energy/page.tsx
app/layout.tsx
next.config.mjs
```

---

## ACCEPTANCE CRITERIA

Your implementation is COMPLETE when:

1. ✅ Each industry page displays its OWN unique schematic (not generic/wrong)
2. ✅ Mining page does NOT show "Oil & Gas" anywhere
3. ✅ ALL images are WebP format
4. ✅ `npm run build` passes with no errors
5. ✅ `npm run lint` passes with no errors
6. ✅ Skip-to-content link works on all pages
7. ✅ All 33 pages render correctly

---

## COMMANDS TO VERIFY

```bash
# Build check
npm run build

# Lint check
npm run lint

# Start dev server
npm run dev

# Deploy to Vercel
vercel --prod
```

---

## IMPORTANT NOTES

1. **DO NOT use generic schematics** - each industry has different equipment
2. **DO NOT show Oil & Gas equipment on Mining page** - this was the original bug
3. **SVG schematics are preferred** over raster images
4. **Maintain emerald/slate color palette** throughout
5. **Test at mobile and desktop sizes** before committing
6. **Commit frequently** with descriptive messages

---

## REFERENCE: Existing CoolingSchematic.tsx Template

Use this as the base for all new schematics:

```tsx
"use client";

export default function MiningSchematic() {
  return (
    <div className="relative h-44 w-full overflow-hidden rounded-lg border border-slate-200 bg-white sm:h-48 md:h-40">
      <svg
        viewBox="0 0 260 120"
        className="h-full w-full text-slate-700"
        role="img"
        aria-labelledby="mining-diagram-title"
      >
        <title id="mining-diagram-title">
          Mining cooling system schematic with TES dosing point
        </title>

        {/* Section labels */}
        <text x="10" y="15" fontSize="8" fill="#64748b">
          Concentrator
        </text>
        <text x="110" y="15" fontSize="8" fill="#64748b">
          Heat Exchanger
        </text>
        <text x="195" y="15" fontSize="8" fill="#64748b">
          Cooling Tower
        </text>

        {/* ADD YOUR INDUSTRY-SPECIFIC EQUIPMENT HERE */}

        {/* TES dosing point - always include */}
        <circle cx="75" cy="55" r="5" fill="#10b981" opacity="0.15" />
        <circle cx="75" cy="55" r="3" fill="#10b981" />
        <text x="75" y="44" fontSize="7" textAnchor="middle" fill="#10b981">
          TES
        </text>

        {/* Legend */}
        <g transform="translate(10,90)">
          <line x1="0" y1="0" x2="18" y2="0" stroke="#10b981" strokeWidth="2" />
          <text x="22" y="3" fontSize="7" fill="#475569">
            Cooling-water loop
          </text>
        </g>

        {/* Arrow markers */}
        <defs>
          <marker id="arrow-main" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 z" fill="#10b981" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
```

---

## END OF CODEX INSTRUCTIONS

When you're done, run:
```bash
npm run build && npm run lint && vercel --prod
```

Then verify at: https://tes-website-self.vercel.app
