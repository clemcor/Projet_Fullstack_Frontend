# Projet Portfolio Frontend

## Liste des routes

- "/" : Accès à la page d'accueil.
- "/projects" : Accès à la liste des projets.
- "/projects/:id" : Accès à un projet en particulier.
- "/projects/newProject" : Accès à la page de création de projet.
- "/projects/update/:id" : Mise à jour d'un projet.
- "/email" : Accès à la page pour envoyer un email.
- "/presentation" : Accès à la page de présentation.

## Lancement de l'application web

Pour lancer la page web, veuillez suivre ces étapes :

1. Créez un fichier `.env` en vous inspirant du fichier `exemple.env`.
2. Lancez le projet avec la commande `pnpm run dev`.

## Configuration des services EmailJS

Pour pouvoir récupérer le Service ID ainsi que le Template ID pour l'envoi de mails, veuillez suivre les étapes suivantes :

1. Créez un compte sur le site [EmailJS](https://www.emailjs.com/).
2. Une fois le compte créé, cliquez sur "New Services", sélectionnez votre service (Gmail), puis obtenez votre Service ID.
3. Dans la section "Email Template", créez un nouveau modèle.
   - Dans la partie "Subject", écrivez {{subject}} (attention à bien écrire les "{" ).
   - Dans la partie "Content", écrivez {{message}}.
   - Dans la partie "To", écrivez {{to}}.
   - Dans la partie "FromName", écrivez {{sendername}}.
   - Enfin, dans la partie "Reply To", écrivez {{replyto}}. Puis sauvegardez.
4. Cliquez sur "Settings", puis vous trouverez ici le Template ID.
