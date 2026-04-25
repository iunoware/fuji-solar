// export interface ServiceData {
//   slug: string;
//   title: string;
//   description: string;
//   fullContent: string;
//   bullets: string[];
//   image: string;
//   features?: string[];
// }

// export const servicesData: ServiceData[] = [
//   {
//     slug: "hybrid-systems",
//     title: "Hybrid Solar Panel Systems",
//     description: "The best of both worlds — our hybrid systems combine grid connectivity with battery backup, ensuring you're never without power.",
//     fullContent: "Hybrid solar systems offer the ultimate flexibility and security by combining the advantages of grid-tied and off-grid setups. During the day, the panels power your building and charge the battery. Any excess energy is fed back into the grid. When power outages occur, the smart inverter instantly switches to battery power, so you never experience any interruptions. It is perfect for both residential and commercial buildings aiming for zero downtime and massive reductions in energy bills.",
//     bullets: [
//       "Seamless switching between solar, battery & grid",
//       "Ideal for homes, offices & commercial buildings",
//       "Smart inverter with real-time monitoring",
//       "Reduces electricity bills by up to 90%",
//     ],
//     features: [
//       "Energy Independence",
//       "Battery Backup Included",
//       "Grid Feed-in Capability",
//       "Smart Load Management",
//     ],
//     image: "/images/hybrid.png",
//   },
//   {
//     slug: "on-grid-systems",
//     title: "On-Grid Solar Systems",
//     description: "Feed surplus energy back to the grid and earn credits. Ideal for areas with reliable electricity supply.",
//     fullContent: "On-grid solar systems work seamlessly with your existing physical utility grid. When your solar panels produce more electricity than you consume, the surplus goes directly to the grid, giving you energy credits through Net Metering. Because there are no deeply cycled batteries, these setups are exceptionally cost-effective, drastically lowering or even eliminating your monthly bills with practically zero maintenance.",
//     bullets: [
//       "Net metering — sell excess energy back",
//       "Zero battery maintenance required",
//       "Lower upfront installation cost",
//       "Eligible for government subsidies",
//     ],
//     features: [
//       "High ROI (Return on Investment)",
//       "Zero Maintenance Overhead",
//       "Fast Installation Process",
//       "Government Subsidies Approved",
//     ],
//     image: "/images/on-grid.png",
//   },
//   {
//     slug: "off-grid-systems",
//     title: "Off-Grid Solar Systems",
//     description: "Complete energy independence for remote locations, farms, and rural setups.",
//     fullContent: "An off-grid system functions entirely independently of the traditional power grid. Energy is captured by the panels and stored in heavy-duty battery banks for use at night or during cloudy weather. This makes it an ideal, critical solution for remote locations, agricultural properties, and isolated estates where extending the power line would be prohibitively expensive or physically impossible.",
//     bullets: [
//       "100% independent from the utility grid",
//       "High-capacity deep-cycle battery storage",
//       "Perfect for remote farms & rural areas",
//       "Backup power during extended outages",
//     ],
//     features: [
//       "Total Energy Autonomy",
//       "Deep-Cycle Battery Storage",
//       "Remote Capability",
//       "Robust System Durability",
//     ],
//     image: "/images/off-grid.png",
//   },
//   {
//     slug: "solar-water-pumps",
//     title: "Solar Water Pumps",
//     description: "Reliable solar-powered pumping for agriculture, irrigation, and water supply.",
//     fullContent: "Designed largely for agricultural efficiency, solar water pumps draw power directly from the sun to lift and pump water out of deep wells or open sources. They completely eliminate the recurring costs of diesel and grid electricity. It's an environmentally conscious and highly economical way for farmers to irrigate their fields consistently, maximizing yield across remote farmlands.",
//     bullets: [
//       "Eliminates diesel & electricity pump costs",
//       "AC & DC pump options available",
//       "Suitable for borewells, open wells & rivers",
//       "Low maintenance, long operational life",
//     ],
//     features: [
//       "Zero Fuel Cost",
//       "AC & DC Configurations",
//       "Tough Environmental Resistance",
//       "Agricultural Efficiency",
//     ],
//     image: "/images/water-pumps.png",
//   },
//   {
//     slug: "solar-street-lights",
//     title: "Solar Street Lights",
//     description: "Autonomous, all-in-one street lighting powered entirely by the sun.",
//     fullContent: "Our all-in-one solar street lights represent the peak of autonomous civic lighting. They feature integrated solar panels, high-efficiency lithium batteries, and smart motion sensors perfectly built into a single fixture. By harvesting daylight, they provide brilliant illumination dusk-to-dawn, safely lighting residential lanes, highways, and parks at an operational cost of exactly zero.",
//     bullets: [
//       "Fully autonomous — no wiring needed",
//       "Smart motion & dusk-to-dawn sensors",
//       "Long-life lithium battery built in",
//       "Ideal for roads, parks & housing colonies",
//     ],
//     features: [
//       "Motion Sensor Optimization",
//       "Lithium-ion Integration",
//       "Weatherproof Build",
//       "Zero Trenching Needed",
//     ],
//     image: "/images/street-lights.png",
//   },
//   {
//     slug: "solar-water-heaters",
//     title: "Solar Water Heaters",
//     description: "High-efficiency flat plate and evacuated tube collectors that harness direct sunlight to heat water.",
//     fullContent: "Convert free sunlight into hot water for your daily needs. Our solar water heaters employ highly conductive evacuated tubes and flat plate technology to efficiently absorb thermal radiation. This can reduce your traditional electric water heating load dramatically, dropping your overall energy consumption by up to 80%. An electric backup rod ensures hot water is still accessible on particularly rainy or cloudy days.",
//     bullets: [
//       "Flat plate & evacuated tube collector options",
//       "Cuts water heating costs by up to 80%",
//       "Suitable for homes, hotels & hospitals",
//       "Backup electric heater for cloudy days",
//     ],
//     features: [
//       "Thermal Absorption Technology",
//       "Evacuated Tube Models",
//       "Flat Plate Models",
//       "Durable Heating Storage",
//     ],
//     image: "/images/water-heater.png",
//   },
// ];

