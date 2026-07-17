// data/haryana-gst-cities.ts

export type HaryanaArea = {
  name: string;
  district: string;
  region: string;
  tier: 1 | 2 | 3;
};

export const HARYANA_REGIONS: Record<string, string[]> = {
  "Gurugram": [
    "Gurugram", "Gurgaon", "DLF Phase 1", "DLF Phase 2", "DLF Phase 3", 
    "DLF Phase 4", "DLF Phase 5", "Cyber Hub", "Cyber City", "Golf Course Road",
    "MG Road", "Sohna Road", "Dwarka Expressway", "Palam Vihar", "Sushant Lok",
    "South City 1", "South City 2", "Nirvana Country", "Ardee City", "DLF Garden City",
    "Sector 14", "Sector 15", "Sector 17", "Sector 18", "Sector 21",
    "Sector 22", "Sector 23", "Sector 27", "Sector 28", "Sector 29",
    "Sector 31", "Sector 32", "Sector 38", "Sector 40", "Sector 42",
    "Sector 43", "Sector 44", "Sector 45", "Sector 46", "Sector 47",
    "Sector 48", "Sector 49", "Sector 50", "Sector 51", "Sector 52",
    "Sector 53", "Sector 54", "Sector 55", "Sector 56", "Sector 57",
    "Sector 58", "Sector 62", "Sector 63", "Sector 65", "Sector 66",
    "Sector 67", "Sector 68", "Sector 69", "Sector 70", "Sector 71",
    "Sector 72", "Sector 76", "Sector 77", "Sector 78", "Sector 79",
    "Sector 80", "Sector 81", "Sector 82", "Sector 83", "Sector 84",
    "Sector 85", "Sector 86", "Sector 89", "Sector 90", "Sector 92",
    "Sector 95", "Sector 99", "Sector 100", "Sector 102", "Sector 103",
    "Sector 104", "Sector 106", "Sector 107", "Sector 108", "Sector 109",
    "Sector 110", "Sector 111", "IMT Manesar", "Manesar", "Bilaspur",
    "Farukhnagar", "Pataudi", "Sohna", "Badshahpur", "Wazirabad",
    "Kadipur", "Ghata", "Harsaru", "Tigaon", "Sihi",
    // Metro Stations
    "Sikanderpur Metro", "IFFCO Chowk Metro", "MG Road Metro", "Guru Dronacharya Metro",
    "Arjan Garh Metro", "Ghitorni Metro", "Phase 1 Rapid Metro", "Phase 2 Rapid Metro",
    "Phase 3 Rapid Metro", "Cyber City Metro", "Moulsari Avenue Metro", "Belvedere Towers Metro",
    "IndusInd Bank Cyber City Metro", "DLF Phase 2 Metro", "Vodafone Belvedere Metro",
  ],
  "Faridabad": [
    "Faridabad", "Old Faridabad", "New Industrial Town", "Ballabgarh", "Sector 1",
    "Sector 2", "Sector 3", "Sector 4", "Sector 5", "Sector 6",
    "Sector 7", "Sector 8", "Sector 9", "Sector 10", "Sector 11",
    "Sector 12", "Sector 15", "Sector 16", "Sector 16A", "Sector 17",
    "Sector 19", "Sector 20", "Sector 21", "Sector 21A", "Sector 21B",
    "Sector 21C", "Sector 21D", "Sector 22", "Sector 27", "Sector 28",
    "Sector 29", "Sector 30", "Sector 31", "Sector 37", "Sector 41",
    "Sector 46", "Sector 55", "Sector 58", "Sector 66", "Sector 81",
    "Sector 86", "Sector 88", "Greater Faridabad", "NIT Faridabad",
    "Neemka", "Surajkund", "Pali", "Tigaon", "Kheri Kalan",
    "Kheri Sadh", "Dabua Colony", "Ajronda Chowk", "Mujesar",
    "Badarpur Border", "Bata Chowk", "Nehru Ground", "Gandhi Ground",
  ],
  "Rohtak": [
    "Rohtak", "Rohtak City", "Model Town Rohtak", "Subhash Nagar", "Bohar",
    "Kiloi", "Sampla", "Kalanaur", "Meham", "Lakhan Majra",
    "Rohtak Cantonment", "Jind Road", "Delhi Road", "Sonipat Road",
    "Bahadurgarh Road", "Rohtak University", "PGIMS Rohtak",
  ],
  "Panipat": [
    "Panipat", "GT Road Panipat", "Model Town Panipat", "Huda Panipat",
    "Israna", "Samalkha", "Bapoli", "Madlauda", "Sanauli",
    "Kanisa", "Bapauli", "Industrial Area Panipat", "Refinery Road",
    "Assandh Road", "Karnal Road", "Jind Road Panipat",
  ],
  "Sonipat": [
    "Sonipat", "Kundli", "Rai", "Gohana", "Kharkhoda",
    "Gannaur", "Mundlana", "Kathura", "Model Town Sonipat",
    "Industrial Area Kundli", "Ashok Vihar Sonipat", "Murthal",
    "Delhi Border Sonipat", "Barwala Sonipat",
  ],
  "Hisar": [
    "Hisar", "Hansi", "Barwala", "Adampur", "Narnaund",
    "Uklana", "Agroha", "Bass", "Balsamand", "Brassal",
    "Dobhi Hisar", "Industrial Area Hisar", "Red Square Market",
    "Vidyut Nagar", "Steel Town", "Railway Road Hisar",
  ],
  "Karnal": [
    "Karnal", "Assandh", "Gharaunda", "Nilokheri", "Indri",
    "Taraori", "Nissing", "Karnal Cantonment", "Sector 12 Karnal",
    "Sector 13 Karnal", "Model Town Karnal", "Industrial Area Karnal",
    "GT Road Karnal", "Kurukshetra Road",
  ],
  "Ambala": [
    "Ambala", "Ambala City", "Ambala Cantonment", "Ambala Sadar", "Naraingarh",
    "Shahzadpur", "Saha", "Barara", "Baldev Nagar", "Mahesh Nagar",
    "Shastri Nagar Ambala", "Model Town Ambala", "Ambala Air Force Station",
  ],
  "Yamunanagar": [
    "Yamunanagar", "Jagadhri", "Radaur", "Bilaspur Yamunanagar", "Chhachhrauli",
    "Sadhaura", "Mustafabad", "Jagadhri Workshop", "Model Town Yamunanagar",
    "Industrial Area Jagadhri",
  ],
  "Kurukshetra": [
    "Kurukshetra", "Thanesar", "Pehowa", "Shahabad", "Ladwa",
    "Ismailabad", "Babain", "Thanesar City", "Jyotisar",
    "Brahma Sarovar", "Sannihit Sarovar", "University Area Kurukshetra",
  ],
  "Panchkula": [
    "Panchkula", "Sector 1 Panchkula", "Sector 2 Panchkula", "Sector 3 Panchkula",
    "Sector 4 Panchkula", "Sector 5 Panchkula", "Sector 6 Panchkula", "Sector 7 Panchkula",
    "Sector 8 Panchkula", "Sector 9 Panchkula", "Sector 10 Panchkula", "Sector 11 Panchkula",
    "Sector 12 Panchkula", "Sector 14 Panchkula", "Sector 15 Panchkula", "Sector 16 Panchkula",
    "Sector 17 Panchkula", "Sector 20 Panchkula", "Sector 21 Panchkula", "Sector 25 Panchkula",
    "Kalka", "Pinjore", "Morni Hills", "Raipur Rani", "Barwala Panchkula",
  ],
  "Bhiwani": [
    "Bhiwani", "Tosham", "Loharu", "Siwani", "Bawani Khera",
    "Kairu", "Behal", "Dadhi", "Model Town Bhiwani", "Railway Road Bhiwani",
    "Nehru Garden", "Kitlana", "Khanak",
  ],
  "Sirsa": [
    "Sirsa", "Dabwali", "Ellenabad", "Nathusari Chopta", "Odhan",
    "Rania", "Baragudha", "Kalanwali", "Model Town Sirsa",
  ],
  "Jind": [
    "Jind", "Narwana", "Safidon", "Uchana", "Julana",
    "Alewa", "Pillukhera", "Jind City", "Model Town Jind",
  ],
  "Jhajjar": [
    "Jhajjar", "Bahadurgarh", "Beri", "Matanhail", "Salhawas",
    "Jhajjar City", "Badli", "Dighal", "Chhara",
  ],
  "Kaithal": [
    "Kaithal", "Guhla", "Pundri", "Rajaund", "Kalayat",
    "Siwan Kaithal", "Kaithal City", "Model Town Kaithal",
  ],
  "Rewari": [
    "Rewari", "Kosli", "Bawal", "Nahar", "Jatusana",
    "Khol", "Rewari City", "Railway Road Rewari", "Model Town Rewari",
  ],
  "Mahendragarh": [
    "Mahendragarh", "Narnaul", "Kanina", "Ateli", "Nangal Chaudhry",
    "Satnali", "Mahendragarh City", "Narnaul City",
  ],
  "Fatehabad": [
    "Fatehabad", "Tohana", "Ratia", "Bhuna", "Jakhal",
    "Bhattu Kalan", "Fatehabad City",
  ],
  "Palwal": [
    "Palwal", "Hodal", "Hathin", "Hassanpur", "Prithla",
    "Aurangabad Palwal", "Palwal City",
  ],
  "Mewat": [
    "Nuh", "Ferozepur Jhirka", "Tauru", "Nagina", "Punhana",
    "Pingwan", "Indri Mewat",
  ],
  "Charkhi Dadri": [
    "Charkhi Dadri", "Badhra", "Dadri", "Jhojhu Kalan",
    "Bond Kalan", "Charkhi Dadri City",
  ],
};

