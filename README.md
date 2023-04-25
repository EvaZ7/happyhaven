![banner_happyhaven](https://user-images.githubusercontent.com/54938035/232477598-1d0c0726-5f66-4bbb-a7fa-2a31ae7d7f78.svg)

# Chatroom App

Voor het vak Realtime Web gaan we samen een basic Chatroom app maken. Deze app gaan we maken met Node.js, Express en Socket.io.

(description of our project)

## Live demo

[HappyHaven](https://happyhaven.adaptable.app/)


## Table of Contents
* [Ideeën en concept](#ideeën-en-concept)
* [Schetsen](#schetsen)
* [Coding style](#coding-style)
* [Installeren](#installeren)
* [Gebruik van het project](#gebruik-van-het-project)
* [API](#api)
* [Features](#features)
* [License](#license)
* [Help](#help)

* [Proces](#proces)
  * [Week 1](#week-1)

## Ideeën en concept

- Lijst met gebruikers die online zijn.
- Weather API.
- Woonkamer idee met grappige interactieve onderdelen, zoals de kat en de plantjes.
- De achtergrond van de chat app kunnen veranderen voor alle gebruikers.
- De gehele styling kunnen veranderen voor alle gebruikers.

**Concept 1**
Mijn eerste idee is om een chatroom te maken waarin gebruikers die online zijn links in het scherm komen te staan en een eigen kleur tekstwolkje krijgen zodra ze beginnen met chatten. Verder wil ik nog een aantal grappige interactieve onderdelen toevoegen, zoals plaatjes waar een gebruiker op kan klikken en dat er dan iets gebeurt met de styling van de chatroom.

**Concept 2**
Voor de eindopdracht van dit vak heb ik als idee om een soort online huiskamer te maken in de vorm van een chatroom. Dus dat gebruikers naast chatten ook het weer kunnen zien, de achtergrond kunnen veranderen van de huiskamer, hun eigen naam kunnen instellen etc.

**Concept 3**

Voor de eindopdracht van dit vak heb ik als idee om een soort online huiskamer te maken in de vorm van een chatroom. Dus dat gebruikers naast chatten ook het weer kunnen zien, de achtergrond kunnen veranderen van de huiskamer, hun eigen naam kunnen instellen etc. Dit concept wordt in de loop van de weken verder aangevuld!

### Feedback

Eigenlijk heb ik voor dit concept twee verschillende API's nodig, eentje voor de geolocatie en eentje voor het weer, deze twee kan ik dan aan elkaar koppelen. Ik moet alleen wel naar het aantal requests van de API kijken, de API voor het weer vind het niet zo leuk als ik telkens de data ophaal door middel van de sockets. Dus dit kan ik beter client-zijde doen door middel van een timeout en dan weer de API ophalen server-side. Als extra toevoeging aan het idee kan ik ook het weer per gebruiker laten zien aan de andere gebruikers. Om te beginnen zou ik starten met de stijl van de chatroom aanpassen.

## Schetsen

Ik heb voor dit project verschillende ontwerpen gemaakt in Figma. Deze heb ik uiteindelijk samengevoegd en hier een beetje op geïtereerd om zo tot mijn uiteindelijke ontwerp te komen.

**Ontwerp 1**

![desgin1](https://github.com/EvaZ7/happyhaven/blob/c3889212296e870f9a00db111ba33a72f7386490/readmeimg/designproto.png)

**Ontwerp 2**

![desgin2](https://user-images.githubusercontent.com/43877754/232475289-c7f46b90-ebf0-43ea-bc85-ffba54eb531d.jpg)

**Ontwerp 3**

![design3](https://user-images.githubusercontent.com/43877754/232475302-0fbcd601-897d-412e-94f5-fa9bd6d8df13.jpg)x

### Uiteindelijke ontwerp

<!-- Nadat we allemaal een ontwerp hadden gemaakt zijn we gaan kijken welke we het mooist vinden. Hieruit kwam dat we niet specifiek een konden kiezen, daarom hebben we de drie ontwerpen bij elkaar gevoegd. Zo hebben we van Eva de kleuren gekozen, van Pip de achtergrond en van Ine hebben we het input veld gepakt. Dit is het uiteindelijke ontwerp geworden. -->

![finaldesign](https://user-images.githubusercontent.com/43877754/232475322-5537541c-ae6d-42e5-9e8d-214fd8c42d60.jpg)

## Coding style
Om ervoor te zorgen dat mijn code overzichtelijk en netjes is, hebben ik een aantal regels opgesteld. Deze regels zijn:

**Html**

- Schrijf semantische HTML en gebruik niet onnodige `<div>`'s
- Schrijf comments waar nodig om de code te verduidelijken
- Gebruik regelmatig formatters om de code op te schonen

**CSS**

- Maak gebruik van CSS variabelen
- Groepeer CSS met comments, alles van hetzelfde onderdeel bij elkaar
- Gebruik relatieve eenheden voor afmetingen (Rem, em, %, etc.)

**Javascript**

- Gebruik camelCase voor variabelen
- Gebruik const en let in plaats van var
- Schrijf comments waar nodig om de code te verduidelijken
- Gebruik arrow functions

**Code comments**

In mijn code ga ik gebruik maken van code comments. In deze comments beschrijf ik wat een functie doet, een variabele doet, waar welke CSS-selector voor is en overige belangrijke aantekeningen.  Deze schrijf ik in het Engels omdat ik dat fijner vindt.

**Formatter**

Ik vind het zelf ook nog fijn om een formatter te gebruiken, zodat mijn code consistent blijft en "netjes" is, ook in verband met de overdraagbaarheid van mijn code. Ik gebruik hiervoor Prettier.


## Installeren
Om deze app te gebruiken, moet je deze repository clonen. Je kunt dit doen door het volgende commando in je terminal te typen:

```
git clone https://github.com/Inevdhoven/chatroom
```

Na het clonen van de repo, moet je de dependencies installeren. Dit kun je doen door het volgende commando in je terminal te typen:

```
npm install
```

Zodra de dependencies zijn geïnstalleerd, kan je naar de projectmap gaan met dit commando:

```
cd chatroom
```

Vervolgens kun je de app starten met dit commando:

```
npm start
```

Yes, je bent nu helemaal klaar! Ga naar `http://localhost:4200/` en geniet van SpeakEasy!


## Hoe gebruik je dit project?

## API

Ik zou in mijn real-time web app graag een weer API, willen gebruiken. Deze wil ik dan laten bijwerken op basis van locatie. Ik wil uit deze API graag de locatie, de temperatuur in graden Celsius en een tekstuele beschrijving van het weer (b.v. het is momenteel overwegend bewolkt etc.). Verder zou ik ook nog graag een icoontje aan het weer willen toevoegen om het wat visueler en vrolijker te maken, dus een wolkje met een zonnetje etc. Wat wel van belang is voor de API over het weer is dat het gebruikt maakt van coördinaten als locatie zodat ik deze later weer kan koppelen aan mijn opgehaalde geolocatie van de gebruiker. Ik heb hiervoor 2 verschillende API's gevonden. Namelijk een hele eenvoudige van [Yahoo](https://www.npmjs.com/package/yahoo-weather) en een iets complexere van [OpenWeatherMap](https://openweathermap.org/current).

Voor de geolocatie heb ik de volgende API gevonden met een zeer uitgebreide en fijne documentatie in [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API).

## Features
<!-- - [X] Kies een nickname
- [X] Verstuur berichten
- [X] Ontvang berichten van andere gebruikers
- [X] Zie wanneer een een andere gebruiker aan het typen is -->



## Makers

Deze Chatroom app is gemaakt door:
[Eva Zaadnoordijk](https://github.com/EvaZ7) (500847567) 2023 for Communication and Multimedia Design at the Amsterdam University of Applied Sciences.

## License

Copyright © 2023 Eva Zaadnoordijk

Dit project is [MIT](https://github.com/EvaZ7/happyhaven/blob/713579fd15a0df9c66ec973357e65bf35c8e4840/LICENSE) licensed.

## Help

Are some parts still a bit confusing? Feel free to contact me at: eva.zaadnoordijk.zaadnoordijk@hva.nl
Zijn sommige dingen nog er verwarrend, neem dan contact met mij op via [mail](eva.zaadnoordijk.zaadnoordijk@hva.nl).

## Sources
- https://www.ecosia.org/images?q=plant%20leaves%20pixel%20gif#id=67DB588371C93DAE486A81024E3058217336FC03
- https://giphy.com/gifs/hoppip-cat-hoppip-pixel-7Cr71vflxfGFO
- https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API
- https://www.npmjs.com/package/yahoo-weather
- https://openweathermap.org/current

## Proces

### Week 1

Ik heb deze week eerst de basis van een chatapp in elkaar gezet met Ine en Pip. In onze SpeakEasy chatapp kunnen gebruiker met elkaar kletsen, een eigen gebruikersnaam instellen en zien wie er aan het typen is.

Bekijk onze [SpeakEasy](https://chatroom-speakeasy.adaptable.app)

![banner_speakeasy](https://user-images.githubusercontent.com/54938035/232477598-1d0c0726-5f66-4bbb-a7fa-2a31ae7d7f78.svg)

Verder heb ik deze week een kopie gemaakt van de chatapp van ons team en hier mijn eigen chatapp van gemaakt. Ik heb een functie aan de chat toegevoegd die ervoor zorgt dat de geschiedenis van de chatapp ook zichtbaar is voor nieuwe gebruikers die zich bij de chat aansluiten. Verder heb ik alvast een idee bedacht voor mijn eindopdracht en hiervoor een eerste schets gemaakt.

![banner_happyhaven](https://user-images.githubusercontent.com/54938035/232477598-1d0c0726-5f66-4bbb-a7fa-2a31ae7d7f78.svg)

Op vrijdag heb ik een hop feedback ontvangen in de vorm van issues op GitHub. Ik heb de feedback die nu al van toepassing was gelijk aangepast in mijn chatapp en de overige feedback laten staan zodat ik deze in de toekomst nog kan gebruiken, de overige feedback waren namelijk meer suggesties en ideeën voor mijn chatapp dan concrete problemen.

### Week 2

Ik ben op maandag begonnen met het verder uitwerken van mijn 3 concepten. Hier heb heb ik kleine interfaces/schetsen voor gemaakt in Figma en een toelichting bij geschreven(deze kun je [hierboven](#ideeën-en-concept) in mijn readme terugvinden). Hierna ben ik op zoek gegaan naar geschikte API's voor mijn concept en heb ik alvast een functie geschreven die de geolocatie van de gebruiker teruggeeft in de vorm van coördinaten.

<!-- Here are some hints for your project! -->

<!-- Start out with a title and a description -->

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- This would be a good place for your data life cycle ♻️-->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜  -->
