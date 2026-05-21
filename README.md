|| **Základní pojmu v performance testingu** ||

**response time** 
- doba odezvy, určuje, kolik času potřebuje server na zpracování požadavku a odeslání odpovědi zpět

**throughput**
- propustnost, určuje, kolik bylo úspěšně zpracovaných operací (požadavků, transakcí, iterací) za 1 sekundu

**concurrent users**
- souběžní uživatelé, určuje, kolik uživatelů v daný okamžik odesílá požadavek
- VU (Virtual Users), posílají požadavky dle rychlosti serveru, při velmi rychlém klidně 500 za sekundu per uživatel

**latency**
- latence, určuje, jak dlouho potřebuje systém na zpracování požadavku
- sledujeme v Percentilech (hodnota p(95) < 500 ms) znamená, že 95% všech požadavků bylo odbaveno do půl sekundy, nebo v Thresholds/Prahové hodnoty(nastavení prahových hodnot - např. kolik % požadavků musí mít latenci pod 1000 ms)

**bottleneck**
- úzké hrdlo, určuje, kde je omezení rychlosti, nebo propustnosti
- nejčastěji dva druhy, na straně backend, nebo na straně zátěžového nástroje (k6)

**load test**
- zátěžový test, tedy ověření výkonosti, odhalení limitů

**stress test**
- druh zátěžového testu, který ověřuje chování systému za extrémních podmínek
- cílem je určit bod zlomu, popřípadě jak se systém zotaví po selhání

**spike test**
- druh zátěžového testu, který ověřuje chování systému při náhlém zvýšení návštěvnosti

|| **Rozdíl mezi průměrem a percentilem** ||
- p(90) a p(95), znamená, že se výsledky seřadily od nejkratšího po nejdelší a vezme se hodnota na 95 percentilu, to znamená, že jen 5% uživatelů má odpověd pomaleji
- u průměru by se vzaly všechny hodnoty a vydělily jejich počtem, takže pokud by jeden požadavek trval dlouho a ostatní krátce, tak by to zkreslilo výsledek testu

Příklad
10 požadavků
Průměr výpočet: (100 + 110 + 115 + 120 + 125 + 130 + 135 + 140 + 150 + 10000) / 10 = 1112 ms | zdá se, že je request pomalý, 1,1 sekundy
Percentil výpočet: Hodnota 90 percentil je 150 | jen 5% uživatelů mělo delší response, než 0,15 sekundy