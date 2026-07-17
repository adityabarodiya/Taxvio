// app/data/mp-cities.ts

export type MPCity = {
  name: string;
  district: string;
  region: string;
  tier: 1 | 2 | 3;
};

export const MP_REGIONS: Record<string, string[]> = {
  "Bhopal Division": [
    "Bhopal", "Raisen", "Rajgarh", "Sehore", "Vidisha",
  ],
  "Chambal Division": [
    "Morena", "Bhind", "Sheopur",
  ],
  "Gwalior Division": [
    "Gwalior", "Ashoknagar", "Datia", "Guna", "Shivpuri",
  ],
  "Indore Division": [
    "Indore", "Alirajpur", "Barwani", "Burhanpur", "Dhar",
    "Jhabua", "Khandwa", "Khargone",
  ],
  "Jabalpur Division": [
    "Jabalpur", "Balaghat", "Chhindwara", "Dindori", "Katni",
    "Mandla", "Narsinghpur", "Pandhurna", "Seoni",
  ],
  "Narmadapuram Division": [
    "Narmadapuram", "Betul", "Harda",
  ],
  "Rewa Division": [
    "Rewa", "Maihar", "Mauganj", "Satna", "Sidhi", "Singrauli",
  ],
  "Sagar Division": [
    "Sagar", "Chhatarpur", "Damoh", "Niwari", "Panna", "Tikamgarh",
  ],
  "Shahdol Division": [
    "Shahdol", "Anuppur", "Umaria",
  ],
  "Ujjain Division": [
    "Ujjain", "Agar Malwa", "Dewas", "Mandsaur", "Neemuch",
    "Ratlam", "Shajapur",
  ],
};

