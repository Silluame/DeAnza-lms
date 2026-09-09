const APP_VERSION = 'v6';
const CURRENT_DATE = new Date('2026-09-08T18:38:00-07:00');
const STORAGE_KEY = 'deanza_unofficial_lms_v5';

const RESOURCES = {
  designVideo:{title:'Engineering Design Process: Lesson 1',provider:'YouTube · Learning Lab at UL Lafayette',url:'https://www.youtube.com/watch?v=NLkdApm4vYI',embed:'https://www.youtube.com/embed/NLkdApm4vYI',desc:'A public introduction to the engineering design process.'},
  fbdVideo:{title:'Engineering Mechanics: Statics Theory | Free Body Diagrams',provider:'YouTube · Dr. Clayton Pettit',url:'https://www.youtube.com/watch?v=RV4knEwnlVc',embed:'https://www.youtube.com/embed/RV4knEwnlVc',desc:'Overview of free-body diagrams, sign conventions, and support reactions.'},
  khanFbd:{title:'Forces and free-body diagrams',provider:'Khan Academy',url:'https://www.khanacademy.org/science/ap-college-physics-1/xf557a762645cccc5%3Aforce-and-translational-dynamics/xf557a762645cccc5%3Aforces-and-systems/v/forces-and-free-body-diagrams',desc:'Public lesson on identifying forces and drawing free-body diagrams.'},
  openstaxFbd:{title:'Drawing Free-Body Diagrams',provider:'OpenStax University Physics',url:'https://openstax.org/books/university-physics-volume-1/pages/5-7-drawing-free-body-diagrams',desc:'Open textbook section with free-body-diagram strategy and examples.'},
  mitStatics:{title:'Solid Mechanics',provider:'MIT OpenCourseWare',url:'https://ocw.mit.edu/courses/1-050-solid-mechanics-fall-2004/',desc:'Public engineering mechanics course materials covering equilibrium, forces, beams, stress, and deformation.'},
  khanDeriv:{title:'Understanding the derivative definition',provider:'Khan Academy',url:'https://www.khanacademy.org/math/calculus-1/cs1-derivatives-definition-and-basic-rules/cs1-derivative-definition/v/alternate-form-of-the-derivative',desc:'Public video connecting secant slopes, tangent slopes, and limits.'},
  mitCalc:{title:'Single Variable Calculus',provider:'MIT OpenCourseWare',url:'https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/',desc:'Public calculus lectures, notes, assignments, and exams.'},
  purdueWriting:{title:'The Writing Process',provider:'Purdue OWL',url:'https://owl.purdue.edu/owl/resources/teaching_resources/documents/the-writing-process-20250724.pdf',desc:'Public writing-process guide covering thesis, organization, paragraph development, and revision.'}
};