export const HARYANA_AREAS: HaryanaArea[] = [
  // ── Tier 1 — Major commercial / administrative hubs ──────────────────────
  { name: "Gurugram",            district: "Gurugram",        region: "Gurugram",         tier: 1 },
  { name: "Faridabad",           district: "Faridabad",       region: "Faridabad",        tier: 1 },
  { name: "Gurgaon",             district: "Gurugram",        region: "Gurugram",         tier: 1 },
  { name: "Panchkula",           district: "Panchkula",       region: "Panchkula",        tier: 1 },
  { name: "Ambala",              district: "Ambala",          region: "Ambala",           tier: 1 },
  { name: "Yamunanagar",         district: "Yamunanagar",     region: "Yamunanagar",      tier: 1 },
  { name: "Rohtak",              district: "Rohtak",          region: "Rohtak",           tier: 1 },
  { name: "Hisar",               district: "Hisar",           region: "Hisar",            tier: 1 },
  { name: "Karnal",              district: "Karnal",          region: "Karnal",           tier: 1 },
  { name: "Sonipat",             district: "Sonipat",         region: "Sonipat",          tier: 1 },
  { name: "Panipat",             district: "Panipat",         region: "Panipat",          tier: 1 },
  { name: "Bhiwani",             district: "Bhiwani",         region: "Bhiwani",          tier: 1 },
  { name: "Sirsa",               district: "Sirsa",           region: "Sirsa",            tier: 1 },
  { name: "Bahadurgarh",         district: "Jhajjar",         region: "Jhajjar",          tier: 1 },
  { name: "Jind",                district: "Jind",            region: "Jind",             tier: 1 },
  { name: "Thanesar",            district: "Kurukshetra",     region: "Kurukshetra",      tier: 1 },
  { name: "Kaithal",             district: "Kaithal",         region: "Kaithal",          tier: 1 },
  { name: "Rewari",              district: "Rewari",          region: "Rewari",           tier: 1 },
  { name: "Palwal",              district: "Palwal",          region: "Palwal",           tier: 1 },
  { name: "Narnaul",             district: "Mahendragarh",    region: "Mahendragarh",     tier: 1 },

  // ── Tier 2 — Important commercial areas & suburbs ────────────────────────
  
  // Gurugram Major Areas
  { name: "Cyber Hub",           district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "Cyber City",          district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "DLF Phase 1",         district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "DLF Phase 2",         district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "DLF Phase 3",         district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "DLF Phase 4",         district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "DLF Phase 5",         district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "Golf Course Road",    district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "MG Road",             district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "Sohna Road",          district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "Sohna",               district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "Manesar",             district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "IMT Manesar",         district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "Palam Vihar",         district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "Sushant Lok",         district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "South City 1",        district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "South City 2",        district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "Nirvana Country",     district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "Ardee City",          district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "DLF Garden City",     district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "Dwarka Expressway",   district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "Pataudi",             district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "Farukhnagar",         district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "Badshahpur",          district: "Gurugram",        region: "Gurugram",         tier: 2 },
  
  // Gurugram Metro Stations
  { name: "Sikanderpur Metro",   district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "IFFCO Chowk Metro",   district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "MG Road Metro",       district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "Guru Dronacharya Metro", district: "Gurugram",     region: "Gurugram",         tier: 2 },
  { name: "Arjan Garh Metro",    district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "Phase 1 Rapid Metro", district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "Phase 2 Rapid Metro", district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "Phase 3 Rapid Metro", district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "Cyber City Metro",    district: "Gurugram",        region: "Gurugram",         tier: 2 },
  { name: "Moulsari Avenue Metro", district: "Gurugram",      region: "Gurugram",         tier: 2 },
  { name: "Belvedere Towers Metro", district: "Gurugram",     region: "Gurugram",         tier: 2 },
  { name: "IndusInd Bank Cyber City Metro", district: "Gurugram", region: "Gurugram",     tier: 2 },
  { name: "DLF Phase 2 Metro",   district: "Gurugram",        region: "Gurugram",         tier: 2 },

  // Faridabad Major Areas
  { name: "Old Faridabad",       district: "Faridabad",       region: "Faridabad",        tier: 2 },
  { name: "New Industrial Town", district: "Faridabad",       region: "Faridabad",        tier: 2 },
  { name: "Ballabgarh",          district: "Faridabad",       region: "Faridabad",        tier: 2 },
  { name: "Greater Faridabad",   district: "Faridabad",       region: "Faridabad",        tier: 2 },
  { name: "NIT Faridabad",       district: "Faridabad",       region: "Faridabad",        tier: 2 },
  { name: "Surajkund",           district: "Faridabad",       region: "Faridabad",        tier: 2 },
  { name: "Dabua Colony",        district: "Faridabad",       region: "Faridabad",        tier: 2 },
  { name: "Neemka",              district: "Faridabad",       region: "Faridabad",        tier: 2 },
  
  // Other Major Cities
  { name: "Jagadhri",            district: "Yamunanagar",     region: "Yamunanagar",      tier: 2 },
  { name: "Kurukshetra",         district: "Kurukshetra",     region: "Kurukshetra",      tier: 2 },
  { name: "Ambala City",         district: "Ambala",          region: "Ambala",           tier: 2 },
  { name: "Ambala Cantonment",   district: "Ambala",          region: "Ambala",           tier: 2 },
  { name: "Kundli",              district: "Sonipat",         region: "Sonipat",          tier: 2 },
  { name: "Gohana",              district: "Sonipat",         region: "Sonipat",          tier: 2 },
  { name: "Hansi",               district: "Hisar",           region: "Hisar",            tier: 2 },
  { name: "Tohana",              district: "Fatehabad",       region: "Fatehabad",        tier: 2 },
  { name: "Dabwali",             district: "Sirsa",           region: "Sirsa",            tier: 2 },
  { name: "Narwana",             district: "Jind",            region: "Jind",             tier: 2 },
  { name: "Jhajjar",             district: "Jhajjar",         region: "Jhajjar",          tier: 2 },
  { name: "Kalka",               district: "Panchkula",       region: "Panchkula",        tier: 2 },
  { name: "Pinjore",             district: "Panchkula",       region: "Panchkula",        tier: 2 },
  { name: "Hodal",               district: "Palwal",          region: "Palwal",           tier: 2 },
  { name: "Bawal",               district: "Rewari",          region: "Rewari",           tier: 2 },
  { name: "Mahendragarh",        district: "Mahendragarh",    region: "Mahendragarh",     tier: 2 },
  { name: "Fatehabad",           district: "Fatehabad",       region: "Fatehabad",        tier: 2 },
  { name: "Nuh",                 district: "Mewat",           region: "Mewat",            tier: 2 },
  { name: "Charkhi Dadri",       district: "Charkhi Dadri",   region: "Charkhi Dadri",    tier: 2 },

  // ── Tier 3 — Sectors, blocks, sub-towns & localities ─────────────────────

  // Gurugram Sectors & Areas
  { name: "Sector 14",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 15",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 17",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 18",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 21",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 22",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 23",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 27",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 28",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 29",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 31",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 32",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 38",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 40",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 42",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 43",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 44",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 45",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 46",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 47",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 48",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 49",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 50",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 51",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 52",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 53",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 54",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 55",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 56",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 57",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 58",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 62",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 63",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 65",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 66",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 67",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 68",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 69",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 70",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 71",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 72",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 76",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 77",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 78",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 79",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 80",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 81",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 82",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 83",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 84",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 85",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 86",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 89",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 90",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 92",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 95",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 99",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 100",          district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 102",          district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 103",          district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 104",          district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 106",          district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 107",          district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 108",          district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 109",          district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 110",          district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sector 111",          district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Bilaspur",            district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Wazirabad",           district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Kadipur",             district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Ghata",               district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Harsaru",             district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Tigaon",              district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Sihi",                district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Ghitorni Metro",      district: "Gurugram",        region: "Gurugram",         tier: 3 },
  { name: "Vodafone Belvedere Metro", district: "Gurugram",   region: "Gurugram",         tier: 3 },

  // Faridabad Sectors & Areas
  { name: "Sector 1 Faridabad",  district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 2 Faridabad",  district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 3 Faridabad",  district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 4 Faridabad",  district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 5 Faridabad",  district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 6 Faridabad",  district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 7 Faridabad",  district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 8 Faridabad",  district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 9 Faridabad",  district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 10 Faridabad", district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 11 Faridabad", district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 12 Faridabad", district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 15 Faridabad", district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 16 Faridabad", district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 16A Faridabad", district: "Faridabad",      region: "Faridabad",        tier: 3 },
  { name: "Sector 17 Faridabad", district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 19 Faridabad", district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 20 Faridabad", district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 21 Faridabad", district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 21A Faridabad", district: "Faridabad",      region: "Faridabad",        tier: 3 },
  { name: "Sector 21B Faridabad", district: "Faridabad",      region: "Faridabad",        tier: 3 },
  { name: "Sector 21C Faridabad", district: "Faridabad",      region: "Faridabad",        tier: 3 },
  { name: "Sector 21D Faridabad", district: "Faridabad",      region: "Faridabad",        tier: 3 },
  { name: "Sector 22 Faridabad", district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 27 Faridabad", district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 28 Faridabad", district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 29 Faridabad", district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 30 Faridabad", district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 31 Faridabad", district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 37 Faridabad", district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 41 Faridabad", district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 46 Faridabad", district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 55 Faridabad", district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 58 Faridabad", district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 66 Faridabad", district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 81 Faridabad", district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 86 Faridabad", district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Sector 88 Faridabad", district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Pali",                district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Tigaon Faridabad",    district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Kheri Kalan",         district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Kheri Sadh",          district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Ajronda Chowk",       district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Mujesar",             district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Badarpur Border",     district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Bata Chowk",          district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Nehru Ground",        district: "Faridabad",       region: "Faridabad",        tier: 3 },
  { name: "Gandhi Ground",       district: "Faridabad",       region: "Faridabad",        tier: 3 },

  // Panchkula Sectors
  { name: "Sector 1 Panchkula",  district: "Panchkula",       region: "Panchkula",        tier: 3 },
  { name: "Sector 2 Panchkula",  district: "Panchkula",       region: "Panchkula",        tier: 3 },
  { name: "Sector 3 Panchkula",  district: "Panchkula",       region: "Panchkula",        tier: 3 },
  { name: "Sector 4 Panchkula",  district: "Panchkula",       region: "Panchkula",        tier: 3 },
  { name: "Sector 5 Panchkula",  district: "Panchkula",       region: "Panchkula",        tier: 3 },
  { name: "Sector 6 Panchkula",  district: "Panchkula",       region: "Panchkula",        tier: 3 },
  { name: "Sector 7 Panchkula",  district: "Panchkula",       region: "Panchkula",        tier: 3 },
  { name: "Sector 8 Panchkula",  district: "Panchkula",       region: "Panchkula",        tier: 3 },
  { name: "Sector 9 Panchkula",  district: "Panchkula",       region: "Panchkula",        tier: 3 },
  { name: "Sector 10 Panchkula", district: "Panchkula",       region: "Panchkula",        tier: 3 },
  { name: "Sector 11 Panchkula", district: "Panchkula",       region: "Panchkula",        tier: 3 },
  { name: "Sector 12 Panchkula", district: "Panchkula",       region: "Panchkula",        tier: 3 },
  { name: "Sector 14 Panchkula", district: "Panchkula",       region: "Panchkula",        tier: 3 },
  { name: "Sector 15 Panchkula", district: "Panchkula",       region: "Panchkula",        tier: 3 },
  { name: "Sector 16 Panchkula", district: "Panchkula",       region: "Panchkula",        tier: 3 },
  { name: "Sector 17 Panchkula", district: "Panchkula",       region: "Panchkula",        tier: 3 },
  { name: "Sector 20 Panchkula", district: "Panchkula",       region: "Panchkula",        tier: 3 },
  { name: "Sector 21 Panchkula", district: "Panchkula",       region: "Panchkula",        tier: 3 },
  { name: "Sector 25 Panchkula", district: "Panchkula",       region: "Panchkula",        tier: 3 },
  { name: "Morni Hills",         district: "Panchkula",       region: "Panchkula",        tier: 3 },
  { name: "Raipur Rani",         district: "Panchkula",       region: "Panchkula",        tier: 3 },
  { name: "Barwala Panchkula",   district: "Panchkula",       region: "Panchkula",        tier: 3 },

  // Rohtak Areas
  { name: "Model Town Rohtak",   district: "Rohtak",          region: "Rohtak",           tier: 3 },
  { name: "Subhash Nagar Rohtak", district: "Rohtak",         region: "Rohtak",           tier: 3 },
  { name: "Bohar",               district: "Rohtak",          region: "Rohtak",           tier: 3 },
  { name: "Kiloi",               district: "Rohtak",          region: "Rohtak",           tier: 3 },
  { name: "Sampla",              district: "Rohtak",          region: "Rohtak",           tier: 3 },
  { name: "Kalanaur",            district: "Rohtak",          region: "Rohtak",           tier: 3 },
  { name: "Meham",               district: "Rohtak",          region: "Rohtak",           tier: 3 },
  { name: "Lakhan Majra",        district: "Rohtak",          region: "Rohtak",           tier: 3 },
  { name: "Rohtak Cantonment",   district: "Rohtak",          region: "Rohtak",           tier: 3 },
  { name: "Rohtak University",   district: "Rohtak",          region: "Rohtak",           tier: 3 },
  { name: "PGIMS Rohtak",        district: "Rohtak",          region: "Rohtak",           tier: 3 },

  // Panipat Areas
  { name: "GT Road Panipat",     district: "Panipat",         region: "Panipat",          tier: 3 },
  { name: "Model Town Panipat",  district: "Panipat",         region: "Panipat",          tier: 3 },
  { name: "Huda Panipat",        district: "Panipat",         region: "Panipat",          tier: 3 },
  { name: "Israna",              district: "Panipat",         region: "Panipat",          tier: 3 },
  { name: "Samalkha",            district: "Panipat",         region: "Panipat",          tier: 3 },
  { name: "Bapoli",              district: "Panipat",         region: "Panipat",          tier: 3 },
  { name: "Madlauda",            district: "Panipat",         region: "Panipat",          tier: 3 },
  { name: "Sanauli",             district: "Panipat",         region: "Panipat",          tier: 3 },
  { name: "Industrial Area Panipat", district: "Panipat",     region: "Panipat",          tier: 3 },

  // Sonipat Areas
  { name: "Rai Sonipat",         district: "Sonipat",         region: "Sonipat",          tier: 3 },
  { name: "Kharkhoda",           district: "Sonipat",         region: "Sonipat",          tier: 3 },
  { name: "Gannaur",             district: "Sonipat",         region: "Sonipat",          tier: 3 },
  { name: "Mundlana",            district: "Sonipat",         region: "Sonipat",          tier: 3 },
  { name: "Kathura",             district: "Sonipat",         region: "Sonipat",          tier: 3 },
  { name: "Model Town Sonipat",  district: "Sonipat",         region: "Sonipat",          tier: 3 },
  { name: "Industrial Area Kundli", district: "Sonipat",      region: "Sonipat",          tier: 3 },
  { name: "Murthal",             district: "Sonipat",         region: "Sonipat",          tier: 3 },
  { name: "Barwala Sonipat",     district: "Sonipat",         region: "Sonipat",          tier: 3 },

  // Hisar Areas
  { name: "Barwala Hisar",       district: "Hisar",           region: "Hisar",            tier: 3 },
  { name: "Adampur",             district: "Hisar",           region: "Hisar",            tier: 3 },
  { name: "Narnaund",            district: "Hisar",           region: "Hisar",            tier: 3 },
  { name: "Uklana",              district: "Hisar",           region: "Hisar",            tier: 3 },
  { name: "Agroha",              district: "Hisar",           region: "Hisar",            tier: 3 },
  { name: "Bass",                district: "Hisar",           region: "Hisar",            tier: 3 },
  { name: "Balsamand",           district: "Hisar",           region: "Hisar",            tier: 3 },
  { name: "Brassal",             district: "Hisar",           region: "Hisar",            tier: 3 },
  { name: "Industrial Area Hisar", district: "Hisar",         region: "Hisar",            tier: 3 },
  { name: "Red Square Market",   district: "Hisar",           region: "Hisar",            tier: 3 },
  { name: "Vidyut Nagar",        district: "Hisar",           region: "Hisar",            tier: 3 },
  { name: "Steel Town",          district: "Hisar",           region: "Hisar",            tier: 3 },

  // Karnal Areas
  { name: "Assandh",             district: "Karnal",          region: "Karnal",           tier: 3 },
  { name: "Gharaunda",           district: "Karnal",          region: "Karnal",           tier: 3 },
  { name: "Nilokheri",           district: "Karnal",          region: "Karnal",           tier: 3 },
  { name: "Indri",               district: "Karnal",          region: "Karnal",           tier: 3 },
  { name: "Taraori",             district: "Karnal",          region: "Karnal",           tier: 3 },
  { name: "Nissing",             district: "Karnal",          region: "Karnal",           tier: 3 },
  { name: "Karnal Cantonment",   district: "Karnal",          region: "Karnal",           tier: 3 },
  { name: "Sector 12 Karnal",    district: "Karnal",          region: "Karnal",           tier: 3 },
  { name: "Sector 13 Karnal",    district: "Karnal",          region: "Karnal",           tier: 3 },
  { name: "Model Town Karnal",   district: "Karnal",          region: "Karnal",           tier: 3 },
  { name: "Industrial Area Karnal", district: "Karnal",       region: "Karnal",           tier: 3 },

  // Ambala Areas
  { name: "Ambala Sadar",        district: "Ambala",          region: "Ambala",           tier: 3 },
  { name: "Naraingarh",          district: "Ambala",          region: "Ambala",           tier: 3 },
  { name: "Shahzadpur",          district: "Ambala",          region: "Ambala",           tier: 3 },
  { name: "Saha",                district: "Ambala",          region: "Ambala",           tier: 3 },
  { name: "Barara",              district: "Ambala",          region: "Ambala",           tier: 3 },
  { name: "Baldev Nagar",        district: "Ambala",          region: "Ambala",           tier: 3 },
  { name: "Mahesh Nagar",        district: "Ambala",          region: "Ambala",           tier: 3 },
  { name: "Shastri Nagar Ambala", district: "Ambala",         region: "Ambala",           tier: 3 },
  { name: "Model Town Ambala",   district: "Ambala",          region: "Ambala",           tier: 3 },

  // Yamunanagar Areas
  { name: "Radaur",              district: "Yamunanagar",     region: "Yamunanagar",      tier: 3 },
  { name: "Bilaspur Yamunanagar", district: "Yamunanagar",    region: "Yamunanagar",      tier: 3 },
  { name: "Chhachhrauli",        district: "Yamunanagar",     region: "Yamunanagar",      tier: 3 },
  { name: "Sadhaura",            district: "Yamunanagar",     region: "Yamunanagar",      tier: 3 },
  { name: "Mustafabad",          district: "Yamunanagar",     region: "Yamunanagar",      tier: 3 },
  { name: "Jagadhri Workshop",   district: "Yamunanagar",     region: "Yamunanagar",      tier: 3 },
  { name: "Model Town Yamunanagar", district: "Yamunanagar",  region: "Yamunanagar",      tier: 3 },
  { name: "Industrial Area Jagadhri", district: "Yamunanagar", region: "Yamunanagar",     tier: 3 },

  // Kurukshetra Areas
  { name: "Pehowa",              district: "Kurukshetra",     region: "Kurukshetra",      tier: 3 },
  { name: "Shahabad",            district: "Kurukshetra",     region: "Kurukshetra",      tier: 3 },
  { name: "Ladwa",               district: "Kurukshetra",     region: "Kurukshetra",      tier: 3 },
  { name: "Ismailabad",          district: "Kurukshetra",     region: "Kurukshetra",      tier: 3 },
  { name: "Babain",              district: "Kurukshetra",     region: "Kurukshetra",      tier: 3 },
  { name: "Jyotisar",            district: "Kurukshetra",     region: "Kurukshetra",      tier: 3 },
  { name: "Brahma Sarovar",      district: "Kurukshetra",     region: "Kurukshetra",      tier: 3 },
  { name: "Sannihit Sarovar",    district: "Kurukshetra",     region: "Kurukshetra",      tier: 3 },

  // Bhiwani Areas
  { name: "Tosham",              district: "Bhiwani",         region: "Bhiwani",          tier: 3 },
  { name: "Loharu",              district: "Bhiwani",         region: "Bhiwani",          tier: 3 },
  { name: "Siwani",              district: "Bhiwani",         region: "Bhiwani",          tier: 3 },
  { name: "Bawani Khera",        district: "Bhiwani",         region: "Bhiwani",          tier: 3 },
  { name: "Kairu",               district: "Bhiwani",         region: "Bhiwani",          tier: 3 },
  { name: "Behal",               district: "Bhiwani",         region: "Bhiwani",          tier: 3 },
  { name: "Dadhi",               district: "Bhiwani",         region: "Bhiwani",          tier: 3 },
  { name: "Model Town Bhiwani",  district: "Bhiwani",         region: "Bhiwani",          tier: 3 },
  { name: "Nehru Garden Bhiwani", district: "Bhiwani",        region: "Bhiwani",          tier: 3 },

  // Sirsa Areas
  { name: "Ellenabad",           district: "Sirsa",           region: "Sirsa",            tier: 3 },
  { name: "Nathusari Chopta",    district: "Sirsa",           region: "Sirsa",            tier: 3 },
  { name: "Odhan",               district: "Sirsa",           region: "Sirsa",            tier: 3 },
  { name: "Rania",               district: "Sirsa",           region: "Sirsa",            tier: 3 },
  { name: "Baragudha",           district: "Sirsa",           region: "Sirsa",            tier: 3 },
  { name: "Kalanwali",           district: "Sirsa",           region: "Sirsa",            tier: 3 },
  { name: "Model Town Sirsa",    district: "Sirsa",           region: "Sirsa",            tier: 3 },

  // Jind Areas
  { name: "Safidon",             district: "Jind",            region: "Jind",             tier: 3 },
  { name: "Uchana",              district: "Jind",            region: "Jind",             tier: 3 },
  { name: "Julana",              district: "Jind",            region: "Jind",             tier: 3 },
  { name: "Alewa",               district: "Jind",            region: "Jind",             tier: 3 },
  { name: "Pillukhera",          district: "Jind",            region: "Jind",             tier: 3 },
  { name: "Model Town Jind",     district: "Jind",            region: "Jind",             tier: 3 },

  // Jhajjar Areas
  { name: "Beri",                district: "Jhajjar",         region: "Jhajjar",          tier: 3 },
  { name: "Matanhail",           district: "Jhajjar",         region: "Jhajjar",          tier: 3 },
  { name: "Salhawas",            district: "Jhajjar",         region: "Jhajjar",          tier: 3 },
  { name: "Badli",               district: "Jhajjar",         region: "Jhajjar",          tier: 3 },
  { name: "Dighal",              district: "Jhajjar",         region: "Jhajjar",          tier: 3 },
  { name: "Chhara",              district: "Jhajjar",         region: "Jhajjar",          tier: 3 },

  // Kaithal Areas
  { name: "Guhla",               district: "Kaithal",         region: "Kaithal",          tier: 3 },
  { name: "Pundri",              district: "Kaithal",         region: "Kaithal",          tier: 3 },
  { name: "Rajaund",             district: "Kaithal",         region: "Kaithal",          tier: 3 },
  { name: "Kalayat",             district: "Kaithal",         region: "Kaithal",          tier: 3 },
  { name: "Siwan Kaithal",       district: "Kaithal",         region: "Kaithal",          tier: 3 },
  { name: "Model Town Kaithal",  district: "Kaithal",         region: "Kaithal",          tier: 3 },

  // Rewari Areas
  { name: "Kosli",               district: "Rewari",          region: "Rewari",           tier: 3 },
  { name: "Nahar",               district: "Rewari",          region: "Rewari",           tier: 3 },
  { name: "Jatusana",            district: "Rewari",          region: "Rewari",           tier: 3 },
  { name: "Khol",                district: "Rewari",          region: "Rewari",           tier: 3 },
  { name: "Model Town Rewari",   district: "Rewari",          region: "Rewari",           tier: 3 },

  // Mahendragarh Areas
  { name: "Kanina",              district: "Mahendragarh",    region: "Mahendragarh",     tier: 3 },
  { name: "Ateli",               district: "Mahendragarh",    region: "Mahendragarh",     tier: 3 },
  { name: "Nangal Chaudhry",     district: "Mahendragarh",    region: "Mahendragarh",     tier: 3 },
  { name: "Satnali",             district: "Mahendragarh",    region: "Mahendragarh",     tier: 3 },

  // Fatehabad Areas
  { name: "Ratia",               district: "Fatehabad",       region: "Fatehabad",        tier: 3 },
  { name: "Bhuna",               district: "Fatehabad",       region: "Fatehabad",        tier: 3 },
  { name: "Jakhal",              district: "Fatehabad",       region: "Fatehabad",        tier: 3 },
  { name: "Bhattu Kalan",        district: "Fatehabad",       region: "Fatehabad",        tier: 3 },

  // Palwal Areas
  { name: "Hathin",              district: "Palwal",          region: "Palwal",           tier: 3 },
  { name: "Hassanpur",           district: "Palwal",          region: "Palwal",           tier: 3 },
  { name: "Prithla",             district: "Palwal",          region: "Palwal",           tier: 3 },
  { name: "Aurangabad Palwal",   district: "Palwal",          region: "Palwal",           tier: 3 },

  // Mewat Areas
  { name: "Ferozepur Jhirka",    district: "Mewat",           region: "Mewat",            tier: 3 },
  { name: "Tauru",               district: "Mewat",           region: "Mewat",            tier: 3 },
  { name: "Nagina",              district: "Mewat",           region: "Mewat",            tier: 3 },
  { name: "Punhana",             district: "Mewat",           region: "Mewat",            tier: 3 },
  { name: "Pingwan",             district: "Mewat",           region: "Mewat",            tier: 3 },

  // Charkhi Dadri Areas
  { name: "Badhra",              district: "Charkhi Dadri",   region: "Charkhi Dadri",    tier: 3 },
  { name: "Dadri",               district: "Charkhi Dadri",   region: "Charkhi Dadri",    tier: 3 },
  { name: "Jhojhu Kalan",        district: "Charkhi Dadri",   region: "Charkhi Dadri",    tier: 3 },
  { name: "Bond Kalan",          district: "Charkhi Dadri",   region: "Charkhi Dadri",    tier: 3 },
];

/* ─── Derived Exports ─────────────────────────────────────────────────────── */

/** Slugify an area name: lowercase, spaces → hyphens, strip non-alphanumeric */
export function slugifyArea(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

/** All valid URL slugs (used in generateStaticParams) */
export const ALL_AREA_SLUGS: string[] = HARYANA_AREAS.map((c) => slugifyArea(c.name));

/** Look up an area by its URL slug */
export function getAreaData(slug: string): HaryanaArea | undefined {
  return HARYANA_AREAS.find((c) => slugifyArea(c.name) === slug);
}

/** Format a raw slug into a display name (fallback when area not in list) */
export function formatAreaDisplay(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}