var base_list=[], li=0;

function base_item(hp,atk,def,spatk,spdef,spd,name,num) {
    this.hp=hp;
    this.atk=atk;
    this.def=def;
    this.spatk=spatk;
    this.spdef=spdef;
    this.spd=spd;
    this.name=name;
    this.num=num;

    if (typeof name_translate !== "undefined")
        if(name_translate(this.num+'')!=null)
            this.name=name_translate(this.num+'');
}

base_list['']=new base_item(0,0,0,0,0,0,'???','');

base_list[li]=new base_item(0,0,0,0,0,0,'???','');
++li;

base_list[li]=new base_item(90,92,75,92,85,60,'Abomasnow','460');
++li;

base_list[li]=new base_item(90,132,105,132,105,30,'Abomasnow (Mega)','460a');
++li;

base_list[li]=new base_item(25,20,15,105,55,90,'Abra','63');
++li;

base_list[li]=new base_item(65,130,60,75,60,75,'Absol','359');
++li;

base_list[li]=new base_item(65,150,60,115,60,115,'Absol (Mega)','359a');
++li;

base_list[li]=new base_item(80,70,40,100,60,145,'Accelgor','617');
++li;

base_list[li]=new base_item(60,150,50,150,50,60,'Aegislash (Blade, Gen 6-7)','681');
++li;

base_list[li]=new base_item(60,50,150,50,150,60,'Aegislash (Shield, Gen 6-7)','681a');
++li;

base_list[li]=new base_item(60,140,50,140,50,60,'Aegislash (Blade)','681b');
++li;

base_list[li]=new base_item(60,50,140,50,140,60,'Aegislash (Shield)','681c');
++li;

base_list[li]=new base_item(80,105,65,60,75,130,'Aerodactyl','142');
++li;

base_list[li]=new base_item(80,135,85,70,95,150,'Aerodactyl (Mega)','142a');
++li;

base_list[li]=new base_item(70,110,180,60,60,50,'Aggron','306');
++li;

base_list[li]=new base_item(70,140,230,60,80,50,'Aggron (Mega)','306a');
++li;

base_list[li]=new base_item(55,70,55,40,55,85,'Aipom','190');
++li;

base_list[li]=new base_item(55,50,45,135,85,120,'Alakazam (Gen 3-5)','65');
++li;

base_list[li]=new base_item(55,50,45,135,95,120,'Alakazam','65a');
++li;

base_list[li]=new base_item(55,50,65,175,95,150,'Alakazam (Mega, Gen 6)','65b');
++li;

base_list[li]=new base_item(55,50,65,175,105,150,'Alakazam (Mega)','65c');
++li;

base_list[li]=new base_item(65,60,75,110,121,64,'Alcremie','869');
++li;

base_list[li]=new base_item(165,75,80,40,45,65,'Alomomola','594');
++li;

base_list[li]=new base_item(75,70,90,70,105,80,'Altaria','334');
++li;

base_list[li]=new base_item(75,110,110,110,105,80,'Altaria (Mega)','334a');
++li;

base_list[li]=new base_item(77,59,50,67,63,46,'Amaura','698');
++li;

base_list[li]=new base_item(75,100,66,60,66,115,'Ambipom','424');
++li;

base_list[li]=new base_item(114,85,70,85,80,30,'Amoonguss','591');
++li;

base_list[li]=new base_item(90,75,75,115,90,55,'Ampharos (Gen 3-5)','181');
++li;

base_list[li]=new base_item(90,75,85,115,90,55,'Ampharos','181a');
++li;

base_list[li]=new base_item(90,95,105,165,110,45,'Ampharos (Mega)','181b');
++li;

base_list[li]=new base_item(45,95,50,40,50,75,'Anorith','347');
++li;

base_list[li]=new base_item(110,85,80,100,80,30,'Appletun','842');
++li;

base_list[li]=new base_item(40,40,80,40,40,20,'Applin','840');
++li;

base_list[li]=new base_item(68,70,92,50,132,42,'Araquanid','752');
++li;

base_list[li]=new base_item(60,85,69,65,79,80,'Arbok (Gen 3-6)','24');
++li;

base_list[li]=new base_item(60,95,69,65,79,80,'Arbok','24a');
++li;

base_list[li]=new base_item(90,110,80,100,80,95,'Arcanine','59');
++li;

base_list[li]=new base_item(120,120,120,120,120,120,'Arceus','493');
++li;

base_list[li]=new base_item(55,112,45,74,45,70,'Archen','566');
++li;

base_list[li]=new base_item(75,140,65,112,65,110,'Archeops','567');
++li;

base_list[li]=new base_item(90,90,100,80,90,55,'Arctovish','883');
++li;

base_list[li]=new base_item(90,100,90,90,80,55,'Arctozolt','881');
++li;

base_list[li]=new base_item(70,90,70,60,60,40,'Ariados (Gen 3-6)','168');
++li;

base_list[li]=new base_item(70,90,70,60,70,40,'Ariados','168a');
++li;

base_list[li]=new base_item(75,125,100,70,80,45,'Armaldo','348');
++li;

base_list[li]=new base_item(101,72,72,99,89,29,'Aromatisse','683');
++li;

base_list[li]=new base_item(50,70,100,40,40,30,'Aron','304');
++li;

base_list[li]=new base_item(41,63,40,40,30,66,'Arrokuda','846');
++li;

base_list[li]=new base_item(90,85,100,95,125,85,'Articuno','144');
++li;

base_list[li]=new base_item(90,85,85,125,100,95,'Articuno (Galarian)','144a');
++li;

base_list[li]=new base_item(103,60,86,60,86,50,'Audino','531');
++li;

base_list[li]=new base_item(103,60,126,80,126,50,'Audino (Mega)','531a');
++li;

base_list[li]=new base_item(123,77,72,99,92,58,'Aurorus','699');
++li;

base_list[li]=new base_item(95,117,184,44,46,28,'Avalugg','713');
++li;

base_list[li]=new base_item(46,87,60,30,40,57,'Axew','610');
++li;

base_list[li]=new base_item(75,125,70,125,70,115,'Azelf','482');
++li;

base_list[li]=new base_item(100,50,80,50,80,50,'Azumarill (Gen 3-5)','184');
++li;

base_list[li]=new base_item(100,50,80,60,80,50,'Azumarill','184a');
++li;

base_list[li]=new base_item(50,20,40,20,40,20,'Azurill','298');
++li;

base_list[li]=new base_item(45,75,60,40,30,50,'Bagon','371');
++li;

base_list[li]=new base_item(40,40,55,40,70,55,'Baltoy','343');
++li;

base_list[li]=new base_item(64,115,65,83,63,65,'Banette','354');
++li;

base_list[li]=new base_item(64,165,75,93,83,75,'Banette (Mega)','354a');
++li;

base_list[li]=new base_item(61,123,60,60,50,136,'Barraskewda','847');
++li;

base_list[li]=new base_item(72,105,115,54,86,68,'Barbacle','689');
++li;

base_list[li]=new base_item(50,48,43,46,41,60,'Barboach','339');
++li;

base_list[li]=new base_item(70,92,65,80,55,98,'Basculin','550');
++li;

base_list[li]=new base_item(60,52,168,47,138,30,'Bastiodon','411');
++li;

base_list[li]=new base_item(60,62,80,63,80,60,'Bayleef','153');
++li;

base_list[li]=new base_item(95,110,80,70,80,50,'Beartic (Gen 5-6)','614');
++li;

base_list[li]=new base_item(95,130,80,70,80,50,'Beartic','614a');
++li;

base_list[li]=new base_item(60,70,50,90,50,65,'Beautifly (Gen 3-5)','267');
++li;

base_list[li]=new base_item(60,70,50,100,50,65,'Beautifly','267a');
++li;

base_list[li]=new base_item(65,80,40,45,80,75,'Beedrill (Gen 3-5)','15');
++li;

base_list[li]=new base_item(65,90,40,45,80,75,'Beedrill','15a');
++li;

base_list[li]=new base_item(65,150,40,15,80,145,'Beedrill (Mega)','15b');
++li;

base_list[li]=new base_item(75,75,75,125,95,40,'Beheeyem','606');
++li;

base_list[li]=new base_item(40,55,80,35,60,30,'Beldum','374');
++li;

base_list[li]=new base_item(75,80,85,90,100,50,'Bellossom (Gen 3-5)','182');
++li;

base_list[li]=new base_item(75,80,95,90,100,50,'Bellossom','182a');
++li;

base_list[li]=new base_item(50,75,35,70,30,40,'Bellsprout','69');
++li;

base_list[li]=new base_item(55,69,85,32,35,28,'Bergmite','712');
++li;

base_list[li]=new base_item(120,125,80,55,60,60,'Bewear','760');
++li;

base_list[li]=new base_item(79,85,60,55,60,71,'Bibarel','400');
++li;

base_list[li]=new base_item(59,45,40,35,40,31,'Bidoof','399');
++li;

base_list[li]=new base_item(42,52,67,39,56,50,'Binacle','688');
++li;

base_list[li]=new base_item(65,125,100,60,70,70,'Bisharp','625');
++li;

base_list[li]=new base_item(53,127,53,151,79,107,'Blacephalon','806');
++li;

base_list[li]=new base_item(79,83,100,85,105,78,'Blastoise','9');
++li;

base_list[li]=new base_item(79,103,120,135,115,78,'Blastoise (Mega)','9a');
++li;

base_list[li]=new base_item(80,120,70,110,70,80,'Blaziken','257');
++li;

base_list[li]=new base_item(80,160,80,130,80,100,'Blaziken (Mega)','257a');
++li;

base_list[li]=new base_item(25,20,20,25,45,45,'Blipbug','824');
++li;

base_list[li]=new base_item(255,10,10,75,135,55,'Blissey','242');
++li;

base_list[li]=new base_item(45,60,32,50,32,76,'Blitzle','522');
++li;

base_list[li]=new base_item(70,105,105,50,40,20,'Boldore','525');
++li;

base_list[li]=new base_item(69,90,60,90,60,121,'Boltund','836');
++li;

base_list[li]=new base_item(50,80,95,10,45,10,'Bonsly','438');
++li;

base_list[li]=new base_item(95,110,95,40,95,55,'Bouffalant','626');
++li;

base_list[li]=new base_item(42,30,38,30,38,32,'Bounsweet','761');
++li;

base_list[li]=new base_item(59,59,58,90,70,73,'Braixen','654');
++li;

base_list[li]=new base_item(100,123,75,57,75,80,'Braviary','628');
++li;

base_list[li]=new base_item(60,130,80,60,60,70,'Breloom','286');
++li;

base_list[li]=new base_item(60,69,69,91,81,50,'Brionne','729');
++li;

base_list[li]=new base_item(67,89,116,79,116,33,'Bronzong','437');
++li;

base_list[li]=new base_item(57,24,86,24,86,23,'Bronzor','436');
++li;

base_list[li]=new base_item(68,105,70,70,70,92,'Bruxish','779');
++li;

base_list[li]=new base_item(40,30,35,50,70,55,'Budew','406');
++li;

base_list[li]=new base_item(55,65,35,60,30,85,'Buizel','418');
++li;

base_list[li]=new base_item(45,49,49,65,65,45,'Bulbasaur','1');
++li;

base_list[li]=new base_item(55,66,44,44,56,85,'Buneary','427');
++li;

base_list[li]=new base_item(38,36,38,32,36,57,'Bunnelby','659');
++li;

base_list[li]=new base_item(40,29,45,29,45,36,'Burmy','412');
++li;

base_list[li]=new base_item(60,45,50,80,80,70,'Butterfree (Gen 3-5)','12');
++li;

base_list[li]=new base_item(60,45,50,90,80,70,'Butterfree','12a');
++li;

base_list[li]=new base_item(107,139,139,53,53,79,'Buzzwole','794');
++li;

base_list[li]=new base_item(50,85,40,85,40,35,'Cacnea','331');
++li;

base_list[li]=new base_item(70,115,60,115,60,55,'Cacturne','332');
++li;

base_list[li]=new base_item(100,80,80,80,80,80,'Calyrex','898');
++li;

base_list[li]=new base_item(100,165,150,85,130,50,'Calyrex (Ice Rider)','898a');
++li;

base_list[li]=new base_item(100,85,80,165,100,150,'Calyrex (Shadow Rider)','898b');
++li;

base_list[li]=new base_item(70,100,70,105,75,40,'Camerupt','323');
++li;

base_list[li]=new base_item(70,120,100,145,105,20,'Camerupt (Mega)','323a');
++li;

base_list[li]=new base_item(50,50,150,50,150,50,'Carbink','703');
++li;

base_list[li]=new base_item(80,60,90,60,70,50,'Carkol','838');
++li;

base_list[li]=new base_item(74,100,72,90,72,46,'Carnivine','455');
++li;

base_list[li]=new base_item(74,108,133,83,65,32,'Carracosta','565');
++li;

base_list[li]=new base_item(45,90,20,65,20,65,'Carvanha','318');
++li;

base_list[li]=new base_item(50,35,55,25,25,15,'Cascoon','268');
++li;

base_list[li]=new base_item(70,70,70,70,70,70,'Castform','351');
++li;

