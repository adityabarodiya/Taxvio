// data/bihar-gst-cities.ts

export type BiharArea = {
  name: string;
  district: string;
  region: string;
  tier: 1 | 2 | 3;
};

export const BIHAR_REGIONS: Record<string, string[]> = {
  "Patna": [
    "Patna", "Patna City", "Danapur", "Phulwari Sharif", "Masaurhi",
    "Paliganj", "Bikram", "Naubatpur", "Punpun", "Dulhin Bazar",
  ],
  "Gaya": [
    "Gaya", "Bodh Gaya", "Sherghati", "Tekari", "Atri", "Dobhi",
    "Belaganj", "Gurua", "Imamganj", "Mohanpur", "Wazirganj", "Paraiya",
    "Amas", "Fatehpur Gaya", "Khizarsarai", "Manpur", "Nawada Gaya", "Tankuppa",
  ],
  "Bhagalpur": [
    "Bhagalpur", "Sultanganj", "Kahalgaon", "Bihpur", "Naugachhia",
    "Gopalpur", "Pirpainti", "Sabour", "Amarpur", "Jagdishpur Bhagalpur",
    "Kharik", "Nathnagar", "Rangrachowk", "Shahkund",
  ],
  "Muzaffarpur": [
    "Muzaffarpur", "Sitamarhi", "Sheohar", "Motipur", "Kanti",
    "Bochahan", "Gaighat", "Paroo", "Saraiya", "Minapur",
    "Aurai", "Marwan", "Sakra", "Kurhani", "Musahari",
  ],
  "Darbhanga": [
    "Darbhanga", "Madhubani", "Samastipur", "Jale", "Keoti",
    "Benipur", "Baheri", "Hayaghat", "Kiratpur", "Manigachhi",
    "Singhwara", "Tardih", "Ghanshyampur", "Kusheshwar Asthan",
  ],
  "Motihari": [
    "Motihari", "East Champaran", "Raxaul", "Bettiah", "West Champaran",
    "Adapur", "Areraj", "Chakia", "Dhaka", "Ghorasahan",
    "Harsidhi", "Kesaria", "Kotwa", "Mehsi", "Paharpur",
    "Pakridayal", "Pipra", "Ramgarhwa", "Sangrampur",
  ],
  "Saran": [
    "Saran", "Chapra", "Siwan", "Gopalganj", "Amnour",
    "Baniapur", "Dariapur", "Dighwara", "Ekma", "Garkha",
    "Ishuapur", "Jalalpur", "Lahladpur", "Maker", "Manjhi",
    "Marhaura", "Mashrak", "Panapur", "Parsa", "Raghunathpur",
    "Sonepur", "Taraiya",
  ],
  "Nalanda": [
    "Nalanda", "Bihar Sharif", "Rajgir", "Hilsa", "Asthawan",
    "Ben", "Biharsharif", "Bind", "Chandi", "Ekangarsarai",
    "Giriyak", "Harnaut", "Islampur Nalanda", "Karai Parsurai",
    "Katrisarai", "Nagar Nausa", "Noorsarai", "Parbalpur",
    "Rahui", "Silao", "Sarmera", "Tharthari",
  ],
  "Rohtas": [
    "Rohtas", "Sasaram", "Dehri", "Bikramganj", "Bhabua",
    "Akorhigola", "Chenari", "Dawath", "Dinara", "Kargahar",
    "Kochas", "Nasriganj", "Nokha", "Rajpur Rohtas", "Sanjhauli",
    "Sheosagar", "Suryapura", "Tilauthu",
  ],
  "Bhojpur": [
    "Bhojpur", "Ara", "Buxar", "Jagdishpur Bhojpur", "Agiaon",
    "Arrah", "Barhara", "Charpokhari", "Garhani", "Koilwar",
    "Piro", "Sandesh", "Shahpur Bhojpur", "Simri", "Tarari",
    "Udwant Nagar",
  ],
  "Vaishali": [
    "Vaishali", "Hajipur", "Muzaffarpur South", "Lalganj",
    "Bidupur", "Bhagwanpur", "Chehrakala", "Desri", "Goraul",
    "Jandaha", "Mahua", "Mahnar", "Patepur", "Raghopur",
    "Raja Pakar", "Sahdei Buzurg", "Vaishali City",
  ],
  "Sitamarhi": [
    "Sitamarhi", "Dumra", "Runnisaidpur", "Bajpatti", "Bathnaha",
    "Belsand", "Choraut", "Majorganj", "Nanpur", "Parihar",
    "Parsauni", "Pupri", "Riga", "Sonbarsa", "Sursand",
  ],
  "Madhubani": [
    "Madhubani", "Jhanjharpur", "Benipatti", "Bisfi", "Ghoghardiha",
    "Harlakhi", "Jaynagar", "Khajauli", "Ladania", "Laukahi",
    "Laukahi", "Madhepur", "Pandaul", "Phulparas", "Rajnagar",
    "Rahika", "Sattar Kataha",
  ],
  "Samastipur": [
    "Samastipur", "Dalsinghsarai", "Rosera", "Bibhutipur", "Bithan",
    "Hasanpur", "Kalyanpur Samastipur", "Mohiuddinagar",
    "Morwa", "Pusa Samastipur", "Shivaji Nagar", "Singhia",
    "Tajpur", "Vidyapati Nagar", "Warisnagar",
  ],
  "Begusarai": [
    "Begusarai", "Barauni", "Teghra", "Bachhwara", "Balia",
    "Ballia", "Bhagwanpur Begusarai", "Birpur", "Cheria Bariyarpur",
    "Dandari", "Garhpura", "Khudabandpur", "Mansurchak",
    "Matihani", "Nawkothi", "Sahebpur Kamal", "Samho Akha Kurha",
  ],
  "Khagaria": [
    "Khagaria", "Mansi", "Alauli", "Chautham", "Gogri",
    "Khagaria City", "Parbatta",
  ],
  "Munger": [
    "Munger", "Jamalpur", "Sheikhpura", "Lakhisarai", "Asarganj",
    "Bariarpur", "Dharhara", "Haveli Kharagpur", "Sangrampur Munger",
    "Tarapur",
  ],
  "Jamui": [
    "Jamui", "Jhajha", "Chakai", "Barhat", "Gidhaur",
    "Islamnagar", "Khaira", "Sono", "Sikandra",
  ],
  "Nawada": [
    "Nawada", "Rajauli", "Warsaliganj", "Akbarpur Nawada", "Govindpur",
    "Hisua", "Kashichak", "Kawakol", "Meskaur", "Nardiganj",
    "Narhat", "Pakribarwan", "Roh", "Sirdala",
  ],
  "Aurangabad": [
    "Aurangabad Bihar", "Daudnagar", "Obra", "Barun", "Dev",
    "Goh", "Haspura", "Kutumba", "Madanpur Aurangabad",
    "Nabinagar", "Rafiganj",
  ],
  "Arwal": [
    "Arwal", "Kaler", "Kurtha", "Sonbhadra Banshi Suryapur",
  ],
  "Jehanabad": [
    "Jehanabad", "Makhdumpur", "Ghosi", "Hulasganj", "Kako", "Modanganj",
  ],
  "Sheohar": [
    "Sheohar", "Purnahiya", "Piprahi",
  ],
  "Supaul": [
    "Supaul", "Birpur Supaul", "Chhatapur", "Kishanpur", "Maryganj",
    "Nirmali", "Pipra Supaul", "Pratapganj", "Raghopur Supaul",
    "Salkhua", "Saraigarh Bhaptiyahi", "Triveniganj",
  ],
  "Madhepura": [
    "Madhepura", "Murliganj", "Alamnagar", "Bihariganj", "Chausa",
    "Gambhirpur", "Ghailarh", "Gwalpara", "Kumarkhand",
    "Puraini", "Shankarpur", "Singheshwar",
  ],
  "Saharsa": [
    "Saharsa", "Simri Bakhtiyarpur", "Banmankhi", "Kahara",
    "Mahishi", "Nauhatta", "Patarghat", "Sattar Kataha Saharsa",
    "Sonbarsa Saharsa", "Salkhua Saharsa",
  ],
  "Purnia": [
    "Purnia", "Katihar", "Araria", "Kishanganj", "Baisi",
    "Banmankhi Purnia", "Bhawanipur", "Byasi", "Dagarua",
    "Dhamdaha", "Jalalgarh", "Kasba", "Krityanand Nagar",
    "Rupauli", "Srinagar Purnia",
  ],
  "Katihar": [
    "Katihar", "Manihari", "Azamnagar", "Balrampur Katihar",
    "Barsoi", "Barari", "Dandkhora", "Falka", "Kadwa",
    "Koria", "Korha", "Mansahi", "Pranpur", "Sameli",
  ],
  "Araria": [
    "Araria", "Forbesganj", "Jokihat", "Bhargama", "Kursakatta",
    "Narpatganj", "Palasi", "Raniganj Araria", "Sikti",
  ],
  "Kishanganj": [
    "Kishanganj", "Bahadurganj", "Dighalbank", "Kochadhaman",
    "Pothia", "Terhagachh", "Thakurganj",
  ],
  "Gopalganj": [
    "Gopalganj", "Siwan East", "Bhore", "Barauli", "Bhorey",
    "Bhoramdeo", "Hathua", "Kateya", "Kuchaikote", "Majhaulia",
    "Panchdeori", "Phulwaria", "Thawe", "Uchkagaon",
    "Vijayipur",
  ],
  "Siwan": [
    "Siwan", "Maharajganj", "Andar", "Barharia", "Basantpur",
    "Darauli", "Daraundha", "Goriakothi", "Hussainganj",
    "Lakri Nabiganj", "Mairwa", "Nautan", "Pachrukhi",
    "Raghunathpur Siwan", "Siswan", "Ziradei",
  ],
  "Kaimur": [
    "Kaimur", "Bhabua", "Adhaura", "Bhagwanpur Kaimur", "Chainpur",
    "Chand", "Durgawati", "Kudra", "Mohammad Pur", "Nuaon",
    "Rampur Kaimur", "Ramgarh Kaimur",
  ],
  "Lakhisarai": [
    "Lakhisarai", "Surajgarha", "Barahiya", "Chanan", "Halsi",
    "Pipariya",
  ],
  "Sheikhpura": [
    "Sheikhpura", "Ariyari", "Barbigha", "Chewara", "Ghat Kusumbha",
    "Shekhpura City",
  ],
  "Banka": [
    "Banka", "Amarpur Banka", "Barahat", "Belhar", "Banka City",
    "Bounsi", "Chandan", "Dhuraiya", "Fullidumar", "Katoria",
    "Rajoun", "Shambhuganj",
  ],
};

