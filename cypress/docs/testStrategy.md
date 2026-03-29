# Tesztelési stratégia

Az E2E tesztek kialakításánál nem a teljes funkcionális lefedettség volt a cél, hanem a legfontosabb, legnagyobb üzleti kockázatot jelentő felhasználói útvonalak lefedése.

A webshop szempontjából a legkritikusabb folyamat a vásárlás sikeres végigvitele, ezért elsődlegesen a checkout folyamatot automatizáltam a bejelentkezéstől a sikeres rendelésig.
Ennek részeként ellenőriztem, hogy a felhasználó terméket tud kosárba helyezni, a kiválasztott termék a későbbi lépésekben is megmarad, a checkout adatok megadhatók, és a rendszer a vásárlás végén sikeres visszajelzést ad.

A happy path mellett fontosnak tartottam a checkout validáció ellenőrzését is, mert a kötelező mezők kezelése tipikus hibaforrás.
Emiatt külön teszteket írtam a first name, last name és postal code hiányára, és nemcsak azt ellenőriztem, hogy hiba történik, hanem azt is, hogy a megfelelő hibaüzenet jelenik meg.

Külön kezeltem a kosár viselkedését is, mert ez a vásárlási folyamat egyik alapvető állapotkezelési pontja és könnyen szét lehetett választani a kettőt. 
Itt azt validáltam, hogy a felhasználó tud terméket hozzáadni és eltávolítani a kosárból, illetve hogy a kosár állapota és a badge számláló összhangban marad.

A termékek rendezését külön teszteltem, mert bár kisebb üzleti kockázatot jelentenek, gyakran használt funkciók, és kis ráfordítással jól validálhatóak.
A név és ár szerinti rendezések ellenőrzésével azt vizsgáltam, hogy a lista valóban a kiválasztott logika szerint változik.

Az API teszteknél a státuszkód ellenőrzésén túl a válasz szerkezetére, a felhasználói objektumok mezőire és a pagination működésére fókuszáltam.
Mivel nem állt rendelkezésre részletes dokumentáció, a válasz szerkezetéből indultam ki, és a legfontosabb elemeket validáltam.