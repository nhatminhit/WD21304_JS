const students = [
  { name: "An", score: 8.2 },
  { name: "Bình", score: 7.5 },
  { name: "Chi", score: 9.1 },
  { name: "Duy", score: 6.8 },
  { name: "Hà", score: 8.7 },
  { name: "Khánh", score: 5.9 },
  { name: "Lan", score: 7.8 },
  { name: "Minh", score: 9.4 },
  { name: "Ngọc", score: 6.5 },
  { name: "Quân", score: 8.0 }
];
//lọc ra học sinh có điểm > 8 => dùng filter
const diemTren8 = students.filter(s=>s.score >8);
console.log(diemTren8);
// tìm học sinh có điểm cao nhất => reduce(): gộp mảng thành 1 giá trị
const maxStudent = students.reduce((max,s)=> s.score > max.score ? s: max);
console.log(maxStudent);
// Tính điểm trung bình => reduce()
const avg = students.reduce((sum,s) => sum+s.score,0)/students.length;
console.log(avg.toFixed(2));
// tạo mảng mới chứa tên hsinh
const names = students.map(s =>s.name);
console.log(names);
//sắp xếp giảm dần
const desc = [...students].sort((a,b) => b.score - a.score);
console.log(desc);
desc.forEach(s => console.log(`${s.name}: ${s.score}`));
const asc = [...students].sort((a,b)=> a.score - b.score);
console.log(asc);
