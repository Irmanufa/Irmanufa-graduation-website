// ========== SCRIPT LENGKAP - HAPPY GRADUATION IRMANUFA ==========
// 29 anggota dengan foto di folder foto/A1.png s/d A29.png
// Fitur: Ucapan balasan untuk Kak Agung akan dikirim ke WhatsApp
// Video YouTube: MUTE TOTAL (HANYA VISUAL)
// MP3: LOOPING TERUS (BACKSOUND UTAMA)

// NOMOR WHATSAPP KAK AGUNG (085926406250)
const TARGET_WA = "6285926406250";

// Daftar 29 Nama anggota Irmanufa (tambah Baats Jauhari & Rizky Arya Widani)
const anggotaIrmanufa = [
  "Nalendra Maheswara",
  "Muhammad Fahri",
  "Fahri Maulana",
  "Rizky Pratama",
  "Rizky Akbar",
  "Reza Firman Maulana",
  "Moldy Trio Ringgo H",
  "Aditya Saputra",
  "Ilyas Sahbi",
  "M Yasin",
  "Faiz Rahardika Chandra",
  "Habib Maulana Azizi",
  "Danis Fahrudin",
  "Hikaru Rian Putra",
  "Agung Saputra",
  "Dwi Fathi Malika Lubna",
  "Lidya Febrianti",
  "Dewi Anggraeni",
  "Tasya Amelia Putri",
  "Sarah",
  "Siska Komalasari",
  "Wafiq Azizah",
  "Rizki Meliani Safitri",
  "Sisil",
  "Caskia Dwi Pratiwi",
  "Laila",
  "Abdullah Fardani",
  "Baats Jauhari",
  "Rizky Arya Widani"
];

console.log("Total Anggota:", anggotaIrmanufa.length); // 29

