var findButton = document.getElementById("find_button");

var userClass = null;


findButton.addEventListener("click", characterLoad);

function characterLoad(){
  document.getElementById("search_status").innerHTML = "NOT FOUND";
  var userName = document.getElementById("character_input").value;
  var userRealm = document.getElementById("realm_input").value;

  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "https://us.api.battle.net/wow/character/" + userRealm + "/"+ userName + "?fields=pvp&locale=en_US&jsonp=callMe&apikey=ma9uqrhvw6vtt86u6pd7tvq5raanfzrg";
  document.getElementsByTagName("head")[0].appendChild(s);

  var v = document.createElement("script");
  v.type = "text/javascript";
  v.src = "https://us.api.battle.net/wow/character/" + userRealm + "/" + userName + "?fields=stats&locale=en_US&jsonp=callMeToo&apikey=ma9uqrhvw6vtt86u6pd7tvq5raanfzrg";
  document.getElementsByTagName("head")[0].appendChild(v);

  var b = document.createElement("script");
  b.type = "text/javascript";
  b.src = "https://us.api.battle.net/wow/character/" + userRealm + "/" + userName + "?fields=statistics&locale=en_US&jsonp=getDataAgain&apikey=ma9uqrhvw6vtt86u6pd7tvq5raanfzrg";
  document.getElementsByTagName("head")[0].appendChild(b);

  var r = document.createElement("script");
  r.type = "text/javascript";
  r.src = "https://us.api.battle.net/wow/character/" + userRealm + "/" + userName + "?fields=items&locale=en_US&jsonp=getItems&apikey=ma9uqrhvw6vtt86u6pd7tvq5raanfzrg";
  document.getElementsByTagName("head")[0].appendChild(r);

}

function callMe(data){
  document.getElementById("user_name1").innerHTML = data.name;
  document.getElementById("user_name2").innerHTML = data.name;
  document.getElementById("user_realm").innerHTML = data.realm;
  document.getElementById("RBG_current_rating").innerHTML = data.pvp.brackets.ARENA_BRACKET_RBG.rating;
  document.getElementById("twos_current_rating").innerHTML = data.pvp.brackets.ARENA_BRACKET_2v2.rating;
  document.getElementById("threes_current_rating").innerHTML = data.pvp.brackets.ARENA_BRACKET_3v3.rating;
  document.getElementById("user_level").innerHTML = data.level;
  document.getElementById("user_image").src = "http://render-api-us.worldofwarcraft.com/static-render/us/" + data.thumbnail;

  if(document.getElementById("character_input").value === document.getElementById("user_name1").innerHTML){
    document.getElementById("search_status").innerHTML ="FOUND";
  }else {
    document.getElementById("search_status").innerHTML = "NOT FOUND";
  }

  if(data.race == 1){
    document.getElementById("user_race").innerHTML = "Human";
  }else if(data.race == 2) {
    document.getElementById("user_race").innerHTML = "Orc";
  }else if (data.race == 3) {
    document.getElementById("user_race").innerHTML = "Dwarf";
  }else if (data.race == 4) {
    document.getElementById("user_race").innerHTML = "Night Elf";
  }else if (data.race == 5) {
    document.getElementById("user_race").innerHTML = "Undead";
  }else if (data.race == 6) {
    document.getElementById("user_race").innerHTML = "Tauren";
  }else if (data.race == 7) {
    document.getElementById("user_race").innerHTML = "Gnome";
  }else if (data.race == 8) {
    document.getElementById("user_race").innerHTML = "Troll";
  }else if (data.race == 9) {
    document.getElementById("user_race").innerHTML = "Goblin";
  }else if (data.race == 10) {
    document.getElementById("user_race").innerHTML = "Blood Elf";
  }else if (data.race == 11) {
    document.getElementById("user_race").innerHTML = "Draenei";
  }else if (data.race == 22) {
    document.getElementById("user_race").innerHTML = "Worgen";
  }else if (data.race == 24) {
    document.getElementById("user_race").innerHTML = "Pandaren";
  }else if (data.race == 25) {
    document.getElementById("user_race").innerHTML = "Pandaren";
  }else if (data.race == 26) {
    document.getElementById("user_race").innerHTML = "Pandaren";
  }else if (data.race == 27) {
    document.getElementById("user_race").innerHTML = "Nightborne";
  }else if (data.race == 28) {
    document.getElementById("user_race").innerHTML = "Highmountain Tauren";
  }else if (data.race == 29) {
    document.getElementById("user_race").innerHTML = "Void Elf";
  }else if (data.race == 30) {
    document.getElementById("user_race").innerHTML = "Lightforged Draenei";
  }

  if(data.class == 1){
    document.getElementById("user_class").innerHTML = "Warrior";
  }else if(data.class == 2) {
    document.getElementById("user_class").innerHTML = "Paladin";
  }else if (data.class == 3) {
    document.getElementById("user_class").innerHTML = "Hunter";
  }else if (data.class == 4) {
    document.getElementById("user_class").innerHTML = "Rogue";
  }else if (data.class == 5) {
    document.getElementById("user_class").innerHTML = "Priest";
  }else if (data.class == 6) {
    document.getElementById("user_class").innerHTML = "Death Knight";
  }else if (data.class == 7) {
    document.getElementById("user_class").innerHTML = "Shaman";
  }else if (data.class == 8) {
    document.getElementById("user_class").innerHTML = "Mage";
  }else if (data.class == 9) {
    document.getElementById("user_class").innerHTML = "Warlock";
  }else if (data.class == 10) {
    document.getElementById("user_class").innerHTML = "Monk";
  }else if (data.class == 11) {
    document.getElementById("user_class").innerHTML = "Druid";
  }else if (data.class == 12) {
    document.getElementById("user_class").innerHTML = "Demon Hunter";
  }
}
function callMeToo(dataToo){
  document.getElementById("user_health").innerHTML = dataToo.stats.health;
  document.getElementById("user_mana").innerHTML = dataToo.stats.power;
  document.getElementById("user_stamina").innerHTML = dataToo.stats.sta;
  document.getElementById("user_strength").innerHTML = dataToo.stats.str;
  document.getElementById("user_intellect").innerHTML = dataToo.stats.int;
  document.getElementById("user_agility").innerHTML = dataToo.stats.agi;
  document.getElementById("user_mastery").innerHTML = dataToo.stats.masteryRating;
  document.getElementById("user_critical").innerHTML = dataToo.stats.critRating;
  document.getElementById("user_haste").innerHTML = dataToo.stats.hasteRating;
  document.getElementById("user_spellcrit").innerHTML = dataToo.stats.spellCritRating;
  document.getElementById("user_versatility").innerHTML = dataToo.stats.versatility;

  document.getElementById("user_points").innerHTML = dataToo.achievementPoints;
  document.getElementById("user_hk").innerHTML = dataToo.totalHonorableKills;
}

