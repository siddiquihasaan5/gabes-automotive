/**
 * GABE'S AUTOMOTIVE & TRANSMISSION
 * Central verified business information and data dictionary.
 * Strictly adheres to verified parameters: email-only contact, no phone numbers, light-duty vehicle specialization.
 */

export const BUSINESS_INFO = {
  name: "GABE'S AUTOMOTIVE & TRANSMISSION",
  shortName: "GABE'S",
  tagline: "Reliable Mechanical Service for the Road Ahead.",
  category: "Automotive repair, transmission services, engine repair, and mechanical maintenance.",
  location: "Belton, Texas",
  email: "gabe@gabesautotx.com",
  mailtoUrl: "mailto:gabe@gabesautotx.com",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=6971+W+US+Highway+190+Belton+TX+76513",
  address: {
    street: "6971 W US Highway 190",
    city: "Belton",
    state: "TX",
    zip: "76513",
    country: "United States",
    formatted: "6971 W US Highway 190, Belton, TX 76513, United States",
  },
  hours: [
    { days: "Monday–Friday", time: "8:00 AM–5:00 PM", isOpenDay: true },
    { days: "Saturday–Sunday", time: "Closed", isOpenDay: false },
  ],
} as const;

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  keyPoints: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "transmission",
    title: "Transmission Services & Repairs",
    shortDescription: "Mechanical diagnostics and precision repair services for light-duty vehicle transmissions.",
    fullDescription: "The transmission delivers engine power safely and smoothly to the wheels. GABE'S AUTOMOTIVE & TRANSMISSION provides transmission-related maintenance, mechanical inspections, valve body servicing, and repair work to address slipping, erratic shifting, fluid breakdown, or mechanical wear.",
    keyPoints: [
      "Transmission inspection and fluid condition diagnostics",
      "Torque converter, solenoids, and clutch band evaluation",
      "Manual and automatic light-duty drivetrain servicing",
      "Work scoped strictly to vehicle specifications and shop capabilities"
    ]
  },
  {
    id: "engine-repairs-replacements",
    title: "Engine Repairs & Replacements",
    shortDescription: "Mechanical engine diagnostics, component repairs, and complete engine replacements.",
    fullDescription: "From persistent mechanical engine noises, check-engine issues, and overheating concerns to timing components, head gaskets, and full engine replacements, our engine services address core mechanical problems with precision diagnostics and manufacturer-guideline installations.",
    keyPoints: [
      "Comprehensive mechanical engine evaluation and compression checks",
      "Timing chains, water pumps, tensioners, and gasket repairs",
      "Complete engine replacement and platform alignment when repair is not feasible",
      "Direct email consultation regarding engine replacement feasibility"
    ]
  },
  {
    id: "air-conditioning",
    title: "Air Conditioning",
    shortDescription: "Complete automotive A/C diagnostics, refrigerant leak detection, and climate repair.",
    fullDescription: "Texas driving demands dependable vehicle air conditioning. We perform thorough air conditioning inspections, electronic leak detection, system evacuation, precision refrigerant recharges (both R-134a and modern R-1234yf systems), and compressor or condenser replacements to keep your vehicle cool.",
    keyPoints: [
      "A/C performance testing and temperature differential checks",
      "Electronic and UV dye refrigerant leak detection",
      "R-134a and modern R-1234yf system evacuation & recharge",
      "Compressor, condenser, evaporator, and cabin air filter servicing"
    ]
  },
  {
    id: "brake-service",
    title: "Brake Service & Repairs",
    shortDescription: "Straightforward brake maintenance, pad and rotor service, and hydraulic repairs.",
    fullDescription: "Reliable braking performance is non-negotiable for everyday road safety. We handle complete light-duty brake maintenance and mechanical component repair, addressing worn friction pads, grooved rotors, brake fluid moisture contamination, and caliper hardware.",
    keyPoints: [
      "Brake pad and ceramic/semi-metallic friction material replacement",
      "Rotor inspection, measurement, and precision replacement",
      "Hydraulic lines, master cylinder, and caliper hardware inspection",
      "Brake fluid flush and bleeding for firm pedal response"
    ]
  },
  {
    id: "oil-changes",
    title: "Oil Changes",
    shortDescription: "Essential engine lubrication and filter maintenance for drivetrain longevity.",
    fullDescription: "Regular oil and filter changes are the single most effective maintenance item for internal combustion engine longevity. Fresh oil reduces internal friction, cools critical bearing surfaces, and prevents sludge accumulation inside light-duty engines.",
    keyPoints: [
      "Full synthetic, synthetic-blend, and conventional oil changes matching factory spec",
      "Premium oil filter replacement with proper seal seating",
      "Multi-point visual inspection of under-hood fluids and belts",
      "Prompt service to keep your daily driver running smoothly"
    ]
  },
  {
    id: "general-maintenance",
    title: "General Maintenance",
    shortDescription: "Routine preventative maintenance, fluid servicing, tune-ups, and suspension upkeep.",
    fullDescription: "Vehicles rely on interconnected mechanical systems including cooling, suspension, steering, exhaust, and electrical charging. We perform routine scheduled maintenance and general mechanical repairs tailored to light-duty cars, SUVs, and pickup trucks.",
    keyPoints: [
      "Spark plug replacement, ignition coils, and tune-up services",
      "Cooling system flushes, thermostats, and radiator hose replacements",
      "Battery health testing, starter motor, and alternator charging inspection",
      "Suspension struts, shocks, ball joints, and tie-rod inspections"
    ]
  }
];

