export interface WorkItem {
    slug: string;
    company: string;
    position: string;
    city: string;
    startDate: string;
    endDate: string;
    description: string;
    content: string; // HTML or Markdown content for the full page
    tags: string[];
    website?: string;
    websiteLabel?: string;
}

export const workHistory: WorkItem[] = [
    {
        slug: "cossette",
        company: "Cossette",
        position: "Sr. Insights Analyst",
        city: "Toronto, ON",
        startDate: "Feb 2025",
        endDate: "Present",
        description: "Leading insights and analytics for key accounts.",
        content: `
            <p>Description to be added.</p>
        `,
        tags: ["Insights", "Analytics"],
        website: "https://cossette.com",
        websiteLabel: "cossette.com"
    },
    {
        slug: "cbc-sports",
        company: "CBC Sports",
        position: "Producer, Brand Integration",
        city: "Toronto, ON",
        startDate: "Nov 2023",
        endDate: "Sep 2024",
        description: "Managed brand integration and production for the 2024 Olympics & Paralympics campaigns.",
        content: `
            <p>I joined CBC Sports in late 2023 as a Brand Integration Producer in their Content Production Unit (CPU). Our team mainly worked on the social and digital side of branded campaigns for the Summer 2024 Olympics and Paralympics Games.</p>
            <p>The CPU handled the campaigns for 15 brands with a 360° approach — spanning broadcast, digital, and social media. In my role as Producer, I was responsible for overseeing all things production on five brands: Sobeys, BetRivers, Ozempic, Coca-Cola, and Canadian Tire. From getting strategies approved, working on timelines, preparing rate cards, managing associate producers and freelancers, providing creative direction, to getting approvals from the client; I wore a lot of hats during my role.</p>
            <p>I worked on video-on-demand landing pages, content production, social media calendars, and a fully responsive realtime web app for an Olympics quiz game. Liaising with internal and external teams was a crucial part of my role, and this was kicked into high gear during the Games. My role changed to Shift Lead where I managed a team of 5, working on and executing all 15 content campaigns as the Olympics progressed through all 17 days. For the Paralympics, this was pared down to 5 campaigns over 12 days.</p>
            <p>The Paris 2024 Summer Olympics and Paralympics games broke all previous records for broadcast viewership, digital readership, and social media impressions — making it the most successful Olympics campaign for the broadcaster yet.</p>
        `,
        tags: ["Brand Integration", "Production", "Project Management"],
        website: "https://www.cbc.ca/sports/olympics",
        websiteLabel: "cbc.ca"
    },
    {
        slug: "diply",
        company: "Diply",
        position: "Brand Strategist",
        city: "London, ON",
        startDate: "Oct 2020",
        endDate: "Nov 2022",
        description: "Oversaw brand strategy for flagship brands engaging over 78 million users worldwide.",
        content: `
            <p>Diply is a social content platform spanning multiple brands, websites, and social media platforms, catering to more than 130 million fans across Facebook, Instagram, Snapchat, Twitter and TikTok.</p>
            <p>I joined Diply in 2020 as a Social Media Strategist and was promoted to Brand Strategist in 2021, a title I held until I departed in 2022. In my two years at Diply, I was in charge of three flagship brands, overseeing four social media platforms, and engaging a combined audience following of more than 78 million users worldwide.</p>
            <p>Through numerous platform changes, shifts in business models, and the ever-changing landscape of social media, I managed to steer the brands under my purview — as well as my team and the company as a whole — to a period of high growth and meaningful community engagement using organic social growth strategies.</p>
        `,
        tags: ["Brand Strategy", "Social Media", "Growth", "Analytics"],
        website: "https://diply.com",
        websiteLabel: "diply.com"
    },
    {
        slug: "zcyphher",
        company: "Zcyphher",
        position: "Brand Operations Manager",
        city: "Mumbai, India",
        startDate: "Oct 2018",
        endDate: "May 2019",
        description: "Built the roadmap for digital marketing and owned brand strategy for client portfolios.",
        content: `
            <p>Zcyphher is an independent creative agency, established in 2010, with a massive portfolio of work in branding, film, photography, design and digital.</p>
            <p>I joined Zcyphher in 2019 as a Brand Operations Manager on a short-term contract. In my six months at Zcyphher, I was in charge of building a roadmap for their new digital marketing department. The goal was to onboard new and existing clients and help them diversify their business on social media.</p>
            <p>I successfully owned brand strategy for the client portfolios under my purview across a wide range of industries. Collaborating cross-functionally, I stayed on the beat of client-specific business requirements, leading them to a period of high growth and meaningful community engagement using paid and organic social growth strategies.</p>
        `,
        tags: ["Brand Operations", "Digital Marketing", "Strategy"],
        website: "https://zcyphher.com",
        websiteLabel: "zcyphher.com"
    },
    {
        slug: "nba-india",
        company: "NBA India",
        position: "Social Media Manager",
        city: "Mumbai, India",
        startDate: "Sep 2016",
        endDate: "Jun 2018",
        description: "Owned brand strategy, content curation, and community engagement for NBA in India.",
        content: `
            <p>In 2016, the NBA was well on its path to expand their online, digital, and broadcast operations in India.</p>
            <p>I joined the agency, Sooperfly, as a Social Writer in 2016, exclusively for their NBA India client. In 2017, after their first season, NBA India moved to the agency, Monk Media Network, and with them moved our entire team. At Monk Media, I was hired as a Copywriter, a title I held until my departure in 2018.</p>
            <p>In my two seasons with NBA India, I successfully owned brand strategy, curating daily content, reporting on games, and crafting copy. Collaborating cross-functionally, I stayed on the beat of the latest NBA news, trends, as well as the specific requirements and persona of our Indian audience. I was also responsible for crafting engaging digital campaigns for the overarching season, leading to consistently high growth and meaningful community engagement using paid and organic social growth strategies.</p>
        `,
        tags: ["Social Media", "Sports Marketing", "Copywriting"],
        // No website provided
    },
    {
        slug: "storypick",
        company: "Storypick",
        position: "Creative Writer",
        city: "Pune, India",
        startDate: "Jan 2016",
        endDate: "Sep 2016",
        description: "Authored over 200 articles on pop culture, news, and lifestyle for a leading digital media platform.",
        content: `
            <p>Founded in 2013, Storypick is India’s leading independent social news and digital media company that caters to the young online Indian audience.</p>
            <p>I joined Storypick in early 2016 as a Creative Writer, my first media job right out of Engineering. Yes, you read that right. My writing samples were enough to convince them to offer me a position, where I wrote over 200 articles on topics ranging from pop culture, trending news, lifestyle to the ever-evolving landscape of social media content in India. I also did a fair chunk of graphic design, packaging, and SEO for the content I wrote.</p>
            <p>My 8 months at Storypick helped me get my foot in the door in the digital media industry and paved the way for every single position I've held since.</p>
        `,
        tags: ["Creative Writing", "Content Creation", "SEO"],
        website: "https://storypick.com",
        websiteLabel: "storypick.com"
    }
];
