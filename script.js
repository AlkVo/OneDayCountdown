const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const percents = document.getElementById('percents');
const countdown = document.getElementById('countdown');
const date = document.getElementById('date');
const loading = document.getElementById('loading');

function calculate() {
  // 当前的时间
  const currentTime = new Date();

  // 今天的日期 时分秒为 0 0 0
  const tody = new Date(
    currentTime.getFullYear(),
    currentTime.getMonth(),
    currentTime.getDate()
  );

  // 明天的日期 时分秒为 0 0 0
  const tomorrow = new Date(tody);
  tomorrow.setDate(tody.getDate() + 1);

  //   计算今天与昨天的时间差
  const elapsed = tomorrow - currentTime;

  const h = Math.floor(elapsed / 1000 / 60 / 60) % 24;
  const m = Math.floor(elapsed / 1000 / 60) % 60;
  const s = Math.floor(elapsed / 1000) % 60;

  const p = Math.floor((elapsed * 100) / (tomorrow - tody));

  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;
  percents.innerHTML = p < 10 ? '0' + p : p;
  date.innerText = `${currentTime.getFullYear()}-${
    currentTime.getMonth() + 1
  }-${currentTime.getDate()}`;
}

setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);

setInterval(calculate, 1000);
