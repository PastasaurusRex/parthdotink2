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
    link?: string;
    website?: string;
}

export const workHistory: WorkItem[] = [
    {
        slug: "project-alpha",
        company: "Project Alpha",
        position: "Senior Frontend Engineer",
        city: "San Francisco, CA",
        startDate: "Jan 2024",
        endDate: "Present",
        description: "A comprehensive dashboard for financial analytics with real-time data visualization.",
        content: `
            <p>Led the frontend development of a high-frequency trading dashboard. Utilized D3.js for complex data visualization and optimized rendering performance for large datasets.</p>
            <h3>Key Achievements</h3>
            <ul>
                <li>Improved render time by 40% using virtualization.</li>
                <li>Implemented real-time WebSocket updates.</li>
            </ul>
        `,
        tags: ["Next.js", "Tailwind", "D3.js"],
        link: "#",
        website: "https://projectalpha.com"
    },
    {
        slug: "neon-commerce",
        company: "Neon Commerce",
        position: "UI/UX Designer",
        city: "New York, NY",
        startDate: "Jun 2023",
        endDate: "Dec 2023",
        description: "Modern e-commerce platform with a focus on speed and conversion features.",
        content: `
            <p>Designed and developed a headless e-commerce theme. Focused on mobile-first design principles and accessibility standards.</p>
        `,
        tags: ["React", "Stripe", "Framer Motion"],
        link: "#",
        website: "https://neoncommerce.io"
    },
    {
        slug: "taskflow",
        company: "TaskFlow",
        position: "Full Stack Developer",
        city: "Austin, TX",
        startDate: "Jan 2022",
        endDate: "May 2023",
        description: "Productivity application helping teams manage workflows efficiently.",
        content: `
            <p>Built a collaborative task management tool from scratch. Handled both backend API design in Node.js and frontend state management with Pinia.</p>
        `,
        tags: ["Vue", "Firebase", "Pinia"],
        link: "#",
        website: "https://taskflow.app"
    },
    {
        slug: "portfolio-v1",
        company: "Freelance",
        position: "Web Developer",
        city: "Remote",
        startDate: "Jan 2021",
        endDate: "Dec 2021",
        description: "Previous iteration of my personal portfolio showcasing early work.",
        content: `
            <p>My first foray into professional web development. Created bespoke websites for local small businesses.</p>
        `,
        tags: ["HTML/CSS", "JavaScript"],
        link: "#",
        website: "https://v1.parth.ink"
    }
];
