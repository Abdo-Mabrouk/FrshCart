
export function checkPasswordStrength(password) {
    let strength = 0;
    let feedback = { text: "", background: "", width: "" };

    if (password.length > 8) strength++;
    if (password.length > 12) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*()?]/.test(password)) strength++;

    switch (strength) {
    case 1:
        feedback.text = "Very Weak";
        feedback.background = "bg-red-500";
        feedback.width = "w-1/6";
        break;
    case 2:
        feedback.text = "Weak";
        feedback.background = "bg-orange-400";
        feedback.width = "w-2/6";
        break;
    case 3:
        feedback.text = "Weak";
        feedback.background = "bg-orange-400";
        feedback.width = "w-2/6";
        break;
    case 4:
        feedback.text = "Medium";
        feedback.background = "bg-yellow-400";
        feedback.width = "w-3/6";
        break;
    case 5:
        feedback.text = "Strong";
        feedback.background = "bg-green-500";
        feedback.width = "w-4/6";
        break;
    case 6:
        feedback.text = "Very Strong";
        feedback.background = "bg-green-700";
        feedback.width = "w-full";
        break;
    }

    return feedback;
}



export function calcDiscount({price,priceAfterDiscount}) {
    const Discount = Math.round(((price-priceAfterDiscount)/price)*100) ;
    return Discount
}



export function calcTimeLeft(targetDate) {
    if (!targetDate) targetDate = new Date().setHours(23, 59, 59, 999);

    const ONE_HOUR_MS=60*60*1000;
    const ONE_MINUTE_MS=60*1000;
    const ONE_SECOND_MS=1000;

    const timeLeft = targetDate - new Date().getTime();

    if (timeLeft>0) {
        const hours= Math.trunc(timeLeft/ONE_HOUR_MS);
        const minutes= Math.trunc((timeLeft % ONE_HOUR_MS) / ONE_MINUTE_MS);
        const seconds= Math.trunc((((timeLeft % ONE_HOUR_MS) % ONE_MINUTE_MS) / ONE_SECOND_MS));
        return{hours,minutes,seconds};
    } else {
        return{hours:0,minutes:0,seconds:0};
    }
}