base_list[li]=new base_item(45,30,35,20,20,45,'Caterpie','10');
++li;

base_list[li]=new base_item(100,100,100,100,100,100,'Celebi','251');
++li;

base_list[li]=new base_item(97,101,103,107,101,61,'Celesteela','797');
++li;

base_list[li]=new base_item(100,115,65,90,90,65,'Centiskorch','851');
++li;

base_list[li]=new base_item(60,55,90,145,90,80,'Chandelure','609');
++li;

base_list[li]=new base_item(250,5,5,35,105,50,'Chansey','113');
++li;

base_list[li]=new base_item(78,84,78,109,85,100,'Charizard','6');
++li;

base_list[li]=new base_item(78,130,111,130,85,100,'Charizard (Mega X)','6a');
++li;

base_list[li]=new base_item(78,104,78,159,115,100,'Charizard (Mega Y)','6b');
++li;

base_list[li]=new base_item(57,82,95,55,75,36,'Charjabug','737');
++li;

base_list[li]=new base_item(39,52,43,60,50,65,'Charmander','4');
++li;

base_list[li]=new base_item(58,64,58,80,65,80,'Charmeleon','5');
++li;

base_list[li]=new base_item(76,65,45,92,42,91,'Chatot','441');
++li;

base_list[li]=new base_item(70,60,70,87,78,85,'Cherrim','421');
++li;

base_list[li]=new base_item(45,35,45,62,53,35,'Cherubi','420');
++li;

base_list[li]=new base_item(88,107,122,74,75,64,'Chesnaught','652');
++li;

base_list[li]=new base_item(56,61,65,48,45,33,'Chespin','650');
++li;

base_list[li]=new base_item(50,64,50,38,38,44,'Chewtle','833');
++li;

base_list[li]=new base_item(45,49,65,49,65,45,'Chikorita','152');
++li;

base_list[li]=new base_item(44,58,44,58,44,61,'Chimchar','390');
++li;

base_list[li]=new base_item(65,50,70,95,80,65,'Chimecho (Gen 3-6)','358');
++li;

base_list[li]=new base_item(75,50,80,95,90,65,'Chimecho','358a');
++li;

base_list[li]=new base_item(75,38,38,56,56,67,'Chinchou','170');
++li;

base_list[li]=new base_item(45,30,50,65,50,45,'Chingling','433');
++li;

base_list[li]=new base_item(75,95,60,65,60,115,'Cinccino','573');
++li;

base_list[li]=new base_item(80,116,75,65,75,119,'Cinderace','815');
++li;

base_list[li]=new base_item(35,64,85,74,55,32,'Clamperl','366');
++li;

base_list[li]=new base_item(50,53,62,58,63,44,'Clauncher','692');
++li;

base_list[li]=new base_item(71,73,88,120,89,59,'Clawitzer','693');
++li;

base_list[li]=new base_item(60,70,105,70,120,75,'Claydol','344');
++li;

base_list[li]=new base_item(95,70,73,85,90,60,'Clefable (Gen 3-5)','36');
++li;

base_list[li]=new base_item(95,70,73,95,90,60,'Clefable','36a');
++li;

base_list[li]=new base_item(70,45,48,60,65,35,'Clefairy','35');
++li;

base_list[li]=new base_item(50,25,28,45,55,15,'Cleffa','173');
++li;

base_list[li]=new base_item(50,68,60,50,50,32,'Clobbopus','852');
++li;

base_list[li]=new base_item(50,95,180,85,45,70,'Cloyster','91');
++li;

base_list[li]=new base_item(110,80,120,80,90,30,'Coalossal','839');
++li;

base_list[li]=new base_item(91,90,129,90,72,108,'Cobalion','638');
++li;

base_list[li]=new base_item(58,50,145,95,105,30,'Cofagrigus','563');
++li;

base_list[li]=new base_item(30,30,42,30,42,70,'Combee','415');
++li;

base_list[li]=new base_item(60,85,60,85,60,55,'Combusken','256');
++li;

base_list[li]=new base_item(51,52,90,82,110,100,'Comfey','764');
++li;

base_list[li]=new base_item(105,140,95,55,65,45,'Conkeldurr','534');
++li;

base_list[li]=new base_item(122,130,69,80,69,30,'Copperajah','879');
++li;

base_list[li]=new base_item(43,80,65,50,35,35,'Corphish','341');
++li;

base_list[li]=new base_item(55,55,85,65,85,35,'Corsola (Gen 3-6)','222');
++li;

base_list[li]=new base_item(65,55,95,65,95,35,'Corsola','222a');
++li;

base_list[li]=new base_item(60,55,100,65,100,30,'Corsola (Galarian)','222b');
++li;

base_list[li]=new base_item(98,87,105,53,85,67,'Corviknight','823');
++li;

base_list[li]=new base_item(68,67,55,43,55,77,'Corvisquire','822');
++li;

base_list[li]=new base_item(43,29,131,29,131,37,'Cosmoem','790');
++li;

base_list[li]=new base_item(43,29,31,29,31,37,'Cosmog','789');
++li;

base_list[li]=new base_item(40,27,60,37,50,66,'Cottonee','546');
++li;

base_list[li]=new base_item(97,132,77,62,67,43,'Crabominable','740');
++li;

base_list[li]=new base_item(47,82,57,42,47,63,'Crabrawler','739');
++li;

base_list[li]=new base_item(86,81,97,81,107,43,'Cradily','346');
++li;

base_list[li]=new base_item(70,85,55,85,95,85,'Cramorant','845');
++li;

base_list[li]=new base_item(67,125,40,30,30,58,'Cranidos','408');
++li;

base_list[li]=new base_item(63,120,85,90,55,55,'Crawdaunt','342');
++li;

base_list[li]=new base_item(120,70,120,75,130,85,'Cresselia','488');
++li;

base_list[li]=new base_item(48,61,40,61,40,50,'Croagunk','453');
++li;

base_list[li]=new base_item(85,90,80,70,80,130,'Crobat','169');
++li;

base_list[li]=new base_item(65,80,80,59,63,58,'Croconaw','159');
++li;

base_list[li]=new base_item(70,95,125,65,75,45,'Crustle (Gen 5-6)','558');
++li;

base_list[li]=new base_item(70,105,125,65,75,45,'Crustle','558a');
++li;

base_list[li]=new base_item(70,50,30,95,135,105,'Cryogonal (Gen 5-6)','615');
++li;

base_list[li]=new base_item(80,50,50,95,135,105,'Cryogonal','615a');
++li;

base_list[li]=new base_item(55,70,40,60,40,40,'Cubchoo','613');
++li;

base_list[li]=new base_item(50,50,95,40,50,35,'Cubone','104');
++li;

base_list[li]=new base_item(72,80,49,40,49,40,'Cufant','878');
++li;

base_list[li]=new base_item(60,95,50,145,130,30,'Cursola','864');
++li;

base_list[li]=new base_item(40,45,40,55,40,84,'Cutiefly','742');
++li;

base_list[li]=new base_item(39,52,43,60,50,65,'Cyndaquil','155');
++li;

base_list[li]=new base_item(70,90,90,135,90,125,'Darkrai','491');
++li;

base_list[li]=new base_item(105,140,55,30,55,95,'Darmanitan','555');
++li;

base_list[li]=new base_item(105,30,105,140,105,55,'Darmanitan (Zen)','555a');
++li;

base_list[li]=new base_item(105,140,55,30,55,95,'Darmanitan (Galarian)','555b');
++li;

base_list[li]=new base_item(105,160,55,30,55,135,'Darmanitan (Zen Galarian)','555c');
++li;

base_list[li]=new base_item(78,75,75,70,70,52,'Dartrix','723');
++li;

base_list[li]=new base_item(70,90,45,15,45,50,'Darumaka','554');
++li;

base_list[li]=new base_item(70,90,45,15,45,50,'Darumaka (Galarian)','554a');
++li;

base_list[li]=new base_item(78,107,75,100,100,70,'Decidueye','724');
++li;

base_list[li]=new base_item(67,58,57,81,67,101,'Dedenne','702');
++li;

base_list[li]=new base_item(60,60,50,40,50,75,'Deerling','585');
++li;

base_list[li]=new base_item(52,65,50,45,50,38,'Deino','633');
++li;

base_list[li]=new base_item(70,65,65,55,55,70,'Delcatty (Gen 3-6)','301');
++li;

base_list[li]=new base_item(70,65,65,55,55,90,'Delcatty','301a');
++li;

base_list[li]=new base_item(45,55,45,65,45,75,'Delibird','225');
++li;

base_list[li]=new base_item(75,69,72,114,100,104,'Delphox','655');
++li;

base_list[li]=new base_item(50,180,20,180,20,150,'Deoxys (Attack)','386');
++li;

base_list[li]=new base_item(50,70,160,70,160,90,'Deoxys (Defense)','386a');
++li;

base_list[li]=new base_item(50,150,50,150,50,150,'Deoxys (Normal)','386b');
++li;

base_list[li]=new base_item(50,95,90,95,90,180,'Deoxys (Speed)','386c');
++li;

base_list[li]=new base_item(90,70,80,70,95,70,'Dewgong','87');
++li;

base_list[li]=new base_item(75,75,60,83,60,60,'Dewott','502');
++li;

base_list[li]=new base_item(38,40,52,40,72,27,'Dewpider','751');
++li;

base_list[li]=new base_item(70,131,100,86,90,40,'Dhelmise','781');
++li;

base_list[li]=new base_item(100,120,120,150,100,90,'Dialga','483');
++li;

base_list[li]=new base_item(50,100,150,100,150,50,'Diancie','719');
++li;

base_list[li]=new base_item(50,160,110,160,110,110,'Diancie (Mega)','719a');
++li;

base_list[li]=new base_item(85,56,77,50,77,78,'Diggersby','660');
++li;

base_list[li]=new base_item(10,55,25,35,45,95,'Diglett','50');
++li;

base_list[li]=new base_item(10,55,30,35,45,90,'Diglett (Alolan)','50a');
++li;

base_list[li]=new base_item(48,48,48,48,48,48,'Ditto','132');
++li;

base_list[li]=new base_item(60,110,70,60,60,100,'Dodrio (Gen 3-6)','85');
++li;

base_list[li]=new base_item(60,110,70,60,60,110,'Dodrio','85a');
++li;

base_list[li]=new base_item(35,85,45,35,35,75,'Doduo','84');
++li;

base_list[li]=new base_item(90,120,120,60,60,50,'Donphan','232');
++li;

base_list[li]=new base_item(50,35,80,50,90,30,'Dottler','825');
++li;

base_list[li]=new base_item(59,110,150,45,49,35,'Doublade','680');
++li;

base_list[li]=new base_item(90,90,100,70,80,75,'Dracovish','882');
++li;

base_list[li]=new base_item(90,100,90,80,70,75,'Dracozolt','880');
++li;

base_list[li]=new base_item(65,75,90,97,123,44,'Dragalge','691');
++li;

base_list[li]=new base_item(88,120,75,100,75,142,'Dragapult','887');
++li;

base_list[li]=new base_item(61,84,65,70,70,70,'Dragonair','148');
++li;

base_list[li]=new base_item(91,134,95,100,100,80,'Dragonite','149');
++li;

base_list[li]=new base_item(68,80,50,60,50,102,'Drakloak','886');
++li;

base_list[li]=new base_item(78,60,85,135,91,36,'Drampa','780');
++li;

base_list[li]=new base_item(70,90,110,60,75,95,'Drapion','452');
++li;

base_list[li]=new base_item(41,64,45,50,50,50,'Dratini','147');
++li;

base_list[li]=new base_item(90,115,90,48,68,74,'Drednaw','834');
++li;

base_list[li]=new base_item(28,60,30,40,30,82,'Dreepy','885');
++li;

base_list[li]=new base_item(150,80,44,90,54,80,'Drifblim','426');
++li;

base_list[li]=new base_item(90,50,34,60,44,70,'Drifloon','425');
++li;

base_list[li]=new base_item(60,85,40,30,45,68,'Drilbur','529');
++li;

base_list[li]=new base_item(65,60,55,95,55,90,'Drizzile','817');
++li;

base_list[li]=new base_item(60,48,45,43,90,42,'Drowzee','96');
++li;

base_list[li]=new base_item(77,120,90,60,90,48,'Druddigon','621');
++li;

base_list[li]=new base_item(72,80,100,60,90,88,'Dubwool','832');
++li;

base_list[li]=new base_item(62,44,50,44,50,55,'Ducklett','580');
++li;

base_list[li]=new base_item(35,80,50,50,70,120,'Dugtrio (Gen 3-6)','51');
++li;

base_list[li]=new base_item(35,100,50,50,70,120,'Dugtrio','51a');
++li;

base_list[li]=new base_item(35,80,60,50,70,110,'Dugtrio (Alolan)','51b');
++li;

base_list[li]=new base_item(100,70,70,65,65,45,'Dunsparce','206');
++li;

base_list[li]=new base_item(65,40,50,125,60,30,'Duosion','578');
++li;

base_list[li]=new base_item(70,95,115,120,50,85,'Duraludon','884');
++li;

