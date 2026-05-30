import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import type { Metadata } from "next";
import {
  MapPin,
  ArrowRight,
  CheckCircle,
  Building2,
  FileText,
  Shield,
  Users,
  Zap,
  Phone,
  MessageCircle,
  Star,
  BadgeCheck,
  Globe,
  Receipt,
  TrendingUp,
} from "lucide-react";

/* ─── Metadata ─────────────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "GST Registration & Income Tax Services Across India | Cities We Serve | Taxvio",
  description:
    "Taxvio provides expert GST registration, income tax return filing, company registration & ROC compliance across 700+ districts in all Indian states & UTs. 100% online, CA-assisted, starting ₹499.",
  keywords: [
    "GST registration India city wise",
    "income tax consultant India",
    "GST services Delhi Mumbai Bangalore",
    "online tax filing India",
    "ROC compliance pan India",
    "Taxvio cities",
    "GST all districts India",
  ],
  alternates: { canonical: "https://www.taxvio.in/city" },
  openGraph: {
    title: "GST & Income Tax Services Across India | Cities We Serve | Taxvio",
    description: "Expert GST, Income Tax & ROC services across 700+ Indian districts — 100% online, CA-assisted.",
    url: "https://www.taxvio.in/city",
    siteName: "Taxvio",
    type: "website",
    images: [{ url: "https://www.taxvio.in/og-cities.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GST & Tax Services Across India | Taxvio",
    description: "Expert GST, ITR & company compliance services — pan India, 100% online.",
  },
  robots: { index: true, follow: true },
};

/* ─── Slug helper ──────────────────────────────────────────────────────────── */
function slugify(city: string) {
  return city.toLowerCase().replace(/\s+/g, "-");
}

/* ─── Metro / featured cities ──────────────────────────────────────────────── */
const TIER1 = [
  { name: "Delhi", tag: "Capital Region", emoji: "🏛️" },
  { name: "Mumbai", tag: "Financial Hub", emoji: "💹" },
  { name: "Bangalore", tag: "Tech Capital", emoji: "💻" },
  { name: "Hyderabad", tag: "HITEC City", emoji: "🏙️" },
  { name: "Chennai", tag: "South Gateway", emoji: "🌊" },
  { name: "Kolkata", tag: "East India Hub", emoji: "🎭" },
  { name: "Pune", tag: "IT & Auto", emoji: "⚙️" },
  { name: "Ahmedabad", tag: "Trade Center", emoji: "🏭" },
];

/* ─── Home region ──────────────────────────────────────────────────────────── */
const LOCAL = [
  { name: "Meerut", tag: "UP", emoji: "📍" },
  { name: "Muzaffarnagar", tag: "UP", emoji: "📍" },
  { name: "Khatauli", tag: "UP (HQ)", emoji: "🏠" },
];

