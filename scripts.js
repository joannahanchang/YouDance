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
      style: "hipHop",
      intensity: "high",
      views: "doesNotMatter",
      url: "https://www.youtube.com/embed/ZWk19OVon2k",
      description: `Get ready to unleash your inner dance and fitness beast with Hip-Hop Fit creator Mike Peele! This class is for everyone from beginners to advanced. Just get ready to push your mind and body to the next level!`,
    },
    {
        style: "hipHop",
        intensity: "high",
        views: "doesNotMatter",
        url: "https://www.youtube.com/embed/GE3SoUQ5GwU",
    },
    {
      style: "zumba",
      intensity: "high",
      views: "lesThan1K",
      url: "https://www.youtube.com/watch?v=GV2qtIOrMgs",
    },
    {
      style: "salsa",
      intensity: "low",
      views: "1K-5K",
      url: "https://www.youtube.com/watch?v=8DZktowZo_k",
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