// export function getServiceBySlug(slug: string): ServiceData | undefined {
//   return servicesData.find((service) => service.slug === slug);
// }

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
      "Hybrid solar systems combine the technology and advantages of both on-grid and off-grid systems. They can supply power to your building, store energy in batteries, and also export excess power to the grid. During a power outage, unlike traditional on-grid systems, hybrid systems disconnect from the grid and continue supplying power using stored battery energy. This ensures uninterrupted electricity at all times. The system intelligently manages energy by prioritizing solar usage, then battery storage, and finally exporting surplus power using a bidirectional net meter. It is one of the most efficient and flexible solar solutions available today.",

    bullets: [
      "Combines grid connectivity with battery storage",
      "Automatically switches during power outages",
      "Exports excess solar energy to grid",
      "Smart energy management system",
    ],

    features: [
      "Bidirectional Net Meter",
      "Battery Backup System",
      "Smart Hybrid Inverter",
      "Grid + Solar + Battery Integration",
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

    mainImage: "/images/hybrid.png",
    diagramImage: "/images/hybrid-illustration.jpg",
    alt: "best solar panels for home in Tamil Nadu",
  },

  {
    slug: "on-grid-systems",
    title: "On-Grid Solar Systems",
    description:
      "Connected to the utility grid, allowing you to reduce bills and earn from excess energy.",

    fullContent:
      "In an on-grid solar system, the electricity generated from solar panels is directly connected to the utility grid. Power is consumed in real-time, and any excess energy generated is sent back to the grid. A bidirectional net meter measures both import and export of electricity. When your system produces more energy than you consume, you earn credits or income depending on local policies. Since there is no battery storage, these systems are highly cost-effective and require minimal maintenance, making them ideal for homes and commercial buildings with reliable grid access.",

    bullets: [
      "Connected directly to electricity grid",
      "Net metering for power export/import",
      "No battery required",
      "Cost-effective solar solution",
    ],

    features: [
      "Bidirectional Net Meter",
      "Grid Synchronization",
      "High Efficiency Panels",
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
    diagramImage: "/images/on-grid-illustration.webp",
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

    mainImage: "/images/off-grid.png",
    diagramImage: "/images/off-grid-illustration.jpg",
    alt: "solar power system for factories in Tamil Nadu",
  },

  {
    slug: "solar-water-pumps",
    title: "Solar Water Pumps",
    description: "Solar-powered water pumping solution for agriculture and irrigation.",

    fullContent:
      "Solar water pumps use energy generated from solar panels to draw water from borewells, rivers, ponds, and other sources. These systems eliminate the need for diesel or grid electricity, making them extremely cost-effective for farmers. They can operate efficiently in remote locations and support irrigation, livestock, and water supply needs. With options like submersible and surface pumps, solar water pumping systems are highly flexible and reliable.",

    bullets: [
      "Works without electricity or fuel",
      "Suitable for multiple water sources",
      "Ideal for agriculture and irrigation",
      "Low maintenance and long life",
    ],

    features: [
      "Submersible & Surface Pump Options",
      "Direct Solar Operation",
      "Durable Pump Design",
      "Agricultural Integration",
    ],

    benefits: [
      "Zero fuel cost",
      "Environment-friendly solution",
      "Improves agricultural productivity",
      "Ensures water availability year-round",
    ],

    mainImage: "/images/water-pumps.png",
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

    mainImage: "/images/street-lights.png",
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
