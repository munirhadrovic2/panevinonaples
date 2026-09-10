// Award badges shown in the Awards section, newest first.
// `name` + `year` also feed the Restaurant schema's `award` list (src/lib/seo.js),
// so adding a badge here is all it takes. Keep `name` identical across years
// for recurring awards so they merge into one schema entry.
export const awards = [
    { src: "/images/awards/award-google-2025.png", name: "BusinessRate Top 3 Italian Restaurants in Naples", year: 2025 },
    { src: "/images/awards/2025.png", name: "Restaurant Guru Recommended", year: 2025 },
    { src: "/images/awards/2024-2.jpeg", name: "Naples Award Program Business Hall of Fame", year: 2024 },
    { src: "/images/awards/guru_cert.png", name: "Restaurant Guru Recommended", year: 2024 },
    { src: "/images/awards/2024.png", name: "Restaurantji Certificate of Excellence", year: 2024 },
    { src: "/images/awards/2024-guru.png", name: "Restaurant Guru Recommended", year: 2024 },
    { src: "/images/awards/best_florida.jpg", name: "Guide to Florida Best of Florida, Honorable Mention", year: 2023 },
    { src: "/images/awards/2023.jpg", name: "Naples Award Program Best of Naples: Restaurants", year: 2023 },
    { src: "/images/awards/2022cafebar.jpg", name: "LUXlife Restaurant & Bar Awards: Most Authentic Italian Restaurant", year: 2022 },
    { src: "/images/awards/lux_life.jpg", name: "LUXlife Culinary Excellence: Northern Italian Cuisine", year: 2022 },
    { src: "/images/awards/2021.jpg", name: "Naples Award Program Business Hall of Fame", year: 2021 },
    { src: "/images/awards/slurpy.jpg", name: "Sluurpy Recommended", year: 2021 },
    { src: "/images/awards/2020.jpg", name: "Naples Award Program Business Hall of Fame", year: 2020 },
    { src: "/images/awards/2019.jpg", name: "Naples Award Program Business Hall of Fame", year: 2019 },
    { src: "/images/awards/2018.jpg", name: "Naples Award Program Best of Naples: Local Business", year: 2018 },
];

export const awardAlt = (award) => `${award.name} ${award.year} award for Panevino Ristorante`;

// One entry per award with its years merged, e.g.
// "Naples Award Program Business Hall of Fame (2019, 2020, 2021, 2024)"
export function awardNames() {
    const yearsByName = new Map();
    for (const { name, year } of awards) {
        yearsByName.set(name, new Set([...(yearsByName.get(name) ?? []), year]));
    }
    return [...yearsByName].map(([name, years]) => `${name} (${[...years].sort((a, b) => a - b).join(", ")})`);
}
