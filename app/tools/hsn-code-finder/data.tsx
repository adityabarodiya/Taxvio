// app/tools/hsn-code-finder/data.ts

export interface HSNEntry {
  hsn: string;
  description: string;
  gstRate: number;       // 0 | 5 | 12 | 18 | 28
  chapter: string;
  category: string;
  type: "goods" | "services";
  cess?: string;
  notes?: string;
}

export const HSN_DATA: HSNEntry[] = [
  // ─── CHAPTER 1 — LIVE ANIMALS ─────────────────────────────────────────────
  { hsn: "0101", description: "Live horses, asses, mules and hinnies", gstRate: 0, chapter: "Chapter 1", category: "Live Animals", type: "goods" },
  { hsn: "0102", description: "Live bovine animals (cows, bulls, buffaloes)", gstRate: 0, chapter: "Chapter 1", category: "Live Animals", type: "goods" },
  { hsn: "0103", description: "Live swine (pigs)", gstRate: 0, chapter: "Chapter 1", category: "Live Animals", type: "goods" },
  { hsn: "0104", description: "Live sheep and goats", gstRate: 0, chapter: "Chapter 1", category: "Live Animals", type: "goods" },
  { hsn: "0105", description: "Live poultry — hens, ducks, geese, turkeys, guinea fowls", gstRate: 0, chapter: "Chapter 1", category: "Live Animals", type: "goods" },
  { hsn: "0106", description: "Other live animals — mammals, reptiles, birds, insects", gstRate: 0, chapter: "Chapter 1", category: "Live Animals", type: "goods" },
  // ─── CHAPTER 2 — MEAT & EDIBLE OFFAL ──────────────────────────────────────
  { hsn: "0201", description: "Meat of bovine animals, fresh or chilled", gstRate: 0, chapter: "Chapter 2", category: "Meat & Poultry", type: "goods" },
  { hsn: "0202", description: "Meat of bovine animals, frozen", gstRate: 12, chapter: "Chapter 2", category: "Meat & Poultry", type: "goods" },
  { hsn: "0203", description: "Meat of swine, fresh, chilled or frozen", gstRate: 12, chapter: "Chapter 2", category: "Meat & Poultry", type: "goods" },
  { hsn: "0204", description: "Meat of sheep or goats, fresh, chilled or frozen", gstRate: 0, chapter: "Chapter 2", category: "Meat & Poultry", type: "goods" },
  { hsn: "0207", description: "Meat and edible offal of poultry — fresh or frozen", gstRate: 0, chapter: "Chapter 2", category: "Meat & Poultry", type: "goods" },
  { hsn: "0208", description: "Other meat and edible offal — rabbits, game, frogs' legs", gstRate: 12, chapter: "Chapter 2", category: "Meat & Poultry", type: "goods" },
  { hsn: "0209", description: "Pig fat and poultry fat, not rendered", gstRate: 5, chapter: "Chapter 2", category: "Meat & Poultry", type: "goods" },
  { hsn: "0210", description: "Meat and edible offal, salted, dried or smoked; edible meat flours", gstRate: 12, chapter: "Chapter 2", category: "Meat & Poultry", type: "goods" },
  // ─── CHAPTER 3 — FISH & SEAFOOD ───────────────────────────────────────────
  { hsn: "0301", description: "Live fish", gstRate: 0, chapter: "Chapter 3", category: "Fish & Seafood", type: "goods" },
  { hsn: "0302", description: "Fish, fresh or chilled (excluding fish fillets)", gstRate: 0, chapter: "Chapter 3", category: "Fish & Seafood", type: "goods" },
  { hsn: "0303", description: "Fish, frozen (excluding fish fillets)", gstRate: 5, chapter: "Chapter 3", category: "Fish & Seafood", type: "goods" },
  { hsn: "0304", description: "Fish fillets and other fish meat (fresh, chilled or frozen)", gstRate: 5, chapter: "Chapter 3", category: "Fish & Seafood", type: "goods" },
  { hsn: "0306", description: "Crustaceans — lobsters, crabs, shrimps, prawns", gstRate: 5, chapter: "Chapter 3", category: "Fish & Seafood", type: "goods" },
  { hsn: "0307", description: "Molluscs — oysters, scallops, mussels, squid, octopus", gstRate: 5, chapter: "Chapter 3", category: "Fish & Seafood", type: "goods" },
  // ─── CHAPTER 4 — DAIRY, EGGS, HONEY ───────────────────────────────────────
  { hsn: "0401", description: "Milk and cream, not concentrated or sweetened", gstRate: 0, chapter: "Chapter 4", category: "Dairy Products", type: "goods" },
  { hsn: "0402", description: "Milk and cream, concentrated or sweetened", gstRate: 5, chapter: "Chapter 4", category: "Dairy Products", type: "goods" },
  { hsn: "0403", description: "Buttermilk, curd, cream, yogurt, kephir and fermented milk", gstRate: 0, chapter: "Chapter 4", category: "Dairy Products", type: "goods" },
  { hsn: "0404", description: "Whey, whether or not concentrated or sweetened", gstRate: 5, chapter: "Chapter 4", category: "Dairy Products", type: "goods" },
  { hsn: "0405", description: "Butter, dairy spreads and other fats from milk", gstRate: 12, chapter: "Chapter 4", category: "Dairy Products", type: "goods" },
  { hsn: "0406", description: "Cheese and curd", gstRate: 12, chapter: "Chapter 4", category: "Dairy Products", type: "goods" },
  { hsn: "0407", description: "Birds' eggs, in shell, fresh, preserved or cooked", gstRate: 0, chapter: "Chapter 4", category: "Dairy Products", type: "goods" },
  { hsn: "0408", description: "Birds' eggs, not in shell, and egg yolks", gstRate: 5, chapter: "Chapter 4", category: "Dairy Products", type: "goods" },
  { hsn: "0409", description: "Natural honey", gstRate: 0, chapter: "Chapter 4", category: "Dairy Products", type: "goods" },
  { hsn: "0410", description: "Edible products of animal origin — royal jelly, propolis", gstRate: 5, chapter: "Chapter 4", category: "Dairy Products", type: "goods" },
  // ─── CHAPTER 7 — VEGETABLES ───────────────────────────────────────────────
  { hsn: "0701", description: "Potatoes, fresh or chilled", gstRate: 0, chapter: "Chapter 7", category: "Vegetables", type: "goods" },
  { hsn: "0702", description: "Tomatoes, fresh or chilled", gstRate: 0, chapter: "Chapter 7", category: "Vegetables", type: "goods" },
  { hsn: "0703", description: "Onions, shallots, garlic, leeks and other alliaceous vegetables", gstRate: 0, chapter: "Chapter 7", category: "Vegetables", type: "goods" },
  { hsn: "0704", description: "Cabbages, cauliflowers, kohlrabi, kale and similar vegetables", gstRate: 0, chapter: "Chapter 7", category: "Vegetables", type: "goods" },
  { hsn: "0705", description: "Lettuce and chicory, fresh or chilled", gstRate: 0, chapter: "Chapter 7", category: "Vegetables", type: "goods" },
  { hsn: "0706", description: "Carrots, turnips, beetroot, radishes and similar edible roots", gstRate: 0, chapter: "Chapter 7", category: "Vegetables", type: "goods" },
  { hsn: "0707", description: "Cucumbers and gherkins, fresh or chilled", gstRate: 0, chapter: "Chapter 7", category: "Vegetables", type: "goods" },
  { hsn: "0708", description: "Leguminous vegetables — beans, peas, lentils, fresh or chilled", gstRate: 0, chapter: "Chapter 7", category: "Vegetables", type: "goods" },
  { hsn: "0709", description: "Other vegetables, fresh or chilled — mushrooms, spinach, okra", gstRate: 0, chapter: "Chapter 7", category: "Vegetables", type: "goods" },
  { hsn: "0710", description: "Vegetables (frozen) — beans, corn, peas, spinach", gstRate: 5, chapter: "Chapter 7", category: "Vegetables", type: "goods" },
  { hsn: "0712", description: "Dried vegetables, whole, cut, sliced, broken or powdered", gstRate: 5, chapter: "Chapter 7", category: "Vegetables", type: "goods" },
  // ─── CHAPTER 8 — FRUITS & NUTS ────────────────────────────────────────────
  { hsn: "0801", description: "Coconuts, Brazil nuts and cashew nuts, fresh or dried", gstRate: 0, chapter: "Chapter 8", category: "Fruits & Nuts", type: "goods" },
  { hsn: "0802", description: "Other nuts — almonds, walnuts, pistachios, hazelnuts, chestnuts", gstRate: 5, chapter: "Chapter 8", category: "Fruits & Nuts", type: "goods" },
  { hsn: "0803", description: "Bananas, including plantains, fresh or dried", gstRate: 0, chapter: "Chapter 8", category: "Fruits & Nuts", type: "goods" },
  { hsn: "0804", description: "Dates, figs, pineapples, avocados, guavas, mangoes, mangosteens", gstRate: 0, chapter: "Chapter 8", category: "Fruits & Nuts", type: "goods" },
  { hsn: "0805", description: "Citrus fruits — oranges, mandarins, lemons, limes, grapefruit", gstRate: 0, chapter: "Chapter 8", category: "Fruits & Nuts", type: "goods" },
  { hsn: "0806", description: "Grapes, fresh or dried (raisins)", gstRate: 0, chapter: "Chapter 8", category: "Fruits & Nuts", type: "goods" },
  { hsn: "0807", description: "Melons (including watermelons) and papaws (papayas)", gstRate: 0, chapter: "Chapter 8", category: "Fruits & Nuts", type: "goods" },
  { hsn: "0808", description: "Apples, pears and quinces, fresh", gstRate: 0, chapter: "Chapter 8", category: "Fruits & Nuts", type: "goods" },
  { hsn: "0809", description: "Apricots, cherries, peaches, plums and sloes, fresh", gstRate: 0, chapter: "Chapter 8", category: "Fruits & Nuts", type: "goods" },
  { hsn: "0811", description: "Fruit and nuts, frozen, not containing added sugar", gstRate: 5, chapter: "Chapter 8", category: "Fruits & Nuts", type: "goods" },
  { hsn: "0813", description: "Dried fruits — prunes, apricots, apples, tamarind", gstRate: 12, chapter: "Chapter 8", category: "Fruits & Nuts", type: "goods" },
  // ─── CHAPTER 9 — COFFEE, TEA, SPICES ─────────────────────────────────────
  { hsn: "0901", description: "Coffee — green coffee beans, roasted coffee, coffee husks", gstRate: 5, chapter: "Chapter 9", category: "Spices & Beverages", type: "goods" },
  { hsn: "0902", description: "Tea — green tea, black tea, partly fermented tea", gstRate: 5, chapter: "Chapter 9", category: "Spices & Beverages", type: "goods" },
  { hsn: "0904", description: "Pepper (of the genus Piper); dried or crushed chillies and paprika", gstRate: 5, chapter: "Chapter 9", category: "Spices & Beverages", type: "goods" },
  { hsn: "0905", description: "Vanilla, fresh or dried", gstRate: 5, chapter: "Chapter 9", category: "Spices & Beverages", type: "goods" },
  { hsn: "0906", description: "Cinnamon and cinnamon-tree flowers", gstRate: 5, chapter: "Chapter 9", category: "Spices & Beverages", type: "goods" },
  { hsn: "0907", description: "Cloves (whole fruit, cloves and stems)", gstRate: 5, chapter: "Chapter 9", category: "Spices & Beverages", type: "goods" },
  { hsn: "0908", description: "Nutmeg, mace and cardamoms", gstRate: 5, chapter: "Chapter 9", category: "Spices & Beverages", type: "goods" },
  { hsn: "0909", description: "Seeds of anise, badian, fennel, coriander, cumin, caraway", gstRate: 5, chapter: "Chapter 9", category: "Spices & Beverages", type: "goods" },
  { hsn: "0910", description: "Ginger, saffron, turmeric, thyme, bay leaves, curry", gstRate: 5, chapter: "Chapter 9", category: "Spices & Beverages", type: "goods" },
  // ─── CHAPTER 10 — CEREALS ─────────────────────────────────────────────────
  { hsn: "1001", description: "Wheat and meslin (durum wheat, common wheat, spelt)", gstRate: 0, chapter: "Chapter 10", category: "Cereals & Grains", type: "goods" },
  { hsn: "1002", description: "Rye", gstRate: 0, chapter: "Chapter 10", category: "Cereals & Grains", type: "goods" },
  { hsn: "1003", description: "Barley", gstRate: 0, chapter: "Chapter 10", category: "Cereals & Grains", type: "goods" },
  { hsn: "1004", description: "Oats", gstRate: 0, chapter: "Chapter 10", category: "Cereals & Grains", type: "goods" },
  { hsn: "1005", description: "Maize (corn)", gstRate: 0, chapter: "Chapter 10", category: "Cereals & Grains", type: "goods" },
  { hsn: "1006", description: "Rice — paddy, husked (brown), semi-milled, milled, broken rice", gstRate: 0, chapter: "Chapter 10", category: "Cereals & Grains", type: "goods", notes: "Branded rice attracts 5% GST" },
  { hsn: "1007", description: "Sorghum (jowar)", gstRate: 0, chapter: "Chapter 10", category: "Cereals & Grains", type: "goods" },
  { hsn: "1008", description: "Buckwheat, millet, canary seeds, and other cereals", gstRate: 0, chapter: "Chapter 10", category: "Cereals & Grains", type: "goods" },
  // ─── CHAPTER 17 — SUGAR ───────────────────────────────────────────────────
  { hsn: "1701", description: "Cane or beet sugar and chemically pure sucrose — refined sugar", gstRate: 5, chapter: "Chapter 17", category: "Sugar & Confectionery", type: "goods" },
  { hsn: "1702", description: "Other sugars — lactose, glucose, fructose, maltose, sugar syrups", gstRate: 18, chapter: "Chapter 17", category: "Sugar & Confectionery", type: "goods" },
  { hsn: "1703", description: "Molasses resulting from extraction or refining of sugar", gstRate: 28, chapter: "Chapter 17", category: "Sugar & Confectionery", type: "goods" },
  { hsn: "1704", description: "Sugar confectionery — boiled sweets, toffees, chewing gum (not cocoa)", gstRate: 18, chapter: "Chapter 17", category: "Sugar & Confectionery", type: "goods" },
  // ─── CHAPTER 18 — COCOA & CHOCOLATE ──────────────────────────────────────
  { hsn: "1801", description: "Cocoa beans, whole or broken, raw or roasted", gstRate: 5, chapter: "Chapter 18", category: "Cocoa & Chocolate", type: "goods" },
  { hsn: "1802", description: "Cocoa shells, husks, skins and other cocoa waste", gstRate: 5, chapter: "Chapter 18", category: "Cocoa & Chocolate", type: "goods" },
  { hsn: "1803", description: "Cocoa paste, not defatted", gstRate: 18, chapter: "Chapter 18", category: "Cocoa & Chocolate", type: "goods" },
  { hsn: "1804", description: "Cocoa butter, fat and oil", gstRate: 18, chapter: "Chapter 18", category: "Cocoa & Chocolate", type: "goods" },
  { hsn: "1805", description: "Cocoa powder, not sweetened", gstRate: 18, chapter: "Chapter 18", category: "Cocoa & Chocolate", type: "goods" },
  { hsn: "1806", description: "Chocolate and other food preparations containing cocoa", gstRate: 18, chapter: "Chapter 18", category: "Cocoa & Chocolate", type: "goods" },
  // ─── CHAPTER 22 — BEVERAGES ───────────────────────────────────────────────
  { hsn: "2201", description: "Waters — mineral waters, aerated waters, not sweetened/flavoured", gstRate: 0, chapter: "Chapter 22", category: "Beverages", type: "goods" },
  { hsn: "2202", description: "Sweetened/flavoured waters and non-alcoholic beverages — soft drinks, energy drinks", gstRate: 28, chapter: "Chapter 22", category: "Beverages", type: "goods", cess: "12%", notes: "Fruit pulp/juice based drinks 12%" },
  { hsn: "2203", description: "Beer made from malt", gstRate: 28, chapter: "Chapter 22", category: "Beverages", type: "goods", cess: "Applicable" },
  { hsn: "2204", description: "Wine of fresh grapes — including fortified wines", gstRate: 0, chapter: "Chapter 22", category: "Beverages", type: "goods", notes: "State levies apply; alcohol not in GST" },
  { hsn: "2208", description: "Spirits, liqueurs and other spirituous beverages — whisky, rum, gin, vodka", gstRate: 0, chapter: "Chapter 22", category: "Beverages", type: "goods", notes: "Not under GST; state VAT/excise applicable" },
  { hsn: "2209", description: "Vinegar and substitutes for vinegar obtained from acetic acid", gstRate: 12, chapter: "Chapter 22", category: "Beverages", type: "goods" },
  // ─── CHAPTER 24 — TOBACCO ─────────────────────────────────────────────────
  { hsn: "2401", description: "Unmanufactured tobacco; tobacco refuse", gstRate: 5, chapter: "Chapter 24", category: "Tobacco", type: "goods" },
  { hsn: "2402", description: "Cigars, cheroots, cigarillos and cigarettes of tobacco", gstRate: 28, chapter: "Chapter 24", category: "Tobacco", type: "goods", cess: "Applicable — varies by length" },
  { hsn: "2403", description: "Other manufactured tobacco — hookah tobacco, gutka, chewing tobacco", gstRate: 28, chapter: "Chapter 24", category: "Tobacco", type: "goods", cess: "Applicable" },
  // ─── CHAPTER 27 — PETROLEUM & FUELS ──────────────────────────────────────
  { hsn: "2701", description: "Coal; briquettes, ovoids and similar solid fuels manufactured from coal", gstRate: 5, chapter: "Chapter 27", category: "Fuels & Petroleum", type: "goods" },
  { hsn: "2702", description: "Lignite, whether or not agglomerated, excluding jet", gstRate: 5, chapter: "Chapter 27", category: "Fuels & Petroleum", type: "goods" },
  { hsn: "2703", description: "Peat (including peat litter), whether or not agglomerated", gstRate: 5, chapter: "Chapter 27", category: "Fuels & Petroleum", type: "goods" },
  { hsn: "2710", description: "Petroleum oils and oils from bituminous minerals — HSD, LDO, furnace oil, lubricating oil", gstRate: 18, chapter: "Chapter 27", category: "Fuels & Petroleum", type: "goods", notes: "Petrol, diesel, ATF outside GST; subject to excise duty + VAT" },
  { hsn: "2711", description: "Petroleum gases — LPG, natural gas, propane, butane, acetylene", gstRate: 5, chapter: "Chapter 27", category: "Fuels & Petroleum", type: "goods", notes: "LPG for domestic use 5%" },
  // ─── CHAPTER 28 — CHEMICALS ───────────────────────────────────────────────
  { hsn: "2801", description: "Fluorine, chlorine, bromine and iodine", gstRate: 18, chapter: "Chapter 28", category: "Chemicals & Pharma", type: "goods" },
  { hsn: "2804", description: "Hydrogen, rare gases and other non-metals", gstRate: 12, chapter: "Chapter 28", category: "Chemicals & Pharma", type: "goods" },
  { hsn: "2814", description: "Ammonia, anhydrous or in aqueous solution", gstRate: 18, chapter: "Chapter 28", category: "Chemicals & Pharma", type: "goods" },
  { hsn: "2835", description: "Phosphinates, phosphonates, phosphates, polyphosphates", gstRate: 18, chapter: "Chapter 28", category: "Chemicals & Pharma", type: "goods" },
  // ─── CHAPTER 30 — PHARMACEUTICALS ────────────────────────────────────────
  { hsn: "3001", description: "Dried glands, organo-therapeutic preparations — hormones, human blood", gstRate: 12, chapter: "Chapter 30", category: "Pharmaceuticals", type: "goods" },
  { hsn: "3002", description: "Human blood, vaccines, toxins — COVID vaccines, antisera", gstRate: 5, chapter: "Chapter 30", category: "Pharmaceuticals", type: "goods" },
  { hsn: "3003", description: "Medicaments — mixed products for therapeutic use, not measured doses", gstRate: 12, chapter: "Chapter 30", category: "Pharmaceuticals", type: "goods" },
  { hsn: "3004", description: "Medicines — dosage form, retail sale — tablets, capsules, syrups, injections", gstRate: 12, chapter: "Chapter 30", category: "Pharmaceuticals", type: "goods" },
  { hsn: "3005", description: "Wadding, gauze, bandages, adhesive dressings, medical grade", gstRate: 12, chapter: "Chapter 30", category: "Pharmaceuticals", type: "goods" },
  { hsn: "3006", description: "Surgical catgut, laminaria tents, sterile surgical/dental adhesion barriers", gstRate: 12, chapter: "Chapter 30", category: "Pharmaceuticals", type: "goods" },
  // ─── CHAPTER 33 — COSMETICS & TOILETRIES ─────────────────────────────────
  { hsn: "3301", description: "Essential oils — rose, jasmine, sandalwood, peppermint, eucalyptus", gstRate: 18, chapter: "Chapter 33", category: "Cosmetics & Toiletries", type: "goods" },
  { hsn: "3303", description: "Perfumes and toilet waters", gstRate: 28, chapter: "Chapter 33", category: "Cosmetics & Toiletries", type: "goods" },
  { hsn: "3304", description: "Beauty / make-up preparations — lip, eye, nail, face cosmetics, kajal", gstRate: 28, chapter: "Chapter 33", category: "Cosmetics & Toiletries", type: "goods" },
  { hsn: "3305", description: "Preparations for use on hair — shampoo, hair creams, hair dyes, hair oils", gstRate: 28, chapter: "Chapter 33", category: "Cosmetics & Toiletries", type: "goods" },
  { hsn: "3306", description: "Oral hygiene — toothpaste, tooth powder, mouthwash, dental floss", gstRate: 18, chapter: "Chapter 33", category: "Cosmetics & Toiletries", type: "goods" },
  { hsn: "3307", description: "Pre-shave, shaving/after-shave preparations, deodorants, bath preparations", gstRate: 28, chapter: "Chapter 33", category: "Cosmetics & Toiletries", type: "goods" },
  // ─── CHAPTER 39 — PLASTICS ────────────────────────────────────────────────
  { hsn: "3901", description: "Polymers of ethylene in primary forms — HDPE, LDPE, LLDPE", gstRate: 18, chapter: "Chapter 39", category: "Plastics & Polymers", type: "goods" },
  { hsn: "3902", description: "Polymers of propylene or other olefins — polypropylene (PP)", gstRate: 18, chapter: "Chapter 39", category: "Plastics & Polymers", type: "goods" },
  { hsn: "3903", description: "Polymers of styrene — polystyrene (PS), ABS, SAN", gstRate: 18, chapter: "Chapter 39", category: "Plastics & Polymers", type: "goods" },
  { hsn: "3904", description: "Polymers of vinyl chloride — PVC", gstRate: 18, chapter: "Chapter 39", category: "Plastics & Polymers", type: "goods" },
  { hsn: "3920", description: "Other plastic plates, sheets, film, foil and strip, non-cellular", gstRate: 18, chapter: "Chapter 39", category: "Plastics & Polymers", type: "goods" },
  { hsn: "3926", description: "Other plastic articles — plastic furniture, containers, bags, components", gstRate: 18, chapter: "Chapter 39", category: "Plastics & Polymers", type: "goods" },
  // ─── CHAPTER 44 — WOOD & WOOD PRODUCTS ───────────────────────────────────
  { hsn: "4401", description: "Fuel wood, wood chips, wood pellets and other forms of wood", gstRate: 5, chapter: "Chapter 44", category: "Wood & Wood Products", type: "goods" },
  { hsn: "4403", description: "Wood in the rough — logs, poles, sawn wood, sleepers", gstRate: 18, chapter: "Chapter 44", category: "Wood & Wood Products", type: "goods" },
  { hsn: "4407", description: "Wood sawn, chipped lengthwise, sliced or peeled (planks, boards)", gstRate: 12, chapter: "Chapter 44", category: "Wood & Wood Products", type: "goods" },
  { hsn: "4410", description: "Particle board, OSB and similar board of wood — MDF, HDF", gstRate: 12, chapter: "Chapter 44", category: "Wood & Wood Products", type: "goods" },
  { hsn: "4412", description: "Plywood, veneered panels and similar laminated wood", gstRate: 12, chapter: "Chapter 44", category: "Wood & Wood Products", type: "goods" },
  { hsn: "4418", description: "Builders' joinery of wood — doors, windows, door frames, staircases", gstRate: 12, chapter: "Chapter 44", category: "Wood & Wood Products", type: "goods" },
  // ─── CHAPTER 48 — PAPER & PAPERBOARD ─────────────────────────────────────
  { hsn: "4801", description: "Newsprint in rolls or sheets", gstRate: 5, chapter: "Chapter 48", category: "Paper & Paper Products", type: "goods" },
  { hsn: "4802", description: "Uncoated paper and paperboard for writing, printing — A4 paper, notebooks", gstRate: 12, chapter: "Chapter 48", category: "Paper & Paper Products", type: "goods" },
  { hsn: "4804", description: "Unbleached kraft paper and paperboard — brown paper, wrapping paper", gstRate: 12, chapter: "Chapter 48", category: "Paper & Paper Products", type: "goods" },
  { hsn: "4811", description: "Paper coated/impregnated with plastics — bituminised, tar paper, carbon paper", gstRate: 18, chapter: "Chapter 48", category: "Paper & Paper Products", type: "goods" },
  { hsn: "4817", description: "Envelopes, letter cards, plain postcards, correspondence cards", gstRate: 12, chapter: "Chapter 48", category: "Paper & Paper Products", type: "goods" },
  { hsn: "4819", description: "Cartons, boxes, cases, bags and packing containers of paper", gstRate: 18, chapter: "Chapter 48", category: "Paper & Paper Products", type: "goods" },
  { hsn: "4820", description: "Registers, account books, note books, diaries, exercise books, binders", gstRate: 12, chapter: "Chapter 48", category: "Paper & Paper Products", type: "goods" },
  // ─── CHAPTER 50-63 — TEXTILES ─────────────────────────────────────────────
  { hsn: "5007", description: "Woven fabrics of silk or silk waste", gstRate: 5, chapter: "Chapter 50", category: "Textiles & Clothing", type: "goods" },
  { hsn: "5101", description: "Wool, not carded or combed — greasy, degreased, carbonised", gstRate: 0, chapter: "Chapter 51", category: "Textiles & Clothing", type: "goods" },
  { hsn: "5201", description: "Cotton, not carded or combed — raw cotton, cotton waste", gstRate: 0, chapter: "Chapter 52", category: "Textiles & Clothing", type: "goods" },
  { hsn: "5208", description: "Woven fabrics of cotton, ≥85% cotton, ≤200 g/m²", gstRate: 5, chapter: "Chapter 52", category: "Textiles & Clothing", type: "goods" },
  { hsn: "5402", description: "High tenacity yarn of nylon / polyamide filaments", gstRate: 12, chapter: "Chapter 54", category: "Textiles & Clothing", type: "goods" },
  { hsn: "5407", description: "Woven fabrics of synthetic filament yarn — polyester, nylon, viscose", gstRate: 5, chapter: "Chapter 54", category: "Textiles & Clothing", type: "goods" },
  { hsn: "6101", description: "Men's overcoats, car-coats, capes, cloaks — knitted or crocheted", gstRate: 5, chapter: "Chapter 61", category: "Textiles & Clothing", type: "goods", notes: "If sale value ≤ ₹1000; 12% above ₹1000" },
  { hsn: "6105", description: "Men's shirts — knitted or crocheted", gstRate: 5, chapter: "Chapter 61", category: "Textiles & Clothing", type: "goods", notes: "If sale value ≤ ₹1000; 12% above ₹1000" },
  { hsn: "6109", description: "T-shirts, singlets and other vests — knitted or crocheted", gstRate: 5, chapter: "Chapter 61", category: "Textiles & Clothing", type: "goods", notes: "If sale value ≤ ₹1000; 12% above ₹1000" },
  { hsn: "6201", description: "Men's overcoats, car-coats, anoraks, windcheaters, wind-jackets — not knitted", gstRate: 5, chapter: "Chapter 62", category: "Textiles & Clothing", type: "goods" },
  { hsn: "6203", description: "Men's suits, ensembles, jackets, blazers, trousers, bib and brace overalls", gstRate: 5, chapter: "Chapter 62", category: "Textiles & Clothing", type: "goods", notes: "12% if sale value > ₹1000" },
  { hsn: "6211", description: "Track suits, ski suits, swimwear — not knitted or crocheted", gstRate: 12, chapter: "Chapter 62", category: "Textiles & Clothing", type: "goods" },
  // ─── CHAPTER 64 — FOOTWEAR ────────────────────────────────────────────────
  { hsn: "6401", description: "Waterproof footwear with rubber/plastic outer soles and uppers", gstRate: 18, chapter: "Chapter 64", category: "Footwear", type: "goods" },
  { hsn: "6403", description: "Footwear with rubber/plastic soles and leather uppers — formal shoes", gstRate: 18, chapter: "Chapter 64", category: "Footwear", type: "goods", notes: "5% if retail sale price ≤ ₹1000" },
  { hsn: "6404", description: "Footwear with rubber/plastic soles and textile uppers — canvas shoes, sneakers", gstRate: 18, chapter: "Chapter 64", category: "Footwear", type: "goods", notes: "5% if retail sale price ≤ ₹1000" },
  { hsn: "6405", description: "Other footwear — hawai chappals, rubber slippers", gstRate: 5, chapter: "Chapter 64", category: "Footwear", type: "goods" },
  // ─── CHAPTER 72-73 — IRON & STEEL ────────────────────────────────────────
  { hsn: "7201", description: "Pig iron and spiegeleisen in pigs, blocks or other primary forms", gstRate: 18, chapter: "Chapter 72", category: "Iron & Steel", type: "goods" },
  { hsn: "7204", description: "Ferrous waste and scrap; remelting scrap ingots of iron or steel", gstRate: 18, chapter: "Chapter 72", category: "Iron & Steel", type: "goods" },
  { hsn: "7207", description: "Semi-finished products of iron or non-alloy steel — billets, blooms, slabs", gstRate: 18, chapter: "Chapter 72", category: "Iron & Steel", type: "goods" },
  { hsn: "7210", description: "Flat-rolled products of iron or non-alloy steel, ≥600mm wide — HR/CR coils, sheets", gstRate: 18, chapter: "Chapter 72", category: "Iron & Steel", type: "goods" },
  { hsn: "7213", description: "Bars and rods, hot-rolled, coiled — TMT steel bars, wire rods", gstRate: 18, chapter: "Chapter 72", category: "Iron & Steel", type: "goods" },
  { hsn: "7216", description: "Angles, shapes and sections of iron or non-alloy steel — channels, angles, beams", gstRate: 18, chapter: "Chapter 72", category: "Iron & Steel", type: "goods" },
  { hsn: "7308", description: "Structures and parts of structures — iron, steel bridges, towers, columns, fabricated structural", gstRate: 18, chapter: "Chapter 73", category: "Iron & Steel", type: "goods" },
  // ─── CHAPTER 84 — MACHINERY ───────────────────────────────────────────────
  { hsn: "8401", description: "Nuclear reactors, fuel elements (cartridges) for nuclear reactors", gstRate: 5, chapter: "Chapter 84", category: "Machinery & Equipment", type: "goods" },
  { hsn: "8413", description: "Pumps for liquids — centrifugal pumps, submersible pumps, hand pumps", gstRate: 12, chapter: "Chapter 84", category: "Machinery & Equipment", type: "goods" },
  { hsn: "8414", description: "Air/vacuum pumps, compressors, fans — air conditioner compressors", gstRate: 18, chapter: "Chapter 84", category: "Machinery & Equipment", type: "goods" },
  { hsn: "8415", description: "Air conditioning machines — window/split AC, central air conditioning", gstRate: 28, chapter: "Chapter 84", category: "Machinery & Equipment", type: "goods" },
  { hsn: "8418", description: "Refrigerators, freezers, heat pumps — household refrigerators, deep freezers", gstRate: 18, chapter: "Chapter 84", category: "Machinery & Equipment", type: "goods", notes: "Refrigerators with ≤300L capacity: 18%" },
  { hsn: "8422", description: "Dishwashing machines; machinery for cleaning, filling, labelling bottles", gstRate: 18, chapter: "Chapter 84", category: "Machinery & Equipment", type: "goods" },
  { hsn: "8423", description: "Weighing machinery — digital weighing scales, platform scales", gstRate: 18, chapter: "Chapter 84", category: "Machinery & Equipment", type: "goods" },
  { hsn: "8433", description: "Harvesting machinery — combine harvesters, mowing machines, threshers", gstRate: 12, chapter: "Chapter 84", category: "Machinery & Equipment", type: "goods" },
  { hsn: "8450", description: "Household or laundry-type washing machines — semi-automatic, fully automatic", gstRate: 28, chapter: "Chapter 84", category: "Machinery & Equipment", type: "goods" },
  { hsn: "8471", description: "Automatic data processing machines — computers, laptops, tablets, servers", gstRate: 18, chapter: "Chapter 84", category: "Machinery & Equipment", type: "goods" },
  { hsn: "8472", description: "Other office machines — photocopiers, printers (without ink), franking machines", gstRate: 18, chapter: "Chapter 84", category: "Machinery & Equipment", type: "goods" },
  { hsn: "8473", description: "Parts and accessories for computers, printers and office machines", gstRate: 18, chapter: "Chapter 84", category: "Machinery & Equipment", type: "goods" },
  // ─── CHAPTER 85 — ELECTRONICS ─────────────────────────────────────────────
  { hsn: "8501", description: "Electric motors and generators — DC motors, AC motors, generators", gstRate: 18, chapter: "Chapter 85", category: "Electronics & Electrical", type: "goods" },
  { hsn: "8504", description: "Electrical transformers, static converters — UPS, inverters, stabilisers", gstRate: 18, chapter: "Chapter 85", category: "Electronics & Electrical", type: "goods" },
  { hsn: "8507", description: "Electric accumulators — lithium-ion batteries, lead-acid batteries, EV batteries", gstRate: 18, chapter: "Chapter 85", category: "Electronics & Electrical", type: "goods" },
  { hsn: "8516", description: "Electric instant or storage water heaters — geysers, electric irons, microwave ovens", gstRate: 28, chapter: "Chapter 85", category: "Electronics & Electrical", type: "goods" },
  { hsn: "8517", description: "Telephone sets, smartphones, routers, modems, network equipment", gstRate: 18, chapter: "Chapter 85", category: "Electronics & Electrical", type: "goods" },
  { hsn: "8518", description: "Microphones, loudspeakers, headphones, audio amplifiers", gstRate: 18, chapter: "Chapter 85", category: "Electronics & Electrical", type: "goods" },
  { hsn: "8519", description: "Sound recording/reproducing apparatus — MP3 players, turntables", gstRate: 28, chapter: "Chapter 85", category: "Electronics & Electrical", type: "goods" },
  { hsn: "8521", description: "Video recording/reproducing apparatus — DVRs, Blu-ray players", gstRate: 28, chapter: "Chapter 85", category: "Electronics & Electrical", type: "goods" },
  { hsn: "8523", description: "Discs, tapes, solid-state storage — USB drives, SD cards, SSDs, pen drives", gstRate: 18, chapter: "Chapter 85", category: "Electronics & Electrical", type: "goods" },
  { hsn: "8525", description: "Transmission apparatus for radio/TV — CCTV cameras, digital cameras, webcams", gstRate: 18, chapter: "Chapter 85", category: "Electronics & Electrical", type: "goods" },
  { hsn: "8527", description: "Reception apparatus for radio broadcasting — FM radio, car stereos", gstRate: 18, chapter: "Chapter 85", category: "Electronics & Electrical", type: "goods" },
  { hsn: "8528", description: "Monitors, projectors, TVs — LED TV, OLED TV, computer monitors", gstRate: 28, chapter: "Chapter 85", category: "Electronics & Electrical", type: "goods", notes: "TVs ≤32 inches: 18%" },
  { hsn: "8536", description: "Electrical switches, relays, fuses, plugs, sockets — switchgear", gstRate: 18, chapter: "Chapter 85", category: "Electronics & Electrical", type: "goods" },
  { hsn: "8544", description: "Insulated wire, cables — power cables, coaxial cable, optical fibre cable", gstRate: 18, chapter: "Chapter 85", category: "Electronics & Electrical", type: "goods" },
  // ─── CHAPTER 87 — VEHICLES ────────────────────────────────────────────────
  { hsn: "8701", description: "Tractors — agricultural tractors, road tractors for semi-trailers", gstRate: 12, chapter: "Chapter 87", category: "Vehicles", type: "goods" },
  { hsn: "8702", description: "Motor vehicles for transport of ≥10 persons — buses, minibuses", gstRate: 28, chapter: "Chapter 87", category: "Vehicles", type: "goods", cess: "15%" },
  { hsn: "8703", description: "Motor cars and vehicles for transport of persons — cars, jeeps, SUVs", gstRate: 28, chapter: "Chapter 87", category: "Vehicles", type: "goods", cess: "1–22% based on engine capacity & length", notes: "EVs 5%" },
  { hsn: "8704", description: "Motor vehicles for transport of goods — trucks, lorries, LCVs, HCVs", gstRate: 28, chapter: "Chapter 87", category: "Vehicles", type: "goods" },
  { hsn: "8711", description: "Motorcycles (including mopeds), cycles fitted with auxiliary motor — bikes, scooters", gstRate: 28, chapter: "Chapter 87", category: "Vehicles", type: "goods", cess: "3% on engine >350cc" },
  { hsn: "8712", description: "Bicycles and other cycles, not motorised", gstRate: 12, chapter: "Chapter 87", category: "Vehicles", type: "goods" },
  { hsn: "8714", description: "Parts and accessories for motorcycles and bicycles", gstRate: 28, chapter: "Chapter 87", category: "Vehicles", type: "goods" },
  // ─── CHAPTER 90 — OPTICAL & MEDICAL INSTRUMENTS ──────────────────────────
  { hsn: "9001", description: "Optical fibres, optical fibre bundles and cables; optical sheets, lenses, spectacle lenses", gstRate: 12, chapter: "Chapter 90", category: "Medical & Optical", type: "goods" },
  { hsn: "9003", description: "Frames and mountings for spectacles, goggles or similar articles", gstRate: 12, chapter: "Chapter 90", category: "Medical & Optical", type: "goods" },
  { hsn: "9004", description: "Spectacles, goggles and similar — corrective, sunglasses, protective", gstRate: 12, chapter: "Chapter 90", category: "Medical & Optical", type: "goods" },
  { hsn: "9018", description: "Instruments for medical, surgical, dental, veterinary sciences — syringes, catheters, stethoscopes, MRI machines", gstRate: 12, chapter: "Chapter 90", category: "Medical & Optical", type: "goods" },
  { hsn: "9019", description: "Mechano-therapy appliances; massage apparatus; ozone therapy, oxygen therapy apparatus", gstRate: 12, chapter: "Chapter 90", category: "Medical & Optical", type: "goods" },
  { hsn: "9021", description: "Orthopaedic appliances — hearing aids, pacemakers, artificial joints, dentures", gstRate: 5, chapter: "Chapter 90", category: "Medical & Optical", type: "goods" },
  // ─── CHAPTER 94 — FURNITURE ───────────────────────────────────────────────
  { hsn: "9401", description: "Seats — chairs, sofas, office chairs, car seats (not barber/dental chairs)", gstRate: 18, chapter: "Chapter 94", category: "Furniture & Fittings", type: "goods" },
  { hsn: "9402", description: "Medical, surgical, dental or veterinary furniture — operating tables, hospital beds", gstRate: 12, chapter: "Chapter 94", category: "Furniture & Fittings", type: "goods" },
  { hsn: "9403", description: "Other furniture — office furniture, wooden furniture, metal furniture, plastic furniture", gstRate: 18, chapter: "Chapter 94", category: "Furniture & Fittings", type: "goods" },
  { hsn: "9404", description: "Mattress supports, mattresses, sleeping bags, pillows, quilts, cushions", gstRate: 12, chapter: "Chapter 94", category: "Furniture & Fittings", type: "goods", notes: "Coir products 5%" },
  { hsn: "9405", description: "Luminaires, lamps and light fittings — LED lights, tube lights, bulbs, chandeliers", gstRate: 12, chapter: "Chapter 94", category: "Furniture & Fittings", type: "goods" },
  // ─── CHAPTER 95 — TOYS & SPORTS ───────────────────────────────────────────
  { hsn: "9503", description: "Tricycles, scooters, pedal cars, dolls, toy vehicles, toy construction sets, toy instruments", gstRate: 12, chapter: "Chapter 95", category: "Toys & Sports", type: "goods" },
  { hsn: "9504", description: "Video game consoles, game machines — PlayStation, Xbox, gaming machines", gstRate: 28, chapter: "Chapter 95", category: "Toys & Sports", type: "goods" },
  { hsn: "9506", description: "Equipment for sports — bats, balls, racquets, golf clubs, skis, gym equipment", gstRate: 12, chapter: "Chapter 95", category: "Toys & Sports", type: "goods" },
  { hsn: "9507", description: "Fishing rods, fish-hooks, fishing lines and other fish catching equipment", gstRate: 12, chapter: "Chapter 95", category: "Toys & Sports", type: "goods" },
  // ─── CHAPTER 96 — MISC MANUFACTURED ARTICLES ─────────────────────────────
  { hsn: "9601", description: "Worked ivory, bone, tortoise-shell, horn, antlers, coral, mother of pearl", gstRate: 12, chapter: "Chapter 96", category: "Miscellaneous", type: "goods" },
  { hsn: "9603", description: "Brooms, brushes, toothbrushes, paint brushes, shoe brushes", gstRate: 18, chapter: "Chapter 96", category: "Miscellaneous", type: "goods" },
  { hsn: "9605", description: "Travel sets for personal toilet, sewing, shoe/clothes cleaning", gstRate: 18, chapter: "Chapter 96", category: "Miscellaneous", type: "goods" },
  { hsn: "9613", description: "Cigarette lighters and other lighters — piezoelectric gas lighters, matchboxes", gstRate: 28, chapter: "Chapter 96", category: "Miscellaneous", type: "goods" },
  { hsn: "9619", description: "Sanitary towels (pads)/tampons, napkins/liners — sanitary napkins, baby diapers", gstRate: 0, chapter: "Chapter 96", category: "Miscellaneous", type: "goods" },
  // ─── GOLD & PRECIOUS METALS ───────────────────────────────────────────────
  { hsn: "7101", description: "Pearls, natural or cultured, whether worked or not", gstRate: 0, chapter: "Chapter 71", category: "Gold & Jewellery", type: "goods" },
  { hsn: "7102", description: "Diamonds — natural, industrial, worked or unworked", gstRate: 0, chapter: "Chapter 71", category: "Gold & Jewellery", type: "goods" },
  { hsn: "7103", description: "Precious stones and semi-precious stones — rubies, emeralds, sapphires", gstRate: 0, chapter: "Chapter 71", category: "Gold & Jewellery", type: "goods" },
  { hsn: "7106", description: "Silver — unwrought, powder or semi-manufactured forms", gstRate: 3, chapter: "Chapter 71", category: "Gold & Jewellery", type: "goods" },
  { hsn: "7108", description: "Gold — unwrought, semi-manufactured or in powder form", gstRate: 3, chapter: "Chapter 71", category: "Gold & Jewellery", type: "goods" },
  { hsn: "7113", description: "Jewellery articles and parts — gold jewellery, silver jewellery, imitation jewellery", gstRate: 3, chapter: "Chapter 71", category: "Gold & Jewellery", type: "goods" },
  { hsn: "7114", description: "Articles of goldsmiths' / silversmiths' wares — trophies, gold coins", gstRate: 3, chapter: "Chapter 71", category: "Gold & Jewellery", type: "goods" },

  // ══════════════════════════════════════════════════════════════════════════
  // SAC CODES — SERVICES
  // ══════════════════════════════════════════════════════════════════════════

  // ─── SAC 9954 — CONSTRUCTION ──────────────────────────────────────────────
  { hsn: "9954", description: "Construction services of buildings, civil engineering works, infrastructure", gstRate: 18, chapter: "SAC 9954", category: "Construction Services", type: "services" },
  { hsn: "995411", description: "Construction of residential buildings — independent houses, flats, apartments", gstRate: 5, chapter: "SAC 9954", category: "Construction Services", type: "services", notes: "For affordable housing projects 1%" },
  { hsn: "995412", description: "Construction of other residential buildings — hotels, hostels, old-age homes", gstRate: 18, chapter: "SAC 9954", category: "Construction Services", type: "services" },
  { hsn: "995413", description: "Construction of commercial buildings — offices, shops, malls, IT parks", gstRate: 18, chapter: "SAC 9954", category: "Construction Services", type: "services" },
  { hsn: "995416", description: "Construction of road, highways, bridges, tunnels, railways", gstRate: 12, chapter: "SAC 9954", category: "Construction Services", type: "services" },
  { hsn: "995419", description: "Other construction services — dams, water treatment plants, power plants", gstRate: 12, chapter: "SAC 9954", category: "Construction Services", type: "services" },
  // ─── SAC 9961-9962 — TRADE SERVICES ──────────────────────────────────────
  { hsn: "9961", description: "Wholesale trade services — commission agents, brokers, auctioneers", gstRate: 18, chapter: "SAC 9961", category: "Trade Services", type: "services" },
  { hsn: "9962", description: "Retail trade services — retailing commission, franchise services", gstRate: 18, chapter: "SAC 9962", category: "Trade Services", type: "services" },
  // ─── SAC 9963 — ACCOMMODATION & FOOD SERVICES ────────────────────────────
  { hsn: "9963", description: "Accommodation and food / beverage services", gstRate: 12, chapter: "SAC 9963", category: "Food & Accommodation", type: "services" },
  { hsn: "996311", description: "Room accommodation in hotels, inns, guest houses, clubs — tariff ≤ ₹7500", gstRate: 12, chapter: "SAC 9963", category: "Food & Accommodation", type: "services" },
  { hsn: "996312", description: "Room accommodation in hotels, resorts — tariff > ₹7500 per day", gstRate: 18, chapter: "SAC 9963", category: "Food & Accommodation", type: "services" },
  { hsn: "996321", description: "Food/beverages supplied in restaurants having no AC — restaurant services", gstRate: 5, chapter: "SAC 9963", category: "Food & Accommodation", type: "services" },
  { hsn: "996322", description: "Food/beverages supplied in AC restaurants (without liquor licence)", gstRate: 5, chapter: "SAC 9963", category: "Food & Accommodation", type: "services" },
  { hsn: "996323", description: "Food/beverages supplied in restaurants with liquor licence", gstRate: 18, chapter: "SAC 9963", category: "Food & Accommodation", type: "services" },
  { hsn: "996329", description: "Catering services — outdoor catering, banquet halls, canteen services", gstRate: 18, chapter: "SAC 9963", category: "Food & Accommodation", type: "services", notes: "5% if no ITC availed" },
  // ─── SAC 9964 — TRANSPORT OF PASSENGERS ──────────────────────────────────
  { hsn: "9964", description: "Passenger transport services — rail, road, air, water", gstRate: 0, chapter: "SAC 9964", category: "Transport Services", type: "services" },
  { hsn: "996411", description: "Rail transport of passengers — trains, metros (non-AC exempt)", gstRate: 0, chapter: "SAC 9964", category: "Transport Services", type: "services", notes: "AC first class / AC coaches: 5%" },
  { hsn: "996421", description: "Road transport of passengers — buses, taxis, auto, cab aggregators (Ola, Uber)", gstRate: 5, chapter: "SAC 9964", category: "Transport Services", type: "services" },
  { hsn: "996431", description: "Air transport of passengers — domestic flights (economy class)", gstRate: 5, chapter: "SAC 9964", category: "Transport Services", type: "services" },
  { hsn: "996432", description: "Air transport of passengers — business class flights, domestic & international", gstRate: 12, chapter: "SAC 9964", category: "Transport Services", type: "services" },
  // ─── SAC 9965 — TRANSPORT OF GOODS ───────────────────────────────────────
  { hsn: "9965", description: "Goods transport services — road, rail, air, sea freight", gstRate: 0, chapter: "SAC 9965", category: "Transport Services", type: "services" },
  { hsn: "996511", description: "Road transport of goods — trucks, lorries, GTA (Goods Transport Agency)", gstRate: 5, chapter: "SAC 9965", category: "Transport Services", type: "services", notes: "If GTA pays GST (RCM also applicable)" },
  { hsn: "996512", description: "Refrigerated road transport of goods — cold chain logistics", gstRate: 12, chapter: "SAC 9965", category: "Transport Services", type: "services" },
  { hsn: "996521", description: "Rail transport of goods — Indian Railways freight services", gstRate: 5, chapter: "SAC 9965", category: "Transport Services", type: "services" },
  { hsn: "996531", description: "Air transport of goods — air cargo, courier services (air)", gstRate: 18, chapter: "SAC 9965", category: "Transport Services", type: "services" },
  { hsn: "996541", description: "Sea/water transport of goods — coastal shipping, inland water transport", gstRate: 5, chapter: "SAC 9965", category: "Transport Services", type: "services" },
  // ─── SAC 9966 — SUPPORT SERVICES (TRANSPORT) ─────────────────────────────
  { hsn: "9966", description: "Rental/leasing of transport vehicles — car rental, truck hire", gstRate: 18, chapter: "SAC 9966", category: "Transport Services", type: "services" },
  // ─── SAC 9971 — FINANCIAL & INSURANCE SERVICES ───────────────────────────
  { hsn: "9971", description: "Financial and related services — banking, credit, insurance", gstRate: 18, chapter: "SAC 9971", category: "Financial Services", type: "services" },
  { hsn: "997111", description: "Central banking and related services — RBI services (exempt)", gstRate: 0, chapter: "SAC 9971", category: "Financial Services", type: "services" },
  { hsn: "997119", description: "Other deposit-taking services — commercial banking, cooperative banking", gstRate: 18, chapter: "SAC 9971", category: "Financial Services", type: "services" },
  { hsn: "997121", description: "Credit granting services — personal loans, housing loans, business loans, credit card services", gstRate: 18, chapter: "SAC 9971", category: "Financial Services", type: "services" },
  { hsn: "997131", description: "Life insurance services — term insurance, endowment plans, ULIPs", gstRate: 18, chapter: "SAC 9971", category: "Financial Services", type: "services", notes: "Single premium: 1.8% of premium; Other: 4.5% first year, 2.25% subsequent" },
  { hsn: "997132", description: "Accident and health insurance services — Mediclaim, personal accident policies", gstRate: 18, chapter: "SAC 9971", category: "Financial Services", type: "services" },
  { hsn: "997133", description: "Motor vehicle insurance — two-wheeler, car, commercial vehicle insurance", gstRate: 18, chapter: "SAC 9971", category: "Financial Services", type: "services" },
  { hsn: "997141", description: "Pension and retirement fund management services", gstRate: 18, chapter: "SAC 9971", category: "Financial Services", type: "services" },
  { hsn: "997151", description: "Securities dealing and brokerage — stock broking, mutual fund distribution, DMAT", gstRate: 18, chapter: "SAC 9971", category: "Financial Services", type: "services" },
  { hsn: "997155", description: "Portfolio management services — PMS, wealth management, mutual fund advisory", gstRate: 18, chapter: "SAC 9971", category: "Financial Services", type: "services" },
  // ─── SAC 9972 — REAL ESTATE SERVICES ─────────────────────────────────────
  { hsn: "9972", description: "Real estate services — buying, selling, renting of real estate", gstRate: 18, chapter: "SAC 9972", category: "Real Estate Services", type: "services" },
  { hsn: "997211", description: "Rental/leasing of residential property — renting of house/flat/apartment for residence", gstRate: 0, chapter: "SAC 9972", category: "Real Estate Services", type: "services", notes: "Exempt for residential use; 18% if registered person rents commercial" },
  { hsn: "997212", description: "Rental/leasing of commercial property — offices, shops, warehouses, industrial premises", gstRate: 18, chapter: "SAC 9972", category: "Real Estate Services", type: "services" },
  { hsn: "997221", description: "Real estate agency services — property dealers, real estate brokers, brokerage", gstRate: 18, chapter: "SAC 9972", category: "Real Estate Services", type: "services" },
  // ─── SAC 9973 — LEASING / RENTAL SERVICES ────────────────────────────────
  { hsn: "9973", description: "Leasing and rental services without operator — equipment, machinery, vehicles", gstRate: 18, chapter: "SAC 9973", category: "Leasing & Rental", type: "services" },
  { hsn: "997311", description: "Rental of cars, buses, trucks, motorcycles without operator", gstRate: 18, chapter: "SAC 9973", category: "Leasing & Rental", type: "services" },
  { hsn: "997313", description: "Rental of agricultural and other heavy-duty equipment without operator", gstRate: 18, chapter: "SAC 9973", category: "Leasing & Rental", type: "services" },
  { hsn: "997319", description: "Rental of other machinery — computers, office equipment, photocopiers", gstRate: 18, chapter: "SAC 9973", category: "Leasing & Rental", type: "services" },
  // ─── SAC 9982 — PROFESSIONAL SERVICES ────────────────────────────────────
  { hsn: "9982", description: "Legal and accounting services — advocates, lawyers, CAs, tax consultants", gstRate: 18, chapter: "SAC 9982", category: "Professional Services", type: "services" },
  { hsn: "998211", description: "Legal advisory and representation services — advocate services, legal consultation", gstRate: 18, chapter: "SAC 9982", category: "Professional Services", type: "services", notes: "Senior advocate services under RCM" },
  { hsn: "998221", description: "Accounting, bookkeeping and auditing services — Chartered Accountant services", gstRate: 18, chapter: "SAC 9982", category: "Professional Services", type: "services" },
  { hsn: "998222", description: "Tax consultancy and preparation services — income tax, GST advisory, ITR filing", gstRate: 18, chapter: "SAC 9982", category: "Professional Services", type: "services" },
  { hsn: "998231", description: "Management consulting services — business strategy, management advisory", gstRate: 18, chapter: "SAC 9982", category: "Professional Services", type: "services" },
  { hsn: "998232", description: "Business consulting and public relations services", gstRate: 18, chapter: "SAC 9982", category: "Professional Services", type: "services" },
  // ─── SAC 9983 — OTHER PROFESSIONAL SERVICES ──────────────────────────────
  { hsn: "9983", description: "Other professional, technical and business services", gstRate: 18, chapter: "SAC 9983", category: "Professional Services", type: "services" },
  { hsn: "998311", description: "Information technology (IT) consulting and support services", gstRate: 18, chapter: "SAC 9983", category: "IT & Digital Services", type: "services" },
  { hsn: "998312", description: "IT design and development services — software development, app development, website development", gstRate: 18, chapter: "SAC 9983", category: "IT & Digital Services", type: "services" },
  { hsn: "998313", description: "Maintenance and repair services for computers and IT equipment", gstRate: 18, chapter: "SAC 9983", category: "IT & Digital Services", type: "services" },
  { hsn: "998314", description: "IT infrastructure provisioning services — hosting, cloud computing, data center services", gstRate: 18, chapter: "SAC 9983", category: "IT & Digital Services", type: "services" },
  { hsn: "998315", description: "IT enabled services — BPO, KPO, ITES, data entry services", gstRate: 18, chapter: "SAC 9983", category: "IT & Digital Services", type: "services" },
  { hsn: "998316", description: "Business process outsourcing (BPO) services — call centers, back office", gstRate: 18, chapter: "SAC 9983", category: "IT & Digital Services", type: "services" },
  { hsn: "998317", description: "Database, data processing and data storage services", gstRate: 18, chapter: "SAC 9983", category: "IT & Digital Services", type: "services" },
  { hsn: "998319", description: "Other IT and data services — SEO, digital marketing, SaaS, online platforms", gstRate: 18, chapter: "SAC 9983", category: "IT & Digital Services", type: "services" },
  { hsn: "998321", description: "Research and development services in natural and social sciences", gstRate: 18, chapter: "SAC 9983", category: "Professional Services", type: "services" },
  { hsn: "998351", description: "Architectural services — building design, urban planning, interior design services", gstRate: 18, chapter: "SAC 9983", category: "Professional Services", type: "services" },
  { hsn: "998361", description: "Engineering advisory services — structural engineering, civil engineering consultancy", gstRate: 18, chapter: "SAC 9983", category: "Professional Services", type: "services" },
  // ─── SAC 9984 — TELECOMMUNICATIONS ───────────────────────────────────────
  { hsn: "9984", description: "Telecommunications, broadcasting and information supply services", gstRate: 18, chapter: "SAC 9984", category: "Telecom & Broadcasting", type: "services" },
  { hsn: "998411", description: "Telephone communication services — mobile services, landline, ISD, STD", gstRate: 18, chapter: "SAC 9984", category: "Telecom & Broadcasting", type: "services" },
  { hsn: "998413", description: "Internet access services — broadband, Wi-Fi, leased line, internet services (ISP)", gstRate: 18, chapter: "SAC 9984", category: "Telecom & Broadcasting", type: "services" },
  { hsn: "998414", description: "TV broadcasting and cable services — DTH, cable TV, IPTV services", gstRate: 18, chapter: "SAC 9984", category: "Telecom & Broadcasting", type: "services" },
  { hsn: "998431", description: "Radio broadcasting services — FM radio, radio advertising", gstRate: 18, chapter: "SAC 9984", category: "Telecom & Broadcasting", type: "services" },
  // ─── SAC 9985 — SUPPORT SERVICES ─────────────────────────────────────────
  { hsn: "9985", description: "Support services — recruitment, event management, packaging, cleaning, security, maintenance", gstRate: 18, chapter: "SAC 9985", category: "Support Services", type: "services" },
  { hsn: "998511", description: "Executive / retained personnel search and recruitment services", gstRate: 18, chapter: "SAC 9985", category: "Support Services", type: "services" },
  { hsn: "998521", description: "Manpower supply / staffing services — temporary staffing, contract labour, outsourcing", gstRate: 18, chapter: "SAC 9985", category: "Support Services", type: "services" },
  { hsn: "998531", description: "Investigation and security services — security guards, detective agencies, CCTV surveillance", gstRate: 18, chapter: "SAC 9985", category: "Support Services", type: "services" },
  { hsn: "998532", description: "Armoured car services, cash van services, vault keeping", gstRate: 18, chapter: "SAC 9985", category: "Support Services", type: "services" },
  { hsn: "998533", description: "Event management services — conferences, exhibitions, trade fairs, concerts", gstRate: 18, chapter: "SAC 9985", category: "Support Services", type: "services" },
  { hsn: "998551", description: "Maintenance and repair services of motor vehicles — automobile servicing, car repair", gstRate: 18, chapter: "SAC 9985", category: "Support Services", type: "services" },
  { hsn: "998552", description: "Maintenance/repair of electrical household appliances — AC servicing, washing machine repair", gstRate: 18, chapter: "SAC 9985", category: "Support Services", type: "services" },
  { hsn: "998571", description: "Cleaning services — commercial cleaning, housekeeping services, janitorial services", gstRate: 18, chapter: "SAC 9985", category: "Support Services", type: "services" },
  // ─── SAC 9986 — AGRICULTURE SUPPORT SERVICES ─────────────────────────────
  { hsn: "9986", description: "Support services to agriculture, hunting, forestry, fishing, mining — custom hiring of agricultural machinery", gstRate: 0, chapter: "SAC 9986", category: "Agriculture Services", type: "services" },
  // ─── SAC 9987 — MAINTENANCE & REPAIR SERVICES ────────────────────────────
  { hsn: "9987", description: "Maintenance, repair and installation services (except construction)", gstRate: 18, chapter: "SAC 9987", category: "Repair Services", type: "services" },
  { hsn: "998714", description: "Maintenance / repair of electrical industrial/commercial machinery — generators, industrial equipment", gstRate: 18, chapter: "SAC 9987", category: "Repair Services", type: "services" },
  { hsn: "998719", description: "General maintenance and repair services — plumbing, electrical wiring, facility management", gstRate: 18, chapter: "SAC 9987", category: "Repair Services", type: "services" },
  // ─── SAC 9988 — MANUFACTURING SERVICES ───────────────────────────────────
  { hsn: "9988", description: "Manufacturing services on physical inputs owned by others — job work services", gstRate: 12, chapter: "SAC 9988", category: "Manufacturing Services", type: "services", notes: "Job work on textile: 5%; on food items: 5%" },
  // ─── SAC 9991 — PUBLIC ADMINISTRATION ────────────────────────────────────
  { hsn: "9991", description: "Public administration and other government services — visa, passport, regulatory services", gstRate: 0, chapter: "SAC 9991", category: "Government Services", type: "services" },
  // ─── SAC 9992 — EDUCATION ─────────────────────────────────────────────────
  { hsn: "9992", description: "Education services — schools, colleges, universities, coaching institutes", gstRate: 0, chapter: "SAC 9992", category: "Education Services", type: "services", notes: "Vocational training and commercial coaching: 18%" },
  { hsn: "999210", description: "Pre-primary education services — nursery, kindergarten, playschool", gstRate: 0, chapter: "SAC 9992", category: "Education Services", type: "services" },
  { hsn: "999211", description: "Primary education services (up to Class 5/6)", gstRate: 0, chapter: "SAC 9992", category: "Education Services", type: "services" },
  { hsn: "999213", description: "Secondary/higher secondary education services (Classes 9–12)", gstRate: 0, chapter: "SAC 9992", category: "Education Services", type: "services" },
  { hsn: "999214", description: "Higher education services — colleges, universities, professional degrees (MBBS, LLB, CA, etc.)", gstRate: 0, chapter: "SAC 9992", category: "Education Services", type: "services" },
  { hsn: "999215", description: "Technical and vocational education services — ITI, polytechnic, skill development", gstRate: 0, chapter: "SAC 9992", category: "Education Services", type: "services" },
  { hsn: "999293", description: "Commercial coaching and training — coaching classes, tuition centres, test prep institutes", gstRate: 18, chapter: "SAC 9992", category: "Education Services", type: "services" },
  // ─── SAC 9993 — HEALTHCARE ────────────────────────────────────────────────
  { hsn: "9993", description: "Human health and social care services — hospitals, clinics, doctors", gstRate: 0, chapter: "SAC 9993", category: "Healthcare Services", type: "services" },
  { hsn: "999311", description: "Inpatient services — hospital admissions, surgeries, ICU, operation theatre services", gstRate: 0, chapter: "SAC 9993", category: "Healthcare Services", type: "services" },
  { hsn: "999312", description: "Medical and dental services — OPD consultation, dental treatment, pathology lab, X-ray, MRI", gstRate: 0, chapter: "SAC 9993", category: "Healthcare Services", type: "services" },
  { hsn: "999313", description: "Childbirth and related services — maternity hospitals, delivery services, ante-natal care", gstRate: 0, chapter: "SAC 9993", category: "Healthcare Services", type: "services" },
  { hsn: "999314", description: "Nursing and physiotherapeutic services — physiotherapy, occupational therapy, nursing care", gstRate: 0, chapter: "SAC 9993", category: "Healthcare Services", type: "services" },
  { hsn: "999315", description: "Ambulance services — air ambulance, road ambulance", gstRate: 0, chapter: "SAC 9993", category: "Healthcare Services", type: "services" },
  // ─── SAC 9994 — SEWAGE & WASTE ────────────────────────────────────────────
  { hsn: "9994", description: "Sewage and waste collection, treatment and disposal and other environmental services", gstRate: 0, chapter: "SAC 9994", category: "Environmental Services", type: "services" },
  // ─── SAC 9995 — MEMBERSHIP ORGANISATIONS ─────────────────────────────────
  { hsn: "9995", description: "Services of membership organisations — religious, cultural, political, professional bodies", gstRate: 0, chapter: "SAC 9995", category: "Membership Services", type: "services" },
  // ─── SAC 9996 — RECREATIONAL SERVICES ────────────────────────────────────
  { hsn: "9996", description: "Recreational, cultural and sporting services — cinema, theatre, amusement parks", gstRate: 18, chapter: "SAC 9996", category: "Entertainment & Recreation", type: "services" },
  { hsn: "999611", description: "Theatre and cinema hall services — movie tickets, theatrical performances", gstRate: 12, chapter: "SAC 9996", category: "Entertainment & Recreation", type: "services", notes: "Tickets ≤ ₹100: exempt; ₹100-250: 12%; > ₹250: 18%" },
  { hsn: "999612", description: "Amusement/theme park entry and entertainment — amusement parks, rides", gstRate: 18, chapter: "SAC 9996", category: "Entertainment & Recreation", type: "services" },
  { hsn: "999621", description: "Library and archive services", gstRate: 0, chapter: "SAC 9996", category: "Entertainment & Recreation", type: "services" },
  { hsn: "999631", description: "Sports and recreation club services — gym membership, sports clubs, fitness centres", gstRate: 18, chapter: "SAC 9996", category: "Entertainment & Recreation", type: "services" },
  { hsn: "999641", description: "Online gaming services — gambling, online fantasy sports, lottery", gstRate: 28, chapter: "SAC 9996", category: "Entertainment & Recreation", type: "services" },
  // ─── SAC 9997 — OTHER SERVICES ────────────────────────────────────────────
  { hsn: "9997", description: "Other services — beauty, tailoring, photography, laundry", gstRate: 18, chapter: "SAC 9997", category: "Personal Services", type: "services" },
  { hsn: "999711", description: "Hairdressing and barbering services — haircuts, salons", gstRate: 18, chapter: "SAC 9997", category: "Personal Services", type: "services" },
  { hsn: "999712", description: "Beauty treatment services — facial, manicure, pedicure, skin care", gstRate: 18, chapter: "SAC 9997", category: "Personal Services", type: "services" },
  { hsn: "999721", description: "Funeral, cremation and undertaking services — exempt from GST", gstRate: 0, chapter: "SAC 9997", category: "Personal Services", type: "services" },
  { hsn: "999731", description: "Coin-operated laundry and dry-cleaning services", gstRate: 18, chapter: "SAC 9997", category: "Personal Services", type: "services" },
  { hsn: "999732", description: "Dry cleaning and laundry services (non-coin operated)", gstRate: 18, chapter: "SAC 9997", category: "Personal Services", type: "services" },
  { hsn: "999741", description: "Wedding photography and videography services", gstRate: 18, chapter: "SAC 9997", category: "Personal Services", type: "services" },
  { hsn: "999742", description: "Clothing and tailoring services — custom stitching, alterations, embroidery", gstRate: 5, chapter: "SAC 9997", category: "Personal Services", type: "services" },
  // ─── SAC 9998 — DOMESTIC SERVICES ────────────────────────────────────────
  { hsn: "9998", description: "Domestic services — maids, cooks, drivers employed by households", gstRate: 0, chapter: "SAC 9998", category: "Domestic Services", type: "services" },
  // ─── SAC 9999 — EXTRATERRITORIAL ORGANISATIONS ───────────────────────────
  { hsn: "9999", description: "Services provided by extraterritorial organisations and bodies — UN, World Bank, IMF, embassies", gstRate: 0, chapter: "SAC 9999", category: "International Services", type: "services" },
];

export const CATEGORIES = [
  ...new Set(HSN_DATA.map((d) => d.category))
].sort();

export const GST_RATES = [0, 3, 5, 12, 18, 28] as const;

export const CHAPTERS = [
  ...new Set(HSN_DATA.map((d) => d.chapter))
];