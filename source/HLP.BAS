30 DEFINT I-J,L-P:DEFSTR A-H,Q-Z:I=0
42 OPEN "hlp.dat" AS #1:FIELD 1,2 AS TNR,40 AS TEXT
240 T= "Nu m� du t�nke dig tilbaget til tiden": GOSUB 2000:T= "lige efter Slaget p� Reden.":GOSUB 2000:T="":GOSUB 2000:T= "Engelskmanden har r�vet de fleste af"
250 GOSUB 2000:T= "vore skibe; kun en h�ndfuld sm�skibe -":GOSUB 2000:T= "deriblandt dit - er tilbage.":GOSUB 2000:T="":GOSUB 2000:T= "De engelske skibe sejler, som de lyster"
260 GOSUB 2000:T= "p� vore sunde og b�lter.":GOSUB 2000:T="":GOSUB 2000:T= "Kongen har givet dig et KAPERBREV,"
270 GOSUB 2000:T= "som giver dig ret til at kapre alle de":GOSUB 2000:T= "engelske skibe, du st�der p�.":GOSUB 2000:T="":GOSUB 2000:T= "Du f�r udbetalt en st�rre sum i"
280 GOSUB 2000:T= "prisepenge for hvert skib, du f�r":GOSUB 2000:T= "afleveret i K�benhavns havn.":GOSUB 2000:T=""
290 GOSUB 2000:T="Der, hvor du har nedk�mpet en fjende,":GOSUB 2000:T="t�r engl�nderne ikke komme mere!":GOSUB 2000:T=""
300 GOSUB 2000:T= "Det g�lder ogs� s�r�vere!":GOSUB 2000
310 GOSUB 3000:T= "Du bliver bel�nnet med point for":GOSUB 2000:T= "at skade engl�nderne, og hvis du f�r "
320 GOSUB 2000:T= "point nok, vil kongen adle dig.":GOSUB 2000:T="":GOSUB 2000:T= "Nar du er blevet adelig, kan din dr�m"
330 GOSUB 2000:T= "g� i opfyldelse:":GOSUB 2000:T= "Du kan blive gift med din hemmelige"
340 GOSUB 2000:T= "forlovede: Komtesse Julie Knokkelfryd":GOSUB 2000:T= "til Knokkelholm.":GOSUB 2000:T=""
350 GOSUB 2000:T= "Men du m� skynde dig!!":GOSUB 2000:T="":GOSUB 2000:T= "Junker Tullemand til Gylleborg er"
360 GOSUB 2000:T= "lun p� komtessen, og dersom du ikke":GOSUB 2000:T= "n�r at blive adlet hurtigt nok, vil"
370 GOSUB 2000:T= "Baron Knokkelfryd sk�nke sin datters":GOSUB 2000:T= "h�nd til den velbesl�ede junker!":GOSUB 2000:T=""
380 GOSUB 2000:T= "Derfor:":GOSUB 2000:T= "Frisk mod og god vind!":GOSUB 2000:T= "Og hold dit krudt t�rt!"
390 GOSUB 4000:T= "Du kan se dig selv p� kortet over":GOSUB 2000:T= "havet omkring Danmark. Du er vist som":GOSUB 2000:T= "et lille skib, der gynger p� vandet.":GOSUB 2000:T=""
400 GOSUB 2000:T= "Du kan flytte dig i 8 retninger ved at":GOSUB 2000:T= "bruge 1-4 og 6-8 (piltasterne).":GOSUB 2000:T="":GOSUB 2000:T= "Du kan ikke sejle udenfor kortet, og"
410 GOSUB 2000:T= "du kan ikke sejle op p� land,":GOSUB 2000:T= "men m�ske ser det ud, som om du ":GOSUB 2000:T= "af og til kunne sejle over landtanger.":GOSUB 2000:T=""
411 GOSUB 2000:T= "Hvis du fors�ger, at sejle op p� land,":GOSUB 2000:T= "sker der skade p� bunden af dit skib.":GOSUB 2000:T=""
412 GOSUB 2000:T= "Hvis du fors�ger, at sejle ud af kortet,":GOSUB 2000:T= "bliver du bare forhindret i det.":GOSUB 2000
420 GOSUB 4000:T= "Der er vist 7 havne p� kortet.":GOSUB 2000:T="":GOSUB 2000:T= "N�r du sejler ind i et kvadrat, hvor":GOSUB 2000:T= "der er en havn, skal du anl�be havnen.":GOSUB 2000:T=""
430 GOSUB 2000:T= "Du skal styre forbi alle de skibe, der":GOSUB 2000:T= "ligger p� reden foran havneindl�bet.":GOSUB 2000:T="":GOSUB 2000:T= "Du bruget 4 og 6 til at styre med":GOSUB 2000:T=""
440 GOSUB 2000:T= "Hvis du st�der sammen med et af de":GOSUB 2000:T= "andre skibe, sker der st�rre eller":GOSUB 2000:T= "mindre skade p� dit skib, men hvis du"
450 GOSUB 2000:T= "ikke rammer havneindl�bet, ":GOSUB 2000:T="s� synker dit skib,":GOSUB 2000:T= "og spillet et slut!":GOSUB 2000:T="":GOSUB 2000:T= "Pas p� de pludselige vindst�d, der kan"
460 GOSUB 2000:T= "sl� dit skib ud af kurs.":GOSUB 2000
470 GOSUB 4000:T= "N�r du m�der en fjende kan du v�lge":GOSUB 2000:T= "at k�mpe eller at flygte.":GOSUB 2000:T= "Jo oftere du flygter, des d�rligere"
480 GOSUB 2000:T= "bliver mandskabets moral, og des":GOSUB 2000:T= "d�rligere vil de k�mpe i fremtiden!":GOSUB 2000:T="":GOSUB 2000:T= "Hvis du v�lger at k�mpe med kanoner,"
490 GOSUB 2000:T= "vil du f� vist et billede af fjendens":GOSUB 2000:T= "skib, som du skal sigte efter.":GOSUB 2000:T="":GOSUB 2000:T= "Sigtet, der er vist som et kors, kan"
500 GOSUB 2000:T= "flyttes med piltasterne.":GOSUB 2000:T="":GOSUB 2000:T= "Du f�r lige billedet as se p�.":GOSUB 2000
560 GOSUB 5000:T= "Foroven til venstre, kan du se, hvordan":GOSUB 2000:T= "du rammer i forhold til ham, og hvordan":GOSUB 2000:T= "han rammer i forhold til dig.":GOSUB 2000:T=""
570 GOSUB 2000:T= "Det g�lder dog kun i begyndelsen.":GOSUB 2000:T= "Senere m� du n�jes med det plask,":GOSUB 2000:T= "du kan se �verst til h�jre.":GOSUB 2000:T=""
580 GOSUB 2000:T= "Det er der kun et �jeblik, og du kan":GOSUB 2000:T= "slet ikke se det, hvis det er bag ved"
590 GOSUB 2000:T= "hans skib.":GOSUB 2000:T="":GOSUB 2000:T= "Se lige p� billedet igen.":GOSUB 2000
600 GOSUB 5000:T= "Forneden til venstre ser du afstand,":GOSUB 2000:T= "vindretning og vindhastighed, som alle":GOSUB 2000:T= "har betydning for,":GOSUB 2000:T="hvordan du skal sigte.":GOSUB 2000:T=""
610 GOSUB 2000:T= "Hvis du ikke synes om afstanden, kan du":GOSUB 2000:T= "afbryde kampen (0) og angribe igen,":GOSUB 2000:T= "s� vil afstanden have �ndret sig.":GOSUB 2000:T=""
620 GOSUB 2000:T= "Du kan ogs� afbryde kampen af andre":GOSUB 2000:T= "grunde, feks. fordi du er ved at tabe,"
630 GOSUB 2000:T= "eller fordi du vil borde fjendens skib.":GOSUB 2000:T="":GOSUB 2000:T= "Se lige p� billedet igen.":GOSUB 2000:T=""
640 GOSUB 5000:T= "Skemaet forneden p� billedet viser dig":GOSUB 2000:T= "din styrke i forhold til hans.":GOSUB 2000:T="":GOSUB 2000:T= "Jo flere kanoner, du har, des mere"
650 GOSUB 2000:T= "skade sker der p� ham, n�r du rammer.":GOSUB 2000:T= "Og omvendt, selvf�lgelig!":GOSUB 2000:T=""
660 GOSUB 2000:T= "Du kan f�lge udviklingen i skemaet.":GOSUB 2000:T="":GOSUB 2000:T= "Kommer du under 20 reperationspoint,":GOSUB 2000:T= "s� synker skibet.":GOSUB 2000:T=""
670 GOSUB 2000:T= "Hvis du har mindre end 10 mand tilbage,":GOSUB 2000:T= "s� mister du kontrollen over skibet,":GOSUB 2000:T= "og s� synker du ogs�!":GOSUB 2000:T=""
680 GOSUB 2000:T= "Se lige p� billedet en sidste gang.":GOSUB 2000:T="":GOSUB 5000
690 GOSUB 4000:T= "Hvis du v�lger at borde fjenden,":GOSUB 2000:T= "vil et antal af hans og dine m�nd d�!"::GOSUB 2000:T=""
700 GOSUB 2000:T= "Hvor mange det er afh�nger bla. af dit":GOSUB 2000:T= "mandskabs moral.":GOSUB 2000:T=""
710 GOSUB 2000:T= "Hvis der ikke er ret mange fjender":GOSUB 2000:T= "igen, vil de overgive sig, ellers m� du"
720 GOSUB 2000:T= "forts�tte kampen eller tr�kke dig":GOSUB 2000:T= "tilbage til dit skib, enten for at"
730 GOSUB 2000:T= "flygte eller for at bruge kanonerne.":GOSUB 2000:T=""
740 GOSUB 2000:T= "En af fordelene ved at borde, er, at":GOSUB 2000:T= "skibet aldrig synker - det kan ske, n�r"
750 GOSUB 2000:T= "man bruger kanoner - s� du f�r altid":GOSUB 2000:T= "lagt din klamme h�nd p� deres penge.":GOSUB 2000:T=""
760 GOSUB 2000:T= "N�r de har overgivet sig, kan du enten":GOSUB 2000:T= "s�nke skibet (s� slutter de overlevende"
770 GOSUB 2000:T= "engl�ndere sig til dit mandskab) eller":GOSUB 2000:T= "du kan tage skibet som prise."::GOSUB 2000:T=""
780 GOSUB 2000:T= "Det st�r der mere om under punkt 7."
790 GOSUB 4000:T= "Dine folk kan blive dr�bt af fjenden.":GOSUB 2000:T="":GOSUB 2000:T= "Det kan ske b�de n�r i duellerer p�"
800 GOSUB 2000:T= "kanoner, og n�r du border fjenden.":GOSUB 2000:T="":GOSUB 2000:T= "Bes�tningen spiser en vis m�ngde korn"
810 GOSUB 2000:T= "pr. tr�k, og hvis kornet slipper op,":GOSUB 2000:T= "begynder mandskabet at d� af sult.":GOSUB 2000:T=""
820 GOSUB 2000:T= "S� er det p� h�je tid at f� k�bt noget":GOSUB 2000:T= "mere korn (se punkt 8).":GOSUB 2000:T=""
830 GOSUB 2000:T= "Bes�tningen kan ogs� d� af sygdom.":GOSUB 2000:T= "Det kan du l�se om i punkt 9.":GOSUB 2000:T=""
840 GOSUB 2000:T= "Husk at bes�tningens moral og kampevne":GOSUB 2000:T= "falder hver gang, du flygter eller "
850 GOSUB 2000:T= "opgiver en kamp, men den stiger,":GOSUB 2000:T= "hver gang du vinder.":GOSUB 2000:T=""
860 GOSUB 4000:T= "N�r du tager en prise, skal du":GOSUB 2000:T= "aflevere den i K�benhavn."
870 GOSUB 2000:T= "Det foreg�r ved at du s�tter et":GOSUB 2000:T= "prisemandskab ombord p� skibet, og det"
880 GOSUB 2000:T= "har s� til opgave at bringe skib og":GOSUB 2000:T= "fanger velbeholdne til hovedstaden.":GOSUB 2000:T=""
885 GOSUB 2000:T= "Hvor mange mand, der skal til,"
890 GOSUB 2000:T= "afh�nger af skibets st�rrelse og af,":GOSUB 2000:T= "hvor mange fanger, der er at passe p�."
900 GOSUB 2000:T= "Du vil f� at vide, hvor mange, det er.":GOSUB 2000:T=""
910 GOSUB 2000:T= "Det er ikke altid, at prisen n�r frem;":GOSUB 2000:T= "af og til forsvinder den undervejs til"
920 GOSUB 2000:T= "K�benhavn, og hverken skib eller ":GOSUB 2000:T= "mandskab bliver set igen, men for det"
930 GOSUB 2000:T= "meste g�r det godt, og n�ste gang, du":GOSUB 2000:T= "kommer til K�benhavn, vil dine folk"
940 GOSUB 2000:T= "vente p� dig med et p�nt bel�b":GOSUB 2000:T= "i prisepenge.":GOSUB 2000:T=""
950 GOSUB 4000:T="I havnebyerne kan du k�be og s�lge.":GOSUB 2000:T=""
960 GOSUB 2000:T= "Du kan f� repareret skibet":GOSUB 2000:T= " - dvs. f� flere reperationspoint - "
970 GOSUB 2000:T= "og du kan hyre mere mandskab.":GOSUB 2000:T="":GOSUB 2000:T= "Det du kan k�be er korn og kanoner."
980 GOSUB 2000:T= "Du kan s�lge korn, kanoner og juveler.":GOSUB 2000:T="":GOSUB 2000:T= "Priserne er i rigsdaler, og sk�nt de"
990 GOSUB 2000:T= "svinger fra sted til sted og fra dag":GOSUB 2000:T= "til dag, kan der ikke forhandles om dem."
1000 GOSUB 2000:T= "Du kan v�lge at s�lge korn for at":GOSUB 2000:T= "k�be kanoner, eller omvendt,"
1010 GOSUB 2000:T= "men du kan ikke s�lge dit mandskab":GOSUB 2000:T="":GOSUB 2000:T= "Juveler er sj�ldne, og kan ikke k�bes!"
1020 GOSUB 2000:T= "De kan kun findes p� hemmelige steder.":GOSUB 2000:T=""
1030 GOSUB 3000:T= "Du skal ikke k�be for meget,":GOSUB 2000:T= "for dit skib kan ikke b�re mere end"
1040 GOSUB 2000:T= "150 kanoner og 500 mand.":GOSUB 2000:T="":GOSUB 2000:T= "Penge vejer ogs� en del,":GOSUB 2000:T= "og du skal ikke pr�ve at sejle"
1050 GOSUB 2000:T= "med mere end 30000 rigsdaler.":GOSUB 2000:T="":GOSUB 2000:T= "Det er heller ikke klogt at have"
1060 GOSUB 2000:T= "mere end 700 s�kke korn ombord.":GOSUB 2000:T=""
1070 GOSUB 4000:T= "Af og til vil du st�de p� en mystisk":GOSUB 2000:T= "t�gebanke, som du kan unders�ge eller"
1080 GOSUB 2000:T= "v�lge at undg�.":GOSUB 2000:T="":GOSUB 2000:T= "Det, der evt. er i den, kan v�re godt,"
1090 GOSUB 2000:T= "men det kan ogs� v�re skidt.":GOSUB 2000:T="":GOSUB 2000:T= "B�de juveler og byldepest er "
1100 GOSUB 2000:T= "inden for mulighedernes r�kkevidde.":GOSUB 2000:GOSUB 4000
1200 T="Dette program m� gerne kopieres.":gosub 2000:t=""
1210 GOSUB 2000:T= "Hvis du kender nogen, der kan have"
1220 GOSUB 2000:T= "gl�de af det, s� lad dem f� en kopi.":gosub 2000:t=""
1230 GOSUB 2000:T= "HUSK, at dette ikke omfatter DOS."
1240 GOSUB 2000:T= "Den kr�ver stadig licens.":gosub 2000
1250 GOSUB 3000:T= "Hvis du har lyst til af betale for"
1260 GOSUB 2000:T= "programmet, kan du sende feks. 50 kr."
1270 GOSUB 2000:T= "til:":gosub 2000:t="":gosub 2000:t=""
1280 GOSUB 2000:T= "P.O.Frederiksen":gosub 2000:t=""
1290 GOSUB 2000:T= " Astrupvej 30":gosub 2000:t=""
1300 GOSUB 2000:T= "  DK8550 Ryomg�rd":gosub 2000:t=""
1310 GOSUB 2000:T= "   Danmark ":gosub 2000:t="":gosub 2000:t=""
1320 GOSUB 2000:T= "eller inds�tte dem p� giro 5202531.":gosub 2000
1321 gosub 3000:T= "Programmet er skrevet i kompileret BASIC":gosub 2000:t=""
1322 gosub 2000:T= "Source-koden kan f�s ved at sende"
1323 gosub 2000:T= "Navn, adresse og 300 kr. til:":gosub 2000:t=""
1324 GOSUB 2000:T= "P.O.Frederiksen":gosub 2000:t=""
1325 GOSUB 2000:T= " Astrupvej 30":gosub 2000:t=""
1326 GOSUB 2000:T= "  DK8550 Ryomg�rd":gosub 2000:t=""
1327 GOSUB 2000:T= "   Danmark ":gosub 2000:t="":gosub 2000:t=""
1330 GOSUB 3000:T= "Foruds�tninger: ":gosub 2000:t="":gosub 2000:t=""
1340 GOSUB 2000:T= "Dette program kr�ver  ":gosub 2000:t=""
1350 GOSUB 2000:T= " en IBM PC med mindst ":gosub 2000:t=""
1360 GOSUB 2000:T= "         1 dobbeltsidigt diskettedrive ":gosub 2000:t=""
1370 GOSUB 2000:T= "         128 k ":gosub 2000:t=""
1380 GOSUB 2000:T= "         Farve/grafik-sk�rm og ":gosub 2000:t=""
1390 GOSUB 2000:T= "         DOS 2.0 eller senere. ":GOSUB 2000:GOSUB 4000
1500 T="9999":GOSUB 2000:CLOSE:END
2000 LSET TNR=MKI$(I):LSET TEXT=T:I=I+1:PUT #1,I:RETURN
3000 LSET TNR=MKI$(I):LSET TEXT="%":I=I+1:PUT #1,I:RETURN
4000 LSET TNR=MKI$(I):LSET TEXT="@":I=I+1:PUT #1,I:RETURN
5000 LSET TNR=MKI$(I):LSET TEXT="#":I=I+1:PUT #1,I:RETURN
