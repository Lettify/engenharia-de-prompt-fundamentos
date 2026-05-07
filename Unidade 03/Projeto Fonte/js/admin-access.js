const ADMIN_URL = "admin.html";
const SECRET_SEQUENCE = ["a", "d", "m", "i", "n"];
const SECRET_TIMEOUT = 1500;

const isSequenceKey = (key) => /^[a-z]$/i.test(key);

const isEditableTarget = (target) =>
  Boolean(
    target?.closest("input, textarea, select, [contenteditable='true']")
  );

let keyBuffer = [];
let keyTimer = null;

const resetKeyBuffer = () => {
  keyBuffer = [];
  if (keyTimer) {
    window.clearTimeout(keyTimer);
    keyTimer = null;
  }
};

document.addEventListener("keydown", (event) => {
  if (isEditableTarget(event.target)) {
    return;
  }

  if (!isSequenceKey(event.key)) {
    return;
  }

  const key = event.key.toLowerCase();
  keyBuffer.push(key);
  if (keyBuffer.length > SECRET_SEQUENCE.length) {
    keyBuffer.shift();
  }

  if (keyBuffer.join("") === SECRET_SEQUENCE.join("")) {
    resetKeyBuffer();
    window.location.href = ADMIN_URL;
    return;
  }

  window.clearTimeout(keyTimer);
  keyTimer = window.setTimeout(resetKeyBuffer, SECRET_TIMEOUT);
});

document.querySelectorAll("[data-admin-trigger]").forEach((trigger) => {
  trigger.addEventListener("click", (event) => {
    if (!event.shiftKey) {
      return;
    }

    event.preventDefault();
    window.location.href = ADMIN_URL;
  });
});
