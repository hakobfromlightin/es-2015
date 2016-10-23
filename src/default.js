function defaultDiscountRate() {
    return .10;
}

function applyDiscount(cost, discount = defaultDiscountRate()) {
    // discount = discount || .10; //es5
    return cost - (cost * discount)
}

alert(applyDiscount());