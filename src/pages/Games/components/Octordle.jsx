import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheck,
  FaKeyboard,
  FaRedo,
  FaTrophy,
} from "react-icons/fa";
import styles from "./Octordle.module.css";
import { setSEO } from "../../../utils/seo";

/* =========================================================
   CONSTANTS
========================================================= */

const WORD_LENGTH = 5;

const BOARD_COUNT = 8;

const MAX_ATTEMPTS = 13;

const GAME_STATUS = {
  PLAYING: "playing",
  WON: "won",
  LOST: "lost",
};

const LETTER_STATUS = {
  CORRECT: "correct",
  PRESENT: "present",
  ABSENT: "absent",
  EMPTY: "empty",
};


/* =========================================================
   WORD DATA
========================================================= */

/**
 * Self-contained five-letter target-word collection.
 *
 * Eight different words are selected for every game.
 *
 * The list can later be expanded without changing the
 * game logic.
 */
const TARGET_WORDS = [
  "ABACK", "ABAFT", "ABASE", "ABATE", "ABBEY", "ABBOT", "ABHOR", "ABIDE", "ABLER", "ABODE", "ABOUT", "ABOVE", "ABUSE", "ABYSS", "ACHED", "ACHES", "ACIDS", "ACORN", "ACRES", "ACRID", "ACTED", "ACTOR", "ACUTE", "ADAGE", "ADAPT", "ADDED", "ADDER", "ADEPT", "ADIEU", "ADMIT", "ADOBE", "ADOPT", "ADORE", "ADORN", "ADULT", "AEGIS", "AEONS", "AFFIX", "AFIRE", "AFOOT", "AFTER", "AGAIN", "AGAPE", "AGATE", "AGENT", "AGILE", "AGING", "AGLOW", "AGONY", "AGREE",
  "AHEAD", "AIDED", "AIDES", "AILED", "AIMED", "AIRED", "AISLE", "ALARM", "ALBUM", "ALDER", "ALERT", "ALIAS", "ALIBI", "ALIEN", "ALIKE", "ALIVE", "ALLAY", "ALLEY", "ALLOT", "ALLOW", "ALLOY", "ALOES", "ALOFT", "ALONE", "ALONG", "ALOOF", "ALOUD", "ALPHA", "ALTAR", "ALTER", "ALTOS", "AMASS", "AMAZE", "AMBER", "AMBLE", "AMEND", "AMIGO", "AMISS", "AMITY", "AMONG", "AMOUR", "AMPLE", "AMPLY", "AMUSE", "ANGEL", "ANGER", "ANGLE", "ANGRY", "ANGST", "ANIME",
  "ANKLE", "ANNEX", "ANNOY", "ANNUL", "ANTES", "ANTIC", "ANVIL", "APACE", "APART", "APING", "APPAL", "APPLE", "APPLY", "APRON", "APTLY", "AREAS", "ARENA", "ARGUE", "ARISE", "ARMED", "AROMA", "AROSE", "ARRAY", "ARROW", "ARSON", "ASHEN", "ASHES", "ASIDE", "ASKED", "ASKEW", "ASPEN", "ASSAY", "ASSES", "ASSET", "ASTER", "ASTIR", "ATLAS", "ATOLL", "ATOMS", "ATONE", "ATTAR", "ATTIC", "AUDIO", "AUDIT", "AUGER", "AUGHT", "AUGUR", "AUNTS", "AURAS", "AUTOS",
  "AVAIL", "AVERS", "AVERT", "AVOID", "AVOWS", "AWAIT", "AWAKE", "AWARD", "AWARE", "AWFUL", "AWOKE", "AXIOM", "AXLES", "AZURE", "BABEL", "BABES", "BACKS", "BACON", "BADGE", "BADLY", "BAGGY", "BAITS", "BAIZE", "BAKED", "BAKER", "BALES", "BALLS", "BALMY", "BANAL", "BANDS", "BANDY", "BANGS", "BANJO", "BANKS", "BANNS", "BARBS", "BARDS", "BARED", "BARGE", "BARKS", "BARNS", "BARON", "BASAL", "BASED", "BASER", "BASES", "BASIC", "BASIL", "BASIN", "BASIS",
  "BASSO", "BASTE", "BATCH", "BATED", "BATHE", "BATHS", "BATON", "BAYOU", "BEACH", "BEADS", "BEADY", "BEAKS", "BEAMS", "BEANS", "BEARD", "BEARS", "BEAST", "BEAUX", "BEECH", "BEETS", "BEFIT", "BEGAN", "BEGAT", "BEGET", "BEGIN", "BEGOT", "BEGUN", "BEING", "BELIE", "BELLE", "BELLS", "BELLY", "BELOW", "BELTS", "BENCH", "BENDS", "BERGS", "BERRY", "BERTH", "BERYL", "BESET", "BESOM", "BEVEL", "BIBLE", "BIDED", "BIDES", "BIGHT", "BIGOT", "BILGE", "BILLS",
  "BILLY", "BINDS", "BIPED", "BIRCH", "BIRDS", "BIRTH", "BISON", "BITCH", "BITES", "BLACK", "BLADE", "BLAME", "BLAND", "BLANK", "BLARE", "BLAST", "BLAZE", "BLEAK", "BLEAT", "BLEED", "BLEND", "BLENT", "BLESS", "BLEST", "BLIND", "BLINK", "BLISS", "BLOCK", "BLOCS", "BLOND", "BLOOD", "BLOOM", "BLOTS", "BLOWN", "BLOWS", "BLUER", "BLUES", "BLUFF", "BLUNT", "BLURT", "BLUSH", "BOARD", "BOARS", "BOAST", "BOATS", "BODED", "BODES", "BOGGY", "BOGUS", "BOILS",
  "BOLES", "BOLTS", "BOMBS", "BONDS", "BONED", "BONES", "BONNY", "BONUS", "BOOBY", "BOOKS", "BOOMS", "BOONS", "BOORS", "BOOST", "BOOTH", "BOOTS", "BOOTY", "BOOZE", "BORAX", "BORED", "BORES", "BORNE", "BOSOM", "BOUGH", "BOUND", "BOUTS", "BOWED", "BOWEL", "BOWER", "BOWLS", "BOXED", "BOXER", "BOXES", "BRACE", "BRAGS", "BRAID", "BRAIN", "BRAKE", "BRAND", "BRASS", "BRATS", "BRAVE", "BRAVO", "BRAWL", "BRAWN", "BREAD", "BREAK", "BREED", "BRIAR", "BRIBE",
  "BRICK", "BRIDE", "BRIEF", "BRIER", "BRIGS", "BRIMS", "BRINE", "BRING", "BRINK", "BRINY", "BRISK", "BROAD", "BROIL", "BROKE", "BROOD", "BROOK", "BROOM", "BROTH", "BROWN", "BROWS", "BRUIN", "BRUNT", "BRUSH", "BRUTE", "BUCKS", "BUDGE", "BUGGY", "BUGLE", "BUILD", "BUILT", "BULBS", "BULGE", "BULKS", "BULKY", "BULLS", "BULLY", "BUMPS", "BUNCH", "BUNKS", "BUOYS", "BURLY", "BURNS", "BURNT", "BURRO", "BURRS", "BURST", "BUSHY", "BUSTS", "BUTTE", "BUTTS",
  "BUXOM", "BUYER", "CABAL", "CABBY", "CABIN", "CABLE", "CACAO", "CACHE", "CADET", "CADRE", "CAGED", "CAGES", "CAIRN", "CAKED", "CAKES", "CALLS", "CALMS", "CALYX", "CAMEL", "CAMEO", "CAMPS", "CANAL", "CANDY", "CANES", "CANNY", "CANOE", "CANON", "CANTO", "CAPER", "CAPES", "CAPON", "CARDS", "CARED", "CARES", "CARGO", "CAROL", "CARRY", "CARTS", "CARVE", "CASED", "CASES", "CASKS", "CASTE", "CASTS", "CATCH", "CATER", "CAUSE", "CAVED", "CAVES", "CAVIL",
  "CEASE", "CEDAR", "CEDED", "CELLS", "CENTS", "CHAFE", "CHAFF", "CHAIN", "CHAIR", "CHALK", "CHAMP", "CHANT", "CHAOS", "CHAPS", "CHARM", "CHART", "CHARY", "CHASE", "CHASM", "CHATS", "CHEAP", "CHEAT", "CHECK", "CHEEK", "CHEER", "CHEFS", "CHESS", "CHEST", "CHEWY", "CHICK", "CHIDE", "CHIEF", "CHILD", "CHILL", "CHIME", "CHINA", "CHINK", "CHINS", "CHIPS", "CHIRP", "CHOIR", "CHOKE", "CHOPS", "CHORD", "CHOSE", "CHUCK", "CHUMP", "CHUMS", "CHUNK", "CHURL", "CHURN",
  "CHUTE", "CIDER", "CIGAR", "CINCH", "CIRCA", "CITED", "CITES", "CIVET", "CIVIC", "CIVIL", "CLACK", "CLAIM", "CLAMP", "CLAMS", "CLANG", "CLANK", "CLANS", "CLAPS", "CLASH", "CLASP", "CLASS", "CLAWS", "CLEAN", "CLEAR", "CLEFS", "CLEFT", "CLERK", "CLEWS", "CLICK", "CLIFF", "CLIMB", "CLIME", "CLING", "CLINK", "CLIPS", "CLOAK", "CLOCK", "CLODS", "CLOGS", "CLOSE", "CLOTH", "CLOUD", "CLOUT", "CLOVE", "CLOWN", "CLUBS", "CLUCK", "CLUES", "CLUMP", "CLUNG",
  "COACH", "COALS", "COAST", "COATS", "COBRA", "COCKS", "COCOA", "CODES", "COILS", "COINS", "COLDS", "COLIC", "COLON", "COLTS", "COMBS", "COMER", "COMES", "COMET", "COMIC", "COMMA", "CONCH", "CONES", "CONIC", "COOED", "COOKS", "COOLS", "COPRA", "COPSE", "CORAL", "CORDS", "CORES", "CORKS", "CORNS", "CORPS", "COSTS", "COTES", "COUCH", "COUGH", "COULD", "COUNT", "COUPE", "COUPS", "COURT", "COVER", "COVES", "COVET", "COVEY", "COWED", "COWER", "COYLY",
  "COZEN", "CRABS", "CRACK", "CRAFT", "CRAGS", "CRAMP", "CRANE", "CRANK", "CRAPE", "CRASH", "CRASS", "CRATE", "CRAVE", "CRAWL", "CRAZE", "CRAZY", "CREAK", "CREAM", "CREDO", "CREED", "CREEK", "CREEP", "CREPE", "CREPT", "CRESS", "CREST", "CREWS", "CRIBS", "CRICK", "CRIED", "CRIER", "CRIES", "CRIME", "CRIMP", "CRISP", "CROAK", "CROCK", "CRONE", "CRONY", "CROOK", "CROPS", "CROSS", "CROUP", "CROWD", "CROWN", "CROWS", "CRUDE", "CRUEL", "CRUMB", "CRUSH",
  "CRUST", "CRYPT", "CUBES", "CUBIC", "CUBIT", "CUFFS", "CULTS", "CURDS", "CURED", "CURES", "CURLS", "CURLY", "CURRY", "CURSE", "CURST", "CURVE", "CYCLE", "CYNIC", "DADDY", "DAILY", "DAIRY", "DAISY", "DALES", "DALLY", "DAMES", "DAMPS", "DANCE", "DANDY", "DARED", "DARES", "DARTS", "DATED", "DATES", "DATUM", "DAUBS", "DAUNT", "DAWNS", "DAZED", "DEALS", "DEALT", "DEANS", "DEARS", "DEATH", "DEBAR", "DEBIT", "DEBTS", "DEBUT", "DECAY", "DECKS", "DECOY",
  "DECRY", "DEEDS", "DEEMS", "DEEPS", "DEFER", "DEIGN", "DEITY", "DELAY", "DELLS", "DELTA", "DELVE", "DEMON", "DEMUR", "DENSE", "DENTS", "DEPOT", "DEPTH", "DERBY", "DESKS", "DETER", "DEUCE", "DEVIL", "DIARY", "DICED", "DICES", "DICTA", "DIETS", "DIGIT", "DIKES", "DIMES", "DIMLY", "DINED", "DINER", "DINES", "DINGY", "DIRGE", "DIRTY", "DISCS", "DISKS", "DITCH", "DITTO", "DITTY", "DIVAN", "DIVED", "DIVER", "DIVES", "DIZZY", "DOCKS", "DODGE", "DOERS",
  "DOGMA", "DOING", "DOLED", "DOLLS", "DOMED", "DOMES", "DONOR", "DOOMS", "DOORS", "DOSED", "DOSES", "DOTED", "DOTES", "DOUBT", "DOUGH", "DOVES", "DOWDY", "DOWNS", "DOWNY", "DOWRY", "DOZED", "DOZEN", "DRAFT", "DRAGS", "DRAIN", "DRAKE", "DRAMA", "DRAMS", "DRANK", "DRAPE", "DRAWL", "DRAWN", "DRAWS", "DRAYS", "DREAD", "DREAM", "DREGS", "DRESS", "DRIED", "DRIER", "DRIES", "DRIFT", "DRILL", "DRILY", "DRINK", "DRIPS", "DRIVE", "DROLL", "DRONE", "DROOP",
  "DROPS", "DROSS", "DROVE", "DROWN", "DRUGS", "DRUMS", "DRUNK", "DRYLY", "DUCAL", "DUCAT", "DUCHY", "DUCKS", "DUCTS", "DUELS", "DUETS", "DUKES", "DULLY", "DUMMY", "DUMPS", "DUMPY", "DUNCE", "DUNES", "DUNNO", "DUPED", "DUPES", "DUSKY", "DUSTY", "DWARF", "DWELL", "DWELT", "DYING", "DYKES", "EAGER", "EAGLE", "EARLS", "EARLY", "EARNS", "EARTH", "EASED", "EASEL", "EASES", "EATEN", "EATER", "EAVES", "EBBED", "EBONY", "EDGED", "EDGES", "EDICT", "EDIFY",
  "EERIE", "EGGED", "EIGHT", "EJECT", "ELATE", "ELBOW", "ELDER", "ELECT", "ELEGY", "ELFIN", "ELITE", "ELOPE", "ELUDE", "ELVES", "EMAIL", "EMITS", "EMPTY", "ENACT", "ENDED", "ENDOW", "ENEMY", "ENJOY", "ENNUI", "ENROL", "ENSUE", "ENTER", "ENTRY", "ENVOY", "EPICS", "EPOCH", "EQUAL", "EQUIP", "ERASE", "ERECT", "ERRED", "ERROR", "ESSAY", "ETHER", "ETHIC", "EVADE", "EVENT", "EVERY", "EVILS", "EVOKE", "EXACT", "EXALT", "EXCEL", "EXERT", "EXILE", "EXIST",
  "EXITS", "EXPEL", "EXTOL", "EXTRA", "EXULT", "EYING", "EYRIE", "FABLE", "FACED", "FACES", "FACTS", "FADED", "FADES", "FAILS", "FAINT", "FAIRS", "FAIRY", "FAITH", "FAKIR", "FALLS", "FALSE", "FAMED", "FANCY", "FANGS", "FARCE", "FARED", "FARES", "FARMS", "FASTS", "FATAL", "FATED", "FATES", "FATTY", "FAULT", "FAUNA", "FAUNS", "FAWNS", "FEARS", "FEAST", "FEATS", "FEEDS", "FEELS", "FEIGN", "FEINT", "FELLS", "FELON", "FENCE", "FERAL", "FERNS", "FERRY",
  "FETCH", "FETED", "FETID", "FETUS", "FEUDS", "FEVER", "FEWER", "FICHE", "FIEFS", "FIELD", "FIEND", "FIERY", "FIFES", "FIFTH", "FIFTY", "FIGHT", "FILCH", "FILED", "FILES", "FILET", "FILLS", "FILLY", "FILMS", "FILMY", "FILTH", "FINAL", "FINCH", "FINDS", "FINED", "FINER", "FINES", "FINIS", "FINNY", "FIORD", "FIRED", "FIRES", "FIRMS", "FIRST", "FISHY", "FISTS", "FITLY", "FIVES", "FIXED", "FIXER", "FIXES", "FJORD", "FLAGS", "FLAIL", "FLAIR", "FLAKE",
  "FLAKY", "FLAME", "FLANK", "FLAPS", "FLARE", "FLASH", "FLASK", "FLATS", "FLAWS", "FLEAS", "FLECK", "FLEES", "FLEET", "FLESH", "FLICK", "FLIER", "FLIES", "FLING", "FLINT", "FLIRT", "FLITS", "FLOAT", "FLOCK", "FLOES", "FLOOD", "FLOOR", "FLORA", "FLOSS", "FLOUR", "FLOUT", "FLOWN", "FLOWS", "FLUES", "FLUFF", "FLUID", "FLUKE", "FLUME", "FLUNG", "FLUSH", "FLUTE", "FLYER", "FOAMS", "FOAMY", "FOCAL", "FOCUS", "FOGGY", "FOILS", "FOIST", "FOLDS", "FOLIO",
  "FOLKS", "FOLLY", "FOODS", "FOOLS", "FORAY", "FORCE", "FORDS", "FORGE", "FORGO", "FORKS", "FORMS", "FORTE", "FORTH", "FORTS", "FORTY", "FORUM", "FOUND", "FOUNT", "FOURS", "FOWLS", "FOXES", "FOYER", "FRAIL", "FRAME", "FRANC", "FRANK", "FRAUD", "FREAK", "FREED", "FREER", "FREES", "FRESH", "FRETS", "FRIAR", "FRIED", "FRILL", "FRISK", "FROCK", "FROGS", "FROND", "FRONT", "FROST", "FROTH", "FROWN", "FROZE", "FRUIT", "FUDGE", "FUELS", "FUGUE", "FULLY",
  "FUMED", "FUMES", "FUNDS", "FUNGI", "FUNNY", "FURRY", "FURZE", "FUSED", "FUSES", "FUSSY", "FUZZY", "GABLE", "GAILY", "GAINS", "GALES", "GALLS", "GAMES", "GAMIN", "GAMMA", "GAMUT", "GANGS", "GAPED", "GAPES", "GASES", "GASPS", "GATES", "GAUDY", "GAUGE", "GAUNT", "GAUZE", "GAUZY", "GAVEL", "GAWKY", "GAYER", "GAYLY", "GAZED", "GAZER", "GAZES", "GEARS", "GEESE", "GENIE", "GENII", "GENRE", "GENTS", "GENUS", "GERMS", "GHOST", "GIANT", "GIBES", "GIDDY",
  "GIFTS", "GILDS", "GILLS", "GIMME", "GIPSY", "GIRDS", "GIRLS", "GIRTH", "GIVEN", "GIVES", "GLADE", "GLAND", "GLARE", "GLASS", "GLAZE", "GLEAM", "GLEAN", "GLENS", "GLIDE", "GLINT", "GLOAT", "GLOBE", "GLOOM", "GLORY", "GLOSS", "GLOVE", "GLOWS", "GLUED", "GNASH", "GNATS", "GNAWS", "GNOME", "GOADS", "GOALS", "GOATS", "GODLY", "GOING", "GOLLY", "GONGS", "GONNA", "GOODS", "GOODY", "GOOSE", "GORED", "GORGE", "GORSE", "GOTTA", "GOUGE", "GOURD", "GOUTY",
  "GOWNS", "GRABS", "GRACE", "GRADE", "GRAFT", "GRAIN", "GRAMS", "GRAND", "GRANT", "GRAPE", "GRAPH", "GRASP", "GRASS", "GRATE", "GRAVE", "GRAVY", "GRAZE", "GREAT", "GREED", "GREEN", "GREET", "GREYS", "GRIEF", "GRILL", "GRIME", "GRIMY", "GRIND", "GRINS", "GRIPE", "GRIPS", "GRIST", "GROAN", "GROIN", "GROOM", "GROPE", "GROSS", "GROUP", "GROVE", "GROWL", "GROWN", "GROWS", "GRUBS", "GRUEL", "GRUFF", "GRUNT", "GUANO", "GUARD", "GUESS", "GUEST", "GUIDE",
  "GUILD", "GUILE", "GUILT", "GUISE", "GULCH", "GULFS", "GULLS", "GULLY", "GUMMY", "GUSTO", "GUSTS", "GUSTY", "GYPSY", "HABIT", "HACKS", "HAILS", "HAIRS", "HAIRY", "HALED", "HALLS", "HALTS", "HALVE", "HANDS", "HANDY", "HANGS", "HAPPY", "HARDY", "HAREM", "HARES", "HARMS", "HARPS", "HARPY", "HARRY", "HARSH", "HARTS", "HASTE", "HASTY", "HATCH", "HATED", "HATER", "HAULS", "HAVEN", "HAVOC", "HAWKS", "HAZEL", "HEADS", "HEADY", "HEALS", "HEAPS", "HEARD",
  "HEARS", "HEART", "HEATH", "HEATS", "HEAVE", "HEAVY", "HEDGE", "HEEDS", "HEELS", "HEIRS", "HELIX", "HELLO", "HELMS", "HELPS", "HENCE", "HERBS", "HERDS", "HERON", "HEROS", "HEWED", "HIDES", "HILLS", "HILLY", "HILTS", "HINDS", "HINGE", "HINTS", "HIRED", "HIRES", "HITCH", "HIVES", "HOARD", "HOARY", "HOBBY", "HOIST", "HOLDS", "HOLES", "HOLLY", "HOMES", "HONEY", "HOODS", "HOOFS", "HOOKS", "HOOPS", "HOOTS", "HOPED", "HOPES", "HORDE", "HORNS", "HORNY",
  "HORSE", "HOSTS", "HOTEL", "HOTLY", "HOUND", "HOURS", "HOUSE", "HOVEL", "HOVER", "HOWLS", "HULKS", "HULLS", "HUMAN", "HUMID", "HUMPS", "HUMUS", "HUNCH", "HUNTS", "HURLS", "HURRY", "HURTS", "HUSKS", "HUSKY", "HUSSY", "HYDRA", "HYENA", "HYMNS", "ICILY", "ICING", "IDEAL", "IDEAS", "IDIOM", "IDIOT", "IDLED", "IDLER", "IDOLS", "IDYLL", "IGLOO", "IMAGE", "IMBUE", "IMPEL", "IMPLY", "INANE", "INCUR", "INDEX", "INEPT", "INERT", "INFER", "INGOT", "INLET",
  "INNER", "INTER", "INURE", "IRATE", "IRKED", "IRONS", "IRONY", "ISLES", "ISLET", "ISSUE", "ITEMS", "IVORY", "JACKS", "JADED", "JAILS", "JAUNT", "JEANS", "JEERS", "JELLY", "JERKS", "JERKY", "JESTS", "JETTY", "JEWEL", "JIFFY", "JOINS", "JOINT", "JOKED", "JOKER", "JOKES", "JOLLY", "JOUST", "JOYED", "JUDGE", "JUICE", "JUICY", "JUMPS", "JUNKS", "JUNTA", "JUROR", "KARMA", "KEELS", "KEEPS", "KETCH", "KEYED", "KHAKI", "KICKS", "KILLS", "KINDA", "KINDS",
  "KINGS", "KIOSK", "KITES", "KNACK", "KNAVE", "KNEAD", "KNEEL", "KNEES", "KNELL", "KNELT", "KNIFE", "KNITS", "KNOBS", "KNOCK", "KNOLL", "KNOTS", "KNOWN", "KNOWS", "LABEL", "LACED", "LACES", "LACKS", "LADEN", "LADLE", "LAGER", "LAIRS", "LAITY", "LAKES", "LAMBS", "LAMED", "LAMES", "LAMPS", "LANCE", "LANDS", "LANES", "LANKY", "LAPEL", "LAPSE", "LARCH", "LARGE", "LARGO", "LARKS", "LARVA", "LASSO", "LASTS", "LATCH", "LATER", "LATHE", "LATHS", "LAUGH",
  "LAWNS", "LAYER", "LEADS", "LEAFY", "LEAKS", "LEAKY", "LEANS", "LEAPS", "LEAPT", "LEARN", "LEASE", "LEASH", "LEAST", "LEAVE", "LEDGE", "LEECH", "LEEKS", "LEGAL", "LEMME", "LEMON", "LENDS", "LEPER", "LEVEE", "LEVEL", "LEVER", "LIARS", "LIBEL", "LICKS", "LIEGE", "LIENS", "LIFTS", "LIGHT", "LIKED", "LIKEN", "LIKER", "LIKES", "LILAC", "LIMBO", "LIMBS", "LIMES", "LIMIT", "LINED", "LINEN", "LINER", "LINES", "LINGO", "LINKS", "LIONS", "LISTS", "LITHE",
  "LIVED", "LIVER", "LIVES", "LIVID", "LLAMA", "LOADS", "LOAMY", "LOANS", "LOATH", "LOBBY", "LOBES", "LOCAL", "LOCKS", "LOCUS", "LODGE", "LOFTY", "LOGES", "LOGIC", "LOGIN", "LOINS", "LONGS", "LOOKS", "LOOMS", "LOONS", "LOOPS", "LOOSE", "LORDS", "LOSER", "LOSES", "LOTUS", "LOUSE", "LOUSY", "LOVED", "LOVER", "LOVES", "LOWED", "LOWER", "LOWLY", "LOYAL", "LUCID", "LUCKY", "LULLS", "LUMPS", "LUMPY", "LUNAR", "LUNCH", "LUNGE", "LUNGS", "LURCH", "LURED",
  "LURES", "LURID", "LURKS", "LUSTS", "LUSTY", "LUTES", "LYING", "LYMPH", "LYNCH", "LYRIC", "MACES", "MADAM", "MADLY", "MAGIC", "MAIDS", "MAILS", "MAINS", "MAIZE", "MAJOR", "MAKER", "MAKES", "MALES", "MAMMA", "MANES", "MANGA", "MANGE", "MANGO", "MANGY", "MANIA", "MANLY", "MANNA", "MANOR", "MANSE", "MAPLE", "MARCH", "MARES", "MARKS", "MARRY", "MARSH", "MARTS", "MASKS", "MASON", "MASTS", "MATCH", "MATED", "MATES", "MAUVE", "MAXIM", "MAYBE", "MAYOR",
  "MAZES", "MEALS", "MEALY", "MEANS", "MEANT", "MEATS", "MEDAL", "MEDIA", "MEETS", "MELON", "MELTS", "MEMES", "MENDS", "MENUS", "MERCY", "MERES", "MERGE", "MERIT", "MERRY", "MESAS", "METAL", "METED", "METER", "MEWED", "MIDST", "MIENS", "MIGHT", "MILCH", "MILES", "MILKY", "MILLS", "MIMES", "MIMIC", "MINCE", "MINDS", "MINED", "MINER", "MINES", "MINOR", "MINTS", "MINUS", "MIRTH", "MISER", "MISTS", "MITES", "MIXED", "MIXES", "MOANS", "MOATS", "MOCKS",
  "MODEL", "MODEM", "MODES", "MOIST", "MOLAR", "MOLES", "MOMMA", "MONEY", "MONKS", "MONTH", "MOODS", "MOODY", "MOONS", "MOORS", "MOOSE", "MOPED", "MORAL", "MORES", "MOSSY", "MOTES", "MOTHS", "MOTIF", "MOTOR", "MOTTO", "MOUND", "MOUNT", "MOURN", "MOUSE", "MOUTH", "MOVED", "MOVER", "MOVES", "MOVIE", "MOWED", "MOWER", "MUCUS", "MUDDY", "MULES", "MULTI", "MUMMY", "MUMPS", "MUNCH", "MURAL", "MURKY", "MUSED", "MUSES", "MUSIC", "MUSKY", "MUSTY", "MUTED",
  "MUTES", "MYRRH", "MYTHS", "NABOB", "NAILS", "NAIVE", "NAKED", "NAMED", "NAMES", "NASAL", "NASTY", "NATAL", "NATTY", "NAVAL", "NAVEL", "NAVES", "NEARS", "NECKS", "NEEDS", "NEEDY", "NEIGH", "NERVE", "NESTS", "NEVER", "NEWER", "NEWLY", "NICER", "NICHE", "NIECE", "NIGHT", "NINNY", "NOBLE", "NOBLY", "NOISE", "NOISY", "NOMAD", "NONCE", "NOOKS", "NOOSE", "NORTH", "NOSED", "NOSES", "NOTCH", "NOTED", "NOTES", "NOUNS", "NOVEL", "NUDGE", "NURSE", "NYMPH",
  "OAKEN", "OAKUM", "OASES", "OASIS", "OATEN", "OATHS", "OBESE", "OBEYS", "OCCUR", "OCEAN", "OCHRE", "ODDER", "ODDLY", "ODIUM", "OFFAL", "OFFER", "OFTEN", "OILED", "OLDEN", "OLDER", "OMENS", "OMITS", "ONION", "ONSET", "OOZED", "OOZES", "OPALS", "OPENS", "OPERA", "OPINE", "OPIUM", "OPTIC", "ORBIT", "ORDER", "ORGAN", "OSIER", "OTHER", "OTTER", "OUGHT", "OUNCE", "OUTDO", "OUTER", "OVALS", "OVARY", "OVENS", "OVERT", "OWING", "OWNED", "OWNER", "OXIDE",
  "OZONE", "PACES", "PACKS", "PADDY", "PADRE", "PAEAN", "PAGAN", "PAGES", "PAILS", "PAINS", "PAINT", "PAIRS", "PALED", "PALER", "PALES", "PALMS", "PALMY", "PALSY", "PANEL", "PANES", "PANGS", "PANSY", "PANTS", "PAPAL", "PAPAS", "PAPER", "PARED", "PARKA", "PARKS", "PARRY", "PARSE", "PARTS", "PARTY", "PASHA", "PASTE", "PASTY", "PATCH", "PATES", "PATHS", "PATIO", "PAUSE", "PAVED", "PAWED", "PAWNS", "PAYED", "PAYER", "PEACE", "PEACH", "PEAKS", "PEALS",
  "PEARL", "PEARS", "PEASE", "PECKS", "PEDAL", "PEEPS", "PEERS", "PELTS", "PENAL", "PENCE", "PENIS", "PENNY", "PEONS", "PERCH", "PERIL", "PESKY", "PESOS", "PESTS", "PETAL", "PETTY", "PHASE", "PHIAL", "PHONE", "PHOTO", "PIANO", "PICKS", "PIECE", "PIERS", "PIETY", "PIGMY", "PIKES", "PILED", "PILES", "PILLS", "PILOT", "PINCH", "PINED", "PINES", "PINKS", "PINTO", "PINTS", "PIOUS", "PIPED", "PIPER", "PIPES", "PIQUE", "PITCH", "PITHY", "PIVOT", "PLACE",
  "PLAID", "PLAIN", "PLAIT", "PLANE", "PLANK", "PLANS", "PLANT", "PLATE", "PLAYS", "PLAZA", "PLEAD", "PLEAS", "PLIED", "PLIES", "PLOTS", "PLUCK", "PLUGS", "PLUMB", "PLUME", "PLUMS", "PLUSH", "PODIA", "POEMS", "POESY", "POETS", "POINT", "POISE", "POKED", "POKER", "POKES", "POLAR", "POLES", "POLKA", "POLLS", "PONDS", "POOLS", "POPES", "POPPA", "POPPY", "PORCH", "PORED", "PORES", "PORTS", "POSED", "POSER", "POSES", "POSSE", "POSTS", "POUCH", "POUND",
  "POURS", "POWER", "PRANK", "PRATE", "PRAYS", "PRESS", "PREYS", "PRICE", "PRICK", "PRIDE", "PRIED", "PRIES", "PRIME", "PRINT", "PRIOR", "PRISM", "PRIVY", "PRIZE", "PROBE", "PRONE", "PROOF", "PROPS", "PROSE", "PROSY", "PROUD", "PROVE", "PROWL", "PROWS", "PROXY", "PRUDE", "PRUNE", "PSALM", "PSHAW", "PUDGY", "PUFFS", "PUFFY", "PULLS", "PULPY", "PULSE", "PUMPS", "PUNCH", "PUPIL", "PUPPY", "PUREE", "PURER", "PURGE", "PURSE", "PUSSY", "PUTTY", "QUACK",
  "QUAFF", "QUAIL", "QUAKE", "QUALM", "QUART", "QUASI", "QUAYS", "QUEEN", "QUEER", "QUELL", "QUERY", "QUEST", "QUEUE", "QUICK", "QUIET", "QUILL", "QUILT", "QUIPS", "QUIRE", "QUITE", "QUITS", "QUOTA", "QUOTE", "QUOTH", "RABBI", "RABID", "RACED", "RACER", "RACES", "RACKS", "RADII", "RADIO", "RAFTS", "RAGED", "RAGES", "RAIDS", "RAILS", "RAINS", "RAINY", "RAISE", "RAJAH", "RAKED", "RAKES", "RALLY", "RANCH", "RANGE", "RANKS", "RAPID", "RARER", "RARES",
  "RATED", "RATES", "RATIO", "RAVED", "RAVEN", "RAVES", "RAYON", "RAZED", "RAZOR", "REACH", "REACT", "READS", "READY", "REALM", "REALS", "REAMS", "REAPS", "REARS", "REBEL", "REBUS", "REBUT", "RECUR", "REEDS", "REEDY", "REEFS", "REEKS", "REELS", "REEVE", "REFER", "REFIT", "REGAL", "REIGN", "REINS", "RELAX", "RELAY", "RELIC", "REMIT", "RENDS", "RENEW", "RENTS", "REPAY", "REPEL", "REPLY", "RESET", "RESIN", "RESTS", "REVEL", "REVUE", "RHEUM", "RHYME",
  "RICKS", "RIDER", "RIDES", "RIDGE", "RIFLE", "RIFTS", "RIGHT", "RIGID", "RILED", "RILLS", "RIMES", "RINGS", "RINSE", "RIOTS", "RIPEN", "RIPER", "RISEN", "RISER", "RISES", "RISKS", "RISKY", "RITES", "RIVAL", "RIVEN", "RIVER", "RIVET", "ROADS", "ROAMS", "ROARS", "ROAST", "ROBED", "ROBES", "ROBIN", "ROCKS", "ROCKY", "ROGUE", "ROLES", "ROLLS", "ROMAN", "ROOFS", "ROOKS", "ROOMS", "ROOMY", "ROOST", "ROOTS", "ROPED", "ROPES", "ROSES", "ROSIN", "ROUGE",
  "ROUGH", "ROUND", "ROUSE", "ROUTE", "ROUTS", "ROVED", "ROVER", "ROWDY", "ROWED", "ROYAL", "RUDER", "RUFFS", "RUINS", "RULED", "RULER", "RULES", "RUNES", "RUNGS", "RUPEE", "RURAL", "RUSES", "SABLE", "SABRE", "SACKS", "SADLY", "SAFER", "SAGAS", "SAGES", "SAHIB", "SAILS", "SAINT", "SAITH", "SALAD", "SALES", "SALLY", "SALON", "SALSA", "SALTS", "SALTY", "SALVE", "SALVO", "SANDS", "SANDY", "SANER", "SATED", "SATIN", "SATYR", "SAUCE", "SAUCY", "SAVED",
  "SAVES", "SAWED", "SCALD", "SCALE", "SCALP", "SCALY", "SCAMP", "SCANS", "SCANT", "SCARE", "SCARF", "SCARS", "SCENE", "SCENT", "SCION", "SCOFF", "SCOLD", "SCOOP", "SCOPE", "SCORE", "SCORN", "SCOUR", "SCOUT", "SCOWL", "SCRAP", "SCREW", "SCRIP", "SCRUB", "SCULL", "SEALS", "SEAMS", "SEAMY", "SEATS", "SECTS", "SEDAN", "SEDGE", "SEEDS", "SEEDY", "SEEKS", "SEEMS", "SEERS", "SEIZE", "SELLS", "SEMEN", "SENDS", "SENSE", "SERFS", "SERGE", "SERUM", "SERVE",
  "SEVEN", "SEVER", "SEWED", "SEWER", "SEXES", "SHACK", "SHADE", "SHADY", "SHAFT", "SHAKE", "SHAKY", "SHALE", "SHALL", "SHALT", "SHAME", "SHAMS", "SHANK", "SHAPE", "SHARE", "SHARK", "SHARP", "SHAVE", "SHAWL", "SHEAF", "SHEAR", "SHEDS", "SHEEN", "SHEEP", "SHEER", "SHEET", "SHEIK", "SHELF", "SHELL", "SHIED", "SHIFT", "SHINE", "SHINS", "SHINY", "SHIPS", "SHIRE", "SHIRK", "SHIRT", "SHOAL", "SHOCK", "SHOES", "SHONE", "SHOOK", "SHOON", "SHOOT", "SHOPS",
  "SHORE", "SHORN", "SHORT", "SHOTS", "SHOUT", "SHOVE", "SHOWN", "SHOWS", "SHOWY", "SHRED", "SHREW", "SHRUB", "SHRUG", "SHUNS", "SHUTS", "SHYLY", "SIBYL", "SIDED", "SIDES", "SIEGE", "SIEVE", "SIGHS", "SIGHT", "SIGMA", "SIGNS", "SILKS", "SILKY", "SILLS", "SILLY", "SINCE", "SINEW", "SINGE", "SINGS", "SINKS", "SIREN", "SIRES", "SITES", "SIXES", "SIXTH", "SIXTY", "SIZED", "SIZES", "SKATE", "SKEIN", "SKIES", "SKIFF", "SKILL", "SKIMS", "SKINS", "SKIPS",
  "SKIRT", "SKULK", "SKULL", "SKUNK", "SLABS", "SLACK", "SLAGS", "SLAIN", "SLAKE", "SLANG", "SLANT", "SLAPS", "SLASH", "SLATE", "SLATS", "SLAVE", "SLAYS", "SLEDS", "SLEEK", "SLEEP", "SLEET", "SLEPT", "SLICE", "SLICK", "SLIDE", "SLILY", "SLIME", "SLIMY", "SLING", "SLINK", "SLIPS", "SLITS", "SLOOP", "SLOPE", "SLOPS", "SLOTH", "SLUGS", "SLUMP", "SLUMS", "SLUNG", "SLUNK", "SLUSH", "SLYLY", "SMACK", "SMALL", "SMART", "SMASH", "SMEAR", "SMELL", "SMELT",
  "SMILE", "SMIRK", "SMITE", "SMITH", "SMOCK", "SMOKE", "SMOKY", "SMOTE", "SNACK", "SNAGS", "SNAIL", "SNAKE", "SNAKY", "SNAPS", "SNARE", "SNARL", "SNEAK", "SNEER", "SNIFF", "SNIPE", "SNOBS", "SNORE", "SNORT", "SNOUT", "SNOWS", "SNOWY", "SNUFF", "SOAPY", "SOARS", "SOBER", "SOCKS", "SOFAS", "SOGGY", "SOILS", "SOLAR", "SOLES", "SOLID", "SOLOS", "SOLVE", "SONGS", "SONNY", "SOOTH", "SOOTY", "SORES", "SORRY", "SORTS", "SOUGH", "SOULS", "SOUND", "SOUPS",
  "SOUSE", "SOUTH", "SOWED", "SOWER", "SPACE", "SPADE", "SPAKE", "SPANK", "SPANS", "SPARE", "SPARK", "SPARS", "SPASM", "SPAWN", "SPEAK", "SPEAR", "SPECK", "SPEED", "SPELL", "SPELT", "SPEND", "SPENT", "SPERM", "SPICE", "SPICY", "SPIED", "SPIES", "SPIKE", "SPILL", "SPILT", "SPINE", "SPINS", "SPINY", "SPIRE", "SPITE", "SPITS", "SPLIT", "SPOIL", "SPOKE", "SPOOK", "SPOOL", "SPOON", "SPOOR", "SPORE", "SPORT", "SPOTS", "SPOUT", "SPRAY", "SPREE", "SPRIG",
  "SPUNK", "SPURN", "SPURS", "SPURT", "SQUAD", "SQUAT", "SQUAW", "STABS", "STACK", "STAFF", "STAGE", "STAGS", "STAID", "STAIN", "STAIR", "STAKE", "STALE", "STALK", "STALL", "STAMP", "STAND", "STANK", "STARE", "STARK", "STARS", "START", "STATE", "STAVE", "STAYS", "STEAD", "STEAK", "STEAL", "STEAM", "STEED", "STEEL", "STEEP", "STEER", "STEMS", "STEPS", "STERN", "STEWS", "STICK", "STIFF", "STILE", "STILL", "STING", "STINK", "STINT", "STIRS", "STOCK",
  "STOIC", "STOLE", "STONE", "STONY", "STOOD", "STOOL", "STOOP", "STOPS", "STORE", "STORK", "STORM", "STORY", "STOUT", "STOVE", "STRAP", "STRAW", "STRAY", "STREW", "STRIP", "STRUT", "STUCK", "STUDS", "STUDY", "STUFF", "STUMP", "STUNG", "STUNT", "STYLE", "SUAVE", "SUCKS", "SUGAR", "SUING", "SUITE", "SUITS", "SULKS", "SULKY", "SULLY", "SUNNY", "SUPER", "SURER", "SURGE", "SURLY", "SWAIN", "SWAMP", "SWANS", "SWARD", "SWARM", "SWAYS", "SWEAR", "SWEAT",
  "SWEEP", "SWEET", "SWELL", "SWEPT", "SWIFT", "SWILL", "SWIMS", "SWINE", "SWING", "SWIRL", "SWISH", "SWOON", "SWOOP", "SWORD", "SWORE", "SWORN", "SWUNG", "SYNOD", "SYRUP", "TABBY", "TABLE", "TABOO", "TACIT", "TACKS", "TAILS", "TAINT", "TAKEN", "TAKES", "TALES", "TALKS", "TALLY", "TALON", "TAMED", "TAMER", "TANKS", "TAPER", "TAPES", "TARDY", "TARES", "TARRY", "TARTS", "TASKS", "TASTE", "TASTY", "TAUNT", "TAWNY", "TAXED", "TAXES", "TEACH", "TEAMS",
  "TEARS", "TEASE", "TEEMS", "TEENS", "TEETH", "TELLS", "TEMPI", "TEMPO", "TEMPS", "TENDS", "TENET", "TENOR", "TENSE", "TENTH", "TENTS", "TEPEE", "TEPID", "TERMS", "TERSE", "TESTS", "TESTY", "TEXTS", "THANK", "THEFT", "THEIR", "THEME", "THERE", "THESE", "THICK", "THIEF", "THIGH", "THINE", "THING", "THINK", "THIRD", "THONG", "THORN", "THOSE", "THREE", "THREW", "THROB", "THROE", "THROW", "THUMB", "THUMP", "THYME", "TIARA", "TIBIA", "TICKS", "TIDAL",
  "TIDES", "TIERS", "TIGER", "TIGHT", "TILDE", "TILED", "TILES", "TILLS", "TILTS", "TIMED", "TIMES", "TIMID", "TINGE", "TINTS", "TIPSY", "TIRED", "TIRES", "TITHE", "TITLE", "TOADS", "TOAST", "TODAY", "TODDY", "TOILS", "TOKEN", "TOLLS", "TOMBS", "TOMES", "TONED", "TONES", "TONGS", "TONIC", "TOOLS", "TOOTH", "TOPAZ", "TOPIC", "TOQUE", "TORCH", "TORSO", "TORTS", "TOTAL", "TOTEM", "TOUCH", "TOUGH", "TOURS", "TOWED", "TOWEL", "TOWER", "TOWNS", "TOXIC",
  "TOYED", "TRACE", "TRACK", "TRACT", "TRADE", "TRAIL", "TRAIN", "TRAIT", "TRAMP", "TRAMS", "TRAPS", "TRASH", "TRAYS", "TREAD", "TREAT", "TREED", "TREES", "TREND", "TRESS", "TRIAD", "TRIAL", "TRIBE", "TRICE", "TRICK", "TRIED", "TRIES", "TRILL", "TRIPE", "TRIPS", "TRITE", "TROLL", "TROOP", "TROTH", "TROTS", "TROUT", "TRUCE", "TRUCK", "TRUER", "TRULY", "TRUMP", "TRUNK", "TRUSS", "TRUST", "TRUTH", "TRYST", "TUBES", "TUFTS", "TULIP", "TULLE", "TUNED",
  "TUNES", "TUNIC", "TURNS", "TUSKS", "TUTOR", "TWAIN", "TWANG", "TWEED", "TWICE", "TWIGS", "TWINE", "TWINS", "TWIRL", "TWIST", "TYING", "TYPED", "TYPES", "UDDER", "ULCER", "ULTRA", "UNCLE", "UNCUT", "UNDER", "UNDID", "UNDUE", "UNFIT", "UNION", "UNITE", "UNITS", "UNITY", "UNSAY", "UNTIE", "UNTIL", "UPPER", "UPSET", "URBAN", "URGED", "URGES", "URINE", "USAGE", "USERS", "USHER", "USING", "USUAL", "USURP", "USURY", "UTTER", "VAGUE", "VALES", "VALET",
  "VALID", "VALUE", "VALVE", "VANES", "VAPID", "VASES", "VAULT", "VAUNT", "VEILS", "VEINS", "VELDT", "VENAL", "VENOM", "VENTS", "VENUE", "VERBS", "VERGE", "VERSE", "VERVE", "VESTS", "VEXED", "VEXES", "VIALS", "VICAR", "VICES", "VIDEO", "VIEWS", "VIGIL", "VILER", "VILLA", "VINES", "VIOLA", "VIPER", "VIRUS", "VISIT", "VISOR", "VISTA", "VITAL", "VIVID", "VIXEN", "VIZOR", "VOCAL", "VODKA", "VOGUE", "VOICE", "VOILE", "VOLTS", "VOMIT", "VOTED", "VOTER",
  "VOTES", "VOUCH", "VOWED", "VOWEL", "VYING", "WADED", "WAFER", "WAFTS", "WAGED", "WAGER", "WAGES", "WAGON", "WAIFS", "WAILS", "WAIST", "WAITS", "WAIVE", "WAKED", "WAKEN", "WAKES", "WALKS", "WALLS", "WALTZ", "WANDS", "WANED", "WANES", "WANTS", "WARDS", "WARES", "WARMS", "WARNS", "WARTS", "WASPS", "WASTE", "WATCH", "WATER", "WAVED", "WAVER", "WAVES", "WAXED", "WAXEN", "WAXES", "WEARS", "WEARY", "WEAVE", "WEDGE", "WEEDS", "WEEDY", "WEEKS", "WEEPS",
  "WEIGH", "WEIRD", "WELCH", "WELLS", "WENCH", "WHACK", "WHALE", "WHARF", "WHEAT", "WHEEL", "WHELP", "WHERE", "WHICH", "WHIFF", "WHILE", "WHIMS", "WHINE", "WHIPS", "WHIRL", "WHIRR", "WHISK", "WHIST", "WHITE", "WHOLE", "WHOOP", "WHORE", "WHOSE", "WICKS", "WIDEN", "WIDER", "WIDOW", "WIDTH", "WIELD", "WIGHT", "WILDS", "WILES", "WILLS", "WINCE", "WINCH", "WINDS", "WINDY", "WINES", "WINGS", "WINKS", "WIPED", "WIPES", "WIRED", "WIRES", "WISER", "WISPS",
  "WITCH", "WITTY", "WIVES", "WOMAN", "WOMEN", "WOODS", "WOODY", "WOOED", "WOOER", "WORDS", "WORDY", "WORKS", "WORLD", "WORMS", "WORRY", "WORSE", "WORST", "WORTH", "WOULD", "WOUND", "WRACK", "WRAPS", "WRAPT", "WRATH", "WREAK", "WRECK", "WREST", "WRING", "WRIST", "WRITE", "WRITS", "WRONG", "WROTE", "WROTH", "YACHT", "YARDS", "YARNS", "YAWNS", "YEARN", "YEARS", "YEAST", "YELLS", "YELPS", "YIELD", "YOKED", "YOKES", "YOLKS", "YOUNG", "YOURS", "YOUTH",
  "ZEBRA", "ZONES",
];


