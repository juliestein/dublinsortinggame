document.addEventListener("DOMContentLoaded", () => {
  const dropZones = document.querySelectorAll(".drop-zone");
  const correctCountSpan = document.getElementById("correct-count");
  const incorrectCountSpan = document.getElementById("incorrect-count");
  let correctCount = 0;
  let incorrectCount = 0;
  const resetButton = document.getElementById("reset-button");
  const closeButton = document.getElementById("close-popup");
  let continueGame=true;
  let gameData=[];
let messageIntervalId = null;
let messageEndTime = null;

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
{imageSrc: "items/compost_utensils.png", category: "CompostingBin", label: "wooden utensils"},
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
"wooden utensils": { correctMessage: "Great job!", incorrectMessage: "Oops! These compostable utensils are compostable!",},
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
"batteries": { correctMessage: "Great job! Used batteries should be placed on top of your recycling cart in a clear plastic bag on the day of collection or to the battery bucket at your multifamily property.", incorrectMessage: "Batteries require special handling in Dublin. Used batteries should be placed on top of your recycling cart in a clear plastic bag on the day of collection. Residents of multifamily properties can request free battery bucket for their property through their property manager from AVI.",},
"bleach container": { correctMessage: "Great job! Household cleaners can be hazardous, even in small quantities. Take it to your local HHW Facility for proper disposal.", incorrectMessage: "Household cleaners and containers can be hazardous and they require special handling in Dublin. Take it to your local HHW Facility for proper disposal.",},
"old furniture": { correctMessage: "Great job! Furniture is too bulky for curbside containers, so you'll need to request a special large item pick-up. Before you do that, consider repair or donation options!", incorrectMessage: "Furniture is too bulky for curbside containers, so you'll need to request a special large item pick-up. Before you do that, consider repair or donation options!",},
"plastic furniture": { correctMessage: "Great job! Furniture is too bulky for curbside containers, so you'll need to request a special large item pick-up. Before you do that, consider repair or donation options!", incorrectMessage: "Furniture is too bulky for curbside containers, so you'll need to request a special large item pick-up. Before you do that, consider repair or donation options!",},
"broken chair": { correctMessage: "Great job! Furniture is too bulky for curbside containers, so you'll need to request a special large item pick-up. Before you do that, consider repair or donation options!", incorrectMessage: "Furniture is too bulky for curbside containers, so you'll need to request a special large item pick-up. Before you do that, consider repair or donation options!",},
"wooden furniture": { correctMessage: "Great job! Furniture is too bulky for curbside containers, so you'll need to request a special large item pick-up. Before you do that, consider repair or donation options!", incorrectMessage: "Furniture is too bulky for curbside containers, so you'll need to request a special large item pick-up. Before you do that, consider repair or donation options!",},
"chemical spray bottle": { correctMessage: "Great job! Household cleaners and containers can be hazardous. Take it to your local HHW Facility for proper disposal.", incorrectMessage: "Household cleaners and containers can be hazardous and they require special handling in Dublin. Take it to your local HHW Facility for proper disposal.",},
"broken coffee maker": { correctMessage: "Great job! Small appliances count as electronic waste, so you’ll need to request a special large item pick up or take it to your local HHW facility for proper disposal. Before you do that, consider repair or donation options!", incorrectMessage: "Small appliances count as electronic waste, so you’ll need to request a special large item pick up or take it  to your local HHW facility for proper disposal. Before you do that, consider repair or donation options!",},
"broken computer": { correctMessage: "Great job! Small appliances count as electronic waste, so you’ll need to request a  special large item pick up or take it to your local HHW facility for proper disposal. Before you do that, consider repair or donation options!", incorrectMessage: "Small appliances count as electronic waste, so you’ll need to request a special large item pick up or take it  to your local HHW facility for proper disposal. Before you do that, consider repair or donation options!",},
"game controller": { correctMessage: "Great job! Small appliances count as electronic waste, so you’ll need to request a special large item pick up or take it to your local HHW facility for proper disposal. Before you do that, consider repair or donation options!", incorrectMessage: "Small appliances count as electronic waste, so you’ll need to request a special large item pick up or take it  to your local HHW facility for proper disposal. Before you do that, consider repair or donation options!",},
"desk chair": { correctMessage: "Great job! Desk chairs are too bulky for curbside containers, so you'll need to request a special large item pick-up. Before you do that, consider repair or donation options!", incorrectMessage: "Desk chairs are too bulky for curbside containers, so you'll need to request a special large item pick-up. Before you do that, consider repair or donation options!",},
"office chair": { correctMessage: "Great job! Office chairs are too bulky for curbside containers, so you'll need to request a special large item pick-up. Before you do that, consider repair or donation options!", incorrectMessage: "Office chairs are too bulky for curbside containers, so you'll need to request a special large item pick-up. Before you do that, consider repair or donation options!",},
"bulky furniture": { correctMessage: "Great job! Furniture is too bulky for curbside containers, so you'll need to request a special large item pick-up. Before you do that, consider repair or donation options!", incorrectMessage: "Furniture is too bulky for curbside containers, so you'll need to request a special large item pick-up. Before you do that, consider repair or donation options!",},
"assorted wires": { correctMessage: "Great job! Wires and cables contain valuable metals, but they can break recycling equipment and are not allowed in curbside recycling containers. You can request a special pick-up or drop them off at your local HHW facility.", incorrectMessage: "Wires and cables contain valuable metals, but they can break recycling equipment and are not allowed in curbside recycling containers. You can request a special large item pick-up or drop them off at your local HHW facility.",},
"fire extinguisher": { correctMessage: "Great job! Fire extinguishers are considered hazardous and require special disposal at your local HHW facility. First, consider extending the life of your extinguisher through refurbishing, repair, and/or recharging with a company specializing in fire extinguishers.", incorrectMessage: "Fire extinguishers are considered hazardous and require special disposal at your local HHW facility. First, consider extending the life of your extinguisher through refurbishing, repair, and/or recharging with a company specializing in fire extinguishers.",},
"broken fire alarm": { correctMessage: "Great job! Small electronic devices like smoke alarms count as electronic waste, so you’ll need to request a special large item pick-up or take it to your local HHW facility for proper disposal. Before you do that, consider repair or donation options!", incorrectMessage: "Small electronic devices like smoke alarms count as electronic waste, so you’ll need to request a special large item pick-up or take it to your local HHW facility for proper disposal. Before you do that, consider repair or donation options!",},
"broken refrigerator": { correctMessage: "Great job! Refrigerators and other large appliances are considered bulky and hazardous and require special large item pick-up in Dublin. But first, consider repairing your appliance with iFixit, or explore local donation options.", incorrectMessage: "Refrigerators and other large appliances are considered bulky and hazardous and require special large item pick-up in Dublin. But first, consider repairing your appliance with iFixit, or explore local donation options.",},
"head phones": { correctMessage: "Great job! Headphones count as electronic waste, so you’ll need to request a special large item pick-up or take it to your local HHW facility for proper disposal. Before you do that, consider repair or donation options!", incorrectMessage: "Small appliances count as electronic waste, so you’ll need to request a special large item pick-up or take it to your local HHW facility for proper disposal. Before you do that, consider repair or donation options!",},
"herbicide spray bottle": { correctMessage: "Great job! Herbicides, pesticides, and other toxic products can be hazardous, even in small quantities. Take it to your local HHW Facility for proper disposal.", incorrectMessage: "Herbicides, pesticides, and other toxic products can be hazardous, even in small quantities. Take it to your local HHW Facility for proper disposal.",},
"broken laptop": { correctMessage: "Great job! Laptops and tablets count as electronic waste, so you’ll need to request a special large item pick-up or take it to your local HHW facility for proper disposal. Before you do that, consider repair or donation options!", incorrectMessage: "Laptops and tablets count as electronic waste, so you’ll need to request a special large item pick-up or take it to your local HHW facility for proper disposal. Before you do that, consider repair or donation options!",},
"light bulbs": { correctMessage: "Great job! CFL, flourescent, and LED light bulbs are considered hazardous and must be taken to your local HHW facility for disposal.", incorrectMessage: "CFL, flourescent, and LED light bulbs are considered hazardous and must be taken to your local HHW facility for disposal.",},
"medication": { correctMessage: "Great job! Medications are considered hazardous and require special handling at kiosks that are designed to accept pharmaceutical waste, which can be found at most local drug stores and pharmacies. Questions? Reach out to safedrugdisposal@acgov.org.", incorrectMessage: "Medications are considered hazardous and require special handling at kiosks that are designed to accept pharmaceutical waste, which can be found at most local drug stores and pharmacies. Questions? Reach out to safedrugdisposal@acgov.org.",},
"broken microwave": { correctMessage: "Great job! Small appliances count as electronic waste, so you’ll need to request a special large item pick-up or take it to your local HHW facility for proper disposal. Before you do that, consider repair or donation options!", incorrectMessage: "Small appliances count as electronic waste, so you’ll need to request a special large item pick-up or take it to your local HHW facility for proper disposal. Before you do that, consider repair or donation options!",},
"used motor oil": { correctMessage: "Great job! Used motor oil should be recycled at a Certified Collection Center or taken to your local HHW facility. (Don't forget to bring your filter, too!)", incorrectMessage: "Used motor oil should be recycled at a Certified Collection Center or taken to your local HHW facility. (Don't forget to bring your filter, too!)",},
"used motor oil filter": { correctMessage: "Great job! Used motor oil filters should be recycled at a Certified Collection Center or taken to your local HHW facility. You can also call AVI to request a special oil jug and filter bag for curbside pickup.", incorrectMessage: "Used motor oil filters should be recycled at a Certified Collection Center or taken to your local HHW facility. You can also call AVI to request a special oil jug and filter bag for curbside pickup.",},
"leftover paint": { correctMessage: "Great job! Leftover paint is considered hazardous and requires special handling at your local HHW facility. But first, consider creative ways to use it up, donate it to a local Paint Care site, or offer it up to friends and neighbors.", incorrectMessage: "Leftover paint is considered hazardous and requires special handling at your local HHW facility. But first, consider creative ways to use it up, donate it to a local Paint Care site, or offer it up to friends and neighbors.",},
"old mobile phone": { correctMessage: "Great job! Mobile phones and tablets count as electronic waste, so you’ll need to request a special large item pick-up or take it to your local HHW facility for proper disposal. Before you do that, consider take-back, repair, or donation options!", incorrectMessage: "Mobile phones and tablets count as electronic waste, so you’ll need to request a special large item pick-up or take it to your local HHW facility for proper disposal. Before you do that, consider repair or donation options!",},
"fuel canister": { correctMessage: "Great job! Fuel canisters and compressed air cylinders are hazardous and require special handling. Many hardware and sporting goods stores offer take-bake or buy-back programs. Or, you can take it to your local HHW drop-off site.", incorrectMessage: "Fuel canisters and compressed air cylinders are hazardous and require special handling. Many hardware and sporting goods stores offer take-bake or buy-back programs. Or, you can take it to your local HHW drop-off site.",},
"speakers": { correctMessage: "Great job! Speakers count as electronic waste, so you’ll need to request a special large item pick-up or take it to your local HHW facility for proper disposal. Before you do that, consider repair or donation options!", incorrectMessage: "Speakers count as electronic waste, so you’ll need to request a special large item pick-up or take it to your local HHW facility for proper disposal. Before you do that, consider repair or donation options!",},
"small electronics": { correctMessage: "Great job! Small electronics can be picked up during a special large item pick-up or should be taken to your local HHW facility for proper disposal. Before you do that, consider repair or donation options!", incorrectMessage: "Small electronics can be picked up during a special large item pick-up or should be taken to your local HHW facility for proper disposal. Before you do that, consider repair or donation options!",},
"cleaner bottle": { correctMessage: "Great job! Household cleaners can be hazardous, even in small quantities. Take it to your local HHW Facility for proper disposal.", incorrectMessage: "Household cleaners and containers can be hazardous and they require special handling in Dublin. Take it to your local HHW Facility for proper disposal.",},
"syringe": { correctMessage: "Great job! It is illegal to dispose syringes and needles — also known as sharps — in landfill, compost, or recycling containers. Sharps should be discarded in FDA-approved containers, which can be found in most local drug stores and pharmacies.", incorrectMessage: "It is illegal to dispose syringes and needles — also known as sharps — in landfill, compost, or recycling containers. Sharps should be discarded in FDA-approved containers, which can be found in most local drug stores and pharmacies.",},
"television": { correctMessage: "Great job! Televisions and monitors count as electronic waste, so you’ll need to request a special large item pick-up or take it to your local HHW facility for proper disposal. Before you do that, consider repair or donation options!", incorrectMessage: "Televisions and monitors count as electronic waste, so you’ll need to request a special large item pick-up or take it to your local HHW facility for proper disposal. Before you do that, consider repair or donation options!",},
"large appliance": { correctMessage: "Large appliances are considered bulky and hazardous and require special large item pick-up in Dublin. But first, consider repairing your appliance with iFixit, or explore local donation options.",},
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

    gameData.push({"item":droppedLabel,"isCorrect":true});
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

    gameData.push({"item":droppedLabel,"isCorrect":false});
  }
  // Remove the item from the list
  removeItemByIndex(itemIndex);

  // Recreate the draggable items without the dropped item
  createDraggableItems();
}

