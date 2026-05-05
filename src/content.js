// ================================================================
//  💌  LOVE GIFT — CONTENT CONFIGURATION
//  Edit ONLY this file to fully customize your romantic website.
//  URL overrides: ?name=Aya&msg=Hello
// ================================================================

export const content = {

  // ── Page 1: Welcome ──────────────────────────────────────────
  welcome: {
    greeting: "Hello",
    name: "My Love!",           // recipient name
    question: "do you want to see your gift?",
    yesButton: "YES PLEASE",
    noButton: "NO THANKS",
    noCatEmoji: "🐱",           // cat emoji shown on welcome
  },

  // ── Page 2: No Thanks reaction ───────────────────────────────
  noThanks: {
    catEmoji: "😢",
    message: "I promise you'll like it",
    tryAgainButton: "TRY AGAIN",
  },

  // ── Page 3: Gift Menu ─────────────────────────────────────────
  menu: {
    title: "THESE ARE FOR YOU!",
    subtitle: "I hope you like it, I love you!",
    items: [
      { id: "memories",  icon: "🖼️",  label: "Captured Memories" },
      { id: "flowers",   icon: "💐",  label: "Virtual Flowers" },
      { id: "locks",     icon: "🔒",  label: "Love Locks" },
      { id: "letter",    icon: "💌",  label: "Love Letter" },
    ],
  },

  // ── Page 4: Captured Memories ────────────────────────────────
  memories: {
    title: "Captured Memories",
    // Place images in /public/images/ and reference here
    images: [
      { src: "/images/pic1.jpg", label: "first date 🌸", tag: "intrams" },
      { src: "/images/pic2.jpg", label: "always ♥",      tag: "recent!" },
      { src: "/images/pic3.jpg", label: "our trip 🌊",   tag: "" },
      { src: "/images/pic4.jpg", label: "birthday 🎂",   tag: "birthday" },
      { src: "/images/pic5.jpg", label: "us 💕",         tag: "" },
      { src: "/images/pic6.jpg", label: "forever 🌷",    tag: "done research" },
    ],
    returnButton: "RETURN",
  },

  // ── Page 5: Virtual Flowers ──────────────────────────────────
  flowers: {
    title: "Virtual Flowers",
    flowerName: "TULIPS",
    flowerSubtitle: "your favorite flower",
    flowerEmoji: "🌷",
    // Poem lines that float around the flower
    poems: [
      "You keep me smiling, like a garden of flowers",
      "You make the day feel like a bouquet of blooms",
      "Your smile spreads like spring flowers in the field",
      "You're as lovely as a garden full of flowers after the rain",
      "Your presence is as refreshing as morning flowers",
      "You bring color to life like flowers in spring",
      "Your kindness blooms like petals in the breeze",
      "You brighten the world, graceful as dancing flowers",
    ],
    returnButton: "RETURN",
  },

  // ── Page 6: Love Song ─────────────────────────────────────────
  song: {
    title: "this song reminds me of you (>ᴗ<)",
    songTitle: "Nothing",
    artist: "Bruno Major",
    youtubeId: "MFxeHUrOiNI",    // YouTube video ID only
    highlightText: "The most beautiful thing",
    secretMessage: "Secret message: 1:43 - 1:55",
    returnButton: "RETURN",
  },

  // ── Page 7: Love Letter / Message ────────────────────────────
  letter: {
    title: "Message for my love",
    // Supports \n for line breaks
    message: `Happy Birthday babe, 
    I'm incredibly lucky to walk through life with you by my side. Watching you grow, seeing you smile, and sharing even the smallest moments with you is a gift I never take for granted.

You make every day feel special just by being in it, so today I hope the world gives back even a fraction of the love and joy you bring into it. You deserve all the sweetness, all the peace, and all the happiness your heart can hold. I love you more than words can say, and I'm so proud of the person you are.

Happy Birthday, my heart — you are truly one of a kind.`,
    signoff: "Sincerely yours,",
    signature: "The love of your life",
    returnButton: "RETURN",
  },

  // ── Love Locks (bonus page) ───────────────────────────────────
  locks: {
    title: "Love Locks",
    message: "Our love is locked forever 🔒",
    names: ["Me", "&", "You"],
    returnButton: "RETURN",
  },

  // ── Global ───────────────────────────────────────────────────
  music: null,  // e.g. "/music/song.mp3" or null to disable
};
