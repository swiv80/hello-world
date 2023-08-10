const columns = document.querySelectorAll('.column');
const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

columns.forEach(column => {
  let text = "";
  for(let i = 0; i < 50; i++) {
    text += symbols.charAt(Math.floor(Math.random() * symbols.length));
  }
  column.innerHTML = text;
  let speed = Math.random() * 100 + 50;
  setInterval(() => {
    text = text.substring(1) + symbols.charAt(Math.floor(Math.random() * symbols.length));
    column.innerHTML = text;
  }, speed);
});
