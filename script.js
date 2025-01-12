// Pilih semua elemen nav-item
const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll(".section");

// Tambahkan event listener untuk setiap nav-item
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Hapus semua class aktif
    navItems.forEach((nav) => {
      nav.classList.remove("text-[#0359A3]");
      nav.setAttribute("data-active", "false");
    });

    // Tambahkan class aktif ke elemen yang diklik
    item.classList.add("text-[#0359A3]");
    item.setAttribute("data-active", "true");
  });
});