base_list[li]=new base_item(58,109,112,48,48,109,'Durant','632');
++li;

base_list[li]=new base_item(40,70,130,60,130,25,'Dusclops','356');
++li;

base_list[li]=new base_item(45,100,135,65,135,45,'Dusknoir','477');
++li;

base_list[li]=new base_item(20,40,90,30,90,25,'Duskull','355');
++li;

base_list[li]=new base_item(60,50,70,50,90,65,'Dustox','269');
++li;

base_list[li]=new base_item(50,65,85,35,35,55,'Dwebble','557');
++li;

base_list[li]=new base_item(65,85,70,75,70,40,'Eelektrik','603');
++li;

base_list[li]=new base_item(85,115,80,105,80,50,'Eelektross','604');
++li;

base_list[li]=new base_item(55,55,50,45,65,55,'Eevee','133');
++li;

base_list[li]=new base_item(75,80,110,65,90,50,'Eiscue (Ice Face)','875');
++li;

base_list[li]=new base_item(75,80,70,65,50,130,'Eiscue (No Ice Face)','875a');
++li;

base_list[li]=new base_item(35,60,44,40,54,55,'Ekans','23');
++li;

base_list[li]=new base_item(60,50,90,80,120,60,'Eldegoss','830');
++li;

base_list[li]=new base_item(65,83,57,95,85,105,'Electabuzz','125');
++li;

base_list[li]=new base_item(75,123,67,95,85,95,'Electivire','466');
++li;

base_list[li]=new base_item(40,45,40,65,40,65,'Electrike','309');
++li;

base_list[li]=new base_item(60,50,70,80,80,140,'Electrode (Gen 3-6)','101');
++li;

base_list[li]=new base_item(60,50,70,80,80,150,'Electrode','101a');
++li;

base_list[li]=new base_item(45,63,37,65,55,95,'Elekid','239');
++li;

base_list[li]=new base_item(55,55,55,85,55,30,'Elgyem','605');
++li;

base_list[li]=new base_item(110,123,65,100,65,65,'Emboar','500');
++li;

base_list[li]=new base_item(55,75,60,75,60,103,'Emolga','587');
++li;

base_list[li]=new base_item(84,86,88,111,101,60,'Empoleon','395');
++li;

base_list[li]=new base_item(115,115,85,90,75,100,'Entei','244');
++li;

base_list[li]=new base_item(70,135,105,60,105,20,'Escavalier','589');
++li;

base_list[li]=new base_item(65,65,60,130,95,110,'Espeon','196');
++li;

base_list[li]=new base_item(62,48,54,63,60,68,'Espurr','677');
++li;

base_list[li]=new base_item(140,85,95,145,95,130,'Eternatus','890');
++li;

base_list[li]=new base_item(110,135,60,50,65,88,'Excadrill','530');
++li;

base_list[li]=new base_item(60,40,80,60,45,40,'Exeggcute','102');
++li;

base_list[li]=new base_item(95,95,85,125,65,55,'Exeggutor (Gen 3-6)','103');
++li;

base_list[li]=new base_item(95,95,85,125,75,55,'Exeggutor','103a');
++li;

base_list[li]=new base_item(95,105,85,125,75,45,'Exeggutor (Alolan)','103b');
++li;

base_list[li]=new base_item(104,91,63,91,63,68,'Exploud (Gen 3-5)','295');
++li;

base_list[li]=new base_item(104,91,63,91,73,68,'Exploud','295a');
++li;

base_list[li]=new base_item(65,100,100,70,60,75,'Falinks','870');
++li;

base_list[li]=new base_item(52,65,55,58,62,60,'Farfetch\'d (Gen 3-6)','83');
++li;

base_list[li]=new base_item(52,90,55,58,62,60,'Farfetch\'d','83a');
++li;

base_list[li]=new base_item(52,95,55,58,62,55,'Farfetch\'d (Galarian)','83b');
++li;

base_list[li]=new base_item(65,90,65,61,61,100,'Fearow','22');
++li;

base_list[li]=new base_item(20,15,20,10,55,80,'Feebas','349');
++li;

base_list[li]=new base_item(40,45,40,62,60,60,'Fennekin','653');
++li;

base_list[li]=new base_item(85,105,100,79,83,78,'Feraligatr','160');
++li;

base_list[li]=new base_item(44,50,91,24,86,10,'Ferroseed','597');
++li;

base_list[li]=new base_item(74,94,131,54,116,20,'Ferrothorn','598');
++li;

base_list[li]=new base_item(49,49,56,49,61,66,'Finneon','456');
++li;

base_list[li]=new base_item(70,55,55,80,60,45,'Flaaffy','180');
++li;

base_list[li]=new base_item(44,38,39,61,79,42,'FlabÃ©bÃ©','669');
++li;

base_list[li]=new base_item(70,110,80,95,60,70,'Flapple','841');
++li;

base_list[li]=new base_item(65,130,60,95,110,65,'Flareon','136');
++li;

base_list[li]=new base_item(62,73,55,56,52,84,'Fletchinder','662');
++li;

base_list[li]=new base_item(45,50,43,40,38,62,'Fletchling','661');
++li;

base_list[li]=new base_item(85,105,55,85,50,115,'Floatzel','419');
++li;

base_list[li]=new base_item(54,45,47,75,98,52,'Floette','670');
++li;

base_list[li]=new base_item(78,65,68,112,154,75,'Florges','670');
++li;

base_list[li]=new base_item(80,100,80,80,80,100,'Flygon','330');
++li;

base_list[li]=new base_item(40,55,35,50,35,35,'Fomantis','753');
++li;

base_list[li]=new base_item(69,55,45,55,55,15,'Foongus','590');
++li;

base_list[li]=new base_item(75,90,140,60,60,40,'Forretress','205');
++li;

base_list[li]=new base_item(66,117,70,40,50,67,'Fraxure','611');
++li;

base_list[li]=new base_item(55,40,50,65,85,40,'Frillish','592');
++li;

base_list[li]=new base_item(41,56,40,62,44,71,'Froakie','656');
++li;

base_list[li]=new base_item(54,63,52,83,56,97,'Frogadier','657');
++li;

base_list[li]=new base_item(70,80,70,80,70,110,'Froslass','478');
++li;

base_list[li]=new base_item(70,65,60,125,90,65,'Frosmoth','873');
++li;

base_list[li]=new base_item(75,80,60,65,90,102,'Furfrou','676');
++li;

base_list[li]=new base_item(85,76,64,45,55,90,'Furret','162');
++li;

base_list[li]=new base_item(68,90,65,50,55,82,'Gabite','444');
++li;

base_list[li]=new base_item(68,125,65,65,115,80,'Gallade','475');
++li;

base_list[li]=new base_item(68,165,95,65,115,110,'Gallade (Mega)','475a');
++li;

base_list[li]=new base_item(70,77,60,97,60,108,'Galvantula','596');
++li;

base_list[li]=new base_item(80,95,82,60,82,75,'Garbodor','569');
++li;

base_list[li]=new base_item(108,130,95,80,85,102,'Garchomp','445');
++li;

base_list[li]=new base_item(108,170,115,120,95,92,'Garchomp (Mega)','445a');
++li;

base_list[li]=new base_item(68,65,65,125,115,80,'Gardevoir','282');
++li;

base_list[li]=new base_item(68,85,65,165,135,100,'Gardevoir (Mega)','282a');
++li;

base_list[li]=new base_item(30,35,30,100,35,80,'Gastly','92');
++li;

base_list[li]=new base_item(111,83,68,92,82,39,'Gastrodon','423');
++li;

base_list[li]=new base_item(71,120,95,120,95,99,'Genesect','649');
++li;

base_list[li]=new base_item(60,65,60,130,75,110,'Gengar','94');
++li;

base_list[li]=new base_item(60,65,80,170,95,130,'Gengar (Mega)','94a');
++li;

base_list[li]=new base_item(40,80,100,30,30,20,'Geodude','74');
++li;

base_list[li]=new base_item(40,80,100,30,30,20,'Geodude (Alolan)','74a');
++li;

base_list[li]=new base_item(58,70,45,40,45,42,'Gible','443');
++li;

base_list[li]=new base_item(85,135,130,60,70,25,'Gigalith (Gen 5)','526');
++li;

base_list[li]=new base_item(85,135,130,60,80,25,'Gigalith','526a');
++li;

base_list[li]=new base_item(70,80,65,90,65,85,'Girafarig','203');
++li;

base_list[li]=new base_item(150,100,120,100,120,90,'Giratina','487');
++li;

base_list[li]=new base_item(150,120,100,120,100,90,'Giratina (Origin)','487a');
++li;

base_list[li]=new base_item(65,60,110,130,95,65,'Glaceon','471');
++li;

base_list[li]=new base_item(80,80,80,80,80,80,'Glalie','362');
++li;

base_list[li]=new base_item(80,120,80,120,80,100,'Glalie (Mega)','362a');
++li;

base_list[li]=new base_item(49,55,42,42,37,85,'Glameow','431');
++li;

base_list[li]=new base_item(100,145,130,65,110,30,'Glastrier','896');
++li;

base_list[li]=new base_item(65,75,105,35,65,85,'Gligar','207');
++li;

base_list[li]=new base_item(75,95,125,45,75,95,'Gliscor','472');
++li;

base_list[li]=new base_item(60,65,70,85,75,40,'Gloom','44');
++li;

base_list[li]=new base_item(123,100,62,97,81,68,'Gogoat','673');
++li;

base_list[li]=new base_item(75,80,70,65,75,90,'Golbat','42');
++li;

base_list[li]=new base_item(45,67,60,35,50,63,'Goldeen','118');
++li;

base_list[li]=new base_item(80,82,78,95,80,85,'Golduck','55');
++li;

base_list[li]=new base_item(80,110,130,55,65,45,'Golem (Gen 3-5)','76');
++li;

base_list[li]=new base_item(80,120,130,55,65,45,'Golem','76a');
++li;

base_list[li]=new base_item(80,120,130,55,65,45,'Golem (Alolan)','76b');
++li;

base_list[li]=new base_item(59,74,50,35,50,35,'Golett','622');
++li;

base_list[li]=new base_item(75,125,140,60,90,40,'Golisopod','768');
++li;

base_list[li]=new base_item(89,124,80,55,80,55,'Golurk','623');
++li;

base_list[li]=new base_item(90,100,70,110,150,80,'Goodra','706');
++li;

base_list[li]=new base_item(45,50,35,55,75,40,'Goomy','704');
++li;

base_list[li]=new base_item(55,84,105,114,75,52,'Gorebyss','368');
++li;

base_list[li]=new base_item(40,40,60,40,60,10,'Gossifleur','829');
++li;

base_list[li]=new base_item(45,30,50,55,65,45,'Gothita','574');
++li;

base_list[li]=new base_item(70,55,95,95,110,65,'Gothitelle','576');
++li;

base_list[li]=new base_item(60,45,70,75,85,55,'Gothorita','575');
++li;

base_list[li]=new base_item(55,85,122,58,75,99,'Gourgeist (Small)','711');
++li;

base_list[li]=new base_item(65,90,122,58,75,84,'Gourgeist (Average)','711a');
++li;

base_list[li]=new base_item(75,95,122,58,75,69,'Gourgeist (Large)','711b');
++li;

base_list[li]=new base_item(85,100,122,58,75,54,'Gourgeist (Super)','711c');
++li;

base_list[li]=new base_item(90,120,75,60,60,45,'Granbull','210');
++li;

base_list[li]=new base_item(80,118,90,70,80,42,'Grapploct','853');
++li;

base_list[li]=new base_item(55,95,115,45,45,35,'Graveler','75');
++li;

base_list[li]=new base_item(55,95,115,45,45,35,'Graveler (Alolan)','75a');
++li;

base_list[li]=new base_item(120,95,95,55,75,20,'Greedent','820');
++li;

base_list[li]=new base_item(72,95,67,103,71,122,'Greninja','658');
++li;

base_list[li]=new base_item(72,145,67,153,71,132,'Greninja (Ash)','658a');
++li;

base_list[li]=new base_item(80,80,50,40,50,25,'Grimer','88');
++li;

base_list[li]=new base_item(80,80,50,40,50,25,'Grimer (Alolan)','88a');
++li;

base_list[li]=new base_item(95,120,65,95,75,60,'Grimmsnarl','861');
++li;

base_list[li]=new base_item(50,65,50,40,40,65,'Grookey','810');
++li;

base_list[li]=new base_item(75,89,85,55,65,36,'Grotle','388');
++li;

base_list[li]=new base_item(100,150,140,100,90,90,'Groudon','383');
++li;

base_list[li]=new base_item(100,180,160,150,90,90,'Groudon (Primal)','383a');
++li;

base_list[li]=new base_item(50,65,45,85,65,95,'Grovyle','253');
++li;

base_list[li]=new base_item(55,70,45,70,50,60,'Growlithe','58');
++li;

base_list[li]=new base_item(47,62,45,55,45,46,'Grubbin','736');
++li;

base_list[li]=new base_item(80,45,65,90,110,80,'Grumpig','326');
++li;

