import express from 'express';
import cors from 'cors';
import fs from 'fs'; // Modul bawaan Node.js untuk mengelola file fisik

const app = express();
const PORT = 3000;
const FILE_PATH = './data.json';

app.use(cors());
app.use(express.json());

// --- FUNGSI PEMBANTU: Membaca file JSON ---
const readDataJson = () => {
    try {
        // Jika file data.json belum ada, buat baru dengan data awal default
        if (!fs.existsSync(FILE_PATH)) {
            const initialData = [
                { id: 1, name: "Indomaret", category: "Belanja", amount: -85000, type: "out" },
                { id: 2, name: "Gaji freelance", category: "Pemasukan", amount: 500000, type: "inn" },
                { id: 3, name: "Makan siang", category: "Makanan", amount: -32000, type: "out" }
            ];
            fs.writeFileSync(FILE_PATH, JSON.stringify(initialData, null, 2));
            return initialData;
        }
        // Jika file sudah ada, baca dan ubah menjadi array JavaScript
        const data = fs.readFileSync(FILE_PATH, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Gagal membaca file JSON:", error);
        return [];
    }
};

// --- FUNGSI PEMBANTU: Menulis/Menyimpan ke file JSON ---
const writeDataJson = (data) => {
    try {
        fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error("Gagal menulis ke file JSON:", error);
    }
};

// ==========================================
// RESTful API ENDPOINTS
// ==========================================

// Rute halaman utama agar tidak muncul "Cannot GET /"
app.get('/', (req, res) => {
    res.send('🚀 Server Backend Finesse Aktif dan Siap Digunakan!');
});// Endpoint 1: Mengambil semua data dari file JSON (GET)
app.get('/api/transactions', (req, res) => {
    const transactions = readDataJson(); // Ambil data dari file fisik
    res.json({
        status: "success",
        data: transactions
    });
});

// Endpoint 2: Menambah transaksi baru dan menyimpannya (POST)
app.post('/api/transactions', (req, res) => {
    const transactions = readDataJson(); // Ambil data lama
    
    const newTransaction = {
        id: transactions.length > 0 ? transactions[transactions.length - 1].id + 1 : 1,
        name: req.body.name,
        category: req.body.category || "Umum",
        amount: Number(req.body.amount),
        type: Number(req.body.amount) < 0 ? "out" : "inn"
    };

    transactions.push(newTransaction); // Tambah data baru ke dalam array
    writeDataJson(transactions); // 💾 SIMPAN PERMANEN KE FILE data.json

    res.json({
        status: "success",
        message: "Data berhasil disimpan secara permanen!",
        data: newTransaction
    });
});

// Jalankan Server
app.listen(PORT, () => {
    console.log(`✅ Backend Server Finesse berjalan di http://localhost:${PORT}`);
});