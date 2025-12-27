# TES Website Implementation Plan
## For GPT-5.2 Codex Implementation

**Created:** 2025-12-27
**Priority:** HIGH
**Estimated Scope:** 78+ file changes

---

## EXECUTIVE SUMMARY

This plan addresses critical issues discovered during site audit:
1. **ALL industry images are incorrectly assigned** (e.g., Mining page shows Oil & Gas schematic)
2. **No WebP images** - all images are PNG/JPG (2-3MB each)
3. **Accessibility gaps** - not WCAG 2.1 AA verified
4. **Missing industry-specific schematics** - only Power & Energy has a proper schematic

---

## AVAILABLE SOURCE IMAGES

Located at: `/Users/lazolasonqishe/Desktop/images/`

### Ready to Use:
| Filename | Description | Target Location |
|----------|-------------|-----------------|
| `before-after-tubes.png` | Side-by-side fouled vs clean tubes | Homepage BeforeAfterSlider |
| `ChatGPT Image Nov 22, 2025, 08_48_27 AM.png` | Cooling tower with water basin | Power & Energy hero |
| `Gemini_Generated_Image_b6o172b6o172b6o1.png` | TES Hero banner | Homepage hero background |
| `Gemini_Generated_Image_gysszsgysszsgyss.png` | Mexel 432 Power Station infographic | Power & Energy page |
| `Gemini_Generated_Image_hlc20yhlc20yhlc2.png` | Sustainable Future infographic | TES page or Homepage |
| `tes-4-step-proces.png` | 4-Step Process diagram | Homepage ProcessSteps section |
| `tes-icons.png` | Icon set (8 icons) | Various pages |

### MUST BE CREATED (AI Generation Required):
| Industry | Required Image | Prompt Suggestion |
|----------|----------------|-------------------|
| **Mining** | Mine/concentrator with cooling system | "Industrial mining concentrator facility with cooling towers and heat exchangers, showing water treatment system, photorealistic, daytime" |
| **Refineries** | Oil refinery with distillation columns | "Oil refinery with distillation columns and cooling towers, process cooling equipment visible, industrial setting, photorealistic" |
| **Food & Beverage** | Food processing plant with cooling | "Modern food processing facility with stainless steel equipment, plate heat exchangers, hygienic cooling systems, photorealistic" |
| **Agriculture** | Greenhouse/farm with evaporative cooling | "Large commercial greenhouse with evaporative cooling system, irrigation equipment, agricultural facility, photorealistic" |
| **Data Centres** | Server room with cooling infrastructure | "Modern data centre server room with CRAC units, hot/cold aisle containment, cooling infrastructure visible, photorealistic" |
| **Ports** | Port with ship loading equipment | "Industrial port with ship loading cranes, hydraulic equipment, cooling systems for port machinery, photorealistic" |

### Schematic Images (MUST BE CREATED as SVG or PNG):
Each industry needs a cooling system schematic diagram showing:
- Industry-specific equipment
- Cooling water flow path
- TES dosing point (green marker)
- Legend explaining components

---

## PHASE 1: IMAGE AUDIT & CORRECTION

### 1.1 Current State (BROKEN)

| Industry Page | Current Image | Problem |
|--------------|---------------|---------|
| `/industries/mining` | `/industry-mining.png`, `/mining-plant.png` | Shows generic/wrong imagery; schematic shows "OIL & GAS" |
| `/industries/refineries` | Unknown | Likely incorrect or generic |
| `/industries/food-beverage` | Unknown | Likely incorrect or generic |
| `/industries/agriculture` | Unknown | Likely incorrect or generic |
| `/industries/data-centres` | Unknown | Likely incorrect or generic |
| `/industries/ports` | Unknown | Likely incorrect or generic |
| `/industries/power-energy` | Has `CoolingSchematic` component | ONLY correct one - shows Turbine/Condenser |

### 1.2 Required Actions

#### A. Audit ALL Industry Pages
Run this command to identify all image references:
```bash
grep -r "src=\"/" app/industries --include="*.tsx" | grep -E "\.(png|jpg|jpeg|webp|svg)"
```

#### B. Create Industry-Specific Schematics (SVG Components)

