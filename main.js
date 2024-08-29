document.addEventListener("DOMContentLoaded", function () {
    const energyAuditsElement = document.getElementById("energy-audits");
    const serenityTextElement = document.getElementById("serenity-text");

    energyAuditsElement.addEventListener("mouseover", function () {
      serenityTextElement.innerHTML = `
    <span class="simplicity">Simplicity</span> is our <br>
    <span class="sophistication">ultimate sophistication.</span>
  `;
      serenityTextElement.classList.add("new-content");
    });

    energyAuditsElement.addEventListener("mouseout", function () {
      serenityTextElement.innerHTML = `
    <span>Your </span>
    <span class="serenity">serenity</span>
    <span> is our </span>
    <span class="serenity"> <br />motto</span>
  `;
      serenityTextElement.classList.remove("new-content");
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const energyAuditsElement = document.querySelector(".service-items1");
    const leedSimulationsElement = document.querySelector(".service-items");
    const serviceItems = document.querySelector(".service-items");
    const serviceItems1 = document.querySelector(".service-items1");
    const serviceItems2 = document.querySelector(".service-items2");
    const serenityTextElement = document.getElementById("serenity-text");

    // Hover effect for "+150 energy audits"
    energyAuditsElement.addEventListener("mouseover", function () {
      serviceItems.style.background =
        "linear-gradient(100.42deg, rgba(70, 70, 70, 0.16), rgba(255, 255, 255, 0.16) 43.8%, rgba(103, 103, 103, 0.16))";
      serviceItems1.style.background = "linear-gradient(#a1c738, #a1c738)";
      serviceItems2.style.background =
        "linear-gradient(100.42deg, rgba(70, 70, 70, 0.16), rgba(255, 255, 255, 0.16) 43.8%, rgba(103, 103, 103, 0.16))";

      // Change text color
      leedSimulationsElement.querySelector(".p").style.color = "#96FC04";
      energyAuditsElement.querySelector(".enlightened").style.color =
        "#FFFFFF";
    });

    energyAuditsElement.addEventListener("mouseout", function () {
      serviceItems.style.background = "linear-gradient(#a1c738, #a1c738)";
      serviceItems1.style.background =
        "linear-gradient(100.42deg, rgba(70, 70, 70, 0.16), rgba(255, 255, 255, 0.16) 43.8%, rgba(103, 103, 103, 0.16))";
      serviceItems2.style.background =
        "linear-gradient(100.42deg, rgba(70, 70, 70, 0.16), rgba(255, 255, 255, 0.16) 43.8%, rgba(103, 103, 103, 0.16))";

      // Revert text color
      leedSimulationsElement.querySelector(".p").style.color = "#FFFFFF";
      energyAuditsElement.querySelector(".enlightened").style.color =
        "#96FC04";
    });

    // Hover effect for "+ 500,000 m² Enlightened"
    serviceItems2.addEventListener("mouseover", function () {
      serenityTextElement.innerHTML =
        "We're <span class='highlight'>passionate</span> about sharing our <span class='highlight'>experience</span> to create a <span class='highlight'>better</span> world.";
      serviceItems2.style.background = "linear-gradient(#a1c738, #a1c738)";
      serviceItems.style.background =
        "linear-gradient(100.42deg, rgba(70, 70, 70, 0.16), rgba(255, 255, 255, 0.16) 43.8%, rgba(103, 103, 103, 0.16))";
      serviceItems1.style.background =
        "linear-gradient(100.42deg, rgba(70, 70, 70, 0.16), rgba(255, 255, 255, 0.16) 43.8%, rgba(103, 103, 103, 0.16))";

      // Change text color
      leedSimulationsElement.querySelector(".p").style.color = "#96FC04";
      energyAuditsElement.querySelector(".enlightened").style.color =
        "#96FC04";
      serviceItems2.querySelector(".enlightened").style.color = "#FFFFFF";
    });

    serviceItems2.addEventListener("mouseout", function () {
      serenityTextElement.innerHTML = `
    <span>Your </span>
    <span class="serenity">serenity</span>
    <span> is our </span>
    <span class="serenity">motto</span>
  `;
      serviceItems2.style.background =
        "linear-gradient(100.42deg, rgba(70, 70, 70, 0.16), rgba(255, 255, 255, 0.16) 43.8%, rgba(103, 103, 103, 0.16))";
      serviceItems.style.background = "linear-gradient(#a1c738, #a1c738)";
      serviceItems1.style.background =
        "linear-gradient(100.42deg, rgba(70, 70, 70, 0.16), rgba(255, 255, 255, 0.16) 43.8%, rgba(103, 103, 103, 0.16))";

      // Revert text color
      leedSimulationsElement.querySelector(".p").style.color = "#FFFFFF";
      energyAuditsElement.querySelector(".enlightened").style.color =
        "#96FC04";
      serviceItems2.querySelector(".enlightened").style.color = "#96FC04";
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const serviceItems2Element = document.querySelector(".service-items2");
    const serenityTextElement = document.getElementById("serenity-text");

    serviceItems2Element.addEventListener("mouseover", function () {
      serenityTextElement.innerHTML = `
    We're <span class="highlight">passionate</span> about sharing our 
    <span class="highlight">experience</span> to create a 
    <span class="highlight">better</span> world.
  `;
      serenityTextElement.classList.add("new-content1");
    });

    serviceItems2Element.addEventListener("mouseout", function () {
      serenityTextElement.innerHTML = `
    <span>Your </span>
    <span class="serenity">serenity</span>
    <span> is our </span>
    <span class="serenity"> <br />motto</span>
  `;
      serenityTextElement.classList.remove("new-content1");
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    const expertGrid = document.querySelector(".expert-grid");

    prevButton.addEventListener("click", function () {
      expertGrid.scrollBy({
        left: -expertGrid.offsetWidth / 2, // Scroll by half the width of the container
        behavior: "smooth",
      });
    });

    nextButton.addEventListener("click", function () {
      expertGrid.scrollBy({
        left: expertGrid.offsetWidth / 2, // Scroll by half the width of the container
        behavior: "smooth",
      });
    });
  });