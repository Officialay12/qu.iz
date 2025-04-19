// Main Application Controller
document.addEventListener('DOMContentLoaded', () => {
    // Initialize UI Controller
    const uiController = new UIController();
    
    // Initialize Quiz Engine
    const quizEngine = new QuizEngine(uiController);
    
    // Load questions (in a real app, this would be from an API)
    fetchQuestions().then(questions => {
        quizEngine.setQuestions(questions);
        uiController.hideLoadingScreen();
    });
    
    // Event listeners
    document.getElementById('btnStart').addEventListener('click', () => {
        uiController.showSubjectSelection();
    });
    
    document.getElementById('btnBackToWelcome').addEventListener('click', () => {
        uiController.showWelcomeScreen();
    });
    
    document.querySelectorAll('.subject-card').forEach(card => {
        card.addEventListener('click', () => {
            const subject = card.getAttribute('data-subject');
            quizEngine.setSubject(subject);
            uiController.showQuizScreen();
            quizEngine.startQuiz();
        });
    });
    
    document.getElementById('btnSkip').addEventListener('click', () => {
        quizEngine.skipQuestion();
    });
    
    document.getElementById('btnRestart').addEventListener('click', () => {
        quizEngine.resetQuiz();
        uiController.showSubjectSelection();
    });
    
    document.getElementById('btnReview').addEventListener('click', () => {
        // Implement review functionality
        console.log('Review answers');
    });
});

// Mock function to fetch questions (in a real app, use fetch API)
async function fetchQuestions() {
    try {
        // In a real application, you would fetch from an API
        // const response = await fetch('/api/questions');
        // return await response.json();
        
        // For demo purposes, return mock data
        return mockQuestions;
    } catch (error) {
        console.error('Error loading questions:', error);
        return [];
    }
}

