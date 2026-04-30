export interface ServiceData {
  slug: string;
  title: string;
  description: string;
  fullContent: string;
  bullets: string[];
  features?: string[];
  benefits?: string[];
  disadvantages?: string[];
  mainImage: string;
  diagramImage?: string;
  alt: string;
}

export const servicesData: ServiceData[] = [
  {
    slug: "hybrid-systems",
    title: "Hybrid Solar Panel Systems",
    description:
      "Combines the advantages of on-grid and off-grid systems with battery backup for uninterrupted power.",

    fullContent:
      "Hybrid solar systems combine the advantages of both on-grid and off-grid systems, offering reliable power throughout the day and night. During the day, the system generates electricity for immediate use while storing excess energy in a connected battery bank. Surplus power is exported to the grid through a bi-directional meter. At night or during outages, the system operates using stored battery energy, ensuring continuous power supply with efficient energy utilization.",

    bullets: [
      "Combines benefits of on-grid and off-grid systems",
      "Supplies power during the day and stores excess energy",
      "Exports surplus energy to the grid via bi-directional meter",
      "Uses stored battery power for night and backup needs",
    ],

    features: [
      "Bi-directional Net Meter",
      "Battery Bank Storage",
      "Hybrid Inverter System",
      "Grid, Solar & Battery Integration",
    ],

    benefits: [
      "Uninterrupted power supply even during outages",
      "Maximum utilization of solar energy",
      "Reduced electricity bills",
      "Flexible and future-ready system",
    ],

    disadvantages: [
      "Higher initial installation cost",
      "Requires battery maintenance over time",
    ],

    mainImage: "/images/hybrid-solar-system-tamilnadu.webp",
    diagramImage: "/images/solar-panel-dealers-madurai.jpg",
    alt: "best solar panels for home in Tamil Nadu",
  },

  {
    slug: "on-grid-systems",
    title: "On-Grid Solar Systems",
    description:
      "Connected to the utility grid, allowing you to reduce bills and earn from excess energy.",

    fullContent:
      "On-grid solar power systems generate electricity during the day for immediate use while supplying excess energy to the grid. These systems do not require battery storage, making them suitable for offices, schools, hospitals, and residential buildings with high daytime energy consumption. A bi-directional meter tracks the electricity exported to the grid, and the value is adjusted in your electricity bill, helping reduce overall energy costs.",

    bullets: [
      "Generates power during the day for direct consumption",
      "Exports surplus energy to the grid via bi-directional meter",
      "No battery required for operation",
      "Ideal for high daytime energy usage buildings",
    ],

    features: [
      "Bi-directional Net Meter",
      "Grid Connected System",
      "Daytime Power Utilization",
      "Low Maintenance Setup",
    ],

    benefits: [
      "Zero or minimal electricity bills",
      "Earn income from excess energy generation",
      "Low initial cost compared to other systems",
      "Simple and easy maintenance",
    ],

    disadvantages: [
      "Does not work during power outages",
      "No backup power without batteries",
    ],

    mainImage: "/images/on-grid.png",
    diagramImage: "/images/solar-panel-installation-cost-chennai.webp",
    alt: "rooftop solar installation for house Tamil Nadu",
  },

  {
    slug: "off-grid-systems",
    title: "Off-Grid Solar Systems",
    description:
      "Complete energy independence with battery backup, ideal for remote locations.",

    fullContent:
      "Off-grid solar systems operate completely independently from the utility grid. These systems generate electricity through solar panels and store it in battery banks for continuous usage. Even during nighttime or cloudy conditions, power is supplied through stored energy. For critical applications, diesel generators can also be integrated as backup. This makes off-grid systems ideal for industries, farms, and remote areas where grid access is unavailable or unreliable. While highly dependable, these systems require careful planning due to battery storage and maintenance needs.",

    bullets: [
      "Completely independent from utility grid",
      "Battery-based energy storage system",
      "Ideal for remote and rural locations",
      "Supports generator backup integration",
    ],

    features: [
      "Deep-Cycle Battery Storage",
      "Standalone Power System",
      "Generator Compatibility",
      "High Reliability Design",
    ],

    benefits: [
      "24/7 power availability",
      "Perfect for remote areas",
      "No dependency on electricity grid",
      "Reliable during outages and weather changes",
    ],

    disadvantages: [
      "Higher capital investment",
      "Battery maintenance required",
      "Requires more installation space",
    ],

    mainImage: "/images/off-grid-solar-system-tamil-nadu.webp",
    diagramImage: "/images/solar-panel-installation-cost-madurai.jpg",
    alt: "solar power system for factories in Tamil Nadu",
  },

  {
    slug: "solar-water-pumps",
    title: "Solar Water Pumps",
    description: "Solar-powered water pumping solution for agriculture and irrigation.",

    fullContent:
      "A solar water pumping system functions as a mini solar power plant that can be installed anywhere, even without access to electricity. It uses a calibrated solar array matched to the pump capacity for efficient operation. These systems can run various types of water pumps for irrigation, as well as for use in homes, educational institutions, and hospitals, making them a reliable and flexible water supply solution.",

    bullets: [
      "Operates independently without grid power",
      "Solar array matched to pump capacity",
      "Supports irrigation and multiple applications",
      "Suitable for homes, institutions & farms",
    ],

    features: [
      "Calibrated Solar Panel System",
      "Compatible with Various Pump Types",
      "Stand-alone Operation",
      "Multi-Application Usage",
    ],

    benefits: [
      "Zero fuel cost",
      "Environment-friendly solution",
      "Improves agricultural productivity",
      "Ensures water availability year-round",
    ],

    mainImage: "/images/best-solar-company-in-tirunelveli.webp",
    alt: "commercial solar installation Tamil Nadu",
  },

  {
    slug: "solar-street-lights",
    title: "Solar Street Lights",
    description: "Autonomous lighting system powered entirely by solar energy.",

    fullContent:
      "Solar street lights are standalone lighting systems that operate using solar energy. These lights come with built-in batteries, sensors, and LED systems. They automatically turn on at night and off during the day. Advanced models include motion sensors and CCTV integration for security. They are ideal for roads, parks, farms, and remote areas where grid-based lighting is difficult or expensive.",

    bullets: [
      "No wiring required",
      "Automatic operation with sensors",
      "Built-in battery system",
      "Optional CCTV integration",
    ],

    features: [
      "Motion Sensor Technology",
      "Dusk-to-Dawn Automation",
      "Integrated Battery System",
      "Weatherproof Design",
    ],

    benefits: [
      "Zero electricity cost",
      "Easy installation",
      "Low maintenance",
      "Improves safety and visibility",
    ],

    mainImage: "/images/best-solar-company-in-tamilnadu.webp",
    alt: "industrial solar solutions Tamil Nadu",
  },

  {
    slug: "solar-water-heaters",
    title: "Solar Water Heaters",
    description: "Efficient water heating using solar energy for homes and industries.",

    fullContent:
      "Solar water heaters use sunlight to heat water efficiently, reducing the need for electricity. In countries with high solar exposure, this system can significantly reduce electricity bills. Water is stored in insulated tanks to maintain temperature even at night. Backup electric heaters ensure hot water availability during cloudy days. These systems are ideal for homes, hotels, hospitals, and industries.",

    bullets: [
      "Uses solar energy for water heating",
      "Reduces electricity consumption",
      "Works even at night with storage",
      "Backup heating option available",
    ],

    features: [
      "Insulated Storage Tanks",
      "Evacuated Tube Technology",
      "Flat Plate Collectors",
      "Backup Heating System",
    ],

    benefits: [
      "Reduces energy bills significantly",
      "Environment-friendly solution",
      "Low maintenance cost",
      "Long lifespan system",
    ],

    mainImage: "/images/water-heater.png",
    alt: "solar panel installation Chennai",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((service) => service.slug === slug);
}
