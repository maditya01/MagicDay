const date = document.querySelector('#sday');
const year = document.querySelector('#year');
const month = document.querySelector('#month');
const finaldate = document.querySelector('#finaldate');
const btn = document.querySelector('#btn');
let d, y, m;
let totalOddDay = 0;
let day;

date.addEventListener('input', (e) => {
    d = parseInt(e.target.value);
    if (e.target.value > 31 || d <= 0) {
        alert("Why you are Entering more than 31 Max Date is 31 and Min is 1");
        e.target.value = 0;
    }
});

year.addEventListener('input', (e) => {
    y = parseInt(e.target.value);

});
month.addEventListener('change', (e) => {
    m = parseInt(e.target.value);
});

function is_leap(year) {
    if (year % 400 == 0) {
        return true;
    }
    //if year is not a century.
    //and divisible by 4.
    else if (year % 4 == 0 && year % 100 != 0) {
        return true;
    } else {
        return false;
    }

};

btn.addEventListener('click', (e) => {
    if (y === undefined || m === undefined || d === undefined) {
        alert("Please Enter Given Entry");
    } else {
        let span1 = document.createElement('span');
        let head2 = document.createElement('h2');
        head2.innerText = "Your Date is" + "-" + `${d}` + "/" + `${m}` + "/" + `${y}`;
        span1.append(head2);
        finaldate.append(span1);
        //ODD day from Years
        let temp = y - 1;
        temp = temp % 400;
        let q = parseInt(temp / 100);
        if (q === 1) {
            totalOddDay += 5;
            temp = temp % 100;
        } else if (q === 2) {
            totalOddDay += 3;
            temp = temp % 100;
        } else if (q === 3) {
            totalOddDay += 1;
            temp = temp % 100;
        }
        let loop = parseInt(temp / 4);
        temp = temp - loop;
        totalOddDay += (loop) * 2 + temp;
        // console.log(totalOddDay);
        //Odd day from Months.
        let temp_m = m - 1;
        let temp_odd = 0;
        for (let i = 1; i <= temp_m; i++) {
            if (i % 2 == 1 && i < 8) {
                temp_odd += 3;
            } else if (i % 2 == 1 && i > 8) {
                temp_odd += 2;
            } else if (i == 8) {
                temp_odd += 3;
            }
            // i==odd
            else if (i == 2 && is_leap(y)) {
                temp_odd += 1;
            } else if (i % 2 == 0 && i != 2 && i < 8) {
                temp_odd += 2;
            } else if (i % 2 == 0 && i != 2 && i > 8) {
                temp_odd += 3;
            }
        }
        // console.log(temp_odd);
        totalOddDay += temp_odd;
        //Odd day from Date.
        totalOddDay += (d % 7);
        // console.log(totalOddDay);
        totalOddDay %= 7;
        let span = document.createElement('span');
        let anshead = document.createElement('h2');
        switch (totalOddDay) {
            case 0:
                console.log(totalOddDay);
                console.log("Sunday");
                anshead.innerText = " Day is :Sunday";
                break;
            case 1:
                console.log(totalOddDay);
                console.log("Monday");
                anshead.innerText = " Day is :Monday";
                break;
            case 2:
                console.log(totalOddDay);
                console.log("Tuesday");
                anshead.innerText = " Day is :Tuesday";
                break;
            case 3:
                console.log(totalOddDay);
                console.log("Wednesday");
                anshead.innerText = " Day is :Wednesday";

                break;
            case 4:
                console.log(totalOddDay);
                console.log("Thursday");
                anshead.innerText = " Day is :Thursday";

                break;
            case 5:
                console.log(totalOddDay);
                console.log("Friday");
                anshead.innerText = " Day is :Friday";

                break;
            case 6:
                console.log(totalOddDay);
                console.log("Saturday");
                anshead.innerText = " Day is :Saturday";
                break;
            default:
                break;
        }

        span.append(anshead);
        finaldate.append(span);
        totalOddDay = 0;
    }
})