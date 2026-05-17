#!/usr/bin/env python3

from __future__ import annotations

from pathlib import Path
from typing import Iterable

from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageOps


WIDTH = 1200
HEIGHT = 630
ROOT = Path(__file__).resolve().parent.parent
PUBLIC_DIR = ROOT / "public"
OUTPUT_DIR = PUBLIC_DIR / "og"
LOGO_PATH = PUBLIC_DIR / "logo.png"
FONT_DIR = Path("/System/Library/Fonts/Supplemental")


PAGES = [
    {
        "filename": "site.png",
        "eyebrow": "Mexel Energy Sustain",
        "title": "Thermal Efficiency Solutions for Cooling-Water Systems",
        "description": "TES combines Mexel(R)432 chemistry, IoT dosing and verification to improve condenser performance on wet-cooled assets.",
        "highlights": ["Mexel 432", "IoT Dosing", "Verified Performance"],
        "panel_title": "TES Framework",
        "panel_rows": [("Baseline", "3-4 weeks"), ("Intervention", "4-6 weeks"), ("Review", "Measured")],
        "accent": (16, 185, 129),
        "accent_soft": (45, 212, 191),
    },
    {
        "filename": "home.png",
        "eyebrow": "Cooling-Water Efficiency",
        "title": "Cooling-Water Efficiency, Verified in Operation",
        "description": "TES restores condenser performance with disciplined baselines, targeted Mexel(R)432 dosing and review against plant data.",
        "highlights": ["Baseline", "Intervention", "Review"],
        "panel_title": "Core Outcomes",
        "panel_rows": [("TR / TTD", "Recovered"), ("Vacuum", "Stabilized"), ("Fouling", "Reduced")],
        "accent": (16, 185, 129),
        "accent_soft": (110, 231, 183),
    },
    {
        "filename": "contact.png",
        "eyebrow": "Technical Enquiry",
        "title": "Talk to the Team Behind TES",
        "description": "Start a plant-specific conversation about pilots, cooling-water treatment, baseline review and condenser optimization.",
        "highlights": ["Direct Technical Contact", "Power Stations", "Industrial Facilities"],
        "panel_title": "Enquiry Focus",
        "panel_rows": [("Response", "1-2 days"), ("Topics", "Pilots / Audits"), ("Route", "Web + Email")],
        "accent": (14, 165, 233),
        "accent_soft": (56, 189, 248),
    },
    {
        "filename": "company-profile.png",
        "eyebrow": "Company Profile",
        "title": "Inside Mexel Energy Sustain",
        "description": "An overview of TES methodology, deployment model and the engineering case for Mexel(R)432 in heavy industry.",
        "highlights": ["Interactive Profile", "TES Overview", "Delivery Model"],
        "panel_title": "Profile Coverage",
        "panel_rows": [("Scope", "TES + Mexel"), ("Audience", "Engineering"), ("Format", "Interactive")],
        "accent": (245, 158, 11),
        "accent_soft": (251, 191, 36),
    },
    {
        "filename": "mexel432.png",
        "eyebrow": "Product Data Sheet",
        "title": "Mexel(R)432 Performance Emulsion",
        "description": "Filming polyamine chemistry for biofouling control, corrosion inhibition and scale prevention in cooling-water systems.",
        "highlights": ["Filming Amine", "Pulsed Dosing", "Eco Profile"],
        "panel_title": "Product Signals",
        "panel_rows": [("Mechanism", "Surface film"), ("Application", "Pulsed"), ("Purpose", "Clean heat transfer")],
        "accent": (59, 130, 246),
        "accent_soft": (96, 165, 250),
    },
    {
        "filename": "knowledge-hub.png",
        "eyebrow": "Knowledge Hub",
        "title": "Engineering Guidance, FAQs and Evidence",
        "description": "A central reference for engineers evaluating TES on wet-cooled power stations and industrial cooling systems.",
        "highlights": ["Methodology", "FAQ", "Evidence Library"],
        "panel_title": "Hub Sections",
        "panel_rows": [("Guidance", "Engineering"), ("Evidence", "Case studies"), ("Use", "Audit-ready")],
        "accent": (16, 185, 129),
        "accent_soft": (110, 231, 183),
    },
    {
        "filename": "case-studies.png",
        "eyebrow": "Case Studies",
        "title": "Field Evidence from TES Deployments",
        "description": "Measured results, intervention context and lessons learned from Eskom sites and international Mexel(R)432 applications.",
        "highlights": ["Baseline Data", "Measured Results", "Lessons Learned"],
        "panel_title": "Study Structure",
        "panel_rows": [("Before", "Baseline"), ("During", "Treatment"), ("After", "Observed results")],
        "accent": (245, 158, 11),
        "accent_soft": (248, 113, 113),
    },
]


