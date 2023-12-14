let hari = "Senin";
let hari2 = "AWIKWOK";
let aktivitas;

switch (hari) {
    case "Senin":
        aktivitas = "Meeting";
        break;
    case "Selasa":
        aktivitas = "Pelatihan";
        break;
    default:
        aktivitas = "Libur";
}

console.log("Hari " + hari2 + ", aktivitas " + aktivitas);