base_list[li]=new base_item(70,43,53,43,53,40,'Gulpin','316');
++li;

base_list[li]=new base_item(88,110,60,55,60,45,'Gumshoos','735');
++li;

base_list[li]=new base_item(85,105,85,40,50,40,'Gurdurr','533');
++li;

base_list[li]=new base_item(223,101,53,97,53,43,'Guzzlord','799');
++li;

base_list[li]=new base_item(95,125,79,60,100,81,'Gyarados','130');
++li;

base_list[li]=new base_item(95,155,109,70,130,81,'Gyarados (Mega)','130a');
++li;

base_list[li]=new base_item(55,75,90,65,70,65,'Hakamo-o','783');
++li;

base_list[li]=new base_item(100,5,5,15,65,30,'Happiny','440');
++li;

base_list[li]=new base_item(144,120,60,40,60,50,'Hariyama','297');
++li;

base_list[li]=new base_item(42,30,45,56,53,39,'Hatenna','856');
++li;

base_list[li]=new base_item(57,90,95,136,103,29,'Hatterene','858');
++li;

base_list[li]=new base_item(57,40,65,86,73,49,'Hattrem','857');
++li;

base_list[li]=new base_item(45,50,45,115,55,95,'Haunter','93');
++li;

base_list[li]=new base_item(78,92,75,74,63,118,'Hawlucha','701');
++li;

base_list[li]=new base_item(76,147,90,60,70,97,'Haxorus','612');
++li;

base_list[li]=new base_item(85,97,66,105,66,65,'Heatmor','631');
++li;

base_list[li]=new base_item(91,90,106,130,106,77,'Heatran','485');
++li;

base_list[li]=new base_item(62,55,52,109,94,109,'Heliolisk','695');
++li;

base_list[li]=new base_item(44,38,33,61,43,70,'Helioptile','694');
++li;

base_list[li]=new base_item(80,125,75,40,95,85,'Heracross','214');
++li;

base_list[li]=new base_item(80,185,115,40,105,75,'Heracross (Mega)','214a');
++li;

base_list[li]=new base_item(65,80,65,35,65,60,'Herdier','507');
++li;

base_list[li]=new base_item(68,72,78,38,42,32,'Hippopotas','449');
++li;

base_list[li]=new base_item(108,112,118,68,72,47,'Hippowdon','450');
++li;

base_list[li]=new base_item(50,105,79,35,110,76,'Hitmonchan','107');
++li;

base_list[li]=new base_item(50,120,53,35,110,87,'Hitmonlee','106');
++li;

base_list[li]=new base_item(50,95,95,35,110,70,'Hitmontop','237');
++li;

base_list[li]=new base_item(106,130,90,110,154,90,'Ho-Oh','250');
++li;

base_list[li]=new base_item(100,125,52,105,52,71,'Honchkrow','430');
++li;

base_list[li]=new base_item(45,80,100,35,37,28,'Honedge','679');
++li;

base_list[li]=new base_item(80,110,60,150,130,70,'Hoopa','720');
++li;

base_list[li]=new base_item(80,160,60,170,130,80,'Hoopa (Unbound)','720a');
++li;

base_list[li]=new base_item(60,30,30,36,56,50,'Hoothoot','163');
++li;

base_list[li]=new base_item(35,35,40,35,55,50,'Hoppip','187');
++li;

base_list[li]=new base_item(30,40,70,70,25,60,'Horsea','116');
++li;

base_list[li]=new base_item(75,90,50,110,80,95,'Houndoom','229');
++li;

base_list[li]=new base_item(75,90,90,140,90,115,'Houndoom (Mega)','229a');
++li;

base_list[li]=new base_item(45,60,30,80,50,65,'Houndour','228');
++li;

base_list[li]=new base_item(55,104,105,94,75,52,'Huntail','367');
++li;

base_list[li]=new base_item(92,105,90,125,90,98,'Hydreigon','635');
++li;

base_list[li]=new base_item(85,73,70,73,115,67,'Hypno','97');
++li;

base_list[li]=new base_item(90,30,15,40,20,15,'Igglybuff','174');
++li;

base_list[li]=new base_item(65,47,55,73,75,85,'Illumise (Gen 3-6)','314');
++li;

base_list[li]=new base_item(65,47,75,73,85,85,'Illumise','314a');
++li;

base_list[li]=new base_item(45,45,30,55,40,50,'Impidimp','859');
++li;

base_list[li]=new base_item(95,115,90,80,90,60,'Incineroar','727');
++li;

base_list[li]=new base_item(60,65,55,105,95,95,'Indeedee (Male)','876');
++li;

base_list[li]=new base_item(70,55,65,95,105,85,'Indeedee (Female)','876a');
++li;

base_list[li]=new base_item(76,104,71,104,71,108,'Infernape','392');
++li;

base_list[li]=new base_item(53,54,37,46,45,45,'Inkay','686');
++li;

base_list[li]=new base_item(70,85,65,125,65,120,'Inteleon','818');
++li;

base_list[li]=new base_item(60,62,63,80,80,60,'Ivysaur','2');
++li;

base_list[li]=new base_item(45,55,65,45,45,45,'Jangmo-o','782');
++li;

base_list[li]=new base_item(100,60,70,85,105,60,'Jellicent','593');
++li;

base_list[li]=new base_item(115,45,20,45,25,20,'Jigglypuff','39');
++li;

base_list[li]=new base_item(100,100,100,100,100,100,'Jirachi','385');
++li;

base_list[li]=new base_item(65,65,60,110,95,130,'Jolteon','135');
++li;

base_list[li]=new base_item(50,47,50,57,50,65,'Joltik','595');
++li;

base_list[li]=new base_item(75,55,70,55,85,110,'Jumpluff (Gen 3-5)','189');
++li;

base_list[li]=new base_item(75,55,70,55,95,110,'Jumpluff','189a');
++li;

base_list[li]=new base_item(65,50,35,115,95,95,'Jynx','124');
++li;

base_list[li]=new base_item(30,80,90,55,45,55,'Kabuto','140');
++li;

base_list[li]=new base_item(60,115,105,65,70,80,'Kabutops','141');
++li;

base_list[li]=new base_item(40,35,30,120,70,105,'Kadabra','64');
++li;

base_list[li]=new base_item(45,25,50,25,25,35,'Kakuna','14');
++li;

base_list[li]=new base_item(105,95,80,40,80,90,'Kangaskhan','115');
++li;

base_list[li]=new base_item(105,125,100,60,100,100,'Kangaskhan (Mega)','115a');
++li;

base_list[li]=new base_item(50,75,45,40,45,60,'Karrablast','588');
++li;

base_list[li]=new base_item(59,181,131,59,31,109,'Kartana','798');
++li;

base_list[li]=new base_item(60,90,70,60,120,40,'Kecleon','352');
++li;

base_list[li]=new base_item(91,72,90,129,90,108,'Keldeo','647');
++li;

base_list[li]=new base_item(75,95,95,95,95,85,'Kingdra','230');
++li;

base_list[li]=new base_item(55,130,115,50,50,75,'Kingler','99');
++li;

base_list[li]=new base_item(38,35,35,65,55,50,'Kirlia','281');
++li;

base_list[li]=new base_item(60,80,95,70,85,50,'Klang','600');
++li;

base_list[li]=new base_item(57,80,91,80,87,75,'Klefki','707');
++li;

base_list[li]=new base_item(40,55,70,45,60,30,'Klink','599');
++li;

base_list[li]=new base_item(60,100,115,70,85,90,'Klinklang','601');
++li;

base_list[li]=new base_item(40,65,95,60,45,35,'Koffing','109');
++li;

base_list[li]=new base_item(65,115,65,75,95,65,'Komala','775');
++li;

base_list[li]=new base_item(75,110,125,100,105,85,'Kommo-o','784');
++li;

base_list[li]=new base_item(30,105,90,25,25,50,'Krabby','98');
++li;

base_list[li]=new base_item(37,25,41,25,41,25,'Kricketot','401');
++li;

base_list[li]=new base_item(77,85,51,55,51,65,'Kricketune','402');
++li;

base_list[li]=new base_item(60,82,45,45,45,74,'Krokorok','562');
++li;

base_list[li]=new base_item(95,117,70,65,70,92,'Krookodile (Gen 4-5)','553');
++li;

base_list[li]=new base_item(95,117,80,65,70,92,'Krookodile','553a');
++li;

base_list[li]=new base_item(60,90,60,53,50,72,'Kubfu','891');
++li;

base_list[li]=new base_item(100,100,90,150,140,90,'Kyogre','382');
++li;

base_list[li]=new base_item(100,150,90,180,160,90,'Kyogre (Primal)','382a');
++li;

base_list[li]=new base_item(125,130,90,130,90,95,'Kyurem','646');
++li;

base_list[li]=new base_item(125,170,100,120,90,95,'Kyurem (Black)','646a');
++li;

base_list[li]=new base_item(125,120,90,170,100,95,'Kyurem (White)','646b');
++li;

base_list[li]=new base_item(60,90,140,50,50,40,'Lairon','305');
++li;

base_list[li]=new base_item(60,40,60,95,60,55,'Lampent','608');
++li;

base_list[li]=new base_item(89,125,90,115,80,101,'Landorus','645');
++li;

base_list[li]=new base_item(89,145,90,105,80,91,'Landorus (Therian)','645a');
++li;

base_list[li]=new base_item(125,58,58,76,76,67,'Lanturn','171');
++li;

base_list[li]=new base_item(130,85,80,85,95,60,'Lapras','131');
++li;

base_list[li]=new base_item(55,85,55,50,55,60,'Larvesta','636');
++li;

base_list[li]=new base_item(50,64,50,45,50,41,'Larvitar','246');
++li;

base_list[li]=new base_item(80,80,90,110,130,110,'Latias','380');
++li;

base_list[li]=new base_item(80,100,120,140,150,110,'Latias (Mega)','380a');
++li;

base_list[li]=new base_item(80,90,80,130,110,110,'Latios','381');
++li;

base_list[li]=new base_item(80,130,100,160,120,110,'Latios (Mega)','381a');
++li;

base_list[li]=new base_item(65,110,130,60,65,95,'Leafeon','470');
++li;

base_list[li]=new base_item(75,103,80,70,70,92,'Leavanny (Gen 5)','542');
++li;

base_list[li]=new base_item(75,103,80,70,80,92,'Leavanny','542a');
++li;

base_list[li]=new base_item(55,35,50,55,110,85,'Ledian','166');
++li;

base_list[li]=new base_item(40,20,30,40,80,55,'Ledyba','165');
++li;

base_list[li]=new base_item(110,85,95,80,95,50,'Lickilicky','463');
++li;

base_list[li]=new base_item(90,55,75,60,75,30,'Lickitung','108');
++li;

base_list[li]=new base_item(64,88,50,88,50,106,'Liepard','510');
++li;

base_list[li]=new base_item(66,41,77,61,87,23,'Lileep','345');
++li;

base_list[li]=new base_item(70,60,75,110,75,90,'Lilligant','549');
++li;

base_list[li]=new base_item(45,60,45,25,45,55,'Lillipup','506');
++li;

base_list[li]=new base_item(78,70,61,50,61,100,'Linoone','264');
++li;

base_list[li]=new base_item(78,70,61,50,61,100,'Linoone (Galarian)','264a');
++li;

base_list[li]=new base_item(62,50,58,73,54,72,'Litleo','667');
++li;

base_list[li]=new base_item(45,65,40,60,40,70,'Litten','725');
++li;

base_list[li]=new base_item(50,30,55,65,55,20,'Litwick','607');
++li;

base_list[li]=new base_item(60,50,50,60,70,50,'Lombre','271');
++li;

base_list[li]=new base_item(65,76,84,54,96,105,'Lopunny','428');
++li;

base_list[li]=new base_item(65,136,94,54,96,135,'Lopunny (Mega)','428a');
++li;

base_list[li]=new base_item(40,30,30,40,50,30,'Lotad','270');
++li;

base_list[li]=new base_item(84,71,43,71,43,48,'Loudred','294');
++li;

base_list[li]=new base_item(70,110,70,115,70,90,'Lucario','448');
++li;

base_list[li]=new base_item(70,145,88,140,70,112,'Lucario (Mega)','448a');
++li;

base_list[li]=new base_item(80,70,70,90,100,70,'Ludicolo','272');
++li;

base_list[li]=new base_item(106,90,130,90,154,110,'Lugia','249');
++li;

base_list[li]=new base_item(69,69,76,69,86,91,'Lumineon','457');
++li;

base_list[li]=new base_item(137,113,89,137,107,97,'Lunala','792');
++li;

base_list[li]=new base_item(70,55,65,95,85,70,'Lunatone (Gen 3-6)','337');
++li;

base_list[li]=new base_item(90,55,65,95,85,70,'Lunatone','337a');
++li;

base_list[li]=new base_item(70,105,90,80,90,45,'Lurantis','754');
++li;

base_list[li]=new base_item(43,30,55,40,65,97,'Luvdisc','370');
++li;

base_list[li]=new base_item(60,85,49,60,49,60,'Luxio','404');
++li;

base_list[li]=new base_item(80,120,79,95,79,70,'Luxray','405');
++li;

