const answerArray = [];

//groups
const groupA = ["A28S", "9I7I", "139Q", "I6NP", "98RK", "AJJ3", "PPSQ", "7ABB", "5MYS", "9QRW", "G6G8", "8MDU",
"9EQ2", "2XWN", "23SB", "T562", "NXRM", "U38I", "XRI4", "SNV0", "H1K6", "KHUG", "SL88", "LJ08", "DYV8", "MZJ8",
"ZFEP", "HPAX", "2SRP", "K3Y6", "DUMZ", "XNJT", "4PMM", "YP35", "266B", "GLEU", "W8HJ", "DFTS", "L11P", "I1R2",
"77O4", "HFUK", "340M", "HYPJ", "OGFO", "SBYZ", "NY78", "R350", "DQMO", "6K1K", "P9T4", "VEJH", "G7SJ", "329E",
"BNML", "HVK5", "KMEN", "V42B", "GYOZ", "NNUE", "IB4T", "WVRU", "58ZO", "PC2M", "BXBG", "BJSY", "AGRJ", "WFTC",
"0ARE", "SJWT", "OMLO", "Y0KM", "K4U7", "QVSU", "FW2W", "21JP", "K1X3", "MO09", "NLZY", "VZ1R", "7S8Q", "7I2L",
"ENN3", "F11W", "OYFB", "JXE8", "Y87E", "7GTK", "SM56", "YAZQ", "8UH5", "4XNQ", "QNC1", "23YL", "TFHL", "JLVW",
"JRRL", "6RIO", "WS6M", "RR0E", "GHCK", "WIK4", "8D8V", "KV20", "2MKS", "5V0O", "L0FL", "FS2T"];

const groupB = [ "WJ0P", "K26L", "B636", "F7SC", "4N0P", "XBDM", "KYOI", "AKEK", "2EC3", "MDP8", "9TY5",
"PJD1", "K6MG", "77JL", "ETI1", "EMZR", "Y0NJ", "HJGC", "KPVG", "K2QK", "O1LO", "EHAH", "2GZ9", "8J7V", "N84G",
"RCVD", "LP52", "JYMM", "GGE1", "XO8J", "B2C9", "XNCF", "M271", "LCBZ", "UU67", "R69Y", "BMFL", "04O7", "3P4H",
"55VX", "O38E", "61L5", "5W2J", "JV91", "CJCC", "U8PP", "AI75", "Y2ZV", "Z1EL", "U77Y", "K99F", "N3RW", "5HX3",
"JOEZ", "737Z", "59LD", "N6DV", "40Z4", "TOIB", "XGP3", "IMSE", "PPFH", "74L9", "43UE", "9GYZ", "CD7I", "GE5F",
"4M93", "58PC", "HILB", "9J1Z", "EHRE", "L58S", "EWQD", "R23Q", "SMN6", "KGLY", "3126", "1GUX", "A1ZD", "91OF",
"I3XA", "PMH0", "3SJQ", "VE16", "GZZI", "9340", "84EZ", "EZPQ", "E2F6", "8F3C", "DLKP", "PYSJ", "1IFH", "757V",
"NE5O", "3JWL", "X5X6", "V3K2", "NGIQ", "GSAD", "1VQK", "1QPN", "7GAS", "V41W", "VGHY", "XUU8", "F2AW", "P8RK",
"18ZT", "XP0P", "DYDO", "IP9G", "Z0EX", "059M", "WISU", "IMWR", "8UFZ", "23MZ", "VDG2", "WE8L", "TKOO", "5CH2",
"QIB4", "LKTP", "1G9G", "33IB", "9NGM", "14YC", "0ZY9", "56YM", "FDEE", "257B", "RK2Z", "2QYP", "LHQ7", "DKU8",
"DUR0", "NGYP", "3U1C", "NN86", "1UX6", "U15L", "ZGRH", "OF0V", "R2RF", "8LDY", "7F08", "S11Y", "P1QK", "JMW3",
"PMT2", "I8JR", "75IS", "PGR8", "XHV2", "6KWW", "ZG47", "5L8H", "7C9N", "IRA8", "C995", "0F2K", "PE0E", "7QMF",
"6PXK", "62W5", "LOK4", "BDJY", "9K3E", "VY6Z"];

