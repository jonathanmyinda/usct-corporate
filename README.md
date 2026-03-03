USCT-SARL

Fonctionnalités

Vite – Outil de build ultra-rapide et serveur de développement performant

React 18 – Dernière version avec support des hooks

TypeScript – Typage strict pour une meilleure expérience développeur

Tailwind CSS – Framework CSS utilitaire-first, rapide et flexible

shadcn/ui – Composants élégants basés sur Radix UI

Path Mapping – Importations propres avec le préfixe @/

🧩 Composants shadcn/ui inclus

Button

Card

Input

Label

Badge

Dialog

Et bien plus…

🛠️ Démarrage rapide

Installer les dépendances

npm install

Démarrer le serveur de développement

npm run dev

Créer une build de production

npm run build

Prévisualiser la build de production

npm run preview
📁 Structure du projet
src/
├── components/
│   └── ui/              # Composants shadcn/ui
├── lib/
│   └── utils.ts         # Fonctions utilitaires
├── App.tsx              # Composant principal
├── index.css            # Styles globaux avec Tailwind
└── main.tsx             # Point d’entrée de l’application
🎨 Personnalisation
Ajouter de nouveaux composants shadcn/ui

Le template est pré-configuré avec shadcn/ui.
Pour ajouter de nouveaux composants : créez-les dans src/components/ui/.

Configuration Tailwind

tailwind.config.js – configuration Tailwind (couleurs, design tokens)

src/index.css – propriétés CSS personnalisées pour les thèmes

Configuration TypeScript

Path mapping pour des imports propres :

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
🌗 Mode sombre

Le template supporte le Dark Mode grâce aux classes Tailwind dark: et aux propriétés CSS personnalisées.

📚 Ressources

Documentation Vite

Documentation React

Tailwind CSS

shadcn/ui

Radix UI

📝 Licence

© 2026 USCT SARL – Tous droits réservés.
Aucune partie de ce projet ne peut être reproduite, copiée ou utilisée sans autorisation écrite préalable.