Each industry needs a UNIQUE schematic showing their specific cooling system configuration:

| Industry | Schematic Must Show | Key Components |
|----------|---------------------|----------------|
| **Power & Energy** | Turbine → Condenser → Cooling Tower | Turbine, Condenser, Cooling Tower, TES dosing point |
| **Mining** | Concentrator → Heat Exchanger → Open Cooling Circuit | Concentrator, Mill, Heat Exchanger, Tailings interaction, TES dosing point |
| **Refineries** | Distillation → Process Cooler → Cooling Tower | Distillation column, Process cooler, Cooling tower, TES dosing point |
| **Food & Beverage** | Pasteurizer/Chiller → Plate Heat Exchanger → Cooling System | Process vessels, Plate HX, Cooling system, TES dosing point |
| **Agriculture** | Irrigation/Greenhouse → Evaporative Cooler | Greenhouse/facility, Evaporative cooler, Water reservoir, TES dosing point |
| **Data Centres** | Server Racks → CRAC Units → Chilled Water Loop | Server racks, CRAC/CRAH units, Chiller, Cooling tower, TES dosing point |
| **Ports** | Ship Loading → Cooling for Hydraulics/Compressors | Port equipment, Hydraulic coolers, Compressor coolers, TES dosing point |

#### C. File Naming Convention
```
components/schematics/
├── PowerEnergySchematic.tsx      (existing as CoolingSchematic.tsx - RENAME)
├── MiningSchematic.tsx           (CREATE)
├── RefinerySchematic.tsx         (CREATE)
├── FoodBeverageSchematic.tsx     (CREATE)
├── AgricultureSchematic.tsx      (CREATE)
├── DataCentreSchematic.tsx       (CREATE)
├── PortsSchematic.tsx            (CREATE)
└── index.ts                      (CREATE - barrel export)
```

---

## PHASE 2: IMAGE OPTIMIZATION (WebP Conversion)

### 2.1 Current State (INEFFICIENT)

```
public/images/home-outcomes-cooling-water.png     - 2.8MB
public/images/home-verification-instrumentation.png - 2.5MB
public/images/hero/after-stabilised-tubes.png    - 2.8MB
public/images/hero/before-fouled-tubes.png       - 1.6MB
```

**Total: ~10MB+ of unoptimized images**

### 2.2 Required Actions

#### A. Convert ALL PNG/JPG to WebP
```bash
# Install sharp-cli or use squoosh
npm install -g sharp-cli

# Convert all images
for file in public/images/**/*.{png,jpg,jpeg}; do
  sharp -i "$file" -o "${file%.*}.webp" --quality 80
done
```

#### B. Update Next.js Config for WebP
In `next.config.mjs`:
```javascript
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}
```

#### C. Update Image References
Change all image imports from `.png`/`.jpg` to `.webp`:
```tsx
// BEFORE
<Image src="/images/hero/before-fouled-tubes.png" ... />

// AFTER
<Image src="/images/hero/before-fouled-tubes.webp" ... />
```

#### D. Add Fallback for Legacy Browsers
```tsx
<picture>
  <source srcSet="/images/hero/before-fouled-tubes.webp" type="image/webp" />
  <Image src="/images/hero/before-fouled-tubes.png" ... />
</picture>
```

---

## PHASE 3: ACCESSIBILITY (WCAG 2.1 AA)

### 3.1 Required Audits

#### A. Run Automated Accessibility Tests
```bash
# Install axe-core
npm install --save-dev @axe-core/cli

# Run accessibility audit
npx axe http://localhost:3000 --tags wcag2a,wcag2aa
```

#### B. Manual Checks Required

| Check | File(s) | Action |
|-------|---------|--------|
| All images have descriptive `alt` text | All `.tsx` files with `<Image>` | Review and improve alt text |
| Color contrast ratio ≥ 4.5:1 | `globals.css`, `tailwind.config.ts` | Verify emerald/slate combinations |
| Focus indicators visible | All interactive elements | Add `focus:ring-2 focus:ring-emerald-500` |
| Keyboard navigation | `Navbar.tsx`, dropdowns | Ensure Tab/Enter/Escape work |
| ARIA labels on icons | All SVG icons | Add `aria-label` or `aria-hidden="true"` |
| Skip to main content link | `layout.tsx` | Add skip link |
| Form labels | `contact/page.tsx` | Ensure all inputs have labels |