// ========== UCAPAN PRIBADI DARI KAK AGUNG ==========
const personalMessages = [
  "Halo Nang Mbul,, selamat Lulus Sing due Steam 77, Terimakasih sudah menjadi seseorang yg luar biasa, sudah menjadi adik yang baik, yang responsif, bisa diandalkan, sekalipun kadang ilokan tidak jelas yg terpenting terimakasih sudah memberi warna dalam hidup saya yaa,,, maaf jika kehadiran saya merusak keingian dan harapan yang kamu mau . Terimakasih sudah menjadi bagian dari keluarga ya mbul!",
  "Halo Nang pahri selamat lulus yaaaaaa, sing unggal dina selalu due gebrakan luar biasa, terimakasih sudah memberikan hal baik untuk irmas yaa maaf yen kaka akeh kurangeeeee...",
  "Eh Selamat Lulus adeee sepurane ya de yen kaka akeh salah maaf akeh akeh, jika terlalu lebay dalam memberikan hal baik dan perhatian, terimakasih atas segala hal yang pai kasih, semoga masa depane ade cerah doa baik menyertai ya de yaaa sehat selalu.",
  "Selamat Lulus Nang ii sing perjuangane selalu dadi inspirasie kaka semoga gusti allah selalu maringi ii sehat ya supaya hal sing ii pengen bisa terkabul aja klalen sholat lah nebaraken kebaikan",
  "Halo nang rizky mksh wis kieng berkegiatan irmas ya maaf yen kaka akeh salah semoga rizky terus rajin ya nangg semoga hal baik juga menyertai rizky sekeluarga",
  "Halo nang eja Selamat Luluss.... semoga hal baik menanti eja di masa depan ya,semoga selalu rajinn di setiap kegiatan baik, aja klalen ibue eja pengen eja terus berbenah demi masa depan ",
  "Nang moldy mksh ya nang wis nurut karo arahane kaka, maaf yen kaka akeh nuntut laka niat sejen selain pengen moldi dadi wong baikk, dadi baik emang mudu dipaksa nang..... ",
  "Adittttttttt kaka sada kangen kinih wkwkwk, sing pasti kaka bli weruh hal apa sing lagi adit hadapi cuma mksh ya wis ngupai sedikit warna ng irmas gas rajin maningg yuuuuuu....",
  "Abii, semoga kedepane selalu bijak ya nang dalam mencari jati diri terus hebat terus penasaran dengan hal baru dan terus jadi baik, semoga selalu inget pesane kaka yaaaa",
  "Yasinn weruh beli nang kaka belajar sabar ng yasin kuh hhe sebab kaka tau hal sing yasin rasakena ng umure yasin sing masih enommm, sing jelas yasin berhak sukses dan berhak bahagia, aja sampe merasa due keterbatasan yasin dadi nyerah ng keadaan kaka siap tolong semampue kaka ya nangg, doa terbaik anggo yasin yaaa.....",
  "Nang ais terimakasih sudah menyempatkan waktu untuk berkegiatan semoga kesibukane pais tidak menghalangi niate pais dalam berkegiatan ya terus jadi baik oke okeeeee ",
  "Selamat Lulus Abibbb Jage nang rajin kegiatan irmas maningg, semoga hal baik dunia akherat menyertai abib yaaaa",
  "Halooo nanggg danisss,Kien kih bocah kebangaan mendikakaen yaaa.....,selamat lulus danis semoga ilmu lan pengalamane manfaat, jangan jadikan keterbatasan yang danis punya sebagai penghalang untuk hidup lebih baik danis berhak sukses berhak hebat dan berhak menjadi yang terbaik ",
  "Nang karuu selamat Lulus, Semoga selalu dapat pengalaman baru ya ru , terus rendah hati dan selalu menebarkan kebaikan dalam hidup, yen due batur anyar batur lawas yakali ditinggali nang....., tetap berteman dengan siapapun yaaa ru, semoga harie karu selalu baik ",
  "Nang Agung, Seperti cita cita yg seringkali agung ceritakan meng kaka semoga terkabul se segera mungkin ya, ka agung salah satu orang yang bangga dengan segala pencapaian baik e agung semoga banyak hal baik menyerati ya nang maaf baka kaka akeh salah meng agung...",
  "Halo Lunaaa salah satu anggota irmas perempuan yg selalu punya power hhe, semoga betah di sekolah baru ya lun jangan lupakan irmas silahkan buat irmas jadi berwarna satukan anggotanya dan jadilah keluarga yg baik...",
  "Halo wong bengen Nok lidyaa maaf banyak banyak jika kaka akeh maksae ya lid, maaf juga jika banyak ucapan yang tidak berkenan di hatie lidya, semoga kedepan hidup lidya selalu jauhhhh lebih baik terus memberikan manfaat dan kebaikan.... ",
  "Nok dewi selamat lulus semoga banyak hal baik menanti di depan ya jadikan irmas sebagai tempat pulang dan belajar dari rasa lelah setelah menjalani hari hari...",
  "Halo tasya selamat lulus yaaaaa, terimakasih sudah menemani masa saya di organaisasi ini , semoga kedepan banyak hal baik yang menyertai semoga selalu ada niatan berorganisasi di irmas sekalipun saya tidak ada nanti ",
  "Halo Nok sarah, Selamat Lulusss semoga banyak hal baik menanti di depan ya semoga selalu ingin berkegiatan sehat sehat smeoga segala halnya dipermudah dunia dan akheratnya maaf baka kaka akeh salah ",
  "Siskaaa selamat lulus semoga selalu diberikan kemudahan dalam hidup, dan semoga banyak hal baik menanti di depan aja klalen ng irmasee yaaa",
  "Selamat Lulus bos cempeeee, semoga banyak hal baik meyertai ya ajijah sehat terus, semoga dipermudah dunia akherate aamiin",
  "Selamat wisuda melan sehat sehat semoga banyak hal baik menyertai, semoga selalu ingin berkgiatan irmas yaa, doa baik untuk melan dunia akherat. ",
  "halooo sisil semoga kamu bisa mengimplementasikan ilmumu di kehidupan sehari hari dan memberikanya kepada teman teman yang ada di irmas, semoga sukses dunia akherat ",
  "Halo Dong Caskia!, selamat lulus semoga hidupe selalu baik diberikan hal hal baik dan kembali rajin berkegiatan sehat sehat dan semoga di beri kemudahan dalam menjalani hidup ",
  "Halo laila Selamat Lulus semoga setelah ini bisa bergabung bersama kami ya, doa terbaik untuk kamu !",
  "Halo Nang abdul pria solo selamat lulusss jang,,,, semoga betah ng kana ya bisa dapet teman yg baik-baik, bisa berkembang lebih baik, dan semoga selalu ingat dengan pesan saya ketika masih disini.....",
  // Ucapan untuk Baats Jauhari
  "Halo Baats Jauhari, selamat lulus! Terimakasih sudah menjadi bagian dari keluarga Irmanufa. Semoga sukses selalu di jenjang berikutnya. Teruslah menjadi pribadi yang baik dan rendah hati!",
  // Ucapan untuk Rizky Arya Widani
  "Halo Nanang Bocil MBG, selamat lulus! Terimakasih atas kebersamaan dan kontribusinya selama ini. Semoga masa depan cerah selalu menantimu. Sukses selalu ya!"
];

