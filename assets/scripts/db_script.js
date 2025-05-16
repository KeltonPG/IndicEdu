const selectedStates = new Set();
let selectedIndicator = null;

const stateOptions = document.querySelectorAll(".state-option");
const indicatorOptions = document.querySelectorAll(".indicator-option");
const compareButton = document.getElementById("compareButton");
const displaySelection = document.getElementById("selection-display");

function updateSelectionDisplay() {
  const statesText =
    [...selectedStates].join(", ") || "Nenhum estado selecionado";
  const indicatorText = selectedIndicator
    ? selectedIndicator.toUpperCase()
    : "Nenhum indicador selecionado";

  displaySelection.innerHTML = `
      <p><strong>Indicador:</strong> ${indicatorText}</p>
      <p><strong>Estados:</strong> ${statesText}</p>
    `;
}

stateOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const state = option.dataset.state;

    if (selectedStates.has(state)) {
      selectedStates.delete(state);
      option.style.backgroundColor = "";
    } else {
      selectedStates.add(state);
      option.style.backgroundColor = "#ffd180";
    }

    updateSelectionDisplay();
  });
});

indicatorOptions.forEach((option) => {
  option.addEventListener("click", () => {
    indicatorOptions.forEach((o) => (o.style.backgroundColor = ""));
    selectedIndicator = option.dataset.indicator;
    option.style.backgroundColor = "#ffd180";
    updateSelectionDisplay();
  });
});

compareButton.addEventListener("click", () => {
  if (!selectedIndicator || selectedStates.size === 0) {
    alert("Selecione ao menos 1 estado e 1 indicador.");
    return;
  }

  alert(
    "Simulação: Comparando " +
      [...selectedStates].join(", ") +
      " no indicador " +
      selectedIndicator.toUpperCase()
  );
});

updateSelectionDisplay();
