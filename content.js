/* The Midnight Feast — scenes 01–03. */
window.FEAST={
  "version": 1,
  "chapters": [
    {
      "id": "last-hour",
      "title": "The last normal hour",
      "short": "Hide",
      "location": "The costume room",
      "scene": "costume",
      "time": "22:35",
      "endTime": "23:00",
      "speaker": "maya",
      "intro": "The school party is over. Five friends have signed up for an anonymous challenge: stay behind and film the headmaster’s office. You slip into the costume room. You think the plan is yours.",
      "objective": "Find a disguise, read the challenge and check tonight’s timetable. Choose when it is safe to leave your hiding place.",
      "searchLead": "Explore the costume room. Three useful objects are hidden among the costumes.",
      "hotspots": [
        {
          "id": "mask",
          "label": "A black-and-gold mask",
          "x": 57,
          "y": 30,
          "asset": "mask",
          "title": "A borrowed identity",
          "body": "<p>The drama club keeps old masks here. Tonight, every former student will wear one.</p><p><strong>You take a mask.</strong> Perhaps looking like a guest will help.</p>",
          "inventory": "mask",
          "size": 13
        },
        {
          "id": "challenge",
          "label": "A folded challenge card",
          "x": 81,
          "y": 74,
          "asset": "note",
          "title": "THE MIDNIGHT CHALLENGE",
          "body": "<p>Register by <strong>24 October</strong>. Stay after the party on <strong>31 October 2026</strong>. Film the headmaster’s office after the adults leave.</p><p class=\"document-small\">Registered: Maya, Ruby, Leo, Noah, Ben.<br>Organiser: anonymous.</p>",
          "inventory": "challenge",
          "size": 13
        },
        {
          "id": "timetable",
          "label": "A pocket watch and timetable",
          "x": 32,
          "y": 77,
          "asset": "watch",
          "title": "TONIGHT’S TIMETABLE",
          "body": "<table><tr><td>22:30</td><td>School party ends</td></tr><tr><td>22:40</td><td>Drama teacher checks the costume room</td></tr><tr><td>22:42</td><td>Caretaker leaves — confirmed on camera</td></tr><tr><td>22:45</td><td>Safe moment to leave the room</td></tr><tr><td>23:00</td><td>“Former students” arrive</td></tr></table><p>The headmaster usually leaves at ten. Tonight has a separate timetable.</p>",
          "inventory": null,
          "size": 11
        }
      ],
      "tasks": [
        {
          "id": "1-1",
          "type": "input",
          "prompt": "The party takes place ___ 31 October.",
          "answer": [
            "on"
          ],
          "hint": "Use the preposition for a particular date.",
          "explanation": "We use on with dates: on 31 October.",
          "tag": "Time prepositions",
          "context": ""
        },
        {
          "id": "1-2",
          "type": "input",
          "prompt": "The headmaster never eats in the dining hall ___ lunchtime.",
          "answer": [
            "at"
          ],
          "hint": "Think of a point in the day.",
          "explanation": "At lunchtime, at midnight, at night.",
          "tag": "Time prepositions",
          "context": ""
        },
        {
          "id": "1-3",
          "type": "input",
          "prompt": "The school holds a Halloween party ___ October.",
          "answer": [
            "in"
          ],
          "hint": "A month needs this preposition.",
          "explanation": "We use in with months: in October.",
          "tag": "Time prepositions",
          "context": ""
        },
        {
          "id": "1-4",
          "type": "order",
          "prompt": "Build a sentence about the caretaker.",
          "words": [
            "checks",
            "usually",
            "the caretaker",
            "the doors"
          ],
          "answer": [
            "the caretaker usually checks the doors",
            "usually the caretaker checks the doors"
          ],
          "hint": "The frequency word goes before the main verb.",
          "explanation": "Usually goes before checks: The caretaker usually checks the doors.",
          "tag": "Adverbs of frequency"
        },
        {
          "id": "1-5",
          "type": "order",
          "prompt": "Build a sentence about the headmaster.",
          "words": [
            "late",
            "is",
            "never",
            "the headmaster"
          ],
          "answer": "the headmaster is never late",
          "hint": "With be, the frequency word comes after the verb.",
          "explanation": "Is never: frequency adverbs normally follow be.",
          "tag": "Adverbs of frequency"
        },
        {
          "id": "1-6",
          "type": "choice",
          "prompt": "On ordinary school days, the caretaker ___ the gate at ten.",
          "options": [
            "lock",
            "locks",
            "is locking"
          ],
          "answer": "locks",
          "hint": "One caretaker: he …",
          "explanation": "Present Simple describes a routine. He locks.",
          "tag": "Present Simple",
          "context": ""
        },
        {
          "id": "1-7",
          "type": "choice",
          "prompt": "Which frequency scale goes from most frequent to least frequent?",
          "options": [
            "always → usually → often → sometimes → rarely → never",
            "never → usually → always → often → rarely → sometimes",
            "always → rarely → usually → never → often → sometimes"
          ],
          "answer": "always → usually → often → sometimes → rarely → never",
          "hint": "Always is 100%; never is 0%. Place the others between them.",
          "explanation": "Always → usually → often → sometimes → rarely → never. Rarely means almost never.",
          "tag": "Adverbs of frequency",
          "context": ""
        },
        {
          "id": "1-8",
          "type": "choice",
          "prompt": "The party ends at half past ten. Which time is that?",
          "options": [
            "22:30",
            "22:15",
            "21:30"
          ],
          "answer": "22:30",
          "hint": "Half past = 30 minutes after the hour.",
          "explanation": "Half past ten is 10:30 p.m., or 22:30.",
          "tag": "Telling the time",
          "context": ""
        },
        {
          "id": "1-9",
          "type": "input",
          "prompt": "Write the missing word: 22:45 is a quarter ___ eleven.",
          "answer": [
            "to"
          ],
          "hint": "There are fifteen minutes before eleven.",
          "explanation": "A quarter to eleven = 10:45 p.m.",
          "tag": "Telling the time",
          "context": ""
        },
        {
          "id": "1-10",
          "type": "input",
          "prompt": "Write the missing word: 23:15 is a quarter ___ eleven.",
          "answer": [
            "past"
          ],
          "hint": "It is fifteen minutes after eleven.",
          "explanation": "A quarter past eleven = 11:15 p.m.",
          "tag": "Telling the time",
          "context": ""
        },
        {
          "id": "1-11",
          "type": "choice",
          "prompt": "The teacher checks the costume room at 22:40. The caretaker leaves at 22:42. When can you leave safely?",
          "options": [
            "22:38",
            "22:45",
            "22:41"
          ],
          "answer": "22:45",
          "hint": "You need both adults to have finished.",
          "explanation": "The camera confirms the caretaker has left. A routine alone would not prove it.",
          "tag": "Evidence & time",
          "context": ""
        },
        {
          "id": "1-12",
          "type": "choice",
          "prompt": "Complete the routine: Ruby ___ checks her messages before leaving school — every single day.",
          "options": [
            "always",
            "sometimes",
            "rarely"
          ],
          "answer": "always",
          "hint": "Every single day = 100% in this context.",
          "explanation": "Always describes something that happens every time.",
          "tag": "Adverbs of frequency",
          "context": ""
        }
      ],
      "production": [
        {
          "prompt": "Describe two school routines. Use usually and never.",
          "model": "The caretaker usually checks the doors. Mr Vale is never late."
        },
        {
          "prompt": "Say when your class meets. Include a day and a time.",
          "model": "We meet on Fridays at half past three."
        }
      ],
      "reward": [
        "mask",
        "challenge"
      ],
      "resolution": "At 22:45, you leave the costume room. By 23:00, the school has changed. Outside, the city lights disappear. Car doors close beyond the gates. Elegant guests walk towards the hall.",
      "nextClue": "“Welcome back, former students.” Why do some of the guests look familiar?"
    },
    {
      "id": "mirror",
      "title": "The man in the mirror",
      "short": "Observe",
      "location": "The west corridor",
      "scene": "corridor",
      "time": "23:00",
      "endTime": "23:05",
      "speaker": "ruby",
      "intro": "Mr Vale is greeting guests in the corridor. On the security camera, you can see his face clearly. In the enormous mirror behind him, you can see only the guests. His reflection is missing.",
      "objective": "Compare normal routines with what is happening now. Examine the mirror, the portrait and the school’s strange rules.",
      "searchLead": "Click the mirror and portrait. Look for an old school notice, too.",
      "hotspots": [
        {
          "id": "mirror",
          "label": "The corridor mirror",
          "x": 87,
          "y": 39,
          "asset": null,
          "title": "NO REFLECTION",
          "body": "<div class=\"evidence-pair\"><figure><div class=\"evidence-camera\"><img src=\"assets/vale.webp\" alt=\"Mr Vale is visible on the security camera\"></div><figcaption>CAMERA 01 · 23:00<br>Mr Vale is here.</figcaption></figure><figure><div class=\"evidence-reflection\"></div><figcaption>THE CORRIDOR MIRROR<br>No reflection of Mr Vale.</figcaption></figure></div><p>Live camera, <strong>23:00</strong>: Mr Vale is standing in front of the mirror. The camera records him. The mirror does not reflect him.</p><p><strong>Rule of this story:</strong> vampires appear in photographs and on camera, but have no mirror reflection.</p>",
          "inventory": null,
          "size": 11
        },
        {
          "id": "portrait",
          "label": "The founder’s portrait",
          "x": 64,
          "y": 23,
          "asset": null,
          "title": "ELIAS VALE — FOUNDER, 1926",
          "body": "<div class=\"evidence-pair portraits\"><figure><img class=\"old-portrait\" src=\"assets/vale.webp\" alt=\"The founder Elias Vale in 1926\"><figcaption>THE FOUNDER · 1926</figcaption></figure><figure><img src=\"assets/vale.webp\" alt=\"The headmaster Mr Vale in 2026\"><figcaption>THE HEADMASTER · 2026</figcaption></figure></div><p>The founder has the same face, the same surname and the same red ring as the headmaster.</p><p>Mr Vale tells people he is the founder’s grandson. The portrait makes that story much less convincing.</p>",
          "inventory": "founder",
          "size": 10
        },
        {
          "id": "notice",
          "label": "A school notice",
          "x": 18,
          "y": 32,
          "asset": "note",
          "title": "A STRANGE LIST OF RULES",
          "body": "<p>No garlic in the school kitchen. Curtains in the office must stay closed. Appointments with the headmaster are always after sunset.</p><p>These facts were strange before. Together with the missing reflection, they form a pattern.</p>",
          "inventory": null,
          "size": 11
        }
      ],
      "tasks": [
        {
          "id": "2-1",
          "type": "choice",
          "prompt": "Mr Vale usually ___ at ten, but tonight he is staying late.",
          "options": [
            "leaves",
            "is leaving",
            "leave"
          ],
          "answer": "leaves",
          "hint": "Usually describes a routine.",
          "explanation": "Use Present Simple for the normal routine.",
          "tag": "Simple vs Continuous",
          "context": ""
        },
        {
          "id": "2-2",
          "type": "input",
          "prompt": "Look at the live camera. He ___ guests now. (greet)",
          "answer": [
            "is greeting"
          ],
          "hint": "Use be + verb-ing for what is happening now.",
          "explanation": "He is greeting guests now.",
          "tag": "Simple vs Continuous",
          "context": ""
        },
        {
          "id": "2-3",
          "type": "choice",
          "prompt": "You can see the guests at this moment. They ___ old-fashioned coats.",
          "options": [
            "wear",
            "are wearing",
            "wears"
          ],
          "answer": "are wearing",
          "hint": "At this moment describes the live scene.",
          "explanation": "They are wearing describes what you can see now.",
          "tag": "Simple vs Continuous",
          "context": ""
        },
        {
          "id": "2-4",
          "type": "choice",
          "prompt": "Ruby ___ the face in the portrait.",
          "options": [
            "recognises",
            "is recognising",
            "recognise"
          ],
          "answer": "recognises",
          "hint": "Here recognise means identify, a state.",
          "explanation": "We normally use recognise in a simple form in this meaning.",
          "tag": "Stative verbs",
          "context": ""
        },
        {
          "id": "2-5",
          "type": "input",
          "prompt": "Correct the verb phrase: “I am knowing his secret.”",
          "answer": [
            "i know his secret",
            "know",
            "i know"
          ],
          "hint": "Know describes a state.",
          "explanation": "I know his secret. Know is normally stative.",
          "tag": "Stative verbs",
          "context": ""
        },
        {
          "id": "2-6",
          "type": "choice",
          "prompt": "“I ___ he is the founder.” You are giving an opinion.",
          "options": [
            "think",
            "am thinking"
          ],
          "answer": "think",
          "hint": "An opinion is different from the process of considering something.",
          "explanation": "I think introduces an opinion.",
          "tag": "Stative verbs",
          "context": ""
        },
        {
          "id": "2-7",
          "type": "choice",
          "prompt": "“Give me a moment. I ___ about our escape plan.”",
          "options": [
            "think",
            "am thinking"
          ],
          "answer": "am thinking",
          "hint": "Here think means actively consider.",
          "explanation": "Am thinking describes a process happening now.",
          "tag": "Stative & dynamic meanings",
          "context": ""
        },
        {
          "id": "2-8",
          "type": "choice",
          "prompt": "Mr Vale ___ a red ring. It belongs to him.",
          "options": [
            "has",
            "is having"
          ],
          "answer": "has",
          "hint": "This is possession.",
          "explanation": "Has describes possession, a state.",
          "tag": "Stative & dynamic meanings",
          "context": ""
        },
        {
          "id": "2-9",
          "type": "choice",
          "prompt": "He cannot answer the phone: he ___ a meeting right now.",
          "options": [
            "has",
            "is having"
          ],
          "answer": "is having",
          "hint": "Having a meeting is an activity.",
          "explanation": "Is having describes an activity taking place now.",
          "tag": "Stative & dynamic meanings",
          "context": ""
        },
        {
          "id": "2-10",
          "type": "choice",
          "prompt": "We ___ a safer place. This corridor is too open.",
          "options": [
            "need",
            "are needing"
          ],
          "answer": "need",
          "hint": "Need expresses a state here.",
          "explanation": "We need a safer place.",
          "tag": "Stative verbs",
          "context": ""
        },
        {
          "id": "2-11",
          "type": "input",
          "prompt": "The guests are not looking at us. Make the contraction: The guests ___ at us.",
          "answer": [
            "aren't looking",
            "are not looking"
          ],
          "hint": "Keep are, make it negative, then use looking.",
          "explanation": "They aren’t looking at us.",
          "tag": "Present Continuous negative",
          "context": ""
        },
        {
          "id": "2-12",
          "type": "choice",
          "prompt": "What is the strongest evidence that Mr Vale is a vampire?",
          "options": [
            "He is wearing a dark suit.",
            "The camera shows him, but his reflection is missing.",
            "He usually leaves late."
          ],
          "answer": "The camera shows him, but his reflection is missing.",
          "hint": "Choose evidence you can check, rather than a habit or an outfit.",
          "explanation": "The live camera and mirror show the same moment.",
          "tag": "Evidence",
          "context": ""
        }
      ],
      "production": [
        {
          "prompt": "Contrast one normal routine with what is happening tonight.",
          "model": "Mr Vale usually leaves at ten, but tonight he is greeting guests."
        },
        {
          "prompt": "Give your opinion, then describe what you are thinking about.",
          "model": "I think he is a vampire. I am thinking about a safer route."
        }
      ],
      "reward": [
        "founder"
      ],
      "resolution": "The headmaster turns towards the camera. “I know you are still here. You have already missed the welcome speech rehearsal.” You slip into the old library. A note on the door reads: FIND THE SCHOOL CHARTER.",
      "nextClue": "Before choosing an escape route, you need to know the rules."
    },
    {
      "id": "library",
      "title": "The forgotten library",
      "short": "Search",
      "location": "The old library",
      "scene": "library",
      "time": "23:06",
      "endTime": "23:11",
      "speaker": "leo",
      "intro": "The library has a locked archive drawer. On the reading table lies a tiny model of this room. A note says: “Describe what you see. The correct descriptions will open the archive.”",
      "objective": "Find the room model, a class photograph and the school charter. Use all eight place prepositions to open the archive.",
      "searchLead": "Search the reading table, the bookcase and the fireplace.",
      "hotspots": [
        {
          "id": "model",
          "label": "The room model",
          "x": 63,
          "y": 74,
          "asset": "chest",
          "title": "THE READING-TABLE MODEL",
          "body": "<p>A model room sits in an old display box. A reference picture will appear beside each location question.</p><p>Use <strong>in front of, on, in, under, next to, behind, opposite, above</strong>.</p>",
          "inventory": null,
          "size": 13
        },
        {
          "id": "photo",
          "label": "The old class photograph",
          "x": 32,
          "y": 48,
          "asset": "photo",
          "title": "CLASS OF 1926",
          "body": "<p>A photograph shows Mr Vale and a sixteen-year-old boy named <strong>Sam Reed</strong>. You saw both of them in the corridor tonight.</p><p>Two later reunion photographs, from 1956 and 1986, show the same former pupils. None has aged.</p>",
          "inventory": "photo",
          "size": 11
        },
        {
          "id": "charter",
          "label": "The school charter",
          "x": 13,
          "y": 68,
          "asset": "blue-book",
          "title": "THE CHARTER OF BLACKTHORN ACADEMY",
          "body": "<p><strong>1.</strong> The crypt opens every Halloween at 23:00. The boundary around the school then closes. Doors and windows cannot take a living visitor outside.</p><p><strong>2.</strong> The host and his guests cannot harm living visitors before midnight.</p><p><strong>3.</strong> A living hand must restore the first school bell and ring it before midnight. Its sound ends the feast, returns the host to the crypt and frees the students under his spell.</p><p><strong>4.</strong> The original clapper also opens the crypt. It cannot be destroyed.</p>",
          "inventory": "charter",
          "size": 12
        }
      ],
      "tasks": [
        {
          "id": "3-1",
          "type": "input",
          "prompt": "There ___ a candle on the desk.",
          "answer": [
            "is"
          ],
          "hint": "A candle is singular.",
          "explanation": "There is + a singular noun.",
          "tag": "There is / are",
          "context": "",
          "diagram": "on"
        },
        {
          "id": "3-2",
          "type": "input",
          "prompt": "There ___ two books under the desk.",
          "answer": [
            "are"
          ],
          "hint": "Two books are plural.",
          "explanation": "There are + plural nouns.",
          "tag": "There is / are",
          "context": "",
          "diagram": "under"
        },
        {
          "id": "3-3",
          "type": "input",
          "prompt": "The candle is ___ the desk.",
          "answer": [
            "on"
          ],
          "hint": "The base of the candle touches the top surface.",
          "explanation": "On describes contact with a surface.",
          "tag": "Describe the model",
          "context": "",
          "diagram": "on"
        },
        {
          "id": "3-4",
          "type": "input",
          "prompt": "The key is ___ the glass jar.",
          "answer": [
            "in"
          ],
          "hint": "The key is inside the container.",
          "explanation": "In describes a position inside something.",
          "tag": "Describe the model",
          "context": "",
          "diagram": "in"
        },
        {
          "id": "3-5",
          "type": "input",
          "prompt": "The books are ___ the desk.",
          "answer": [
            "under"
          ],
          "hint": "Look below the desktop.",
          "explanation": "Under means below something.",
          "tag": "Describe the model",
          "context": "",
          "diagram": "under"
        },
        {
          "id": "3-6",
          "type": "input",
          "prompt": "The mask is ___ the jar.",
          "answer": [
            "next to",
            "beside"
          ],
          "hint": "They are side by side. Use the target phrase from the model.",
          "explanation": "Next to means beside.",
          "tag": "Describe the model",
          "context": "",
          "diagram": "next to"
        },
        {
          "id": "3-7",
          "type": "input",
          "prompt": "The photograph is ___ the candle.",
          "answer": [
            "behind"
          ],
          "hint": "The candle partly hides the photograph.",
          "explanation": "Behind: farther away from the viewer.",
          "tag": "Describe the model",
          "context": "",
          "diagram": "behind"
        },
        {
          "id": "3-8",
          "type": "input",
          "prompt": "The portrait is ___ the desk.",
          "answer": [
            "above"
          ],
          "hint": "There is a gap between the picture and the desk.",
          "explanation": "Above: higher, with no contact.",
          "tag": "Describe the model",
          "context": "",
          "diagram": "above"
        },
        {
          "id": "3-9",
          "type": "input",
          "prompt": "The chest is ___ the desk.",
          "answer": [
            "in front of"
          ],
          "hint": "The chest is on the viewer’s side of the desk.",
          "explanation": "In front of: closer to the viewer.",
          "tag": "Describe the model",
          "context": "",
          "diagram": "in front of"
        },
        {
          "id": "3-10",
          "type": "input",
          "prompt": "The two doors are ___ each other.",
          "answer": [
            "opposite"
          ],
          "hint": "They face each other across the room.",
          "explanation": "Opposite: facing across a space.",
          "tag": "Describe the model",
          "context": "",
          "diagram": "opposite"
        },
        {
          "id": "3-11",
          "type": "order",
          "prompt": "Ask about the archive drawer.",
          "words": [
            "a diary",
            "is",
            "in the drawer",
            "there"
          ],
          "answer": "is there a diary in the drawer",
          "hint": "For a question, put is before there.",
          "explanation": "Is there a diary in the drawer?",
          "tag": "There is question"
        },
        {
          "id": "3-12",
          "type": "input",
          "prompt": "You check the window ledge: it is empty. Complete: There ___ any keys on the ledge.",
          "answer": [
            "aren't",
            "are not"
          ],
          "hint": "Keys are plural; make the sentence negative.",
          "explanation": "There aren’t any keys on the ledge.",
          "tag": "There are negative",
          "context": ""
        }
      ],
      "production": [
        {
          "prompt": "Describe two places in the room model. Use there is and there are.",
          "model": "There is a portrait above the desk. There are two books under the desk."
        },
        {
          "prompt": "Ask a question about the library. Then give a negative answer.",
          "model": "Are there any keys on the ledge? No, there aren’t."
        }
      ],
      "reward": [
        "photo",
        "charter",
        "samnote"
      ],
      "resolution": "The archive drawer opens. Inside, you find a note signed S.R. It warns: “The main entrance is a trap. The five seats in the hall are for you.” The charter proves that an ordinary door key cannot get you out.",
      "nextClue": "S.R. knows a different way. But can you trust the person behind those initials?",
      "special": "archive"
    }
  ],
  "cast": {
    "maya": {
      "name": "Maya",
      "role": "The observer"
    },
    "ruby": {
      "name": "Ruby",
      "role": "The researcher"
    },
    "leo": {
      "name": "Leo",
      "role": "The planner"
    },
    "noah": {
      "name": "Noah",
      "role": "The filmmaker"
    },
    "ben": {
      "name": "Ben",
      "role": "The loyal friend"
    },
    "sam": {
      "name": "Sam Reed",
      "role": "Class of 1926"
    },
    "vale": {
      "name": "Mr Vale",
      "role": "The headmaster"
    }
  },
  "items": {
    "mask": {
      "name": "Borrowed mask",
      "asset": "mask",
      "detail": "A costume from the drama room. It helps you pass as a former student."
    },
    "challenge": {
      "name": "Midnight challenge",
      "asset": "note",
      "detail": "Five registrations, submitted last week. Who organised this challenge?"
    },
    "photo": {
      "name": "Class of 1926",
      "asset": "photo",
      "detail": "Sam Reed and the headmaster look exactly as they do tonight. A camera records vampires; a mirror does not."
    },
    "charter": {
      "name": "The school charter",
      "asset": "blue-book",
      "detail": "The boundary closes at 23:00. Living guests are protected until midnight. A living hand must restore the first bell and ring it before midnight."
    },
    "samnote": {
      "name": "A note from S.R.",
      "asset": "note",
      "detail": "A hidden note signed S.R. warns that the main entrance is a trap. Its author is curious about stars, interested in astronomy, good at card tricks and scared of deep water. Which former student wrote it?"
    },
    "founder": {
      "name": "The founder’s portrait",
      "asset": "vale",
      "detail": "Elias Vale founded the school in 1926. His portrait shows the same face and red ring as the headmaster tonight. The camera records Mr Vale, but the corridor mirror has no reflection of him."
    }
  },
  "ending": {
    "title": "The first bell rings.",
    "paragraphs": [
      "The sound rolls through the school. The crypt doors open behind Mr Vale. The broken oath pulls him into the darkness. This time, the doors close with him inside.",
      "Beyond the windows, the city lights return. Your phones fill with missed messages. Every exit is an ordinary door again.",
      "Sam walks towards the corridor mirror. For the first time in a hundred years, his reflection walks towards him.",
      "“I can see myself.”",
      "The former students are human again, still the ages they were when Vale changed them. The five friends have saved more than themselves."
    ],
    "epilogue": "The next school morning, a notice appears on the office door: THE HEADMASTER WILL NOT BE RETURNING. PLEASE DO NOT OPEN THE BASEMENT."
  },
  "release": "Scenes 01–03",
  "diagramBounds": {
    "candle": {
      "x": 0,
      "y": 0,
      "w": 298,
      "h": 276,
      "width": 313,
      "height": 314
    },
    "blue-book": {
      "x": 29,
      "y": 0,
      "w": 285,
      "h": 285,
      "width": 314,
      "height": 314
    },
    "diary": {
      "x": 34,
      "y": 24,
      "w": 279,
      "h": 287,
      "width": 313,
      "height": 314
    },
    "jar": {
      "x": 62,
      "y": 0,
      "w": 195,
      "h": 268,
      "width": 314,
      "height": 314
    },
    "gold-key": {
      "x": 40,
      "y": 43,
      "w": 255,
      "h": 256,
      "width": 314,
      "height": 314
    },
    "mask": {
      "x": 3,
      "y": 76,
      "w": 307,
      "h": 221,
      "width": 313,
      "height": 314
    },
    "photo": {
      "x": 38,
      "y": 46,
      "w": 262,
      "h": 242,
      "width": 314,
      "height": 313
    },
    "vale": {
      "x": 4,
      "y": 0,
      "w": 435,
      "h": 433,
      "width": 443,
      "height": 443
    },
    "chest": {
      "x": 20,
      "y": 0,
      "w": 282,
      "h": 274,
      "width": 313,
      "height": 313
    }
  }
};
