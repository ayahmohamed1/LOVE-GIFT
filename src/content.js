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
      { src: "/images/pic1.jpg", label: "🌸", tag: "intrams" },
      { src: "/images/pic2.jpg", label: "♥",      tag: "recent!" },
      { src: "/images/pic3.jpg", label: "🌊",   tag: "" },
      { src: "/images/pic4.jpg", label: "🎂",   tag: "birthday" },
      { src: "/images/pic5.jpg", label: "💕",         tag: "" },
      { src: "/images/pic6.jpg", label: "🌷",    tag: "done research" },
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
      "عارفة غلاوتي عندك، وعارفة انك حطاني في مكانة أكبر من مجرد صاحبة… أنا عندك ذي الأخت، وده أنا واثقة فيه 100%.",
      "وعارفة قد إيه بتحبيني وبتخافي عليا، وبتعامليني كإني بنتك، وده عمره ما غاب عني لحظة.",
      "Your حنا بجد بقينا حياة بعض 😂♥️",
      "وعارفة إنك واثقة فيا أكتر من أي حد، ويمكن أكتر من أي حد تاني في حياتك، وده عندي بالدنيا كلها.",
      "وعارفة إني أكتر واحدة بتكلميها وبتحكي لها، وحتى لو ساعات بغلس عليكي أو بسألك كتير، فده بس عشان بحب أطمن عليكي، مش أكتر.",
      "You إحنا مش بس أصحاب… إحنا شركاء رحلة.",
      "Your إنتي شريكة نجاحي، وشريكة كل حاجة حلوة حصلتلي ♥️",
      "You وربنا يخليكي ليا دايمًا يا أجمل وأغلى حد في حياتي 🫶🏻♥️",
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
    message: `عارفة غلاوتي عندك، وعارفة انك حطاني في مكانة أكبر من مجرد صاحبة… أنا عندك ذي الأخت، وده أنا واثقة فيه 100%.
وعارفة قد إيه بتحبيني وبتخافي عليا، وبتعامليني كإني بنتك، وده عمره ما غاب عني لحظة.
أنا فاكرة كل حاجة بينا… كل موقف، كل كلام، وكل لحظة حلوة.
وعارفة إنك واثقة فيا أكتر من أي حد، ويمكن أكتر من أي حد تاني في حياتك، وده عندي بالدنيا كلها.
وعارفة إني أكتر واحدة بتكلميها وبتحكي لها، وحتى لو ساعات بغلس عليكي أو بسألك كتير، فده بس عشان بحب أطمن عليكي، مش أكتر.
وكفاية عندي إنك مش بتخرجي مع حد تقريبًا غيري، وكفاية اللحظة اللي نمت عندك وصحيتي في نص الليل تطبطبي عليا… دي لوحدها عندي حكاية 🥺♥️
إحنا مش بس أصحاب… إحنا شركاء رحلة.
فاكرة أول مرة كنا مبسوطين بالـ 5000 جنيه كأنها كنز؟
وفاكرة لما الدنيا اتفتحت علينا وبقينا بنقبض 20 ألف؟
وكل خطوة خدناها سوا… حتى التليفونات اللي جبناها.
إنتي شريكة نجاحي، وشريكة كل حاجة حلوة حصلتلي ♥️
يمكن مبتاخديش بالك، بس أنا بخاف عليكي بطريقة غريبة… حتى وإحنا بنعدي الطريق بلاقي نفسي باخد ناحية العربيات من غير ما أفكر.
أنا بحبك أوي يا تقي…
وبجد مش قادرة أتخيل حياتي من غيرك.
مجرد فكرة إننا نبعد عن بعض دي حاجة مش داخلة دماغي أصلاً.
إحنا بجد بقينا حياة بعض 😂♥️
وربنا يخليكي ليا دايمًا يا أجمل وأغلى حد في حياتي 🫶🏻♥️.
حتي لو رحلنا و فرقتنا الطرق ،وعدت الغريب التائه بين طرقات المدينه 
سأتذكر دائما إنه حين فقد يعقوب فلذه كبده يوسف ،راح البصر حزنا علي الحبيب ،وما أراني إلا فاقدا لنفسي إن فقدتك.♥️`,
    signoff: "Sincerely yours,",
    signature: "your bestfriend",
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