def load_font(name: str, size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    path = FONT_DIR / name
    if path.exists():
        return ImageFont.truetype(str(path), size=size)
    return ImageFont.load_default()


def clamp(value: float) -> int:
    return max(0, min(255, int(round(value))))


def mix(a: int, b: int, ratio: float) -> int:
    return clamp(a + (b - a) * ratio)


def mix_color(start: tuple[int, int, int], end: tuple[int, int, int], ratio: float) -> tuple[int, int, int]:
    return tuple(mix(s, e, ratio) for s, e in zip(start, end))


def wrap_text(text: str, font: ImageFont.ImageFont, max_width: int) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current: list[str] = []
    for word in words:
        trial = " ".join([*current, word])
        trial_width = font.getbbox(trial)[2]
        if current and trial_width > max_width:
            lines.append(" ".join(current))
            current = [word]
        else:
            current.append(word)
    if current:
        lines.append(" ".join(current))
    return lines


def line_height(font: ImageFont.ImageFont, multiplier: float = 1.15) -> int:
    sample = font.getbbox("Ag")
    return int((sample[3] - sample[1]) * multiplier)


def draw_background(image: Image.Image, accent: tuple[int, int, int], accent_soft: tuple[int, int, int]) -> None:
    draw = ImageDraw.Draw(image)
    top = (2, 6, 23)
    bottom = (15, 23, 42)
    for y in range(HEIGHT):
        ratio = y / (HEIGHT - 1)
        draw.line([(0, y), (WIDTH, y)], fill=mix_color(top, bottom, ratio))

    glow = Image.new("RGBA", image.size, (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.ellipse((-220, -120, 520, 600), fill=(*accent, 95))
    glow_draw.ellipse((720, -180, 1320, 320), fill=(*accent_soft, 70))
    glow_draw.ellipse((780, 320, 1320, 860), fill=(244, 63, 94, 60))
    glow = glow.filter(ImageFilter.GaussianBlur(80))
    image.alpha_composite(glow)

    grid = Image.new("RGBA", image.size, (0, 0, 0, 0))
    grid_draw = ImageDraw.Draw(grid)
    for x in range(0, WIDTH, 48):
        grid_draw.line([(x, 0), (x, HEIGHT)], fill=(255, 255, 255, 16), width=1)
    for y in range(0, HEIGHT, 48):
        grid_draw.line([(0, y), (WIDTH, y)], fill=(255, 255, 255, 12), width=1)
    image.alpha_composite(grid)

    draw.rounded_rectangle((46, 48, WIDTH - 46, HEIGHT - 48), radius=36, outline=(255, 255, 255, 30), width=2)


def draw_logo(image: Image.Image) -> None:
    draw = ImageDraw.Draw(image)
    shadow = Image.new("RGBA", image.size, (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow)
    shadow_draw.rounded_rectangle((78, 62, 370, 170), radius=28, fill=(0, 0, 0, 100))
    shadow = shadow.filter(ImageFilter.GaussianBlur(22))
    image.alpha_composite(shadow)

    draw.rounded_rectangle((84, 68, 364, 164), radius=26, fill=(255, 255, 255, 244), outline=(255, 255, 255, 50), width=2)
    logo = Image.open(LOGO_PATH).convert("RGB")
    logo = ImageOps.contain(logo, (220, 72))
    x = 112 + (220 - logo.width) // 2
    y = 80 + (72 - logo.height) // 2
    image.paste(logo, (x, y))


def draw_title_block(
    image: Image.Image,
    eyebrow: str,
    title: str,
    description: str,
    highlights: Iterable[str],
    accent: tuple[int, int, int],
) -> None:
    draw = ImageDraw.Draw(image)
    eyebrow_font = load_font("Arial Bold.ttf", 24)
    title_font = load_font("Arial Bold.ttf", 66)
    description_font = load_font("Arial.ttf", 28)
    pill_font = load_font("Arial Bold.ttf", 18)

    left = 88
    top = 214

    draw.rounded_rectangle((left, top - 18, left + 18, top), radius=9, fill=(*accent, 255))
    draw.text((left + 30, top - 36), eyebrow.upper(), font=eyebrow_font, fill=(212, 255, 236))

    title_lines = wrap_text(title, title_font, 560)
    y = top
    for line in title_lines[:3]:
        draw.text((left, y), line, font=title_font, fill=(255, 255, 255))
        y += line_height(title_font, 1.05)

    description_top = y + 18
    description_lines = wrap_text(description, description_font, 560)
    for line in description_lines[:4]:
        draw.text((left, description_top), line, font=description_font, fill=(208, 218, 232))
        description_top += line_height(description_font, 1.28)

    pill_y = HEIGHT - 102
    pill_x = left
    for label in highlights:
        text_width = pill_font.getbbox(label)[2]
        pill_width = text_width + 34
        draw.rounded_rectangle(
            (pill_x, pill_y, pill_x + pill_width, pill_y + 42),
            radius=21,
            fill=(255, 255, 255, 28),
            outline=(*accent, 120),
            width=2,
        )
        draw.text((pill_x + 17, pill_y + 11), label, font=pill_font, fill=(247, 250, 252))
        pill_x += pill_width + 12


def draw_signal_panel(
    image: Image.Image,
    panel_title: str,
    panel_rows: list[tuple[str, str]],
    accent: tuple[int, int, int],
    accent_soft: tuple[int, int, int],
) -> None:
    draw = ImageDraw.Draw(image)
    panel_box = (748, 112, 1110, 534)

    panel_shadow = Image.new("RGBA", image.size, (0, 0, 0, 0))
    panel_shadow_draw = ImageDraw.Draw(panel_shadow)
    panel_shadow_draw.rounded_rectangle(panel_box, radius=32, fill=(0, 0, 0, 120))
    panel_shadow = panel_shadow.filter(ImageFilter.GaussianBlur(30))
    image.alpha_composite(panel_shadow)

    draw.rounded_rectangle(
        panel_box,
        radius=30,
        fill=(9, 15, 30, 215),
        outline=(255, 255, 255, 30),
        width=2,
    )

    title_font = load_font("Arial Bold.ttf", 28)
    label_font = load_font("Arial Bold.ttf", 17)
    value_font = load_font("Arial Bold.ttf", 26)
    small_font = load_font("Arial.ttf", 18)

    draw.text((782, 144), panel_title.upper(), font=label_font, fill=(*accent_soft, 255))

    chart_box = (782, 182, 1078, 316)
    draw.rounded_rectangle(chart_box, radius=22, fill=(255, 255, 255, 20), outline=(255, 255, 255, 24), width=1)

    for offset in range(0, 5):
        y = 210 + offset * 22
        draw.line((808, y, 1050, y), fill=(148, 163, 184, 40), width=1)

    baseline_points = [(810, 284), (872, 250), (934, 256), (996, 224), (1050, 236)]
    improved_points = [(810, 274), (872, 232), (934, 214), (996, 184), (1050, 168)]
    draw.line(baseline_points, fill=(248, 113, 113, 185), width=4, joint="curve")
    draw.line(improved_points, fill=(*accent, 255), width=5, joint="curve")

    for point in improved_points:
        draw.ellipse((point[0] - 5, point[1] - 5, point[0] + 5, point[1] + 5), fill=(*accent_soft, 255))

    draw.text((808, 326), "Baseline drift", font=small_font, fill=(248, 113, 113))
    draw.text((940, 326), "Post-intervention recovery", font=small_font, fill=(219, 234, 254))

    row_top = 378
    for index, (label, value) in enumerate(panel_rows):
        y = row_top + index * 52
        draw.rounded_rectangle((782, y, 1078, y + 42), radius=18, fill=(255, 255, 255, 18))
        draw.text((802, y + 11), label.upper(), font=label_font, fill=(148, 163, 184))
        value_width = value_font.getbbox(value)[2]
        draw.text((1060 - value_width, y + 7), value, font=value_font, fill=(255, 255, 255))

    draw.text((782, 486), "mexelenergysustain.com", font=small_font, fill=(186, 200, 214))
    draw.text((1022, 486), "TES", font=title_font, fill=(*accent_soft, 255))


def create_image(config: dict[str, object]) -> None:
    image = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 255))
    accent = config["accent"]
    accent_soft = config["accent_soft"]
    draw_background(image, accent, accent_soft)
    draw_logo(image)
    draw_title_block(
        image,
        config["eyebrow"],
        config["title"],
        config["description"],
        config["highlights"],
        accent,
    )
    draw_signal_panel(
        image,
        config["panel_title"],
        config["panel_rows"],
        accent,
        accent_soft,
    )
    output_path = OUTPUT_DIR / config["filename"]
    image.convert("RGB").save(output_path, format="PNG", optimize=True)


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    for config in PAGES:
        create_image(config)
        print(f"generated {OUTPUT_DIR / config['filename']}")


if __name__ == "__main__":
    main()
