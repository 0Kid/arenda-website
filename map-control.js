// Pastikan DOM sudah siap
document.addEventListener('DOMContentLoaded', () => {
    const blurOverlay = document.getElementById('blur-overlay');
    const removeBlurBtn = document.getElementById('remove-blur');
  
    // Event untuk menghilangkan blur
    removeBlurBtn.addEventListener('click', () => {
      blurOverlay.classList.add('hidden'); // Tambahkan class hidden
    });
  
    // Kembalikan blur setelah beberapa waktu (contoh: 5 detik)
    setTimeout(() => {
      blurOverlay.classList.remove('hidden'); // Hapus class hidden
    }, 5000); // 5000 ms = 5 detik
  });
  
  console.log("Hellow");