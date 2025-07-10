const cr_dsa = 4;
const cr_dbms = 4;
const cr_gt = 3;
const cr_iwvc = 3;
const cr_Ooad = 3;

const total_credits = cr_dsa + cr_dbms + cr_gt + cr_iwvc + cr_Ooad;

function gradeToPoint(grade, credit) {
    grade = grade.toLowerCase();
    switch (grade) {
        case 'a': return 4 * credit;
        case 'b+': return 3.5 * credit;
        case 'b': return 3 * credit;
        case 'c+': return 2.5 * credit;
        case 'c': return 2 * credit;
        case 'd+': return 1.5 * credit;
        case 'd': return 1 * credit;
        case 'f': return 0;
        default: return 0;
    }
}

let btn1 = document.querySelector('.button1');
let button = document.querySelector('.button');
let result = document.querySelector('.result');

button.addEventListener('click', function () {
    // Read grades freshly on each click
    let gr_dsa = document.getElementById('dsa').value;
    let gr_dbms = document.getElementById('idbms').value;
    let gr_gt = document.getElementById('gt').value;
    let gr_iwvc = document.getElementById('iwvc').value;
    let gr_Ooad = document.getElementById('ooad').value;

    // Calculate grade points
    let p_dsa = gradeToPoint(gr_dsa, cr_dsa);
    let p_dbms = gradeToPoint(gr_dbms, cr_dbms);
    let p_gt = gradeToPoint(gr_gt, cr_gt);
    let p_iwvc = gradeToPoint(gr_iwvc, cr_iwvc);
    let p_Ooad = gradeToPoint(gr_Ooad, cr_Ooad);

    let total_points = p_dsa + p_dbms + p_gt + p_iwvc + p_Ooad;
    let gpa = total_points / total_credits;

    result.innerHTML = `GPA is: ${gpa.toFixed(2)}`;
    result.style.display = 'block';
    btn1.style.display = 'flex';
});

// Click event on btn1
btn1.addEventListener('mouseenter', function () {
    btn1.innerText = "hover on the form";
    setTimeout(() => {
        btn1.style.display = 'none';
    }, 2000);
});