export const MP_CITIES: MPCity[] = [
  // ── Tier 1 — District headquarters (all 55 districts) ─────────────
  { name: "Bhopal",          district: "Bhopal",          region: "Bhopal Division",       tier: 1 },
  { name: "Indore",          district: "Indore",          region: "Indore Division",       tier: 1 },
  { name: "Jabalpur",        district: "Jabalpur",        region: "Jabalpur Division",      tier: 1 },
  { name: "Gwalior",         district: "Gwalior",         region: "Gwalior Division",       tier: 1 },
  { name: "Ujjain",          district: "Ujjain",          region: "Ujjain Division",        tier: 1 },
  { name: "Sagar",           district: "Sagar",           region: "Sagar Division",         tier: 1 },
  { name: "Rewa",            district: "Rewa",            region: "Rewa Division",          tier: 1 },
  { name: "Satna",           district: "Satna",           region: "Rewa Division",          tier: 1 },
  { name: "Ratlam",          district: "Ratlam",          region: "Ujjain Division",        tier: 1 },
  { name: "Dewas",           district: "Dewas",           region: "Ujjain Division",        tier: 1 },
  { name: "Chhindwara",      district: "Chhindwara",      region: "Jabalpur Division",      tier: 1 },
  { name: "Khandwa",         district: "Khandwa",         region: "Indore Division",        tier: 1 },
  { name: "Khargone",        district: "Khargone",        region: "Indore Division",        tier: 1 },
  { name: "Burhanpur",       district: "Burhanpur",       region: "Indore Division",        tier: 1 },
  { name: "Morena",          district: "Morena",          region: "Chambal Division",       tier: 1 },
  { name: "Bhind",           district: "Bhind",           region: "Chambal Division",       tier: 1 },
  { name: "Shivpuri",        district: "Shivpuri",        region: "Gwalior Division",       tier: 1 },
  { name: "Vidisha",         district: "Vidisha",         region: "Bhopal Division",        tier: 1 },
  { name: "Sehore",          district: "Sehore",          region: "Bhopal Division",        tier: 1 },
  { name: "Betul",           district: "Betul",           region: "Narmadapuram Division",  tier: 1 },
  { name: "Narmadapuram",    district: "Narmadapuram",    region: "Narmadapuram Division",  tier: 1 },
  { name: "Chhatarpur",      district: "Chhatarpur",      region: "Sagar Division",         tier: 1 },
  { name: "Damoh",           district: "Damoh",           region: "Sagar Division",         tier: 1 },
  { name: "Panna",           district: "Panna",           region: "Sagar Division",         tier: 1 },
  { name: "Tikamgarh",       district: "Tikamgarh",       region: "Sagar Division",         tier: 1 },
  { name: "Shahdol",         district: "Shahdol",         region: "Shahdol Division",       tier: 1 },
  { name: "Mandsaur",        district: "Mandsaur",        region: "Ujjain Division",        tier: 1 },
  { name: "Neemuch",         district: "Neemuch",         region: "Ujjain Division",        tier: 1 },
  { name: "Shajapur",        district: "Shajapur",        region: "Ujjain Division",        tier: 1 },
  { name: "Balaghat",        district: "Balaghat",        region: "Jabalpur Division",      tier: 1 },
  { name: "Katni",           district: "Katni",           region: "Jabalpur Division",      tier: 1 },
  { name: "Mandla",          district: "Mandla",          region: "Jabalpur Division",      tier: 1 },
  { name: "Narsinghpur",     district: "Narsinghpur",     region: "Jabalpur Division",      tier: 1 },
  { name: "Seoni",           district: "Seoni",           region: "Jabalpur Division",      tier: 1 },
  { name: "Dindori",         district: "Dindori",         region: "Jabalpur Division",      tier: 1 },
  { name: "Pandhurna",       district: "Pandhurna",       region: "Jabalpur Division",      tier: 1 },
  { name: "Dhar",            district: "Dhar",            region: "Indore Division",        tier: 1 },
  { name: "Jhabua",          district: "Jhabua",          region: "Indore Division",        tier: 1 },
  { name: "Barwani",         district: "Barwani",         region: "Indore Division",        tier: 1 },
  { name: "Alirajpur",       district: "Alirajpur",       region: "Indore Division",        tier: 1 },
  { name: "Ashoknagar",      district: "Ashoknagar",      region: "Gwalior Division",       tier: 1 },
  { name: "Datia",           district: "Datia",           region: "Gwalior Division",       tier: 1 },
  { name: "Guna",            district: "Guna",            region: "Gwalior Division",       tier: 1 },
  { name: "Sheopur",         district: "Sheopur",         region: "Chambal Division",       tier: 1 },
  { name: "Raisen",          district: "Raisen",          region: "Bhopal Division",        tier: 1 },
  { name: "Rajgarh",         district: "Rajgarh",         region: "Bhopal Division",        tier: 1 },
  { name: "Harda",           district: "Harda",           region: "Narmadapuram Division",  tier: 1 },
  { name: "Maihar",          district: "Maihar",          region: "Rewa Division",          tier: 1 },
  { name: "Mauganj",         district: "Mauganj",         region: "Rewa Division",          tier: 1 },
  { name: "Sidhi",           district: "Sidhi",           region: "Rewa Division",          tier: 1 },
  { name: "Singrauli",       district: "Singrauli",       region: "Rewa Division",          tier: 1 },
  { name: "Niwari",          district: "Niwari",          region: "Sagar Division",         tier: 1 },
  { name: "Anuppur",         district: "Anuppur",         region: "Shahdol Division",       tier: 1 },
  { name: "Umaria",          district: "Umaria",          region: "Shahdol Division",       tier: 1 },
  { name: "Agar Malwa",      district: "Agar Malwa",      region: "Ujjain Division",        tier: 1 },

  // ── Tier 2 — Major towns / sub-divisional centres ────────────────
  { name: "Pithampur",       district: "Dhar",            region: "Indore Division",        tier: 2 },
  { name: "Mhow",            district: "Indore",          region: "Indore Division",        tier: 2 },
  { name: "Vijaynagar",      district: "Indore",          region: "Indore Division",        tier: 2 },
  { name: "Nagda",           district: "Ujjain",          region: "Ujjain Division",        tier: 2 },
  { name: "Itarsi",          district: "Narmadapuram",    region: "Narmadapuram Division",  tier: 2 },
  { name: "Pipariya",        district: "Narmadapuram",    region: "Narmadapuram Division",  tier: 2 },
  { name: "Sendhwa",         district: "Barwani",         region: "Indore Division",        tier: 2 },
  { name: "Maheshwar",       district: "Khargone",        region: "Indore Division",        tier: 2 },
  { name: "Sanawad",         district: "Khargone",        region: "Indore Division",        tier: 2 },
  { name: "Badwah",          district: "Khargone",        region: "Indore Division",        tier: 2 },
  { name: "Kasrawad",        district: "Khargone",        region: "Indore Division",        tier: 2 },
  { name: "Bhikangaon",      district: "Khargone",        region: "Indore Division",        tier: 2 },
  { name: "Pandhana",        district: "Khandwa",         region: "Indore Division",        tier: 2 },
  { name: "Harsud",          district: "Khandwa",         region: "Indore Division",        tier: 2 },
  { name: "Mundi",           district: "Khandwa",         region: "Indore Division",        tier: 2 },
  { name: "Nepanagar",       district: "Burhanpur",       region: "Indore Division",        tier: 2 },
  { name: "Badnawar",        district: "Dhar",            region: "Indore Division",        tier: 2 },
  { name: "Manawar",         district: "Dhar",            region: "Indore Division",        tier: 2 },
  { name: "Kukshi",          district: "Dhar",            region: "Indore Division",        tier: 2 },
  { name: "Sardarpur",       district: "Dhar",            region: "Indore Division",        tier: 2 },
  { name: "Dharampuri",      district: "Dhar",            region: "Indore Division",        tier: 2 },
  { name: "Thandla",         district: "Jhabua",          region: "Indore Division",        tier: 2 },
  { name: "Petlawad",        district: "Jhabua",          region: "Indore Division",        tier: 2 },
  { name: "Meghnagar",       district: "Jhabua",          region: "Indore Division",        tier: 2 },
  { name: "Jobat",           district: "Alirajpur",       region: "Indore Division",        tier: 2 },
  { name: "Pati",            district: "Barwani",         region: "Indore Division",        tier: 2 },
  { name: "Anjad",           district: "Barwani",         region: "Indore Division",        tier: 2 },
  { name: "Rajpur",          district: "Barwani",         region: "Indore Division",        tier: 2 },
  { name: "Khaknar",         district: "Burhanpur",       region: "Indore Division",        tier: 2 },
  { name: "Chanderi",        district: "Ashoknagar",      region: "Gwalior Division",       tier: 2 },
  { name: "Mungaoli",        district: "Ashoknagar",      region: "Gwalior Division",       tier: 2 },
  { name: "Isagarh",         district: "Ashoknagar",      region: "Gwalior Division",       tier: 2 },
  { name: "Dabra",           district: "Gwalior",         region: "Gwalior Division",       tier: 2 },
  { name: "Bhitarwar",       district: "Gwalior",         region: "Gwalior Division",       tier: 2 },
  { name: "Pohri",           district: "Shivpuri",        region: "Gwalior Division",       tier: 2 },
  { name: "Kolaras",         district: "Shivpuri",        region: "Gwalior Division",       tier: 2 },
  { name: "Karera",          district: "Shivpuri",        region: "Gwalior Division",       tier: 2 },
  { name: "Pichhore",        district: "Shivpuri",        region: "Gwalior Division",       tier: 2 },
  { name: "Narwar",          district: "Shivpuri",        region: "Gwalior Division",       tier: 2 },
  { name: "Seondha",         district: "Datia",           region: "Gwalior Division",       tier: 2 },
  { name: "Indergarh",       district: "Datia",           region: "Gwalior Division",       tier: 2 },
  { name: "Bhander",         district: "Datia",           region: "Gwalior Division",       tier: 2 },
  { name: "Raghogarh",       district: "Guna",            region: "Gwalior Division",       tier: 2 },
  { name: "Chachaura",       district: "Guna",            region: "Gwalior Division",       tier: 2 },
  { name: "Aron",            district: "Guna",            region: "Gwalior Division",       tier: 2 },
  { name: "Ater",            district: "Bhind",           region: "Chambal Division",       tier: 2 },
  { name: "Lahar",           district: "Bhind",           region: "Chambal Division",       tier: 2 },
  { name: "Mehgaon",         district: "Bhind",           region: "Chambal Division",       tier: 2 },
  { name: "Gohad",           district: "Bhind",           region: "Chambal Division",       tier: 2 },
  { name: "Ambah",           district: "Morena",          region: "Chambal Division",       tier: 2 },
  { name: "Porsa",           district: "Morena",          region: "Chambal Division",       tier: 2 },
  { name: "Joura",           district: "Morena",          region: "Chambal Division",       tier: 2 },
  { name: "Sabalgarh",       district: "Morena",          region: "Chambal Division",       tier: 2 },
  { name: "Kailaras",        district: "Morena",          region: "Chambal Division",       tier: 2 },
  { name: "Vijaypur",        district: "Sheopur",         region: "Chambal Division",       tier: 2 },
  { name: "Karahal",         district: "Sheopur",         region: "Chambal Division",       tier: 2 },
  { name: "Begumganj",       district: "Raisen",          region: "Bhopal Division",        tier: 2 },
  { name: "Gairatganj",      district: "Raisen",          region: "Bhopal Division",        tier: 2 },
  { name: "Silwani",         district: "Raisen",          region: "Bhopal Division",        tier: 2 },
  { name: "Bareli",          district: "Raisen",          region: "Bhopal Division",        tier: 2 },
  { name: "Udaipura",        district: "Raisen",          region: "Bhopal Division",        tier: 2 },
  { name: "Biaora",          district: "Rajgarh",         region: "Bhopal Division",        tier: 2 },
  { name: "Narsinghgarh",    district: "Rajgarh",         region: "Bhopal Division",        tier: 2 },
  { name: "Sarangpur",       district: "Rajgarh",         region: "Bhopal Division",        tier: 2 },
  { name: "Khilchipur",      district: "Rajgarh",         region: "Bhopal Division",        tier: 2 },
  { name: "Zirapur",         district: "Rajgarh",         region: "Bhopal Division",        tier: 2 },
  { name: "Ashta",           district: "Sehore",          region: "Bhopal Division",        tier: 2 },
  { name: "Budhni",          district: "Sehore",          region: "Bhopal Division",        tier: 2 },
  { name: "Nasrullaganj",    district: "Sehore",          region: "Bhopal Division",        tier: 2 },
  { name: "Ganj Basoda",     district: "Vidisha",         region: "Bhopal Division",        tier: 2 },
  { name: "Sironj",          district: "Vidisha",         region: "Bhopal Division",        tier: 2 },
  { name: "Kurwai",          district: "Vidisha",         region: "Bhopal Division",        tier: 2 },
  { name: "Gyaraspur",       district: "Vidisha",         region: "Bhopal Division",        tier: 2 },
  { name: "Multai",          district: "Betul",           region: "Narmadapuram Division",  tier: 2 },
  { name: "Amla",            district: "Betul",           region: "Narmadapuram Division",  tier: 2 },
  { name: "Bhainsdehi",      district: "Betul",           region: "Narmadapuram Division",  tier: 2 },
  { name: "Shahpur",         district: "Betul",           region: "Narmadapuram Division",  tier: 2 },
  { name: "Timarni",         district: "Harda",           region: "Narmadapuram Division",  tier: 2 },
  { name: "Khirkiya",        district: "Harda",           region: "Narmadapuram Division",  tier: 2 },
  { name: "Seoni Malwa",     district: "Narmadapuram",    region: "Narmadapuram Division",  tier: 2 },
  { name: "Sohagpur",        district: "Narmadapuram",    region: "Narmadapuram Division",  tier: 2 },
  { name: "Bankhedi",        district: "Narmadapuram",    region: "Narmadapuram Division",  tier: 2 },
  { name: "Chaurai",         district: "Chhindwara",      region: "Jabalpur Division",      tier: 2 },
  { name: "Sausar",          district: "Chhindwara",      region: "Jabalpur Division",      tier: 2 },
  { name: "Amarwara",        district: "Chhindwara",      region: "Jabalpur Division",      tier: 2 },
  { name: "Junnardeo",       district: "Chhindwara",      region: "Jabalpur Division",      tier: 2 },
  { name: "Parasia",         district: "Chhindwara",      region: "Jabalpur Division",      tier: 2 },
  { name: "Tamia",           district: "Chhindwara",      region: "Jabalpur Division",      tier: 2 },
  { name: "Sihora",          district: "Jabalpur",        region: "Jabalpur Division",      tier: 2 },
  { name: "Patan",           district: "Jabalpur",        region: "Jabalpur Division",      tier: 2 },
  { name: "Shahpura Jabalpur", district: "Jabalpur",      region: "Jabalpur Division",      tier: 2 },
  { name: "Panagar",         district: "Jabalpur",        region: "Jabalpur Division",      tier: 2 },
  { name: "Kundam",          district: "Jabalpur",        region: "Jabalpur Division",      tier: 2 },
  { name: "Majholi",         district: "Jabalpur",        region: "Jabalpur Division",      tier: 2 },
  { name: "Vijayraghavgarh", district: "Katni",           region: "Jabalpur Division",      tier: 2 },
  { name: "Badwara",         district: "Katni",           region: "Jabalpur Division",      tier: 2 },
  { name: "Barhi",           district: "Katni",           region: "Jabalpur Division",      tier: 2 },
  { name: "Nainpur",         district: "Mandla",          region: "Jabalpur Division",      tier: 2 },
  { name: "Bichhiya",        district: "Mandla",          region: "Jabalpur Division",      tier: 2 },
  { name: "Niwas",           district: "Mandla",          region: "Jabalpur Division",      tier: 2 },
  { name: "Gadarwara",       district: "Narsinghpur",     region: "Jabalpur Division",      tier: 2 },
  { name: "Gotegaon",        district: "Narsinghpur",     region: "Jabalpur Division",      tier: 2 },
  { name: "Kareli",          district: "Narsinghpur",     region: "Jabalpur Division",      tier: 2 },
  { name: "Tendukheda Narsinghpur", district: "Narsinghpur", region: "Jabalpur Division",   tier: 2 },
  { name: "Lakhnadon",       district: "Seoni",           region: "Jabalpur Division",      tier: 2 },
  { name: "Barghat",         district: "Seoni",           region: "Jabalpur Division",      tier: 2 },
  { name: "Ghansor",         district: "Seoni",           region: "Jabalpur Division",      tier: 2 },
  { name: "Keolari",         district: "Seoni",           region: "Jabalpur Division",      tier: 2 },
  { name: "Waraseoni",       district: "Balaghat",        region: "Jabalpur Division",      tier: 2 },
  { name: "Baihar",          district: "Balaghat",        region: "Jabalpur Division",      tier: 2 },
  { name: "Katangi",         district: "Balaghat",        region: "Jabalpur Division",      tier: 2 },
  { name: "Lalbarra",        district: "Balaghat",        region: "Jabalpur Division",      tier: 2 },
  { name: "Birsa",           district: "Balaghat",        region: "Jabalpur Division",      tier: 2 },
  { name: "Shahpura Dindori",district: "Dindori",         region: "Jabalpur Division",      tier: 2 },
  { name: "Bajag",           district: "Dindori",         region: "Jabalpur Division",      tier: 2 },
  { name: "Bina",            district: "Sagar",           region: "Sagar Division",         tier: 2 },
  { name: "Khurai",          district: "Sagar",           region: "Sagar Division",         tier: 2 },
  { name: "Garhakota",       district: "Sagar",           region: "Sagar Division",         tier: 2 },
  { name: "Rehli",           district: "Sagar",           region: "Sagar Division",         tier: 2 },
  { name: "Banda",           district: "Sagar",           region: "Sagar Division",         tier: 2 },
  { name: "Deori",           district: "Sagar",           region: "Sagar Division",         tier: 2 },
  { name: "Hatta",           district: "Damoh",           region: "Sagar Division",         tier: 2 },
  { name: "Patharia",        district: "Damoh",           region: "Sagar Division",         tier: 2 },
  { name: "Jabera",          district: "Damoh",           region: "Sagar Division",         tier: 2 },
  { name: "Batiyagarh",      district: "Damoh",           region: "Sagar Division",         tier: 2 },
  { name: "Nowgong",         district: "Chhatarpur",      region: "Sagar Division",         tier: 2 },
  { name: "Bijawar",         district: "Chhatarpur",      region: "Sagar Division",         tier: 2 },
  { name: "Bada Malhera",    district: "Chhatarpur",      region: "Sagar Division",         tier: 2 },
  { name: "Rajnagar",        district: "Chhatarpur",      region: "Sagar Division",         tier: 2 },
  { name: "Khajuraho",       district: "Chhatarpur",      region: "Sagar Division",         tier: 2 },
  { name: "Ajaygarh",        district: "Panna",           region: "Sagar Division",         tier: 2 },
  { name: "Pawai",           district: "Panna",           region: "Sagar Division",         tier: 2 },
  { name: "Amanganj",        district: "Panna",           region: "Sagar Division",         tier: 2 },
  { name: "Jatara",          district: "Tikamgarh",       region: "Sagar Division",         tier: 2 },
  { name: "Khargapur",       district: "Tikamgarh",       region: "Sagar Division",         tier: 2 },
  { name: "Baldeogarh",      district: "Tikamgarh",       region: "Sagar Division",         tier: 2 },
  { name: "Orchha",          district: "Niwari",          region: "Sagar Division",         tier: 2 },
  { name: "Prithvipur",      district: "Niwari",          region: "Sagar Division",         tier: 2 },
  { name: "Jaisinghnagar",   district: "Shahdol",         region: "Shahdol Division",       tier: 2 },
  { name: "Beohari",         district: "Shahdol",         region: "Shahdol Division",       tier: 2 },
  { name: "Burhar",          district: "Shahdol",         region: "Shahdol Division",       tier: 2 },
  { name: "Jaitpur",         district: "Shahdol",         region: "Shahdol Division",       tier: 2 },
  { name: "Kotma",           district: "Anuppur",         region: "Shahdol Division",       tier: 2 },
  { name: "Jaithari",        district: "Anuppur",         region: "Shahdol Division",       tier: 2 },
  { name: "Pushprajgarh",    district: "Anuppur",         region: "Shahdol Division",       tier: 2 },
  { name: "Bandhavgarh",     district: "Umaria",          region: "Shahdol Division",       tier: 2 },
  { name: "Manpur",          district: "Umaria",          region: "Shahdol Division",       tier: 2 },
  { name: "Nowrozabad",      district: "Umaria",          region: "Shahdol Division",       tier: 2 },
  { name: "Maihar Town",     district: "Maihar",          region: "Rewa Division",          tier: 2 },
  { name: "Nagod",           district: "Satna",           region: "Rewa Division",          tier: 2 },
  { name: "Rampur Baghelan", district: "Satna",           region: "Rewa Division",          tier: 2 },
  { name: "Amarpatan",       district: "Satna",           region: "Rewa Division",          tier: 2 },
  { name: "Unchehara",       district: "Satna",           region: "Rewa Division",          tier: 2 },
  { name: "Majhgawan",       district: "Satna",           region: "Rewa Division",          tier: 2 },
  { name: "Teonthar",        district: "Rewa",            region: "Rewa Division",          tier: 2 },
  { name: "Hanumana",        district: "Rewa",            region: "Rewa Division",          tier: 2 },
  { name: "Gurh",            district: "Rewa",            region: "Rewa Division",          tier: 2 },
  { name: "Sirmaur",         district: "Rewa",            region: "Rewa Division",          tier: 2 },
  { name: "Mangawan",        district: "Rewa",            region: "Rewa Division",          tier: 2 },
  { name: "Mauganj Town",    district: "Mauganj",         region: "Rewa Division",          tier: 2 },
  { name: "Churhat",         district: "Sidhi",           region: "Rewa Division",          tier: 2 },
  { name: "Kusmi",           district: "Sidhi",           region: "Rewa Division",          tier: 2 },
  { name: "Sihawal",         district: "Sidhi",           region: "Rewa Division",          tier: 2 },
  { name: "Waidhan",         district: "Singrauli",       region: "Rewa Division",          tier: 2 },
  { name: "Chitrangi",       district: "Singrauli",       region: "Rewa Division",          tier: 2 },
  { name: "Devsar",          district: "Singrauli",       region: "Rewa Division",          tier: 2 },
  { name: "Sailana",         district: "Ratlam",          region: "Ujjain Division",        tier: 2 },
  { name: "Jaora",           district: "Ratlam",          region: "Ujjain Division",        tier: 2 },
  { name: "Alot",            district: "Ratlam",          region: "Ujjain Division",        tier: 2 },
  { name: "Bajna",           district: "Ratlam",          region: "Ujjain Division",        tier: 2 },
  { name: "Malhargarh",      district: "Mandsaur",        region: "Ujjain Division",        tier: 2 },
  { name: "Sitamau",         district: "Mandsaur",        region: "Ujjain Division",        tier: 2 },
  { name: "Garoth",          district: "Mandsaur",        region: "Ujjain Division",        tier: 2 },
  { name: "Bhanpura",        district: "Mandsaur",        region: "Ujjain Division",        tier: 2 },
  { name: "Shamgarh",        district: "Mandsaur",        region: "Ujjain Division",        tier: 2 },
  { name: "Manasa",          district: "Neemuch",         region: "Ujjain Division",        tier: 2 },
  { name: "Jawad",           district: "Neemuch",         region: "Ujjain Division",        tier: 2 },
  { name: "Khachrod",        district: "Ujjain",          region: "Ujjain Division",        tier: 2 },
  { name: "Mehidpur",        district: "Ujjain",          region: "Ujjain Division",        tier: 2 },
  { name: "Tarana",          district: "Ujjain",          region: "Ujjain Division",        tier: 2 },
  { name: "Badnagar",        district: "Ujjain",          region: "Ujjain Division",        tier: 2 },
  { name: "Shujalpur",       district: "Shajapur",        region: "Ujjain Division",        tier: 2 },
  { name: "Kalapipal",       district: "Shajapur",        region: "Ujjain Division",        tier: 2 },
  { name: "Susner",          district: "Agar Malwa",      region: "Ujjain Division",        tier: 2 },
  { name: "Nalkheda",        district: "Agar Malwa",      region: "Ujjain Division",        tier: 2 },
  { name: "Khategaon",       district: "Dewas",           region: "Ujjain Division",        tier: 2 },
  { name: "Bagli",           district: "Dewas",           region: "Ujjain Division",        tier: 2 },
  { name: "Kannod",          district: "Dewas",           region: "Ujjain Division",        tier: 2 },
  { name: "Sonkatch",        district: "Dewas",           region: "Ujjain Division",        tier: 2 },

  // ── Tier 3 — Tehsil headquarters & smaller towns ──────────────────
  // Bhopal district
  { name: "Kolar",           district: "Bhopal",          region: "Bhopal Division",        tier: 3 },
  { name: "Berasia",         district: "Bhopal",          region: "Bhopal Division",        tier: 3 },
  { name: "Huzur",           district: "Bhopal",          region: "Bhopal Division",        tier: 3 },
  // Raisen district
  { name: "Goharganj",       district: "Raisen",          region: "Bhopal Division",        tier: 3 },
  { name: "Badi",            district: "Raisen",          region: "Bhopal Division",        tier: 3 },
  { name: "Sultanpur Raisen",district: "Raisen",          region: "Bhopal Division",        tier: 3 },
  // Rajgarh district
  { name: "Pachore",         district: "Rajgarh",         region: "Bhopal Division",        tier: 3 },
  { name: "Khujner",         district: "Rajgarh",         region: "Bhopal Division",        tier: 3 },
  { name: "Suthaliya",       district: "Rajgarh",         region: "Bhopal Division",        tier: 3 },
  // Sehore district
  { name: "Shyampur",        district: "Sehore",          region: "Bhopal Division",        tier: 3 },
  { name: "Jawar",           district: "Sehore",          region: "Bhopal Division",        tier: 3 },
  { name: "Ichhawar",        district: "Sehore",          region: "Bhopal Division",        tier: 3 },
  { name: "Rehti",           district: "Sehore",          region: "Bhopal Division",        tier: 3 },
  // Vidisha district
  { name: "Lateri",          district: "Vidisha",         region: "Bhopal Division",        tier: 3 },
  { name: "Nateran",         district: "Vidisha",         region: "Bhopal Division",        tier: 3 },
  { name: "Gulabganj",       district: "Vidisha",         region: "Bhopal Division",        tier: 3 },
  { name: "Pathari",         district: "Vidisha",         region: "Bhopal Division",        tier: 3 },
  { name: "Shamshabad",      district: "Vidisha",         region: "Bhopal Division",        tier: 3 },
  { name: "Tyonda",          district: "Vidisha",         region: "Bhopal Division",        tier: 3 },

  // Morena district
  { name: "Bamor",           district: "Morena",          region: "Chambal Division",       tier: 3 },
  // Sheopur district
  { name: "Badoda",          district: "Sheopur",         region: "Chambal Division",       tier: 3 },
  { name: "Birpur",          district: "Sheopur",         region: "Chambal Division",       tier: 3 },
  // Bhind district
  { name: "Roun",            district: "Bhind",           region: "Chambal Division",       tier: 3 },
  { name: "Mihona",          district: "Bhind",           region: "Chambal Division",       tier: 3 },
  { name: "Gormi",           district: "Bhind",           region: "Chambal Division",       tier: 3 },
  { name: "Mau Bhind",       district: "Bhind",           region: "Chambal Division",       tier: 3 },

  // Gwalior district
  { name: "Chinore",         district: "Gwalior",         region: "Gwalior Division",       tier: 3 },
  { name: "Ghatigaon",       district: "Gwalior",         region: "Gwalior Division",       tier: 3 },
  { name: "Murar",           district: "Gwalior",         region: "Gwalior Division",       tier: 3 },
  { name: "Tansen",          district: "Gwalior",         region: "Gwalior Division",       tier: 3 },
  // Ashoknagar district
  { name: "Nai Sarai",       district: "Ashoknagar",      region: "Gwalior Division",       tier: 3 },
  { name: "Piparai",         district: "Ashoknagar",      region: "Gwalior Division",       tier: 3 },
  { name: "Shadora",         district: "Ashoknagar",      region: "Gwalior Division",       tier: 3 },
  // Shivpuri district
  { name: "Bairad",          district: "Shivpuri",        region: "Gwalior Division",       tier: 3 },
  { name: "Badarwas",        district: "Shivpuri",        region: "Gwalior Division",       tier: 3 },
  { name: "Khaniadhana",     district: "Shivpuri",        region: "Gwalior Division",       tier: 3 },
  // Datia district
  { name: "Badoni",          district: "Datia",           region: "Gwalior Division",       tier: 3 },
  // Guna district
  { name: "Bamori",          district: "Guna",            region: "Gwalior Division",       tier: 3 },
  { name: "Maksudangarh",    district: "Guna",            region: "Gwalior Division",       tier: 3 },
  { name: "Kumbhraj",        district: "Guna",            region: "Gwalior Division",       tier: 3 },

  // Indore district
  { name: "Sanwer",          district: "Indore",          region: "Indore Division",        tier: 3 },
  { name: "Depalpur",        district: "Indore",          region: "Indore Division",        tier: 3 },
  { name: "Hatod",           district: "Indore",          region: "Indore Division",        tier: 3 },
  { name: "Rau",             district: "Indore",          region: "Indore Division",        tier: 3 },
  { name: "Kanadiya",        district: "Indore",          region: "Indore Division",        tier: 3 },
  // Dhar district
  { name: "Gandhwani",       district: "Dhar",            region: "Indore Division",        tier: 3 },
  { name: "Dahi",            district: "Dhar",            region: "Indore Division",        tier: 3 },
  // Jhabua district
  { name: "Ranapur",         district: "Jhabua",          region: "Indore Division",        tier: 3 },
  { name: "Ramanagar Jhabua",district: "Jhabua",          region: "Indore Division",        tier: 3 },
  // Khandwa district
  { name: "Punasa",          district: "Khandwa",         region: "Indore Division",        tier: 3 },
  { name: "Khalwa",          district: "Khandwa",         region: "Indore Division",        tier: 3 },
  // Khargone district
  { name: "Gogawan",         district: "Khargone",        region: "Indore Division",        tier: 3 },
  { name: "Jhirniya",        district: "Khargone",        region: "Indore Division",        tier: 3 },
  { name: "Bhagwanpura",     district: "Khargone",        region: "Indore Division",        tier: 3 },
  { name: "Segaon",          district: "Khargone",        region: "Indore Division",        tier: 3 },
  // Barwani district
  { name: "Warla",           district: "Barwani",         region: "Indore Division",        tier: 3 },
  { name: "Thikri",          district: "Barwani",         region: "Indore Division",        tier: 3 },
  { name: "Niwali",          district: "Barwani",         region: "Indore Division",        tier: 3 },
  { name: "Pansemal",        district: "Barwani",         region: "Indore Division",        tier: 3 },
  // Alirajpur district
  { name: "Sondwa",          district: "Alirajpur",       region: "Indore Division",        tier: 3 },
  { name: "Bhavra",          district: "Alirajpur",       region: "Indore Division",        tier: 3 },
  { name: "Katthiwada",      district: "Alirajpur",       region: "Indore Division",        tier: 3 },

  // Jabalpur district
  { name: "Gorakhpur Jabalpur", district: "Jabalpur",     region: "Jabalpur Division",      tier: 3 },
  { name: "Adhartal",        district: "Jabalpur",        region: "Jabalpur Division",      tier: 3 },
  { name: "Ranjhi",          district: "Jabalpur",        region: "Jabalpur Division",      tier: 3 },
  // Katni district
  { name: "Reethi",          district: "Katni",           region: "Jabalpur Division",      tier: 3 },
  { name: "Bahoriband",      district: "Katni",           region: "Jabalpur Division",      tier: 3 },
  { name: "Dhimarkheda",     district: "Katni",           region: "Jabalpur Division",      tier: 3 },
  // Mandla district
  { name: "Ghughri",         district: "Mandla",          region: "Jabalpur Division",      tier: 3 },
  { name: "Narayanganj",     district: "Mandla",          region: "Jabalpur Division",      tier: 3 },
  // Narsinghpur district
  { name: "Sainkheda",       district: "Narsinghpur",     region: "Jabalpur Division",      tier: 3 },
  // Seoni district
  { name: "Chhapara",        district: "Seoni",           region: "Jabalpur Division",      tier: 3 },
  { name: "Dhanora",         district: "Seoni",           region: "Jabalpur Division",      tier: 3 },
  { name: "Kurai",           district: "Seoni",           region: "Jabalpur Division",      tier: 3 },
  // Balaghat district
  { name: "Khairlanji",      district: "Balaghat",        region: "Jabalpur Division",      tier: 3 },
  { name: "Kirnapur",        district: "Balaghat",        region: "Jabalpur Division",      tier: 3 },
  { name: "Lanji",           district: "Balaghat",        region: "Jabalpur Division",      tier: 3 },
  { name: "Paraswada",       district: "Balaghat",        region: "Jabalpur Division",      tier: 3 },
  // Chhindwara district
  { name: "Harrai",          district: "Chhindwara",      region: "Jabalpur Division",      tier: 3 },
  { name: "Mohkhed",         district: "Chhindwara",      region: "Jabalpur Division",      tier: 3 },
  { name: "Bichhua",         district: "Chhindwara",      region: "Jabalpur Division",      tier: 3 },
  { name: "Umreth",          district: "Chhindwara",      region: "Jabalpur Division",      tier: 3 },
  { name: "Chand",           district: "Chhindwara",      region: "Jabalpur Division",      tier: 3 },

  // Betul district
  { name: "Athner",          district: "Betul",           region: "Narmadapuram Division",  tier: 3 },
  { name: "Ghodadongri",     district: "Betul",           region: "Narmadapuram Division",  tier: 3 },
  { name: "Chicholi",        district: "Betul",           region: "Narmadapuram Division",  tier: 3 },
  { name: "Bhimpur",         district: "Betul",           region: "Narmadapuram Division",  tier: 3 },
  { name: "Prabhat Pattan",  district: "Betul",           region: "Narmadapuram Division",  tier: 3 },
  // Harda district
  { name: "Handia",          district: "Harda",           region: "Narmadapuram Division",  tier: 3 },
  { name: "Rahatgaon",       district: "Harda",           region: "Narmadapuram Division",  tier: 3 },
  { name: "Sirali",          district: "Harda",           region: "Narmadapuram Division",  tier: 3 },
  // Narmadapuram district
  { name: "Doleria",         district: "Narmadapuram",    region: "Narmadapuram Division",  tier: 3 },
  { name: "Makhan Nagar",    district: "Narmadapuram",    region: "Narmadapuram Division",  tier: 3 },

  // Rewa district
  { name: "Nai Garhi",       district: "Rewa",            region: "Rewa Division",          tier: 3 },
  { name: "Jawa",            district: "Rewa",            region: "Rewa Division",          tier: 3 },
  { name: "Raipur Kurchulian", district: "Rewa",          region: "Rewa Division",          tier: 3 },
  { name: "Semaria",         district: "Rewa",            region: "Rewa Division",          tier: 3 },
  // Satna district
  { name: "Ramnagar Satna",  district: "Satna",           region: "Rewa Division",          tier: 3 },
  { name: "Kotar",           district: "Satna",           region: "Rewa Division",          tier: 3 },
  { name: "Birsinghpur Satna", district: "Satna",         region: "Rewa Division",          tier: 3 },
  { name: "Kothi",           district: "Satna",           region: "Rewa Division",          tier: 3 },
  // Sidhi district
  { name: "Majhauli",        district: "Sidhi",           region: "Rewa Division",          tier: 3 },
  { name: "Rampur Naikin",   district: "Sidhi",           region: "Rewa Division",          tier: 3 },
  // Singrauli district
  { name: "Mada",            district: "Singrauli",       region: "Rewa Division",          tier: 3 },
  { name: "Sarai Singrauli", district: "Singrauli",       region: "Rewa Division",          tier: 3 },

  // Chhatarpur district
  { name: "Buxwaha",         district: "Chhatarpur",      region: "Sagar Division",         tier: 3 },
  { name: "Chandla",         district: "Chhatarpur",      region: "Sagar Division",         tier: 3 },
  { name: "Gaurihar",        district: "Chhatarpur",      region: "Sagar Division",         tier: 3 },
  { name: "Ghuwara",         district: "Chhatarpur",      region: "Sagar Division",         tier: 3 },
  { name: "Laundi",          district: "Chhatarpur",      region: "Sagar Division",         tier: 3 },
  { name: "Maharajpur",      district: "Chhatarpur",      region: "Sagar Division",         tier: 3 },
  // Damoh district
  { name: "Patera",          district: "Damoh",           region: "Sagar Division",         tier: 3 },
  { name: "Tendukheda Damoh",district: "Damoh",           region: "Sagar Division",         tier: 3 },
  // Panna district
  { name: "Devendranagar",   district: "Panna",           region: "Sagar Division",         tier: 3 },
  { name: "Gunnor",          district: "Panna",           region: "Sagar Division",         tier: 3 },
  { name: "Raipura",         district: "Panna",           region: "Sagar Division",         tier: 3 },
  { name: "Shahnagar",       district: "Panna",           region: "Sagar Division",         tier: 3 },
  { name: "Simariya",        district: "Panna",           region: "Sagar Division",         tier: 3 },
  // Sagar district
  { name: "Malthon",         district: "Sagar",           region: "Sagar Division",         tier: 3 },
  { name: "Shahgarh",        district: "Sagar",           region: "Sagar Division",         tier: 3 },
  { name: "Rahatgarh",       district: "Sagar",           region: "Sagar Division",         tier: 3 },
  { name: "Jaisinagar",      district: "Sagar",           region: "Sagar Division",         tier: 3 },
  { name: "Kesli",           district: "Sagar",           region: "Sagar Division",         tier: 3 },
  // Tikamgarh district
  { name: "Mohangarh",       district: "Tikamgarh",       region: "Sagar Division",         tier: 3 },
  { name: "Lidhora",         district: "Tikamgarh",       region: "Sagar Division",         tier: 3 },
  { name: "Palera",          district: "Tikamgarh",       region: "Sagar Division",         tier: 3 },

  // Shahdol district
  { name: "Gohaparu",        district: "Shahdol",         region: "Shahdol Division",       tier: 3 },
  // Umaria district
  { name: "Pali Umaria",     district: "Umaria",          region: "Shahdol Division",       tier: 3 },
  { name: "Chandia",         district: "Umaria",          region: "Shahdol Division",       tier: 3 },
  { name: "Karkeli",         district: "Umaria",          region: "Shahdol Division",       tier: 3 },

  // Ratlam district
  { name: "Raoti",           district: "Ratlam",          region: "Ujjain Division",        tier: 3 },
  { name: "Piploda",         district: "Ratlam",          region: "Ujjain Division",        tier: 3 },
  { name: "Tal",             district: "Ratlam",          region: "Ujjain Division",        tier: 3 },
  // Mandsaur district
  { name: "Suvasara",        district: "Mandsaur",        region: "Ujjain Division",        tier: 3 },
  { name: "Daloda",          district: "Mandsaur",        region: "Ujjain Division",        tier: 3 },
  // Neemuch district
  { name: "Jiran",           district: "Neemuch",         region: "Ujjain Division",        tier: 3 },
  { name: "Rampura Neemuch", district: "Neemuch",         region: "Ujjain Division",        tier: 3 },
  { name: "Singoli",         district: "Neemuch",         region: "Ujjain Division",        tier: 3 },
  // Ujjain district
  { name: "Ghatiya",         district: "Ujjain",          region: "Ujjain Division",        tier: 3 },
  { name: "Makdone",         district: "Ujjain",          region: "Ujjain Division",        tier: 3 },
  { name: "Jharda",          district: "Ujjain",          region: "Ujjain Division",        tier: 3 },
  // Shajapur district
  { name: "Mohan Badodiya",  district: "Shajapur",        region: "Ujjain Division",        tier: 3 },
  { name: "Gulana",          district: "Shajapur",        region: "Ujjain Division",        tier: 3 },
  { name: "Avantipur Badodiya", district: "Shajapur",     region: "Ujjain Division",        tier: 3 },
  { name: "Polay Kalan",     district: "Shajapur",        region: "Ujjain Division",        tier: 3 },
  // Agar Malwa district
  { name: "Barode",          district: "Agar Malwa",      region: "Ujjain Division",        tier: 3 },
  // Dewas district
  { name: "Hatpipliya",      district: "Dewas",           region: "Ujjain Division",        tier: 3 },
  { name: "Satwas",          district: "Dewas",           region: "Ujjain Division",        tier: 3 },
  { name: "Tonk Khurd",      district: "Dewas",           region: "Ujjain Division",        tier: 3 },
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
export const ALL_CITY_SLUGS: string[] = MP_CITIES.map((c) => slugifyCity(c.name));

/** Look up a city by its URL slug */
export function getCityData(slug: string): MPCity | undefined {
  return MP_CITIES.find((c) => slugifyCity(c.name) === slug);
}

/** Format a raw slug into a display name (fallback when city not in list) */
export function formatCityDisplay(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}