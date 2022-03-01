let text = ["1. Mencuci Tangan", "2. Menggunakan masker", "3. Menjaga Jarak", "4. Menjauhi kerumunan", "5. Mengurangi mobilisasi"]

i = 0
function berubah() {
  if(i > (text.length - 1)) i = 0
  document.getElementById("5m").innerHTML = text[i]
  i++
  setTimeout(berubah, 1500)
}

function load() {
  document.getElementById("nama").innerHTML = localStorage["nama"]
}