base_list[li]=new base_item(75,117,65,55,65,110,'Lycanroc (Dusk)','745b');
++li;

base_list[li]=new base_item(75,115,65,55,65,112,'Lycanroc (Midday)','745');
++li;

base_list[li]=new base_item(85,115,75,55,75,82,'Lycanroc (Midnight)','745a');
++li;

base_list[li]=new base_item(90,130,80,65,85,55,'Machamp','68');
++li;

base_list[li]=new base_item(80,100,70,50,60,45,'Machoke','67');
++li;

base_list[li]=new base_item(70,80,50,35,35,35,'Machop','66');
++li;

base_list[li]=new base_item(45,75,37,70,55,83,'Magby','240');
++li;

base_list[li]=new base_item(50,50,120,80,80,30,'Magcargo (Gen 3-6)','219');
++li;

base_list[li]=new base_item(60,50,120,90,80,30,'Magcargo','219a');
++li;

base_list[li]=new base_item(80,95,115,130,115,65,'Magearna','801');
++li;

base_list[li]=new base_item(20,10,55,15,20,80,'Magikarp','129');
++li;

base_list[li]=new base_item(65,95,57,100,85,93,'Magmar','126');
++li;

base_list[li]=new base_item(75,95,67,125,95,83,'Magmortar','467');
++li;

base_list[li]=new base_item(25,35,70,95,55,45,'Magnemite','81');
++li;

base_list[li]=new base_item(50,60,95,120,70,70,'Magneton','82');
++li;

base_list[li]=new base_item(70,70,115,130,90,60,'Magnezone','462');
++li;

base_list[li]=new base_item(72,60,30,20,30,25,'Makuhita','296');
++li;

base_list[li]=new base_item(86,92,88,68,75,73,'Malamar','687');
++li;

base_list[li]=new base_item(110,130,80,70,60,80,'Mamoswine','473');
++li;

base_list[li]=new base_item(100,100,100,100,100,100,'Manaphy','490');
++li;

base_list[li]=new base_item(110,65,105,55,95,80,'Mandibuzz','630');
++li;

base_list[li]=new base_item(70,75,60,105,60,105,'Manectric','310');
++li;

base_list[li]=new base_item(70,75,80,135,80,135,'Manectric (Mega)','310a');
++li;

base_list[li]=new base_item(40,80,35,35,45,70,'Mankey','56');
++li;

base_list[li]=new base_item(65,40,70,80,140,70,'Mantine (Gen 3-6)','226');
++li;

base_list[li]=new base_item(85,40,70,80,140,70,'Mantine','226a');
++li;

base_list[li]=new base_item(45,20,50,60,120,50,'Mantyke','458');
++li;

base_list[li]=new base_item(75,86,67,106,67,60,'Maractus','556');
++li;

base_list[li]=new base_item(50,53,62,43,52,45,'Mareanie','747');
++li;

base_list[li]=new base_item(55,40,40,65,45,35,'Mareep','179');
++li;

base_list[li]=new base_item(70,20,50,20,50,40,'Marill','183');
++li;

base_list[li]=new base_item(60,80,110,50,80,45,'Marowak','105');
++li;

base_list[li]=new base_item(60,80,110,50,80,45,'Marowak (Alolan)','105a');
++li;

base_list[li]=new base_item(90,125,80,90,90,125,'Marshadow','802');
++li;

base_list[li]=new base_item(70,85,70,60,70,50,'Marshtomp','259');
++li;

base_list[li]=new base_item(70,60,62,80,82,60,'Masquerain (Gen 3-6)','284');
++li;

base_list[li]=new base_item(70,60,62,100,82,80,'Masquerain','284a');
++li;

base_list[li]=new base_item(50,85,85,55,55,50,'Mawile','303');
++li;

base_list[li]=new base_item(50,105,125,55,95,50,'Mawile (Mega)','303a');
++li;

base_list[li]=new base_item(60,60,75,60,75,80,'Medicham','308');
++li;

base_list[li]=new base_item(60,100,85,80,85,100,'Medicham (Mega)','308a');
++li;

base_list[li]=new base_item(30,40,55,40,55,60,'Meditite','307');
++li;

base_list[li]=new base_item(80,82,100,83,100,80,'Meganium','154');
++li;

base_list[li]=new base_item(135,143,143,80,65,34,'Melmetal','809');
++li;

base_list[li]=new base_item(100,77,77,128,128,90,'Meloetta','648');
++li;

base_list[li]=new base_item(100,128,90,77,77,128,'Meloetta (Pirouette)','648a');
++li;

base_list[li]=new base_item(46,65,65,55,35,34,'Meltan','808');
++li;

base_list[li]=new base_item(74,48,76,83,81,104,'Meowstic','678');
++li;

base_list[li]=new base_item(40,45,35,40,40,90,'Meowth','52');
++li;

base_list[li]=new base_item(40,35,35,50,40,90,'Meowth (Alolan)','52a');
++li;

base_list[li]=new base_item(50,65,55,40,40,40,'Meowth (Galarian)','52b');
++li;

base_list[li]=new base_item(80,105,105,105,105,80,'Mesprit','481');
++li;

base_list[li]=new base_item(80,135,130,95,90,70,'Metagross','376');
++li;

base_list[li]=new base_item(80,145,150,105,110,110,'Metagross (Mega)','376a');
++li;

base_list[li]=new base_item(60,75,100,55,80,50,'Metang','375');
++li;

base_list[li]=new base_item(50,20,55,25,25,30,'Metapod','11');
++li;

base_list[li]=new base_item(100,100,100,100,100,100,'Mew','151');
++li;

base_list[li]=new base_item(106,110,90,154,90,130,'Mewtwo','150');
++li;

base_list[li]=new base_item(106,190,100,154,100,130,'Mewtwo (Mega X)','150a');
++li;

base_list[li]=new base_item(106,150,70,194,120,140,'Mewtwo (Mega Y)','150b');
++li;

base_list[li]=new base_item(45,85,50,55,50,65,'Mienfoo','619');
++li;

base_list[li]=new base_item(65,125,60,95,60,105,'Mienshao','620');
++li;

base_list[li]=new base_item(70,90,70,60,60,70,'Mightyena','262');
++li;

base_list[li]=new base_item(45,40,40,50,61,34,'Milcery','868');
++li;

base_list[li]=new base_item(95,60,79,100,125,81,'Milotic','350');
++li;

base_list[li]=new base_item(95,80,105,40,70,100,'Miltank','241');
++li;

base_list[li]=new base_item(20,25,45,70,90,60,'Mime Jr.','439');
++li;

base_list[li]=new base_item(55,90,80,50,105,96,'Mimikyu','778');
++li;

base_list[li]=new base_item(55,50,40,40,40,75,'Minccino','572');
++li;

base_list[li]=new base_item(60,60,100,60,100,60,'Minior','774');
++li;

base_list[li]=new base_item(60,100,60,100,60,120,'Minior (Core)','774a');
++li;

base_list[li]=new base_item(60,40,50,75,85,95,'Minun','312');
++li;

base_list[li]=new base_item(60,60,60,85,85,85,'Misdreavus','200');
++li;

base_list[li]=new base_item(60,60,60,105,105,105,'Mismagius','429');
++li;

base_list[li]=new base_item(90,100,90,125,85,90,'Moltres','146');
++li;

base_list[li]=new base_item(90,85,90,100,125,90,'Moltres (Galarian)','146a');
++li;

base_list[li]=new base_item(64,78,52,78,52,81,'Monferno','391');
++li;

base_list[li]=new base_item(40,35,55,65,75,15,'Morelull','755');
++li;

base_list[li]=new base_item(65,60,45,75,55,70,'Morgrem','860');
++li;

base_list[li]=new base_item(58,95,58,70,58,97,'Morpeko','877');
++li;

base_list[li]=new base_item(70,94,50,94,50,66,'Mothim','414');
++li;

base_list[li]=new base_item(40,45,65,100,120,90,'Mr. Mime','122');
++li;

base_list[li]=new base_item(50,60,65,90,90,100,'Mr. Mime (Galarian)','122a');
++li;

base_list[li]=new base_item(80,85,75,110,100,70,'Mr. Rime','866');
++li;

base_list[li]=new base_item(70,100,70,45,55,45,'Mudbray','749');
++li;

base_list[li]=new base_item(100,125,100,55,85,35,'Mudsdale','750');
++li;

base_list[li]=new base_item(50,70,50,50,50,40,'Mudkip','258');
++li;

base_list[li]=new base_item(105,105,75,65,100,50,'Muk','89');
++li;

base_list[li]=new base_item(105,105,75,65,100,50,'Muk (Alolan)','89a');
++li;

base_list[li]=new base_item(135,85,40,40,85,5,'Munchlax','446');
++li;

base_list[li]=new base_item(76,25,45,67,55,24,'Munna','517');
++li;

base_list[li]=new base_item(60,85,42,85,42,91,'Murkrow','198');
++li;

base_list[li]=new base_item(116,55,85,107,95,29,'Musharna','518');
++li;

base_list[li]=new base_item(73,73,73,127,73,121,'Naganadel','804');
++li;

base_list[li]=new base_item(40,50,45,70,45,70,'Natu','177');
++li;

base_list[li]=new base_item(97,107,101,127,89,79,'Necrozma','800');
++li;

base_list[li]=new base_item(97,153,127,113,109,77,'Necrozma (Dusk Mane)','800a');
++li;

base_list[li]=new base_item(97,113,109,157,127,77,'Necrozma (Dawn Wings)','800b');
++li;

base_list[li]=new base_item(97,167,97,167,97,129,'Necrozma (Ultra)','800c');
++li;

base_list[li]=new base_item(40,28,28,47,52,50,'Nickit','827');
++li;

base_list[li]=new base_item(81,92,77,85,75,85,'Nidoking (Gen 3-5)','34');
++li;

base_list[li]=new base_item(81,102,77,85,75,85,'Nidoking','34a');
++li;

base_list[li]=new base_item(90,82,87,75,85,76,'Nidoqueen (Gen 3-5)','31');
++li;

base_list[li]=new base_item(90,92,87,75,85,76,'Nidoqueen','31a');
++li;

base_list[li]=new base_item(55,47,52,40,40,41,'Nidoranâ™€','29');
++li;

base_list[li]=new base_item(46,57,40,40,40,50,'Nidoranâ™‚','32');
++li;

base_list[li]=new base_item(70,62,67,55,55,56,'Nidorina','30');
++li;

base_list[li]=new base_item(61,72,57,55,55,65,'Nidorino','33');
++li;

base_list[li]=new base_item(109,53,47,127,131,103,'Nihilego','793');
++li;

base_list[li]=new base_item(31,45,90,30,30,40,'Nincada','290');
++li;

base_list[li]=new base_item(73,76,75,81,100,100,'Ninetales','38');
++li;

base_list[li]=new base_item(73,67,75,81,100,109,'Ninetales (Alolan)','38a');
++li;

base_list[li]=new base_item(61,90,45,50,50,160,'Ninjask','291');
++li;

base_list[li]=new base_item(100,50,50,76,96,70,'Noctowl (Gen 3-6)','164');
++li;

base_list[li]=new base_item(100,50,50,86,96,70,'Noctowl','164a');
++li;

base_list[li]=new base_item(40,30,35,45,40,55,'Noibat','714');
++li;

base_list[li]=new base_item(85,70,80,97,80,123,'Noivern','715');
++li;

base_list[li]=new base_item(30,45,135,45,90,30,'Nosepass','299');
++li;

base_list[li]=new base_item(60,60,40,65,45,35,'Numel','322');
++li;

base_list[li]=new base_item(70,70,40,60,40,60,'Nuzleaf','274');
++li;

base_list[li]=new base_item(93,90,101,60,81,95,'Obstagoon','862');
++li;

base_list[li]=new base_item(75,105,75,105,75,45,'Octillery','224');
++li;

base_list[li]=new base_item(45,50,55,75,65,30,'Oddish','43');
++li;

base_list[li]=new base_item(35,40,100,90,55,35,'Omanyte','138');
++li;

base_list[li]=new base_item(70,60,125,115,70,55,'Omastar','139');
++li;

base_list[li]=new base_item(35,45,160,30,45,70,'Onix','95');
++li;

base_list[li]=new base_item(90,60,80,90,110,60,'Oranguru','765');
++li;

base_list[li]=new base_item(60,45,110,80,120,90,'Orbeetle','826');
++li;

base_list[li]=new base_item(75,70,70,98,70,93,'Oricorio','741');
++li;

base_list[li]=new base_item(55,55,45,63,45,45,'Oshawott','501');
++li;

base_list[li]=new base_item(60,45,70,45,90,95,'Pachirisu','417');
++li;

base_list[li]=new base_item(90,120,100,150,120,100,'Palkia','484');
++li;

base_list[li]=new base_item(85,75,110,100,75,35,'Palossand','770');
++li;

base_list[li]=new base_item(75,65,55,65,55,69,'Palpitoad','536');
++li;

base_list[li]=new base_item(67,82,62,46,48,43,'Pancham','674');
++li;

base_list[li]=new base_item(95,124,78,69,71,58,'Pangoro','675');
++li;

