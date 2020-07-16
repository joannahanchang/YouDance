$(function() {

    $("#registerButton").click(function() {
        $("#register").modal("show");
    })

    $("#loginButton").click(function() {
        $("#logIn").modal("show");
    })

    $("#surveyButton").click(function() {
        $("#survey").modal("show");
    })

});

const videos = [
  {
    style: "barre",
    intensity: "low",
    views: "lessThan5K",
    url: "https://www.youtube.com/embed/op-HO2NLsKM",
    description: `Kitchen Ballet - Low Impact Ballet Barre Christian Dance Workout`,
  },
  {
    style: "barre",
    intensity: "low",
    views: "5Kto10K",
    url: "https://www.youtube.com/embed/nkK1pKwy150",
    description: `Barre Fitness | Beginner Gold Barre Workout`,
  },
  {
    style: "barre",
    intensity: "low",
    views: "10KPlus",
    url: "https://www.youtube.com/embed/WM9DeZsIOik",
    description: `BARRE FOR WEIGHT LOSS | Home Workout | Full Body | Low Impact`,
  },
  {
    style: "barre",
    intensity: "moderate",
    views: "lessThan5K",
    url: "https://www.youtube.com/embed/FJEW5b8Rp8Y",
    description: `60 Minute Full Body at Home Workout - Pure Barre`,
  },
  {
    style: "barre",
    intensity: "moderate",
    views: "5Kto10K",
    url: "https://www.youtube.com/embed/ib8AKrf67x0",
    description: `6 Glute-Toning Barre Moves + At Home Barre Workout`,
  },
  {
    style: "barre",
    intensity: "moderate",
    views: "10KPlus",
    url: "https://www.youtube.com/embed/h2sUA_YbD-Y",
    description: `INTERVAL WORKOUT HIIT WORKOUT BARRE WORKOUT - BARLATES BODY BLITZ HIIT Barre workout`,
  },
  {
    style: "barre",
    intensity: "high",
    views: "lessThan5K",
    url: "https://www.youtube.com/embed/66JbkdPLExU",
    description: `60 Minute- Full Body High Intensity Workout with Modifications - Basic Barre`,
  },
  {
    style: "barre",
    intensity: "high",
    views: "5Kto10K",
    url: "https://www.youtube.com/embed/VarXtb9pRPA",
    description: `BarreBLAST® (HIIT) by BarreShape`,
  },
  {
    style: "barre",
    intensity: "high",
    views: "10KPlus",
    url: "https://www.youtube.com/embed/wy7dwTJgNw0",
    description: `BARRE WITH JANA! | High Intensity | Full Body Workout`,
  },
  {
    style: "hipHop",
    intensity: "low",
    views: "lessThan5K",
    url: "https://www.youtube.com/embed/Y9zWV-Slz6I",
    description: `Kitchen Ballet - Beginner Hip Hop - Drop It Low`,
  },
  {
    style: "hipHop",
    intensity: "low",
    views: "5Kto10K",
    url: "https://www.youtube.com/embed/C8CrNQu9iTc",
    description: `Bruno Mars - "That's What I Like" | Hip Hop Dance For Beginner's Class`,
  },
  {
    style: "hipHop",
    intensity: "low",
    views: "10KPlus",
    url: "https://www.youtube.com/embed/tfdy5AahM4M",
    description: `30-Minute Low-Impact Dance Grooves Workout`,
  },
  {
    style: "hipHop",
    intensity: "moderate",
    views: "lessThan5K",
    url: "https://www.youtube.com/embed/CngImI7S02c",
    description: `"Down Low" - TWINNS ft. Keely Keyz | Fierce Body Fitness (Hip-Hop Dance Fitness)`,
  },
  {
    style: "hipHop",
    intensity: "moderate",
    views: "5Kto10K",
    url: "https://www.youtube.com/embed/u20m2GhFiuo",
    description: `Trap Aerobics 2020 Hip Hop Workout || Lower Body Interval Training`,
  },
  {
    style: "hipHop",
    intensity: "moderate",
    views: "10KPlus",
    url: "https://www.youtube.com/embed/TI-z1bHEk-c",
    description: `Hip Hop Fat Burn // CARDIO BEAT (At Home No Jumping Cardio)`,
  },
  {
    style: "hipHop",
    intensity: "high",
    views: "lessThan5K",
    url: "https://www.youtube.com/embed/8G2hndSzrRo",
    description: `Pt 4 - Cardio Dance | "Kontrol" | African Dance Workout | Dance Fitness | Hip-Hop Workout`,
  },
  {
    style: "hipHop",
    intensity: "high",
    views: "5Kto10K",
    url: "https://www.youtube.com/embed/qH4mXJJDuG0",
    description: `Chun-li by Nicki Minaj Dance Fitness Choreography/hip hop fitness. High cardio!`,
  },
  {
    style: "hipHop",
    intensity: "high",
    views: "10KPlus",
    url: "https://www.youtube.com/embed/ZWk19OVon2k",
    description: `30-Minute Hip-Hop Fit Workout`,
  },
  {
    style: "zumba",
    intensity: "low",
    views: "lessThan5K",
    url: "https://www.youtube.com/embed/aNQUdcRKYOQ",
    description: `Zumba Burn It Up! Short Class 1 - 15 Minute Low Intensity Workout`,
  },
  {
    style: "zumba",
    intensity: "low",
    views: "5Kto10K",
    url: "https://www.youtube.com/embed/bn-Ofep3NY4",
    description: `Zumba Fitness Rush - I'm Going On`,
  },
  {
    style: "zumba",
    intensity: "low",
    views: "10KPlus",
    url: "https://www.youtube.com/embed/mkfJ4EjFYGo",
    description: `Easy zumba routine for beginners - ZUMBA Class`,
  },
  {
    style: "zumba",
    intensity: "moderate",
    views: "lessThan5K",
    url: "https://www.youtube.com/embed/EYOOHAYrnoI",
    description: `Zumba 45min Class-Moderate intensity*`,
  },
  {
    style: "zumba",
    intensity: "moderate",
    views: "5Kto10K",
    url: "https://www.youtube.com/embed/y4j9lYcHdFc",
    description: `🌟 "I'M SO EXCITED" 🌟 THE POINTER SISTERS 🌟 ZUMBA FITNESS CHOREOGRAPHY 🌟`,
  },
  {
    style: "zumba",
    intensity: "moderate",
    views: "10KPlus",
    url: "https://www.youtube.com/embed/4AXVMymNi-M",
    description: `10-minute workouts – Zumba Intermediate Level`,
  },
  {
    style: "zumba",
    intensity: "high",
    views: "lessThan5K",
    url: "https://www.youtube.com/embed/A_Vyq7w_ZKg",
    description: `Zumba Choreography - Son Pueblo (Salsa)`,
  },
  {
    style: "zumba",
    intensity: "high",
    views: "5Kto10K",
    url: "https://www.youtube.com/embed/cMjtKjKI3s8",
    description: `Adrenalina - Zumba® Fitness | Coreografia . DANCE WORKOUT + TREINO HIIT`,
  },
  {
    style: "zumba",
    intensity: "high",
    views: "10KPlus",
    url: "https://www.youtube.com/embed/gZm0PAl97b0",
    description: `Danza Kuduro(Fast Five) - Don Omar Ft. Lucenzo / Zumba® / Choreography / ZIN™ / WZS CREW / Wook`,
  },
  ];
  

  const danceStyleSelectorEl = document.querySelector("#dance-style");
  const intensitySelectorEl = document.querySelector("#intensity");
  const viewsSelectorEl= document.querySelector("#views");
  const targetEl = document.querySelector("#target-element");

  danceStyleSelectorEl.addEventListener("change", renderList)
  intensitySelectorEl.addEventListener("change", renderList)
  viewsSelectorEl.addEventListener("change", renderList)
  
  this.renderList();
  
  function renderList() {
    const filteredVideos = filterVideoList(videos);

    const carouselContainerEl = document.querySelector('#carousel-container');
    if (filteredVideos.length) {
        carouselContainerEl.style.display = "none";
    } else {
        carouselContainerEl.style.display = "block";
    }
    const videoElements = filteredVideos.map((video) => {
      const videoElString = `<iframe width="750" height="315" src="${video.url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      return `<div class="video-description">${video.description}</div>${videoElString}`;
    });
    targetEl.innerHTML = videoElements.join("<br>");
  }
  
  function filterVideoList(videos) {
    const selectedStyle = danceStyleSelectorEl.value;
    const intensity = intensitySelectorEl.value;
    const views = viewsSelectorEl.value;
    return videos.filter((video) => {
      const doesStyleMatch = video.style === selectedStyle;
      const doesIntensityMatch = video.intensity === intensity;
      const doesViewsMatch = video.views === views;
      return doesStyleMatch && doesIntensityMatch && doesViewsMatch; 
    });
  }