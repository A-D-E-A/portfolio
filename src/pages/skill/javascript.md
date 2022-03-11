---
layout: ../../layouts/skill.astro
title: (Vanilla) Javascript
publishDate: 2021-03-11 08:00:00
img: https://logos-download.com/wp-content/uploads/2019/01/JavaScript_Logo-700x700.png
description: |
  Le langage de scripting pour le web.
tags:
  - webdev
  - programmation
  - fullstack
---

# Javascript

## Définition

JavaScript, aussi connu sous le nom d'ECMAscript, est un langage de scripting pour le web.
Ce langage créé en 10 jours par Brendan Eich en 1996 est aujourd'hui un des langages de programmation les plus utilisés.
C'est aujourd'hui le langage _de facto_ du web, utilisé par tous les navigateurs majeurs.

## Contexte professionnel

Lors d'une commande d'application, les clients demandent une portabilité :

- l'application doit tourner sur différents systèmes d'exploitations,
- l'application doit être adaptée à différents modes d'affichage,
- l'application doit être simple d'accès,
- etc.

Une solution simple à ces contraintes est de développer des applications web, c.-à-d. qui tournent dans un navigateur !
Les navigateurs deviennent une norme, et l'avènement de technologies comme V8 ou WebAssembly permettent d'en augmenter la puissance.
C'est pourquoi de nombreuses entreprises font ce choix de développer en priorité des solutions web avant de proposer des solutions dîtes natives, et pourquoi Javascript continue de grandir.

Jeff Atwood, co-fondateur des forums Stack Exchange et Stack Overflow, et figure emblématique du web, disait la chose suivante :
"Toute application qui peut être écrite en Javascript sera écrite en Javascript".

## Actualité

La popularité du langage Javascript est une force. En effet, son ecosystème riche donne fréquemment naissance à de nouvelles librairies (Axios, Lodash, Immutable.js, chalk, etc.) et de nouveaux frameworks (React, Angular, Vue, Solid.js, Astro, etc.). Le vaste panel de possibilité nous permet de trouver des outils adaptés avec toujours plus d'originalité.

Cependant, ce choix peut-être stressant : lorsque l'on choisit un framework, il faut bien souvent suivre la méthodologie et les recommandations qui l'accompagnent. Or, les recommandations sont parfois incohérente au projet auquel on aimerait l'attacher. Les recherches ne sont plus "comment faire ceci" mais "comment empêcher _X_ de faire cela". Ce phénomène est appelé la _Framework Fatigue_, c'est lié à un mouvement, Vanilla Javascript, qui pousse à utiliser autant que possible les solutions de base offertes par nos outils, n'utilisant que des librairies reconnues pour des cas spécifiques afin d'éviter de réinventer la roue.

Le fait de se limiter au fonctionnalités natives ralentit souvent le développement, mais offre des avantages incontestables puissants. La non-utilisation de framework permet de structurer un projet sur-mesure à sa problématique; utiliser les APIs natives offre beaucoup plus de contrôle et de possibilités, et permet de mieux comprendre les techniques derrière le fonctionnement des librairies que l'on utilise; les performances sont souvent bien améliorées car on évite d'importer de lourdes dépendances consomatrices de ressources.

# Réalisations

Un des projets les plus parlants sur cette compétence est le projet **Liveboard**, une solution de supervision de données qu'Aberia a développé et vendu à plusieurs clients. Plusieurs clients ont demandé à Aberia d'avoir une visibilité en temps réelle sur leurs données. Les données comptaient plusieurs sources à appeler plusieurs fois par minute chacune, en croisant les données pour calculer des statistiques au vol. Comment faire pour alléger la charge du réseau ? Avec les Server-Sent Events ! Un système de cache auquel étaient reliés plusieurs micro-services stockait les données qui étaient récupérés aussi fréquemment que possible. Derrière un serveur envoyait des server-sent events au client qui l'interceptait avec un `EventListener`. Pour faciliter et accélérer le remplacement dans l'interface graphique, le serveur renvoyait directement des éléments HTML au lieu de simples données. Pourtant, le HTML est bien plus large que d'un JSON, comment garder des performances raisonnables ? En utilisant la magie des **Web Components** ! Ce standard inter-navigateur permet de définir un modèle et un style qui sera applicable sur un élément personnalisé. Donc au lieu de renvoyer une gigantesque structure, seul le nécessaire est passé par le serveur, le navigateur reconnait l'élément et applique automatiquement le style spécifié. C'est comme ça que nous avons répondu à un besoin complexe de performance et de rapidité grâce à des méthodes natives qui sont bien souvent mises de côté.

