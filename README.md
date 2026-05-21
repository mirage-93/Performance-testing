|| *Základní pojmu v performance testingu* ||

*response time* 
- doba odezvy, určuje, kolik času potřebuje server na zpracování požadavku a odeslání odpovědi zpět

*throughput*
- propustnost, určuje, kolik bylo úspěšně zpracovaných operací (požadavků, transakcí, iterací) za 1 sekundu

*concurrent users*
- souběžní uživatelé, určuje, kolik uživatelů v daný okamžik odesílá požadavek
- VU (Virtual Users), posílají požadavky dle rychlosti serveru, při velmi rychlém klidně 500 za sekundu per uživatel

*latency*
- latence, určuje, jak dlouho potřebuje systém na zpracování požadavku
- sledujeme v Percentilech (hodnota p(95) < 500 ms) znamená, že 95% všech požadavků bylo odbaveno do půl sekundy, nebo v Thresholds/Prahové hodnoty(nastavení prahových hodnot - např. kolik % požadavků musí mít latenci pod 1000 ms)

*bottleneck*
- úzké hrdlo, určuje, kde je omezení rychlosti, nebo propustnosti
- nejčastěji dva druhy, na straně backend, nebo na straně zátěžového nástroje (k6)

*load test*
- zátěžový test, tedy ověření výkonosti, odhalení limitů

*stress test*
- druh zátěžového testu, který ověřuje chování systému za extrémních podmínek
- cílem je určit bod zlomu, popřípadě jak se systém zotaví po selhání

*spike test*
- druh zátěžového testu, který ověřuje chování systému při náhlém zvýšení návštěvnosti