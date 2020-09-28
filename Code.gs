/**
* Calculates Call Price using the Black-Scholes Model.
*
* @param {1} input the spot price of the underlying asset.
* @param {2} input the strike price of the option.
* @param {3} input the the volatility of returns of the underlying asset.
* @param {4} input the risk-free interest rate.
* @param {5} input the dividend rate as a percentage.
* @param {6} input the time to maturity in days .
* @return the price of a Call.
* @customfunction
*/
function CALLPRICE(price, strike, volatility, interest, dividend, days) {
  var xert = Math.exp(-interest *(days/365)) * strike;
  var xeqt = Math.exp(-dividend *(days/365)) * price;
  var nD1 = NORMDIST_(D1_(price, strike, volatility, interest, dividend, days));
  var nNegD1 = NORMDIST_(-D1_(price, strike, volatility, interest, dividend, days));
  
  return xeqt * nD1 - xert * nNegD1;
}

/**
* Calculates an Option's Delta using the Black-Scholes Model.
*
* @param {1} input the spot price of the underlying asset.
* @param {2} input the strike price of the option.
* @param {3} input the the volatility of returns of the underlying asset.
* @param {4} input the risk-free interest rate.
* @param {5} input the dividend rate as a percentage.
* @param {6} input the time to maturity in days.
* @param {7} input the type of option, Call or Put.
* @return the Black-Scholes calculation for an option's Delta.
* @customfunction
*/
function OPTIONDELTA(price, strike, volatility, interest, dividend, days, optiontype) {
  var eqt = Math.exp(-dividend *(days/365));
  
  var nd1 = NORMDIST_(D1_(price, strike, volatility, interest, dividend, days));
  
  if (optiontype == "Put")
  {
    nd1 = nd1 - 1;
  }
  
  return eqt * nd1;
}

/**
* Calculates an Option's Gamma using the Black-Scholes Model.
*
* @param {1} input the spot price of the underlying asset.
* @param {2} input the strike price of the option.
* @param {3} input the the volatility of returns of the underlying asset.
* @param {4} input the risk-free interest rate.
* @param {5} input the dividend rate as a percentage.
* @param {6} input the time to maturity in days.
* @param {7} input the type of option, Call or Put.
* @return the Black-Scholes calculation for an option's Gamma.
* @customfunction
*/
function OPTIONGAMMA(price, strike, volatility, interest, dividend, days, optiontype) {
}


/**
* Calculates an Option's Theta using the Black-Scholes Model.
*
* @param {1} input the spot price of the underlying asset.
* @param {2} input the strike price of the option.
* @param {3} input the the volatility of returns of the underlying asset.
* @param {4} input the risk-free interest rate.
* @param {5} input the dividend rate as a percentage.
* @param {6} input the time to maturity in days.
* @param {7} input the type of option, Call or Put.
* @return the Black-Scholes calculation for an option's Theta.
* @customfunction
*/
function OPTIONTHETA(price, strike, volatility, interest, dividend, days, optiontype) {
}


/**
* Calculates an Option's Vega using the Black-Scholes Model.
*
* @param {1} input the spot price of the underlying asset.
* @param {2} input the strike price of the option.
* @param {3} input the the volatility of returns of the underlying asset.
* @param {4} input the risk-free interest rate.
* @param {5} input the dividend rate as a percentage.
* @param {6} input the time to maturity in days.
* @param {7} input the type of option, Call or Put.
* @return the Black-Scholes calculation for an option's Vega.
* @customfunction
*/
function OPTIONVEGA(price, strike, volatility, interest, dividend, days, optiontype) {
}


/**
* Calculates an Option's Rho using the Black-Scholes Model.
*
* @param {1} input the spot price of the underlying asset.
* @param {2} input the strike price of the option.
* @param {3} input the the volatility of returns of the underlying asset.
* @param {4} input the risk-free interest rate.
* @param {5} input the dividend rate as a percentage.
* @param {6} input the time to maturity in days.
* @param {7} input the type of option, Call or Put.
* @return the Black-Scholes calculation for an option's Rho.
* @customfunction
*/
function OPTIONRHO(price, strike, volatility, interest, dividend, days, optiontype) {
}

/**
* Calculates Put Price using the Black-Scholes Model.
*
* @param {1} input the spot price of the underlying asset.
* @param {2} input the strike price of the option.
* @param {3} input the the volatility of returns of the underlying asset.
* @param {4} input the risk-free interest rate.
* @param {5} input the dividend rate as a percentage.
* @param {6} input the time to maturity in days.
* @return the price of a Call.
* @customfunction
*/
function PUTPRICE(price, strike, volatility, interest, dividend, days) {
  var xert = Math.exp(-interest *(days/365)) * strike;
  var xeqt = Math.exp(-dividend *(days/365)) * price;
  var nD2 = NORMDIST_(D2_(price, strike, volatility, interest, dividend, days));
  var nNegD2 = NORMDIST_(-D2_(price, strike, volatility, interest, dividend, days));
  
  return xeqt * nD2 - xert * nNegD2;
}

/**
* Calculates D1 using the Black-Scholes Model.
*
* @param {1} input the spot price of the underlying asset.
* @param {2} input the strike price of the option.
* @param {3} input the the volatility of returns of the underlying asset.
* @param {4} input the risk-free interest rate.
* @param {5} input the dividend rate as a percentage.
* @param {6} input the time to maturity in days .
* @return the value of D1.
* @customfunction
*/
function D1_(price, strike, volatility, interest, dividend, days) {
  var lnsx = Math.log(price/strike);
  var trqa = (interest - dividend + (Math.pow(volatility, 2))/2)*(days/365);
  var asqrtT = volatility * Math.sqrt(days/365);
  
  return (lnsx + trqa)/asqrtT;
}

/**
* Calculates D2 using the Black-Scholes Model.
*
* @param {1} input the spot price of the underlying asset.
* @param {2} input the strike price of the option.
* @param {3} input the the volatility of returns of the underlying asset.
* @param {4} input the risk-free interest rate.
* @param {5} input the dividend rate as a percentage.
* @param {6} input the time to maturity in days .
* @return the value of D2.
* @customfunction
*/
function D2_(price, strike, volatility, interest, dividend, days) {
  var d1 = D1(price, strike, volatility, interest, dividend, days);
  var asqrtT = volatility * Math.sqrt(days/365);
  
  return d1 - asqrtT;
}

/**
* Calculates an estimation of the normal distribution of a value.
*
* @param {1} input the d value.
* @return the value of the normal distribution of d.
* @customfunction
*/
function NORMDIST_(d) {
  var z = (d)/Math.sqrt(2);
  var t = 1/(1+0.3275911*Math.abs(z));
  var a1 =  0.254829592;
  var a2 = -0.284496736;
  var a3 =  1.421413741;
  var a4 = -1.453152027;
  var a5 =  1.061405429;
  var erf = 1-(((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*Math.exp(-z*z);
  var sign = 1;
  if(z < 0)
  {
    sign = -1;
  }
  
  return (1/2)*(1+sign*erf);
}