#### C. Specific Fixes

1. **Add Skip Link** in `app/layout.tsx`:
```tsx
<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-600 text-white px-4 py-2 rounded">
  Skip to main content
</a>
```

2. **Add ARIA to Icon Buttons** in `Navbar.tsx`:
```tsx
<button aria-label="Open menu" aria-expanded={isMenuOpen}>
  <MenuIcon aria-hidden="true" />
</button>
```

3. **Ensure Form Accessibility** in `contact/page.tsx`:
```tsx
<label htmlFor="name" className="...">Name</label>
<input id="name" name="name" aria-required="true" ... />
```

---

## PHASE 4: SCHEMATIC COMPONENT SPECIFICATIONS

### 4.1 Mining Schematic (`MiningSchematic.tsx`)

**Must include these elements:**
- Concentrator/Mill building
- Open cooling circuit with variable water quality indicator
- Heat exchanger (fouled state representation)
- Tailings pond interaction arrow
- Cooling tower with high solids indicator
- TES dosing point (green circle)
- Legend explaining:
  - Cooling water loop
  - Process water interaction
  - Tailings/mine water influence
  - TES treatment point

**Title:** "Mining & Minerals Cooling System Schematic with TES"

**DO NOT show:** Turbine, Condenser, Oil & Gas equipment

### 4.2 Refinery Schematic (`RefinerySchematic.tsx`)

**Must include:**
- Distillation column
- Process cooler/heat exchanger
- Fin-fan coolers
- Cooling tower
- High-temperature indicator
- TES dosing point

**Title:** "Refinery Process Cooling Schematic with TES"

### 4.3 Food & Beverage Schematic (`FoodBeverageSchematic.tsx`)

**Must include:**
- Pasteurizer or chiller unit
- Plate heat exchanger
- Glycol loop (if applicable)
- Cooling tower (clean/sanitary)
- TES dosing point

**Title:** "Food & Beverage Cooling Schematic with TES"

### 4.4 Agriculture Schematic (`AgricultureSchematic.tsx`)

**Must include:**
- Greenhouse or cold storage facility
- Evaporative cooling system
- Water reservoir/pond
- Irrigation connection (if applicable)
- TES dosing point

**Title:** "Agricultural Cooling Schematic with TES"

### 4.5 Data Centre Schematic (`DataCentreSchematic.tsx`)

**Must include:**
- Server rack row
- CRAC/CRAH units
- Chilled water loop
- Chiller
- Cooling tower
- Hot aisle / cold aisle indication
- TES dosing point

**Title:** "Data Centre Cooling Schematic with TES"

### 4.6 Ports Schematic (`PortsSchematic.tsx`)

**Must include:**
- Ship loading/unloading equipment
- Hydraulic system cooler
- Compressor cooler
- Seawater/brackish water indicator
- Cooling system
- TES dosing point

**Title:** "Port Operations Cooling Schematic with TES"

---

## PHASE 5: IMPLEMENTATION CHECKLIST

### Pre-Implementation
- [ ] Backup current codebase
- [ ] Create feature branch: `feat/image-optimization-accessibility`
- [ ] Install required tools: `sharp-cli`, `@axe-core/cli`

### Phase 1: Schematics (Priority: CRITICAL)
- [ ] Create `components/schematics/` directory
- [ ] Rename `CoolingSchematic.tsx` to `PowerEnergySchematic.tsx`
- [ ] Create `MiningSchematic.tsx`
- [ ] Create `RefinerySchematic.tsx`
- [ ] Create `FoodBeverageSchematic.tsx`
- [ ] Create `AgricultureSchematic.tsx`
- [ ] Create `DataCentreSchematic.tsx`
- [ ] Create `PortsSchematic.tsx`
- [ ] Create `index.ts` barrel export
- [ ] Update each industry page to import correct schematic
- [ ] Remove incorrect image references