/* ─── ALL STATES & UTs with every district ────────────────────────────────── */
const STATES_DISTRICTS: { state: string; districts: string[] }[] = [
  {
    state: "Andhra Pradesh",
    districts: [
      "Alluri Sitharama Raju","Anakapalli","Anantapur","Annamayya","Bapatla",
      "Chittoor","East Godavari","Eluru","Guntur","Kakinada","Konaseema",
      "Krishna","Kurnool","Nandyal","NTR","Palnadu","Parvathipuram Manyam",
      "Prakasam","Sri Potti Sriramulu Nellore","Sri Sathya Sai","Srikakulam",
      "Tirupati","Visakhapatnam","Vizianagaram","West Godavari","YSR Kadapa",
    ],
  },
  {
    state: "Arunachal Pradesh",
    districts: [
      "Anjaw","Changlang","Dibang Valley","East Kameng","East Siang",
      "Itanagar Capital Complex","Kamle","Kra Daadi","Kurung Kumey",
      "Lepa Rada","Lohit","Longding","Lower Dibang Valley","Lower Siang",
      "Lower Subansiri","Namsai","Pakke-Kessang","Papum Pare","Shi Yomi",
      "Siang","Tawang","Tirap","Upper Siang","Upper Subansiri",
      "West Kameng","West Siang",
    ],
  },
  {
    state: "Assam",
    districts: [
      "Bajali","Baksa","Barpeta","Biswanath","Bongaigaon","Cachar",
      "Charaideo","Chirang","Darrang","Dhemaji","Dhubri","Dibrugarh",
      "Dima Hasao","Goalpara","Golaghat","Hailakandi","Hojai","Jorhat",
      "Kamrup Metropolitan","Kamrup Rural","Karbi Anglong","Karimganj",
      "Kokrajhar","Lakhimpur","Majuli","Morigaon","Nagaon","Nalbari",
      "Sivasagar","Sonitpur","South Salmara-Mankachar","Tamulpur",
      "Tinsukia","Udalguri","West Karbi Anglong",
    ],
  },
  {
    state: "Bihar",
    districts: [
      "Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur",
      "Bhojpur","Buxar","Darbhanga","East Champaran","Gaya","Gopalganj",
      "Jamui","Jehanabad","Kaimur","Katihar","Khagaria","Kishanganj",
      "Lakhisarai","Madhepura","Madhubani","Munger","Muzaffarpur",
      "Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa",
      "Samastipur","Saran","Sheikhpura","Sheohar","Sitamarhi","Siwan",
      "Supaul","Vaishali","West Champaran",
    ],
  },
  {
    state: "Chhattisgarh",
    districts: [
      "Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur",
      "Bilaspur","Dantewada","Dhamtari","Durg","Gariaband","Gaurela-Pendra-Marwahi",
      "Janjgir-Champa","Jashpur","Kabirdham","Kanker","Khairagarh-Chhuikhadan-Gandai",
      "Kondagaon","Korba","Koriya","Mahasamund","Manendragarh-Chirmiri-Bharatpur",
      "Mohla-Manpur-Chowki","Mungeli","Narayanpur","Raigarh","Raipur",
      "Rajnandgaon","Sakti","Sarangarh-Bilaigarh","Sukma","Surajpur","Surguja",
    ],
  },
  { state: "Goa", districts: ["North Goa","South Goa"] },
  {
    state: "Gujarat",
    districts: [
      "Ahmedabad","Amreli","Anand","Aravalli","Banaskantha","Bharuch",
      "Bhavnagar","Botad","Chhota Udaipur","Dahod","Dang","Devbhoomi Dwarka",
      "Gandhinagar","Gir Somnath","Jamnagar","Junagadh","Kheda",
      "Kutch","Mahisagar","Mehsana","Morbi","Narmada","Navsari",
      "Panchmahal","Patan","Porbandar","Rajkot","Sabarkantha",
      "Surat","Surendranagar","Tapi","Vadodara","Valsad",
    ],
  },
  {
    state: "Haryana",
    districts: [
      "Ambala","Bhiwani","Charkhi Dadri","Faridabad","Fatehabad",
      "Gurugram","Hisar","Jhajjar","Jind","Kaithal","Karnal",
      "Kurukshetra","Mahendragarh","Nuh","Palwal","Panchkula",
      "Panipat","Rewari","Rohtak","Sirsa","Sonipat","Yamunanagar",
    ],
  },
  {
    state: "Himachal Pradesh",
    districts: [
      "Bilaspur","Chamba","Hamirpur","Kangra","Kinnaur","Kullu",
      "Lahaul & Spiti","Mandi","Shimla","Sirmaur","Solan","Una",
    ],
  },
  {
    state: "Jharkhand",
    districts: [
      "Bokaro","Chatra","Deoghar","Dhanbad","Dumka","East Singhbhum",
      "Garhwa","Giridih","Godda","Gumla","Hazaribagh","Jamtara",
      "Khunti","Koderma","Latehar","Lohardaga","Pakur","Palamu",
      "Ramgarh","Ranchi","Sahebganj","Seraikela Kharsawan","Simdega",
      "West Singhbhum",
    ],
  },
  {
    state: "Karnataka",
    districts: [
      "Bagalkot","Ballari","Belagavi","Bengaluru Rural","Bengaluru Urban",
      "Bidar","Chamarajanagar","Chikkaballapur","Chikkamagaluru","Chitradurga",
      "Dakshina Kannada","Davanagere","Dharwad","Gadag","Hassan",
      "Haveri","Kalaburagi","Kodagu","Kolar","Koppal","Mandya",
      "Mysuru","Raichur","Ramanagara","Shivamogga","Tumakuru",
      "Udupi","Uttara Kannada","Vijayanagara","Vijayapura","Yadgir",
    ],
  },
  {
    state: "Kerala",
    districts: [
      "Alappuzha","Ernakulam","Idukki","Kannur","Kasaragod","Kollam",
      "Kottayam","Kozhikode","Malappuram","Palakkad","Pathanamthitta",
      "Thiruvananthapuram","Thrissur","Wayanad",
    ],
  },
  {
    state: "Madhya Pradesh",
    districts: [
      "Agar Malwa","Alirajpur","Anuppur","Ashoknagar","Balaghat",
      "Barwani","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur",
      "Chhindwara","Damoh","Datia","Dewas","Dhar","Dindori",
      "Guna","Gwalior","Harda","Hoshangabad","Indore","Jabalpur",
      "Jhabua","Katni","Khandwa","Khargone","Maihar","Mandla",
      "Mandsaur","Mauganj","Morena","Narsinghpur","Neemuch",
      "Niwari","Pandhurna","Panna","Raisen","Rajgarh","Ratlam",
      "Rewa","Sagar","Satna","Sehore","Seoni","Shahdol",
      "Shajapur","Sheopur","Shivpuri","Sidhi","Singrauli",
      "Tikamgarh","Ujjain","Umaria","Vidisha",
    ],
  },
  {
    state: "Maharashtra",
    districts: [
      "Ahmednagar","Akola","Amravati","Aurangabad","Beed","Bhandara",
      "Buldhana","Chandrapur","Dhule","Gadchiroli","Gondia","Hingoli",
      "Jalgaon","Jalna","Kolhapur","Latur","Mumbai City","Mumbai Suburban",
      "Nagpur","Nanded","Nandurbar","Nashik","Osmanabad","Palghar",
      "Parbhani","Pune","Raigad","Ratnagiri","Sangli","Satara",
      "Sindhudurg","Solapur","Thane","Wardha","Washim","Yavatmal",
    ],
  },
  {
    state: "Manipur",
    districts: [
      "Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West",
      "Jiribam","Kakching","Kamjong","Kangpokpi","Noney","Pherzawl",
      "Senapati","Tamenglong","Tengnoupal","Thoubal","Ukhrul",
    ],
  },
  {
    state: "Meghalaya",
    districts: [
      "East Garo Hills","East Jaintia Hills","East Khasi Hills",
      "Eastern West Khasi Hills","North Garo Hills","Ri Bhoi",
      "South Garo Hills","South West Garo Hills","South West Khasi Hills",
      "West Garo Hills","West Jaintia Hills","West Khasi Hills",
    ],
  },
  {
    state: "Mizoram",
    districts: [
      "Aizawl","Champhai","Hnahthial","Khawzawl","Kolasib",
      "Lawngtlai","Lunglei","Mamit","Saitual","Serchhip","Siaha","Saiha",
    ],
  },
  {
    state: "Nagaland",
    districts: [
      "Chumoukedima","Dimapur","Kiphire","Kohima","Longleng",
      "Mokokchung","Mon","Niuland","Noklak","Peren",
      "Phek","Shamator","Tseminyu","Tuensang","Wokha","Zunheboto",
    ],
  },
  {
    state: "Odisha",
    districts: [
      "Angul","Balangir","Balasore","Bargarh","Bhadrak","Boudh",
      "Cuttack","Deogarh","Dhenkanal","Gajapati","Ganjam","Jagatsinghpur",
      "Jajpur","Jharsuguda","Kalahandi","Kandhamal","Kendrapara",
      "Kendujhar","Khordha","Koraput","Malkangiri","Mayurbhanj",
      "Nabarangpur","Nayagarh","Nuapada","Puri","Rayagada",
      "Sambalpur","Subarnapur","Sundargarh",
    ],
  },
  {
    state: "Punjab",
    districts: [
      "Amritsar","Barnala","Bathinda","Faridkot","Fatehgarh Sahib",
      "Fazilka","Ferozepur","Gurdaspur","Hoshiarpur","Jalandhar",
      "Kapurthala","Ludhiana","Malerkotla","Mansa","Moga",
      "Mohali","Muktsar","Pathankot","Patiala","Rupnagar",
      "Sangrur","Shaheed Bhagat Singh Nagar","Tarn Taran",
    ],
  },
  {
    state: "Rajasthan",
    districts: [
      "Ajmer","Alwar","Anupgarh","Balotra","Banswara","Baran",
      "Barmer","Beawar","Bharatpur","Bhilwara","Bikaner","Bundi",
      "Chittorgarh","Churu","Dausa","Deeg","Dholpur","Didwana-Kuchaman",
      "Dudu","Dungarpur","Gangapur City","Hanumangarh","Jaipur",
      "Jaipur Rural","Jaisalmer","Jalore","Jhalawar","Jhunjhunu",
      "Jodhpur","Jodhpur Rural","Karauli","Kekri","Khairthal-Tijara",
      "Khimsar","Kotputli-Behror","Kota","Nagaur","Neem Ka Thana",
      "Pali","Phalodi","Pratapgarh","Rajsamand","Salumbar",
      "Sanchore","Sawai Madhopur","Shahpura","Sikar","Sirohi",
      "Sri Ganganagar","Tonk","Udaipur",
    ],
  },
  {
    state: "Sikkim",
    districts: ["Gangtok","Gyalshing","Mangan","Namchi","Pakyong","Soreng"],
  },
  {
    state: "Tamil Nadu",
    districts: [
      "Ariyalur","Chengalpattu","Chennai","Coimbatore","Cuddalore",
      "Dharmapuri","Dindigul","Erode","Kallakurichi","Kancheepuram",
      "Kanyakumari","Karur","Krishnagiri","Madurai","Mayiladuthurai",
      "Nagapattinam","Namakkal","Nilgiris","Perambalur","Pudukkottai",
      "Ramanathapuram","Ranipet","Salem","Sivaganga","Tenkasi",
      "Thanjavur","Theni","Thoothukudi","Tiruchirappalli","Tirunelveli",
      "Tirupathur","Tiruppur","Tiruvallur","Tiruvannamalai",
      "Tiruvarur","Vellore","Viluppuram","Virudhunagar",
    ],
  },
  {
    state: "Telangana",
    districts: [
      "Adilabad","Bhadradri Kothagudem","Hanumakonda","Hyderabad",
      "Jagtial","Jangaon","Jayashankar Bhupalpally","Jogulamba Gadwal",
      "Kamareddy","Karimnagar","Khammam","Komaram Bheem Asifabad",
      "Mahabubabad","Mahabubnagar","Mancherial","Medak",
      "Medchal–Malkajgiri","Mulugu","Nagarkurnool","Nalgonda",
      "Narayanpet","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla",
      "Ranga Reddy","Sangareddy","Siddipet","Suryapet","Vikarabad",
      "Wanaparthy","Warangal","Yadadri Bhuvanagiri",
    ],
  },
  {
    state: "Tripura",
    districts: [
      "Dhalai","Gomati","Khowai","North Tripura","Sepahijala",
      "South Tripura","Unakoti","West Tripura",
    ],
  },
  {
    state: "Uttar Pradesh",
    districts: [
      "Agra","Aligarh","Ambedkar Nagar","Amethi","Amroha",
      "Auraiya","Ayodhya","Azamgarh","Baghpat","Bahraich",
      "Ballia","Balrampur","Banda","Barabanki","Bareilly",
      "Basti","Bhadohi","Bijnor","Budaun","Bulandshahr",
      "Chandauli","Chitrakoot","Deoria","Etah","Etawah",
      "Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar",
      "Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur",
      "Hapur","Hardoi","Hathras","Jalaun","Jaunpur",
      "Jhansi","Kannauj","Kanpur Dehat","Kanpur Nagar",
      "Kasganj","Kaushambi","Kushinagar","Lakhimpur Kheri",
      "Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri",
      "Mathura","Mau","Meerut","Mirzapur","Moradabad",
      "Muzaffarnagar","Pilibhit","Pratapgarh","Prayagraj",
      "Raebareli","Rampur","Saharanpur","Sambhal","Sant Kabir Nagar",
      "Shahjahanpur","Shamli","Shravasti","Siddharthnagar",
      "Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi",
    ],
  },
  {
    state: "Uttarakhand",
    districts: [
      "Almora","Bageshwar","Chamoli","Champawat","Dehradun",
      "Haridwar","Nainital","Pauri Garhwal","Pithoragarh",
      "Rudraprayag","Tehri Garhwal","Udham Singh Nagar","Uttarkashi",
    ],
  },
  {
    state: "West Bengal",
    districts: [
      "Alipurduar","Bankura","Birbhum","Cooch Behar","Dakshin Dinajpur",
      "Darjeeling","Hooghly","Howrah","Jalpaiguri","Jhargram",
      "Kalimpong","Kolkata","Malda","Murshidabad","Nadia",
      "North 24 Parganas","Paschim Bardhaman","Paschim Medinipur",
      "Purba Bardhaman","Purba Medinipur","Purulia","South 24 Parganas",
      "Uttar Dinajpur",
    ],
  },
  { state: "Andaman & Nicobar Islands", districts: ["Nicobars","North & Middle Andaman","South Andaman"] },
  { state: "Chandigarh", districts: ["Chandigarh"] },
  { state: "Dadra & Nagar Haveli and Daman & Diu", districts: ["Dadra & Nagar Haveli","Daman","Diu"] },
  {
    state: "Delhi (NCT)",
    districts: [
      "Central Delhi","East Delhi","New Delhi","North Delhi",
      "North East Delhi","North West Delhi","Shahdara","South Delhi",
      "South East Delhi","South West Delhi","West Delhi",
    ],
  },
  {
    state: "Jammu & Kashmir",
    districts: [
      "Anantnag","Bandipora","Baramulla","Budgam","Doda",
      "Ganderbal","Jammu","Kathua","Kishtwar","Kulgam",
      "Kupwara","Poonch","Pulwama","Rajouri","Ramban",
      "Reasi","Samba","Shopian","Srinagar","Udhampur",
    ],
  },
  { state: "Ladakh", districts: ["Kargil","Leh"] },
  { state: "Lakshadweep", districts: ["Lakshadweep"] },
  { state: "Puducherry", districts: ["Karaikal","Mahe","Puducherry","Yanam"] },
];

