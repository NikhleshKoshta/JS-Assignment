var reward = [
    {
        "id": 1,
        "channel": "SPORTS",
        "reward": "CHAMPIONS_LEAGUE_FINAL_TICKET"
    },
    {
        "id": 2,
        "channel": "KIDS",
        "reward": "N/A"
    },
    {
        "id": 3,
        "channel": "MUSIC",
        "reward": "KARAOKE_PRO_MICROPHONE"
    },
    {
        "id": 4,
        "channel": "NEWS",
        "reward": "N/A"
    },
    {
        "id": 5,
        "channel": "MOVIES",
        "reward": "PIRATES_OF_THE_CARIBBEAN_COLLECTION"
    }
];

var eligibility = [
    {
        "id": 1,
        "output": "CUSTOMER_ELIGIBLE",
        "result": "Return relevant rewards according to the customer's portfolio"
    },
    {
        "id": 2,
        "output": "CUSTOMER_INELIGIBLE",
        "result": "Return no rewards"
    },
    {
        "id": 3,
        "output": "TECHNICAL_FAILURE_EXCEPTION",
        "result": "Return no rewards"
    },
    {
        "id": 4,
        "output": "INVALID_ACCOUNT_NUMBER_EXCEPTION",
        "result": "Return no rewards and notify the client that the account number is invalid"
    }
];

var user_reward_eligibility = [
    {
        "customer_id": 101,
        "eligibility": 1,
        "reward": 1
    },
    {
        "customer_id": 102,
        "eligibility": 2,
        "reward": 2
    },
    {
        "customer_id": 103,
        "eligibility": 3,
        "reward": 1
    },
    {
        "customer_id": 104,
        "eligibility": 2,
        "reward": 4
    }
];