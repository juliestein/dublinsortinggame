document.addEventListener("DOMContentLoaded", () => {
  const dropZones = document.querySelectorAll(".drop-zone");
  const correctCountSpan = document.getElementById("correct-count");
  const incorrectCountSpan = document.getElementById("incorrect-count");
  let correctCount = 0;
  let incorrectCount = 0;
  const resetButton = document.getElementById("reset-button");
  const closeButton = document.getElementById("close-popup");
  let continueGame=true;
  resetButton.addEventListener("click", () => {
    // Reset the score counters
    correctCount = 0;
    incorrectCount = 0;
    correctCountSpan.textContent = correctCount;
    incorrectCountSpan.textContent = incorrectCount;

    continueGame = true;
    // Shuffle the draggableItems array
    const shuffledItems = shuffleArray(originalDraggableItems);

    // Only take up to the first 'maxItems' items
    draggableItems = shuffledItems.slice(0, 10);
    // Call the function to create and populate draggable items
    createDraggableItems(10);
  });
  
  closeButton.addEventListener("click", () => {
    var scoreZone = document.getElementsByClassName("score-zone-popup");
    if(scoreZone.length>=1)
      scoreZone[0].style.display = "none";
  });
  // Array of draggable items (same as before)
  const originalDraggableItems = [

{imageSrc: "items/compost_apple.png", category: "CompostingBin", label: "apple core"},
{imageSrc: "items/compost_banana.png", category: "CompostingBin", label: "banana peel"},
{imageSrc: "items/compost_bowl.png", category: "CompostingBin", label: "compostable bowl"},
{imageSrc: "items/compost_branches.png", category: "CompostingBin", label: "small branches"},
{imageSrc: "items/compost_bread.png", category: "CompostingBin", label: "moldy bread"},
{imageSrc: "items/compost_carrots.png", category: "CompostingBin", label: "moldy carrots"},
{imageSrc: "items/compost_cheese.png", category: "CompostingBin", label: "cheese"},
{imageSrc: "items/compost_chicken.png", category: "CompostingBin", label: "chicken bones"},
{imageSrc: "items/compost_coffeefilter.png", category: "CompostingBin", label: "coffee filter"},
{imageSrc: "items/compost_eggshell.png", category: "CompostingBin", label: "eggshells"},
{imageSrc: "items/compost_fish.png", category: "CompostingBin", label: "fish bones"},
{imageSrc: "items/compost_flowers.png", category: "CompostingBin", label: "dead flowers"},
{imageSrc: "items/compost_food.png", category: "CompostingBin", label: "food scraps"},
{imageSrc: "items/compost_grapes.png", category: "CompostingBin", label: "moldy grapes"},
{imageSrc: "items/compost_grass.png", category: "CompostingBin", label: "weeds"},
{imageSrc: "items/compost_grassclippings.png", category: "CompostingBin", label: "grass clippings"},
{imageSrc: "items/compost_log.png", category: "CompostingBin", label: "untreated wood"},
{imageSrc: "items/compost_meat.png", category: "CompostingBin", label: "meat"},
{imageSrc: "items/compost_napkin.png", category: "CompostingBin", label: "soiled napkin"},
{imageSrc: "items/compost_orange.png", category: "CompostingBin", label: "orange peel"},
{imageSrc: "items/compost_papertowel.png", category: "CompostingBin", label: "used paper towel"},
{imageSrc: "items/compost_pasta.png", category: "CompostingBin", label: "pasta"},
{imageSrc: "items/compost_pear.png", category: "CompostingBin", label: "moldy pear"},
{imageSrc: "items/compost_pizzabox.png", category: "CompostingBin", label: "soiled pizza box"},
{imageSrc: "items/compost_potato.png", category: "CompostingBin", label: "moldy potato"},
{imageSrc: "items/compost_rice.png", category: "CompostingBin", label: "rice"},
{imageSrc: "items/compost_shrimp.png", category: "CompostingBin", label: "shrimp shells"},
{imageSrc: "items/compost_squash.png", category: "CompostingBin", label: "moldy squash"},
{imageSrc: "items/compost_takeoutbox.png", category: "CompostingBin", label: "fiber takeout box"},
{imageSrc: "items/compost_takeoutboxdirty.png", category: "CompostingBin", label: "fiber takeout box"},
{imageSrc: "items/compost_teabag.png", category: "CompostingBin", label: "tea bag"},
{imageSrc: "items/compost_twigs.png", category: "CompostingBin", label: "twigs"},
{imageSrc: "items/compost_utensils.png", category: "CompostingBin", label: "compostable utensils"},
{imageSrc: "items/compost_veggies.png", category: "CompostingBin", label: "veggie scraps"},
{imageSrc: "items/garbage_basketball.png", category: "GarbageBin", label: "basketball"},
{imageSrc: "items/garbage_brokenplanter.png", category: "GarbageBin", label: "broken planter"},
{imageSrc: "items/garbage_bubbleenvelope.png", category: "GarbageBin", label: "bubble envelope"},
{imageSrc: "items/garbage_bubbleenvelopetwo.png", category: "GarbageBin", label: "plastic-lined envelope"},
{imageSrc: "items/garbage_bubblewrap.png", category: "GarbageBin", label: "bubble wrap"},
{imageSrc: "items/garbage_candywrapper.png", category: "GarbageBin", label: "candy wrapper"},
{imageSrc: "items/garbage_chipbag.png", category: "GarbageBin", label: "snack bag"},
{imageSrc: "items/garbage_coffeecup.png", category: "GarbageBin", label: "coated coffee cup"},
{imageSrc: "items/garbage_coffeepod.png", category: "GarbageBin", label: "coffee pod / k-cup"},
{imageSrc: "items/garbage_glasscup.png", category: "GarbageBin", label: "broken glass"},
{imageSrc: "items/garbage_gloves.png", category: "GarbageBin", label: "disposable gloves"},
{imageSrc: "items/garbage_hanger.png", category: "GarbageBin", label: "plastic hanger"},
{imageSrc: "items/garbage_juicebox.png", category: "GarbageBin", label: "juice box"},
{imageSrc: "items/garbage_juicepouch.png", category: "GarbageBin", label: "juice pouch"},
{imageSrc: "items/garbage_mask.png", category: "GarbageBin", label: "sanitary mask"},
{imageSrc: "items/garbage_milkcarton.png", category: "GarbageBin", label: "milk carton"},
{imageSrc: "items/garbage_mirror.png", category: "GarbageBin", label: "broken mirror"},
{imageSrc: "items/garbage_mug.png", category: "GarbageBin", label: "ceramic mug"},
{imageSrc: "items/garbage_packingpeanuts.png", category: "GarbageBin", label: "styrofoam peanuts"},
{imageSrc: "items/garbage_petwaste.png", category: "GarbageBin", label: "pet waste"},
{imageSrc: "items/garbage_plasticbag.png", category: "GarbageBin", label: "plastic bag"},
{imageSrc: "items/garbage_plasticwrap.png", category: "GarbageBin", label: "plastic wrap"},
{imageSrc: "items/garbage_plate.png", category: "GarbageBin", label: "broken plate"},
{imageSrc: "items/garbage_snackwrapper.png", category: "GarbageBin", label: "snack wrappers"},
{imageSrc: "items/garbage_sodacupblue.png", category: "GarbageBin", label: "coated soda cup"},
{imageSrc: "items/garbage_sodacupyellow.png", category: "GarbageBin", label: "coated soda cup"},
{imageSrc: "items/garbage_straws.png", category: "GarbageBin", label: "plastic straws"},
{imageSrc: "items/garbage_styrofoamcup.png", category: "GarbageBin", label: "styrofoam coffee cup"},
{imageSrc: "items/garbage_toothpaste.png", category: "GarbageBin", label: "toothpaste tube"},
{imageSrc: "items/garbage_toycar.png", category: "GarbageBin", label: "broken plastic toy"},
{imageSrc: "items/garbage_treatedwood.png", category: "GarbageBin", label: "treated lumber"},
{imageSrc: "items/garbage_utensils.png", category: "GarbageBin", label: "plastic utensils"},
{imageSrc: "items/garbage_vacuumtube.png", category: "GarbageBin", label: "vaccuum hose"},
{imageSrc: "items/garbage_wipes.png", category: "GarbageBin", label: "sanitary wipes"},
{imageSrc: "items/garbage_ziplocbag.png", category: "GarbageBin", label: "ziploc bag"},
{imageSrc: "items/recycling_blankpaper.png", category: "RecyclingBin", label: "paper"},
{imageSrc: "items/recycling_brownbottle.png", category: "RecyclingBin", label: "brown glass bottle"},
{imageSrc: "items/recycling_can.png", category: "RecyclingBin", label: "aluminum can"},
{imageSrc: "items/recycling_cardboard.png", category: "RecyclingBin", label: "cardboard"},
{imageSrc: "items/recycling_cerealbox.png", category: "RecyclingBin", label: "cereal box"},
{imageSrc: "items/recycling_clamshell.png", category: "RecyclingBin", label: "clamshell"},
{imageSrc: "items/recycling_detergentbottle.png", category: "RecyclingBin", label: "detergent bottle"},
{imageSrc: "items/recycling_detergentbottles.png", category: "RecyclingBin", label: "plastic jugs"},
{imageSrc: "items/recycling_foil.png", category: "RecyclingBin", label: "aluminum foil"},
{imageSrc: "items/recycling_glassbottle.png", category: "RecyclingBin", label: "glass bottle"},
{imageSrc: "items/recycling_glassjars.png", category: "RecyclingBin", label: "glass jars"},
{imageSrc: "items/recycling_greenbottle.png", category: "RecyclingBin", label: "green glass bottle"},
{imageSrc: "items/recycling_jug.png", category: "RecyclingBin", label: "plastic milk jug"},
{imageSrc: "items/recycling_jugcrushed.png", category: "RecyclingBin", label: "crushed plastic jug"},
{imageSrc: "items/recycling_junkmail.png", category: "RecyclingBin", label: "junk mail"},
{imageSrc: "items/recycling_linedpaper.png", category: "RecyclingBin", label: "paper"},
{imageSrc: "items/recycling_magazines.png", category: "RecyclingBin", label: "magazines"},
{imageSrc: "items/recycling_mail.png", category: "RecyclingBin", label: "mail"},
{imageSrc: "items/recycling_newspaper.png", category: "RecyclingBin", label: "newspaper"},
{imageSrc: "items/recycling_pietin.png", category: "RecyclingBin", label: "pie tin"},
{imageSrc: "items/recycling_plasticbottles.png", category: "RecyclingBin", label: "plastic bottles"},
{imageSrc: "items/recycling_shampoobottle.png", category: "RecyclingBin", label: "shampoo bottle"},
{imageSrc: "items/recycling_sodacans.png", category: "RecyclingBin", label: "soda cans"},
{imageSrc: "items/recycling_toiletpaperrolls.png", category: "RecyclingBin", label: "cardboard tubes"},
{imageSrc: "items/recycling_waterbottle.png", category: "RecyclingBin", label: "plastic water bottle"},
{imageSrc: "items/recycling_yogurtcup.png", category: "RecyclingBin", label: "yogurt cup"},
{imageSrc: "items/special_batteries.png", category: "SpecialHandling", label: "batteries"},
{imageSrc: "items/special_bleach.png", category: "SpecialHandling", label: "bleach container"},
{imageSrc: "items/special_chairleather.png", category: "SpecialHandling", label: "old furniture"},
{imageSrc: "items/special_chairplasticblue.png", category: "SpecialHandling", label: "plastic furniture"},
{imageSrc: "items/special_chairs.png", category: "SpecialHandling", label: "broken chair"},
{imageSrc: "items/special_chairwooden.png", category: "SpecialHandling", label: "wooden furniture"},
{imageSrc: "items/special_chemicalspray.png", category: "SpecialHandling", label: "chemical spray bottle"},
{imageSrc: "items/special_coffeemaker.png", category: "SpecialHandling", label: "broken coffee maker"},
{imageSrc: "items/special_computer.png", category: "SpecialHandling", label: "broken computer"},
{imageSrc: "items/special_controller.png", category: "SpecialHandling", label: "game controller"},
{imageSrc: "items/special_deskchairfront.png", category: "SpecialHandling", label: "desk chair"},
{imageSrc: "items/special_deskchairside.png", category: "SpecialHandling", label: "office chair"},
{imageSrc: "items/special_dresser.png", category: "SpecialHandling", label: "bulky furniture"},
{imageSrc: "items/special_electronicwires.png", category: "SpecialHandling", label: "assorted wires"},
{imageSrc: "items/special_extinguisher.png", category: "SpecialHandling", label: "fire extinguisher"},
{imageSrc: "items/special_firealarm.png", category: "SpecialHandling", label: "broken fire alarm"},
{imageSrc: "items/special_fridge.png", category: "SpecialHandling", label: "broken refrigerator"},
{imageSrc: "items/special_headphones.png", category: "SpecialHandling", label: "head phones"},
{imageSrc: "items/special_herbicide.png", category: "SpecialHandling", label: "herbicide spray bottle"},
{imageSrc: "items/special_laptop.png", category: "SpecialHandling", label: "broken laptop"},
{imageSrc: "items/special_lightbulbs.png", category: "SpecialHandling", label: "light bulbs"},
{imageSrc: "items/special_meds.png", category: "SpecialHandling", label: "medication"},
{imageSrc: "items/special_microwave.png", category: "SpecialHandling", label: "broken microwave"},
{imageSrc: "items/special_motoroil.png", category: "SpecialHandling", label: "used motor oil"},
{imageSrc: "items/special_oilfilter.png", category: "SpecialHandling", label: "used motor oil filter"},
{imageSrc: "items/special_paint.png", category: "SpecialHandling", label: "leftover paint"},
{imageSrc: "items/special_phone.png", category: "SpecialHandling", label: "old mobile phone"},
{imageSrc: "items/special_propane.png", category: "SpecialHandling", label: "fuel canister"},
{imageSrc: "items/special_speakers.png", category: "SpecialHandling", label: "speakers"},
{imageSrc: "items/special_speakerva.png", category: "SpecialHandling", label: "small electronics"},
{imageSrc: "items/special_spraybottle.png", category: "SpecialHandling", label: "cleaner bottle"},
{imageSrc: "items/special_syringe.png", category: "SpecialHandling", label: "syringe"},
{imageSrc: "items/special_tv.png", category: "SpecialHandling", label: "television"},
{imageSrc: "items/special_washerwhite.png", category: "SpecialHandling", label: "large appliance"},
        // Add more items as needed
    ];

//* Define success and failure messages for each item. *//

const itemMessages = {
"apple core": { correctMessage: "Great job!", incorrectMessage: "Oops! This apple core is compostable!",},
"banana peel": { correctMessage: "Great job!", incorrectMessage: "Oops! This banana peel is compostable!",},
"compostable bowl": { correctMessage: "Great job!", incorrectMessage: "Oops! This compostable bowl is compostable!",},
"small branches": { correctMessage: "Great job!", incorrectMessage: "Oops! These small branches are compostable!",},
"moldy bread": { correctMessage: "Great job!", incorrectMessage: "Oops! This moldy bread is compostable!",},
"moldy carrots": { correctMessage: "Great job!", incorrectMessage: "Oops! These moldy carrots are compostable!",},
"cheese": { correctMessage: "Great job!", incorrectMessage: "Oops! This cheese is compostable!",},
"chicken bones": { correctMessage: "Great job!", incorrectMessage: "Oops! These chicken bones are compostable!",},
"coffee filter": { correctMessage: "Great job!", incorrectMessage: "Oops! This coffee filter is compostable!",},
"eggshells": { correctMessage: "Great job!", incorrectMessage: "Oops! These eggshells are compostable!",},
"fish bones": { correctMessage: "Great job!", incorrectMessage: "Oops! These fish bones are compostable!",},
"dead flowers": { correctMessage: "Great job!", incorrectMessage: "Oops! These dead flowers are compostable!",},
"food scraps": { correctMessage: "Great job!", incorrectMessage: "Oops! These food scraps are compostable!",},
"moldy grapes": { correctMessage: "Great job!", incorrectMessage: "Oops! These moldy grapes are compostable!",},
"weeds": { correctMessage: "Great job!", incorrectMessage: "Oops! This weeds is compostable!",},
"grass clippings": { correctMessage: "Great job!", incorrectMessage: "Oops! These grass clippings are compostable!",},
"untreated wood": { correctMessage: "Great job!", incorrectMessage: "Oops! This untreated wood is compostable!",},
"meat": { correctMessage: "Great job!", incorrectMessage: "Oops! This meat is compostable!",},
"soiled napkin": { correctMessage: "Great job!", incorrectMessage: "Oops! This soiled napkin is compostable!",},
"orange peel": { correctMessage: "Great job!", incorrectMessage: "Oops! This orange peel is compostable!",},
"used paper towel": { correctMessage: "Great job!", incorrectMessage: "Oops! This used paper towel is compostable!",},
"pasta": { correctMessage: "Great job!", incorrectMessage: "Oops! This pasta is compostable!",},
"moldy pear": { correctMessage: "Great job!", incorrectMessage: "Oops! This moldy pear is compostable!",},
"soiled pizza box": { correctMessage: "Great job!", incorrectMessage: "Oops! This soiled pizza box is compostable!",},
"moldy potato": { correctMessage: "Great job!", incorrectMessage: "Oops! This moldy potato is compostable!",},
"rice": { correctMessage: "Great job!", incorrectMessage: "Oops! This rice is compostable!",},
"shrimp shells": { correctMessage: "Great job!", incorrectMessage: "Oops! These shrimp shells are compostable!",},
"moldy squash": { correctMessage: "Great job!", incorrectMessage: "Oops! This moldy squash is compostable!",},
"fiber takeout box": { correctMessage: "Great job!", incorrectMessage: "Oops! This fiber takeout box is compostable!",},
"fiber takeout box": { correctMessage: "Great job!", incorrectMessage: "Oops! This fiber takeout box is compostable!",},
"tea bag": { correctMessage: "Great job!", incorrectMessage: "Oops! This tea bag is compostable!",},
"twigs": { correctMessage: "Great job!", incorrectMessage: "Oops! These twigs are compostable!",},
"compostable utensils": { correctMessage: "Great job!", incorrectMessage: "Oops! These compostable utensils are compostable!",},
"veggie scraps": { correctMessage: "Great job!", incorrectMessage: "Oops! These veggie scraps are compostable!",},
"basketball": { correctMessage: "Great job!", incorrectMessage: "Oops! This basketball must be sent to landfill.",},
"broken planter": { correctMessage: "Great job!", incorrectMessage: "Oops! This broken planter must be sent to landfill.",},
"bubble envelope": { correctMessage: "Great job!", incorrectMessage: "Oops! This bubble envelope must be sent to landfill.",},
"plastic-lined envelope": { correctMessage: "Great job!", incorrectMessage: "Oops! This plastic-lined envelope must be sent to landfill.",},
"bubble wrap": { correctMessage: "Great job!", incorrectMessage: "Oops! This bubble wrap must be sent to landfill.",},
"candy wrapper": { correctMessage: "Great job!", incorrectMessage: "Oops! This candy wrapper must be sent to landfill.",},
"snack bag": { correctMessage: "Great job!", incorrectMessage: "Oops! This snack bag must be sent to landfill.",},
"coated coffee cup": { correctMessage: "Great job!", incorrectMessage: "Oops! This coated coffee cup must be sent to landfill.",},
"coffee pod / k-cup": { correctMessage: "Great job!", incorrectMessage: "Oops! This coffee pod / k-cup must be sent to landfill.",},
"broken glass": { correctMessage: "Great job!", incorrectMessage: "Oops! This broken glass must be sent to landfill.",},
"disposable gloves": { correctMessage: "Great job!", incorrectMessage: "Oops! This disposable gloves must be sent to landfill.",},
"plastic hanger": { correctMessage: "Great job!", incorrectMessage: "Oops! This plastic hanger must be sent to landfill.",},
"juice box": { correctMessage: "Great job!", incorrectMessage: "Oops! This juice box must be sent to landfill.",},
"juice pouch": { correctMessage: "Great job!", incorrectMessage: "Oops! This juice pouch must be sent to landfill.",},
"sanitary mask": { correctMessage: "Great job!", incorrectMessage: "Oops! This sanitary mask must be sent to landfill.",},
"milk carton": { correctMessage: "Great job!", incorrectMessage: "Oops! This milk carton must be sent to landfill.",},
"broken mirror": { correctMessage: "Great job!", incorrectMessage: "Oops! This broken mirror must be sent to landfill.",},
"ceramic mug": { correctMessage: "Great job!", incorrectMessage: "Oops! This ceramic mug must be sent to landfill.",},
"styrofoam peanuts": { correctMessage: "Great job!", incorrectMessage: "Oops! This styrofoam peanuts must be sent to landfill.",},
"pet waste": { correctMessage: "Great job!", incorrectMessage: "Oops! This pet waste must be sent to landfill.",},
"plastic bag": { correctMessage: "Great job!", incorrectMessage: "Oops! This plastic bag must be sent to landfill.",},
"plastic wrap": { correctMessage: "Great job!", incorrectMessage: "Oops! This plastic wrap must be sent to landfill.",},
"broken plate": { correctMessage: "Great job!", incorrectMessage: "Oops! This broken plate must be sent to landfill.",},
"snack wrappers": { correctMessage: "Great job!", incorrectMessage: "Oops! This snack wrappers must be sent to landfill.",},
"coated soda cup": { correctMessage: "Great job!", incorrectMessage: "Oops! This coated soda cup must be sent to landfill.",},
"coated soda cup": { correctMessage: "Great job!", incorrectMessage: "Oops! This coated soda cup must be sent to landfill.",},
"plastic straws": { correctMessage: "Great job!", incorrectMessage: "Oops! This plastic straws must be sent to landfill.",},
"styrofoam coffee cup": { correctMessage: "Great job!", incorrectMessage: "Oops! This styrofoam coffee cup must be sent to landfill.",},
"toothpaste tube": { correctMessage: "Great job!", incorrectMessage: "Oops! This toothpaste tube must be sent to landfill.",},
"broken plastic toy": { correctMessage: "Great job!", incorrectMessage: "Oops! This broken plastic toy must be sent to landfill.",},
"treated lumber": { correctMessage: "Great job!", incorrectMessage: "Oops! This treated lumber must be sent to landfill.",},
"plastic utensils": { correctMessage: "Great job!", incorrectMessage: "Oops! These plastic utensils must be sent to landfill.",},
"vaccuum hose": { correctMessage: "Great job!", incorrectMessage: "Oops! This vaccuum hose must be sent to landfill.",},
"sanitary wipes": { correctMessage: "Great job!", incorrectMessage: "Oops! These sanitary wipes must be sent to landfill.",},
"ziploc bag": { correctMessage: "Great job!", incorrectMessage: "Oops! This ziploc bag must be sent to landfill.",},
"paper": { correctMessage: "Great job!", incorrectMessage: "Oops! This paper can be recycled!",},
"brown glass bottle": { correctMessage: "Great job!", incorrectMessage: "Oops! This brown glass bottle can be recycled!",},
"aluminum can": { correctMessage: "Great job!", incorrectMessage: "Oops! This aluminum can can be recycled!",},
"cardboard": { correctMessage: "Great job!", incorrectMessage: "Oops! This cardboard can be recycled!",},
"cereal box": { correctMessage: "Great job!", incorrectMessage: "Oops! This cereal box can be recycled!",},
"clamshell": { correctMessage: "Great job!", incorrectMessage: "Oops! This clamshell can be recycled!",},
"detergent bottle": { correctMessage: "Great job!", incorrectMessage: "Oops! This detergent bottle can be recycled!",},
"plastic jugs": { correctMessage: "Great job!", incorrectMessage: "Oops! This plastic jugs can be recycled!",},
"aluminum foil": { correctMessage: "Great job!", incorrectMessage: "Oops! This aluminum foil can be recycled!",},
"glass bottle": { correctMessage: "Great job!", incorrectMessage: "Oops! This glass bottle can be recycled!",},
"glass jars": { correctMessage: "Great job!", incorrectMessage: "Oops! These glass jars can be recycled!",},
"green glass bottle": { correctMessage: "Great job!", incorrectMessage: "Oops! This green glass bottle can be recycled!",},
"plastic milk jug": { correctMessage: "Great job!", incorrectMessage: "Oops! This plastic milk jug can be recycled!",},
"crushed plastic jug": { correctMessage: "Great job!", incorrectMessage: "Oops! This crushed plastic jug can be recycled!",},
"junk mail": { correctMessage: "Great job!", incorrectMessage: "Oops! This junk mail can be recycled!",},
"paper": { correctMessage: "Great job!", incorrectMessage: "Oops! This paper can be recycled!",},
"magazines": { correctMessage: "Great job!", incorrectMessage: "Oops! These magazines can be recycled!",},
"mail": { correctMessage: "Great job!", incorrectMessage: "Oops! This mail can be recycled!",},
"newspaper": { correctMessage: "Great job!", incorrectMessage: "Oops! This newspaper can be recycled!",},
"pie tin": { correctMessage: "Great job!", incorrectMessage: "Oops! This pie tin can be recycled!",},
"plastic bottles": { correctMessage: "Great job!", incorrectMessage: "Oops! This plastic bottles can be recycled!",},
"shampoo bottle": { correctMessage: "Great job!", incorrectMessage: "Oops! This shampoo bottle can be recycled!",},
"soda cans": { correctMessage: "Great job!", incorrectMessage: "Oops! These soda cans can be recycled!",},
"cardboard tubes": { correctMessage: "Great job!", incorrectMessage: "Oops! These cardboard tubes can be recycled!",},
"plastic water bottle": { correctMessage: "Great job!", incorrectMessage: "Oops! This plastic water bottle can be recycled!",},
"yogurt cup": { correctMessage: "Great job!", incorrectMessage: "Oops! This yogurt cup can be recycled!",},
"batteries": { correctMessage: "Great job!", incorrectMessage: "Oops! These batteries require special treatment.",},
"bleach container": { correctMessage: "Great job!", incorrectMessage: "Oops! This bleach container requires special treatment.",},
"old furniture": { correctMessage: "Great job!", incorrectMessage: "Oops! This old furniture requires special treatment.",},
"plastic furniture": { correctMessage: "Great job!", incorrectMessage: "Oops! This plastic furniture requires special treatment.",},
"broken chair": { correctMessage: "Great job!", incorrectMessage: "Oops! This broken chair requires special treatment.",},
"wooden furniture": { correctMessage: "Great job!", incorrectMessage: "Oops! This wooden furniture requires special treatment.",},
"chemical spray bottle": { correctMessage: "Great job!", incorrectMessage: "Oops! This chemical spray bottle require special treatment.",},
"broken coffee maker": { correctMessage: "Great job!", incorrectMessage: "Oops! This broken coffee maker requires special treatment.",},
"broken computer": { correctMessage: "Great job!", incorrectMessage: "Oops! This broken computer requires special treatment.",},
"game controller": { correctMessage: "Great job!", incorrectMessage: "Oops! This game controller requires special treatment.",},
"desk chair": { correctMessage: "Great job!", incorrectMessage: "Oops! This desk chair requires special treatment.",},
"office chair": { correctMessage: "Great job!", incorrectMessage: "Oops! This office chair requires special treatment.",},
"bulky furniture": { correctMessage: "Great job!", incorrectMessage: "Oops! This bulky furniture requires special treatment.",},
"assorted wires": { correctMessage: "Great job!", incorrectMessage: "Oops! These assorted wires require special treatment.",},
"fire extinguisher": { correctMessage: "Great job!", incorrectMessage: "Oops! This fire extinguisher requires special treatment.",},
"broken fire alarm": { correctMessage: "Great job!", incorrectMessage: "Oops! This broken fire alarm requires special treatment.",},
"broken refrigerator": { correctMessage: "Great job!", incorrectMessage: "Oops! This broken refrigerator requires special treatment.",},
"head phones": { correctMessage: "Great job!", incorrectMessage: "Oops! These head phones require special treatment.",},
"herbicide spray bottle": { correctMessage: "Great job!", incorrectMessage: "Oops! This herbicide spray bottle requires special treatment.",},
"broken laptop": { correctMessage: "Great job!", incorrectMessage: "Oops! This broken laptop requires special treatment.",},
"light bulbs": { correctMessage: "Great job!", incorrectMessage: "Oops! These light bulbs require special treatment.",},
"medication": { correctMessage: "Great job!", incorrectMessage: "Oops! This medication requires special treatment.",},
"broken microwave": { correctMessage: "Great job!", incorrectMessage: "Oops! This broken microwave requires special treatment.",},
"used motor oil": { correctMessage: "Great job!", incorrectMessage: "Oops! This used motor oil requires special treatment.",},
"used motor oil filter": { correctMessage: "Great job!", incorrectMessage: "Oops! This used motor oil filter requires special treatment.",},
"leftover paint": { correctMessage: "Great job!", incorrectMessage: "Oops! This leftover paint requires special treatment.",},
"old mobile phone": { correctMessage: "Great job!", incorrectMessage: "Oops! This old mobile phone requires special treatment.",},
"fuel canister": { correctMessage: "Great job!", incorrectMessage: "Oops! This fuel canister requires special treatment.",},
"speakers": { correctMessage: "Great job!", incorrectMessage: "Oops! These speakers require special treatment.",},
"small electronics": { correctMessage: "Great job!", incorrectMessage: "Oops! These small electronics require special treatment.",},
"cleaner bottle": { correctMessage: "Great job!", incorrectMessage: "Oops! This cleaner bottle requires special treatment.",},
"syringe": { correctMessage: "Great job!", incorrectMessage: "Oops! This syringe requires special treatment.",},
"television": { correctMessage: "Great job!", incorrectMessage: "Oops! This television requires special treatment.",},
"large appliance": { correctMessage: "Great job!", incorrectMessage: "Oops! This large appliance requires special treatment.",},
  // Add similar entries for other items
};


// Function to create and populate draggable items
function createDraggableItems(maxItems) {
  const draggableItemsContainer = document.querySelector(".draggable-items");
  draggableItemsContainer.innerHTML = ""; // Clear the container

  // Shuffle the draggableItems array
  //const shuffledItems = shuffleArray(draggableItems);

  // Only take up to the first 'maxItems' items
  const itemsToDisplay = shuffledItems.slice(0, maxItems);
  //draggableItems = itemsToDisplay;
  for (const item of draggableItems) {
    const draggableItem = document.createElement("div");
    draggableItem.classList.add("draggable-item");
    draggableItem.draggable = true;
    draggableItem.dataset.category = item.category;

    // Create the image element
    const img = document.createElement("img");
    img.src = item.imageSrc;
    img.alt = item.label;

    // Create the label element
    const label = document.createElement("div");
    label.classList.add("label");
    label.textContent = item.label;

    draggableItem.appendChild(img);
    draggableItem.appendChild(label);

    draggableItemsContainer.appendChild(draggableItem);

    //Add a dragstart event listener to initiate the drag
    draggableItem.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", JSON.stringify({ label: item.label, category: item.category, index: draggableItems.indexOf(item) }));
    });

 
  }
}

// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
  // Shuffle the draggableItems array
  const shuffledItems = shuffleArray(originalDraggableItems);

  // Only take up to the first 'maxItems' items
  draggableItems = shuffledItems.slice(0, 10);
  // Call the function to create and populate draggable items
  createDraggableItems(10);

  // Function to check if an item was dropped in the correct category
function checkDropCategory(event, expectedCategory, dropZone) {
  const droppedItemData = JSON.parse(event.dataTransfer.getData("text/plain"));
  const droppedCategory = droppedItemData.category;
  const droppedLabel = droppedItemData.label;
  const itemIndex = droppedItemData.index;
  const dropZoneImage = dropZone.querySelector(".drop-zone-image");
  const correctImage = dropZone.querySelector(".correct-image");
  const incorrectImage = dropZone.querySelector(".incorrect-image");

  // Clear any ongoing animations
  correctImage.style.animation = 'none';
  incorrectImage.style.animation = 'none';

  // Check if the dropped item matches the expected category
  if (droppedCategory === expectedCategory) {
    // Item was dropped in the correct category
    console.log(`Item ${droppedLabel} was dropped in the correct category: ${expectedCategory}`);
    correctCount++;
    correctCountSpan.textContent = correctCount; // Update correct count

    // Show the correct message
    showMessage(itemMessages[droppedLabel].correctMessage);

    // Hide the drop zone image
    dropZoneImage.style.opacity = "1"; // Hide the dropZoneImage

    // Show the correct image briefly
    correctImage.style.opacity = "1";
    correctImage.classList.remove("no-animation");
    setTimeout(() => {
      correctImage.style.opacity = "0";
      correctImage.classList.add("no-animation");

      // Delay to re-display the drop zone image
      setTimeout(() => {
        dropZoneImage.style.opacity = "1"; // Re-display the dropZoneImage
      }, 500); // Adjust the duration (in milliseconds) as needed
    }, 2000); // Adjust the duration (in milliseconds) as needed
  } else {
    // Incorrect category
    console.log(`Item ${droppedLabel} was dropped in the wrong category: ${droppedCategory}`);
    incorrectCount++;
    incorrectCountSpan.textContent = incorrectCount;

// Show the incorrect message
    showMessage(itemMessages[droppedLabel].incorrectMessage);

    // Hide the drop zone image
    dropZoneImage.style.opacity = "1"; // Hide the dropZoneImage

    // Show the incorrect image briefly
    incorrectImage.style.opacity = "1";
    incorrectImage.classList.remove("no-animation");
    setTimeout(() => {
      incorrectImage.style.opacity = "0";
      incorrectImage.classList.add("no-animation");

      // Delay to re-display the drop zone image
      setTimeout(() => {
        dropZoneImage.style.opacity = "1"; // Re-display the dropZoneImage
      }, 500); // Adjust the duration (in milliseconds) as needed
    }, 2000); // Adjust the duration (in milliseconds) as needed
  }
  // Remove the item from the list
  removeItemByIndex(itemIndex);

  // Recreate the draggable items without the dropped item
  createDraggableItems();
}