function getDataAgain(dataAgain){
  document.getElementById("user_2v2_high").innerHTML = dataAgain.statistics.subCategories[9].subCategories[0].statistics[25].quantity;
  document.getElementById("user_3v3_high").innerHTML = dataAgain.statistics.subCategories[9].subCategories[0].statistics[24].quantity;
  document.getElementById("user_5v5_high").innerHTML = dataAgain.statistics.subCategories[9].subCategories[0].statistics[23].quantity;
}

function getItems(datuh){
  document.getElementById("item_shoulders").innerHTML = datuh.items.shoulder.itemLevel;
  document.getElementById("item_head").innerHTML = datuh.items.head.itemLevel;
  document.getElementById("item_back").innerHTML = datuh.items.back.itemLevel;
  document.getElementById("item_neck").innerHTML = datuh.items.neck.itemLevel;
  document.getElementById("item_wrist").innerHTML = datuh.items.wrist.itemLevel;
  document.getElementById("item_chest").innerHTML = datuh.items.chest.itemLevel;
  document.getElementById("item_gloves").innerHTML = datuh.items.hands.itemLevel;
  document.getElementById("item_ring1").innerHTML = datuh.items.finger1.itemLevel;
  document.getElementById("item_ring2").innerHTML = datuh.items.finger2.itemLevel;
  document.getElementById("item_legs").innerHTML = datuh.items.legs.itemLevel;
  document.getElementById("item_boots").innerHTML = datuh.items.feet.itemLevel;
  try {
    document.getElementById("item_shield").innerHTML = datuh.items.offHand.itemLevel;//MAY BE 2H main or offwep
  }catch(error){
    document.getElementById("item_shield").innerHTML = "---";
  }

  document.getElementById("item_belt").innerHTML = datuh.items.waist.itemLevel;
  document.getElementById("item_mainwep").innerHTML = datuh.items.mainHand.itemLevel;
  try {
    document.getElementById("item_offhand").innerHTML = datuh.items.offHand.itemLevel;//MAY BE 2H or shield
  }catch(error){
    document.getElementById("item_offhand").innerHTML = "---";
  }
  document.getElementById("item_trink1").innerHTML = datuh.items.trinket1.itemLevel;
  document.getElementById("item_trink2").innerHTML = datuh.items.trinket2.itemLevel;

  document.getElementById("user_iilvl").innerHTML = datuh.items.averageItemLevel;
  document.getElementById("user_eilvl").innerHTML = datuh.items.averageItemLevelEquipped;
}
