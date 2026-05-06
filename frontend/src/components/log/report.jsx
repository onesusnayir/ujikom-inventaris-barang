import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const Report = ({ logs }) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Judul
    doc.setFontSize(18);
    doc.text("Laporan Aktivitas Inventaris", 14, 20);

    // Tanggal generate
    doc.setFontSize(10);
    doc.text(
      `Tanggal: ${new Date().toLocaleDateString("id-ID")}`,
      14,
      28
    );

    // Tabel
    autoTable(doc, {
      startY: 35,
      head: [["No", "User", "Aksi", "Detail", "Tanggal"]],
      body: logs.map((log, index) => [
        index + 1,
        log.userId?.nama || "-",
        log.aksi,
        log.detail,
        new Date(log.createdAt).toLocaleString("id-ID"),
      ]),
      styles: {
        fontSize: 9,
      },
      headStyles: {
        fillColor: [41, 128, 185],
      },
    });

    doc.save("laporan-aktivitas.pdf");
  };

  return (
    <button
      onClick={generatePDF}
      className="bg-blue-600 mb-5 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition h-fit mt-auto"
    >
      Download Report
    </button>
  );
};

export default Report;