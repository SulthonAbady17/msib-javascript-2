function submit() {
  const form = document.getElementById("form");
  const name = form.name.value;
  const job = form.job.value;
  const hobby = form.hobby.value;

  const invalid = "Maaf, Isi Form Dahulu!";
  const valid = `Nama : ${name}, Pekerjaan : ${job}, Hobi : ${hobby}`;
	
  const result = name && job && hobby != "" ? valid : invalid;
  document.getElementById("result").innerText = result;
}
