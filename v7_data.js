const V7_DATA = {
  "lectures": {
    "engr-l1": {
      "title": "Lecture 1 · Framing Engineering Problems Like an Engineer",
      "week": "Week 1 · Aug 25",
      "duration": "78 min",
      "objectives": [
        "Write a solution-neutral need statement",
        "Separate criteria from constraints",
        "Map stakeholders and competing priorities",
        "Explain why uncertainty belongs in early design work"
      ],
      "intro": "Today is less about designing something and more about learning how engineers decide what the real problem is. A weak start produces a polished answer to the wrong question. A strong start creates room for several solutions and makes the assumptions visible.",
      "segments": [
        {
          "title": "1 · Need before solution",
          "paragraphs": [
            "When someone says, ‘We need a bridge,’ an engineer should hear a proposed solution, not yet a complete problem. The deeper question is: who needs to move, between what points, under what conditions, and what risks or delays exist now? A solution-neutral need statement protects the team from locking in too early.",
            "A useful template is: ‘[User] needs a way to [desired outcome] because [evidence of the current problem], while respecting [major constraints].’ It is not perfect, but it forces you to identify the user, outcome, evidence, and limits."
          ],
          "example": "Weak: ‘Build a pedestrian bridge.’ Better: ‘Students need a safer, more predictable way to cross the service drive during class-change periods without blocking emergency vehicle access.’",
          "pause": "Rewrite this: ‘Install more bike racks.’ What is the need underneath the proposed solution?",
          "mistake": "Do not put words like bridge, app, concrete wall, or traffic light into the need statement unless the project truly requires that exact solution."
        },
        {
          "title": "2 · Criteria, constraints, and requirements",
          "paragraphs": [
            "Criteria are qualities you use to compare alternatives. Safety, initial cost, maintainability, construction time, accessibility, appearance, embodied carbon, and user comfort can all be criteria. They can be weighted because some matter more than others.",
            "Constraints are hard boundaries. A $40,000 cap, a 12-foot height limit, a required fire lane, a fixed completion date, or a prohibition on disturbing an existing utility are constraints. If a concept violates a true constraint, a high score elsewhere does not rescue it."
          ],
          "example": "For a shade structure: ‘minimize maintenance’ is a criterion; ‘must maintain 8 ft clear headroom’ is a constraint.",
          "pause": "Classify each: ADA route must remain open; maximize shade area; finish before October 1; reduce long-term repainting."
        },
        {
          "title": "3 · Stakeholders are not just “the client”",
          "paragraphs": [
            "Projects affect more people than the person paying the invoice. Users, maintenance staff, emergency responders, neighbors, utilities, contractors, inspectors, facility managers, and future operators can all have information that changes the design.",
            "A good stakeholder map asks two questions: who is affected, and who can affect the project? A maintenance technician may have low formal authority but high practical knowledge. A regulator may never use the facility but can stop the project if a requirement is missed."
          ],
          "example": "A campus loading-zone redesign might involve delivery drivers, pedestrians, accessibility services, campus police, facilities, nearby classrooms, and vendors.",
          "note": "Instructor voice: When a project feels ‘surprisingly complicated,’ it is often because a stakeholder or operating condition appeared late. Finding them early is cheaper."
        },
        {
          "title": "4 · Assumptions and uncertainty",
          "paragraphs": [
            "Early design is full of unknowns. The professional move is not to hide them; it is to label them. Write down assumed dimensions, costs, loads, user counts, and schedule durations, and mark which assumptions are likely to control the decision.",
            "An assumption register can be simple: assumption, current value, source, confidence, and what happens if it changes. This turns ‘we guessed’ into a traceable decision that can be updated as evidence improves."
          ],
          "example": "Assumption: 200 users/hour. Source: one 30-minute observation doubled. Confidence: low. Risk if wrong: circulation concept may be undersized.",
          "pause": "What data would you collect next to improve confidence in that 200 users/hour assumption?"
        }
      ],
      "keyTerms": [
        "need statement",
        "criterion",
        "constraint",
        "stakeholder",
        "requirement",
        "assumption",
        "uncertainty",
        "trade-off"
      ],
      "check": [
        {
          "q": "Which statement is most solution-neutral?",
          "options": [
            "Install a steel pedestrian bridge",
            "Students need a safer way to cross the service drive during peak periods",
            "Use two traffic signals",
            "Pour a raised concrete walkway"
          ],
          "answer": 1
        },
        {
          "q": "Which is most clearly a constraint?",
          "options": [
            "Improve appearance",
            "Reduce maintenance",
            "Total installed cost must not exceed $40,000",
            "Increase shade"
          ],
          "answer": 2
        },
        {
          "q": "Why document assumptions?",
          "options": [
            "To make the report longer",
            "To show what inputs may need revision as evidence improves",
            "To avoid calculations",
            "To guarantee a design is correct"
          ],
          "answer": 1
        }
      ],
      "recap": [
        "Start with the need, not your favorite solution.",
        "Criteria compare; constraints limit.",
        "Stakeholders reveal requirements you may not see alone.",
        "Visible assumptions make later revisions easier."
      ],
      "resources": [
        "designVideo"
      ]
    },
    "engr-l1b": {
      "title": "Workshop · Units, Estimation & Sanity Checks",
      "week": "Week 1 · Aug 27",
      "duration": "52 min",
      "objectives": [
        "Carry units through calculations",
        "Use order-of-magnitude estimates",
        "Distinguish precision from accuracy",
        "Perform a sanity check before trusting a result"
      ],
      "intro": "Engineering math is not only about getting a number. It is about getting a number with a meaning, a unit, a reasonable scale, and enough traceability that someone else can inspect it.",
      "segments": [
        {
          "title": "1 · Units are part of the number",
          "paragraphs": [
            "Treat units algebraically. If distance is feet and time is seconds, distance divided by time must produce feet per second. If your final unit is square feet when the question asks for volume, the unit itself tells you something went wrong."
          ],
          "example": "A 12 ft × 10 ft room has 120 ft² of floor area, not 120 ft. A 20 ft × 10 ft × 4 in slab requires converting 4 in to 1/3 ft before computing cubic feet.",
          "pause": "What unit should result from force × distance? Why is that useful in statics?"
        },
        {
          "title": "2 · Precision is not accuracy",
          "paragraphs": [
            "A calculator may display 14.873629. That does not mean your field measurement or cost assumption is known to six decimal places. Precision describes the resolution of the reported value; accuracy describes closeness to the true value.",
            "Report enough digits to support the decision without pretending your inputs are better than they are."
          ]
        },
        {
          "title": "3 · Fermi estimates",
          "paragraphs": [
            "A Fermi estimate deliberately uses rough but defendable assumptions to get the scale of an answer. It is useful before detailed modeling because it exposes impossible results quickly."
          ],
          "example": "Estimate chairs in a 30 ft × 40 ft classroom. If each seated person including circulation effectively uses about 15–20 ft², then 1,200 ft² suggests roughly 60–80 people before you ever draw a seating plan.",
          "pause": "Estimate how many 5-gallon buckets would hold 1 cubic yard. You do not need an exact conversion at first; aim for the right order of magnitude."
        },
        {
          "title": "4 · Sanity checking",
          "paragraphs": [
            "After calculating, ask: sign, unit, magnitude, trend. Is the sign physically sensible? Are the units correct? Is the magnitude believable? If one input increases, does the answer move in the direction you expect?"
          ],
          "example": "If you double a uniform material thickness and your volume calculation decreases, stop. The trend is wrong even if the arithmetic looks tidy."
        }
      ],
      "keyTerms": [
        "dimensional analysis",
        "precision",
        "accuracy",
        "order of magnitude",
        "Fermi estimate",
        "sanity check"
      ],
      "check": [
        {
          "q": "A result for floor area should most naturally use:",
          "options": [
            "ft",
            "ft²",
            "ft³",
            "lb-ft"
          ],
          "answer": 1
        },
        {
          "q": "A calculator showing many digits guarantees:",
          "options": [
            "Accuracy",
            "Nothing about measurement accuracy",
            "Correct units",
            "A correct model"
          ],
          "answer": 1
        }
      ],
      "recap": [
        "Carry units.",
        "Match significant detail to input quality.",
        "Estimate first when possible.",
        "Check sign, unit, magnitude, and trend."
      ],
      "resources": []
    },
    "engr-l2": {
      "title": "Lecture 2 · Generating Alternatives & Building a Decision Matrix",
      "week": "Week 2 · Sep 1",
      "duration": "84 min",
      "objectives": [
        "Generate genuinely different concepts",
        "Choose defensible decision criteria",
        "Build a weighted matrix",
        "Perform a sensitivity check",
        "Explain the decision instead of hiding behind the score"
      ],
      "intro": "A decision matrix is useful only after you have done the creative work of generating alternatives and the judgment work of defining what matters. It is a transparent comparison tool, not a machine that discovers the truth for you.",
      "segments": [
        {
          "title": "1 · Diverge before you converge",
          "paragraphs": [
            "Teams love the first plausible idea because it reduces uncertainty. Resist that urge. Spend a short, deliberate period generating alternatives that solve the need in different ways, not just cosmetic variations of one concept."
          ],
          "example": "For campus shade: trees, tensile canopy, photovoltaic canopy, movable umbrellas, or shifting seating to existing shade are different concepts. Five color choices for one canopy are not."
        },
        {
          "title": "2 · Build criteria from the need",
          "paragraphs": [
            "Criteria should connect to stakeholders and project goals. Avoid vague labels like ‘good’ or ‘best.’ Prefer criteria you can describe: accessible route quality, shade coverage at 2 PM, annual maintenance burden, installed cost, construction disruption, or expected service life."
          ],
          "pause": "If ‘safety’ is a criterion, what observable or measurable evidence could support a score?"
        },
        {
          "title": "3 · Weight and score carefully",
          "paragraphs": [
            "Weights represent importance; scores represent how well each alternative performs. Keep those ideas separate. A criterion can be extremely important but every concept may perform similarly on it. Conversely, a low-weight criterion can have large score differences without controlling the decision."
          ],
          "example": "If accessibility weight is 0.30 and Concept B scores 5/5, its weighted contribution is 1.50. Repeat for all criteria and sum."
        },
        {
          "title": "4 · Sensitivity is where the thinking happens",
          "paragraphs": [
            "Change a high-impact assumption and see whether the ranking changes. If Concept A wins only when cost is weighted at 40% but Concept B wins at 30%, the recommendation depends heavily on how you value cost. That should appear in the discussion, not be buried."
          ],
          "mistake": "Do not tune weights after seeing the scores just to make your preferred concept win."
        },
        {
          "title": "5 · Recommendation language",
          "paragraphs": [
            "A strong recommendation explains why the preferred concept fits the stated priorities, what trade-offs remain, and what information could change the decision. The final paragraph should sound like engineering judgment, not a scoreboard announcement."
          ],
          "example": "‘Concept B is recommended because it provides the strongest accessibility and drainage performance while remaining within the budget constraint. It costs about 12% more than A, so the team should validate the maintenance assumptions before final selection.’"
        }
      ],
      "keyTerms": [
        "alternative",
        "decision matrix",
        "weight",
        "score",
        "sensitivity",
        "trade-off",
        "recommendation"
      ],
      "check": [
        {
          "q": "Weights in a decision matrix represent:",
          "options": [
            "How expensive each concept is",
            "The relative importance of criteria",
            "The number of team members",
            "The final design"
          ],
          "answer": 1
        },
        {
          "q": "Sensitivity analysis asks:",
          "options": [
            "Can the spreadsheet print?",
            "Would reasonable changes in assumptions or weights change the decision?",
            "Did every score equal 5?",
            "Can one criterion be deleted?"
          ],
          "answer": 1
        },
        {
          "q": "Which is the best recommendation style?",
          "options": [
            "B won. End of report.",
            "B is best because I like it.",
            "B best matches the weighted priorities, but cost and maintenance assumptions should be validated.",
            "The matrix proves B is objectively correct."
          ],
          "answer": 2
        }
      ],
      "recap": [
        "Generate distinct alternatives.",
        "Weights = importance; scores = performance.",
        "Sensitivity reveals fragile decisions.",
        "Explain trade-offs and remaining uncertainty."
      ],
      "resources": [
        "designVideo"
      ]
    },
    "engr-l2b": {
      "title": "Lecture · Engineering Ethics, Risk & Technical Communication",
      "week": "Week 2 · Sep 3",
      "duration": "68 min",
      "objectives": [
        "Recognize an ethical engineering issue",
        "Distinguish hazard, risk, and uncertainty",
        "Communicate bad news clearly",
        "Document a technical recommendation"
      ],
      "intro": "Engineering decisions can affect safety, money, access, and the environment. Ethics is not an extra chapter added after the calculations; it is part of deciding what information must be checked, communicated, and acted on.",
      "segments": [
        {
          "title": "1 · Hazard versus risk",
          "paragraphs": [
            "A hazard is a source of potential harm. Risk combines the consequence of that harm with the likelihood or exposure. A high-consequence, low-probability event may still deserve serious attention if failure would be catastrophic."
          ],
          "example": "An unguarded opening is a hazard. Risk depends on who can reach it, how often, and what would happen in a fall."
        },
        {
          "title": "2 · Public welfare and professional responsibility",
          "paragraphs": [
            "If evidence suggests a design is unsafe, the engineer does not get to hide the concern because the schedule is inconvenient. The response should be proportionate and documented: verify the concern, communicate it to the responsible parties, and avoid representing uncertain work as complete."
          ],
          "note": "Instructor voice: Technical courage often looks boring on paper—clear notes, dates, assumptions, and a willingness to say ‘I do not know yet.’"
        },
        {
          "title": "3 · Communicating uncertainty",
          "paragraphs": [
            "Do not bury uncertainty in vague language. Say what is known, what is assumed, how sensitive the conclusion is, and what should be verified next."
          ],
          "example": "‘The preliminary reaction estimate uses a 1.5 kip point load assumed at midspan. Final support design should not proceed until the actual load location and connection geometry are confirmed.’"
        },
        {
          "title": "4 · A useful technical memo structure",
          "paragraphs": [
            "Start with the decision or issue, then the evidence, then the reasoning, then the recommended action. Busy readers should not have to dig through two pages to learn why you are writing."
          ],
          "pause": "Write a four-sentence memo outline for an unexpectedly cracked beam discovered during a site walk. Do not diagnose the cause; focus on what you know and what should happen next."
        }
      ],
      "keyTerms": [
        "hazard",
        "risk",
        "uncertainty",
        "public welfare",
        "technical memo",
        "assumption"
      ],
      "check": [
        {
          "q": "A hazard is:",
          "options": [
            "The probability only",
            "A source of potential harm",
            "A final risk score",
            "A design criterion only"
          ],
          "answer": 1
        },
        {
          "q": "Good uncertainty communication should:",
          "options": [
            "Hide weak assumptions",
            "State what is known, assumed, and needs verification",
            "Avoid numbers",
            "Guarantee the conclusion"
          ],
          "answer": 1
        }
      ],
      "recap": [
        "Ethics lives inside technical decisions.",
        "Separate hazard from risk.",
        "Document uncertainty.",
        "Lead technical communication with the issue and action."
      ],
      "resources": []
    },
    "engr-l3": {
      "title": "Lecture 3 · Loads, Load Paths & Free-Body Diagrams",
      "week": "Week 3 · Sep 8",
      "duration": "96 min",
      "objectives": [
        "Classify common loads",
        "Trace a load path to the ground",
        "Choose a useful system boundary",
        "Draw a free-body diagram",
        "Solve simple support reactions with equilibrium"
      ],
      "intro": "This is the point where the course starts to feel like mechanics. The goal is not to memorize support symbols. The goal is to look at a physical system, decide what object you are analyzing, replace its surroundings with forces, and then ask whether those forces can balance.",
      "segments": [
        {
          "title": "1 · What counts as a load?",
          "paragraphs": [
            "Dead load comes from permanent self-weight and fixed components. Live load changes with occupancy or use. Environmental actions include wind, snow, rain ponding, temperature effects, and earthquakes. Dynamic loads change with time and may involve impact or vibration.",
            "The label matters because different loads have different sources, variability, and design treatment. In this class we use simplified loads to learn the mechanics, but the habit of asking ‘where did this load come from?’ is real."
          ],
          "example": "A concrete slab’s own weight is dead load. Students standing on it are live load. Wind pressure on the facade is environmental."
        },
        {
          "title": "2 · Follow the load path",
          "paragraphs": [
            "A load path is the route force takes through connected components to the ground. If you cannot tell the story continuously—deck to joist, joist to beam, beam to column, column to footing, footing to soil—you should be suspicious of the model.",
            "Connections are part of the load path. A perfectly strong beam is useless if the connection that transfers its reaction into the column cannot do the job."
          ],
          "pause": "Trace the path of a person standing on a second-floor wood-framed room down to the soil in at least five steps."
        },
        {
          "title": "3 · Choose the system boundary",
          "paragraphs": [
            "A free-body diagram starts with an isolated body or system. Everything you remove must be replaced by the force or moment it exerted across the boundary. Choosing the boundary is an engineering decision: sometimes isolating one member is best; sometimes a larger assembly eliminates internal forces you do not need."
          ],
          "mistake": "Do not draw both the support hardware and the support reaction on the same free-body diagram. Once you isolate the beam, the support is represented by its reaction."
        },
        {
          "title": "4 · Support reactions",
          "paragraphs": [
            "In a 2D idealization, a roller usually provides one reaction normal to the rolling surface; a pin can provide horizontal and vertical reactions; a fixed support can provide horizontal, vertical, and moment reaction. These are idealized models of how motion is restrained."
          ],
          "example": "A pin at A and roller at B on a horizontal beam commonly produces Ax, Ay, and By as unknowns."
        },
        {
          "title": "5 · Equilibrium equations",
          "paragraphs": [
            "For a planar body at rest: ΣFx = 0, ΣFy = 0, and ΣM = 0. A moment measures rotational tendency about a point. Choosing a moment center strategically can eliminate unknown forces that pass through that point."
          ],
          "example": "For a 10-ft beam with 1,000 lb at 4 ft from A: ΣM_A=0 gives By(10)-1000(4)=0, so By=400 lb. Then ΣFy=0 gives Ay=600 lb.",
          "pause": "Before calculating, predict which support reaction should be larger. Why?"
        },
        {
          "title": "6 · Check the answer physically",
          "paragraphs": [
            "Reactions should sum to the applied vertical load. If the point load moves toward A, Ay should increase and By should decrease. This trend check is as important as the arithmetic."
          ],
          "note": "Instructor voice: If your equation produces a result that fights your physical intuition, do not immediately trust either one. Use the disagreement as a signal to inspect the diagram and sign convention."
        }
      ],
      "keyTerms": [
        "dead load",
        "live load",
        "load path",
        "system boundary",
        "reaction",
        "free-body diagram",
        "equilibrium",
        "moment"
      ],
      "check": [
        {
          "q": "A person standing on a floor is typically modeled as:",
          "options": [
            "Dead load",
            "Live load",
            "Thermal load",
            "Prestress"
          ],
          "answer": 1
        },
        {
          "q": "A free-body diagram should show:",
          "options": [
            "External forces acting on the isolated system",
            "Every object in the building",
            "Only internal forces",
            "No support reactions"
          ],
          "answer": 0
        },
        {
          "q": "For planar static equilibrium, which set is used?",
          "options": [
            "ΣFx=0 only",
            "ΣFy=0 only",
            "ΣFx=0, ΣFy=0, ΣM=0",
            "Velocity=0 only"
          ],
          "answer": 2
        }
      ],
      "recap": [
        "Loads have sources and paths.",
        "Choose the system before drawing forces.",
        "Support models represent restrained motion.",
        "Use force and moment equilibrium, then check the trend."
      ],
      "resources": [
        "fbdVideo",
        "openstaxFbd",
        "mitStatics"
      ]
    },
    "engr-l3b": {
      "title": "Lecture · Moments, Couples & Equilibrium Strategy",
      "week": "Week 3 · Sep 10",
      "duration": "82 min",
      "objectives": [
        "Compute a force moment",
        "Choose a useful moment center",
        "Recognize a couple moment",
        "Sequence equilibrium equations efficiently"
      ],
      "intro": "Moments are where many statics problems suddenly become easier. A force does more than push; if its line of action misses your chosen point, it also tends to rotate the body about that point.",
      "segments": [
        {
          "title": "1 · Moment as force times perpendicular distance",
          "paragraphs": [
            "The scalar magnitude of a 2D moment is M = F d⊥, where d⊥ is the shortest perpendicular distance from the point to the force’s line of action. Do not automatically use the visible member length; use the perpendicular lever arm."
          ],
          "example": "A 200-lb downward force acting 3 ft horizontally from point A creates a 600 lb-ft clockwise moment about A."
        },
        {
          "title": "2 · Sign convention",
          "paragraphs": [
            "Choose clockwise-negative/counterclockwise-positive or the reverse, then stay consistent. The sign is bookkeeping; the physical direction is what matters."
          ],
          "mistake": "Changing sign convention halfway through a problem can produce a numerically neat but physically wrong answer."
        },
        {
          "title": "3 · Pick a smart moment center",
          "paragraphs": [
            "A force whose line of action passes through the moment center creates zero moment about that point. That means you can often eliminate two unknown support components by summing moments about their support."
          ],
          "example": "For a pin at A with Ax and Ay, taking moments about A removes both Ax and Ay from the moment equation."
        },
        {
          "title": "4 · Couple moments",
          "paragraphs": [
            "Two equal and opposite parallel forces separated by a distance create a pure couple. The net force is zero, but the net moment is not. A couple moment has the same rotational effect about any reference point in a rigid-body model."
          ]
        },
        {
          "title": "5 · Solve, then verify",
          "paragraphs": [
            "A common sequence is: draw FBD; sum moments about the support with the most unknowns; solve another force equation; use the final equilibrium equation as a check whenever possible."
          ],
          "pause": "For a pin-and-roller beam with only vertical loads, which equation would you usually write first and why?"
        }
      ],
      "keyTerms": [
        "moment",
        "lever arm",
        "line of action",
        "couple",
        "sign convention",
        "equilibrium"
      ],
      "check": [
        {
          "q": "Moment magnitude uses:",
          "options": [
            "Force × perpendicular distance",
            "Force ÷ distance",
            "Mass × acceleration only",
            "Area × pressure only"
          ],
          "answer": 0
        },
        {
          "q": "Why take moments about a pin support?",
          "options": [
            "To make all forces larger",
            "Forces through that point create zero moment, eliminating unknowns",
            "Because pins have no reactions",
            "Because moments are optional"
          ],
          "answer": 1
        }
      ],
      "recap": [
        "Use perpendicular distance.",
        "Pick and keep a sign convention.",
        "Choose moment centers strategically.",
        "Use unused equilibrium equations as checks."
      ],
      "resources": [
        "mitStatics"
      ]
    },
    "engr-l3c": {
      "title": "Problem Studio · Load Paths, Reactions & Model Checks",
      "week": "Week 3 · Sep 12",
      "duration": "64 min",
      "objectives": [
        "Translate words into a mechanics model",
        "Choose between whole-system and member FBDs",
        "Check reactions using force balance and trends",
        "Explain assumptions in words"
      ],
      "intro": "This studio is deliberately slower than a quiz. The goal is to practice the thinking sequence you should use when a problem does not look exactly like the example from lecture.",
      "segments": [
        {
          "title": "1 · Read for the physical story",
          "paragraphs": [
            "Circle supports, applied loads, dimensions, and words that imply idealizations. Before equations, state what is being isolated and which connections transfer force."
          ],
          "example": "‘A 12-ft simply supported beam carries a 900-lb equipment load 3 ft from the left support.’ Before solving, you know the left reaction should be larger because the load is closer to it."
        },
        {
          "title": "2 · Draw before algebra",
          "paragraphs": [
            "Sketch the beam, label A and B, show the load at the correct location, replace supports with reactions, and label dimensions. A clean diagram prevents more errors than a clever calculator."
          ],
          "pause": "What unknowns would you show for a pin at A and a roller at B? If there are no horizontal loads, what do you expect Ax to become?"
        },
        {
          "title": "3 · Solve reactions",
          "paragraphs": [
            "Take moments about A to find By, then use vertical equilibrium to find Ay. If there are horizontal loads, use ΣFx=0 for Ax."
          ],
          "example": "12-ft beam, 900 lb at x=3 ft: By(12)=900(3), so By=225 lb. Ay=675 lb."
        },
        {
          "title": "4 · Communicate the model",
          "paragraphs": [
            "One sentence can make the work much more professional: ‘The beam is modeled as a rigid 2D member with a pin at A, roller at B, and a concentrated equipment load; member self-weight is neglected for this exercise.’"
          ],
          "note": "Instructor voice: A correct answer with an invisible model is fragile. A reader should be able to see what you assumed."
        }
      ],
      "keyTerms": [
        "model",
        "idealization",
        "reaction",
        "equilibrium",
        "assumption",
        "verification"
      ],
      "check": [
        {
          "q": "For a load closer to support A on a simple beam, which reaction is usually larger?",
          "options": [
            "A",
            "B",
            "Always equal",
            "Cannot ever know"
          ],
          "answer": 0
        },
        {
          "q": "A useful model statement should identify:",
          "options": [
            "Only the final answer",
            "System/support assumptions and omitted effects",
            "Your favorite formula",
            "Nothing about assumptions"
          ],
          "answer": 1
        }
      ],
      "recap": [
        "Tell the physical story.",
        "Draw the FBD before equations.",
        "Predict trends before calculating.",
        "State assumptions next to the result."
      ],
      "resources": []
    },
    "math-l1": {
      "title": "Lecture · Limits: What a Function Is Approaching",
      "week": "Week 1 · Aug 24",
      "duration": "74 min",
      "objectives": [
        "Interpret a limit from a graph or table",
        "Distinguish limit from function value",
        "Recognize one-sided limits",
        "Explain when a two-sided limit does not exist"
      ],
      "intro": "Calculus begins with a strange but powerful idea: we can talk about what a function is approaching near a point even if the function is missing, jumps, or has a different value exactly at that point.",
      "segments": [
        {
          "title": "1 · Near is not at",
          "paragraphs": [
            "The statement lim x→a f(x)=L describes the behavior of f(x) for x close to a, not necessarily the value f(a). That distinction lets limits describe holes and removable discontinuities."
          ],
          "example": "If the graph approaches y=3 from both sides of x=2 but has an open circle at (2,3) and a filled dot at (2,7), then the limit is 3 while f(2)=7."
        },
        {
          "title": "2 · One-sided thinking",
          "paragraphs": [
            "The left-hand limit asks what happens as x approaches a through values smaller than a. The right-hand limit approaches through values larger than a. A two-sided limit exists only when both one-sided limits agree."
          ],
          "pause": "If the left side approaches 4 and the right side approaches 9, what should you report for the two-sided limit?"
        },
        {
          "title": "3 · Infinite behavior",
          "paragraphs": [
            "If values grow without bound near a vertical asymptote, we often write an infinite limit to describe the behavior. Infinity is not a real output value; it describes unbounded growth or decrease."
          ]
        },
        {
          "title": "4 · Numerical tables",
          "paragraphs": [
            "Tables can suggest limits but do not prove them. Use values increasingly close to the target from both sides and look for a stable trend. Beware rounding or a poorly chosen scale."
          ],
          "example": "For (x²-4)/(x-2) near x=2, values near 2 approach 4 even though the original expression is undefined at x=2."
        },
        {
          "title": "5 · Why this matters",
          "paragraphs": [
            "Derivatives will use limits to convert average rates over intervals into instantaneous rates at a point. Integration will use limits to turn finite sums into exact accumulated quantities. Limits are the language that makes those transitions precise."
          ]
        }
      ],
      "keyTerms": [
        "limit",
        "one-sided limit",
        "two-sided limit",
        "discontinuity",
        "vertical asymptote"
      ],
      "check": [
        {
          "q": "If f(2)=7 but nearby values approach 3, lim x→2 f(x) is:",
          "options": [
            "7",
            "3",
            "9",
            "Undefined automatically"
          ],
          "answer": 1
        },
        {
          "q": "A two-sided limit exists when:",
          "options": [
            "Only the left side exists",
            "Left and right limits exist and agree",
            "f(a)=0",
            "The graph is a line"
          ],
          "answer": 1
        }
      ],
      "recap": [
        "A limit describes nearby behavior.",
        "Check both sides.",
        "Function value and limit can differ.",
        "Tables suggest; algebra and theorems justify."
      ],
      "resources": []
    },
    "math-l1b": {
      "title": "Workshop · Limit Laws, Algebra & Indeterminate Forms",
      "week": "Week 1 · Aug 27",
      "duration": "66 min",
      "objectives": [
        "Use basic limit laws",
        "Resolve common 0/0 forms algebraically",
        "Recognize when direct substitution works",
        "Check answers numerically"
      ],
      "intro": "Most beginning limits are not solved by exotic tricks. First try direct substitution. If the expression is continuous there, you are done. If you get 0/0, that is a signal to simplify—not an answer.",
      "segments": [
        {
          "title": "1 · Direct substitution first",
          "paragraphs": [
            "Polynomials are continuous everywhere, and rational functions are continuous wherever the denominator is nonzero. For those functions, substitution evaluates the limit directly."
          ],
          "example": "lim x→3 (2x²-1)=17."
        },
        {
          "title": "2 · The 0/0 signal",
          "paragraphs": [
            "An indeterminate form such as 0/0 means competing factors are collapsing together. Factor, rationalize, or simplify the expression to reveal the nearby behavior."
          ],
          "example": "(x²-4)/(x-2)=(x-2)(x+2)/(x-2)=x+2 for x≠2, so the limit is 4."
        },
        {
          "title": "3 · Rationalizing",
          "paragraphs": [
            "Expressions with square roots often simplify by multiplying by a conjugate. The goal is not ritual; it is to remove the factor that causes the 0/0 form."
          ],
          "pause": "What conjugate would you use for √(x+4)-2?"
        },
        {
          "title": "4 · Check the trend",
          "paragraphs": [
            "After algebra, plug in a nearby value such as 1.999 or 2.001 to see whether the result is moving toward your answer. A numerical check does not replace the reasoning, but it catches sign and simplification errors."
          ]
        }
      ],
      "keyTerms": [
        "direct substitution",
        "limit law",
        "indeterminate form",
        "factor",
        "conjugate"
      ],
      "check": [
        {
          "q": "0/0 from direct substitution means:",
          "options": [
            "The limit is always zero",
            "The limit is always undefined",
            "Simplification or more analysis is needed",
            "The function equals infinity"
          ],
          "answer": 2
        },
        {
          "q": "The main purpose of a conjugate in a radical limit is to:",
          "options": [
            "Change the domain randomly",
            "Simplify the expression causing the indeterminate form",
            "Add a new variable",
            "Make the numerator larger"
          ],
          "answer": 1
        }
      ],
      "recap": [
        "Substitute first.",
        "0/0 is a signal, not a conclusion.",
        "Factor or rationalize.",
        "Numerically sanity-check the simplified result."
      ],
      "resources": []
    },
    "math-l2": {
      "title": "Lecture · Continuity, Discontinuities & the Intermediate Value Theorem",
      "week": "Week 2 · Aug 31",
      "duration": "76 min",
      "objectives": [
        "State the three continuity conditions at a point",
        "Classify common discontinuities",
        "Use interval continuity reasoning",
        "Interpret the Intermediate Value Theorem"
      ],
      "intro": "Continuity formalizes the intuitive idea of a graph with no break at a point, but the definition is precise enough to tell us exactly what can fail.",
      "segments": [
        {
          "title": "1 · Three conditions",
          "paragraphs": [
            "A function is continuous at x=a when f(a) exists, lim x→a f(x) exists, and that limit equals f(a). If any one fails, the function is not continuous there."
          ],
          "example": "A removable hole fails because the function value may be missing or different even when the limit exists."
        },
        {
          "title": "2 · Types of discontinuity",
          "paragraphs": [
            "Removable discontinuities often come from a factor that cancels. Jump discontinuities have different left and right limits. Infinite discontinuities involve unbounded behavior near a vertical asymptote."
          ]
        },
        {
          "title": "3 · Continuity on intervals",
          "paragraphs": [
            "Polynomials are continuous everywhere. Rational functions are continuous wherever their denominators are nonzero. Roots and other functions have their own domains. Combining continuous functions preserves continuity where the operations make sense."
          ]
        },
        {
          "title": "4 · Intermediate Value Theorem",
          "paragraphs": [
            "If f is continuous on [a,b], then it takes every value between f(a) and f(b). If f(a) is negative and f(b) is positive, there must be at least one zero in between."
          ],
          "example": "If a continuous temperature model is 18°C at 8 AM and 24°C at noon, it must have equaled 20°C at some time between, even if you did not measure the exact moment."
        },
        {
          "title": "5 · What IVT does not tell you",
          "paragraphs": [
            "The theorem guarantees existence, not uniqueness and not the exact location. A function may cross the target value many times."
          ],
          "mistake": "Do not use IVT without checking continuity on the interval."
        }
      ],
      "keyTerms": [
        "continuity",
        "removable discontinuity",
        "jump discontinuity",
        "infinite discontinuity",
        "Intermediate Value Theorem"
      ],
      "check": [
        {
          "q": "Continuity at x=a requires:",
          "options": [
            "Only f(a) exists",
            "Only the limit exists",
            "f(a) exists, the limit exists, and they are equal",
            "The derivative is zero"
          ],
          "answer": 2
        },
        {
          "q": "The IVT guarantees:",
          "options": [
            "An exact root formula",
            "At least one intermediate output for a continuous function",
            "That all functions are continuous",
            "A unique solution"
          ],
          "answer": 1
        }
      ],
      "recap": [
        "Check all three continuity conditions.",
        "Classify the failure.",
        "Use continuity to reason across intervals.",
        "IVT gives existence, not exact location."
      ],
      "resources": []
    },
    "math-l2b": {
      "title": "Workshop · Piecewise Continuity & Parameter Problems",
      "week": "Week 2 · Sep 3",
      "duration": "61 min",
      "objectives": [
        "Analyze continuity of piecewise functions",
        "Solve for a parameter that makes a function continuous",
        "Use one-sided limits at a boundary"
      ],
      "intro": "Piecewise functions are where the definition of continuity becomes practical. The formulas may each be simple; the work happens at the boundary where the rule changes.",
      "segments": [
        {
          "title": "1 · Only check the seam",
          "paragraphs": [
            "Inside each interval, a polynomial piece is already continuous. Focus on the boundary points where the formula changes or the domain ends."
          ],
          "example": "For f(x)=x+1 when x<2 and kx-1 when x≥2, continuity at 2 depends on matching the left limit 3 to f(2)=2k-1."
        },
        {
          "title": "2 · Solve the match condition",
          "paragraphs": [
            "Set left-hand limit = right-hand limit = function value when appropriate. In the example, 3=2k-1, so k=2."
          ],
          "pause": "If the right piece were kx+4 instead, what k would make the pieces meet at x=2?"
        },
        {
          "title": "3 · Graphical interpretation",
          "paragraphs": [
            "A continuity parameter is literally moving one piece until the open and closed points meet at the same height. Keeping that picture in mind prevents algebra from becoming disconnected from meaning."
          ]
        },
        {
          "title": "4 · Endpoint continuity",
          "paragraphs": [
            "At an endpoint of a domain, continuity is one-sided because the function only exists on one side. Always interpret the definition in the context of the domain."
          ]
        }
      ],
      "keyTerms": [
        "piecewise function",
        "boundary",
        "one-sided continuity",
        "parameter"
      ],
      "check": [
        {
          "q": "For a piecewise function, the main continuity checks are usually at:",
          "options": [
            "Every real number equally",
            "Points where the formula changes",
            "Only x=0",
            "Only maxima"
          ],
          "answer": 1
        },
        {
          "q": "To choose k for continuity at a seam, you generally:",
          "options": [
            "Match the one-sided behaviors and function value",
            "Differentiate first",
            "Set k=0 automatically",
            "Ignore the boundary"
          ],
          "answer": 0
        }
      ],
      "recap": [
        "Focus on the seams.",
        "Match left, right, and value.",
        "Use the graph to interpret the algebra."
      ],
      "resources": []
    },
    "math-l3": {
      "title": "Lecture · The Derivative as an Instantaneous Rate of Change",
      "week": "Week 3 · Sep 7",
      "duration": "92 min",
      "objectives": [
        "Connect secant slopes to tangent slopes",
        "Use the difference quotient",
        "Interpret derivative units",
        "Compute a derivative from the limit definition"
      ],
      "intro": "The derivative is not merely a formula that puts a smaller exponent in front. Conceptually it answers: how fast is this quantity changing right now? We build that idea from average change over a shrinking interval.",
      "segments": [
        {
          "title": "1 · Average rate first",
          "paragraphs": [
            "Between x=a and x=a+h, average rate of change is [f(a+h)-f(a)]/h. Geometrically, that is the slope of the secant line through two points on the graph."
          ],
          "example": "If position changes from 10 m at t=2 s to 22 m at t=5 s, average velocity is (22-10)/(5-2)=4 m/s."
        },
        {
          "title": "2 · Shrink the interval",
          "paragraphs": [
            "To capture the rate at one instant, let h approach zero. The secant line approaches the tangent line when the limit exists. The derivative is the limiting slope."
          ],
          "pause": "Why can we not simply substitute h=0 into the difference quotient before simplifying?"
        },
        {
          "title": "3 · Limit definition",
          "paragraphs": [
            "f'(a)=lim h→0 [f(a+h)-f(a)]/h. For f(x)=x², expand (a+h)², cancel a², factor h, then take the limit to get f'(a)=2a."
          ],
          "example": "At a=3, the derivative of x² is 6. The tangent line at x=3 therefore has slope 6."
        },
        {
          "title": "4 · Units carry meaning",
          "paragraphs": [
            "If f is gallons and x is minutes, f' has units gallons per minute. The unit tells you what the derivative means. A negative derivative means the quantity is decreasing with respect to the chosen independent variable."
          ],
          "example": "Temperature measured in °C as a function of time in hours has derivative units °C/hour."
        },
        {
          "title": "5 · Differentiability and corners",
          "paragraphs": [
            "A derivative can fail to exist at a corner, cusp, vertical tangent, or discontinuity. Continuity is necessary for differentiability at an interior point, but continuity alone does not guarantee a derivative."
          ],
          "mistake": "Do not assume every continuous graph is differentiable; |x| is continuous at 0 but has a corner there."
        }
      ],
      "keyTerms": [
        "secant",
        "tangent",
        "difference quotient",
        "derivative",
        "instantaneous rate",
        "differentiability"
      ],
      "check": [
        {
          "q": "A derivative at a point is best interpreted as:",
          "options": [
            "Average value",
            "Instantaneous rate of change",
            "Area only",
            "Domain restriction"
          ],
          "answer": 1
        },
        {
          "q": "If position is meters and time is seconds, velocity units are:",
          "options": [
            "m²",
            "s/m",
            "m/s",
            "m·s"
          ],
          "answer": 2
        },
        {
          "q": "A continuous function can still fail to be differentiable at:",
          "options": [
            "A smooth point",
            "A corner",
            "Every point",
            "Only x=1"
          ],
          "answer": 1
        }
      ],
      "recap": [
        "Derivative = limiting secant slope.",
        "Keep units attached to interpretation.",
        "Use the limit definition to understand the rules.",
        "Continuity does not guarantee differentiability."
      ],
      "resources": [
        "khanDeriv",
        "mitCalc"
      ]
    },
    "math-l3b": {
      "title": "Lecture · Derivative Rules Without Losing the Meaning",
      "week": "Week 3 · Sep 9",
      "duration": "79 min",
      "objectives": [
        "Apply power, constant, sum, product, and quotient rules",
        "Choose an efficient rule",
        "Check derivative units and signs"
      ],
      "intro": "Rules make differentiation fast, but speed is only helpful if you still know what the result represents. We will derive less and practice more today, while keeping a habit of checking the answer against the shape of the original function.",
      "segments": [
        {
          "title": "1 · Power and linearity",
          "paragraphs": [
            "d/dx x^n = n x^(n-1). Constants differentiate to zero. Derivatives distribute across sums and constant multiples."
          ],
          "example": "d/dx (3x^4-5x+8)=12x^3-5."
        },
        {
          "title": "2 · Product rule",
          "paragraphs": [
            "When both factors depend on x, derivative of fg is f'g+fg'. Differentiating each factor and multiplying the derivatives is wrong."
          ],
          "example": "d/dx[x² sin x]=2x sin x + x² cos x.",
          "mistake": "(fg)' is not f'g'."
        },
        {
          "title": "3 · Quotient rule",
          "paragraphs": [
            "For f/g, derivative is (f'g-fg')/g². If algebraic simplification is easy first, simplify before using the rule."
          ],
          "pause": "Would you use the quotient rule on (x²+3x)/x for x≠0, or simplify first? Why?"
        },
        {
          "title": "4 · Shape check",
          "paragraphs": [
            "If f(x)=x², the graph decreases for x<0 and increases for x>0. f'(x)=2x has the same sign pattern. That qualitative agreement is a useful check."
          ]
        },
        {
          "title": "5 · Units again",
          "paragraphs": [
            "If C(q) is dollars and q is units produced, C'(q) has dollars per unit. In applications the derivative is often more meaningful than the original formula because it describes marginal change."
          ]
        }
      ],
      "keyTerms": [
        "power rule",
        "product rule",
        "quotient rule",
        "marginal change"
      ],
      "check": [
        {
          "q": "The derivative of x^5 is:",
          "options": [
            "5x^4",
            "x^4",
            "5x",
            "x^6"
          ],
          "answer": 0
        },
        {
          "q": "The product rule is:",
          "options": [
            "f'g'",
            "f'g+fg'",
            "f/g²",
            "f+g"
          ],
          "answer": 1
        }
      ],
      "recap": [
        "Know the core rules.",
        "Simplify when it reduces work.",
        "Check the sign against graph behavior.",
        "Interpret derivative units in applications."
      ],
      "resources": []
    },
    "math-l3c": {
      "title": "Problem Session · Tangent Lines, Motion & Marginal Change",
      "week": "Week 3 · Sep 11",
      "duration": "58 min",
      "objectives": [
        "Write a tangent-line equation",
        "Use derivatives for velocity",
        "Interpret positive/negative derivative",
        "Estimate local change with linearization"
      ],
      "intro": "This session turns derivative mechanics into interpretation. Each problem asks you to say what the derivative means before or after you calculate it.",
      "segments": [
        {
          "title": "1 · Tangent line",
          "paragraphs": [
            "At x=a, the tangent line is y=f(a)+f'(a)(x-a). You need a point and a slope."
          ],
          "example": "For f(x)=x² at x=3: point (3,9), slope 6, so y=9+6(x-3)."
        },
        {
          "title": "2 · Motion",
          "paragraphs": [
            "If s(t) is position, v(t)=s'(t). If v is positive, position is increasing; if negative, position is decreasing relative to the chosen coordinate direction."
          ],
          "example": "s(t)=3t²+2t gives v(t)=6t+2. At t=2, v=14 units/time."
        },
        {
          "title": "3 · Local linear approximation",
          "paragraphs": [
            "For a small change Δx, Δf≈f'(a)Δx. This is not exact, but near a smooth point it can be remarkably useful."
          ],
          "example": "If C'(100)=12 dollars/unit, producing one additional unit near q=100 is estimated to increase cost by about $12."
        },
        {
          "title": "4 · Interpret before rounding",
          "paragraphs": [
            "Keep the mathematical result connected to the context. ‘14’ is incomplete; ‘14 meters per second in the positive direction at t=2 seconds’ is a physical statement."
          ]
        }
      ],
      "keyTerms": [
        "tangent line",
        "velocity",
        "linearization",
        "marginal"
      ],
      "check": [
        {
          "q": "A tangent-line equation needs:",
          "options": [
            "A point and derivative slope",
            "Only the y-intercept",
            "Only area",
            "A second derivative always"
          ],
          "answer": 0
        },
        {
          "q": "If s(t) is position, s'(t) represents:",
          "options": [
            "Velocity",
            "Area",
            "Mass",
            "Distance only"
          ],
          "answer": 0
        }
      ],
      "recap": [
        "Point + slope builds a tangent line.",
        "Derivatives describe motion rates.",
        "Linearization estimates small changes.",
        "Always interpret units and sign."
      ],
      "resources": []
    },
    "phys-l1": {
      "title": "Lecture · Kinematics: Describing Motion Before Explaining It",
      "week": "Week 1 · Aug 25",
      "duration": "85 min",
      "objectives": [
        "Distinguish position, displacement, velocity, and acceleration",
        "Read motion graphs",
        "Use constant-acceleration equations appropriately"
      ],
      "intro": "Kinematics describes how motion changes without yet asking what force caused it. The discipline here is to keep position, velocity, and acceleration separate; they are related, but they are not interchangeable.",
      "segments": [
        {
          "title": "1 · Position and displacement",
          "paragraphs": [
            "Position is location relative to a chosen origin. Displacement is final position minus initial position and can be positive, negative, or zero. Distance traveled is a different scalar quantity and is never negative."
          ],
          "example": "Walk 5 m east then 5 m west: distance 10 m, displacement 0."
        },
        {
          "title": "2 · Velocity",
          "paragraphs": [
            "Average velocity is displacement divided by elapsed time. Instantaneous velocity is the derivative of position. Its sign encodes direction in one-dimensional motion."
          ],
          "example": "A negative velocity does not mean ‘slowing down’; it means motion in the negative coordinate direction."
        },
        {
          "title": "3 · Acceleration",
          "paragraphs": [
            "Acceleration measures the rate of change of velocity. An object can have negative acceleration while speeding up if its velocity is also negative."
          ],
          "mistake": "Do not equate negative acceleration with slowing down. Compare the signs of velocity and acceleration."
        },
        {
          "title": "4 · Graph relationships",
          "paragraphs": [
            "Slope of x-t gives velocity. Slope of v-t gives acceleration. Area under v-t gives displacement. These relationships are more powerful than memorizing isolated formulas."
          ],
          "pause": "If a velocity-time graph is a horizontal line at -3 m/s for 4 seconds, what is the displacement?"
        },
        {
          "title": "5 · Constant acceleration equations",
          "paragraphs": [
            "The familiar equations are valid when acceleration is constant over the interval. Before using them, ask whether that model is justified."
          ]
        }
      ],
      "keyTerms": [
        "position",
        "displacement",
        "velocity",
        "acceleration",
        "kinematics"
      ],
      "check": [
        {
          "q": "Negative velocity means:",
          "options": [
            "Object is slowing down",
            "Motion in the negative coordinate direction",
            "Acceleration is zero",
            "Distance is negative"
          ],
          "answer": 1
        },
        {
          "q": "Area under a velocity-time graph gives:",
          "options": [
            "Acceleration",
            "Displacement",
            "Jerk",
            "Mass"
          ],
          "answer": 1
        }
      ],
      "recap": [
        "Choose a coordinate system.",
        "Separate distance from displacement.",
        "Use graph slopes and areas.",
        "Check whether acceleration is actually constant."
      ],
      "resources": []
    },
    "phys-l1b": {
      "title": "Lab Prep · Motion Graphs & Experimental Uncertainty",
      "week": "Week 1 · Aug 27",
      "duration": "54 min",
      "objectives": [
        "Connect measured data to graphs",
        "Estimate slope from data",
        "Describe uncertainty honestly"
      ],
      "intro": "Real measurements are not perfectly smooth. A lab graph should help you see the physical trend without pretending the sensor or timing is exact.",
      "segments": [
        {
          "title": "1 · Data points are measurements",
          "paragraphs": [
            "Each point comes from an instrument, a sampling interval, and a physical setup. Scatter can come from real variation, sensor resolution, timing, or alignment."
          ]
        },
        {
          "title": "2 · Slope from a graph",
          "paragraphs": [
            "Use two well-separated points on a best-fit trend when appropriate rather than two neighboring noisy points. Record units with the slope."
          ],
          "example": "A best-fit position slope of 0.42 m/s means average velocity near 0.42 m/s over that interval."
        },
        {
          "title": "3 · Residual thinking",
          "paragraphs": [
            "A point above or below a best-fit line is not automatically a mistake. Look for systematic patterns: curvature may mean your linear model is wrong."
          ]
        },
        {
          "title": "4 · Uncertainty language",
          "paragraphs": [
            "Say what is limited and how that affects the conclusion. ‘Human reaction time likely dominates the stopwatch uncertainty’ is more informative than ‘there was human error.’"
          ]
        }
      ],
      "keyTerms": [
        "measurement",
        "best fit",
        "uncertainty",
        "residual"
      ],
      "check": [
        {
          "q": "A useful uncertainty statement should:",
          "options": [
            "Say only “human error”",
            "Identify a likely source and its effect",
            "Claim perfect accuracy",
            "Delete inconvenient points automatically"
          ],
          "answer": 1
        }
      ],
      "recap": [
        "Measurements have limits.",
        "Use graph trends thoughtfully.",
        "Describe sources of uncertainty specifically."
      ],
      "resources": []
    },
    "phys-l2": {
      "title": "Lecture · Vectors, Components & Coordinate Choices",
      "week": "Week 2 · Sep 1",
      "duration": "82 min",
      "objectives": [
        "Resolve vectors into components",
        "Reconstruct magnitude and direction",
        "Choose axes that simplify a problem",
        "Add vectors component-wise"
      ],
      "intro": "Vectors carry magnitude and direction. Components let us translate geometry into algebra, but the components depend on the coordinate axes we choose—not on some permanent property of the vector.",
      "segments": [
        {
          "title": "1 · Components",
          "paragraphs": [
            "For a vector of magnitude A at angle θ from +x, Ax=A cosθ and Ay=A sinθ when θ is measured in the standard way. Signs come from the quadrant and the axis choice."
          ],
          "example": "10 N at 30° above +x gives Ax≈8.66 N and Ay=5.00 N."
        },
        {
          "title": "2 · Coordinate systems are choices",
          "paragraphs": [
            "On an incline, rotating axes parallel and perpendicular to the surface can reduce the number of components you need. Physics does not change when axes rotate; only the bookkeeping changes."
          ]
        },
        {
          "title": "3 · Adding vectors",
          "paragraphs": [
            "Add x-components together and y-components together. Then reconstruct the resultant magnitude with the Pythagorean theorem and direction with an inverse tangent that respects the quadrant."
          ]
        },
        {
          "title": "4 · Unit-vector notation",
          "paragraphs": [
            "Writing A=Ax i + Ay j makes the coordinate decomposition explicit and scales well to more complex problems."
          ]
        },
        {
          "title": "5 · Diagram first",
          "paragraphs": [
            "A sketch with axes and angle labels prevents most component mistakes. If you cannot explain which angle is measured from which axis, do not press the calculator yet."
          ]
        }
      ],
      "keyTerms": [
        "vector",
        "component",
        "resultant",
        "unit vector",
        "coordinate system"
      ],
      "check": [
        {
          "q": "For 10 N at 30° above +x, the x-component is about:",
          "options": [
            "5.00 N",
            "8.66 N",
            "10 N",
            "3.00 N"
          ],
          "answer": 1
        },
        {
          "q": "Changing coordinate axes changes:",
          "options": [
            "The physical vector",
            "Only the numerical components used to describe it",
            "The mass",
            "The law of physics"
          ],
          "answer": 1
        }
      ],
      "recap": [
        "Resolve carefully.",
        "Choose axes strategically.",
        "Add components, not magnitudes.",
        "Use a sketch before trig."
      ],
      "resources": []
    },
    "phys-l2b": {
      "title": "Workshop · Relative Motion & Two-Dimensional Kinematics",
      "week": "Week 2 · Sep 3",
      "duration": "63 min",
      "objectives": [
        "Separate horizontal and vertical motion",
        "Use vector components in projectile motion",
        "Interpret relative velocity"
      ],
      "intro": "Two-dimensional motion becomes manageable when you treat perpendicular directions separately and connect them through the shared time variable.",
      "segments": [
        {
          "title": "1 · Independent components",
          "paragraphs": [
            "In ideal projectile motion without air resistance, horizontal acceleration is zero while vertical acceleration is approximately -g. The same clock applies to both directions."
          ]
        },
        {
          "title": "2 · Launch velocity",
          "paragraphs": [
            "Resolve initial velocity into horizontal and vertical components before using kinematics equations."
          ],
          "example": "20 m/s at 30° gives vx≈17.3 m/s and vy=10 m/s."
        },
        {
          "title": "3 · Relative velocity",
          "paragraphs": [
            "Velocity depends on the reference frame. A person walking forward inside a moving train has velocity relative to the train and a different velocity relative to the ground."
          ]
        },
        {
          "title": "4 · Model limits",
          "paragraphs": [
            "Air drag, spin, and large elevation changes can invalidate the simple model. State the idealization when it matters."
          ]
        }
      ],
      "keyTerms": [
        "projectile",
        "relative velocity",
        "reference frame",
        "gravity"
      ],
      "check": [
        {
          "q": "In ideal projectile motion, horizontal acceleration is:",
          "options": [
            "g",
            "0",
            "Depends on mass",
            "Always negative g"
          ],
          "answer": 1
        }
      ],
      "recap": [
        "Separate x and y.",
        "Use the same time for both components.",
        "State the reference frame."
      ],
      "resources": []
    },
    "phys-l3": {
      "title": "Lecture · Newton’s Laws & Free-Body Diagrams",
      "week": "Week 3 · Sep 8",
      "duration": "101 min",
      "objectives": [
        "Apply Newton’s three laws",
        "Identify forces without inventing extra ones",
        "Construct a free-body diagram",
        "Relate net force to acceleration"
      ],
      "intro": "Newton’s laws connect the motion description from kinematics to interactions that cause changes in motion. The hardest part is usually not algebra; it is deciding which forces actually act on the chosen object.",
      "segments": [
        {
          "title": "1 · First law and inertia",
          "paragraphs": [
            "If net external force is zero, velocity remains constant. Rest is only one possible constant velocity. The first law is also a reminder that motion itself does not require a continuing net force."
          ],
          "mistake": "A moving object does not need a forward force just to keep moving at constant velocity in an idealized frictionless model."
        },
        {
          "title": "2 · Second law",
          "paragraphs": [
            "ΣF = ma is a vector equation. Write it component by component. The net force and acceleration point in the same direction."
          ],
          "example": "A 4 kg object with 12 N net force has acceleration 3 m/s² in the direction of the net force."
        },
        {
          "title": "3 · Third law",
          "paragraphs": [
            "If object A pushes on B, B pushes on A with equal magnitude and opposite direction. The pair acts on two different objects, so the forces do not cancel on one object’s free-body diagram."
          ],
          "example": "The book pushes down on the table; the table pushes up on the book. Only the upward table-on-book force belongs on the book’s FBD."
        },
        {
          "title": "4 · Force inventory",
          "paragraphs": [
            "Common forces include weight, normal force, tension, friction, spring force, and applied contact forces. Do not add ‘motion force’ or ‘centripetal force’ as extra mysterious forces. Centripetal describes the inward net force requirement for circular motion; identify the actual interactions providing it."
          ]
        },
        {
          "title": "5 · FBD workflow",
          "paragraphs": [
            "Choose object → draw simple dot/box → identify contacts and long-range forces → draw arrows away from object → label forces by interaction → choose axes → write component equations."
          ],
          "pause": "Book resting on a table: what two forces act on the book? Are they a Newton’s third-law pair?"
        },
        {
          "title": "6 · Normal force is not always mg",
          "paragraphs": [
            "The normal force responds to the contact constraint. On an incline or accelerating elevator it may differ from mg. Solve from the force equation instead of memorizing N=mg."
          ]
        }
      ],
      "keyTerms": [
        "inertia",
        "net force",
        "normal force",
        "weight",
        "tension",
        "friction",
        "action-reaction pair"
      ],
      "check": [
        {
          "q": "A 4 kg object under 12 N net force accelerates at:",
          "options": [
            "48 m/s²",
            "3 m/s²",
            "0.33 m/s²",
            "12 m/s²"
          ],
          "answer": 1
        },
        {
          "q": "Third-law force pairs act on:",
          "options": [
            "The same object",
            "Two different interacting objects",
            "Only moving objects",
            "Only contact surfaces"
          ],
          "answer": 1
        },
        {
          "q": "Normal force is always equal to mg:",
          "options": [
            "True",
            "False"
          ],
          "answer": 1
        }
      ],
      "recap": [
        "Net force changes velocity.",
        "Third-law pairs act on different bodies.",
        "Inventory real interactions.",
        "Solve normal force from the model."
      ],
      "resources": [
        "openstaxFbd",
        "khanFbd"
      ]
    },
    "phys-l3b": {
      "title": "Lecture · Friction, Inclines & Connected Systems",
      "week": "Week 3 · Sep 10",
      "duration": "86 min",
      "objectives": [
        "Distinguish static and kinetic friction",
        "Solve incline force components",
        "Analyze simple connected systems"
      ],
      "intro": "Friction problems become much easier when you stop treating friction as automatically μN and start asking whether the surfaces are sticking or sliding and which way relative motion would occur.",
      "segments": [
        {
          "title": "1 · Static friction adjusts",
          "paragraphs": [
            "Static friction can take any magnitude from zero up to a maximum μsN. If 2 N is enough to prevent slipping, static friction is 2 N even if μsN is 10 N."
          ],
          "mistake": "fs is not automatically μsN; that expression gives the maximum possible static friction."
        },
        {
          "title": "2 · Kinetic friction",
          "paragraphs": [
            "Once sliding occurs in the simple model, kinetic friction magnitude is μkN and points opposite the direction of relative sliding at the interface."
          ]
        },
        {
          "title": "3 · Incline axes",
          "paragraphs": [
            "Choose x along the incline and y perpendicular. Weight components become mg sinθ down the slope and mg cosθ into the surface."
          ],
          "example": "For a block resting on a 30° incline with no other perpendicular forces, N=mg cos30°."
        },
        {
          "title": "4 · Connected bodies",
          "paragraphs": [
            "For two objects linked by an ideal rope, tension is often the same along the rope and the connected objects share a related acceleration. Draw separate FBDs, write one equation for each, then solve the system."
          ],
          "pause": "Why can a whole-system FBD sometimes eliminate tension from the first equation?"
        }
      ],
      "keyTerms": [
        "static friction",
        "kinetic friction",
        "coefficient of friction",
        "incline",
        "tension"
      ],
      "check": [
        {
          "q": "Static friction magnitude is:",
          "options": [
            "Always μsN",
            "Whatever is required up to μsN",
            "Always zero",
            "Always mg"
          ],
          "answer": 1
        },
        {
          "q": "On an incline, the component of weight parallel to the slope is:",
          "options": [
            "mg cosθ",
            "mg sinθ",
            "mg/θ",
            "N"
          ],
          "answer": 1
        }
      ],
      "recap": [
        "Static friction adjusts up to a limit.",
        "Kinetic friction opposes sliding.",
        "Rotate axes on inclines.",
        "Use separate FBDs for connected bodies when needed."
      ],
      "resources": []
    },
    "ewrt-l1": {
      "title": "Lecture · Reading for Claims, Evidence & Moves",
      "week": "Week 1 · Aug 24",
      "duration": "70 min",
      "objectives": [
        "Identify a writer’s central claim",
        "Distinguish evidence from commentary",
        "Annotate rhetorical moves",
        "Write a concise analytical summary"
      ],
      "intro": "College reading is not a hunt for highlighted sentences. The goal is to reconstruct what the writer is trying to make the reader believe and how the writer builds that case.",
      "segments": [
        {
          "title": "1 · Read the argument, not just the topic",
          "paragraphs": [
            "Topic tells you what the text is about. Claim tells you what the author wants you to accept about that topic. ‘Public space’ is a topic; ‘design choices in public space can quietly exclude certain users’ is a claim."
          ]
        },
        {
          "title": "2 · Evidence and analysis",
          "paragraphs": [
            "Evidence may be data, examples, expert testimony, observation, or textual quotation. Analysis explains how the evidence supports the claim and why it matters. Evidence without analysis is a pile; analysis without evidence is assertion."
          ]
        },
        {
          "title": "3 · Annotate moves",
          "paragraphs": [
            "Instead of highlighting everything, label what a paragraph is doing: defining, conceding, giving an example, answering an objection, shifting scope, or drawing a consequence."
          ],
          "pause": "Take a paragraph you read today and write one margin note that begins ‘The author is doing this here to…’"
        },
        {
          "title": "4 · Summary with purpose",
          "paragraphs": [
            "A useful analytical summary names the main claim and the key reasoning path without retelling every detail. It should be accurate enough that the author would recognize their argument."
          ]
        },
        {
          "title": "5 · Your response comes after comprehension",
          "paragraphs": [
            "Before agreeing or disagreeing, demonstrate that you understand the writer’s reasoning. This is both fair and strategically stronger because your response can target the actual claim."
          ]
        }
      ],
      "keyTerms": [
        "claim",
        "evidence",
        "analysis",
        "rhetorical move",
        "summary"
      ],
      "check": [
        {
          "q": "Which best distinguishes evidence from analysis?",
          "options": [
            "Evidence supports; analysis explains how/why it supports",
            "They are identical",
            "Analysis is always a quotation",
            "Evidence is always numerical"
          ],
          "answer": 0
        },
        {
          "q": "A strong annotation often records:",
          "options": [
            "Only vocabulary definitions",
            "What the paragraph is doing in the argument",
            "Every sentence verbatim",
            "Whether you like the author"
          ],
          "answer": 1
        }
      ],
      "recap": [
        "Find the claim.",
        "Name the evidence.",
        "Explain the reasoning link.",
        "Annotate rhetorical moves, not just sentences."
      ],
      "resources": []
    },
    "ewrt-l1b": {
      "title": "Workshop · Annotation That Produces Better Writing",
      "week": "Week 1 · Aug 27",
      "duration": "49 min",
      "objectives": [
        "Use an annotation code",
        "Generate questions while reading",
        "Turn notes into response material"
      ],
      "intro": "Annotation is useful only if it helps you think later. The best system is simple enough that you actually use it.",
      "segments": [
        {
          "title": "1 · A five-mark system",
          "paragraphs": [
            "Try C for claim, E for evidence, ? for question, → for connection, and ! for a surprising or important move. Add a few words explaining why you marked it."
          ]
        },
        {
          "title": "2 · Ask productive questions",
          "paragraphs": [
            "Questions like ‘What would count as evidence against this?’ or ‘Whose perspective is missing?’ generate material for discussion and writing."
          ]
        },
        {
          "title": "3 · Build a quote sandwich in your notes",
          "paragraphs": [
            "Record the quote or detail, then immediately write what you think it shows. That second line is the seed of analysis."
          ]
        },
        {
          "title": "4 · End with a one-minute memo",
          "paragraphs": [
            "After reading, write three sentences: the author argues…, the most important evidence is…, and I am still wondering…. This prevents the text from dissolving into highlights."
          ]
        }
      ],
      "keyTerms": [
        "annotation",
        "connection",
        "question",
        "quote sandwich"
      ],
      "check": [
        {
          "q": "An annotation is most useful when it:",
          "options": [
            "Copies the text",
            "Records what a passage is doing or why it matters",
            "Uses five colors minimum",
            "Avoids questions"
          ],
          "answer": 1
        }
      ],
      "recap": [
        "Keep annotation simple.",
        "Write why a passage matters.",
        "End reading with a short memo."
      ],
      "resources": []
    },
    "ewrt-l2": {
      "title": "Lecture · Claim, Evidence, Warrant & Counterargument",
      "week": "Week 2 · Aug 31",
      "duration": "83 min",
      "objectives": [
        "Write an arguable thesis",
        "Use warrants to connect evidence to claims",
        "Integrate counterarguments fairly",
        "Qualify a claim when evidence is limited"
      ],
      "intro": "A strong argument is not just claim + quote. Readers need the reasoning that connects the evidence to the conclusion. That often-hidden bridge is the warrant.",
      "segments": [
        {
          "title": "1 · Arguable thesis",
          "paragraphs": [
            "A thesis should make a focused claim that a reasonable reader could question. It should be specific enough to guide paragraph choices and flexible enough to develop as the draft improves."
          ],
          "example": "Weak: ‘Public design is important.’ Stronger: ‘Public design should treat accessibility as a core performance criterion because circulation, seating, and wayfinding choices determine who can use a space independently.’"
        },
        {
          "title": "2 · Warrants",
          "paragraphs": [
            "A warrant explains why the evidence counts. Writers often assume the warrant is obvious, but making it visible deepens analysis."
          ],
          "example": "Evidence: a bench blocks the clear path. Warrant: an accessible route must remain continuous; therefore a design that narrows it undermines independent access."
        },
        {
          "title": "3 · Counterargument",
          "paragraphs": [
            "A counterargument should be the strongest reasonable version of an opposing concern, not a weak straw person. Then respond by conceding, distinguishing, rebutting, or reframing."
          ],
          "pause": "What is a reasonable counterargument to prioritizing long-term durability if it raises initial project cost?"
        },
        {
          "title": "4 · Qualification",
          "paragraphs": [
            "Words such as often, in this context, under these conditions, or likely can make a claim more accurate. Qualification is not weakness; it is precision when the evidence does not support an absolute statement."
          ]
        },
        {
          "title": "5 · Paragraph architecture",
          "paragraphs": [
            "A body paragraph should do one job for the thesis. Topic sentence → evidence → analysis/warrant → complication or connection → closing move. The exact shape can vary, but the reader should know why the paragraph exists."
          ]
        }
      ],
      "keyTerms": [
        "thesis",
        "warrant",
        "counterargument",
        "qualification",
        "analysis"
      ],
      "check": [
        {
          "q": "A warrant explains:",
          "options": [
            "How evidence supports a claim",
            "Where the page number goes",
            "How many paragraphs are required",
            "Only the opposing view"
          ],
          "answer": 0
        },
        {
          "q": "A fair counterargument should be:",
          "options": [
            "The weakest possible objection",
            "A reasonable version of the competing concern",
            "Ignored",
            "A personal attack"
          ],
          "answer": 1
        }
      ],
      "recap": [
        "Make the thesis arguable and specific.",
        "Explain the reasoning bridge.",
        "Represent counterarguments fairly.",
        "Qualify when the evidence demands it."
      ],
      "resources": [
        "purdueWriting"
      ]
    },
    "ewrt-l2b": {
      "title": "Workshop · Paragraph Logic & Integrating Sources",
      "week": "Week 2 · Sep 3",
      "duration": "57 min",
      "objectives": [
        "Integrate quotations smoothly",
        "Analyze rather than repeat evidence",
        "Use transitions that show logic"
      ],
      "intro": "Most first drafts do not fail because the writer has no ideas. They fail because the relationship between ideas is invisible to the reader.",
      "segments": [
        {
          "title": "1 · Set up evidence",
          "paragraphs": [
            "Introduce the source or context before dropping a quotation. The reader should know why the evidence is entering the paragraph."
          ]
        },
        {
          "title": "2 · Quote only what you need",
          "paragraphs": [
            "Long quotations can hide your analysis. Select the smallest passage that preserves the point, then spend your space explaining it."
          ]
        },
        {
          "title": "3 · Analysis answers ‘so what?’",
          "paragraphs": [
            "Do not paraphrase the quote again. Name the implication, assumption, consequence, pattern, or conflict that makes the evidence matter to your thesis."
          ]
        },
        {
          "title": "4 · Transitions show relationships",
          "paragraphs": [
            "Use transitions to name logic: however signals contrast, for example signals illustration, therefore signals consequence, similarly signals comparison. The word alone does not create logic, but it helps reveal logic that is actually present."
          ]
        }
      ],
      "keyTerms": [
        "signal phrase",
        "quotation",
        "analysis",
        "transition"
      ],
      "check": [
        {
          "q": "After evidence, analysis should mainly:",
          "options": [
            "Repeat the quotation",
            "Explain why it matters to the claim",
            "Add a random new topic",
            "End immediately"
          ],
          "answer": 1
        }
      ],
      "recap": [
        "Contextualize evidence.",
        "Quote selectively.",
        "Analyze implications.",
        "Use transitions that match the reasoning."
      ],
      "resources": []
    },
    "ewrt-l3": {
      "title": "Lecture · Drafting a Full Argument Without Freezing Up",
      "week": "Week 3 · Sep 7",
      "duration": "86 min",
      "objectives": [
        "Draft from a working structure",
        "Write body paragraphs before polishing the introduction",
        "Use placeholders productively",
        "Separate drafting from editing"
      ],
      "intro": "A first draft is not a performance. It is a working model of your argument. Your job is to create enough structure that you can see where the reasoning is strong and where it needs revision.",
      "segments": [
        {
          "title": "1 · Draft the spine",
          "paragraphs": [
            "Start with a working thesis and a one-sentence purpose for each body paragraph. If two paragraphs have the same job, combine or differentiate them. If a paragraph has no job, it probably does not belong yet."
          ]
        },
        {
          "title": "2 · Write the body while the thinking is hot",
          "paragraphs": [
            "Introductions are easier after you know what the essay actually says. Draft body paragraphs from the evidence and analysis you already have, then return to the opening."
          ]
        },
        {
          "title": "3 · Use placeholders",
          "paragraphs": [
            "Write [find stronger example], [source here], or [explain why this matters] instead of stopping for twenty minutes. Placeholders keep momentum while making missing work visible."
          ]
        },
        {
          "title": "4 · Draft in layers",
          "paragraphs": [
            "First layer: claim and evidence. Second: analysis and transitions. Third: sentence clarity and source integration. Trying to perfect grammar while the argument is still moving wastes effort."
          ]
        },
        {
          "title": "5 · Read for the reader’s questions",
          "paragraphs": [
            "At each paragraph ask: What am I claiming? What evidence supports it? Why should the reader believe the connection? What question will the reader ask next?"
          ],
          "pause": "Open your current draft and label each paragraph with its job in five words or fewer."
        }
      ],
      "keyTerms": [
        "working thesis",
        "paragraph purpose",
        "placeholder",
        "drafting",
        "revision"
      ],
      "check": [
        {
          "q": "A useful first-draft strategy is to:",
          "options": [
            "Perfect every sentence before moving on",
            "Use placeholders and keep the argument moving",
            "Avoid body paragraphs",
            "Write the final title first"
          ],
          "answer": 1
        },
        {
          "q": "Paragraph purpose labels help you identify:",
          "options": [
            "Redundancy and missing reasoning steps",
            "Font choices only",
            "Citation style only",
            "Word count only"
          ],
          "answer": 0
        }
      ],
      "recap": [
        "Draft the argument before polishing it.",
        "Give each paragraph one clear job.",
        "Use placeholders to preserve momentum.",
        "Separate drafting, revision, and editing."
      ],
      "resources": [
        "purdueWriting"
      ]
    },
    "ewrt-l3b": {
      "title": "Workshop · Revision: Structure First, Sentences Second",
      "week": "Week 3 · Sep 10",
      "duration": "72 min",
      "objectives": [
        "Revise thesis and paragraph order",
        "Diagnose thin analysis",
        "Use reverse outlining",
        "Edit sentences after structural revision"
      ],
      "intro": "Revision means seeing the draft again, not merely correcting commas. We start at the largest scale because there is no point polishing a paragraph you later delete.",
      "segments": [
        {
          "title": "1 · Reverse outline",
          "paragraphs": [
            "Write one short sentence beside each paragraph describing what it actually does. Then read only those sentences. Does the argument move logically? Are there duplicates, gaps, or detours?"
          ]
        },
        {
          "title": "2 · Ratio of evidence to analysis",
          "paragraphs": [
            "If a paragraph contains a long quote and one sentence of commentary, the writer’s reasoning is probably underdeveloped. Ask what the evidence shows, why that matters, and how it advances the thesis."
          ]
        },
        {
          "title": "3 · Revision questions",
          "paragraphs": [
            "Can the thesis be more precise? Does each paragraph earn its place? Is the strongest evidence attached to the most important claim? Where might a skeptical reader resist?"
          ]
        },
        {
          "title": "4 · Sentence-level pass",
          "paragraphs": [
            "Only after structure is stable should you focus heavily on concision, repeated words, verb strength, punctuation, and proofreading."
          ]
        },
        {
          "title": "5 · Read aloud",
          "paragraphs": [
            "Reading aloud exposes missing words, overloaded sentences, and awkward rhythm because your ear cannot skim as easily as your eyes."
          ]
        }
      ],
      "keyTerms": [
        "reverse outline",
        "structural revision",
        "sentence-level editing",
        "concision"
      ],
      "check": [
        {
          "q": "A reverse outline records:",
          "options": [
            "What each paragraph actually does",
            "Only citations",
            "Only grammar errors",
            "The original assignment prompt"
          ],
          "answer": 0
        },
        {
          "q": "Which should usually happen first?",
          "options": [
            "Structural revision",
            "Comma proofreading"
          ],
          "answer": 0
        }
      ],
      "recap": [
        "Revise structure before polish.",
        "Use a reverse outline.",
        "Expand analysis where evidence dominates.",
        "Read aloud during the final pass."
      ],
      "resources": [
        "purdueWriting"
      ]
    },
    "const-l1": {
      "title": "Lecture · Reading a Construction Drawing Set as a System",
      "week": "Week 1 · Aug 26",
      "duration": "94 min",
      "objectives": [
        "Navigate plans, elevations, sections, and details",
        "Follow drawing references",
        "Distinguish dimensions from scale",
        "Use schedules and notes as coordinated information"
      ],
      "intro": "A drawing set is not a stack of independent pictures. It is a navigation system. The plan tells you where; a section tells you how things stack vertically; a detail tells you how a local condition is assembled; a schedule collects repeated information.",
      "segments": [
        {
          "title": "1 · Start with the sheet map",
          "paragraphs": [
            "Before zooming into details, identify disciplines, sheet numbering, general notes, legends, and abbreviations. Architectural, structural, mechanical, electrical, plumbing, civil, and landscape sheets may use related but different conventions."
          ],
          "note": "Instructor voice: The fastest plan readers are not the people who memorize every symbol. They are the people who know where to look next."
        },
        {
          "title": "2 · Plans answer where",
          "paragraphs": [
            "Floor plans show horizontal relationships: walls, doors, rooms, grids, dimensions, and callouts. They are usually cut at a conventional height, so not every overhead or below-floor element appears the same way."
          ]
        },
        {
          "title": "3 · Elevations and sections answer what it looks like and how it stacks",
          "paragraphs": [
            "Elevations show vertical faces. Sections cut through the building to reveal vertical relationships and assemblies. When a plan feels ambiguous, a section often supplies the missing height or layer information."
          ]
        },
        {
          "title": "4 · Details answer how a condition is built",
          "paragraphs": [
            "Detail bubbles and references connect a location to an enlarged drawing. A callout such as 5/A6.2 typically directs you to Detail 5 on Sheet A6.2."
          ],
          "pause": "You see a wall section callout on A2.1. What information would you expect to gain by following it?"
        },
        {
          "title": "5 · Schedules organize repeated data",
          "paragraphs": [
            "Door, window, finish, and equipment schedules reduce clutter on plans. The plan identifies the item; the schedule gives repeated properties such as size, type, material, hardware set, or finish."
          ]
        },
        {
          "title": "6 · Dimensions beat scaling",
          "paragraphs": [
            "If a written dimension and your ruler disagree, use the written dimension and investigate the discrepancy. Printed or digital scale can change. Do not scale drawings when explicit dimensions are available unless the project instructions permit it."
          ]
        }
      ],
      "keyTerms": [
        "plan",
        "elevation",
        "section",
        "detail",
        "schedule",
        "callout",
        "scale"
      ],
      "check": [
        {
          "q": "A callout 5/A6.2 most commonly means:",
          "options": [
            "5 ft on sheet 6.2",
            "Detail 5 on sheet A6.2",
            "Room 5",
            "Revision 5"
          ],
          "answer": 1
        },
        {
          "q": "For repeated door sizes and types, check:",
          "options": [
            "Door schedule",
            "Roof plan only",
            "Site grading plan",
            "Foundation note only"
          ],
          "answer": 0
        }
      ],
      "recap": [
        "Treat the set as linked information.",
        "Plan = where; section = vertical relationship; detail = local assembly.",
        "Follow references.",
        "Prefer written dimensions to scaling."
      ],
      "resources": []
    },
    "const-l1b": {
      "title": "Lecture · Construction Safety: Recognize, Plan, Control",
      "week": "Week 1 · Aug 28",
      "duration": "82 min",
      "objectives": [
        "Use the hazard-recognition hierarchy",
        "Identify common fall, struck-by, caught-in/between, and electrical hazards",
        "Separate hazard identification from control selection"
      ],
      "intro": "Safety learning is not about memorizing scary examples. It is about repeatedly asking: what energy or condition can harm someone, who is exposed, what task creates the exposure, and what control changes the situation before work begins? This demo is educational and does not replace site-specific training or competent-person requirements.",
      "segments": [
        {
          "title": "1 · Hazard recognition",
          "paragraphs": [
            "Walk the task in sequence. What moves? What can fall? What is energized? Where can someone be pinned, struck, buried, or fall? Which conditions change as the work progresses?"
          ]
        },
        {
          "title": "2 · Hierarchy of controls",
          "paragraphs": [
            "When possible, eliminate the hazard. If elimination is not practical, consider substitution, engineering controls, administrative controls, and PPE. PPE matters, but it is the last layer, not the entire plan."
          ],
          "example": "A guardrail is an engineering control; a warning sign is administrative; a harness is PPE."
        },
        {
          "title": "3 · Falls",
          "paragraphs": [
            "Edges, holes, roofs, ladders, and scaffolds require attention to the actual work method and applicable requirements. Do not infer a universal rule from a single example—use current OSHA and project-specific guidance."
          ]
        },
        {
          "title": "4 · Struck-by and equipment movement",
          "paragraphs": [
            "Delivery zones, reversing vehicles, swinging loads, and material handling create dynamic hazards. Good planning separates people and equipment paths and uses communication appropriate to the operation."
          ]
        },
        {
          "title": "5 · Stop and clarify",
          "paragraphs": [
            "If the work condition does not match the plan, stop and get clarification rather than improvising around a hazard. Schedule pressure does not make an uncontrolled condition safe."
          ]
        }
      ],
      "keyTerms": [
        "hazard",
        "exposure",
        "hierarchy of controls",
        "engineering control",
        "PPE",
        "struck-by"
      ],
      "check": [
        {
          "q": "Which is generally higher in the hierarchy than PPE?",
          "options": [
            "Engineering control",
            "Nothing",
            "A reminder email only",
            "A verbal hope"
          ],
          "answer": 0
        },
        {
          "q": "Safety planning should consider:",
          "options": [
            "Only the final condition",
            "The changing sequence of the task",
            "Only PPE color",
            "Only production rate"
          ],
          "answer": 1
        }
      ],
      "recap": [
        "Recognize hazards in the task sequence.",
        "Prefer higher-level controls when feasible.",
        "Separate people/equipment paths.",
        "Use current site-specific requirements."
      ],
      "resources": [
        "oshaFalls",
        "oshaVideos"
      ]
    },
    "const-l2": {
      "title": "Lecture · Concrete: From Ingredients to a Durable Placement",
      "week": "Week 2 · Sep 2",
      "duration": "98 min",
      "objectives": [
        "Explain what cement paste, aggregate, and water do",
        "Relate water-cement ratio to performance conceptually",
        "Describe reinforcement purpose",
        "Recognize placement and curing as part of quality"
      ],
      "intro": "Concrete looks simple after it hardens, but good performance depends on material proportioning, placement, consolidation, finishing, curing, reinforcement, and the environment. The crew cannot ‘fix’ every problem at the end with a trowel.",
      "segments": [
        {
          "title": "1 · What concrete is",
          "paragraphs": [
            "Concrete combines cementitious binder, water, fine aggregate, coarse aggregate, and often admixtures. Hydration is the chemical process that develops the cement paste structure; concrete does not simply ‘dry’ into strength."
          ]
        },
        {
          "title": "2 · Water matters",
          "paragraphs": [
            "More water can improve workability in the moment but excessive water relative to cementitious material can increase porosity and reduce strength/durability. Field water additions should follow the approved mix and project procedures, not convenience alone."
          ]
        },
        {
          "title": "3 · Reinforcement",
          "paragraphs": [
            "Concrete is strong in compression but comparatively weak in tension. Steel reinforcement is positioned to carry tensile demand, control cracking, and provide continuity according to the design."
          ],
          "example": "Rebar location matters. Steel lying on the ground instead of supported at the intended cover is not ‘close enough’ just because the right bar size was delivered."
        },
        {
          "title": "4 · Placement and consolidation",
          "paragraphs": [
            "Segregation, poor consolidation, cold joints, and displaced reinforcement can damage performance. Placement planning includes access, rate, lift sequence, vibration, form pressure, and finishing timing."
          ]
        },
        {
          "title": "5 · Curing",
          "paragraphs": [
            "Curing protects moisture and temperature conditions so hydration can continue. Surface appearance at the end of placement is not the end of the concrete process."
          ]
        },
        {
          "title": "6 · Quantity connection",
          "paragraphs": [
            "Estimating volume is simple geometry; ordering is a construction decision. Convert thickness consistently, compute cubic feet, divide by 27 for cubic yards, then apply an exercise waste/contingency factor appropriate to the scenario—not a universal percentage."
          ]
        }
      ],
      "keyTerms": [
        "cement",
        "aggregate",
        "hydration",
        "water-cement ratio",
        "reinforcement",
        "consolidation",
        "curing"
      ],
      "check": [
        {
          "q": "Concrete strength develops primarily through:",
          "options": [
            "Hydration",
            "Paint drying",
            "Evaporation only",
            "Rebar rust"
          ],
          "answer": 0
        },
        {
          "q": "Why is reinforcement position important?",
          "options": [
            "Steel must be where the structural design expects it",
            "It only changes color",
            "It reduces concrete volume to zero",
            "Position never matters"
          ],
          "answer": 0
        }
      ],
      "recap": [
        "Concrete performance depends on more than mix ingredients.",
        "Water, reinforcement placement, consolidation, and curing matter.",
        "Convert thickness before volume."
      ],
      "resources": [
        "practicalConcrete",
        "doeFoundation"
      ]
    },
    "const-l2b": {
      "title": "Lecture · Quantity Takeoff & Estimating: Measure Before You Price",
      "week": "Week 2 · Sep 4",
      "duration": "89 min",
      "objectives": [
        "Select the correct takeoff unit",
        "Build a traceable quantity worksheet",
        "Separate quantity from unit cost",
        "Record assumptions and exclusions"
      ],
      "intro": "Estimating becomes much more reliable when you keep three layers separate: scope, quantity, and cost. If they are mixed together, a change in one assumption can ripple invisibly through the whole estimate.",
      "segments": [
        {
          "title": "1 · Define scope first",
          "paragraphs": [
            "What exactly are you measuring? Include/exclude boundaries should be written before takeoff. ‘Paint walls’ is incomplete until you decide whether doors, windows, columns, ceilings, and base are included."
          ]
        },
        {
          "title": "2 · Use the right unit",
          "paragraphs": [
            "Area uses square units, volume uses cubic units, linear trim uses linear feet, and count items use each. Labor and cost databases often depend on the unit, so a unit mistake can distort pricing even when the arithmetic is correct."
          ]
        },
        {
          "title": "3 · Traceability",
          "paragraphs": [
            "A good takeoff line records drawing reference, description, dimensions/count, calculation, quantity, unit, and note. Someone else should be able to follow it back to the drawing."
          ]
        },
        {
          "title": "4 · Waste and allowances",
          "paragraphs": [
            "Waste factors are scenario-specific assumptions, not magic constants. Explain the cause: cuts, breakage, laps, over-excavation, ordering increments, or uncertainty. Avoid padding quantities with unexplained percentages."
          ]
        },
        {
          "title": "5 · Unit cost comes later",
          "paragraphs": [
            "Once quantity is stable, extend quantity × unit cost and add labor/equipment/subcontract factors as appropriate to the exercise. Keep cost-source date and assumptions visible because prices change."
          ]
        },
        {
          "title": "6 · Estimate ranges",
          "paragraphs": [
            "Early estimates often deserve a range. A single exact-looking number can imply more certainty than the drawings support."
          ],
          "example": "If finish scope is still schematic, $18,450–$22,000 with stated assumptions may be more honest than $19,837.42."
        }
      ],
      "keyTerms": [
        "takeoff",
        "scope",
        "unit cost",
        "extension",
        "allowance",
        "waste factor",
        "estimate"
      ],
      "check": [
        {
          "q": "A takeoff should ideally be traceable back to:",
          "options": [
            "A drawing/reference and calculation",
            "Only memory",
            "A rounded total only",
            "The final invoice only"
          ],
          "answer": 0
        },
        {
          "q": "Waste factors should be:",
          "options": [
            "Universal and unexplained",
            "Connected to a reason and scenario",
            "Always 10%",
            "Never used"
          ],
          "answer": 1
        }
      ],
      "recap": [
        "Define scope.",
        "Measure in the correct unit.",
        "Keep quantity separate from cost.",
        "Record assumptions and ranges."
      ],
      "resources": [
        "autodeskEstimate"
      ]
    },
    "const-l3": {
      "title": "Lecture · Wood Framing: Members, Openings & Load Transfer",
      "week": "Week 3 · Sep 9",
      "duration": "104 min",
      "objectives": [
        "Identify common framing members",
        "Trace gravity loads through a wood-framed wall",
        "Explain the purpose of headers and bearing",
        "Recognize why openings change load paths"
      ],
      "intro": "Framing vocabulary matters because each member has a job in the load path. Today we are not designing member sizes; we are learning how the pieces work together and why an opening is more than an empty rectangle.",
      "segments": [
        {
          "title": "1 · Studs, plates, joists, rafters",
          "paragraphs": [
            "Studs transfer wall loads vertically. Top and bottom plates connect and distribute. Joists span floors/ceilings. Rafters or trusses support roof systems. Blocking, rim boards, and sheathing can support geometry, load transfer, and stability depending on the assembly."
          ]
        },
        {
          "title": "2 · Bearing and load transfer",
          "paragraphs": [
            "Gravity loads move through contact and connections. A joist bearing on a wall transfers reaction into the wall; studs carry it toward the floor/foundation. Stack alignment can simplify the path, while offsets may require beams or other transfer elements."
          ]
        },
        {
          "title": "3 · Openings interrupt the path",
          "paragraphs": [
            "A door or window removes studs that would otherwise carry load. A header spans over the opening and transfers load toward supporting studs at the sides. The exact configuration depends on the design and local requirements."
          ],
          "example": "Think of the header as a short beam redirecting load around the opening rather than allowing load to disappear."
        },
        {
          "title": "4 · Sheathing and lateral behavior",
          "paragraphs": [
            "Wall sheathing can do more than close the wall; in engineered systems it can participate in lateral resistance. Openings, nailing, hold-downs, and boundary conditions matter. Do not infer structural capacity from appearance alone."
          ]
        },
        {
          "title": "5 · Coordination with MEP",
          "paragraphs": [
            "Drilling, notching, and cutting framing can affect capacity. Mechanical, electrical, and plumbing routes should respect approved limitations and engineered details. When the field condition conflicts, ask rather than improvise."
          ]
        },
        {
          "title": "6 · Field-reading habit",
          "paragraphs": [
            "On a framing plan or detail, ask: what spans, what supports it, where are reactions going, and what connection completes the path?"
          ]
        }
      ],
      "keyTerms": [
        "stud",
        "plate",
        "joist",
        "rafter",
        "header",
        "bearing",
        "sheathing",
        "load path"
      ],
      "check": [
        {
          "q": "A header over an opening primarily helps:",
          "options": [
            "Redirect load around the opening",
            "Make paint dry faster",
            "Replace all studs",
            "Eliminate reactions"
          ],
          "answer": 0
        },
        {
          "q": "Cutting framing for MEP should be based on:",
          "options": [
            "Whatever fits fastest",
            "Approved limitations/details and coordination",
            "A guess",
            "Paint color"
          ],
          "answer": 1
        }
      ],
      "recap": [
        "Name the member and its job.",
        "Follow the load path through openings.",
        "Treat connections and bearing as part of the system.",
        "Coordinate penetrations instead of improvising."
      ],
      "resources": [
        "doeFraming",
        "jeffTruss"
      ]
    },
    "const-l3b": {
      "title": "Lecture · Building Enclosure: Keep Water, Air & Heat Under Control",
      "week": "Week 3 · Sep 11",
      "duration": "102 min",
      "objectives": [
        "Distinguish bulk-water, air, vapor, and thermal control layers",
        "Trace drainage paths",
        "Explain why continuity at transitions matters",
        "Review window and roof intersections"
      ],
      "intro": "A building enclosure succeeds when control layers remain continuous through corners, openings, roofs, foundations, and penetrations. Many failures occur not in the middle of a field of wall, but at transitions where one trade hands the assembly to another.",
      "segments": [
        {
          "title": "1 · Four control questions",
          "paragraphs": [
            "Where does rain go? Where does air leak? How does heat flow? Where can moisture accumulate? These are different transport mechanisms, so one material rarely solves everything by itself."
          ]
        },
        {
          "title": "2 · Drainage and flashing",
          "paragraphs": [
            "Bulk water should be directed outward using slopes, laps, flashings, and drainage planes. Think ‘shingle fashion’: upper layers generally shed over lower layers so gravity helps rather than fights the detail."
          ]
        },
        {
          "title": "3 · Air control",
          "paragraphs": [
            "Air leakage can transport heat and moisture. An air barrier is only as effective as its continuity at seams, penetrations, transitions, and interfaces."
          ]
        },
        {
          "title": "4 · Thermal control",
          "paragraphs": [
            "Insulation reduces heat flow, but thermal bridges through framing or metal connections can bypass insulation. Continuous insulation is one strategy used in many assemblies to reduce bridging."
          ]
        },
        {
          "title": "5 · Window opening",
          "paragraphs": [
            "A window opening concentrates coordination: rough opening, structural fastening, sill drainage, flashing, air seal, insulation, exterior finish, and interior finish all meet. Sequence matters."
          ],
          "pause": "Sketch the path you want rainwater to take if it reaches the rough opening at the top of a window."
        },
        {
          "title": "6 · Roof/wall transition",
          "paragraphs": [
            "Roof edges and penetrations combine structure, roofing, flashing, drainage, and equipment. A detail must be buildable in sequence and maintainable later, not just look continuous in a drawing."
          ]
        }
      ],
      "keyTerms": [
        "drainage plane",
        "flashing",
        "air barrier",
        "thermal bridge",
        "insulation",
        "continuity"
      ],
      "check": [
        {
          "q": "A flashing detail should generally:",
          "options": [
            "Direct water outward",
            "Trap water inward",
            "Depend only on caulk",
            "Ignore gravity"
          ],
          "answer": 0
        },
        {
          "q": "Air-barrier performance depends heavily on:",
          "options": [
            "Continuity at seams and penetrations",
            "Paint color",
            "Floor finish",
            "Furniture layout"
          ],
          "answer": 0
        }
      ],
      "recap": [
        "Separate water, air, vapor, and heat questions.",
        "Maintain control-layer continuity.",
        "Transitions and openings deserve extra attention."
      ],
      "resources": [
        "doeInsulation",
        "doeRoofing",
        "doeWaterRoof"
      ]
    },
    "const-l3c": {
      "title": "Field Seminar · RFIs, Coordination & Constructability",
      "week": "Week 3 · Sep 12",
      "duration": "65 min",
      "objectives": [
        "Write a focused RFI",
        "Recognize drawing conflicts without guessing",
        "Describe constructability and sequencing concerns"
      ],
      "intro": "Construction documents are coordinated information, but real projects still contain missing dimensions, conflicting references, and field conditions nobody expected. The professional skill is to surface the problem clearly without inventing an undocumented answer.",
      "segments": [
        {
          "title": "1 · What makes a useful RFI",
          "paragraphs": [
            "Identify the location, cite the conflicting or missing references, state the question, and explain schedule/cost impact when relevant. Attach a marked-up image if it saves the reviewer time."
          ]
        },
        {
          "title": "2 · Do not design by accusation",
          "paragraphs": [
            "Write ‘A2.1 shows 4'-0 while 5/A6.2 shows 3'-8; please confirm required rough opening’ rather than ‘the architect drew this wrong.’ The first documents a conflict; the second assumes a cause."
          ]
        },
        {
          "title": "3 · Constructability",
          "paragraphs": [
            "A detail can be technically possible but awkward to build. Ask whether crews can access fasteners, maintain laps, place reinforcement, sequence waterproofing, or install equipment without undoing completed work."
          ]
        },
        {
          "title": "4 · Coordination",
          "paragraphs": [
            "Mechanical, electrical, plumbing, structure, and architecture occupy the same physical space. Sections and coordinated models help reveal clashes that are invisible when each discipline is read alone."
          ]
        }
      ],
      "keyTerms": [
        "RFI",
        "constructability",
        "coordination",
        "markup",
        "clash"
      ],
      "check": [
        {
          "q": "A good RFI should:",
          "options": [
            "Guess the answer",
            "Cite the conflict and ask a focused question",
            "Blame a trade",
            "Hide schedule impact"
          ],
          "answer": 1
        }
      ],
      "recap": [
        "Document the conflict.",
        "Ask one focused question.",
        "Consider build sequence and access.",
        "Coordinate systems before the field forces a decision."
      ],
      "resources": []
    },
    "musi-l1": {
      "title": "Lecture 1 · The Musical Grid: Pitch, Staff & Rhythm",
      "week": "Week 1 · Aug 25",
      "duration": "92 min",
      "objectives": [
        "Read basic treble/bass staff positions",
        "Explain beat versus rhythm",
        "Count common note values in 4/4",
        "Connect notation to guitar and keyboard"
      ],
      "intro": "Music theory is easiest when you hear and play every symbol instead of treating notation like a worksheet. This course keeps three views connected: what you see on the page, what you hear, and where you play it on an instrument.",
      "segments": [
        {
          "title": "1 · Pitch names repeat",
          "paragraphs": [
            "Western staff notation uses the letter names A through G in a repeating cycle. Higher or lower versions of the same letter are separated by octaves. On a keyboard the pattern is visually obvious; on guitar the same pitch class appears in multiple positions."
          ]
        },
        {
          "title": "2 · Staff and clef",
          "paragraphs": [
            "The staff gives vertical pitch position. Treble and bass clefs anchor note names to different registers. Ledger lines extend the staff when pitches go above or below the five lines."
          ],
          "example": "Middle C sits one ledger line below treble staff and one ledger line above bass staff."
        },
        {
          "title": "3 · Beat is the pulse; rhythm is the pattern",
          "paragraphs": [
            "The beat is the steady underlying pulse you could tap your foot to. Rhythm describes when notes begin and how long they last relative to that pulse. You can change the rhythm without changing the tempo."
          ]
        },
        {
          "title": "4 · 4/4 as a counting grid",
          "paragraphs": [
            "In 4/4, the quarter note commonly receives one beat and there are four quarter-note beats per measure. Half notes span two beats, whole notes four, eighth notes half a beat."
          ],
          "pause": "Clap: quarter, quarter, two eighths, quarter. Count it aloud as ‘1 2 3-and 4.’"
        },
        {
          "title": "5 · Guitar application",
          "paragraphs": [
            "On guitar, one fret equals one semitone. The open strings in standard tuning are E A D G B E. Knowing that layout lets theory become practical: a major third is four frets of pitch distance, a perfect fifth is seven semitones—even when you choose a different string to play the second note."
          ]
        },
        {
          "title": "6 · Keyboard application",
          "paragraphs": [
            "A keyboard makes half steps visible: adjacent keys, black or white, are one semitone apart. Use the keyboard to verify interval distances even if guitar is your main instrument."
          ]
        }
      ],
      "keyTerms": [
        "staff",
        "clef",
        "ledger line",
        "beat",
        "rhythm",
        "measure",
        "time signature",
        "semitone",
        "octave"
      ],
      "check": [
        {
          "q": "In 4/4, a quarter note normally receives:",
          "options": [
            "1 beat",
            "2 beats",
            "4 beats",
            "1/4 of a measure always regardless of meter"
          ],
          "answer": 0
        },
        {
          "q": "On a standard guitar, moving one fret changes pitch by:",
          "options": [
            "One whole step",
            "One semitone",
            "One octave",
            "A perfect fifth"
          ],
          "answer": 1
        },
        {
          "q": "Beat and rhythm are:",
          "options": [
            "Exactly the same thing",
            "Related but different: pulse vs pattern",
            "Only for drums",
            "Only written concepts"
          ],
          "answer": 1
        }
      ],
      "recap": [
        "Connect page, ear, and instrument.",
        "Pitch names repeat A–G.",
        "Beat is the pulse; rhythm is the event pattern.",
        "One guitar fret = one semitone."
      ],
      "resources": [
        "musicTheoryLessons"
      ]
    },
    "musi-l1b": {
      "title": "Lab Lecture · Subdivision, Meter & Staying in Time",
      "week": "Week 1 · Aug 27",
      "duration": "67 min",
      "objectives": [
        "Count eighth and sixteenth subdivisions",
        "Distinguish simple and compound meter",
        "Use a metronome productively"
      ],
      "intro": "Good rhythm is not just ‘having feel.’ Feel becomes more reliable when you can locate notes inside a subdivision grid and then relax around that grid without losing it.",
      "segments": [
        {
          "title": "1 · Subdivision",
          "paragraphs": [
            "Quarter-note beats in simple meter divide naturally into two eighth notes: ‘1-and 2-and.’ Sixteenth notes divide the beat into four: ‘1-e-and-a.’ Count before you play."
          ],
          "example": "A syncopated note on the ‘and’ of 2 is still located inside the beat grid even though it does not land on the numbered beat."
        },
        {
          "title": "2 · Simple versus compound",
          "paragraphs": [
            "Simple beats divide into two; compound beats divide into three. 6/8 often feels as two larger beats, each containing three eighth-note subdivisions."
          ]
        },
        {
          "title": "3 · Metronome practice",
          "paragraphs": [
            "Start slow enough to play cleanly. Then make the click less supportive: hear clicks on beats 2 and 4, or once per measure. The goal is to strengthen your internal pulse, not chase the click."
          ],
          "pause": "Set the built-in metronome to 60 BPM and clap eighth notes for eight bars. Then clap only offbeats (‘and’)."
        },
        {
          "title": "4 · Guitar strumming",
          "paragraphs": [
            "Many strumming patterns are simply eighth-note or sixteenth-note grids with selected attacks. Keep the hand moving through the subdivision even when you intentionally miss the strings."
          ]
        },
        {
          "title": "5 · Common problem: rushing difficult parts",
          "paragraphs": [
            "Players often accelerate during familiar notes and hesitate during difficult chord changes. Practice the transition itself on the grid rather than repeatedly restarting the whole song."
          ]
        }
      ],
      "keyTerms": [
        "subdivision",
        "eighth note",
        "sixteenth note",
        "simple meter",
        "compound meter",
        "syncopation",
        "tempo"
      ],
      "check": [
        {
          "q": "Sixteenth-note counting in simple meter is commonly:",
          "options": [
            "1-and",
            "1-e-and-a",
            "1-la-li",
            "Only numbers"
          ],
          "answer": 1
        },
        {
          "q": "6/8 is commonly felt as:",
          "options": [
            "Six unrelated beats only",
            "Two compound beats of three eighths",
            "Four quarter-note beats",
            "No meter"
          ],
          "answer": 1
        }
      ],
      "recap": [
        "Subdivision makes rhythm locatable.",
        "Simple divides by two; compound divides by three.",
        "Use the metronome to develop internal time."
      ],
      "resources": []
    },
    "musi-l2": {
      "title": "Lecture 2 · Major Scales, Scale Degrees & Key Signatures",
      "week": "Week 2 · Sep 1",
      "duration": "101 min",
      "objectives": [
        "Construct a major scale from whole/half steps",
        "Name scale degrees",
        "Understand key signatures",
        "Map major scales to guitar and keyboard"
      ],
      "intro": "A scale is more than a finger pattern. It is an ordered collection of pitch relationships. Once you understand the interval pattern, you can build a major scale from any tonic and use the degree numbers to talk about melody and harmony in any key.",
      "segments": [
        {
          "title": "1 · Major-scale formula",
          "paragraphs": [
            "The major scale follows W-W-H-W-W-W-H. Starting on C gives C D E F G A B C. Starting on G gives G A B C D E F# G because the seventh step must preserve the pattern."
          ],
          "example": "D major: D E F# G A B C# D."
        },
        {
          "title": "2 · Scale degrees",
          "paragraphs": [
            "Degrees 1–7 let us describe function independent of key. 1 is tonic, 5 dominant, 4 subdominant, 3 mediant, 6 submediant, 2 supertonic, and 7 is the leading tone in major."
          ],
          "note": "For practical playing, think numbers first: 1-3-5 defines a tonic triad regardless of key."
        },
        {
          "title": "3 · Key signatures",
          "paragraphs": [
            "A key signature collects the sharps or flats that apply throughout the piece unless canceled. The order of sharps is F C G D A E B; flats reverse that order B E A D G C F.",
            "You do not need to memorize every key instantly. Learn a few anchor keys, understand the circle-of-fifths pattern, and use repeated practice."
          ]
        },
        {
          "title": "4 · Relative and parallel thinking",
          "paragraphs": [
            "Relative major/minor share a key signature but have different tonics. Parallel major/minor share the same tonic but use different key signatures and scale degrees."
          ]
        },
        {
          "title": "5 · Guitar mapping",
          "paragraphs": [
            "On guitar, do not let box shapes replace note awareness. Say degree numbers while playing a major scale: 1 2 3 4 5 6 7 1. Then start the same interval pattern from another root."
          ]
        },
        {
          "title": "6 · Why worship/pop players care",
          "paragraphs": [
            "Nashville-style number thinking and Roman-numeral analysis both rely on scale degrees. If you know the key and degree function, you can transpose a progression such as 1-5-6-4 without memorizing a new unrelated set of chord names every time."
          ]
        }
      ],
      "keyTerms": [
        "major scale",
        "whole step",
        "half step",
        "scale degree",
        "tonic",
        "dominant",
        "key signature",
        "relative minor"
      ],
      "check": [
        {
          "q": "The major-scale step pattern begins:",
          "options": [
            "W-W-H",
            "H-W-W",
            "W-H-H",
            "H-H-W"
          ],
          "answer": 0
        },
        {
          "q": "Scale degree 5 is called:",
          "options": [
            "Tonic",
            "Dominant",
            "Mediant",
            "Subtonic"
          ],
          "answer": 1
        },
        {
          "q": "G major contains:",
          "options": [
            "F#",
            "Bb",
            "C#",
            "No accidentals"
          ],
          "answer": 0
        }
      ],
      "recap": [
        "Build scales from interval pattern.",
        "Think in degree numbers.",
        "Key signatures encode repeated accidentals.",
        "Use numbers to transpose progressions."
      ],
      "resources": [
        "musicTheoryLessons",
        "musicKeySigs"
      ]
    },
    "musi-l2b": {
      "title": "Lecture · Intervals: The Distance That Builds Everything",
      "week": "Week 2 · Sep 3",
      "duration": "93 min",
      "objectives": [
        "Name generic and specific intervals",
        "Count semitones",
        "Hear basic interval color",
        "Use interval shapes on guitar without losing note spelling"
      ],
      "intro": "Scales, chords, melodies, and voice leading are all built from intervals. If intervals become comfortable, many later topics stop feeling like separate lists to memorize.",
      "segments": [
        {
          "title": "1 · Generic number",
          "paragraphs": [
            "Count letter names inclusively. C to E is some kind of third because C-D-E spans three letter positions. C to Eb is also a third; accidentals affect quality, not the generic number."
          ]
        },
        {
          "title": "2 · Quality and semitones",
          "paragraphs": [
            "Perfect-class intervals are unison, fourth, fifth, octave. Major/minor-class intervals are seconds, thirds, sixths, sevenths. Semitone distance helps identify the quality: major third = 4, perfect fifth = 7, minor seventh = 10."
          ],
          "example": "C to Eb: third by letters, 3 semitones, so minor third."
        },
        {
          "title": "3 · Inversions",
          "paragraphs": [
            "Intervals invert to a sum of 9: 2↔7, 3↔6, 4↔5, 1↔8. Major becomes minor, diminished becomes augmented, perfect stays perfect."
          ],
          "example": "A major third inverts to a minor sixth."
        },
        {
          "title": "4 · Ear connection",
          "paragraphs": [
            "Do not rely only on song mnemonics. Hear the interval in several contexts: ascending, descending, and inside a chord. Train recognition as a relationship, not one melody trick."
          ]
        },
        {
          "title": "5 · Guitar shapes",
          "paragraphs": [
            "A shape is useful but depends on tuning. The major-third interval changes geometric shape across the G-to-B string boundary. Know the semitone/degree relationship so the fretboard pattern makes musical sense."
          ],
          "pause": "Use the interval trainer: compare a major third (4 semitones), perfect fourth (5), perfect fifth (7), and octave (12)."
        },
        {
          "title": "6 · Why spelling matters",
          "paragraphs": [
            "C to D# and C to Eb sound the same in equal temperament but have different theoretical spelling: augmented second versus minor third. Chord and scale context tells you which name communicates function correctly."
          ]
        }
      ],
      "keyTerms": [
        "interval",
        "generic interval",
        "major third",
        "minor third",
        "perfect fifth",
        "inversion",
        "enharmonic"
      ],
      "check": [
        {
          "q": "C to E is:",
          "options": [
            "Major third",
            "Minor third",
            "Perfect fourth",
            "Major second"
          ],
          "answer": 0
        },
        {
          "q": "A perfect fifth spans how many semitones?",
          "options": [
            "5",
            "6",
            "7",
            "8"
          ],
          "answer": 2
        },
        {
          "q": "A major third inverts to a:",
          "options": [
            "Major sixth",
            "Minor sixth",
            "Perfect fifth",
            "Minor third"
          ],
          "answer": 1
        }
      ],
      "recap": [
        "Count letters for interval number.",
        "Use semitones and class for quality.",
        "Learn inversions.",
        "Connect ear, spelling, and fretboard."
      ],
      "resources": [
        "musicIntervals",
        "guitarIntervals"
      ]
    },
    "musi-l3": {
      "title": "Lecture 3 · Triads, Chord Quality & Diatonic Harmony",
      "week": "Week 3 · Sep 8",
      "duration": "112 min",
      "objectives": [
        "Build major, minor, diminished, and augmented triads",
        "Spell triads in thirds",
        "Derive diatonic triads in a major key",
        "Use Roman numerals to describe chord function"
      ],
      "intro": "A chord is not just a grip. A triad is three note names stacked in thirds, and its quality comes from the interval structure above the root. Once you can spell triads, chord progressions become easier to analyze, transpose, and hear.",
      "segments": [
        {
          "title": "1 · Stack thirds by letter name",
          "paragraphs": [
            "Start with root, skip a letter, take the next, skip, take the next. A C triad must use some C-E-G spelling, not C-D#-G, even if D# sounds like Eb in equal temperament. The spelling shows the harmonic structure."
          ]
        },
        {
          "title": "2 · Four triad qualities",
          "paragraphs": [
            "Major = major third + perfect fifth from root (0-4-7 semitones). Minor = minor third + perfect fifth (0-3-7). Diminished = minor third + diminished fifth (0-3-6). Augmented = major third + augmented fifth (0-4-8)."
          ],
          "example": "E minor = E-G-B. B diminished = B-D-F."
        },
        {
          "title": "3 · Diatonic triads in major",
          "paragraphs": [
            "Stack thirds using only notes of a major scale. The quality pattern is I major, ii minor, iii minor, IV major, V major, vi minor, vii° diminished."
          ],
          "example": "In G major: G, Am, Bm, C, D, Em, F#dim."
        },
        {
          "title": "4 · Roman numerals",
          "paragraphs": [
            "Roman numerals describe scale-degree root and chord quality. Uppercase = major, lowercase = minor, ° = diminished. This lets you see function across keys."
          ],
          "example": "C-G-Am-F is I-V-vi-IV in C. G-D-Em-C is the same I-V-vi-IV pattern in G."
        },
        {
          "title": "5 · Functional hearing",
          "paragraphs": [
            "Tonic-function chords feel stable; dominant-function chords create strong pull toward tonic; predominant chords often prepare dominant. At this stage, start by hearing V→I and IV→V→I rather than trying to classify every pop chord perfectly."
          ]
        },
        {
          "title": "6 · Guitar application",
          "paragraphs": [
            "Take familiar open chords and name their scale-degree function in a key. Then move the same progression to another key using the number pattern. This is the practical bridge from theory to worship, pop, and songwriting."
          ]
        },
        {
          "title": "7 · Voice leading teaser",
          "paragraphs": [
            "Chord progressions sound smoother when common tones stay and other voices move short distances. Later we will use inversions to control bass motion and voice leading instead of jumping every chord to root position."
          ]
        }
      ],
      "keyTerms": [
        "triad",
        "root",
        "major triad",
        "minor triad",
        "diminished triad",
        "Roman numeral",
        "diatonic",
        "dominant"
      ],
      "check": [
        {
          "q": "A major triad has semitone pattern from root:",
          "options": [
            "0-4-7",
            "0-3-7",
            "0-3-6",
            "0-5-7"
          ],
          "answer": 0
        },
        {
          "q": "In a major key, the vi chord is normally:",
          "options": [
            "Major",
            "Minor",
            "Diminished",
            "Augmented"
          ],
          "answer": 1
        },
        {
          "q": "I-V-vi-IV in G major is:",
          "options": [
            "G-D-Em-C",
            "G-C-D-Em",
            "G-Em-D-C",
            "D-A-Bm-G only"
          ],
          "answer": 0
        }
      ],
      "recap": [
        "Spell triads in thirds.",
        "Know the four basic qualities.",
        "Major-key diatonic pattern: I ii iii IV V vi vii°.",
        "Use Roman numerals to transpose and hear function."
      ],
      "resources": [
        "musicChords",
        "beatoBasics"
      ]
    },
    "musi-l3b": {
      "title": "Lab Lecture · Ear Training, Chord Function & Applied Guitar",
      "week": "Week 3 · Sep 10",
      "duration": "88 min",
      "objectives": [
        "Practice interval recognition",
        "Hear tonic and dominant function",
        "Map numbers to guitar chords",
        "Use ear training without guessing"
      ],
      "intro": "Ear training is not a talent test. It is repeated comparison. You are building labels for sounds you can already perceive, then making those labels faster and more reliable.",
      "segments": [
        {
          "title": "1 · Establish the tonic",
          "paragraphs": [
            "Before identifying scale degrees or chords, hear the key center. Play or sing the tonic repeatedly, then compare other notes to it. Context changes perception: the same pitch can feel stable in one key and tense in another."
          ]
        },
        {
          "title": "2 · Interval training method",
          "paragraphs": [
            "Use a small set first. Play unison, major third, perfect fourth, perfect fifth, octave. Answer, reveal, then immediately sing/play the correct interval. Do not just note whether you were wrong."
          ]
        },
        {
          "title": "3 · Chord quality",
          "paragraphs": [
            "Compare major and minor triads with the same root. Focus on the third: major has 4 semitones above root; minor has 3. Then add diminished after major/minor is reliable."
          ]
        },
        {
          "title": "4 · Functional progression",
          "paragraphs": [
            "Play I-V-vi-IV in several keys. Sing the scale degrees of the roots. Notice how V feels less settled than I and how returning to I releases tension."
          ]
        },
        {
          "title": "5 · Guitar fretboard drill",
          "paragraphs": [
            "Choose a root on the 6th or 5th string. Find its octave, perfect fifth, major third, and minor third. Say the interval before you play it. This turns geometric shapes into relationships."
          ]
        },
        {
          "title": "6 · Practice journal",
          "paragraphs": [
            "After ten minutes, record what confused you. ‘I mix up perfect fourth and fifth descending’ is a useful target. ‘I am bad at ear training’ is too vague to practice."
          ]
        }
      ],
      "keyTerms": [
        "ear training",
        "tonic",
        "chord function",
        "voice leading",
        "interval recognition"
      ],
      "check": [
        {
          "q": "A productive response after missing an ear-training interval is to:",
          "options": [
            "Skip it and move on",
            "Hear/play the correct answer immediately and compare",
            "Assume you lack talent",
            "Increase difficulty"
          ],
          "answer": 1
        },
        {
          "q": "In major-key functional harmony, V usually has strong tendency toward:",
          "options": [
            "I",
            "Only vi",
            "No chord",
            "The metronome"
          ],
          "answer": 0
        }
      ],
      "recap": [
        "Establish tonic context.",
        "Train a small interval set first.",
        "Compare chord qualities with common root.",
        "Write specific practice problems in a journal."
      ],
      "resources": [
        "musicTheoryExercises",
        "beatoBasics"
      ]
    }
  }
};
