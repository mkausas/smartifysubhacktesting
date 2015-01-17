var smartWords = 
[["accolade", "a tangible symbol signifying approval or distinction", "a nor", "honour", "laurels", "symbol"],
["acrimony", "bitterness", "bitterness", "acerbity", "jaundice", "tartness", "thorniness", "disagreeableness"],
["angst", "an acute but unspecific feeling of anxiety", "Angst", "anxiety"],
["anomaly", "abnormality", "anomalousness", "unusual person", "abnormal condition", "abnormalcy", "abnormality", "individual", "mortal", "person", "place", "position", "somebody", "someone", "soul"],
["antidote", "a remedy that stops or controls the effects of a poison", "counterpoison", "curative", "cure", "remedy", "therapeutic"],
["avant-garde", "Ahead of the times, especially in the arts", "daring", "vanguard", "van", "new wave", "art movement", "artistic movement"],
["baroque", "having elaborate symmetrical ornamentation", "churrigueresque", "churrigueresco", "baroqueness", "artistic style", "idiom"],
// ["bona", "fide not counterfeit or copied"],
["bourgeois", "a member of the middle class; belonging to the middle class", "conservative", "materialistic", "businessperson", "burgher", "capitalist", "common man", "common person", "commoner"],
["boondoggle", "work of little or no value done merely to look busy", "dissipation", "waste", "wastefulness", "work"],
["bravado", "a swaggering show of courage", "bluster", "fanfare", "flash", "ostentation"],
["brogue", "a thick and heavy shoe; a strong dialectal accent", "brogan", "clodhopper", "work shoe", "shoe"],
["brusque", "rudely abrupt", "brusk", "curt", "short"],
["byzantine", "highly involved or intricate", "Byzantine", "convoluted", "involved", "knotty", "tangled", "tortuous", "geographic area", "geographical area", "geographical region", "Byzantine", "Asian", "Asiatic"],
["cacophony", "a loud harsh or strident noise", "blare", "blaring", "clamor", "din", "dissonance", "noise"],
["camaraderie", "trust among friends", "chumminess", "comradeliness", "comradery", "comradeship", "sociability", "sociableness"],
["capricious", "impulsive and unpredictable", "freakish", "impulsive", "whimsical"],
["carte", "blanche authority with no bounds", "menu", "bill of fare", "card", "carte du jour", "bill"],
// ["Catch-22", "a lose lose situation"],
["caustic", "sarcastic", "acerb", "acerbic", "acid", "acrid", "bitter", "blistering", "sulfurous", "sulphurous", "virulent", "vitriolic", "corrosive", "erosive", "mordant", "venomous", "chemical compound", "compound"],
["charisma", "charm", "personal appeal", "personal magnetism", "attractiveness", "interest", "interestingness"],
["cloying", "excessively sweet or sentimental", "saccharine", "syrupy", "treacly"],
["déjà vu", "the experience of thinking that a new situation had occurred before"],
["dichotomy", "a division into two parts", "duality", "categorisation", "categorization", "classification"],
["dilettante", "showing frivolous or superficial interest", "dilettantish", "dilettanteish", "sciolistic", "dabbler", "sciolist", "amateur"],
// ["élan", "enthusiastic vigor or liveliness"],
["disheveled", "in disarray", "dishevelled", "frowzled", "rumpled", "tousled"],
["ennui", "boredom", "boredom", "tedium", "dissatisfaction"],
["epitome", "a typical example", "prototype", "paradigm", "image", "abstract", "example", "model", "outline", "precis", "synopsis"],
["equanimity", "steadiness of mind under stress", "composure", "calm", "calmness", "disposition", "temperament"],
["equivocate", "to be deliberately ambiguous or unclear in order to mislead or withhold information", "beat around the bush", "tergiversate", "prevaricate", "palter", "misinform", "mislead"],
["esoteric", "intended for or understood by only a small group"],
["euphemism", "an inoffensive expression that is substituted for one that is considered offensive", "expression", "locution", "saying"],
["fait", "accompli an irreversible accomplishment"],
["fastidious", "difficult to please", "exacting"],
["faux", "pas a social blunder", "fake", "false", "imitation", "simulated"],
["fiasco", "a complete failure", "debacle", "collapse"],
["finagle", "to trick, swindle or cheat", "wangle", "manage", "accomplish", "achieve", "attain", "reach"],
["Freudian", "slip a verbal mistake that is thought to reveal an unconscious belief, thought, or emotion", "Freudian", "analyst", "brain doctor", "neurologist", "Freudian", "follower"],
["glib", "artfully persuasive in speech", "pat", "slick", "glib-tongued", "smooth-tongued"],
["gregarious", "sociable"],
["harbinger", "an omen or sign; forerunner", "forerunner", "herald", "precursor", "indicant", "indication", "announce", "annunciate", "foretell", "herald", "tell"],
["hedonist", "a pleasure seeker", "pagan", "pleasure seeker", "sensualist"],
["heresy", "a belief that rejects the orthodox tenets of a religion", "unorthodoxy", "heterodoxy", "cognitive content", "content", "mental object", "orientation"],
// ["idiosyncratic", "peculiar to the individual"],
["idyllic", "charming in a rustic way; suggestive of an idyll", "pastoral"],
["indelicate", "lacking propriety and good taste in manners and conduct", "off-color", "off-colour", "indecorous"],
["infinitesimal", "immeasurably small", "minute", "microscopic", "variable", "variable quantity"],
["insidious", "treacherous", "pernicious", "subtle"],
["junket", "a trip taken by an official often times for pleasure at public expense", "excursion", "jaunt", "outing", "pleasure trip", "expedition", "sashay", "afters", "dessert", "journey", "journeying", "sweet", "trip", "junketeer", "feast", "banquet", "eat", "host", "jaunt", "travel", "trip"],
["kitsch", "art in pretentious bad taste", "ostentatious", "pretentious", "art", "fine art"],
["litany", "any long, repetitive, or dull recital", "Litany", "address", "prayer", "speech"],
["lurid", "ghastly pale", "shocking"],
["Machiavellian", "unprincipled and crafty", "Machiavellian", "national leader", "solon", "statesman", "Machiavellian", "follower"],
["malaise", "physical discomfort (as mild sickness or depression)", "unease", "uneasiness", "discomfort", "uncomfortableness"],
["malinger", "to evade responsibility by pretending to be ill", "skulk", "fiddle", "goldbrick", "shirk", "shrink from"],
["mantra", "a commonly repeated word or phrase", "catchword", "motto", "religious text", "religious writing", "sacred text", "sacred writing", "shibboleth", "slogan"],
["maudlin", "overemotional", "bathetic", "drippy", "hokey", "mawkish", "mushy", "schmaltzy", "schmalzy", "sentimental", "soppy", "soupy", "slushy"],
["mercenary", "a professional soldier hired by a foreign army; profit oriented", "materialistic", "worldly-minded", "mercantile", "freelance", "moneymaking", "soldier of fortune", "adventurer", "venturer"],
["minimalist", "a person who practices arts in less detailed ways", "artistic movement", "artist", "conservative", "conservativist", "creative person"],
["misnomer", "an incorrect or unsuitable name", "name"],
["narcissist", "someone in love with themselves", "narcist", "selfish person"],
["nirvana", "any place of complete bliss and delight and peace", "Nirvana", "enlightenment", "Eden", "paradise", "heaven", "promised land", "Shangri-la", "beatification", "beatitude", "blessedness", "part", "region"],
// ["non", "sequitur something that does not logically follow", "not"],
// ["nouveau", "riche newly rich"],
["oblivion", "total forgetfulness", "limbo", "obliviousness", "forgetfulness", "obscurity"],
["ogle", "look at with amorous intentions", "look"],
["ostentatious", "showy", "pretentious", "kitsch"],
["ostracize", "to exclude from a group; banish; exile", "banish", "ban", "ostracise", "shun", "cast out", "blackball", "exclude", "expel", "keep out", "kick out", "shut", "shut out", "throw out"],
["panacea", "cure-all; remedy for all diseases", "Panacea", "nostrum", "catholicon", "cure-all", "curative", "cure", "Greek deity", "remedy", "therapeutic"],
["paradox", "a contradiction or dilemma", "contradiction", "contradiction in terms"],
["peevish", "easily irritated or annoyed", "cranky", "fractious", "irritable", "nettlesome", "peckish", "pettish", "petulant", "scratchy", "testy", "tetchy", "techy"],
["perfunctory", "hasty and without attention to detail", "casual", "cursory", "pro forma", "passing"],
["philistine", "a person who is uninterested in intellectual pursuits", "anti-intellectual", "Philistine", "denizen", "dweller", "geographic area", "geographical area", "geographical region", "habitant", "inhabitant", "anti-intellectual", "lowbrow", "Philistine", "denizen", "dweller", "habitant", "indweller", "inhabitant", "pleb", "plebeian"],
// ["precocious", "appearing or developing early"],
["propriety", "correct or appropriate behavior", "properness", "correctitude", "behavior", "behaviour", "conduct", "demeanor", "demeanour", "deportment"],
["quid", "pro quo this for that", "British pound", "pound", "British pound sterling", "pound sterling", "quid pro quo", "chew", "chaw", "cud", "plug", "wad", "bit", "bite", "British monetary unit", "consideration", "morsel", "retainer"],
["quintessential", "perfect example", "example", "illustration", "instance"],
// ["red", "herring any diversion intended to distract attention from the main issue", "reddish", "ruddy", "blood-red", "carmine", "cerise", "cherry", "cherry-red", "crimson", "ruby", "ruby-red", "scarlet", "violent", "reddened", "red-faced", "flushed", "redness", "Red", "Red River", "Bolshevik", "Marxist", "bolshie", "bolshy", "loss", "red ink", "amount", "amount of money", "chromatic color", "chromatic colour", "radical", "river", "spectral color", "spectral colour", "sum", "sum of money"],
["revel", "to take delight in", "revelry", "conviviality", "jollification", "merrymaking", "delight", "enjoy", "racket", "make whoopie", "make merry", "make happy", "whoop it up", "jollify", "wassail", "celebrate", "fete"],
["rhetoric", "effective writing or speaking", "grandiosity", "magniloquence", "ornateness", "grandiloquence", "palaver", "hot air", "empty words", "empty talk", "bunk", "expressive style", "hokum", "literary study", "meaninglessness", "nonsense", "nonsensicality", "style"],
["scintillating", "brilliantly clever", "bubbling", "effervescent", "sparkly", "coruscant", "fulgid", "glinting", "glistering", "glittering", "glittery", "scintillant", "aglitter"],
["spartan", "marked by simplicity and lack of luxury", "Spartan", "severe", "ascetic", "ascetical", "austere", "city", "metropolis", "Spartan", "Greek", "Hellene"],
["stigma", "a symbol of disgrace or infamy", "mark", "brand", "stain", "blemish", "defect", "mar", "reproductive structure", "spiracle", "symbol"],
["stoic", "unaffected by pleasure or pain", "stoical", "Stoic", "philosophical doctrine", "Stoic", "unemotional person", "adult", "grownup", "philosopher"],
["suave", "having a sophisticated charm", "debonair", "debonaire", "debonnaire", "politic", "smooth", "bland"],
["Svengali", "A person who exercises excessive control or influence over another person", "Svengali", "character", "fictional character", "fictitious character", "inducer", "persuader"],
["sycophant", "a self-serving flatterer, a brownnoser", "toady", "crawler", "lackey", "adulator", "flatterer"],
["teetotaler", "one who does not drink alcohol", "teetotaller", "teetotalist", "abstainer", "abstinent", "nondrinker"],
// ["tête-à-tête", "a private conversation between two people"],
["tirade", "a long, angry speech, usually very critical", "philippic", "broadside", "declamation", "denouncement", "denunciation"],
["tryst", "a secret meeting of lovers; rendezvous", "rendezvous", "assignation", "appointment", "date", "engagement"],
["ubiquitous", "being present everywhere at once", "omnipresent"],
["unrequited", "not returned in kind", "unanswered", "unreciprocated"],
["untenable", "indefensible", "indefensible"],
// ["vicarious", "done or felt for, or on behalf of, another"],
["vile", "morally reprehensible", "despicable", "ugly", "slimy", "unworthy", "worthless", "wretched", "nauseating", "nauseous", "noisome", "queasy", "loathsome", "offensive", "sickening"],
["waft", "be driven or carried along, as by the air", "pennant", "pennon", "streamer", "flag", "be adrift", "blow", "drift", "float"],
// ["white", "elephant a possession that costs more to keep than its worth", "snowy", "lily-white", "white-hot", "blank", "clean", "whitened", "ashen", "blanched", "bloodless", "livid", "white person", "Caucasian", "White", "whiteness", "Edward White", "Edward D. White", "Edward Douglas White Jr.", "Patrick White", "Patrick Victor Martindale White", "T. H. White", "Theodore Harold White", "Stanford White", "E. B. White", "Elwyn Brooks White", "Andrew D. White", "Andrew Dickson White", "White River", "egg white", "albumen", "ovalbumin", "flannel", "gabardine", "tweed", "achromatic color", "achromatic colour", "architect", "author", "chief justice", "designer", "educator", "fixings", "individual", "ingredient", "journalist", "man", "mortal", "pant", "pedagog", "pedagogue", "person", "piece", "river", "somebody", "someone", "soul", "trouser", "writer", "whiten", "color", "colour", "discolor", "discolour"],
["zealous", "enthusiastic; fervent; fanatica", "avid", "eager", "great"]]