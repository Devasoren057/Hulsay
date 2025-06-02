function updatePreview() {
  const input = document.getElementById('fontInput').value;
  document.getElementById('fontPreview').textContent = input;
}

function updateTime() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString();
  const dateStr = now.toLocaleDateString();
  document.getElementById('datetime').textContent = dateStr + ' ' + timeStr;
}

setInterval(updateTime, 1000);
updateTime();