function showMessage(message, duration = 12000) {
  const messageContainer = document.getElementById("message-container");

  // Update the message content
  messageContainer.textContent = message;
  messageContainer.style.display = "block";

  // Set the end time for the message display
  messageEndTime = Date.now() + duration;

  // Clear any existing interval to prevent overlap
  if (messageIntervalId) {
    clearInterval(messageIntervalId);
  }

  // Start a new interval to check the display duration
  messageIntervalId = setInterval(() => {
    // Check if the current time has passed the end time
    if (Date.now() >= messageEndTime) {
      messageContainer.style.display = "none";
      clearInterval(messageIntervalId);  // Clear the interval when done
      messageIntervalId = null;
    }
  }, 100);  // Check every 100ms for accuracy
}

function hideMessage() {
  const messageContainer = document.getElementById("message-container");
  messageContainer.style.display = "none";

  // Clear the interval and reset the end time
  if (messageIntervalId) {
    clearInterval(messageIntervalId);
    messageIntervalId = null;
  }
  messageEndTime = null;
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
            ShowEndGameMessage(true); // Display End game message
          }, 500); // Adjust the duration (in milliseconds) as needed
        }
      }
      else
        // Delay to display end game to allow counters to update
        setTimeout(() => {
          ShowEndGameMessage(false); // Display End game message
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

    //call PHP for MySQL data entry
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submitGame.php");
    xhr.setRequestHeader("Content-Type", "application/json");
    const body = JSON.stringify({"Score": correctCount,"gameData":gameData});
    xhr.onload = () => {
      if (xhr.readyState == 4 && xhr.status == 201) {
        console.log(JSON.parse(xhr.responseText));
      } else {
        console.log(`Error: ${xhr.status}`);
      }
    };
    xhr.send(body);
  }
  function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.click();
}
});