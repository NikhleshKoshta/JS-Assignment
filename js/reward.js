
function getCustomerReward() {
    var customer_id = $("#customerId").val();
    if (isCustomerValid(customer_id) >= 0) {
        var result = checkEligibility(customer_id);
        var inEligible = [2, 3];
        if (inEligible.indexOf(result.id) >= 0) {
            $("#customerResult").text(result.result);
            $("#rewardFor").text('');
            $("#award").text('');
            $("#customerResult").css("color", "red");
        } else {
            var userRecord = user_reward_eligibility.find(x => x.customer_id === parseInt(customer_id));
            var reward = rewardsService(customer_id, userRecord.eligibility, userRecord.reward);
            $("#customerResult").text(reward.eligibilityResult);
            $("#rewardFor").text(`You have awared for subscribed the ${reward.channel} channel`);
            $("#award").text(`${reward.reward}`);
            $("#customerResult").css("color", "green");
            $("#rewardFor").css("color", "green");
            $("#award").css("color", "green");
        }
    } else {
        var record = eligibility.find(x => x.id == 4)
        $("#customerResult").text(record.result);
        $("#rewardFor").text('');
        $("#award").text('');
        $("#customerResult").css("color", "red");
    }
}

var isCustomerValid = (customerId) => {
    var isValid = user_reward_eligibility.findIndex(x => x.customer_id === parseInt(customerId));
    return isValid;
}

var checkEligibility = (customerId) => {
    var record = user_reward_eligibility.find(x => x.customer_id === parseInt(customerId));
    var eligibilityResult = eligibility.find(x => x.id === record.eligibility);
    return eligibilityResult;
}

var rewardsService = (customerId, eligible, rewardId) => {
    var usereligiblilty = eligibility.find(x => x.id === parseInt(eligible));
    var userReward = reward.find(x => x.id === parseInt(rewardId));
    return {
        "eligibilityResult": usereligiblilty.result,
        "channel": userReward.channel,
        "reward": userReward.reward
    };
}