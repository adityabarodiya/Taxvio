import Link from "next/link";
import Script from "next/script";
import Footar from "@/components/Footar";
import { serviceCategories } from "@/data/serviceCategories";
import type { Metadata } from "next";
import {
  MapPin, ArrowRight, CheckCircle, Phone, MessageCircle,
  Shield, Zap, Users, Star, Clock, BadgeCheck, TrendingUp,
  FileText, Building2, Receipt, IndianRupee,
} from "lucide-react";

/* ─── All districts ───────────────────────────────────────────────────────── */
const STATES_DISTRICTS: { state: string; districts: string[] }[] = [
  {
    state: "Andhra Pradesh",
    districts: [
      "Alluri Sitharama Raju", "Anakapalli", "Anantapur", "Annamayya", "Bapatla",
      "Chittoor", "East Godavari", "Eluru", "Guntur", "Kakinada", "Konaseema",
      "Krishna", "Kurnool", "Nandyal", "NTR", "Palnadu", "Parvathipuram Manyam",
      "Prakasam", "Sri Potti Sriramulu Nellore", "Sri Sathya Sai", "Srikakulam",
      "Tirupati", "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa",
    ],
  },
  {
    state: "Arunachal Pradesh",
    districts: [
      "Anjaw", "Changlang", "Dibang Valley", "East Kameng", "East Siang",
      "Itanagar Capital Complex", "Kamle", "Kra Daadi", "Kurung Kumey",
      "Lepa Rada", "Lohit", "Longding", "Lower Dibang Valley", "Lower Siang",
      "Lower Subansiri", "Namsai", "Pakke-Kessang", "Papum Pare", "Shi Yomi",
      "Siang", "Tawang", "Tirap", "Upper Siang", "Upper Subansiri",
      "West Kameng", "West Siang",
    ],
  },
  {
    state: "Assam",
    districts: [
      "Bajali", "Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar",
      "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh",
      "Dima Hasao", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat",
      "Kamrup Metropolitan", "Kamrup Rural", "Karbi Anglong", "Karimganj",
      "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari",
      "Sivasagar", "Sonitpur", "South Salmara-Mankachar", "Tamulpur",
      "Tinsukia", "Udalguri", "West Karbi Anglong",
    ],
  },
  {
    state: "Bihar",
    districts: [
      "Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur",
      "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj",
      "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj",
      "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur",
      "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa",
      "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan",
      "Supaul", "Vaishali", "West Champaran",
    ],
  },
  {
    state: "Chhattisgarh",
    districts: [
      "Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur",
      "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Gaurela-Pendra-Marwahi",
      "Janjgir-Champa", "Jashpur", "Kabirdham", "Kanker", "Khairagarh-Chhuikhadan-Gandai",
      "Kondagaon", "Korba", "Koriya", "Mahasamund", "Manendragarh-Chirmiri-Bharatpur",
      "Mohla-Manpur-Chowki", "Mungeli", "Narayanpur", "Raigarh", "Raipur",
      "Rajnandgaon", "Sakti", "Sarangarh-Bilaigarh", "Sukma", "Surajpur", "Surguja",
    ],
  },
  { state: "Goa", districts: ["North Goa", "South Goa"] },
  {
    state: "Gujarat",
    districts: [
      "Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch",
      "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka",
      "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda",
      "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari",
      "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha",
      "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad",
    ],
  },
  {
    state: "Haryana",
    districts: [
      "Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad",
      "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal",
      "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula",
      "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar",
    ],
  },
  {
    state: "Himachal Pradesh",
    districts: [
      "Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu",
      "Lahaul & Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una",
    ],
  },
  {
    state: "Jharkhand",
    districts: [
      "Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum",
      "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara",
      "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu",
      "Ramgarh", "Ranchi", "Sahebganj", "Seraikela Kharsawan", "Simdega",
      "West Singhbhum",
    ],
  },
  {
    state: "Karnataka",
    districts: [
      "Bagalkot", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban",
      "Bidar", "Chamarajanagar", "Chikkaballapur", "Chikkamagaluru", "Chitradurga",
      "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Hassan",
      "Haveri", "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya",
      "Mysuru", "Raichur", "Ramanagara", "Shivamogga", "Tumakuru",
      "Udupi", "Uttara Kannada", "Vijayanagara", "Vijayapura", "Yadgir", "Bangalore",
    ],
  },
  {
    state: "Kerala",
    districts: [
      "Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam",
      "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta",
      "Thiruvananthapuram", "Thrissur", "Wayanad",
    ],
  },
  {
    state: "Madhya Pradesh",
    districts: [
      "Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat",
      "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur",
      "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori",
      "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur",
      "Jhabua", "Katni", "Khandwa", "Khargone", "Maihar", "Mandla",
      "Mandsaur", "Mauganj", "Morena", "Narsinghpur", "Neemuch",
      "Niwari", "Pandhurna", "Panna", "Raisen", "Rajgarh", "Ratlam",
      "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol",
      "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli",
      "Tikamgarh", "Ujjain", "Umaria", "Vidisha",
    ],
  },
  {
    state: "Maharashtra",
    districts: [
      "Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara",
      "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli",
      "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban",
      "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar",
      "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara",
      "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal", "Mumbai",
    ],
  },
  {
    state: "Manipur",
    districts: [
      "Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West",
      "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl",
      "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul",
    ],
  },
  {
    state: "Meghalaya",
    districts: [
      "East Garo Hills", "East Jaintia Hills", "East Khasi Hills",
      "Eastern West Khasi Hills", "North Garo Hills", "Ri Bhoi",
      "South Garo Hills", "South West Garo Hills", "South West Khasi Hills",
      "West Garo Hills", "West Jaintia Hills", "West Khasi Hills",
    ],
  },
  {
    state: "Mizoram",
    districts: [
      "Aizawl", "Champhai", "Hnahthial", "Khawzawl", "Kolasib",
      "Lawngtlai", "Lunglei", "Mamit", "Saitual", "Serchhip", "Siaha", "Saiha",
    ],
  },
  {
    state: "Nagaland",
    districts: [
      "Chumoukedima", "Dimapur", "Kiphire", "Kohima", "Longleng",
      "Mokokchung", "Mon", "Niuland", "Noklak", "Peren",
      "Phek", "Shamator", "Tseminyu", "Tuensang", "Wokha", "Zunheboto",
    ],
  },
  {
    state: "Odisha",
    districts: [
      "Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh",
      "Cuttack", "Deogarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur",
      "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara",
      "Kendujhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj",
      "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada",
      "Sambalpur", "Subarnapur", "Sundargarh",
    ],
  },
  {
    state: "Punjab",
    districts: [
      "Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib",
      "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar",
      "Kapurthala", "Ludhiana", "Malerkotla", "Mansa", "Moga",
      "Mohali", "Muktsar", "Pathankot", "Patiala", "Rupnagar",
      "Sangrur", "Shaheed Bhagat Singh Nagar", "Tarn Taran",
    ],
  },
  {
    state: "Rajasthan",
    districts: [
      "Ajmer", "Alwar", "Anupgarh", "Balotra", "Banswara", "Baran",
      "Barmer", "Beawar", "Bharatpur", "Bhilwara", "Bikaner", "Bundi",
      "Chittorgarh", "Churu", "Dausa", "Deeg", "Dholpur", "Didwana-Kuchaman",
      "Dudu", "Dungarpur", "Gangapur City", "Hanumangarh", "Jaipur",
      "Jaipur Rural", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu",
      "Jodhpur", "Jodhpur Rural", "Karauli", "Kekri", "Khairthal-Tijara",
      "Khimsar", "Kotputli-Behror", "Kota", "Nagaur", "Neem Ka Thana",
      "Pali", "Phalodi", "Pratapgarh", "Rajsamand", "Salumbar",
      "Sanchore", "Sawai Madhopur", "Shahpura", "Sikar", "Sirohi",
      "Sri Ganganagar", "Tonk", "Udaipur",
    ],
  },
  { state: "Sikkim", districts: ["Gangtok", "Gyalshing", "Mangan", "Namchi", "Pakyong", "Soreng"] },
  {
    state: "Tamil Nadu",
    districts: [
      "Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore",
      "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kancheepuram",
      "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai",
      "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai",
      "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi",
      "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli",
      "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai",
      "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar",
    ],
  },
  {
    state: "Telangana",
    districts: [
      "Adilabad", "Bhadradri Kothagudem", "Hanumakonda", "Hyderabad",
      "Jagtial", "Jangaon", "Jayashankar Bhupalpally", "Jogulamba Gadwal",
      "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem Asifabad",
      "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak",
      "Medchal-Malkajgiri", "Mulugu", "Nagarkurnool", "Nalgonda",
      "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla",
      "Ranga Reddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad",
      "Wanaparthy", "Warangal", "Yadadri Bhuvanagiri",
    ],
  },
  {
    state: "Tripura",
    districts: ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"],
  },
  {
    state: "Uttar Pradesh",
    districts: [
      "Noida", "Lucknow", "Kanpur", "Agra", "Varanasi", "Meerut", "Ghaziabad",
      "Prayagraj", "Bareilly", "Moradabad", "Gorakhpur", "Aligarh",
      "Saharanpur", "Muzaffarnagar", "Jhansi", "Ayodhya", "Mathura",
      "Firozabad", "Rampur", "Bulandshahr", "Hapur", "Shamli", "Bijnor",
      "Amroha", "Sambhal", "Hathras", "Kasganj", "Mainpuri", "Etah",
      "Baghpat", "Unnao", "Hardoi", "Sitapur", "Lakhimpur Kheri",
      "Etawah", "Auraiya", "Farrukhabad", "Kannauj", "Kaushambi",
      "Fatehpur", "Raebareli", "Amethi", "Chandauli", "Ghazipur",
      "Jaunpur", "Maharajganj", "Kushinagar", "Deoria", "Azamgarh",
      "Mau", "Ballia", "Ambedkar Nagar", "Sultanpur", "Basti",
      "Sant Kabir Nagar", "Siddharthnagar", "Sant Ravidas Nagar",
      "Lalitpur", "Jalaun", "Hamirpur", "Mahoba", "Banda",
      "Chitrakoot", "Bahraich", "Shravasti", "Balrampur", "Gonda",
      "Pilibhit", "Shahjahanpur", "Budaun",

      "Khatauli", "Dhampur", "Najibabad", "Nagina", "Kairana",
      "Thanabhawan", "Gangoh", "Deoband", "Pilkhua", "Garhmukteshwar",
      "Sikandrabad", "Khurja", "Shikarpur", "Anupshahar", "Muradnagar",
      "Loni", "Modi Nagar", "Greater Noida", "Jewar", "Dadri",
      "Tundla", "Shikohabad", "Vrindavan", "Govardhan", "Kosi Kalan",
      "Fatehabad", "Kheragarh", "Sasni", "Sadabad", "Iglas",
      "Atrauli", "Khair", "Soron", "Sahaswan", "Bisauli",
      "Gunnaur", "Milak", "Bilaspur", "Chandausi", "Gunnor",
      "Baheri", "Faridpur", "Aonla", "Nawabganj", "Tilhar",
      "Jalalabad", "Powayan", "Biswan", "Mahmudabad", "Misrikh",
      "Laharpur", "Sandila", "Shahabad", "Bilgram", "Safipur",
      "Purwa", "Bangarmau", "Kanpur Rural", "Akbarpur", "Rasulabad",
      "Jaswantnagar", "Bharthana", "Phaphund", "Bidhuna", "Fatehgarh",
      "Kaimganj", "Tirwa", "Gursahaiganj", "Sirathu", "Manjhanpur",
      "Bindki", "Khaga", "Lalganj", "Salon", "Tiloi",
      "Gauriganj", "Nakur", "Behat", "Rasra", "Sikanderpur",
      "Bansdeeh", "Salempur", "Bhatpar Rani", "Rudrapur", "Tamkuhi",
      "Hata", "Padrauna", "Nichlaul", "Nautanwa", "Ghughli",
      "Pharenda", "Pipraich", "Gola Bazar", "Sahjanwa", "Bansgaon",
      "Mubarakpur", "Lalganj Azamgarh", "Atraulia", "Phephna",
      "Ghosi", "Kopaganj", "Muhammadabad", "Madhuban",
      "Machhalishahar", "Shahganj", "Kerakat", "Mariyahu",
      "Saidpur", "Gahmar", "Zamania", "Mughalsarai",
      "Mughal Sarai", "Sakaldeeha", "Varanasi Cantonment",
      "Bhadohi", "Gyanpur", "Akbarpur Mau", "Tanda",
      "Jalalpur", "Dostpur", "Kadipur", "Musafirkhana",
      "Jagdishpur", "Khalilabad", "Mehdawal", "Bansi",
      "Shohratgarh", "Itwa", "Harraiya", "Basti Town",
      "Kaptanganj", "Tulsipur", "Utraula", "Ikauna",
      "Bahraich City", "Nanpara", "Kaiserganj", "Tarabganj",
      "Mankapur", "Colonelganj", "Nawabganj Gonda",
      "Bisalpur", "Puranpur", "Barkhera", "Jakhania",
      "Orai", "Kalpi", "Konch", "Moth", "Garautha",
      "Rath", "Maudaha", "Kulpahar", "Charkhari",
      "Baberu", "Naraini", "Mau Aimma", "Phulpur",
      "Meja", "Handia", "Naini", "Lakhnaur",
      "Gola", "Dhaurhara", "Nighasan", "Duviapur",
      "Bhinga",
    ],
  },
  {
    state: "Uttarakhand",
    districts: [
      "Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun",
      "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh",
      "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi",
    ],
  },
  {
    state: "West Bengal",
    districts: [
      "Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur",
      "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram",
      "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia",
      "North 24 Parganas", "Paschim Bardhaman", "Paschim Medinipur",
      "Purba Bardhaman", "Purba Medinipur", "Purulia", "South 24 Parganas",
      "Uttar Dinajpur",
    ],
  },
  { state: "Andaman & Nicobar Islands", districts: ["Nicobars", "North & Middle Andaman", "South Andaman"] },
  { state: "Chandigarh", districts: ["Chandigarh"] },
  { state: "Dadra & Nagar Haveli and Daman & Diu", districts: ["Dadra & Nagar Haveli", "Daman", "Diu"] },
  {
    state: "Delhi (NCT)",
    districts: [
      "Connaught Place",
      "Nehru Place",
      "Karol Bagh",
      "Rajouri Garden",
      "Saket",
      "Dwarka",
      "Rohini",
      "Laxmi Nagar",
      "Lajpat Nagar",
      "Greater Kailash",
      "Chanakyapuri",
      "Pitampura",
      "Vasant Kunj",
      "Janakpuri",
      "Preet Vihar",
      "Mayur Vihar",
      "Civil Lines",
      "Okhla",
      "Kalkaji",
      "Hauz Khas",
      "Paharganj",
      "Daryaganj",
      "Patel Nagar",
      "Rajendra Nagar",
      "Pusa",
      "Kashmere Gate",
      "Sadar Bazar",
      "Model Town",
      "Gulabi Bagh",
      "Shakti Nagar",
      "Kamla Nagar",
      "Mukherjee Nagar",
      "Timarpur",
      "Majnu Ka Tilla",
      "Shalimar Bagh",
      "Ashok Vihar",
      "Wazirpur",
      "Keshav Puram",
      "Mangol Puri",
      "Narela",
      "Bawana",
      "Saraswati Vihar",
      "Paschim Vihar",
      "Shahdara",
      "Seelampur",
      "Yamuna Vihar",
      "Gokulpuri",
      "Bhajanpura",
      "Karawal Nagar",
      "Dilshad Garden",
      "Vivek Vihar",
      "Krishna Nagar",
      "Geeta Colony",
      "Patparganj",
      "Mayur Vihar Phase 1",
      "Mayur Vihar Phase 2",
      "Mayur Vihar Phase 3",
      "Trilokpuri",
      "Kondli",
      "Vinod Nagar",
      "Anand Vihar",
      "Karkardooma",
      "Vishwas Nagar",
      "Shahdara South",
      "Tilak Nagar",
      "Punjabi Bagh",
      "Vikas Puri",
      "Hari Nagar",
      "Subhash Nagar",
      "Moti Nagar",
      "Mansarover Garden",
      "Patel Nagar West",
      "Kirti Nagar",
      "Vikaspuri",
      "Najafgarh",
      "Uttam Nagar",
      "Dwarka Mor",
      "Palam",
      "Kapashera",
      "Bindapur",
      "Vasant Vihar",
      "Mahipalpur",
      "Rajokri",
      "Greater Kailash 1",
      "Greater Kailash 2",
      "Malviya Nagar",
      "Green Park",
      "Safdarjung Enclave",
      "Munirka",
      "RK Puram",
      "Sarojini Nagar",
      "Chattarpur",
      "Mehrauli",
      "Ambedkar Nagar Delhi",
      "Lajpat Nagar 2",
      "Defence Colony",
      "Jangpura",
      "Sarita Vihar",
      "Jasola",
      "Govindpuri",
      "Tughlakabad",
      "Badarpur",
      "Ashram",
      "Rithala",
      "Rohini West",
      "Rohini East",
      "Pitampura Metro",
      "Kohat Enclave",
      "Netaji Subhash Place",
      "Kanhaiya Nagar",
      "Inderlok",
      "Shastri Nagar",
      "Tis Hazari",
      "Pulbangash",
      "Shastri Park",
      "Seelampur Metro",
      "Welcome",
      "Dilshad Garden Metro",
      "Samaypur Badli",
      "Jahangirpuri",
      "Adarsh Nagar",
      "Azadpur",
      "Model Town Metro",
      "GTB Nagar",
      "Vishwavidyalaya",
      "Vidhan Sabha",
      "Chandni Chowk",
      "Chawri Bazar",
      "New Delhi Railway Station",
      "Rajiv Chowk",
      "Patel Chowk",
      "Central Secretariat",
      "Udyog Bhawan",
      "Lok Kalyan Marg",
      "Jor Bagh",
      "AIIMS",
      "Green Park Metro",
      "Hauz Khas Metro",
      "Saket Metro",
      "Qutab Minar",
      "Chhattarpur Metro",
      "Sultanpur",
      "Ghitorni",
      "Arjan Garh",
      "Guru Dronacharya",
      "Dwarka Sector 21",
      "Dwarka Sector 8",
      "Dwarka Sector 9",
      "Dwarka Sector 10",
      "Dwarka Sector 11",
      "Dwarka Sector 12",
      "Dwarka Sector 13",
      "Dwarka Sector 14",
      "Dwarka Mor Metro",
      "Nawada",
      "Uttam Nagar West",
      "Uttam Nagar East",
      "Janakpuri West",
      "Janakpuri East",
      "Tilak Nagar Metro",
      "Subhash Nagar Metro",
      "Tagore Garden",
      "Rajouri Garden Metro",
      "Ramesh Nagar",
      "Moti Nagar Metro",
      "Kirti Nagar Metro",
      "Shadipur",
      "Patel Nagar Metro",
      "Rajendra Place",
      "Karol Bagh Metro",
      "Jhandewalan",
      "RK Ashram Marg",
      "Barakhamba Road",
      "Mandi House",
      "Pragati Maidan",
      "Indraprastha",
      "Yamuna Bank",
      "Akshardham",
      "Mayur Vihar Phase 1 Metro",
      "Mayur Vihar Extension",
      "New Ashok Nagar",
      "Karkardooma Metro",
      "Anand Vihar Metro",
      "Kondli Metro",
      "Vaishali",
      "Laxmi Nagar Metro",
      "Nirman Vihar",
      "Preet Vihar Metro",
      "City Park",
      "Vishwakarma Nagar",
      "Mundka",
      "Nangloi",
      "Rajdhani Park",
      "Mangal Bazar",
      "Ashok Park Main",
      "Peeragarhi",
      "Maya Puri",
      "Naraina",
      "Delhi Cantt",
      "Bhikaji Cama Place",
      "South Extension",
      "Hazrat Nizamuddin",
      "Lodhi Road",
      "Janpath",
      "Khan Market",
      "JLN Stadium",
      "Kailash Colony",
      "Kalkaji Mandir",
      "Jasola Apollo",
      "Mohan Estate",
      "Majlis Park",
      "Shakurpur",
      "ESI Hospital",
      "Dabri Mor",
      "Dashrath Puri",
      "Terminal 1 IGI Airport",
      "IIT Delhi",
      "Panchsheel Park",
      "Chirag Delhi",
      "Nehru Enclave",
      "Jamia Millia Islamia",
      "Kalindi Kunj",
      "Shivaji Stadium",
      "Dhaula Kuan",
      "Delhi Aerocity",
      "IGI Airport T3",
      "Burari",
      "Sant Nagar",
      "Wazirabad",
      "Alipur",
      "Karala",
      "Kanjhawala",
      "Sangam Vihar",
      "Deoli",
      "Khanpur",
      "Zakir Nagar",
      "Batla House",
      "New Friends Colony",
      "East of Kailash",
      "CR Park",
      "Alaknanda",
      "Shakarpur",
      "Surajmal Vihar",
      "Pandav Nagar",
      "Mandawali",
      "IP Extension",
      "Mustafabad",
      "Sonia Vihar",
      "Khajuri Khas",
      "Nand Nagri",
      "Babarpur",
      "Gandhi Nagar Delhi",
      "Jhilmil",
    ],
  },
  {
    state: "Jammu & Kashmir",
    districts: [
      "Anantnag", "Bandipora", "Baramulla", "Budgam", "Doda",
      "Ganderbal", "Jammu", "Kathua", "Kishtwar", "Kulgam",
      "Kupwara", "Poonch", "Pulwama", "Rajouri", "Ramban",
      "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur",
    ],
  },
  { state: "Ladakh", districts: ["Kargil", "Leh"] },
  { state: "Lakshadweep", districts: ["Lakshadweep"] },
  { state: "Puducherry", districts: ["Karaikal", "Mahe", "Puducherry", "Yanam"] },
];

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