/**
 * Every target word is also accepted as a valid guess.
 *
 * This keeps the first version completely self-contained.
 */
const VALID_GUESSES = new Set(
  TARGET_WORDS
);


/* =========================================================
   UTILITY FUNCTIONS
========================================================= */

/**
 * Creates an empty 6 × 5 board.
 */
const createEmptyBoard = () =>
  Array.from(
    {
      length: MAX_ATTEMPTS,
    },
    () =>
      Array(
        WORD_LENGTH
      ).fill("")
  );


/**
 * Creates an empty evaluation board.
 */
const createEmptyEvaluationBoard =
  () =>
    Array.from(
      {
        length: MAX_ATTEMPTS,
      },
      () =>
        Array(
          WORD_LENGTH
        ).fill(
          LETTER_STATUS.EMPTY
        )
    );


/**
 * Creates the complete collection of
 * eight boards.
 */
const createAllBoards = () =>
  Array.from(
    {
      length: BOARD_COUNT,
    },
    () => createEmptyBoard()
  );


/**
 * Creates the complete evaluation
 * collection for all eight boards.
 */
const createAllEvaluations = () =>
  Array.from(
    {
      length: BOARD_COUNT,
    },
    () =>
      createEmptyEvaluationBoard()
  );


/**
 * Selects eight unique random words.
 *
 * The previous target words are excluded
 * whenever enough alternatives exist.
 */
