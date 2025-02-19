// Daftar tugas
const assignments = [
	{ title: "Tugas 1", dueDate: "2023-02-15" },
	{ title: "Tugas 2", dueDate: "2023-02-22" },
	{ title: "Tugas 3", dueDate: "2023-02-29" }
];

// Daftar gambar untuk album kelas
const images = [
	"IMG20240623062049.jpg",
	"image2.jpg",
	"image3.jpg",
	"image4.jpg",
	"image5.jpg",
	"image6.jpg"
];

// Daftar jadwal pelajaran
const schedule = [
	{ date: "2023-02-15", time: "09:00 WIB", subject: "Matematika" },
	{ date: "2023-02-16", time: "10:00 WIB", subject: "Ilmu Pengetahuan Alam" },
	{ date: "2023-02-17", time: "11:00 WIB", subject: "Bahasa Indonesia" }
];

// Populasi data ke halaman
document.addEventListener("DOMContentLoaded", () => {
	// Populasi tugas
	const assignmentList = document.getElementById("assignments");
	assignments.forEach((assignment) => {
		const card = document.createElement("div");
		card.className = "card";
		card.innerHTML = `
			<h3>${assignment.title}</h3>
			<p>Deadline: ${assignment.dueDate}</p>
		`;
		assignmentList.appendChild(card);
	});

	// Populasi album kelas
	const gallery = document.querySelector(".gallery");
	images.forEach((image) => {
		const img = document.createElement("img");
		img.src = image;
		img.alt = `Gambar ${images.indexOf(image) + 1}`;
		gallery.appendChild(img);
	});

	// Populasi jadwal pelajaran
	const scheduleTable = document.querySelector(".schedule-table tbody");
	schedule.forEach((lesson) => {
		const row = document.createElement("tr");
		row.innerHTML = `
			<td>${lesson.date}</td>
			<td>${lesson.time}</td>
			<td>${lesson.subject}</td>
		`;
		scheduleTable.appendChild(row);
	});

	// Animasi saat halaman dimuat
	document.querySelectorAll("section").forEach((section) => {
		section.style.opacity = "0";
		section.style.transform = "translateY(20px)";
	});

	setTimeout(() => {
		document.querySelectorAll("section").forEach((section) => {
			section.style.opacity = "1";
			section.style.transform = "translateY(0)";
			section.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
		});
	}, 500);
});