// ========== 1. GENERATE GALERI FOTO ==========
const galleryGrid = document.getElementById("galleryGrid");
if (galleryGrid) {
  galleryGrid.innerHTML = "";
  for (let i = 0; i < anggotaIrmanufa.length; i++) {
    const nama = anggotaIrmanufa[i];
    const nomor = i + 1;
    const photoFile = `foto/A${nomor}.png`;

    const card = document.createElement("div");
    card.className = "member-card";
    card.style.animationDelay = `${i * 0.02}s`;

    card.innerHTML = `
      <div class="member-photo">
        <img src="${photoFile}" alt="${nama}">
      </div>
      <div class="member-name">${nama}</div>
      <button class="member-btn" data-index="${i}">📷 Lihat ↓</button>
    `;

    const btn = card.querySelector(".member-btn");
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openPersonalMessage(nama, photoFile, personalMessages[i]);
    });

    galleryGrid.appendChild(card);
  }
}

// ========== 2. MODAL UCAPAN PRIBADI ==========
const modal = document.getElementById("personalMessageModal");
const modalBg = document.getElementById("modalBg");
const modalName = document.getElementById("modalName");
const modalMessage = document.getElementById("modalMessage");
let currentNamaForReply = "";

function openPersonalMessage(nama, photoFile, pesan) {
  currentNamaForReply = nama;
  modalName.textContent = nama;
  modalMessage.textContent = pesan;
  modalBg.innerHTML = `<img src="${photoFile}" alt="${nama}">`;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

document.getElementById("closeModalBtn").addEventListener("click", closeModal);
document.getElementById("modalOkBtn").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// ========== 3. FUNGSI NOTIFIKASI SUKSES ==========
function showSuccessNotification() {
  const notification = document.getElementById("successNotification");
  if (!notification) return;

  notification.classList.remove("show");
  void notification.offsetWidth;
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
}

// ========== 4. KIRIM UCAPAN KE WHATSAPP ==========
const replyModal = document.getElementById("replyModal");
const replyMessageInput = document.getElementById("replyMessageInput");
const sendReplyBtn = document.getElementById("sendReplyBtn");

document.getElementById("replyToAgungBtn").addEventListener("click", () => {
  closeModal();
  setTimeout(() => {
    replyModal.classList.add("active");
    document.body.style.overflow = "hidden";
    replyMessageInput.value = "";
  }, 300);
});

function closeReplyModal() {
  replyModal.classList.remove("active");
  document.body.style.overflow = "";
}

document
  .getElementById("closeReplyModalBtn")
  .addEventListener("click", closeReplyModal);
replyModal.addEventListener("click", (e) => {
  if (e.target === replyModal) closeReplyModal();
});

// Fungsi kirim ke WhatsApp
function sendToWhatsApp(nama, pesan) {
  const waMessage = `*UCAPAN DARI ANGGOTA IRMANUFA*%0A%0A*Nama:* ${nama}%0A*Ucapan untuk Kak Agung:*%0A${pesan}%0A%0A_Dikirim dari website Happy Graduation Irmanufa_`;
  const waLink = `https://wa.me/${TARGET_WA}?text=${waMessage}`;
  window.open(waLink, "_blank");
}

sendReplyBtn.addEventListener("click", () => {
  const pesan = replyMessageInput.value.trim();
  if (pesan === "") {
    alert("Silakan tulis pesan terlebih dahulu!");
    return;
  }

  sendToWhatsApp(currentNamaForReply, pesan);
  closeReplyModal();
  showSuccessNotification();
});

// ========== 5. POPUP AWAL + BALON ==========
function createBalloons() {
  const balloonContainer = document.getElementById("balloonContainer");
  if (!balloonContainer) return;
  balloonContainer.innerHTML = "";
  for (let i = 0; i < 25; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    const randomLeft = Math.random() * 100;
    const randomDelay = Math.random() * 2.5;
    const balloonEmojis = ["🎈", "🎈", "🎓", "✨", "🎉", "🎊"];
    balloon.textContent =
      balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)];
    balloon.style.left = `${randomLeft}%`;
    balloon.style.animationDelay = `${randomDelay}s`;
    balloon.style.fontSize = `${1.3 + Math.random() * 1.2}rem`;
    balloon.style.position = "absolute";
    balloonContainer.appendChild(balloon);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("graduationPopup");
  if (popup) {
    createBalloons();
    popup.style.display = "flex";
  }
});

