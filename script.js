let time = 600; // 10 دقائق
let timer = document.getElementById("timer");

let countdown = setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    timer.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    time--;

    if (time < 0) {
        clearInterval(countdown);
        alert("انتهى الوقت");
        document.getElementById("quizForm").submit();
    }
}, 1000);

// حفظ النتائج
document.getElementById("quizForm").addEventListener("submit", function(e){
    e.preventDefault();

    let result = {
        name: document.getElementById("name").value,
        timeUsed: 600 - time,
        date: new Date().toLocaleString()
    };

    let results = JSON.parse(localStorage.getItem("results")) || [];
    results.push(result);
    localStorage.setItem("results", JSON.stringify(results));

    alert("تم إرسال إجابتك");
    this.reset();
});