const groupC = ["ALK5", "P1SE", "ENIO", "I5N4", "1PSK", "PQ19", "G55U", "27SI", "HVG1", "2IAV", "UZF7", "Q9XJ",
"YSRS", "FD68", "NRTB", "E657", "9MGA", "9N86", "MGSL", "6BBN", "62VH", "YK3E", "M56W", "Z7Q0", "QHXH", "NCRL",
"0GID", "XWN3", "5YRK", "HTCJ", "PKD9", "IOD6", "2BRY", "FS59", "Z0HD", "AK8W", "KZY4", "R3I2", "ZMLL", "1QV6",
"A5W1", "XS37", "QOT6", "LMQP", "M86N", "Y18P", "H94Q", "81PW", "5GWY", "2AFD", "4VJR", "BF37", "PQOC", "NE1O",
"MREY", "AN8O", "BLQA", "TDEQ", "851O", "JLYI", "ZX5P", "AR62", "GI7T", "TUFU", "3A1E", "7NS4", "ZUW1", "4OWP",
"TXTN", "8Z5V", "DGV7", "SZPN", "TJ8V", "AK9P", "XEQU", "R7A0", "JPCW"];

const groupD = ["B622", "0S4R", "NQQR", "8UL4", "3K2W", "O0K6", "1Z0C", "1V1T", "X3OY", "53TP", "5Q41", "ED31",
"D27H", "AO4B", "ME07", "1MQ9", "ITQ2", "I4KD", "YIJU", "4ZTE", "35KH", "TI7L", "24O3", "DU1I", "K2VI", "SP7L",
"5KHR", "E942", "GNVF", "W4RY", "NLEN", "YK68", "Z9E3", "WXOF", "7BU0", "ROH0", "V2R1", "OEV6", "U0JG", "EWII",
"4234", "SWFE", "5G3Y", "LJM3", "WQ8A", "KOKH", "5Y3I", "AMLA", "ZBMC", "4V2N", "KTE0", "4YK8", "QSH9", "IT3W",
"M2AN", "ADEV", "I5J7", "A046", "KZ7E", "IFE4", "Y2KE", "5DCX", "H87H", "U994", "Q4FH", "S3W9", "14ZJ", "WJWV",
"18HW", "DUVY", "8Q2Q", "987M", "O34W", "OM23", "10OP", "X7CF", "AGCH", "7YPE", "AYYJ", "SI5O", "L7NM", "VZ5X",
"XWKP", "S2I2", "XPMX", "TQOL", "7ZF2", "RMT2", "LBE9", "UW7S", "40BS", "G51S", "PLP8", "DIML", "W6K4", "PVRE",
"RU01", "52C7", "UMNF", "1A4R", "3V78", "JQTW", "NI2V", "H206", "40VX", "VG5L", "6I2A", "H8DI", "GCAC", "MKJ7",
"EE24", "SY4O", "P94T", "COV8", "0GB0", "Z5BV", "0VNR", "9PRQ", "J608", "H77X", "Q9MI", "URBJ", "YS1Q", "A8UV",
"4ESB", "O1G5", "5D7A", "CTHH", "R4P3", "0SIK", "6D0T", "HX92", "2O9X", "GC8R", "S31C", "ZZ5M", "Q1SD", "GFJZ",
"X7T1", "XXWK", "KRX7", "CAPX", "A5JB", "3I5L", "468S", "5PJT", "FQIP", "CIH0", "HVCS", "GNHV", "RF7F", "Z3H1",
"NTU0", "QPDA", "Z0PP", "GAIR", "DUI5", "V3I0", "VDLC", "WF8P", "4248", "OEXB", "D9KU", "I2KM", "GJSU", "1MTS",
"1PBR", "HW4M", "GQT5", "J7R1", "UG80", "Q0D6", "HOH2", "6Q94", "U03K", "T03X", "0V5X", "ODA1", "73HM", "2VNZ",
"L0R3", "URYT", "P5QZ", "BFGF", "1KJU", "5Q2P", "W6ZN", "TYDZ", "9APZ", "H442", "72GG", "S8BK", "7465", "WK41",
"DG10", "DI6H", "PQ55", "QB36", "PBBE", "DLHE", "3P47", "CUXO", "P97L", "BIOD", "AN9D", "VJVV", "5BO4", "IKQ3",
"JQLE", "OLYB", "ASKG", "KBP1", "TQSR", "L8PE", "8GUA", "CIM4", "09TB", "SGJ4", "JDOC", "ZHDL", "XG98", "2SHK",
"RCTC", "OHZP", "TMI8", "HFNT", "I0NG", "K0IH", "Z4XV", "OS6S", "40IS", "83BV", "S21E", "TB2P", "UUK2", "8PZN",
"0MY8", "T620", "J44A", "8EGF", "43HH", "NTVA", "F09Q", "IUXQ", "V341", "SGH1", "F4CO", "DURC", "QSUZ", "RZGU",
"W225", "K67X", "HO64", "BQ6S", "5QME", "9U4R", "3W6S", "ZDDZ", "D1GY", "I5V8", "PNBT", "QAFK", "JQT5", "A62J",
"EJFT", "5BL8", "SC7J", "1QTD", "35JY", "FVK9", "LF8Q", "IKNY", "0R5D", "PUV7", "OM7X", "SVVI", "XU1X", "0RF4",
"1E9B", "SFOV", "1N83", "K1JY", "P621", "CI2Z", "GJLL", "X12T", "7I99", "ZU99", "3MCI", "PCTN", "Q8ZP", "GFWZ",
"MG6Q", "NNEM", "KQPN", "NCQB", "RFXW", "3LKD", "T5NI", "J185", "RJQ3", "1UX7", "SNFS", "HHRP", "PCVL", "VK1V",
"1A5J", "2DE8", "8IS0", "0VH6", "XLNM", "98CO", "52MD", "AHT8", "I4Q9", "58R4", "A0QD", "AXO2", "9E7I", "KPCL",
"AO9D", "93OF", "6SOA", "HZQD"];