base_list[li]=new base_item(50,53,48,53,48,64,'Panpour','515');
++li;

base_list[li]=new base_item(50,53,48,53,48,64,'Pansage','511');
++li;

base_list[li]=new base_item(50,53,48,53,48,64,'Pansear','513');
++li;

base_list[li]=new base_item(35,70,55,45,55,25,'Paras','46');
++li;

base_list[li]=new base_item(60,95,80,60,80,30,'Parasect','47');
++li;

base_list[li]=new base_item(100,120,90,40,60,80,'Passimian','766');
++li;

base_list[li]=new base_item(45,55,39,35,39,42,'Patrat','504');
++li;

base_list[li]=new base_item(45,85,70,40,40,60,'Pawniard','624');
++li;

base_list[li]=new base_item(60,50,100,85,70,65,'Pelipper (Gen 3-6)','279');
++li;

base_list[li]=new base_item(60,50,100,95,70,65,'Pelipper','279a');
++li;

base_list[li]=new base_item(70,110,100,50,60,50,'Perrserker','863');
++li;

base_list[li]=new base_item(65,70,60,65,65,115,'Persian','53');
++li;

base_list[li]=new base_item(65,60,60,75,65,115,'Persian (Alolan)','53a');
++li;

base_list[li]=new base_item(45,35,50,70,50,30,'Petilil','548');
++li;

base_list[li]=new base_item(90,60,60,40,40,40,'Phanpy','231');
++li;

base_list[li]=new base_item(43,70,48,50,60,38,'Phantump','708');
++li;

base_list[li]=new base_item(71,137,37,137,37,151,'Pheromosa','795');
++li;

base_list[li]=new base_item(80,80,80,80,80,80,'Phione','489');
++li;

base_list[li]=new base_item(20,40,15,35,35,60,'Pichu','172');
++li;

base_list[li]=new base_item(83,80,75,70,70,91,'Pidgeot (Gen 3-5)','18');
++li;

base_list[li]=new base_item(83,80,75,70,70,101,'Pidgeot','18a');
++li;

base_list[li]=new base_item(83,80,80,135,80,121,'Pidgeot (Mega)','18b');
++li;

base_list[li]=new base_item(63,60,55,50,50,71,'Pidgeotto','17');
++li;

base_list[li]=new base_item(40,45,40,35,35,56,'Pidgey','16');
++li;

base_list[li]=new base_item(50,55,50,36,30,43,'Pidove','519');
++li;

base_list[li]=new base_item(90,93,55,70,55,55,'Pignite','499');
++li;

base_list[li]=new base_item(35,55,30,50,40,90,'Pikachu (Gen 3-5)','25');
++li;

base_list[li]=new base_item(35,55,40,50,50,90,'Pikachu','25a');
++li;

base_list[li]=new base_item(35,75,30,30,30,65,'Pikipek','731');
++li;

base_list[li]=new base_item(100,100,80,60,60,50,'Piloswine','221');
++li;

base_list[li]=new base_item(48,101,95,91,85,15,'Pincurchin','871');
++li;

base_list[li]=new base_item(50,65,90,35,35,15,'Pineco','204');
++li;

base_list[li]=new base_item(65,125,100,55,70,85,'Pinsir','127');
++li;

base_list[li]=new base_item(65,155,120,65,90,105,'Pinsir (Mega)','127a');
++li;

base_list[li]=new base_item(53,51,53,61,56,40,'Piplup','393');
++li;

base_list[li]=new base_item(60,50,40,85,75,95,'Plusle','311');
++li;

base_list[li]=new base_item(90,75,75,90,100,70,'Politoed','186');
++li;

base_list[li]=new base_item(40,50,40,40,40,90,'Poliwag','60');
++li;

base_list[li]=new base_item(65,65,65,50,50,90,'Poliwhirl','61');
++li;

base_list[li]=new base_item(90,85,95,70,90,70,'Poliwrath (Gen 3-5)','62');
++li;

base_list[li]=new base_item(90,95,95,70,90,70,'Poliwrath','62a');
++li;

base_list[li]=new base_item(60,65,65,134,114,70,'Polteageist','855');
++li;

base_list[li]=new base_item(50,85,55,65,65,90,'Ponyta','77');
++li;

base_list[li]=new base_item(50,85,55,65,65,90,'Ponyta (Galarian)','77a');
++li;

base_list[li]=new base_item(35,55,35,30,30,35,'Poochyena','261');
++li;

base_list[li]=new base_item(67,73,67,73,67,73,'Poipole','803');
++li;

base_list[li]=new base_item(50,54,54,66,56,40,'Popplio','728');
++li;

base_list[li]=new base_item(65,60,70,85,75,40,'Porygon','137');
++li;

base_list[li]=new base_item(85,80,70,135,75,90,'Porygon-Z','474');
++li;

base_list[li]=new base_item(85,80,90,105,95,60,'Porygon2','233');
++li;

base_list[li]=new base_item(80,74,74,126,116,60,'Primarina','730');
++li;

base_list[li]=new base_item(65,105,60,60,70,95,'Primeape','57');
++li;

base_list[li]=new base_item(64,66,68,81,76,50,'Prinplup','394');
++li;

base_list[li]=new base_item(60,55,145,75,150,40,'Probopass','476');
++li;

base_list[li]=new base_item(50,52,48,65,50,55,'Psyduck','54');
++li;

base_list[li]=new base_item(44,66,70,44,55,56,'Pumpkaboo (Small)','710');
++li;

base_list[li]=new base_item(49,66,70,44,55,51,'Pumpkaboo (Average)','710a');
++li;

base_list[li]=new base_item(54,66,70,44,55,46,'Pumpkaboo (Large)','710b');
++li;

base_list[li]=new base_item(59,66,70,44,55,41,'Pumpkaboo (Super)','710c');
++li;

base_list[li]=new base_item(70,84,70,65,70,51,'Pupitar','247');
++li;

base_list[li]=new base_item(41,50,37,50,37,66,'Purrloin','509');
++li;

base_list[li]=new base_item(71,82,64,64,59,112,'Purugly','432');
++li;

base_list[li]=new base_item(86,68,72,109,66,106,'Pyroar','668');
++li;

base_list[li]=new base_item(55,60,130,30,130,5,'Pyukumuku','771');
++li;

base_list[li]=new base_item(95,85,85,65,65,35,'Quagsire','195');
++li;

base_list[li]=new base_item(58,64,58,80,65,80,'Quilava','156');
++li;

base_list[li]=new base_item(61,78,95,56,58,57,'Quilladin','651');
++li;

base_list[li]=new base_item(65,95,75,55,55,85,'Qwilfish (Gen 3-6)','211');
++li;

base_list[li]=new base_item(65,95,85,55,55,85,'Qwilfish','211a');
++li;

base_list[li]=new base_item(65,86,60,55,60,94,'Raboot','814');
++li;

base_list[li]=new base_item(60,90,55,90,80,100,'Raichu (Gen 3-5)','26');
++li;

base_list[li]=new base_item(60,90,55,90,90,110,'Raichu','26a');
++li;

base_list[li]=new base_item(60,85,50,95,85,110,'Raichu (Alolan)','26b');
++li;

base_list[li]=new base_item(90,85,75,115,100,115,'Raikou','243');
++li;

base_list[li]=new base_item(28,25,25,45,35,40,'Ralts','280');
++li;

base_list[li]=new base_item(97,165,60,65,50,58,'Rampardos','409');
++li;

base_list[li]=new base_item(65,100,70,80,80,105,'Rapidash','78');
++li;

base_list[li]=new base_item(65,100,70,80,80,105,'Rapidash (Galarian)','78a');
++li;

base_list[li]=new base_item(55,81,60,50,70,97,'Raticate','20');
++li;

base_list[li]=new base_item(75,71,70,40,80,77,'Raticate (Alolan)','20a');
++li;

base_list[li]=new base_item(30,56,35,25,35,72,'Rattata','19');
++li;

base_list[li]=new base_item(30,56,35,25,35,72,'Rattata (Alolan)','19a');
++li;

base_list[li]=new base_item(105,150,90,150,90,95,'Rayquaza','384');
++li;

base_list[li]=new base_item(105,180,100,180,100,115,'Rayquaza (Mega)','384a');
++li;

base_list[li]=new base_item(80,50,100,100,200,50,'Regice','378');
++li;

base_list[li]=new base_item(200,100,50,100,50,80,'Regidrago','895');
++li;

base_list[li]=new base_item(80,100,50,100,50,200,'Regieleki','894');
++li;

base_list[li]=new base_item(110,160,110,80,110,100,'Regigigas','486');
++li;

base_list[li]=new base_item(80,100,200,50,100,50,'Regirock','377');
++li;

base_list[li]=new base_item(80,75,150,75,150,50,'Registeel','379');
++li;

base_list[li]=new base_item(100,90,130,45,65,55,'Relicanth','369');
++li;

base_list[li]=new base_item(35,65,35,65,35,65,'Remoraid','223');
++li;

base_list[li]=new base_item(100,120,100,150,120,90,'Reshiram','643');
++li;

base_list[li]=new base_item(110,65,75,125,85,30,'Reuniclus','579');
++li;

base_list[li]=new base_item(105,130,120,45,45,40,'Rhydon','112');
++li;

base_list[li]=new base_item(80,85,95,30,30,25,'Rhyhorn','111');
++li;

base_list[li]=new base_item(115,140,130,55,55,40,'Rhyperior','464');
++li;

base_list[li]=new base_item(60,55,60,95,70,124,'Ribombee','743');
++li;

base_list[li]=new base_item(100,125,90,60,70,85,'Rillaboom','812');
++li;

base_list[li]=new base_item(40,70,40,35,40,60,'Riolu','447');
++li;

base_list[li]=new base_item(45,65,40,30,40,60,'Rockruff','744');
++li;

base_list[li]=new base_item(55,75,85,25,25,15,'Roggenrola','524');
++li;

base_list[li]=new base_item(30,40,50,40,50,30,'Rolycoly','837');
++li;

base_list[li]=new base_item(38,47,35,33,35,57,'Rookidee','821');
++li;

base_list[li]=new base_item(50,60,45,100,80,65,'Roselia','315');
++li;

base_list[li]=new base_item(60,70,55,125,105,90,'Roserade (Gen 4-5)','407');
++li;

base_list[li]=new base_item(60,70,65,125,105,90,'Roserade','407a');
++li;

base_list[li]=new base_item(50,50,77,95,77,91,'Rotom','479');
++li;

base_list[li]=new base_item(50,65,107,105,107,86,'Rotom (Other Forms)','479a');
++li;

base_list[li]=new base_item(68,55,55,50,50,42,'Rowlet','722');
++li;

base_list[li]=new base_item(70,83,50,37,50,60,'Rufflet','627');
++li;

base_list[li]=new base_item(58,95,145,50,105,30,'Runerigus','867');
++li;

base_list[li]=new base_item(50,75,75,65,65,50,'Sableye','302');
++li;

base_list[li]=new base_item(50,85,125,85,115,20,'Sableye (Mega)','302a');
++li;

base_list[li]=new base_item(95,135,80,110,80,100,'Salamence','373');
++li;

base_list[li]=new base_item(95,145,130,120,90,120,'Salamence (Mega)','373a');
++li;

base_list[li]=new base_item(48,44,40,71,40,77,'Salandit','757');
++li;

base_list[li]=new base_item(68,64,60,111,60,117,'Salazzle','758');
++li;

base_list[li]=new base_item(95,100,85,108,70,70,'Samurott','503');
++li;

base_list[li]=new base_item(72,107,125,65,70,71,'Sandaconda','844');
++li;

base_list[li]=new base_item(50,72,35,35,35,65,'Sandile','551');
++li;

base_list[li]=new base_item(50,75,85,20,30,40,'Sandshrew','27');
++li;

base_list[li]=new base_item(50,75,90,10,35,40,'Sandshrew (Alolan)','27a');
++li;

base_list[li]=new base_item(75,100,110,45,55,65,'Sandslash','28');
++li;

base_list[li]=new base_item(75,100,120,25,65,65,'Sandslash (Alolan)','28a');
++li;

base_list[li]=new base_item(55,55,80,70,45,15,'Sandygast','769');
++li;

base_list[li]=new base_item(75,125,75,30,75,85,'Sawk','539');
++li;

base_list[li]=new base_item(80,100,70,60,70,95,'Sawsbuck','586');
++li;

base_list[li]=new base_item(38,35,40,27,25,35,'Scatterbug','664');
++li;

base_list[li]=new base_item(70,85,65,105,85,120,'Sceptile','254');
++li;

base_list[li]=new base_item(70,110,75,145,85,145,'Sceptile (Mega)','254a');
++li;

base_list[li]=new base_item(70,130,100,55,80,65,'Scizor','212');
++li;

base_list[li]=new base_item(70,150,140,65,100,75,'Scizor (Mega)','212a');
++li;

base_list[li]=new base_item(60,90,89,55,69,112,'Scolipede (Gen 5)','545');
++li;

base_list[li]=new base_item(60,100,89,55,69,112,'Scolipede','545a');
++li;