const getRandomWords = (
  previousWords = []
) => {

  const previousSet =
    new Set(previousWords);

  let availableWords =
    TARGET_WORDS.filter(
      (word) =>
        !previousSet.has(word)
    );

  if (
    availableWords.length <
    BOARD_COUNT
  ) {
    availableWords = [
      ...TARGET_WORDS,
    ];
  }

  const shuffled =
    [...availableWords].sort(
      () => Math.random() - 0.5
    );

  return shuffled.slice(
    0,
    BOARD_COUNT
  );
};


/**
 * Evaluates one five-letter guess
 * against one target word.
 *
 * Uses a two-pass algorithm so
 * duplicate letters are handled
 * correctly.
 */
const evaluateGuess = (
  guess,
  target
) => {

  const result = Array(
    WORD_LENGTH
  ).fill(
    LETTER_STATUS.ABSENT
  );

  const remainingLetters = {};


  /* -------------------------------------------------------
     PASS 1 — EXACT MATCHES
  ------------------------------------------------------- */

  for (
    let index = 0;
    index < WORD_LENGTH;
    index += 1
  ) {

    if (
      guess[index] ===
      target[index]
    ) {

      result[index] =
        LETTER_STATUS.CORRECT;

    } else {

      const targetLetter =
        target[index];

      remainingLetters[
        targetLetter
      ] =
        (
          remainingLetters[
            targetLetter
          ] || 0
        ) + 1;
    }
  }


  /* -------------------------------------------------------
     PASS 2 — PRESENT / ABSENT
  ------------------------------------------------------- */

  for (
    let index = 0;
    index < WORD_LENGTH;
    index += 1
  ) {

    if (
      result[index] ===
      LETTER_STATUS.CORRECT
    ) {
      continue;
    }

    const letter =
      guess[index];

    if (
      remainingLetters[letter] >
      0
    ) {

      result[index] =
        LETTER_STATUS.PRESENT;

      remainingLetters[letter] -= 1;

    } else {

      result[index] =
        LETTER_STATUS.ABSENT;
    }
  }

  return result;
};


