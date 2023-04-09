const handleSingleOrMultiInputChange = (e: Event) => {
  const singleOrMulti = e.target as HTMLSelectElement;
  const nameInput = document.getElementById("nameInput") as HTMLInputElement;

  if (singleOrMulti.value === "single") {
    nameInput.parentElement?.classList.add("hidden");
    nameInput.required = false;
  } else {
    nameInput.parentElement?.classList.remove("hidden");
    nameInput.required = true;
  }
};
export default handleSingleOrMultiInputChange;