export interface LightDutyPlatform {
  title: string;
  scope: string;
  description: string;
  examples: string;
  highlights: string[];
}

export const LIGHT_DUTY_PLATFORMS: LightDutyPlatform[] = [
  {
    title: "Passenger Sedans & Coupes",
    scope: "Compact, Midsize & Full-Size Cars",
    description: "Complete mechanical servicing and transmission upkeep for everyday passenger vehicles and hybrid commuter cars.",
    examples: "Civic, Accord, Camry, Corolla, Altima, Malibu, Fusion, Impreza & similar models",
    highlights: ["Transmission fluid & mechanical shifting", "Brake pad & rotor replacement", "Check engine & A/C climate servicing"]
  },
  {
    title: "SUVs & Crossovers",
    scope: "Compact, Midsize & 3-Row Family SUVs",
    description: "Specialized maintenance for modern AWD, 4WD, and FWD sport utility vehicles built for family travel.",
    examples: "Explorer, CR-V, RAV4, Highlander, Tahoe, Grand Cherokee, Pilot, Outback & similar models",
    highlights: ["Drivetrain & transfer case checks", "Engine cooling & radiator care", "Suspension & steering upkeep"]
  },
  {
    title: "Light Pickups & Half-Ton Trucks",
    scope: "Half-Ton (1500 Class) & Midsize Trucks",
    description: "Mechanical repairs and drivetrain servicing for personal and light-duty work pickups.",
    examples: "Ford F-150, Silverado 1500, Ram 1500, GMC Sierra 1500, Tacoma, Tundra, Ranger & Colorado",
    highlights: ["Heavy-wear brake & rotor service", "Transmission rebuild & fluid service", "Complete engine repairs & replacements"]
  },
  {
    title: "Minivans & Personal Wagons",
    scope: "Family Minivans & Utility Wagons",
    description: "Dependable routine maintenance and mechanical repairs to keep family vehicles safe on the road.",
    examples: "Sienna, Odyssey, Pacifica, Caravan, Outback & similar platforms",
    highlights: ["Air conditioning system recharges", "Engine oil & filter preventative care", "Factory-spec fluid replacements"]
  }
];

export const IMAGES = {
  logo: "/images/gabes-logo.jpg",
  hero: "/images/engine-ac-diagnostics.jpg",
  shop: "/images/engine-ac-diagnostics.jpg",
  engine: "/images/engine-ac-diagnostics.jpg",
  ase: "/images/ase-certified.jpg",
  publicUrls: {
    logo: "/images/gabes-logo.jpg",
    hero: "/images/engine-ac-diagnostics.jpg",
    shop: "/images/engine-ac-diagnostics.jpg",
    engine: "/images/engine-ac-diagnostics.jpg",
    ase: "/images/ase-certified.jpg"
  }
} as const;
