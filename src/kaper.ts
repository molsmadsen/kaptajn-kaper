class game {

// 10 
// SCREEN 1
// COLOR 1,1
// KEY OFF

// 30 
// DEFINT I-J,L-P

i: number;
j: number;
l: number;
m: number;
n: number;
o: number;
p: number;

a: string;
b: string;
c: string;
d: string;
e: string;
f: string;
g: string;
h: string;
q: string;
r: string;
s: string;
t: string;
u: string;
v: string;
w: string;
x: string;
y: string;
z: string;

// DEFSTR A-H,Q-Z
// DIM FJENDE(8),ISKYTS(8),MANDF(8),IRGSDF(8),VIND(3),PRIS(7),PRISG(7),IKRYDS(65),IISS(8010),IISSS(8010),tit(2,6)

FJENDE: [8];
ISKYTS: [8];
MANDF: [8];
IRGSDF: [8];
VIND: [8];
PRIS: [7];
PRISG: [7];
IKRYDS: [65];
IISS: [8010];
IISSS: [8010];
tit: [][];

// 31 
//DIM PLASK(20),ISPLAT1(20),ISPLAT2(100),IBIG(550),JACK(300),IBIGD(550),JOLLY(300),ICK(10,10),ISKIB(20),ISKIB1(50),IMAP(30,15),KORNF(8),havn(10),iskytsf(10),ickx(10),icky(10),ijump(11)


// 32 // 33 
// tit(1,1)="skibsfører"
// tit(1,2)="kaptajn"
//tit(1,3)="kommandørkaptajn"
//tit(1,4)="kommandør"
// tit(1,5)="admiral"
// tit(2,1)="Borger "
// tit(2,2)="BARON "
// tit(2,3)="GREV "
// tit(2,4)="KAMMERHERRE "
// tit(2,5)="KRONPRINS "
tit: [string[], string[]] = [["skibsfører", "kaptajn", "kommandørkaptajn","kommandør","admiral"], ["Borger ", "BARON ", "GREV ", "KAMMERHERRE ", "KRONPRINS "]];

// 35 
// CLS
// ON KEY(1) GOSUB 8000
// ON KEY(2) GOSUB 3430
// KEY (2) ON

// 42 
//OPEN "rec.dat" AS #1
// FIELD 1,2 AS POFMA$,25 AS POFNA$
// LOCATE 10,10
// PRINT "REKORD:"

// 43 
//LOCATE 14,6,0
// PRINT "Rek."HS;
// LOCATE ,12
// PRINT"Indehaver";

// 45 
//GET 1,2
//IHS=CVI(POFMA$)
//LOCATE 17,6,0
//PRINT IHS;
//LOCATE ,12
//PRINT POFNA$;
//CLOSE

// 50 
//LOCATE 1,7,0
// PRINT "Kaptajn Kaper i Kattegat";
//LOCATE 2,10,0
//PRINT "af P.O.Frederiksen";
//locate 4,10,0
//print "Version 1 Release 4";

// 60 
//VIND(1)="højre"
//VIND(3)="venstre"
//KORN=30
//IREP=200
//IRGSD=600
//ISKYTS=20
//MAND=200
//IPOINT!=0
//ITUR=0
//JUVEL=0
//IRAV=0
//IWIN=1
//ILOSE=1

// 70 
// IKAMP=2
// IBIGL=0
//FOR I=0 TO 8
//FJENDE(I)=STR$(I)
//NEXT

// 80 
// KEY 9,CHR$(27)+"width 80"+CHR$(13)
//KEY OFF:IDIF=0
//LOCATE 25,1,0
//GOSUB 2390

// 81 
// A=TIME$
//RANDOMIZE VAL(RIGHT$(A,2))
//IC2=1
//COLOR 1,IC2,1
// CLS

// 83 
// PRINT "Du kan altid flippe lyden af og på "
//locate ,12,0
//print"med F2!"
//print
//DEF SEG=65
//KBS%=PEEK(7)
//POKE 7,(KBS% AND -33)+32

// 84 
// print
// print "Hvad vælger du lige nu?:"
//print

// 87 
//PRINT
//print "0: Stilhed"
//PRINT:print"1: Lydeffekter"
//PRINT
//print "Nuværende værdi: "0-LYD
// PRINT
//print "Angiv ny værdi:";

// 88 
// GOSUB 2400
//PRINT A
//IF A="1" THEN LYD=-1

// 89 *****
// GOSUB 102
//GOTO 103

// 102 
//DIF=IDIF+2
//ITURLIM=itur+325-(12.5*IDIF)
// IPOINTLIM=ipoint!+500+(250*IDIF)
//RETURN

// 103 
//DEF SEG=&HB800
// BLOAD "titel.pic",0

// 104 
//IF LYD THEN PLAY "T230L8MBMSCO3BO4C4O3CP8C4GFEGO4CP8CEDCD4O3D4D4O4D"

// 105 
//IF LYD THEN PLAY "CO3BDGDG4ABO4C32D32C16O3BAGA32B32A16GFEF32G32F16EDCDCO2BAGO3CO2BO3DCEDFE16F16EC4C4"

// 106 
//gosub 115
// goto 285

// 115 
//OPEN "figures.dat" FOR INPUT AS #1

// 120 
//FOR I=0 TO 20
//INPUT #1,PLASK(I)
//NEXT

// 125 
//FOR I=0 TO 65
// INPUT #1,IKRYDS(I)
// NEXT

// 130 
//FOR I=0 TO 50
//INPUT #1,ISKIB1(I)
//NEXT

// 135 
//FOR I=0 TO 50
//INPUT #1,ISPLAT2(I)
//NEXT
//IF LYD THEN PLAY "T230L8MBMSO3gfego4co3gego4co3ga16b16af4f4p16"

// 140 
//FOR I=0 TO 20
//INPUT #1,ISPLAT1(I)
//NEXT

// 145 
//FOR I=0 TO 120
//INPUT #1,JACK(I)
//NEXT

// 150 
//IF LYD THEN PLAY "T230L8MBMSO3agf+ao4do3af+ao4do3ab16o4c16o3bg4g4p16"

// 155 
//FOR I=0 TO 120
//INPUT #1,JOLLY(I)
//NEXT

// 165 
//FOR I=0 TO 20
//INPUT #1,ISKIB(I)
//NEXT
//close
//return

// 285 
//IF LYD THEN PLAY "O3fga32b32a16gfef32g32f16edcd32e32d16co2bo3CDCO2BAGO3CO2BO3DCEDFE16F16EC4C4"

// 570 
//READ IX,IY
//IF IX=0 THEN 587

// 580 
//IMAP (IX,IY)=1
// GOTO 570



// 587 
//FOR IP=5 TO 25 STEP 10
//PUT (IP,35),ISKIB,PSET
//NEXT 
//PUT (99,35),ISKIB1,PSET

// 590 
//READ IX,IY
//IF IX=0 THEN 620 ELSE READ NR,H

// 600 
//IF NR>IHMAX THEN IHMAX=NR

// 610 
//IMAP (IX,IY)=NR
//HAVN(NR)=H
//GOTO 590

// 620 
//RESTORE 830
// FOR I=1 TO 5
// READ PRISG(I)
//NEXT
// RESTORE 840

// 630 
//READ I
// IF I=0 THEN 925

// 640 
//READ FJENDE(I),ISKYTSF(I),MANDF(I),IRGSDF(I),KORNF(I)
// GOTO 630

// 650 
//DATA 7,5 ,8,1 ,8,2 ,7,2 ,7,3 ,7,4 ,6,3 ,5,3 ,4,5 ,5,4 ,5,3 ,4,2 ,2,3 ,5,2 ,3,3 ,2,3 ,2,4 ,2,5
// 660 
//DATA 2,6 ,2,7 ,2,8 ,2,9 ,1,9 ,6,11 ,6,10 ,26,0 ,27,0 ,27,1 ,27,2 ,28,1 ,28,2
// 670 
//DATA 28,3 ,26,4 ,27,4 ,28,4 ,26,5 ,27,5 , 27,6 ,27,7 ,28,7 ,28,8 ,28,9 ,29,9 ,29,10 ,29,11
// 680 
//DATA 12,13 ,13,13 ,13,12 ,14,12 ,15,12 ,16,12 ,14,11 ,15,11 ,15,10 ,16,10 ,17,12
// 690 
//DATA 15,9 ,16,9 ,16,13 ,17,13 ,18,13 ,19,13 ,19,13 ,19,12 ,19,11 ,19,10 ,20,13
// 700 
//DATA 20,7 ,21,6 ,21,7 ,21,8 ,21,9 ,21,10 ,21,11 ,21,12 ,21,13 ,21,14 ,21,15
// 710 
//DATA 22,6 ,22,7 ,22,8 ,22,9 ,22,10 ,22,11 ,22,12 ,22,13 ,22,14 ,22,15
// 720 
//DATA 23,6 ,23,7 ,23,8 ,23,9 ,23,10 ,23,11 ,23,12 ,23,13 ,23,14 ,23,15 ,11,14 ,16,12
// 730 
//DATA 24,7 ,24,8 ,24,9 ,24,10 ,24,11 ,24,12 ,24,13 ,24,14 ,24,15 ,11,9 ,13,8 ,14,8 ,13,12 ,12,12
// 740 
//DATA 25,12 , 25,13 , 25,14 ,11,12 ,10,12 ,6,9 ,5,8 ,6,8 ,3,12 ,18,12 ,19,9 ,25,3 ,26,9 ,0,0
// 750 
//DATA 25,12,2,København,25,7,3,Helsingør,18,8,4,Hundested,9,1,5,Grenå
// 790 
//DATA 7,4,6,Ebeltoft,11,13,7,Kalundborg,24,3,8,Mølle,0,0,
// 830 
//DATA 10,8,100,5,50
// 840 
//DATA 1,handelsmand,5,80,150,30,2,troppetransport,10,480,600,15,3,kanonbåd,2,40,150,4
// 870 
//DATA 4,galease,15,140,450,5,5,brig,6,50,200,4,6,skonnert,1,10,30,1,7,orlogsmand,50,140,900,20
// 910 
//DATA 8,Sørøverskib,70,200,1500,12,0

// 925 
//LOCATE 25,1,0
//GOSUB 2390

// 927 
//CLS
// PUT (210,30),ISKIB 
//LOCATE 5,1
//PRINT"Sådan ser dit skib ud:"
//LOCATE 7,1

// 930 
//INPUT "Hvad er dit navn";SPILLER
// LOCATE 12,1
// PRINT "OK,"SPILLER"."

// 931 
//PRINT "Jeg kommer lige til"
//PRINT "at hente et par billeder,"
//PRINT "så nu må du vente lidt!";

// 932 
//PRINT "Du kan afbryde spillet"
//PRINT "ved at trykke på 'escape'!"

// 933 
//print
//print"Husk: F1=Hjælp, F2=Lyd på/af, Esc=Slut"

// 935 
//LOCATE 25,1,0
// GOSUB 2390
//COLOR 1,IC2
//GOSUB 945
//gosub 960
//KEY (1) ON

// 937 
//B$=""
//DEF SEG=&HF000
//A$=HEX$(PEEK(&HFFFE))
//DEF SEG:AT%=1
//IF A$="FC" THEN AT%=2

// 940 
//GOTO 1040

// 945 
//if ipicsw=1 then return else ipicsw=1

// 947 
//out &h3d8,2

// 948 
// DEF SEG=&HB800
//BLOAD "sigte.pic",0
//GET (0,0)-(319,199),IISSS
//BLOAD "map.pic",0

// 949 
// GET (0,0)-(319,199),IISS
//out &h3d8,42
//return

// 950 
// CLS
//PUT (0,0),IISS,PSET

// 960 
// ic2=0
//color 1,ic2
//IF IRGSD>30000 THEN GOTO 6200

// 961 
// IF MAND>500 THEN GOTO 6300

// 962 
// IF ISKYTS>150 THEN GOTO 6400

// 963 
// IF KORN>700 THEN GOTO 6450

// 965 
// LOCATE 24,2,0
//PRINT "Mænd:";
//LOCATE 24,28,0
//PRINT "Rep:";

// 970 // 980 // 990 // 995 
// LOCATE 1,3,0
//PRINT "Point:"IPOINT!;
//LOCATE 1,16,0
//PRINT " Mål:"IPOINTLIM"på"ITURLIM"træk";
// LOCATE 22,2,0
// PRINT "Træk:";
// LOCATE 22,14,0
// PRINT "Rgsdl:";
// LOCATE 22,28,0
// PRINT "Korn:";
// LOCATE 24,14,0
// PRINT "Skyts:";
// LOCATE 20,3,0
// PRINT "F1:Hjælp";
// LOCATE ,17
// PRINT "F2:lyd";
// LOCATE ,30
// PRINT "Esc:Slut";

// 1000 
//ic2=0
//color 1,ic2
//LOCATE 24,7,0
//PRINT MAND;
//LOCATE 24,32,0
//PRINT IREP;

// 1010 
// LOCATE 22,8,0
//PRINT ITUR;
//LOCATE 22,20,0
//PRINT IRGSD;

// 1020 
// LOCATE 22,34,0
//PRINT INT(KORN);
//LOCATE 24,20,0
//PRINT ISKYTS;

// 1030 
// RETURN

// 1040 
// IX=100
//IY=100

// 1050 
// PUT (IX,IY),ISKIB,XOR

// 1060 
// GOSUB 2400
//IF A=CHR$(27) THEN cls
//goto 1760

// 1070 
// IGX=IX
// IGY=IY
//IMOVE=0
//IXX=IX
//IYY=IY:

// 1080 
// IF A="4" OR A=CHR$(29) THEN IX=IX-10
//GOTO 1170

// 1090 
// IF A="6" OR A=CHR$(28) THEN IX=IX+10
// GOTO 1170

// 1100 
// IF A="8" OR A=CHR$(30) THEN IY=IY-10
// GOTO 1170

// 1110 
// IF A="2" OR A=CHR$(31) THEN IY=IY+10
// GOTO 1170

// 1120 
// IF A="1" THEN IY=IY+10
// IX=IX-10
// GOTO 1170

// 1130 
// IF A="3" THEN IY=IY+10
// IX=IX+10
// GOTO 1170

// 1140 
// IF A="7" THEN IY=IY-10
// IX=IX-10
//GOTO 1170

// 1150 
// IF A="9" THEN IY=IY-10
// IX=IX+10
// GOTO 1170

// 1160 
// GOTO 1060

// 1170 
// IF IPOINT!>IPOINTLIM-1 THEN GOSUB 6100
// GOSUB 2390
// GOSUB 950
// GOTO 1250

// 1171 
// ITUR=ITUR+1
// IF ITUR=ITURLIM tHEN GOSUB 6000
// GOSUB 2390
// COLOR 1
// GOSUB 950
// GOTO 1250

// 1175 
// GOSUB 1000
// KORN=KORN-(MAND*(idif/800))
//IF KORN<0 THEN KORN=0
//MAND=INT(.9*MAND)
//GOSUB 5000

// 1180 
// IF IX<10 THEN IX=10

// 1190 
// IF IY<10 THEN IY=10

// 1200 
// IF IX>290 THEN IX=290

// 1210 
// IF IY>140 THEN IY=140

// 1220 
// PUT (IGX,IGY),ISKIB,XOR
// IM=IMAP(IX/10,IY/10)

// 1225 
// IF lyd and IM=1 THEN  for ii=500 to 100 step -10
//sound ii,.1
//next

// 1226 
// IF IM=1 THEN 
//irep=irep-3
//LOCATE 24,32,0
//PRINT IREP; 
//gosub 5000
//IX=IXX
//IY=IYY
//GOTO 1050

// 1230 
// IF IM>1 AND IM<10 THEN 1260

// 1240 
// IF IM=0 AND (.25>RND) THEN GOSUB 1810 
//GOSUB 950
//GOTO 1250

// 1250 
// IXX=IX
//IYY=IY
//PUT (IX,IY),ISKIB,XOR
//GOTO 1060

// 1260 
// CLS
//PRINT "Du er på vej ind i havnen i "HAVN(IM)"."

// 1270 
// PRINT "Styr uden om de andre skibe på reden"
// PRINT"ind i havneindløbet,"

// 1280 
// PRINT "Brug 4 ("CHR$(27)") for at flytte til venstre"
// PRINT"og 6 for at flytte til højre."

// 1290 
// PRINT
// PRINT "Hvis du støder ind i et "
// PRINT "af de andre skibe vil dit skib"
// 1300 
// PRINT"blive beskadiget, men hvis du"
// PRINT"rammer ved siden af havne indløbet,":PRINT"så overlever du det ikke!"

// 1310 
// IF (2*RND)<1 THEN IVIND=1 ELSE IVIND=3

// 1320 
// PRINT
// PRINT"Pas på!!! Der kan komme vindstød fra ";
// LOCATE 14,14
// PRINT VIND(IVIND)"!";
// LOCATE 15,17

// 1330 
// IF IVIND=1 THEN AV=CHR$(27) ELSE AV=CHR$(26)

// 1340 
// PRINT AV
// IC2=0
// COLOR 1,IC2

// 1350 
// GOSUB 2380
// IC2=0
// COLOR 1,IC2
// CLS

// 1360 
// FOR I=IDIF*5 TO 0 STEP -1
//IGX=INT(1+RND*29)
//IGY=INT(1+RND*14)
//PUT (IGX*10,IGY*10),ISKIB1,XOR
//NEXT

// 1370 
// LINE (7,166)- (313,170),3,BF
// DEF SEG=&HB800

// 1380 
// FOR I=240 TO 6919 STEP 80
// POKE I+1,65
// POKE I,178
// NEXT
// FOR I=318 TO 6997 STEP 80
// POKE I+1,65
// POKE I,178
// NEXT

// 1390 
// AHUL=STRING$(9-INT(IDIF/2),32)
// ISSX=150
// ISX=150
// IB=(12-(IDIF/2))+INT(1+RND*(6+IDIF))
// LOCATE 22,IB
// PRINT AHUL;

// 1400 
// LOCATE 21,IB
// PRINT AHUL;
// PUT (150,20),ISKIB,XOR 
//GOSUB 2400
// FOR I=1 TO 18

// 1410 
// FOR J=1 TO (at%*5000)-((IDIF-2)*40)
//NEXT J

// 1420 
// IF A="4" OR A=CHR$(29) THEN ISSX=ISX-10
//IF ISSX<30 THEN ISSX=30

// 1430 
// IF A="6" OR A=CHR$(28) THEN ISSX=ISX+10
// IF ISSX>280 THEN ISSX=280

// 1440 
// IF RND>(idif/18) THEN 1480

// 1450 
// LOCATE 2,INT(ISSX/8)
// PRINT AV;AV;AV;
// IF LYD THEN FOR IL=2000 TO 2500 STEP 10
//SOUND IL,.05
//NEXT

// 1460 
// ISSX=ISX+((IVIND-2)*10)
// PUT (ISX,20),ISKIB,XOR
//ISX=ISSX
// IP=POINT(ISX+5,26)
// IF IP<>0 THEN GOSUB 1730

// 1470 
// PUT (ISX,20),ISKIB,XOR

// 1480 
// PUT (ISX,20),ISKIB,XOR
// ISX=ISSX
// LOCATE 24,1,0
// PRINT" "
// IP=POINT(ISX+5,26)
// IF IP<>0 THEN GOSUB 1730

// 1490 
// PUT (ISX,20),ISKIB,XOR
//A=INKEY$
//GOSUB 2410
//NEXT

// 1500 
// FOR I=1 TO 5
//PRIS(I)=PRISG(I)*(.8+RND)
//NEXT
//

// 1501 
// IF MANDPRISE=0 AND IRGSDPRI=0 THEN 1510

// 1502 
// IF IM><2 THEN 1510

// 1503 
// CLS
// PRINT"Hurra!"
//PRINT "Her i københavn venter dine "MANDPRISE
//PRINT"tapre mand på dig."
//PRINT"De har "IRGSDPRI" rigsdaler"
//PRINT "i prisepenge til dig!"

// 1504 
// IPOINT!=IPOINT!+INT(IRGSDPRI/10)

// 1505 
// MAND=MAND+MANDPRISE
//IRGSD=IRGSD+IRGSDPRI
//if irgsd>30000 then irdsd=3000

// 1507 
// MANDPRISE=0
//IRGSDPRI=0
//PRINT
//GOSUB 2390

// 1510 
// cLS
//LOCATE 3,1,0
//PRINT"Velkommen til "HAVN(IM)
//PRINT
//PRINT "Hvad vil du?"
//PRINT
//PRINT "1:Hyre flere mænd ("PRIS(1)"rgsd pr. mand)"

// 1520 
// PRINT"2:Reparere skibet ("PRIS(2)"rgsd pr. point)"

// 1530 
// PRINT "3:Købe kanoner ("PRIS(3)"rgsd pr stk)"

// 1540 
// PRINT"4:Købe korn ("PRIS(4)"rgsd pr sæk)"

// 1550 
// PRINT"5:Sælge noget

// 1560 
// PRINT "6:Stå til søs igen."
//COLOR 1
//GOSUB 960

// 1570 
// GOSUB 2400
//IA=VAL(A)
//IF IA<1 THEN BEEP
//GOTO 1570

// 1580 
// IF IA>6 THEN BEEP
// GOTO 1570

// 1590 
// IF IA>4 THEN 1640

// 1600 
// LOCATE 5,16
// PRINT A;
// LOCATE 14,1
// INPUT;"Hvor mange";IANT

// 1620 
// ITOT!=IANT*PRIS(IA)
//IF ITOT!>IRGSD THEN LOCATE 16,1
//PRINT "Det har du ikke råd til!"
//goto 1629

// 1621 
// if (ia=3) and (149<iskyts+iant) THEN 1628

// 1622 
// if (ia=1) and (499<mand+iant) THEN 1628

// 1623 
// if (ia=4) and (699<korn+iant) THEN 1628

// 1624 
// goto 1630

// 1628 
// LOCATE 16,1
// PRINT "Det er for mange!"

// 1629 
// BEEP
//FOR I=1 TO 30000
//NEXT
//GOTO 1510

// 1630 
// IRGSD=IRGSD-ITOT!

// 1640 
// ON IA GOTO 1660,1670,1680,1690,1700,1720

// 1650 
// GOTO 1720

// 1660 
// MAND=MAND+IANT
//GOTO 1510

// 1670 
// IREP=IREP+IANT
//GOTO 1510

// 1680 
// ISKYTS=ISKYTS+IANT
// GOTO 1510

// 1690 
// KORN=KORN+IANT
// GOTO 1510

// 1700 
// LOCATE 5,16
// PRINT A;
// LOCATE 14,1
// PRINT"Korn (k), Skyts (s) (kanoner) eller Juveler (j) ?"
//GOSUB 2400
//IF A="j" OR A="J" THEN 1710

// 1701 
// IF A<>"S" AND A<>"s" THEN 1704 ELSE INPUT;"Hvormange kanoner vil du sælge";IANT:ITOT!=IANT*PRIS(3):IF IANT>ISKYTS THEN LOCATE 11,1:PRINT "Så mange har du ikke!":BEEP:FOR I=1 TO 15300:NEXT:GOTO 1510

// 1702 
// IRGSD=IRGSD+ITOT!
// ISKYTS=ISKYTS-IANT
// GOTO 1510

// 1704 
// IF A><"K" AND A<>"k" THEN BEEP
//  GOTO 1700

// 1705 
// INPUT;"Hvor mange sække korn vil du sælge";IANT
//ITOT!=IANT*PRIS(4)
// IF IANT>KORN THEN LOCATE 11,1
// PRINT "Så mange har du ikke!"
// BEEP
// FOR I=1 TO 15300
// NEXT
// GOTO 1510

// 1709 
// IRGSD=IRGSD+ITOT!
// KORN=KORN-IANT
// GOTO 1510

// 1710 
// INPUT;"Hvor mange juveler vil du sælge";IANT
// ITOT!=IANT*PRIS(5)
// IF IANT>JUVEL THEN LOCATE 11,1
// PRINT "Så mange har du ikke!"
//BEEP
// FOR I=1 TO 15300
// NEXT
// GOTO 1510

// 1719 
// IRGSD=IRGSD+ITOT!
// JUVEL=JUVEL-IANT
// GOTO 1510

// 1720 
// IC2=0
// COLOR 1,IC2
// GOSUB 950
// GOTO 1050

// 1730 
// IF IP<>3 OR I<18 THEN IREP=IREP-15*idif
// GOSUB 5000
// IF LYD THEN OUT 97,79
// for ill=1 to 300
// FOR IL=1 TO 15
// OUT 67,161
// OUT 66,IL
// NEXT
// next

// 1740 
// IF IP<>3 OR I<18 THEN RETURN
// 

//1750 
// CLS
// PRINT "Dit skib gik ned med mand og mus":

// 1755 
// IF LYD THEN FOR I =5000 TO 200 STEP -100
//SOUND I,.05
//NEXT

// 1760 
// IF LYD THEN PLAY "O2T85MBMNL8B.A16G4D4G.B16A4.P8B.O3C16D4E4D.C16O2B4P4"

// 1770 
// DEF SEG=65
// POKE 7,KBS%
// DEF SEG=0

// 1780 
// IF LYD THEN PLAY "O3E.D16DCO2BAG2BAG2"
// 1790 
// POKE &H410,(PEEK(&H410) AND &HCF) OR &H10
//gosub 2390
//cls

// 1800 
// IF IPOINT!>IHS THEN OPEN "rec.dat" AS #1
//GOSUB 1806
//cls

// 1801 
// LOCATE 10,12
// PRINT"Du fik "IPOINT!
// LOCATE 14,12
// PRINT"Rekord "IHS

// 1802 
// LOCATE 22,1
// PRINT "Tryk på en tast for at slutte.";
// GOSUB 2400
// END

// 1806 
// PRINT "Du opnåede "IPOINT!" points."
// PRINT "Hvad er dit navn ";SPILLER;"?"

// 1807 
// INPUT NAVN$
// FIELD 1,2 AS POFMA$,25 AS POFNA$

// 1808 
// LSET POFNA$=NAVN$
// RSET POFMA$=MKI$(IPOINT!)

// 1809 
// IHS=IPOINT!
//PUT 1,2
//CLOSE
//RETURN

// 1810 
// I=1+INT(10*RND)
//IM=I+10

// 1820 
// LINE (0,0)-(309,159),0,BF
//LOCATE 1,1,0
//IF I>8 THEN GOSUB 2420
//RETURN

// 1830 
// PRINT "Udkiggen melder:"
//PRINT"Ship ohøj!"
//IF I<(8) THEN PRINT"Engelsk ";

// 1840 
// PRINT FJENDE(I)" i sigte"
//PRINT
//PRINT "Nå "tit(1,idif/2);" ";SPILLER","
//PRINT"nu må du vælge:"
//IKAMP=IKAMP+1

// 1850 
// IIF=I
//IAKTRGSD=IRGSDF(I)
//IAFST=500+INT(RND*500)
//IF IMOVE=0 THEN IAKTREP=100+INT(RND*50)
//IAKTSKYTS=ISKYTSF(I)
//IAKTMAND=MANDF(I)
//AKTFJ=FJENDE(I)
//IMOVE=1
//IAKTKORN=1+INT(RND*KORNF(I))

// 1860 
// GOSUB 2410
//PRINT
//PRINT"Vil du angribe (a) eller flygte (f)?"
//IBOARD=0

// 1870 
// GOSUB 2400
//IF (A="a" OR A="A") THEN 1910

// 1880 
// IF A<>"f" AND A<>"F" THEN BEEP
//GOTO 1870

// 1890 
// IF A="f" OR A="F" THEN ILOSE=ILOSE+1
//IF LYD THEN FOR I=1600 TO 200 STEP -1
//SOUND I,I/50000!
//SOUND I+600,I/50000!
//NEXT
//SOUND 50,.5:

// 1900 
// IMOVE=0
//IC2=0
//COLOR 1,IC2
//RETURN

// 1910 
// FOR I=1 TO 10
//LOCATE I,1,0
//PRINT " "
//NEXT
//LINE (0,0)-(309,159),0,BF
//LOCATE 1,1,0

// 1920 
// GOSUB 2410
//PRINT "Vil du borde hende (b) eller"
//PRINT"vil du skyde (s) på hende?";

// 1925 
// if iskyts<1 then cls
//goto 3100

// 1930 
// GOSUB 2400
//IF A="b" OR A="B" THEN GOTO 3100

// 1940 
// IF A="s" OR A="S" THEN 1950 ELSE BEEP
//GOTO 1930

// 1950 
// IC2=1
//COLOR 1,IC2
//CLS
//PUT (0,0),IISSS,PSET
//IELEVA=0
//ISIDE=0
//IVINDS=10*((INT(3*RND))-1)
//IVINDL=10*((INT(3*RND))-1)

// 1960 
// ISTYRKE=1+INT(RND*10)
//IF IVINDL=0 AND IVINDS=0 THEN ISTYRKE=0

// 1970 
// IF IDIF>4 THEN GOSUB 1990

// 1980 
// GOTO 2030

// 1990 
// LINE (11,11)-(149,59),0,BF
//LINE (50,12)-(52,60),3,BF
//CIRCLE (51,14),3,3
//PAINT (51,14),3,3

// 2000 
// CIRCLE (51,14),2,3
//CIRCLE (51,14),1,3

// 2010 
// IF IIF=8 THEN PUT (53,18),JOLLY,XOR
//RETURN

// 2020 
// PUT (53,18),JACK,XOR
//RETURN

// 2030 
// IBIGL=1
//GET (200,20)-(250,70),IBIG
//CIRCLE (25+IVINDS,180+IVINDL),1,2
//PSET (25+IVINDS,180+IVINDL),2:

// 2040 
// LOCATE 20,28,0
//PRINT IAKTSKYTS;
//LOCATE 22,28,0
//PRINT IAKTMAND;
//LOCATE 24,28,0
//PRINT IAKTREP;
//LOCATE 18,7,0
//PRINT IAFST;

// 2050 
// LOCATE 16,17,0
//PRINT "F=fyr. 0=afbryd kampen";

// 2060 
// LOCATE 20,16,0
//PRINT ISKYTS;
//LOCATE 22,16,0
//PRINT MAND;
//LOCATE 24,16,0
//PRINT IREP;

// 2070 
// LOCATE 21,3,0
//PRINT ISTYRKE:

// 2075 
// IH=40+IELEVA
//IS=220+ISIDE
//PUT (IS,IH),IKRYDS,XOR

// 2080
//  I=1
//GOSUB 2400
//IF A="2" THEN I=1
//IELEVA=IELEVA+1
//GOTO 2170

// 2090 
// IF A="1" THEN I=1
// IELEVA=IELEVA+1
//ISIDE=ISIDE-1
//GOTO 2170

// 2100 
// IF A="3" THEN I=1
// IELEVA=IELEVA+1
// ISIDE=ISIDE+1
// GOTO 2170

// 2110 
// IF A="7" THEN I=1
//IELEVA=IELEVA-1
//ISIDE=ISIDE-1
//GOTO 2170

// 2120 
// IF A="9" THEN I=1
//IELEVA=IELEVA-1
//ISIDE=ISIDE+1
//GOTO 2170

// 2130 
// IF A="2" THEN I=1
//IELEVA=IELEVA+1
//GOTO 2170

// 2140 
// IF A="8" THEN I=1
//IELEVA=IELEVA-1
//GOTO 2170

// 2150 
// IF A="4" THEN I=1
//ISIDE=ISIDE-1
//GOTO 2170

// 2160 
// IF A="6" THEN I=1
//ISIDE=ISIDE+1
//GOTO 2170

// 2170 
// IF IELEVA>30 THEN IELEVA=30

// 2180 
// IF IELEVA<-30 THEN IELEVA=-30

// 2190 
// IF ISIDE<-50 THEN ISIDE=-50

// 2200 
// IF ISIDE>50 THEN ISIDE=50

// 2210 
// IF A="f" OR A="F" THEN 2250

// 2220 
// IF A="0" THEN I=1
// IC2=0
// COLOR 1,IC2
// CLS
// IAFST=500+INT(RND*500)
//GOTO 1860

// 2230 
// IF I=0 THEN BEEP
//GOSUB 2410
//GOTO 1720

// 2240 
// IMOVE=1
//PUT (IS,IH),IKRYDS,XOR
//GOTO 2075

// 2250 
// PUT (IS,IH),IKRYDS,XOR
//IG=5
//IF LYD THEN IG=1

// 2260 
// FOR I=1 TO IG
//IC2=0
//COLOR 1,IC2
//IF LYD THEN IA=1600
//FOR IJA=1 TO 20
//SOUND IJA*60,16/IA 
//SOUND IJA*1600,16/IA 
//SOUND IJA*500,16/IA 
//NEXT

// 2270 
// FOR J=1 TO 5
//IC2=1
//COLOR 1,IC2
//IF LYD THEN IJA=20
//FOR JA=1 TO 10
//SOUND IJA*60,16/IA 
//SOUND IJA*1600,16/IA 
//NEXT

// 2280 
// NEXT
//FOR J=1 TO 6
//NEXT
//NEXT
//GOSUB 2300

// 2290 
// GOSUB 2400
//GOSUB 2370
//GOTO 2040

// 2300 
// GOSUB 2600
//LOCATE 1,1,0
//IF ISHOW=1 THEN PUT(IAKTX,IAKTY),ISPLAT1

// 2310 
// IF IDIF<5 THEN PUT (IXPL,IYPL),PLASK,XOR

// 2320 
// IF ISHOW=1 THEN FOR II= 1 TO (at%*3300)
//NEXT
//PUT(IAKTX,IAKTY),ISPLAT1
//PUT(IAKTX,IAKTY),ISPLAT2
//FOR II=1 TO 3300
//NEXT
//PUT(IAKTX,IAKTY),ISPLAT2

// 2330 
// LOCATE 16,17,0
//PRINT "Tryk på en tast.      ";

// 2340 
// LOCATE 20,28,0
//PRINT IAKTSKYTS;
//LOCATE 22,28,0
//PRINT IAKTMAND;
//LOCATE 24,28,0
//PRINT IAKTREP;
//LOCATE 18,7,0
//PRINT IAFST;

// 2350 
// LOCATE 20,16,0
//PRINT ISKYTS;
//LOCATE 22,16,0
//PRINT MAND;
//LOCATE 24,16,0
//PRINT IREP;

// 2360 
// LOCATE 21,3,0
//PRINT ISTYRKE
//RETURN

// 2370 
// IF IDIF<5 THEN PUT (IXPL,IYPL),PLASK,XOR

// 2375 
// RETURN

// 2380 
// PRINT

// 2390 
// PRINT "Tryk på en tast for at fortsætte!";

// 2400 ***** 
// A=INKEY$
//IF A="" THEN 2400

// 2410 *****
// DEF SEG=0
// POKE 1050,PEEK(1052)
// RETURN

// 2420 
// PRINT "Udkiggen melder"
// PRINT"Ohøj!"
// PRINT"Der er en underlig tågebanke 2 sømil"

// 2430 
// PRINT "til styrbord,"
//PRINT "Det ser ud til,"
//PRINT "at der er noget inde i den."
//PRINT
//PRINT "Nå "tit(1,idif/2)" "SPILLER","

// 2440 
// PRINT"nu må du vælge:"
//IKAMP=IKAMP+1 
//GOSUB 2410
//PRINT
//PRINT"Vil du undersøge det (j/n)?"

// 2450 
// GOSUB 2400
//IF A="N" OR A="n" THEN RETURN

// 2460 
// IF A<>"j" AND A<>"J" THEN BEEP
//GOTO 2450

// 2470 
// IF LYD THEN PLAY"MBT200O2L8GGGE-2.P8FFFD2."

// 2480 
// KF=INT(10*RND)
//LINE (0,0)-(309,159),0,BF
//LOCATE 1,1,0

// 2490 
// ON KF GOTO 2500,2510,2520,2530,2540,2550,2550,2560,2570

// 2500 
// PRINT "Der dukker af disen"
//PRINT "et væmmeligt skib!"
//GOSUB 2380
//I=1+INT(RND*8)
//RETURN 1820

// 2510 
// PRINT "Du finder en øde ø "
//PRINT "med en skattekiste,"
//PRINT "der indeholder "INT(300*KF)"rigsdaler!"
//PRINT
//GOSUB 2380
//IRGSD=IRGSD+INT(KF*300)
//RETURN

// 2520 
//KFF=2+INT(6*RND)
//PRINT "Du finder en øde ø "
//PRINT "med"KFF"juveler!"
//PRINT
//GOSUB 2380
//JUVEL=JUVEL+KFF
//RETURN

// 2530 
// PRINT "Du finder en øde ø"
//PRINT "Hvor der ligger en kanon,"
//PRINT "som du tager ombord på dit skib!"
//ISKYTS=ISKYTS+1
//PRINT
//GOSUB 2380
//RETURN

// 2540 
// PRINT "Du finder en øde ø"
//PRINT "med en flok skibbrudne,"
//PRINT "som tager hyre på dit skib!"
//MAND=MAND+9+INT(RND*40)
//PRINT
//GOSUB 2380
//RETURN

// 2550 
// PRINT "Næh!"
//PRINT "Der var alligevel ikke noget."
//PRINT
//GOSUB 2380
//RETURN

// 2560 
// KFF=2+INT(6*RND)
//PRINT "Du finder en øde ø "
//PRINT "med"KFF"sække korn!"
//PRINT
//GOSUB 2380
//KORN=KORN+KFF
//RETURN

// 2570 
// PRINT "Du finder en øde ø "
//PRINT "med en pestsyg skibbruden!"
// PRINT "han smitter din besætning, og"

// 2580 
// PRINT "En trediedel af dit mandskab dør!"
// PRINT "Resten er ikke alt for begejstrede"
// PRINT "for dit lederskab!"
// MAND=MAND-INT(MAND/3)
// GOSUB 5000
//GOSUB 2380
//RETURN

// 2590 
// RETURN

// 2600 
// IR=IREP
//IM=MAND
// IK=ISKYTS
//IF RND>.4 THEN IREP=IREP-INT((IAKTSKYTS/1.3)*((IKAMP+ILOSE)/IKAMP))-INT(IDIF*RND*.5)
//GOSUB 5000

// 2610 
// IF RND >.4 THEN MAND=MAND-INT((IAKTSKYTS/1.4)*((IKAMP+ILOSE)/IKAMP))-INT(IDIF*RND*.5)
//GOSUB 5000

// 2620 
// IF (100*RND)<(IDIF+(IAKTSKYTS/5)) THEN ISKYTS=ISKYTS-1
//IF ISKYTS<1 THEN ISKYTS=1

// 2630 
// ISHOW=1
//IRET=INT(ISTYRKE*IVINDS*.1)+INT((IVINDS*.2*RND)-(.2*ISIDE))
//IYPL=35

// 2640 
// IF IR=IREP AND IM=MAND AND IK=ISKYTS THEN 2740

// 2650 
// IC=(ISKYTS-IK)+INT((IR-IREP)+(IM-MAND))
//IF IC>10 THEN IC=10

// 2660 
// IF IC>IAKTSKYTS THEN IC=IAKTSKYTS

// 2670 
// FOR ICC=1 TO IC

// 2680 
// ICKX(ICC)=20+INT(RND*110)
//ICKY(ICC)=70+INT(RND*20)
//PUT (ICKX(ICC),ICKY(ICC)),PLASK,XOR
//IF LYD THEN SOUND 60,1
//SOUND 12000,1

// 2690 
// IF NOT LYD THEN FOR ICI=1 TO 290
//NEXT

// 2700 
// NEXT
//FOR ICI=1 TO 3900
//NEXT

// 2710 
// FOR ICC=1 TO IC

// 2720 
// PUT (ICKX(ICC),ICKY(ICC)),PLASK,XOR

// 2730 
// NEXT

// 2740 
// IAFV=IAFST-(700+(ISTYRKE*IVINDL)-(10*IELEVA)+(INT(50*RND))-(INT(50*RND)))
// IF IAFV>0 THEN IYPL=49
//GOTO 2760

// 2750 
// IF IAFV<-49 THEN IYPL=20

// 2760 
// IF IRET>20 THEN IRET=20

// 2770 
// IF IRET<-20 THEN IRET=-20

// 2780 
// IGRP=2
// IF IDIF>4 THEN IGRP=1

// 2790 
// IF IDIF>6 THEN IGRP=0

// 2800 
// IF IRET>IGRP OR IRET<-IGRP THEN 2820

// 2810 
// IXPL=80
//IAKTX=225
//IAKTY=70
*//GOTO 2860

// 2820 
// IAKTY=60
//IF IRET>IGRP THEN IAKTX=195-2*IRET ELSE IAKTX=245-2*IRET

// 2830 
// IF IRET>IGRP THEN IXPL=33 ELSE IXPL=130

// 2840 
// RETURN

// 2860 
// IF IAFV>0 THEN RETURN

// 2870 
// IF IAFV<-50 THEN ISHOW=0
// RETURN

// 2880 
// IAKTY=50
//IAREP=IAKTREP-(INT((2*ISKYTS)/IDIF))+IAFV
//IF IAKTREP>IAREP THEN IAKTREP=IAREP

// 2890 
// IAKTSKYTS=IAKTSKYTS-INT(RND*10/IDIF)
//IF IAKTSKYTS<1 THEN RETURN 2950

// 2900 
// IF IAKTREP<15 THEN RETURN 3030

// 2910 
// IF IAKTREP<40-IDIF THEN RETURN 2950

// 2920 
// IAMAND=IAKTMAND-INT(.9*IAKTMAND*(ISKYTS+(IAFV/5)+(10*RND))/100)

// 2930 
// IF IAMAND<IAKTMAND THEN IAKTMAND=IAMAND
//IF IAKTMAND<20 THEN RETURN 2950

// 2940 
// RETURN

// 2950 
// GOSUB 1990
//IF LYD THEN PLAY "T180MBO2L4G.G8O3C1P4O2G.O3C8E1P4O2G.O3C8E2O2G.O3C8E2O2G.O3C8E1P2C.O3E8G1.O2G.G8O3C1"

// 2960 
// IF IIF<>8 THEN PUT (53,18),JACK,XOR
//FOR I=19 TO 39
//PUT (53,I),JACK,XOR
//FOR J=1 TO 1200
//NEXT
//PUT (53,I),JACK,XOR
//NEXT

// 2970 
// LINE (53,39)-(93,58),0,BF
//FOR I=1 TO 17500
//NEXT

// 2980 
// IF IIF=8 THEN PUT (53,18),JOLLY,XOR
//FOR I=19 TO 39
//PUT (53,I),JOLLY,XOR
//FOR J=1 TO 200
//NEXT
//PUT (53,I),JOLLY,XOR
//NEXT

// 2990 
// LINE (53,39)-(93,58),0,BF
//FOR I=1 TO 17500
//NEXT

// 3000 
// CLS
//PRINT "De overgiver sig!!"
//PRINT "Der er "IAKTRGSD" rigsdaler ombord."
//IMAP(IX/10,IY/10)=50

// 3010 
// IRGSD=IRGSD+IAKTRGSD
//IPOINT!=IPOINT!+INT(IAKTRGSD/10)
//IF IAKTMAND>1 THEN PRINT "Der er "IAKTMAND" overlevende." ELSE PRINT "Det flyder med lig på dækket."

// 3012 
// IF IAKTKORN=1 THEN IAKTKORN=2

// 3013 
// PRINT "Der er "IAKTKORN" sække korn ombord."
//PRINT"Dem tager du!"
//KORN=KORN+IAKTKORN
//IF IAKTMAND<0 THEN IAKTMAND=0

// 3014 
// IAKTPRI=5+INT(IAKTMAND/2)
//PRINT
//PRINT "Dette skib behøver et prisemandskab"
//PRINT"på "IAKTPRI" mand!"
//PRINT "Du har"MAND"mand."
//PRINT"Vil du sænke det, (s)"
//PRINT"eller tage det som prise (p) ?"

// 3015 
// GOSUB 2400
//IF A="s" OR A="S" THEN PRINT A
//MAND=MAND+IAKTMAND

// 3016 
// IF A="s" OR A="S" THEN 3080

// 3018 
// IF A="p" OR A="P" THEN 3019 ELSE BEEP
//GOTO 3015

// 3019 
// PRINT A
//MAND=MAND-IAKTPRI
//GOSUB 5000
//IF IDIF<INT(RND*16) THEN MANDPRISE=MANDPRISE+IAKTPRI
//IRGSDPRI=IRGSDPRI+IAKTRGSD

// 3020 
// PRINT 
//PRINT"OK, de er på vej til København."
//GOTO 3090

// 3030 
// FOR I=1 TO 8
//GET (200,20)-(250,70),IBIGD
//PUT (200,20),IBIGD,PRESET
//NEXT

// 3040 
// LINE (200,68)-(250,70),0,BF

// 3050 
// IF LYD THEN PLAY "T180MBO2L4G.G8O3C1P4O2G.O3C8E1P4O2G.O3C8E2O2G.O3C8E2O2G.O3C8E1P2C.O3E8G1.O2G.G8O3C1"

// 3060 
// FOR I=15 TO 65 STEP 2
//LINE (200,68)-(250,70),0,BF
//GET (200,18)-(250,70),IBIGD

// 3070 
// PUT (200,18),IBIGD,XOR
//PUT (200,20),IBIGD,XOR
//FOR J=1 TO 300
// NEXT
//NEXT

// 3080 
// CLS
// PRINT "Den sank!!"
// IMAP(IX/10,IY/10)=50
// IPOINT!=IPOINT!+INT(IAKTRGSD/10)
// IF MAND>500 THEN IMI=MAND-500
// MAND=500
// PRINT"Du smider"IMI"mand ud til hajerne!"

// 3090 
// GOSUB 2380
// IC2=0
// COLOR 1,IC2
// GOSUB 950
// RETURN 1050

// 3100 
// IF LYD THEN PLAY"MBT200L16O3CEGO4C..O3GO4C4"

// 3110 
// IC2=1
//COLOR 1,IC2
//IF IBIGL=1 AND IBOARD=0 THEN GOSUB 3350

// 3120 
// IMOVE=1
//IIMM!=(IAKTMAND/MAND)*((IKAMP+ILOSE)/IKAMP)*(IDIF/10)
//IF IIMM!>1.2 THEN IIMM!=1.2

// 3130 
// IF IIMM!<.6 THEN IIMM!=.6

// 3140 
// IEM=INT(MAND*((IKAMP+ILOSE)/IKAMP)*(IDIF*RND/30))
//MAND=MAND-IEM
//GOSUB 5000

// 3150 
// IAM=IEM/IIMM!
//IF IAM<IAKTMAND/10 THEN IAM=INT(IAKTMAND/10)

// 3155 
// IF IAM<IAKTMAND THEN IAKTMAND=IAKTMAND-IAM ELSE IAKTMAND=0

// 3157 
// IF IAM<7 THEN IAM=7

// 3160 
// IF IAKTMAND<20 THEN 2950

// 3170 
// LOCATE 9,1,0
//PRINT "Kampen raser ombord på"
//IF IIF<>8 THEN PRINT "den engelske "AKTFJ" !" ELSE PRINT "sørøverskibet!"

// 3180 
// PRINT "Fjenden har "IAM" faldne,"
//PRINT "men han har "IAKTMAND" igen."

// 3190 
// PRINT "Du har mistet "IEM" af dine tapre mænd."
//PRINT

// 3200 
// PRINT "Vil du kæmpe videre (k)"
//PRINT "eller vende tilbage til dit skib (t)?"

// 3210 
// GOSUB 3250
// GOSUB 2400

// 3220 
// IF A="t" OR A="T" THEN LINE (0,0)-(309,159),0,BF
//LOCATE 1,1,0
//GOTO 1860

// 3230 
// IF A="k" OR A="K" THEN 3100

// 3240 
// BEEP
// GOTO 3210

// 3250 
// LOCATE 24,2,0
// PRINT "Mænd:";
// LOCATE 24,28,0
// PRINT "Rep:";
// LOCATE 22,2,0
// PRINT "Træk:";
// LOCATE 22,14,0
// PRINT "Rgsdl:";

// 3270 
// LOCATE 22,28,0
// PRINT "Skyts:";
// LOCATE 24,14,0
// PRINT "Point:";

// 3280 
// LOCATE 24,7,0
// PRINT MAND;
// LOCATE 24,32,0
// PRINT IREP;
// LOCATE 22,7,0
// PRINT ITUR;
// LOCATE 22,20,0
// PRINT IRGSD;

// 3300 
// LOCATE 22,34,0
// PRINT ISKYTS;
// LOCATE 24,20,0
// PRINT IPOINT!;

// 3310 
// LINE (100,163)-(100,195)
// LINE (210,163)-(210,195)
// LINE (1,179)-(310,179)
// RETURN

// 3350 
// CLS
// PUT (185,10),IBIG,PSET
// IBOARD=1

// 3360 
// PUT (175,145),IBIG,PSET

// 3370 
// LINE (204,151)-(207,153),2,BF
// LINE (204,152)-(207,152),3
// LINE (205,151)-(205,153),3
// GET (175,145)-(225,195),IBIGD
// PUT (175,145),IBIGD,XOR

// 3380 
// FOR I=105 TO 25 STEP -5
// PUT (175,I),IBIGD,XOR
// FOR J=1 TO 1600
// NEXT
// PUT (175,I),IBIGD,XOR
// IF LYD THEN SOUND 550-I*2,.1

// 3390 
// NEXT

// 3400 
// PUT (175,I),IBIGD,XOR
// FOR J=1 TO 6800
// NEXT
// RETURN

// 3410 
// FOR JI=1 TO 3
// COLOR 1,0
// FOR IJ=1 TO 280
// NEXT
// COLOR 1,1
// NEXT
// COLOR 1,IC2
// IF LYD THEN BEEP

// 3430 
// IF LYD=0 THEN LYD=-1 ELSE LYD=0
//RETURN

// 4510 
// A=""
// GOSUB 2410
// RETURN

// 5000 
// IF IREP>20 AND MAND>10 THEN RETURN

// 5003 
// IF IREP<0 THEN IREP=0

// 5006 
// IF MAND<0 THEN MAND=0

// 5010 
// GOSUB 6500
//PRINT

// 5020 
// PRINT
// PRINT "Du sluttede med"MAND"mand og"IREP"reperationspoint"
// GOTO 1755

// 6000 
// CLS
// PRINT "Det er med sorg, vi meddeler, at"
// PRINT

// 6001 
// PRINT"Komtesse Julie Knokkelfryd"
// PRINT
// PRINT"idag fejrer sit bryllup med"
// A=""

// 6002 
// PRINT "den velbårne Tulleman Gylleborg!"
// PRINT
// print "Af sorg herover, hopper du i havet!"
// FOR II=1 TO 5000
// NEXT
// RETURN 5020

// 6100 
// CLS
// GOSUB 2410
// IF LYD THEN PLAY "O3CEGO4CO3GEC2"

// 6101 
// PRINT "Tillykke!!!!"
//PRINT
// PRINT "Du har netop modtaget"
// PRINT "din udnævnelse med flaskepost."
// PRINT

// 6102 
// PRINT "Komtesse Julie venter dig med længsel!"
// gosub 102
// if idif<9 then 6113

// 6103 
// PRINT "Du har klaret det hele."
// print "Du får også det halve kongerige"
// PRINT tit(2,idif/2);SPILLER;"!"
// A=""

// 6104 
// FOR II=1 TO 5000
// NEXT
// RETURN 5020

// 6113 
// PRINT "Lad os se, om du kan klare det"
// PRINT "næste mål "tit(2,idif/2);" ";SPILLER;"!"
// A=""

// 6119 
// FOR II=1 TO 5000
// NEXT
// RETURN

// 6200 
// GOSUB 6500
// PRINT
// PRINT "Vægten af alle dine penge"
// goto 6490

// 6300 
// GOSUB 6500
// PRINT
// PRINT "Vægten af alle dine folk"
// goto 6490

// 6400 
// GOSUB 6500
// PRINT
// PRINT "Vægten af alle dine kanoner"
// goto 6490

// 6450 
// GOSUB 6500
// PRINT
// PRINT "Vægten af alt dit korn"
// goto 6490

// 6490 
// PRINT"fik skibet til at synke!"
//GOTO 5020

// 6500 
// CLS
// LOCATE 5,1,0
// GOSUB 2410
// PRINT "Beklager, dit skib gik ned!"
// PRINT "Du fik"IPOINT!"point og havde"IRGSD"rigsdaler!"
// RETURN

// 8000 
// play"mbo3t100c8f4c8f4"
// DEF SEG=&HB800
// Bsave "temp.pic",0,&H4000
// OPEN "hlp.dat" AS #1
// FIELD 1,2 as tnr,40 as text

// 8010 
// cls
// WIDTH 40
// color 1,1

// 8150 
// CLS
// PRINT "Hvilket emne ønsker du at høre om:"
// PRINT " 1: Generelle forudsætninger"
// PRINT " 2: Navigation"

// 8160 
// PRINT " 3: Havne":PRINT " 4: Kamp med kanoner"

// 8170 
// PRINT " 5: Kamp ved at borde":PRINT " 6: Besætningens røgt og pleje":PRINT " 7: Priser, prisepenge og prisemandskab":

// 8180 
// PRINT " 8: Handel":PRINT " 9: Tåge, sygdom og skattejagt"

// 8185 
// PRINT " 0: Programinformation":PRINT:PRINT "    Vælg 0-9"

// 8187 
// PRINT " eller tryk på et bogstav,"

// 8190 
// PRINT " hvis du ikke gider høre mere!"

// 8191 
// ijump(1)=1
// ijump(2)=45
// ijump(3)=63
// ijump(4)=83
// ijump(5)=146
// ijump(6)=169
// ijump(7)=189
// ijump(8)=210
// ijump(9)=240
// ijump(10)=250

// 8200 
// GOSUB 2400
// I=VAL(A$)
//  IF I>9 THEN i=10

// 8210 
// LOCATE 15,1,0
// PRINT A$
// IF I=0 AND A$<>"0" THEN i=10

// 8220 
// cls
//if i=10 then GOTO 9110 else if i=0 then i=10

// 8230 
// id=ijump(i)

// 8250 
// get 1,id
// id=id+1
// aa$=mid$(text,1,1)
// if aa$="@"then gosub 2380
// goto 8150

// 8260 
// if aa$="%" then gosub 2380
// cls
// goto 8250

// 8270 
// if aa$="#" then GOSUB 2380
// GOSUB 9120
// cls
// goto 8250

// 8280 
// print text;
//goto 8250

// 8510 
// cls
//put (0,0),iisss

// 8515 
// CIRCLE (25+10,180+10),1,2
// PSET (25+10,180+10),2


// 8520 
// LOCATE 20,28,0
//PRINT "12";
//LOCATE 22,28,0
//PRINT "36";
//LOCATE 24,28,0
//PRINT "72";
//LOCATE 18,7,0
//PRINT "520";

// 8530 
// LOCATE 16,17,0
//PRINT "F=fyr. 0=afbryd kampen";

// 8540 
// LOCATE 20,16,0
//PRINT "17";
//LOCATE 22,16,0
//PRINT "97";
//LOCATE 24,16,0
//PRINT "142";
//LOCATE 21,3,0
//PRINT "4";

// 8550 
// IH=40+IELEVA
//IS=220+ISIDE
//PUT (IS,IH),IKRYDS,XOR
//LOCATE 1,1,0
//RETURN

// 9110 
// CLOSE
//color 1,ic2
//DEF SEG=&HB800
//Bload "temp.pic",0
//gosub 2410
//return

// 9120 
// gosub 8510
//FOR I=1 TO 5000
//NEXT

// 9130 
// PUT (225,75),ISPLAT1
//for I=1 to 5000
//next

// 9140 
// PUT (225,75),ISPLAT1
//PUT (225,75),ISPLAT2
//FOR I=1 TO 5000
//next
//PUT (225,75),ISPLAT2
//FOR I=1 TO 5000
//NEXT
//GOSUB 2390
// RETURN


}