const SLUG_MAP: Record<string, { district: string; state: string }> = {};
STATES_DISTRICTS.forEach(({ state, districts }) => {
  districts.forEach((d) => {
    const slug = slugify(d);
    if (!SLUG_MAP[slug]) SLUG_MAP[slug] = { district: d, state };
  });
});

const ALL_SLUGS = Object.keys(SLUG_MAP);

function formatCityName(slug: string | undefined) {
  if (!slug) return "City";
  if (SLUG_MAP[slug]) return SLUG_MAP[slug].district;
  return slug.split("-").filter(Boolean).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

/* ─── Category meta ───────────────────────────────────────────────────────── */
const CATEGORY_META: Record<string, {
  icon: string; gradient: string; bg: string; border: string;
  accent: string; textAccent: string; label: string;
}> = {
  gst: {
    icon: "🧾", gradient: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50", border: "border-emerald-100",
    accent: "#059669", textAccent: "text-emerald-600", label: "GST",
  },
  fssai: {
    icon: "🥗", gradient: "from-orange-500 to-amber-600",
    bg: "bg-orange-50", border: "border-orange-100",
    accent: "#d97706", textAccent: "text-orange-600", label: "FSSAI",
  },
  "income-tax": {
    icon: "💼", gradient: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50", border: "border-blue-100",
    accent: "#2563eb", textAccent: "text-blue-600", label: "Income Tax",
  },
  roc: {
    icon: "🏛", gradient: "from-violet-500 to-purple-600",
    bg: "bg-violet-50", border: "border-violet-100",
    accent: "#7c3aed", textAccent: "text-violet-600", label: "ROC",
  },
};
const DEFAULT_META = {
  icon: "📄", gradient: "from-gray-400 to-gray-600",
  bg: "bg-gray-50", border: "border-gray-100",
  accent: "#6b7280", textAccent: "text-gray-500", label: "Other",
};

/* ─── Static Params ───────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return ALL_SLUGS.map((slug) => ({ city: slug }));
}

/* ─── SEO Metadata ────────────────────────────────────────────────────────── */
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const cityName = formatCityName(city);
  const stateName = SLUG_MAP[city]?.state ?? "India";
  return {
    title: `GST Registration, Income Tax Filing & Company Registration in ${cityName} | Taxvio`,
    description: `Taxvio provides expert GST registration, GSTR-1 & GSTR-3B filing, income tax return filing, company registration, TDS returns, FSSAI license and ROC compliance in ${cityName}, ${stateName}. CA-assisted, 100% online, starting ₹499.`,
    keywords: [
      `GST registration ${cityName}`, `income tax filing ${cityName}`,
      `company registration ${cityName}`, `tax consultant ${cityName}`,
      `ROC compliance ${cityName}`, `FSSAI license ${cityName}`,
      `TDS return filing ${cityName}`, `GST return filing ${cityName}`,
    ],
    alternates: { canonical: `https://www.taxvio.in/city/${city}` },
    openGraph: {
      title: `GST & Tax Services in ${cityName} | Taxvio`,
      description: `Professional GST, ITR, company registration & compliance services in ${cityName}, ${stateName} — 100% online, starting ₹499.`,
      url: `https://www.taxvio.in/city/${city}`,
      siteName: "Taxvio", type: "website",
      images: [{ url: "https://www.taxvio.in/og-city.jpg", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title: `GST & Tax Services in ${cityName} | Taxvio` },
    robots: { index: true, follow: true },
  };
}

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default async function CityServicesPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const cityName = formatCityName(city);
  const stateName = SLUG_MAP[city]?.state ?? "India";
  const PHONE = "918937980366";
  const WA = `https://wa.me/${PHONE}?text=${encodeURIComponent(`Hello Taxvio, I need tax and compliance services in ${cityName}.`)}`;

  const totalServices = serviceCategories.reduce((a, c) => a + c.services.length, 0);

  /* JSON-LD */
  const localBusinessSchema = {
    "@context": "https://schema.org", "@type": "ProfessionalService",
    name: "Taxvio", url: "https://www.taxvio.in",
    telephone: "+918937980366", email: "support@taxvio.in",
    description: `Taxvio provides GST registration, income tax filing, company registration, TDS returns, FSSAI license and ROC compliance services in ${cityName}, ${stateName}.`,
    areaServed: [{ "@type": "City", name: cityName }],
    address: { "@type": "PostalAddress", addressLocality: "Khatauli", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "2400" },
    priceRange: "₹499 - ₹19999", openingHours: "Mo-Sa 09:00-19:00",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.taxvio.in" },
      { "@type": "ListItem", position: 2, name: "Cities", item: "https://www.taxvio.in/city" },
      { "@type": "ListItem", position: 3, name: stateName, item: `https://www.taxvio.in/city#${slugify(stateName)}` },
      { "@type": "ListItem", position: 4, name: cityName, item: `https://www.taxvio.in/city/${city}` },
    ],
  };

  const serviceListSchema = {
    "@context": "https://schema.org", "@type": "ItemList",
    name: `Tax & Compliance Services in ${cityName}`,
    numberOfItems: totalServices,
    itemListElement: serviceCategories.flatMap((cat, ci) =>
      cat.services.map((svc, si) => ({
        "@type": "ListItem", position: ci * 100 + si + 1,
        name: `${svc.title} in ${cityName}`, url: `https://www.taxvio.in/contact`,
      }))
    ),
  };

  /* Nearby districts */
  const sameStateDistricts = STATES_DISTRICTS
    .find((s) => s.state === stateName)
    ?.districts.filter((d) => slugify(d) !== city).slice(0, 6) ?? [];

  const nearbySlugs = sameStateDistricts.length >= 3
    ? sameStateDistricts.map(slugify).slice(0, 6)
    : (() => {
      const idx = ALL_SLUGS.indexOf(city);
      return [...ALL_SLUGS.slice(Math.max(0, idx - 3), idx), ...ALL_SLUGS.slice(idx + 1, idx + 4)].slice(0, 6);
    })();

  return (
    <>
      <Script id="lb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="bc-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="sl-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }} />

      <main className="bg-[#f8fbfd] text-gray-800 font-sans" itemScope itemType="https://schema.org/Service">

        {/* ════════════ HERO ════════════ */}
        <section
          aria-label={`GST and Tax Services in ${cityName}`}
          className="relative overflow-hidden bg-[#00416a] text-white"
        >
          {/* Layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] via-[#003257] to-[#001e36]" />
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "50px 50px" }} />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(56,189,248,0.12) 0%,transparent 65%)" }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(45,212,191,0.08) 0%,transparent 65%)" }} />

          <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-10 md:pt-24 md:pb-14">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-7">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/45"
                itemScope itemType="https://schema.org/BreadcrumbList">
                {[
                  { href: "/", label: "Home", pos: 1 },
                  { href: "/city", label: "Cities", pos: 2 },
                  { href: `/city#${slugify(stateName)}`, label: stateName, pos: 3 },
                  { href: null, label: cityName, pos: 4 },
                ].map(({ href, label, pos }, i, arr) => (
                  <li key={label} className="flex items-center gap-1.5"
                    itemScope itemType="https://schema.org/ListItem" itemProp="itemListElement">
                    <meta itemProp="position" content={String(pos)} />
                    {href ? (
                      <Link href={href} itemProp="item" className="hover:text-white/80 transition">
                        <span itemProp="name">{label}</span>
                      </Link>
                    ) : (
                      <span className="text-white/80 font-semibold" itemProp="name">{label}</span>
                    )}
                    {i < arr.length - 1 && <span className="text-white/25">›</span>}
                  </li>
                ))}
              </ol>
            </nav>

            <div className="grid md:grid-cols-[1fr_320px] gap-10 items-start">
              {/* Left */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-5 backdrop-blur-sm"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }}>
                  <MapPin size={12} className="text-sky-400 shrink-0" />
                  {cityName}, {stateName} · 100% Online · CA-Assisted
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white" itemProp="name">
                  GST, Income Tax &amp; Company
                  <span className="block mt-2 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                    Services in {cityName}
                  </span>
                </h1>

                <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-2xl" itemProp="description">
                  Expert <strong className="text-white">GST registration</strong>,{" "}
                  <strong className="text-white">income tax return filing</strong>, company registration,
                  TDS compliance, FSSAI license, and ROC compliance in{" "}
                  <strong className="text-white">{cityName}, {stateName}</strong> — 100% online by CA professionals. Starting{" "}
                  <strong className="text-sky-300">₹499</strong>.
                </p>

                {/* Trust chips */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    { icon: BadgeCheck, text: "CA-Assisted" },
                    { icon: Shield, text: "100% Secure" },
                    { icon: Zap, text: "Fast Processing" },
                    { icon: Clock, text: "Mon–Sat 9AM–7PM" },
                  ].map(({ icon: Icon, text }) => (
                    <span key={text} className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-3 py-1.5 backdrop-blur-sm"
                      style={{ background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.82)" }}>
                      <Icon size={11} className="text-sky-300 shrink-0" /> {text}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] hover:bg-[#1ebe5d] px-7 py-4 text-white text-sm font-bold shadow-xl shadow-green-900/20 active:scale-[0.97] transition-all min-h-[52px]">
                    <MessageCircle size={16} className="shrink-0" /> WhatsApp Us
                  </a>
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-[#00416a] text-sm font-bold shadow-xl hover:bg-gray-50 hover:shadow-2xl active:scale-[0.97] transition-all min-h-[52px]">
                    Free Consultation <ArrowRight size={15} className="shrink-0" />
                  </Link>
                  <a href={`tel:${PHONE}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/5 px-7 py-4 text-white text-sm font-semibold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all min-h-[52px]">
                    <Phone size={15} className="shrink-0" /> Call Now
                  </a>
                </div>
              </div>

              {/* Right — Quick info card */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border"
                style={{ background: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.14)" }}>
                {/* Card header */}
                <div className="px-5 py-4 border-b flex items-center justify-between"
                  style={{ borderColor: "rgba(255,255,255,0.10)" }}>
                  <div>
                    <p className="font-bold text-white text-sm">{cityName} Services</p>
                    <p className="text-[11px] text-white/50 mt-0.5">{stateName} · {totalServices} services available</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={12} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-white text-xs font-bold">4.9</span>
                  </div>
                </div>

                {/* Service list */}
                <div className="p-4 space-y-2">
                  {serviceCategories.map((cat) => {
                    const meta = CATEGORY_META[cat.slug] || DEFAULT_META;
                    return (
                      <div key={cat.slug} className="flex items-center justify-between rounded-xl px-3 py-2.5 transition-colors"
                        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
                        <span className="flex items-center gap-2 text-xs font-semibold text-white/75">
                          <span>{meta.icon}</span> {cat.category}
                        </span>
                        <span className="text-[10px] font-bold text-sky-300 bg-sky-400/10 px-2 py-0.5 rounded-full">
                          {cat.services.length}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Price strip */}
                <div className="mx-4 mb-4 rounded-xl px-4 py-3 flex items-center justify-between"
                  style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  <div>
                    <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wide">Starting Price</p>
                    <p className="text-sky-300 text-2xl font-extrabold leading-tight">₹499</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-white/50 font-semibold uppercase tracking-wide">Response Time</p>
                    <p className="text-white text-sm font-bold">Same Day</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust strip */}
          <div className="border-t border-white/10">
            <div className="max-w-6xl mx-auto px-6 py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {[
                { icon: BadgeCheck, label: "ICAI-Certified CAs" },
                { icon: TrendingUp, label: "12,000+ Returns Filed" },
                { icon: Users, label: "4,800+ Businesses" },
                { icon: IndianRupee, label: "₹2.4 Cr+ Tax Saved" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-white/45 text-xs">
                  <Icon size={11} className="text-sky-400 shrink-0" /> {label}
                </div>
              ))}
            </div>
          </div>

          {/* Wave */}
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 48L1440 48L1440 24C1200 48 900 0 720 16C540 32 240 48 0 24L0 48Z" fill="#f8fbfd" />
          </svg>
        </section>

        {/* ════════════ STATS RIBBON ════════════ */}
        <section className="py-8 bg-white border-b border-gray-100" aria-label="Taxvio statistics">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "12,000+", label: "Returns Filed", icon: FileText },
              { val: "4,800+", label: "Businesses Served", icon: Building2 },
              { val: "4.9★", label: "Average Rating", icon: Star },
              { val: "₹499", label: "Starting Price", icon: IndianRupee },
            ].map(({ val, label, icon: Icon }) => (
              <div key={label} className="flex flex-col items-center gap-1.5 p-4 rounded-2xl bg-[#f2f8fc] border border-[#deeef7] text-center hover:shadow-sm transition-all">
                <div className="w-8 h-8 rounded-lg bg-[#00416a]/10 flex items-center justify-center">
                  <Icon size={15} className="text-[#00416a]" />
                </div>
                <p className="text-xl font-extrabold text-[#00416a]">{val}</p>
                <p className="text-[11px] text-gray-500 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════ SERVICE CATEGORIES ════════════ */}
        <section className="py-20 bg-[#f8fbfd]" aria-label={`All tax and compliance services in ${cityName}`}>
          <div className="max-w-7xl mx-auto px-6 space-y-16">

            {serviceCategories.map((category) => {
              const meta = CATEGORY_META[category.slug] || DEFAULT_META;
              return (
                <div key={category.slug} id={category.slug}>
                  {/* Category header */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
                    <div className="flex items-center gap-4 flex-1">
                      <div className={`w-13 h-13 w-12 h-12 rounded-2xl bg-gradient-to-br ${meta.gradient} flex items-center justify-center text-xl shadow-lg shrink-0`}>
                        {meta.icon}
                      </div>
                      <div>
                        <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] leading-tight" itemProp="name">
                          {category.category} Services in {cityName}
                        </h2>
                        <p className="text-sm text-gray-500 mt-0.5 max-w-2xl">{category.description}</p>
                      </div>
                    </div>
                    <span className="self-start sm:self-auto text-xs font-bold px-3 py-1.5 rounded-full border shrink-0"
                      style={{ background: `${meta.accent}12`, color: meta.accent, borderColor: `${meta.accent}25` }}>
                      {category.services.length} Services
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8" />

                  {/* Service cards */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {category.services.map((service) => (
                      <Link
                        key={service.slug}
                        href="/contact"
                        aria-label={`${service.title} in ${cityName} — Taxvio`}
                        className="group relative bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden"
                        itemScope itemType="https://schema.org/Service"
                      >
                        <meta itemProp="areaServed" content={cityName} />
                        <meta itemProp="provider" content="Taxvio" />

                        {/* Top color bar on hover */}
                        <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${meta.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                        {/* Corner accent */}
                        <div className={`absolute top-0 right-0 w-20 h-20 rounded-bl-[40px] bg-gradient-to-br ${meta.gradient} opacity-[0.05] pointer-events-none`} />

                        {/* Icon + arrow */}
                        <div className="flex items-start justify-between mb-3">
                          <div className={`w-10 h-10 rounded-xl ${meta.bg} border ${meta.border} flex items-center justify-center text-lg shrink-0`}>
                            {meta.icon}
                          </div>
                          <div className="w-7 h-7 rounded-lg bg-gray-50 group-hover:bg-gradient-to-br group-hover:from-[#00416a] group-hover:to-[#005a90] flex items-center justify-center transition-all duration-200 shrink-0">
                            <ArrowRight size={13} className="text-gray-300 group-hover:text-white transition-colors" />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-sm font-bold text-gray-800 group-hover:text-[#00416a] transition-colors leading-snug mb-2" itemProp="name">
                          {service.title} in {cityName}
                        </h3>

                        {/* Description */}
                        <p className="text-xs text-gray-500 leading-relaxed flex-1 line-clamp-3">
                          {service.shortDescription}
                        </p>

                        {/* Features */}
                        {service.features && service.features.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-gray-50 space-y-1">
                            {service.features.slice(0, 2).map((f: string) => (
                              <p key={f} className="flex items-start gap-1.5 text-[11px] text-gray-400">
                                <CheckCircle size={10} className="text-green-500 shrink-0 mt-0.5" />
                                <span className="line-clamp-1">{f}</span>
                              </p>
                            ))}
                          </div>
                        )}

                        {/* Footer */}
                        <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
                          <span className={`text-[11px] font-bold ${meta.textAccent} opacity-0 group-hover:opacity-100 transition-opacity`}>
                            Get Started →
                          </span>
                          <span className="text-[10px] text-gray-300">Taxvio · {cityName}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ════════════ WHY TAXVIO ════════════ */}
        <section className="py-20 bg-white" aria-label={`Why choose Taxvio for tax services in ${cityName}`}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#00416a] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Why Taxvio
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#00416a] mt-4">
                Why Businesses in {cityName} Choose Taxvio
              </h2>
              <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
                CA-quality service at startup-friendly prices — 100% online, no office visit needed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: Users, title: "Expert CA & Legal Team", desc: `Every service for businesses in ${cityName} is handled by practising Chartered Accountants, not just data entry operators.`, color: "bg-blue-100 text-blue-700" },
                { icon: Zap, title: "100% Online — No Office Visit", desc: `Share documents on WhatsApp or email from anywhere in ${cityName}. Track filing status in real-time.`, color: "bg-emerald-100 text-emerald-700" },
                { icon: Shield, title: "Secure & Confidential", desc: "Strict document confidentiality protocols. Your business data is never shared with third parties.", color: "bg-violet-100 text-violet-700" },
                { icon: CheckCircle, title: "Transparent Pricing from ₹499", desc: "No hidden charges. Clear upfront pricing for every service. Pay only when you know the full scope.", color: "bg-orange-100 text-orange-700" },
                { icon: Clock, title: "Fast Processing & Reminders", desc: "Timely filing with proactive deadline reminders — zero penalties for late GST returns or ITR.", color: "bg-teal-100 text-teal-700" },
                { icon: MapPin, title: `Pan India · Serving ${cityName}`, desc: `Our 100% online model means ${cityName} businesses get metro-city quality CA services at accessible prices.`, color: "bg-sky-100 text-sky-700" },
              ].map(({ icon: Icon, title, desc, color }) => (
                <div key={title} className="group flex items-start gap-4 p-5 bg-[#f8fbfd] border border-[#deeef7] rounded-2xl hover:border-[#00416a]/20 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                    <Icon size={17} />
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

        {/* ════════════ SEO CONTENT ════════════ */}
        <section className="py-20 bg-[#f8fbfd] border-y border-gray-100" aria-label={`About GST and tax services in ${cityName}`}>
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            {[
              {
                title: `GST Registration & Return Filing Services in ${cityName}`,
                icon: Receipt,
                paragraphs: [
                  `GST registration in ${cityName} (${stateName}) is mandatory for businesses with annual turnover exceeding the prescribed threshold, businesses engaged in interstate supply, e-commerce sellers, and certain notified service categories under the CGST Act. Taxvio's CA team handles end-to-end GST registration in ${cityName} — from eligibility assessment and document preparation to GSTIN allotment — typically within 3–7 working days.`,
                  `Beyond registration, Taxvio provides monthly and quarterly GST return filing in ${cityName} covering GSTR-1, GSTR-3B, GSTR-9 (annual return), GST LUT filing for exporters, GST refund applications, e-invoicing compliance, and GST audit assistance. Our reconciliation-first approach ensures zero mismatches and accurate ITC claims for all businesses in ${cityName}.`,
                ],
              },
              {
                title: `Income Tax Return Filing in ${cityName}`,
                icon: FileText,
                paragraphs: [
                  `Taxvio provides comprehensive income tax return filing in ${cityName} for salaried employees, freelancers, proprietors, partnership firms, LLPs, private limited companies, and trusts. Our CA team optimises deductions under Sections 80C, 80D, HRA exemption, and capital gains provisions — ensuring you pay only what is legally due.`,
                  `For businesses in ${cityName}, ${stateName}, we additionally offer TDS return filing (Form 24Q, 26Q, 27Q), income tax audit under Section 44AB, scrutiny notice replies under Sections 143(1)/143(2)/148, and 12A/80G registration for NGOs and charitable trusts. All services are delivered 100% online — no office visit required.`,
                ],
              },
              {
                title: `Company Registration & ROC Compliance in ${cityName}`,
                icon: Building2,
                paragraphs: [
                  `Taxvio handles complete company registration in ${cityName} — Private Limited Company, One Person Company (OPC), Limited Liability Partnership (LLP), and Section 8 (non-profit) company — through the MCA portal. Services include name approval, DIN & DSC processing, MOA/AOA drafting, Certificate of Incorporation, and PAN/TAN application.`,
                  `For incorporated entities in ${cityName}, ${stateName}, our annual ROC compliance service covers AOC-4 and MGT-7 filing for companies, Form 11 and Form 8 for LLPs, director appointment/resignation (DIR-12), share capital changes (SH-7), and company closure proceedings — ensuring your entity remains legally compliant year-round.`,
                ],
              },
            ].map(({ title, icon: Icon, paragraphs }) => (
              <div key={title} className="flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-[#00416a]/10 flex items-center justify-center shrink-0 mt-1">
                  <Icon size={18} className="text-[#00416a]" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-extrabold text-[#00416a] mb-4 leading-snug">{title}</h2>
                  <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
                    {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════ NEARBY DISTRICTS ════════════ */}
        {nearbySlugs.length > 0 && (
          <section className="py-14 bg-white border-b border-gray-100" aria-label="Tax services in nearby districts">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-7 rounded-full bg-gradient-to-b from-[#00416a] to-sky-400" />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#00416a]">{stateName}</p>
                  <h2 className="text-lg font-extrabold text-gray-800">Tax Services in Nearby Districts</h2>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {nearbySlugs.map((nearSlug) => (
                  <Link key={nearSlug} href={`/city/${nearSlug}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-600 hover:border-[#00416a]/30 hover:bg-blue-50 hover:text-[#00416a] hover:shadow-sm transition-all duration-200">
                    <MapPin size={11} className="text-[#00416a]/50 group-hover:text-[#00416a] shrink-0 transition-colors" />
                    {formatCityName(nearSlug)}
                    <ArrowRight size={11} className="text-gray-300 group-hover:text-[#00416a] group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ════════════ CTA BANNER ════════════ */}
        <section className="py-16 px-6 bg-[#f8fbfd]" aria-label={`Contact Taxvio for tax services in ${cityName}`}>
          <div className="max-w-5xl mx-auto">
            <div className="relative bg-[#00416a] rounded-3xl overflow-hidden p-10 md:p-14 text-white text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00416a] to-[#001e36]" />
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-sky-400/10 blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-teal-400/10 blur-[60px] pointer-events-none" />
              <div className="absolute inset-0 opacity-[0.04]"
                style={{ backgroundImage: "radial-gradient(circle,#fff 1px,transparent 1px)", backgroundSize: "24px 24px" }} />

              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold mb-5">
                  <MapPin size={11} className="text-sky-300" />
                  Serving businesses in {cityName}, {stateName} — 100% online
                </div>

                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                  Get Expert Tax &amp; Compliance Help
                  <span className="block mt-1 bg-gradient-to-r from-sky-300 to-teal-300 bg-clip-text text-transparent">
                    in {cityName} Today
                  </span>
                </h2>

                <p className="mt-4 text-white/70 max-w-xl mx-auto text-sm leading-relaxed">
                  GST registration, income tax filing, company incorporation, TDS compliance, FSSAI license, and ROC compliance — all delivered online for businesses in {cityName}, {stateName}. Starting ₹499. CA-assisted, same-day WhatsApp response.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#25d366] hover:bg-[#1ebe5d] px-7 py-3.5 text-white text-sm font-bold shadow-lg active:scale-[0.97] transition-all min-h-[52px]">
                    <MessageCircle size={16} /> WhatsApp Us
                  </a>
                  <Link href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-[#00416a] text-sm font-bold shadow-lg hover:bg-gray-50 hover:shadow-xl active:scale-[0.97] transition-all min-h-[52px]">
                    Free Consultation <ArrowRight size={15} />
                  </Link>
                  <a href={`tel:${PHONE}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/5 px-7 py-3.5 text-white text-sm font-bold hover:bg-white/10 hover:border-white active:scale-[0.97] transition-all min-h-[52px]">
                    <Phone size={15} /> Call Now
                  </a>
                </div>

                {/* Bottom trust row */}
                <div className="mt-8 flex flex-wrap justify-center gap-5 text-xs text-white/40">
                  {[
                    { icon: Shield, label: "100% Confidential" },
                    { icon: CheckCircle, label: "CA-Assisted" },
                    { icon: Zap, label: "Fast Processing" },
                    { icon: Clock, label: "Mon–Sat · 9AM–7PM" },
                  ].map(({ icon: Icon, label }) => (
                    <span key={label} className="flex items-center gap-1.5">
                      <Icon size={11} /> {label}
                    </span>
                  ))}
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