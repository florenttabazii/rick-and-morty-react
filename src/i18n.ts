import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      status: "Status",
      species: "Species",
      sort: "Sort",
      human: "Human",
      all: "All",
      alive: "Alive",
      dead: "Dead",
      unknown: "Unknown",
      gender: "Gender",
      name: "Name",
      origin: "Origin",
      loading: "Loading...",
      loading_more: "Loading more...",
      footer_text: "Rick and Morty Characters by Florent Abazi",
    },
  },
  de: {
    translation: {
      status: "Status",
      species: "Spezies",
      sort: "Sortieren",
      human: "Menschlich",
      all: "Alle",
      alive: "Lebendig",
      dead: "Tot",
      unknown: "Unbekannt",
      gender: "Geschlecht",
      name: "Name",
      origin: "Herkunft",
      loading: "Lädt...",
      loading_more: "Lädt mehr...",
      footer_text: "Rick und Morty Charaktere bei Florent Abazi",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