/**
 * Returns the stronger status between
 * two keyboard states.
 *
 * Priority:
 *
 * Correct > Present > Absent
 */
const getBetterLetterStatus = (
  currentStatus,
  newStatus
) => {

  const priority = {
    [LETTER_STATUS.EMPTY]: 0,
    [LETTER_STATUS.ABSENT]: 1,
    [LETTER_STATUS.PRESENT]: 2,
    [LETTER_STATUS.CORRECT]: 3,
  };

  return (
    priority[newStatus] >
    priority[currentStatus]
      ? newStatus
      : currentStatus
  );
};


/**
 * Builds the shared keyboard state
 * from all submitted guesses across
 * all eight boards.
 */
const buildKeyboardStatus = (
  guesses,
  evaluations
) => {

  const keyboardStatus = {};


  guesses.forEach(
    (guess, rowIndex) => {

      if (!guess) {
        return;
      }

      const boardEvaluations =
        evaluations.map(
          (boardEvaluation) =>
            boardEvaluation[
              rowIndex
            ]
        );


      boardEvaluations.forEach(
        (evaluation) => {

          if (!evaluation) {
            return;
          }

          guess
            .split("")
            .forEach(
              (
                letter,
                columnIndex
              ) => {

                const newStatus =
                  evaluation[
                    columnIndex
                  ];

                if (
                  newStatus ===
                  LETTER_STATUS.EMPTY
                ) {
                  return;
                }

                const currentStatus =
                  keyboardStatus[
                    letter
                  ] ||
                  LETTER_STATUS.EMPTY;

                keyboardStatus[
                  letter
                ] =
                  getBetterLetterStatus(
                    currentStatus,
                    newStatus
                  );
              }
            );
        }
      );
    }
  );

  return keyboardStatus;
};