base_list[li]=new base_item(50,71,40,40,40,69,'Scorbunny','813');
++li;

base_list[li]=new base_item(65,90,115,45,115,58,'Scrafty','560');
++li;

base_list[li]=new base_item(50,75,70,35,70,48,'Scraggy','559');
++li;

base_list[li]=new base_item(70,110,80,55,80,105,'Scyther','123');
++li;

base_list[li]=new base_item(55,65,95,95,45,85,'Seadra','117');
++li;

base_list[li]=new base_item(80,92,65,65,80,68,'Seaking','119');
++li;

base_list[li]=new base_item(90,60,70,75,70,45,'Sealeo','364');
++li;

base_list[li]=new base_item(40,40,50,30,30,30,'Seedot','273');
++li;

base_list[li]=new base_item(65,45,55,45,70,45,'Seel','86');
++li;

base_list[li]=new base_item(105,85,75,85,75,74,'Seismitoad (Gen 5)','537');
++li;

base_list[li]=new base_item(105,95,75,85,75,74,'Seismitoad','537a');
++li;

base_list[li]=new base_item(35,46,34,35,45,20,'Sentret','161');
++li;

base_list[li]=new base_item(75,75,95,75,95,113,'Serperior','497');
++li;

base_list[li]=new base_item(60,60,75,60,75,83,'Servine','496');
++li;

base_list[li]=new base_item(73,100,60,100,60,65,'Seviper','336');
++li;

base_list[li]=new base_item(45,53,70,40,60,42,'Sewaddle','540');
++li;

base_list[li]=new base_item(70,120,40,95,40,95,'Sharpedo','319');
++li;

base_list[li]=new base_item(70,140,70,110,65,105,'Sharpedo (Mega)','319a');
++li;

base_list[li]=new base_item(100,100,100,100,100,100,'Shaymin','492');
++li;

base_list[li]=new base_item(100,103,75,120,75,127,'Shaymin (Sky)','492a');
++li;

base_list[li]=new base_item('1*',90,45,30,30,40,'Shedinja','292');
++li;

base_list[li]=new base_item(65,95,100,60,50,50,'Shelgon','372');
++li;

base_list[li]=new base_item(30,65,100,45,25,40,'Shellder','90');
++li;

base_list[li]=new base_item(76,48,48,57,62,34,'Shellos','422');
++li;

base_list[li]=new base_item(50,40,85,40,65,25,'Shelmet','616');
++li;

base_list[li]=new base_item(30,42,118,42,88,30,'Shieldon','410');
++li;

base_list[li]=new base_item(90,100,60,90,60,80,'Shiftry','275');
++li;

base_list[li]=new base_item(60,45,80,90,100,30,'Shiinotic','756');
++li;

base_list[li]=new base_item(45,65,34,40,34,45,'Shinx','403');
++li;

base_list[li]=new base_item(60,40,60,40,60,35,'Shroomish','285');
++li;

base_list[li]=new base_item(20,10,230,10,230,5,'Shuckle','213');
++li;

base_list[li]=new base_item(44,75,35,63,33,45,'Shuppet','353');
++li;

base_list[li]=new base_item(72,58,80,103,80,97,'Sigilyph','561');
++li;

base_list[li]=new base_item(50,35,55,25,25,15,'Silcoon','266');
++li;

base_list[li]=new base_item(52,57,75,35,50,46,'Silicobra','843');
++li;

base_list[li]=new base_item(95,95,95,95,95,95,'Silvally','773');
++li;

base_list[li]=new base_item(75,98,63,98,63,101,'Simipour','516');
++li;

base_list[li]=new base_item(75,98,63,98,63,101,'Simisage','512');
++li;

base_list[li]=new base_item(75,98,63,98,63,101,'Simisear','514');
++li;

base_list[li]=new base_item(40,45,45,74,54,50,'Sinistea','854');
++li;

base_list[li]=new base_item(62,135,95,68,82,65,'Sirfetch\'d','865');
++li;

base_list[li]=new base_item(50,65,45,50,50,45,'Sizzlipede','850');
++li;

base_list[li]=new base_item(65,80,140,40,70,70,'Skarmory','227');
++li;

base_list[li]=new base_item(66,65,48,62,57,52,'Skiddo','672');
++li;

base_list[li]=new base_item(55,45,50,45,65,80,'Skiploom','188');
++li;

base_list[li]=new base_item(50,45,45,35,35,50,'Skitty','300');
++li;

base_list[li]=new base_item(40,50,90,30,55,65,'Skorupi','451');
++li;

base_list[li]=new base_item(40,50,90,30,55,65,'Skrelp','690');
++li;

base_list[li]=new base_item(103,93,67,71,61,84,'Skuntank','435');
++li;

base_list[li]=new base_item(70,55,55,35,35,25,'Skwovet','819');
++li;

base_list[li]=new base_item(150,160,100,95,65,100,'Slaking','289');
++li;

base_list[li]=new base_item(60,60,60,35,35,30,'Slakoth','287');
++li;

base_list[li]=new base_item(68,75,53,83,113,60,'Sliggoo','705');
++li;

base_list[li]=new base_item(95,75,110,100,80,30,'Slowbro','80');
++li;

base_list[li]=new base_item(95,75,180,130,80,30,'Slowbro (Mega)','80a');
++li;

base_list[li]=new base_item(95,100,95,100,70,30,'Slowbro (Galarian)','80b');
++li;

base_list[li]=new base_item(95,75,80,100,110,30,'Slowking','199');
++li;

base_list[li]=new base_item(95,65,80,110,110,30,'Slowking (Galarian)','199a');
++li;

base_list[li]=new base_item(90,65,65,40,40,15,'Slowpoke','79');
++li;

base_list[li]=new base_item(90,65,65,40,40,15,'Slowpoke (Galarian)','79a');
++li;

base_list[li]=new base_item(40,40,40,70,40,20,'Slugma','218');
++li;

base_list[li]=new base_item(82,80,86,85,75,72,'Slurpuff','685');
++li;

base_list[li]=new base_item(55,20,35,20,45,75,'Smeargle','235');
++li;

base_list[li]=new base_item(45,30,15,85,65,65,'Smoochum','238');
++li;

base_list[li]=new base_item(55,95,55,35,75,115,'Sneasel','215');
++li;

base_list[li]=new base_item(45,45,55,45,55,63,'Snivy','495');
++li;

base_list[li]=new base_item(30,25,35,45,30,20,'Snom','872');
++li;

base_list[li]=new base_item(160,110,65,65,110,30,'Snorlax','143');
++li;

base_list[li]=new base_item(50,50,50,50,50,50,'Snorunt','361');
++li;

base_list[li]=new base_item(60,62,50,62,60,40,'Snover','459');
++li;

base_list[li]=new base_item(60,80,50,40,40,30,'Snubbull','209');
++li;

base_list[li]=new base_item(50,40,40,70,40,70,'Sobble','816');
++li;

base_list[li]=new base_item(137,137,107,113,89,97,'Solgaleo','791');
++li;

base_list[li]=new base_item(45,30,40,105,50,20,'Solosis','577');
++li;

base_list[li]=new base_item(70,95,85,55,65,70,'Solrock (Gen 3-6)','338');
++li;

base_list[li]=new base_item(90,95,85,55,65,70,'Solrock','338a');
++li;

base_list[li]=new base_item(40,60,30,31,31,70,'Spearow','21');
++li;

base_list[li]=new base_item(100,65,60,145,80,130,'Spectrier','897');
++li;

base_list[li]=new base_item(45,22,60,27,30,29,'Spewpa','665');
++li;

base_list[li]=new base_item(70,40,50,55,50,25,'Spheal','363');
++li;

base_list[li]=new base_item(40,60,40,40,40,30,'Spinarak','167');
++li;

base_list[li]=new base_item(60,60,60,60,60,60,'Spinda','327');
++li;

base_list[li]=new base_item(50,92,108,92,108,35,'Spiritomb','442');
++li;

base_list[li]=new base_item(60,25,35,70,80,60,'Spoink','325');
++li;

base_list[li]=new base_item(78,52,60,63,65,23,'Spritzee','682');
++li;

base_list[li]=new base_item(44,48,65,50,64,43,'Squirtle','7');
++li;

base_list[li]=new base_item(61,131,211,53,101,13,'Stakataka','805');
++li;

base_list[li]=new base_item(73,95,62,85,65,85,'Stantler','234');
++li;

base_list[li]=new base_item(85,120,70,50,50,100,'Staraptor (Gen 4-5)','398');
++li;

base_list[li]=new base_item(85,120,70,50,60,100,'Staraptor','398a');
++li;

base_list[li]=new base_item(55,75,5,40,40,80,'Staravia','397');
++li;

base_list[li]=new base_item(40,55,30,30,30,60,'Starly','396');
++li;

base_list[li]=new base_item(60,75,85,100,85,115,'Starmie','121');
++li;

base_list[li]=new base_item(30,45,55,70,55,85,'Staryu','120');
++li;

base_list[li]=new base_item(75,85,200,55,65,30,'Steelix','208');
++li;

base_list[li]=new base_item(75,125,230,55,95,30,'Steelix (Mega)','208a');
++li;

base_list[li]=new base_item(52,40,48,40,48,62,'Steenee','762');
++li;

base_list[li]=new base_item(100,125,135,20,20,70,'Stonjourner','874');
++li;

base_list[li]=new base_item(85,110,90,45,90,80,'Stoutland (Gen 5)','508');
++li;

base_list[li]=new base_item(85,100,90,45,90,80,'Stoutland','508a');
++li;

base_list[li]=new base_item(70,75,50,45,50,50,'Stufful','759');
++li;

base_list[li]=new base_item(109,66,84,81,99,32,'Stunfisk','618');
++li;

base_list[li]=new base_item(109,81,99,66,84,32,'Stunfisk (Galarian)','618a');
++li;

base_list[li]=new base_item(63,63,47,41,41,74,'Stunky','434');
++li;

base_list[li]=new base_item(70,100,115,30,65,30,'Sudowoodo','185');
++li;

base_list[li]=new base_item(100,75,115,90,115,85,'Suicune','245');
++li;

base_list[li]=new base_item(75,75,55,105,85,30,'Sunflora','192');
++li;

base_list[li]=new base_item(30,30,30,30,30,30,'Sunkern','191');
++li;

base_list[li]=new base_item(40,30,32,50,52,65,'Surskit','283');
++li;

base_list[li]=new base_item(45,40,60,40,75,50,'Swablu','333');
++li;

base_list[li]=new base_item(55,63,90,50,80,42,'Swadloon','541');
++li;

base_list[li]=new base_item(100,73,83,73,83,55,'Swalot','317');
++li;

base_list[li]=new base_item(100,110,90,85,90,60,'Swampert','260');
++li;

base_list[li]=new base_item(100,150,110,95,110,70,'Swampert (Mega)','260a');
++li;

base_list[li]=new base_item(75,87,63,87,63,98,'Swanna','581');
++li;

base_list[li]=new base_item(60,85,60,50,50,125,'Swellow (Gen 3-6)','277');
++li;

base_list[li]=new base_item(60,85,60,75,50,125,'Swellow','277a');
++li;

base_list[li]=new base_item(50,50,40,30,30,50,'Swinub','220');
++li;

base_list[li]=new base_item(62,57,55,77,55,114,'Swirlix','684');
++li;

base_list[li]=new base_item(67,57,55,77,55,114,'Swoobat','528');
++li;

base_list[li]=new base_item(95,65,65,110,130,60,'Sylveon','700');
++li;

base_list[li]=new base_item(40,55,30,30,30,85,'Taillow','276');
++li;

base_list[li]=new base_item(78,81,71,74,69,126,'Talonflame','663');
++li;

base_list[li]=new base_item(65,55,115,100,40,60,'Tangela','114');
++li;

base_list[li]=new base_item(100,100,125,110,50,50,'Tangrowth','465');
++li;

base_list[li]=new base_item(70,130,115,85,95,75,'Tapu Bulu','787');
++li;

base_list[li]=new base_item(70,75,115,95,130,85,'Tapu Fini','788');
++li;

base_list[li]=new base_item(70,115,85,95,75,130,'Tapu Koko','785');
++li;

base_list[li]=new base_item(70,85,75,130,115,95,'Tapu Lele','786');
++li;

base_list[li]=new base_item(75,100,95,40,70,110,'Tauros','128');
++li;

base_list[li]=new base_item(60,80,50,50,50,40,'Teddiursa','216');
++li;

base_list[li]=new base_item(40,40,35,50,100,70,'Tentacool','72');
++li;

base_list[li]=new base_item(80,70,65,80,120,100,'Tentacruel','73');
++li;

base_list[li]=new base_item(65,63,45,45,45,45,'Tepig','498');
++li;

base_list[li]=new base_item(91,129,90,72,90,108,'Terrakion','639');
++li;

base_list[li]=new base_item(70,58,58,87,92,90,'Thievul','828');
++li;

base_list[li]=new base_item(120,100,85,30,85,45,'Throh','538');
++li;

base_list[li]=new base_item(79,115,70,125,80,111,'Thundurus','642');
++li;

