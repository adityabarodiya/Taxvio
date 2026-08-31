// app/data/gj-cities.ts
// gujarat cities and towns data for the app
export type GJCity = {
  name: string;
  district: string;
  region: string;
  tier: 1 | 2 | 3;
};

export const GJ_REGIONS: Record<string, string[]> = {
  "North Gujarat": [
    "Gandhinagar", "Ahmedabad", "Mehsana", "Patan", "Banaskantha", "Sabarkantha",
  ],
  "Central Gujarat": [
    "Anand", "Kheda", "Panchmahal", "Dahod", "Mahisagar", "Chhota Udaipur",
  ],
  "South Gujarat": [
    "Surat", "Tapi", "Navsari", "Valsad", "Dang", "Narmada", "Bharuch",
  ],
  "Saurashtra": [
    "Rajkot", "Jamnagar", "Porbandar", "Junagadh", "Amreli", "Bhavnagar", "Morbi", "Gir Somnath", "Devbhumi Dwarka", "Botad",
  ],
  "Kutch": [
    "Kutch",
  ],
};

export const GJ_CITIES: GJCity[] = [
  // ── Tier 1 — District headquarters (all 33 districts) ─────────────
  { name: "Ahmedabad",       district: "Ahmedabad",          region: "North Gujarat",        tier: 1 },
  { name: "Surat",           district: "Surat",              region: "South Gujarat",        tier: 1 },
  { name: "Vadodara",        district: "Vadodara",           region: "Central Gujarat",      tier: 1 },
  { name: "Rajkot",          district: "Rajkot",             region: "Saurashtra",           tier: 1 },
  { name: "Bhavnagar",       district: "Bhavnagar",          region: "Saurashtra",           tier: 1 },
  { name: "Jamnagar",        district: "Jamnagar",           region: "Saurashtra",           tier: 1 },
  { name: "Junagadh",        district: "Junagadh",           region: "Saurashtra",           tier: 1 },
  { name: "Gandhinagar",     district: "Gandhinagar",        region: "North Gujarat",        tier: 1 },
  { name: "Anand",           district: "Anand",              region: "Central Gujarat",      tier: 1 },
  { name: "Mehsana",         district: "Mehsana",            region: "North Gujarat",        tier: 1 },
  { name: "Bharuch",         district: "Bharuch",            region: "South Gujarat",        tier: 1 },
  { name: "Nadiad",          district: "Kheda",              region: "Central Gujarat",      tier: 1 },
  { name: "Morbi",           district: "Morbi",              region: "Saurashtra",           tier: 1 },
  { name: "Surendranagar",   district: "Surendranagar",      region: "Saurashtra",           tier: 1 },
  { name: "Gandhidham",      district: "Kutch",              region: "Kutch",                tier: 1 },
  { name: "Bhuj",            district: "Kutch",              region: "Kutch",                tier: 1 },
  { name: "Navsari",         district: "Navsari",            region: "South Gujarat",        tier: 1 },
  { name: "Valsad",          district: "Valsad",             region: "South Gujarat",        tier: 1 },
  { name: "Vapi",            district: "Valsad",             region: "South Gujarat",        tier: 1 },
  { name: "Palanpur",        district: "Banaskantha",        region: "North Gujarat",        tier: 1 },
  { name: "Patan",           district: "Patan",              region: "North Gujarat",        tier: 1 },
  { name: "Godhra",          district: "Panchmahal",         region: "Central Gujarat",      tier: 1 },
  { name: "Dahod",           district: "Dahod",              region: "Central Gujarat",      tier: 1 },
  { name: "Amreli",          district: "Amreli",             region: "Saurashtra",           tier: 1 },
  { name: "Porbandar",       district: "Porbandar",          region: "Saurashtra",           tier: 1 },
  { name: "Veraval",         district: "Gir Somnath",        region: "Saurashtra",           tier: 1 },
  { name: "Botad",           district: "Botad",              region: "Saurashtra",           tier: 1 },
  { name: "Dwarka",          district: "Devbhumi Dwarka",    region: "Saurashtra",           tier: 1 },
  { name: "Vyara",           district: "Tapi",               region: "South Gujarat",        tier: 1 },
  { name: "Himmatnagar",     district: "Sabarkantha",        region: "North Gujarat",        tier: 1 },
  { name: "Lunawada",        district: "Mahisagar",          region: "Central Gujarat",      tier: 1 },
  { name: "Dang",            district: "Dang",               region: "South Gujarat",        tier: 1 },
  { name: "Narmada",         district: "Narmada",            region: "South Gujarat",        tier: 1 },

  // ── AHMEDABAD CITY — Famous Locations & Areas ─────────────────────
  { name: "Maninagar",       district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Vastrapur",       district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Satellite",       district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Navrangpura",     district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "SG Highway",      district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Prahladnagar",    district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Bopal",           district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Thaltej",         district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Bodakdev",        district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Ambawadi",        district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Ellisbridge",     district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "CG Road",         district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Ashram Road",     district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Naranpura",       district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Ghatlodia",       district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Chandkheda",      district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Motera",          district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Sabarmati",       district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Kankaria",        district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Isanpur",         district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Vastral",         district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Vatva",           district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Odhav",           district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Naroda",          district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Nikol",           district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Bapunagar",       district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Shahpur Ahmedabad", district: "Ahmedabad",        region: "North Gujarat",        tier: 2 },
  { name: "Jamalpur",        district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Dariapur",        district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Relief Road",     district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Kalupur",         district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Raipur Ahmedabad", district: "Ahmedabad",         region: "North Gujarat",        tier: 2 },
  { name: "Gomtipur",        district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Gota",            district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Sola",            district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Science City",    district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Ranip",           district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "New Ranip",       district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "South Bopal",     district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Shela",           district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },

  // ── SURAT CITY — Famous Locations & Areas ─────────────────────────
  { name: "Adajan",          district: "Surat",              region: "South Gujarat",        tier: 2 },
  { name: "Vesu",            district: "Surat",              region: "South Gujarat",        tier: 2 },
  { name: "Althan",          district: "Surat",              region: "South Gujarat",        tier: 2 },
  { name: "Piplod",          district: "Surat",              region: "South Gujarat",        tier: 2 },
  { name: "Pal",             district: "Surat",              region: "South Gujarat",        tier: 2 },
  { name: "City Light",      district: "Surat",              region: "South Gujarat",        tier: 2 },
  { name: "Ghod Dod Road",   district: "Surat",              region: "South Gujarat",        tier: 2 },
  { name: "Athwa",           district: "Surat",              region: "South Gujarat",        tier: 2 },
  { name: "Parle Point",     district: "Surat",              region: "South Gujarat",        tier: 2 },
  { name: "Nanpura",         district: "Surat",              region: "South Gujarat",        tier: 2 },
  { name: "Chowk Bazar",     district: "Surat",              region: "South Gujarat",        tier: 2 },
  { name: "Ring Road Surat", district: "Surat",              region: "South Gujarat",        tier: 2 },
  { name: "Udhna",           district: "Surat",              region: "South Gujarat",        tier: 2 },
  { name: "Kapodra",         district: "Surat",              region: "South Gujarat",        tier: 2 },
  { name: "Varachha",        district: "Surat",              region: "South Gujarat",        tier: 2 },
  { name: "Katargam",        district: "Surat",              region: "South Gujarat",        tier: 2 },
  { name: "Sagrampura",      district: "Surat",              region: "South Gujarat",        tier: 2 },
  { name: "Limbayat",        district: "Surat",              region: "South Gujarat",        tier: 2 },
  { name: "Puna",            district: "Surat",              region: "South Gujarat",        tier: 2 },
  { name: "Magdalla",        district: "Surat",              region: "South Gujarat",        tier: 2 },
  { name: "Dumas",           district: "Surat",              region: "South Gujarat",        tier: 2 },
  { name: "Hazira",          district: "Surat",              region: "South Gujarat",        tier: 2 },

  // ── VADODARA CITY — Famous Locations & Areas ──────────────────────
  { name: "Alkapuri",        district: "Vadodara",           region: "Central Gujarat",      tier: 2 },
  { name: "Fatehgunj",       district: "Vadodara",           region: "Central Gujarat",      tier: 2 },
  { name: "Sayajigunj",      district: "Vadodara",           region: "Central Gujarat",      tier: 2 },
  { name: "Manjalpur",       district: "Vadodara",           region: "Central Gujarat",      tier: 2 },
  { name: "Gotri",           district: "Vadodara",           region: "Central Gujarat",      tier: 2 },
  { name: "Waghodia Road",   district: "Vadodara",           region: "Central Gujarat",      tier: 2 },
  { name: "Akota",           district: "Vadodara",           region: "Central Gujarat",      tier: 2 },
  { name: "Vasna Road",      district: "Vadodara",           region: "Central Gujarat",      tier: 2 },
  { name: "Tandalja",        district: "Vadodara",           region: "Central Gujarat",      tier: 2 },
  { name: "Pratapnagar",     district: "Vadodara",           region: "Central Gujarat",      tier: 2 },
  { name: "Raopura",         district: "Vadodara",           region: "Central Gujarat",      tier: 2 },
  { name: "Dandiya Bazar",   district: "Vadodara",           region: "Central Gujarat",      tier: 2 },
  { name: "Karelibaug",      district: "Vadodara",           region: "Central Gujarat",      tier: 2 },
  { name: "Gorwa",           district: "Vadodara",           region: "Central Gujarat",      tier: 2 },
  { name: "Subhanpura",      district: "Vadodara",           region: "Central Gujarat",      tier: 2 },
  { name: "Productivity Road", district: "Vadodara",         region: "Central Gujarat",      tier: 2 },
  { name: "Sama",            district: "Vadodara",           region: "Central Gujarat",      tier: 2 },
  { name: "Makarpura GIDC",  district: "Vadodara",           region: "Central Gujarat",      tier: 2 },

  // ── RAJKOT CITY — Famous Locations & Areas ────────────────────────
  { name: "150 Feet Ring Road", district: "Rajkot",          region: "Saurashtra",           tier: 2 },
  { name: "Kalawad Road",    district: "Rajkot",             region: "Saurashtra",           tier: 2 },
  { name: "University Road", district: "Rajkot",             region: "Saurashtra",           tier: 2 },
  { name: "Raiya Road",      district: "Rajkot",             region: "Saurashtra",           tier: 2 },
  { name: "Gondal Road",     district: "Rajkot",             region: "Saurashtra",           tier: 2 },
  { name: "Jamnagar Road",   district: "Rajkot",             region: "Saurashtra",           tier: 2 },
  { name: "Mavdi",           district: "Rajkot",             region: "Saurashtra",           tier: 2 },
  { name: "Kotecha Chowk",   district: "Rajkot",             region: "Saurashtra",           tier: 2 },
  { name: "Yagnik Road",     district: "Rajkot",             region: "Saurashtra",           tier: 2 },
  { name: "Bhaktinagar",     district: "Rajkot",             region: "Saurashtra",           tier: 2 },
  { name: "Patel Nagar",     district: "Rajkot",             region: "Saurashtra",           tier: 2 },
  { name: "Race Course",     district: "Rajkot",             region: "Saurashtra",           tier: 2 },
  { name: "Hudco",           district: "Rajkot",             region: "Saurashtra",           tier: 2 },
  { name: "Amin Marg",       district: "Rajkot",             region: "Saurashtra",           tier: 2 },
  { name: "Metoda GIDC",     district: "Rajkot",             region: "Saurashtra",           tier: 2 },

  // ── Tier 2 — Major towns / sub-divisional centres ─────────────────
  // North Gujarat
  { name: "Kalol",           district: "Gandhinagar",        region: "North Gujarat",        tier: 2 },
  { name: "Mansa",           district: "Gandhinagar",        region: "North Gujarat",        tier: 2 },
  { name: "Sanand",          district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Dholka",          district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Viramgam",        district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Dhandhuka",       district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Bavla",           district: "Ahmedabad",          region: "North Gujarat",        tier: 2 },
  { name: "Unjha",           district: "Mehsana",            region: "North Gujarat",        tier: 2 },
  { name: "Visnagar",        district: "Mehsana",            region: "North Gujarat",        tier: 2 },
  { name: "Kadi",            district: "Mehsana",            region: "North Gujarat",        tier: 2 },
  { name: "Sidhpur",         district: "Patan",              region: "North Gujarat",        tier: 2 },
  { name: "Chanasma",        district: "Patan",              region: "North Gujarat",        tier: 2 },
  { name: "Deesa",           district: "Banaskantha",        region: "North Gujarat",        tier: 2 },
  { name: "Tharad",          district: "Banaskantha",        region: "North Gujarat",        tier: 2 },
  { name: "Dhanera",         district: "Banaskantha",        region: "North Gujarat",        tier: 2 },
  { name: "Danta",           district: "Banaskantha",        region: "North Gujarat",        tier: 2 },
  { name: "Idar",            district: "Sabarkantha",        region: "North Gujarat",        tier: 2 },
  { name: "Modasa",          district: "Sabarkantha",        region: "North Gujarat",        tier: 2 },
  { name: "Talod",           district: "Sabarkantha",        region: "North Gujarat",        tier: 2 },
  { name: "Prantij",         district: "Sabarkantha",        region: "North Gujarat",        tier: 2 },

  // Central Gujarat
  { name: "Khambhat",        district: "Anand",              region: "Central Gujarat",      tier: 2 },
  { name: "Petlad",          district: "Anand",              region: "Central Gujarat",      tier: 2 },
  { name: "Borsad",          district: "Anand",              region: "Central Gujarat",      tier: 2 },
  { name: "Umreth",          district: "Anand",              region: "Central Gujarat",      tier: 2 },
  { name: "Kheda",           district: "Kheda",              region: "Central Gujarat",      tier: 2 },
  { name: "Kapadvanj",       district: "Kheda",              region: "Central Gujarat",      tier: 2 },
  { name: "Mahudha",         district: "Kheda",              region: "Central Gujarat",      tier: 2 },
  { name: "Matar",           district: "Kheda",              region: "Central Gujarat",      tier: 2 },
  { name: "Kathlal",         district: "Kheda",              region: "Central Gujarat",      tier: 2 },
  { name: "Halol",           district: "Panchmahal",         region: "Central Gujarat",      tier: 2 },
  { name: "Kalol Panchmahal", district: "Panchmahal",        region: "Central Gujarat",      tier: 2 },
  { name: "Jambughoda",      district: "Panchmahal",         region: "Central Gujarat",      tier: 2 },
  { name: "Ghoghamba",       district: "Panchmahal",         region: "Central Gujarat",      tier: 2 },
  { name: "Limkheda",        district: "Dahod",              region: "Central Gujarat",      tier: 2 },
  { name: "Dhanpur",         district: "Dahod",              region: "Central Gujarat",      tier: 2 },
  { name: "Devgadhbaria",    district: "Dahod",              region: "Central Gujarat",      tier: 2 },
  { name: "Santrampur",      district: "Mahisagar",          region: "Central Gujarat",      tier: 2 },
  { name: "Kadana",          district: "Mahisagar",          region: "Central Gujarat",      tier: 2 },
  { name: "Khanpur",         district: "Mahisagar",          region: "Central Gujarat",      tier: 2 },
  { name: "Chhota Udaipur",  district: "Chhota Udaipur",     region: "Central Gujarat",      tier: 2 },
  { name: "Jetpur Pavi",     district: "Chhota Udaipur",     region: "Central Gujarat",      tier: 2 },
  { name: "Sankheda",        district: "Chhota Udaipur",     region: "Central Gujarat",      tier: 2 },

  // South Gujarat
  { name: "Bardoli",         district: "Surat",              region: "South Gujarat",        tier: 2 },
  { name: "Mandvi Surat",    district: "Surat",              region: "South Gujarat",        tier: 2 },
  { name: "Kamrej",          district: "Surat",              region: "South Gujarat",        tier: 2 },
  { name: "Mahuva Surat",    district: "Surat",              region: "South Gujarat",        tier: 2 },
  { name: "Songadh",         district: "Tapi",               region: "South Gujarat",        tier: 2 },
  { name: "Valod",           district: "Tapi",               region: "South Gujarat",        tier: 2 },
  { name: "Uchchhal",        district: "Tapi",               region: "South Gujarat",        tier: 2 },
  { name: "Bilimora",        district: "Navsari",            region: "South Gujarat",        tier: 2 },
  { name: "Chikhli",         district: "Navsari",            region: "South Gujarat",        tier: 2 },
  { name: "Jalalpore",       district: "Navsari",            region: "South Gujarat",        tier: 2 },
  { name: "Dharampur",       district: "Valsad",             region: "South Gujarat",        tier: 2 },
  { name: "Umbergaon",       district: "Valsad",             region: "South Gujarat",        tier: 2 },
  { name: "Pardi",           district: "Valsad",             region: "South Gujarat",        tier: 2 },
  { name: "Silvassa",        district: "Valsad",             region: "South Gujarat",        tier: 2 },
  { name: "Ankleshwar",      district: "Bharuch",            region: "South Gujarat",        tier: 2 },
  { name: "Jambusar",        district: "Bharuch",            region: "South Gujarat",        tier: 2 },
  { name: "Amod",            district: "Bharuch",            region: "South Gujarat",        tier: 2 },
  { name: "Hansot",          district: "Bharuch",            region: "South Gujarat",        tier: 2 },
  { name: "Vagra",           district: "Bharuch",            region: "South Gujarat",        tier: 2 },
  { name: "Rajpipla",        district: "Narmada",            region: "South Gujarat",        tier: 2 },
  { name: "Tilakwada",       district: "Narmada",            region: "South Gujarat",        tier: 2 },
  { name: "Ahwa",            district: "Dang",               region: "South Gujarat",        tier: 2 },

  // Saurashtra
  { name: "Gondal",          district: "Rajkot",             region: "Saurashtra",           tier: 2 },
  { name: "Jetpur",          district: "Rajkot",             region: "Saurashtra",           tier: 2 },
  { name: "Dhoraji",         district: "Rajkot",             region: "Saurashtra",           tier: 2 },
  { name: "Upleta",          district: "Rajkot",             region: "Saurashtra",           tier: 2 },
  { name: "Jasdan",          district: "Rajkot",             region: "Saurashtra",           tier: 2 },
  { name: "Wankaner",        district: "Morbi",              region: "Saurashtra",           tier: 2 },
  { name: "Tankara",         district: "Morbi",              region: "Saurashtra",           tier: 2 },
  { name: "Maliya",          district: "Morbi",              region: "Saurashtra",           tier: 2 },
  { name: "Wadhwan",         district: "Surendranagar",      region: "Saurashtra",           tier: 2 },
  { name: "Dhrangadhra",     district: "Surendranagar",      region: "Saurashtra",           tier: 2 },
  { name: "Thangadh",        district: "Surendranagar",      region: "Saurashtra",           tier: 2 },
  { name: "Chotila",         district: "Surendranagar",      region: "Saurashtra",           tier: 2 },
  { name: "Palitana",        district: "Bhavnagar",          region: "Saurashtra",           tier: 2 },
  { name: "Mahuva",          district: "Bhavnagar",          region: "Saurashtra",           tier: 2 },
  { name: "Sihor",           district: "Bhavnagar",          region: "Saurashtra",           tier: 2 },
  { name: "Talaja",          district: "Bhavnagar",          region: "Saurashtra",           tier: 2 },
  { name: "Gariadhar",       district: "Bhavnagar",          region: "Saurashtra",           tier: 2 },
  { name: "Damnagar",        district: "Amreli",             region: "Saurashtra",           tier: 2 },
  { name: "Rajula",          district: "Amreli",             region: "Saurashtra",           tier: 2 },
  { name: "Babra",           district: "Amreli",             region: "Saurashtra",           tier: 2 },
  { name: "Lathi",           district: "Amreli",             region: "Saurashtra",           tier: 2 },
  { name: "Savarkundla",     district: "Amreli",             region: "Saurashtra",           tier: 2 },
  { name: "Keshod",          district: "Junagadh",           region: "Saurashtra",           tier: 2 },
  { name: "Mangrol",         district: "Junagadh",           region: "Saurashtra",           tier: 2 },
  { name: "Manavadar",       district: "Junagadh",           region: "Saurashtra",           tier: 2 },
  { name: "Visavadar",       district: "Junagadh",           region: "Saurashtra",           tier: 2 },
  { name: "Mendarda",        district: "Junagadh",           region: "Saurashtra",           tier: 2 },
  { name: "Una",             district: "Gir Somnath",        region: "Saurashtra",           tier: 2 },
  { name: "Kodinar",         district: "Gir Somnath",        region: "Saurashtra",           tier: 2 },
  { name: "Talala",          district: "Gir Somnath",        region: "Saurashtra",           tier: 2 },
  { name: "Sutrapada",       district: "Gir Somnath",        region: "Saurashtra",           tier: 2 },
  { name: "Ranavav",         district: "Porbandar",          region: "Saurashtra",           tier: 2 },
  { name: "Kutiyana",        district: "Porbandar",          region: "Saurashtra",           tier: 2 },
  { name: "Khambhalia",      district: "Devbhumi Dwarka",    region: "Saurashtra",           tier: 2 },
  { name: "Okha",            district: "Devbhumi Dwarka",    region: "Saurashtra",           tier: 2 },
  { name: "Bhanvad",         district: "Devbhumi Dwarka",    region: "Saurashtra",           tier: 2 },
  { name: "Kalyanpur",       district: "Devbhumi Dwarka",    region: "Saurashtra",           tier: 2 },
  { name: "Jodia",           district: "Jamnagar",           region: "Saurashtra",           tier: 2 },
  { name: "Jamjodhpur",      district: "Jamnagar",           region: "Saurashtra",           tier: 2 },
  { name: "Lalpur",          district: "Jamnagar",           region: "Saurashtra",           tier: 2 },
  { name: "Dhrol",           district: "Jamnagar",           region: "Saurashtra",           tier: 2 },
  { name: "Kalavad",         district: "Jamnagar",           region: "Saurashtra",           tier: 2 },
  { name: "Gadhada",         district: "Botad",              region: "Saurashtra",           tier: 2 },
  { name: "Barvala",         district: "Botad",              region: "Saurashtra",           tier: 2 },

  // Kutch
  { name: "Mundra",          district: "Kutch",              region: "Kutch",                tier: 2 },
  { name: "Anjar",           district: "Kutch",              region: "Kutch",                tier: 2 },
  { name: "Rapar",           district: "Kutch",              region: "Kutch",                tier: 2 },
  { name: "Mandvi",          district: "Kutch",              region: "Kutch",                tier: 2 },
  { name: "Adipur",          district: "Kutch",              region: "Kutch",                tier: 2 },

  // ── Tier 3 — Tehsil headquarters & smaller towns ──────────────────
  // Ahmedabad district
  { name: "Daskroi",         district: "Ahmedabad",          region: "North Gujarat",        tier: 3 },
  { name: "Dehgam",          district: "Ahmedabad",          region: "North Gujarat",        tier: 3 },
  { name: "Mandal",          district: "Ahmedabad",          region: "North Gujarat",        tier: 3 },
  { name: "Detroj",          district: "Ahmedabad",          region: "North Gujarat",        tier: 3 },

  // Gandhinagar district
  { name: "Dehgam Gandhinagar", district: "Gandhinagar",     region: "North Gujarat",        tier: 3 },

  // Mehsana district
  { name: "Becharaji",       district: "Mehsana",            region: "North Gujarat",        tier: 3 },
  { name: "Jotana",          district: "Mehsana",            region: "North Gujarat",        tier: 3 },
  { name: "Satlasana",       district: "Mehsana",            region: "North Gujarat",        tier: 3 },
  { name: "Vadnagar",        district: "Mehsana",            region: "North Gujarat",        tier: 3 },

  // Patan district
  { name: "Harij",           district: "Patan",              region: "North Gujarat",        tier: 3 },
  { name: "Radhanpur",       district: "Patan",              region: "North Gujarat",        tier: 3 },
  { name: "Santalpur",       district: "Patan",              region: "North Gujarat",        tier: 3 },
  { name: "Sami",            district: "Patan",              region: "North Gujarat",        tier: 3 },

  // Banaskantha district
  { name: "Vadgam",          district: "Banaskantha",        region: "North Gujarat",        tier: 3 },
  { name: "Vav",             district: "Banaskantha",        region: "North Gujarat",        tier: 3 },
  { name: "Suigam",          district: "Banaskantha",        region: "North Gujarat",        tier: 3 },
  { name: "Kankrej",         district: "Banaskantha",        region: "North Gujarat",        tier: 3 },
  { name: "Deodar",          district: "Banaskantha",        region: "North Gujarat",        tier: 3 },
  { name: "Bhabhar",         district: "Banaskantha",        region: "North Gujarat",        tier: 3 },
  { name: "Amirgadh",        district: "Banaskantha",        region: "North Gujarat",        tier: 3 },

  // Sabarkantha district
  { name: "Bayad",           district: "Sabarkantha",        region: "North Gujarat",        tier: 3 },
  { name: "Dhansura",        district: "Sabarkantha",        region: "North Gujarat",        tier: 3 },
  { name: "Vadali",          district: "Sabarkantha",        region: "North Gujarat",        tier: 3 },
  { name: "Khedbrahma",      district: "Sabarkantha",        region: "North Gujarat",        tier: 3 },
  { name: "Vijaynagar",      district: "Sabarkantha",        region: "North Gujarat",        tier: 3 },

  // Anand district
  { name: "Sojitra",         district: "Anand",              region: "Central Gujarat",      tier: 3 },
  { name: "Tarapur",         district: "Anand",              region: "Central Gujarat",      tier: 3 },
  { name: "Anklav",          district: "Anand",              region: "Central Gujarat",      tier: 3 },

  // Kheda district
  { name: "Mehmedabad",      district: "Kheda",              region: "Central Gujarat",      tier: 3 },
  { name: "Galteshwar",      district: "Kheda",              region: "Central Gujarat",      tier: 3 },
  { name: "Thasra",          district: "Kheda",              region: "Central Gujarat",      tier: 3 },
  { name: "Vaso",            district: "Kheda",              region: "Central Gujarat",      tier: 3 },

  // Panchmahal district
  { name: "Morwa",           district: "Panchmahal",         region: "Central Gujarat",      tier: 3 },
  { name: "Shahera",         district: "Panchmahal",         region: "Central Gujarat",      tier: 3 },

  // Dahod district
  { name: "Jhalod",          district: "Dahod",              region: "Central Gujarat",      tier: 3 },
  { name: "Fatepura",        district: "Dahod",              region: "Central Gujarat",      tier: 3 },
  { name: "Garbada",         district: "Dahod",              region: "Central Gujarat",      tier: 3 },
  { name: "Zalod",           district: "Dahod",              region: "Central Gujarat",      tier: 3 },

  // Mahisagar district
  { name: "Balasinor",       district: "Mahisagar",          region: "Central Gujarat",      tier: 3 },
  { name: "Virpur",          district: "Mahisagar",          region: "Central Gujarat",      tier: 3 },

  // Vadodara district
  { name: "Karjan",          district: "Vadodara",           region: "Central Gujarat",      tier: 3 },
  { name: "Padra",           district: "Vadodara",           region: "Central Gujarat",      tier: 3 },
  { name: "Savli",           district: "Vadodara",           region: "Central Gujarat",      tier: 3 },
  { name: "Dabhoi",          district: "Vadodara",           region: "Central Gujarat",      tier: 3 },
  { name: "Shinor",          district: "Vadodara",           region: "Central Gujarat",      tier: 3 },
  { name: "Vaghodia",        district: "Vadodara",           region: "Central Gujarat",      tier: 3 },
  { name: "Desar",           district: "Vadodara",           region: "Central Gujarat",      tier: 3 },

  // Chhota Udaipur district
  { name: "Nasvadi",         district: "Chhota Udaipur",     region: "Central Gujarat",      tier: 3 },
  { name: "Kawant",          district: "Chhota Udaipur",     region: "Central Gujarat",      tier: 3 },
  { name: "Bodeli",          district: "Chhota Udaipur",     region: "Central Gujarat",      tier: 3 },

  // Surat district
  { name: "Olpad",           district: "Surat",              region: "South Gujarat",        tier: 3 },
  { name: "Mangrol Surat",   district: "Surat",              region: "South Gujarat",        tier: 3 },
  { name: "Chorasi",         district: "Surat",              region: "South Gujarat",        tier: 3 },
  { name: "Palsana",         district: "Surat",              region: "South Gujarat",        tier: 3 },

  // Tapi district
  { name: "Nizar",           district: "Tapi",               region: "South Gujarat",        tier: 3 },
  { name: "Kukarmunda",      district: "Tapi",               region: "South Gujarat",        tier: 3 },
  { name: "Dolvan",          district: "Tapi",               region: "South Gujarat",        tier: 3 },

  // Navsari district
  { name: "Gandevi",         district: "Navsari",            region: "South Gujarat",        tier: 3 },
  { name: "Vansda",          district: "Navsari",            region: "South Gujarat",        tier: 3 },
  { name: "Khergam",         district: "Navsari",            region: "South Gujarat",        tier: 3 },

  // Valsad district
  { name: "Kaprada",         district: "Valsad",             region: "South Gujarat",        tier: 3 },

  // Bharuch district
  { name: "Valia",           district: "Bharuch",            region: "South Gujarat",        tier: 3 },
  { name: "Jhagadia",        district: "Bharuch",            region: "South Gujarat",        tier: 3 },
  { name: "Netrang",         district: "Bharuch",            region: "South Gujarat",        tier: 3 },

  // Narmada district
  { name: "Garudeshwar",     district: "Narmada",            region: "South Gujarat",        tier: 3 },
  { name: "Dediyapada",      district: "Narmada",            region: "South Gujarat",        tier: 3 },
  { name: "Sagbara",         district: "Narmada",            region: "South Gujarat",        tier: 3 },

  // Dang district
  { name: "Subir",           district: "Dang",               region: "South Gujarat",        tier: 3 },
  { name: "Waghai",          district: "Dang",               region: "South Gujarat",        tier: 3 },

  // Rajkot district
  { name: "Paddhari",        district: "Rajkot",             region: "Saurashtra",           tier: 3 },
  { name: "Vinchhiya",       district: "Rajkot",             region: "Saurashtra",           tier: 3 },
  { name: "Lodhika",         district: "Rajkot",             region: "Saurashtra",           tier: 3 },
  { name: "Kotda Sangani",   district: "Rajkot",             region: "Saurashtra",           tier: 3 },

  // Morbi district
  { name: "Halvad",          district: "Morbi",              region: "Saurashtra",           tier: 3 },

  // Surendranagar district
  { name: "Lakhtar",         district: "Surendranagar",      region: "Saurashtra",           tier: 3 },
  { name: "Dasada",          district: "Surendranagar",      region: "Saurashtra",           tier: 3 },
  { name: "Muli",            district: "Surendranagar",      region: "Saurashtra",           tier: 3 },
  { name: "Limbdi",          district: "Surendranagar",      region: "Saurashtra",           tier: 3 },
  { name: "Sayla",           district: "Surendranagar",      region: "Saurashtra",           tier: 3 },

  // Bhavnagar district
  { name: "Ghogha",          district: "Bhavnagar",          region: "Saurashtra",           tier: 3 },
  { name: "Umrala",          district: "Bhavnagar",          region: "Saurashtra",           tier: 3 },
  { name: "Vallabhipur",     district: "Bhavnagar",          region: "Saurashtra",           tier: 3 },
  { name: "Jesar",           district: "Bhavnagar",          region: "Saurashtra",           tier: 3 },

  // Amreli district
  { name: "Khambha",         district: "Amreli",             region: "Saurashtra",           tier: 3 },
  { name: "Jafrabad",        district: "Amreli",             region: "Saurashtra",           tier: 3 },
  { name: "Bagasara",        district: "Amreli",             region: "Saurashtra",           tier: 3 },
  { name: "Kunkavav",        district: "Amreli",             region: "Saurashtra",           tier: 3 },

  // Junagadh district
  { name: "Bhesan",          district: "Junagadh",           region: "Saurashtra",           tier: 3 },
  { name: "Vanthali",        district: "Junagadh",           region: "Saurashtra",           tier: 3 },
  { name: "Malia",           district: "Junagadh",           region: "Saurashtra",           tier: 3 },

  // Gir Somnath district
  { name: "Gir Gadhada",     district: "Gir Somnath",        region: "Saurashtra",           tier: 3 },
  { name: "Patan Veraval",   district: "Gir Somnath",        region: "Saurashtra",           tier: 3 },

  // Porbandar district
  { name: "Chhaya",          district: "Porbandar",          region: "Saurashtra",           tier: 3 },

  // Devbhumi Dwarka district
  { name: "Jam Khambhaliya", district: "Devbhumi Dwarka",    region: "Saurashtra",           tier: 3 },

  // Jamnagar district
  { name: "Kalawad",         district: "Jamnagar",           region: "Saurashtra",           tier: 3 },
  { name: "Jodiya",          district: "Jamnagar",           region: "Saurashtra",           tier: 3 },

  // Botad district
  { name: "Ranpur",          district: "Botad",              region: "Saurashtra",           tier: 3 },

  // Kutch district
  { name: "Nakhatrana",      district: "Kutch",              region: "Kutch",                tier: 3 },
  { name: "Abdasa",          district: "Kutch",              region: "Kutch",                tier: 3 },
  { name: "Lakhpat",         district: "Kutch",              region: "Kutch",                tier: 3 },
  { name: "Bhachau",         district: "Kutch",              region: "Kutch",                tier: 3 },
  { name: "Bhuj Rural",      district: "Kutch",              region: "Kutch",                tier: 3 },
];

/* ─── Derived Exports ─────────────────────────────────────────────────────── */

/** Slugify a city name: lowercase, spaces → hyphens, strip non-alphanumeric */
export function slugifyCity(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

/** All valid URL slugs (used in generateStaticParams) */
export const ALL_CITY_SLUGS: string[] = GJ_CITIES.map((c) => slugifyCity(c.name));

/** Look up a city by its URL slug */
export function getCityData(slug: string): GJCity | undefined {
  return GJ_CITIES.find((c) => slugifyCity(c.name) === slug);
}

/** Format a raw slug into a display name (fallback when city not in list) */
export function formatCityDisplay(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}