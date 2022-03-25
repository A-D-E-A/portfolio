---
layout: ../../layouts/project.astro
title: Liveboard
by: Aberia
clients: ["Aberia", "Mutac", "Mutuelle du Rempart", "Yelloh"]
publishDate: 2021-03-02 08:00:00
img: https://images.unsplash.com/photo-1547234935-80c7145ec969?fit=crop&w=1400&h=700&q=75
description: |
  liveboard
tags:
  - design
  - webdev
  - call-center
---

# Présentation

**Liveboard** est le nom d'un ensemble de solutions vendues par Aberia. Ces solutions offrent une vision pseudo-temps réel des données d'un centre d'appel. Plusieurs produits de cette famille ont été réalisés afin de répondre à des besoins précis demandant de revoir le style et parfois l'architecture. Cette page mélange les informations de différents projets sous ce nom.

# Contexte

Plusieurs clients ont demandé à Aberia d'avoir une visibilité en temps réelle sur leurs données. Des status d'agents du call-center au statistiques de ventes, ce large pannel de données permet une gestion et un management plus efficace. Ces données pourtant essentielles sont difficiles d'accès. En effet, il faut parfois croiser de multiples sources de données : des bases de données [SQL Server](https://www.microsoft.com/en-us/sql-server), une base de données [MySQL](https://www.mysql.com), des APIs REST et une API [GraphQL](https://graphql.org).

De plus, il faut la certitude que les données soient exactes. Manquer deux appels en attente, c'est manquer deux ventes potentielles, donc potentiellement quelques milliers d'euros de CA. Il en résulte des performances affaiblies importantes.

# Étapes

Ce que j'ai fait, et refait à chaque itération du projet, c'est de poser une structure stable qui permette d'ajouter ces données. Cette étape est la plus importante, car avec toutes les demandes supplémentaires qui se dessinent, je vois ce qui aurait pu être amélioré pour me simplifier le développement. La version la plus évoluée consiste à créer une fonction pour chaque "table" de données (une pour les agents, une pour les appels en attente, etc.) à l'aide de closures (fonctions internes connaissant leur contexte), et les passer à un objet qui traite les requêtes en fonction des paramètres de l'objet.

```php
//endpoints.php
function abstract_data_source() {
  $o = new class{};
  //...
  return $o;
}

function miccsdk_queues_data_source() {
  $o = abstract_data_source();
  $o->base_url = "http://server/MiccSdk/api/v1";
  $o->endpoint = "/queues/states";
  //...
  $o->make_cols = function($x) {/**/};
  $o->make_rows = function($x) {/**/};
  $o->make_table = function($x) {/**/};
  return $o;
}

//fetch.php
class ApiFetcher {
  public $results;
  public __construct($data_obj);
  public get_results() {/*...*/}
  public route_request() {/*...*/}
  public fetch_miccsdk_queues() {/*...*/}
  //...
}
function fetch_data($data_obj) {
  $fetcher = new ApiFetcher($data_obj);
  $fetcher->route_request();
  return $fetcher->get_results();
}
```