const BASE_COURSES = [
  {
    id:'engr10', code:'ENGR 10', title:'Introduction to Engineering', instructor:'Prof. Maya Chen',
    room:'Online · Zoom-style class', schedule:'Every Tuesday · 6:00–8:30 PM · Online', units:4, color:'#2f6f55', grade:96,
    modality:'Synchronous Online', week:'Week 3',
    description:'An introductory engineering course covering engineering design, quantitative reasoning, technical communication, statics concepts, teamwork, ethics, and decision-making.',
    gradeGroups:[['Homework',30,95],['Discussions',15,100],['Quizzes',15,100],['Projects',30,94],['Participation',10,100]],
    lectures:{
      'engr-l1':{
        title:'Lecture 1 · Engineering Problems, Criteria & Constraints',week:'Week 1 · Aug 25',duration:'55 min',
        objectives:['Separate a need from a proposed solution','Identify stakeholders, criteria, and constraints','Explain why engineering choices involve trade-offs'],
        sections:[
          ['Start with the need','Engineering begins with a need, not with a favorite solution. A strong problem definition identifies who is affected, what outcome is needed, and what context limits the solution. “Students need a safer way to cross the driveway during peak traffic” keeps more options open than “build a bridge.”'],
          ['Criteria and constraints','Criteria are qualities used to judge alternatives: safety, cost, durability, ease of maintenance, user comfort, environmental impact, or construction time. Constraints are hard limits such as budget, geometry, code, schedule, available materials, or required clearance.'],
          ['Stakeholders','Stakeholders can include users, owners, maintenance staff, nearby residents, regulators, contractors, emergency services, and future users. The same design may look different depending on whose priorities are considered.'],
          ['Trade-offs','A design rarely maximizes every desirable feature at once. Improving one criterion can worsen another. Engineering judgment means documenting those trade-offs, quantifying what can be quantified, and explaining why a choice is reasonable.'],
          ['Worked mini-case','Campus bike parking is overcrowded. One concept adds racks near the entrance; another relocates parking to a larger side plaza. The first minimizes walking distance but may worsen pedestrian conflicts. The second improves circulation but may reduce convenience. The “best” option depends on the criteria and their importance.']
        ],
        keyTerms:['need statement','criterion','constraint','stakeholder','trade-off','iteration'],
        check:[
          {q:'Which is a constraint?',options:['Make the design attractive','Keep total construction cost below $25,000','Reduce maintenance effort','Improve user comfort'],answer:1},
          {q:'Why avoid putting a solution inside the problem statement?',options:['It makes the statement too short','It can eliminate better alternatives before they are explored','It prevents any calculation','It automatically violates ethics'],answer:1}
        ]
      },
      'engr-l2':{
        title:'Lecture 2 · Design Process, Alternatives & Decision Matrices',week:'Week 2 · Sep 1',duration:'63 min',
        objectives:['Use a repeatable design process','Generate alternatives before choosing','Build and interpret a weighted decision matrix'],
        sections:[
          ['A practical cycle','Define → research → establish criteria/constraints → generate alternatives → model/prototype → test → evaluate → communicate → iterate. Real projects often move backward and forward through this sequence.'],
          ['Generate alternatives first','Teams often lock onto the first workable idea. A better process deliberately creates multiple concepts before evaluation so that the final decision compares alternatives rather than just defending the first idea.'],
          ['Weighted decision matrix','Choose criteria, assign weights that total 100%, score each concept on the same scale, multiply score by weight, and compare weighted totals. The matrix is a transparent record of assumptions, not an automatic truth machine.'],
          ['Sensitivity','If a tiny change in one weight flips the winner, the decision is sensitive. That is useful information: the team should investigate that criterion, gather better evidence, or present more than one viable option.'],
          ['Worked example','For a shaded seating area, Concept A is inexpensive but blocks sight lines. Concept B costs more but offers better accessibility and drainage. If safety/accessibility have higher weights than initial cost, Concept B may reasonably score higher overall.']
        ],
        keyTerms:['alternative','weight','score','decision matrix','sensitivity','prototype'],
        check:[
          {q:'What should happen before scoring concepts?',options:['Pick the winner','Define criteria and weights','Delete expensive ideas','Write the final report'],answer:1},
          {q:'A decision matrix is best described as…',options:['A replacement for judgment','A way to document trade-offs and assumptions','A code requirement','A drawing standard'],answer:1}
        ]
      },
      'engr-l3':{
        title:'Lecture 3 · Loads, Load Paths & Free-Body Diagrams',week:'Week 3 · Sep 8',duration:'72 min',
        objectives:['Classify common structural loads','Trace a basic load path to the ground','Construct a simple free-body diagram','Use equilibrium to check a simple support-reaction result'],
        sections:[
          ['Loads','Dead load comes from permanent self-weight and fixed components. Live load varies with occupancy or use. Environmental loads include wind, rain, snow, temperature effects, and earthquakes. Impact or dynamic loads vary rapidly with time.'],
          ['Load paths','A load path is the route force takes through connected components to the supporting ground. Roof decking may transfer load to joists, then beams, then columns or walls, then foundations, then soil. A weak or missing connection interrupts the load path.'],
          ['System boundary','Before drawing a free-body diagram, choose the object or system to isolate. Everything outside the system is removed and replaced by the external forces or reactions it applies to the system.'],
          ['Support reactions','A roller support typically supplies one reaction normal to its surface. A pin support supplies two force components in 2D. A fixed support can supply horizontal force, vertical force, and a resisting moment.'],
          ['Equilibrium','For a body at rest in planar statics, the sum of horizontal forces, vertical forces, and moments is zero: ΣFx = 0, ΣFy = 0, ΣM = 0. These equations let us solve unknown reactions when the model is determinate.'],
          ['Worked beam','A 10-ft simply supported beam carries a 1,000-lb downward point load at midspan. By symmetry the reactions are equal. Vertical equilibrium gives Ay + By − 1000 = 0, so each reaction is 500 lb upward. Taking moments about A confirms By(10) − 1000(5) = 0.']
        ],
        keyTerms:['dead load','live load','load path','system boundary','reaction','free-body diagram','equilibrium','moment'],
        check:[
          {q:'A person standing on a floor is usually modeled as what type of load?',options:['Dead load','Live load','Thermal load','Prestress'],answer:1},
          {q:'A correct free-body diagram includes…',options:['Only internal forces','External forces acting on the isolated system','Every object in the building','Velocity arrows instead of forces'],answer:1},
          {q:'For the symmetric 1,000-lb midspan beam example, each vertical reaction is…',options:['250 lb','500 lb','1,000 lb','2,000 lb'],answer:1}
        ]
      }
    },
    assignments:[
      {
        id:'engr-orientation',title:'Course Orientation Check',due:'Aug 25 at 5:00 PM',points:5,group:'Quizzes',kind:'quiz',completed:true,score:5,submittedAt:'Aug 24 at 8:42 PM',feedback:'Complete. You found the syllabus, modules, and communication expectations.',
        questions:[
          {type:'mc',q:'Where should you look first for weekly course items?',options:['Modules','People','Account','History'],answer:0},
          {type:'mc',q:'The Tuesday meeting time is:',options:['5:00–7:30 PM','6:00–8:30 PM','7:00–9:00 PM','Asynchronous only'],answer:1}
        ],sampleAnswers:['0','1']
      },
      {
        id:'engr-observation',title:'HW 1 · Engineering Observation Log',due:'Aug 28 at 11:59 PM',points:20,group:'Homework',kind:'worksheet',completed:true,score:19,submittedAt:'Aug 28 at 9:14 PM',feedback:'Strong identification of users and constraints. Your measurable criterion was clear; add one more piece of evidence next time.',
        instructions:'Observe one everyday engineered system or object. Use the prompts to move from observation to an engineering problem definition.',
        questions:[
          {type:'text',q:'1. What system or object did you observe?',placeholder:'Example: campus bicycle parking area'},
          {type:'textarea',q:'2. Describe the user need without proposing a solution.',placeholder:'Who needs what outcome, and in what context?'},
          {type:'textarea',q:'3. List two criteria and explain how each could be measured.'},
          {type:'textarea',q:'4. List two constraints.'},
          {type:'textarea',q:'5. Name at least three stakeholders and one possible conflict between their priorities.'}
        ],
        sampleAnswers:['Campus bicycle parking near a busy walkway','Students need a secure place to park bicycles without blocking pedestrian movement during peak class-change periods.','Criterion 1: capacity, measured as number of usable bicycle spaces. Criterion 2: circulation, measured as minimum clear pedestrian width during peak use.','Existing sidewalk width; fixed project budget.','Cyclists, pedestrians, facilities staff, and accessibility users. Adding racks near the entrance may improve cyclist convenience but reduce clear walking space.'],
        rubric:[['Problem definition',5,'Need is clear and solution-neutral'],['Criteria & measurement',5,'Criteria are relevant and measurable'],['Constraints',4,'Realistic hard limits identified'],['Stakeholders',4,'Multiple perspectives and conflict explained'],['Clarity',2,'Organized and concise']]
      },
      {
        id:'engr-designbrief',title:'Mini Project 1 · Campus Shade Design Brief',due:'Sep 4 at 11:59 PM',points:30,group:'Projects',kind:'worksheet',completed:true,score:28,submittedAt:'Sep 4 at 10:06 PM',feedback:'Well-organized brief. Your decision matrix supported the recommendation. The cost estimate should state its uncertainty more explicitly.',
        instructions:'Develop two concepts for adding shade to a fictional campus seating area. Compare them with a weighted decision matrix and recommend one concept.',
        questions:[
          {type:'textarea',q:'1. Write a one-sentence problem statement.'},
          {type:'textarea',q:'2. Define four criteria and weights totaling 100%.'},
          {type:'textarea',q:'3. Describe Concept A.'},
          {type:'textarea',q:'4. Describe Concept B.'},
          {type:'textarea',q:'5. Show your weighted scores and recommend one concept in 150–250 words.'}
        ],
        sampleAnswers:['Students need usable outdoor seating with reliable afternoon shade while preserving accessible circulation and staying within a limited improvement budget.','Shade coverage 30%; accessibility/circulation 30%; cost 25%; maintenance 15%.','A modular fabric canopy over the existing tables using four new posts.','A freestanding steel pergola with slatted roof and integrated seating edge.','Concept A scores 4.15/5 and Concept B scores 3.85/5. I recommend Concept A because it gives similar shade performance at lower initial cost and can be installed with less disruption. Concept B may last longer, but its higher cost reduces its weighted score. The recommendation is sensitive to maintenance assumptions, so the team should verify fabric replacement cost before final design.'],
        rubric:[['Problem definition',5,'Need and context are clear'],['Criteria/weights',6,'Weights are justified and total 100%'],['Alternatives',6,'Two distinct feasible concepts'],['Decision matrix',7,'Consistent scoring and arithmetic'],['Recommendation',6,'Evidence-based trade-off explanation']]
      },
      {
        id:'engr-fbd-practice',title:'Practice Quiz · Forces & Supports',due:'Sep 9 at 11:59 PM',points:10,group:'Quizzes',kind:'quiz',completed:false,
        questions:[
          {type:'mc',q:'A pin support in a 2D statics model can provide:',options:['One vertical reaction only','Horizontal and vertical force reactions','A moment only','No reactions'],answer:1},
          {type:'mc',q:'Which force should NOT appear on a free-body diagram of a box?',options:['Weight of the box','Normal force from the floor','Friction from the floor','Force the box applies to the floor'],answer:3},
          {type:'mc',q:'A 600-lb midspan load on a symmetric simply supported beam produces vertical reactions of:',options:['150 lb each','300 lb each','600 lb each','1,200 lb each'],answer:1},
          {type:'mc',q:'The path roof load → joist → beam → column → footing → soil is a:',options:['Stress-strain curve','Load path','Decision matrix','Tolerance stack'],answer:1}
        ]
      },
      {
        id:'engr-loadpath',title:'HW 3 · Load Path & Free-Body Diagram Worksheet',due:'Sep 10 at 11:59 PM',points:25,group:'Homework',kind:'worksheet',completed:false,
        instructions:'Complete all four parts. You may type your reasoning below and optionally attach an image/PDF of hand-drawn diagrams. This is an original worksheet.',
        questions:[
          {type:'textarea',q:'1. A 12-ft simply supported beam carries a 1,200-lb point load at midspan. Identify the external forces and calculate the two vertical support reactions. Show the equilibrium equation you used.',placeholder:'Ay + By - 1200 = 0 ...'},
          {type:'textarea',q:'2. Trace a load path for a person standing on the second floor of a simple wood-framed building. Start at the person and end at the soil.'},
          {type:'textarea',q:'3. A wall-mounted shelf has a 40-lb box placed near its free end. Describe what should appear on a free-body diagram of the shelf and bracket assembly.'},
          {type:'textarea',q:'4. Reflection: What is the most common mistake you think you might make when drawing a free-body diagram, and how will you check for it?'}
        ],
        rubric:[['Beam reactions',8,'Correct forces, equation, and reactions'],['Load path',6,'Continuous logical path to soil'],['FBD description',6,'External forces/reactions identified'],['Reflection',3,'Specific checking strategy'],['Presentation',2,'Readable and organized']]
      },
      {
        id:'engr-reflection',title:'Week 3 Exit Ticket',due:'Sep 8 at 9:00 PM',points:5,group:'Participation',kind:'worksheet',completed:false,
        instructions:'Complete after the Tuesday session. Keep each response short.',
        questions:[{type:'textarea',q:'1. In one or two sentences, explain the difference between a load and a reaction.'},{type:'textarea',q:'2. What part of free-body diagrams is still least clear?'},{type:'text',q:'3. Rate your confidence from 1–5.'}]
      }
    ],
    discussions:[
      {id:'engr-disc1',title:'Week 1 Discussion · Engineering Around You',due:'Aug 27 at 11:59 PM',points:10,status:'graded',score:10,prompt:'Choose one ordinary object, building feature, or transportation system you used this week. Explain one design criterion, one constraint, and one stakeholder that likely influenced it.',posts:[
        {name:'Alex Morgan',time:'Aug 26 · 7:14 PM',text:'I picked the curb ramp by a grocery store. One criterion is smooth access for wheelchairs and carts. A constraint is the existing street elevation. Pedestrians, wheelchair users, the city, and maintenance crews are all stakeholders.',replies:[{name:'Taylor Nguyen',time:'Aug 26 · 7:38 PM',text:'Drainage seems important too because the slope can be correct and still create a puddle at the bottom.'}]},
        {name:'Jordan Smith',time:'Aug 26 · 9:02 PM',text:'I chose a reusable bottle. It should be light, durable, leak-resistant, and affordable. The lid is a trade-off between easy cleaning and more seals or moving parts.',replies:[]},
        {name:'Casey Martinez',time:'Aug 27 · 5:48 PM',text:'I looked at a parking garage. Column spacing affects structure, parking efficiency, visibility, and cost. Drivers want open sight lines, but the structure still needs a reliable load path.',replies:[{name:'Sam Rivera',time:'Aug 27 · 6:10 PM',text:'Good example of architecture and structural needs colliding.'}]}
      ]},
      {id:'engr-disc2',title:'Week 2 Discussion · Cost, Safety & Sustainability',due:'Sep 3 at 11:59 PM',points:10,status:'graded',score:10,prompt:'A city can repair an aging walkway with a low-cost short-term fix or replace it with a more expensive design expected to last much longer. What information would you want before recommending an option?',posts:[
        {name:'Taylor Nguyen',time:'Sep 2 · 6:38 PM',text:'I would want condition data, expected service life for both options, user volume, shutdown time, maintenance cost, and whether the damage affects safety.',replies:[{name:'Alex Morgan',time:'Sep 2 · 7:03 PM',text:'Lifecycle cost could completely change which option is actually cheaper.'}]},
        {name:'Sam Rivera',time:'Sep 2 · 8:11 PM',text:'I would ask how disruptive replacement would be and whether there is an accessible alternate route. A stronger design can still create a serious temporary access problem.',replies:[]},
        {name:'Jordan Smith',time:'Sep 3 · 4:56 PM',text:'The uncertainty matters. If the existing condition is poorly documented, I would want inspection data before assigning a service life to the repair option.',replies:[]}
      ]},
      {id:'engr-disc3',title:'Week 3 Discussion · Find the Load Path',due:'Sep 10 at 11:59 PM',points:10,status:'open',score:null,prompt:'Pick a simple structure you can see around you—a table, shelf, canopy, stair, small bridge, or building element. Describe the path a downward load takes until it reaches the ground. Identify at least one connection that matters.',posts:[
        {name:'Mia Johnson',time:'Sep 8 · 1:17 PM',text:'I chose my desk. A laptop load goes through the desktop into the frame, then through the four legs, then into the floor. The screws connecting the top to the metal frame keep the top and frame working together.',replies:[{name:'Chris Park',time:'Sep 8 · 2:04 PM',text:'I like that you included the connection. Without it the top could slide even if the legs are strong.'}]},
        {name:'Diego Flores',time:'Sep 8 · 3:46 PM',text:'For a stair, the person loads the tread, then the stringers carry that load to the landings or floor framing, and the building framing transfers it to the foundation and soil.',replies:[]}
      ]}
    ],
    zoomMeetings:[
      {id:'z1',date:'Tue Aug 25',time:'6:00–8:30 PM',title:'Week 1 · Engineering Problems & Course Setup',status:'recording',recording:'Recording notes available',agenda:['Course setup','What engineers do','Criteria and constraints','Observation activity'],notes:['6:00–6:15 Welcome and course navigation','6:15–7:05 Engineering needs, stakeholders, criteria, constraints','7:15–8:00 Small-group observation activity','8:00–8:30 Debrief and HW 1 walkthrough']},
      {id:'z2',date:'Tue Sep 1',time:'6:00–8:30 PM',title:'Week 2 · Design Process & Decision Matrices',status:'recording',recording:'Recording notes available',agenda:['Design process','Concept generation','Weighted matrix','Mini-project studio'],notes:['6:00–6:25 Review of Week 1','6:25–7:15 Design process and alternative generation','7:25–8:00 Decision-matrix worked example','8:00–8:30 Mini Project 1 work time']},
      {id:'z3',date:'Tue Sep 8',time:'6:00–8:30 PM',title:'Week 3 · Loads, Load Paths & FBDs',status:'today',recording:'',agenda:['Check-in','Loads and load paths','Free-body diagrams','Support reactions','Worked beam example','Exit ticket'],notes:[]},
      {id:'z4',date:'Tue Sep 15',time:'6:00–8:30 PM',title:'Week 4 · Moments & Simple Equilibrium',status:'upcoming',recording:'',agenda:['Moments','Sign convention','Equivalent systems','Equilibrium practice'],notes:[]}
    ],
    modules:[
      {title:'Start Here · Course Orientation',state:'complete',items:[
        {type:'page',title:'Welcome & How This Course Works',detail:'This course uses weekly modules. Each module combines lecture notes, public learning resources, practice, graded work, and discussion.'},
        {type:'page',title:'Technology Check',detail:'Use a modern browser. Local submissions are stored only in this browser using localStorage.'},
        {type:'assignment',assignmentId:'engr-orientation'}
      ]},
      {title:'Week 1 · Aug 24–30 · Engineering Problems',state:'complete',items:[
        {type:'lecture',lectureId:'engr-l1'},
        {type:'external',resourceIds:['designVideo'],title:'External Learning · Engineering Design Process'},
        {type:'discussion',discussionId:'engr-disc1'},
        {type:'assignment',assignmentId:'engr-observation'},
        {type:'zoom',zoomId:'z1'}
      ]},
      {title:'Week 2 · Aug 31–Sep 6 · Design & Trade-offs',state:'complete',items:[
        {type:'lecture',lectureId:'engr-l2'},
        {type:'page',title:'Worked Example · Weighted Decision Matrix',detail:'Three fictional shade concepts are scored from 1–5. Criteria: shade coverage 30%, accessibility 30%, cost 25%, maintenance 15%. Multiply each score by the criterion weight, add the weighted scores, then perform a sensitivity check on the two largest weights.'},
        {type:'discussion',discussionId:'engr-disc2'},
        {type:'assignment',assignmentId:'engr-designbrief'},
        {type:'zoom',zoomId:'z2'}
      ]},
      {title:'Week 3 · Sep 7–13 · Loads & Free-Body Diagrams',state:'current',items:[
        {type:'lecture',lectureId:'engr-l3'},
        {type:'external',resourceIds:['fbdVideo','khanFbd','openstaxFbd','mitStatics'],title:'External Learning · FBDs & Statics'},
        {type:'zoom',zoomId:'z3'},
        {type:'assignment',assignmentId:'engr-fbd-practice'},
        {type:'assignment',assignmentId:'engr-loadpath'},
        {type:'discussion',discussionId:'engr-disc3'},
        {type:'assignment',assignmentId:'engr-reflection'}
      ]},
      {title:'Week 4 · Sep 14–20 · Moments & Equilibrium',state:'upcoming',items:[
        {type:'page',title:'Week 4 Preview',detail:'Next week extends free-body diagrams into moment calculations and complete 2D equilibrium. Content unlocks on Sep 14.'},
        {type:'zoom',zoomId:'z4'}
      ]}
    ]
  },
  {
    id:'math1a',code:'MATH 1A',title:'Calculus',instructor:'Dr. Luis Ramirez',room:'Online · Asynchronous',schedule:'Online · Weekly modules · No fixed meeting',units:5,color:'#356a8a',grade:92,modality:'Online Asynchronous',week:'Week 3',
    description:'A calculus course covering limits, derivatives, applications, and introductory integration.',gradeGroups:[['Homework',35,92],['Quizzes',20,90],['Exams',40,90],['Participation',5,100]],
    lectures:{'math-l3':{title:'Lecture · Derivative as Rate of Change',week:'Week 3',duration:'48 min',objectives:['Connect average and instantaneous rates of change','Use the derivative limit definition','Interpret derivative units'],sections:[['From secant to tangent','Average rate of change uses a secant line across an interval. Shrinking the interval leads toward the tangent-line slope at one point.'],['Definition','The derivative can be defined as the limit of [f(x+h)-f(x)]/h as h approaches zero, when that limit exists.'],['Units','If position is measured in meters and time in seconds, the derivative of position with respect to time has units of meters per second.']],keyTerms:['secant','tangent','difference quotient','derivative'],check:[{q:'A derivative at a point is best interpreted as:',options:['Average value','Instantaneous rate of change','Area only','A domain restriction'],answer:1}]}},
    assignments:[
      {id:'math-hw1',title:'Homework 1 · Limits',due:'Aug 30 at 11:59 PM',points:20,group:'Homework',kind:'worksheet',completed:true,score:19,submittedAt:'Aug 30 at 9:18 PM',feedback:'Good work. Recheck the final one-sided limit.',instructions:'Evaluate limits and explain graphical behavior.',questions:[{type:'text',q:'1. Evaluate lim x→2 of (x²−4)/(x−2).'},{type:'textarea',q:'2. Explain how a two-sided limit can fail to exist.'}],sampleAnswers:['4','The left- and right-hand limits can approach different values, so there is no single two-sided limit.']},
      {id:'math-q1',title:'Quiz 1 · Continuity',due:'Sep 6 at 11:59 PM',points:15,group:'Quizzes',kind:'quiz',completed:true,score:14,submittedAt:'Sep 6 at 8:44 PM',feedback:'Solid conceptual understanding.',questions:[{type:'mc',q:'For continuity at x=a, which condition is required?',options:['f(a) exists only','The limit exists only','f(a) exists, the limit exists, and they are equal','The derivative is zero'],answer:2}],sampleAnswers:['2']},
      {id:'math-hw2',title:'Homework 2 · Derivative Basics',due:'Sep 13 at 11:59 PM',points:25,group:'Homework',kind:'worksheet',instructions:'Practice difference quotients, tangent slopes, and interpretations.',questions:[{type:'textarea',q:'1. Use the limit definition to find the derivative of f(x)=x².'},{type:'text',q:'2. If s(t)=3t²+2t, find instantaneous velocity at t=2.'},{type:'textarea',q:'3. Explain the units of your answer in problem 2.'}]}
    ],
    discussions:[],zoomMeetings:[],
    modules:[
      {title:'Week 1 · Limits',state:'complete',items:[{type:'page',title:'Limits from Graphs',detail:'Interpret what a function approaches from the left and right, even when the function value is different or undefined.'},{type:'assignment',assignmentId:'math-hw1'}]},
      {title:'Week 2 · Continuity',state:'complete',items:[{type:'page',title:'Continuity Conditions',detail:'At x=a, continuity requires f(a) to exist, the limit as x approaches a to exist, and that limit to equal f(a).'},{type:'assignment',assignmentId:'math-q1'}]},
      {title:'Week 3 · Derivatives',state:'current',items:[{type:'lecture',lectureId:'math-l3'},{type:'external',resourceIds:['khanDeriv','mitCalc'],title:'External Learning · Derivatives'},{type:'assignment',assignmentId:'math-hw2'}]}
    ]
  },
  {
    id:'phys4a',code:'PHYS 4A',title:'Physics for Scientists & Engineers: Mechanics',instructor:'Dr. Aisha Patel',room:'Lab 110',schedule:'Thursday · 2:00–5:15 PM · Hybrid',units:5,color:'#56805a',grade:93,modality:'Hybrid',week:'Week 3',
    description:'A calculus-based mechanics course covering motion, vectors, force, energy, momentum, and rotation.',gradeGroups:[['Labs',30,95],['Homework',20,94],['Exams',45,90],['Participation',5,100]],lectures:{},
    assignments:[
      {id:'phys-lab1',title:'Lab 1 · Motion Graphs',due:'Aug 28 at 11:59 PM',points:30,group:'Labs',kind:'worksheet',completed:true,score:29,submittedAt:'Aug 28 at 10:06 PM',feedback:'Clear graphs and uncertainty discussion.',instructions:'Analyze position-time and velocity-time data.',questions:[{type:'textarea',q:'Describe how slope on a position-time graph relates to velocity.'}],sampleAnswers:['The slope of the position-time graph equals velocity; steeper slope means larger speed, and negative slope means negative velocity.']},
      {id:'phys-hw2',title:'Homework 2 · Vectors',due:'Sep 4 at 11:59 PM',points:25,group:'Homework',kind:'worksheet',completed:true,score:24,submittedAt:'Sep 4 at 9:33 PM',feedback:'One sign error; otherwise strong.',instructions:'Resolve vectors into components.',questions:[{type:'text',q:'A 10-N vector at 30° above +x has what x-component?'},{type:'text',q:'What is its y-component?'}],sampleAnswers:['8.66 N','5.00 N']},
      {id:'phys-hw3',title:'Homework 3 · Newton’s Laws',due:'Sep 11 at 11:59 PM',points:25,group:'Homework',kind:'worksheet',instructions:'Apply Newton’s laws to force diagrams.',questions:[{type:'textarea',q:'1. Draw or describe the free-body diagram for a book resting on a table.'},{type:'text',q:'2. A 4-kg object has a net force of 12 N. What is its acceleration?'},{type:'textarea',q:'3. Explain why action-reaction forces do not cancel on one object.'}]}
    ],discussions:[],zoomMeetings:[],modules:[
      {title:'Week 1 · Kinematics',state:'complete',items:[{type:'page',title:'Motion in One Dimension',detail:'Position, displacement, velocity, acceleration, and motion graphs.'},{type:'assignment',assignmentId:'phys-lab1'}]},
      {title:'Week 2 · Vectors',state:'complete',items:[{type:'page',title:'Vector Components',detail:'Resolve vectors into components and reconstruct magnitude and direction.'},{type:'assignment',assignmentId:'phys-hw2'}]},
      {title:'Week 3 · Newton’s Laws',state:'current',items:[{type:'external',resourceIds:['openstaxFbd','khanFbd'],title:'External Learning · Forces & FBDs'},{type:'assignment',assignmentId:'phys-hw3'}]}
    ]
  },
  {
    id:'ewrt1a',code:'EWRT 1A',title:'Composition and Reading',instructor:'Prof. Jordan Lee',room:'Online · Zoom workshop',schedule:'Online asynchronous + Thursday Zoom · 7:00–8:00 PM',units:5,color:'#7c5a8d',grade:97,modality:'Online + Optional Zoom',week:'Week 3',
    description:'A composition course focused on college-level reading, argument, drafting, research, and revision.',gradeGroups:[['Essays',55,97],['Reading',20,95],['Discussion',15,100],['Participation',10,100]],lectures:{},
    assignments:[
      {id:'ewrt-r1',title:'Reading Response 1',due:'Aug 30 at 11:59 PM',points:20,group:'Reading',kind:'worksheet',completed:true,score:20,submittedAt:'Aug 30 at 7:50 PM',feedback:'Thoughtful connection between the author’s claim and evidence.',instructions:'Analyze how evidence supports a claim.',questions:[{type:'textarea',q:'Identify the main claim and explain how one piece of evidence supports it.'}],sampleAnswers:['The author argues that public space design shapes who feels welcome. The example of seating placement supports that claim by showing how a physical choice changes how long people stay and how they interact.']},
      {id:'ewrt-outline',title:'Essay 1 · Working Outline',due:'Sep 6 at 11:59 PM',points:20,group:'Essays',kind:'worksheet',completed:true,score:19,submittedAt:'Sep 6 at 10:11 PM',feedback:'Clear structure. Refine the third paragraph’s purpose.',instructions:'Submit a working claim, paragraph plan, and evidence notes.',questions:[{type:'textarea',q:'Working thesis:'},{type:'textarea',q:'Body paragraph plan:'}],sampleAnswers:['Effective public design balances accessibility, usability, and social inclusion rather than treating them as separate concerns.','P1 accessibility; P2 user behavior and usability; P3 social inclusion and trade-offs; conclusion connects design decisions to public responsibility.']},
      {id:'ewrt-draft',title:'Essay 1 · First Draft',due:'Sep 13 at 11:59 PM',points:50,group:'Essays',kind:'worksheet',instructions:'Draft 900–1,200 words with a focused thesis, evidence, analysis, and coherent paragraph structure.',questions:[{type:'textarea',q:'Paste or draft your essay here:',placeholder:'Your draft is saved locally as you type.'}]}
    ],discussions:[],zoomMeetings:[{id:'ewrt-z1',date:'Thu Sep 10',time:'7:00–8:00 PM',title:'Optional Draft Workshop',status:'upcoming',agenda:['Thesis troubleshooting','Paragraph workshop','Peer questions'],notes:[]}],modules:[
      {title:'Week 1 · Academic Reading',state:'complete',items:[{type:'page',title:'Annotation Strategies',detail:'Mark claims, evidence, unfamiliar terms, questions, and connections while reading.'},{type:'assignment',assignmentId:'ewrt-r1'}]},
      {title:'Week 2 · Claims & Evidence',state:'complete',items:[{type:'page',title:'Building a Claim',detail:'A strong thesis makes a focused, arguable claim and signals the reasoning that will support it.'},{type:'assignment',assignmentId:'ewrt-outline'}]},
      {title:'Week 3 · Drafting',state:'current',items:[{type:'external',resourceIds:['purdueWriting'],title:'External Learning · Drafting & Revision'},{type:'page',title:'Paragraph Workshop',detail:'Use a focused topic sentence, specific evidence, analysis that explains why the evidence matters, and a transition or wrap-up that connects back to the larger claim.'},{type:'zoom',zoomId:'ewrt-z1'},{type:'assignment',assignmentId:'ewrt-draft'}]}
    ]
  }
];