// ========== 6. MUSIK MP3 (BACKSOUND) + VIDEO YOUTUBE (MUTE TOTAL) ==========
const bgMusic = document.getElementById("bgMusic");
const musicToggleBtn = document.getElementById("musicToggleBtn");
const musicIcon = document.getElementById("musicIcon");
const musicText = document.getElementById("musicText");
const musicStatus = document.getElementById("musicStatus");

let isMusicPlaying = false;
let autoPlayAttempted = false;

// Pastikan video YouTube benar-benar MUTE
const youtubeVideo = document.getElementById("youtubeVideo");
if (youtubeVideo) {
  const iframeSrc = youtubeVideo.src;
  if (!iframeSrc.includes('mute=1')) {
    youtubeVideo.src = iframeSrc.replace('autoplay=1', 'autoplay=1&mute=1');
  }
  console.log("🎬 Video YouTube dalam mode MUTE TOTAL - tidak akan mengeluarkan suara");
}

// Fungsi untuk memutar musik MP3 (looping terus)
function startMusic() {
  if (isMusicPlaying) return;
  
  bgMusic.currentTime = 0;
  bgMusic.loop = true;
  
  bgMusic.play().then(() => {
    isMusicPlaying = true;
    musicIcon.textContent = "🔊";
    musicText.textContent = "Matikan Musik";
    musicStatus.innerHTML = "🎵 Musik latar (MP3) sedang diputar (loop) 🎵";
    console.log("🎵 Musik MP3 looping - berjalan sebagai backsound utama");
  }).catch((err) => {
    console.log("Gagal play MP3:", err);
    musicStatus.innerHTML = "⚠️ Klik tombol untuk memutar musik ⚠️";
  });
}

function stopMusic() {
  bgMusic.pause();
  isMusicPlaying = false;
  musicIcon.textContent = "🔇";
  musicText.textContent = "Putar Musik";
  musicStatus.innerHTML = "🎵 Musik MP3 dijeda. Klik tombol untuk memutar lagi";
  console.log("🎵 Musik MP3 dihentikan");
}

if (musicToggleBtn) {
  musicToggleBtn.addEventListener("click", () => {
    if (isMusicPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  });
}

const closePopupBtn = document.getElementById("closePopupBtn");
if (closePopupBtn) {
  closePopupBtn.addEventListener("click", () => {
    const popup = document.getElementById("graduationPopup");
    if (popup) {
      popup.style.display = "none";
      if (!autoPlayAttempted && !isMusicPlaying) {
        autoPlayAttempted = true;
        setTimeout(() => {
          startMusic();
          console.log("🎬 Video YouTube berjalan (MUTE) + 🎵 Musik MP3 looping sebagai backsound");
        }, 300);
      }
    }
  });
}

document.body.addEventListener("click", function initMusicOnAnyClick() {
  const popup = document.getElementById("graduationPopup");
  const isPopupVisible = popup && popup.style.display === "flex";
  
  if (!autoPlayAttempted && !isMusicPlaying && !isPopupVisible) {
    autoPlayAttempted = true;
    setTimeout(() => {
      startMusic();
      console.log("🎵 Fallback: Musik MP3 dimulai dari klik user");
    }, 100);
  }
}, { once: true });

setInterval(() => {
  if (isMusicPlaying && bgMusic.paused) {
    console.log("⚠️ Musik terdeteksi berhenti, mencoba memutar ulang...");
    bgMusic.play().catch(e => console.log("Gagal restart:", e));
  }
}, 5000);

console.log("🎓 Happy Graduation - 29 anggota Irmanufa | Website by Kak Agung Ubaidillah");
console.log("📱 Ucapan balasan akan dikirim ke WhatsApp: 0859-2640-6250");
console.log("✨ Notifikasi sukses akan muncul dengan animasi keren!");
console.log("🎬 Video YouTube: MUTE TOTAL - HANYA VISUAL");
console.log("🎵 Musik MP3: LOOPING TERUS - BACKSOUND UTAMA");
console.log("✅ Keduanya berjalan harmonis - MP3 yang bersuara, video hanya visual!");
console.log("👥 Anggota baru: Baats Jauhari & Rizky Arya Widani (Total 29 anggota)");