Mais faire tous les appels à chaque fois peut-être long et consommer beaucoup de ressources, surtout si plusieurs ordinateurs sont connectés en même temps. Donc je n'ai pas directement connecté ce serveur Wordpress aux Apis : j'ai décomposé le tout en plusieurs microservices conteneurisés avec [Docker](https://www.docker.com) ; développés en [Node.js](https://nodejs.org), [PHP](https://www.php.net) ou [Bash](https://www.gnu.org/software/bash/) pour faire toutes ces requêtes ; stocké les réponses temporairement (moins de 5 secondes pour des données critiques, quelques minutes pour des statistiques complexes telles que le CA mensuel) dans un cache [Redis](https://redis.io). Le serveur Wordpress récupère les données de ces services et retourne la réponse au client sous forme de Server-Sent Event ! Le client peut se connecter avec un **Event Listener** pour récupérer automatiquement les mises à jour depuis le serveur sans augmenter drastiquement la charge réseau à chaque utilisateur.

<figure>
  <img src="https://adam-ambrosino.tk/assets/liveboard-structure.svg" alt="Diagramme de l'infrastructure">
  <figcaption>Diagramme Plantuml de l'instrastructure conteneurisée</figcaption>
</figure>

Mais un autre problème intervient : comment savoir quelle donnée afficher à tel endroit ? Il est simple de "bricoler" une solution, mais difficile de poser une structure efficace qui soit aussi robuste que flexible. Pour cela, j'ai choisi de directement renvoyer des morceaux de structure HTML dans la réponse de notre serveur au lieu de simplement renvoyer les données, la taille de la réponse est plus importante mais il est plus simple d'insérer les composants et de les identifier, simplifiant donc la maintenabilité de l'application.

Enfin, pour diminuer la taille de ces réponses sans perdre l'avantage de simplification, j'ai encapsulé ces éléments dans des [**Web Components**](https://webcomponents.org). C'est une norme proposée par Google qui permet de définir des éléments personnalisés de manière standardisée, on peut ainsi créer une abstraction du style et de la structure de l'élément qui seront définis dans un fichier à part, et ne renvoyer dans la réponse que l'essentiel des données. De plus, les éléments nous laissent ajouter des scripts et méthodes internes, ce qui peut rassembler la logique visuelle (changement de couleur, animation) directement au composant concerné.

La suite, c'est les retouches graphiques, le positionnement, les couleurs. Sur cette partie, le client fait partie intégrante de l'équipe, notamment car les préférences et les besoins en terme d'accessibilité sont différents, et nous devons communiquer régulièrement afin d'apporter au fur et à mesure les modifications demandées. Nous nous adaptons à la méthode du client : Redmine, Google Sheet, ou bien un email pour entrer un ticket dans notre ERP.

# Acteurs principaux

- Alexandre Allies : Chef de projet
- Adam Ambrosino : Développeur / designer
- Quentin Fankhauser : Administrateur bases de données
- Le product owner (représentant le besoin client) spécifique à chaque client.

# Résultats

Pour moi, ces projets ont été l'occasion d'apprendre à améliorer l'architecture de mes solutions.

Pour Aberia, c'est un atout qui permet de se démarquer de la concurrence en offrant des solutions sur-mesure.

Pour les clients, c'est la possibilité de mieux gérer une équipe et de mieux comprendre l'activité de leur centre d'appel.

<figure>
  <img src="https://adam-ambrosino.tk/assets/liveboard-preview.png" alt="Capture d'écran d'un liveboard">
  <figcaption>Capture d'écran d'un liveboard en fonctionnement (données censurées).</figcaption>
</figure>

# Avenir

Le **Liveboard** est encore produit et maintenu chez plusieurs clients. De nouveaux projets ont étés commandés et il ne semble pas y avoir de ralentissement sur les mois qui viennent.

Lorsque le temps le permettra, le projet devra être refait entièrement, en espérant que ça soit la dernière réécriture. Cette ultime itération permettra de fournir un Liveboard commun et configurable. Le but est de fournir un produit qui pourra être utilisé, déployé, et amélioré sans que ma présence soit obligatoire. Que quelques fichiers de configurations soient suffisants pour la plupart des cas, que le développement ne soit nécessaire que pour des exceptions (mélange de 3 sources de données dans un tableau). Enfin, la chaîne de build devra être posée afin d'automatiser les tâches complexes et de simplifier le déploiement du site.

# Critique

Ayant développés tous ces liveboards seul dans leur intégralité (certaines sources de données ont été gérées par l'administrateur, mais je reste le seul développeur), j'ai vu tout ce qui aurait pu être amélioré.

Je ressors grandi de ces projets car j'ai toujours essayé d'améliorer la structure et de simplifier le processus de modification du projet. J'ai beaucoup appris une des raisons qui me pousse à réécrire le projet dans son intégralité. C'était effectivement important pour un premier jet d'aller au plus vite et au plus simple, mais maintenant qu'il a été repris plusieurs fois, il faut vraiment imposer un temps de restructuration afin de ne plus accumuler la dette technique.

# Compétences

- [(Vanilla) Javascript](https://adam-ambrosino.tk/skill/javascript)
- [PHP](https://adam-ambrosino.tk/skill/php)
- [Docker](https://adam-ambrosino.tk/skill/docker)
- [Gitlab CI](https://adam-ambrosino.tk/skill/gitlab-ci)
- [Gestion de réunions](https://adam-ambrosino.tk/skill/meetings)
- [Gestion de tickets](https://adam-ambrosino.tk/skill/tickets)