/**
 * Returns the completed word from
 * a board row.
 */
const getRowWord = (
  row
) =>
  row
    .join("")
    .toUpperCase();


/**
 * Checks whether a board has been solved.
 */
const isBoardSolved = (
  evaluations,
  rowIndex
) =>
  evaluations[
    rowIndex
  ]?.every(
    (status) =>
      status ===
      LETTER_STATUS.CORRECT
  ) || false;


/**
 * Creates a clean set of solved-board
 * flags.
 */
const createSolvedBoards = () =>
  Array(
    BOARD_COUNT
  ).fill(false);


/* =========================================================
   OCTORDLE COMPONENT
========================================================= */

const Octordle = () => {

  /* =======================================================
     GAME STATE
  ======================================================= */

  const [
    targetWords,
    setTargetWords,
  ] = useState(
    () => getRandomWords()
  );

  const [
    boards,
    setBoards,
  ] = useState(
    createAllBoards
  );

  const [
    evaluations,
    setEvaluations,
  ] = useState(
    createAllEvaluations
  );

  const [
    currentRow,
    setCurrentRow,
  ] = useState(0);

  const [
    currentColumn,
    setCurrentColumn,
  ] = useState(0);

  const [
    gameStatus,
    setGameStatus,
  ] = useState(
    GAME_STATUS.PLAYING
  );

  const [
    solvedBoards,
    setSolvedBoards,
  ] = useState(
    createSolvedBoards
  );

  const [
    message,
    setMessage,
  ] = useState("");

  const [
    previousTargetWords,
    setPreviousTargetWords,
  ] = useState([]);


  /* =======================================================
     DERIVED STATE
  ======================================================= */

  const solvedCount =
    solvedBoards.filter(
      Boolean
    ).length;

  const isGameOver =
    gameStatus !==
    GAME_STATUS.PLAYING;


  /**
   * Builds the shared list of submitted
   * guesses.
   *
   * Since all eight boards receive the
   * same guesses, board zero can be used
   * as the source.
   */
  const submittedGuesses =
    useMemo(
      () =>
        boards[0]
          .slice(
            0,
            currentRow
          )
          .map(
            getRowWord
          )
          .filter(
            (word) =>
              word.length ===
              WORD_LENGTH
          ),
      [
        boards,
        currentRow,
      ]
    );


  /**
   * Shared keyboard status.
   */
  const keyboardStatus =
    useMemo(
      () =>
        buildKeyboardStatus(
          submittedGuesses,
          evaluations
        ),
      [
        submittedGuesses,
        evaluations,
      ]
    );


  /* =======================================================
     START NEW GAME
  ======================================================= */

  const startNewGame =
    useCallback(
      () => {

        const newTargets =
          getRandomWords(
            previousTargetWords
          );

        setPreviousTargetWords(
          targetWords
        );

        setTargetWords(
          newTargets
        );

        setBoards(
          createAllBoards()
        );

        setEvaluations(
          createAllEvaluations()
        );

        setCurrentRow(0);

        setCurrentColumn(0);

        setSolvedBoards(
          createSolvedBoards()
        );

        setGameStatus(
          GAME_STATUS.PLAYING
        );

        setMessage("");

      },
      [
        previousTargetWords,
        targetWords,
      ]
    );


  /* =======================================================
     RESET WHEN COMPONENT MOUNTS
  ======================================================= */

  useEffect(() => {

    setBoards(
      createAllBoards()
    );

    setEvaluations(
      createAllEvaluations()
    );

    setSolvedBoards(
      createSolvedBoards()
    );

  }, []);


  /* =======================================================
     ADD LETTER
  ======================================================= */

  const handleLetterInput =
    useCallback(
      (letter) => {

        if (
          gameStatus !==
          GAME_STATUS.PLAYING
        ) {
          return;
        }

        if (
          currentColumn >=
          WORD_LENGTH
        ) {
          return;
        }

        const normalizedLetter =
          letter.toUpperCase();

        if (
          !/^[A-Z]$/.test(
            normalizedLetter
          )
        ) {
          return;
        }

        setBoards(
          (previousBoards) =>
            previousBoards.map(
              (board, boardIndex) => {

                if (
                  solvedBoards[
                    boardIndex
                  ]
                ) {
                  return board;
                }

                return board.map(
                  (
                    row,
                    rowIndex
                  ) => {

                    if (
                      rowIndex !==
                      currentRow
                    ) {
                      return [
                        ...row,
                      ];
                    }

                    const updatedRow =
                      [...row];

                    updatedRow[
                      currentColumn
                    ] =
                      normalizedLetter;

                    return updatedRow;
                  }
                );
              }
            )
        );

        setCurrentColumn(
          (previousColumn) =>
            Math.min(
              WORD_LENGTH,
              previousColumn + 1
            )
        );

        setMessage("");

      },
      [
        gameStatus,
        currentColumn,
        currentRow,
        solvedBoards,
      ]
    );


  /* =======================================================
     DELETE LETTER
  ======================================================= */

  const handleDelete =
    useCallback(
      () => {

        if (
          gameStatus !==
          GAME_STATUS.PLAYING
        ) {
          return;
        }

        if (
          currentColumn <= 0
        ) {
          return;
        }

        const newColumn =
          currentColumn - 1;

        setBoards(
          (previousBoards) =>
            previousBoards.map(
              (board, boardIndex) => {

                if (
                  solvedBoards[
                    boardIndex
                  ]
                ) {
                  return board;
                }

                return board.map(
                  (
                    row,
                    rowIndex
                  ) => {

                    if (
                      rowIndex !==
                      currentRow
                    ) {
                      return [
                        ...row,
                      ];
                    }

                    const updatedRow =
                      [...row];

                    updatedRow[
                      newColumn
                    ] = "";

                    return updatedRow;
                  }
                );
              }
            )
        );

        setCurrentColumn(
          newColumn
        );

        setMessage("");

      },
      [
        gameStatus,
        currentColumn,
        currentRow,
        solvedBoards,
      ]
    );


  /* =======================================================
     SUBMIT GUESS
  ======================================================= */

  const handleSubmitGuess =
    useCallback(
      () => {

        if (
          gameStatus !==
          GAME_STATUS.PLAYING
        ) {
          return;
        }

        if (
          currentColumn !==
          WORD_LENGTH
        ) {

          setMessage(
            "Not enough letters."
          );

          return;
        }

        const guess =
          getRowWord(
            boards[0][
              currentRow
            ]
          );


        /* -------------------------------------------------
           VALIDATE WORD
        ------------------------------------------------- */

        if (
          !VALID_GUESSES.has(
            guess
          )
        ) {

          setMessage(
            "Word not found."
          );

          return;
        }


        /* -------------------------------------------------
           EVALUATE ALL EIGHT BOARDS
        ------------------------------------------------- */

        const rowEvaluations =
          targetWords.map(
            (targetWord) =>
              evaluateGuess(
                guess,
                targetWord
              )
          );


        setEvaluations(
          (previousEvaluations) =>
            previousEvaluations.map(
              (
                boardEvaluation,
                boardIndex
              ) => {

                if (
                  solvedBoards[
                    boardIndex
                  ]
                ) {
                  return boardEvaluation;
                }

                const updatedEvaluation =
                  boardEvaluation.map(
                    (row) => [
                      ...row,
                    ]
                  );

                updatedEvaluation[
                  currentRow
                ] =
                  rowEvaluations[
                    boardIndex
                  ];

                return updatedEvaluation;
              }
            )
        );


        /* -------------------------------------------------
           UPDATE SOLVED BOARDS
        ------------------------------------------------- */

        const updatedSolvedBoards =
          solvedBoards.map(
            (
              solved,
              boardIndex
            ) => {

              if (solved) {
                return true;
              }

              return (
                guess ===
                targetWords[
                  boardIndex
                ]
              );
            }
          );


        setSolvedBoards(
          updatedSolvedBoards
        );


        const newlySolvedCount =
          updatedSolvedBoards.filter(
            Boolean
          ).length;


        /* -------------------------------------------------
           ALL BOARDS SOLVED
        ------------------------------------------------- */

        if (
          newlySolvedCount ===
          BOARD_COUNT
        ) {

          setGameStatus(
            GAME_STATUS.WON
          );

          setMessage(
            "Congratulations! You solved all eight words."
          );

          return;
        }


        /* -------------------------------------------------
           FINAL ATTEMPT
        ------------------------------------------------- */

        if (
          currentRow >=
          MAX_ATTEMPTS - 1
        ) {

          setGameStatus(
            GAME_STATUS.LOST
          );

          setMessage(
            `Game over! You solved ${newlySolvedCount} of ${BOARD_COUNT} words.`
          );

          return;
        }


        /* -------------------------------------------------
           MOVE TO NEXT ROW
        ------------------------------------------------- */

        setCurrentRow(
          (previousRow) =>
            previousRow + 1
        );

        setCurrentColumn(0);

        setMessage(
          newlySolvedCount >
            solvedCount
            ? `${newlySolvedCount} of ${BOARD_COUNT} words solved.`
            : ""
        );

      },
      [
        gameStatus,
        currentColumn,
        boards,
        currentRow,
        targetWords,
        solvedBoards,
        solvedCount,
      ]
    );


  /* =======================================================
     KEYBOARD INPUT
  ======================================================= */

  useEffect(() => {

    const handleKeyDown =
      (event) => {

        if (
          gameStatus !==
          GAME_STATUS.PLAYING
        ) {
          return;
        }


        /* -----------------------------------------------
           LETTER
        ----------------------------------------------- */

        if (
          /^[a-zA-Z]$/.test(
            event.key
          )
        ) {

          event.preventDefault();

          handleLetterInput(
            event.key
          );

          return;
        }


        /* -----------------------------------------------
           BACKSPACE
        ----------------------------------------------- */

        if (
          event.key ===
          "Backspace"
        ) {

          event.preventDefault();

          handleDelete();

          return;
        }


        /* -----------------------------------------------
           ENTER
        ----------------------------------------------- */

        if (
          event.key ===
          "Enter"
        ) {

          event.preventDefault();

          handleSubmitGuess();
        }

      };


    window.addEventListener(
      "keydown",
      handleKeyDown
    );


    return () => {

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

    };

  }, [
    gameStatus,
    handleLetterInput,
    handleDelete,
    handleSubmitGuess,
  ]);


  /* =======================================================
     VIRTUAL KEYBOARD
  ======================================================= */

  const keyboardRows = [
    [
      "Q",
      "W",
      "E",
      "R",
      "T",
      "Y",
      "U",
      "I",
      "O",
      "P",
    ],

    [
      "A",
      "S",
      "D",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
    ],

    [
      "ENTER",
      "Z",
      "X",
      "C",
      "V",
      "B",
      "N",
      "M",
      "BACKSPACE",
    ],
  ];


  /* =======================================================
     KEYBOARD BUTTON HANDLER
  ======================================================= */

  const handleKeyboardButton =
    (key) => {

      if (
        key === "ENTER"
      ) {

        handleSubmitGuess();

        return;
      }

      if (
        key === "BACKSPACE"
      ) {

        handleDelete();

        return;
      }

      handleLetterInput(key);
    };

    useEffect(() => {
      setSEO({
        title: "Octordle - DevSphere",
        description:
          "Play free Octordle on DevSphere. Solve eight hidden five-letter words simultaneously within thirteen attempts.",
        keywords:
          "Octordle, Octordle game, online Octordle, free Octordle, word puzzle, eight word puzzle, DevSphere Octordle",
        url: "/games/octordle",
      });
    }, []);

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <main
      className={
        styles.octordlePage
      }
    >

      {/* ===================================================
          HEADER
      =================================================== */}

      <section
        className={
          styles.octordleHeader
        }
      >

        <div
          className={
            styles.headerContent
          }
        >

          <Link
            to="/games"
            className={
              styles.backLink
            }
          >

            <FaArrowLeft
              aria-hidden="true"
            />

            <span>
              Back to Games
            </span>

          </Link>


          <span
            className={
              styles.headerLabel
            }
          >
            WORD PUZZLE
          </span>


          <h1
            className={
              styles.octordleTitle
            }
          >
            Octordle
          </h1>


          <p
            className={
              styles.octordleSubtitle
            }
          >
            Solve eight hidden five-letter
            words in thirteen attempts.
          </p>

        </div>

      </section>


      {/* ===================================================
          GAME SECTION
      =================================================== */}

      <section
        className={
          styles.octordleSection
        }
      >

        <div
          className={
            styles.octordleContainer
          }
        >


          {/* ===============================================
              GAME TOP BAR
          ============================================== */}

          <div
            className={
              styles.gameTopBar
            }
          >

            <div
              className={
                styles.gameStats
              }
            >

              <div
                className={
                  styles.statItem
                }
              >

                <FaKeyboard
                  aria-hidden="true"
                />

                <div>

                  <span
                    className={
                      styles.statLabel
                    }
                  >
                    Attempts
                  </span>

                  <strong
                    className={
                      styles.statValue
                    }
                  >
                    {Math.min(
                      currentRow +
                        (
                          gameStatus ===
                          GAME_STATUS.PLAYING
                            ? 1
                            : 0
                        ),
                      MAX_ATTEMPTS
                    )}
                    /
                    {MAX_ATTEMPTS}
                  </strong>

                </div>

              </div>


              <div
                className={
                  styles.statItem
                }
              >

                <div
                  className={
                    styles.progressCircle
                  }
                >
                  {Math.round(
                    (
                      solvedCount /
                      BOARD_COUNT
                    ) * 100
                  )}
                  %
                </div>

                <div>

                  <span
                    className={
                      styles.statLabel
                    }
                  >
                    Solved
                  </span>

                  <strong
                    className={
                      styles.statValue
                    }
                  >
                    {solvedCount}
                    /
                    {BOARD_COUNT}
                  </strong>

                </div>

              </div>

            </div>


            <div
              className={
                styles.gameActions
              }
            >

              <button
                type="button"
                className={
                  styles.newGameButton
                }
                onClick={
                  startNewGame
                }
              >

                <FaRedo
                  aria-hidden="true"
                />

                <span>
                  New Game
                </span>

              </button>

            </div>

          </div>


          {/* ===============================================
              GAME MESSAGE
          ============================================== */}

          {message && (

            <div
              className={
                gameStatus ===
                  GAME_STATUS.WON
                  ? styles.successMessage
                  : styles.gameMessage
              }
              role="status"
              aria-live="polite"
            >

              {gameStatus ===
                GAME_STATUS.WON && (
                <FaTrophy
                  aria-hidden="true"
                />
              )}

              <span>
                {message}
              </span>

            </div>

          )}


          {/* ===============================================
              OCTORDLE BOARDS
          ============================================== */}

          <div
            className={
              styles.boardsArea
            }
          >

            <div
              className={
                styles.boardsGrid
              }
            >

              {boards.map(
                (
                  board,
                  boardIndex
                ) => {

                  const solved =
                    solvedBoards[
                      boardIndex
                    ];

                  return (
                    <article
                      key={
                        boardIndex
                      }
                      className={[
                        styles.puzzleBoard,
                        solved
                          ? styles.solvedBoard
                          : "",
                      ]
                        .filter(
                          Boolean
                        )
                        .join(" ")}
                    >

                      <div
                        className={
                          styles.boardHeader
                        }
                      >

                        <span
                          className={
                            styles.boardNumber
                          }
                        >
                          {boardIndex + 1}
                        </span>

                        <div
                          className={
                            styles.boardHeaderContent
                          }
                        >

                          <span
                            className={
                              styles.boardLabel
                            }
                          >
                            WORD
                            {" "}
                            {boardIndex + 1}
                          </span>

                          {solved && (
                            <span
                              className={
                                styles.solvedBadge
                              }
                            >
                              <FaCheck
                                aria-hidden="true"
                              />

                              Solved
                            </span>
                          )}

                        </div>

                      </div>


                      <div
                        className={
                          styles.wordleBoard
                        }
                        role="grid"
                        aria-label={`Octordle board ${
                          boardIndex + 1
                        }`}
                      >

                        {board.map(
                          (
                            row,
                            rowIndex
                          ) => (

                            <div
                              key={
                                rowIndex
                              }
                              className={
                                styles.wordleRow
                              }
                              role="row"
                            >

                              {row.map(
                                (
                                  letter,
                                  columnIndex
                                ) => {

                                  const status =
                                    evaluations[
                                      boardIndex
                                    ][
                                      rowIndex
                                    ][
                                      columnIndex
                                    ];

                                  const isCurrentCell =
                                    rowIndex ===
                                      currentRow &&
                                    columnIndex ===
                                      currentColumn &&
                                    gameStatus ===
                                      GAME_STATUS.PLAYING &&
                                    !solved;

                                  return (
                                    <div
                                      key={`${boardIndex}-${rowIndex}-${columnIndex}`}
                                      className={[
                                        styles.wordleCell,

                                        letter
                                          ? styles.filledCell
                                          : "",

                                        status ===
                                        LETTER_STATUS.CORRECT
                                          ? styles.correctCell
                                          : "",

                                        status ===
                                        LETTER_STATUS.PRESENT
                                          ? styles.presentCell
                                          : "",

                                        status ===
                                        LETTER_STATUS.ABSENT
                                          ? styles.absentCell
                                          : "",

                                        isCurrentCell
                                          ? styles.currentCell
                                          : "",
                                      ]
                                        .filter(
                                          Boolean
                                        )
                                        .join(" ")}
                                      role="gridcell"
                                      aria-label={`Word ${
                                        boardIndex + 1
                                      }, Row ${
                                        rowIndex + 1
                                      }, Column ${
                                        columnIndex + 1
                                      }${
                                        letter
                                          ? `, ${letter}`
                                          : ", empty"
                                      }`}
                                    >
                                      {letter}
                                    </div>
                                  );

                                }
                              )}

                            </div>

                          )
                        )}

                      </div>


                      {solved && (
                        <div
                          className={
                            styles.solvedOverlay
                          }
                          aria-hidden="true"
                        >
                          <FaCheck />
                        </div>
                      )}

                    </article>
                  );

                }
              )}

            </div>

          </div>

          {/* ===============================================
              BOARD PROGRESS INDICATORS
          ================================================ */}
          <div className={styles.keyboardDock}>
          <div
            className={styles.boardProgressSection}
          >
            <div
              className={styles.boardProgressScroller}
            >
              <div
                className={styles.boardProgress}
                aria-label="Octordle board progress"
              >
                {solvedBoards.map(
                  (solved, boardIndex) => (
                    <button
                      key={boardIndex}
                      type="button"
                      className={[
                        styles.boardProgressItem,
                        solved
                          ? styles.boardProgressSolved
                          : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      aria-label={
                        solved
                          ? `Word ${boardIndex + 1} solved`
                          : `Word ${boardIndex + 1}`
                      }
                    >
                      {solved ? (
                        <FaCheck
                          aria-hidden="true"
                        />
                      ) : (
                        boardIndex + 1
                      )}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          {/* ===============================================
              SHARED KEYBOARD
          ============================================== */}

          <div
            className={
              styles.keyboardSection
            }
          >

            <div
              className={
                styles.keyboardHeader
              }
            >

              <span
                className={
                  styles.sectionLabel
                }
              >
                KEYBOARD
              </span>

              <span
                className={
                  styles.keyboardHint
                }
              >
                Your guesses apply to all
                eight boards
              </span>

            </div>


            <div
              className={
                styles.keyboard
              }
              aria-label="Octordle keyboard"
            >

              {keyboardRows.map(
                (
                  row,
                  rowIndex
                ) => (

                  <div
                    key={
                      rowIndex
                    }
                    className={
                      styles.keyboardRow
                    }
                  >

                    {row.map(
                      (key) => {

                        const keyStatus =
                          keyboardStatus[
                            key
                          ] ||
                          LETTER_STATUS.EMPTY;

                        const isActionKey =
                          key ===
                            "ENTER" ||
                          key ===
                            "BACKSPACE";

                        return (
                          <button
                            key={key}
                            type="button"
                            className={[
                              styles.keyboardKey,

                              isActionKey
                                ? styles.actionKey
                                : "",

                              keyStatus ===
                              LETTER_STATUS.CORRECT
                                ? styles.keyboardCorrect
                                : "",

                              keyStatus ===
                              LETTER_STATUS.PRESENT
                                ? styles.keyboardPresent
                                : "",

                              keyStatus ===
                              LETTER_STATUS.ABSENT
                                ? styles.keyboardAbsent
                                : "",
                            ]
                              .filter(
                                Boolean
                              )
                              .join(" ")}
                            onClick={() =>
                              handleKeyboardButton(
                                key
                              )
                            }
                            disabled={
                              isGameOver
                            }
                            aria-label={
                              key ===
                              "BACKSPACE"
                                ? "Backspace"
                                : key ===
                                  "ENTER"
                                ? "Enter"
                                : `Letter ${key}`
                            }
                          >

                            {key ===
                            "BACKSPACE"
                              ? "⌫"
                              : key}

                          </button>
                        );

                      }
                    )}

                  </div>

                )
              )}

            </div>

          </div>
          </div>

          {/* ===============================================
              HOW TO PLAY
          ============================================== */}

          <section
            className={
              styles.instructions
            }
          >

            <div
              className={
                styles.instructionsHeader
              }
            >

              <span
                className={
                  styles.sectionLabel
                }
              >
                HOW TO PLAY
              </span>

              <h2>
                Octordle Rules
              </h2>

            </div>


            <div
              className={
                styles.rulesGrid
              }
            >

              <div
                className={
                  styles.ruleCard
                }
              >

                <span>
                  01
                </span>

                <div>

                  <h3>
                    Guess a word
                  </h3>

                  <p>
                    Enter a valid
                    five-letter word.
                    Your guess is used
                    on all eight boards.
                  </p>

                </div>

              </div>


              <div
                className={
                  styles.ruleCard
                }
              >

                <span>
                  02
                </span>

                <div>

                  <h3>
                    Find the green letters
                  </h3>

                  <p>
                    Green means the
                    letter is correct
                    and in the correct
                    position.
                  </p>

                </div>

              </div>


              <div
                className={
                  styles.ruleCard
                }
              >

                <span>
                  03
                </span>

                <div>

                  <h3>
                    Use yellow clues
                  </h3>

                  <p>
                    Yellow means the
                    letter belongs in
                    that word but is in
                    the wrong position.
                  </p>

                </div>

              </div>


              <div
                className={
                  styles.ruleCard
                }
              >

                <span>
                  04
                </span>

                <div>

                  <h3>
                    Solve all eight
                  </h3>

                  <p>
                    Find all eight hidden
                    words before your
                    thirteen attempts
                    are used.
                  </p>

                </div>

              </div>

            </div>

          </section>


          {/* ===============================================
              NEW GAME CTA
          ============================================== */}

          <div
            className={
              styles.bottomActions
            }
          >

            <button
              type="button"
              className={
                styles.secondaryNewGameButton
              }
              onClick={
                startNewGame
              }
            >

              <FaRedo
                aria-hidden="true"
              />

              Play Another Octordle

            </button>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Octordle;