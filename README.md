![banner_happyhaven](https://github.com/EvaZ7/happyhaven/blob/75dc4adc9b3e1c11e7e15eb0f38a89da8c14a0f1/readmeimg/homepage.png)

# Chatroom App

In dit project heb ik een chatroom ontworpen met iets *extra's*. Ik ben erg tevreden met het eindresultaat, ook al had ik graag nog een aantal dingen willen toevoegen (zie mijn wishlist). Ik ben het meest trots op mijn kleine weer (build in) app, omdat deze op basis van livelocatie steeds update en de bijpassende icoontjes natuurlijk ;)

De chatroom bestaat verder uit het aanpassen van de stijl van de chatroom en de chatfunctie zelf natuurlijk met een zelf gekozen nickname.

## Live demo

[Happy Haven](https://happyhaven.up.railway.app/)

Kappote versie:
[looping version because of adaptable....](https://happyhaven.adaptable.app/)

## Table of Contents
* [Ideeën en concept](#ideeën-en-concept)
* [Schetsen](#schetsen)
* [Coding style](#coding-style)
* [Installeren](#installeren)
* [API](#api)
* [Auteur](#features)
* [License](#license)
* [Help](#help)

* [Proces](#proces)
  * [Week 1](#week-1)
  * [Week 2](#week-2)
  * [Week 3](#week-3)
  * [Data moddeling](#data-moddeling)
  * [Spike solution](#spike-solution)
  * [Data lifecycle diagram](#data-lifecycle-diagram)
  * [Realtime events](#realtime-events)
  * [Wishlist](#wishlist)
  * [Sources](#sources)

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
Voor de eindopdracht van dit vak heb ik als idee om een soort online huiskamer te maken in de vorm van een chatroom. Dus dat gebruikers naast chatten ook het weer kunnen zien, de achtergrond kunnen veranderen van de huiskamer, hun eigen naam kunnen instellen enhet weer kunnen zien dit zowel bij zichzelf als bij andere gebruikers. Dit concept wordt in de loop van de weken verder aangevuld!

### Feedback

Eigenlijk heb ik voor dit concept twee verschillende API's nodig, eentje voor de geolocatie en eentje voor het weer, deze twee kan ik dan aan elkaar koppelen. Ik moet alleen wel naar het aantal requests van de API kijken, de API voor het weer vind het niet zo leuk als ik telkens de data ophaal door middel van de sockets. Dus dit kan ik beter client-zijde doen door middel van een timeout en dan weer de API ophalen server-side. Als extra toevoeging aan het idee kan ik ook het weer per gebruiker laten zien aan de andere gebruikers. Om te beginnen zou ik starten met de stijl van de chatroom aanpassen.

## Schetsen

Ik heb voor dit project verschillende ontwerpen gemaakt in Figma. Deze heb ik uiteindelijk samengevoegd en hier een beetje op geïtereerd om zo tot mijn uiteindelijke ontwerp te komen.

**Ontwerp 1**

![desgin1](https://github.com/EvaZ7/happyhaven/blob/12688aba7e9ed6f9f6f654a86b4e84707d94e379/readmeimg/design1.png)

**Ontwerp 2**

![desgin2](https://github.com/EvaZ7/happyhaven/blob/12688aba7e9ed6f9f6f654a86b4e84707d94e379/readmeimg/design2.png)

**Ontwerp 3**

![design3](https://github.com/EvaZ7/happyhaven/blob/12688aba7e9ed6f9f6f654a86b4e84707d94e379/readmeimg/design3.png)

### Uiteindelijke ontwerp

Ontwerp 3 is het uiteindelijke ontwerp geworden voor mijn concept, maar dan eerst zonder de locatie achter de gebruikersnamen. Dit ontwerp is een combinatie van ontwerp een en twee.

<!-- Nadat we allemaal een ontwerp hadden gemaakt zijn we gaan kijken welke we het mooist vinden. Hieruit kwam dat we niet specifiek een konden kiezen, daarom hebben we de drie ontwerpen bij elkaar gevoegd. Zo hebben we van Eva de kleuren gekozen, van Pip de achtergrond en van Ine hebben we het input veld gepakt. Dit is het uiteindelijke ontwerp geworden. -->

![finaldesign](https://github.com/EvaZ7/happyhaven/blob/75dc4adc9b3e1c11e7e15eb0f38a89da8c14a0f1/readmeimg/homepage.png)

Het uiteindelijk concept is een chatroom waarin gebruikers niet alleen met elkaar kunnen chatten, maar ook de roomstijl zelf kunnen aanpassen en het weer kunnen zien. De gebruiker kan verder zelf een gebruikersnaam instellen en er zijn verschillende achtergronden beschikbaar om de chatroom aan te passen voor de gehele groep. Het weer wordt weergeven door middel van een bijpassend icoon, de temperatuur en een beschrijving van het huidige weer. Om de twee minuten wordt het weer geüpdatet op basis van de huidige locatie van de gebruiker.

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
git clone https://github.com/EvaZ7/chatroom
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

Yes, je bent nu helemaal klaar! Ga naar `http://localhost:4200/` en geniet van Happy Haven!

## API

Ik zou in mijn real-time web app graag een weer API, willen gebruiken. Deze wil ik dan laten bijwerken op basis van locatie. Ik wil uit deze API graag de locatie, de temperatuur in graden Celsius en een tekstuele beschrijving van het weer (b.v. het is momenteel overwegend bewolkt etc.). Verder zou ik ook nog graag een icoontje aan het weer willen toevoegen om het wat visueler en vrolijker te maken, dus een wolkje met een zonnetje etc. Wat wel van belang is voor de API over het weer is dat het gebruikt maakt van coördinaten als locatie zodat ik deze later weer kan koppelen aan mijn opgehaalde geolocatie van de gebruiker. Ik heb hiervoor 2 verschillende API's gevonden. Namelijk een hele eenvoudige van [Yahoo](https://www.npmjs.com/package/yahoo-weather) en een iets complexere van [OpenWeatherMap](https://openweathermap.org/current).

Voor de geolocatie heb ik de volgende API gevonden met een zeer uitgebreide en fijne documentatie in [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API).

Hoe gebruik je de API?

1. Maak een account aan op [OpenWeatherMap](https://openweathermap.org/) je krijgt dan een API-key toegestuurd via je mail.
2. Zet je API-key in de API link samen met de coördinaten van je huidige locatie en de gewenste taal:
```
https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=${taal}
```
De coordinaten (laitude en longitude) haal ik zelf op via de geolocatie API. Deze bestaan uit een getal voor de longitude en een getal voor de latitude.

De taal kan je ook meegeven aan het einde van de API link dit doe je in de vorm van een landcode, deze codes zijn terug te vinden in de documentatie van de API.

3. Als laatste heb je ook nog een optie om de *units* te bepalen voor data die uit de API komt, de temperatuur kom namelijk standaard in graden Kelvin. Dit heb ik aangepast door de link van de API aan te passen door het volgende toe te voegen na de API-key.
```
&units=metric
```

**Let op** de API heeft een maximaal aantal requests van 1000 per dag

## Auteur

Deze Chatroom app is gemaakt door:
[Eva Zaadnoordijk](https://github.com/EvaZ7) (500847567) 2023 for Communication and Multimedia Design at the Amsterdam University of Applied Sciences.

## License

Copyright © 2023 Eva Zaadnoordijk

Dit project is [MIT](https://github.com/EvaZ7/happyhaven/blob/713579fd15a0df9c66ec973357e65bf35c8e4840/LICENSE) licensed.

## Help

Are some parts still a bit confusing? Feel free to contact me at: eva.zaadnoordijk.zaadnoordijk@hva.nl
Zijn sommige dingen nog er verwarrend, neem dan contact met mij op via [mail](eva.zaadnoordijk.zaadnoordijk@hva.nl).

## Proces

### Week 1

Ik heb deze week eerst de basis van een chatapp in elkaar gezet met Ine en Pip. In onze SpeakEasy chatapp kunnen gebruiker met elkaar kletsen, een eigen gebruikersnaam instellen en zien wie er aan het typen is.

Bekijk onze [SpeakEasy](https://chatroom-speakeasy.adaptable.app)

![banner_speakeasy](https://user-images.githubusercontent.com/54938035/232477598-1d0c0726-5f66-4bbb-a7fa-2a31ae7d7f78.svg)

Verder heb ik deze week een kopie gemaakt van de chatapp van ons team en hier mijn eigen chatapp van gemaakt. Ik heb een functie aan de chat toegevoegd die ervoor zorgt dat de geschiedenis van de chatapp ook zichtbaar is voor nieuwe gebruikers die zich bij de chat aansluiten. Verder heb ik alvast een idee bedacht voor mijn eindopdracht en hiervoor een eerste schets gemaakt.

Op vrijdag heb ik een hop feedback ontvangen in de vorm van issues op GitHub. Ik heb de feedback die nu al van toepassing was gelijk aangepast in mijn chatapp en de overige feedback laten staan zodat ik deze in de toekomst nog kan gebruiken, de overige feedback waren namelijk meer suggesties en ideeën voor mijn chatapp dan concrete problemen.

### Week 2

Ik ben op maandag begonnen met het verder uitwerken van mijn 3 concepten. Hier heb heb ik kleine interfaces/schetsen voor gemaakt in Figma en een toelichting bij geschreven(deze kun je [hierboven](#ideeën-en-concept) in mijn readme terugvinden). Hierna ben ik op zoek gegaan naar geschikte API's voor mijn concept en heb ik alvast een functie geschreven die de geolocatie van de gebruiker teruggeeft in de vorm van coördinaten.

### Week 3

In week drie heb ik de puntjes op de i gezet en ben ik aan de slag gegaan met mijn API, data modeling en het koppelen van de huidige geolocatie van de gebruiker aan mijn gekozen API. Ik heb verder gekeken naar de data uit de API en hoe ik deze het beste kon implementeren in mijn online chat omgeving.

### Data modelling

![data model](https://github.com/EvaZ7/happyhaven/blob/4e5130c2a64e8bb51e5c28a43e3dd1ab0bc59441/readmeimg/datamodel.png)

### Spike solution

Eigenlijk heb ik 2 verschillende API's namelijk een geolocation API die build in is en een externe API, wat mijn weer API is.

Ten eerste heb ik de geolaction API getest. Ik heb getest of ik de huidige locatie van mijn gebruiker/ pc kan loggen naar mijn console. Dit is mij gelukt met de volgende code, ik heb hiervoor een watchposition gebruikt in plaats van getcurrentposition omdat de API dan telkens de coördinaten update als het apparaat van positie veranderd in plaats van maar een keer deze coördinaten op te halen.
```
navigator.geolocation.watchPosition((position) => {
  console.log(position.coords.latitude, position.coords.longitude);
});
```
Voor de Weather-API heb ik eerst gekeken of ik het weer van een aantal test/vaste coördinaten kon ophalen, dit heb ik als volgt gedaan.
```
function updateData() {
  const lat = "52.7037"
  const lon = "4.7046"
  const apiKey = "c04cdde0d029a13051d3d39a8c83f4f1";
  const lang = "nl"
  const url1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=${lang}`;

  try {
    const response = await fetch(url1)
    const data = await response.json()

    displayData(data);

  } catch(err){
    console.log(err)
  }
}

function displayData(data) {
    if(data) {
      console.log(data)
      let location = data.name
      let temperature = Math.round(data.main.temp) + "˚C"
      let description = data.weather[0].description
      let icon = data.weather[0].icon
      weatherArticle.innerHTML = ''
      weatherArticle.insertAdjacentHTML("beforeend", `<img src="https://openweathermap.org/img/wn/${icon}@2x.png"><h3>${location}</h3><p>${temperature}</p><p>${description}</p>`);
    }
}
```

### Data lifecycle diagram

![banner_happyhaven](https://github.com/EvaZ7/happyhaven/blob/75dc4adc9b3e1c11e7e15eb0f38a89da8c14a0f1/readmeimg/datalifecyclediagram.png)

## Realtime events

In mijn chatapplicatie maak ik gebruik van realtime events. Zo kan elke gebruiker de achtergrond voor iedereen aanpassen. Ook kan een gebruiker berichten sturen naar iedereen met een eigen gekozen nickname. Verder is voor elke gebruiker individueel het weer zichtbaar, dit is op basis van de huidige locatie van de gebruiker.

## Wishlist

In de toekomst zou ik nog het volgende willen implementeren in mijn applicatie omdat ik hier helaas niet aan toe ben gekomen.

- Lijst met online gebruikers
- Het weer van elke online gebruiker zichtbaar maken voor iedereen
- Meer styling toevoegen aan de applicatie.

## Sources
- https://www.ecosia.org/images?q=plant%20leaves%20pixel%20gif#id=67DB588371C93DAE486A81024E3058217336FC03
- https://giphy.com/gifs/hoppip-cat-hoppip-pixel-7Cr71vflxfGFO
- https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API
- https://www.npmjs.com/package/yahoo-weather
- https://openweathermap.org/current
- https://socket.io/docs/v4/emit-cheatsheet/
