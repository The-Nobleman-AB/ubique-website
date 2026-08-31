/**
 * Office directory.
 *
 * Sourced from the addresses and phone numbers published on
 * ubique-systems.com/contact-us. Everything here is real, verifiable contact
 * data — do not add an office without a confirmed address.
 *
 * Offices where only the country is confirmed (no published street address)
 * live in `additionalPresence` below rather than being invented here.
 */

export type Region = "asia-pacific" | "europe" | "americas";

export interface Office {
  /** URL-safe id, also used as the anchor target on /contact. */
  id: string;
  city: string;
  country: string;
  /** ISO 3166-1 alpha-2, used for flag rendering and hreflang. */
  countryCode: string;
  region: Region;
  /** True for the global headquarters. Exactly one office should set this. */
  headquarters?: boolean;
  /** Street address, one line per element. */
  address: string[];
  postcode: string;
  /** E.164 for `tel:` links. Null where no number is published. */
  phone: string | null;
  /** Human-formatted version of the same number. */
  phoneDisplay: string | null;
  email: string;
  /** IANA timezone — used to show local time on the contact page. */
  timezone: string;
}

export const offices: Office[] = [
  {
    id: "kolkata",
    city: "Kolkata",
    country: "India",
    countryCode: "IN",
    region: "asia-pacific",
    headquarters: true,
    address: ["Ubique House", "768 Purbachal Road", "Kalikapur", "West Bengal"],
    postcode: "700078",
    phone: "+913366250000",
    phoneDisplay: "+91 33 6625 0000",
    email: "info-in@ubique-systems.com",
    timezone: "Asia/Kolkata",
  },
  {
    id: "bangalore",
    city: "Bangalore",
    country: "India",
    countryCode: "IN",
    region: "asia-pacific",
    address: [
      "Unit 210 & 211, Second Floor",
      "Richmond Towers",
      "#12 Richmond Road",
      "Karnataka",
    ],
    postcode: "560025",
    phone: "+918068509116",
    phoneDisplay: "+91 80 6850 9116",
    email: "info-in@ubique-systems.com",
    timezone: "Asia/Kolkata",
  },
  {
    id: "pune",
    city: "Pune",
    country: "India",
    countryCode: "IN",
    region: "asia-pacific",
    address: [
      "L-Square, 2nd Floor",
      "Office No. 8, 9 & 10",
      "Plot No. 8 Aundh, Sanghvi Nagar",
      "Maharashtra",
    ],
    postcode: "411007",
    phone: "+912049058050",
    phoneDisplay: "+91 20 4905 8050",
    email: "info-in@ubique-systems.com",
    timezone: "Asia/Kolkata",
  },
  {
    id: "ho-chi-minh-city",
    city: "Ho Chi Minh City",
    country: "Vietnam",
    countryCode: "VN",
    region: "asia-pacific",
    address: [
      "Floor 7, No. 60 Nguyen Van Thu Street",
      "Da Kao Ward",
      "District 1",
    ],
    postcode: "700000",
    phone: "+842835002828",
    phoneDisplay: "+84 (28) 3500 2828",
    email: "info@ubique-systems.com",
    timezone: "Asia/Ho_Chi_Minh",
  },
  {
    id: "london",
    city: "London",
    country: "United Kingdom",
    countryCode: "GB",
    region: "europe",
    address: ["Suite 13, Beaufort Court", "Admirals Way", "Canary Wharf"],
    postcode: "E14 9XL",
    phone: "+442079878811",
    phoneDisplay: "+44 (0) 20 7987 8811",
    email: "info-uk@ubique-systems.com",
    timezone: "Europe/London",
  },
  {
    id: "eching",
    city: "Eching",
    country: "Germany",
    countryCode: "DE",
    region: "europe",
    address: ["Ubique Systems GmbH", "Danziger Straße 2"],
    postcode: "85386",
    phone: null,
    phoneDisplay: null,
    email: "info-de@ubique-systems.com",
    timezone: "Europe/Berlin",
  },
  {
    id: "copenhagen",
    city: "Copenhagen",
    country: "Denmark",
    countryCode: "DK",
    region: "europe",
    address: ["Ubique Systems ApS", "Business Centre 10c Lyngby", "Hovedgade"],
    postcode: "2800",
    phone: "+4549218700",
    phoneDisplay: "+45 4921 8700",
    email: "info-dk@ubique-systems.com",
    timezone: "Europe/Copenhagen",
  },
  {
    id: "prague",
    city: "Prague",
    country: "Czech Republic",
    countryCode: "CZ",
    region: "europe",
    address: ["Korunní 2569/108", "Vinohrady", "Praha 10"],
    postcode: "101 00",
    phone: null,
    phoneDisplay: null,
    email: "info@ubique-systems.com",
    timezone: "Europe/Prague",
  },
  {
    id: "bratislava",
    city: "Bratislava",
    country: "Slovakia",
    countryCode: "SK",
    region: "europe",
    address: ["Jelenia 1"],
    postcode: "811 05",
    phone: null,
    phoneDisplay: null,
    email: "info@ubique-systems.com",
    timezone: "Europe/Bratislava",
  },
  {
    id: "norwalk",
    city: "Norwalk",
    country: "United States",
    countryCode: "US",
    region: "americas",
    address: ["15 Cross Street", "Suite D", "Connecticut"],
    postcode: "CT 06851",
    phone: "+12036925257",
    phoneDisplay: "+1 (203) 692 5257",
    email: "info-us@ubique-systems.com",
    timezone: "America/New_York",
  },
];

/**
 * Countries with a confirmed Ubique presence but no published street address.
 * Listed by name only — deliberately not given invented addresses.
 */
export const additionalPresence: {
  country: string;
  countryCode: string;
  region: Region;
}[] = [
  { country: "Netherlands", countryCode: "NL", region: "europe" },
  { country: "Romania", countryCode: "RO", region: "europe" },
  { country: "France", countryCode: "FR", region: "europe" },
  { country: "Poland", countryCode: "PL", region: "europe" },
  { country: "Belgium", countryCode: "BE", region: "europe" },
  { country: "Austria", countryCode: "AT", region: "europe" },
  { country: "Portugal", countryCode: "PT", region: "europe" },
];

export const regionLabels: Record<Region, string> = {
  "asia-pacific": "Asia-Pacific",
  europe: "Europe",
  americas: "Americas",
};

export function officesByRegion(region: Region): Office[] {
  return offices.filter((office) => office.region === region);
}

export function officesByCountry(countryCode: string): Office[] {
  return offices.filter((office) => office.countryCode === countryCode);
}

export function getOffice(id: string): Office | undefined {
  return offices.find((office) => office.id === id);
}

export const headquarters: Office =
  offices.find((office) => office.headquarters) ?? offices[0];

/** Total countries with a presence — the source for the "15+ countries" claim. */
export const countryCount: number = new Set([
  ...offices.map((o) => o.countryCode),
  ...additionalPresence.map((p) => p.countryCode),
]).size;

/** Regional enquiry inboxes, for the contact page and footer. */
export const regionalInboxes = [
  { label: "India & Asia-Pacific", email: "info-in@ubique-systems.com" },
  { label: "United Kingdom", email: "info-uk@ubique-systems.com" },
  { label: "Germany & DACH", email: "info-de@ubique-systems.com" },
  { label: "Nordics", email: "info-dk@ubique-systems.com" },
  { label: "United States", email: "info-us@ubique-systems.com" },
  { label: "All other enquiries", email: "info@ubique-systems.com" },
];
