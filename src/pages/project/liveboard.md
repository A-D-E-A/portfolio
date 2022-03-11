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

# WARNING ADAM

> CE QUE TU VOIS PLUS BAS A ETE ECRIT POUR JAVASCRIPT, PENSE A REREDIGER LE TRUC POUR INCLURE TOUTES LES TECHNOS !!!
> NE DONNE SURTOUT PAS CA SANS RELIRE OU REECRIRE, SINON LES CORRECTEURS VONT BIEN SE MARRER EN LISANT CES LIGNES !!!

Un des projets les plus parlants sur cette compétence est le projet **Liveboard**, une solution de supervision de données qu'Aberia a développé et vendu à plusieurs clients.

Plusieurs clients ont demandé à Aberia d'avoir une visibilité en temps réelle sur leurs données. Des status d'agents du call-center au statistiques de ventes, ce large pannel de données permet une gestion et un management plus efficace. Le problème, c'est que ce nombre de données est très grand et vient souvent de sources différentes qu'il faut croiser. Pour un même client nous sommes allés jusqu'à connecter : deux bases de données SQL Server, une base de données MySQL, deux APIs REST et une API GraphQL, avec plusieurs appels à chacune de ces sources pour plusieurs des requêtes/statistiques à afficher ! Avec plusieurs ordinateurs connectés à cet écran et le besoin d'utiliser un minimum de ressources, il est compliqué de récupérer toutes ces informations rapidement depuis le navigateur.

C'est pourquoi je ne l'ai pas fait : j'ai développé un serveur qui utilise plusieurs microservices développés en Node.js, PHP ou Bash pour faire toutes ces requêtes, stocké les réponses temporairement dans un cache Redis, puis envoyé la réponse au client sous forme de Server-Sent Event ! Le client peut se connecter avec un _Event Listener_ pour récupérer automatiquement les mises à jour depuis le serveur sans augmenter drastiquement la charge réseau à chaque utilisateur.

Mais un autre problème intervient : comment savoir quelle donnée afficher à tel endroit ? Il est simple de _bricoler_ une solution, mais difficile de poser une structure efficace qui soit aussi robuste que flexible. Pour cela, j'ai choisi de directement renvoyer des morceaux de structure HTML dans la réponse de notre serveur au lieu de simplement renvoyer les données, la taille de la réponse est plus importante mais il est plus simple d'insérer les composants et de les identifier, simplifiant donc la maintenabilité de l'application. Enfin, pour diminuer la taille de ces réponses sans perdre l'avantage de simplification, j'ai encapsulé ces éléments dans des _Web Components_. C'est une norme proposée par Google qui permet de définir des éléments personnalisés de manière standardisée, on peut ainsi créer une abstraction du style et de la structure de l'élément qui seront définis dans un fichier à part, et ne renvoyer dans la réponse que l'essentiel des données. De plus, les éléments nous laissent ajouter des scripts et méthodes internes, ce qui peut rassembler la logique visuelle (changement de couleur, animation) directement au composant concerné.

Et c'est ainsi que j'ai pû répondre à la demande du client et apporter des modifications rapidment sur demande, grâce à une architecture structurée et l'utilisation au maximum des fonctionnalités natives souvent sous-utilisées.
