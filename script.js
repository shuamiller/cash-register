function checkCashRegister(price, cash, cid) {
  let change = [];
  let pennyChange = 0.0;
  let nickelChange = 0.0;
  let dimeChange = 0.0;
  let quarterChange = 0.0;
  let dollarChange = 0;
  let fiveDollarChange = 0;
  let tenDollarChange = 0;
  let twentyDollarChange = 0;
  let hundredDollarChange;
  let totalChange = cash - price;

  while (totalChange > 0) {
    if (totalChange % 100 === 0) {
      if (totalChange < cid[8][1]) {
        while (totalChange > 0) {
          totalChange -= 100;
          hundredDollarChange += 100;
        }
        change.unshift(["ONE HUNDRED", hundredDollarChange]);
      }
    } else if (totalChange % 20 === 0) {
      if (totalChange < cid[7][1]) {
        while (!totalChange % 100 === 0) {
          totalChange -= 20;
          twentyDollarChange += 20;
        }
        change.unshift(["TWENTY", twentyDollarChange]);
      }
    } else if (totalChange % 10 === 0) {
      if (totalChange < cid[6][1]) {
        while (!totalChange % 20 === 0) {
          totalChange -= 10;
          tenDollarChange += 10;
        }
        change.unshift(["TEN", tenDollarChange]);
      }
    } else if (totalChange % 5 === 0) {
      if (totalChange < cid[5][1]) {
        while (!totalChange % 10 === 0) {
          totalChange -= 5;
          fiveDollarChange += 5;
        }
        change.unshift(["FIVE", fiveDollarChange]);
      }
    } else if (totalChange % 1 === 0) {
      if (totalChange < cid[4][1]) {
        while (!totalChange % 5 === 0) {
          totalChange -= 1;
          dollarChange += 1;
        }
        change.unshift(["ONE", dollarChange]);
      }
    } else if (totalChange % .25 === 0) {
      if (totalChange < cid[3][1]) {
        while (!totalChange % 1 === 0) {
          totalChange -= .25
          quarterChange += .25
        }
        change.unshift(["QUARTER", quarterChange]);
      }
    } else if (totalChange % .1 === 0) {
      if (totalChange < cid[2][1]) {
        while (!totalChange % .25 === 0) {
          totalChange -= .1;
          dimeChange += .1;
        }
        change.unshift(["DIME", dimeChange]);
      }
    } else if (totalChange % .05 === 0) {
      if (totalChange < cid[1][1]) {
        while (!totalChange % .1 === 0) {
          totalChange -= .05;
          nickelChange += .05;
        }
        change.unshift(["NICKEL", nickelChange])
      }
    } else if (totalChange % .01 === 0) {
      if (totalChange < cid[0][1]) {
        while (!totalChange % .05) {
          totalChange -= .01;
          pennyChange += .01;
        }
        change.unshift(["PENNY", pennyChange])
      }
    } else {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
  }

  if (change === cid) {
    return {status: "CLOSED", change: cid};
  } else {
    return change;
  }
}