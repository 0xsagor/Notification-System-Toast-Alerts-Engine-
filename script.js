function notify(type, message) {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerText = message;

  document.getElementById("toasts").appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