### Phase 2: Image Optimization (Priority: HIGH)
- [ ] Convert all PNG/JPG to WebP format
- [ ] Update `next.config.mjs` with image optimization settings
- [ ] Update all image `src` references to WebP
- [ ] Delete original PNG/JPG files (after verification)
- [ ] Verify image quality and loading performance

### Phase 3: Accessibility (Priority: HIGH)
- [ ] Add skip-to-content link in `layout.tsx`
- [ ] Audit and fix all `alt` text
- [ ] Add ARIA labels to all icon buttons
- [ ] Verify color contrast ratios
- [ ] Test keyboard navigation throughout site
- [ ] Add focus indicators to all interactive elements
- [ ] Run axe-core audit and fix all issues
- [ ] Test with screen reader (VoiceOver/NVDA)

### Phase 4: Verification
- [ ] Run `npm run build` - must pass without errors
- [ ] Run `npm run lint` - must pass without errors
- [ ] Run Lighthouse audit - target scores:
  - Performance: >90
  - Accessibility: >95
  - Best Practices: >90
  - SEO: >90
- [ ] Manual visual QA on all industry pages
- [ ] Test on mobile devices (iOS Safari, Android Chrome)

### Post-Implementation
- [ ] Commit with message: `feat: add industry-specific schematics, WebP images, and accessibility improvements`
- [ ] Deploy to Vercel preview
- [ ] Final QA on preview URL
- [ ] Merge to main branch
- [ ] Deploy to production

---

## PHASE 6: FILE MANIFEST

### Files to CREATE
```
components/schematics/MiningSchematic.tsx
components/schematics/RefinerySchematic.tsx
components/schematics/FoodBeverageSchematic.tsx
components/schematics/AgricultureSchematic.tsx
components/schematics/DataCentreSchematic.tsx
components/schematics/PortsSchematic.tsx
components/schematics/index.ts
public/images/hero/before-fouled-tubes.webp
public/images/hero/after-stabilised-tubes.webp
public/images/home-outcomes-cooling-water.webp
public/images/home-verification-instrumentation.webp
```

### Files to MODIFY
```
components/CoolingSchematic.tsx → RENAME to components/schematics/PowerEnergySchematic.tsx
app/industries/mining/page.tsx
app/industries/refineries/page.tsx
app/industries/food-beverage/page.tsx
app/industries/agriculture/page.tsx
app/industries/data-centres/page.tsx
app/industries/ports/page.tsx
app/industries/power-energy/page.tsx
app/layout.tsx (add skip link)
app/contact/page.tsx (accessibility fixes)
components/Navbar.tsx (ARIA labels)
next.config.mjs (image optimization)
```

### Files to DELETE (after WebP conversion)
```
public/images/hero/before-fouled-tubes.png
public/images/hero/after-stabilised-tubes.png
public/images/home-outcomes-cooling-water.png
public/images/home-verification-instrumentation.png
```

---

## ACCEPTANCE CRITERIA

The implementation is COMPLETE when:

1. **Each industry page displays its OWN unique schematic** that accurately represents that industry's cooling system
2. **ALL images are WebP format** with file sizes reduced by >60%
3. **Lighthouse Accessibility score is >95**
4. **axe-core reports ZERO critical/serious accessibility issues**
5. **Build completes without errors or warnings**
6. **All pages render correctly on mobile and desktop**

---

## NOTES FOR IMPLEMENTER

1. **DO NOT use generic schematics** - each industry has fundamentally different cooling equipment
2. **SVG schematics are preferred** over raster images for scalability and accessibility
3. **Maintain the existing visual style** - use slate/emerald color palette from existing `CoolingSchematic.tsx`
4. **Test each schematic at mobile and desktop sizes** - must be readable at all breakpoints
5. **Include `role="img"` and `aria-labelledby`** on all SVG schematics for accessibility

---

## REFERENCE: Existing CoolingSchematic Style

Use this as the template for all new schematics:
- Background: `bg-white` with `border border-slate-200`
- Primary color: `#10b981` (emerald-500) for TES/active elements
- Secondary color: `#64748b` (slate-500) for equipment
- Tertiary color: `#94a3b8` (slate-400) for secondary flows
- Font size: 7-8px for labels
- Stroke width: 1-2px
- Include legend at bottom
- Include title via `<title>` element for accessibility