base_list[li]=new base_item(79,105,70,145,80,101,'Thundurus (Therian)','642a');
++li;

base_list[li]=new base_item(70,85,70,55,60,80,'Thwackey','811');
++li;

base_list[li]=new base_item(75,80,55,25,35,35,'Timburr','532');
++li;

base_list[li]=new base_item(54,78,103,53,45,22,'Tirtouga','564');
++li;

base_list[li]=new base_item(65,98,63,40,73,96,'Togedemaru','777');
++li;

base_list[li]=new base_item(85,50,95,120,115,80,'Togekiss','468');
++li;

base_list[li]=new base_item(35,20,65,40,65,20,'Togepi','175');
++li;

base_list[li]=new base_item(55,40,85,80,105,40,'Togetic','176');
++li;

base_list[li]=new base_item(45,60,40,70,50,45,'Torchic','255');
++li;

base_list[li]=new base_item(70,85,140,85,70,20,'Torkoal','324');
++li;

base_list[li]=new base_item(79,115,70,125,80,111,'Tornadus','641');
++li;

base_list[li]=new base_item(79,100,80,110,90,121,'Tornadus (Therian)','641a');
++li;

base_list[li]=new base_item(65,85,50,80,50,90,'Torracat','726');
++li;

base_list[li]=new base_item(95,109,105,75,85,56,'Torterra','389');
++li;

base_list[li]=new base_item(50,65,64,44,48,43,'Totodile','158');
++li;

base_list[li]=new base_item(80,120,75,75,75,60,'Toucannon','733');
++li;

base_list[li]=new base_item(50,63,152,53,142,35,'Toxapex','748');
++li;

base_list[li]=new base_item(40,38,35,54,35,40,'Toxel','848');
++li;

base_list[li]=new base_item(83,106,65,86,65,85,'Toxicroak','454');
++li;

base_list[li]=new base_item(75,98,70,114,70,75,'Toxtricity','849');
++li;

base_list[li]=new base_item(62,77,62,50,42,65,'Tranquill','520');
++li;

base_list[li]=new base_item(45,100,45,45,45,10,'Trapinch','328');
++li;

base_list[li]=new base_item(40,45,35,65,55,70,'Treeko','252');
++li;

base_list[li]=new base_item(85,110,76,65,82,56,'Trevenant','709');
++li;

base_list[li]=new base_item(99,68,83,72,87,51,'Tropius','357');
++li;

base_list[li]=new base_item(50,50,62,40,62,65,'Trubbish','568');
++li;

base_list[li]=new base_item(55,85,50,40,50,75,'Trumbeak','732');
++li;

base_list[li]=new base_item(72,120,98,50,98,72,'Tsareena','763');
++li;

base_list[li]=new base_item(60,78,135,91,85,36,'Turtonator','776');
++li;

base_list[li]=new base_item(55,68,64,45,55,31,'Turtwig','387');
++li;

base_list[li]=new base_item(50,50,40,50,40,64,'Tympole','535');
++li;

base_list[li]=new base_item(35,55,40,45,40,60,'Tynamo','602');
++li;

base_list[li]=new base_item(95,95,95,95,95,59,'Type: Null','772');
++li;

base_list[li]=new base_item(78,84,78,109,85,100,'Typhlosion','157');
++li;

base_list[li]=new base_item(100,134,110,95,100,61,'Tyranitar','248');
++li;

base_list[li]=new base_item(100,164,150,95,120,71,'Tyranitar (Mega)','248a');
++li;

base_list[li]=new base_item(82,121,119,69,59,71,'Tyrantrum','697');
++li;

base_list[li]=new base_item(35,35,35,35,35,35,'Tyrogue','236');
++li;

base_list[li]=new base_item(58,89,77,45,45,48,'Tyrunt','696');
++li;

base_list[li]=new base_item(95,65,110,60,130,65,'Umbreon','197');
++li;

base_list[li]=new base_item(80,105,80,65,55,93,'Unfezant (Gen 5)','521');
++li;

base_list[li]=new base_item(80,115,80,75,55,93,'Unfezant','521a');
++li;

base_list[li]=new base_item(48,72,48,72,48,48,'Unown','201');
++li;

base_list[li]=new base_item(90,130,75,75,75,55,'Ursaring','217');
++li;

base_list[li]=new base_item(100,130,100,63,60,97,'Urshifu','892');
++li;

base_list[li]=new base_item(75,75,130,75,130,95,'Uxie','480');
++li;

base_list[li]=new base_item(51,65,65,80,75,59,'Vanillish','583');
++li;

base_list[li]=new base_item(36,50,50,65,60,44,'Vanillite','582');
++li;

base_list[li]=new base_item(71,95,85,110,95,79,'Vanilluxe','584');
++li;

base_list[li]=new base_item(130,65,60,110,95,65,'Vaporeon','134');
++li;

base_list[li]=new base_item(30,45,59,30,39,57,'Venipede','543');
++li;

base_list[li]=new base_item(70,65,60,90,75,90,'Venomoth','49');
++li;

base_list[li]=new base_item(60,55,50,40,55,45,'Venonat','48');
++li;

base_list[li]=new base_item(80,82,83,100,100,80,'Venusaur','3');
++li;

base_list[li]=new base_item(80,100,123,122,120,80,'Venusaur (Mega)','3a');
++li;

base_list[li]=new base_item(70,80,102,80,102,40,'Vespiquen','416');
++li;

base_list[li]=new base_item(50,70,50,50,50,70,'Vibrava','329');
++li;

base_list[li]=new base_item(100,100,100,100,100,100,'Victini','494');
++li;

base_list[li]=new base_item(80,105,65,100,60,70,'Victreebel (Gen 3-5)','71');
++li;

base_list[li]=new base_item(80,105,65,100,70,70,'Victreebel','71a');
++li;

base_list[li]=new base_item(80,80,80,55,55,90,'Vigoroth','288');
++li;

base_list[li]=new base_item(77,70,90,145,75,43,'Vikavolt','738');
++li;

base_list[li]=new base_item(75,80,85,100,90,50,'Vileplume (Gen 3-5)','45');
++li;

base_list[li]=new base_item(75,80,85,110,90,50,'Vileplume','45a');
++li;

base_list[li]=new base_item(91,90,72,90,129,108,'Virizion','640');
++li;

base_list[li]=new base_item(80,52,50,90,50,89,'Vivillon','666');
++li;

base_list[li]=new base_item(65,73,55,47,75,85,'Volbeat (Gen 3-6)','313');
++li;

base_list[li]=new base_item(65,73,75,47,85,85,'Volbeat','313a');
++li;

base_list[li]=new base_item(80,110,120,130,90,70,'Volcanion','721');
++li;

base_list[li]=new base_item(85,60,65,135,105,100,'Volcarona','637');
++li;

base_list[li]=new base_item(40,30,50,55,55,100,'Voltorb','100');
++li;

base_list[li]=new base_item(70,55,75,45,65,60,'Vullaby','629');
++li;

base_list[li]=new base_item(38,41,40,50,65,65,'Vulpix','37');
++li;

base_list[li]=new base_item(38,41,40,50,65,65,'Vulpix (Alolan)','37a');
++li;

base_list[li]=new base_item(130,70,35,70,35,60,'Wailmer','320');
++li;

base_list[li]=new base_item(170,90,45,90,45,60,'Wailord','321');
++li;

base_list[li]=new base_item(110,80,90,95,90,65,'Walrein','365');
++li;

base_list[li]=new base_item(59,63,80,65,80,58,'Wartortle','8');
++li;

base_list[li]=new base_item(60,85,69,60,69,77,'Watchog','505');
++li;

base_list[li]=new base_item(70,120,65,45,85,125,'Weavile','461');
++li;

base_list[li]=new base_item(40,35,30,20,20,50,'Weedle','13');
++li;

base_list[li]=new base_item(65,90,50,85,45,55,'Weepinbell','70');
++li;

base_list[li]=new base_item(65,90,120,85,70,60,'Weezing','110');
++li;

base_list[li]=new base_item(65,90,120,85,70,60,'Weezing (Galarian)','110a');
++li;

base_list[li]=new base_item(60,67,85,77,75,116,'Whimsicott','547');
++li;

base_list[li]=new base_item(40,55,99,40,79,47,'Whirlipede','544');
++li;

base_list[li]=new base_item(110,78,73,76,71,60,'Whiscash','340');
++li;

base_list[li]=new base_item(64,51,23,51,23,28,'Whismur','293');
++li;

base_list[li]=new base_item(140,70,45,75,50,45,'Wigglytuff (Gen 3-5)','40');
++li;

base_list[li]=new base_item(140,70,45,85,50,45,'Wigglytuff','40a');
++li;

base_list[li]=new base_item(25,35,40,20,30,80,'Wimpod','767');
++li;

base_list[li]=new base_item(40,30,30,55,30,85,'Wingull','278');
++li;

base_list[li]=new base_item(45,20,20,25,25,40,'Wishiwashi','746');
++li;

base_list[li]=new base_item(45,140,130,140,135,30,'Wishiwashi (School)','746a');
++li;

base_list[li]=new base_item(190,33,58,33,58,33,'Wobbuffet','202');
++li;

base_list[li]=new base_item(55,45,43,55,43,72,'Woobat (Gen 5-6)','527');
++li;

base_list[li]=new base_item(65,45,43,55,43,72,'Woobat','527a');
++li;

base_list[li]=new base_item(42,40,55,40,45,48,'Wooloo','831');
++li;

base_list[li]=new base_item(55,45,45,25,25,15,'Wooper','194');
++li;

base_list[li]=new base_item(60,59,85,79,105,36,'Wormadam (Plant)','413');
++li;

base_list[li]=new base_item(60,69,95,69,95,36,'Wormadam (Sandy)','413a');
++li;

base_list[li]=new base_item(60,69,95,69,95,36,'Wormadam (Trash)','413b');
++li;

base_list[li]=new base_item(45,45,35,20,30,20,'Wurmple','265');
++li;

base_list[li]=new base_item(95,23,48,23,48,23,'Wynaut','360');
++li;

base_list[li]=new base_item(65,75,70,95,70,95,'Xatu','178');
++li;

base_list[li]=new base_item(126,131,95,131,98,99,'Xerneas','716');
++li;

base_list[li]=new base_item(83,89,71,173,71,83,'Xurkitree','796');
++li;

base_list[li]=new base_item(38,30,85,55,65,30,'Yamask','562');
++li;

base_list[li]=new base_item(38,55,85,30,65,30,'Yamask (Galarian)','562a');
++li;

base_list[li]=new base_item(59,45,50,40,50,26,'Yamper','835');
++li;

base_list[li]=new base_item(65,65,45,75,45,95,'Yanma','193');
++li;

base_list[li]=new base_item(86,76,86,116,56,95,'Yanmega','469');
++li;

base_list[li]=new base_item(48,70,30,30,30,45,'Yungoos','734');
++li;

base_list[li]=new base_item(126,131,95,131,98,99,'Yveltal','717');
++li;

base_list[li]=new base_item(92,130,115,80,115,138,'Zacian','888');
++li;

base_list[li]=new base_item(92,170,115,80,115,148,'Zacian (Crowned Sword)','888a');
++li;

base_list[li]=new base_item(92,130,115,80,115,138,'Zamazenta','889');
++li;

base_list[li]=new base_item(92,130,145,80,145,128,'Zamazenta (Crowned Shield)','889a');
++li;

base_list[li]=new base_item(73,115,60,60,60,90,'Zangoose','335');
++li;

base_list[li]=new base_item(90,90,85,125,90,100,'Zapdos','145');
++li;

base_list[li]=new base_item(90,125,90,85,90,100,'Zapdos (Galarian)','145a');
++li;

base_list[li]=new base_item(105,120,105,70,95,105,'Zarude','893');
++li;

base_list[li]=new base_item(75,100,63,80,63,116,'Zebstrika','523');
++li;

base_list[li]=new base_item(100,150,120,120,100,90,'Zekrom','644');
++li;

base_list[li]=new base_item(88,112,75,102,80,143,'Zeraora','807');
++li;

base_list[li]=new base_item(38,30,41,30,41,60,'Zigzagoon','263');
++li;

base_list[li]=new base_item(38,30,41,30,41,60,'Zigzagoon (Galarian)','263a');
++li;

base_list[li]=new base_item(60,105,60,120,60,105,'Zoroark','571');
++li;

base_list[li]=new base_item(40,65,40,80,40,65,'Zorua','570');
++li;

base_list[li]=new base_item(40,45,35,30,40,55,'Zubat','41');
++li;

base_list[li]=new base_item(72,85,70,65,70,58,'Zweilous','634');
++li;

base_list[li]=new base_item(108,100,121,81,95,95,'Zygarde','718');
++li;

base_list[li]=new base_item(54,100,71,61,85,115,'Zygarde (10%)','718a');
++li;

base_list[li]=new base_item(216,100,121,91,95,85,'Zygarde (Complete)','718b');
++li;

if (typeof name_translate !== "undefined") { //you have to resort after translating
    base_list.sort(function(a, b) {
        return a.name.localeCompare(b.name)
    });
}

/*


base_list[li]=new base_item(,'','');
++li;
*/