const groupE = ["1O9N", "KN02", "QK7Q", "E10W", "KGNH", "THV6", "G9EL", "CDEI", "GSD4", "NDQM", "TEGY", "E9RX",
"X736", "6LVH", "2FU8", "P9ZD", "MDNG", "7B8U", "CUIA", "HFA0", "XPM3", "K8K9", "SSJK", "3YY7", "2F20", "PVCK",
"RX2B", "S5T3", "B6L0", "ABRV", "2TQM", "R7VS", "4CGS", "2DKM", "ZY3J", "7KUH", "JWGR", "V4Z9", "JSR3", "AU3U",
"84GX", "S6BN", "0PTR", "F5GN", "XCH8", "NTOV", "AUMY", "DAPO", "UXLT", "M46I", "JZUT", "0L3H", "BAR9", "39OW",
"PN17", "RTGL", "8578", "JLQT", "44PF", "IAL9", "1ZI2", "GLAS", "SLG0", "L9N7", "7MND", "WSDH", "75PB", "ENTK",
"HXOW", "CBF4", "EEFV", "BYK7", "7SIF", "Z661", "O7RI", "DZ46", "7LYW", "3259", "XCMV", "TJL2", "G4AR", "BBFR",
"KS9W", "CI49", "QVB8", "FW92", "BYH7", "KGRQ", "XJSO", "THQF", "A8TN", "KTAW", "OP8D", "KJP6", "FCUW", "WRM5",
"P4OS", "T6PC", "8JIT", "M4E4", "CV17", "HI47", "G2LE", "7RQH", "HURO", "N1I9", "A4R6", "LQTQ", "0HJM", "WYFS",
"9VI7", "LVSJ", "1L1G", "44K8", "DMAM", "Z10X", "ZDBM", "EDCH", "8TSN", "KJJR", "8QUF", "H7TV", "H6KD", "9SHH",
"DQ3S", "CBH3", "OXSJ", "UF4I", "ZFZ6", "D2MQ", "FM4H", "RHKZ", "8C0E", "NYX8", "0K6Q", "S14U", "Y8FU", "3KT8",
"QCLS", "79K4", "4RO5", "RYDW", "K5ZG", "THO1", "EGM8", "7OEV", "KR4H", "OI6K", "5J9J", "Q9RY", "EHZL", "HC55",
"ZESN", "O4TM", "YSDT", "SYO6", "5706", "H64W", "X348", "KNKM", "XB04", "LHUO", "82O7", "ODCQ", "X56D", "KRLL",
"K8BX", "763X", "8FE5", "YXQS", "GBJG", "Q7BM", "RYZA", "LNU1", "PGR6", "X1RE", "4CBF", "PPIJ", "LOKM", "AP3R",
"KCLR", "SVNC", "E9TT", "NTK7", "RSLG", "VT7X", "SX2D", "JPOE", "BAZP", "E3F5", "DUUO", "ZYLX", "B99W"];