const allDistrictEntries: { name: string; state: string }[] = STATES_DISTRICTS.flatMap(
  ({ state, districts }) => districts.map((d) => ({ name: d, state }))
);

const CITY_SERVICES = [
  { label: "GST Registration", href: "/serviceslist/gst/gst-registration", icon: "🧾", price: "₹999" },
  { label: "GST Return Filing", href: "/serviceslist/gst/gst-return", icon: "📄", price: "₹499/mo" },
  { label: "Income Tax Filing", href: "/serviceslist/income-tax/itr-salaried", icon: "💼", price: "₹499" },
  { label: "Company Registration", href: "/serviceslist/roc/private-limited-formation", icon: "🏛", price: "₹6,999" },
  { label: "FSSAI License", href: "/serviceslist/fssai/fssai-registration", icon: "🥗", price: "₹1,499" },
  { label: "TDS Return Filing", href: "/serviceslist/income-tax/quarterly-tds", icon: "📊", price: "₹999" },
];

const SEO_SECTIONS = [
  {
    heading: "GST Registration & Return Filing Services Across India",
    body: `GST registration is mandatory for businesses exceeding the prescribed annual turnover threshold, businesses engaged in interstate supply, e-commerce operators, and certain notified service categories. Taxvio's expert team handles end-to-end GST registration — from eligibility assessment and document preparation to GSTIN allotment — across all 700+ districts we serve.

Beyond registration, our monthly and quarterly GST return filing service covers GSTR-1, GSTR-3B, GSTR-9 (annual return), LUT filing for exporters, GST refund applications, and e-invoicing compliance. Our CA-assisted service ensures accurate reconciliation, timely filing, and zero penalties — for retailers, manufacturers, service providers, and e-commerce businesses alike.`,
  },
  {
    heading: "Income Tax Return Filing for Individuals & Businesses",
    body: `Filing Income Tax Returns accurately and on time is a legal obligation and a financial discipline. Taxvio provides comprehensive ITR filing services for salaried employees (ITR-1, ITR-2), proprietors and freelancers (ITR-3, ITR-4), partnership firms and LLPs, private limited companies and trusts — across all states and UTs we serve.

Our CA team optimises deductions under Sections 80C, 80D, 10(14), HRA exemptions, and capital gains treatment — ensuring you pay only what is legally due. TDS return filing (Form 24Q, 26Q, 27Q), tax audit under Section 44AB, income tax scrutiny notice replies, and 12A/80G registration for NGOs are also available pan-India through Taxvio.`,
  },
  {
    heading: "Company Registration & ROC Compliance — All India",
    body: `Taxvio handles complete company and LLP formation through the Ministry of Corporate Affairs (MCA) portal — including Private Limited Company, One Person Company (OPC), Limited Liability Partnership (LLP), and Section 8 (non-profit) company registration. Our services cover name availability check, DIN & DSC processing, MOA/AOA drafting, Certificate of Incorporation, and PAN/TAN application.

For incorporated entities, we manage ongoing ROC compliance: annual filing of AOC-4 (financial statements) and MGT-7 (annual return) for companies; Form 11 and Form 8 for LLPs; director appointment and resignation (DIR-12); changes in authorised share capital (SH-7); and company closure/strike-off proceedings.`,
  },
  {
    heading: "Why Taxvio Serves Businesses in All 700+ Indian Districts",
    body: `India's GST, income tax, and corporate compliance landscape varies across states — with state-specific GST offices, jurisdictions, and local compliance nuances. Taxvio's district-specific service pages are designed to help businesses in each location find exactly the tax and compliance support they need, with pricing, timelines, and document requirements relevant to their region.

Whether you are a startup in Bangalore's tech corridor, a trader in Delhi's wholesale market, a manufacturer in Surat's textile belt, or a professional in Hyderabad's HITEC City — Taxvio delivers the same CA-quality compliance support, 100% online, without the need for an office visit. Our WhatsApp-first communication model means you can share documents, track progress, and get expert answers from any district in India.`,
  },
];

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Indian Districts Served by Taxvio — GST & Tax Services",
  description: "Taxvio provides GST registration, income tax filing, company registration, and ROC compliance services across 700+ Indian districts in all states and UTs.",
  numberOfItems: allDistrictEntries.length,
  itemListElement: allDistrictEntries.map(({ name }, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${name} — GST & Tax Services`,
    url: `https://www.taxvio.in/city/${slugify(name)}`,
  })),
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Taxvio",
  url: "https://www.taxvio.in",
  telephone: "+918937980366",
  areaServed: STATES_DISTRICTS.flatMap(({ districts }) =>
    districts.map((d) => ({ "@type": "City", name: d }))
  ),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Khatauli",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
};