const ANNOUNCEMENTS=[
  {id:'a1',course:'ENGR 10',title:'Week 3 · Tonight on Zoom',body:'Tonight’s class runs 6:00–8:30 PM. Open Lecture 3 before class and bring paper for free-body diagrams. The exit ticket closes at 9:00 PM.',time:'Sep 8, 3:40 PM',target:{course:'engr10',tab:'zoom'}},
  {id:'a2',course:'ENGR 10',title:'Week 2 mini-project feedback posted',body:'Scores and feedback are visible in Grades. Most submissions handled criteria well; uncertainty in cost estimates needs more attention.',time:'Sep 7, 6:18 PM',target:{course:'engr10',assignment:'engr-designbrief'}},
  {id:'a3',course:'MATH 1A',title:'Week 3 derivative module open',body:'The derivative lecture, external learning links, and Homework 2 are published.',time:'Sep 7, 8:00 AM',target:{course:'math1a',tab:'modules'}},
  {id:'a4',course:'EWRT 1A',title:'Optional Zoom draft workshop Thursday',body:'Bring one paragraph you want feedback on. The workshop is optional.',time:'Sep 8, 11:22 AM',target:{course:'ewrt1a',tab:'zoom'}}
];

const MESSAGES=[
  {id:'m1',initials:'MC',from:'Prof. Maya Chen',subject:'Tonight: Week 3 Zoom',body:'We meet 6:00–8:30 PM tonight. Please open the Week 3 lecture before class. We will work the 1,000-lb beam example together and then start the load-path worksheet.',time:'3:42 PM',unread:true,course:'ENGR 10'},
  {id:'m2',initials:'MC',from:'Prof. Maya Chen',subject:'Feedback posted',body:'Your Week 2 mini-project has feedback in Grades. Nice work on the decision matrix. Review the comment about uncertainty before the next project.',time:'Yesterday',unread:true,course:'ENGR 10'},
  {id:'m3',initials:'JL',from:'Prof. Jordan Lee',subject:'Draft workshop Thursday',body:'The optional draft workshop is Thursday at 7:00 PM. Bring one paragraph and one question about your thesis or organization.',time:'Yesterday',unread:true,course:'EWRT 1A'},
  {id:'m4',initials:'LR',from:'Dr. Luis Ramirez',subject:'Derivative module',body:'Week 3 materials are now published. Start with the derivative lecture, then use the external Khan Academy or MIT material if you want another explanation.',time:'Mon',unread:false,course:'MATH 1A'}
];