export const BIHAR_AREAS: BiharArea[] = [
  // ── Tier 1 — Major commercial / administrative hubs ──────────────────────
  { name: "Patna",               district: "Patna",           region: "Patna",            tier: 1 },
  { name: "Gaya",                district: "Gaya",            region: "Gaya",             tier: 1 },
  { name: "Bhagalpur",           district: "Bhagalpur",       region: "Bhagalpur",        tier: 1 },
  { name: "Muzaffarpur",         district: "Muzaffarpur",     region: "Muzaffarpur",      tier: 1 },
  { name: "Darbhanga",           district: "Darbhanga",       region: "Darbhanga",        tier: 1 },
  { name: "Motihari",            district: "Motihari",        region: "Motihari",         tier: 1 },
  { name: "Purnia",              district: "Purnia",          region: "Purnia",           tier: 1 },
  { name: "Arrah",               district: "Bhojpur",         region: "Bhojpur",          tier: 1 },
  { name: "Bihar Sharif",        district: "Nalanda",         region: "Nalanda",          tier: 1 },
  { name: "Sasaram",             district: "Rohtas",          region: "Rohtas",           tier: 1 },
  { name: "Hajipur",             district: "Vaishali",        region: "Vaishali",         tier: 1 },
  { name: "Begusarai",           district: "Begusarai",       region: "Begusarai",        tier: 1 },
  { name: "Katihar",             district: "Katihar",         region: "Katihar",          tier: 1 },
  { name: "Munger",              district: "Munger",          region: "Munger",           tier: 1 },
  { name: "Chapra",              district: "Saran",           region: "Saran",            tier: 1 },
  { name: "Siwan",               district: "Siwan",           region: "Siwan",            tier: 1 },
  { name: "Gopalganj",           district: "Gopalganj",       region: "Gopalganj",        tier: 1 },
  { name: "Samastipur",          district: "Samastipur",      region: "Samastipur",       tier: 1 },
  { name: "Bettiah",             district: "Motihari",        region: "Motihari",         tier: 1 },
  { name: "Aurangabad Bihar",    district: "Aurangabad",      region: "Aurangabad",       tier: 1 },

  // ── Tier 2 — Established towns / district headquarters ───────────────────
  { name: "Bodh Gaya",           district: "Gaya",            region: "Gaya",             tier: 2 },
  { name: "Rajgir",              district: "Nalanda",         region: "Nalanda",          tier: 2 },
  { name: "Nalanda",             district: "Nalanda",         region: "Nalanda",          tier: 2 },
  { name: "Sultanganj",          district: "Bhagalpur",       region: "Bhagalpur",        tier: 2 },
  { name: "Kahalgaon",           district: "Bhagalpur",       region: "Bhagalpur",        tier: 2 },
  { name: "Buxar",               district: "Bhojpur",         region: "Bhojpur",          tier: 2 },
  { name: "Dehri",               district: "Rohtas",          region: "Rohtas",           tier: 2 },
  { name: "Bikramganj",          district: "Rohtas",          region: "Rohtas",           tier: 2 },
  { name: "Sitamarhi",           district: "Sitamarhi",       region: "Sitamarhi",        tier: 2 },
  { name: "Madhubani",           district: "Madhubani",       region: "Madhubani",        tier: 2 },
  { name: "Jhanjharpur",         district: "Madhubani",       region: "Madhubani",        tier: 2 },
  { name: "Saharsa",             district: "Saharsa",         region: "Saharsa",          tier: 2 },
  { name: "Supaul",              district: "Supaul",          region: "Supaul",           tier: 2 },
  { name: "Araria",              district: "Araria",          region: "Araria",           tier: 2 },
  { name: "Kishanganj",          district: "Kishanganj",      region: "Kishanganj",       tier: 2 },
  { name: "Madhepura",           district: "Madhepura",       region: "Madhepura",        tier: 2 },
  { name: "Khagaria",            district: "Khagaria",        region: "Khagaria",         tier: 2 },
  { name: "Nawada",              district: "Nawada",          region: "Nawada",           tier: 2 },
  { name: "Jehanabad",           district: "Jehanabad",       region: "Jehanabad",        tier: 2 },
  { name: "Arwal",               district: "Arwal",           region: "Arwal",            tier: 2 },
  { name: "Sheohar",             district: "Sheohar",         region: "Sheohar",          tier: 2 },
  { name: "Lakhisarai",          district: "Lakhisarai",      region: "Lakhisarai",       tier: 2 },
  { name: "Sheikhpura",          district: "Sheikhpura",      region: "Sheikhpura",       tier: 2 },
  { name: "Jamui",               district: "Jamui",           region: "Jamui",            tier: 2 },
  { name: "Banka",               district: "Banka",           region: "Banka",            tier: 2 },
  { name: "Kaimur",              district: "Kaimur",          region: "Kaimur",           tier: 2 },
  { name: "Jamalpur",            district: "Munger",          region: "Munger",           tier: 2 },
  { name: "Danapur",             district: "Patna",           region: "Patna",            tier: 2 },
  { name: "Phulwari Sharif",     district: "Patna",           region: "Patna",            tier: 2 },
  { name: "Barauni",             district: "Begusarai",       region: "Begusarai",        tier: 2 },
  { name: "Raxaul",              district: "Motihari",        region: "Motihari",         tier: 2 },
  { name: "Forbesganj",          district: "Araria",          region: "Araria",           tier: 2 },
  { name: "Manihari",            district: "Katihar",         region: "Katihar",          tier: 2 },
  { name: "Naugachhia",          district: "Bhagalpur",       region: "Bhagalpur",        tier: 2 },
  { name: "Dalsinghsarai",       district: "Samastipur",      region: "Samastipur",       tier: 2 },
  { name: "Rosera",              district: "Samastipur",      region: "Samastipur",       tier: 2 },
  { name: "Motipur",             district: "Muzaffarpur",     region: "Muzaffarpur",      tier: 2 },
  { name: "Hilsa",               district: "Nalanda",         region: "Nalanda",          tier: 2 },
  { name: "Sherghati",           district: "Gaya",            region: "Gaya",             tier: 2 },
  { name: "Rajauli",             district: "Nawada",          region: "Nawada",           tier: 2 },
  { name: "Daudnagar",           district: "Aurangabad",      region: "Aurangabad",       tier: 2 },
  { name: "Jhajha",              district: "Jamui",           region: "Jamui",            tier: 2 },
  { name: "Bhabua",              district: "Kaimur",          region: "Kaimur",           tier: 2 },
  { name: "Maharajganj",         district: "Siwan",           region: "Siwan",            tier: 2 },
  { name: "Murliganj",           district: "Madhepura",       region: "Madhepura",        tier: 2 },
  { name: "Mansi",               district: "Khagaria",        region: "Khagaria",         tier: 2 },
  { name: "Bahadurganj",         district: "Kishanganj",      region: "Kishanganj",       tier: 2 },
  { name: "Nirmali",             district: "Supaul",          region: "Supaul",           tier: 2 },
  { name: "Birpur Supaul",       district: "Supaul",          region: "Supaul",           tier: 2 },
  { name: "Dumra",               district: "Sitamarhi",       region: "Sitamarhi",        tier: 2 },
  { name: "Runnisaidpur",        district: "Sitamarhi",       region: "Sitamarhi",        tier: 2 },
  { name: "Lalganj",             district: "Vaishali",        region: "Vaishali",         tier: 2 },
  { name: "Hathua",              district: "Gopalganj",       region: "Gopalganj",        tier: 2 },
  { name: "Mairwa",              district: "Siwan",           region: "Siwan",            tier: 2 },

  // ── Tier 3 — Tehsils, blocks, sub-towns & villages ───────────────────────

  // -- Patna District --
  { name: "Patna City",          district: "Patna",           region: "Patna",            tier: 3 },
  { name: "Masaurhi",            district: "Patna",           region: "Patna",            tier: 3 },
  { name: "Paliganj",            district: "Patna",           region: "Patna",            tier: 3 },
  { name: "Bikram",              district: "Patna",           region: "Patna",            tier: 3 },
  { name: "Naubatpur",           district: "Patna",           region: "Patna",            tier: 3 },
  { name: "Punpun",              district: "Patna",           region: "Patna",            tier: 3 },
  { name: "Dulhin Bazar",        district: "Patna",           region: "Patna",            tier: 3 },
  { name: "Maner",               district: "Patna",           region: "Patna",            tier: 3 },
  { name: "Bihta",               district: "Patna",           region: "Patna",            tier: 3 },
  { name: "Khusrupur",           district: "Patna",           region: "Patna",            tier: 3 },
  { name: "Fatuha",              district: "Patna",           region: "Patna",            tier: 3 },
  { name: "Barh",                district: "Patna",           region: "Patna",            tier: 3 },
  { name: "Bakhtiyarpur",        district: "Patna",           region: "Patna",            tier: 3 },
  { name: "Mokama",              district: "Patna",           region: "Patna",            tier: 3 },
  { name: "Athmalgola",          district: "Patna",           region: "Patna",            tier: 3 },
  { name: "Ghoswari",            district: "Patna",           region: "Patna",            tier: 3 },
  { name: "Sampatchak",          district: "Patna",           region: "Patna",            tier: 3 },
  { name: "Pandarak",            district: "Patna",           region: "Patna",            tier: 3 },

  // -- Gaya District --
  { name: "Tekari",              district: "Gaya",            region: "Gaya",             tier: 3 },
  { name: "Atri",                district: "Gaya",            region: "Gaya",             tier: 3 },
  { name: "Dobhi",               district: "Gaya",            region: "Gaya",             tier: 3 },
  { name: "Belaganj",            district: "Gaya",            region: "Gaya",             tier: 3 },
  { name: "Gurua",               district: "Gaya",            region: "Gaya",             tier: 3 },
  { name: "Imamganj",            district: "Gaya",            region: "Gaya",             tier: 3 },
  { name: "Mohanpur Gaya",       district: "Gaya",            region: "Gaya",             tier: 3 },
  { name: "Wazirganj",           district: "Gaya",            region: "Gaya",             tier: 3 },
  { name: "Paraiya",             district: "Gaya",            region: "Gaya",             tier: 3 },
  { name: "Amas",                district: "Gaya",            region: "Gaya",             tier: 3 },
  { name: "Fatehpur Gaya",       district: "Gaya",            region: "Gaya",             tier: 3 },
  { name: "Khizarsarai",         district: "Gaya",            region: "Gaya",             tier: 3 },
  { name: "Manpur Gaya",         district: "Gaya",            region: "Gaya",             tier: 3 },
  { name: "Nawada Gaya Block",   district: "Gaya",            region: "Gaya",             tier: 3 },
  { name: "Tankuppa",            district: "Gaya",            region: "Gaya",             tier: 3 },
  { name: "Konch",               district: "Gaya",            region: "Gaya",             tier: 3 },
  { name: "Barachatti",          district: "Gaya",            region: "Gaya",             tier: 3 },
  { name: "Muftiganj",           district: "Gaya",            region: "Gaya",             tier: 3 },
  { name: "Bela Gaya",           district: "Gaya",            region: "Gaya",             tier: 3 },

  // -- Nalanda District --
  { name: "Asthawan",            district: "Nalanda",         region: "Nalanda",          tier: 3 },
  { name: "Ben Nalanda",         district: "Nalanda",         region: "Nalanda",          tier: 3 },
  { name: "Bind",                district: "Nalanda",         region: "Nalanda",          tier: 3 },
  { name: "Chandi Nalanda",      district: "Nalanda",         region: "Nalanda",          tier: 3 },
  { name: "Ekangarsarai",        district: "Nalanda",         region: "Nalanda",          tier: 3 },
  { name: "Giriyak",             district: "Nalanda",         region: "Nalanda",          tier: 3 },
  { name: "Harnaut",             district: "Nalanda",         region: "Nalanda",          tier: 3 },
  { name: "Islampur Nalanda",    district: "Nalanda",         region: "Nalanda",          tier: 3 },
  { name: "Karai Parsurai",      district: "Nalanda",         region: "Nalanda",          tier: 3 },
  { name: "Katrisarai",          district: "Nalanda",         region: "Nalanda",          tier: 3 },
  { name: "Nagar Nausa",         district: "Nalanda",         region: "Nalanda",          tier: 3 },
  { name: "Noorsarai",           district: "Nalanda",         region: "Nalanda",          tier: 3 },
  { name: "Parbalpur",           district: "Nalanda",         region: "Nalanda",          tier: 3 },
  { name: "Rahui",               district: "Nalanda",         region: "Nalanda",          tier: 3 },
  { name: "Silao",               district: "Nalanda",         region: "Nalanda",          tier: 3 },
  { name: "Sarmera",             district: "Nalanda",         region: "Nalanda",          tier: 3 },
  { name: "Tharthari",           district: "Nalanda",         region: "Nalanda",          tier: 3 },

  // -- Bhagalpur District --
  { name: "Bihpur",              district: "Bhagalpur",       region: "Bhagalpur",        tier: 3 },
  { name: "Gopalpur Bhagalpur",  district: "Bhagalpur",       region: "Bhagalpur",        tier: 3 },
  { name: "Pirpainti",           district: "Bhagalpur",       region: "Bhagalpur",        tier: 3 },
  { name: "Sabour",              district: "Bhagalpur",       region: "Bhagalpur",        tier: 3 },
  { name: "Amarpur Bhagalpur",   district: "Bhagalpur",       region: "Bhagalpur",        tier: 3 },
  { name: "Jagdishpur Bhagalpur",district: "Bhagalpur",       region: "Bhagalpur",        tier: 3 },
  { name: "Kharik",              district: "Bhagalpur",       region: "Bhagalpur",        tier: 3 },
  { name: "Nathnagar",           district: "Bhagalpur",       region: "Bhagalpur",        tier: 3 },
  { name: "Rangrachowk",         district: "Bhagalpur",       region: "Bhagalpur",        tier: 3 },
  { name: "Shahkund",            district: "Bhagalpur",       region: "Bhagalpur",        tier: 3 },
  { name: "Ismailpur",           district: "Bhagalpur",       region: "Bhagalpur",        tier: 3 },
  { name: "Sanhaula",            district: "Bhagalpur",       region: "Bhagalpur",        tier: 3 },

  // -- Muzaffarpur District --
  { name: "Kanti",               district: "Muzaffarpur",     region: "Muzaffarpur",      tier: 3 },
  { name: "Bochahan",            district: "Muzaffarpur",     region: "Muzaffarpur",      tier: 3 },
  { name: "Gaighat",             district: "Muzaffarpur",     region: "Muzaffarpur",      tier: 3 },
  { name: "Paroo",               district: "Muzaffarpur",     region: "Muzaffarpur",      tier: 3 },
  { name: "Saraiya",             district: "Muzaffarpur",     region: "Muzaffarpur",      tier: 3 },
  { name: "Minapur",             district: "Muzaffarpur",     region: "Muzaffarpur",      tier: 3 },
  { name: "Aurai",               district: "Muzaffarpur",     region: "Muzaffarpur",      tier: 3 },
  { name: "Marwan",              district: "Muzaffarpur",     region: "Muzaffarpur",      tier: 3 },
  { name: "Sakra",               district: "Muzaffarpur",     region: "Muzaffarpur",      tier: 3 },
  { name: "Kurhani",             district: "Muzaffarpur",     region: "Muzaffarpur",      tier: 3 },
  { name: "Musahari",            district: "Muzaffarpur",     region: "Muzaffarpur",      tier: 3 },
  { name: "Sahebganj Muzaffarpur", district: "Muzaffarpur",   region: "Muzaffarpur",      tier: 3 },
  { name: "Baruraj",             district: "Muzaffarpur",     region: "Muzaffarpur",      tier: 3 },
  { name: "Parihar Muzaffarpur", district: "Muzaffarpur",     region: "Muzaffarpur",      tier: 3 },

  // -- Darbhanga District --
  { name: "Jale",                district: "Darbhanga",       region: "Darbhanga",        tier: 3 },
  { name: "Keoti",               district: "Darbhanga",       region: "Darbhanga",        tier: 3 },
  { name: "Benipur",             district: "Darbhanga",       region: "Darbhanga",        tier: 3 },
  { name: "Baheri",              district: "Darbhanga",       region: "Darbhanga",        tier: 3 },
  { name: "Hayaghat",            district: "Darbhanga",       region: "Darbhanga",        tier: 3 },
  { name: "Kiratpur Darbhanga",  district: "Darbhanga",       region: "Darbhanga",        tier: 3 },
  { name: "Manigachhi",          district: "Darbhanga",       region: "Darbhanga",        tier: 3 },
  { name: "Singhwara",           district: "Darbhanga",       region: "Darbhanga",        tier: 3 },
  { name: "Tardih",              district: "Darbhanga",       region: "Darbhanga",        tier: 3 },
  { name: "Ghanshyampur",        district: "Darbhanga",       region: "Darbhanga",        tier: 3 },
  { name: "Kusheshwar Asthan",   district: "Darbhanga",       region: "Darbhanga",        tier: 3 },
  { name: "Alinagar",            district: "Darbhanga",       region: "Darbhanga",        tier: 3 },
  { name: "Biraul",              district: "Darbhanga",       region: "Darbhanga",        tier: 3 },
  { name: "Hanuman Nagar Darbhanga", district: "Darbhanga",   region: "Darbhanga",        tier: 3 },

  // -- Madhubani District --
  { name: "Benipatti",           district: "Madhubani",       region: "Madhubani",        tier: 3 },
  { name: "Bisfi",               district: "Madhubani",       region: "Madhubani",        tier: 3 },
  { name: "Ghoghardiha",         district: "Madhubani",       region: "Madhubani",        tier: 3 },
  { name: "Harlakhi",            district: "Madhubani",       region: "Madhubani",        tier: 3 },
  { name: "Jaynagar",            district: "Madhubani",       region: "Madhubani",        tier: 3 },
  { name: "Khajauli",            district: "Madhubani",       region: "Madhubani",        tier: 3 },
  { name: "Ladania",             district: "Madhubani",       region: "Madhubani",        tier: 3 },
  { name: "Laukahi",             district: "Madhubani",       region: "Madhubani",        tier: 3 },
  { name: "Madhepur",            district: "Madhubani",       region: "Madhubani",        tier: 3 },
  { name: "Pandaul",             district: "Madhubani",       region: "Madhubani",        tier: 3 },
  { name: "Phulparas",           district: "Madhubani",       region: "Madhubani",        tier: 3 },
  { name: "Rajnagar Madhubani",  district: "Madhubani",       region: "Madhubani",        tier: 3 },
  { name: "Rahika",              district: "Madhubani",       region: "Madhubani",        tier: 3 },
  { name: "Sattar Kataha",       district: "Madhubani",       region: "Madhubani",        tier: 3 },
  { name: "Andhratharhi",        district: "Madhubani",       region: "Madhubani",        tier: 3 },
  { name: "Babubarhi",           district: "Madhubani",       region: "Madhubani",        tier: 3 },
  { name: "Lakhnaur",            district: "Madhubani",       region: "Madhubani",        tier: 3 },

  // -- Sitamarhi District --
  { name: "Bajpatti",            district: "Sitamarhi",       region: "Sitamarhi",        tier: 3 },
  { name: "Bathnaha",            district: "Sitamarhi",       region: "Sitamarhi",        tier: 3 },
  { name: "Belsand",             district: "Sitamarhi",       region: "Sitamarhi",        tier: 3 },
  { name: "Choraut",             district: "Sitamarhi",       region: "Sitamarhi",        tier: 3 },
  { name: "Majorganj",           district: "Sitamarhi",       region: "Sitamarhi",        tier: 3 },
  { name: "Nanpur",              district: "Sitamarhi",       region: "Sitamarhi",        tier: 3 },
  { name: "Parihar Sitamarhi",   district: "Sitamarhi",       region: "Sitamarhi",        tier: 3 },
  { name: "Parsauni",            district: "Sitamarhi",       region: "Sitamarhi",        tier: 3 },
  { name: "Pupri",               district: "Sitamarhi",       region: "Sitamarhi",        tier: 3 },
  { name: "Riga",                district: "Sitamarhi",       region: "Sitamarhi",        tier: 3 },
  { name: "Sonbarsa",            district: "Sitamarhi",       region: "Sitamarhi",        tier: 3 },
  { name: "Sursand",             district: "Sitamarhi",       region: "Sitamarhi",        tier: 3 },
  { name: "Suppi",               district: "Sitamarhi",       region: "Sitamarhi",        tier: 3 },

  // -- Vaishali District --
  { name: "Bidupur",             district: "Vaishali",        region: "Vaishali",         tier: 3 },
  { name: "Bhagwanpur Vaishali", district: "Vaishali",        region: "Vaishali",         tier: 3 },
  { name: "Chehrakala",          district: "Vaishali",        region: "Vaishali",         tier: 3 },
  { name: "Desri",               district: "Vaishali",        region: "Vaishali",         tier: 3 },
  { name: "Goraul",              district: "Vaishali",        region: "Vaishali",         tier: 3 },
  { name: "Jandaha",             district: "Vaishali",        region: "Vaishali",         tier: 3 },
  { name: "Mahua",               district: "Vaishali",        region: "Vaishali",         tier: 3 },
  { name: "Mahnar",              district: "Vaishali",        region: "Vaishali",         tier: 3 },
  { name: "Patepur",             district: "Vaishali",        region: "Vaishali",         tier: 3 },
  { name: "Raghopur Vaishali",   district: "Vaishali",        region: "Vaishali",         tier: 3 },
  { name: "Raja Pakar",          district: "Vaishali",        region: "Vaishali",         tier: 3 },
  { name: "Sahdei Buzurg",       district: "Vaishali",        region: "Vaishali",         tier: 3 },

  // -- Saran District --
  { name: "Amnour",              district: "Saran",           region: "Saran",            tier: 3 },
  { name: "Baniapur",            district: "Saran",           region: "Saran",            tier: 3 },
  { name: "Dariapur",            district: "Saran",           region: "Saran",            tier: 3 },
  { name: "Dighwara",            district: "Saran",           region: "Saran",            tier: 3 },
  { name: "Ekma",                district: "Saran",           region: "Saran",            tier: 3 },
  { name: "Garkha",              district: "Saran",           region: "Saran",            tier: 3 },
  { name: "Ishuapur",            district: "Saran",           region: "Saran",            tier: 3 },
  { name: "Jalalpur",            district: "Saran",           region: "Saran",            tier: 3 },
  { name: "Lahladpur",           district: "Saran",           region: "Saran",            tier: 3 },
  { name: "Maker",               district: "Saran",           region: "Saran",            tier: 3 },
  { name: "Manjhi",              district: "Saran",           region: "Saran",            tier: 3 },
  { name: "Marhaura",            district: "Saran",           region: "Saran",            tier: 3 },
  { name: "Mashrak",             district: "Saran",           region: "Saran",            tier: 3 },
  { name: "Panapur",             district: "Saran",           region: "Saran",            tier: 3 },
  { name: "Parsa Saran",         district: "Saran",           region: "Saran",            tier: 3 },
  { name: "Raghunathpur Saran",  district: "Saran",           region: "Saran",            tier: 3 },
  { name: "Sonepur",             district: "Saran",           region: "Saran",            tier: 3 },
  { name: "Taraiya",             district: "Saran",           region: "Saran",            tier: 3 },

  // -- Siwan District --
  { name: "Andar",               district: "Siwan",           region: "Siwan",            tier: 3 },
  { name: "Barharia",            district: "Siwan",           region: "Siwan",            tier: 3 },
  { name: "Basantpur",           district: "Siwan",           region: "Siwan",            tier: 3 },
  { name: "Darauli",             district: "Siwan",           region: "Siwan",            tier: 3 },
  { name: "Daraundha",           district: "Siwan",           region: "Siwan",            tier: 3 },
  { name: "Goriakothi",          district: "Siwan",           region: "Siwan",            tier: 3 },
  { name: "Hussainganj Siwan",   district: "Siwan",           region: "Siwan",            tier: 3 },
  { name: "Lakri Nabiganj",      district: "Siwan",           region: "Siwan",            tier: 3 },
  { name: "Nautan",              district: "Siwan",           region: "Siwan",            tier: 3 },
  { name: "Pachrukhi",           district: "Siwan",           region: "Siwan",            tier: 3 },
  { name: "Raghunathpur Siwan",  district: "Siwan",           region: "Siwan",            tier: 3 },
  { name: "Siswan",              district: "Siwan",           region: "Siwan",            tier: 3 },
  { name: "Ziradei",             district: "Siwan",           region: "Siwan",            tier: 3 },

  // -- Gopalganj District --
  { name: "Barauli",             district: "Gopalganj",       region: "Gopalganj",        tier: 3 },
  { name: "Bhorey",              district: "Gopalganj",       region: "Gopalganj",        tier: 3 },
  { name: "Kateya",              district: "Gopalganj",       region: "Gopalganj",        tier: 3 },
  { name: "Kuchaikote",          district: "Gopalganj",       region: "Gopalganj",        tier: 3 },
  { name: "Majhaulia",           district: "Gopalganj",       region: "Gopalganj",        tier: 3 },
  { name: "Panchdeori",          district: "Gopalganj",       region: "Gopalganj",        tier: 3 },
  { name: "Phulwaria",           district: "Gopalganj",       region: "Gopalganj",        tier: 3 },
  { name: "Thawe",               district: "Gopalganj",       region: "Gopalganj",        tier: 3 },
  { name: "Uchkagaon",           district: "Gopalganj",       region: "Gopalganj",        tier: 3 },
  { name: "Vijayipur",           district: "Gopalganj",       region: "Gopalganj",        tier: 3 },

  // -- East Champaran / Motihari District --
  { name: "Adapur",              district: "Motihari",        region: "Motihari",         tier: 3 },
  { name: "Areraj",              district: "Motihari",        region: "Motihari",         tier: 3 },
  { name: "Chakia",              district: "Motihari",        region: "Motihari",         tier: 3 },
  { name: "Dhaka",               district: "Motihari",        region: "Motihari",         tier: 3 },
  { name: "Ghorasahan",          district: "Motihari",        region: "Motihari",         tier: 3 },
  { name: "Harsidhi",            district: "Motihari",        region: "Motihari",         tier: 3 },
  { name: "Kesaria",             district: "Motihari",        region: "Motihari",         tier: 3 },
  { name: "Kotwa",               district: "Motihari",        region: "Motihari",         tier: 3 },
  { name: "Mehsi",               district: "Motihari",        region: "Motihari",         tier: 3 },
  { name: "Paharpur",            district: "Motihari",        region: "Motihari",         tier: 3 },
  { name: "Pakridayal",          district: "Motihari",        region: "Motihari",         tier: 3 },
  { name: "Pipra",               district: "Motihari",        region: "Motihari",         tier: 3 },
  { name: "Ramgarhwa",           district: "Motihari",        region: "Motihari",         tier: 3 },
  { name: "Sangrampur Motihari", district: "Motihari",        region: "Motihari",         tier: 3 },
  { name: "Tetaria",             district: "Motihari",        region: "Motihari",         tier: 3 },
  { name: "Turkaulia",           district: "Motihari",        region: "Motihari",         tier: 3 },
  { name: "Phenhara",            district: "Motihari",        region: "Motihari",         tier: 3 },

  // -- West Champaran / Bettiah District --
  { name: "Bagaha",              district: "Motihari",        region: "Motihari",         tier: 3 },
  { name: "Bettiah Block",       district: "Motihari",        region: "Motihari",         tier: 3 },
  { name: "Chanpatia",           district: "Motihari",        region: "Motihari",         tier: 3 },
  { name: "Gaunaha",             district: "Motihari",        region: "Motihari",         tier: 3 },
  { name: "Jogapatti",           district: "Motihari",        region: "Motihari",         tier: 3 },
  { name: "Lauriya",             district: "Motihari",        region: "Motihari",         tier: 3 },
  { name: "Mainatand",           district: "Motihari",        region: "Motihari",         tier: 3 },
  { name: "Nautan Bazar",        district: "Motihari",        region: "Motihari",         tier: 3 },
  { name: "Narkatiaganj",        district: "Motihari",        region: "Motihari",         tier: 3 },
  { name: "Piprasi",             district: "Motihari",        region: "Motihari",         tier: 3 },
  { name: "Ramnagar West Champaran", district: "Motihari",    region: "Motihari",         tier: 3 },
  { name: "Shikarpur",           district: "Motihari",        region: "Motihari",         tier: 3 },
  { name: "Sikta",               district: "Motihari",        region: "Motihari",         tier: 3 },
  { name: "Thakrahan",           district: "Motihari",        region: "Motihari",         tier: 3 },

  // -- Rohtas District --
  { name: "Akorhigola",          district: "Rohtas",          region: "Rohtas",           tier: 3 },
  { name: "Chenari",             district: "Rohtas",          region: "Rohtas",           tier: 3 },
  { name: "Dawath",              district: "Rohtas",          region: "Rohtas",           tier: 3 },
  { name: "Dinara",              district: "Rohtas",          region: "Rohtas",           tier: 3 },
  { name: "Kargahar",            district: "Rohtas",          region: "Rohtas",           tier: 3 },
  { name: "Kochas",              district: "Rohtas",          region: "Rohtas",           tier: 3 },
  { name: "Nasriganj",           district: "Rohtas",          region: "Rohtas",           tier: 3 },
  { name: "Nokha",               district: "Rohtas",          region: "Rohtas",           tier: 3 },
  { name: "Rajpur Rohtas",       district: "Rohtas",          region: "Rohtas",           tier: 3 },
  { name: "Sanjhauli",           district: "Rohtas",          region: "Rohtas",           tier: 3 },
  { name: "Sheosagar",           district: "Rohtas",          region: "Rohtas",           tier: 3 },
  { name: "Suryapura",           district: "Rohtas",          region: "Rohtas",           tier: 3 },
  { name: "Tilauthu",            district: "Rohtas",          region: "Rohtas",           tier: 3 },
  { name: "Rohtas Block",        district: "Rohtas",          region: "Rohtas",           tier: 3 },

  // -- Kaimur District --
  { name: "Adhaura",             district: "Kaimur",          region: "Kaimur",           tier: 3 },
  { name: "Bhagwanpur Kaimur",   district: "Kaimur",          region: "Kaimur",           tier: 3 },
  { name: "Chainpur",            district: "Kaimur",          region: "Kaimur",           tier: 3 },
  { name: "Chand",               district: "Kaimur",          region: "Kaimur",           tier: 3 },
  { name: "Durgawati",           district: "Kaimur",          region: "Kaimur",           tier: 3 },
  { name: "Kudra",               district: "Kaimur",          region: "Kaimur",           tier: 3 },
  { name: "Mohammad Pur Kaimur", district: "Kaimur",          region: "Kaimur",           tier: 3 },
  { name: "Nuaon",               district: "Kaimur",          region: "Kaimur",           tier: 3 },
  { name: "Ramgarh Kaimur",      district: "Kaimur",          region: "Kaimur",           tier: 3 },
  { name: "Rampur Kaimur",       district: "Kaimur",          region: "Kaimur",           tier: 3 },

  // -- Bhojpur District --
  { name: "Agiaon",              district: "Bhojpur",         region: "Bhojpur",          tier: 3 },
  { name: "Barhara",             district: "Bhojpur",         region: "Bhojpur",          tier: 3 },
  { name: "Charpokhari",         district: "Bhojpur",         region: "Bhojpur",          tier: 3 },
  { name: "Garhani",             district: "Bhojpur",         region: "Bhojpur",          tier: 3 },
  { name: "Jagdishpur Bhojpur",  district: "Bhojpur",         region: "Bhojpur",          tier: 3 },
  { name: "Koilwar",             district: "Bhojpur",         region: "Bhojpur",          tier: 3 },
  { name: "Piro",                district: "Bhojpur",         region: "Bhojpur",          tier: 3 },
  { name: "Sandesh",             district: "Bhojpur",         region: "Bhojpur",          tier: 3 },
  { name: "Shahpur Bhojpur",     district: "Bhojpur",         region: "Bhojpur",          tier: 3 },
  { name: "Simri Bhojpur",       district: "Bhojpur",         region: "Bhojpur",          tier: 3 },
  { name: "Tarari",              district: "Bhojpur",         region: "Bhojpur",          tier: 3 },
  { name: "Udwant Nagar",        district: "Bhojpur",         region: "Bhojpur",          tier: 3 },

  // -- Begusarai District --
  { name: "Bachhwara",           district: "Begusarai",       region: "Begusarai",        tier: 3 },
  { name: "Balia Begusarai",     district: "Begusarai",       region: "Begusarai",        tier: 3 },
  { name: "Bhagwanpur Begusarai",district: "Begusarai",       region: "Begusarai",        tier: 3 },
  { name: "Birpur Begusarai",    district: "Begusarai",       region: "Begusarai",        tier: 3 },
  { name: "Cheria Bariyarpur",   district: "Begusarai",       region: "Begusarai",        tier: 3 },
  { name: "Dandari",             district: "Begusarai",       region: "Begusarai",        tier: 3 },
  { name: "Garhpura",            district: "Begusarai",       region: "Begusarai",        tier: 3 },
  { name: "Khudabandpur",        district: "Begusarai",       region: "Begusarai",        tier: 3 },
  { name: "Mansurchak",          district: "Begusarai",       region: "Begusarai",        tier: 3 },
  { name: "Matihani",            district: "Begusarai",       region: "Begusarai",        tier: 3 },
  { name: "Nawkothi",            district: "Begusarai",       region: "Begusarai",        tier: 3 },
  { name: "Sahebpur Kamal",      district: "Begusarai",       region: "Begusarai",        tier: 3 },
  { name: "Samho Akha Kurha",    district: "Begusarai",       region: "Begusarai",        tier: 3 },
  { name: "Teghra",              district: "Begusarai",       region: "Begusarai",        tier: 3 },

  // -- Samastipur District --
  { name: "Bibhutipur",          district: "Samastipur",      region: "Samastipur",       tier: 3 },
  { name: "Bithan",              district: "Samastipur",      region: "Samastipur",       tier: 3 },
  { name: "Hasanpur",            district: "Samastipur",      region: "Samastipur",       tier: 3 },
  { name: "Kalyanpur Samastipur",district: "Samastipur",      region: "Samastipur",       tier: 3 },
  { name: "Mohiuddinagar",       district: "Samastipur",      region: "Samastipur",       tier: 3 },
  { name: "Morwa",               district: "Samastipur",      region: "Samastipur",       tier: 3 },
  { name: "Pusa Samastipur",     district: "Samastipur",      region: "Samastipur",       tier: 3 },
  { name: "Shivaji Nagar Samastipur", district: "Samastipur", region: "Samastipur",       tier: 3 },
  { name: "Singhia",             district: "Samastipur",      region: "Samastipur",       tier: 3 },
  { name: "Tajpur",              district: "Samastipur",      region: "Samastipur",       tier: 3 },
  { name: "Vidyapati Nagar",     district: "Samastipur",      region: "Samastipur",       tier: 3 },
  { name: "Warisnagar",          district: "Samastipur",      region: "Samastipur",       tier: 3 },
  { name: "Patori",              district: "Samastipur",      region: "Samastipur",       tier: 3 },

  // -- Khagaria District --
  { name: "Alauli",              district: "Khagaria",        region: "Khagaria",         tier: 3 },
  { name: "Chautham",            district: "Khagaria",        region: "Khagaria",         tier: 3 },
  { name: "Gogri",               district: "Khagaria",        region: "Khagaria",         tier: 3 },
  { name: "Parbatta",            district: "Khagaria",        region: "Khagaria",         tier: 3 },
  { name: "Mansi Block",         district: "Khagaria",        region: "Khagaria",         tier: 3 },

  // -- Munger District --
  { name: "Asarganj",            district: "Munger",          region: "Munger",           tier: 3 },
  { name: "Bariarpur",           district: "Munger",          region: "Munger",           tier: 3 },
  { name: "Dharhara",            district: "Munger",          region: "Munger",           tier: 3 },
  { name: "Haveli Kharagpur",    district: "Munger",          region: "Munger",           tier: 3 },
  { name: "Sangrampur Munger",   district: "Munger",          region: "Munger",           tier: 3 },
  { name: "Tarapur",             district: "Munger",          region: "Munger",           tier: 3 },
  { name: "Tetia Bambar",        district: "Munger",          region: "Munger",           tier: 3 },

  // -- Lakhisarai District --
  { name: "Barahiya",            district: "Lakhisarai",      region: "Lakhisarai",       tier: 3 },
  { name: "Chanan",              district: "Lakhisarai",      region: "Lakhisarai",       tier: 3 },
  { name: "Halsi",               district: "Lakhisarai",      region: "Lakhisarai",       tier: 3 },
  { name: "Pipariya Lakhisarai", district: "Lakhisarai",      region: "Lakhisarai",       tier: 3 },
  { name: "Surajgarha",          district: "Lakhisarai",      region: "Lakhisarai",       tier: 3 },

  // -- Sheikhpura District --
  { name: "Ariyari",             district: "Sheikhpura",      region: "Sheikhpura",       tier: 3 },
  { name: "Barbigha",            district: "Sheikhpura",      region: "Sheikhpura",       tier: 3 },
  { name: "Chewara",             district: "Sheikhpura",      region: "Sheikhpura",       tier: 3 },
  { name: "Ghat Kusumbha",       district: "Sheikhpura",      region: "Sheikhpura",       tier: 3 },

  // -- Jamui District --
  { name: "Barhat",              district: "Jamui",           region: "Jamui",            tier: 3 },
  { name: "Chakai",              district: "Jamui",           region: "Jamui",            tier: 3 },
  { name: "Gidhaur",             district: "Jamui",           region: "Jamui",            tier: 3 },
  { name: "Islamnagar Jamui",    district: "Jamui",           region: "Jamui",            tier: 3 },
  { name: "Khaira",              district: "Jamui",           region: "Jamui",            tier: 3 },
  { name: "Sono",                district: "Jamui",           region: "Jamui",            tier: 3 },
  { name: "Sikandra Jamui",      district: "Jamui",           region: "Jamui",            tier: 3 },

  // -- Banka District --
  { name: "Amarpur Banka",       district: "Banka",           region: "Banka",            tier: 3 },
  { name: "Barahat",             district: "Banka",           region: "Banka",            tier: 3 },
  { name: "Belhar",              district: "Banka",           region: "Banka",            tier: 3 },
  { name: "Bounsi",              district: "Banka",           region: "Banka",            tier: 3 },
  { name: "Chandan Banka",       district: "Banka",           region: "Banka",            tier: 3 },
  { name: "Dhuraiya",            district: "Banka",           region: "Banka",            tier: 3 },
  { name: "Fullidumar",          district: "Banka",           region: "Banka",            tier: 3 },
  { name: "Katoria",             district: "Banka",           region: "Banka",            tier: 3 },
  { name: "Rajoun",              district: "Banka",           region: "Banka",            tier: 3 },
  { name: "Shambhuganj",         district: "Banka",           region: "Banka",            tier: 3 },

  // -- Nawada District --
  { name: "Akbarpur Nawada",     district: "Nawada",          region: "Nawada",           tier: 3 },
  { name: "Govindpur Nawada",    district: "Nawada",          region: "Nawada",           tier: 3 },
  { name: "Hisua",               district: "Nawada",          region: "Nawada",           tier: 3 },
  { name: "Kashichak",           district: "Nawada",          region: "Nawada",           tier: 3 },
  { name: "Kawakol",             district: "Nawada",          region: "Nawada",           tier: 3 },
  { name: "Meskaur",             district: "Nawada",          region: "Nawada",           tier: 3 },
  { name: "Nardiganj",           district: "Nawada",          region: "Nawada",           tier: 3 },
  { name: "Narhat",              district: "Nawada",          region: "Nawada",           tier: 3 },
  { name: "Pakribarwan",         district: "Nawada",          region: "Nawada",           tier: 3 },
  { name: "Roh",                 district: "Nawada",          region: "Nawada",           tier: 3 },
  { name: "Sirdala",             district: "Nawada",          region: "Nawada",           tier: 3 },
  { name: "Warsaliganj",         district: "Nawada",          region: "Nawada",           tier: 3 },

  // -- Aurangabad District --
  { name: "Barun",               district: "Aurangabad",      region: "Aurangabad",       tier: 3 },
  { name: "Dev",                 district: "Aurangabad",      region: "Aurangabad",       tier: 3 },
  { name: "Goh",                 district: "Aurangabad",      region: "Aurangabad",       tier: 3 },
  { name: "Haspura",             district: "Aurangabad",      region: "Aurangabad",       tier: 3 },
  { name: "Kutumba",             district: "Aurangabad",      region: "Aurangabad",       tier: 3 },
  { name: "Madanpur Aurangabad", district: "Aurangabad",      region: "Aurangabad",       tier: 3 },
  { name: "Nabinagar",           district: "Aurangabad",      region: "Aurangabad",       tier: 3 },
  { name: "Obra",                district: "Aurangabad",      region: "Aurangabad",       tier: 3 },
  { name: "Rafiganj",            district: "Aurangabad",      region: "Aurangabad",       tier: 3 },

  // -- Jehanabad District --
  { name: "Ghosi Jehanabad",     district: "Jehanabad",       region: "Jehanabad",        tier: 3 },
  { name: "Hulasganj",           district: "Jehanabad",       region: "Jehanabad",        tier: 3 },
  { name: "Kako",                district: "Jehanabad",       region: "Jehanabad",        tier: 3 },
  { name: "Makhdumpur",          district: "Jehanabad",       region: "Jehanabad",        tier: 3 },
  { name: "Modanganj",           district: "Jehanabad",       region: "Jehanabad",        tier: 3 },

  // -- Arwal District --
  { name: "Kaler",               district: "Arwal",           region: "Arwal",            tier: 3 },
  { name: "Kurtha",              district: "Arwal",           region: "Arwal",            tier: 3 },
  { name: "Sonbhadra Banshi Suryapur", district: "Arwal",     region: "Arwal",            tier: 3 },

  // -- Sheohar District --
  { name: "Purnahiya",           district: "Sheohar",         region: "Sheohar",          tier: 3 },
  { name: "Piprahi",             district: "Sheohar",         region: "Sheohar",          tier: 3 },
  { name: "Tariyani",            district: "Sheohar",         region: "Sheohar",          tier: 3 },

  // -- Supaul District --
  { name: "Chhatapur",           district: "Supaul",          region: "Supaul",           tier: 3 },
  { name: "Kishanpur Supaul",    district: "Supaul",          region: "Supaul",           tier: 3 },
  { name: "Maryganj",            district: "Supaul",          region: "Supaul",           tier: 3 },
  { name: "Pipra Supaul",        district: "Supaul",          region: "Supaul",           tier: 3 },
  { name: "Pratapganj Supaul",   district: "Supaul",          region: "Supaul",           tier: 3 },
  { name: "Raghopur Supaul",     district: "Supaul",          region: "Supaul",           tier: 3 },
  { name: "Salkhua Supaul",      district: "Supaul",          region: "Supaul",           tier: 3 },
  { name: "Saraigarh Bhaptiyahi",district: "Supaul",          region: "Supaul",           tier: 3 },
  { name: "Triveniganj",         district: "Supaul",          region: "Supaul",           tier: 3 },

  // -- Madhepura District --
  { name: "Alamnagar",           district: "Madhepura",       region: "Madhepura",        tier: 3 },
  { name: "Bihariganj",          district: "Madhepura",       region: "Madhepura",        tier: 3 },
  { name: "Chausa Madhepura",    district: "Madhepura",       region: "Madhepura",        tier: 3 },
  { name: "Gambhirpur",          district: "Madhepura",       region: "Madhepura",        tier: 3 },
  { name: "Ghailarh",            district: "Madhepura",       region: "Madhepura",        tier: 3 },
  { name: "Gwalpara",            district: "Madhepura",       region: "Madhepura",        tier: 3 },
  { name: "Kumarkhand",          district: "Madhepura",       region: "Madhepura",        tier: 3 },
  { name: "Puraini",             district: "Madhepura",       region: "Madhepura",        tier: 3 },
  { name: "Shankarpur Madhepura",district: "Madhepura",       region: "Madhepura",        tier: 3 },
  { name: "Singheshwar",         district: "Madhepura",       region: "Madhepura",        tier: 3 },

  // -- Saharsa District --
  { name: "Kahara",              district: "Saharsa",         region: "Saharsa",          tier: 3 },
  { name: "Mahishi",             district: "Saharsa",         region: "Saharsa",          tier: 3 },
  { name: "Nauhatta",            district: "Saharsa",         region: "Saharsa",          tier: 3 },
  { name: "Patarghat",           district: "Saharsa",         region: "Saharsa",          tier: 3 },
  { name: "Simri Bakhtiyarpur",  district: "Saharsa",         region: "Saharsa",          tier: 3 },
  { name: "Sonbarsa Saharsa",    district: "Saharsa",         region: "Saharsa",          tier: 3 },
  { name: "Salkhua Saharsa",     district: "Saharsa",         region: "Saharsa",          tier: 3 },
  { name: "Banmankhi",           district: "Saharsa",         region: "Saharsa",          tier: 3 },

  // -- Purnia District --
  { name: "Baisi",               district: "Purnia",          region: "Purnia",           tier: 3 },
  { name: "Banmankhi Purnia",    district: "Purnia",          region: "Purnia",           tier: 3 },
  { name: "Bhawanipur Purnia",   district: "Purnia",          region: "Purnia",           tier: 3 },
  { name: "Byasi",               district: "Purnia",          region: "Purnia",           tier: 3 },
  { name: "Dagarua",             district: "Purnia",          region: "Purnia",           tier: 3 },
  { name: "Dhamdaha",            district: "Purnia",          region: "Purnia",           tier: 3 },
  { name: "Jalalgarh",           district: "Purnia",          region: "Purnia",           tier: 3 },
  { name: "Kasba Purnia",        district: "Purnia",          region: "Purnia",           tier: 3 },
  { name: "Krityanand Nagar",    district: "Purnia",          region: "Purnia",           tier: 3 },
  { name: "Rupauli",             district: "Purnia",          region: "Purnia",           tier: 3 },
  { name: "Srinagar Purnia",     district: "Purnia",          region: "Purnia",           tier: 3 },
  { name: "Amour",               district: "Purnia",          region: "Purnia",           tier: 3 },

  // -- Katihar District --
  { name: "Azamnagar",           district: "Katihar",         region: "Katihar",          tier: 3 },
  { name: "Balrampur Katihar",   district: "Katihar",         region: "Katihar",          tier: 3 },
  { name: "Barsoi",              district: "Katihar",         region: "Katihar",          tier: 3 },
  { name: "Barari Katihar",      district: "Katihar",         region: "Katihar",          tier: 3 },
  { name: "Dandkhora",           district: "Katihar",         region: "Katihar",          tier: 3 },
  { name: "Falka",               district: "Katihar",         region: "Katihar",          tier: 3 },
  { name: "Kadwa",               district: "Katihar",         region: "Katihar",          tier: 3 },
  { name: "Koria Katihar",       district: "Katihar",         region: "Katihar",          tier: 3 },
  { name: "Korha",               district: "Katihar",         region: "Katihar",          tier: 3 },
  { name: "Mansahi",             district: "Katihar",         region: "Katihar",          tier: 3 },
  { name: "Pranpur",             district: "Katihar",         region: "Katihar",          tier: 3 },
  { name: "Sameli",              district: "Katihar",         region: "Katihar",          tier: 3 },
  { name: "Amdabad",             district: "Katihar",         region: "Katihar",          tier: 3 },

  // -- Araria District --
  { name: "Bhargama",            district: "Araria",          region: "Araria",           tier: 3 },
  { name: "Jokihat",             district: "Araria",          region: "Araria",           tier: 3 },
  { name: "Kursakatta",          district: "Araria",          region: "Araria",           tier: 3 },
  { name: "Narpatganj",          district: "Araria",          region: "Araria",           tier: 3 },
  { name: "Palasi",              district: "Araria",          region: "Araria",           tier: 3 },
  { name: "Raniganj Araria",     district: "Araria",          region: "Araria",           tier: 3 },
  { name: "Sikti",               district: "Araria",          region: "Araria",           tier: 3 },

  // -- Kishanganj District --
  { name: "Dighalbank",          district: "Kishanganj",      region: "Kishanganj",       tier: 3 },
  { name: "Kochadhaman",         district: "Kishanganj",      region: "Kishanganj",       tier: 3 },
  { name: "Pothia",              district: "Kishanganj",      region: "Kishanganj",       tier: 3 },
  { name: "Terhagachh",          district: "Kishanganj",      region: "Kishanganj",       tier: 3 },
  { name: "Thakurganj",          district: "Kishanganj",      region: "Kishanganj",       tier: 3 },
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
export const ALL_AREA_SLUGS: string[] = BIHAR_AREAS.map((c) => slugifyArea(c.name));

/** Look up an area by its URL slug */
export function getAreaData(slug: string): BiharArea | undefined {
  return BIHAR_AREAS.find((c) => slugifyArea(c.name) === slug);
}

/** Format a raw slug into a display name (fallback when area not in list) */
export function formatAreaDisplay(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}