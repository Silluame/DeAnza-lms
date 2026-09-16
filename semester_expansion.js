// V8 · Full Fall Semester Expansion (Sep–Dec 2026)
// Extends every course through the end of December while preserving the personal-learning disclaimer.

(() => {
'use strict';

const SEM_PLAYLIST_ID='PL-MQNpO8Wb7BMDAVrbIM9kS-yEfyp52Mz';
const SEM_PLAYLIST_URL='https://youtube.com/playlist?list='+SEM_PLAYLIST_ID;
const SEM_PLAYLIST_EMBED='https://www.youtube.com/embed/videoseries?list='+SEM_PLAYLIST_ID;
const SEM_WEEK_META={"4":{"start":"2026-09-14","end":"2026-09-20","label":"Sep 14\u2013Sep 20","due":"Sep 20 at 11:59 PM","quizDue":"Sep 19 at 11:59 PM"},"5":{"start":"2026-09-21","end":"2026-09-27","label":"Sep 21\u2013Sep 27","due":"Sep 27 at 11:59 PM","quizDue":"Sep 26 at 11:59 PM"},"6":{"start":"2026-09-28","end":"2026-10-04","label":"Sep 28\u2013Oct 4","due":"Oct 4 at 11:59 PM","quizDue":"Oct 3 at 11:59 PM"},"7":{"start":"2026-10-05","end":"2026-10-11","label":"Oct 5\u2013Oct 11","due":"Oct 11 at 11:59 PM","quizDue":"Oct 10 at 11:59 PM"},"8":{"start":"2026-10-12","end":"2026-10-18","label":"Oct 12\u2013Oct 18","due":"Oct 18 at 11:59 PM","quizDue":"Oct 17 at 11:59 PM"},"9":{"start":"2026-10-19","end":"2026-10-25","label":"Oct 19\u2013Oct 25","due":"Oct 25 at 11:59 PM","quizDue":"Oct 24 at 11:59 PM"},"10":{"start":"2026-10-26","end":"2026-11-01","label":"Oct 26\u2013Nov 1","due":"Nov 1 at 11:59 PM","quizDue":"Oct 31 at 11:59 PM"},"11":{"start":"2026-11-02","end":"2026-11-08","label":"Nov 2\u2013Nov 8","due":"Nov 8 at 11:59 PM","quizDue":"Nov 7 at 11:59 PM"},"12":{"start":"2026-11-09","end":"2026-11-15","label":"Nov 9\u2013Nov 15","due":"Nov 15 at 11:59 PM","quizDue":"Nov 14 at 11:59 PM"},"13":{"start":"2026-11-16","end":"2026-11-22","label":"Nov 16\u2013Nov 22","due":"Nov 22 at 11:59 PM","quizDue":"Nov 21 at 11:59 PM"},"14":{"start":"2026-11-23","end":"2026-11-29","label":"Nov 23\u2013Nov 29","due":"Nov 29 at 11:59 PM","quizDue":"Nov 28 at 11:59 PM"},"15":{"start":"2026-11-30","end":"2026-12-06","label":"Nov 30\u2013Dec 6","due":"Dec 6 at 11:59 PM","quizDue":"Dec 5 at 11:59 PM"},"16":{"start":"2026-12-07","end":"2026-12-13","label":"Dec 7\u2013Dec 13","due":"Dec 13 at 11:59 PM","quizDue":"Dec 12 at 11:59 PM"},"17":{"start":"2026-12-14","end":"2026-12-20","label":"Dec 14\u2013Dec 20","due":"Dec 20 at 11:59 PM","quizDue":"Dec 19 at 11:59 PM"},"18":{"start":"2026-12-21","end":"2026-12-27","label":"Dec 21\u2013Dec 27","due":"Dec 27 at 11:59 PM","quizDue":"Dec 26 at 11:59 PM"}};
const SEM_PLANS={"engr10":[[4,"Equilibrium Systems & Trusses",["method of joints","zero-force members","tension vs compression","load paths through trusses"],"Analyze a small roof truss and explain how loads travel to supports."],[5,"Shear & Moment Diagrams",["distributed loads","shear-force diagrams","bending-moment diagrams","sign conventions"],"Build V(x) and M(x) diagrams for a simply supported beam with mixed loading."],[6,"Stress, Strain & Material Behavior",["normal stress","normal strain","elastic modulus","yield vs ultimate strength"],"Compare steel, wood, and aluminum responses under axial loading."],[7,"Deflection & Serviceability",["stiffness","beam deflection","serviceability limits","strength vs usability"],"Evaluate a floor beam that is safe in strength but too flexible for comfort."],[8,"Surveying, Measurement & Error",["leveling","distance/angle measurement","significant figures","propagation of measurement error"],"Create a simple campus elevation survey and report uncertainty."],[9,"Site Grading & Drainage",["contours","slope","spot elevations","positive drainage"],"Develop a grading concept that drains a small site away from a building."],[10,"Transportation Systems",["flow, speed and density","capacity","level of service","intersection conflict points"],"Compare two intersection concepts using safety and operations criteria."],[11,"Hydrology & Stormwater",["watersheds","rational method concepts","runoff coefficients","detention vs conveyance"],"Estimate relative peak runoff before and after adding impervious area."],[12,"Geotechnical Foundations",["soil classification","bearing capacity","settlement","shallow foundation behavior"],"Select preliminary foundation questions for a small one-story building."],[13,"Sustainability & Life-Cycle Thinking",["embodied carbon","operational impacts","life-cycle cost","resilience"],"Compare two material/system alternatives beyond first cost."],[14,"Project Planning, Cost & Schedule",["work breakdown structure","critical path concepts","contingency","risk register"],"Create a mini project plan with dependencies, costs, and top risks."],[15,"Civil Drawings & Technical Communication",["plan/profile/section","dimensioning","technical notes","revision control"],"Prepare a clear one-sheet concept package and check it for constructability."],[16,"Capstone Design Studio",["requirements traceability","concept refinement","calculation package","design review"],"Assemble a civil design concept with calculations, drawings, cost, schedule, and risks."],[17,"Final Presentation & Comprehensive Review",["technical presentation","design defense","cumulative statics","professional reflection"],"Present the capstone and complete a cumulative final covering design reasoning and core mechanics."],[18,"Winter Extension · Portfolio & Next-Step Skills",["portfolio curation","spreadsheet modeling","CAD practice","transfer-ready study plan"],"Package your strongest work and identify what to learn next before the next engineering course."]],"math1a":[[4,"Advanced Derivative Rules",["product and quotient rules","chain rule","implicit differentiation","higher derivatives"],"Differentiate mixed algebraic/trigonometric expressions and explain rule choice."],[5,"Related Rates",["rates connected by equations","units in derivatives","geometric constraints","interpreting signs"],"Model a changing ladder, tank, or shadow problem from a diagram."],[6,"Extrema & Optimization",["critical points","first derivative test","second derivative test","optimization modeling"],"Turn a word problem into an objective function and justify the feasible domain."],[7,"Mean Value Theorem & Curve Analysis",["Rolle's theorem","mean value theorem","increasing/decreasing intervals","concavity and inflection"],"Build a full curve sketch from derivative information."],[8,"Antiderivatives & Motion",["antiderivatives","initial conditions","position/velocity/acceleration","families of functions"],"Recover position from velocity data and use an initial condition."],[9,"Definite Integrals & Accumulation",["Riemann sums","signed area","definite integral","net change"],"Estimate accumulated change from a table and interpret the units."],[10,"Fundamental Theorem of Calculus",["FTC Part 1","FTC Part 2","accumulation functions","evaluation of integrals"],"Connect area accumulation to derivatives and compute exact net change."],[11,"Substitution & Reverse Chain Rule",["u-substitution","pattern recognition","bounds under substitution","checking by differentiation"],"Integrate composite expressions and verify the result."],[12,"Area Between Curves",["intersection points","top-minus-bottom","right-minus-left","piecewise setup"],"Set up and evaluate area between two functions."],[13,"Volumes of Solids",["disk method","washer method","shell method","choosing an axis"],"Model a solid of revolution and compare two valid setups."],[14,"Differential Equations & Growth Models",["separable equations","exponential growth/decay","initial value problems","model interpretation"],"Build a simple population/cooling model and interpret parameters."],[15,"Logarithms, Exponentials & Inverse Functions",["derivatives of ln and exp","log differentiation","inverse derivative ideas","applications"],"Differentiate and model exponential/logarithmic relationships."],[16,"Cumulative Applications Review",["optimization","related rates","accumulation","model validation"],"Solve mixed application sets without being told which calculus tool to use."],[17,"Comprehensive Final",["limits","derivatives","applications","integrals"],"Complete a cumulative final and write a one-page error-analysis reflection."],[18,"Winter Extension · Bridge to Calculus II",["integration fluency","sequences preview","parametric ideas preview","study systems"],"Complete optional bridge problems and build a review sheet for the next calculus course."]],"phys4a":[[4,"Work & Energy",["work by constant/variable forces","kinetic energy","work-energy theorem","power"],"Analyze a cart moving on a track with applied forces and friction."],[5,"Potential Energy & Conservation",["gravitational potential energy","spring potential energy","conservative forces","energy diagrams"],"Solve a ramp/spring system using energy instead of constant-acceleration equations."],[6,"Momentum & Collisions",["linear momentum","impulse","conservation of momentum","elastic vs inelastic collisions"],"Analyze a two-cart collision from before/after motion data."],[7,"Center of Mass & Systems",["center of mass","system boundaries","external vs internal forces","rocket/recoil ideas"],"Track the center of mass of a multi-object system."],[8,"Rotational Kinematics & Dynamics",["angular variables","moment of inertia","torque","rotational Newton's law"],"Compare translational and rotational motion of a rolling object."],[9,"Angular Momentum",["angular momentum","conservation","rotational impulse","gyroscopic examples"],"Explain a spinning-system change using angular momentum conservation."],[10,"Static Equilibrium & Elasticity",["rigid-body equilibrium","center of gravity","stress and strain","elastic moduli"],"Solve a ladder/sign equilibrium problem and evaluate material deformation."],[11,"Gravitation & Orbits",["Newtonian gravitation","gravitational field","orbital speed","energy in orbit"],"Compare surface gravity and orbital motion for two bodies."],[12,"Simple Harmonic Motion",["Hooke's law","period and frequency","energy in SHM","phase"],"Model a spring-mass oscillator and predict changes to period."],[13,"Mechanical Waves",["wave speed","frequency/wavelength","superposition","standing waves"],"Analyze a string standing-wave pattern and identify harmonics."],[14,"Fluids",["density and pressure","buoyancy","continuity","Bernoulli concepts"],"Explain pressure/flow changes in a pipe and buoyancy of an immersed object."],[15,"Experimental Uncertainty & Data Modeling",["uncertainty","linearization","residuals","model vs data"],"Fit a simple model to lab-style data and discuss whether the model is adequate."],[16,"Mechanics Synthesis Project",["multiple representations","energy vs force methods","momentum strategy","model assumptions"],"Solve one complex scenario using at least two independent physics methods."],[17,"Comprehensive Final",["kinematics","forces","energy/momentum","rotation/waves"],"Complete a cumulative final and a lab-style reasoning practical."],[18,"Winter Extension · Physics Problem-Solving Bootcamp",["estimation","dimensional analysis","vector fluency","multi-step strategy"],"Work optional challenge problems that prepare for later physics and engineering."]],"ewrt1a":[[4,"Research Questions & Source Evaluation",["researchable questions","authority and credibility","currency/relevance","bias and purpose"],"Turn a broad topic into a focused research question and evaluate candidate sources."],[5,"Search Strategy & Academic Sources",["keywords and synonyms","database logic","citation trails","source notes"],"Build a search log and annotated source set."],[6,"Synthesis Matrix",["themes across sources","agreement/disagreement","methods and evidence","gaps"],"Create a synthesis matrix instead of writing one-source-at-a-time paragraphs."],[7,"Rhetorical Analysis",["audience","purpose","genre","appeals and rhetorical choices"],"Analyze how a writer's choices fit a specific audience and purpose."],[8,"Proposal & Working Thesis",["problem framing","stakes","working thesis","research plan"],"Write a proposal that identifies what you know, what you need, and why it matters."],[9,"Research Draft I",["paragraph functions","source integration","warrants","signposting"],"Draft the first half of a source-based argument with integrated evidence."],[10,"Citation Systems & Academic Integrity",["MLA/APA conventions","signal phrases","paraphrase vs quotation","patchwriting avoidance"],"Revise source use so readers can distinguish your ideas from source material."],[11,"Counterargument & Complexity",["fair representation","concession","rebuttal","qualifying claims"],"Add a meaningful counterargument section that changes or sharpens the thesis."],[12,"Global Revision Workshop",["reverse outline","organization","coherence","evidence balance"],"Use a reverse outline to redesign the draft before sentence-level editing."],[13,"Style, Editing & Sentence Control",["sentence boundaries","clarity and concision","transitions","proofreading systems"],"Edit a polished section while preserving your own voice."],[14,"Multimodal / Public-Facing Adaptation",["audience shift","visual rhetoric","accessibility","genre conventions"],"Adapt the research argument into a public-facing format."],[15,"Portfolio Curation",["artifact selection","reflection","revision evidence","process documentation"],"Choose portfolio pieces and explain what changed across drafts."],[16,"Final Research Paper Workshop",["thesis pressure test","evidence gaps","introduction/conclusion","final citation audit"],"Finish and quality-check the major research paper."],[17,"Final Portfolio & Reflection",["metacognition","transfer","revision narrative","future writing plan"],"Submit the final paper/portfolio and write a detailed learning reflection."],[18,"Winter Extension · Reading & Writing Plan",["independent reading","argument notebook","vocabulary in context","transfer to STEM writing"],"Build an optional winter reading/writing routine for future college courses."]],"const20":[[4,"Sequencing, MEP & Inspections",["rough-in sequence","inspection gates","MEP coordination","rework prevention"],"Sequence framing, MEP rough-in, inspections, insulation, drywall, and finishes."],[5,"Advanced Wood Framing",["floor systems","roof framing","shear walls","connectors and hold-downs"],"Trace gravity and lateral load paths through a wood-framed building."],[6,"Structural Steel & Masonry",["steel framing members","bolted/welded connections","CMU walls","reinforcement and grout"],"Compare constructability and coordination issues for steel and masonry."],[7,"Building Envelope Systems",["air barrier","water-resistive barrier","flashing","thermal continuity"],"Detail a window/wall interface to manage rain, air, and heat."],[8,"Mechanical, Electrical & Plumbing Systems",["HVAC basics","electrical distribution","domestic water/waste","coordination zones"],"Review a ceiling/plenum coordination scenario and identify conflicts."],[9,"Estimating II · Assemblies & Labor",["crew productivity","labor hours","material takeoff","unit-price vs assembly estimate"],"Build an assembly cost from quantity, productivity, labor, equipment, and material."],[10,"Scheduling & Critical Path",["activities and durations","dependencies","critical path","float"],"Build a small CPM network and identify schedule risk."],[11,"Quality Control & Safety Planning",["submittals","mockups","inspection/test plans","job hazard analysis"],"Create a QC and safety checklist for one construction activity."],[12,"Site Logistics & Temporary Conditions",["access and laydown","temporary utilities","crane/hoist planning","public protection"],"Develop a site-logistics sketch and explain sequencing constraints."],[13,"Codes, Accessibility & Life Safety",["occupancy/use","egress","accessibility clearances","fire-resistance concepts"],"Perform a basic code-awareness review of a small floor plan."],[14,"Sustainable Construction",["waste management","material choices","commissioning","energy/water efficiency"],"Compare conventional and lower-impact construction strategies."],[15,"Punch List, Commissioning & Closeout",["punch lists","O&M manuals","as-builts","owner training"],"Plan the closeout path from substantial completion to turnover."],[16,"Final Project · Preconstruction Package",["scope narrative","takeoff/estimate","schedule","RFI/submittal/logistics plan"],"Assemble a complete mini preconstruction package for a small project."],[17,"Final Practical & Exam",["drawing navigation","estimating","sequence/coordination","safety and quality"],"Complete a cumulative construction practical and defend your project decisions."],[18,"Winter Extension · Field-Ready Toolkit",["daily reports","look-ahead plans","field measurements","career portfolio"],"Build optional templates and a small portfolio of estimating/coordination work."]],"musi3a":[[4,"Triad Inversions, Cadences & Voice Leading",["root/first/second inversion","authentic and half cadences","common tones","smooth voice leading"],"Voice-lead I–IV–V–I in two keys on keyboard or guitar."],[5,"Seventh Chords",["major/minor seventh","dominant seventh","leading-tone seventh","resolution tendencies"],"Build and hear diatonic seventh chords in major keys."],[6,"Minor Keys & Scales",["natural minor","harmonic minor","melodic minor","relative vs parallel minor"],"Spell and play A, E, and D minor scales and connect them to key signatures."],[7,"Harmony in Minor",["diatonic triads in minor","raised leading tone","dominant function","Roman numerals"],"Analyze and play a short progression in a minor key."],[8,"Phrase, Function & Harmonic Rhythm",["tonic/predominant/dominant","harmonic rhythm","phrase endings","cadential motion"],"Mark harmonic functions through an eight-bar progression."],[9,"Secondary Dominants",["tonicization","V/V","chromatic leading tones","temporary emphasis"],"Identify and play a secondary dominant resolving to V."],[10,"Non-Chord Tones",["passing tones","neighbor tones","suspensions","appoggiaturas"],"Label non-chord tones in a short melody over a chord progression."],[11,"Melody Harmonization",["chord-tone support","cadence planning","bass motion","voice-leading choices"],"Harmonize an eight-measure melody with at least two plausible versions."],[12,"Compound Meter & Syncopation",["6/8 and 9/8","compound subdivision","syncopation","ties across beats"],"Clap, count, and notate short compound-meter rhythms."],[13,"Ear Training · Dictation & Function",["melodic dictation","bass-line hearing","scale-degree hearing","cadence identification"],"Complete repeated short dictations and log specific errors."],[14,"Musical Form",["binary/ternary","verse-chorus","periods","motivic development"],"Map the form of a song and explain how harmony/rhythm mark sections."],[15,"Composition / Arrangement Project",["motif development","harmonic plan","texture","notation/demo preparation"],"Create a 16–32 measure composition or arrangement with an analysis."],[16,"Final Musicianship Preparation",["sight reading","rhythm performance","harmonic analysis","aural recognition"],"Run a mock practical with timed theory and ear-training stations."],[17,"Theory + Aural + Performance Final",["written theory","ear training","sight rhythm","applied harmony"],"Complete the cumulative final and perform/record the practical components."],[18,"Winter Extension · Guitar/Keyboard Harmony Lab",["transposition","closed/open voicings","voice-leading on instrument","ear-training routine"],"Transpose progressions through several keys and build a winter practice routine."]]};
const SEM_PROBLEM_BANKS={"math1a":{"4":["Differentiate y=(x^2+1)^4(3x-2) and identify every rule used.","Find dy/dx for x^2+y^2=25, then find the slope at (3,4).","Find the second derivative of f(x)=x^3-3x^2+2x and interpret what its sign says about concavity."],"5":["A 10-ft ladder slides with its base moving away at 2 ft/s. Find how fast the top descends when the base is 6 ft from the wall.","Air is pumped into a spherical balloon so dV/dt=100 cm^3/s. Find dr/dt when r=5 cm.","A streetlight 15 ft tall shines on a 6-ft person walking away at 4 ft/s. Set up a related-rates model for shadow length."],"6":["Find critical points of f(x)=x^3-6x^2+9x+1 and classify them.","A rectangle has perimeter 80 m. Find dimensions maximizing area and justify the maximum.","An open-top box is made by cutting equal squares from a 20-in by 30-in sheet. Build the volume function and identify a feasible domain."],"7":["Verify the hypotheses of the Mean Value Theorem for f(x)=x^2 on [1,4] and find all c values.","For f(x)=x^4-4x^2, find intervals of increase/decrease and local extrema.","Use f''(x) to determine concavity and inflection points for f(x)=x^3-3x."],"8":["Find the general antiderivative of 6x^2-4x+3.","Given v(t)=3t^2-12t+9 and s(0)=5, find s(t).","A particle has acceleration a(t)=4t-2 and v(0)=3. Find velocity at t=5."],"9":["Approximate ∫_0^4 (x^2+1) dx using a right-endpoint Riemann sum with 4 subintervals.","Interpret ∫_0^6 r(t)dt when r is a flow rate in gallons/minute.","Given velocity data at equally spaced times, explain how a trapezoidal estimate can approximate displacement."],"10":["Evaluate ∫_1^3 (2x+4)dx using the FTC.","If F(x)=∫_0^x (t^2+1)dt, find F'(x) and explain why.","Differentiate G(x)=∫_2^{x^2} cos(t)dt using FTC plus chain rule."],"11":["Evaluate ∫ 2x(x^2+5)^4 dx using substitution.","Evaluate ∫_0^1 3x^2 e^{x^3} dx with a change of variable.","Explain how differentiating your antiderivative checks a u-substitution result."],"12":["Find the area between y=x and y=x^2 on [0,1].","Find intersection points and set up the area between y=4-x^2 and y=x+2.","Describe when a left-right integral may be simpler than top-bottom for an area region."],"13":["Find the volume when y=sqrt(x), 0≤x≤4, is rotated about the x-axis using disks.","Set up washers for the region between y=2 and y=x on [0,2] rotated about the x-axis.","Set up a shell-method integral for rotating the region under y=4-x^2 above the x-axis about the y-axis."],"14":["Solve dy/dt=0.08y with y(0)=500 and interpret the growth constant.","A substance decays with half-life 10 years. Build an exponential model from an initial amount of 80 g.","Solve dy/dx=3x^2 with y(0)=2 and explain the role of the initial condition."],"15":["Differentiate y=ln(x^2+1).","Use logarithmic differentiation on y=x^x for x>0.","Find the derivative of y=e^{3x}/(1+x^2) and identify rule structure."],"16":["Mixed review: choose the best calculus tool for an optimization, accumulation, and related-rates scenario before solving.","Create one derivative problem and one integral problem whose units reveal whether an answer is sensible.","Take one missed problem from earlier weeks and write a full error analysis: setup error, algebra error, or interpretation error."],"17":["Complete a 12-problem mixed set covering limits, derivative rules, applications, FTC, substitution, areas, and volumes.","For three final-exam problems, write a one-sentence reason why the selected method fits.","After checking, redo every missed problem without looking at the solution."]},"phys4a":{"4":["A 5-kg box is pushed 8 m by a 20-N horizontal force with 6 N friction. Find net work and change in kinetic energy.","A force F(x)=4x N acts from x=0 to 3 m. Compute the work from the area/integral under F vs x.","A 1200-kg car accelerates from 10 to 20 m/s. Find the change in kinetic energy and average power if it takes 5 s."],"5":["A 2-kg block slides from rest down a frictionless 5-m vertical drop. Find speed at bottom by energy conservation.","A spring k=250 N/m is compressed 0.20 m and launches a 0.50-kg cart. Find ideal launch speed.","Include 15 J of friction loss in an energy budget and explain where mechanical energy went."],"6":["A 0.20-kg ball at 10 m/s hits a 0.30-kg ball at rest and sticks. Find final velocity.","A 1000-N average force acts for 0.015 s. Find impulse and momentum change.","Compare kinetic energy before/after an inelastic collision and explain why momentum can still be conserved."],"7":["Two masses 2 kg and 3 kg sit at x=0 and x=4 m. Find center of mass.","A person walks inside a stationary boat. Explain qualitatively how boat motion keeps system COM behavior consistent.","Define a system boundary for a recoil problem and list external forces."],"8":["A solid disk and hoop of equal M,R roll down a ramp. Compare accelerations using rotational inertia qualitatively.","A 12-N tangential force acts at radius 0.30 m. Find torque.","A wheel with I=0.8 kg·m² has net torque 4 N·m. Find angular acceleration."],"9":["A skater reduces moment of inertia from 4 to 2 kg·m² while spinning at 2 rad/s. Find new angular speed.","Compute angular momentum of a disk with I=0.50 kg·m² rotating at 6 rad/s.","Explain why an external torque is required to change total angular momentum."],"10":["A 4-m uniform beam weighing 200 N is hinged to a wall and supported by a cable; sketch all forces and write equilibrium equations.","A 70-kg person stands 2 m from one end of a 5-m board. Find support reactions for a simple support model.","A rod has stress 80 MPa and strain 0.0004. Estimate Young's modulus."],"11":["Compute gravitational force between two 1000-kg masses 10 m apart.","Derive/compute circular orbital speed expression from gravity providing centripetal acceleration.","Compare g at altitude equal to one Earth radius above the surface with surface g."],"12":["A 0.50-kg mass on k=200 N/m oscillates. Find angular frequency and period.","If amplitude doubles in ideal SHM, what happens to total energy? Quantify the factor.","Write x(t) for amplitude 0.10 m, angular frequency 5 rad/s, phase 0."],"13":["A wave has f=5 Hz and wavelength 2 m. Find wave speed.","A 1.2-m string fixed at both ends supports its second harmonic. Find wavelength.","Explain nodes and antinodes in a standing wave and identify them on a sketch."],"14":["Find pressure 5 m below water surface using P=P0+ρgh (gauge portion).","A 0.020 m³ object is fully submerged in water. Find buoyant force.","Water flows from a 4 cm² pipe section at 3 m/s into a 2 cm² section. Find new speed by continuity."],"15":["Given five (x,y) lab points, fit or estimate a straight-line slope and report units.","Compute percent difference between measured 9.6 and accepted 9.81.","Explain what residuals can reveal that an R² value alone may hide."],"16":["Solve one scenario twice: once with Newton's laws and once with energy, then compare assumptions.","Design a conservation-law decision tree: force, energy, momentum, or angular momentum?","Write a complete uncertainty statement for one calculated result using measured inputs."],"17":["Complete a cumulative 15-question problem set across motion, forces, energy, momentum, rotation, oscillations, waves, and fluids.","For each solution, draw a diagram before equations and label known/unknown quantities.","Redo all missed final-review problems from a blank page and classify the error."]},"engr10":{"4":["Use the method of joints to solve member forces in a symmetric three-member triangular truss under a vertical apex load.","Identify zero-force members in two small truss sketches and state the visual rule used.","For each solved member, label T or C and explain how joint force arrows support the label."],"5":["For a 12-ft beam with a 600-lb midspan point load, draw shear and moment diagrams.","Convert a 200 lb/ft uniform load over 8 ft to an equivalent resultant for reaction calculations.","Check where maximum bending moment occurs and connect it to the shear diagram."],"6":["A 2-in² steel bar carries 20 kip tension. Compute normal stress in ksi.","A 10-ft bar elongates 0.06 in. Compute engineering strain.","Given E=29,000 ksi and elastic stress=15 ksi, estimate strain using Hooke's law."],"7":["Compare deflection trends if beam span doubles while load/material/section stay similar.","Explain why a member may pass strength checks yet fail serviceability.","Create a serviceability checklist for a pedestrian floor or platform."],"8":["A leveling run has backsight 5.22 ft and foresight 3.87 ft from a 100.00-ft benchmark. Find next elevation.","Repeat a 50.00-ft distance measurement three times and compute mean/range.","Report a measured slope with appropriate significant figures and an uncertainty note."],"9":["Compute slope percent between elevations 104.5 and 101.0 over 70 ft horizontal distance.","Given contour elevations, identify likely flow direction using the rule that water moves downhill perpendicular to contours.","Set finish-floor and adjacent grade assumptions to preserve positive drainage away from a building."],"10":["For 900 veh/hr on a lane, compute average headway in seconds/vehicle.","List conflict points that make a four-leg intersection more complex than a T-intersection.","Create a comparison matrix for signal, roundabout, and stop control using safety, delay, right-of-way, and cost."],"11":["Use Q=CIA with supplied consistent units conceptually: compare runoff when C changes from 0.3 to 0.8 for same area/intensity.","Delineate a small drainage area on a sketch and list assumptions.","Explain detention vs conveyance and when each is used in a stormwater concept."],"12":["Given an allowable soil bearing pressure and a column load, estimate required footing area.","Explain total vs differential settlement and why differential settlement is often more damaging.","Write five questions you would want from a geotechnical report before foundation design."],"13":["Compare two materials using first cost, service life, maintenance, and embodied impact.","Build a simple life-cycle cost table over a 30-year study period without discounting, then discuss what discounting would change.","Identify one resilience feature that may cost more initially but reduce consequence of disruption."],"14":["Create a WBS with at least 12 tasks for a small site improvement project.","Draw task dependencies and identify a plausible critical chain.","Build a five-item risk register with probability, consequence, owner, and mitigation."],"15":["Create plan, section, and detail callouts for one small civil feature.","Audit a one-sheet concept drawing for scale, north arrow, dimensions, notes, title, and revisions.","Rewrite three vague technical notes into measurable instructions."],"16":["Capstone: define need, constraints, and three alternatives for a small campus/site civil problem.","Complete at least three supporting calculations and one quantity/cost estimate.","Prepare a 5-minute design review: recommendation, evidence, trade-offs, and top remaining risk."],"17":["Complete a cumulative statics set: reactions, truss member force, shear/moment, stress, and serviceability interpretation.","Finalize capstone executive summary and one-sheet graphic.","Write a post-project reflection identifying one assumption that changed and how it affected the design."]}};

const SEM_COURSE_LABELS={
  engr10:'ENGR 10', math1a:'MATH 1A', phys4a:'PHYS 4A',
  ewrt1a:'EWRT 1A', const20:'CONST 20', musi3a:'MUSI 3A'
};
const SEM_PREFIX={engr10:'engr',math1a:'math',phys4a:'phys',ewrt1a:'ewrt',const20:'const',musi3a:'musi'};
const SEM_STUDY_FRAME={
  engr10:'Treat every number as part of a model: define the system, draw/describe the geometry, carry units, solve, then ask whether the result is physically and professionally reasonable.',
  math1a:'Calculus improves when you connect four representations: words, symbols, graphs, and units. Name the structure before choosing a rule, then check the result by a second representation when possible.',
  phys4a:'Start with the system and a diagram. Choose coordinates, list knowns/unknowns, select a principle, solve symbolically when useful, then inspect sign, units, magnitude, and limiting behavior.',
  ewrt1a:'Strong college writing is a sequence of decisions about audience, evidence, organization, and revision. Keep a visible trail from question → sources → synthesis → claim → draft → feedback → revision.',
  const20:'Construction decisions connect drawings, quantities, sequence, safety, cost, quality, and field conditions. Document assumptions so another person can trace what you measured and why.',
  musi3a:'Musicianship grows when the same idea is seen, named, heard, sung, and played. Short repeated practice with immediate feedback is more effective than passive reading alone.'
};
const SEM_WORK_LABELS={
  engr10:['Homework','Quizzes','Projects','Exams'],
  math1a:['Homework','Quizzes','Homework','Exams'],
  phys4a:['Homework','Quizzes','Labs','Exams'],
  ewrt1a:['Writing','Participation','Writing','Writing'],
  const20:['Estimating','Quizzes','Coordination','Exams'],
  musi3a:['Theory Assignments','Quizzes','Musicianship Labs','Quizzes']
};
const SEM_CLASSMATES=['Avery Kim','Jordan Smith','Leah Tran','Marcus Bell','Mia Johnson','Diego Flores','Nina Patel','Chris Park'];

function semCourse(id){return BASE_COURSES.find(c=>c.id===id);}
function semUpsert(arr,item){const i=arr.findIndex(x=>x.id===item.id);if(i>=0)arr[i]=item;else arr.push(item);}
function semDateOnly(d){return new Date(d+'T12:00:00');}
function semWeekState(w){
  const now=new Date(),m=SEM_WEEK_META[w]; if(!m)return 'upcoming';
  if(now>semDateOnly(m.end))return 'complete';
  if(now<semDateOnly(m.start))return 'upcoming';
  return 'current';
}
function semTodayISO(){const d=new Date(),pad=n=>String(n).padStart(2,'0');return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;}
function semZoomStatus(iso){const t=semTodayISO();return iso<t?'recording':iso===t?'today':'upcoming';}
function semFmtDate(iso){return new Date(iso+'T12:00:00').toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'});}
function semInstructor(c){return c?.instructor||'Instructor';}

function semLecture(courseId,spec,variant='core'){
  const c=semCourse(courseId), concepts=spec[2], application=spec[3], w=spec[0], title=spec[1];
  const isWorkshop=variant==='workshop';
  const verbs=courseId==='ewrt1a'
    ? ['identify the writing/research move','test it against evidence','revise it for a reader','transfer the move to your own draft']
    : courseId==='musi3a'
    ? ['name and spell the idea','hear/sing the relationship','play it in more than one place or key','explain what changed and what stayed the same']
    : ['define the model or relationship','work through a concrete example','check assumptions/units/limits','transfer the method to a new situation'];
  const segments=concepts.map((concept,i)=>({
    title:`${i+1} · ${concept.charAt(0).toUpperCase()+concept.slice(1)}`,
    paragraphs:[
      `${concept} is one of the control ideas for ${title}. Do not memorize the label alone. Ask what information the idea needs, what it lets you predict or communicate, and what assumptions would make the method inappropriate.`,
      `${SEM_STUDY_FRAME[courseId]} For this section, your job is to ${verbs[i]||verbs[verbs.length-1]}.`
    ],
    example:i===0?`Applied context: ${application}`:`Connect ${concept} back to the week application. Write one sentence explaining how changing this idea would change the result, interpretation, or decision.`,
    pause:`Close the notes for two minutes. Explain ${concept} from memory, then create a tiny example of your own.`,
    mistake:`Common mistake: using ${concept} as a vocabulary word without showing how it affects the actual problem or decision.`
  }));
  return {
    title:`${isWorkshop?'Workshop':'Lecture'} · Week ${w} · ${title}${isWorkshop?' — Applied Studio':''}`,
    week:`Week ${w} · ${SEM_WEEK_META[w].label}`,
    duration:isWorkshop?'55 min':'85 min',
    objectives:[
      `Explain ${concepts[0]} in your own words`,
      `Apply ${concepts[1]} to a new example`,
      `Connect ${concepts[2]} with ${concepts[3]}`,
      `Complete the week application: ${application}`
    ],
    intro:isWorkshop
      ? `This studio turns the Week ${w} ideas into work. Attempt each prompt before reading your old notes. When you get stuck, identify whether the problem is vocabulary, setup, calculation/performance, or interpretation.`
      : `Week ${w} focuses on ${title}. ${SEM_STUDY_FRAME[courseId]} The goal is not just to recognize terms; it is to use them in a defensible workflow.`,
    segments,
    keyTerms:concepts,
    check:[
      {q:`Which idea is most directly emphasized first in Week ${w}?`,options:[concepts[0],concepts[2],'A formatting preference','An unrelated shortcut'],answer:0},
      {q:`A strong response to the Week ${w} application should include:`,options:['A method, assumptions/evidence, result, and interpretation','Only a final answer','Only definitions','No checking'],answer:0},
      {q:`If your result or claim feels surprising, the best next step is usually to:`,options:['Check the setup, evidence/units, and assumptions','Hide the surprising part','Add more decimal places','Skip the explanation'],answer:0}
    ],
    recap:[
      `Week ${w} theme: ${title}.`,
      `Core ideas: ${concepts.join(' · ')}.`,
      `Application: ${application}`,
      'Use retrieval practice: explain the method from memory before rereading.'
    ],
    resources:[]
  };
}

function semWorkQuestions(courseId,spec){
  const [w,title,concepts,application]=spec;
  const bank=SEM_PROBLEM_BANKS[courseId]?.[String(w)]||SEM_PROBLEM_BANKS[courseId]?.[w]||[];
  if(bank.length) return bank.map((q,i)=>({type:i===0&&w<17?'textarea':'textarea',q:`${i+1}. ${q}`}));
  if(courseId==='ewrt1a') return [
    {type:'textarea',q:`1. Build a one-page working document for “${title}.” State the purpose and audience before drafting.`},
    {type:'textarea',q:`2. Apply ${concepts[0]} and ${concepts[1]} to a source, paragraph, or draft section. Include the before/after or notes.`},
    {type:'textarea',q:`3. Use ${concepts[2]} to revise or reorganize your work. Explain the decision rather than only showing the product.`},
    {type:'textarea',q:`4. Application: ${application}`},
    {type:'textarea',q:`5. Reflection: identify one place where your reasoning or writing changed after rereading as a skeptical reader.`}
  ];
  if(courseId==='const20') return [
    {type:'textarea',q:`1. Define the field purpose of ${concepts[0]} and give one example of what could go wrong if it is ignored.`},
    {type:'textarea',q:`2. Create a checklist or mini-log using ${concepts[1]} and ${concepts[2]}. Include units, references, or responsible parties where appropriate.`},
    {type:'textarea',q:`3. Scenario: ${application} Show the sequence of decisions you would make before work proceeds.`},
    {type:'textarea',q:`4. Identify one safety, quality, cost, and schedule risk connected to this week's topic.`},
    {type:'textarea',q:`5. Write one RFI/submittal/daily-report style note that communicates a specific issue without guessing.`}
  ];
  if(courseId==='musi3a') return [
    {type:'textarea',q:`1. Spell/name the Week ${w} material: ${concepts[0]} and ${concepts[1]}. Give at least two written examples.`},
    {type:'textarea',q:`2. Play or sing examples of ${concepts[2]}. Describe what you hear before checking the label.`},
    {type:'textarea',q:`3. Transpose one example to a second key or starting pitch. What stayed structurally the same?`},
    {type:'textarea',q:`4. Application: ${application} Record or describe your practice result.`},
    {type:'textarea',q:`5. Ear-training log: 15 short trials. Record score, most-confused pair, and the correction strategy you used.`}
  ];
  return [
    {type:'textarea',q:`1. Explain ${concepts[0]} and ${concepts[1]} in your own words, including units or evidence where relevant.`},
    {type:'textarea',q:`2. Work a small example that uses ${concepts[2]}. Show setup, intermediate reasoning, and a check.`},
    {type:'textarea',q:`3. Application: ${application}`},
    {type:'textarea',q:`4. Compare ${concepts[0]} with ${concepts[3]}. When would confusing them lead to a wrong result?`},
    {type:'textarea',q:`5. Error analysis: invent one plausible wrong approach, explain why it fails, and correct it.`}
  ];
}

function semQuiz(courseId,spec){
  const [w,title,concepts,application]=spec;
  return {
    id:`${courseId}-w${w}-quiz`,title:`Week ${w} Quiz · ${title}`,due:SEM_WEEK_META[w].quizDue,
    points:w===17?50:20,group:SEM_WORK_LABELS[courseId][1],kind:'quiz',timeLimit:w===17?60:25,completed:false,
    context:`Low-stakes check for Week ${w}. Use missed items as a map back to the lecture and studio.`,
    reviewLectureId:`${SEM_PREFIX[courseId]}-w${w}-core`,
    questions:[
      {type:'mc',q:`Which term belongs directly to this week's topic?`,options:[concepts[0],'Random formatting','Unrelated memorization','None of the above'],answer:0},
      {type:'mc',q:`Which is another core Week ${w} idea?`,options:[concepts[1],concepts[0]+' is the only idea','Skipping assumptions','Avoiding examples'],answer:0},
      {type:'mc',q:`A good application of ${concepts[2]} should:`,options:['Show the method and interpretation','Only state a final answer','Remove context','Ignore checking'],answer:0},
      {type:'mc',q:`If ${concepts[3]} changes, you should:`,options:['Revisit the model/claim and see what else changes','Keep the old conclusion automatically','Delete the assumption','Add decimals only'],answer:0},
      {type:'mc',q:`Best study move after missing a question:`,options:['Return to the exact concept, explain it from memory, then retry','Read the answer once and move on','Guess repeatedly','Skip the week'],answer:0},
      {type:'mc',q:`The Week ${w} application is best approached by:`,options:['Breaking it into steps and documenting assumptions','Jumping to a polished final product','Using no evidence','Avoiding revision'],answer:0}
    ]
  };
}

function semWork(courseId,spec){
  const [w,title,concepts,application]=spec;
  const labels=SEM_WORK_LABELS[courseId];
  return {
    id:`${courseId}-w${w}-work`,title:`Week ${w} ${courseId==='ewrt1a'?'Workshop':'Problem Set / Lab'} · ${title}`,
    due:SEM_WEEK_META[w].due,points:w===16?50:30,group:labels[0],kind:'worksheet',questions:semWorkQuestions(courseId,spec),
    instructions:`Complete this after the core lecture and applied studio. Show the work trail—not only the final product. ${SEM_STUDY_FRAME[courseId]}`,
    completed:false,context:application,reviewLectureId:`${SEM_PREFIX[courseId]}-w${w}-core`,
    rubric:[
      ['Setup / preparation',6,'Defines the problem, audience, system, key information, or musical material clearly'],
      ['Method / development',10,'Uses the week concepts accurately and shows a traceable process'],
      ['Checking / evidence',6,'Checks units, sources, assumptions, listening, field logic, or revision choices as appropriate'],
      ['Interpretation / communication',5,'Explains what the result means and what limitations remain'],
      ['Presentation',3,'Readable, organized, labeled, and complete']
    ],
    steps:['Review learning objectives without rereading the full lecture.','Attempt the work from memory first.','Mark exactly where you get stuck.','Use the linked lecture/studio to repair that gap.','Finish the work and perform a final reasonableness/reader/listener/field check.']
  };
}

function semMilestone(courseId,spec){
  const [w,title,concepts,application]=spec;
  const label=courseId==='ewrt1a'?'Major Draft Milestone':courseId==='musi3a'?'Musicianship Project Milestone':'Project Milestone';
  return {
    id:`${courseId}-w${w}-milestone`,title:`${label} · Week ${w}`,due:SEM_WEEK_META[w].due,points:w===16?75:40,
    group:SEM_WORK_LABELS[courseId][2],kind:'worksheet',completed:false,reviewLectureId:`${SEM_PREFIX[courseId]}-w${w}-studio`,
    context:`This milestone asks you to combine several weeks instead of treating Week ${w} as an isolated chapter.`,
    instructions:'Submit a working product plus a short process memo. College projects are graded on decisions, evidence, and revision—not only polish.',
    questions:[
      {type:'textarea',q:`1. Define the deliverable and the criteria you will use to judge whether it is successful.`},
      {type:'textarea',q:`2. Show your current working product. Include calculations, draft text, analysis, notation, takeoff, or other evidence appropriate to ${SEM_COURSE_LABELS[courseId]}.`},
      {type:'textarea',q:`3. Identify three assumptions or unresolved questions and rank them by impact.`},
      {type:'textarea',q:`4. Application focus: ${application}`},
      {type:'textarea',q:`5. Write a 150–250 word progress memo: what changed since your first approach, what feedback/evidence caused the change, and what you will do next.`}
    ],
    rubric:[['Technical/content accuracy',15,'Core course methods are used correctly'],['Evidence/process',10,'Work trail is visible and defensible'],['Revision/judgment',8,'Responds to uncertainty or feedback'],['Communication',7,'Clear enough for another person to follow']]
  };
}

function semExam(courseId,w,label){
  const plan=(SEM_PLANS[courseId]||[]).filter(s=>s[0]<=w && s[0]>=Math.max(4,w-4));
  const qs=[];
  plan.forEach((s,i)=>{
    const cs=s[2];
    qs.push({type:'mc',q:`${label}: which idea belongs to Week ${s[0]} (${s[1]})?`,options:[cs[i%cs.length],'A presentation color','An unrelated shortcut','None'],answer:0});
  });
  while(qs.length<10)qs.push({type:'mc',q:'A defensible college-level solution or argument should usually include:',options:['Method/evidence, assumptions, result, and interpretation','Only the final answer','No checking','No explanation'],answer:0});
  return {id:`${courseId}-w${w}-exam`,title:`${label} · Weeks ${Math.max(4,w-4)}–${w}`,due:SEM_WEEK_META[w].due,points:w===17?100:60,group:SEM_WORK_LABELS[courseId][3],kind:'quiz',questions:qs.slice(0,w===17?14:10),completed:false,timeLimit:w===17?100:65,context:'Cumulative assessment. Study by retrieving methods and solving fresh examples, not by rereading notes passively.',reviewLectureId:`${SEM_PREFIX[courseId]}-w${w}-core`};
}

function semDiscussion(courseId,spec){
  const [w,title,concepts,application]=spec,name=SEM_CLASSMATES[(w+courseId.length)%SEM_CLASSMATES.length],name2=SEM_CLASSMATES[(w*2+courseId.length)%SEM_CLASSMATES.length];
  return {id:`${courseId}-w${w}-disc`,title:`Week ${w} Discussion · ${title}`,due:SEM_WEEK_META[w].quizDue,points:10,status:'open',score:null,
    prompt:`Choose one idea from ${concepts.join(', ')}. Explain it through a concrete example connected to: ${application} End with one question that a classmate could answer by reasoning, not just opinion.`,
    posts:[
      {name,time:`Week ${w} · 3:18 PM`,text:`My biggest takeaway is that ${concepts[0]} only becomes useful when the assumptions are visible. In the week application, I would document what I know first, then test the result against ${concepts[2]}.`,replies:[{name:name2,time:`Week ${w} · 4:01 PM`,text:`I had the same thought. I would also write down what evidence would make me change the conclusion instead of treating the first answer as final.`}]}
    ]};
}

function semZoom(courseId,spec){
  if(courseId!=='engr10')return null;
  const w=spec[0],start=SEM_WEEK_META[w].start;
  const d=semDateOnly(start); d.setDate(d.getDate()+1); // Tuesday
  const iso=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  return {id:`engr-sem-z${w}`,date:semFmtDate(iso),isoDate:iso,time:'6:00–8:30 PM',title:`Week ${w} · ${spec[1]}`,status:semZoomStatus(iso),
    recording:'YouTube playlist lecture library',youtubePlaylist:true,youtubeUrl:SEM_PLAYLIST_URL,youtubeEmbed:SEM_PLAYLIST_EMBED,
    agenda:[`Week ${w} concept briefing`,...spec[2],`Applied work: ${spec[3]}`],
    notes:['Use the playlist controls inside the Zoom page to select the matching recording.','Pause regularly and work the module problems before continuing.','The playlist is a public YouTube resource embedded as the course recording library.']};
}

function semModule(courseId,spec){
  const [w,title,concepts,application]=spec,items=[
    {type:'page',title:`Week ${w} Overview · ${title}`,detail:`${SEM_WEEK_META[w].label}. Estimated workload: 5–8 focused hours outside class. Read the objectives, complete the lecture, do the studio from memory, then finish the problem set/workshop and quiz. Application: ${application}`},
    {type:'lecture',lectureId:`${SEM_PREFIX[courseId]}-w${w}-core`},
    {type:'lecture',lectureId:`${SEM_PREFIX[courseId]}-w${w}-studio`},
    {type:'assignment',assignmentId:`${courseId}-w${w}-work`}
  ];
  if([6,10,16].includes(w))items.push({type:'assignment',assignmentId:`${courseId}-w${w}-milestone`});
  if(w%2===0 && w<18)items.push({type:'discussion',discussionId:`${courseId}-w${w}-disc`});
  items.push({type:'assignment',assignmentId:`${courseId}-w${w}-quiz`});
  if([8,13].includes(w))items.push({type:'assignment',assignmentId:`${courseId}-w${w}-exam`});
  if(w===17)items.push({type:'assignment',assignmentId:`${courseId}-w17-exam`});
  const z=semZoom(courseId,spec); if(z)items.splice(3,0,{type:'zoom',zoomId:z.id});
  return {title:`Week ${w} · ${title}`,state:semWeekState(w),items};
}

for(const [courseId,specs] of Object.entries(SEM_PLANS)){
  const c=semCourse(courseId); if(!c)continue;
  c.lectures=c.lectures||{}; c.assignments=c.assignments||[]; c.discussions=c.discussions||[]; c.zoomMeetings=c.zoomMeetings||[]; c.modules=c.modules||[];

  // Existing weeks 1–3 remain intact; replace the old Week 4 preview with the full-semester sequence.
  c.modules=c.modules.filter(m=>!/^Week 4 Preview/.test(m.title));
  c.modules.forEach(m=>{
    const match=m.title.match(/^Week\s+(\d+)/i);
    if(match){const n=Number(match[1]); if(n<4)m.state='complete';}
  });

  for(const spec of specs){
    const [w]=spec;
    const coreId=`${SEM_PREFIX[courseId]}-w${w}-core`,studioId=`${SEM_PREFIX[courseId]}-w${w}-studio`;
    c.lectures[coreId]=semLecture(courseId,spec,'core');
    c.lectures[studioId]=semLecture(courseId,spec,'workshop');

    semUpsert(c.assignments,semWork(courseId,spec));
    semUpsert(c.assignments,semQuiz(courseId,spec));
    if([6,10,16].includes(w))semUpsert(c.assignments,semMilestone(courseId,spec));
    if([8,13].includes(w))semUpsert(c.assignments,semExam(courseId,w,`Unit Exam ${w===8?'2':'3'}`));
    if(w===17)semUpsert(c.assignments,semExam(courseId,17,'Comprehensive Final'));

    if(w%2===0 && w<18)semUpsert(c.discussions,semDiscussion(courseId,spec));

    const z=semZoom(courseId,spec);
    if(z){
      // Remove old future preview Zooms so ENGR 10 has one clean Tuesday sequence.
      c.zoomMeetings=c.zoomMeetings.filter(x=>!(x.id==='z4'||x.id===z.id));
      c.zoomMeetings.push(z);
    }
    c.modules.push(semModule(courseId,spec));
  }

  const currentSpec=specs.find(s=>semWeekState(s[0])==='current');
  c.week=currentSpec?`Week ${currentSpec[0]}`:(new Date()>semDateOnly(SEM_WEEK_META[17].end)?'Completed':'Full Semester');
}

// Put the supplied playlist directly in the ENGR 10 Zoom experience.
Object.assign(RESOURCES,{
  engrZoomPlaylist:{title:'ENGR 10 Recorded Zoom Lecture Library',provider:'YouTube playlist',url:SEM_PLAYLIST_URL,embed:SEM_PLAYLIST_EMBED,desc:'Public playlist embedded inside the ENGR 10 Zoom area as the recorded lecture library.'}
});

const semPrevOpenZoom=openZoom;
openZoom=function(c,z){
  if(z?.youtubePlaylist){
    const agenda=(z.agenda||[]).map(x=>`<li>${escapeHTML(x)}</li>`).join('');
    const notes=(z.notes||[]).map(x=>`<p>▶ ${escapeHTML(x)}</p>`).join('');
    showModal(`<div class="modal-kicker">${escapeHTML(c.code)} · Zoom / Recorded Class</div>
      <h2>${escapeHTML(z.title)}</h2>
      <div class="meeting-meta"><div><small>Date</small><strong>${escapeHTML(z.date)}</strong></div><div><small>Time</small><strong>${escapeHTML(z.time)}</strong></div><div><small>Status</small><strong>${z.status==='today'?'Today':z.status==='recording'?'Recording available':'Upcoming'}</strong></div></div>
      <div class="youtube-zoom-shell">
        <div class="youtube-zoom-frame"><iframe src="${z.youtubeEmbed}" title="ENGR 10 Zoom lecture playlist" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
        <aside><h3>Class agenda</h3><ol>${agenda}</ol><h3>How to use this recording</h3>${notes}<button class="primary-btn full" id="openSemPlaylist">Open full playlist on YouTube</button></aside>
      </div>
      <section class="recording-notes"><h3>My Zoom notes</h3><textarea id="semZoomNote" class="semester-note" placeholder="Write the calculation, idea, or question you want to remember...">${escapeHTML(state.drafts[`zoom:${z.id}`]||'')}</textarea><button class="outline-btn" id="saveSemZoomNote">Save notes</button></section>`,true);
    document.getElementById('openSemPlaylist').onclick=()=>window.open(z.youtubeUrl,'_blank','noopener,noreferrer');
    document.getElementById('saveSemZoomNote').onclick=()=>{state.drafts[`zoom:${z.id}`]=document.getElementById('semZoomNote').value;saveState();toast('Zoom notes saved locally');};
    if(typeof addHistory==='function')addHistory(z.title,c.code);
    return;
  }
  return semPrevOpenZoom(c,z);
};

// Current-week announcements for the expanded semester.
for(const [courseId,specs] of Object.entries(SEM_PLANS)){
  const c=semCourse(courseId),spec=specs.find(s=>semWeekState(s[0])==='current'); if(!c||!spec)continue;
  const id=`sem-current-${courseId}`;
  if(!ANNOUNCEMENTS.some(a=>a.id===id))ANNOUNCEMENTS.unshift({
    id,course:c.code,title:`Week ${spec[0]} is live · ${spec[1]}`,
    body:`This week has a full lecture, applied studio, problem set/workshop, quiz${spec[0]%2===0?', discussion':''}${courseId==='engr10'?', and Tuesday Zoom recording playlist':''}. Work in module order and use missed quiz items to target review.`,
    time:'Sep 15, 2026',target:{course:courseId,tab:'modules'}
  });
}
if(!MESSAGES.some(m=>m.id==='sem-full-published'))MESSAGES.unshift({
  id:'sem-full-published',initials:'FP',from:'Course Portal',subject:'Fall semester modules published through late December',
  body:'Weeks 4–17 are now fully built, with an optional Week 18 winter extension through Dec 27. Each course includes lectures, studios, assignments, quizzes, discussions, projects, cumulative assessments, and review paths.',
  time:'Today',unread:true,course:'All Courses'
});

document.title='De Anza College | Full Fall Learning Portal V8';
const footer=document.querySelector('.local-use-footer');
if(footer)footer.textContent='Personal learning environment · Full Fall 2026 study build · Not affiliated with De Anza College, Canvas, Zoom, or YouTube.';

if(typeof renderNotifications==='function')renderNotifications();
if(typeof renderProfile==='function')renderProfile();
if(typeof renderDashboard==='function')renderDashboard();
if(typeof renderAllCourses==='function')renderAllCourses();
if(typeof renderCalendar==='function')renderCalendar();
if(typeof renderInbox==='function')renderInbox();
if(typeof renderHistory==='function')renderHistory();
})();
