const $ = (selector) => document.querySelector(selector);
const nav = $("#mainNav");
$("#menuToggle").addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => nav.classList.remove("open")));
$("#year").textContent = new Date().getFullYear();

let toastTimer;
function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      toast("লেখাটি কপি হয়েছে");
    } catch {
      toast("কপি করা যায়নি — লেখাটি নির্বাচন করে কপি করুন");
    }
  });
});

let count = 0;
const digits = new Intl.NumberFormat("bn-BD");
const countEl = $("#tasbihCount");
function updateCount() { countEl.textContent = digits.format(count); }
$("#tasbihAdd").addEventListener("click", () => { count += 1; updateCount(); });
$("#tasbihReset").addEventListener("click", () => { count = 0; updateCount(); toast("কাউন্টার আবার শুরু হয়েছে"); });
updateCount();