// Mock questions data (in a real app, this would be in separate JSON files)
const mockQuestions = {
    english: [
        {
            question: "Choose the word that best completes the sentence: The students were asked to ___ their assignments by Friday.",
            options: ["submit", "submits", "submitted", "submitting"],
            answer: "submit",
            explanation: "The base form of the verb is needed after 'to' in the infinitive construction."
        },
            {
                question: "Which word is stressed on the second syllable?",
                options: ["REcord", "HAPpen", "BEAUtiful", "SUGgest"],
                answer: "HAPpen",
                explanation: "The stress pattern is hap-PEN (other options: RE-cord, BEAU-ti-ful, sug-GEST)."
            },
            {
                question: "Identify the odd word regarding plural formation:",
                options: ["Children", "Teeth", "Mice", "Roofs"],
                answer: "Roofs",
                explanation: "Irregular plurals: child→children, tooth→teeth, mouse→mice. 'Roofs' is regular (roof→roofs)."
            },
            {
                question: "Which sentence contains a dangling modifier?",
                options: [
                    "Running quickly, the bus was caught by the boy.",
                    "The boy caught the bus while running quickly.",
                    "After running quickly, the boy caught the bus.",
                    "The bus was caught by the running boy."
                ],
                answer: "Running quickly, the bus was caught by the boy.",
                explanation: "The modifier 'running quickly' incorrectly describes 'the bus' instead of 'the boy'."
            },
            {
                question: "What literary device is used in: 'The stars danced playfully in the moonlit sky'?",
                options: ["Simile", "Personification", "Hyperbole", "Metonymy"],
                answer: "Personification",
                explanation: "Stars are given human traits (dancing) - a classic example of personification."
            },
            {
                question: "Choose the correct interpretation: 'The project was a drop in the ocean'",
                options: [
                    "It caused a flood",
                    "It was insignificant",
                    "It was water-related",
                    "It was massive"
                ],
                answer: "It was insignificant",
                explanation: "Idiom meaning: a very small part of something much bigger."
            },
            {
                question: "Which word is nearest in meaning to 'EPHEMERAL'?",
                options: ["Eternal", "Fleeting", "Strong", "Visible"],
                answer: "Fleeting",
                explanation: "Ephemeral = lasting for a very short time (synonym: fleeting)."
            },
            {
                question: "Select the correct stress pattern for 'photographic':",
                options: ["PHO-to-GRAPH-ic", "pho-TO-graph-IC", "pho-to-GRAPH-ic", "PHO-to-graph-ic"],
                answer: "pho-to-GRAPH-ic",
                explanation: "Primary stress falls on '-GRAPH-' (third syllable)."
            },
            {
                question: "Identify the sentence with correct subject-verb agreement:",
                options: [
                    "Neither the teacher nor the students was present.",
                    "Each of the boys have a book.",
                    "The committee are divided in their opinions.",
                    "Ten kilometers is a long distance."
                ],
                answer: "Ten kilometers is a long distance.",
                explanation: "Distances/measurements take singular verbs ('is' correct here)."
            },
            {
                question: "What sound is produced with both lips in contact?",
                options: ["/f/", "/v/", "/p/", "/θ/"],
                answer: "/p/",
                explanation: "/p/ is bilabial (both lips); others: /f/,/v/=labiodental, /θ/=dental."
            },
            {
                question: "Which option completes this proverb: 'When the going gets tough, _____'?",
                options: [
                    "the tough gets going",
                    "the tough get going",
                    "tough people go",
                    "go toughly"
                ],
                answer: "the tough get going",
                explanation: "Correct proverb form (subject-verb agreement: 'the tough' = plural)."
            },
            {
                question: "Select the most appropriate register for: 'Your esteemed favor of the 10th inst. received'",
                options: ["Legal", "Journalistic", "Business formal", "Slang"],
                answer: "Business formal",
                explanation: "Archaic formal phrasing typical of business correspondence."
            },
            {
                question: "Which word contains a silent letter?",
                options: ["Knee", "Lamp", "Open", "Under"],
                answer: "Knee",
                explanation: "Silent 'k' in 'knee' (other words have no silent letters)."
            },
            {
                question: "What is the function of 'however' in: 'He worked hard; however, he failed'?",
                options: ["Conjunction", "Disjunct", "Adjunct", "Continuative"],
                answer: "Disjunct",
                explanation: "'However' contrasts ideas (disjunct = expresses speaker's attitude)."
            },
            {
                question: "Identify the diphthong in 'coin':",
                options: ["/ɔɪ/", "/aʊ/", "/eɪ/", "/ɪə/"],
                answer: "/ɔɪ/",
                explanation: "'Coin' /kɔɪn/ contains the diphthong /ɔɪ/ (gliding vowel sound)."
            },
            {
                question: "Which is NOT a type of noun clause?",
                options: ["Subject", "Object", "Appositive", "Subordinate"],
                answer: "Subordinate",
                explanation: "Noun clauses function as subject/object/appositive; 'subordinate' is a clause type."
            },
            {
                question: "Choose the correct passive form: 'They built this house in 1990.'",
                options: [
                    "This house was built in 1990 by them.",
                    "This house is built in 1990 by them.",
                    "This house has been built in 1990 by them.",
                    "This house built by them in 1990."
                ],
                answer: "This house was built in 1990 by them.",
                explanation: "Simple past passive = was/were + past participle."
            },
            {
                question: "What rhetorical device is: 'Ask not what your country can do for you...'?",
                options: ["Anaphora", "Chiasmus", "Litotes", "Synecdoche"],
                answer: "Chiasmus",
                explanation: "Reverse parallelism (ABBA structure) - JFK's famous quote."
            },
            {
                question: "Which word is antonymous to 'MAGNANIMOUS'?",
                options: ["Generous", "Petty", "Brave", "Intelligent"],
                answer: "Petty",
                explanation: "Magnanimous = generous; antonym = petty (small-minded)."
            },
            {
                question: "Select the correct emphatic stress response for: 'Did you BUY the book?'",
                options: [
                    "No, I BORROWED the book.",
                    "No, I bought the PEN.",
                    "No, HE bought the book.",
                    "No, I bought the BOOK."
                ],
                answer: "No, I BORROWED the book.",
                explanation: "Emphasizes the contrasting action (buy→borrowed)."
            },
            {
                question: "What is the tone of: 'The audacity! How dare you speak to me thus?'",
                options: ["Sarcastic", "Indifferent", "Indignant", "Jovial"],
                answer: "Indignant",
                explanation: "Shows anger at perceived injustice (indignant tone)."
            }
        ],
    mathematics: [
        {
            question: "If x + 3 = 7, what is the value of x?",
            options: ["2", "3", "4", "5"],
            answer: "4",
            explanation: "Subtract 3 from both sides of the equation to isolate x."
        },
            {
                question: "If 2x + 3 = 15, what is the value of x?",
                options: ["4", "5", "6", "7"],
                answer: "6",
                explanation: "2x + 3 = 15 → 2x = 12 → x = 6 (Subtract 3, then divide by 2)"
            },
            {
                question: "What is the derivative of 3x² + 4x - 5?",
                options: ["6x + 4", "3x + 4", "6x² + 4", "6x"],
                answer: "6x + 4",
                explanation: "d/dx(3x²) = 6x, d/dx(4x) = 4, d/dx(-5) = 0 → 6x + 4"
            },
            {
                question: "Simplify √(18) - √(8)",
                options: ["√2", "√10", "2√2", "5√2"],
                answer: "√2",
                explanation: "√18 = 3√2, √8 = 2√2 → 3√2 - 2√2 = √2"
            },
            {
                question: "If sinθ = 0.6, what is cosθ?",
                options: ["0.4", "0.8", "1.0", "1.2"],
                answer: "0.8",
                explanation: "sin²θ + cos²θ = 1 → cosθ = √(1 - 0.36) = √0.64 = 0.8"
            },
            {
                question: "What is the probability of getting a prime number when rolling a die?",
                options: ["1/6", "1/3", "1/2", "2/3"],
                answer: "1/2",
                explanation: "Prime numbers on die: 2, 3, 5 → 3/6 = 1/2"
            },
            {
                question: "Find the area of a circle with radius 7cm (π = 22/7)",
                options: ["44cm²", "88cm²", "154cm²", "308cm²"],
                answer: "154cm²",
                explanation: "Area = πr² = 22/7 × 7 × 7 = 154cm²"
            },
            {
                question: "Solve for x: log₂(x) = 3",
                options: ["6", "8", "9", "12"],
                answer: "8",
                explanation: "log₂(x) = 3 → x = 2³ = 8"
            },
            {
                question: "What is the next term in the sequence: 2, 5, 10, 17, ...?",
                options: ["24", "26", "28", "30"],
                answer: "26",
                explanation: "Pattern: +3, +5, +7, +9 → 17 + 9 = 26"
            },
            {
                question: "If 3x - y = 7 and x + 2y = 4, find y",
                options: ["-1", "0", "1", "2"],
                answer: "1",
                explanation: "Solve simultaneously: (1)×2 → 6x-2y=14, (2)→x+2y=4 → 7x=18 → x=18/7 → y=1"
            },
            {
                question: "Convert 45° to radians",
                options: ["π/2", "π/3", "π/4", "π/6"],
                answer: "π/4",
                explanation: "45° × (π/180°) = π/4 radians"
            },
            {
                question: "Find the median of: 5, 8, 3, 9, 1, 6",
                options: ["5", "5.5", "6", "6.5"],
                answer: "5.5",
                explanation: "Ordered: 1,3,5,6,8,9 → Median = (5+6)/2 = 5.5"
            },
            {
                question: "Factorize completely: x² - 5x + 6",
                options: ["(x-1)(x-6)", "(x-2)(x-3)", "(x+2)(x+3)", "(x-1)(x-5)"],
                answer: "(x-2)(x-3)",
                explanation: "Find two numbers that multiply to 6 and add to -5 → -2 and -3"
            },
            {
                question: "If P = {1,2,3} and Q = {2,3,4}, find P ∩ Q",
                options: ["{1,4}", "{2,3}", "{1,2,3,4}", "∅"],
                answer: "{2,3}",
                explanation: "Intersection (∩) = elements common to both sets"
            },
            {
                question: "Calculate the mean of 12, 15, 18, 20, 25",
                options: ["15", "17", "18", "20"],
                answer: "18",
                explanation: "Mean = (12+15+18+20+25)/5 = 90/5 = 18"
            },
            {
                question: "What is the value of 5! (5 factorial)?",
                options: ["20", "60", "120", "720"],
                answer: "120",
                explanation: "5! = 5×4×3×2×1 = 120"
            },
            {
                question: "Find the slope of the line 2x + 4y = 8",
                options: ["2", "1/2", "-1/2", "-2"],
                answer: "-1/2",
                explanation: "Convert to y=mx+c → y=-½x+2 → slope (m) = -½"
            },
            {
                question: "Solve the inequality: 3x - 5 < 10",
                options: ["x < 5", "x > 5", "x < 15", "x > 15"],
                answer: "x < 5",
                explanation: "3x - 5 < 10 → 3x < 15 → x < 5"
            },
            {
                question: "What is the volume of a cube with edge length 4cm?",
                options: ["16cm³", "32cm³", "64cm³", "128cm³"],
                answer: "64cm³",
                explanation: "Volume = edge³ = 4×4×4 = 64cm³"
            },
            {
                question: "If tanθ = 3/4, what is sinθ?",
                options: ["3/5", "4/5", "5/3", "5/4"],
                answer: "3/5",
                explanation: "tanθ = opp/adj = 3/4 → hyp=5 → sinθ=opp/hyp=3/5"
            },
            {
                question: "Find the compound interest on ₦10,000 at 5% for 2 years",
                options: ["₦500", "₦1,000", "₦1,025", "₦1,050"],
                answer: "₦1,025",
                explanation: "CI = P[(1 + r)ⁿ - 1] = 10000[(1.05)² - 1] = ₦1,025"
            }
        ],
    physics: [
        {
            question: "What is the SI unit of force?",
            options: ["Joule", "Watt", "Newton", "Pascal"],
            answer: "Newton",
            explanation: "Force is measured in Newtons, named after Sir Isaac Newton."
        },
            {
                question: "Which of the following phenomena demonstrates wave nature of light?",
                options: ["Photoelectric effect", "Compton scattering", "Interference", "Blackbody radiation"],
                answer: "Interference",
                explanation: "Interference patterns prove light behaves as a wave."
            },
            {
                question: "What is the work done when a force of 10N moves an object 5m?",
                options: ["2J", "15J", "50J", "0.5J"],
                answer: "50J",
                explanation: "Work = Force × Distance = 10N × 5m = 50J"
            },
            {
                question: "In a series circuit, what happens to total resistance when more resistors are added?",
                options: ["Decreases", "Increases", "Remains constant", "Becomes zero"],
                answer: "Increases",
                explanation: "Series resistances add up: R_total = R₁ + R₂ + ..."
            },
            {
                question: "Which instrument measures atmospheric pressure?",
                options: ["Hydrometer", "Barometer", "Manometer", "Hygrometer"],
                answer: "Barometer",
                explanation: "Barometers measure air pressure, invented by Evangelista Torricelli."
            },
            {
                question: "What is the frequency of an alternating current with period 0.02s?",
                options: ["20Hz", "50Hz", "100Hz", "0.02Hz"],
                answer: "50Hz",
                explanation: "Frequency = 1/Period = 1/0.02s = 50Hz"
            },
            {
                question: "Which law states that current is proportional to voltage?",
                options: ["Faraday's Law", "Ohm's Law", "Lenz's Law", "Coulomb's Law"],
                answer: "Ohm's Law",
                explanation: "Ohm's Law: V = IR (Voltage ∝ Current at constant resistance)."
            },
            {
                question: "What type of energy is stored in a stretched spring?",
                options: ["Kinetic", "Thermal", "Potential", "Radiant"],
                answer: "Potential",
                explanation: "Elastic potential energy = ½kx² where k is spring constant."
            },
            {
                question: "Which radiation is most penetrating?",
                options: ["Alpha", "Beta", "Gamma", "X-rays"],
                answer: "Gamma",
                explanation: "Gamma rays have highest penetration power, requiring lead shielding."
            },
            {
                question: "What is the speed of sound in air at 20°C?",
                options: ["330m/s", "343m/s", "300,000m/s", "220m/s"],
                answer: "343m/s",
                explanation: "Speed of sound varies with temperature: ~343m/s at 20°C."
            },
            {
                question: "Which color of light has the longest wavelength?",
                options: ["Violet", "Blue", "Green", "Red"],
                answer: "Red",
                explanation: "Visible light spectrum: Red (700nm) > Violet (400nm) in wavelength."
            },
            {
                question: "What principle explains why ships float?",
                options: ["Bernoulli's", "Pascal's", "Archimedes'", "Hooke's"],
                answer: "Archimedes'",
                explanation: "Buoyant force equals weight of displaced fluid (Archimedes' Principle)."
            },
            {
                question: "In nuclear reactions, what is conserved?",
                options: ["Mass only", "Charge only", "Mass-energy", "Protons only"],
                answer: "Mass-energy",
                explanation: "Einstein's mass-energy equivalence (E=mc²) must be conserved."
            },
            {
                question: "What happens to resistance when wire length doubles?",
                options: ["Halves", "Doubles", "Quadruples", "Unchanged"],
                answer: "Doubles",
                explanation: "Resistance ∝ Length (R = ρL/A where ρ is resistivity)."
            },
            {
                question: "Which device converts mechanical to electrical energy?",
                options: ["Motor", "Generator", "Transformer", "Rectifier"],
                answer: "Generator",
                explanation: "Generators use electromagnetic induction (Faraday's Law)."
            },
            {
                question: "What is the angle between magnetic field and normal to a plane?",
                options: ["0°", "30°", "45°", "90°"],
                answer: "90°",
                explanation: "Maximum flux occurs when field is perpendicular (90°) to surface."
            },
            {
                question: "Which quantity remains constant in uniform circular motion?",
                options: ["Velocity", "Acceleration", "Speed", "Displacement"],
                answer: "Speed",
                explanation: "Speed (scalar) is constant; velocity (vector) changes direction."
            },
            {
                question: "What is the unit of capacitance?",
                options: ["Ohm", "Farad", "Henry", "Tesla"],
                answer: "Farad",
                explanation: "Capacitance C = Q/V, measured in Farads (F)."
            },
            {
                question: "Which gas law relates volume and temperature?",
                options: ["Boyle's", "Charles's", "Gay-Lussac's", "Avogadro's"],
                answer: "Charles's",
                explanation: "Charles's Law: V ∝ T at constant pressure."
            },
            {
                question: "What is the critical angle for total internal reflection?",
                options: ["0°", "42°", "90°", "Depends on materials"],
                answer: "Depends on materials",
                explanation: "Critical angle θ_c = sin⁻¹(n₂/n₁) where n is refractive index."
            }
        ],
        // More questions...

 
      chemistry: [
        {
            question: "What is the chemical symbol for gold?",
            options: ["Go", "Gd", "Au", "Ag"],
            answer: "Au",
            explanation: "The symbol Au comes from the Latin word for gold, 'aurum'."
        },
            {
                question: "What is the atomic number of an element with 12 protons and 12 neutrons?",
                options: ["12", "24", "6", "18"],
                answer: "12",
                explanation: "Atomic number = number of protons = 12 (neutrons don't affect atomic number)."
            },
            {
                question: "Which of these is a property of transition metals?",
                options: ["Form colored compounds", "Low densities", "Poor conductors", "Non-reactive"],
                answer: "Form colored compounds",
                explanation: "Transition metals form colored compounds due to d-d electron transitions."
            },
            {
                question: "What is the pH of a neutral solution at 25°C?",
                options: ["0", "7", "14", "10"],
                answer: "7",
                explanation: "pH 7 is neutral (equal H⁺ and OH⁻ concentrations in water)."
            },
            {
                question: "Which gas is produced when dilute HCl reacts with zinc?",
                options: ["Oxygen", "Chlorine", "Hydrogen", "Nitrogen"],
                answer: "Hydrogen",
                explanation: "Zn + 2HCl → ZnCl₂ + H₂↑ (metal-acid reactions produce hydrogen gas)."
            },
            {
                question: "What is the IUPAC name for CH₃CH₂OH?",
                options: ["Methanol", "Ethanol", "Propanol", "Butanol"],
                answer: "Ethanol",
                explanation: "2-carbon chain (eth-) with -OH group (alcohol suffix -ol)."
            },
            {
                question: "Which process separates crude oil into fractions?",
                options: ["Filtration", "Distillation", "Chromatography", "Evaporation"],
                answer: "Distillation",
                explanation: "Fractional distillation separates hydrocarbons by boiling points."
            },
            {
                question: "What type of reaction is: 2H₂ + O₂ → 2H₂O?",
                options: ["Decomposition", "Neutralization", "Combustion", "Displacement"],
                answer: "Combustion",
                explanation: "Hydrogen burning in oxygen is a classic combustion reaction."
            },
            {
                question: "Which element is in Group 1 but NOT an alkali metal?",
                options: ["Lithium", "Sodium", "Hydrogen", "Potassium"],
                answer: "Hydrogen",
                explanation: "Hydrogen is in Group 1 but has unique properties unlike alkali metals."
            },
            {
                question: "What is the shape of a molecule with 4 bond pairs (no lone pairs)?",
                options: ["Linear", "Trigonal planar", "Tetrahedral", "Octahedral"],
                answer: "Tetrahedral",
                explanation: "VSEPR theory predicts 109.5° bond angles for 4 bonding pairs."
            },
            {
                question: "Which indicator turns pink in alkaline solutions?",
                options: ["Methyl orange", "Phenolphthalein", "Litmus", "Universal indicator"],
                answer: "Phenolphthalein",
                explanation: "Phenolphthalein is colorless in acid, pink in pH > 8.3."
            },
            {
                question: "What is the oxidation state of sulfur in H₂SO₄?",
                options: ["+2", "+4", "+6", "-2"],
                answer: "+6",
                explanation: "H₂SO₄: 2(+1) + S + 4(-2) = 0 ⇒ S = +6"
            },
            {
                question: "Which compound causes temporary hardness of water?",
                options: ["CaSO₄", "Ca(HCO₃)₂", "NaCl", "MgCO₃"],
                answer: "Ca(HCO₃)₂",
                explanation: "Temporary hardness is caused by soluble calcium/magnesium bicarbonates."
            },
            {
                question: "What is the product when ethanol undergoes complete combustion?",
                options: ["CO₂ + H₂", "CO + H₂O", "CO₂ + H₂O", "C + H₂O"],
                answer: "CO₂ + H₂O",
                explanation: "C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O (complete combustion)."
            },
            {
                question: "Which metal reacts violently with cold water?",
                options: ["Copper", "Iron", "Potassium", "Zinc"],
                answer: "Potassium",
                explanation: "Alkali metals (Group 1) react vigorously: 2K + 2H₂O → 2KOH + H₂↑"
            },
            {
                question: "What is the mass number of an atom with 17p, 18n, and 17e?",
                options: ["17", "18", "35", "52"],
                answer: "35",
                explanation: "Mass number = protons + neutrons = 17 + 18 = 35."
            },
            {
                question: "Which process represents oxidation?",
                options: ["Gain of electrons", "Loss of oxygen", "Loss of electrons", "Decrease in oxidation state"],
                answer: "Loss of electrons",
                explanation: "Oxidation is loss of electrons (OIL RIG: Oxidation Is Loss)."
            },
            {
                question: "What is the main component of natural gas?",
                options: ["Ethane", "Propane", "Methane", "Butane"],
                answer: "Methane",
                explanation: "Natural gas is 70-90% methane (CH₄)."
            },
            {
                question: "Which alloy contains copper and zinc?",
                options: ["Steel", "Bronze", "Brass", "Duralumin"],
                answer: "Brass",
                explanation: "Brass = Cu + Zn; Bronze = Cu + Sn."
            },
            {
                question: "What is the test for chlorine gas?",
                options: ["Turns limewater milky", "Bleaches damp litmus paper", "Pops with a lighted splint", "Turns cobalt chloride paper pink"],
                answer: "Bleaches damp litmus paper",
                explanation: "Chlorine bleaches colored substances due to its strong oxidizing ability."
            },
            {
                question: "Which hydrocarbon is unsaturated?",
                options: ["Hexane", "Cyclohexane", "Ethene", "Methane"],
                answer: "Ethene",
                explanation: "Ethene (C₂H₄) has a C=C double bond, making it unsaturated."
            }
        ]
        // More questions...
};