function showMessage(message) {
  const messageContainer = document.getElementById("message-container");
  messageContainer.textContent = message;
  messageContainer.style.display = "block";

  // Hide the message after a certain duration (e.g., 3 seconds)
  setTimeout(() => {
    messageContainer.style.display = "none";
  }, 2000); // Adjust the duration (in milliseconds) as needed
}

// Function to remove an item from the list by index
function removeItemByIndex(index) {
  if (index > -1) {
    draggableItems.splice(index, 1);
  }
}

  // Add event listeners for the drop zones
  dropZones.forEach((dropZone) => {
    dropZone.addEventListener("dragover", (event) => {
      event.preventDefault(); // Allow drop
    });

    dropZone.addEventListener("drop", (event) => {
      event.preventDefault(); // Prevent default behavior (opening file/page)
      if(continueGame) {
        checkDropCategory(event, dropZone.dataset.category, dropZone);

        // If 10 attempts have been made
        if(correctCount+incorrectCount>=10) {
          continueGame=false;
          // Delay to display end game to allow counters to update
          setTimeout(() => {
            ShowEndGameMessage(); // Display End game message
          }, 500); // Adjust the duration (in milliseconds) as needed
        }
      }
      else
        // Delay to display end game to allow counters to update
        setTimeout(() => {
          ShowEndGameMessage(); // Display End game message
        }, 500); // Adjust the duration (in milliseconds) as needed
    });
  });

  function ShowEndGameMessage(){
    let msg="Your Score: "+correctCount+"/"+(correctCount+incorrectCount)+"<br>"
    switch(correctCount)
    {
    case 10:
      msg+="Perfect score!";
      break;
    case 9:
    case 8:
      msg+="Great job! You really know your stuff. Thank you for helping us keep Dublin clean and green!";
      break;
    case 7:
      case 6:
        msg+="Nice work! You work hard to make sure that every recyclable and compostable item is discarded correctly. Thank you for helping us keep Dublin clean and green!";
        break;
    case 5:
      case 4:
        msg+="Nice work! Like many of us, you still get stumped by some of the trickier items, but you're learning. Keep practicing, and don't forget to check the Accepted Items list when you're not sure where something goes!";
        break;
    default:
      msg+="Don't get discouraged! Dublin has a number of resources that you can use to improve your recycling and composting know-how. Explore our website to find information, ask questions, and learn more. Thank you for helping us keep Dublin clean and green!";
      break;
    }
    document.getElementById("score").innerHTML = msg;
    var scoreZone = document.getElementsByClassName("score-zone-popup");
    if(scoreZone.length>=1)
      scoreZone[0].style.display = "flex";

      //TODO: sharing Links
    // //get screenshot to share
    // const screenshotTarget =  document.getElementsByClassName("score-zone-popup")[0];
    
    // html2canvas(screenshotTarget).then((canvas) => {
    //     const base64image = canvas.toDataURL("image/png");
    //     var url=base64image; //Set desired URL here
    //     var img=base64image+"/image.png"; //Set Desired Image here

    //     fetch(url)
    //     .then(res => res.blob())
    //     .then(blob => {
    //       url = URL.createObjectURL(blob);
    //       var totalurl=encodeURIComponent(url+'?img='+img);
    //       let shareFb = document.getElementById("shareFb");
    //       let shareX = document.getElementById("shareX");
    //       shareFb.href = 'http://www.facebook.com/sharer.php?u='+encodeURIComponent(url),'','width=500, height=500, scrollbars=yes, resizable=no';
    //       shareX.href="https://twitter.com/intent/tweet?text=I%20just%20scored%20100%20points!"
    //     })
    //  });  
  }
  function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.click();
    //after creating link you should delete dynamic link
    //clearDynamicLink(link); 
}
});