# Projet-ASI2

Rendu de notre projet

*******************PARTIES TESTEES**********************
-Node JS: Toutes les parties ont été évaluées en séances de TP
-React JS: Toutes les parties ont été évaluées en séances de TP
-JEE : Parties évaluées jusqu'à la mise en commun avec la base de données


*******************PARTIES FONCTIONNELLES (hors mise en commun)****************
Toutes les parties ont été testées et fonctionnent correctement, mais de façon indépendante. 


*******************MISE EN COMMUN************************
Les parties Node et React ont été mises en commun. Néeamoins toutes les fonctionnalitées ne sont pas fonctionnelles.
Voici les fonctions qui marchent:
-
-
-
...

Concernant la partie JEE, nous avons préféré commencer par mettre en commun Node et React. Malheureusement, nous n'avons pas relié JEE 
par choix et manque de temps. Néanmoins, nous avons étudié comment relier cette partie aux autres. Nous souhaitions créer un autre projet
React afin de créer un Login et envoyer par requête Http au Node sous forme de json une paire {login, password}. Puis dans node, recupérer 
cette requête et envoyer à l'adresse "http://localhost:8080/FrontAuthWatcherWebService/rest/WatcherAuth" ce couple login/password.Puis recupérer
dans Node la réponse de JEE et l'envoyer au React.
