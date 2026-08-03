// app/data/mh-cities.ts
// maharashtra cities and towns data for the app
export type MHCity = {
  name: string;
  district: string;
  region: string;
  tier: 1 | 2 | 3;
};

export const MH_REGIONS: Record<string, string[]> = {
  "Konkan Division": [
    "Mumbai City", "Mumbai Suburban", "Thane", "Palghar", "Raigad", "Ratnagiri", "Sindhudurg",
  ],
  "Nashik Division": [
    "Nashik", "Dhule", "Nandurbar", "Jalgaon", "Ahmednagar",
  ],
  "Pune Division": [
    "Pune", "Satara", "Sangli", "Solapur", "Kolhapur",
  ],
  "Aurangabad Division": [
    "Aurangabad", "Jalna", "Beed", "Latur", "Osmanabad", "Nanded", "Parbhani", "Hingoli",
  ],
  "Amravati Division": [
    "Amravati", "Akola", "Washim", "Buldhana", "Yavatmal",
  ],
  "Nagpur Division": [
    "Nagpur", "Wardha", "Bhandara", "Gondia", "Chandrapur", "Gadchiroli",
  ],
};

export const MH_CITIES: MHCity[] = [
  // ── Tier 1 — District headquarters (all 36 districts) ─────────────
  { name: "Mumbai",          district: "Mumbai City",        region: "Konkan Division",      tier: 1 },
  { name: "Thane",           district: "Thane",              region: "Konkan Division",      tier: 1 },
  { name: "Pune",            district: "Pune",               region: "Pune Division",        tier: 1 },
  { name: "Nagpur",          district: "Nagpur",             region: "Nagpur Division",      tier: 1 },
  { name: "Nashik",          district: "Nashik",             region: "Nashik Division",      tier: 1 },
  { name: "Aurangabad",      district: "Aurangabad",         region: "Aurangabad Division",  tier: 1 },
  { name: "Solapur",         district: "Solapur",            region: "Pune Division",        tier: 1 },
  { name: "Amravati",        district: "Amravati",           region: "Amravati Division",    tier: 1 },
  { name: "Kolhapur",        district: "Kolhapur",           region: "Pune Division",        tier: 1 },
  { name: "Nanded",          district: "Nanded",             region: "Aurangabad Division",  tier: 1 },
  { name: "Sangli",          district: "Sangli",             region: "Pune Division",        tier: 1 },
  { name: "Jalgaon",         district: "Jalgaon",            region: "Nashik Division",      tier: 1 },
  { name: "Akola",           district: "Akola",              region: "Amravati Division",    tier: 1 },
  { name: "Latur",           district: "Latur",              region: "Aurangabad Division",  tier: 1 },
  { name: "Dhule",           district: "Dhule",              region: "Nashik Division",      tier: 1 },
  { name: "Ahmednagar",      district: "Ahmednagar",         region: "Nashik Division",      tier: 1 },
  { name: "Chandrapur",      district: "Chandrapur",         region: "Nagpur Division",      tier: 1 },
  { name: "Parbhani",        district: "Parbhani",           region: "Aurangabad Division",  tier: 1 },
  { name: "Jalna",           district: "Jalna",              region: "Aurangabad Division",  tier: 1 },
  { name: "Bhiwandi",        district: "Thane",              region: "Konkan Division",      tier: 1 },
  { name: "Navi Mumbai",     district: "Thane",              region: "Konkan Division",      tier: 1 },
  { name: "Raigad",          district: "Raigad",             region: "Konkan Division",      tier: 1 },
  { name: "Ratnagiri",       district: "Ratnagiri",          region: "Konkan Division",      tier: 1 },
  { name: "Sindhudurg",      district: "Sindhudurg",         region: "Konkan Division",      tier: 1 },
  { name: "Palghar",         district: "Palghar",            region: "Konkan Division",      tier: 1 },
  { name: "Satara",          district: "Satara",             region: "Pune Division",        tier: 1 },
  { name: "Wardha",          district: "Wardha",             region: "Nagpur Division",      tier: 1 },
  { name: "Bhandara",        district: "Bhandara",           region: "Nagpur Division",      tier: 1 },
  { name: "Gondia",          district: "Gondia",             region: "Nagpur Division",      tier: 1 },
  { name: "Yavatmal",        district: "Yavatmal",           region: "Amravati Division",    tier: 1 },
  { name: "Buldhana",        district: "Buldhana",           region: "Amravati Division",    tier: 1 },
  { name: "Washim",          district: "Washim",             region: "Amravati Division",    tier: 1 },
  { name: "Osmanabad",       district: "Osmanabad",          region: "Aurangabad Division",  tier: 1 },
  { name: "Beed",            district: "Beed",               region: "Aurangabad Division",  tier: 1 },
  { name: "Hingoli",         district: "Hingoli",            region: "Aurangabad Division",  tier: 1 },
  { name: "Nandurbar",       district: "Nandurbar",          region: "Nashik Division",      tier: 1 },
  { name: "Gadchiroli",      district: "Gadchiroli",         region: "Nagpur Division",      tier: 1 },

  // ── MUMBAI CITY — Famous Locations & Areas ────────────────────────
  { name: "Colaba",          district: "Mumbai City",        region: "Konkan Division",      tier: 2 },
  { name: "Fort Mumbai",     district: "Mumbai City",        region: "Konkan Division",      tier: 2 },
  { name: "Nariman Point",   district: "Mumbai City",        region: "Konkan Division",      tier: 2 },
  { name: "Marine Drive",    district: "Mumbai City",        region: "Konkan Division",      tier: 2 },
  { name: "Churchgate",      district: "Mumbai City",        region: "Konkan Division",      tier: 2 },
  { name: "Ballard Estate",  district: "Mumbai City",        region: "Konkan Division",      tier: 2 },
  { name: "Kalbadevi",       district: "Mumbai City",        region: "Konkan Division",      tier: 2 },
  { name: "Bhuleshwar",      district: "Mumbai City",        region: "Konkan Division",      tier: 2 },
  { name: "Crawford Market", district: "Mumbai City",        region: "Konkan Division",      tier: 2 },
  { name: "CST Mumbai",      district: "Mumbai City",        region: "Konkan Division",      tier: 2 },
  { name: "Dadar",           district: "Mumbai City",        region: "Konkan Division",      tier: 2 },
  { name: "Parel",           district: "Mumbai City",        region: "Konkan Division",      tier: 2 },
  { name: "Lower Parel",     district: "Mumbai City",        region: "Konkan Division",      tier: 2 },
  { name: "Worli",           district: "Mumbai City",        region: "Konkan Division",      tier: 2 },
  { name: "Prabhadevi",      district: "Mumbai City",        region: "Konkan Division",      tier: 2 },
  { name: "Mahalaxmi",       district: "Mumbai City",        region: "Konkan Division",      tier: 2 },
  { name: "Breach Candy",    district: "Mumbai City",        region: "Konkan Division",      tier: 2 },
  { name: "Malabar Hill",    district: "Mumbai City",        region: "Konkan Division",      tier: 2 },
  { name: "Tardeo",          district: "Mumbai City",        region: "Konkan Division",      tier: 2 },
  { name: "Grant Road",      district: "Mumbai City",        region: "Konkan Division",      tier: 2 },
  { name: "Girgaon",         district: "Mumbai City",        region: "Konkan Division",      tier: 2 },
  { name: "Mazgaon",         district: "Mumbai City",        region: "Konkan Division",      tier: 2 },
  { name: "Byculla",         district: "Mumbai City",        region: "Konkan Division",      tier: 2 },
  { name: "Matunga",         district: "Mumbai City",        region: "Konkan Division",      tier: 2 },
  { name: "Wadala",          district: "Mumbai City",        region: "Konkan Division",      tier: 2 },
  { name: "Sion",            district: "Mumbai City",        region: "Konkan Division",      tier: 2 },
  { name: "Dharavi",         district: "Mumbai City",        region: "Konkan Division",      tier: 2 },
  { name: "Mahim",           district: "Mumbai City",        region: "Konkan Division",      tier: 2 },
  { name: "Bandra West",     district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Bandra East",     district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Khar",            district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Santacruz West",  district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Santacruz East",  district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Vile Parle West", district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Vile Parle East", district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Andheri West",    district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Andheri East",    district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Juhu",            district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Versova",         district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Jogeshwari West", district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Jogeshwari East", district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Goregaon West",   district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Goregaon East",   district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Malad West",      district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Malad East",      district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Kandivali West",  district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Kandivali East",  district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Borivali West",   district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Borivali East",   district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Dahisar West",    district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Dahisar East",    district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Mulund West",     district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Mulund East",     district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Bhandup West",    district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Bhandup East",    district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Vikhroli West",   district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Vikhroli East",   district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Ghatkopar West",  district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Ghatkopar East",  district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Kurla West",      district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Kurla East",      district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Chembur",         district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Powai",           district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "BKC",             district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },
  { name: "Gorai",           district: "Mumbai Suburban",    region: "Konkan Division",      tier: 2 },

  // ── PUNE CITY — Famous Locations & Areas ──────────────────────────
  { name: "Shivajinagar",    district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Kothrud",         district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Aundh",           district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Baner",           district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Pashan",          district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Hinjewadi",       district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Wakad",           district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Pimple Saudagar", district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Pimple Nilakh",   district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Kalyani Nagar",   district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Koregaon Park",   district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Viman Nagar",     district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Hadapsar",        district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Magarpatta",      district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Camp Pune",       district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Kondhwa",         district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Katraj",          district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Warje",           district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Karve Nagar",     district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Deccan Gymkhana", district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Sadashiv Peth",   district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Pune Camp",       district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Model Colony",    district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Yerawada",        district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Kharadi",         district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Wadgaon Sheri",   district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Pimpri",          district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Chinchwad",       district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Nigdi",           district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Akurdi",          district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Ravet",           district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Moshi",           district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Bhosari",         district: "Pune",               region: "Pune Division",        tier: 2 },

  // ── NAGPUR CITY — Famous Locations & Areas ────────────────────────
  { name: "Sitabuldi",       district: "Nagpur",             region: "Nagpur Division",      tier: 2 },
  { name: "Dharampeth",      district: "Nagpur",             region: "Nagpur Division",      tier: 2 },
  { name: "Civil Lines Nagpur", district: "Nagpur",          region: "Nagpur Division",      tier: 2 },
  { name: "Sadar Nagpur",    district: "Nagpur",             region: "Nagpur Division",      tier: 2 },
  { name: "Itwari",          district: "Nagpur",             region: "Nagpur Division",      tier: 2 },
  { name: "Ganeshpeth",      district: "Nagpur",             region: "Nagpur Division",      tier: 2 },
  { name: "Mahal Nagpur",    district: "Nagpur",             region: "Nagpur Division",      tier: 2 },
  { name: "MIDC Nagpur",     district: "Nagpur",             region: "Nagpur Division",      tier: 2 },
  { name: "Butibori",        district: "Nagpur",             region: "Nagpur Division",      tier: 2 },
  { name: "Wardha Road Nagpur", district: "Nagpur",          region: "Nagpur Division",      tier: 2 },
  { name: "Amravati Road Nagpur", district: "Nagpur",        region: "Nagpur Division",      tier: 2 },
  { name: "Koradi Road",     district: "Nagpur",             region: "Nagpur Division",      tier: 2 },
  { name: "Pratap Nagar Nagpur", district: "Nagpur",         region: "Nagpur Division",      tier: 2 },
  { name: "Manish Nagar",    district: "Nagpur",             region: "Nagpur Division",      tier: 2 },
  { name: "Gandhibagh",      district: "Nagpur",             region: "Nagpur Division",      tier: 2 },
  { name: "Nandanvan",       district: "Nagpur",             region: "Nagpur Division",      tier: 2 },
  { name: "Ajni",            district: "Nagpur",             region: "Nagpur Division",      tier: 2 },

  // ── NASHIK CITY — Famous Locations & Areas ────────────────────────
  { name: "Nashik Road",     district: "Nashik",             region: "Nashik Division",      tier: 2 },
  { name: "Satpur",          district: "Nashik",             region: "Nashik Division",      tier: 2 },
  { name: "Ambad Nashik",    district: "Nashik",             region: "Nashik Division",      tier: 2 },
  { name: "College Road Nashik", district: "Nashik",         region: "Nashik Division",      tier: 2 },
  { name: "Panchavati",      district: "Nashik",             region: "Nashik Division",      tier: 2 },
  { name: "Gangapur Road",   district: "Nashik",             region: "Nashik Division",      tier: 2 },
  { name: "MIDC Ambad",      district: "Nashik",             region: "Nashik Division",      tier: 2 },
  { name: "Pathardi Phata",  district: "Nashik",             region: "Nashik Division",      tier: 2 },
  { name: "Dwarka Nashik",   district: "Nashik",             region: "Nashik Division",      tier: 2 },

  // ── AURANGABAD CITY — Famous Locations & Areas ────────────────────
  { name: "Aurangabad City", district: "Aurangabad",         region: "Aurangabad Division",  tier: 2 },
  { name: "CIDCO Aurangabad", district: "Aurangabad",        region: "Aurangabad Division",  tier: 2 },
  { name: "Waluj",           district: "Aurangabad",         region: "Aurangabad Division",  tier: 2 },
  { name: "Chikalthana",     district: "Aurangabad",         region: "Aurangabad Division",  tier: 2 },
  { name: "Garkheda",        district: "Aurangabad",         region: "Aurangabad Division",  tier: 2 },
  { name: "Jalna Road Aurangabad", district: "Aurangabad",   region: "Aurangabad Division",  tier: 2 },
  { name: "N-Series Aurangabad", district: "Aurangabad",     region: "Aurangabad Division",  tier: 2 },

  // ── Tier 2 — Major towns / sub-divisional centres ────────────────
  // Konkan Division
  { name: "Kalyan",          district: "Thane",              region: "Konkan Division",      tier: 2 },
  { name: "Vasai-Virar",     district: "Palghar",            region: "Konkan Division",      tier: 2 },
  { name: "Mira-Bhayandar",  district: "Thane",              region: "Konkan Division",      tier: 2 },
  { name: "Ulhasnagar",      district: "Thane",              region: "Konkan Division",      tier: 2 },
  { name: "Ambernath",       district: "Thane",              region: "Konkan Division",      tier: 2 },
  { name: "Badlapur",        district: "Thane",              region: "Konkan Division",      tier: 2 },
  { name: "Panvel",          district: "Raigad",             region: "Konkan Division",      tier: 2 },
  { name: "Alibag",          district: "Raigad",             region: "Konkan Division",      tier: 2 },
  { name: "Pen",             district: "Raigad",             region: "Konkan Division",      tier: 2 },
  { name: "Karjat",          district: "Raigad",             region: "Konkan Division",      tier: 2 },
  { name: "Khopoli",         district: "Raigad",             region: "Konkan Division",      tier: 2 },
  { name: "Chiplun",         district: "Ratnagiri",          region: "Konkan Division",      tier: 2 },
  { name: "Dapoli",          district: "Ratnagiri",          region: "Konkan Division",      tier: 2 },
  { name: "Mandangad",       district: "Ratnagiri",          region: "Konkan Division",      tier: 2 },
  { name: "Sawantwadi",      district: "Sindhudurg",         region: "Konkan Division",      tier: 2 },
  { name: "Malvan",          district: "Sindhudurg",         region: "Konkan Division",      tier: 2 },
  { name: "Kudal",           district: "Sindhudurg",         region: "Konkan Division",      tier: 2 },
  { name: "Vengurla",        district: "Sindhudurg",         region: "Konkan Division",      tier: 2 },
  { name: "Dahanu",          district: "Palghar",            region: "Konkan Division",      tier: 2 },
  { name: "Virar",           district: "Palghar",            region: "Konkan Division",      tier: 2 },
  { name: "Nalasopara",      district: "Palghar",            region: "Konkan Division",      tier: 2 },
  { name: "Wada",            district: "Palghar",            region: "Konkan Division",      tier: 2 },

  // Pune Division (excluding Pune city areas already listed)
  { name: "Pimpri-Chinchwad", district: "Pune",              region: "Pune Division",        tier: 2 },
  { name: "Khadki",          district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Talegaon Dabhade", district: "Pune",              region: "Pune Division",        tier: 2 },
  { name: "Chakan",          district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Lonavala",        district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Khandala",        district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Alandi",          district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Dehu",            district: "Pune",               region: "Pune Division",        tier: 2 },
  { name: "Karad",           district: "Satara",             region: "Pune Division",        tier: 2 },
  { name: "Wai",             district: "Satara",             region: "Pune Division",        tier: 2 },
  { name: "Phaltan",         district: "Satara",             region: "Pune Division",        tier: 2 },
  { name: "Mahabaleshwar",   district: "Satara",             region: "Pune Division",        tier: 2 },
  { name: "Koregaon Satara", district: "Satara",             region: "Pune Division",        tier: 2 },
  { name: "Miraj",           district: "Sangli",             region: "Pune Division",        tier: 2 },
  { name: "Islampur",        district: "Sangli",             region: "Pune Division",        tier: 2 },
  { name: "Tasgaon",         district: "Sangli",             region: "Pune Division",        tier: 2 },
  { name: "Ichalkaranji",    district: "Kolhapur",           region: "Pune Division",        tier: 2 },
  { name: "Jaysingpur",      district: "Kolhapur",           region: "Pune Division",        tier: 2 },
  { name: "Gadhinglaj",      district: "Kolhapur",           region: "Pune Division",        tier: 2 },
  { name: "Kagal",           district: "Kolhapur",           region: "Pune Division",        tier: 2 },
  { name: "Panhala",         district: "Kolhapur",           region: "Pune Division",        tier: 2 },
  { name: "Akkalkot",        district: "Solapur",            region: "Pune Division",        tier: 2 },
  { name: "Pandharpur",      district: "Solapur",            region: "Pune Division",        tier: 2 },
  { name: "Barshi",          district: "Solapur",            region: "Pune Division",        tier: 2 },
  { name: "Malshiras",       district: "Solapur",            region: "Pune Division",        tier: 2 },
  { name: "Mangalvedhe",     district: "Solapur",            region: "Pune Division",        tier: 2 },

  // Nashik Division (excluding Nashik city areas already listed)
  { name: "Malegaon",        district: "Nashik",             region: "Nashik Division",      tier: 2 },
  { name: "Sinnar",          district: "Nashik",             region: "Nashik Division",      tier: 2 },
  { name: "Igatpuri",        district: "Nashik",             region: "Nashik Division",      tier: 2 },
  { name: "Trimbak",         district: "Nashik",             region: "Nashik Division",      tier: 2 },
  { name: "Deola",           district: "Nashik",             region: "Nashik Division",      tier: 2 },
  { name: "Shirdi",          district: "Ahmednagar",         region: "Nashik Division",      tier: 2 },
  { name: "Shrirampur",      district: "Ahmednagar",         region: "Nashik Division",      tier: 2 },
  { name: "Sangamner",       district: "Ahmednagar",         region: "Nashik Division",      tier: 2 },
  { name: "Kopargaon",       district: "Ahmednagar",         region: "Nashik Division",      tier: 2 },
  { name: "Newasa",          district: "Ahmednagar",         region: "Nashik Division",      tier: 2 },
  { name: "Rahuri",          district: "Ahmednagar",         region: "Nashik Division",      tier: 2 },
  { name: "Jamkhed",         district: "Ahmednagar",         region: "Nashik Division",      tier: 2 },
  { name: "Bhusawal",        district: "Jalgaon",            region: "Nashik Division",      tier: 2 },
  { name: "Amalner",         district: "Jalgaon",            region: "Nashik Division",      tier: 2 },
  { name: "Chopda",          district: "Jalgaon",            region: "Nashik Division",      tier: 2 },
  { name: "Pachora",         district: "Jalgaon",            region: "Nashik Division",      tier: 2 },
  { name: "Raver",           district: "Jalgaon",            region: "Nashik Division",      tier: 2 },
  { name: "Sakri",           district: "Dhule",              region: "Nashik Division",      tier: 2 },
  { name: "Shirpur",         district: "Dhule",              region: "Nashik Division",      tier: 2 },
  { name: "Shahada",         district: "Nandurbar",          region: "Nashik Division",      tier: 2 },
  { name: "Navapur",         district: "Nandurbar",          region: "Nashik Division",      tier: 2 },
  { name: "Taloda",          district: "Nandurbar",          region: "Nashik Division",      tier: 2 },

  // Aurangabad Division (excluding Aurangabad city areas already listed)
  { name: "Jalna City",      district: "Jalna",              region: "Aurangabad Division",  tier: 2 },
  { name: "Ambad Jalna",     district: "Jalna",              region: "Aurangabad Division",  tier: 2 },
  { name: "Bhokardan",       district: "Jalna",              region: "Aurangabad Division",  tier: 2 },
  { name: "Partur",          district: "Jalna",              region: "Aurangabad Division",  tier: 2 },
  { name: "Bid",             district: "Beed",               region: "Aurangabad Division",  tier: 2 },
  { name: "Parli Vaijnath",  district: "Beed",               region: "Aurangabad Division",  tier: 2 },
  { name: "Ashti Beed",      district: "Beed",               region: "Aurangabad Division",  tier: 2 },
  { name: "Georai",          district: "Beed",               region: "Aurangabad Division",  tier: 2 },
  { name: "Patoda",          district: "Beed",               region: "Aurangabad Division",  tier: 2 },
  { name: "Nilanga",         district: "Latur",              region: "Aurangabad Division",  tier: 2 },
  { name: "Udgir",           district: "Latur",              region: "Aurangabad Division",  tier: 2 },
  { name: "Ausa",            district: "Latur",              region: "Aurangabad Division",  tier: 2 },
  { name: "Tuljapur",        district: "Osmanabad",          region: "Aurangabad Division",  tier: 2 },
  { name: "Paranda",         district: "Osmanabad",          region: "Aurangabad Division",  tier: 2 },
  { name: "Bhum",            district: "Osmanabad",          region: "Aurangabad Division",  tier: 2 },
  { name: "Omerga",          district: "Osmanabad",          region: "Aurangabad Division",  tier: 2 },
  { name: "Parbhani City",   district: "Parbhani",           region: "Aurangabad Division",  tier: 2 },
  { name: "Gangakhed",       district: "Parbhani",           region: "Aurangabad Division",  tier: 2 },
  { name: "Purna",           district: "Parbhani",           region: "Aurangabad Division",  tier: 2 },
  { name: "Kinwat",          district: "Nanded",             region: "Aurangabad Division",  tier: 2 },
  { name: "Mukhed",          district: "Nanded",             region: "Aurangabad Division",  tier: 2 },
  { name: "Deglur",          district: "Nanded",             region: "Aurangabad Division",  tier: 2 },
  { name: "Hadgaon",         district: "Nanded",             region: "Aurangabad Division",  tier: 2 },
  { name: "Basmat",          district: "Hingoli",            region: "Aurangabad Division",  tier: 2 },
  { name: "Kalamnuri",       district: "Hingoli",            region: "Aurangabad Division",  tier: 2 },
  { name: "Aundha Nagnath",  district: "Hingoli",            region: "Aurangabad Division",  tier: 2 },

  // Amravati Division
  { name: "Achalpur",        district: "Amravati",           region: "Amravati Division",    tier: 2 },
  { name: "Chandur Bazar",   district: "Amravati",           region: "Amravati Division",    tier: 2 },
  { name: "Morshi",          district: "Amravati",           region: "Amravati Division",    tier: 2 },
  { name: "Dharni",          district: "Amravati",           region: "Amravati Division",    tier: 2 },
  { name: "Anjangaon",       district: "Amravati",           region: "Amravati Division",    tier: 2 },
  { name: "Murtajapur",      district: "Akola",              region: "Amravati Division",    tier: 2 },
  { name: "Akot",            district: "Akola",              region: "Amravati Division",    tier: 2 },
  { name: "Balapur",         district: "Akola",              region: "Amravati Division",    tier: 2 },
  { name: "Washim City",     district: "Washim",             region: "Amravati Division",    tier: 2 },
  { name: "Karanja Washim",  district: "Washim",             region: "Amravati Division",    tier: 2 },
  { name: "Malegaon Washim", district: "Washim",             region: "Amravati Division",    tier: 2 },
  { name: "Khamgaon",        district: "Buldhana",           region: "Amravati Division",    tier: 2 },
  { name: "Malkapur",        district: "Buldhana",           region: "Amravati Division",    tier: 2 },
  { name: "Chikhli",         district: "Buldhana",           region: "Amravati Division",    tier: 2 },
  { name: "Shegaon",         district: "Buldhana",           region: "Amravati Division",    tier: 2 },
  { name: "Mehkar",          district: "Buldhana",           region: "Amravati Division",    tier: 2 },
  { name: "Deulgaon Raja",   district: "Buldhana",           region: "Amravati Division",    tier: 2 },
  { name: "Darwha",          district: "Yavatmal",           region: "Amravati Division",    tier: 2 },
  { name: "Pusad",           district: "Yavatmal",           region: "Amravati Division",    tier: 2 },
  { name: "Wani",            district: "Yavatmal",           region: "Amravati Division",    tier: 2 },
  { name: "Arni",            district: "Yavatmal",           region: "Amravati Division",    tier: 2 },
  { name: "Digras",          district: "Yavatmal",           region: "Amravati Division",    tier: 2 },

  // Nagpur Division (excluding Nagpur city areas already listed)
  { name: "Kamptee",         district: "Nagpur",             region: "Nagpur Division",      tier: 2 },
  { name: "Ramtek",          district: "Nagpur",             region: "Nagpur Division",      tier: 2 },
  { name: "Katol",           district: "Nagpur",             region: "Nagpur Division",      tier: 2 },
  { name: "Hingna",          district: "Nagpur",             region: "Nagpur Division",      tier: 2 },
  { name: "Umred",           district: "Nagpur",             region: "Nagpur Division",      tier: 2 },
  { name: "Arvi",            district: "Wardha",             region: "Nagpur Division",      tier: 2 },
  { name: "Ashti Wardha",    district: "Wardha",             region: "Nagpur Division",      tier: 2 },
  { name: "Deoli",           district: "Wardha",             region: "Nagpur Division",      tier: 2 },
  { name: "Seloo",           district: "Wardha",             region: "Nagpur Division",      tier: 2 },
  { name: "Tumsar",          district: "Bhandara",           region: "Nagpur Division",      tier: 2 },
  { name: "Lakhandur",       district: "Bhandara",           region: "Nagpur Division",      tier: 2 },
  { name: "Pauni",           district: "Bhandara",           region: "Nagpur Division",      tier: 2 },
  { name: "Tirora",          district: "Gondia",             region: "Nagpur Division",      tier: 2 },
  { name: "Goregaon Gondia", district: "Gondia",             region: "Nagpur Division",      tier: 2 },
  { name: "Salekasa",        district: "Gondia",             region: "Nagpur Division",      tier: 2 },
  { name: "Ballarpur",       district: "Chandrapur",         region: "Nagpur Division",      tier: 2 },
  { name: "Warora",          district: "Chandrapur",         region: "Nagpur Division",      tier: 2 },
  { name: "Rajura",          district: "Chandrapur",         region: "Nagpur Division",      tier: 2 },
  { name: "Mul",             district: "Chandrapur",         region: "Nagpur Division",      tier: 2 },
  { name: "Brahmapuri",      district: "Chandrapur",         region: "Nagpur Division",      tier: 2 },
  { name: "Chimur",          district: "Chandrapur",         region: "Nagpur Division",      tier: 2 },
  { name: "Bhadravati",      district: "Chandrapur",         region: "Nagpur Division",      tier: 2 },
  { name: "Aheri",           district: "Gadchiroli",         region: "Nagpur Division",      tier: 2 },
  { name: "Armori",          district: "Gadchiroli",         region: "Nagpur Division",      tier: 2 },
  { name: "Desaiganj",       district: "Gadchiroli",         region: "Nagpur Division",      tier: 2 },
  { name: "Dhanora",         district: "Gadchiroli",         region: "Nagpur Division",      tier: 2 },

  // ── Tier 3 — Tehsil headquarters & smaller towns ──────────────────
  // Thane
  { name: "Dombivli",        district: "Thane",              region: "Konkan Division",      tier: 3 },
  { name: "Titwala",         district: "Thane",              region: "Konkan Division",      tier: 3 },
  { name: "Shahapur",        district: "Thane",              region: "Konkan Division",      tier: 3 },
  { name: "Murbad",          district: "Thane",              region: "Konkan Division",      tier: 3 },
  { name: "Vashi",           district: "Thane",              region: "Konkan Division",      tier: 3 },
  { name: "Airoli",          district: "Thane",              region: "Konkan Division",      tier: 3 },
  { name: "Ghansoli",        district: "Thane",              region: "Konkan Division",      tier: 3 },

  // Raigad
  { name: "Uran",            district: "Raigad",             region: "Konkan Division",      tier: 3 },
  { name: "Roha",            district: "Raigad",             region: "Konkan Division",      tier: 3 },
  { name: "Mahad",           district: "Raigad",             region: "Konkan Division",      tier: 3 },
  { name: "Mangaon",         district: "Raigad",             region: "Konkan Division",      tier: 3 },
  { name: "Mhasla",          district: "Raigad",             region: "Konkan Division",      tier: 3 },
  { name: "Shrivardhan",     district: "Raigad",             region: "Konkan Division",      tier: 3 },
  { name: "Murud",           district: "Raigad",             region: "Konkan Division",      tier: 3 },
  { name: "Tala",            district: "Raigad",             region: "Konkan Division",      tier: 3 },
  { name: "Poladpur",        district: "Raigad",             region: "Konkan Division",      tier: 3 },

  // Ratnagiri
  { name: "Lanja",           district: "Ratnagiri",          region: "Konkan Division",      tier: 3 },
  { name: "Guhagar",         district: "Ratnagiri",          region: "Konkan Division",      tier: 3 },
  { name: "Khed Ratnagiri",  district: "Ratnagiri",          region: "Konkan Division",      tier: 3 },
  { name: "Sangameshwar",    district: "Ratnagiri",          region: "Konkan Division",      tier: 3 },
  { name: "Rajapur",         district: "Ratnagiri",          region: "Konkan Division",      tier: 3 },

  // Sindhudurg
  { name: "Devgad",          district: "Sindhudurg",         region: "Konkan Division",      tier: 3 },
  { name: "Vaibhavwadi",     district: "Sindhudurg",         region: "Konkan Division",      tier: 3 },
  { name: "Kankavli",        district: "Sindhudurg",         region: "Konkan Division",      tier: 3 },
  { name: "Dodamarg",        district: "Sindhudurg",         region: "Konkan Division",      tier: 3 },

  // Palghar
  { name: "Talasari",        district: "Palghar",            region: "Konkan Division",      tier: 3 },
  { name: "Jawhar",          district: "Palghar",            region: "Konkan Division",      tier: 3 },
  { name: "Mokhada",         district: "Palghar",            region: "Konkan Division",      tier: 3 },
  { name: "Vada Palghar",    district: "Palghar",            region: "Konkan Division",      tier: 3 },
  { name: "Vikramgad",       district: "Palghar",            region: "Konkan Division",      tier: 3 },

  // Pune district
  { name: "Bhor",            district: "Pune",               region: "Pune Division",        tier: 3 },
  { name: "Baramati",        district: "Pune",               region: "Pune Division",        tier: 3 },
  { name: "Indapur",         district: "Pune",               region: "Pune Division",        tier: 3 },
  { name: "Maval",           district: "Pune",               region: "Pune Division",        tier: 3 },
  { name: "Mulshi",          district: "Pune",               region: "Pune Division",        tier: 3 },
  { name: "Purandhar",       district: "Pune",               region: "Pune Division",        tier: 3 },
  { name: "Shirur Pune",     district: "Pune",               region: "Pune Division",        tier: 3 },
  { name: "Daund",           district: "Pune",               region: "Pune Division",        tier: 3 },
  { name: "Junnar",          district: "Pune",               region: "Pune Division",        tier: 3 },
  { name: "Ambegaon",        district: "Pune",               region: "Pune Division",        tier: 3 },
  { name: "Khed Pune",       district: "Pune",               region: "Pune Division",        tier: 3 },
  { name: "Rajgurunagar",    district: "Pune",               region: "Pune Division",        tier: 3 },
  { name: "Manchar",         district: "Pune",               region: "Pune Division",        tier: 3 },

  // Satara district
  { name: "Satara City",     district: "Satara",             region: "Pune Division",        tier: 3 },
  { name: "Khatav",          district: "Satara",             region: "Pune Division",        tier: 3 },
  { name: "Jaoli",           district: "Satara",             region: "Pune Division",        tier: 3 },
  { name: "Khandala Satara", district: "Satara",             region: "Pune Division",        tier: 3 },
  { name: "Patan Satara",    district: "Satara",             region: "Pune Division",        tier: 3 },
  { name: "Man Satara",      district: "Satara",             region: "Pune Division",        tier: 3 },

  // Sangli district
  { name: "Jat",             district: "Sangli",             region: "Pune Division",        tier: 3 },
  { name: "Walwa",           district: "Sangli",             region: "Pune Division",        tier: 3 },
  { name: "Khanapur Sangli", district: "Sangli",             region: "Pune Division",        tier: 3 },
  { name: "Atpadi",          district: "Sangli",             region: "Pune Division",        tier: 3 },
  { name: "Kavathemahankal", district: "Sangli",             region: "Pune Division",        tier: 3 },
  { name: "Palus",           district: "Sangli",             region: "Pune Division",        tier: 3 },

  // Kolhapur district
  { name: "Shirol",          district: "Kolhapur",           region: "Pune Division",        tier: 3 },
  { name: "Hatkanangle",     district: "Kolhapur",           region: "Pune Division",        tier: 3 },
  { name: "Karvir",          district: "Kolhapur",           region: "Pune Division",        tier: 3 },
  { name: "Bhudargad",       district: "Kolhapur",           region: "Pune Division",        tier: 3 },
  { name: "Radhanagari",     district: "Kolhapur",           region: "Pune Division",        tier: 3 },
  { name: "Shahuwadi",       district: "Kolhapur",           region: "Pune Division",        tier: 3 },
  { name: "Chandgad",        district: "Kolhapur",           region: "Pune Division",        tier: 3 },
  { name: "Ajra",            district: "Kolhapur",           region: "Pune Division",        tier: 3 },

  // Solapur district
  { name: "Mohol",           district: "Solapur",            region: "Pune Division",        tier: 3 },
  { name: "Karmala",         district: "Solapur",            region: "Pune Division",        tier: 3 },
  { name: "Madha",           district: "Solapur",            region: "Pune Division",        tier: 3 },
  { name: "Sangole",         district: "Solapur",            region: "Pune Division",        tier: 3 },
  { name: "South Solapur",   district: "Solapur",            region: "Pune Division",        tier: 3 },
  { name: "North Solapur",   district: "Solapur",            region: "Pune Division",        tier: 3 },

  // Nashik district
  { name: "Dindori Nashik",  district: "Nashik",             region: "Nashik Division",      tier: 3 },
  { name: "Niphad",          district: "Nashik",             region: "Nashik Division",      tier: 3 },
  { name: "Yeola",           district: "Nashik",             region: "Nashik Division",      tier: 3 },
  { name: "Nandgaon",        district: "Nashik",             region: "Nashik Division",      tier: 3 },
  { name: "Kalwan",          district: "Nashik",             region: "Nashik Division",      tier: 3 },
  { name: "Chandwad",        district: "Nashik",             region: "Nashik Division",      tier: 3 },
  { name: "Surgana",         district: "Nashik",             region: "Nashik Division",      tier: 3 },
  { name: "Peth",            district: "Nashik",             region: "Nashik Division",      tier: 3 },

  // Ahmednagar district
  { name: "Parner",          district: "Ahmednagar",         region: "Nashik Division",      tier: 3 },
  { name: "Shevgaon",        district: "Ahmednagar",         region: "Nashik Division",      tier: 3 },
  { name: "Pathardi",        district: "Ahmednagar",         region: "Nashik Division",      tier: 3 },
  { name: "Karjat Ahmednagar", district: "Ahmednagar",       region: "Nashik Division",      tier: 3 },
  { name: "Akole",           district: "Ahmednagar",         region: "Nashik Division",      tier: 3 },
  { name: "Nevasa",          district: "Ahmednagar",         region: "Nashik Division",      tier: 3 },

  // Jalgaon district
  { name: "Bodwad",          district: "Jalgaon",            region: "Nashik Division",      tier: 3 },
  { name: "Jamner",          district: "Jalgaon",            region: "Nashik Division",      tier: 3 },
  { name: "Erandol",         district: "Jalgaon",            region: "Nashik Division",      tier: 3 },
  { name: "Dharangaon",      district: "Jalgaon",            region: "Nashik Division",      tier: 3 },
  { name: "Parola",          district: "Jalgaon",            region: "Nashik Division",      tier: 3 },
  { name: "Muktainagar",     district: "Jalgaon",            region: "Nashik Division",      tier: 3 },
  { name: "Yawal",           district: "Jalgaon",            region: "Nashik Division",      tier: 3 },

  // Dhule district
  { name: "Sindkheda",       district: "Dhule",              region: "Nashik Division",      tier: 3 },
  { name: "Shindkheda",      district: "Dhule",              region: "Nashik Division",      tier: 3 },

  // Nandurbar district
  { name: "Akkalkuwa",       district: "Nandurbar",          region: "Nashik Division",      tier: 3 },
  { name: "Dhadgaon",        district: "Nandurbar",          region: "Nashik Division",      tier: 3 },
  { name: "Nandurbar City",  district: "Nandurbar",          region: "Nashik Division",      tier: 3 },

  // Aurangabad district
  { name: "Paithan",         district: "Aurangabad",         region: "Aurangabad Division",  tier: 3 },
  { name: "Gangapur Aurangabad", district: "Aurangabad",     region: "Aurangabad Division",  tier: 3 },
  { name: "Vaijapur",        district: "Aurangabad",         region: "Aurangabad Division",  tier: 3 },
  { name: "Khuldabad",       district: "Aurangabad",         region: "Aurangabad Division",  tier: 3 },
  { name: "Kannad",          district: "Aurangabad",         region: "Aurangabad Division",  tier: 3 },
  { name: "Soegaon",         district: "Aurangabad",         region: "Aurangabad Division",  tier: 3 },
  { name: "Sillod",          district: "Aurangabad",         region: "Aurangabad Division",  tier: 3 },
  { name: "Phulambri",       district: "Aurangabad",         region: "Aurangabad Division",  tier: 3 },

  // Jalna district
  { name: "Jafrabad",        district: "Jalna",              region: "Aurangabad Division",  tier: 3 },
  { name: "Badnapur",        district: "Jalna",              region: "Aurangabad Division",  tier: 3 },
  { name: "Ghansawangi",     district: "Jalna",              region: "Aurangabad Division",  tier: 3 },
  { name: "Mantha",          district: "Jalna",              region: "Aurangabad Division",  tier: 3 },

  // Beed district
  { name: "Majalgaon",       district: "Beed",               region: "Aurangabad Division",  tier: 3 },
  { name: "Shirur Kasar",    district: "Beed",               region: "Aurangabad Division",  tier: 3 },
  { name: "Wadwani",         district: "Beed",               region: "Aurangabad Division",  tier: 3 },
  { name: "Ambajogai",       district: "Beed",               region: "Aurangabad Division",  tier: 3 },
  { name: "Kaij",            district: "Beed",               region: "Aurangabad Division",  tier: 3 },

  // Latur district
  { name: "Ahmadpur",        district: "Latur",              region: "Aurangabad Division",  tier: 3 },
  { name: "Renapur",         district: "Latur",              region: "Aurangabad Division",  tier: 3 },
  { name: "Chakur",          district: "Latur",              region: "Aurangabad Division",  tier: 3 },
  { name: "Shirur Anantpal", district: "Latur",              region: "Aurangabad Division",  tier: 3 },
  { name: "Jalkot",          district: "Latur",              region: "Aurangabad Division",  tier: 3 },

  // Osmanabad district
  { name: "Kallam",          district: "Osmanabad",          region: "Aurangabad Division",  tier: 3 },
  { name: "Washi",           district: "Osmanabad",          region: "Aurangabad Division",  tier: 3 },
  { name: "Kalamb Osmanabad", district: "Osmanabad",         region: "Aurangabad Division",  tier: 3 },
  { name: "Lohara",          district: "Osmanabad",          region: "Aurangabad Division",  tier: 3 },

  // Parbhani district
  { name: "Sonpeth",         district: "Parbhani",           region: "Aurangabad Division",  tier: 3 },
  { name: "Jintur",          district: "Parbhani",           region: "Aurangabad Division",  tier: 3 },
  { name: "Manwath",         district: "Parbhani",           region: "Aurangabad Division",  tier: 3 },
  { name: "Palam",           district: "Parbhani",           region: "Aurangabad Division",  tier: 3 },
  { name: "Pathri",          district: "Parbhani",           region: "Aurangabad Division",  tier: 3 },

  // Nanded district
  { name: "Bhokar",          district: "Nanded",             region: "Aurangabad Division",  tier: 3 },
  { name: "Umri",            district: "Nanded",             region: "Aurangabad Division",  tier: 3 },
  { name: "Loha",            district: "Nanded",             region: "Aurangabad Division",  tier: 3 },
  { name: "Kandhar",         district: "Nanded",             region: "Aurangabad Division",  tier: 3 },
  { name: "Naigaon Nanded",  district: "Nanded",             region: "Aurangabad Division",  tier: 3 },
  { name: "Himayatnagar",    district: "Nanded",             region: "Aurangabad Division",  tier: 3 },
  { name: "Mahur",           district: "Nanded",             region: "Aurangabad Division",  tier: 3 },
  { name: "Ardhapur",        district: "Nanded",             region: "Aurangabad Division",  tier: 3 },

  // Hingoli district
  { name: "Sengaon",         district: "Hingoli",            region: "Aurangabad Division",  tier: 3 },
  { name: "Vasmat",          district: "Hingoli",            region: "Aurangabad Division",  tier: 3 },

  // Amravati district
  { name: "Teosa",           district: "Amravati",           region: "Amravati Division",    tier: 3 },
  { name: "Daryapur",        district: "Amravati",           region: "Amravati Division",    tier: 3 },
  { name: "Nandgaon Khandeshwar", district: "Amravati",      region: "Amravati Division",    tier: 3 },
  { name: "Bhatkuli",        district: "Amravati",           region: "Amravati Division",    tier: 3 },
  { name: "Dhamangaon",      district: "Amravati",           region: "Amravati Division",    tier: 3 },

  // Akola district
  { name: "Patur",           district: "Akola",              region: "Amravati Division",    tier: 3 },
  { name: "Telhara",         district: "Akola",              region: "Amravati Division",    tier: 3 },
  { name: "Barshitakli",     district: "Akola",              region: "Amravati Division",    tier: 3 },

  // Washim district
  { name: "Risod",           district: "Washim",             region: "Amravati Division",    tier: 3 },
  { name: "Mangrulpir",      district: "Washim",             region: "Amravati Division",    tier: 3 },
  { name: "Manora",          district: "Washim",             region: "Amravati Division",    tier: 3 },

  // Buldhana district
  { name: "Jalgaon Jamod",   district: "Buldhana",           region: "Amravati Division",    tier: 3 },
  { name: "Sangrampur",      district: "Buldhana",           region: "Amravati Division",    tier: 3 },
  { name: "Nandura",         district: "Buldhana",           region: "Amravati Division",    tier: 3 },
  { name: "Motala",          district: "Buldhana",           region: "Amravati Division",    tier: 3 },
  { name: "Sindkhed Raja",   district: "Buldhana",           region: "Amravati Division",    tier: 3 },
  { name: "Lonar",           district: "Buldhana",           region: "Amravati Division",    tier: 3 },

  // Yavatmal district
  { name: "Ghatanji",        district: "Yavatmal",           region: "Amravati Division",    tier: 3 },
  { name: "Ralegaon",        district: "Yavatmal",           region: "Amravati Division",    tier: 3 },
  { name: "Umarkhed",        district: "Yavatmal",           region: "Amravati Division",    tier: 3 },
  { name: "Maregaon",        district: "Yavatmal",           region: "Amravati Division",    tier: 3 },
  { name: "Kalamb Yavatmal", district: "Yavatmal",           region: "Amravati Division",    tier: 3 },
  { name: "Ner",             district: "Yavatmal",           region: "Amravati Division",    tier: 3 },

  // Nagpur district
  { name: "Parseoni",        district: "Nagpur",             region: "Nagpur Division",      tier: 3 },
  { name: "Saoner",          district: "Nagpur",             region: "Nagpur Division",      tier: 3 },
  { name: "Narkhed",         district: "Nagpur",             region: "Nagpur Division",      tier: 3 },
  { name: "Bhiwapur",        district: "Nagpur",             region: "Nagpur Division",      tier: 3 },
  { name: "Kuhi",            district: "Nagpur",             region: "Nagpur Division",      tier: 3 },
  { name: "Mouda",           district: "Nagpur",             region: "Nagpur Division",      tier: 3 },

  // Wardha district
  { name: "Hinganghat",      district: "Wardha",             region: "Nagpur Division",      tier: 3 },
  { name: "Samudrapur",      district: "Wardha",             region: "Nagpur Division",      tier: 3 },
  { name: "Karanja Wardha",  district: "Wardha",             region: "Nagpur Division",      tier: 3 },
  { name: "Pulgaon",         district: "Wardha",             region: "Nagpur Division",      tier: 3 },

  // Bhandara district
  { name: "Mohadi",          district: "Bhandara",           region: "Nagpur Division",      tier: 3 },
  { name: "Sakoli",          district: "Bhandara",           region: "Nagpur Division",      tier: 3 },
  { name: "Lakhani",         district: "Bhandara",           region: "Nagpur Division",      tier: 3 },

  // Gondia district
  { name: "Sadak Arjuni",    district: "Gondia",             region: "Nagpur Division",      tier: 3 },
  { name: "Amgaon",          district: "Gondia",             region: "Nagpur Division",      tier: 3 },
  { name: "Arjuni Morgaon",  district: "Gondia",             region: "Nagpur Division",      tier: 3 },
  { name: "Deori Gondia",    district: "Gondia",             region: "Nagpur Division",      tier: 3 },

  // Chandrapur district
  { name: "Sindewahi",       district: "Chandrapur",         region: "Nagpur Division",      tier: 3 },
  { name: "Sawali",          district: "Chandrapur",         region: "Nagpur Division",      tier: 3 },
  { name: "Korpana",         district: "Chandrapur",         region: "Nagpur Division",      tier: 3 },
  { name: "Gondpipri",       district: "Chandrapur",         region: "Nagpur Division",      tier: 3 },
  { name: "Pombhurna",       district: "Chandrapur",         region: "Nagpur Division",      tier: 3 },
  { name: "Nagbhir",         district: "Chandrapur",         region: "Nagpur Division",      tier: 3 },
  { name: "Jiwati",          district: "Chandrapur",         region: "Nagpur Division",      tier: 3 },

  // Gadchiroli district
  { name: "Chamorshi",       district: "Gadchiroli",         region: "Nagpur Division",      tier: 3 },
  { name: "Mulchera",        district: "Gadchiroli",         region: "Nagpur Division",      tier: 3 },
  { name: "Korchi",          district: "Gadchiroli",         region: "Nagpur Division",      tier: 3 },
  { name: "Bhamragad",       district: "Gadchiroli",         region: "Nagpur Division",      tier: 3 },
  { name: "Kurkheda",        district: "Gadchiroli",         region: "Nagpur Division",      tier: 3 },
  { name: "Sironcha",        district: "Gadchiroli",         region: "Nagpur Division",      tier: 3 },
  { name: "Wadsa",           district: "Gadchiroli",         region: "Nagpur Division",      tier: 3 },
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
export const ALL_CITY_SLUGS: string[] = MH_CITIES.map((c) => slugifyCity(c.name));

/** Look up a city by its URL slug */
export function getCityData(slug: string): MHCity | undefined {
  return MH_CITIES.find((c) => slugifyCity(c.name) === slug);
}

/** Format a raw slug into a display name (fallback when city not in list) */
export function formatCityDisplay(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}