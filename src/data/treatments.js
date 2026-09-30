// Complete Treatment Catalog for Skin Rewind Aesthetic, Bhilai
export const TREATMENT_CATEGORIES = [
  { id: 'all', name: 'All Services', icon: 'Sparkles' },
  { id: 'face', name: 'Face Treatments', icon: 'Smile' },
  { id: 'hair', name: 'Hair Treatments', icon: 'Layers' },
  { id: 'laser', name: 'Laser Treatments', icon: 'Zap' },
  { id: 'body', name: 'Body Treatments', icon: 'Activity' },
  { id: 'spmu', name: 'Semi-Permanent Makeup', icon: 'Eye' },
  { id: 'other', name: 'Nails & Other Services', icon: 'Heart' },
];

export const TREATMENTS = [
  // ================= FACE TREATMENTS =================
  {
    id: 'hydrafacial',
    category: 'Face Treatments',
    categorySlug: 'face',
    name: 'HydraFacial MD® Experience',
    tagline: 'Deeply hydrate, vortex-cleanse & infuse radiance',
    shortDesc: 'A patented medical-grade facial that cleanses, extracts, and hydrates using customized nourishing serums.',
    fullDesc: 'The HydraFacial treatment at Skin Rewind Aesthetic is an invigorating non-invasive protocol delivering instant hydration and visible luminosity with zero downtime. Using specialized vortex-suction technology, it gently dislodges impurities while simultaneously bathing the dermis in hyaluronic acid, peptides, and botanical antioxidants.',
    image: 'https://images.unsplash.com/photo-1512290903671-17adc81fcd90?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    badge: 'Signature Treatment',
    duration: '45–60 mins',
    downtime: 'Zero downtime',
    idealFor: ['Dehydrated & dull skin', 'Clogged pores & blackheads', 'Fine dehydration lines', 'Uneven skin texture'],
    benefits: [
      'Gentle vortex extraction clears congested pores without harsh pinching',
      'Infuses medical-grade antioxidants and multi-weight hyaluronic acid',
      'Promotes immediate dewiness, clarity, and refined skin texture',
      'Non-irritating and suitable for virtually all skin types and occasions'
    ],
    targetAreas: ['Full Face', 'Neck & Décolletage', 'Back (on consultation)'],
    processSteps: [
      { step: 1, title: 'Cleanse & Peel', detail: 'Gentle exfoliation uncovers a fresh new layer of skin with soothing botanical resurfacing.' },
      { step: 2, title: 'Extract & Hydrate', detail: 'Painless vortex suction removes debris from pores while saturating skin with deep moisturizers.' },
      { step: 3, title: 'Fuse & Protect', detail: 'Nourishing antioxidants and targeted peptides are locked in to maximize long-lasting glow.' }
    ],
    faqs: [
      { q: 'Is there any redness or downtime after HydraFacial?', a: 'HydraFacial is known as the ultimate "red carpet facial" because clients leave with an immediate radiant glow and no downtime. Minor initial flushing typically subsides within 15–30 minutes.' },
      { q: 'How often should I get a HydraFacial?', a: 'For optimal skin health, hydration, and pore maintenance, we generally recommend one session every 4 to 6 weeks.' }
    ]
  },
  {
    id: 'prp-treatment-face',
    category: 'Face Treatments',
    categorySlug: 'face',
    name: 'PRP Treatment for Face',
    tagline: 'Autologous platelet therapy for collagen activation',
    shortDesc: 'Harnesses your body’s natural growth factors to stimulate collagen renewal, refine fine lines, and restore vitality.',
    fullDesc: 'Often celebrated as the natural regenerative facial, Platelet-Rich Plasma (PRP) facial rejuvenation utilizes your own concentrated biological growth factors. At Skin Rewind, our certified cosmetologist administers this procedure under strict clinical hygiene to promote cellular regeneration and cellular matrix revitalization.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    badge: 'Advanced Regenerative',
    duration: '60–75 mins',
    downtime: '24–48 hours mild pinkness',
    idealFor: ['Matured or photoaged skin', 'Acne scars & post-inflammatory marks', 'Loss of elasticity', 'Dull dermal texture'],
    benefits: [
      'Encourages natural collagen and elastin fiber synthesis',
      'Utilizes biocompatible autologous platelets from your own blood',
      'Aids in softening superficial scar tissue and fine lines',
      'Enhances natural dermal firmness and overall skin texture over time'
    ],
    targetAreas: ['Full Face', 'Under-eye Area', 'Neck & Décolletage'],
    processSteps: [
      { step: 1, title: 'Comfort & Blood Draw', detail: 'Application of topical numbing cream for 30 minutes, followed by a small, sterile blood draw.' },
      { step: 2, title: 'Centrifugation', detail: 'High-precision medical centrifugation to isolate pure platelet-rich plasma and growth factors.' },
      { step: 3, title: 'Targeted Delivery', detail: 'Micro-needling or gentle micro-infusions systematically deliver PRP into target skin layers.' }
    ],
    faqs: [
      { q: 'When can I expect to see visible results?', a: 'Because PRP works by stimulating your natural collagen production, progressive improvements in skin glow and texture appear over 3 to 6 weeks.' }
    ]
  },
  {
    id: 'chemical-peels',
    category: 'Face Treatments',
    categorySlug: 'face',
    name: 'Custom Chemical Peels',
    tagline: 'Clinical alpha & beta hydroxy acid resurfacing',
    shortDesc: 'Carefully customized dermatological peels targeting pigmentation, active breakouts, sun damage, and dead cell accumulation.',
    fullDesc: 'From gentle brightening peels (lactic and mandelic) to deeper salicylic and glycolic formulations, our customized chemical peels are tailored to your skin’s tolerance and specific concerns. We focus on controlled, safe resurfacing to reveal smooth, luminous skin.',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    badge: 'Custom Resurfacing',
    duration: '30–45 mins',
    downtime: '1–4 days mild flaking',
    idealFor: ['Hyperpigmentation & melasma', 'Sun spots & tan', 'Active acne & blackheads', 'Rough skin texture'],
    benefits: [
      'Accelerates dead cell exfoliation without harsh mechanical scratching',
      'Targets excess melanin deposits to even out discoloration',
      'Clears sebum inside pores to minimize future breakout cycles',
      'Boosts the absorption and efficacy of your daily skincare routine'
    ],
    targetAreas: ['Face', 'Neck', 'Hands', 'Back & Shoulders'],
    processSteps: [
      { step: 1, title: 'Skin Assessment', detail: 'Wood’s lamp or skin analysis to select the exact acid concentration and pH level.' },
      { step: 2, title: 'Degrease & Apply', detail: 'Gentle prep followed by timed application of the active peel solution.' },
      { step: 3, title: 'Neutralize & Calm', detail: 'Neutralization followed by a cooling barrier repair mask and broad-spectrum SPF.' }
    ],
    faqs: [
      { q: 'Will my face peel aggressively?', a: 'Modern superficial and medium peels are formulated to cause minimal to gentle microscopic flaking rather than dramatic peeling, allowing you to carry on with daily life comfortably.' }
    ]
  },
  {
    id: 'acne-treatment',
    category: 'Face Treatments',
    categorySlug: 'face',
    name: 'Targeted Acne & Blemish Care',
    tagline: 'Comprehensive clinical protocols for clearer, calmer skin',
    shortDesc: 'A holistic clinical protocol addressing active breakouts, excess sebum production, and post-acne inflammation.',
    fullDesc: 'Acne can be physically uncomfortable and emotionally taxing. Our structured acne therapy combines antiseptic pore sanitization, anti-inflammatory peels, high-frequency ozone therapy, and LED blue light to reduce Cutibacterium acnes bacteria while healing the skin barrier.',
    image: 'https://images.unsplash.com/photo-1522337094346-29b31122a21c?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    badge: 'Clinical Protocol',
    duration: '60 mins',
    downtime: 'Minimal',
    idealFor: ['Active cystic acne', 'Hormonal breakouts', 'Comedones & whiteheads', 'Post-inflammatory erythema (PIE)'],
    benefits: [
      'Reduces acne-causing microbial load with targeted blue light and medical actives',
      'Calms red, painful inflammation without drying the healthy barrier',
      'Assists in preventing deep cyst formation and future pitted scarring',
      'Includes personalized guidance for home maintenance and diet triggers'
    ],
    targetAreas: ['Face', 'Jawline & Neck', 'Chest & Back'],
    processSteps: [
      { step: 1, title: 'Sterile Extraction', detail: 'Careful clinical evacuation of non-inflamed comedones to avoid scarring.' },
      { step: 2, title: 'Clarifying Protocol', detail: 'Gentle anti-bacterial active peel and high-frequency ozone sanitization.' },
      { step: 3, title: 'Calming LED Light', detail: '415nm Blue Light phototherapy to eradicate bacteria followed by restorative zinc serum.' }
    ],
    faqs: [
      { q: 'How many sessions are typically required?', a: 'Acne management depends on severity and internal hormonal factors. Most clients observe marked improvement after 3 to 6 targeted sessions spaced 2 weeks apart.' }
    ]
  },
  {
    id: 'pigmentation-treatment',
    category: 'Face Treatments',
    categorySlug: 'face',
    name: 'Pigmentation & Melasma Therapy',
    tagline: 'Fades stubborn dark spots & restores uniform clarity',
    shortDesc: 'Evidence-based protocols to break down excess epidermal melanin, sun spots, and melasma patches.',
    fullDesc: 'Sun exposure, hormonal shifts, and past inflammation frequently trigger stubborn discoloration. At Skin Rewind, we employ synergistic treatments including targeted pigment peels, tyrosinase inhibitors, and antioxidant mesotherapy to brighten the complexion safely for Indian skin types.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    badge: 'Complexion Correction',
    duration: '45–60 mins',
    downtime: 'Minimal',
    idealFor: ['Melasma patches', 'Post-inflammatory hyperpigmentation (PIH)', 'Sun damage & age spots', 'Dull, uneven skin tone'],
    benefits: [
      'Targets overactive melanocytes without risk of rebound hyperpigmentation',
      'Formulated specifically to be safe and effective on Fitzpatrick skin types III–V',
      'Promotes cellular turnover to lift existing superficial pigment layers',
      'Imparts a luminous, uniform, light-reflecting skin finish'
    ],
    targetAreas: ['Face', 'Cheeks & Forehead', 'Neck & Hands'],
    processSteps: [
      { step: 1, title: 'Pigment Mapping', detail: 'Visual evaluation to determine whether pigment is epidermal or dermal.' },
      { step: 2, title: 'Pigment Inhibitor Infusion', detail: 'Application of tranexamic, kojic, or glutathione complexes.' },
      { step: 3, title: 'Protective Barrier Veil', detail: 'Infusion of physical sunblock and restorative barrier lipids.' }
    ],
    faqs: [
      { q: 'Is strict sun protection mandatory?', a: 'Yes. Daily application of a broad-spectrum SPF 50+ sunscreen is vital to preserve results and prevent ultraviolet rays from triggering new melanin synthesis.' }
    ]
  },
  {
    id: 'anti-aging-treatments',
    category: 'Face Treatments',
    categorySlug: 'face',
    name: 'Non-Invasive Anti-Aging Therapy',
    tagline: 'Rewind the clock gracefully with collagen restoration',
    shortDesc: 'Synergistic age-defying therapies that tighten laxity, soften micro-wrinkles, and restore facial contour definition.',
    fullDesc: 'Age gracefully on your own terms. Our anti-aging protocols incorporate radiofrequency dermal heating, peptide micro-infusion, and cellular biostimulation to boost natural collagen synthesis and support the foundational architecture of youthful skin.',
    image: 'https://images.unsplash.com/photo-1512290900672-1f413994e4ae?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    badge: 'Pro-Youth Protocol',
    duration: '60–75 mins',
    downtime: 'None',
    idealFor: ['Fine lines around eyes & mouth', 'Nasolabial fold softening', 'Early skin laxity & loss of bounce', 'Dull mature skin'],
    benefits: [
      'Stimulates deep dermal fibroblasts to synthesize new collagen fibers',
      'Improves skin elasticity and overall tensile strength',
      'Plumps up dehydration lines with multi-molecular hyaluronic serums',
      'Completely non-invasive with zero recovery time'
    ],
    targetAreas: ['Full Face', 'Jawline', 'Neck & Chest'],
    processSteps: [
      { step: 1, title: 'Collagen Prep', detail: 'Enzymatic micro-buffing to enhance permeability of peptide complexes.' },
      { step: 2, title: 'Therapeutic Thermal Stimulation', detail: 'Controlled dermal warmth to contract loose collagen bonds.' },
      { step: 3, title: 'Peptide Seal', detail: 'Cooling cryo-probe massage locking in growth factor serums.' }
    ],
    faqs: [
      { q: 'Does this involve surgical needles?', a: 'No, this is a non-surgical, non-invasive protocol using thermal energy and topical transdermal infusion.' }
    ]
  },
  {
    id: 'skin-rejuvenation',
    category: 'Face Treatments',
    categorySlug: 'face',
    name: 'Advanced Skin Rejuvenation',
    tagline: 'Multi-modality dermal renewal for tired, stressed skin',
    shortDesc: 'A holistic cocktail of vitamins, micro-current toning, and hydration to revive depleted, tired skin cells.',
    fullDesc: 'Urban pollution, stress, and lifestyle fatigue take a toll on our complexion. Our Skin Rejuvenation facial re-energizes cellular metabolism with targeted vitamins, oxygenation, and lymphatic drainage, leaving the face visibly rested and luminous.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    badge: 'Revitalizing',
    duration: '60 mins',
    downtime: 'Zero',
    idealFor: ['Fatigued & lackluster skin', 'Smokers / stressed skin', 'Pre-event bridal glow', 'Dehydration'],
    benefits: [
      'Encourages micro-circulation and lymphatic drainage of puffiness',
      'Provides rich antioxidant defense against free radical damage',
      'Restores the skin’s natural lipid mantle for long-lasting softness'
    ],
    targetAreas: ['Face', 'Eye Contour', 'Neck'],
    processSteps: [
      { step: 1, title: 'Detox Cleanse', detail: 'Ultrasonic scrubbing to purge environmental micro-particles.' },
      { step: 2, title: 'Oxygen Infusion', detail: 'Pressurized medical-grade oxygen carrying vitamin complex into the epidermis.' },
      { step: 3, title: 'Glow Seal', detail: 'Hydrogel algae mask to seal essential moisture.' }
    ],
    faqs: [
      { q: 'Can I do this before a wedding or party?', a: 'Yes! It is one of the most requested pre-event rituals for brides and grooms looking for radiant skin without irritation.' }
    ]
  },
  {
    id: 'skin-tightening',
    category: 'Face Treatments',
    categorySlug: 'face',
    name: 'Radiofrequency Skin Tightening',
    tagline: 'Firm, lift & sculpt facial contours without surgery',
    shortDesc: 'Controlled thermal energy contracts existing collagen fibers and triggers fresh elastogenesis for a firmer look.',
    fullDesc: 'RF Skin Tightening utilizes monopolar and bipolar radiofrequency energy to gently heat the deeper subcutaneous dermal layers to 40–42°C. This biological stimulus causes instant collagen contraction and stimulates prolonged collagen remodeling over subsequent weeks.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    badge: 'Non-Surgical Lift',
    duration: '45–60 mins',
    downtime: 'Zero',
    idealFor: ['Mild jowling along jawline', 'Crepey neck texture', 'Submental laxity', 'Tired cheek contours'],
    benefits: [
      'Non-invasive contour sculpting with zero incisions or anesthesia',
      'Provides an immediate gentle tightening effect followed by ongoing collagen remodeling',
      'Pleasant, warm treatment sensation often compared to a hot stone facial',
      'No recovery time required — resume all normal activities immediately'
    ],
    targetAreas: ['Jawline', 'Lower Face & Cheeks', 'Submental (Under-chin)', 'Neck'],
    processSteps: [
      { step: 1, title: 'Skin Preparation', detail: 'Application of hypoallergenic conductive glycerin medium.' },
      { step: 2, title: 'Thermal Contouring', detail: 'Continuous gliding of RF handpiece with infrared temperature monitoring.' },
      { step: 3, title: 'Lifting Serum Application', detail: 'Firming botanical serum applied to soothe and enhance elasticity.' }
    ],
    faqs: [
      { q: 'Is radiofrequency skin tightening painful?', a: 'Not at all. You will experience a comfortable, warm sensation similar to a warm massage. We continuously monitor skin temperature for comfort and safety.' }
    ]
  },
  {
    id: 'korean-glass-skin',
    category: 'Face Treatments',
    categorySlug: 'face',
    name: 'Korean Glass Skin Ritual',
    tagline: 'Luminescent, poreless & ultra-dewy hydration signature',
    shortDesc: 'A multi-step clinical Korean aesthetic protocol combining micro-channeling, polynucleotide peptides, and glass water hydration.',
    fullDesc: 'Inspired by Seoul’s elite aesthetic clinics, our Korean Glass Skin treatment creates that coveted translucent, crystal-clear, dewy complexion. We combine gentle aqua-dermabrasion, hyaluronic acid infusion, brightening niacinamide, and deep cryo-therapy to leave skin gleaming with glass-like clarity.',
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    badge: 'Client Favorite',
    duration: '60–75 mins',
    downtime: 'None',
    idealFor: ['Dull, rough or textured skin', 'Dehydrated complexion lacking glow', 'Special event & bridal preparation', 'Enlarged pores'],
    benefits: [
      'Creates a smooth, pore-refined surface that reflects light like polished glass',
      'Delivers intense multi-layer hydration deep within the epidermis',
      'Infuses brightening Korean botanicals, licorice root, and peptides',
      'Results in makeup gliding on flawlessly or going completely bare-faced'
    ],
    targetAreas: ['Full Face', 'Neck'],
    processSteps: [
      { step: 1, title: 'Gentle Enzyme Bubble Cleanse', detail: 'Dissolves surface sebum and keratin plugs without stripping the acid mantle.' },
      { step: 2, title: 'Ampoule Electroporation', detail: 'Delivers high-potency glow serums into cellular layers using gentle acoustic pulses.' },
      { step: 3, title: 'Cryo-Glass Sealing & Modeling Mask', detail: 'Cold therapy tightens appearance of pores while a rubber modeling mask locks in hydration.' }
    ],
    faqs: [
      { q: 'How long does the Korean Glass Skin glow last?', a: 'Clients typically experience an immediate dramatic dewiness lasting 2 to 3 weeks. Regular maintenance sessions compound the hydration for sustained skin luminosity.' }
    ]
  },

  // ================= HAIR TREATMENTS =================
  {
    id: 'hair-loss-thinning',
    category: 'Hair Treatments',
    categorySlug: 'hair',
    name: 'Hair Loss & Hair Thinning Therapy',
    tagline: 'Comprehensive clinical protocols to arrest fallout & strengthen roots',
    shortDesc: 'Multi-targeted scalp stimulation designed to curb excessive hair shedding, nourish follicles, and boost hair density.',
    fullDesc: 'Hair thinning can be triggered by stress, genetics, pollution, or nutritional imbalances. Skin Rewind Aesthetic provides evidence-based hair therapy combining trichological scalp diagnosis, follicle stimulation, and customized topical serums to revitalize weakened roots.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    badge: 'High Success Protocol',
    duration: '45–60 mins',
    downtime: 'None',
    idealFor: ['Telogen effluvium (stress shedding)', 'Diffuse thinning & widening partings', 'Weak, brittle hair strands', 'Premature hair miniaturization'],
    benefits: [
      'Helps slow down active excessive hair shedding',
      'Nourishes dormant follicles with essential amino acids and micronutrients',
      'Increases microvascular circulation across the scalp dermal papilla',
      'Safe, natural approach with personalized home care counseling'
    ],
    targetAreas: ['Crown', 'Hairline & Temples', 'Full Scalp'],
    processSteps: [
      { step: 1, title: 'Scalp Trichoscopy', detail: 'Magnified evaluation of follicular units, sebum density, and hair caliber.' },
      { step: 2, title: 'Scalp Cleansing & Stimulation', detail: 'Gentle exfoliation of dead scalp build-up and high-frequency activation.' },
      { step: 3, title: 'Targeted Nutrient Delivery', detail: 'Direct delivery of hair growth actives followed by soothing light therapy.' }
    ],
    faqs: [
      { q: 'Can this help both men and women?', a: 'Yes, our hair thinning protocols are customized specifically for both male and female pattern thinning based on individual root health.' }
    ]
  },
  {
    id: 'prp-gfc-hair',
    category: 'Hair Treatments',
    categorySlug: 'hair',
    name: 'PRP / GFC Hair Restoration',
    tagline: 'High-concentration growth factor concentrate for follicle reactivation',
    shortDesc: 'Advanced autologous therapy utilizing your own platelet-derived growth factors to awaken dormant follicles.',
    fullDesc: 'GFC (Growth Factor Concentrate) is the next evolution of PRP. Prepared through specialized platelet activation, it delivers an acellular, highly concentrated burst of VEGF, PDGF, and EGF directly to hair roots, revitalizing miniaturized follicles with minimal discomfort.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    badge: 'Next-Gen PRP',
    duration: '60 mins',
    downtime: '12–24 hours (avoid washing scalp same day)',
    idealFor: ['Androgenetic alopecia (early to moderate)', 'Thinning crown & receding hairline', 'Post-COVID or post-illness hair thinning'],
    benefits: [
      'Delivers pure, concentrated platelet growth factors directly to the dermal papilla',
      'Supports thicker hair shaft diameter and improved tensile strength',
      'Completely natural procedure using the patient’s own biological concentrate',
      'Aids in prolonging the anagen (active growth) phase of the hair cycle'
    ],
    targetAreas: ['Scalp Vertex', 'Frontal Hairline', 'Crown'],
    processSteps: [
      { step: 1, title: 'Blood Draw & GFC Extraction', detail: 'Sterile sample processed in proprietary GFC activation tubes.' },
      { step: 2, title: 'Scalp Preparation', detail: 'Application of topical soothing gel and antiseptic scalp prep.' },
      { step: 3, title: 'Precision Micro-Injections', detail: 'Delicate, shallow micro-droplet delivery across thinning zones.' }
    ],
    faqs: [
      { q: 'How is GFC different from traditional PRP?', a: 'GFC is acellular (free from RBCs and WBCs), which significantly reduces post-procedure soreness while offering a higher concentration of pure growth factors.' }
    ]
  },
  {
    id: 'mesotherapy-hair',
    category: 'Hair Treatments',
    categorySlug: 'hair',
    name: 'Scalp Mesotherapy',
    tagline: 'Direct nutrient micro-infusion into hair roots',
    shortDesc: 'Micro-injections of a specialized cocktail of biotin, peptides, minerals, and DHT blockers directly into the scalp dermis.',
    fullDesc: 'Oral supplements often reach the hair follicles in tiny diluted amounts. Scalp Mesotherapy bypasses the digestive system by delivering concentrated hair vitamins, biotin, copper peptides, and vasodilators straight to the follicular bed where they are needed most.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    badge: 'Nutrient Boost',
    duration: '40 mins',
    downtime: 'None',
    idealFor: ['Nutrient-deficient hair', 'Thinning without active scarring', 'Dry, frizzy, weak hair shafts'],
    benefits: [
      'Delivers essential follicle nutrients with maximum bioavailability',
      'Stimulates localized scalp microcirculation and oxygenation',
      'Quick, comfortable procedure with virtually no disruption to your routine'
    ],
    targetAreas: ['Full Scalp', 'Crown'],
    processSteps: [
      { step: 1, title: 'Scalp Sterilization', detail: 'Antiseptic wipe-down of target areas.' },
      { step: 2, title: 'Micro-Infusion', detail: 'Shallow micro-punctures depositing therapeutic vitamin cocktail.' },
      { step: 3, title: 'Scalp Massage', detail: 'Gentle pressure to evenly distribute actives.' }
    ],
    faqs: [
      { q: 'Does scalp mesotherapy hurt?', a: 'We use ultra-fine 32G micro-needles, making the sensation feel like tiny, manageable pinpricks. Most clients tolerate it very well without needing local anesthesia.' }
    ]
  },
  {
    id: 'low-level-laser-treatment',
    category: 'Hair Treatments',
    categorySlug: 'hair',
    name: 'Low-Level Laser Therapy (LLLT)',
    tagline: 'Photobiomodulation to energize hair follicle cellular ATP',
    shortDesc: 'Cold laser light therapy at 650nm that stimulates cellular metabolism and adenosine triphosphate (ATP) in hair roots.',
    fullDesc: 'Low-Level Laser Therapy (LLLT) is an FDA-cleared, non-thermal photobiotherapy. Clinically calibrated red laser diodes penetrate the scalp tissue, energizing mitochondrial energy production, encouraging blood flow, and creating a fertile environment for healthy hair growth.',
    image: 'https://images.unsplash.com/photo-1512290903671-17adc81fcd90?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    badge: 'Non-Invasive Light',
    duration: '30 mins',
    downtime: 'Zero',
    idealFor: ['Post-PRP booster', 'Early stage hair thinning', 'Scalp inflammation & poor blood flow'],
    benefits: [
      'Increases cellular ATP production in weakened hair follicles',
      'Completely painless, non-invasive, and contact-free experience',
      'Accelerates healing and boosts results when paired with PRP or Mesotherapy'
    ],
    targetAreas: ['Full Scalp'],
    processSteps: [
      { step: 1, title: 'Scalp Exposure', detail: 'Hair is parted systematically to ensure direct beam contact.' },
      { step: 2, title: 'Laser Session', detail: 'Client relaxes comfortably under the multi-diode laser hood for 25–30 minutes.' },
      { step: 3, title: 'Post-Laser Serum', detail: 'Application of leave-in peptide tonic.' }
    ],
    faqs: [
      { q: 'Will the laser heat up my head?', a: 'No, LLLT is a cold laser modality. It emits therapeutic light wavelengths with zero thermal burning or heat discomfort.' }
    ]
  },
  {
    id: 'hair-boosters',
    category: 'Hair Treatments',
    categorySlug: 'hair',
    name: 'Hair Boosters & Keratin Restorative Care',
    tagline: 'Intensive restorative care for dry, damaged hair shafts',
    shortDesc: 'Salon-grade clinical conditioning and peptide bonding treatments to repair heat-damaged, frizzy, or bleached hair.',
    fullDesc: 'When hair shafts become brittle from coloring, heat styling, or hard water, hair boosters restore the lipid balance and reconstruct broken disulfide protein bonds. Enjoy touchably soft, lustrous, smooth strands from root to tip.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    badge: 'Strand Repair',
    duration: '50–60 mins',
    downtime: 'Zero',
    idealFor: ['Bleached or color-treated hair', 'Heat damaged & frizzy ends', 'Split ends and rough texture'],
    benefits: [
      'Restores hydrolyzed keratin and ceramides inside the hair cortex',
      'Seals open cuticle scales to lock in moisture and natural gloss',
      'Shields against environmental humidity and pollution damage'
    ],
    targetAreas: ['Hair Mid-lengths and Ends'],
    processSteps: [
      { step: 1, title: 'Purifying Wash', detail: 'Clarifying rinse to remove mineral deposits and silicone residue.' },
      { step: 2, title: 'Bond Rebuilder', detail: 'Deep penetration of peptide-amino acid complex with gentle ultrasonic mist.' },
      { step: 3, title: 'Silk Seal Finish', detail: 'Cool rinse and blowout for weightless shine.' }
    ],
    faqs: [
      { q: 'Does this contain harsh chemical fumes?', a: 'No, our clinical hair boosters are formaldehyde-free and emphasize genuine restorative peptide conditioning.' }
    ]
  },
  {
    id: 'scalp-analysis',
    category: 'Hair Treatments',
    categorySlug: 'hair',
    name: 'Digital Trichoscopic Scalp Analysis',
    tagline: 'High-magnification diagnostic imaging of your scalp & follicles',
    shortDesc: 'Advanced 200x digital trichoscopy to diagnose scalp condition, follicle density, sebum balance, and shedding factors.',
    fullDesc: 'Effective hair treatment begins with accurate diagnosis. Using specialized digital trichoscopy with polarized light, our cosmetologist examines your scalp magnified up to 200 times to uncover underlying sebum plugs, miniaturization ratio, and scalp inflammation.',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    badge: 'Diagnostic Consultation',
    duration: '30 mins',
    downtime: 'Zero',
    idealFor: ['Anyone experiencing unexplained hair shedding', 'Dandruff, scalp itching or flaking', 'Pre-treatment benchmarking'],
    benefits: [
      'Visualizes hair follicle health and density in real-time on high-definition screen',
      'Provides objective baseline images to monitor progress over your treatment journey',
      'Enables creation of a tailored treatment plan with no guesswork'
    ],
    targetAreas: ['Frontal, Temporal, Parietal & Occipital Scalp'],
    processSteps: [
      { step: 1, title: 'Symptom Review', detail: 'Detailed discussion of shedding history, diet, and lifestyle.' },
      { step: 2, title: 'Trichoscopy Scans', detail: 'Multi-zone digital photo captures measuring hair count per follicular unit.' },
      { step: 3, title: 'Consultation & Roadmap', detail: 'Customized recommendations for in-clinic protocols and home care.' }
    ],
    faqs: [
      { q: 'Is the scalp analysis included in consultations?', a: 'Yes, a comprehensive scalp analysis is conducted during your initial hair consultation at Skin Rewind Aesthetic.' }
    ]
  },
  {
    id: 'hair-restoration',
    category: 'Hair Treatments',
    categorySlug: 'hair',
    name: 'Comprehensive Hair Restoration Protocol',
    tagline: 'Multi-tiered restorative plans designed for sustained hair growth',
    shortDesc: 'An integrated multi-session program combining PRP, mesotherapy, low-level laser, and clinical scalp therapy for sustained results.',
    fullDesc: 'For long-term hair recovery, a single modality is rarely enough. Our Comprehensive Hair Restoration Protocol synergizes multiple proven therapies over a planned 3- to 6-month journey to arrest shedding, improve hair density, and restore hair confidence.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    badge: 'Holistic Program',
    duration: 'Multi-session plans',
    downtime: 'Minimal',
    idealFor: ['Moderate thinning across scalp', 'Longstanding diffuse shedding', 'Maintenance post-hair transplant'],
    benefits: [
      'Multi-prong approach tackling vascular, hormonal, and nutritional triggers',
      'Regular trichoscopic tracking to measure follicle improvements',
      'Structured, supervised clinical care under experienced cosmetologist'
    ],
    targetAreas: ['Full Scalp'],
    processSteps: [
      { step: 1, title: 'Diagnostic Mapping', detail: 'Initial scalp analysis and blood panel review.' },
      { step: 2, title: 'Active Restoration Phase', detail: 'Alternating PRP/GFC, mesotherapy, and LLLT sessions.' },
      { step: 3, title: 'Sustained Maintenance', detail: 'Maintenance boosters and home regimen check-ins.' }
    ],
    faqs: [
      { q: 'How long do results last?', a: 'With appropriate maintenance sessions and balanced scalp hygiene, hair gains can be maintained effectively over the long term.' }
    ]
  },

  // ================= LASER TREATMENTS =================
  {
    id: 'laser-hair-reduction',
    category: 'Laser Treatments',
    categorySlug: 'laser',
    name: 'Triple Wavelength Laser Hair Reduction',
    tagline: 'Painless, smooth & permanent reduction for silky skin',
    shortDesc: 'Gold-standard diode and triple-wavelength laser technology with dynamic contact cooling for silky, hair-free skin.',
    fullDesc: 'Bid farewell to painful waxing and ingrown hairs. Skin Rewind Aesthetic utilizes modern laser technology combining 755nm, 808nm, and 1064nm wavelengths. This safely targets hair follicles at multiple depths with continuous sapphire contact cooling for a comfortable, virtually pain-free experience tailored for Indian skin tones.',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    badge: 'Most Popular',
    duration: '15–60 mins (area dependent)',
    downtime: 'Zero downtime',
    idealFor: ['Unwanted facial or body hair', 'Frequent ingrown hairs & razor bumps', 'Sensitive skin prone to waxing rashes'],
    benefits: [
      'Substantial, long-lasting reduction in unwanted hair density and thickness',
      'Integrated contact cooling tip ensures optimal skin protection and comfort',
      'Virtually eliminates painful ingrown hairs, folliculitis, and strawberry legs',
      'Quick sessions — small zones like upper lip take under 10 minutes'
    ],
    targetAreas: ['Underarms', 'Full Arms & Legs', 'Bikini Area', 'Upper Lip & Chin', 'Full Body', 'Men’s Beard Shaping & Chest'],
    processSteps: [
      { step: 1, title: 'Shave & Mark', detail: 'Treatment area is smoothly shaved and outlined with white cosmetic pencil.' },
      { step: 2, title: 'Cooling Gel Application', detail: 'Hypoallergenic cooling ultrasound gel applied for light transmission and comfort.' },
      { step: 3, title: 'Laser Gliding', detail: 'Rapid in-motion pulse delivery targeting hair melanin down to the bulb.' }
    ],
    faqs: [
      { q: 'Is laser hair reduction painful?', a: 'With our advanced chilled sapphire tip, most clients describe the sensation as a light warm flick or mild vibration, far less painful than traditional waxing.' },
      { q: 'How many sessions will I need?', a: 'Hair grows in cycles (anagen, catagen, telogen). Because lasers target hair in the active growth phase, 6 to 8 sessions spaced 4 to 6 weeks apart are generally recommended for comprehensive reduction.' }
    ]
  },
  {
    id: 'skin-resurfacing',
    category: 'Laser Treatments',
    categorySlug: 'laser',
    name: 'Laser Skin Resurfacing & Scar Polish',
    tagline: 'Precision laser renewal to smooth textural irregularities',
    shortDesc: 'Targeted fractional laser energy to smooth stubborn acne scars, enlarged pores, and rough dermal texture.',
    fullDesc: 'Laser skin resurfacing creates microscopic thermal treatment zones in the dermis, triggering rapid healthy skin remodeling without damaging surrounding healthy tissue. It is an effective solution for post-acne boxcar scars, surgical scars, and uneven texture.',
    image: 'https://images.unsplash.com/photo-1512290900672-1f413994e4ae?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    badge: 'Texture Renewal',
    duration: '45–60 mins',
    downtime: '2–4 days mild redness',
    idealFor: ['Pitted acne scars & textural scars', 'Enlarged pores on nose & cheeks', 'Rough photoaged skin'],
    benefits: [
      'Breaks up fibrous scar tissue and encourages organized collagen deposition',
      'Significantly refines coarse pore appearance and rough texture',
      'Safely calibrated parameters to avoid post-inflammatory hyperpigmentation'
    ],
    targetAreas: ['Cheeks', 'Temple & Forehead', 'Full Face'],
    processSteps: [
      { step: 1, title: 'Topical Anesthetic', detail: '45-minute numbing cream application for optimal comfort.' },
      { step: 2, title: 'Laser Pass', detail: 'Systematic laser passes creating micro-thermal columns across scarred zones.' },
      { step: 3, title: 'Calming Cryo-Mask', detail: 'Immediate soothing with chilled sterile peptide serum.' }
    ],
    faqs: [
      { q: 'What does recovery look like?', a: 'Expect mild redness and warmth similar to a mild sunburn for 24 to 48 hours. You can apply sunscreen and mineral makeup after day two.' }
    ]
  },
  {
    id: 'led-light-therapy',
    category: 'Laser Treatments',
    categorySlug: 'laser',
    name: 'Medical LED Phototherapy',
    tagline: 'Non-thermal cellular light stimulation for healing & calm',
    shortDesc: 'Pure narrowband LED light wavelengths (Red 633nm, Blue 415nm, Near-Infrared 830nm) to treat acne, inflammation, and skin aging.',
    fullDesc: 'Medical LED phototherapy is a safe, painless treatment that triggers natural photo-biochemical reactions at the cellular level. Red light accelerates repair and collagen synthesis; blue light neutralizes acne-causing bacteria; near-infrared soothes deep inflammation and redness.',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    badge: 'Gentle & Healing',
    duration: '25–35 mins',
    downtime: 'Zero',
    idealFor: ['Rosacea & sensitive redness', 'Active acne breakouts', 'Post-procedure healing accelerator', 'Dull, sluggish skin'],
    benefits: [
      'Painless and relaxing with zero UV rays and zero heat damage',
      'Clinically proven to speed up skin recovery after peels or microneedling',
      'Reduces inflammatory cytokines and soothes sensitive skin flare-ups'
    ],
    targetAreas: ['Face', 'Neck', 'Décolletage', 'Back'],
    processSteps: [
      { step: 1, title: 'Cleanse & Shield', detail: 'Skin is cleansed and protective eye goggles are placed.' },
      { step: 2, title: 'Light Canopy Exposure', detail: 'Rest under the medical LED panel for 20–25 minutes.' },
      { step: 3, title: 'Barrier Hydration', detail: 'Finish with a hydrating serum and protective SPF.' }
    ],
    faqs: [
      { q: 'Are there any side effects?', a: 'LED phototherapy has an exceptional safety profile with no downtime, peeling, or sensitivity to sunlight.' }
    ]
  },

  // ================= BODY TREATMENTS =================
  {
    id: 'cryolipolysis',
    category: 'Body Treatments',
    categorySlug: 'body',
    name: 'Cryolipolysis (Fat Freezing)',
    tagline: 'Targeted cold contouring for stubborn localized fat pockets',
    shortDesc: 'Non-surgical fat reduction technology that targets and crystalizes stubborn subcutaneous fat cells through controlled cooling.',
    fullDesc: 'Diet and exercise do not always eliminate stubborn localized fat pockets around the abdomen, love handles, or thighs. Cryolipolysis applies precise, controlled cooling to crystallize fat cells without harming the overlying skin. Over the following weeks, your body naturally processes and metabolizes the crystallized adipocytes.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    badge: 'Non-Surgical Sculpt',
    duration: '45–60 mins per cycle',
    downtime: 'Zero (mild temporary numbness)',
    idealFor: ['Lower belly pooch', 'Flanks / love handles', 'Bra bulge & back fat', 'Inner & outer thighs'],
    benefits: [
      'Non-invasive body contouring with no needles, incisions, or general anesthesia',
      'Selectively crystalizes fat cells while preserving skin, nerves, and muscle',
      'Clients can read, work, or relax on their phone throughout the treatment',
      'Complements an active lifestyle for sculpting stubborn trouble zones'
    ],
    targetAreas: ['Abdomen', 'Love Handles (Flanks)', 'Thighs', 'Double Chin', 'Arms'],
    processSteps: [
      { step: 1, title: 'Pinch & Measure', detail: 'Mapping fatty deposit thickness and selecting the appropriate applicator cup.' },
      { step: 2, title: 'Anti-Freeze Membrane', detail: 'Application of a specialized thermal protection gel pad over skin.' },
      { step: 3, title: 'Controlled Cooling Cycle', detail: 'Vacuum applicator draws in tissue and cools to target cryo-temperature for 45 mins.' }
    ],
    faqs: [
      { q: 'Is Cryolipolysis a weight-loss treatment?', a: 'Cryolipolysis is designed for body contouring and localized inch-loss rather than general weight reduction. It is ideal for individuals near their target weight with stubborn fat bulges.' },
      { q: 'When do you notice changes?', a: 'Changes begin to become visible as the body naturally eliminates the treated fat cells, typically between 4 to 12 weeks post-session.' }
    ]
  },
  {
    id: 'body-contouring',
    category: 'Body Treatments',
    categorySlug: 'body',
    name: 'RF Body Contouring & Firming',
    tagline: 'Multi-polar RF & vacuum massage to tighten loose body skin',
    shortDesc: 'Combines multi-polar radiofrequency with vacuum suction to improve microcirculation, smooth contours, and firm slack skin.',
    fullDesc: 'Whether post-weight loss or postpartum, lax body skin can benefit from deep dermal thermal stimulation. Our Body Contouring treatment utilizes multi-polar radiofrequency to heat deep subcutaneous layers, stimulating collagen tightening and improving localized blood flow.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    badge: 'Skin Firming',
    duration: '45–60 mins',
    downtime: 'None',
    idealFor: ['Post-pregnancy loose belly skin', 'Flaccid upper arms (bat wings)', 'Above-knee skin laxity', 'Buttock toning'],
    benefits: [
      'Aids in firming loose, crepey skin following weight changes',
      'Encourages lymphatic circulation to reduce sluggish fluid retention',
      'Relaxing, warm sensation similar to a deep tissue heated massage'
    ],
    targetAreas: ['Tummy', 'Arms', 'Thighs', 'Buttocks'],
    processSteps: [
      { step: 1, title: 'Area Prep', detail: 'Application of RF conductive oil.' },
      { step: 2, title: 'RF Contouring Pass', detail: 'Systematic circular gliding with continuous thermal temperature monitoring.' },
      { step: 3, title: 'Cooling Hydration', detail: 'Application of toning botanical lotion.' }
    ],
    faqs: [
      { q: 'How many sessions are optimal?', a: 'A course of 6 to 8 weekly sessions is generally recommended for cumulative tightening results.' }
    ]
  },
  {
    id: 'cellulite-reduction',
    category: 'Body Treatments',
    categorySlug: 'body',
    name: 'Cellulite Smoothing Therapy',
    tagline: 'Target fibrous bands & improve skin dimpling appearance',
    shortDesc: 'A specialized treatment combining mechanical lymphatic drainage and thermal therapy to smooth dimpled, uneven skin.',
    fullDesc: 'Cellulite is caused when fibrous septae pull down on the skin while subcutaneous fat pushes upward. Our cellulite smoothing protocol softens stiff fibrous bands, stimulates lymphatic drainage, and increases dermal thickness to visibly diminish dimpling on thighs and buttocks.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    badge: 'Smooth Silhouette',
    duration: '45 mins',
    downtime: 'Zero',
    idealFor: ['Orange-peel skin texture on thighs', 'Dimpled buttocks', 'Fluid stagnation in legs'],
    benefits: [
      'Helps smooth the visual appearance of bumpy cellulite dimples',
      'Stimulates sluggish venous and lymphatic return in lower extremities',
      'Improves dermal elasticity and skin suppleness'
    ],
    targetAreas: ['Posterior & Lateral Thighs', 'Buttocks'],
    processSteps: [
      { step: 1, title: 'Lymphatic Activation', detail: 'Deep mechanical suction massage to stimulate stagnant fluids.' },
      { step: 2, title: 'Dermal Heating', detail: 'Focused radiofrequency to strengthen the overlying skin thickness.' },
      { step: 3, title: 'Circulation Seal', detail: 'Firming caffeine and marine extract serum application.' }
    ],
    faqs: [
      { q: 'Can cellulite be removed permanently?', a: 'While cellulite has a natural anatomical basis, our treatments significantly improve skin smoothness and reduce the visual depth of dimples when maintained.' }
    ]
  },
  {
    id: 'body-wraps',
    category: 'Body Treatments',
    categorySlug: 'body',
    name: 'Detoxifying Herbal & Clay Body Wraps',
    tagline: 'Infuse minerals, soothe tired muscles & refine body skin',
    shortDesc: 'A luxurious clinical cocoon wrap enriched with French clay, marine algae, and herbal extracts to purge toxins and deeply hydrate.',
    fullDesc: 'Immerse your body in restorative care. Our clinical body wrap starts with an invigorating botanical body polish followed by an application of therapeutic volcanic clay or nutrient-dense kelp wrap, cocooning you in gentle thermal blankets to encourage toxin release and profound skin softness.',
    image: 'https://images.unsplash.com/photo-1512290900672-1f413994e4ae?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    badge: 'Holistic Spa Ritual',
    duration: '75 mins',
    downtime: 'None',
    idealFor: ['Water retention & bloating', 'Full-body dry skin', 'Pre-wedding pampering', 'Deep muscle relaxation'],
    benefits: [
      'Deeply nourishes dry body skin with natural minerals and humectants',
      'Assists in relieving temporary water retention and puffiness',
      'Provides a deeply grounding, tranquil sensory experience'
    ],
    targetAreas: ['Full Body (Neck down)'],
    processSteps: [
      { step: 1, title: 'Dry Body Polish', detail: 'Exfoliation of dead skin flakes to boost absorption.' },
      { step: 2, title: 'Warm Clay / Algae Cocoon', detail: 'Generous application of therapeutic mineral wrap and thermal blanket.' },
      { step: 3, title: 'Shower & Velvet Lotion', detail: 'Warm rinse followed by application of silky shea butter emulsion.' }
    ],
    faqs: [
      { q: 'Should I drink extra water after a body wrap?', a: 'Yes! Hydration is highly recommended before and after to support your body’s natural metabolic elimination.' }
    ]
  },
  {
    id: 'weight-loss-treatments',
    category: 'Body Treatments',
    categorySlug: 'body',
    name: 'Metabolic & Inch-Loss Support Protocol',
    tagline: 'Non-invasive adjunct therapies to assist your wellness journey',
    shortDesc: 'Tailored non-surgical inch-loss protocols and lifestyle counseling to support targeted shape refinement.',
    fullDesc: 'Achieving your body goals requires a thoughtful combination of targeted aesthetic treatments and lifestyle consistency. Our inch-loss support protocols combine non-invasive cavitation, lymphatic mobilization, and body composition tracking to help you trim stubborn centimeters safely.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    badge: 'Wellness & Shape',
    duration: '60 mins',
    downtime: 'None',
    idealFor: ['Individuals committed to lifestyle improvements seeking accelerated inch reduction', 'Plateaued fitness journeys'],
    benefits: [
      'Helps mobilize localized fatty tissue and interstitial fluid accumulation',
      'Provides structured guidance and objective measurements each session',
      'Zero surgical risks or recovery time'
    ],
    targetAreas: ['Abdomen', 'Waist', 'Hips', 'Thighs'],
    processSteps: [
      { step: 1, title: 'Body Assessment', detail: 'Circumferential caliper measurements and health questionnaire.' },
      { step: 2, title: 'Ultrasonic Cavitation', detail: 'Targeted ultrasound waves to disrupt localized fat cell membranes.' },
      { step: 3, title: 'Pressotherapy / Drainage', detail: 'Sequential compression to facilitate metabolic clearance.' }
    ],
    faqs: [
      { q: 'Are results guaranteed?', a: 'No ethical clinic guarantees specific weight numbers. Results vary depending on diet, activity, and individual metabolism. We provide honest, verified measurements and supportive care.' }
    ]
  },

  // ================= SEMI-PERMANENT MAKEUP =================
  {
    id: 'eyebrow-microblading',
    category: 'Semi-Permanent Makeup',
    categorySlug: 'spmu',
    name: 'Phibrows Eyebrow Microblading',
    tagline: 'Hyper-realistic, bespoke hair strokes tailored to your face',
    shortDesc: 'Handcrafted ultra-fine hair strokes deposit premium organic pigments to create natural, full, beautifully defined brows.',
    fullDesc: 'Microblading is an exquisite form of eyebrow artistry. Using an ultra-fine sterile manual blade, our certified artist Aarti Hiwanj handcrafts individual hair strokes following the Golden Ratio (phi 1.618) of your facial structure. We create natural, effortless brows that seamlessly blend with your real eyebrow hairs.',
    image: 'https://images.unsplash.com/photo-1522337094346-29b31122a21c?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    badge: 'Artisan SPMU',
    duration: '120 mins',
    downtime: '5–7 days healing phase',
    idealFor: ['Sparse, over-plucked or patchy eyebrows', 'Asymmetrical brow arches', 'Alopecia or thinning brow hair', 'Clients wanting to save daily makeup time'],
    benefits: [
      'Each hair stroke is individually drawn to match your natural growth pattern',
      'Uses hypoallergenic, iron-oxide free pigments that do not turn reddish or blue',
      'Cuts down 15–20 minutes from your morning beauty routine every single day',
      'Customized mapping tailored to your specific bone structure and eye shape'
    ],
    targetAreas: ['Eyebrow Arches & Tails'],
    processSteps: [
      { step: 1, title: 'Golden Ratio Brow Mapping', detail: 'Precise measurement using symmetry calipers until you approve the shape.' },
      { step: 2, title: 'Color Matching & Numbing', detail: 'Custom pigment blend formulated for your hair and undertone with topical numbing.' },
      { step: 3, title: 'Hair Stroke Crafting', detail: 'Meticulous micro-blade stroke deposition followed by pigment mask soak.' }
    ],
    faqs: [
      { q: 'How long does microblading last?', a: 'Microblading generally lasts between 12 to 24 months depending on skin type (longer on dry/normal skin), after which a color refresh is typically scheduled.' },
      { q: 'Does microblading hurt?', a: 'We apply a medical-grade topical anesthetic before and during the procedure. Most clients rate the sensation as a light scratching (2 to 3 out of 10).' }
    ]
  },
  {
    id: 'lip-blush',
    category: 'Semi-Permanent Makeup',
    categorySlug: 'spmu',
    name: 'Aquarelle Lip Blush Tattoo',
    tagline: 'Lush, natural color tint & enhanced border definition',
    shortDesc: 'A delicate cosmetic tattoo that infuses soft natural blush tones to correct pale, asymmetrical, or hyperpigmented lips.',
    fullDesc: 'Lip Blush is a modern cosmetic tattooing technique that imparts a soft, natural tint of color across the vermillion border and body of the lips. It enhances natural symmetry, restores lost youthful border definition, and brightens cool or dark lip undertones with a gentle flush.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    badge: 'Natural Tint',
    duration: '120 mins',
    downtime: '3–5 days light peeling',
    idealFor: ['Pale, washed-out lips', 'Hyperpigmented or dark lip borders', 'Uneven lip contours', 'Desire for daily smudge-proof lip tint'],
    benefits: [
      'Restores youthful appearance and subtle volume illusion without dermal fillers',
      'Neutralizes dark or cool undertones in lips with specialized pigment correction',
      'Long-lasting color wash that will not smudge onto cups, clothes, or during exercise'
    ],
    targetAreas: ['Lips'],
    processSteps: [
      { step: 1, title: 'Lip Prep & Design', detail: 'Defining the vermillion border and evening out asymmetries.' },
      { step: 2, title: 'Custom Shade Mixing', detail: 'Selection of soft nude pinks, coral roses, or warm peach hues.' },
      { step: 3, title: 'Gentle Pixel Deposition', detail: 'Layering pixels using a precision rotary device and topical anesthetic.' }
    ],
    faqs: [
      { q: 'Will my lips look swollen initially?', a: 'Mild swelling is normal immediately following the procedure and typically resolves within 24 hours. The color will appear bolder for 3 days before settling into a soft, natural tint.' }
    ]
  },
  {
    id: 'scalp-micropigmentation',
    category: 'Semi-Permanent Makeup',
    categorySlug: 'spmu',
    name: 'Scalp Micropigmentation (SMP)',
    tagline: 'The illusion of natural follicle density & defined hairline',
    shortDesc: 'Detailed micro-droplet pigment placement replicating the look of shaved hair follicles or adding density to thinning hair.',
    fullDesc: 'Scalp Micropigmentation is a specialized medical aesthetic tattoo. Using specialized organic charcoal-based pigments, thousands of microscopic follicular impressions are layered into the upper dermis to recreate the visual appearance of a full head of closely shaved hair or to conceal a widening scalp parting.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    badge: 'Hair Illusion',
    duration: '2–3 hours per session',
    downtime: '2 days mild redness',
    idealFor: ['Male baldness wanting a clean buzz-cut look', 'Female thinning along parting line', 'Hiding hair transplant scars or scalp scars'],
    benefits: [
      'Provides immediate visual density and confidence boost',
      'Non-surgical alternative or complement to hair transplants',
      'Permanent, low-maintenance solution that does not wash off'
    ],
    targetAreas: ['Frontal Hairline', 'Crown', 'Scar Tissue'],
    processSteps: [
      { step: 1, title: 'Hairline Design', detail: 'Sketching a soft, age-appropriate natural hairline.' },
      { step: 2, title: 'Shade Formulation', detail: 'Matching pigment precisely to existing hair follicle hue.' },
      { step: 3, title: 'Follicular Layering', detail: 'Micro-point pigment placement across thinning zones.' }
    ],
    faqs: [
      { q: 'Will the pigment turn blue or green?', a: 'No. We use dedicated, carbon-based SMP pigments devoid of standard tattoo ink constituents, ensuring true gray-black tones that resist discoloration.' }
    ]
  },
  {
    id: 'eyelash-extensions',
    category: 'Semi-Permanent Makeup',
    categorySlug: 'spmu',
    name: 'Classic & Russian Volume Eyelash Extensions',
    tagline: 'Weightless, feather-light lashes for effortlessly glamorous eyes',
    shortDesc: 'Individual synthetic silk or faux-mink lashes meticulously bonded to your natural eyelashes for fluttery elegance.',
    fullDesc: 'Elevate your gaze with customized eyelash extensions. Every individual extension or light volume fan is safely isolated and bonded to a single natural lash using medical-grade adhesive, ensuring full freedom of movement and protecting your natural eyelash growth cycle.',
    image: 'https://images.unsplash.com/photo-1522337094346-29b31122a21c?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    badge: 'Eye Artistry',
    duration: '90–120 mins',
    downtime: 'Keep dry for first 24 hours',
    idealFor: ['Short, straight or sparse natural lashes', 'Effortless everyday glamour without mascara', 'Brides and festive occasions'],
    benefits: [
      'Customized map (Cat-Eye, Doll-Eye, Natural Open) tailored to your eye shape',
      'Zero damage to natural eyelashes when applied with proper isolation',
      'Eliminates the daily hassle of clumpy mascara and eyelash curlers'
    ],
    targetAreas: ['Upper Eyelashes'],
    processSteps: [
      { step: 1, title: 'Eye Consultation & Mapping', detail: 'Choosing curl (C, D, L), length, and density.' },
      { step: 2, title: 'Hydrating Eye Gel Patch', detail: 'Protects lower lashes while hydrating the under-eye area.' },
      { step: 3, title: 'Meticulous Isolation & Bonding', detail: 'One-by-one lash application with specialized tweezers.' }
    ],
    faqs: [
      { q: 'How long do lash extensions last?', a: 'Because natural lashes shed every 6 to 8 weeks, extensions shed with them. Infill appointments every 2 to 3 weeks keep them continuously lush and full.' }
    ]
  },

  // ================= OTHER SERVICES =================
  {
    id: 'earlobe-repair',
    category: 'Nails & Other Services',
    categorySlug: 'other',
    name: 'Non-Surgical & Sutureless Earlobe Repair',
    tagline: 'Restore stretched, split or torn earlobes with minimal downtime',
    shortDesc: 'A precise minor aesthetic procedure to repair stretched, elongated, or torn ear-piercing holes.',
    fullDesc: 'Heavy ethnic jewelry, prolonged earring wear, or accidental tugs often cause earlobe holes to stretch or tear completely. At Skin Rewind Aesthetic, earlobe repair is performed with sterile clinical precision, restoring natural contour so you can wear your favorite jewelry with confidence.',
    image: 'https://images.unsplash.com/photo-1512290900672-1f413994e4ae?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    badge: 'Aesthetic Restoration',
    duration: '30–45 mins',
    downtime: 'Minimal (follow sterile home care)',
    idealFor: ['Split or widened ear-piercing slits', 'Torn earlobes from heavy earrings', 'Stretched tribal gauges'],
    benefits: [
      'Performed comfortably under quick local anesthesia',
      'Restores neat earlobe architecture with minimal scar visibility',
      'Earlobes can safely be repierced after full healing'
    ],
    targetAreas: ['Left & Right Earlobes'],
    processSteps: [
      { step: 1, title: 'Local Comfort', detail: 'Gentle numbing of the earlobe tissue.' },
      { step: 2, title: 'Edge Freshening', detail: 'Precise clinical trimming of the epithelialized tract.' },
      { step: 3, title: 'Fine Aesthetic Closure', detail: 'Micro-suturing or surgical tissue bonding for clean healing.' }
    ],
    faqs: [
      { q: 'Can I re-pierce my ears afterward?', a: 'Yes, after the lobe has healed completely (typically 6 to 8 weeks), we can re-pierce a fresh hole slightly away from the repair line.' }
    ]
  },
  {
    id: 'nail-extensions',
    category: 'Nails & Other Services',
    categorySlug: 'other',
    name: 'Gel & Acrylic Nail Extensions',
    tagline: 'Flawless length, elegant shaping & enduring strength',
    shortDesc: 'High-end nail extensions using odorless gel or high-grade acrylic for chip-resistant, glamorous fingernails.',
    fullDesc: 'Pamper your hands with bespoke nail extensions crafted by our nail artists. Choose from French tips, almond, coffin, or stiletto silhouettes constructed with premium European gel products that protect your natural nail bed.',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    badge: 'Nail Lounge',
    duration: '75–90 mins',
    downtime: 'Zero',
    idealFor: ['Short or brittle nails', 'Nail biters seeking restoration', 'Bridal, party & vacation ready looks'],
    benefits: [
      'Long-lasting durability (3 to 4 weeks chip-free)',
      'Constructed with cuticle-safe, non-yellowing resins',
      'Unlimited styling versatility from quiet luxury nudes to bold statements'
    ],
    targetAreas: ['Fingernails'],
    processSteps: [
      { step: 1, title: 'Nail Bed Prep', detail: 'Gentle dry Russian manicure and cuticle refinement.' },
      { step: 2, title: 'Extension Sculpting', detail: 'Application of tips or sculpted forms with builder gel.' },
      { step: 3, title: 'Shaping & High-Gloss Topcoat', detail: 'Precision filing and UV LED mirror finish cure.' }
    ],
    faqs: [
      { q: 'Do extensions damage natural nails?', a: 'When applied and removed professionally by our trained nail technicians without forceful peeling, your natural nail bed remains intact and healthy.' }
    ]
  },
  {
    id: 'nail-art',
    category: 'Nails & Other Services',
    categorySlug: 'other',
    name: 'Bespoke Nail Art & Chrome Glaze',
    tagline: 'Hand-painted motifs, Hailey Bieber chrome & 3D luxury embellishments',
    shortDesc: 'Creative nail artistry ranging from subtle minimalist chrome glazes to intricate bridal patterns and Swarovski crystals.',
    fullDesc: 'Your nails are a canvas. Express your individuality with our bespoke nail art service. From viral glazed donut chrome finishes to intricate freehand floral motifs, marble swirls, and gemstone accents, our artists deliver salon perfection.',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    badge: 'Artisan Nails',
    duration: '45–75 mins',
    downtime: 'Zero',
    idealFor: ['Weddings, festivals & birthdays', 'Fashion-forward personal styling', 'Photo shoots'],
    benefits: [
      'Custom designs tailored to match your outfit or mood',
      'Long-wearing gel topcoats preserve stones and foil art without snagging',
      'Precision detail work using micro-fine Japanese art brushes'
    ],
    targetAreas: ['Fingernails'],
    processSteps: [
      { step: 1, title: 'Design Consultation', detail: 'Reviewing reference photos or moodboards.' },
      { step: 2, title: 'Artistic Execution', detail: 'Layering chrome powders, hand painting, or applying crystal charms.' },
      { step: 3, title: 'Double Cure Seal', detail: 'Protective encapsulation with scratch-resistant diamond topcoat.' }
    ],
    faqs: [
      { q: 'Can I bring in my own Instagram / Pinterest design?', a: 'Absolutely! Our nail technicians love recreating and customizing inspirational designs for our clients.' }
    ]
  },
  {
    id: 'manicures',
    category: 'Nails & Other Services',
    categorySlug: 'other',
    name: 'Royal Rose & Shea Butter Manicure',
    tagline: 'Restorative hand exfoliation, cuticle therapy & massage',
    shortDesc: 'A relaxing hand therapy featuring aromatic soaks, sea salt exfoliation, cuticle therapy, and therapeutic acupressure massage.',
    fullDesc: 'Our hands work tirelessly every day. Treat them to our Royal Rose Manicure: a luxurious restorative ritual beginning with a rose petal bath, followed by enzymatic hand brightening, nail shaping, and deep hydration massage with organic shea butter.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    badge: 'Relaxation Ritual',
    duration: '45 mins',
    downtime: 'Zero',
    idealFor: ['Dry, cracked hands from frequent washing', 'Rough cuticles and untidy nails', 'Stress relief'],
    benefits: [
      'Softens hardened calluses and revitalizes dry hand skin',
      'Promotes healthy blood circulation to fingertips',
      'Leaves nails buffed to a healthy natural shine or coated in gel polish'
    ],
    targetAreas: ['Hands, Wrists & Forearms'],
    processSteps: [
      { step: 1, title: 'Rose Soak', detail: 'Warm essential oil bath softening cuticles.' },
      { step: 2, title: 'Exfoliate & Shape', detail: 'Gentle sugar polish and precise nail shaping.' },
      { step: 3, title: 'Aromatherapy Massage', detail: 'Warm shea butter hand and forearm massage.' }
    ],
    faqs: [
      { q: 'Is this suitable for men?', a: 'Yes! Our classic groom manicure is very popular among male professionals seeking neat, clean, and polished hands.' }
    ]
  },
  {
    id: 'pedicures',
    category: 'Nails & Other Services',
    categorySlug: 'other',
    name: 'Spa Foot Therapy & Callus Smoothing Pedicure',
    tagline: 'Deep heel smoothing, herbal bath & leg relaxation therapy',
    shortDesc: 'A rejuvenating clinical pedicure focused on intensive cracked heel repair, sea salt detox, and tension-melting calf massage.',
    fullDesc: 'Step onto clouds. Our Spa Foot Therapy addresses rough cracked heels and tired feet with clinical podiatric care and serene relaxation. We use sterile medical-grade autoclave tools, softening fruit-acid callus gels, and reflexology-inspired massage to restore baby-soft feet.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    badge: 'Soothing Foot Care',
    duration: '60 mins',
    downtime: 'Zero',
    idealFor: ['Cracked heels and dry soles', 'Tired, aching feet and ankles', 'Ingrown nail prevention'],
    benefits: [
      'Gently dissolves thick calluses without sharp blades or skin trauma',
      'Provides hygienic, autoclave-sterilized foot care you can trust',
      'Alleviates muscular tension and foot fatigue with deep botanical massage'
    ],
    targetAreas: ['Feet, Heels & Calves'],
    processSteps: [
      { step: 1, title: 'Herbal Foot Bath', detail: 'Epsom salts and tea tree oil soak to soothe and disinfect.' },
      { step: 2, title: 'Callus Smoothing', detail: 'AHA callus wrap and diamond foot file smoothing.' },
      { step: 3, title: 'Reflex Foot Massage', detail: 'Deep moisturizing balm massage up to the calves.' }
    ],
    faqs: [
      { q: 'How do you maintain hygiene for pedicures?', a: 'We strictly adhere to hospital-grade disinfection protocols. Metal implements are autoclaved in sealed pouches, and all files/buffers are single-use.' }
    ]
  }
];