[Lien vers le projet **Liveboard**](http://localhost)

Un autre cas marquant est arrivé sur le projet **MICCGUI**, la plateforme de gestion de centres d'appel. Sa base nous a été fournie sous Wordpress avec plusieurs extensions au code fermé. Lors de la maintenance et de l'évolution de l'application, certaines demandes simples devenaient compliquées. Une demande qui m'a posé problème était d'afficher dynamiquement le nom d'agents avec leur numéro dans un champ d'un formulaire. L'extension _Advanced Custom Field_ ne permettait pas de valeurs dynamiques autres que des champs simples, la composition d'un nom et d'un numéro ne marchait donc pas. Les APIs PHP et Javascript étaient mal documentées et trop pauvres pour permettre cela. J'ai donc créé un endpoint d'API qui récupère ces données formattées puis j'ai analysé le comportement de la page web. Des champs au nom cryptique apparaissaient lors de l'insertion du texte puis disparaissaient au clic. J'ai donc utilisé l'API méconnue `MutationObserver` qui peut analyser toutes les "mutations", toutes les mises à jour des éléments de l'interface. En filtrant les évènements j'ai réussi à localiser programmatiquement ces champs et les manipuler, j'ai donc réussi à insérer les noms d'agents avec le numéro et ai changé le comportement du clic pour définir une autre valeur de retour que celle affichée (que le numéro ou l'identifiant au lieu du nom). C'est grâce à cette API et à ces techniques que j'ai fait économiser au client et à l'entreprise des frais de redéveloppement ou de support de la part d'ACF, tout en délivrant les fonctionnalités attendues.

[Lien vers le projet **MICCGUI**](http://localhost)

# Compétence

## Niveau

Je me considère à un niveau de maîtrise dans ce langage : je ne suis en aucun cas un expert, mais je suis assez autonome et instruit sur le langage et son fonctionnement pour développer des solutions complexes. Je connais les ressources à utiliser, les APIs natives, je suis activement l'actualité concernant ce domaine et j'essaye d'y contribuer.

## Marge de progression et contexte en fonction de la situation

Comme dit plus haut, je ne suis en aucun cas un expert. Il me reste de nombreux champs à exploiter dans l'écosystème de ce langage.
Je n'ai pas encore utilisé beaucoup d'APIs natives comme WebGL pour la modélisation 3D ou WebVR pour la réalité virtuelle, principalement par manque de temps et de cas d'utilisation. Je n'ai pas encore développé d'applications mobiles avec, ni même de _Progressive Web Apps_ que je comprends mais qui ne me servent pas à l'heure actuelle. Enfin, j'ai peu d'expérience des frameworks, même des plus connus que je délaisse souvent au profit d'une solution vanilla.

Cela ne m'empêche pas de m'y intéresser et de vouloir en apprendre plus, mais la majorité de ce qu'il me reste à apprendre est bien en dehors du contexte des projets qui me sont assignés.

## Importance dans mon profil par rapport à mes responsabilités

En tant qu'ingénieur full-stack devops, il est important de pouvoir s'adapter à toute situation et d'avoir un minimum de compétence dans chaque domaine du cycle de vie d'un logiciel. En cela, Javascript est une force inestimable. Premièrement car c'est le seul langage qui permet de faire de développement web côté client (il existe bien Elm, Rescript ou Purescript, mais ces langages sont ensuite compilés en Javascript). Deuxièmement car le web est multiplateforme et que de nombreux outils permettent d'adapter un projet web en application native. Troisièmement parce que c'est un langage de scripting, il permet donc de créer des scripts importants dans la gestion des pipelines en bénéficiant de tout son écosystème.

Au poste que j'occupe chez Aberia, ce langage est crucial. Son environnement me permet de développer sans problèmes de nombreux outils sans difficulté. Sa syntaxe et sa facilité me permettent d'échanger avec les administrateurs systèmes et administrateurs de bases de données qui sont généralement capable de lire et comprendre en partie mon code, facilitant ainsi la collaboration lorsque nos compétences respectives doivent être liées.

## Vitesse d'acquisition

J'ai commencé à apprendre ce langage au début de ma formation en septembre 2018, ce fut mon premier langage de programmation.
Au début, c'était difficile, la contrainte que nous avions de ne pas utiliser de librairie ou de framework (excepté Node.js) rendait la tâche bien compliquée. À l'époque, les normes ES5 et ES6 du langage n'étaient pas encore universellement adoptées, des APIs comme _fetch_ n'étaient pas encore accessible, jQuery était encore un outil important par la simplicité qu'il apportait. Mais en persévérant, j'ai réussi à développer mes premières applications client-serveur dans les mois qui ont suivi.

Je continue d'apprendre autant que possible et aussi rapidement que possible. Mes collègues relèvent régulièrement mes capacités d'auto-formation qui les impressionnent. Mes principales limites deviennent physiques (ma santé ne me permet pas d'aller aussi loin que je le souhaite), financières (certaines formations dépassent mon budget) ou simplement du manque de ressources disponibles.

## Recul sur la compétence, conseils

J'écris ces lignes en 2022, moins de 4 ans après ma découverte du langage. L'écosystème Javascript a vu beaucoup de changement, dont l'adoption massive des standard développés depuis 2015 ; et la collaboration entre les navigateurs ayant le plus de parts de marché afin d'essayer d'offrir une meilleure expérience de développement en unifiant les implémentations du langage. Autre chose à noter : l'accéleration de la croissance de l'écosystème de librairies et d'outils, les technologies sont de plus en plus volatiles.

Si j'avais à refaire ce chemin, j'aurai mieux choisi mes ressources, et j'aurai directement commencé avec des librairies de facilité mais toujours sans framework. Utiliser la base de cette technologie est un plus, cela a fait de moi un meilleur programmeur, un meilleur développeur, un meilleur ingénieur. Si j'avais été aidé à mes débuts avec des librairies telles que jQuery pour la manipulation de l'interface, Lodash pour les opérations courrantes sur des structures de données ou encore Express pour rapidement développer une API, j'aurai certainement pû aller encore bien plus loin et bien plus rapidement. Aujourd'hui je ne conseillerai plus jQuery car le sélecteur est devenu facultatif avec `document.querySelectorAll()` et que les requêtes asynchrones sont facilitées par l'API _fetch_. Je conseille encore Lodash et Express pour débuter, et j'aimerai pousser ceux qui les utilise à les laisser de côté. Ces librairies sont très efficaces et plaisantes à utiliser, mais il est impératif à partir d'un certain niveau d'être capable de s'en débarrasser au besoin ou à la demande, donc elles ne sont utiles que si l'on comprend réellement le fonctionnement interne de celles-ci.

# Avenir

## Projet pro, niveau souhaité

Je souhaite être et rester un ingénieur full-stack devops. Gérer le cycle de vie d'un logiciel de A à Z est rarement une partie de plaisir, mais très gratifiant lorsque l'on réussi. Je veux être capable de tout réaliser, même à un niveau intermédiaire.

Pour cela, j'aimerai encore pousser mon niveau en Javascript : apprendre des fonctionnalités plus obscures, faire de l'algorithmie intense nécessitant une optimisation des ressources, et programmer en bas-niveau en développant mon propre langage de programmation basé sur Javascript.

## Formations/autoformations en cours ou à venir

Je n'ai aucune formation en cours sur ce langage, mais je vais essayer de participer à des formations d'expertises dans les mois ou années à venir. Premièrement, apprendre la modélisation avec la librairie Three.js puis directement en WebGL. Deuxièmement, me former à d'autres systèmes de communications utilisant différents protocoles comme gRCP ou messagepack depuis Javascript. Enfin, développer des jeux vidéos ou autres démos interactives en Javascript. Ces trois domaines pointus me permettront d'augmenter grandement ma maîtrise du langage.
