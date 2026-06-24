export type Locale = 'en' | 'zh';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureSection {
  id: string;
  title: string;
  /** Optional in-page H2. Falls back to `title` (used by the TOC) when absent. */
  heading?: string;
  lede: string;
  body: string[];
  specs: string[];
}

export interface PricingTile {
  id: string;
  name: string;
  price: string;
  lede: string;
  included: string[];
  cta: string;
  /** Optional small caption rendered beneath the CTA button. */
  ctaNote?: string;
  href: string;
}

export interface PricingFAQ {
  q: string;
  a: string;
}

export interface PrivacyNamedItem {
  name: string;
  body: string;
}

export interface Copy {
  meta: { title: string; description: string };
  nav: { features: string; pricing: string; privacy: string; download: string };
  hero: {
    headline: string;
    sub: string;
    purpose: readonly string[];
    /** Shorter purpose copy shown on narrow (mobile) viewports. */
    purposeMobile: readonly string[];
    seeHow: string;
  };
  speak: {
    title: string;
    lede: string;
    /** App-chrome titlebar text (app name + channel/recipient). */
    chromeApp: string;
    chromeChannel: string;
    /** Placeholder text inside the composer before the user speaks. */
    placeholder: string;
    /** Three scripted samples — the demo cycles through them. */
    samples: { raw: string; refined: string }[];
    /** Pill copy. */
    holdToSpeak: string;
    releaseToFinish: string;
    refining: string;
    replay: string;
    next: string;
    after: string;
    /** Static badge in the bottom-right corner of the demo. */
    shortcutHint: { key: string; label: string };
  };
  type: {
    title: string;
    lede: string;
    chromeApp: string;
    chromeChannel: string;
    placeholder: string;
    /** Auto-typed sequence: typed prefix, ghost continuation, three alternatives. */
    samples: {
      typed: string;
      ghost: string;
      alts: string[];
    }[];
    tabHint: string;
    altHint: string;
    /** Pill copy. */
    replay: string;
    next: string;
    note: string;
    /** Static badge in the bottom-right corner of the demo — two chips. */
    shortcutHint: {
      accept: string;
      acceptLabel: string;
      alts: string;
      altsLabel: string;
    };
  };
  caption: {
    title: string;
    lede: string;
    /** Scenarios the demo cycles through. `kind` switches the stage UI
     *  (meeting tiles / video frame / album-art player). */
    samples: {
      kind: 'meeting' | 'video' | 'music' | 'voice-message';
      /** App-chrome titlebar text (app name + channel/recipient). */
      chromeApp: string;
      chromeChannel: string;
      /** Stage subject — speaker, video title, or track title. */
      subjectPrimary: string;
      /** Optional secondary line (e.g. artist name under a song title). */
      subjectSecondary?: string;
      /** Source line being heard, translated target shown below. */
      source: string;
      target: string;
    }[];
    /** Labels on the bottom capsule. */
    capsuleLabel: string;
    /** Pill copy + caption. */
    play: string;
    replay: string;
    next: string;
    after: string;
    /** Static badge in the bottom-right corner of the demo. */
    shortcutHint: { key: string; label: string };
  };
  translate: {
    title: string;
    lede: string;
    chromeApp: string;
    chromeChannel: string;
    /** What the recipient just said (visible in thread). */
    incomingName: string;
    incomingText: string;
    /** Inline translation of `incomingText` into the user's own language — shown after the "select to translate" gesture. */
    incomingTranslation: string;
    /** Label on the small "Translate" chip that appears beside a selection. */
    selectChip: string;
    /** What you say (zh) and what gets inserted (en). */
    sample: { spoken: string; output: string };
    /** Mode-bar label + flag. */
    modeBar: string;
    placeholder: string;
    /** Caption shown alongside the listening waveform inside the composer. */
    translationOn: string;
    /** Button label inside the composer. */
    send: string;
    replay: string;
    after: string;
    /** Two badges anchored to the bottom corners of the demo:
     *  - `turnOn`: bottom-left, plain text — how to enable Translation mode.
     *  - `selectKey` / `selectLabel`: bottom-right, key chips + label — the
     *    Selection-Translate global hotkey, flashed when the demo's
     *    select-to-translate prelude fires. */
    shortcutHint: { turnOn: string; selectKey: string; selectLabel: string };
  };
  privacy: {
    eyebrow: string;
    title: string;
    lede: string;
    stays: { label: string; items: string[] };
    leaves: { label: string; items: string[]; note: string };
    killSwitch: { toggleLabel: string; headline: string; body: string };
    fullStory: string;
  };
  pricing: {
    title: string;
    seeFull: string;
    tiles: { name: string; price: string; lede: string; cta: string; href: string }[];
  };
  footer: {
    formula: string;
    productItems: NavItem[];
    copyright: string;
  };
  /** Page-level copy for the secondary routes. Shape mirrors planning/05-other-pages.md. */
  pages: {
    features: {
      title: string;
      lede: string;
      tocLabel: string;
      sections: FeatureSection[];
      ctaTitle: string;
      ctaButton: string;
    };
    pricing: {
      title: string;
      lede: string;
      tiles: PricingTile[];
      includedHeader: string;
      faqTitle: string;
      faq: PricingFAQ[];
      ctaTitle: string;
      ctaButton: string;
    };
    privacy: {
      title: string;
      lede: string;
      stays: { title: string; items: string[] };
      leaves: {
        title: string;
        items: PrivacyNamedItem[];
        diagramSteps: string[];
        diagramCaption: string;
      };
      paths: { title: string; items: PrivacyNamedItem[] };
      never: { title: string; items: string[] };
      table: {
        title: string;
        headers: {
          feature: string;
          local: string;
          cloud: string;
          transmitted: string;
          killSwitch: string;
        };
        rows: {
          feature: string;
          local: string;
          cloud: string;
          transmitted: string;
          killSwitch: string;
        }[];
        permissionsTitle: string;
        permissionsHeaders: { permission: string; purpose: string; requiredFor: string };
        permissions: { permission: string; purpose: string; requiredFor: string }[];
      };
      footerNote: string;
    };
    download: {
      title: string;
      lede: string;
      button: string;
      buttonAvailability: string;
      fileMeta: string;
      checksumLabel: string;
      requirementsTitle: string;
      requirements: string[];
      installTitle: string;
      steps: { title: string; body: string }[];
      footerNote: string;
    };
    about: {
      title: string;
      paragraphs: string[];
      builtBy: string;
      contactEmail: string;
      linksLabel: string;
      links: NavItem[];
    };
  };
}
