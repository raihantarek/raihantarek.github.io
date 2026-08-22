/* =====================================================================
   EDIT THIS FILE ONLY.
   This is the single place with your names, date, photos, quote, song
   and links. Everything else (index.html, style.css, script.js) is
   layout/logic and you shouldn't need to touch it.
   ===================================================================== */

window.SITE_CONFIG = {

  // ---- Couple ----
  names: "Zurin & Tarek",

  // Start date & time of your relationship, in your local time.
  // Format: "YYYY-MM-DDTHH:MM:SS"
  startDate: "2025-08-22T00:00:00",

  // ---- Photos ----
  // Put your own images in assets/photos/ and list them here.
  // Each photo can have its own short caption/story, shown when you
  // click the centered photo to expand it. Leave caption empty to skip it.
  photos: [
    { src: "assets/photos/8.jpg", caption: "most beautiful angry face" },
    { src: "assets/photos/0.jpg", caption: "the beginning" },
    { src: "assets/photos/1.jpg", caption: "our most favorite place" },
    { src: "assets/photos/2.jpg", caption: "very first photo of her that i captured" },
    { src: "assets/photos/3.jpg", caption: "her most favourite photo" },
    { src: "assets/photos/4.jpg", caption: "our very first snacks together" },
    { src: "assets/photos/5.jpg", caption: "first lunch we had together" },
    { src: "assets/photos/6.jpg", caption: "our very first rickshaw ride" },
    { src: "assets/photos/7.jpg", caption: "happy her" },

  ],

  // ---- Quote ----
  // Write your own words here — keep it personal and yours.
  quote: "Love isn't something you find, it's something you build — one ordinary day at a time, one small choice after another. Somewhere in all those ordinary days, I found the piece that completes me. I can't picture my life without your laugh, your eyes, or the quiet feeling of home you carry with you.",

  // ---- "Fun fact" section ----
  // A lighthearted equivalence, not a fake statistic. Pick anything
  // meaningful to you two — it's just for fun.
  funFact: {
    icon: "🏆",
    lead: "That's enough time together to have watched",
    // {value} is replaced with a computed number based on total hours ÷ hoursPerUnit
    template: "{value} full movies, back to back",
    hoursPerUnit: 2
  },

  // ---- Optional background song ----
  // 1. Drop your song file into the assets/ folder, e.g. assets/song.mp3
  // 2. Set src below to that path, and fill in title/artist.
  // 3. Only use music you own the rights to, or leave src empty to hide
  //    the player entirely.
  song: {
    title: "Your Favourite Song",
    artist: "Rishbh Tiwari",
    src: "assets/song.mp3" // e.g. "assets/song.mp3"
  },

  // ---- Milestones ----
  // Add as many as you want, in any order — they'll show up left to
  // right. Each one:
  //   title:     what it was, e.g. "First Talk"
  //   date:      "YYYY-MM-DD" (optional — leave "" if you don't want
  //              to show a date/countdown for it)
  //   tag:       a short label shown above the title, e.g. "Day 1"
  //              (optional)
  //   completed: true once it's happened, false if it's still ahead
  //              (an upcoming milestone with a date shows a countdown;
  //              without a date it just shows "Not yet")
  milestones: [
    { title: "Intentional Talk Started", tag: "", date: "2025-08-22", completed: true },
    { title: "Confessed Her", tag: "", date: "2025-08-30", completed: true },
    { title: "First Date", tag: "", date: "2025-10-10", completed: true },
    { title: "Formal Proposal To Her Family", tag: "", date: "2025-02-06", completed: true },
    { title: "Got Married", tag: "", date: "2026-05-15", completed: true },
    { title: "Honeymoon", tag: "", date: "2026-05-22", completed: true },
    { title: "Paper Anniversary", tag: "", date: "2027-05-15", completed: false },
    { title: "Cotton Anniversary", tag: "", date: "2028-05-15", completed: false },
    { title: "Wheat Anniversary", tag: "", date: "2029-05-15", completed: false },
    { title: "Flowers Anniversary", tag: "", date: "2030-05-15", completed: false },
    { title: "Wood Anniversary", tag: "", date: "2031-05-15", completed: false },
    { title: "Perfume Anniversary", tag: "", date: "2032-05-15", completed: false },
    { title: "Wool Anniversary", tag: "", date: "2033-05-15", completed: false },
    { title: "Clay Anniversary", tag: "", date: "2034-05-15", completed: false },
    { title: "Tin Anniversary", tag: "", date: "2036-05-15", completed: false },
    { title: "Crystal Anniversary", tag: "", date: "2041-05-15", completed: false },
    { title: "Porcelain Anniversary", tag: "", date: "2046-05-15", completed: false },
    { title: "Silver Anniversary", tag: "", date: "2051-05-15", completed: false },
    { title: "Pearl Anniversary", tag: "", date: "2056-05-15", completed: false },
    { title: "Gold Anniversary", tag: "", date: "2076-05-15", completed: false },
    { title: "Diamond Anniversary", tag: "", date: "2101-05-15", completed: false },
  ],

};
