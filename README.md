# Szabadulószoba - Frontend házi feladat
Egy igen neves ingatlanos cég szabaduló szoba hálózatot akar kiépíteni, amihez egy nyilvántartással és a rendelések kezelésével foglalkozó webalkalmazást szeretnének a dolgozóik számára. Ezen webalkalmazás elkészítésével bízzák meg önt.
A szükséges adatok rendelkezésre állnak egy külső backend szerveren. A szerver elérése a következő: https://github.com/SzoftTeszt/szabaduloszobaApi.git
### Üzembe helyezés:
* git clone https://github.com/SzoftTeszt/szabaduloszobaApi.git
* npm i
* npm start

## Feladatok:
### Előkészületek:
* Készítsen új projektet az Ön által tanult keretrendszerben (Angular, React, VueJs, stb.) SzabaduloszobaPeldaBela néven, ahol a PeldaBela helyett az Ön neve szerepel.Adja hozzá a projekthez a legfrissebb Bootstrap keretrendszert.
### Készítsen egy új komponenst, amely a webalkalmazás nyitóoldala lesz. A nyitóoldal feleljenmeg a következő elvárásoknak:
* A nyitóoldal tartalmazza az index.txt (Az index.html nincs meg, találják fel magukat! )fájlban található tartalmat maradék nélkül. Ügyeljen arra, hogy az egyes részekmegfelelő HTML címkékkel legyenek ellátva (címsor, bekezdés, felsorolás, táblázat, stb.)
* A nyitóoldalon foglaljon helyet az jatek.jpg (A kép sincs meg, itt is önállóskodjanak!)kép.
* A nyitóoldalon helyezzen el kettő navigációs menüpontot: Foglalások listázása és Új foglalás felvétele
### Hozzon létre új komponenst, amelyen a foglalások adatai megjelennek
* Az adatok a kiszolgáló szerverről a megfelelő REST API függvénnyel kérhető le.
* Az adatokat jelentse meg táblázatos formában, dátum szerinti csökkenő sorrendben.Ügyeljen arra, hogy az oszlopok sorrendje a következő legyen: dátum, név, fő, helyszín,irányítószám. (A táblázatkészítéséhez használhat külső komponenst is, pl.: AngularMaterial, PrimeNG, Quasar, stb.)
* Állítsa be a komponensnek az eléréséhez a /foglalasok útvonalat.
* A kezdőoldalon a megfelelő feliratú linknek/gombnak úgy állítsa be a navigációját hogyaz a /foglalasok útvonalra navigáljon.
### Hozzon létre egy újabb komponenst, amely segítségével új foglalást lehet regisztrálni.
* A komponens elkészítéséhez használjon űrlapot, benne megfelelő beviteli mezőkkel.Ügyeljen arra, hogy a beviteli mezőkbe csak valós értékeket
* lehessen beírni.
* Az dátum egy szerkeszthető mező. Viszont az oldal betöltődésekor mindig az aktuálisdátum szerepeljen benne.
* A résztvevők száma minimum 2, maximum 16 fő lehet. Ezen intervallumon kívüli értékne legyen beállítható.
* Az űrlap elküldésével az adatok kerüljenek fel a szerverre a fentebbi API leírás alapján.
* Sikeres küldés esetén navigáljon a /foglalasok útvonalra.
* Ezt a komponenst az /ujfoglalas útvonalon lehessen elérni. A kezdőoldalon a megfelelőgomb erre az útvonalra irányítson.
* Készítsen hibakezelést. A REST API metódushívások esetlegesen felmerülő hibáinakelkapására, megjelenítésére. A hibakódot és üzenetet jól látható részen és jól láthatómódon jelenítse meg.
### A weboldal megjelenésének kialakítására használhat Bootstrap osztályokat, vagy sajátmaga által készített (és tanult) CSS osztályokat is. Ügyeljen a megjelenés kialakításánál areszponzivitásra!