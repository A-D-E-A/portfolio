---
layout: ../../layouts/project.astro
title: Liveboard
by: Aberia
clients: ["Aberia", "Mutac", "Mutuelle du Rempart", "Yelloh", "Capa"]
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

<figure>
  <img src="https://adam-ambrosino.tk/assets/liveboard-preview.png" alt="Capture d'écran d'un liveboard">
  <figcaption>Capture d'écran d'un liveboard en fonctionnement</figcaption>
</figure>

# Acteurs

# Résultats

# Avenir

# Critique

Plusieurs clients ont demandé à Aberia d'avoir une visibilité en temps réelle sur leurs données. Des status d'agents du call-center au statistiques de ventes, ce large pannel de données permet une gestion et un management plus efficace. Le problème, c'est que ce nombre de données est très grand et vient souvent de sources différentes qu'il faut croiser. Pour un même client nous sommes allés jusqu'à connecter : deux bases de données [SQL Server](https://www.microsoft.com/en-us/sql-server), une base de données [MySQL](https://www.mysql.com), deux APIs REST et une API [GraphQL](https://graphql.org), avec plusieurs appels à chacune de ces sources pour plusieurs des requêtes/statistiques à afficher ! Avec plusieurs ordinateurs connectés à cet écran et le besoin d'utiliser un minimum de ressources, il est compliqué de récupérer toutes ces informations rapidement depuis le navigateur.

C'est pourquoi je ne l'ai pas fait : j'ai développé un serveur qui utilise plusieurs microservices conteneurisés avec [Docker](https://www.docker.com) ; développés en [Node.js](https://nodejs.org), [PHP](https://www.php.net) ou [Bash](https://www.gnu.org/software/bash/) pour faire toutes ces requêtes ; stocké les réponses temporairement dans un cache [Redis](https://redis.io) ; puis envoyé la réponse au client sous forme de Server-Sent Event ! Le client peut se connecter avec un **Event Listener** pour récupérer automatiquement les mises à jour depuis le serveur sans augmenter drastiquement la charge réseau à chaque utilisateur.

<figure>
  <img src="https://adam-ambrosino.tk/assets/liveboard-structure.svg" alt="Diagramme de l'infrastructure">
  <figcaption>Diagramme Plantuml de l'instrastructure conteneurisée</figcaption>
</figure>

Mais un autre problème intervient : comment savoir quelle donnée afficher à tel endroit ? Il est simple de "bricoler" une solution, mais difficile de poser une structure efficace qui soit aussi robuste que flexible. Pour cela, j'ai choisi de directement renvoyer des morceaux de structure HTML dans la réponse de notre serveur au lieu de simplement renvoyer les données, la taille de la réponse est plus importante mais il est plus simple d'insérer les composants et de les identifier, simplifiant donc la maintenabilité de l'application.

Enfin, pour diminuer la taille de ces réponses sans perdre l'avantage de simplification, j'ai encapsulé ces éléments dans des [**Web Components**](https://webcomponents.org). C'est une norme proposée par Google qui permet de définir des éléments personnalisés de manière standardisée, on peut ainsi créer une abstraction du style et de la structure de l'élément qui seront définis dans un fichier à part, et ne renvoyer dans la réponse que l'essentiel des données. De plus, les éléments nous laissent ajouter des scripts et méthodes internes, ce qui peut rassembler la logique visuelle (changement de couleur, animation) directement au composant concerné.