const groupF = ["LR0Q", "EBYP", "8WVH", "PI84", "7BS8", "9YDK", "NJEL", "6Y0C", "62WM", "CLZW", "QGPI", "7N64",
"LAF0", "8OIU", "6Q64", "WFUX", "47XQ", "KCNP", "EEBA", "ZEMY", "8UXW", "18XF", "Z83X", "GWJ0", "0UFP", "TD9M",
"ZX30", "K0PC", "WE84", "L8PI", "YGNG", "SZGB", "BJD4", "1PIP", "2R4J", "XCUS", "B7JG", "14AS", "W4P3", "RGKS",
"HBIK", "YH04", "B6OY", "LVWS", "7AYT", "SNAJ", "KJ1C", "B973", "OPMY", "S6JO", "YR8S", "SZMQ", "3L29", "5MS6",
"7ETC", "R5BM", "COF3", "MNUK", "0Z2L", "XVBK", "SW0I", "DO3C", "TNTD", "69QH", "W3FE", "V1JB", "YFN0", "AL4X",
"ZPYR", "BGOJ", "Q0MI", "SVYE", "SV9F", "999W", "BAAR", "JR09", "88SV", "MGUV", "1TG3", "QCUE", "H5D6", "MUF8",
"NS65", "5X0K", "H8RL", "Y8YO", "BG72", "G7VP", "4LI2", "JT2D", "MZH4", "BD48", "QNXB", "34JC", "OSPG", "DNEZ",
"OQ7H", "ZU0L", "WEQ7", "1GK0", "M72L", "D5GR", "7M83", "SUF8", "25D8", "C9R2", "3OYQ", "8DNT", "AMU3", "X7KZ",
"7ZTG", "19PA", "Z40C", "Z0QI", "5W9A", "DVMP", "RSCU", "G6L5", "3K9S", "SZMF", "TW5S", "3F3A", "OIPW", "CRKO",
"ZRRP", "242Y", "SUXL"]

const selections = ["KS9W", "AU3U", "CUXO", "X7T1", "AMU3", "KGNH", "5Q2P", "MUF8", "WS6M", "18HW", "N3RW", "LVWS",
"6LVH", "5MS6", "PE0E", "TXTN", "AR62", "IFE4", "4YK8", "DGV7", "MGSL", "999W", "KNKM", "AGCH", "K99F", "LP52",
"9PRQ"];

//function defined to find most matches betweeen the groups
function findLongestArray(x) {
	x 
	const y =selections
	const possibleAnswer = []
	for (i=0; i <= x.length; i++){
		if (x[i]===y[]){ //if an element in the group is equal to the element in selections add it to possible answer
			answerArray(array.push(possibleAnswer))
		} 

	if (possibleAnswer.length > answerArray.length){ //is the possible answer longer than the last recorded most amount of matches 
			answerArray = possibleAnswer;
			possibleAnswer = [];
	}

	else{
			possibleAnswer = []; // clear possible answer so it can be used again
	}


	}
}

function buttonClick() {
findLongestArray(groupA)
findLongestArray(groupB)
findLongestArray(groupC)
findLongestArray(groupD)
findLongestArray(groupE)
findLongestArray(groupF)
document.getElementById("answer").innerHTML = answerArray;

}
