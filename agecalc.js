let userDate = document.getElementById("date");

// Set max date for the input
userDate.max = new Date().toISOString().split("T")[0];

function calculateAge() {
    let userAge = document.getElementById("age");
    userAge.innerHTML = "";

    let birthDate = new Date(userDate.value);

    // Check if the date is invalid
    if (isNaN(birthDate.getTime())) {
        let userError = document.getElementById("error");
        userError.innerHTML = "Date is Invalid";
    } else {
        let userError = document.getElementById("error");
        userError.innerHTML = "";

        let userDay = birthDate.getDate();
        let userMonth = birthDate.getMonth() + 1; // Months are zero-indexed
        let userYear = birthDate.getFullYear();

        let todayDate = new Date();
        let todayDay = todayDate.getDate();
        let todayMonth = todayDate.getMonth() + 1; // Months are zero-indexed
        let todayYear = todayDate.getFullYear();

        let ageDay, ageMonth, ageYear;

        ageYear = todayYear - userYear;

        if (todayMonth >= userMonth) {
            ageMonth = todayMonth - userMonth;
        } else {
            ageYear--;
            ageMonth = 12 + todayMonth - userMonth;
        }

        if (todayDay >= userDay) {
            ageDay = todayDay - userDay;
        } else {
            ageMonth--;
            ageDay = getDaysInMonth(userYear, userMonth) + todayDay - userDay;
        }

        // Adjust age if the ageMonth becomes negative
        if (ageMonth < 0) {
            ageMonth = 11;
            ageYear--;
        }

        // Display the result
        userAge.innerHTML = `Your age is: <span>${ageYear}</span> years <span>${ageMonth}</span> months <span>${ageDay}</span> days`;
    }

    // Helper function to get the number of days in a month
    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }
}

script.js



