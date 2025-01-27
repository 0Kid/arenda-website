// Pilih semua elemen navbar
const navItems = document.querySelectorAll(".nav-item");

// Elemen untuk memuat konten
const contentDiv = document.getElementById("content");

// Muat konten beranda secara default saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  const defaultFile = "public/beranda.html";
  fetch(defaultFile)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Gagal memuat konten: " + response.statusText);
      }
      return response.text();
    })
    .then((data) => {
      contentDiv.innerHTML = data;

      // Tambahkan class "active" ke nav-item beranda
      const homeNavItem = document.querySelector('.nav-item[data-file="public/beranda.html"]');
      if (homeNavItem) {
        homeNavItem.classList.add("text-[#0359A3]");
      }
    })
    .catch((error) => {
      contentDiv.innerHTML = `<p class="text-red-500">Error: ${error.message}</p>`;
    });
});

// Tambahkan event listener untuk setiap nav-item
navItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault(); // Mencegah default anchor behavior

    // Ambil nama file dari atribut data-file
    const fileName = item.getAttribute("data-file");

    // Cek apakah fileName valid
    if (!fileName) {
      console.error("Atribut data-file tidak ditemukan!");
      return;
    }

    // Muat konten file menggunakan Fetch API
    fetch(fileName)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal memuat konten: " + response.statusText);
        }
        return response.text(); // Ambil konten sebagai teks
      })
      .then((data) => {
        contentDiv.innerHTML = data; // Tampilkan konten di dalam #content

        // Tambahkan class "active" ke item yang diklik
        navItems.forEach((nav) =>
          nav.classList.remove("text-[#0359A3]")
        );
        item.classList.add("text-[#0359A3]");
      })
      .catch((error) => {
        contentDiv.innerHTML = `<p class="text-red-500">Error: ${error.message}</p>`; // Tampilkan error jika gagal
      });
  });
});