function defaultState(){
  const submissions={};
  for(const c of BASE_COURSES){for(const a of c.assignments){if(a.completed){submissions[`${c.id}:${a.id}`]={submitted:true,answers:a.sampleAnswers||[],fileName:'',submittedAt:a.submittedAt,score:a.score,feedback:a.feedback};}}}
  return {profile:{name:'Student',photo:''},submissions,discussionPosts:{},quizChecks:{},courseOverrides:{},history:[],drafts:{},messagesRead:{},calendarMonth:'2026-09'};
}
let state=defaultState();
try{const saved=JSON.parse(localStorage.getItem(STORAGE_KEY)||'null'); if(saved) state={...state,...saved,profile:{...state.profile,...(saved.profile||{})},submissions:{...state.submissions,...(saved.submissions||{})}};}catch(e){}
function saveState(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}catch(e){/* keep current-session state if local file storage is restricted */}}
function escapeHTML(s=''){return String(s).replace(/[&<>'"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));}
function initials(name='Student'){return name.trim().split(/\s+/).slice(0,2).map(x=>x[0]?.toUpperCase()||'').join('')||'DS';}
function gradeLetter(n){return n>=90?'A':n>=80?'B':n>=70?'C':n>=60?'D':'F';}
function courses(){return BASE_COURSES.map(c=>({...c,...(state.courseOverrides[c.id]||{}),full:`${state.courseOverrides[c.id]?.code||c.code} - ${state.courseOverrides[c.id]?.title||c.title}`}));}
function courseById(id){return courses().find(c=>c.id===id)||courses()[0];}
function assignmentById(c,id){return c.assignments.find(a=>a.id===id);}
function discussionById(c,id){return (c.discussions||[]).find(d=>d.id===id);}
function zoomById(c,id){return (c.zoomMeetings||[]).find(z=>z.id===id);}
function isSubmitted(c,a){return !!state.submissions[`${c.id}:${a.id}`]?.submitted;}
function submission(c,a){return state.submissions[`${c.id}:${a.id}`]||{};}

let currentCourse=courseById('engr10');
let currentCourseTab='home';
const views=[...document.querySelectorAll('.view')];
const globalLinks=[...document.querySelectorAll('.global-link[data-view]')];
const crumbs=document.getElementById('crumbs');
const globalNav=document.getElementById('globalNav');
const courseNav=document.getElementById('courseNav');
const modal=document.getElementById('assignmentModal');
const modalBody=document.getElementById('assignmentModalBody');

function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(toast._t);toast._t=setTimeout(()=>t.classList.remove('show'),2200);}
function addHistory(label,meta=''){state.history.unshift({label,meta,time:new Date().toLocaleString()});state.history=state.history.slice(0,30);saveState();renderHistory();}
function showModal(html,wide=false){modalBody.innerHTML=html;modal.querySelector('.modal-card').classList.toggle('wide-modal',wide);modal.hidden=false;document.body.classList.add('modal-open');}
function closeModal(){modal.hidden=true;document.body.classList.remove('modal-open');}

document.getElementById('closeAssignmentModal').onclick=closeModal;
modal.addEventListener('click',e=>{if(e.target===modal)closeModal();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden)closeModal();});

function setView(id){
  views.forEach(v=>v.classList.toggle('active-view',v.id===id));
  globalLinks.forEach(b=>b.classList.toggle('active',b.dataset.view===id));
  if(id==='courseDetail'){
    globalLinks.forEach(b=>b.classList.toggle('active',b.dataset.view==='courses'));
    crumbs.innerHTML=`<span>Courses</span><b>›</b><strong>${escapeHTML(currentCourse.code)}</strong>`;
  }else crumbs.innerHTML=`<span>De Anza College</span><b>›</b><strong>${escapeHTML(id[0].toUpperCase()+id.slice(1))}</strong>`;
  globalNav.classList.remove('open');
  if(id==='dashboard')renderDashboard();
  if(id==='courses')renderAllCourses();
  if(id==='calendar')renderCalendar();
  if(id==='inbox')renderInbox();
  if(id==='history')renderHistory();
  if(id==='account')renderProfile();
}

globalLinks.forEach(b=>b.onclick=()=>setView(b.dataset.view));
document.querySelectorAll('[data-view-link]').forEach(b=>b.onclick=()=>setView(b.dataset.viewLink));
document.querySelector('.school-mark').onclick=()=>setView('dashboard');
document.getElementById('menuBtn').onclick=()=>globalNav.classList.toggle('open');
document.getElementById('courseNavBtn').onclick=()=>courseNav.classList.toggle('open');
document.getElementById('topProfile').onclick=()=>setView('account');

function renderProfile(){
  const name=state.profile.name||'Student';
  document.getElementById('profileDisplayName').textContent=name;
  document.getElementById('studentNameInput').value=name;
  document.getElementById('largeProfileInitials').textContent=initials(name);
  document.getElementById('topProfileInitials').textContent=initials(name);
  const photo=state.profile.photo;
  for(const id of ['topProfileImage','largeProfileImage']){const img=document.getElementById(id);if(photo){img.src=photo;img.hidden=false;}else{img.hidden=true;}}
  document.getElementById('largeProfileInitials').style.display=photo?'none':'flex';
  document.getElementById('topProfileInitials').style.display=photo?'none':'';
}

document.getElementById('saveProfileBtn').onclick=()=>{state.profile.name=document.getElementById('studentNameInput').value.trim()||'Student';saveState();renderProfile();renderDashboard();toast('Profile saved locally');};
document.getElementById('profileImageInput').onchange=e=>{const f=e.target.files?.[0];if(!f)return;const r=new FileReader();r.onload=()=>{state.profile.photo=r.result;saveState();renderProfile();toast('Profile image saved locally');};r.readAsDataURL(f);};
document.getElementById('removePhotoBtn').onclick=()=>{state.profile.photo='';saveState();renderProfile();toast('Profile photo removed');};

function renderDashboard(){
  const cs=courses();
  document.getElementById('publishedCount').textContent=`Published Courses (${cs.length})`;
  document.getElementById('courseGrid').innerHTML=cs.map(c=>`<article class="course-card" data-course="${c.id}"><div class="card-color" style="background:${c.color}"><button class="card-menu" title="Course options">⋮</button></div><div class="card-body"><button class="course-title-btn"><strong>${escapeHTML(c.code)} - ${escapeHTML(c.title)}</strong></button><span>${escapeHTML(c.modality)}</span><small>${escapeHTML(c.schedule)}</small><small>${c.units} units · ${escapeHTML(c.week)}</small></div><div class="card-footer"><button title="Announcements" data-open-course="${c.id}:announcements">✉</button><button title="Assignments" data-open-course="${c.id}:assignments">✓</button><button title="Grades" data-open-course="${c.id}:grades">▥</button></div></article>`).join('');
  document.querySelectorAll('.course-card').forEach(card=>card.querySelector('.course-title-btn').onclick=()=>openCourse(card.dataset.course,'home'));
  document.querySelectorAll('[data-open-course]').forEach(b=>b.onclick=e=>{e.stopPropagation();const [id,tab]=b.dataset.openCourse.split(':');openCourse(id,tab);});
  document.querySelectorAll('.card-menu').forEach(b=>b.onclick=e=>{e.stopPropagation();toast('Course card options are available inside Course Settings');});
  const todos=[];
  for(const c of cs){for(const a of c.assignments){if(!isSubmitted(c,a))todos.push({course:c,a});}}
  document.getElementById('todoList').innerHTML=todos.slice(0,7).map(({course:c,a})=>`<button class="todo-item" data-assignment-key="${c.id}:${a.id}"><span class="todo-icon">▱</span><span><strong>${escapeHTML(a.title)}</strong><small>${escapeHTML(c.code)} · ${escapeHTML(a.due)}</small></span><b>${a.points} pts</b></button>`).join('')||'<p class="muted">Nothing due.</p>';
  document.querySelectorAll('[data-assignment-key]').forEach(b=>b.onclick=()=>{const [cid,aid]=b.dataset.assignmentKey.split(':');openCourse(cid,'assignments');setTimeout(()=>openAssignment(courseById(cid),assignmentById(courseById(cid),aid)),0);});
  document.getElementById('upcomingList').innerHTML=`<button class="upcoming-item" data-zoom-key="engr10:z3"><span>●</span><div><strong>ENGR 10 · Week 3 Zoom</strong><small>Today · 6:00–8:30 PM</small></div></button><button class="upcoming-item" data-zoom-key="ewrt1a:ewrt-z1"><span>○</span><div><strong>EWRT 1A · Draft Workshop</strong><small>Thu Sep 10 · 7:00–8:00 PM</small></div></button>`;
  document.querySelectorAll('[data-zoom-key]').forEach(b=>b.onclick=()=>{const [cid,zid]=b.dataset.zoomKey.split(':');openCourse(cid,'zoom');setTimeout(()=>openZoom(courseById(cid),zoomById(courseById(cid),zid)),0);});
}

document.getElementById('viewAllTodos').onclick=()=>{const c=courseById('engr10');openCourse(c.id,'assignments');};
document.getElementById('dashboardOptions').onclick=()=>toast('Dashboard cards are arranged by active courses');

function renderAllCourses(){
  document.getElementById('allCourses').innerHTML=courses().map(c=>`<button class="course-list-row" data-course="${c.id}"><span class="course-dot" style="background:${c.color}"></span><span><strong>${escapeHTML(c.code)} - ${escapeHTML(c.title)}</strong><small>${escapeHTML(c.instructor)} · ${escapeHTML(c.schedule)}</small></span><b>${c.grade}%</b></button>`).join('');
  document.querySelectorAll('.course-list-row').forEach(b=>b.onclick=()=>openCourse(b.dataset.course,'home'));
  document.querySelectorAll('.small-side-panel button').forEach((b,i)=>b.onclick=()=>toast(i===0?'Showing active Fall 2026 courses':'No past enrollments'));
}

function openCourse(id,tab='home'){
  currentCourse=courseById(id);currentCourseTab=tab;setView('courseDetail');
  document.getElementById('courseBreadcrumb').textContent=`${currentCourse.code} · Fall 2026`;
  selectCourseTab(tab);
  addHistory(`${currentCourse.code} · ${tab[0].toUpperCase()+tab.slice(1)}`,currentCourse.title);
}

courseNav.querySelectorAll('[data-course-tab]').forEach(b=>b.onclick=()=>selectCourseTab(b.dataset.courseTab));
function selectCourseTab(tab){
  currentCourseTab=tab;
  courseNav.querySelectorAll('[data-course-tab]').forEach(b=>b.classList.toggle('active',b.dataset.courseTab===tab));
  courseNav.classList.remove('open');
  const names={home:'Home',zoom:'Zoom',announcements:'Announcements',assignments:'Assignments',discussions:'Discussions',grades:'Grades',people:'People',pages:'Pages',files:'Files',syllabus:'Syllabus',modules:'Modules',settings:'Settings'};
  document.getElementById('courseHeading').textContent=names[tab]||'Course';
  renderCourseTab(tab);
}

function moduleStateLabel(m){return m.state==='complete'?'Completed':m.state==='current'?'Current Week':'Upcoming';}
function assignmentRow(c,a){const s=submission(c,a);return `<button class="lms-row clickable-row assignment-link" data-assignment="${a.id}"><div class="row-icon">${a.kind==='quiz'?'✓':'▤'}</div><div><h4>${escapeHTML(a.title)}</h4><p>${escapeHTML(a.group)} · Due ${escapeHTML(a.due)} · ${a.points} pts</p></div><div class="row-score ${s.submitted?'submitted':''}">${s.submitted?(s.score!=null?`${s.score}/${a.points}`:'Submitted'):'Not submitted'}</div></button>`;}
function moduleItemHTML(c,item){
  if(item.type==='assignment'){const a=assignmentById(c,item.assignmentId);return `<button class="module-item assignment-link" data-assignment="${a.id}"><span>${a.kind==='quiz'?'✓':'▤'}</span><div><strong>${escapeHTML(a.title)}</strong><small>${isSubmitted(c,a)?'Submitted':'Due '+a.due}</small></div><b>${isSubmitted(c,a)?'✓':'›'}</b></button>`;}
  if(item.type==='lecture'){const l=c.lectures[item.lectureId];return `<button class="module-item lecture-link" data-lecture="${item.lectureId}"><span>▶</span><div><strong>${escapeHTML(l.title)}</strong><small>${escapeHTML(l.week)} · ${escapeHTML(l.duration)}</small></div><b>›</b></button>`;}
  if(item.type==='discussion'){const d=discussionById(c,item.discussionId);return `<button class="module-item discussion-link" data-discussion="${d.id}"><span>◌</span><div><strong>${escapeHTML(d.title)}</strong><small>${d.status==='graded'?'Graded':'Due '+d.due}</small></div><b>›</b></button>`;}
  if(item.type==='zoom'){const z=zoomById(c,item.zoomId);return `<button class="module-item zoom-link" data-zoom="${z.id}"><span>◉</span><div><strong>${escapeHTML(z.title)}</strong><small>${escapeHTML(z.date)} · ${escapeHTML(z.time)}</small></div><b>›</b></button>`;}
  if(item.type==='external')return `<button class="module-item external-link" data-resources="${item.resourceIds.join(',')}"><span>↗</span><div><strong>${escapeHTML(item.title||'External Learning')}</strong><small>${item.resourceIds.length} public learning resource${item.resourceIds.length===1?'':'s'}</small></div><b>›</b></button>`;
  return `<button class="module-item page-link" data-page-title="${escapeHTML(item.title)}" data-page-detail="${escapeHTML(item.detail||'')}"><span>▤</span><div><strong>${escapeHTML(item.title)}</strong><small>Course page</small></div><b>›</b></button>`;
}

function renderCourseTab(tab){
  const c=currentCourse,el=document.getElementById('courseContent');
  if(tab==='home'){
    const currentModule=c.modules.find(m=>m.state==='current')||c.modules[0];
    el.innerHTML=`<div class="course-home-grid"><section><h2 class="content-heading">${escapeHTML(c.full)}</h2><p class="lead-copy">${escapeHTML(c.description)}</p><div class="course-meta-grid"><div><small>Instructor</small><strong>${escapeHTML(c.instructor)}</strong></div><div><small>Meeting</small><strong>${escapeHTML(c.schedule)}</strong></div><div><small>Delivery</small><strong>${escapeHTML(c.modality)}</strong></div><div><small>Current grade</small><strong>${c.grade}% · ${gradeLetter(c.grade)}</strong></div></div><div class="home-callout"><h3>${escapeHTML(currentModule.title)}</h3><p>${currentModule.items.length} published items in the current module.</p><button class="primary-btn" data-jump="modules">Go to current module</button></div><div class="home-block"><h3>Recent Announcements</h3>${ANNOUNCEMENTS.filter(a=>a.course===c.code).slice(0,3).map(a=>`<button class="announcement-mini" data-announcement="${a.id}"><strong>${escapeHTML(a.title)}</strong><small>${escapeHTML(a.time)}</small><span>${escapeHTML(a.body)}</span></button>`).join('')||'<p class="muted">No announcements.</p>'}</div></section><aside class="course-side"><button class="primary-btn full" data-jump="modules">View Course Modules</button><button class="outline-btn full" data-jump="assignments">Assignments</button><button class="outline-btn full" data-jump="grades">Grades</button><button class="outline-btn full" data-jump="zoom">Zoom</button><div class="side-note"><strong>Week 3</strong><span>Course date: Sep 8, 2026</span></div></aside></div>`;
  } else if(tab==='zoom'){
    const zs=c.zoomMeetings||[];
    el.innerHTML=zs.length?`<div class="section-intro"><h2>Class Meetings</h2><p>Open a meeting card to view class details, notes, or recordings.</p></div><div class="zoom-list">${zs.map(z=>`<article class="zoom-card ${z.status}"><div class="zoom-date"><strong>${escapeHTML(z.date)}</strong><span>${escapeHTML(z.time)}</span></div><div class="zoom-info"><h3>${escapeHTML(z.title)}</h3><p>${z.status==='recording'?'Completed · notes/recording available':z.status==='today'?'Today · live meeting':'Upcoming'}</p><button class="${z.status==='today'?'primary-btn':'outline-btn'} zoom-open" data-zoom="${z.id}">${z.status==='recording'?'Open recording notes':z.status==='today'?'Join class':'View meeting details'}</button></div><div class="zoom-status">${z.status==='recording'?'Recorded':z.status==='today'?'TODAY':'Upcoming'}</div></article>`).join('')}</div>`:`<div class="empty-state"><h3>No recurring Zoom meetings</h3><p>This course is ${escapeHTML(c.modality)}.</p></div>`;
  } else if(tab==='announcements'){
    const aa=ANNOUNCEMENTS.filter(a=>a.course===c.code);
    el.innerHTML=`<div class="section-intro"><h2>Announcements</h2><p>Course updates and reminders.</p></div>${aa.map(a=>`<button class="announcement-row announcement-open" data-announcement="${a.id}"><h3>${escapeHTML(a.title)}</h3><small>${escapeHTML(a.time)} · ${escapeHTML(c.instructor)}</small><p>${escapeHTML(a.body)}</p></button>`).join('')||'<div class="empty-state"><h3>No announcements</h3></div>'}`;
  } else if(tab==='assignments'){
    const current=c.assignments.filter(a=>!isSubmitted(c,a)),past=c.assignments.filter(a=>isSubmitted(c,a));
    el.innerHTML=`<div class="section-intro"><h2>Assignments</h2><p>Open any item to view the full prompt, rubric, saved work, feedback, and submission controls.</p></div>${current.length?`<div class="lms-list"><div class="lms-list-header">Current & Upcoming</div>${current.map(a=>assignmentRow(c,a)).join('')}</div>`:''}${past.length?`<div class="lms-list completed-group"><div class="lms-list-header">Past / Submitted</div>${past.map(a=>assignmentRow(c,a)).join('')}</div>`:''}`;
  } else if(tab==='discussions'){
    const ds=c.discussions||[];
    el.innerHTML=ds.length?`<div class="section-intro"><h2>Discussions</h2><p>Class discussion posts. You can add a local post or reply.</p></div><div class="lms-list"><div class="lms-list-header">Discussion Boards</div>${ds.map(d=>`<button class="lms-row clickable-row discussion-link" data-discussion="${d.id}"><div class="row-icon">◌</div><div><h4>${escapeHTML(d.title)}</h4><p>Due ${escapeHTML(d.due)} · ${d.posts.length+(state.discussionPosts[`${c.id}:${d.id}`]?.length||0)} posts</p></div><div class="row-score ${d.status==='graded'?'submitted':''}">${d.status==='graded'?`${d.score}/${d.points}`:'Open'}</div></button>`).join('')}</div>`:`<div class="empty-state"><h3>No discussion boards in this course.</h3></div>`;
  } else if(tab==='grades'){
    el.innerHTML=`<div class="grade-summary">Current Total: <strong>${c.grade}% (${gradeLetter(c.grade)})</strong><span>Current course grade</span></div><div class="grade-breakdown">${c.gradeGroups.map(g=>`<div class="grade-group-card"><div><strong>${escapeHTML(g[0])}</strong><span>${g[1]}% weight</span></div><b>${g[2]}%</b><div class="grade-bar"><i style="width:${g[2]}%"></i></div></div>`).join('')}</div><table class="grade-table"><thead><tr><th>Name</th><th>Due</th><th>Status</th><th>Score</th></tr></thead><tbody>${c.assignments.map(a=>{const s=submission(c,a);return `<tr><td><button class="link-button assignment-link" data-assignment="${a.id}">${escapeHTML(a.title)}</button></td><td>${escapeHTML(a.due.split(' at')[0])}</td><td>${s.submitted?'Submitted':'Not Submitted'}</td><td>${s.score!=null?`${s.score} / ${a.points}`:`– / ${a.points}`}</td></tr>`}).join('')}${(c.discussions||[]).map(d=>`<tr><td><button class="link-button discussion-link" data-discussion="${d.id}">${escapeHTML(d.title)}</button></td><td>${escapeHTML(d.due.split(' at')[0])}</td><td>${d.status==='graded'?'Graded':'Open'}</td><td>${d.score!=null?`${d.score} / ${d.points}`:`– / ${d.points}`}</td></tr>`).join('')}</tbody></table>`;
  } else if(tab==='people'){
    const people=[{name:c.instructor,role:'Teacher'},...['Alex Morgan','Taylor Nguyen','Jordan Smith','Casey Martinez','Sam Rivera','Avery Kim','Diego Flores','Mia Johnson','Chris Park'].map(name=>({name,role:'Student'}))];
    el.innerHTML=`<div class="section-intro"><h2>People</h2><p>Course roster.</p></div><div class="people-grid">${people.map(p=>`<button class="person-row person-open" data-person="${escapeHTML(p.name)}" data-role="${p.role}"><div class="person-avatar">${initials(p.name)}</div><div><h4>${escapeHTML(p.name)}</h4><p>${p.role}</p></div><div>${p.role}</div></button>`).join('')}</div>`;
  } else if(tab==='pages'){
    const lectureItems=c.modules.flatMap(m=>m.items.filter(i=>i.type==='lecture'));const pages=c.modules.flatMap(m=>m.items.filter(i=>i.type==='page'));
    el.innerHTML=`<div class="lms-list"><div class="lms-list-header">Pages & Lectures</div>${lectureItems.map(i=>{const l=c.lectures[i.lectureId];return `<button class="lms-row clickable-row lecture-link" data-lecture="${i.lectureId}"><div class="row-icon">▶</div><div><h4>${escapeHTML(l.title)}</h4><p>${escapeHTML(l.week)} · ${escapeHTML(l.duration)}</p></div><div class="row-score">Published</div></button>`}).join('')}${pages.map(p=>`<button class="lms-row clickable-row page-link" data-page-title="${escapeHTML(p.title)}" data-page-detail="${escapeHTML(p.detail||'')}"><div class="row-icon">▤</div><div><h4>${escapeHTML(p.title)}</h4><p>Course page</p></div><div class="row-score">Published</div></button>`).join('')}</div>`;
  } else if(tab==='files'){
    const files=[['Syllabus_Fall_2026.txt','Course syllabus text'],['Week_01_Notes.txt','Week 1 lecture summary'],['Week_02_Decision_Matrix.csv','Example decision matrix'],['Week_03_FBD_Practice.txt','Free-body-diagram practice prompts'],['Assignment_Rubrics.txt','Rubric reference']];
    el.innerHTML=`<div class="section-intro"><h2>Course Files</h2><p>These files are generated locally on demand; clicking Download creates a file in your browser.</p></div><div class="lms-list"><div class="lms-list-header">Files</div>${files.map((f,i)=>`<div class="lms-row"><div class="row-icon">▤</div><div><h4>${f[0]}</h4><p>${f[1]}</p></div><button class="outline-btn file-download" data-file="${i}">Download</button></div>`).join('')}</div>`;
  } else if(tab==='syllabus'){
    el.innerHTML=`<div class="syllabus-text"><h2 class="content-heading">${escapeHTML(c.full)}</h2><p><strong>${escapeHTML(c.instructor)}</strong><br>${escapeHTML(c.schedule)}<br>${escapeHTML(c.room)}<br>${c.units} units · ${escapeHTML(c.modality)}</p><h3>Current Course Point</h3><p><strong>Week 3 · September 7–13, 2026.</strong> Weeks 1 and 2 contain completed work and instructor feedback.</p><h3>Course Description</h3><p>${escapeHTML(c.description)}</p><h3>Learning Outcomes</h3><ul><li>Apply course concepts to structured problems.</li><li>Communicate reasoning clearly and show supporting work.</li><li>Evaluate evidence, assumptions, and trade-offs.</li><li>Participate in synchronous or asynchronous course activities as configured.</li></ul><h3>Grading</h3><p>${c.gradeGroups.map(g=>`${escapeHTML(g[0])} ${g[1]}%`).join(' · ')}</p></div>`;
  } else if(tab==='modules'){
    el.innerHTML=`<div class="section-intro"><h2>Modules</h2><p>Every published item below opens to substantive content or an interactive activity.</p></div><div class="modules-stack">${c.modules.map((m,i)=>`<section class="module-card ${m.state}"><button class="module-header" data-module-toggle="${i}"><span>▾</span><strong>${escapeHTML(m.title)}</strong><small>${moduleStateLabel(m)} · ${m.items.length} items</small></button><div class="module-body" data-module-body="${i}">${m.items.map(item=>moduleItemHTML(c,item)).join('')}</div></section>`).join('')}</div>`;
  } else if(tab==='settings'){
    el.innerHTML=`<div class="settings-panel"><h2>Course Details</h2><p>Changes apply only to this browser.</p><div class="settings-form"><label>Course code<input id="courseCodeInput" value="${escapeHTML(c.code)}"></label><label>Course name<input id="courseTitleInput" value="${escapeHTML(c.title)}"></label><label>Instructor<input id="courseInstructorInput" value="${escapeHTML(c.instructor)}"></label><label>Room / delivery<input id="courseRoomInput" value="${escapeHTML(c.room)}"></label><label class="full-field">Meeting time<input id="courseScheduleInput" value="${escapeHTML(c.schedule)}"></label><div class="form-actions full-field"><button class="primary-btn" id="saveCourseSettings">Save Changes</button><button class="outline-btn" id="resetCourseSettings">Reset This Course</button></div></div></div>`;
  }
  bindCourseControls();
}

function bindCourseControls(){
  document.querySelectorAll('[data-jump]').forEach(b=>b.onclick=()=>selectCourseTab(b.dataset.jump));
  document.querySelectorAll('[data-module-toggle]').forEach(b=>b.onclick=()=>{const body=document.querySelector(`[data-module-body="${b.dataset.moduleToggle}"]`);body.classList.toggle('collapsed');b.querySelector('span').textContent=body.classList.contains('collapsed')?'▸':'▾';});
  document.querySelectorAll('.assignment-link').forEach(b=>b.onclick=()=>openAssignment(currentCourse,assignmentById(currentCourse,b.dataset.assignment)));
  document.querySelectorAll('.lecture-link').forEach(b=>b.onclick=()=>openLecture(currentCourse,b.dataset.lecture));
  document.querySelectorAll('.discussion-link').forEach(b=>b.onclick=()=>openDiscussion(currentCourse,discussionById(currentCourse,b.dataset.discussion)));
  document.querySelectorAll('.zoom-link,.zoom-open').forEach(b=>b.onclick=()=>openZoom(currentCourse,zoomById(currentCourse,b.dataset.zoom)));
  document.querySelectorAll('.external-link').forEach(b=>b.onclick=()=>openResources(b.dataset.resources.split(',')));
  document.querySelectorAll('.page-link').forEach(b=>b.onclick=()=>openPage(b.dataset.pageTitle,b.dataset.pageDetail));
  document.querySelectorAll('.announcement-open,[data-announcement]').forEach(b=>b.onclick=()=>openAnnouncement(b.dataset.announcement));
  document.querySelectorAll('.person-open').forEach(b=>b.onclick=()=>showModal(`<div class="modal-kicker">${escapeHTML(b.dataset.role)}</div><h2>${escapeHTML(b.dataset.person)}</h2><p>Course directory profile.</p><div class="profile-card-detail"><div class="person-avatar large">${initials(b.dataset.person)}</div><div><strong>${escapeHTML(b.dataset.person)}</strong><span>${escapeHTML(b.dataset.role)}</span><span>${escapeHTML(currentCourse.code)}</span></div></div>`));
  document.querySelectorAll('.file-download').forEach(b=>b.onclick=()=>downloadDemoFile(Number(b.dataset.file)));
  const save=document.getElementById('saveCourseSettings');if(save)save.onclick=()=>{state.courseOverrides[currentCourse.id]={...(state.courseOverrides[currentCourse.id]||{}),code:document.getElementById('courseCodeInput').value.trim()||currentCourse.code,title:document.getElementById('courseTitleInput').value.trim()||currentCourse.title,instructor:document.getElementById('courseInstructorInput').value.trim()||currentCourse.instructor,room:document.getElementById('courseRoomInput').value.trim()||currentCourse.room,schedule:document.getElementById('courseScheduleInput').value.trim()||currentCourse.schedule};saveState();currentCourse=courseById(currentCourse.id);toast('Course settings saved locally');renderCourseTab('settings');renderDashboard();};
  const reset=document.getElementById('resetCourseSettings');if(reset)reset.onclick=()=>{delete state.courseOverrides[currentCourse.id];saveState();currentCourse=courseById(currentCourse.id);renderCourseTab('settings');renderDashboard();toast('Course settings reset');};
}

function openPage(title,detail){showModal(`<div class="modal-kicker">Course Page</div><h2>${escapeHTML(title)}</h2><div class="rich-copy"><p>${escapeHTML(detail)}</p><hr><h3>Quick note</h3><textarea id="pageNote" class="large-textarea" placeholder="Write a private local note about this page…">${escapeHTML(state.drafts[`page:${title}`]||'')}</textarea><button class="primary-btn" id="savePageNote">Save Private Note</button></div>`);document.getElementById('savePageNote').onclick=()=>{state.drafts[`page:${title}`]=document.getElementById('pageNote').value;saveState();toast('Page note saved locally');};addHistory(title,currentCourse.code);}

function openLecture(c,lectureId){
  const l=c.lectures[lectureId];if(!l)return toast('Lecture unavailable');const key=`lecture:${c.id}:${lectureId}`;const previous=state.quizChecks[key]||{};
  showModal(`<div class="modal-kicker">${escapeHTML(c.code)} · ${escapeHTML(l.week)} · ${escapeHTML(l.duration)}</div><h2>${escapeHTML(l.title)}</h2><div class="lecture-layout"><main><section class="lecture-objectives"><h3>Learning objectives</h3><ul>${l.objectives.map(x=>`<li>${escapeHTML(x)}</li>`).join('')}</ul></section>${l.sections.map((s,i)=>`<section class="lecture-section"><div class="lecture-num">${i+1}</div><div><h3>${escapeHTML(s[0])}</h3><p>${escapeHTML(s[1])}</p></div></section>`).join('')}${lectureId==='engr-l3'?`<section class="beam-tool"><div><h3>Interactive Tool · Simply Supported Beam Reactions</h3><p>Enter a beam length, one downward point load, and the load position measured from the left support. The tool uses moment equilibrium about the left support, then vertical-force equilibrium.</p></div><div class="beam-inputs"><label>Beam length L <input id="beamLength" type="number" min="0.1" step="0.1" value="10"><span>ft</span></label><label>Point load P <input id="beamLoad" type="number" min="0" step="10" value="1000"><span>lb</span></label><label>Load position x <input id="beamPosition" type="number" min="0" step="0.1" value="5"><span>ft from A</span></label><button class="primary-btn" id="calcBeam">Calculate reactions</button></div><div class="beam-visual"><div class="beam-line"><i class="support left">▲</i><i class="support right">▲</i><i class="load-arrow" id="loadArrow">↓<small>P</small></i></div><div id="beamResult" class="beam-result">For L = 10 ft, P = 1,000 lb at x = 5 ft: <strong>Ay = 500 lb, By = 500 lb</strong></div></div></section>`:''}<section class="knowledge-check"><h3>Knowledge Check</h3><p>Submit to check your answers. Results are saved locally.</p>${l.check.map((q,i)=>`<fieldset><legend>${i+1}. ${escapeHTML(q.q)}</legend>${q.options.map((o,j)=>`<label><input type="radio" name="kc${i}" value="${j}" ${String(previous.answers?.[i])===String(j)?'checked':''}> ${escapeHTML(o)}</label>`).join('')}</fieldset>`).join('')}<button class="primary-btn" id="submitKnowledgeCheck">Check Answers</button><div id="kcResult" class="quiz-result">${previous.score!=null?`Previous score: ${previous.score}/${l.check.length}`:''}</div></section></main><aside class="lecture-aside"><h4>Key terms</h4>${l.keyTerms.map(k=>`<span class="term-chip">${escapeHTML(k)}</span>`).join('')}<button class="outline-btn full" id="lectureNotesBtn">Save lecture note</button></aside></div>`,true);
  document.getElementById('submitKnowledgeCheck').onclick=()=>{const answers=l.check.map((_,i)=>document.querySelector(`input[name="kc${i}"]:checked`)?.value??'');const score=l.check.reduce((n,q,i)=>n+(Number(answers[i])===q.answer?1:0),0);state.quizChecks[key]={answers,score};saveState();document.getElementById('kcResult').innerHTML=`<strong>${score}/${l.check.length} correct.</strong> ${score===l.check.length?'Nice work.':'Review the lecture sections and try again.'}`;};
  const beamBtn=document.getElementById('calcBeam');if(beamBtn)beamBtn.onclick=()=>{const L=Number(document.getElementById('beamLength').value),P=Number(document.getElementById('beamLoad').value),x=Number(document.getElementById('beamPosition').value);if(!(L>0)||P<0||x<0||x>L){document.getElementById('beamResult').innerHTML='<strong>Check the inputs.</strong> Load position must be between 0 and the beam length.';return;}const By=P*x/L,Ay=P-By;const arrow=document.getElementById('loadArrow');arrow.style.left=`${Math.max(0,Math.min(100,(x/L)*100))}%`;document.getElementById('beamResult').innerHTML=`Moment about A: By(${L.toFixed(2)}) − ${P.toFixed(1)}(${x.toFixed(2)}) = 0<br><strong>Ay = ${Ay.toFixed(1)} lb upward · By = ${By.toFixed(1)} lb upward</strong>`;};
  document.getElementById('lectureNotesBtn').onclick=()=>{const existing=state.drafts[`${key}:note`]||'';showModal(`<div class="modal-kicker">Private Lecture Note</div><h2>${escapeHTML(l.title)}</h2><textarea id="lectureNoteEditor" class="large-textarea" placeholder="Your note…">${escapeHTML(existing)}</textarea><button class="primary-btn" id="saveLectureNote">Save Note</button>`);document.getElementById('saveLectureNote').onclick=()=>{state.drafts[`${key}:note`]=document.getElementById('lectureNoteEditor').value;saveState();toast('Lecture note saved locally');};};
  addHistory(l.title,c.code);
}

function renderQuestion(q,i,value=''){
  if(q.type==='mc')return `<fieldset class="assignment-question"><legend>${escapeHTML(q.q)}</legend>${q.options.map((o,j)=>`<label><input type="radio" name="q${i}" value="${j}" ${String(value)===String(j)?'checked':''}> ${escapeHTML(o)}</label>`).join('')}</fieldset>`;
  if(q.type==='textarea')return `<label class="assignment-question"><strong>${escapeHTML(q.q)}</strong><textarea name="q${i}" placeholder="${escapeHTML(q.placeholder||'Type your response…')}">${escapeHTML(value||'')}</textarea></label>`;
  return `<label class="assignment-question"><strong>${escapeHTML(q.q)}</strong><input type="text" name="q${i}" value="${escapeHTML(value||'')}" placeholder="${escapeHTML(q.placeholder||'Type your answer…')}"></label>`;
}
function collectAnswers(a){return a.questions.map((q,i)=>q.type==='mc'?(document.querySelector(`input[name="q${i}"]:checked`)?.value??''):(document.querySelector(`[name="q${i}"]`)?.value||''));}
function openAssignment(c,a){
  if(!a)return;const s=submission(c,a),answers=s.answers||[];const submitted=s.submitted;
  showModal(`<div class="assignment-header"><div><div class="modal-kicker">${escapeHTML(c.code)} · ${escapeHTML(a.group)}</div><h2>${escapeHTML(a.title)}</h2><p>Due ${escapeHTML(a.due)} · ${a.points} points</p></div><div class="status-pill ${submitted?'done':'open'}">${submitted?'Submitted':'Open'}</div></div>${submitted&&s.score!=null?`<div class="feedback-banner"><strong>Score: ${s.score}/${a.points}</strong><span>${escapeHTML(s.feedback||'')}</span><small>Submitted ${escapeHTML(s.submittedAt||'')}</small></div>`:''}<div class="assignment-tabs"><button class="active" data-assignment-tab="details">Details</button><button data-assignment-tab="rubric">Rubric</button><button data-assignment-tab="submission">${submitted?'Submission':'Submit Assignment'}</button></div><div id="assignmentTabBody"></div>`,true);
  const renderTab=tab=>{
    document.querySelectorAll('[data-assignment-tab]').forEach(b=>b.classList.toggle('active',b.dataset.assignmentTab===tab));const body=document.getElementById('assignmentTabBody');
    if(tab==='details') body.innerHTML=`<div class="rich-copy"><h3>Instructions</h3><p>${escapeHTML(a.instructions||'Complete the questions below and submit your responses.')}</p><h3>Work</h3><div class="assignment-work">${a.questions.map((q,i)=>renderQuestion(q,i,answers[i])).join('')}</div>${!submitted?'<button class="primary-btn" id="saveAssignmentDraft">Save Draft</button>':'<p class="muted">This submitted attempt is shown in the Submission tab.</p>'}</div>`;
    if(tab==='rubric') body.innerHTML=a.rubric?`<table class="rubric-table"><thead><tr><th>Criterion</th><th>Pts</th><th>Expectation</th></tr></thead><tbody>${a.rubric.map(r=>`<tr><td>${escapeHTML(r[0])}</td><td>${r[1]}</td><td>${escapeHTML(r[2])}</td></tr>`).join('')}</tbody></table>`:`<div class="empty-state"><h3>${a.kind==='quiz'?'Auto-scored quiz':'No detailed rubric'}</h3><p>${a.kind==='quiz'?'Each multiple-choice question is worth an equal share of the points.':'Evaluation follows the assignment instructions.'}</p></div>`;
    if(tab==='submission') body.innerHTML=`<div class="rich-copy"><h3>${submitted?'Submitted Work':'Submit Your Work'}</h3><div class="assignment-work">${a.questions.map((q,i)=>renderQuestion(q,i,answers[i])).join('')}</div>${a.kind!=='quiz'?`<label class="file-field"><strong>Optional attachment</strong><input type="file" id="assignmentFile"><small>${s.fileName?`Previously selected: ${escapeHTML(s.fileName)}`:'Files remain local; nothing is uploaded to a school.'}</small></label>`:''}<div class="submission-actions"><button class="outline-btn" id="saveAssignmentDraft2">Save Draft</button><button class="primary-btn" id="submitAssignment">${submitted?'Resubmit Work':'Submit Assignment'}</button></div></div>`;
    bindAssignmentTabActions(tab);
  };
  const bindAssignmentTabActions=tab=>{
    const saveDraft=()=>{const ans=collectAnswers(a);state.submissions[`${c.id}:${a.id}`]={...s,answers:ans,submitted:s.submitted||false};saveState();toast('Draft saved locally');};
    document.getElementById('saveAssignmentDraft')?.addEventListener('click',saveDraft);document.getElementById('saveAssignmentDraft2')?.addEventListener('click',saveDraft);
    document.getElementById('submitAssignment')?.addEventListener('click',()=>{const ans=collectAnswers(a);let score=null,feedback='Submitted locally. Instructor feedback is pending.';if(a.kind==='quiz'){let correct=0;a.questions.forEach((q,i)=>{if(Number(ans[i])===q.answer)correct++;});score=Math.round(a.points*(correct/a.questions.length));feedback=`Auto-check: ${correct}/${a.questions.length} correct.`;}const file=document.getElementById('assignmentFile')?.files?.[0];state.submissions[`${c.id}:${a.id}`]={submitted:true,answers:ans,fileName:file?.name||s.fileName||'',submittedAt:new Date().toLocaleString(),score,feedback};saveState();toast('Assignment submitted locally');closeModal();renderCourseTab(currentCourseTab);renderDashboard();});
  };
  document.querySelectorAll('[data-assignment-tab]').forEach(b=>b.onclick=()=>renderTab(b.dataset.assignmentTab));renderTab('details');addHistory(a.title,c.code);
}

function openDiscussion(c,d){
  const local=state.discussionPosts[`${c.id}:${d.id}`]||[];const posts=[...d.posts,...local];
  showModal(`<div class="modal-kicker">${escapeHTML(c.code)} · Discussion</div><h2>${escapeHTML(d.title)}</h2><div class="discussion-prompt"><strong>Prompt</strong><p>${escapeHTML(d.prompt)}</p><small>Due ${escapeHTML(d.due)} · ${d.points} points</small></div><div class="discussion-toolbar"><button class="primary-btn" id="newDiscussionPost">Reply to Topic</button><span>${posts.length} posts</span></div><div class="discussion-thread">${posts.map((p,i)=>`<article class="discussion-post"><div class="person-avatar">${initials(p.name)}</div><div><header><strong>${escapeHTML(p.name)}</strong><small>${escapeHTML(p.time||'Just now')}</small></header><p>${escapeHTML(p.text)}</p>${(p.replies||[]).map(r=>`<div class="nested-reply"><strong>${escapeHTML(r.name)}</strong><small>${escapeHTML(r.time||'')}</small><p>${escapeHTML(r.text)}</p></div>`).join('')}<button class="text-link reply-post" data-post="${i}">Reply</button></div></article>`).join('')}</div>`,true);
  document.getElementById('newDiscussionPost').onclick=()=>discussionComposer(c,d,null);
  document.querySelectorAll('.reply-post').forEach(b=>b.onclick=()=>discussionComposer(c,d,Number(b.dataset.post)));
  addHistory(d.title,c.code);
}
function discussionComposer(c,d,parentIndex){
  const name=state.profile.name||'Student';showModal(`<div class="modal-kicker">${parentIndex==null?'Reply to Topic':'Reply to Post'}</div><h2>${escapeHTML(d.title)}</h2><label class="assignment-question"><strong>Posting as ${escapeHTML(name)}</strong><textarea id="discussionText" placeholder="Write your response…"></textarea></label><button class="primary-btn" id="postDiscussionReply">Post Reply</button>`);
  document.getElementById('postDiscussionReply').onclick=()=>{const text=document.getElementById('discussionText').value.trim();if(!text)return toast('Write a response first');const key=`${c.id}:${d.id}`;state.discussionPosts[key]=state.discussionPosts[key]||[];if(parentIndex==null){state.discussionPosts[key].push({name,time:'Just now',text,replies:[]});}else{const baseCount=d.posts.length;if(parentIndex<baseCount){state.discussionPosts[key].push({name,time:'Just now',text:`Reply to ${d.posts[parentIndex].name}: ${text}`,replies:[]});}else{const idx=parentIndex-baseCount;state.discussionPosts[key][idx].replies=state.discussionPosts[key][idx].replies||[];state.discussionPosts[key][idx].replies.push({name,time:'Just now',text});}}saveState();toast('Discussion reply posted locally');openDiscussion(c,d);};
}

function openResources(ids){
  const rs=ids.map(id=>RESOURCES[id]).filter(Boolean);showModal(`<div class="modal-kicker">External Learning</div><h2>Public Learning Resources</h2><p class="resource-disclaimer">These links open public learning resources in a new tab.</p><div class="resource-grid">${rs.map((r,i)=>`<article class="resource-card"><div class="resource-provider">${escapeHTML(r.provider)}</div><h3>${escapeHTML(r.title)}</h3><p>${escapeHTML(r.desc)}</p>${r.embed?`<div class="video-frame"><iframe src="${r.embed}" title="${escapeHTML(r.title)}" loading="lazy" allowfullscreen></iframe></div>`:''}<a class="primary-btn resource-anchor" href="${r.url}" target="_blank" rel="noopener noreferrer">Open ${escapeHTML(r.provider.split(' · ')[0])} ↗</a></article>`).join('')}</div>`,true);addHistory('External Learning',currentCourse.code);
}

function openZoom(c,z){
  if(!z)return;const isToday=z.status==='today';showModal(`<div class="modal-kicker">${escapeHTML(c.code)} · Meeting</div><h2>${escapeHTML(z.title)}</h2><div class="meeting-meta"><div><small>Date</small><strong>${escapeHTML(z.date)}</strong></div><div><small>Time</small><strong>${escapeHTML(z.time)}</strong></div><div><small>Status</small><strong>${z.status==='recording'?'Completed':z.status==='today'?'Today':'Upcoming'}</strong></div></div><section class="agenda-card"><h3>Agenda</h3><ol>${z.agenda.map(x=>`<li>${escapeHTML(x)}</li>`).join('')}</ol></section>${z.status==='recording'?`<section class="recording-notes"><h3>Recording Notes</h3>${(z.notes||[]).map(n=>`<p>▶ ${escapeHTML(n)}</p>`).join('')}</section>`:''}${isToday?`<button class="primary-btn big-action" id="joinMeetingDemo">Join Class</button>`:''}${z.status==='upcoming'?`<button class="outline-btn big-action" id="calendarMeeting">Add reminder</button>`:''}`,true);
  document.getElementById('joinMeetingDemo')?.addEventListener('click',()=>openMeetingRoom(c,z));document.getElementById('calendarMeeting')?.addEventListener('click',()=>toast('Reminder added to calendar'));addHistory(z.title,c.code);
}
function openMeetingRoom(c,z){
  showModal(`<div class="fake-meeting"><div class="meeting-top"><span>● LIVE</span><strong>${escapeHTML(z.title)}</strong><small>${escapeHTML(z.time)}</small></div><div class="meeting-stage"><div class="speaker-tile"><div class="speaker-avatar">MC</div><strong>Prof. Maya Chen</strong><span>Screen sharing: Week 3 FBD Notes</span></div><div class="shared-slide"><small>Slide 18</small><h2>Free-Body Diagram Checklist</h2><ol><li>Choose the system boundary.</li><li>Remove the surroundings.</li><li>Replace supports/contacts with external reactions.</li><li>Add applied loads and weight.</li><li>Label axes and dimensions needed for analysis.</li><li>Check that every force acts on the isolated system.</li></ol></div></div><div class="meeting-controls"><button id="muteDemo">🎙 Mute</button><button id="cameraDemo">📷 Start Video</button><button id="handDemo">✋ Raise Hand</button><button id="chatDemo">💬 Chat</button><button class="danger" id="leaveDemo">Leave</button></div><div id="meetingChat" class="meeting-chat" hidden><div><strong>Alex Morgan</strong><span>Does a pin have a moment reaction?</span></div><div><strong>Prof. Maya Chen</strong><span>Not in the ideal 2D model — a pin has horizontal and vertical reaction components, but no resisting moment.</span></div><label><input id="meetingChatInput" placeholder="Message everyone"><button id="sendMeetingChat">Send</button></label></div></div>`,true);
  document.getElementById('muteDemo').onclick=e=>{e.currentTarget.classList.toggle('active-control');e.currentTarget.textContent=e.currentTarget.classList.contains('active-control')?'🔇 Unmute':'🎙 Mute';};
  document.getElementById('cameraDemo').onclick=e=>{e.currentTarget.classList.toggle('active-control');e.currentTarget.textContent=e.currentTarget.classList.contains('active-control')?'📷 Stop Video':'📷 Start Video';};
  document.getElementById('handDemo').onclick=e=>{e.currentTarget.classList.toggle('active-control');e.currentTarget.textContent=e.currentTarget.classList.contains('active-control')?'✋ Hand Raised':'✋ Raise Hand';toast(e.currentTarget.classList.contains('active-control')?'Hand raised':'Hand lowered');};
  document.getElementById('chatDemo').onclick=()=>{const ch=document.getElementById('meetingChat');ch.hidden=!ch.hidden;};
  document.getElementById('sendMeetingChat').onclick=()=>{const inp=document.getElementById('meetingChatInput');if(!inp.value.trim())return;const div=document.createElement('div');div.innerHTML=`<strong>${escapeHTML(state.profile.name)}</strong><span>${escapeHTML(inp.value.trim())}</span>`;document.getElementById('meetingChat').insertBefore(div,document.getElementById('meetingChat').lastElementChild);inp.value='';};
  document.getElementById('leaveDemo').onclick=()=>{closeModal();toast('Left class');};
}

function openAnnouncement(id){const a=ANNOUNCEMENTS.find(x=>x.id===id);if(!a)return;showModal(`<div class="modal-kicker">Announcement · ${escapeHTML(a.course)}</div><h2>${escapeHTML(a.title)}</h2><small>${escapeHTML(a.time)}</small><div class="rich-copy"><p>${escapeHTML(a.body)}</p></div><button class="primary-btn" id="announcementTarget">Open Related Course Item</button>`);document.getElementById('announcementTarget').onclick=()=>{closeModal();if(a.target?.course)openCourse(a.target.course,a.target.tab||'home');if(a.target?.assignment)setTimeout(()=>openAssignment(courseById(a.target.course),assignmentById(courseById(a.target.course),a.target.assignment)),0);};}

function downloadDemoFile(index){
  const c=currentCourse;const contents=[
    `PERSONAL STUDY MATERIAL\n${c.full}\nInstructor: ${c.instructor}\nMeeting: ${c.schedule}`,
    `WEEK 1 NOTES - DEMO\nNeed statements, criteria, constraints, stakeholders, and trade-offs.\n\nA good problem statement describes the need without locking in a solution.`,
    `Criterion,Weight,Concept A,Concept B\nShade Coverage,30%,4,5\nAccessibility,30%,5,4\nCost,25%,4,2\nMaintenance,15%,3,4`,
    `WEEK 3 FBD PRACTICE\n1) 1200-lb midspan beam on two supports. Find reactions.\n2) Trace a floor load to soil.\n3) Describe the FBD of a wall shelf.`,
    `PRACTICE RUBRIC REFERENCE\nShow reasoning. Label units. Identify assumptions. Use clear diagrams. Explain trade-offs.`
  ];
  const names=['Syllabus_Fall_2026_PRACTICE.txt','Week_01_Notes_PRACTICE.txt','Week_02_Decision_Matrix_PRACTICE.csv','Week_03_FBD_Practice.txt','Assignment_Rubrics_PRACTICE.txt'];const blob=new Blob([contents[index]],{type:'text/plain'});const u=URL.createObjectURL(blob);const a=document.createElement('a');a.href=u;a.download=names[index];a.click();URL.revokeObjectURL(u);toast('Study file created');
}

function renderCalendar(){
  const [y,m]=state.calendarMonth.split('-').map(Number);const first=new Date(y,m-1,1),days=new Date(y,m,0).getDate(),start=first.getDay();
  const events={};const add=(day,text,cid,type='class')=>{events[day]=events[day]||[];events[day].push({text,cid,type});};
  if(y===2026&&m===9){[1,8,15,22,29].forEach(d=>add(d,'ENGR 10 · 6:00–8:30 PM','engr10','class'));add(8,'ENGR 10 · Exit Ticket due 9:00 PM','engr10','due');add(9,'ENGR 10 · Practice Quiz due','engr10','due');add(10,'ENGR 10 · HW 3 + Discussion due','engr10','due');add(10,'EWRT 1A · Zoom 7:00 PM','ewrt1a','class');add(11,'PHYS 4A · HW 3 due','phys4a','due');add(13,'MATH 1A · HW 2 due','math1a','due');add(13,'EWRT 1A · Essay Draft due','ewrt1a','due');[3,10,17,24].forEach(d=>add(d,'PHYS 4A · 2:00–5:15 PM','phys4a','class'));}
  const cells=[];for(let i=0;i<start;i++)cells.push('<div class="calendar-day outside"></div>');for(let d=1;d<=days;d++){const today=y===2026&&m===9&&d===8;cells.push(`<div class="calendar-day ${today?'today':''}"><span class="day-num">${d}</span>${(events[d]||[]).map((e,i)=>`<button class="cal-event ${e.type}" data-cal-course="${e.cid}">${escapeHTML(e.text)}</button>`).join('')}</div>`);}while(cells.length%7)cells.push('<div class="calendar-day outside"></div>');
  const title=new Date(y,m-1,1).toLocaleString('en-US',{month:'long',year:'numeric'});document.getElementById('calendarGrid').innerHTML=`<div class="calendar-month-title">${title}</div><div class="calendar-weekdays">${['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(x=>`<div>${x}</div>`).join('')}</div><div class="calendar-days">${cells.join('')}</div>`;
  document.getElementById('calendarSidebar').innerHTML=`<h3>Calendars</h3>${courses().map(c=>`<label><span style="background:${c.color}"></span><input type="checkbox" checked> ${escapeHTML(c.code)}</label>`).join('')}<hr><h3>Week 3</h3><p>ENGR 10 meets every Tuesday, 6:00–8:30 PM.</p>`;
  document.querySelectorAll('[data-cal-course]').forEach(b=>b.onclick=()=>openCourse(b.dataset.calCourse,b.classList.contains('due')?'assignments':'home'));
}
const calButtons=document.querySelectorAll('.calendar-controls .outline-btn');
calButtons[0].onclick=()=>shiftMonth(-1);calButtons[1].onclick=()=>{state.calendarMonth='2026-09';saveState();renderCalendar();};calButtons[2].onclick=()=>shiftMonth(1);
function shiftMonth(delta){let [y,m]=state.calendarMonth.split('-').map(Number);m+=delta;if(m<1){m=12;y--;}if(m>12){m=1;y++;}state.calendarMonth=`${y}-${String(m).padStart(2,'0')}`;saveState();renderCalendar();}

function renderInbox(){
  const list=MESSAGES.map(m=>({...m,unread:m.unread&&!state.messagesRead[m.id]}));document.getElementById('inboxList').innerHTML=list.map(m=>`<button class="message-row ${m.unread?'unread':''}" data-message="${m.id}"><div class="msg-avatar">${m.initials}</div><div class="msg-from">${escapeHTML(m.from)}<small>${escapeHTML(m.course)}</small></div><div class="msg-subject"><strong>${escapeHTML(m.subject)}</strong><span>${escapeHTML(m.body.slice(0,80))}…</span></div><time>${escapeHTML(m.time)}</time></button>`).join('');document.querySelectorAll('[data-message]').forEach(b=>b.onclick=()=>openMessage(b.dataset.message));
}
function openMessage(id){const m=MESSAGES.find(x=>x.id===id);state.messagesRead[id]=true;saveState();renderInbox();showModal(`<div class="modal-kicker">Inbox · ${escapeHTML(m.course)}</div><h2>${escapeHTML(m.subject)}</h2><div class="message-detail"><div class="person-avatar">${m.initials}</div><div><strong>${escapeHTML(m.from)}</strong><small>${escapeHTML(m.time)}</small></div></div><div class="rich-copy"><p>${escapeHTML(m.body)}</p></div><button class="primary-btn" id="replyMessage">Reply</button>`);document.getElementById('replyMessage').onclick=()=>composeMessage(m);}
function composeMessage(replyTo=null){showModal(`<div class="modal-kicker">Compose Message</div><h2>${replyTo?'Reply':'New Message'}</h2><div class="compose-form"><label>To<input id="composeTo" value="${escapeHTML(replyTo?.from||'')}"></label><label>Subject<input id="composeSubject" value="${escapeHTML(replyTo?`Re: ${replyTo.subject}`:'')}"></label><label>Message<textarea id="composeBody" placeholder="Type a message…"></textarea></label><button class="primary-btn" id="sendCompose">Send Message</button></div>`);document.getElementById('sendCompose').onclick=()=>{if(!document.getElementById('composeBody').value.trim())return toast('Write a message first');toast('Message sent locally');closeModal();};}
document.querySelector('.inbox-title .primary-btn').onclick=()=>composeMessage();
document.querySelectorAll('.inbox-toolbar .outline-btn').forEach((b,i)=>b.onclick=()=>toast(i===2?'Inbox refreshed':'Filter applied'));

function renderHistory(){document.getElementById('historyList').innerHTML=state.history.length?state.history.map(h=>`<div class="history-row"><div>↺</div><div><strong>${escapeHTML(h.label)}</strong><small>${escapeHTML(h.meta||'')}</small></div><time>${escapeHTML(h.time)}</time></div>`).join(''):'<div class="empty-state"><h3>No recent activity yet</h3><p>Open courses, lectures, and assignments to populate history.</p></div>';}

function openSearch(){
  const index=[];for(const c of courses()){index.push({title:`${c.code} - ${c.title}`,sub:c.schedule,action:()=>openCourse(c.id,'home')});for(const a of c.assignments)index.push({title:a.title,sub:`${c.code} · Assignment`,action:()=>{openCourse(c.id,'assignments');setTimeout(()=>openAssignment(courseById(c.id),assignmentById(courseById(c.id),a.id)),0);}});for(const [id,l] of Object.entries(c.lectures||{}))index.push({title:l.title,sub:`${c.code} · Lecture`,action:()=>{openCourse(c.id,'modules');setTimeout(()=>openLecture(courseById(c.id),id),0);}});for(const d of c.discussions||[])index.push({title:d.title,sub:`${c.code} · Discussion`,action:()=>{openCourse(c.id,'discussions');setTimeout(()=>openDiscussion(courseById(c.id),discussionById(courseById(c.id),d.id)),0);}});}
  showModal(`<div class="modal-kicker">Global Search</div><h2>Search this portal</h2><input id="globalSearchInput" class="search-input" autofocus placeholder="Try “free body”, “homework”, “ENGR 10”…"><div id="globalSearchResults" class="search-results"></div>`);
  const input=document.getElementById('globalSearchInput'),results=document.getElementById('globalSearchResults');const run=()=>{const q=input.value.trim().toLowerCase();const found=q?index.filter(x=>(x.title+' '+x.sub).toLowerCase().includes(q)).slice(0,12):index.slice(0,8);results.innerHTML=found.map((x,i)=>`<button data-search-index="${i}"><strong>${escapeHTML(x.title)}</strong><small>${escapeHTML(x.sub)}</small></button>`).join('')||'<p class="muted">No matches.</p>';document.querySelectorAll('[data-search-index]').forEach(b=>b.onclick=()=>{const x=found[Number(b.dataset.searchIndex)];closeModal();x.action();});};input.oninput=run;run();setTimeout(()=>input.focus(),0);
}
document.getElementById('searchBtn').onclick=openSearch;

function renderNotifications(){
  const panel=document.getElementById('notificationPanel');panel.innerHTML=`<div class="notif-head"><strong>Notifications</strong><span>Week 3</span></div>${ANNOUNCEMENTS.slice(0,4).map(a=>`<button class="notif-row" data-notif="${a.id}"><span>●</span><div><strong>${escapeHTML(a.title)}</strong><small>${escapeHTML(a.course)} · ${escapeHTML(a.time)}</small></div></button>`).join('')}`;panel.querySelectorAll('[data-notif]').forEach(b=>b.onclick=()=>{panel.classList.remove('open');openAnnouncement(b.dataset.notif);});
}
const notificationBtn=document.getElementById('notificationBtn');notificationBtn.onclick=e=>{e.stopPropagation();const p=document.getElementById('notificationPanel');p.classList.toggle('open');p.setAttribute('aria-hidden',String(!p.classList.contains('open')));};document.addEventListener('click',e=>{const p=document.getElementById('notificationPanel');if(!p.contains(e.target)&&e.target!==notificationBtn)p.classList.remove('open');});

// Replace remaining generic/demo buttons with meaningful local behavior.
document.querySelectorAll('#help .help-box').forEach((box,i)=>box.onclick=()=>{if(i===0)showModal('<div class="modal-kicker">Study Guide</div><h2>How to explore your courses</h2><ol class="guide-list"><li>Open ENGR 10 → Study Center to review prior work and lectures.</li><li>Open CONST 20 → Modules and try the drawing, concrete, and room-takeoff labs.</li><li>Open any completed assignment to inspect submitted work and instructor feedback.</li><li>Retry lecture knowledge checks and use flashcards/private notes.</li><li>Open a discussion and add a local reply, then open a Zoom-style class room.</li><li>Use global Search, Calendar, Inbox, Files, and History to explore the semester.</li></ol>');if(i===1)setView('account');if(i===2)showModal('<div class="modal-kicker">Local Use</div><h2>Browser storage</h2><p>Your notes, drafts, messages, and settings are stored only in this browser.</p>');});

renderNotifications();renderProfile();renderDashboard();renderAllCourses();renderCalendar();renderInbox();renderHistory();
setView('dashboard');