/* ─── Metro City Card ────────────────────────────────────────────────────────── */
function MetroCityCard({ name, tag, emoji }: { name: string; tag: string; emoji: string }) {
  return (
    <Link
      href={`/city/${slugify(name)}`}
      aria-label={`GST and tax services in ${name}`}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#00416a] to-[#0077b6] text-white border border-[#005a94] shadow-lg hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300"
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "18px 18px" }}
      />
      {/* Glow */}
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-sky-400/20 blur-2xl pointer-events-none" />

      <div className="relative p-5">
        <div className="flex items-start justify-between mb-3">
          <span className="text-2xl">{emoji}</span>
          <ArrowRight size={15} className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 mt-0.5" />
        </div>
        <p className="font-bold text-base text-white leading-tight group-hover:text-sky-200 transition-colors">{name}</p>
        <span className="inline-block mt-1.5 text-[11px] font-semibold bg-white/15 text-white/80 rounded-full px-2.5 py-0.5">
          {tag}
        </span>
        <div className="flex flex-wrap gap-1 mt-3">
          {["GST", "ITR", "ROC", "FSSAI"].map((t) => (
            <span key={t} className="text-[10px] font-bold bg-white/10 text-white/70 px-2 py-0.5 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

/* ─── Local City Card ─────────────────────────────────────────────────────────── */
function LocalCityCard({ name, tag, emoji }: { name: string; tag: string; emoji: string }) {
  return (
    <Link
      href={`/city/${slugify(name)}`}
      aria-label={`GST and tax services in ${name}`}
      className="group relative overflow-hidden rounded-2xl bg-white border-2 border-[#00416a]/20 shadow-sm hover:border-[#00416a] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <span className="text-xl">{emoji}</span>
          <ArrowRight size={14} className="text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-1 transition-all duration-200" />
        </div>
        <p className="font-bold text-gray-800 group-hover:text-[#00416a] transition-colors text-sm leading-tight">{name}</p>
        <span className="inline-block mt-1 text-[11px] font-semibold bg-[#00416a]/8 text-[#00416a] rounded-full px-2.5 py-0.5">
          {tag}
        </span>
      </div>
    </Link>
  );
}

/* ─── Compact District Link ─────────────────────────────────────────────────── */
function DistrictLink({ name }: { name: string }) {
  return (
    <Link
      href={`/city/${slugify(name)}`}
      aria-label={`GST and tax services in ${name}`}
      className="group flex items-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-medium text-gray-600 hover:text-[#00416a] hover:bg-[#00416a]/5 transition-all duration-150"
    >
      <MapPin size={9} className="text-gray-300 group-hover:text-[#00416a] shrink-0 transition-colors" />
      <span className="truncate">{name}</span>
    </Link>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function CityIndexPage() {
  const totalDistricts = allDistrictEntries.length;

  return (
    <>
      <Script id="city-list-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <Script id="city-org-schema" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      <main className="bg-[#f8fbfd] text-gray-800 font-sans" itemScope itemType="https://schema.org/WebPage">

        {/* ════════════ HERO ════════════ */}
        <section
          aria-label="GST and Tax Services Across India — District Index"
          className="relative overflow-hidden bg-[#00416a] text-white"
        >
          {/* Background layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36]" />
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "50px 50px" }} />
          <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(56,189,248,0.12) 0%,transparent 65%)" }} />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(45,212,191,0.08) 0%,transparent 65%)" }} />

          <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-10 md:pt-28 md:pb-14">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-white/50">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <span className="text-white/30">›</span>
                <li className="text-white/70 font-medium">Cities We Serve</li>
              </ol>
            </nav>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 backdrop-blur-sm"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                  Pan India · All 28 States & 8 UTs · 100% Online · CA-Assisted
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white" itemProp="name">
                  GST &amp; Tax Services
                  <span className="block mt-2 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                    Across Every Indian District
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-xl" itemProp="description">
                  Taxvio provides professional <strong className="text-white">GST registration</strong>,{" "}
                  <strong className="text-white">income tax return filing</strong>, company registration, ROC compliance,
                  FSSAI license, and TDS returns — 100% online, across all <strong className="text-white">{totalDistricts}+ districts</strong> of India. Starting at{" "}
                  <strong className="text-sky-300">₹499</strong>.
                </p>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    { val: `${totalDistricts}+`, label: "Districts Covered", icon: Globe },
                    { val: "4,800+", label: "Businesses Served", icon: Users },
                    { val: "₹499", label: "Starting Price", icon: TrendingUp },
                  ].map(({ val, label, icon: Icon }) => (
                    <div key={label} className="text-center rounded-2xl py-4 px-2"
                      style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                      <div className="flex justify-center mb-1.5">
                        <Icon size={14} className="text-sky-300" />
                      </div>
                      <p className="text-xl font-extrabold text-white">{val}</p>
                      <p className="text-[10px] text-white/50 mt-0.5 leading-tight">{label}</p>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 hover:shadow-2xl active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                    Free Consultation <ArrowRight size={15} className="shrink-0" />
                  </Link>
                  <Link href="/serviceslist"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/70 active:scale-[0.97] transition-all duration-200 min-h-[52px]">
                    View All 40+ Services
                  </Link>
                </div>
              </div>

              {/* Right — service quick grid */}
              <div className="hidden md:block">
                <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4">Services available in every district</p>
                <div className="grid grid-cols-2 gap-3">
                  {CITY_SERVICES.map(({ label, href, icon, price }) => (
                    <Link key={label} href={href}
                      className="group flex items-center gap-3 rounded-2xl px-4 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                      style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.13)" }}>
                      <span className="text-lg shrink-0">{icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-white/85 group-hover:text-white transition truncate">{label}</p>
                        <p className="text-[10px] text-sky-300 font-semibold">{price}</p>
                      </div>
                      <ArrowRight size={11} className="ml-auto shrink-0 text-white/25 group-hover:text-white/60 group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  ))}
                </div>
                <p className="mt-4 text-xs text-white/30 text-center">100% online · No office visit · CA-assisted</p>
              </div>
            </div>
          </div>

          {/* Trust strip */}
          <div className="relative border-t border-white/10 mt-4">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {[
                { icon: BadgeCheck, label: "CA-Certified Team" },
                { icon: Star, label: "4.9★ Rated" },
                { icon: Zap, label: "Same-Day Response" },
                { icon: Shield, label: "Secure & Confidential" },
                { icon: MessageCircle, label: "WhatsApp Support" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-white/55 text-xs">
                  <Icon size={12} className="text-sky-400 shrink-0" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Wave */}
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 48L1440 48L1440 24C1200 48 900 0 720 16C540 32 240 48 0 24L0 48Z" fill="#f8fbfd" />
          </svg>
        </section>

        {/* ════════════ METRO CITIES ════════════ */}
        <section className="py-16 bg-[#f8fbfd]" aria-label="GST and Tax Services in Metro Cities">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[#00416a] to-sky-400" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-[#00416a]">Metro Cities</p>
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-800">
                  GST &amp; Tax Services in Major Indian Cities
                </h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {TIER1.map((city) => (
                <MetroCityCard key={city.name} name={city.name} tag={city.tag} emoji={city.emoji} />
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ HOME REGION ════════════ */}
        <section className="py-12 bg-gradient-to-br from-blue-50 to-[#eef6fc] border-y border-blue-100" aria-label="Taxvio Home Region">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 rounded-full bg-gradient-to-b from-emerald-400 to-teal-600" />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-600">Home Region — Muzaffarnagar, UP</p>
                  <h2 className="text-xl font-extrabold text-gray-800">Headquartered in Khatauli, Muzaffarnagar</h2>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white border border-blue-200 rounded-2xl px-4 py-2.5 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-gray-700">Available for same-day WhatsApp consultation</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 max-w-lg mb-6">
              {LOCAL.map((city) => (
                <LocalCityCard key={city.name} name={city.name} tag={city.tag} emoji={city.emoji} />
              ))}
            </div>

            <div className="bg-white border border-blue-100 rounded-2xl p-5 shadow-sm max-w-2xl">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00416a] flex items-center justify-center shrink-0">
                  <MapPin size={17} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#00416a] mb-1">Local Coverage — Western UP & NCR Belt</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Taxvio is headquartered in <strong>Khatauli, Muzaffarnagar, Uttar Pradesh</strong>. Clients in
                    Meerut, Muzaffarnagar, Shamli, Saharanpur, Hapur, Baghpat, and surrounding districts can reach us
                    instantly via WhatsApp or call for same-day consultation on GST, ITR, and company registration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ WHY TAXVIO ════════════ */}
        <section className="py-20 bg-white" aria-label="Why Choose Taxvio">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Why Taxvio
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Why 4,800+ Businesses Across India Choose Taxvio
              </h2>
              <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                Same CA-quality service whether you're in Delhi NCR or a tier-3 district — always 100% online.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: Users, title: "Expert CA & Legal Team", desc: "Every service handled by practising Chartered Accountants — not just data entry operators.", color: "bg-blue-100 text-blue-700" },
                { icon: Zap, title: "100% Online — No Office Visit", desc: "Share documents on WhatsApp or email. Track your filing status in real-time. Zero office visits.", color: "bg-emerald-100 text-emerald-700" },
                { icon: Shield, title: "100% Secure & Confidential", desc: "Strict document confidentiality protocols. Your data is never shared with third parties.", color: "bg-violet-100 text-violet-700" },
                { icon: FileText, title: "GST, ITR & ROC Under One Roof", desc: "One team covers GST, income tax, TDS, company compliance, and FSSAI — no coordination overhead.", color: "bg-orange-100 text-orange-700" },
                { icon: CheckCircle, title: "Transparent Pricing from ₹499", desc: "No hidden fees. Clear pricing for every service. Pay only when you're satisfied with the scope.", color: "bg-teal-100 text-teal-700" },
                { icon: Building2, title: "All India Coverage", desc: "Metro cities to remote districts — our digital-first model means location is never a barrier.", color: "bg-sky-100 text-sky-700" },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div key={title} className="group flex items-start gap-4 p-5 bg-[#f8fbfd] border border-[#deeef7] rounded-2xl hover:border-[#00416a]/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{title}</p>
                    <p className="text-gray-500 text-xs mt-1 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ ALL STATES & DISTRICTS ════════════ */}
        <section className="py-20 bg-[#f8fbfd]" aria-label="All Indian states and districts — GST tax services">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                All India Coverage
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                GST &amp; Tax Services — All States &amp; Union Territories
              </h2>
              <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
                Every district listed below has a dedicated Taxvio service page with GST registration, ITR filing, and compliance services available in your area.
              </p>
            </div>

            <div className="space-y-4">
              {STATES_DISTRICTS.map(({ state, districts }) => (
                <div key={state} className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
                  {/* State header */}
                  <div className="bg-gradient-to-r from-[#00416a] to-[#005a90] px-5 py-3 flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <MapPin size={13} className="text-sky-300 shrink-0" />
                      {state}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-semibold text-white/60 bg-white/10 rounded-full px-2.5 py-0.5">
                        {districts.length} district{districts.length > 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>
                  {/* Districts */}
                  <div className="bg-white px-3 py-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                    {districts.map((d) => (
                      <DistrictLink key={d} name={d} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ SEO CONTENT ════════════ */}
        <section className="bg-white py-20 border-y border-gray-100" aria-label="About Taxvio Services">
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            {SEO_SECTIONS.map(({ heading, body }) => (
              <div key={heading} className="group">
                <div className="flex items-start gap-4">
                  <div className="w-1 rounded-full bg-gradient-to-b from-[#00416a] to-sky-400 shrink-0 mt-1" style={{ height: "100%" }} />
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">{heading}</h2>
                    <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                      {body.split("\n\n").map((para, i) => <p key={i}>{para}</p>)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════ SERVICES GRID ════════════ */}
        <section className="py-20 bg-[#f8fbfd]" aria-label="Services available in all districts">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                All Services
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Services Available in Every District We Serve
              </h2>
              <p className="text-gray-500 mt-2 text-sm">Every service below is available to clients across all {totalDistricts}+ districts — 100% online.</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: "GST Registration", href: "/serviceslist/gst/gst-registration", desc: "GSTIN in 3–7 working days", price: "₹999" },
                { title: "GST Return Filing", href: "/serviceslist/gst/gst-return", desc: "GSTR-1, GSTR-3B, GSTR-9", price: "₹499/mo" },
                { title: "GST Refund", href: "/serviceslist/gst/gst-refund", desc: "Export & ITC refunds", price: "₹2,499" },
                { title: "ITR Filing – Salaried", href: "/serviceslist/income-tax/itr-salaried", desc: "Form 16 based ITR", price: "₹499" },
                { title: "ITR Filing – Business", href: "/serviceslist/income-tax/itr-proprietor", desc: "Proprietor & firm ITR", price: "₹1,999" },
                { title: "Company Registration", href: "/serviceslist/roc/private-limited-formation", desc: "Pvt Ltd incorporation", price: "₹6,999" },
                { title: "LLP Registration", href: "/serviceslist/roc/llp-formation", desc: "LLP with MCA compliance", price: "₹5,999" },
                { title: "TDS Return Filing", href: "/serviceslist/income-tax/quarterly-tds", desc: "24Q / 26Q quarterly returns", price: "₹999" },
                { title: "FSSAI Registration", href: "/serviceslist/fssai/fssai-registration", desc: "Food license", price: "₹1,499" },
                { title: "GST Notice Reply", href: "/serviceslist/gst/gst-notice-reply", desc: "ASMT-10 & DRC-01 handling", price: "₹1,999" },
                { title: "12A / 80G Registration", href: "/serviceslist/income-tax/12a-application", desc: "NGO & trust exemption", price: "₹4,999" },
                { title: "Annual ROC Compliance", href: "/serviceslist/roc/annual-roc-compliance", desc: "AOC-4 & MGT-7 filing", price: "₹3,999" },
              ].map(({ title, href, desc, price }) => (
                <Link key={title} href={href}
                  className="group relative flex items-start justify-between gap-3 p-5 bg-white border border-gray-100 rounded-2xl hover:shadow-lg hover:border-[#00416a]/20 hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
                  {/* Subtle corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl bg-[#00416a]/3 pointer-events-none" />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-800 text-sm group-hover:text-[#00416a] transition truncate">{title}</p>
                    <p className="text-gray-400 text-xs mt-0.5 truncate">{desc}</p>
                    <span className="inline-block mt-2 text-[11px] font-bold text-[#00416a] bg-blue-50 px-2 py-0.5 rounded-full">{price}</span>
                  </div>
                  <ArrowRight size={14} className="shrink-0 mt-0.5 text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ ALL DISTRICTS TAG CLOUD ════════════ */}
        <section className="py-16 bg-[#00416a]" aria-label="Complete list of all Indian districts served by Taxvio">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-extrabold text-white">All Districts — GST &amp; Tax Services</h2>
              <p className="text-white/55 text-sm mt-2">
                Click your district to see GST registration, income tax, and compliance services available near you
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2" itemScope itemType="https://schema.org/ItemList">
              {allDistrictEntries.map(({ name }, i) => (
                <Link
                  key={`${name}-${i}`}
                  href={`/city/${slugify(name)}`}
                  aria-label={`GST and tax services in ${name}`}
                  className="group inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 hover:scale-105 hover:bg-white hover:text-[#00416a]"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.80)" }}
                  itemProp="itemListElement"
                  itemScope itemType="https://schema.org/ListItem"
                >
                  <meta itemProp="position" content={String(i + 1)} />
                  <meta itemProp="name" content={name} />
                  <MapPin size={9} className="text-sky-400 group-hover:text-[#00416a] shrink-0 transition-colors" />
                  <span itemProp="item">{name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════ CTA BANNER ════════════ */}
        <section className="py-16 px-6 bg-[#f8fbfd]">
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-[#00416a] rounded-3xl overflow-hidden p-10 md:p-14 text-white">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] to-[#001e36]" />
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-sky-400/10 blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-teal-400/10 blur-[60px] pointer-events-none" />
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "24px 24px" }} />

              <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wide">
                    <Zap size={11} className="text-sky-300" />
                    Ready to Get Started?
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                    GST, ITR &amp; Company Registration — Wherever You Are in India
                  </h2>
                  <p className="text-white/65 text-sm mt-3 max-w-lg leading-relaxed">
                    100% online, same-day response on WhatsApp. Our CA team serves every district — metro or tier-3.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {["✅ CA-Assisted", "✅ Transparent Pricing", "✅ Pan India", "✅ WhatsApp Support"].map((t) => (
                      <span key={t} className="text-white/50 text-xs">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full md:w-auto">
                  <a
                    href="https://wa.me/918937980366?text=Hello%20Taxvio%2C%20I%20need%20help%20with%20tax%20services."
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 hover:shadow-2xl active:scale-[0.97] transition-all min-h-[52px]"
                  >
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                  <a
                    href="tel:918937980366"
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-white/40 bg-white/5 text-white px-7 py-3.5 text-sm font-bold hover:bg-white/10 hover:border-white/70 active:scale-[0.97] transition-all min-h-[52px]"
                  >
                    <Phone size={16} /> Call Now
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-white/15 border border-white/30 text-white px-7 py-3.5 text-sm font-bold hover:bg-white/25 active:scale-[0.97] transition-all min-h-[52px]"
                  >
                    Free Consultation <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footar />
      </main>
    </>
  );
}