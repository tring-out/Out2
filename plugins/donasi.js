let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [081261470107]
│ • Xl [087881449422]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281261470107
╰────

Ini *#caranya untuk Donasi*
*Cara Donasi*:
1.) Beli ke pulsa/ konter terdekat semisal Indomaret
2.) Bilang ke konter terdekat..
"Beli pulsa telkomsel/xl"
3.)Dan terus masukkan nomor kami 081261470107
4.) Jika sudah kirim bukti ke sini.. Terimakasih
*Kalau tidak juga gak papa*👍🏻
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
