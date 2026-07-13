Quality  Minus Junk

Clifford  S. Asness, Andrea Frazzini, and Lasse H eje P edersen*

This draft:  June 5, 2017

Abstract

We define a quality security as one that has characteristics that, all-else-equal, an investor should be

willing  to  pay  a higher price for: stocks that are safe, profitable, growing, and well managed. High-

quality  stocks do have higher prices on average, but not by a very large margin. Perhaps because of

this puzzlingly  modest impact of quality on price, high-quality  stocks have high risk-adjusted returns.

Indeed, a quality-minus-junk (QMJ) factor that goes long high-quality stocks and shorts low-quality

stocks earns significant risk-adjusted returns in the U.S. and globally  across 24 countries. The price of

quality  varies over time, reaching a low during the internet bubble, and a low price of quality predicts

a high future return of QMJ. Analysts’ price targets suggest that the required return of quality stock is

low despite the high realized return.

*  Andrea  Frazzini  is  at  AQR  Capital  Management   and  NYU,  T wo  Greenwich  Plaza,  Greenwich,  CT   06830,  e-mail:
andrea.frazzini@aqr.com;  web:  http://www.econ.yale.edu/~af227/.  Cliff  Asness  is  at  AQR  Capital  Management,  T wo
Greenwich  Plaza, Greenwich, CT  06830. Lasse H. Pedersen is at AQR Capital Management , Copenhagen Business School,
NYU, and CEPR; web:  http://www.lhpedersen.com/. We thank Peter Ove Christensen, Antti Ilmanen, Ronen Israel, Johnny
Kang,  Charles  Lee,  John  Liew,  T oby Moskowitz, Per Olsson, and Scott Richardson, Richard T haler, T uomo Vuolteenaho
for  helpful  comments  as  well  as  seminar  participants  at  Harvard  University,  Harvard  Business  School;  University  of
Bocconi, and conference participants in the NBER Asset Pricing Meeting 2013, the NBER Behavioral Economics Meeting
2013, and the SIFR Institute of Financial Research Conference on Re-T hinking Beta.

When  did  our  field  stop  being  “asset  pricing”  and  become  “asset  expected

returning?” … Market-to-book ratios should be our left-hand variable, the thing we

are trying to explain, not a sorting characteristic for expected returns.

– Cochrane, Presidential Address, American Finance Association, 2011

The  asset  pricing  literature  in  financial  economics  studies  the  drivers  of  returns,  but,

while  linked,  the  economic  consequences  of  market  efficiency  ultimately  depend  on  prices,

not  returns,  as  emphasized  by  Summers  (1986)  and  Cochrane  (2011).  Do  the  highest quality

firms command  the highest  price so that these firms can finance their operations  and invest?

To  address  this  question,  we  define  quality as characteristics that investors should be

willing  to  pay  a  higher  price  for,  everything  else equal. We show that investors pay more for

firms  with  higher  quality  characteristics.  However,  the  explanatory  power  of  quality  for

prices  is  limited,  presenting  a  puzzle  for  asset  pricing.  This  puzzle  for  asset  prices  is
analogous  to  the  old  puzzle  of  the  low  R2  of  asset  returns  presented  by  Roll  (1984,  1988).

Consistent  with  the  limited  pricing  of  quality,  high-quality  stocks  have  historically  delivered

high  risk-adjusted  returns  while  low-quality  junk  stocks  delivered  negative  risk-adjusted

returns.  Hence,  a  quality-minus-junk  (QMJ)  portfolio  that  invests  long  quality  stocks  and

shorts  junk  stocks  produces  high  risk-adjusted  returns.  Further,  we  find  that  the  price  of

quality  (the  marginal  amount  extra  investors  pay  for  higher quality characteristics) has varied

over  time  as  the  market  has  sometimes  put  a  larger  or  smaller  price  premium  on  quality

stocks  vs.  junk  stocks.  For  instance,  the  price  of  quality  was  particularly  low  during  the

internet  bubble.  Since  prices  and  returns  are  linked,  the  price  of  quality  predicts  the  future

return  to  the  QMJ  factor.  Lastly,  we  consider  analyst  forecast  and  broader  asset  pricing

applications.

To  apply  our  general  definition  of  quality,  we  must  identify  stock  characteristics  that

should  command  a  higher  price.  For this, we derive a dynamic asset pricing model with time-

varying  growth,  profitability,  and  risk.  We  show  explicitly  how  price-to-book  ratios  depend

on  these  quality  characteristics.  To  get  some  intuition  before  we  present  the  general  model,

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 2

we  can  rewrite  Gordon’s  growth  model  to  express  a  stock’s  price-to-book  value  (P/B)  as
follows:1

𝑃
𝐵

=

profitability ∙ payout-ratio
required-return − growth

                                                (1)

We  scale  prices  by  book  values  to  make  them  more  stationary  over  time  and  in  the  cross

section.  For  instance,  a  food  company  with  10,000  restaurants  likely  has  a  price  and  book

value  that  are  10  times  that  of  another  food  company  with  only  1,000  restaurants,  but  it  is

more  interesting  to  consider  which  firm  has  the  larger  price-to-book  (or,  in  this  example,

price per restaurant).

The three key right-hand  side variables  form the basis for our definition  of quality:2

i.  Profitability.  Profitability  is  the  profits  per  unit  of  book  value.  All  else  equal,  more

profitable  companies  should  command  a  higher  stock  price.  We  measure  profits  in

several  ways,  including  gross  profits,  margins,  earnings,  accruals  and  cash  flows, and

focus on each stock’s average rank across these metrics.

ii.  Growth.  Investors  should  also  pay  a higher price for stocks with growing profits. We

measure growth as the prior five-year growth in  each of our profitability  measures.

iii.

Safety.  Investors  should  also  pay,  all-else-equal,  a  higher  price  for  a  stock  with  a

lower  required  return,  that  is,  a  safer  stock.  What  should  enter into required return is

still a very contentious part of the literature. We do not attempt to resolve those issues

here,  but, rather, consider both return-based measure of safety (e.g., market beta) and

1 We rewrite the Gordon model simply as

𝑃

𝐵

=

1

dividend

𝐵

required-return−growth

=

profit/B × dividend/profit

required-return−growth

 .

2 The payout ratio does not affect price in our general model since we consider a frictionless economy in which

Modigliani-Miller holds. However, the payout (fraction of profits paid out to shareholders ) can be seen as a

measure of shareholder friendliness if management’s agency problems are diminished when free cash flows are

reduced through higher dividends (Jensen (1986)), as we considered in an earlier version of this paper. Payout is

an example of how each of these measures is about their marginal effect, that is, all else being equal. Indeed, if

a higher payout is associated with a lower future profitability or growth (as in our dynamic model), then payout

should not affect the price, but a higher payout should be positive if we could hold all other factors constant.

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 3

fundamental-based  measures  of  safety  (low  volatility  of  profitability,  low  leverage,

and low  credit risk).

While  Gordon’s  growth  model  assumes  that  all  variables  are  constant  over  time,  it  is central

to  our  empirical  analysis  that  price-to-book  ratios  and  quality  characteristics  vary  across

stocks  and  across  time.  Our  general  model  allows  such  time  variation,  showing  how  prices

increase with quality.

For  the  market  to  rationally  put  a  price  on  these  quality  characteristics,  they  need  to

be  measured  in  advance  and  predict  future  quality  characteristics,  that  is,  they  need  to  be

persistent.  We  show that this is indeed the case; profitable, growing,  and safe stocks continue

on average to display  these characteristics over the following  five or ten years.

We  test  the  pricing  of  quality  over  a  long  sample  of  U.S.  stocks  from  1957  to  2016

and  a broad sample of stocks from 24 developed markets from 1989 to 2016. To evaluate the

pricing  of  quality,  we  first  run  cross-sectional  regressions  of  price-to-book  on  each  stock’s

overall  quality  score.  Both  in  the  long  and  broad  sample,  we  find  that  higher  quality  is

significantly  associated  with  higher  prices.  However,  the  explanatory  power  of  quality  on
price  is  limited  as  the  average  R2  is  only  about  10%  in  both  samples.  When  we also control

for  the  firm’s  size,  the  past  12-month  stock  returns,  controls  suggested  by  Pástor  and

Veronesi  (2003),  and  include  industry-,  country-,  and  firm-fixed  effects,  the  cross-sectional
R2  increases  to  a  maximum  of,  respectively,  49%  and  43%,  still  leaving  unexplained  a  large

fraction  of  the  cross  sectional  distribution  of  prices.  Interestingly,  larger  firms  are  more

expensive  controlling  for quality,  the analogue  of the size effect on returns (Banz (1981)).

We  also  regress  the  price-to-book  on  the  three  quality  measures  separately  and  in  a

multivariate  regression.  Each  of  the  quality  components  has  a  positive  marginal  price,

accounting  for  all  the  control  variables,  and  having  all  quality  measures  separately  modestly
increases  the  R2.  Lastly,  we  consider  the  price  of  quality  in  different  sub-samples,  finding  a

positive  price  of  quality  across  industries  and  size  deciles,  with  a  somewhat  larger  price  of

quality  for large stocks relative to small  ones.

There  could  be  several  potential  reasons  for  the  limited  explanatory  power  of  quality

on  prices:  (a)  market  prices  are  based  on  superior  quality  characteristics  than  the  ones  we

consider  (e.g.,  an  omitted  variable);  (b)  the  quality  characteristics  are  correlated  to  risk

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 4

factors  not  captured  in  our  risk  adjustments  (so  while  the  quality  measure  alone  might

command  a  higher  P/B,  the  risk  increase  we  fail  to  capture  could  imply  an  offsetting  lower

one);  or  (c)  market  prices  fail  to  fully  reflect  these  characteristics  for  reasons  linked  to

behavioral  finance or constraints.

These  three  hypothesis  have  different  implications  for  the  return  of  quality  sorted

stocks:  (a)  does  not  necessarily  predict  that  the  stocks  that  we  classify  as  high  quality  have

high  risk-adjusted  returns;  (b)  predicts  that  high  quality  stocks  should  have  low  returns

during  distress  periods  or  other  times  of  high  marginal  utility;  while  (c)  predicts  that  high

quality  stocks do have high  risk-adjusted  returns.

To  examine  these  potential  explanations,  we  first  consider  the  returns  of  high-  vs.

low-quality  stocks.  We  sort  stocks  into  ten  deciles  based on their quality scores and consider

the  value-weighted  return  in  each  portfolio.  We  find  that  high-quality  stocks  have

significantly  higher  excess  returns  than  junk  stocks.  The  difference  in  their  risk-adjusted

returns  (i.e.,  4-factor  alphas)  is  even  larger  since  high-quality  stocks  tend  to  have  lower

market, size,  value and momentum  exposures than junk  stocks.

We  then  construct  a  QMJ  factor  with  a  methodology  that  follows  that  of  Fama  and

French  (1993)  and  Asness  and  Frazzini  (2013).  The  factor  is  long  the  top  30%  high-quality

stocks  and  short  the  bottom  30% junk stocks within the universe of large stocks and similarly

within  the  universe  of  small stocks. This QMJ factor (as well as its large-cap only and small-

cap  only  components)  delivers  positive  returns  in  23  out  of  24  countries  that  we  study  and

highly  significant  risk-adjusted  returns  in  our  long  and  broad  sample.  QMJ  portfolios  have

negative  market,  value,  and  size  exposures,  positive  alpha,  relatively  small  residual  risk  and

QMJ  returns  are  high  during  market  downturns,  presenting  a  challenge  to  risk-based

explanations  relying  on  covariance  with  market  crises.  Rather  than  exhibiting  crash  risk,  if

anything  QMJ  exhibits  a  mild  positive  convexity,  that  is,  it  benefits  from  flight  to  quality

during  crises.  In  other  words,  the  evidence  challenges  hypotheses  (a)  and  (b)  from  above,

while  appearing  more consistent with  (c).

To  test  (c)  more  directly,  we  look  at  equity  analysts  forecasts  as  reflected  in  their

“target  prices,”  i.e.,  the  expected  stock  price  one  year  into  the  future  using the methodology

of  Brav,  Lehavy,  and  Michaely  (2005).  Analysts’  target  prices  (scaled  by  book  value)  are

higher  for  high-quality  stocks,  consistent  with  a  positive  price  of  quality.  However,  analysts’

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 5

implied  return  expectations  (target  price  divided  by  current  actual  price)  is  lower  for  high-

quality  stocks  than  junk  stocks,  presenting  a  systematic  error  relative  to  the  realized  returns.

In  other  words,  analysts  appear  to  have  higher  target  prices  for  high-quality  stocks,  but  not

high  enough  on average, consistent  with (c).

To  further  test  the  link  between  the  price  and  return  to  quality,  it  is  interesting  to

exploit  the  time-variation  in  the  price  of  quality.  In  particular,  each  month,  we  estimate  the

current  price  of  quality  as  the  cross-sectional  regression  coefficient  of  price-to-book  on

quality.  The  time  series  of  these  cross-sectional  regression  coefficients  reflects  how  the

pricing  of  quality  varies  over  time.  Intuitively,  the  price  of  quality  reached  its  lowest  level  in

February  2000  during  the  height  of  the  internet  bubble.  The  price  of  quality  was  also

relatively  low  leading  into  the  1987  crash  and  leading  into  the  Global  Financial  Crisis  of

2007-2009.  Following  each  of  these  three  dramatic  events,  the  price  of  quality  increased,

reaching  highs  in  late  1990  (first  gulf  war),  in  late  2002  (after  the  Enron  and  WorldCom

scandals),  and  in  early  2009  (during  the  height  of  the  banking  crisis).  Prices  and  returns  are

naturally  connected,  and  we  show  that  the  price  of  quality  negatively  predicts  the  future

return  on  QMJ.  Said  differently,  a higher price of quality is associated with a lower return on

high-quality  stocks,  consistent  with  the  theory  (c)  that  a  low  price  of  quality  means  that  the

market is inefficient  in incorporating  quality  into  prices.

We  note  that  the  QMJ  strategy  of  buying  profitable,  safe,  growing  stocks  while

shorting  unprofitable,  risky,  shrinking  stocks  is  very  different  from  the  standard  value

strategy  HML (in fact the two are negatively correlated). QMJ is buying and selling based on

quality  characteristics  irrespective  of  stock  prices,  while  HML  is  buying  based  on  stock

prices  irrespective  of  quality.  Naturally,  the  two  concepts  can  be  combined,  which  we  call
quality  at  a  reasonable  price (QARP).3 This concept goes back at least to Graham and Dodd

(1934) who stated that “investment must always consider the price as well as the quality of

the  security.”  Naturally,  value  investing  is  improved  by  QARP, consistent with the finding in

the  accounting  literature  that  information  from  financial  statements  can  improve  value

investing  (e.g., Frankel and Lee (1998) and Piotroski  (2000)).

3 Our definition of QARP is a generalization of the so-called growth at a reasonable price (GARP) strategy.

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 6

Our  paper  is  related  to  a  large  literature.  A  number  of  papers  study  return-based

anomalies.  It  has  been  documented  that  stocks  with  high  profitability  outperform  (Novy-

Marx  (2012,  2013)),  stocks  that  repurchase  tend  to  do  well  (Baker  and  Wurgler  (2002),

Pontiff  and  Woodgate  (2008),  McLean,  Pontiff,  and  Watanabe  (2009)),  low  beta  is

associated  with  high  alpha  for  stocks,  bonds,  credit,  and  futures  (Black,  Jensen,  and  Scholes

(1972),  Frazzini  and  Pedersen  (2013)),  firms  with  low  leverage  have  high  alpha (George and

Hwang  (2010),  Penman,  Richardson,  and  Tuna  (2007)),  firms  with  high  credit  risk  tend  to

under-perform  (Altman  (1968),  Ohlson  (1980),  Campbell,  Hilscher,  and  Szilagyi  (2008)),

growing  firms  outperform  firms  with  poor  growth  (Mohanram  (2005)),  and  firms  with  high

accruals  are  more  likely  to  suffer  subsequent  earnings  disappointments  and  their  stocks  tend

to  underperform  peers  with  low  accruals  (Sloan  (1996),  and  Richardson,  Sloan,  Soliman, and

Tuna  (2005)).  While these papers are very different and appear disconnected, our framework

illustrates  a  unifying  theme,  namely  that  all  these  effects  are  about  the  outperformance  of

high-quality  stocks, and we link  returns and prices.

Our paper is also related to the literature that considers how the price-to-book predicts

future  returns  and  future  fundamentals  based  on the present-value relationship. Campbell and

Shiller  (1988)  consider  the  overall  market,  and  their  dividend  growth  variable  can  be

interpreted  an  as  aggregate  quality  variable.  Vuolteenaho  (2002),  Cohen,  Polk,  and

Vuolteenaho  (2003,  2009),  and  Fama  and  French  (2006)  consider  individual  stocks.  Cohen,

Polk,  and  Vuolteenaho  (2003)  decompose  the  cross-sectional  variance  of  firms’  book-to-

market  ratios  across  book-to-market  portfolios  and  Cohen,  Polk,  and  Vuolteenaho  (2009)

consider  how  cash-flow  betas  affect  price  levels and long-run returns. See also the overview

by Cochrane (2011)  and references therein.

In  summary,  we  complement  the  literature  by  showing  (i)  the  theoretical  price  of

quality  in  a  dynamic  model;  (ii)  how  quality  affects  price  multiples  and  how  much  of  the

cross-sectional  variation  of  price  multiples  can  be  explained  by  quality;  (iii)  that  the  price  of

quality  varies  over  time  and  predicts  the  future  return  on  quality  factors;  (iv)  that  quality

stocks  earn  higher  returns  and  yet  appear safer, not riskier, than junk stocks, benefitting from

flight  to  quality;  (v)  that  analysts’  target  prices  imply  systematic errors in return expectations

about  quality  stocks;  and  (vi)  how  our  quality  framework  unifies  a  number  of  anomalies and

can be used in asset pricing  more broadly.

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 7

The  rest  of  the  paper  is  organized  as  follows.  Section  1  presents  our  model.  Section  2

presents  our  data  and  quality  measures,  showing  that  ex  ante  quality  forecasts  future quality

(i.e.,  quality  is  sticky  as  would  be  necessary  for  it  to  affect  prices).  Section  3  analyzes  the

price  of  quality.  Section  4  tests  different  potential  explanations  for  the  limited  explanatory

power  of  quality  for  price.  Section  5  further  asset  pricing  applications.  Section  6  concludes.

The appendix  contains  a number of additional  results and robustness checks.

1.  The Price of Quality: Dynamic Model

A.  A Dynamic Model of Firm Quality: Time-Varying Profits, Growth, and Risk

We  consider  a  firm  in  an  economy  with  pricing kernel  𝑀𝑡. The pricing kernel is given by

1

=

1+𝑟𝑓 (1 + 𝜀𝑡+1

𝑀 ), where 𝑟𝑓 is the risk-free rate and 𝜀𝑡+1

𝑀𝑡+1
𝑀𝑡
the  pricing  kernel.  For  example,  if  the  CAPM  holds  then  𝜀𝑡+1
𝑀𝐾𝑇.  More
market
𝑟𝑡 +1
𝑀𝐾𝑇)
𝑀𝐾𝑇−𝐸𝑡(𝑟𝑡+1
𝑟𝑡+1
𝑀𝐾𝑇)
2(𝑟𝑡+1
𝜎𝑡

), where 𝜆𝑡 = 𝐸𝑡(𝑟𝑡+1

𝑀 = −𝜆𝑡 (
𝜀𝑡+1

specifically,

portfolio,

𝑀  is the zero-mean innovation to

𝑀   is  linked  to  the  return  on  the

the  CAPM

pricing

kernel

is

𝑀𝐾𝑇) − 𝑟𝑓 is the market risk premium.

The value of the firm is the present value of all  future dividends,  𝑑𝑡:

∞

𝑉𝑡 = ∑ 𝐸𝑡
𝑠=1

(

𝑀𝑡+𝑠𝑑𝑡+𝑠
𝑀𝑡

)

We  rewrite the valuation equation in terms of the book value  𝐵𝑡 and earnings (or net income)
𝑁𝐼𝑡 by using  the clean surplus  relation,  𝐵𝑡 = 𝐵𝑡−1 + 𝑁𝐼𝑡 − 𝑑𝑡:

∞

𝑉𝑡 = 𝐵𝑡 + ∑ 𝐸𝑡

𝑠=1

𝑀𝑡+𝑠𝑅𝐼𝑡+𝑠
(
𝑀𝑡

)

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 8

where  the  so-called  residual  income,  𝑅𝐼𝑡+𝑠 = 𝑁𝐼𝑡+𝑠 − 𝑟𝑓𝐵𝑡+𝑠−1,  is  the  net income in excess
of  the  cost  of  book  capital.4  We  assume  that  the  firm  keeps  all  financial  assets  in  risk-free

securities,  which  implies  that  dividend  policy  and  capital  structure  do  not  affect  residual
income.5  Therefore,  we  can  specify  an  exogenous  process  for  the  residual  income  (which

depends  on  the  firm’s  free  cash  flows  from  operations).  Residual  income  consists  of  two

components:

𝑅𝐼𝑡 = 𝑒𝑡 + 𝑎𝑡

where  𝑒𝑡  captures  “sustainable  earnings”  and  𝑎𝑡  captures  “transitory  earnings  shocks.”  As
defined  precisely  below,  sustainable  earnings  are  characterized  by  the  fact  that  they  are

persistent  and  may  grow over time, whereas transitory shocks are temporary profits or losses

that  do  not  affect  the  long-term  earnings  of the firm. Specifically, sustainable earnings  𝑒𝑡 are
expected to grow by 𝑔𝑡 such that

𝑒𝑡+1 = 𝑒𝑡 + 𝑔𝑡 + 𝜀𝑡+1

𝑒

4 Residual income is often defined as 𝑁𝐼𝑡 − 𝑘𝐵𝑡−1 where 𝑘 is the required return on equity, but one should use
the risk-free rate 𝑟𝑓 when the valuation equation is written with a pricing kernel 𝑀𝑡 (rather than a required
return in the denominator). This can be seen using a simple calculation based on inserting the clean surplus

relation into the valuation equation, or see the derivation in appendix and Feltham and Ohlson (1999).

5 To see this result, suppose first that the firm lowers dividends by 1 at time 𝑡, puts the money in risk-free

securities, and increases the dividend by  (1 + 𝑟𝑓)𝜏 at time 𝑡 + 𝜏. Then, at any time 𝑡 + 𝑠 < 𝑡 + 𝜏, the net
income 𝑁𝐼𝑡+𝑠 increases by the interest income 𝑟𝑓(1 + 𝑟𝑓)𝑠−1 and the book value 𝐵𝑡+𝑠−1 increases by  (1 +
𝑟𝑓)𝑠−1, leaving the residual income unchanged. Second, suppose that the firm takes a loan of and invests the

money in the risk-free asset at time 𝑡. Then, at any time 𝑡 + 𝑠, the income from the risk-free asset cancels the

interest payment on the loan, again leaving residual income unchanged. Other changes of dividend policy and

capital structure can be seen as combinations of such actions.

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 9

The  zero-mean  earnings  innovation  𝜀𝑡
pricing  kernel,  𝜋𝑡 = −𝑐𝑜𝑣𝑡(𝜀𝑡+1
, 𝜀𝑡+1
premium  corresponds  to  a  higher  required  return.  Under  the  CAPM,  the  risk premium is the

𝑒  has  a  risk  premium  𝜋𝑡  due  to  covariation  with  the
𝑀 ).  We use the negative covariation such that a high risk

𝑒

cash flow’s standard market beta multiplied  by the market risk premium  𝜆𝑡, that is,

𝜋𝑡 = 𝜆𝑡

𝑀 )
, 𝑟𝑡+1

𝑒
𝑐𝑜𝑣𝑡(𝜀𝑡+1
2(𝑟𝑡+1
𝜎𝑡

𝑀𝐾𝑇)

𝑒
=: 𝜆𝑡𝛽𝑡

The growth 𝑔𝑡 and risk  premium  𝜋𝑡 are time-varying:

𝑔
𝑔𝑡+1 = 𝜑𝑔𝑔𝑡 + (1 − 𝜑𝑔)𝑔̅ + 𝜀𝑡+1

𝜋
𝜋𝑡+1 = 𝜑𝜋𝜋𝑡 + (1 − 𝜑𝜋)𝜋̅ + 𝜀𝑡+1

where  𝑔̅  and  𝜋̅  are  the long-run means, 𝜑𝑔 and 𝜑𝜋 indicate the persistence of the processes,

and 𝜀𝑡+1

𝑔  and 𝜀𝑡+1

𝜋  are zero-mean shocks that are uncorrelated to 𝜀𝑡+1

𝑀 .

The  transitory  earnings  shock  follows  a  moving  average  process  and  for  simplicity

we only  consider a single  lag:

𝑎𝑡 = 𝜀𝑡

𝑎
𝑎 − 𝜃𝜀𝑡−1

We  see  that  𝜀𝑡
dependence  on  past  shocks.  These  transitory  earnings  do  not  grow  over  time  and  a  positive

𝑎  captures  zero-mean  random  shocks  to  residual  income  and  𝜃  measures

shock  is  even  expected  to  be  partly  reversed  in  the  next  period  if  𝜃 > 0.  For  example,
aggressive accounting  accruals can lead to such reversals in earnings. 6

6 Accrual accounting is a method to measure profits at the time when an economic activity takes place, rather

than when cash is paid or received. Accruals can be used to make reported earnings capture true profits better

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 10

B.  Valuation: The Price of Quality

To  compute  the  fundamental  value,  we  first  compute  the  conditional  expectation  of

the sustainable  earning  for next period:

𝐸𝑡 (

𝑚𝑡+1
𝑚𝑡

𝑒𝑡+1) = 𝐸𝑡 (

1 + 𝑟𝑓 (1 + 𝜀𝑡+1

𝑀 )(𝑒𝑡 + 𝑔𝑡 + 𝜀𝑡+1

𝑒

1

)) =

1

1 + 𝑟𝑓 (𝑒𝑡 + 𝑔𝑡 − 𝜋𝑡)

We  can  iterate  this  result  to  show  that  the  value  of  sustainable  earnings  𝜏  periods  into  the

future is

𝐸𝑡 (

𝑚𝑡+𝜏
𝑚𝑡

𝑒𝑡+𝜏) =

                   =

1

1

𝜏

𝑛=1

𝜏

(1 + 𝑟𝑓)𝜏 (𝑒𝑡 + ∑ 𝐸𝑡

(𝑔𝑡+𝑛 − 𝜋𝑡+𝑛))

(1 + 𝑟𝑓)𝜏(𝑒𝑡 + ∑(𝜑𝑔

𝑛=1

𝑛𝑔𝑡 + (1 − 𝜑𝑔

𝑛)𝑔̅ − 𝜑𝜋

𝑛𝜋𝑡 − (1 − 𝜑𝜋

𝑛)𝜋̅)

)

                               =

1

(1 + 𝑟𝑓)𝜏(𝑒𝑡 +

𝜏+1

𝜑𝑔 − 𝜑𝑔
1 − 𝜑𝑔

(𝑔𝑡 − 𝑔̅) + 𝜏𝑔̅ −

𝜏+1

𝜑𝜋 − 𝜑𝜋
1 − 𝜑𝜋

(𝜋𝑡 − 𝜋̅) − 𝜏𝜋̅)

Based  on  this  result,  we  can  next  compute  the  fundamental  value  as  the  sum  of  all  future
discounted  profits:7

𝑉𝑡 = 𝐵𝑡 + 𝑣𝑒𝑒𝑡 + 𝑣 − 𝑣𝑎𝜀𝑡

𝑎 + 𝑣𝑔(𝑔𝑡 − 𝑔̅) − 𝑣𝜋(𝜋𝑡 − 𝜋̅)

where  the  valuation  coefficients  are  𝑣 =

1+𝑟𝑓
2 (𝑔̅ − 𝜋̅ ),  𝑣𝑒 =
𝑟𝑓

1
𝑟𝑓

,  𝑣𝑔 =

𝜑𝑔(1+𝑟𝑓)
𝑟𝑓 (1+𝑟𝑓−𝜑𝑔)

,  𝑣𝜋 =

𝜑𝜋(1+𝑟𝑓 )
𝑟𝑓 (1+𝑟𝑓−𝜑𝜋)

, and 𝑣𝑎 =

𝜃
1+𝑟𝑓

𝐵𝑡:

. The fundamental value can be written as a fraction of book value

than pure cash-based measures, but accruals can also be used to artificially boost earnings. E.g, see Richardson,

Sloan, Soliman, and Tuna (2005) find that “less reliable accruals lead to lower earnings persistence.”

7 We are using the standard results that ∑ 𝑧𝜏 =

∞
𝜏=1

1

1−𝑧

∞
 and ∑ 𝜏𝑧𝜏 =
𝜏=1

𝑧
.
(1−𝑧)2

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 11

𝑉𝑡
𝐵𝑡

= 1 +

𝑎
𝑣𝑒𝑒𝑡 + 𝑣 − 𝑣𝑎𝜀𝑡
𝐵𝑡

+ 𝑣𝑔 𝑔𝑡 − 𝑔̅

𝐵𝑡

− 𝑣𝜋 𝜋𝑡 − 𝜋̅

𝐵𝑡

This  specification  motives  our  empirical  work.  In  particular,  we  see  that  the  ratio  of
fundamental  value  to  book  value  increases  in  the  profitability  adjusted  for  accruals,8  it

increases  in  the  growth  of  sustainable  profits,  and  it  increases  in  safety  (i.e.,  it  decreases  in

market risk  𝜋𝑡). Further, we see that the valuation  is linear in  these values.

2.  Data, Quality Measures, and Preliminary Analysis

In this  section we describe our data sources and the methodology  for constructing  our

quality  measures. Further, we document  that current quality  predicts  future quality.

A.  Data Sources

The  data  is  collected  from  a  variety  of  sources.  Our  sample  consists  of  54,616  stocks

covering  24 countries between June 1957 and December 2016. The 24 markets in our sample

correspond  to  union  of  all  countries  belonging  to  the  MSCI  World Developed Index  over our

sample  period.  We  report  summary  statistics  in  Table  I.  Stock  returns  and  accounting  data

are  from  the  union  of  the  Center  for  Research  on  Security  Prices  (CRSP)  pricing database,

the  Compustat  North  America  Fundamentals  Annual,  Fundamentals  Quarterly  and  Security

Daily  databases,  the  Compustat  Global  Fundamentals  Annual,  Fundamentals  Quarterly,  and

Security  Daily  databases.  All  returns  are  in  USD,  they  do  not  include  any currency hedging,
and are measured as excess returns above the U.S. Treasury bill rate.9 We follow the standard

convention  (Fama  and  French  (1992))  and  align  accounting  variables at the end of the firm’s

fiscal  year  ending  anywhere  in  calendar  year  t-1  to  June  of  calendar  year  t.  We focus on a

long sample of U.S. stocks and a broad sample of global stocks.

8 We note that there may be two reasons to adjust for transitory earnings shocks. First, if 𝜃 > 0 then 𝑣 𝑎 > 0,

leading to the adjustment shown in the valuation equation. Second, if we start with net income 𝑁𝐼𝑡, then
sustainable earnings 𝑐𝑡 is net income adjusted transitory shocks (and cost of capital),  𝑐𝑡 = 𝑁𝐼𝑡 − 𝑎𝑡 − 𝑟𝑓𝐵𝑡−1.

9 We include delisting returns when available. If a firm is delisted but the delisting return is missing and the
delisting is performance-related, we follow Shumway (1997) and assume a -30% delisting return.

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 12

Our  long  sample  of  U.S.  data  includes  all  available  common  stocks  on  the  merged
CRSP/Compustat  North  America  data.10  Our  default  primary  source  for  pricing  information

is  Compustat,  supplemented  with  CRSP  over  the  earlier  period  when Compustat  pricing data

is not available. Table A1 in the Appendix reports details  on the data sources for each period.
The first available  date for our regressions and return tests is June 1957.  11

Our  broad  sample  includes  all  available  common  stocks  on  the  union  of  the  CRSP,

the  Compustat  North  America  and the Compustat Global database for 24 developed markets.

We  assign  individual  issues  to  the  corresponding  market  based on the location of the primary

exchange.  For  companies  traded  in  multiple  markets  we  use  the  primary  trading  vehicle

identified  by  Compustat.  The  first  available  date  for  our  regressions  and  return  test  is  June

1989.  Table I, reports date coverage of the individual  markets.

Target  prices  are  from  the  Thomson  Reuters I/B/E/S global database. In contains the

projected  price  level  forecasted  by  analysts  within  a  specific  time  horizon.  For  our  analysis,

we  use  the  monthly  mean  and  median  consensus  target  prices.  I/B/E/S  computes  consensus

prices are over a 12-month  time horizon.

B.  Quality Score

To  avoid  data  mining,  we  base  our  measures  on  our  theoretical  model  implemented

using  standard  “off-the-shelf”  empirical  measures  to  compute  three  composite  quality

measures: Profitability, Growth, and Safety. We then average these three quality components

to  compute  a  single  overall  quality  score.  Our  results  are  qualitatively  robust  to  the  specific

choices of factors.

Let  us  first  describe  the  theoretical  intuition  behind  our  measures.  First,  the  theory

suggests  that  profitability  should  be  measured  as  the  “sustainable”  part  of  profits  in  relation

to  book  value,  adjusted  for  accruals,  which  we  implement  empirically  by  averaging  several

measures  profitability  to  reduce  noise  (hopefully  leaving  the  more  sustainable  part)  and

avoiding  focusing  on  a  particular  measure. Second, theory suggests that growth should be the

increase  in  sustainable  profits  in  relation  to  book  values.  Since  profits  are noisy, we use a 5-

10 Common stocks are identified by a CRSP share code (SHRCD) of 10 or 11 or by a Compustat issue code
(TPCI) of 0.  We also drop stocks traded on over-the-counter (OTC) exchanges.
11 Our tests require at least a 5-year history as some of our variables are five-year growth measures.

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 13

year  window  to  focus  on  sustainable  growth  and, again based on our model, accruals are not

included  in  the  growth  measure.  Lastly,  safety  is  based  on  market  beta  and  other  risk

measures.

More  specifically,  our  quality  measures  are  constructed  as  follows  (details  are  in  the

Appendix).  We  measure  profitability  as  gross  profits  over  assets  (GPOA),  return  on  equity

(ROE),  return  on  assets  (ROA),  cash  flow  over assets (CFOA), gross margin (GMAR), and

the  fraction  of  earnings  composed  of  cash  (i.e.  minus  accruals,  ACC).  In  order  to  put  each

measure  on  equal footing and combine them, each month we convert each variable into ranks

and  standardize  to  obtain  a  z-score.  More  formally,  let  𝑥  be the variable of interest and  𝑟 be

the  vector  of  ranks,  𝑟𝑖 = 𝑟𝑎𝑛𝑘(𝑥𝑖).  Then  the  z-score  of  the  ranks  of  x  is  given  by  𝑧(𝑥) =

𝑧𝑥 = (𝑟 − 𝜇𝑟)/𝜎𝑟, where 𝜇𝑟 and 𝜎𝑟 are the cross sectional mean and standard deviation of r.

Our 𝑃𝑟𝑜𝑓𝑖𝑡𝑎𝑏𝑖𝑙𝑖𝑦 score is the average of the individual  z-scores:

𝑃𝑟𝑜𝑓𝑖𝑡𝑎𝑏𝑖𝑙𝑖𝑡𝑦 = 𝑧(𝑧𝑔𝑝𝑜𝑎 + 𝑧𝑟𝑜𝑒+𝑧𝑟𝑜𝑎 + 𝑧𝑐𝑓𝑜𝑎+𝑧𝑔𝑚𝑎𝑟 + 𝑧𝑎𝑐𝑐)

(2)

Similarly,  we  measure  growth  as  the  five-year  growth  in  profitability  (excluding  accruals),

averaged across five measures:

𝐺𝑟𝑜𝑤𝑡ℎ = 𝑧(𝑧Δ𝑔𝑝𝑜𝑎 + 𝑧Δ𝑟𝑜𝑒+𝑧Δ𝑟𝑜𝑎 + 𝑧Δ𝑐𝑓𝑜𝑎+𝑧Δ𝑔𝑚𝑎𝑟)

 (3)

Here,  Δ  denotes  five-year  growth.  Specifically,  for  each  profitability  measure,  we  definite

five-year  growth  as  the  change  in  the  numerator  (e.g.  profits)  divided  by  the  lagged

denominator  (e.g.  assets).  We  define  safe securities as companies with low beta (BAB),  low

leverage  (LEV),  low  bankruptcy  risk  (O-Score  and  Z-Score)  and  low  ROE  volatility

(EVOL):

𝑆𝑎𝑓𝑒𝑡𝑦 = 𝑧(𝑧𝑏𝑎𝑏+𝑧𝑙𝑒𝑣 + 𝑧o+𝑧𝑧 + 𝑧𝑒𝑣𝑜𝑙)

Finally,  we combine  the three measures into a single  quality  score:

𝑄𝑢𝑎𝑙𝑖𝑡𝑦 = 𝑧(𝑃𝑟𝑜𝑓𝑖𝑡𝑎𝑏𝑖𝑙𝑖𝑦 + 𝐺𝑟𝑜𝑤𝑡ℎ + 𝑆𝑎𝑓𝑒𝑡𝑦)

(4)

(5)

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 14

To  construct  our  composite  quality  measure  as  well  as  the  individual  subcomponents we use

all  available  information:  if  a  particular  measure  is  missing  due  lack  of  data  availability,  we

simply  average  the  remaining  ones.  We  also  consider  a  number  of  robustness  tests,  e.g.,

using  raw values rather than the ranks.

C.  Portfolios

Our  portfolio  analysis  relies  on  two  sets  of  test  factors:  quality-sorted  portfolios  and

quality-minus-junk  factors  (hereafter, QMJ factors). For both approaches, we  form one set of

portfolios  in  each  country  and  compute  global  portfolios  by  weighting  each  country’s

portfolio  by the country’s total  (lagged)  market capitalization.

To  form  quality-sorted portfolios, at the end of each calendar month,  we assign stocks

in  each  country  to  ten  quality-sorted  portfolios.  U.S.  sorts  are  based  on  NYSE  breakpoints.

Portfolios  are  value-weighted,  refreshed  every  calendar  month,  and  rebalanced  every

calendar month  to maintain  value  weights.

The  QMJ  portfolio  construction  follows  Fama  and  French  (1992,  1993 and 1996) and

Asness  and  Frazzini  (2013).  QMJ  factors  are  constructed  as  the  intersection  of  six  value-

weighted  portfolios  formed on size and quality.  At the end of each calendar month,  we assign

stocks  to  two  size-sorted  portfolios  based  on  their  market  capitalization.  For  U.S.  securities,

the  size  breakpoint  is  the  median NYSE market equity. For other markets the size breakpoint
is  the  80th  percentile  by  country.12  We  use  conditional  sorts,  first  sorting  on  size,  then  on

quality.  Portfolios  are  value-weighted,  refreshed  every  calendar  month, and rebalanced every

calendar month to maintain value weights. The  QMJ factor return is the average return on the

two high-quality  portfolios  minus  the average return on the two low-quality  (junk)  portfolios:

𝑄𝑀𝐽 =

         =

1

2

1

2

(Small Quality+ Big Quality) −

1

2

(Small Junk+ Big Junk)

(Small Quality − Small Junk) +

1

2

(Big Quality− Big Junk)                     (7)

          𝑄𝑀𝐽 in  small  stocks                      𝑄𝑀𝐽 in big  stocks

12  In our sample, the 80th size percentile by country corresponds approximately to NYSE breakpoints.

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 15

Portfolios  based  on  profitability,  growth  and  safety  are  constructed  in  a  similar  manner.  We

compute  alphas  with  respect  to  domestic  and  global  4-factor  model.  The  explanatory

variables  are  the  market  (MKT),  size  (small-minus-big,  SMB),  book-to-market  (high-minus-

low,  HML),  and  momentum  (up-minus-down,  UMD)  portfolios.  The  portfolio  construction

follows  Fama  and  French  (1992,  1993  and  1996)  and  Asness  and  Frazzini  (2013)  and  we
report  a  more  detailed  description  in  the  Appendix.13  In  some  of  our  test,  we  also  use  the

Fama  and  French  (2015)  5-factor  model  based  on  the  market  factor  (MKT),  size  (small-

minus-big,  SMB),  book-to-market  (high-minus-low,  HML),  profitability  (factor  robust-
minus-weak,  RMW), and an investment  factor (conservative-minus-aggressive,  CMA).14

D.  Ex Ante Quality Forecasts Fundamentals

We  start  by  showing  that  a  stock’s  quality  is  a  persistent  characteristic.  That  is,  by

selecting  companies  that  were  profitable,  growing  and  safe  in the recent past, we succeed in

selecting  companies  that  display  these  characteristics  in  the  future.  This  step  is  important

when  we turn to the central analysis of whether the high quality firms command higher prices

since,  in  a  forward-looking  rational  market,  prices  should  be  related  to  future  quality

characteristics.  Of  course,  predictability  of  quality  is  perfectly  consistent  with  an  efficient

market  –  market  efficiency  says  only  that,  since  prices  should  reflect  quality,  stock  returns

should  be  unpredictable  (or  only  predictable  due  to  risk  premia)  not  that  quality  itself  should

be unpredictable.

Table  II  analyzes  the  predictability  of  quality  as  follows.  Each  month,  we  sort stocks

into  ten  portfolios  by  their  quality  scores  (as  defined  in  Section  2).  The  table  reports  the

value-weighted  average  of  our  quality  measures  across  stocks  in  each  of  the  portfolios. The

table  shows  these  average  quality  scores  both  at  the  time  of  the  portfolio  formation  (time  t)

and  in  the  subsequent  ten  years  (t  +  120  months).  The  standard  errors  are  adjusted  for

heteroskedasticity  and  autocorrelation  with  a  lag  length  of  five  years  (Newey  and  West

(1987)).  By  construction,  the  quality  scores  vary  monotonically  across  portfolios  at  the  time

of  portfolio  formation  so  the  interesting  part  of  the  table is the future quality scores. Table II

13 The data can be downloaded at https://www.aqr.com/library/data-sets.

14 The data can be downloaded at http://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 16

shows  that,  on  average,  high  quality  firms  today  remain  high  quality  firms  five and ten years

into  the  future  (conditional  on survival) and we can reject the null hypothesis of no difference

in  each  of  quality  characteristics  up  to  ten  years.  Table A1 in the appendix reports additional

results:  we  sort  firms  separately  using  each  component  of  our  quality  score  (profitability,

growth,  and  safety)  and  report  the  spread  in  each  variable  up  to  10  years,  yielding  similarly

consistent  results.

To  summarize,  quality  is  a  persistent  characteristic  such  that  high  quality  today

predicts  future  high  quality.  For  both  the  U.S.  long  and  global  sample,  profitability  is  the

most persistent and, while  still  surprisingly  stable,  growth  and safety are the least persistent.

3.  The Price of Quality

Given  that  future  quality  can  be  forecasted  in  advance,  we  now  turn  to  the  central

question  of  how  quality  affects  prices:  Do  high-quality  stocks  command  higher  prices  than

low-quality  ones?

A.  The Price of Quality in the U.S. and Globally

To  address  this  question,  we  run  a  cross-sectional  regression  of  each  stock  i's  log
𝑖    (defined  in  Section  2).

market-to-book  (MB)  ratio  on  its  overall  quality  score,  Quality𝑡

Specifically,  we let 𝑃𝑡

𝑖 = 𝑙𝑜𝑔(𝑀𝐵)𝑡

𝑖 and run the regression:

𝑖 = 𝑎 + 𝑏Quality𝑡
𝑃𝑡

𝑖
𝑖 + 𝑐𝑜𝑛𝑡𝑟𝑜𝑙𝑠 + 𝜀𝑡

             (8)

Market-to-book  is  defined  as  book  equity  divided  by  the  current  market  equity  of the firm  in

June  of  year  t.  This  regression tests whether high quality is associated with high prices in the

cross  section.  Using  ranked  z-scores  as  our  explanatory  variable  limits  the  effect  of  outliers

and  it  implies  that  the  regression  coefficient  b  has  a  simple  interpretation:  b  measures  the

percent  increase  (log  changes)  in  market-to-book  associated  to  a  one  standard  deviation

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 17

increase  in  our  quality  score.15  We  include  several  control  variables  motivated  by  theory  as

discussed below.

Panel  A  of  Table  III  reports  results  of  Fama  and  MacBeth  (1973)  regressions  of

prices  on  quality.  In June of each year,  we regress scaled prices on quality measures and we

report time series averages of the cross sectional slope estimates. Standard errors are adjusted

for  heteroskedasticity  and  autocorrelation  (Newey  and  West (1987)) with a  lag length of five

years.  We  run  the  regression  with  and  without  industry-,  country-,  or  firm-fixed  effects,  as

indicated.

We  see  that  the  price  of  quality  b  is  generally  positive  and  highly  statistically

significant:  high  quality  firms  do  command  higher  (scaled)  prices.  Indeed,  the  price  of

quality  is  positive  both  in  the  U.S.  and  global  samples  and across specifications with controls

and  fixed  effects.  The  univariate  estimated  price  of  quality  in  the  long  domestic  (broad

global)  sample  is  0.23  (0.17).  This  coefficients  implied  that  a  one  standard  deviation  change

in a stock’s quality score is associated (in the cross section) with a  23% (17%) increase in its

price-to-book.

While  theory  does  not  provide  specific  guidance  on  what  the  R2  “should”  be,  the

explanatory  power  of  quality  on  price  appears  limited.  Quality  alone  explains  only  about

10% of the cross sectional variation  in  prices in  both our U.S. and global  sample.

We  also  include  several  controls.  With  the  exception  of  dummies  variables,  we

measure each of these controls as the  z-score of their cross-sectional rank for consistency and

ease  of  interpretation  of  the  coefficients.  First,  we  control  for  size  motivated  by  the  theory

that  large  stocks  are  more  liquid  and  have  less  liquidity  risk than small firms, and thus higher

prices  and  lower  required  returns  (Amihud  and  Mendelson  (1986),  Pástor  and  Stambaugh

(2003),  Acharya  and  Pedersen  (2005)).  Consistent  with  this  theory,  we  see  that  larger firms

do  have  higher  prices,  controlling  for  quality.  This  result  is  the analogue of the size effect on

returns  (Banz  (1981),  see  also  Berk (1995)), expressed in terms of prices.  That is, big firms,

even  for  the  same  quality,  are  more  expensive,  possibly leading to the return effect observed

by Banz.

15 Using the z-score of the market-to-book on the left hand side as opposed to logs or computing ordinal z-

scores by dropping the rank step from the z-score construction does not significally impact any of the results.

For brevity, we do not report these additional results.

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 18

Motivated  by  the  theory  of  learning  about  profitability by  Pástor and Veronesi (2003),

we  also  control  for  age, profit uncertainty and a dividend payer dummy, as  defined as in their

paper.  Firm  age  is  the  cumulative number of years since the firm’s IPO.  Profit uncertainty is

the  standard  deviation  of  the  residuals  of  an  AR(1)  model  for  each  firm’s  ROE,  using  the

longest  continuous  series  of  a  firm's  valid  annual  ROE  up  to  June  of  each  year.  Dividend

payer  is  a  dummy  equal  to  one  if  the  firm  paid  any dividends over the prior year.  Consistent

with  Pástor  and  Veronesi  (2003),  we  find  that  prices  are  lower  for  firms  that pay dividends,

decrease in age and increase in profit  uncertainly,  especially  for firms that pay no dividends.

We  also  control  for  past  stock  returns.  Including  past  returns  is  necessary  since  our

sample  include  firms  with  different  fiscal  year  end  up  to  11  months  apart  (accounting

variables at the end of the firm’s fiscal year ending anywhere in calendar year  t-1 are aligned

to  June  of  calendar  year  t).  A  positive  coefficient  on  past  returns  simply  reflects  that  high

recent  returns  raise current prices while the book value has not had time to adjust. Consistent

with  this  observation,  Table  III  shows  that,  ceteris  paribus,  stocks  with  higher  stock  returns

tend to have higher  scaled prices.

Finally,  we  also  consider  industry-,  country-,  and  firm-fixed  effects.  We  see  that  the
R2  increases  markedly  with  these  controls.  Nevertheless,  the  coefficient  on  quality  is

relatively  immune  to  the  inclusion  of  these  controls  and  its  statistical  significance  actually
increases.  The  maximum  R2  across  all  these  specifications  is  49%,  leaving  the  majority  of

cross sectional  variation  on prices unexplained.

B.  The Price of Quality Sub-Components

Panel  B  of  Table  III  considers  cross-sectional  regressions  on  each  separate  quality

score, univariately  and multivariately:

     P𝑡

𝑖 = 𝑎 + 𝑏1 𝑏Profitability𝑡

𝑖 + 𝑏2 Growth𝑡

𝑖 + 𝑏3 Safety𝑡

𝑖
𝑖 + 𝑐𝑜𝑛𝑡𝑟𝑜𝑙𝑠 + 𝜀𝑡

 (9)

We  see  that  prices  of  profitability,  growth  and  safety  are  positive  throughout,  controlling  for

each  other  and  our  other  control  variables  and  fixed  effects.  In  other  words,  high-quality
stocks  tend  to  have  relatively  higher  prices  than  low-quality  stocks.  The  maximum  R2

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 19

reaches  48%  in  the  U.S.  and  42%  in  the  global  sample, still leaving a large part of the cross

section of prices unexplained.

C.  The Price of Quality across Subsets of Stocks

Panel  C  of  Table  III  reports  the  price  of  quality  by  size  decile.  In  particular,  we run

regression  (8)  for  each  sub-sample  of  stocks  sorted  by  size.  We  see  that  the  results  are
consistent  across  size  groups,  both  in  the  U.S.  and  globally.  Also  note  that  the  average  R2

rises  across  decile  size  reaching  71%  (55%)  for  U.S.  (global)  firms  in  the  top  size  deciles.

Although  for  the  median  firm  the  vast  majority  of  cross  sectional  variation  on  prices

remained  unexplained,  over  the  largest  firms,  quality  does  explain  a  significant  amount  of

cross sectional  dispersion  in (scaled) prices.

The  Appendix  contains  further  robustness  tests.  Table  A3  reports  results  from

monthly  regressions  where  market-to-book  follows  the  convention  in  Asness  and  Frazzini

(2013)  defined  as  book  equity  divided  by  the  current  market  equity  of  the  firm  each  month.

Figure  A1  report  results  by  industry.  This  figure  plots  t-statistics  of  the  quality  coefficients

from  annual  Fama-Macbeth  regressions  within  71  GICS  industries  using  our  full  set  of

controls.  All  the  results  tell  a  consistent  story:  high  quality  firm  tend  to  command  higher

prices.

To  summarize,  our  results  are  consistent  with  the  hypothesis  that  high  quality  firm

command  higher  (scaled)  prices.  However,  the  explanatory  quality  is  limited,  leaving  a  large

amount  of  variation  in  prices  unexplained.  Our  results  appear  robust  to  specification,  not

driven  by effects related to small  stocks or by a particular  industry  or geography.

4.  Understanding the Price of Quality: The  Return of Quality Stocks

We  would  like  to  shed  light  on  our  finding  that  quality  explains  prices  only  to  a

limited  extent:  is  this  finding  because  of  (a)  the  market  uses  superior  quality  measures  (and,

if  we  observed  these  measures,  they  would  be  strongly  related  to  prices)  or  in  some  cases

reverse  causality;  (b) quality is linked to risk in a way not captured by our safety measure; or

(c)  limited  market  efficiency.  Explanation  (c)  implies  that  high-quality  stocks  have  higher

risk-adjusted  returns  than  low-quality  stocks  as  market  prices  fail  to  fully  reflect  the  quality

characteristics;  (b)  implies  a  univariate  relation  between  quality  and  future  returns  which  is

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 20

reduced  or  eliminated  by  an  effective  risk  model;  (a)  means  that  the  relation  between  our

measured  quality  and  ex  post  returns  is  attenuated,  noisy,  or  potentially  biased  –  in  the

simplest  form,  this  explanation  means  that  quality  should  be  unrelated  to  risk-adjusted

returns.  Hence,  to  seek  an  explanation  for  the  limited  relation  between  price  and quality, we

need to analyze  the future returns of quality  stocks.

A.  The Returns of Quality-Sorted Portfolios

Table  IV  reports  the  returns  of  stocks  sorted  into  ten  deciles  based  on  their  quality

score.  The  table  reports  both  excess  returns  over  T-bills  and  alphas  with  respect  to,

respectively,  the  CAPM  1-factor  model,  the  Fama  and  French  (1993)  3-factor model (which

includes  the  size  factor  SMB  and  the  value  factor  HML  in  addition  to  the  market  factor

MKT),  and  the  4-factor model that also includes the momentum factor UMD (Jegadeesh and

Titman  (1993),  Asness  (1994),  and  Carhart  (1997)).  Specifically,  these  alphas  are  the

intercepts  from  the  following  regression  with  the  first  1,  3,  or  4  right-hand-side  variables

included:

𝑟𝑡 = 𝛼 + 𝛽𝑀𝐾𝑇𝑀𝐾𝑇𝑡 + 𝛽𝑆𝑀𝐵𝑆𝑀𝐵𝑡 + 𝛽𝐻𝑀𝐿𝐻𝑀𝐿𝑡 + 𝛽𝑈𝑀𝐷𝑈𝑀𝐷𝑡 + 𝜀𝑡         (10)

We  see  that  excess  returns  increase  almost  monotonically  in  quality  such  that  high-

quality  stocks  outperform  low-quality  stocks.  The  right-most  column  reports  the  return

difference  between  the  highest  and  lowest  deciles  and  the associated  t-statistic, showing that

high  quality  stocks  earn  higher  average  returns  than  low  quality  stocks  (40  and  48  basis

points  per  month  depending  on  the  sample)  and  we  can  reject  the  null  hypothesis  of  no

difference in average returns (t-statistics of 2.43 and 3.36).

When  we  control  for  market  risk  and  other  factor  exposures,  the  outperformance  in

the  alpha  of  high-quality  stocks  and  their  statistical  significance  is  in  fact  even  larger.  This

higher  outperformance  arises  because  high-quality  stocks  actually  have  lower  market

exposures,  and  lower  exposures  to  other  factors,  than  low-quality  stocks.  In  other  words,  as

measured by the CAPM or a 3- and 4-factor model, high quality stocks are safer  (have lower

factor  loadings)

than  low  quality  stocks.  Adjusting  by  the  CAPM  alone  materially

strengthens  our  results  as  higher  quality  stocks  are, partly by construction, lower beta stocks.

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 21

Across  our  three  risk  models  in  our  long  U.S.  sample,  a  portfolio  that  is  long  high  quality

stocks  and  short  low  quality  stocks  earns  average  abnormal  returns  ranging  from  60  to  104

basis  points  per  month  with  associated  t-statistics  ranging  between  3.98  and  8.83.  In  our

broad  global  sample,  we  obtain  similar  results  with  abnormal  returns  between  66  to  94  basis

points  and t-statistics between 3.90 and 6.43.

Our  results  are  thus  consistent  with  explanation  (c)  discussed  above,  but  do  not

appear  to  support  the  simplest  versions  of  explanations  (a)  and  (b).  Indeed,  a  simple  risk

explanation  (b)  is  inconsistent  with  our  finding  that  high-quality  stocks  have  lower  factor

exposures  than  junk  stocks,  but  we  study  risk  in  more  detail  by  considering the performance

of the QMJ factor.

B.  Quality Minus Junk

In  this  section  we  examine the returns of our QMJ factors. As described in Section  2

(Equation  7),  QMJ  is  long  the  average  of  the  Small Quality  and Big Quality  portfolios  and

short  the  average  of  the  Small Junk  and  Big Junk  portfolios.  We  also  construct  long/short

factors  based  on  each  separate  quality component using the same method. Hence, in addition

to QMJ, we have quality  factors based on profitability,  safety and growth.

Table  V  reports  the  correlations  between  the  different  quality  components.  The table

reports the correlation both for the excess returns and for the abnormal returns relative to a 4-

factor model (i.e., the correlations of the regression residuals). We see that all of the pairwise

correlations  among  the  quality  components  are  positive.  The  average  pairwise  correlation

among  the  quality  components  is 0.63 in the U.S. and 0.62 in the global sample, and 0.59 and

0.57  for  abnormal  returns  in  the  two  samples.  Hence,  while  the quality components measure

different  firm  characteristics  that  investors  should  be  willing  to  pay  for,  firms  that  are  high

quality  in  one  respect  tend  to  also  be  high  quality  in  other  respects.  This  did  not have to be.

Each  of  these  variables,  we  argue,  are  quality  measures  investors  should  pay  for  at  the

margin,  but they did not have to be related to one another.  While theory is no guide here, we

think  these  significant  positive  correlations  lend  support  to  our  practical  decision  to  combine

these three thematic sets of measures as one quality  variable.

Table  VI  reports the performance of each of our quality factors in the U.S. (panel A)

and  globally  (panel  B).  Specifically,  the  table  reports  the  average  excess  returns  and  the

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 22

alphas  with  respect  to  the  CAPM,  3-,  and  4-  factor  models. We see that each quality factor

delivers  a  statistically  significant  positive  excess  return  and  alpha with respect to the  CAPM,

3-,  and  4-factor  models  in  the  U.S.  sample  and  significant  4-factor  alphas  in  the  global

sample  as  well (the 3- and 4-factor results are quite similar as momentum, or UMD, does not

change  much).  The  overall  QMJ  factor  tends  to  be  the  strongest  of  the  four,  with  highly

significant  alphas  in  the  U.S.  and  global  samples.  The  abnormal  returns  are  large  in

magnitude  and  highly  statistically  significant.  In  our  U.S.  long  sample,  a  QMJ  portfolio  that

is  long  high  quality  stocks  and  short  junk  stocks  delivers  CAPM,  3-,  and  4-factor  abnormal

returns  of  34,  46,  and  57  basis  points  per month (with corresponding  t-statistics of 4.69, 7.81,

and  9.22).  Similarly,  in  our  Global  broad  sample,  the  QMJ  factor  earns  abnormal  returns  of

49,  58 and 58 basis points  per month  (with corresponding  t-statistics of 5.53,  8.22 and 7.61).

Panels A and B of Table VI also report the risk-factor loadings for the 4-factor model.

We  see  that  the  QMJ  factor  (with  the  exception  of  the  UMD  loading  in  the  global  sample)

have  significant  negative  factor  exposures,  that  is  according  to  4-factor  model, quality stocks

are  in  general safer than junk stocks, yet surprisingly earn higher (not lower) average returns.

QMJ  has  a  significantly  negative  market  and  size  exposures.    That  is,  QMJ is long low-beta

and  large  stocks,  while  being  short  high-beta  small  ones.  As  would  be  expected,  the  safety

factor  has  the  most  negative  market  exposure,  though  only  growth  attains  a  zero  or  small

positive  market  beta,  the  other  quality  composites  also  show  negative  beta.  The  value

exposure  of  QMJ  is  negative  in  the  U.S.  and  globally.  This  negative  value  loading  is

expected  since  high-quality  stocks  have  high  prices  while  the  value  factor  HML  is  long

cheap  stocks.  The  loadings  on  UMD  tend  to  be  smaller  in  magnitude  and  statistically

insignificant  in  some  the  specifications.  The  loadings  are  consistent  across  quality  sub-

components,  with  profitability,  safety,  and  growth  all  having  negative  market,  SMB,  and

HML loadings  in the U.S. and global  samples.

Panel  C  of  Table  VI  and  Figure  1  report  the  performance  of  the QMJ factor across

countries.  Remarkably,  the  QMJ  factor  delivers  positive  returns  and  alphas  in  all  but  one  of

the  24  countries  that  we  study,  displaying  a  strikingly  consistent  pattern  (with  the  only  small

negative  being  in  New  Zealand,  one  of  the  smallest  countries  in  market  capitalization  and

number  of  stocks).  Furthermore  4-factors  alphas  are  statistically  significant  in  17  out  of  24

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 23

countries  despite  the  fact  that  many  individual  countries  have  a  small  cross  section  of

securities and a short time series.

Figures  2  and  3  show  the  performance  of  the  QMJ  factor  over  time  in the U.S. and

global  samples.  Specifically,  Figure  2  shows  the cumulative return of the QMJ factor (plotted

as  the  cumulative  sum  of  excess  returns  to  avoid  compounding  issues)  and  Figure  3  shows

the  cumulative  sum  of  QMJ’s  4-factor  risk-adjusted  returns  (the  sum  of  the  monthly  in-

sample  regression  alpha  plus  the  regression  error).  Both  plots  show  that  QMJ  factor  has

consistently  delivered  positive  excess  returns  and  risk-adjusted  returns  over  time  with  no

particular  subsample  driving  our  results.  Figure  A2  in  the  appendix  plot  the  4-factor  alphas

by year.

C.  Robustness of QMJ Performance

Table  VII  reports  the  performance  of  our  quality  factors  using  alternative  risk-

adjustments.  Specifically,  we  report alphas relative to the 5-factor model of Fama and French
(2015)  and  the  6-factor  model  augmented  with  the  (UMD)  momentum  portfolio.16  While

using  this  6-factor  adjustment  reduces  the  magnitude  of  the  abnormal  returns,  the results are

consistent  with  prior  ones:  QMJ  portfolios  earn  significant  returns, controlling for the 5- or 6-

factor  models.  We  note  that  QMJ  portfolios  have  large  positive  loading  on  the  RMW  factor

based  on  gross  profit  over  assets  (GPOA),  which  is  not  surprising  given  that  GPOA  is  a

component  out  our  profitability  composite.    Nevertheless,  alphas  are  positive,  ranging  from

17  to  30  basis  points  per  month  with  t-statistics  ranging  from  2.10 to 6.34 across the  various

specifications.  Said  differently,  RMW  is  a  quality  factor  so  we  are  measuring  the  return  of

quality  broadly  defined,  controlling  for a narrow quality  measure and other factors.

Furthermore,  factor  loadings  to  the  market,  size,  and  value  remain  negative,

indicating  that  high  quality  stocks  are  safer  than  junk  stocks  in terms of these risk exposures

(while  CMA, RMW, and UMD have less clear interpretations  as risk).

16  The  explanatory  variables  are  the  returns  of  the  market  (MKT),  size  (SMB),  book-to-market  (HML),

profitability  (RMW)  and investment (CMA) portfolios from Fama and French (2015) an d the momentum

(UMD) portfolio. All the portfolios are from Ken’s French data library. The shorter sample period (July 1963 to

December 2016 for the U.S. and November 1990 to December 2016 for the Global sample) is due to the slightly

shorter availability of the data on Ken’s French data library relative to our sample.

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 24

We  report  a  series  of  additional  results  and  robustness  checks in the appendix. Table

A4  reports  returns  for  the  individual  components  (Small  Quality,  Big  Quality,  Small  Junk,

Big  Junk)  of  the  QMJ  factors.    In  Table  A5  we  split  the  sample  in 20-year subsamples and

report  QMJ  returns  by  size  (10  size-sorted  based  on  NYSE-breakpoints).  Table  A6  and

Figure  A3 report results for large and small cap stocks within each country. Table A7 reports

QMJ  abnormal  returns  controlling  for  the  4-factor  model  augmented  with  the  betting  against

beta  (BAB)  factor  of  Frazzini and Pedersen (2014). Table A8 reports QMJ abnormal returns

controlling  for  the  6-factor  model  plus  BAB.  Finally,  Figure  A4  reports  results  by  industry

using  71  global  GICS  industries.  We  form a QMJ portfolio within each industry and report  4-

factor adjusted information  ratios.

All  the  results  point  in  the  same  direction  with  consistency  across  size,  time  periods,

countries,  and  construction  methodology:  QMJ  portfolios  that  are  long  high  quality  stocks

and  short  junk  stocks  earn  large  and  significant  abnormal  returns  relative to variety of factor

models,  ranging  from  1-  to  7-factor  models.  Furthermore,  quality stocks do not appear riskier

(as  defined  by  model  loadings);  if  anything  they  appear  safer  than  junk  stocks  and  a  result

earn abnormal  returns that are larger than their excess returns.

The  return  evidence  on  the  QMJ  factors  could  potentially  be  consistent  with  both

mispricing  (quality  stocks  are  underpriced  and  junk  stocks  are  overpriced),  or  risk  (quality

stocks  underperform  junk  stocks  in  bad  states  of  the  world)  that  is  not  fully  captured by the

factor  models  considered  above.    Although  a  full  explanation  of  the  driver  of  quality  returns

is  beyond  the  scope  of  this  paper,  we  can nonetheless provide some stylized facts that either

explanation  should  generate in order to fit the available  evidence.

D.  The Risk of Quality Stocks

We  have  already  noted  that the evidence does not point  toward compensation for risk

measured  by  the  host  of  factor  models  considered  above.  The  evidence  also  does  not  point

toward  compensation  for  tail  risk  as  seen  in  Table  VIII. We compute the return of the QMJ

factors  during  recession and expansions,  during severe bear and bull markets (defined as total

market  returns  in  the  past  12  months  below  -25%  or  above  +25%),  during  periods  of  high

and  low  market  volatility  (we  measure  volatility  as  the  1-month  standard  deviation  of  daily

returns  of  the  CRSP-value  weighted  index  or  the  MSCI-World  index  and  split  the  sample in

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 25

the  30%  top  and  bottom  time  periods)  and  during  periods  of  a  large  increase  or  drop  in

aggregate  volatility  (again,  we  split  the  sample  into  the  30%  top  and  bottom  time  periods  in

terms  of  the  1-month  change  in  volatility).  We  find no evidence of compensation for tail risk,

if  anything  the  evidence  again  points  toward  high  quality  stocks  being  safer  rather  than

riskier  than  junk  stocks:  quality  appears  to  hedge  (as  opposed  being  correlated to periods) of

market distress.

To  study  further  the  risk  of  QMJ, Figure 4  plots the performance of QMJ against the

return  on  the  market.  The  negative  beta  of  QMJ  is  clearly  visible  by  the  downward  sloping

relation  of  the  excess  return  of  QMJ  and  the  market.  Further,  the  relatively  tight  fit  around

the  curve  shows  the  limited  residual  risk,  implying  a  strong  and  consistent  historical

performance  of  QMJ  during  down  periods  for  the  market.  QMJ  also  performs  well  in

extreme  down  markets;  in  fact,  the  estimated  second-order  polynomial  shown  in  the  graph

has  a  positive  (but  insignificant)  quadratic  term,  meaning  that  the  fitted  curve  bends  upward

in  the  extreme.  This  mild  concavity  is  mostly  driven  by  the  returns  to  the  profitability

subcomponent  of  quality.  The  quadratic  term  is  marginally  significant  (t-statistic  of  2.4)  for

the  profitability  factor  in  our  long  sample.  The  strong  return  in  extreme  down  markets  is

consistent  with  a  flight  to  quality  (or  at  least  to  profitability).  That  is,  in  down  markets,

investors  may  exhibit  flight  to  quality  in  the  sense  that  prices  of  unprofitable  stocks  drop

more  than  the  prices  of  profitable  stocks,  even  adjusting  for  their  betas.  The  strong

performance  of  QMJ  in  down  markets  is  robust  to  considering  longer  time  periods  such  as

down-market  quarters or down-market  years (not shown for brevity).

Looking  at  the  alphas,  also  reveal  a  similar  pattern  of  mild  flight  to  quality.  At  the

very  least,  quality  stocks,  even  after  adjustment  for  their  factor  loadings,  do  not  appear  to

perform  poorly  in  period  of  extreme  market  distress,  if  anything  they  tend  to  deliver  higher

returns in  those states of the world.

Overall,  our

findings  present  serious  challenges  for

the  risk-based

theories

(explanation  (b)  discussed  above).  Using  a  variety  of  factor models ranging from the CAPM

to  a  7-factor  model  as  our  risk  adjustment,  we  show  that  QMJ  factors  earn  significant

abnormal  returns.  Looking  at  factor  exposures  and  performance  during  distressed  market

conditions,  quality  stocks  appear  safer,  not  riskier,  than  junk  stocks.  Of  course,  alternative

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 26

risk-based  explanations  are  always  possible;  such  explanations  will  have  to  generate  these

patterns to match the empirical  evidence.

E.  Market (In)efficiency: Analysts’ Expectations of the Price of Quality

To  test  whether  the  limited  explanatory  power  of  quality  on  price  could  be  driven  at

least  partly  by  limited  efficiency  (theory  (c)  above),  we  consider  the  expectations  of  equity

analysts  using  the  methodology  of  Brav,  Lehavy,  and  Michaely  (2008).  We  consider  each

analyst’s target price, that is, the expected price one year into the future. As seen in Table IX,

target  prices  scaled  by  book  values are higher for high-quality stocks. In other words, analyst

forecasts appear consistent with the idea that high-quality  stocks deserve higher  prices.

Next,  Table  IX  and Figure 5 consider the implied return expectations computed as the

ratio  of  the  target  price  to  the  current price minus 1. We see that analysts have lower return

expectations  for  higher-quality  stocks  than  junk  stocks.  In  other  words,  analyst  expectations

are inconsistent  with  the high  ex-post realized  returns of high-quality  stocks.

Analysts’  implied  return  expectations  could  reflect  that  the  required  return  of  high-

quality stocks is lower than that of junk stocks (because quality stocks are viewed as safer). If

so,  quality  stocks  should  realize  lower  returns  than  junk  stocks,  or  said  differently,  quality

stocks  should  have  a  larger  price  premium.  These  findings  of  erroneous analyst expectations

are therefore consistent with theory (c) for our finding  that the price of quality  is too limited.

If  the  limited  price  of  quality  is  partly  driven  by  limited  market  efficiency,  then  how

far  off  the  mark  are  market  prices?  This  is  an  important  question,  but  a  precise  answer  is

beyond the scope of this paper. To get a sense of magnitudes, we can consider the event-time
cumulative  5-year  abnormal  return  of  QMJ.17  Buying  quality  and  shorting  junk  for  5  years

earns  a  cumulative  4-factor  alpha  of  21.29%  on  average  in  our  US  sample  (22.6%  in  the

global  sample).  The  cumulative  abnormal  return  can  be  interpreted  as  an  average

underpricing  of  10.64%  among  high-quality  stocks  and  overpricing  of  10.64%  of junk stocks.

17 We compute the k-month event-time abnormal return 𝛼 𝑘 as the intercept in a regression

𝑘 = 𝛼 𝑘 + 𝛽𝑀𝐾𝑇 𝑀𝐾𝑇𝑡 + 𝛽𝑆𝑀𝐵𝑆𝑀𝐵𝑡 + 𝛽𝐻𝑀𝐿𝐻𝑀𝐿𝑡 + 𝛽𝑈𝑀𝐷𝑈𝑀𝐷𝑡 + 𝜀𝑡
𝑟𝑡

𝑘 = ∑ 𝑤𝑖,𝑡−𝑘𝑟𝑖,𝑡

where 𝑟𝑡
event-time cumulative abnormal return 𝐶𝐴𝑅 is given by 𝐶𝐴𝑅 = ∑ 𝛼 𝑘
.

𝑖

𝑘

 is excess return in month 𝑡 of a calendar-time portfolio formed in month 𝑡 − 𝑘. The

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 27

Of  course,  this  could  reflect  that  some  quality  stocks  are  more  underpriced  while  others are

less underpriced  or even overpriced.

F.  Linking Prices and Returns: The Price of Quality Predicts QMJ

We  next  consider  more  directly  the  link  between  the  price  of  quality  and  the  future

returns  of  QMJ.  The  theory  of  limited  market  efficiency  (explanation  (c)  above) implies that

a  higher  price  of quality predicts lower future returns to quality. In other words, when market

prices  incorporate  quality  to  a  larger  extent,  then  the  expected  returns  to  buying  quality  is

lower.  In  contrast,  theories (a)-(b) do not have clear predictions for the time-variation of risk-

adjusted  returns.

We  first  consider  how  the  price  of  quality  varies  over  time.  To  study  this,  Figure  6

shows  the  time  series  of  the  price  of  quality,  that  is,  the  time  series  of  the  Fama-MacBeth

regression  coefficients  that  we  estimate  above  in  Equation  8.  Specifically,  we  plot  the

monthly  coefficients  form  Table  A3  column  (1)  and  (7).  We  see  that  the  price  of  quality

varies  significantly  over  time.  As  one  might  expect,  the  price  of  quality  is  low  during  the

height  of  the  internet  bubble  in  early  2000  and  has  other  large  swings  during  time  periods

consistent  with  economics  intuition  as  discussed  in  the  introduction.  Figure  A5  in  the

appendix  plot  the times series of cross sectional  coefficient  for the quality  sub-components.

The  intuitive  pattern  of  the  price  of  quality  suggests  that  the  variation  is  not  just

driven  by  noise.  To  explore  further  the  variation  in  the price of quality, it is interesting to link

prices  and  subsequent  returns  in  the  time  series.  Specifically,  if  this  time  variation  is not due

to  mis-measurement  noise,  then  a  high  price  of  quality  should  predict low subsequent returns

of  QMJ.  Table  X  provides  evidence  of  such  predictability.  This  table  reports  the  regression

coefficients  of time-series  regressions of future QMJ returns on the ex ante price of quality:

𝑄𝑀𝐽𝑡→𝑡+𝑘 = 𝛽0+ 𝛽lagged FMB𝑏𝑡−1 + 𝛽𝑙𝑎𝑔𝑔𝑒𝑑 𝑄𝑀𝐽𝑄𝑀𝐽𝑡−12,𝑡−1 + 𝜀𝑡

        (11)

Said  simply,  𝑄𝑀𝐽𝑡→𝑡+𝑘  is  the  return  of  QMJ  over  the future k months,  𝑏𝑡−1 is the lagged price

of  quality  (the  variable  of  interest),  and  𝑄𝑀𝐽𝑡−12,𝑡−1  controls  for  past  returns.  Let  us describe

each of these variables in detail.

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 28

We run the regression in two ways: Using the excess returns of the QMJ factor on the

left  hand  side  (“Ret-Rf”)  and  using  the  alpha  of  the  QMJ  factor  on  the  left  hand  side

(“Alpha”).  The  future  excess  return  on  the  raw  QMJ  factor  is  computed  simply  by

cumulating  returns,  𝑄𝑀𝐽𝑡→𝑡+𝑘 = ∏ (1 + 𝑄𝑀𝐽𝑡+𝑗 + 𝑟𝑡+𝑗

𝑘
𝑗=0

𝑓 )
𝑓 )− ∏ (1 + 𝑟𝑡+𝑗

𝑡

.  To  compute  the  alphas,

we  regress  QMJ  on  the  contemporaneous  returns  of  the  market,  size,  value, and momentum

factors  and  compute  the  alpha  as  the regression residual plus the intercept (i.e., as the return

of  QMJ  with  its  factor  exposures  hedged  out).  We  then  cumulate  these  alphas  𝑄𝑀𝐽𝑡→𝑡+𝑘 =

∏ (1 + 𝛼𝑡+𝑗 + 𝑟𝑡+𝑗

𝑘
𝑗=0

𝑓 )
𝑓 ) − ∏ (1 + 𝑟𝑡+𝑗

𝑡

  and  use  them  on  the  left  hand  side  of  (11).  We  consider

alphas  to  ensure  that  the  predictability  of  the  price  of  quality  on  QMJ  is  not  driven  by  any

potential  predictability  of other factors.

The  price  of  quality,  𝑏𝑡−1  is  the  lagged  Fama-MacBeth  regression  coefficient  from
Equation  (8)  that  gives  the  connection  between  price  and  quality  at  each  time.  Specifically,

the  price  of  quality  is  estimated  from  the  monthly  regressions  reported  in  table  A3  column

(1)  and  (7).  We  are  interested  in  testing  the  hypothesis  that  a  high  lagged  price  of  quality

predicts lower subsequent  returns, that is,  𝑏𝑡−1 < 0.

Last,  𝑄𝑀𝐽𝑡−12,𝑡−1  is  defined  as  the  portfolio–weighted  average  of  the  past  1-year
returns  of  the  stocks  in  the  QMJ  portfolio.  This  captures  standard  momentum  effects,  again

to ensure that the predictability  of the price of quality  is a novel finding.

Table  X  reports  only the regression coefficient for the variable of interest,  𝑏𝑡−1, the ex

ante  price  of  quality.  We  run  overlapping  forecasting  regressions  predicting returns from one

month  up  to  five  years.  We  adjust  standard  errors  for  heteroskedasticity  and  autocorrelation

(Newey and West (1987)) with a lag length  of five years.

Table  X  shows  that  a  high  price  of  quality  indeed  predicts  lower  future  returns  on

QMJ.  In  our  U.S.  long  sample  shown  in  Panel  A,  all  the  coefficients  have  the  expected

negative  sign  and  we  are  able  to  reject  the  null  hypothesis  of  no  predictability  in  all  but  one

specification.  Predictability  rises  with  the  forecasting  horizon,  indicating  slowly  changing

expected  returns.  The results for our shorter global sample in Panel B are noisier, but we see

that  all  of  the  statistically  significant  coefficients  are  negative  as  expected.  The bottom rows

of  Table  X  similarly  test  whether  the  price  of  the  separate  quality  characteristics predict the

returns  of  the  corresponding  long/short  factors.  While  these  results  are  noisier,  the estimates

tend to be negative,  as conjectured.

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 29

To  summarize,  the  results  in  Table  X  are  consistent  with  the  hypothesis  that  the

variation  of  the  price  of  quality  is  not  pure  noise  but,  rather,  reflects  changes  in  the  market

pricing  of quality  characteristics, generating  variation  in  QMJ returns.

5.  Further Asset Pricing Applications

A.  Quality at a Reasonable Price

It  is  interesting  to  consider  what  is  the  “fair”  price  of  quality?  That is, if we suppose

that  a  stock’s  fundamental  value  V  is  a  multiple  of  its  quality,  𝑉 = 𝑚 𝑄𝑢𝑎𝑙𝑖𝑡𝑦,  then  what is

the  fair  value  of  m?  Relatedly,  if  the  market  pays  a  price  for  quality  different  from  m,  then

what is the best way to buy cheap quality  stocks?

To  answer  these  questions,  we  construct a long-short portfolio that we call  quality at

a  reasonable  price (QARP) as follows. Using the same factor construction as for QMJ, we

construct  a  long-short  portfolio  based  on  the  signal  𝑛 𝑄𝑢𝑎𝑙𝑖𝑡𝑦𝑡
of  n.  That  is,  QARP  is  based  on  the  difference  between  a  stock’s  quality  times  n minus its

𝑖)  for  various  choices

𝑖 − z(P𝑡

price-to-book  (normalized  as  a  z-score).  We  should  get  the  highest risk-adjusted return if we

let  𝑛 = 𝑚,  that  is,  if  we  base  the  signal  on  the  quality  multiple  that  corresponds  to  the  true

fundamental  value.  Indeed,  in  this  case,  the  portfolio  is  long  the  highest-alpha  securities  and
short the lowest-alpha  securities.18

While  m  is  generally  unobservable  as  we  do  not  know  true  fundamental  values,  we

can  proceed  by  relying  on  the  fact  that  we  have  normalized  quality  and  prices  based  on the

18 For simplicity consider a 2-period model so that the fundamental value is the expected payoff at

time 2 discounted at the required return, 𝑉 =

𝐸(𝑃2)
1+𝑘

, where k is the required return. The alpha of the security, that

is, the expected excess return above the required return is then

𝛼 = 𝐸 (

𝑃2
𝑃1

) − 1 − 𝑘 =

𝑉 − 𝑃1
𝑃1

(1 + 𝑘)

Naturally, the alpha depends on the difference between the fundamental value 𝑉 and the price 𝑃1 . Since our
measures of quality and price are based on z-scores, we simply subtract the two (rather than dividing by price as

above).

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 30

cross-section.  Specifically,  if  the  highest-quality  stocks  were  the  most  expensive,  then  the

quality  and  price  ranks  would  line  up,  corresponding  to  𝑚 = 1.  When  we  construct  QARP

empirically,  we  do  find  that  the  alpha  is  highest for  n close to 1 both in the U.S. and globally

(as  seen  in Figure A6 in the appendix, which plots the monthly alpha of QARP as function of

n).

Another  way  to  consider  QARP  is  to  simply  form  a  portfolio  of  quality  (QMJ)  and

value  (HML).    The  combination  of  QMJ  and  HML  that  has  the  highest  Sharpe  ratio  puts  a

weight  of  about  63%  on  QMJ  (and,  hence,  the  remaining  37%  on  HML)  in  the  U.S.  and

about 62% weight  on QMJ globally.

The  Sharpe  ratio  of  QARP  (whether  constructed  based  on  combining  signals  or

combining  factor  returns)  is  naturally  higher  than  either  quality  or  value  alone,  about  0.7  in

the  U.S.  and  0.9  globally.  QARP  performs  well  as  quality  strategies  complement  value  by

helping  an  investor  avoid  the  “value  trap,”  namely  the  trap  of  buying  securities  that  look

cheap but deserve to be cheap. Instead, QARP buys securities that are cheap relative to their

quality.  Our  evidence  suggests  that  the  return  to  QARP  is  above  the  equity  risk  premium,

which seems to challenge  rational  risk-based models.

B.  QMJ on the Right-Hand-Side of a Factor Model

We  have  seen  that  QMJ  is  an  intuitive  and  powerful  factor  that has significant alpha

relative to a series of standard factor models. It is also interesting to switch things  around and

put  QMJ  on  the  right-hand-side  to  see  how  it  affects  the  alphas  and  interpretation  of  the

standard factors. More broadly, QMJ is a useful factor to add to the toolbox of global factors,

e.g., when researchers need to test whether new phenomena are driven by quality.

Table  XI  reports  the  results  of  regressing  each  of  the SMB, HML, and UMD on the

other  standard  factors,  with  and  without  QMJ  on  the  right-hand-side.  Let  us  first  consider

SMB,  that  is,  the  size  effect.  SMB  has  a  modest,  but  significant,  excess  return  in  our  US

sample  and  global  sample.    In  both  samples,  SMB  has  a  small  and  insignificant  alpha  when

controlling for the other standard factors (the market, HML, and UMD). The size effect is not

present  in  our  sample,  but  controlling  for  QMJ  completely  changes this conclusion. SMB has

a  very  large  negative  exposure  to QMJ. Clearly, small stocks are junky relative to big stocks.

This  finding  is  intuitive  as  small  stocks  could,  for  instance,  be  young  firms  that  are yet to be

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 31

profitable,  and  are  more  volatile.  Moreover,  controlling  for  QMJ,  the  size  effect  becomes

large  and  highly  significant  in  both  samples.  The  size  effect  is  alive  and  well  when  we

account  for  quality  as  small  stocks  outperform  large  stocks  when  we  compare  firms  of

similar  quality  (and  market  beta,  value  and  momentum  exposure).  This  finding  in  return

space is the analog  of the strong size effect for prices that we documented in  Table III.

Table  XI  further  shows  that  HML  has  a  negative  loading  on  QMJ.  This  is  also

intuitive  as  cheap  stocks  (with  high  book-to-market)  are  naturally  lower  quality  than

expensive  stocks.  This  negative  loading  implies  that  controlling  for  QMJ  increases  the  alpha

of HML, strengthening  the value effect.

The  appendix  contains  further  tests.  Indeed,  Tables  A9-A11  analyzes  different

combinations  of  size  (SMB),  value  (HML),  momentum  (UMD),  investments  (CMA),

profitability  (RMW),  and  betting  against  beta  (BAB).  The  results  show,  for  instance,  that

controlling  for quality  eliminates  the alpha of RMW.

To  summarize,  quality  stocks,  despite earning on average higher returns, appear safer,

not  riskier,  than  junk  stocks  in terms of their market, size, value exposures. As a result, these

factor’s  alpha increase when we control for quality since they, too, load negative on QMJ. At

the  same  time,  quality  can  explain  other  factors  such  as  RMW  and  possibly  other  factors

related to quality  or mispricing.

6.  Conclusion

In  this  paper  we  define  a  quality  security  as  one  that  has  characteristics  that  should

command  a  higher  (scaled)  price.  We  present  a  dynamic  valuation  model,  which  shows  that

quality  stocks  are  profitable,  growing,  and  safe.  We  create  empirical  counterparts  of  each

quality  subcomponent  and  quality  in  general,  which  are  robust  and  inclusive  from  across  the

literature,  testing the hypothesis  that high  quality  firms  have higher  scaled prices.

Consistent  with  market  efficiency,  we  find  that  high  quality  firms  do  exhibit  higher

prices,  on  average.  However,  the  explanatory  power  of  quality  on  prices  is  low,  leaving  the

majority  of  cross  sectional  dispersion  in  scaled  prices  unexplained.  As  a  result,  high  quality

firms  exhibit  high  risk-adjusted  returns.  A  quality-minus-junk  (QMJ)  factor  that  goes  long

high-quality  stocks  and  shorts  low-quality  stocks  earns  significant  risk-adjusted  returns  with

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 32

an  information  ratio  above  1  (i.e.,  a  Sharpe  ratio  above  1  after  hedging  its  other  factor

exposures) in the U.S. and globally  across 24 countries.

Our  results  are  consistent  with  quality  stocks  being  underpriced  and  junk  stocks

overpriced  or,  alternatively,  with  quality  stocks  being  riskier  than  junk  stocks.  However,

while  one  can  never  rule  out  a  risk  explanation  for  the  high  return  of  quality  stocks,  we are

unable  to  identify  this  risk;  in  anything,  we  find  evidence  of  the  opposite.  We  show  that

quality  stocks  are  low  beta  and,  rather  than  exhibiting  crash  risk,  if  anything  they  benefit

from  “flight  to  quality,”  that  is,  they  have  a  tendency  to  perform  well  during  periods  of

extreme  market  distress.  These  findings  present  a  challenge  for  risk-based  explanations.  To

test  the  mispricing  hypothesis,  we  consider  analysts’ expectations. Analysts’ expectations are

consistent  with  the  idea  that  high-quality  stocks  deserve  higher  prices.  However,  analysts

expect  high-quality  stocks  to  deliver  lower  returns  than  junk  stocks,  contrary  to  the  ex  post

realized  returns.  This  evidence  of  systematic  analyst  errors  is  consistent  with  the  mispricing

hypothesis  that the price of quality  is too low.

Finally,  we  show  that  the  price  of  quality  varies  over  time,  generating  a  time-varying

expected  return  on  quality-minus-junk  portfolios:  a  low  price  of  quality  predicts  a  high  future

return of quality  stocks relative  to junk  stocks.

In  summary,  we  document  strong  and  consistent  abnormal  returns  to  quality,  and  do

so  in  a  far  more  inclusive  and  complete  setting  than  prior  papers  simultaneously  using  all

quality  components  implied  by  our  theoretical  model.    We  also  tie  these  results  to the cross-

section  and  time-series  of  the  pricing  of  quality  in  novel  ways.  Our  results  present  an

important  puzzle  for  asset  pricing:    We  cannot  tie the returns of quality to risk, or, in a highly

related  finding,  demonstrate  that  prices  cross-sectionally  vary  “enough”  with  quality

measures.  At  this  point  the  returns  to  quality  must  be  either  an  anomaly,  data  mining

(incredibly  robust  data  mining  -  including  across  countries,  size  and  time  periods,  and  out-of-

sample  relative  to  the  first  draft  of  the  paper),  or  the  results  of  a  still-to-be-identified  risk

factor.

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 33

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 34

References

Acharya,  Viral  and  Lasse  Heje  Pedersen (2005),  “Asset Pricing with Liquidity Risk,” Journal
of Financial  Economics,  77, 375-410.

Altman,  Edward  I.  (1968),  "Financial  ratios,  discriminant  analysis  and  the  prediction  of
corporate bankruptcy."  The  journal  of finance 23.4,  589-609.

Amihud,  Yakov,  and  Haim  Mendelson  (1986),  "Asset  pricing  and  the  bid-ask  spread."
Journal  of financial  Economics  17.2,  223-249.

Ang,  A.,  R.  Hodrick,  Y.  Xing,  X.  Zhang  (2006),  “The  Cross-Section  of  Volatility  and
Expected Returns,” Journal  of Finance,  61, pp. 259-299.

–  (2009),  “High  Idiosyncratic  Volatility  and  Low  Returns:  International  and  Further  U.S.
Evidence,”  Journal  of Financial  Economics,  91, pp. 1-23.

Asness,  Cliff.,  (1994),  “Variables  that  Explain  Stock  Returns”,  Ph.D. Dissertation, University
of Chicago.

Asness,  Cliff  and  A.  Frazzini  (2013),  “The  Devil  in  HML’s  Detail”,  Journal  of  Portfolio
Management,  39, 49-68.

Asness,  C.,  A.  Frazzini,  and  L.  H.  Pedersen  (2012),  “Leverage  Aversion  and  Risk  Parity”,
Financial  Analysts Journal,  68,  47-59.

Baker,  Malcolm  and  Jeff  Wurgler  (2002),  “Market  timing  and  capital  structure,”  Journal  of
Finance 57,  1-32.

Banz,  Rolf  W.  (1981),  “The  relationship  between  return  and  market  value  of  common
stocks,” Journal  of Financial  Economics  9, 3–18.

Berk,  Jonathan  B.  (1995),  “A  Critique  of  Size-Related  Anomalies,”  The  Review of Financial
Studies,  8, 2, 275-286.

Black,  F.  (1972),  “Capital  market  equilibrium  with  restricted  borrowing,”  Journal  of
business,  45,  3, pp. 444-455.

– (1992),  “Beta and Return,” The Journal  of Portfolio  Management,  20,  pp. 8-18.

Black,  F.,  M.C.  Jensen,  and  M.  Scholes  (1972),  “The  Capital  Asset  Pricing  Model:  Some
Empirical  Tests.”  In  Michael  C. Jensen (ed.), Studies in the Theory of Capital Markets, New
York, pp. 79-121.

Brav,  A.,  Lehavy,  R.,  and  Michaely,  R.  (2005),  “Using  expectations  to  test  asset  pricing
models,”  Financial  Management,  34(3),  31-64.

Campbell,  John  Y.  and  Robert  J.  Shiller  (1988),  “The  dividend-price  ratio  and  expectations
of future dividends  and discount  factors,” Review of Financial  Studies  1, 195–228.

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 35

Campbell,  John  Y.,  Jens  Hilscher,  and  Jan  Szilagyi  (2008),  “In  search  of  distress  risk”,
Journal  of Finance 63,  2899–2939.

Carhart,  Mark  M.  (1997)  “On  persistence  in  mutual  fund  performance,”  The  Journal  of
Finance,  52, 1, 57-82.

Cohen,  Randolph  B.,  Christopher  Polk,  and  Tuomo  Vuolteenaho  (2003),  “The  value  spread,”
The Journal  of Finance 58,  609-642.

Cohen,  Randolph  B.,  Christopher  Polk,  and  Tuomo  Vuolteenaho  (2009),  “The  price  is
(almost)  right,”  The Journal  of Finance,  64,  2739-2782.

Cochrane,  John  (2011),  “Presidential  Address:  Discount  Rates,”  The  Journal  of  Finance,  66,
4, 1047-1108.

Daniel,  Kent  and  Sheridan  Titman,  (2006),  “Market  reaction  to  tangible  and  intangible
information,”  Journal  of Finance 61,  1605-1643.

Falkenstein,  E.G.  (1994),  “Mutual  funds,
Dissertation,  Northwestern University.

idiosyncratic  variance,  and  asset  returns”,

Fama,  Eugene  F.,  and  Kenneth  R.  French  (1992),  “The  cross-section  of  expected  stock
returns,” the Journal  of Finance 47.2,  427-465.

Fama,  E.F.  and  French,  K.R.  (1993),  “Common  risk  factors  in  the  returns  on  stocks  and
bonds,”  Journal  of Financial  Economics  33,  3–56.

Fama,  E.F.  and  French,  K.R.  (2006),  “Profitability,  investment  and  average  returns,”  Journal
of Financial  Economics,  82, 461-518.

Fama,  E.F.  and  French,  K.R.  (2013),  “A  Four-Factor  Model  for  the  Size,  Value  and
Profitability  Patterns in Stock Returns,” Working  Paper.

Fama,  Eugene  F.,  and  James  D.  MacBeth  (1973),  “Risk,  return,  and  equilibrium:  Empirical
tests,” The Journal  of Political  Economy,  81, 607-636.

Feltham,  Gerald  A.,  and  James  A.  Ohlson  (1999),  “Residual  earnings  valuation  with risk and
stochastic interest rates,” The Accounting  Review 74(2),  165-183.

Frankel,  Richard  and  Charles  Lee.  (1998),  “Accounting  valuation,  market  expectation,  and
cross-sectional  stock returns,” Journal  of Accounting  and Economics,  25 ,283-319.

Frazzini,  A.  and  L.  H.  Pedersen  (2013),  “Betting  Against  Beta”,  Journal  of  Financial
Economics,  forthcoming.

Fu,  F.  (2009),  “Idiosyncratic  risk  and  the  cross-section of expected stock returns,” Journal of
Financial  Economics,  vol. 91:1,  24-37.

Garleanu,  N.,  and  L.  H.  Pedersen  (2009),  “Margin-Based Asset Pricing and Deviations from
the Law of One Price," UC Berkeley and NYU, working  paper.

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 36

George,  Thomas  J.,  and  C.Y.  Hwang  (2010),  “A  Resolution  of  the  Distress  Risk  and
Leverage  Puzzles  in  the  Cross  Section  of  Stock  Returns,”  Journal  of  Financial  Economics,
96,  56-79.

Gibbons,  M.  (1982),  “Multivariate  tests  of  financial  models:  A  new  approach,”  Journal  of
Financial  Economics,  10, 3-27.

Graham,  Benjamin,  and  David  L.  Dodd  (1934),  “Security  analysis,”  McGraw-Hill,  New
York, NY.

Jegadeesh,  Narasimhan  and  Sheridan  Titman  (1993),  “Returns  to  Buying  Winners  and
Selling  Losers:  Implications  for  Stock  Market  Efficiency,”  The  Journal  of Finance, 48(1), 65-
91.

Jensen,  Michael  C.  (1986),  “Agency  costs  of  free  cash  flow,  corporate  finance,  and
takeovers,” The American Economic  Review 76(2),  323-329.

Kandel,  S.  (1984),  “The  likelihood  ratio  test  statistic  of  mean-variance  efficiency  without  a
riskless  asset,” Journal of Financial  Economics,  13, pp. 575-592.

Karceski,  J.  (2002),  “Returns-Chasing  Behavior,  Mutual  Funds,  and  Beta’s  Death,”  Journal
of Financial  and Quantitative  Analysis,  37:4,  559-594.

McLean,  David,  Jeffrey  Pontiff,  and  Akiko  Watanabe  (2009),  “Share  Issuance  and  Cross-
Sectional  Returns: International  Evidence,” Journal  of Financial  Economics  94, 1-17.

Myers,  Stewart,  and  N.  Majluf  (1984),  “Corporate  financing  and  investment  decisions  when
firms  have  information  that  investors  do  not  have,”  Journal  of  Financial  Economics  13,  187–
221.

Mohanram,  Partha  (2005),  “Separating  Winners  from  Losers  among  Low  Book-to-Market
Stocks using  Financial  Statement Analysis”,  Review of Accounting  Studies,  10,  133–170.

Newey,  Whitney  K;  West,  Kenneth  D  (1987),  “A  Simple,  Positive  Semi-definite,
Heteroskedasticity  and  Autocorrelation  Consistent  Covariance  Matrix,”  Econometrica  55  (3),
703–708

Novy-Marx,  Robert (2012),  “Quality  investing,”  working  paper, Rochester.

Novy-Marx,  Robert  (2013),  “The  Other  Side  of  Value:  The  Gross  Profitability  Premium,”
Journal  of Financial  Economics  108(1),  1-28.

Ohlson,  James  A.  (1980),  "Financial  ratios  and  the  probabilistic  prediction  of  bankruptcy."
Journal  of accounting  research 18(1), 109-131.

Pástor,  Ľuboš,  and  Robert  F.  Stambaugh  (2003),  "Liquidity  risk  and  expected  stock  returns."
Journal  of Political  economy  111.3,  642-685.

Pástor,  Ľuboš,  and  Veronesi  Pietro  (2003),  “Stock  valuation  and  learning  about  profitability,”
The Journal  of Finance 58.5,  1749-1790.

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 37

Penman,  Stephen  H.  (1996),  “The  articulation  of  price-earnings  ratios  and  market-to-book
ratios and the evaluation  of growth,”  Journal  of Accounting  Research, 34 (2), 235-259.

Penman,  Stephen,  Scott  Richardson,  and  Irem  Tuna  (2007),  “The  Book-to-Price  Effect  in
Stock Returns: Accounting  for Leverage,” Journal  of Accounting  Research, 45 (2), 427-467.

Piotroski,  Joseph  D.  (2000),  “Value  Investing:  The  Use  of  Historical  Financial  Statement
Information  to Separate Winners from Losers,” Journal  of Accounting  Research, 38, 1-41.

Pontiff,  J.,  W.  Woodgate  (2008),  “Share  issuance  and  cross-sectional  returns,”  Journal  of
Finance 63,  921-945.

Richardson,  Scott,  Richard  G.  Sloan,  Mark  Soliman,  and  Irem  Tuna  (2005),  “Accrual
Reliability,  Earnings  Persistence  and  Stock  Prices,”  Journal  of Accounting and Economics 39
(3), 437-485.

Richardson,  Scott  A.,  Richard  G.  Sloan,  Mark  T.  Soliman,  and  Irem  Tuna  (2006),  “The
implications  of  accounting  distortions  and  growth  for  accruals  and  profitability,”  The
Accounting  Review 81,  no. 3, 713-743.

Roll,  Richard  (1984),  “Orange  juice  and  weather,”  American  Economic  Review, 74 (5), 861-
880.

Roll,  R. (1988),  “R2,”  Journal  of Finance 43,  541–566.

Scholes,  M.,  and  J.  Williams  (1977),  “Estimating  Betas  from  Nonsynchronous  Data"  Journal
of Financial  Economics  ,5 ,309-327.

Shanken,  J.  (1985),  “Multivariate  tests  of  the  zero-beta  CAPM,”  Journal  of  Financial
Economics,  14,. 327-348.

Sloan,  Richard  G.  (1996),  "Do  Stock  Prices  Reflect  Information in Accruals and Cash Flows
About Future Earnings?",  The Accounting  Review 71,  289-315.

Summer,  Lawrence  H.  (1986),  “Does  the  Stock  Market  Rationally  Reflect  Fundamental
Values?,” The Journal of Finance 41, 3, 591-601.

Vuolteenaho,  Tuomo  (2002),  “What  Drives  Firm-Level  Stock  Returns?,”  The  Journal  of
Finance,  57, 1, 233-264.

Quality Minus Junk - Asness, Frazzini, and Pedersen - Page 38

Table I
Summary  Statistics

This table shows summary statistics . Our sample consists of all common stocks traded in 24 developed markets
between  June  1957  and  December  2016.  The  24  markets  in our sample  correspond  to union of  all  countries
belonging to the MSCI World Developed Index over our sample period. Stock returns and accounting data are
from the union of the Center for Research on Security Prices (CRSP) pricing database, the Compustat North
America  Fundamentals  Annual,  Fundamentals  Quarterly  and  Security  Daily  databases,  and  the  Compustat
Global  Fundamentals  Annual,  Fundamentals  Quarterly  and  Security  Daily  databases.  We  assign  individual
issues to  the  corresponding  market based  on the  location of  the  primary exchange.  For  companies  traded  in
multiple  markets  we  use  the  primary  trading  vehicle  identified  by  Compustat.  We  restrict  the  sample  to
common stocks (identified by a CRSP share code “shrcd” of 10 or 11 or a Compustat share code “tcpi” of 0)
and exclude securities trading on over-the-counter exchanges.

Quality Minus Junk – Asness, Frazzini, and Pedersen – Tables and Figures – Page T1

Country Total number of stocksAverage number of stocksAverage Firm size  (Billion-USD) Average Global Market Weight Start DateEnd DateAustralia2,847         1,224                 0.690.026199506201612Austria168            80                      1.020.003199506201612Belgium282            136                    1.900.008199506201612Canada5,337         1,736                 0.610.039198906201612Switzerland426            225                    3.570.024199506201612Germany1,567         749                    1.710.037199506201612Denmark325            161                    1.030.005199506201612Spain314            143                    3.940.018199506201612Finland214            114                    1.580.005199506201612France1,590         695                    2.380.049199506201612United Kingdom4,899         1,822                 1.530.081199306201612Greece375            246                    0.390.003200106201612Hong Kong1,982         989                    1.300.040199506201612Ireland103            46                      2.070.003199506201612Israel620            303                    0.450.003200106201612Italy559            250                    2.360.018199506201612Japan5,136         3,235                 1.160.107199306201612Netherlands341            168                    3.230.015199506201612Norway526            191                    1.000.006199506201612New Zealand266            111                    0.330.001199506201612Portugal 112            55                      1.440.002199706201612Singapore1,037         528                    0.650.010199506201612Sweden881            321                    1.200.011199506201612United States24,709       4,608                 1.580.487195706201612

Table II
Persistence of Quality Measures

This table shows average quality scores. Each calendar month, stocks in each country in  are ranked in ascending
order on  the basis of their  quality score. The  ranked stocks  are  assigned to  one of  ten portfolios.  U.S. sorts  are
based on NYSE breakpoints. This table reports each portfolio’s quality score at portfolio formation (date t) up to
the subsequent ten years  (date t  +  120  months). We  report  the time  series  average of the value-weighted  cross
sectional means. Panel A reports results from our Long Sample of domestic stocks. The sample period runs from
June 1957 to December 2016. Panel B reports results from our Broad Sample of global stocks. The sample period
runs  from  June  1989  to  December  2016.  Standard  errors  are  adjusted  for heteroskedasticity  and  autocorrelation
with a lag length of five years (Newey and West (1987)) and 5% significance is indicated in bold.

Quality Minus Junk – Asness, Frazzini, and Pedersen – Tables and Figures – Page T2

P1P2P3P4P5P6P7P8P9P10H-LH-L195706 - 201612(Low)(High)t-statQualityt-1.44-0.82-0.51-0.27-0.050.170.390.650.991.623.0651.04Qualityt + 12M-0.88-0.50-0.33-0.17-0.010.190.350.550.841.452.3536.32Qualityt + 36M-0.52-0.32-0.24-0.16-0.020.120.240.420.651.231.7721.90Qualityt + 60M-0.27-0.20-0.14-0.13-0.050.070.150.310.511.041.3212.96Qualityt + 120M-0.27-0.22-0.13-0.11-0.050.030.140.260.440.861.1310.90Profitt + 120M-0.37-0.23-0.12-0.020.100.130.250.330.511.081.4721.58Growtht + 120M-0.23-0.18-0.16-0.16-0.18-0.14-0.080.010.160.260.504.91Safetyt + 120M-0.42-0.25-0.14-0.030.020.130.230.380.590.741.1613.33P1P2P3P4P5P6P7P8P9P10H-LH-L198906 - 201612(Low)(High)t-statQualityt-1.62-0.91-0.56-0.29-0.060.170.410.671.011.573.1846.69Qualityt + 12M-1.16-0.59-0.38-0.18-0.010.150.320.540.821.322.4932.91Qualityt + 36M-0.81-0.42-0.30-0.16-0.030.090.210.390.621.061.8719.63Qualityt + 60M-0.54-0.25-0.18-0.12-0.050.040.130.280.470.841.3814.72Qualityt + 120M-0.42-0.24-0.14-0.07-0.020.020.110.200.390.601.0115.30Profitt + 120M-0.30-0.13-0.030.040.160.180.280.380.510.931.2316.82Growtht + 120M-0.18-0.13-0.15-0.13-0.13-0.13-0.080.010.060.090.273.67Safetyt + 120M-0.50-0.32-0.21-0.09-0.020.070.160.320.460.561.0711.46Panel A: Long Sample (U.S.)Panel B: Broad Sample

Table III
Results: Cross Sectional Regressions, the Price of Quality

This table  reports  results  from  annual  Fama-Macbeth  regressions.  The dependent variable  is  the  log of a  firm’s
market to book ratio in June of each calendar year (date t). The explanatory variables are the quality scores on date
t and a series of controls. “Firm size” is the log of the firm’s market capitalization; “1-year return” is the firm’s
stock return over the prior year. “Firm age” is the cumulative number of years since the firm’s IPO.  “Uncertainty
about mean profitability” (Pastor and Veronesi (2003)) is the standard deviation of the residuals of an AR(1) model
for each firm’s ROE, using the longest continuous series of a firm's valid annual ROE up to date t. We require a
minim  of  five  years  of  non-missing  ROEs.  “Dividend  payer”  is  a  dummy  equal  to  one  if  the  firm  paid  any
dividends over the prior year. With the exception of the “Dividend payer” dummy, all explanatory variables at time
t  are  ranked cross-sectionally  and  rescaled  to  have  a  zero  cross -sectional  mean  and  a  cross-sectional  standard
deviation of one. Industry, country or firm fixed effects are included when indicated (“Industry FE”, “Country FE”,
“Firm FE”). “Average AdjR2” is the time series average of the adjusted R-square of the cross sectional regression.
Standard errors are adjusted for heteroskedasticity and autocorrelation (Newey and West (1987)) with a lag length
of five years. T-statistics are shown below the coefficient estimates and 5% statistical significance is indicated in
bold.

Quality Minus Junk – Asness, Frazzini, and Pedersen – Tables and Figures – Page T3

Panel A(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(11)(12)Quality0.230.240.240.220.230.240.170.190.170.150.170.19(9.69)(15.89)(9.62)(10.09)(9.69)(15.89)(13.65)(21.97)(13.04)(18.59)(13.65)(20.59)Firm size.0.32.0.32.0.32.0.33.0.33.0.31.(21.16).(19.71).(21.16).(13.38).(13.37).(11.45)1-year return.0.21.0.22.0.21.0.26.0.26.0.26.(13.29).(13.34).(13.29).(24.27).(27.86).(23.92)Firm age.-0.17.-0.16.-0.17.-0.12.-0.11.-0.12.(-7.33).(-6.64).(-7.33).(-4.94).(-4.72).(-7.00)Profit Uncertainty.0.37.0.35.0.37.0.40.0.34.0.40.(14.91).(14.22).(14.91).(29.45).(20.50).(29.01)Dividend payer.-0.15.-0.07.-0.15.-0.19.-0.09.-0.20.(-7.88).(-3.31).(-7.88).(-6.97).(-2.82).(-4.83)Profit Uncertainty.-0.20.-0.20.-0.20.-0.22.-0.20.-0.23x Dividend payer.(-10.89).(-7.70).(-10.89).(-15.24).(-8.19).(-14.04)Average AdjR20.100.410.260.490.100.410.100.360.200.430.030.33Nobs (years)605460546054282828282828Industry FEXXXXCountry FEXXXXFirm FEXXXXLong Sample (U.S., 195706 - 201612)Broad Sample (Global, 198906 - 201612)

Table III (continued)
Results: Cross Sectional Regressions, the Price of Quality

This table  reports  results  from  annual  Fama-Macbeth  regressions.  The dependent variable  is  the  log of a  firm’s
market to book ratio in June of each calendar year (date t). The explanatory variables are the quality scores on date
t and a series of controls. “Firm size” is the log of the firm’s market capitalization; “1-year return” is the firm’s
stock return over the prior year. “Firm age” is the cumulative number of years since the firm’s IPO.  “Uncertainty
about mean profitability” (Pastor and Veronesi (2003)) is the standard deviation of the residuals of an AR(1) model
for each firm’s ROE, using the longest continuous series of a firm's valid annual ROE up to date t. We require a
minim  of  five  years  of  non-missing  ROEs.  “Dividend  payer”  is  a  dummy  equal  to  one  if  the  firm  paid  any
dividends over the prior year. With the exception of the “Dividend payer” dummy, all explanatory variables at time
t  are  ranked cross-sectionally  and  rescaled  to  have  a  zero  cross-sectional  mean  and  a  cross-sectional  standard
deviation of one. Industry, country or firm fixed effects are included when indicated (“Industry FE”, “Country FE”,
“Firm FE”). “Average AdjR2” is the time series average of the adjusted R-square of the cross sectional regression.
Standard errors are adjusted for heteroskedasticity and autocorrelation (Newey and West (1987)) with a lag length
of five years. T-statistics are shown below the coefficient estimates and 5% statistical significance is indicated in
bold.

Quality Minus Junk – Asness, Frazzini, and Pedersen – Tables and Figures – Page T4

Panel B(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)Profitability0.19..0.120.150.13..0.080.10(10.15)..(7.11)(12.53)(15.51)..(6.18)(21.20)Growth0.16.0.100.100.11.0.060.07(8.41).(5.39)(6.01)(11.33).(3.88)(5.81)Safety.0.130.050.04.0.100.040.05.(7.95)(4.51)(3.80).(8.85)(4.20)(4.22)Firm size0.330.320.370.310.310.330.320.360.320.31(17.74)(20.92)(22.85)(19.81)(20.24)(12.13)(14.22)(14.67)(13.18)(10.98)1-year return0.220.230.220.210.210.270.270.270.260.26(12.96)(13.24)(14.15)(12.89)(12.91)(27.48)(26.53)(28.74)(28.45)(24.56)Firm age-0.18-0.15-0.20-0.16-0.17-0.12-0.10-0.12-0.11-0.13(-6.70)(-6.26)(-6.99)(-7.47)(-7.96)(-4.78)(-4.36)(-5.13)(-5.59)(-7.44)Profit Uncertainty0.310.310.350.340.350.320.310.350.340.40(11.74)(12.03)(12.81)(14.03)(13.25)(18.58)(16.54)(26.08)(24.87)(37.73)Dividend payer-0.07-0.01-0.06-0.06-0.14-0.10-0.05-0.09-0.09-0.19(-3.73)(-0.29)(-2.79)(-3.61)(-6.93)(-3.14)(-1.67)(-2.79)(-3.21)(-5.18)Profit Uncertainty-0.19-0.21-0.19-0.21-0.20-0.20-0.20-0.20-0.21-0.24x Dividend payer(-6.62)(-7.59)(-6.35)(-8.13)(-11.29)(-8.11)(-7.48)(-8.21)(-8.47)(-14.79)Average AdjR20.480.470.450.490.430.420.420.410.430.34Nobs (years)54545454542828282828Industry FEXXCountry FEXXXXFirm FEXXLong Sample (U.S., 195706 - 201612)Broad Sample (Global, 198906 - 201612)Table III (continued)
Results: Cross Sectional Regressions, the Price of Quality

This  table  reports  results  from  annual  Fama-Macbeth  regressions. T he  dependent variable  is  the  log  of  a  firm’s  market to  book ratio  in  June  of  each  calendar  year (date t ). T he
explanatory variables  are the  quality  scores on  date t  and  a  series of  controls. “Firm  size”  is the  log of the  firm’s  market  capitalization; “1-year  return”  is the firm’s  stock  return
over  the  prior  year.  “Firm  age”  is  the  cumulative  number  of  years  since  the  firm’s  IPO.  “Uncertainty  about  mean  profitability ”  (Pastor  and  Veronesi  (2003))  is  the  standard
deviation of the residuals of an AR(1) model for each firm’s ROE, using the longest continuous series of a firm's valid annua l ROE  up to date t. We require a minim of five years
of  non-missing  ROEs.  “ Dividend  payer”  is  a  dummy  equal  to  one  if the firm  paid  any  dividends  over  the  prior  year.  With the  exception  of  the “Dividend  payer”  dummy,  all
explanatory variables  at time t  are  ranked  cross-sectionally  and  rescaled to have  a  zero  cross-sectional mean  and  a  cross-sectional  standard deviation  of  one. Indust ry,  country  or
firm  fixed  effects  are  included  when  indicated  (“Industry  FE”,  “Country  FE”, “Firm  FE”). “Average  AdjR2”  is  the  time  series  a verage  of  the  adjusted  R-square  of  the  cross
sectional regression. Standard errors are adjusted for heteroskedasticity and autocorrelation (Newey and West (1987)) with a lag length of five years. T -statistics are shown belo w
the coefficient estimates and 5% statistical significance is  indicated in bold.

Quality Minus Junk – Asness, Frazzini, and Pedersen – Tables and Figures – Page T5

Panel CSize decileP1    (small)P2P3P4P5P6P7P8P9P10   (large)P1    (small)P2P3P4P5P6P7P8P9P10   (large)Quality0.110.200.220.240.230.250.300.290.300.310.080.140.140.160.160.180.190.160.210.22(7.45)(10.57)(11.44)(11.98)(14.45)(15.40)(13.15)(10.06)(13.10)(15.00)(6.29)(11.64)(8.84)(21.52)(8.96)(6.61)(9.96)(8.62)(15.17)(13.12)Firm size0.200.010.000.030.020.020.010.020.030.050.210.040.000.020.020.020.020.030.030.04(13.03)(0.47)(-0.33)(4.18)(2.24)(2.97)(1.45)(2.95)(3.65)(3.93)(13.91)(5.15)(0.72)(4.80)(3.84)(1.51)(2.98)(5.09)(2.51)(4.79)1-year return0.240.220.190.200.190.180.170.160.150.140.280.280.260.240.230.220.240.220.200.17(15.13)(10.68)(8.86)(15.07)(10.41)(11.37)(9.32)(8.11)(8.56)(8.93)(27.69)(34.65)(39.28)(20.23)(20.17)(17.32)(14.33)(11.58)(9.16)(13.33)Firm age-0.14-0.11-0.11-0.12-0.13-0.12-0.10-0.11-0.09-0.08-0.10-0.10-0.09-0.08-0.07-0.09-0.07-0.07-0.06-0.03(-4.40)(-4.54)(-5.72)(-6.17)(-6.58)(-7.89)(-5.34)(-5.28)(-5.09)(-4.31)(-2.77)(-4.24)(-7.26)(-6.17)(-6.35)(-7.60)(-3.38)(-3.85)(-2.48)(-2.76)Profit Uncertainty0.300.290.29-0.440.300.24-0.14-0.050.280.210.420.340.270.270.200.180.180.120.040.15(3.85)(4.55)(7.54)(-0.64)(3.47)(5.56)(-0.76)(-0.26)(1.25)(0.66)(27.24)(35.61)(15.78)(18.70)(6.63)(8.67)(4.78)(7.42)(1.51)(3.75)Dividend payer-0.08-0.04-0.04-1.130.07-0.01-0.58-0.430.000.03-0.07-0.08-0.13-0.09-0.10-0.18-0.14-0.16-0.24-0.07(-2.08)(-1.30)(-0.49)(-1.12)(0.56)(-0.07)(-2.08)(-1.21)(0.00)(0.09)(-1.33)(-2.77)(-3.59)(-2.55)(-2.19)(-2.91)(-4.30)(-5.76)(-4.27)(-1.72)Profit Uncertainty-0.11-0.14-0.130.60-0.16-0.120.240.14-0.19-0.11-0.18-0.15-0.11-0.11-0.08-0.07-0.08-0.050.05-0.06x Dividend payer(-1.48)(-2.74)(-3.37)(0.86)(-2.13)(-2.99)(1.31)(0.67)(-0.88)(-0.36)(-8.13)(-11.27)(-4.70)(-3.59)(-3.42)(-6.34)(-3.21)(-3.51)(2.00)(-2.02)Average R20.410.430.440.500.500.530.610.610.650.710.380.430.420.440.440.450.480.480.530.55Industry FE5454545454545454545428282828282828282828Country FEXXXXXXXXXXLong Sample (U.S., 195706 - 201612)Broad Sample (Global, 198906 - 201612)

Table IV
Quality-Sorted Portfolios

This  table shows  calendar-time  portfolio  returns.  Each calendar  month, stocks  in each  country  in  are  ranked  in
ascending order on the basis of their quality score. The ranked stocks are assigned to one of ten portfolios. U.S.
sorts  are  based  on  NYSE  breakpoints .  Portfolios  are  value-weighted,  refreshed  every  calendar  month,  and
rebalanced every calendar month to maintain value weights. We form one set of portfolios in each country and
compute  global  portfolios  by  weighting  each  country’s  portfolio  by  the  country ’s  total  (lagged)  market
capitalization.  The  rightmost  column  reports  returns of  a  self-financing portfolio  that  is  long  the high  quality
portfolio and shorts the low quality portfolio. Alpha is the intercept in a time-series regression of monthly excess
return. The explanatory variables are the returns of the market (MKT), size (SMB), book-to-market (HML), and
momentum  (UMD)  portfolios  from  Appendix  A2.  Panel  A  reports  results  from  our  Long  Sample  of  domestic
stocks. The sample period runs from June 1957 to December 2016. Panel B reports results from our Broad Sample
of global stocks. The sample period runs from June 1989 to December 2016. Returns are in USD, do not include
currency hedging,  and  excess  returns  are  over  the  U.S.  Treasury  bill  rate.  Returns  and  alphas  are  in  monthly
percent, t-statistics are shown below the coefficient estimates, and 5% statistical significance is indicated in bold.
“Beta” is the realized loading on the market portfolio. “Information ratio” is equal to the 4-factor alpha divided by
the standard deviation of the estimated residuals in the time-series regression. Sharpe ratios and information ratios
are annualized.

Quality Minus Junk – Asness, Frazzini, and Pedersen – Tables and Figures – Page T6

Panel A: Long SampleP1P2P3P4P5P6P7P8P9P10H-LU.S. , 195707 - 201612(Low)(High)Excess return0.290.470.500.470.560.490.560.570.490.690.40(1.16)(2.31)(2.65)(2.70)(3.35)(2.87)(3.36)(3.42)(2.97)(4.01)(2.43)CAPM alpha-0.41-0.12-0.05-0.050.07-0.020.060.070.000.190.60(-3.48)(-1.65)(-0.80)(-0.80)(1.17)(-0.31)(1.20)(1.41)(-0.08)(2.86)(3.98)3-factor alpha-0.53-0.23-0.14-0.120.00-0.070.030.060.030.300.84(-5.82)(-3.69)(-2.36)(-2.27)(-0.08)(-1.32)(0.64)(1.24)(0.60)(5.62)(7.44)4-factor alpha-0.57-0.35-0.25-0.22-0.12-0.11-0.020.060.040.471.04(-5.81)(-5.41)(-3.94)(-4.13)(-2.06)(-1.94)(-0.36)(1.07)(0.83)(8.66)(8.83)Beta1.271.151.091.041.011.021.000.980.950.93-0.34Sharpe Ratio0.150.300.340.350.430.370.440.440.380.520.31Information Ratio-0.82-0.76-0.55-0.58-0.29-0.27-0.050.150.121.221.24Adjusted R20.870.910.900.920.900.910.910.920.910.910.55Panel B: Broad SampleP1P2P3P4P5P6P7P8P9P10H-LGlobal , 198907 - 201612(Low)(High)Excess return0.130.350.420.430.470.500.590.540.540.600.48(0.37)(1.22)(1.55)(1.69)(1.96)(2.09)(2.59)(2.39)(2.48)(2.64)(2.36)CAPM alpha-0.40-0.090.000.030.090.120.230.190.200.260.66(-2.50)(-0.74)(-0.04)(0.31)(1.02)(1.38)(2.72)(2.10)(2.22)(2.40)(3.90)3-factor alpha-0.48-0.18-0.06-0.030.030.050.200.180.240.360.85(-3.32)(-1.53)(-0.59)(-0.31)(0.35)(0.62)(2.40)(1.98)(2.67)(3.72)(6.32)4-factor alpha-0.40-0.26-0.17-0.11-0.090.050.140.120.220.540.94(-2.50)(-2.08)(-1.55)(-1.10)(-0.94)(0.59)(1.54)(1.27)(2.20)(5.22)(6.43)Beta1.201.061.030.960.920.900.870.860.830.80-0.40Sharpe Ratio0.070.230.300.320.370.400.490.460.470.500.45Information Ratio-0.53-0.44-0.33-0.23-0.200.120.330.270.461.101.35Adjusted R20.830.850.870.870.870.880.870.850.830.830.57

Table V
Quality Minus Junk: Correlations

This  table  shows  correlation  of  monthly  returns.  Quality  minus  Junk  (QMJ)  factors  are  constructed  as  the
intersection of six value-weighted portfolios formed on size and quality. At the end of each calendar month, stocks
are  assigned  to  two  size-sorted  portfolios  based  on  their  market  capitalization.  For  U.S.  securities,  the  size
breakpoint  is the  median  NYSE  market  equity.  For  other  markets  the size  breakpoint  is  the  80th percentile by
country. We use conditional sorts, first sorting on size, then on quality. Portfolios are value-weighted, refreshed
every calendar month, and rebalanced every calendar month to maintain value weights. The QMJ factor return is
the  average  return on  the  two high  quality  portfolios  minus  the  average  return on the  two  low  quality   (junk)
portfolios. Portfolios based on profitability, growth and safety scores are constructed in a similar manner. We form
one set of portfolios in each country and compute global portfolios by weighting each country’s portfolio by the
country’s total (lagged) market capitalization. Abnormal returns are constructed as the intercept plus the residual of
a time-series regression of monthly excess returns. The explanatory variables are the returns of the market (MKT),
size (SMB), book-to-market (HML), and momentum (UMD) portfolios from Appendix A2. Panel A reports results
from our Long Sample of domestic stocks. The sample period runs from June 1957 to December 2016. Panel B
reports results from our Broad Sample of global stocks. The sample period runs from June 1989 to December 2016.
Returns are in USD, do not include currency hedging, and excess returns are over the U.S. Treasury bill rate.

Quality Minus Junk – Asness, Frazzini, and Pedersen – Tables and Figures – Page T7

QMJProfitabilitySafetyGrowthQMJProfitabilitySafetyGrowthQMJ1.000.900.840.611.000.870.880.51Profitability0.901.000.660.540.871.000.800.41Safety0.840.661.000.260.880.801.000.27Growth0.610.540.261.000.510.410.271.00QMJ1.000.850.730.671.000.770.700.58Profitability0.851.000.480.520.771.000.630.52Safety0.730.481.000.270.700.631.000.22Growth0.670.520.271.000.580.520.221.00Panel A: Long Sample (U.S. , 195707 - 201612)Panel B: Broad Sample (Global, 198907 - 201612)ReturnsAbnormal Returns (4-factor)ReturnsAbnormal Returns (4-factor)
Table VI
Quality Minus Junk: Returns

This  table  shows  calendar-time  portfolio  returns  and  factor  loadings.  Quality  minus  Junk  (QMJ)  factors  are
constructed as the  intersection of six  value-weighted portfolios  formed on size  and quality. At  the end  of each
calendar  month, stocks  are  assigned to  two size-sorted portfolios  based on their  market  capitalization.  For  U.S.
securities, the size breakpoint is the median NYSE market equity. For other markets the size breakpoint is the 80th
percentile by country. We use conditional sorts, first sorting on size, then on quality. Portfolios are value-weighted,
refreshed every calendar month, and rebalanced every calendar month to maintain value weights. The QMJ factor
return  is the average  return on  the  two high quality portfolios  minus the average  return on the two  low quality
(junk) portfolios. Portfolios based on profitability, growth and safety scores are constructed in a similar  manner.
We form one set of portfolios in each country and compute global portfolios by weighting each country’s portfolio
by the country’s total (lagged) market capitalization. Alpha is the intercept in a time-series regression of monthly
excess return. The explanatory variables are the returns of the market (MKT), size (SMB), book-to-market (HML),
and momentum (UMD) portfolios from Appendix A2. Panel A reports results from our Long Sample of domestic
stocks. The sample period runs from June 1957 to December 2016. Panel B reports results from our Broad Sample
of global stocks. The sample period runs from June 1989 to December 2016. Returns are in USD, do not include
currency hedging,  and  excess  returns  are  over  the  U.S.  Treasury  bill  rate.  Returns  and  alphas  are  in  monthly
percent, t-statistics are shown below the coefficient estimates, and 5% statistical significance is indicated in bold.
“Information ratio” is equal to the 4-factor alpha divided by the standard deviation of the estimated residuals in the
time-series regression. Sharpe ratios and information ratios are annualized.

Quality Minus Junk – Asness, Frazzini, and Pedersen – Tables and Figures – Page T8

QMJProfitabilitySafetyGrowthQMJProfitabilitySafetyGrowthExcess Returns0.250.250.230.080.360.390.230.15(3.16)(3.67)(2.57)(1.14)(3.19)(4.39)(1.74)(1.89)CAPM-alpha0.340.310.410.040.490.480.400.15(4.69)(4.70)(5.59)(0.59)(5.53)(6.94)(4.50)(1.87)3-factor alpha0.460.400.530.160.580.510.510.22(7.81)(6.93)(9.18)(2.78)(8.22)(8.15)(7.88)(3.09)4-factor alpha0.570.500.530.370.580.470.400.37(9.22)(8.32)(8.69)(6.32)(7.61)(6.97)(5.82)(5.04)MKT-0.19-0.12-0.310.02-0.26-0.19-0.35-0.01(-12.93)(-8.21)(-22.02)(1.16)(-15.24)(-12.68)(-22.40)(-0.50)SMB-0.25-0.22-0.29-0.03-0.32-0.27-0.22-0.15(-11.08)(-9.99)(-12.94)(-1.27)(-8.65)(-8.28)(-6.50)(-4.25)HML-0.38-0.29-0.29-0.50-0.29-0.06-0.26-0.35(-16.05)(-12.67)(-12.59)(-22.27)(-8.11)(-1.92)(-8.17)(-10.31)UMD-0.10-0.10-0.01-0.190.000.030.10-0.14(-5.10)(-4.95)(-0.24)(-10.20)(-0.14)(1.40)(4.13)(-5.32)Sharpe Ratio0.410.480.330.150.610.840.330.36Information Ratio1.291.171.220.891.601.471.231.06Adjusted R20.470.340.610.450.630.510.770.27Panel A: Long Sample (U.S. , 195707 - 201612)Panel B: Broad Sample (Global , 198907 - 201612)
Table VI (Continued)
Quality Minus Junk: Returns By Country

This  table  shows  calendar-time  portfolio  returns  and  factor  loadings.  Quality  minus  Junk  (QMJ)  factors  are
constructed as the  intersection of six  value-weighted portfolios  formed on size  and quality. At  the end  of each
calendar  month, stocks  are  assigned to  two size-sorted portfolios  based on their  market  capitalization.  For  U.S.
securities, the size breakpoint is the median NYSE market equity. For other markets the size breakpoint is the 80th
percentile by country. We use conditional sorts, first sorting on size, then on quality. Portfolios are value-weighted,
refreshed every calendar month, and rebalanced every calendar month to maintain value weights. The QMJ factor
return  is the average  return on  the  two high quality portfolios  minus the average  return on the two  low quality
(junk) portfolios. We form one set of portfolios in each country and compute global portfolios by weighting each
country’s  portfolio by the country’s  total  (lagged)  market capitalization. Alpha  is  the  intercept  in  a time-series
regression of monthly excess return. The explanatory variables are the returns of the market (MKT), size (SMB),
book-to-market (HML), and momentum (UMD) portfolios from Appendix A2. Panel A reports results from our
Long Sample of domestic stocks.  The sample period  runs  from  June  1957  to  December  2016.  Panel  B  reports
results  from  our  Broad  Sample  of  global  stocks.  The sample period  runs  from  June  1989  to  December  2016.
Returns are  in  USD, do not  include currency  hedging, and  excess  returns  are over the  U.S.  Treasury bill  rate.
Returns and alphas are in monthly percent, t-statistics are shown below the coefficient estimates, and 5% statistical
significance is indicated in bold. “Information ratio” is equal to the 4-factor alpha divided by the standard deviation
of the estimated residuals in the time-series regression. Sharpe ratios and information ratios are annualized.

Quality Minus Junk – Asness, Frazzini, and Pedersen – Tables and Figures – Page T9

Panel CMKTSMBHMLUMDAustralia0.301.760.483.09-0.16-0.28-0.20-0.020.380.77258199507-201612Austria-0.05-0.150.100.41-0.42-0.02-0.180.21-0.030.09258199507-201612Belgium0.431.550.392.02-0.26-0.41-0.380.210.330.46258199507-201612Canada0.632.960.532.68-0.20-0.29-0.140.140.560.55330198907-201612Switzerland0.311.210.371.99-0.41-0.21-0.260.210.260.45258199507-201612Germany0.532.880.604.04-0.23-0.14-0.240.050.620.96258199507-201612Denmark0.331.320.070.34-0.16-0.30-0.340.210.280.08258199507-201612Spain0.020.090.080.42-0.34-0.13-0.270.200.020.09258199507-201612Finland0.180.600.331.46-0.02-0.05-0.48-0.020.130.33258199507-201612France0.351.600.513.34-0.29-0.21-0.340.120.350.77258199507-201612United Kingdom0.211.280.171.34-0.23-0.09-0.140.160.260.30282199307-201612Greece1.933.521.304.07-0.22-0.26-0.140.480.891.07186200107-201612Hong Kong-0.01-0.020.592.55-0.38-0.40-0.470.060.000.57258199507-201612Ireland0.821.320.931.98-0.67-0.17-0.030.210.280.44258199507-201612Israel0.501.560.391.79-0.32-0.32-0.220.290.400.49186200107-201612Italy0.622.260.613.68-0.32-0.16-0.350.200.490.82258199507-201612Japan0.231.090.553.56-0.34-0.27-0.430.060.220.79282199307-201612Netherlands0.070.250.401.92-0.38-0.20-0.280.050.050.43258199507-201612Norway0.521.920.552.30-0.23-0.24-0.210.100.410.52258199507-201612New Zealand-0.02-0.11-0.05-0.26-0.03-0.11-0.220.04-0.02-0.06258199507-201612Portugal 0.842.260.832.60-0.34-0.33-0.340.070.510.61234199707-201612Singapore0.361.270.644.09-0.22-0.28-0.430.070.270.91258199507-201612Sweden0.562.270.432.37-0.10-0.26-0.320.210.490.54258199507-201612United States0.253.160.579.22-0.19-0.25-0.38-0.100.411.29714195707-201612Global0.363.190.587.61-0.26-0.32-0.290.000.611.60330198907-201612Return date rangeNumber of monthsFactor loadingsExcess returnT-stat excess return4-factor alphaT-stat alphaSharpe ratioInformation ratio

Table VII
Quality Minus Junk: 6-Factor Adjusted Returns

This  table  shows  calendar-time  portfolio  returns  and  factor  loadings.  Quality  minus  Junk  (QMJ)  factors  are
constructed as the  intersection of six  value-weighted portfolios  formed on size  and quality. At  the end  of each
calendar  month, stocks  are  assigned to  two size-sorted portfolios  based on their  market  capitalization.  For  U.S.
securities, the size breakpoint is the median NYSE market equity. For other markets the size breakpoint is the 80th
percentile by country. We use conditional sorts, first sorting on size, then on quality. Portfolios are value-weighted,
refreshed every calendar month, and rebalanced every calendar month to maintain value weights. The QMJ factor
return  is the average  return on  the  two high quality portfolios  minus the average  return on the two  low quality
(junk) portfolios. Portfolios based on profitability, growth and safety scores are constructed in a similar  manner.
We form one set of portfolios in each country and compute global portfolios by weighting each country’s portfolio
by the country’s total (lagged) market capitalization. Alpha is the intercept in a time-series regression of monthly
excess return. The explanatory variables are the returns of the market (MKT), size (SMB), book-to-market (HML),
profitability (RMW) and investment (CMA) portfolios from Fama and French (2015) and the momentum (UMD)
portfolios from Ken’s French data library. Panel A reports results from our Long Sample of domestic stocks. The
sample period runs from July 1963 to December 2016. Panel B reports results from our Broad Sample of global
stocks.  The sample  period  runs  from  November  1990  to  December  2016.  Returns are  in  USD, do not  include
currency hedging,  and  excess  returns  are  over  the  U.S.  Treasury  bill  rate.  Returns  and  alphas  are  in  monthly
percent, t-statistics are shown below the coefficient es timates, and 5% statistical significance is indicated in bold.
“Information ratio” is equal to the 4-factor alpha divided by the standard deviation of the estimated residuals in the
time-series regression. Sharpe ratios and information ratios are annualized.

Quality Minus Junk – Asness, Frazzini, and Pedersen – Tables and Figures – Page T10

QMJProfitabilitySafetyGrowthQMJProfitabilitySafetyGrowthExcess Returns0.260.290.220.070.310.370.180.15(3.01)(3.92)(2.26)(0.88)(2.67)(4.14)(1.37)(1.82)5-factor alpha0.340.290.410.190.310.290.260.22(7.21)(6.76)(6.26)(4.36)(4.83)(5.90)(3.50)(3.55)6-factor alpha0.300.280.310.170.270.280.160.21(6.39)(6.46)(5.02)(3.98)(4.27)(5.67)(2.46)(3.41)MKT-0.15-0.08-0.280.00-0.23-0.15-0.31-0.06(-13.38)(-7.28)(-18.21)(0.05)(-13.60)(-10.68)(-17.49)(-3.24)SMB-0.09-0.07-0.180.05-0.17-0.17-0.16-0.13(-5.72)(-4.52)(-8.51)(3.42)(-5.45)(-6.83)(-4.72)(-4.08)HML-0.26-0.29-0.20-0.24-0.24-0.10-0.27-0.05(-11.29)(-13.98)(-6.64)(-11.32)(-6.13)(-3.15)(-6.55)(-1.26)CMA-0.070.100.03-0.440.040.070.14-0.45(-2.28)(3.18)(0.61)(-14.54)(0.85)(1.73)(2.69)(-9.56)RMW0.590.580.320.390.670.590.470.32(26.84)(28.46)(10.83)(19.11)(14.07)(15.38)(9.46)(6.81)UMD0.050.010.130.020.070.020.180.01(4.91)(1.18)(8.95)(1.95)(4.34)(1.14)(10.79)(0.66)Sharpe Ratio0.410.540.310.120.520.810.270.36Information Ratio0.940.950.740.580.931.230.530.74Adjusted R20.740.700.640.720.770.740.810.51Panel A: Long Sample (U.S. ,196307 - 201612)Panel B: Broad Sample  (Global , 199011 - 201612)

Table VIII
QMJ: Recessions, Severe Bear and Bull Markets and Volatility Environment

This  table  shows  calendar-time  portfolio  returns.  Quality  minus  Junk  (QMJ)  factors  are  constructed  as  the
intersection of six value-weighted portfolios formed on size and quality. At the end of each calendar month, stocks
are  assigned  to  two  size-sorted  portfolios  based  on  their  market  capitalization.  For  U.S.  securities,  the  size
breakpoint  is the  median  NYSE  market  equity.  For other  markets  the size  breakpo int  is  the  80th percentile by
country. We use conditional sorts, first sorting on size, then on quality. Portfolios are value-weighted, refreshed
every calendar month, and rebalanced every calendar month to maintain value weights. The QMJ factor return is
the  average  return on  the  two high  quality  portfolios  minus  the  average  return on the  two  low  quality  (junk)
portfolios.  We  form  one  set  of  portfolios  in  each  country  and  compute  global  portfolios  by  weighting  each
country’s  portfolio by the country’s  total  (lagged)  market capitalization. Alpha  is  the  intercept  in  a time-series
regression of monthly excess return. The explanatory variables are the returns of the market (MKT), size (SMB),
book-to-market (HML), and momentum (UMD) portfolios from Appendix A2. Panel A reports results from our
Long Sample of domestic stocks.  The sample period  runs  from  June  1957  to  December  2016.  Panel  B  reports
results  from  our  Broad  Sample  of  global  stocks.  The sample period  runs  from  June  1989  to  December  2016.
Returns are  in  USD, do not  include currency  hedging, and  excess  returns  are over the  U.S.  Treasury bill  rate.
Returns and alphas are in monthly percent, t-statistics are shown below the coefficient estimates, and 5% statistical
significance is indicated in bold. “Recession” indicates NBER recessions. “Expansion” indicates all other months.
“Severe bear (bull) market” is defined as a total market return in the past 12-month below (above) -25% (25%).
“Low  (high) volatility”  indicated periods of  low  (high)  market volatility. We  measure volatility  as  the  1-month
standard deviation of daily returns of the CRSP-value weighted index (U.S.) or the MSCI-World index (Global)
and split the sample in the top and bottom 30% high and low periods . “Spike Up (down) in Volatility” indicates
periods of large increases or drops in market volatility. We measure volatility changes as the 1-month change in
market volatility and split the sample into top and bottom 30% Spike Up and Down periods.

Quality Minus Junk – Asness, Frazzini, and Pedersen – Tables and Figures – Page T11

Panel A: Long SampleU.S., 195707 - 201612Excess ReturnCAPM Alpha3-Factor Alpha4-Factor AlphaExcess ReturnCAPM Alpha3-Factor Alpha4-Factor AlphaNumber of monthsAll Periods0.250.340.460.573.164.697.819.22714Recession0.510.490.760.852.042.154.505.06110Expansion0.200.320.430.512.484.176.997.83604Severe bear market-0.030.240.750.73-0.030.321.491.3621Severe bull Market0.150.150.310.490.930.972.413.60141Low volatility0.450.630.710.782.574.115.515.95242High volatility0.100.160.380.540.931.524.996.51234Spike up in volatility0.440.500.530.692.933.704.585.94238Spike down in volatility0.020.250.500.500.171.955.144.69237Panel B: Broad SampleGlobal, 198907 - 201612Excess ReturnCAPM Alpha3-Factor Alpha4-Factor AlphaExcess ReturnCAPM Alpha3-Factor Alpha4-Factor AlphaNumber of monthsAll Periods0.360.490.570.583.195.528.227.61330Recession0.940.641.271.271.951.815.255.2437Expansion0.290.470.550.532.585.277.866.82293Severe bear market0.520.871.161.300.481.704.994.7915Severe bull Market0.620.550.680.862.262.283.843.9238Low volatility0.520.670.810.792.314.266.506.16136High volatility0.030.140.350.470.201.073.103.6095Spike up in volatility0.490.600.570.602.323.694.374.44115Spike down in volatility0.160.380.630.600.842.435.004.26117Returnt-statisticsReturnt-statisticsTable IX
Quality-Sorted Portfolios: Target Prices

This table shows average I/B/E/S one-year-ahead target prices for quality-sorted portfolios. Each calendar month,
stocks  in each  country  are  ranked  in ascending  order on the basis of their  quality score.  The  ranked stocks  are
assigned to one of ten portfolios, where U.S. sorts are based on NYSE breakpoints. For each portfolio, each month
we  compute  the  weighted-average  target  price  (scaled  by  book  equity)  using  the  I/B/E/S  mean  and   median
consensus for each stock. We report time-series averages of each variable. The implied expected return is given by
the  ratio  of  target prices  to  current  prices   minus  1.  “Dispersion”  is the cross sectional standard deviation  of  the
price targets divided by the average price target. The rightmost columns report the difference between portfolios 10
and  1  and  the  corresponding  t-statistic.  Standard  errors  are  adjusted  for  heteroskedasticity  and  autocorrelation
(Newey and West (1987)) with a lag length of five years and 5% statistical significance is indicated in bold. Stocks
in each portfolio are value-weighted and refreshed every calendar month. For the global sample, we form one set of
portfolios in each country and compute global portfolios by weighting each country’s portfolio by the country’s
total (lagged) market capitalization. The sample period of our I/B/E/S target price data runs from March 1999 to
December 2016.

Quality Minus Junk – Asness, Frazzini, and Pedersen – Tables and Figures – Page T12

Panel A: United StatesP1P2P3P4P5P6P7P8P9P10H-LH-L199903 - 201612(Low)(High)t-statisticsPrice (scaled by book)2.742.402.542.962.963.073.363.804.526.984.244.04Mean price target  (scaled by book)3.512.882.993.513.463.563.904.395.248.204.693.60Median price target (scaled by book)3.492.872.983.523.463.563.904.395.248.214.723.63Mean Implied Expected Return0.250.200.170.170.170.160.160.160.160.16-0.09-4.04Median Implied Expected Return0.240.190.170.170.170.160.160.160.160.16-0.08-3.94Dispersion 0.810.910.940.970.960.970.970.970.970.960.146.82Number of estimates8.5710.7111.6512.1212.7413.1814.0013.7714.5717.578.998.43Realized future 12-month return0.0210.0680.0720.0580.0740.0870.0800.0930.0720.0660.0571.85Panel B: GlobalP1P2P3P4P5P6P7P8P9P10H-LH-L199903 - 201612(Low)(High)t-statisticsPrice (scaled by book)2.802.482.562.942.923.033.323.734.426.783.983.90Mean price target  (scaled by book)3.653.033.043.493.413.523.844.315.127.974.323.38Median price target (scaled by book)3.633.023.033.493.413.513.844.315.127.984.353.40Mean Implied Expected Return0.270.220.180.180.170.160.160.160.160.16-0.11-5.70Median Implied Expected Return0.260.210.180.180.170.160.160.160.160.16-0.10-5.64Dispersion 0.810.910.940.970.960.970.980.970.970.960.157.54Number of estimates8.2410.3711.3811.9312.5613.0313.8413.6914.4416.958.728.79Realized future 12-month return0.0220.0650.0680.0580.0760.0900.0830.0930.0760.0680.0602.14
Table X
Time Variation of the Price of Quality: High Price of Quality Predicts Low QMJ Returns

This table shows results of monthly time series regressions of future quality factor returns on the lagged price of quality. The left -hand side is the cumulative
excess  return  (labeled  “Ret-Rf”)  and  the  cumulative  abnormal  return  (labeled  “Alpha”)  of  the  QMJ  factor  (or  profitability,  growth  and  safety)  over  the
subsequent 1, 12, 36, or 60  months. Abnormal returns are constructed from of a time-series regression of monthly excess returns on the returns of the market
(MKT), size (SMB), book-to-market (HML), and momentum (UMD) portfolios from Appendix A2. Regression coefficients are estimated using all available data
and abnormal returns are cumulated over the subsequent t+k period. The right hand side variables are the lagged price of quality and prior quality returns. The
lagged price of quality at time t is the regression coefficient of a cross sectional regression of log market to book ratios in month t -1 on quality score in month t-1.
The prior quality return is defined as the portfolio–weighted average of the past 1-year returns of the stocks in the portfolio. Panel A reports results from our
Long Sample of domestic stocks. The sample period runs from June 1957 to December 2016. Panel B reports results from our  Broad Sample of global stocks.
The sample period runs from June 1989 to December 2016. Returns are in USD, do not include currency hedging, and excess returns are over the U.S. Treasury
bill rate. Each line and each column reports results from a separate regression. We report only the coefficient on the variable of interest, the lagged  price of
quality.  An  intercept  and  prior  quality  returns  are  included  in  all  regressions  but  not  reported.  Standard  errors  are  adjusted  for  heteroskedasticity  and
autocorrelation (Newey and West (1987)) with lag length of five years , t-statistics are shown below the coefficient estimates, and 5% statistical significance is
indicated in bold. “Average Adj R2” is the average adjusted R-squared across all the regressions above.

Quality Minus Junk – Asness, Frazzini, and Pedersen – Tables and Figures – Page T13

Left-hand sideReturn (t)Return (t, t+12)Return (t, t+36)Return (t, t+60)Return (t)Return (t, t+12)Return (t, t+36)Return (t, t+60)Ret-RfAlphaRet-RfAlphaRet-RfAlphaRet-RfAlphaRet-RfAlphaRet-RfAlphaRet-RfAlphaRet-RfAlphaQMJ-0.03-0.01-0.41-0.22-1.15-0.68-1.43-2.01-0.040.02-0.940.02-1.850.08-1.31-3.40(-3.50)(-1.74)(-2.99)(-2.11)(-3.00)(-1.98)(-2.50)(-3.07)(-1.76)(1.30)(-3.03)(0.14)(-2.56)(0.14)(-3.71)(-7.87)Profitability-0.04-0.02-0.48-0.33-1.46-1.15-2.20-2.63-0.030.02-0.93-0.06-1.74-0.30-2.34-4.20(-3.38)(-2.27)(-3.03)(-2.49)(-3.51)(-2.78)(-3.17)(-4.20)(-1.28)(1.36)(-3.50)(-0.47)(-2.77)(-0.67)(-3.82)(-6.46)Growth-0.03-0.01-0.29-0.09-0.76-0.13-0.49-1.44-0.020.00-0.30-0.02-0.90-0.17-1.15-0.79(-3.28)(-0.91)(-1.73)(-0.56)(-1.38)(-0.26)(-0.52)(-1.66)(-1.06)(0.11)(-1.28)(-0.07)(-2.56)(-0.34)(-1.29)(-2.46)Safety-0.010.00-0.16-0.08-1.03-0.73-2.16-2.56-0.030.00-0.40-0.01-0.540.610.75-1.21(-0.98)(-0.28)(-0.86)(-0.58)(-2.03)(-1.57)(-2.09)(-3.22)(-1.41)(-0.30)(-1.50)(-0.09)(-1.30)(4.23)(3.24)(-2.31)Average Adj R20.070.040.080.040.160.070.130.290.050.020.090.010.120.060.150.30Panel A: Long Sample (U.S. , 195707 - 201612)Panel B: Broad Sample (Global, 198907 - 201612)

Table XI
Asset Pricing Tests: HML, SMB and UMD

This  table  shows  calendar-time  portfolio  returns  and  factor  loadings.  Quality  minus  Junk  (QMJ)  factors  are
constructed as the  intersection of six  value-weighted portfolios  formed on size  and quality. At  the end  of each
calendar  month, stocks  are  assigned to  two size-sorted portfolios  based on their  market  capitalization.  For  U.S.
securities, the size breakpoint is the median NYSE market equity. For other markets the size breakpoint is the 80th
percentile by country. We use conditional sorts, first sorting on size, then on quality. Portfolios are value-weighted,
refreshed every calendar month, and rebalanced every calendar month to maintain value weights. The QMJ factor
return  is the average  return on  the  two high quality portfolios  minus the average  return on the two  low quality
(junk) portfolios. We form one set of portfolios in each country and compute global portfolios by weighting each
country’s  portfolio by the country’s  total  (lagged)  market capitalization. Alpha  is  the  intercept  in  a time -series
regression  of  monthly  excess  return.  The test  portfolios  are  the  Quality  minus  Junk  (QMJ)  factor,  the  market
(MKT), size  (SMB),  book-to-market  (HML),  and  momentum  (UMD)  portfolios  from  Appendix  A2.  We  run  a
regression of each of SMB, HML and UMD on the remaining factors excluding and including the QMJ factor as
explanatory variable. Panel A reports results from our Long Sample of domestic stocks. The sample period runs
from June 1957 to December 2016. Panel B reports results from our Broad Sample of global stocks. The sample
period runs from June 1989 to December 2016. Returns are in USD, do not include currency hedging, and  excess
returns are over the U.S. Treasury bill rate. Returns and alphas are in monthly percent, t-statistics are shown below
the  coefficient  estimates,  and  5%  statistical  significance  is  indicated  in  bold.  “Information  ratio”  is  equal  to
regression  intercept, divided by the standard deviation of  the  estimated  residuals.  Sharpe  ratios and  information
ratios are annualized.

Quality Minus Junk – Asness, Frazzini, and Pedersen – Tables and Figures – Page T14

Left-hand sideSMBSMBHMLHMLUMDUMDSMBSMBHMLHMLUMDUMDExcess Returns0.150.150.310.310.710.710.020.020.350.350.660.66(1.50)(1.50)(2.47)(2.47)(4.78)(4.78)(0.18)(0.18)(2.20)(2.20)(3.09)(3.09)Alpha0.130.450.800.991.071.230.080.400.770.981.091.10(1.23)(4.48)(8.59)(12.23)(9.81)(11.01)(0.70)(3.69)(6.87)(9.30)(7.65)(7.01)MKT0.170.03-0.15-0.24-0.19-0.250.06-0.10-0.10-0.23-0.22-0.22(7.22)(1.32)(-7.00)(-12.37)(-7.39)(-8.94)(2.55)(-3.36)(-3.73)(-8.01)(-6.79)(-5.13)SMB-0.05-0.21-0.08-0.17..-0.13-0.30-0.13-0.13(-1.31)(-6.50)(-1.95)(-3.72)..(-2.22)(-5.22)(-1.72)(-1.61)HML-0.05-0.27.-0.81-0.91-0.12-0.26..-0.94-0.94(-1.31)(-6.50).(-24.80)(-24.04)(-2.22)(-5.22)..(-19.21)(-16.16)UMD-0.06-0.12-0.57-0.49..-0.07-0.06-0.57-0.47..(-1.95)(-3.72)(-24.80)(-24.04)..(-1.72)(-1.61)(-19.21)(-16.16)..QMJ.-0.59.-0.70.-0.35.-0.59.-0.59.-0.02.(-11.08).(-16.05).(-5.10).(-8.65).(-8.11).(-0.14)Sharpe Ratio0.200.200.320.320.620.620.040.040.420.420.590.59Information Ratio0.170.661.151.651.291.510.150.831.351.891.481.49Adjusted R20.090.220.470.610.480.490.040.220.530.610.570.57Panel A: Long Sample (U.S. , 195707 - 201612)Panel B: Broad Sample (Global , 198907 - 201612)

Figure 1
QMJ: 4-Factor Adjusted Information Ratios

This  figure plots  4-factor  adjusted  information  ratios  of  Quality  minus  Junk  (QMJ)  factors. At  the end of each
calendar  month, stocks  are  assigned to  two size-sorted portfolios  based on their  market  capitalization.  For  U.S.
securities, the size breakpoint is the median NYSE market equity. For other markets the size breakpoint is the 80th
percentile by country. We use conditional sorts, first sorting on size, then on quality. Portfolios are value-weighted,
refreshed every calendar month, and rebalanced every calendar month to maintain value weights. The QMJ factor
return  is the average  return on  the  two high quality portfolios  minus the average  return on the two  low quality
(junk) portfolios. We form one set of portfolios in each country and compute global portfolios by weighting each
country’s  portfolio  by  the  country’s  total  (lagged)  market  capitalization.  Information  ratios  are  equal  to  the
intercept of a time-series regression of monthly excess return divided by the standard deviation of the estimated
residuals.  The  explanatory variables  are the  monthly  returns  of the  market  (MKT), size  (SMB), book-to-market
(HML),  and  momentum  (UMD)  portfolios  from  Appendix  A2.  Returns  are  in  USD,  do  not  include  currency
hedging, and excess returns are over the U.S. Treasury bill rate. Information ratios are annualized.

Quality Minus Junk – Asness, Frazzini, and Pedersen – Tables and Figures – Page T15

-0.200.000.200.400.600.801.001.201.401.601.80AustraliaAustriaBelgiumCanadaSwitzerlandGermanyDenmarkSpainFinlandFranceUnited KingdomGreeceHong KongIrelandIsraelItalyJapanNetherlandsNorwayNew ZealandPortugalSingaporeSwedenUnited StatesGlobalInformation Ratio

Figure 2
QMJ: Cumulative Returns

This figure shows cumulative returns of Quality minus Junk (QMJ) factors. At the end of each calendar month,
stocks are assigned to two size-sorted portfolios based on their market capitalization. For U.S. securities, the size
breakpoint  is the  median  NYSE  market  equity.  For other  markets  the size  breakpoint  is  the  80th percentile by
country. We use conditional sorts, first sorting on size, then on quality. Portfolios are value-weighted, refreshed
every calendar month, and rebalanced every calendar month to maintain value weights. The QMJ factor return is
the  average  return on  the  two high  quality  portfolios  minus  the  average  return on the  two  low  quality  (junk)
portfolios.  We  form  one  set  of  portfolios  in  each  country  and  compute  global  portfolios  by  weighting  each
country’s portfolio by  the  country’s  total  (lagged)  market  capitalization.  Panel A  reports  results  from  our  Long
Sample  of  domestic stocks.  The sample  period  runs  from  June  1957  to  December  2016.  Panel  B  reports  results
from our Broad Sample of global stocks. The sample period runs from June 1989 to December 2016. Returns are in
USD, do not include currency hedging, and excess returns are over the U.S. Treasury bill rate.

Quality Minus Junk – Asness, Frazzini, and Pedersen – Tables and Figures – Page T16

Panel A: Long Sample (U.S. , 1957 - 2016)Panel B: Broad Sample (Global , 1989 - 2016)-50%0%50%100%150%200%19571960196319661969197219751978198119841987199019931996199920022005200820112014QMJ Cumulative Return, Long Sample (U.S.)0%20%40%60%80%100%120%140%1989199019911992199319941995199619971998199920002001200220032004200520062007200820092010201120122013201420152016QMJ Cumulative Return , Broad Sample (Global)

Figure 3
QMJ: Cumulative 4-Factor Alphas

This figure shows 4-factor adjusted cumulative returns of Quality minus Junk (QMJ) factors. At the end of each
calendar  month, stocks  are  assigned to  two size-sorted portfolios  based on their  market  capitalization.  For  U.S.
securities, the size breakpoint is the median NYSE market equity. For other markets the size breakpoint is the 80th
percentile by country. We use conditional sorts, first sorting on size, then on quality. Portfolios are value-weighted,
refreshed every calendar month, and rebalanced every calendar month to maintain value weights. The QMJ factor
return  is the average  return on  the  two high quality portfolios  minus the average  return on the two  low quality
(junk) portfolios. We form one set of portfolios in each country and compute global portfolios by weighting each
country’s portfolio by  the  country’s  total  (lagged)  market  capitalization.  Panel A  reports  results  from  our  Long
Sample  of  domestic stocks.  The sample  period  runs  from  June  1957  to  December  2016.  Panel  B  reports  results
from our Broad Sample of global stocks. The sample period runs from June 1989 to December 2016. Alpha is the
intercept in a time-series regression of monthly excess return. The explanatory variables are the monthly returns of
the market, (MKT), size (SMB), book-to-market (HML), and momentum (UMD) portfolios from Appendix A2.
Returns are in USD, do not include currency hedging, and excess returns are over the U.S. Treasury bill rate. We
plot the cumulative abnormal returns (alpha plus regression residual) from the time series regression.

Quality Minus Junk – Asness, Frazzini, and Pedersen – Tables and Figures – Page T17

Panel A: Long Sample (U.S. , 1957 - 2016)Panel B: Broad Sample (Global , 1986 - 2012)-50%0%50%100%150%200%250%300%350%400%450%19571960196319661969197219751978198119841987199019931996199920022005200820112014Cumulative 4-Factor Alpha, Long Sample (U.S.)0%50%100%150%200%250%1989199019911992199319941995199619971998199920002001200220032004200520062007200820092010201120122013201420152016Cumulative 4-Factor Alpha , Broad Sample (Global)
Figure 4
QMJ: Flight to Quality

This figure shows monthly returns and 4-factor alpha of Quality minus Junk (QMJ) factors. At the end of each
calendar  month, stocks  are  assigned to  two size-sorted portfolios  based on their  market  capitalization.  For  U.S.
securities, the size breakpoint is the median NYSE market equity. For other markets the size breakpoint is the 80th
percentile by country. We use conditional sorts, first sorting on size, then on quality. Portfolios are value-weighted,
refreshed every calendar month, and rebalanced every calendar month to maintain value weights. The QMJ factor
return  is the average  return on  the  two high quality portfolios  minus the average  return on the two  low quality
(junk) portfolios. We form one set of portfolios in each country and compute global portfolios by weighting each
country’s portfolio by  the  country’s  total  (lagged)  market  capitalization.  Panel A  reports  results  from  our  Long
Sample  of  domestic stocks.  The sample  period  runs  from  June  1957  to  December  2016.  Panel  B  reports  results
from our Broad Sample of global stocks. The sample period runs from June 1989 to December 2016. Alpha is the
intercept in a time-series regression of monthly excess return. The explanatory variables are the monthly returns of
the  market  (MKT), size  (SMB),  book-to-market  (HML),  and  momentum  (UMD) portfolios  from Appendix  A2.
Returns are in USD, do not include currency hedging, and  excess returns are over the U.S. Treasury bill rate. We
plot  monthly  excess  returns and alphas on  the  y-axes  and  market excess  returns  on the  x-axes.  Market  returns
indices are either the CRSP-value weighted index (U.S.) or the MSCI-World index (Global).

Quality Minus Junk – Asness, Frazzini, and Pedersen – Tables and Figures – Page T18

Panel A: Long Sample (U.S. , 1957 - 2016)Panel B: Broad Sample (Global , 1989 - 2016)-10.00%-8.00%-6.00%-4.00%-2.00%0.00%2.00%4.00%6.00%8.00%10.00%-25.00%-20.00%-15.00%-10.00%-5.00%0.00%5.00%10.00%15.00%20.00%QMJ -excess returnsMarket Excess Return-10.00%-8.00%-6.00%-4.00%-2.00%0.00%2.00%4.00%6.00%8.00%10.00%-25.00%-20.00%-15.00%-10.00%-5.00%0.00%5.00%10.00%15.00%QMJ -excess returnsMarket Excess Return-10.00%-8.00%-6.00%-4.00%-2.00%0.00%2.00%4.00%6.00%8.00%10.00%-25.00%-20.00%-15.00%-10.00%-5.00%0.00%5.00%10.00%15.00%20.00%QMJ -4-factor alphaMarket Excess Return-4.00%-2.00%0.00%2.00%4.00%6.00%8.00%-25.00%-20.00%-15.00%-10.00%-5.00%0.00%5.00%10.00%15.00%QMJ -4-factor alphaMarket Excess Return

Figure 5
Expected Returns vs. Return Expectations

This  figure  plots  realized  returns  and  return  expectations  based  on  I/B/E/S  target  prices  for  quality -sorted
portfolios. Portfolio P1 contains the stocks with the lowest quality scores and P10 those with the highest quality
scores.  Each calendar  month, stocks  in each  country  are  ranked  in  ascending order on the basis  of  their quality
score. The ranked stocks are assigned to one of ten portfolios, where U.S. sorts are based on NYSE breakpoints.
For each portfolio, each month we compute the weighted-average target price (scaled by book equity) using the
I/B/E/S mean and median consensus for each stock. We report time-series averages of each variable. The implied
expected return is given by the ratio of target prices to current prices minus 1. For the global sample, we form one
set  of  portfolios  in  each  country  and  compute  global  portfolios  by  weighting  each  country’s   portfolio  by  the
country’s total (lagged) market capitalization. The sample period of our I/B/E/S target price data runs from March
1999 to December 2016.

Quality Minus Junk – Asness, Frazzini, and Pedersen – Tables and Figures – Page T19

Panel A: United States, 1999 – 2016Panel B: Global, 1999 – 20160.00%5.00%10.00%15.00%20.00%25.00%30.00%P1P2P3P4P5P6P7P8P9P10Mean Implied Expected ReturnMedian Implied Expected ReturnRealized future 12-month return0.00%5.00%10.00%15.00%20.00%25.00%30.00%P1P2P3P4P5P6P7P8P9P10Mean Implied Expected ReturnMedian Implied Expected ReturnRealized future 12-month return
Figure 6
Cross Sectional Regressions Coefficient, the Price of Quality

This  figure  plots coefficients  from  monthly cross-sectional  regressions. The  dependent variable  is the  log  of  a
firm’s market to book ratio in month t. The explanatory variable is the quality score in month t. We plot the time
series of the cross sectional coefficients.

Quality Minus Junk – Asness, Frazzini, and Pedersen – Tables and Figures – Page T20

0.0000.1000.2000.3000.4000.5000.600195719591961196319651967196919711973197519771979198119831985198719891991199319951997199920012003200520072009201120132015Time Series of FMB CoefficientsLong Sample (United States)Broad Sample (Global)

Internet Appendix A

A1: Variable Definitions

In  this  section  we  report  details  of  each  variable  used  on  our  quality  score.  Our

variables’  definitions  are  based  on  Altman  (1968),  Ohlson  (1980),  Ang,  Hodrick,  Xing,  and

Zhang  (2006),  Daniel  and  Titman  (2006),  Penman,  Richardson,  and  Tuna  (2007),  Campbell,

Hilscher,  and  Szilagyi  (2008),  Chen,  Novy-Marx  and  Zhang  (2011),  Novy-Marx  (2012),

Frazzini  and  Pedersen  (2013)  and  Asness  and  Frazzini  (2013).  Variable  names  correspond  to

CRSP  and  Compustat  data  items  and  we  omit  the  time  subscript  𝑡  for  contemporaneous

variables.  Finally,  unless  specified,  Compustat  data  items  refer  to  annual  items  and  time

subscripts  refer  to  years.  To  compute  the  z-score  of  a  variable 𝑥 at  time 𝑡 we  rank  x  cross-

sectionally  in ascending  order

The cross-sectional ranks are rescaled to have a zero cross-sectional mean and a cross-sectional

r𝑥 = rank(x)

standard deviation  of one:

Profitability

z(x) = z𝑥 = [𝑟𝑥 − 𝑟̅𝑥]/𝜎(𝑟𝑥)

We compute a profitability z-score by averaging z-scores of gross profits over assets (GPOA),

return on equity (ROE), return  on assets (ROA), cash flow over assets (CFOA), gross  margin

(GMAR) and low accruals (ACC):

Profitabiliy = z(zgpoa + zroe+zroa + zcfoa+zgmar + zacc)

𝐺𝑃𝑂𝐴   is equal to revenue minus costs of goods sold divided by total assets (𝑅𝐸𝑇𝑉 − 𝐶𝑂𝐺𝑆) /

𝐴𝑇. 𝑅𝑂𝐸  is  net  income  divided  by  book-equity 𝐼𝐵/𝐵𝐸. 𝑅𝑂𝐴 is  net  income  divided  by  total

assets 𝐼𝐵/𝐴𝑇. 𝐶𝐹𝑂𝐴  is  net  income  plus  depreciation  minus  changes  in  working  capital  and

capital  expenditures  divided  by  total  assets:  (𝑁𝐵 + 𝐷𝑃 − Δ𝑊𝐶 − 𝐶𝐴𝑃𝑋) /𝐴𝑇 .  𝐺𝑀𝐴𝑅  is

revenue  minus  costs  of  goods  sold  divided  by  total  sales:  (𝑅𝐸𝑇𝑉 − 𝐶𝑂𝐺𝑆) /𝑆𝐴𝐿𝐸 . 𝐴𝐶𝐶 is

depreciation  minus  changes  in  working  capital  −(Δ𝑊𝐶 − 𝐷𝑃)  /𝐴𝑇.  Working  capital 𝑊𝐶  is

defined  as  current  assets  minus  current  liabilities  minus  cash  and  short  term  instruments  plus

short term debt and income taxes payable  𝐴𝐶𝑇 − 𝐿𝐶𝑇 − 𝐶𝐻𝐸  + 𝐷𝐿𝐶 + 𝑇𝑋𝑃. Book equity 𝐵𝐸

is defined as shareholders’ equity minus preferred stock. To obtain shareholders’ equity we use

we  use  stockholders’  equity  (𝑆𝐸𝑄)  but  if  not  available,  we  use  the  sum  of  common  equity

( 𝐶𝐸𝑄 )  and  preferred  stocks  ( 𝑃𝑆𝑇𝐾 ).  If  both  𝑆𝐸𝑄  and  𝐶𝐸𝑄  are  unavailable,  we  proxy

shareholders’  equity  by  total  assets  (𝐴𝑇)  minus  the  sum  of  total  liability  (𝐿𝑇)  and  minority

interest (𝑀𝐼𝐵). To obtain book equity (BE), we subtract from shareholders’ equity the preferred

stock value  (𝑃𝑆𝑇𝐾𝑅𝑉, 𝑃𝑆𝑇𝐾𝐿 or 𝑃𝑆𝑇𝐾 depending  on availability).

Growth

We compute a growth z-score by averaging z-scores of five-year growth in gross profits

over  assets (𝐺𝑃𝑡 − 𝐺𝑃𝑡−5)/𝐴𝑇𝑡−5 where 𝐺𝑃 = 𝑅𝐸𝑉𝑇 − 𝐶𝑂𝐺𝑆 ,  five-year  growth  in  return  on

equity  (𝐼𝐵𝑡 − 𝐼𝐵𝑡−5)/𝐵𝐸𝑡−5 ,  five-year  growth  in  return  over  assets  (𝐼𝐵𝑡 − 𝐼𝐵𝑡−5)/𝐴𝑇𝑡−5  ,

five-year  growth  in  cash  flow  over  assets  (𝐶𝐹𝑡 − 𝐶𝐹𝑡 −5)/𝐴𝑇𝑡−5  where  𝐶𝐹 = 𝐼𝐵 + 𝐷𝑃 −

Δ𝑊𝐶 − 𝐶𝐴𝑃𝑋 , and five-year growth in gross margin  (𝐺𝑃𝑡 − 𝐺𝑃𝑡−5)/𝑆𝐴𝐿𝐸𝑡−5,:

Growth = z(zΔgpoa + zΔroe+zΔroa + zΔcfoa+zΔgmar)

Safety

We compute a safety z-score by averaging z-scores of  low  beta (BAB),   low  leverage (LEV),

low bankruptcy  risk  (Ohlson’s  O and Altman’s Z) and low earnings volatility  (EVOL):

Safety = z(z𝑏𝑎𝑏+zlev + zo+zz + zevol)

𝐵𝐴𝐵 is equal to minus market beta – 𝛽. Betas are estimated as in Frazzini and Pedersen (2013)

based on  the product of the rolling one-year daily standard  deviation and the rolling five-year

three-day correlations. For correlations, we use three-day returns to account for nonsynchronous

trading and a longer horizon because correlations are more stable than volatilities. 𝐿𝐸𝑉 is minus

total  debt  (the  sum  of  long  term  debt,  short  term  debt,  minority  interest  and  preferred  stock)

over total  assets −(𝐷𝐿𝑇𝑇 + 𝐷𝐿𝐶 + 𝑀𝐼𝐵𝑇 + 𝑃𝑆𝑇𝐾)/𝐴𝑇. We compute Ohlson’s  O-Score as

O = − (−1.32  − 0.407 ∗ log(ADJASSET/CPI)   +  6.03 ∗ TLTA –  1.43 ∗ WCTA  +  0.076

∗ CLCA –  1.72 ∗ OENEG  − 2.37 ∗ NITA − 1.83 ∗ FUTL + 0.285 ∗ INTWO

− 0.521 ∗ CHIN);

where 𝐴𝐷𝐽𝐴𝑆𝑆𝐸𝑇  is  adjusted  total  assets  equal  to  total  assets  plus  10%  of  the  difference

between  book  equity  and  market  equity  𝐴𝑇 + .1 ∗ (𝑀𝐸 − 𝐵𝐸) . 𝐶𝑃𝐼  is  the  consumer  price

index. 𝑇𝐿𝑇𝐴 is  equal  to  book  value  of  debt  (𝐷𝐿𝐶 +  𝐷𝐿𝑇𝑇)  divided  by 𝐴𝐷𝐽𝐴𝑆𝑆𝐸𝑇. 𝑊𝐶𝑇𝐴 is

current  assets  minus  current  liabilities  scaled  by  adjusted  assets (𝐴𝐶𝑇 − 𝐿𝐶𝑇)/𝐴𝐷𝐽𝐴𝑆𝑆𝐸𝑇 .

𝐶𝐿𝐶𝐴 is current  liabilities divided by current assets 𝐿𝐶𝑇/𝐴𝐶𝑇. 𝑂𝐸𝑁𝐸𝐺  is a dummy equal to 1

if  total  liabilities  exceed  total  assets  1(𝐿𝑇 > 𝐴𝑇) . 𝑁𝐼𝑇𝐴 is  net  income  over  assets 𝐼𝐵/𝐴𝑇.

𝐹𝑈𝑇𝐿 is  pre-tax  income  over  total  liabilities  𝑃𝑇/𝐿𝑇. 𝐼𝑁𝑇𝑊𝑂 is  a  dummy  equal  to  one  if  net

income  is  negative  for  the  current  and  prior  fiscal  year  1(𝑀𝐴𝑋{𝐼𝐵𝑡, 𝐼𝐵𝑡−1} < 0). 𝐶𝐻𝐼𝑁  is
changes  in  net  income  defined  as    (𝐼𝐵𝑡 − 𝐼𝐵𝑡−1)/(|𝐼𝐵|𝑡 + |𝐼𝐵𝑡−1|).  Altman’s  Z-Score  is  a
weighted  average  of  working  capital,  retained  earnings,  earnings  before  interest  and  taxes,

market equity  and sales, all over total assets:

Z = (1.2 WC + 1.4 RE + 3.3EBIT + 0.6ME + SALE)/AT

𝐸𝑉𝑂𝐿 is the standard  deviation of quarterly  𝑅𝑂𝐸 over the past 60 quarters. We require at  least

twelve  non  missing  quarters.  If  quarterly  data  is  unavailable  we  use  the  standard  deviation  of
annual  𝑅𝑂𝐸 over the past 5 years and we require five non  missing  fiscal years1.

Book-to-Market

Book-to-market  ratios  follow  Asness  and  Frazzini  (2013).  We  require  stocks  to  have  a

positive  book  equity  and  compute  book-to-market  as  book  equity  divided  by  the  most

recent market  equity: 𝐵𝐸/𝑀𝐸.

1 Quarterly data is unavailable for countries in our global sample.

A2: Global Factor Returns

In this section we report  details of the construction of the  market (MKT),  size (SMB),

book-to-market (HML), and momentum (UMD) portfolios used on the analysis. The data can be

downloaded  at  https://www.aqr.com/library/data-sets/quality-minus-junk-factors-monthly.  The

portfolio construction follows Fama and French (1992, 1993 and 1996) and Asness and Frazzini

(2013). We form  one set of portfolios  in each country and  compute global factor portfolios by

weighting  each  country’s  portfolio  by  the  country’s  total  (lagged)  market  capitalization.  The

market  factor  MKT  is  the  value-weighted  return  on  all  available  stocks  minus  the  one-month

Treasury  bill  rate.  The  size,  value  and  momentum  factors  are  constructed  using  six  value-

weighted  portfolios  formed  on  size  (market  value  of  equity  ME)  and  book-to-market  (book

equity  divided  by  the  most  recent  market  equity 𝐵𝐸/𝑀𝐸) and 1-year return (return over the

prior 12 months, skipping the most recent month). At the end of each calendar month, stocks are

assigned to two size-sorted portfolios based on their  market capitalization. For U.S. securities,

the  size  breakpoint  is  the  median  NYSE  market  equity.  For  our  international  sample  the  size

breakpoint is the 80th percentile by country. We use conditional sorts, first sorting on size, then

on  the  second  variable.  Portfolios  are  value-weighted,  refreshed  every  calendar  month,  and

rebalanced every calendar month to maintain value weights. The size factor SMB is the average

return on the 3 small  portfolios  minus  the average return on the 3 big  portfolios:

𝑆𝑀𝐵  =  1/3 (𝑆𝑚𝑎𝑙𝑙 𝑉𝑎𝑙𝑢𝑒  +  𝑆𝑚𝑎𝑙𝑙 𝑁𝑒𝑢𝑡𝑟𝑎𝑙  +  𝑆𝑚𝑎𝑙𝑙 𝐺𝑟𝑜𝑤𝑡ℎ )

             − 1/3 (𝐵𝑖𝑔 𝑉𝑎𝑙𝑢𝑒  +  𝐵𝑖𝑔 𝑁𝑒𝑢𝑡𝑟𝑎𝑙  +  𝐵𝑖𝑔 𝐺𝑟𝑜𝑤𝑡ℎ)

The  value  factors  HML  is  the  average  return  on  the  two  value  portfolios  minus  the  average

return on the two growth portfolios:

𝐻𝑀𝐿  =  1/2 (𝑆𝑚𝑎𝑙𝑙 𝑉𝑎𝑙𝑢𝑒  +  𝐵𝑖𝑔 𝑉𝑎𝑙𝑢𝑒)   −  1/2 (𝑆𝑚𝑎𝑙𝑙 𝐺𝑟𝑜𝑤𝑡ℎ  +  𝐵𝑖𝑔 𝐺𝑟𝑜𝑤𝑡ℎ)

The momentum factor UMD  is the average return  on the two high return  portfolios minus the

average return on the two low return portfolios:

𝑈𝑀𝐷   =  1/2 (𝑆𝑚𝑎𝑙𝑙 𝐻𝑖𝑔ℎ  +  𝐵𝑖𝑔 𝐻𝑖𝑔ℎ)   −  1/2(𝑆𝑚𝑎𝑙𝑙 𝐿𝑜𝑤  +  𝐵𝑖𝑔 𝐿𝑜𝑤)

Portfolio returns are in USD and do not  include any currency hedging. Excess returns are  over

the U.S. Treasury bill  rate.

Table A1
Pricing and Accounting Data Sources

This table shows pricing and accounting data sources by time period.

Data TypeUniverseDate RangeSourcePricing data Domestic192601–196706CRSPPricing data Domestic196707–199712Merged CRSP/CompustatPricing data Domestic199801–PresentCompustatPricing data International198401–PresentCompustatAccounting dataGlobal195006–PresentCompustatRisk free rate192601–198012CRSPRisk free rate198101–PresentCompustat

Table A2
Persistence of Quality Measures

This table shows average quality scores. Each calendar month, stocks in each country in  are ranked in ascending
order on  the basis of their  quality score. The  ranked stocks  are  assigned to  one of  ten portfolios.  U.S. sorts  are
based on NYSE breakpoints. This table reports each portfolio’s quality score at portfolio formation (date 𝑡) up to
the subsequent ten years  (date t  +  120  months). We  report  the time  series  average of the value-weighted  cross
sectional means. Panel A reports results from our Long Sample of domestic stocks. The sample period runs from
June 1957 to December 2016. Panel B reports results from our Broad Sample of global stocks. The sample period
runs  from  June  1989  to  December  2016.  Standard  errors  are  adjusted  for heteroskedasticity  and  autocorrelation
with a lag length of five years (Newey and West (1987)) and 5% significance is indicated in bold.

Panel A: Long Sample (U.S.)P1P2P3P4P5P6P7P8P9P10H-LH-L195706 - 201612(Low)(High)t-statProfit (t)-1.43-0.81-0.49-0.230.010.240.470.741.101.743.1762.56Profit (t + 12M)-0.92-0.51-0.29-0.080.090.260.430.650.951.512.4337.85Profit (t + 36M)-0.66-0.38-0.22-0.040.080.210.380.520.781.372.0325.45Profit (t + 60M)-0.53-0.31-0.17-0.050.090.170.310.470.661.291.8320.00Profit (t + 120M)-0.38-0.23-0.110.000.100.160.300.360.591.131.5324.70Growth (t)-1.49-1.00-0.68-0.41-0.150.110.380.691.031.603.10121.52Growth (t + 12M)-0.87-0.64-0.46-0.27-0.070.060.260.530.831.292.1639.99Growth (t + 36M)-0.40-0.39-0.31-0.22-0.12-0.030.090.260.540.881.2813.69Growth (t + 60M)0.01-0.14-0.17-0.20-0.14-0.15-0.030.040.270.510.504.04Growth (t + 120M)-0.24-0.21-0.16-0.17-0.15-0.17-0.090.020.160.290.534.91Safety (t)-1.53-0.91-0.54-0.27-0.040.170.400.650.951.462.9847.90Safety (t + 12M)-1.22-0.73-0.44-0.22-0.010.180.360.610.861.272.4836.27Safety (t + 36M)-0.86-0.54-0.33-0.180.000.120.310.530.741.021.8818.36Safety (t + 60M)-0.65-0.40-0.23-0.130.010.110.290.470.660.911.5914.55Safety (t + 120M)-0.43-0.27-0.15-0.050.060.130.250.390.590.711.1512.04Panel B: Broad Sample P1P2P3P4P5P6P7P8P9P10H-LH-L198906 - 201612(Low)(High)t-statProfit (t)-1.46-0.85-0.51-0.240.010.250.490.771.121.703.1664.75Profit (t + 12M)-0.84-0.46-0.24-0.070.090.260.440.650.951.442.2876.18Profit (t + 36M)-0.57-0.33-0.16-0.030.090.240.390.550.791.281.8533.83Profit (t + 60M)-0.43-0.24-0.110.010.140.220.350.500.701.181.6029.09Profit (t + 120M)-0.30-0.14-0.030.050.150.230.310.400.570.991.2919.09Growth (t)-1.52-1.01-0.69-0.41-0.160.100.360.651.021.703.2068.34Growth (t + 12M)-0.74-0.53-0.40-0.22-0.090.080.270.500.721.221.9658.64Growth (t + 36M)-0.33-0.29-0.27-0.16-0.080.020.130.280.430.781.1123.54Growth (t + 60M)0.18-0.01-0.11-0.08-0.08-0.090.000.080.130.300.131.83Growth (t + 120M)-0.19-0.21-0.14-0.13-0.18-0.15-0.110.000.050.090.294.58Safety (t)-1.63-0.97-0.60-0.31-0.060.170.400.650.971.473.1045.28Safety (t + 12M)-1.31-0.79-0.51-0.26-0.060.140.340.570.851.202.5033.21Safety (t + 36M)-0.99-0.63-0.42-0.24-0.060.080.250.450.680.891.8823.64Safety (t + 60M)-0.79-0.51-0.33-0.20-0.050.060.230.380.580.741.5419.57Safety (t + 120M)-0.47-0.30-0.20-0.110.010.070.180.310.460.541.0112.17

Table A3
Results: Monthly Cross Sectional Regressions, the Price of Quality

This table reports results from monthly Fama-Macbeth regressions. The dependent variable is the log of a firm’s
market  to book  ratio  in  month  t.  The  explanatory  variables  are  the  quality scores on  month  t  and  a series  of
controls. “Firm size” is the log of the firm’s market capitalization; “1-year return” is the firm’s stock return over
the  prior  year.  “Firm  age”  is  the  cumulative number  of  years since  the  firm’s  IPO.  “Uncertainty  about  mean
profitability” (Pastor and Veronesi (2003))  is the standard deviation of the residuals of an AR(1) model for each
firm’s ROE, using the longest continuous series of a firm's valid annual ROE up to date t. We require a minim of
five years of non-missing ROEs. “Dividend payer” is a dummy equal to one if the firm paid any dividends over the
prior year. With the exception of the “Dividend payer” dummy, all explanatory variables at time t are ranked cross-
sectionally  and  rescaled  to  have  a  zero  cross-sectional  mean  and  a  cross-sectional  standard  deviation  of  one.
Industry, country or  firm  fixed  effects are  included  when  indicated  (“Industry  FE”,  “Country  FE”, “Firm  FE”).
“Average AdjR2” is the time series average of the adjusted R-square of the cross sectional regression. Standard
errors are adjusted for heteroskedasticity and autocorrelation (Newey and West (1987)) with a lag length of five
years. T-statistics are shown below the coefficient estimates and 5% statistical significance is indicated in bold.

(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)(11)(12)Quality0.240.260.260.240.220.080.190.210.190.170.190.05(12.32)(19.31)(12.27)(12.66)(14.13)(6.59)(13.21)(19.35)(13.81)(19.21)(9.13)(6.45)Firm size.0.35.0.35.0.80.0.37.0.37.0.82.(20.03).(19.90).(20.27).(12.93).(13.51).(15.99)1-year return.0.24.0.25.0.19.0.30.0.30.0.23.(14.67).(14.61).(16.44).(21.72).(23.05).(41.21)Firm age.-0.18.-0.17.-0.17.-0.13.-0.12.-0.16.(-8.00).(-7.21).(-6.23).(-5.31).(-5.02).(-5.95)Profit Uncertainty.0.38.0.35.0.38.0.42.0.36.0.46.(15.04).(13.44).(10.19).(30.51).(21.07).(31.37)Dividend payer.(-0.16).(-0.08).(-0.01).(-0.20).(-0.11).(0.07).(-7.37).(-3.61).(-0.33).(-7.03).(-3.32).(2.04)Profit Uncertainty.-0.20.-0.20.-0.15.-0.23.-0.20.-0.20x Dividend payer.(-10.50).(-7.30).(-6.49).(-17.17).(-8.82).(-9.79)Average AdjR20.100.430.250.500.060.450.100.380.200.440.030.41Nobs (months)715648715648715648331331331331331331Industry FEXXXXCountry FEXXXXFirm FEXXXXPane A: Long Sample (U.S., 195706 - 201612)Panel b: Broad Sample (Global, 198906 - 201612)

Table A4
 Quality Minus Junk Components

This table shows calendar-time monthly portfolio returns and factor loadings. Quality minus Junk (QMJ) factors
are constructed as the intersection of six value-weighted portfolios formed on size and quality. At the end of each
calendar  month, stocks  are  assigned to  two size-sorted portfolios  based on their  market  capitalization.  For  U.S.
securities, the size breakpoint is the median NYSE market equity. For other markets the size breakpoint is the 80th
percentile by country. We use conditional sorts, first sorting on size, then on quality. Portfolios are value-weighted,
refreshed every calendar month, and rebalanced every calendar month to maintain value weights. The QMJ factor
return  is the average  return on  the  two high quality portfolios  minus  the average  return on the two  low quality
(junk) portfolios. Portfolios based on profitability, growth and safety scores are constructed in a similar  manner.
We form one set of portfolios in each country and compute global portfolios by weighting each country’s portfolio
by the country’s total (lagged) market capitalization. Alpha is the intercept in a time-series regression of monthly
excess return. The explanatory variables are the returns of the market (MKT), size (SMB), book-to-market (HML),
and momentum (UMD) portfolios from Appendix A2. Panel A reports results from our Long Sample of domestic
stocks. The sample period runs from June 1957 to December 2016. Panel B reports results from our Broad Sample
of global stocks. The sample period runs from June 1989 to December 2016. Returns are in USD, do not include
currency hedging,  and  excess  returns  are  over  the  U.S.  Treasury  bill  rate.  Returns  and  alphas  are  in  monthly
percent, t-statistics are shown below the coefficient estimates, and 5% statistical significance is indicated in bold.
“Information ratio” is equal to the 4-factor alpha divided by the standard deviation of the estimated residuals in the
time-series regression. Sharpe ratios and information ratios are annualized.

QMJQMJSmallBigSmallBigSmallBigSmallBigExcess Returns0.860.560.480.450.250.730.560.200.360.36(4.20)(3.45)(1.85)(2.41)(3.16)(2.99)(2.50)(0.58)(1.27)(3.19)CAPM-alpha0.280.07-0.22-0.110.340.370.21-0.30-0.090.49(3.09)(1.55)(-1.68)(-2.04)(4.69)(2.94)(2.30)(-1.58)(-0.82)(5.52)3-factor alpha0.210.15-0.37-0.190.460.340.28-0.36-0.170.57(5.55)(4.24)(-6.64)(-4.05)(7.81)(3.44)(3.24)(-2.76)(-1.69)(8.22)4-factor alpha0.230.26-0.36-0.290.570.330.36-0.24-0.230.58(5.54)(7.31)(-6.07)(-6.00)(9.22)(3.09)(3.81)(-1.68)(-2.13)(7.61)MKT0.970.941.161.12-0.190.780.841.061.08-0.26(102.46)(114.02)(84.35)(98.63)(-12.93)(32.73)(40.24)(33.61)(44.14)(-15.24)SMB0.86-0.111.210.05-0.250.77-0.151.250.00-0.32(58.31)(-8.11)(55.99)(2.59)(-11.08)(14.79)(-3.37)(18.23)(0.09)(-8.65)HML0.05-0.300.220.30-0.380.14-0.270.140.30-0.29(3.26)(-21.75)(9.46)(15.97)(-16.05)(2.91)(-6.32)(2.11)(5.98)(-8.11)UMD-0.01-0.10-0.010.10-0.100.01-0.07-0.110.060.00(-0.97)(-9.00)(-0.45)(6.08)(-5.10)(0.18)(-2.09)(-2.25)(1.47)(-0.14)Sharpe Ratio0.540.450.240.310.410.570.480.110.240.61Information ratio0.781.03-0.85-0.841.290.650.80-0.35-0.451.60R20.970.960.950.940.470.840.860.860.880.63        Panel A: Long Sample (U.S. , 195707 - 201612)       Panel B: Broad Sample (Global , 198907 - 201612)           High  Quality      Low Quality           High  Quality      Low Quality

Table A5
Robustness Checks: QMJ by Time Period and by Size

This table shows calendar-time monthly portfolio returns and factor loadings. Quality minus Junk (QMJ) factors
are constructed as the intersection of six value-weighted portfolios formed on size and quality. At the end of each
calendar  month, stocks  are  assigned to  two size-sorted portfolios  based on their  market  capitalization.  For  U.S.
securities, the size breakpoint is the median NYSE market equity. For other markets the size breakpoint is the 80th
percentile by country. We use conditional sorts, first sorting on size, then on quality. Portfo lios are value-weighted,
refreshed every calendar month, and rebalanced every calendar month to maintain value weights. The QMJ factor
return  is the average  return on  the  two high quality portfolios  minus the average  return on the two  low quality
(junk) portfolios. Portfolios based on profitability, growth and safety scores are constructed in a similar  manner.
We form one set of portfolios in each country and compute global portfolios by weighting each country’s portfolio
by the country’s total (lagged) market capitalization. Alpha is the intercept in a time-series regression of monthly
excess return. The explanatory variables are the returns of the market (MKT), size (SMB), book-to-market (HML),
and momentum (UMD) portfolios from Appendix A2. The table report results from our Long Sample of domestic
stocks (sample period running from June 1957 to December 2016) and from our Broad Sample of global stocks
(sample period running from June 1989 to December 2016). Returns are in USD, do not include currency hedging,
and excess returns are over the U.S. Treasury bill rate. Returns and alphas are in monthly percent, t-statistics are
shown below the coefficient estimates, and 5% statistical significance is indicated in  bold. “Information ratio” is
equal to the 4-factor alpha divided by the standard deviation of the estimated residuals in the time-series regression.
Sharpe ratios and information ratios are annualized.

SampleUniverseSample PeriodExcess returnT-stat Excess return4-factor alphaT-stat AlphaSharpe RatioInformation RatioLong SampleUnited States1957 - 19880.171.840.598.210.331.63Long SampleUnited States1989 - 20050.372.330.725.490.561.50Long SampleUnited States2006 - 20160.291.260.513.880.381.20Broad SampleGlobal1989 - 20050.332.360.544.700.581.33Broad SampleGlobal2006 - 20160.422.140.647.110.652.32SampleUniverseSample PeriodExcess returnT-stat Excess return4-factor alphaT-stat AlphaSharpe RatioInformation RatioP1 (small) United States1957 - 20160.634.330.705.480.560.77P2United States1957 - 20160.453.780.595.330.490.75P3United States1957 - 20160.332.910.534.840.380.68P4United States1957 - 20160.322.950.585.600.380.79P5United States1957 - 20160.060.640.302.990.080.42P6United States1957 - 20160.101.070.364.060.140.57P7United States1957 - 20160.151.730.445.220.220.73P8United States1957 - 20160.202.110.515.660.270.79P9United States1957 - 20160.091.000.404.910.130.69P10 (large) United States1957 - 20160.201.870.667.180.241.01P1 (small) Global1989 - 20160.391.970.211.450.380.31P2Global1989 - 20160.523.260.443.810.620.80P3Global1989 - 20160.513.500.514.440.670.93P4Global1989 - 20160.463.590.525.280.691.11P5Global1989 - 20160.312.420.433.850.460.81P6Global1989 - 20160.282.600.454.520.500.95P7Global1989 - 20160.353.380.546.100.641.29P8Global1989 - 20160.343.190.657.030.611.48P9Global1989 - 20160.212.000.546.330.381.33P10 (large) Global1989 - 20160.221.520.625.300.291.12

Table A6
Robustness Checks: QMJ among Small and Large by Country

This table shows calendar-time monthly portfolio returns and factor loadings. Quality minus Junk (QMJ) factors
are constructed as the intersection of six value-weighted portfolios formed on size and quality. At the end of each
calendar  month, stocks  are  assigned to  two size-sorted portfolios  based on their  market  capitalization.  For  U.S.
securities, the size breakpoint is the median NYSE market equity. For other markets the size breakpoint is the 80th
percentile by country. We use conditional sorts, first sorting on size, then on quality. Portfolios are value-weighted,
refreshed every calendar month, and rebalanced every calendar month to maintain value weights. The QMJ factor
return  is the average  return on  the  two high quality portfolios  minus the average  return on the two  low quality
(junk) portfolios. Portfolios based on profitability,  growth and safety scores are constructed in a similar  manner.
We form one set of portfolios in each country and compute global portfolios by weighting each country’s portfolio
by the country’s total (lagged) market capitalization. Alpha is the intercept in a time-series regression of monthly
excess return. The explanatory variables are the returns of the market (MKT), size (SMB), book-to-market (HML),
and momentum (UMD) portfolios from Appendix A2. The table report results from our Long Sample of domestic
stocks (sample period running from June 1957 to December 2016) and from our Broad Sample of global stocks
(sample period running from June 1989 to December 2016). Returns are in USD, do not include currency hedging,
and excess returns are over the U.S. Treasury bill rate. Returns and alphas are in monthly percent, t-statistics are
shown below the coefficient estimates, and 5% statistical significance is indicated in  bold. “Information ratio” is
equal to the 4-factor alpha divided by the standard deviation of the estimated residuals in the time-series regression.
Sharpe ratios and information ratios are annualized.

Australia-0.11-0.480.220.93-0.100.230.712.750.743.060.590.76Austria0.150.320.100.250.070.06-0.24-0.740.100.38-0.160.08Belgium0.340.900.290.950.190.220.511.770.491.940.380.45Canada0.602.480.612.560.470.530.652.490.451.930.480.40Switzerland0.370.960.461.470.210.330.251.160.291.540.250.35Germany-0.07-0.280.492.02-0.060.481.134.740.703.471.020.82Denmark0.160.41-0.24-0.690.09-0.160.491.860.391.560.400.36Spain-0.06-0.17-0.01-0.04-0.04-0.010.110.360.170.710.080.16Finland0.240.480.501.280.100.290.110.420.170.640.090.14France0.200.700.401.700.150.390.502.200.623.530.480.81United Kingdom-0.04-0.16-0.13-0.60-0.03-0.130.453.120.473.720.640.84Greece2.583.101.582.580.790.681.272.661.033.000.680.79Hong Kong0.100.240.772.610.050.59-0.11-0.260.411.33-0.060.30Ireland0.250.300.570.910.060.201.402.041.292.080.440.46Israel0.370.800.391.050.200.290.622.010.391.510.510.42Italy0.391.060.401.440.230.320.863.020.823.990.650.89Japan0.301.210.673.020.250.680.150.690.442.600.140.58Netherlands-0.20-0.490.220.68-0.110.150.351.210.592.450.260.55Norway0.150.430.280.780.090.180.892.470.822.580.530.59New Zealand0.110.400.110.380.090.09-0.16-0.59-0.21-0.76-0.13-0.18Portugal 1.392.941.423.310.670.780.290.640.250.600.140.14Singapore0.080.200.542.030.040.450.642.170.753.360.470.75Sweden-0.09-0.280.00-0.02-0.060.001.204.040.863.230.870.73United States0.121.270.557.730.161.080.383.990.596.990.520.98Global0.201.530.596.030.291.270.523.960.576.080.751.28Sharpe RatioInformation RatioSmall CapInformation RatioLarge CapSharpe RatioExcess returnT-stat Excess return4-factor AlphaT-stat AlphaExcess returnT-stat Excess return4-factor AlphaT-stat Alpha

Table A7
Quality Minus Junk: Alpha to 4-Factor Model Plus BAB

This  table  shows  calendar-time  portfolio  returns  and  factor  loadings.  Quality  minus  Junk  (QMJ)  factors  are
constructed as the  intersection of six  value-weighted portfolios  formed on size  and quality. At  the end  of each
calendar  month, stocks  are  assigned to  two size-sorted portfolios  based on their  market  capitalization.  For  U.S.
securities, the size breakpoint is the median NYSE market equity. For other markets the size breakpoint is the 80th
percentile by country. We use conditional sorts, first sorting on size, then on quality. Portfolios are value-weighted,
refreshed every calendar month, and rebalanced every calendar month to maintain value weights. The QMJ factor
return  is the average  return on  the  two high quality portfolios  minus the average  return on the two  low quality
(junk) portfolios. Portfolios based on profitability, growth and safety scores are constructed in a similar  manner.
We form one set of portfolios in each country and compute global portfolios by weighting each country’s portfolio
by the country’s total (lagged) market capitalization. Alpha is the intercept in a time-series regression of monthly
excess return. The explanatory variables are the returns of the market (MKT), size (SMB), book-to-market (HML),
momentum  (UMD)  portfolios  all  from  Appendix  A2  and  the  low  beta  (BAB)  factor  (Frazzini  and  Pedersen
(2014)). Panel A reports results from our Long Sample of domestic stocks. The sample period runs from June 1957
to December 2016. Panel B reports results from our Broad Sample of global stocks. The sample period runs from
June 1989 to December 2016. Returns are in USD, do not include currency hedging, and  excess returns are over
the U.S. Treasury bill rate. Returns and alphas are in monthly percent, t-statistics are shown below the coefficient
estimates,  and  5% statistical  significance  is  indicated  in bold.  “Information  ratio”  is equal  to  the  4-factor alpha
divided  by  the  standard  deviation  of  the  estimated  residuals  in  the  time-series  regression.  Sharpe  ratios  and
information ratios are annualized.

QMJProfitabilitySafetyGrowthQMJProfitabilitySafetyGrowthExcess Returns0.250.250.230.080.360.390.230.15(3.16)(3.67)(2.57)(1.14)(3.19)(4.39)(1.74)(1.89)5-factor alpha0.520.480.470.360.540.450.360.37(8.50)(7.82)(7.85)(6.13)(7.35)(6.70)(5.50)(4.95)MKT-0.19-0.12-0.310.02-0.25-0.19-0.34-0.01(-13.39)(-8.35)(-23.08)(1.14)(-15.57)(-12.65)(-23.51)(-0.46)SMB-0.25-0.22-0.29-0.03-0.37-0.30-0.27-0.16(-11.45)(-10.13)(-13.59)(-1.29)(-10.15)(-9.01)(-8.41)(-4.26)HML-0.43-0.32-0.35-0.50-0.38-0.12-0.37-0.36(-17.46)(-13.18)(-14.83)(-21.39)(-10.18)(-3.33)(-11.00)(-9.44)UMD-0.15-0.12-0.06-0.20-0.09-0.020.01-0.15(-6.99)(-5.86)(-2.96)(-9.83)(-3.05)(-0.57)(0.22)(-4.86)BAB0.120.070.150.020.160.090.180.02(5.91)(3.38)(7.63)(0.87)(5.74)(3.51)(7.04)(0.56)Sharpe Ratio0.410.480.330.150.610.840.330.36Information Ratio1.211.111.110.871.561.421.171.05Adjusted R20.490.340.640.450.660.530.800.27Panel A: Long Sample (U.S. , 195707 - 201612)Panel B: Broad Sample (Global , 198907 - 201612)Table A8
Quality Minus Junk: Alphas to 5-Factor Model Plus UMD and BAB

This  table shows calendar-time  portfolio  returns  and  factor  loadings.  Quality  minus  Junk  (QMJ)  factors are
constructed as the intersection of six value-weighted portfolios formed on size and quality. At the end of each
calendar month, stocks are assigned to two size-sorted portfolios based on their market capitalization. For U.S.
securities, the size breakpoint is the median NYSE market equity. For  other markets the size breakpoint is the
80th percentile by country. We use conditional sorts, first sorting on size, then on quality. Portfolios are value-
weighted, refreshed every calendar month, and rebalanced every calendar month to maintain value weights. The
QMJ factor return is the average return on the two high quality portfolios minus the average return on the two
low  quality  (junk) portfolios.  Portfolios based on profitability,  growth and safety scores are constructed  in a
similar manner. We form one set of portfolios in each country and compute global portfolios by weighting each
country’s portfolio by the country’s total (lagged) market capitalization. Alpha is the intercept in a time-series
regression  of  monthly  excess  return.  The  explanatory  variables  are  the  returns  of  the  market  (MKT),  size
(SMB), book-to-market (HML), profitability (RMW) and investment (CMA) portfolios from Fama and French
(2015) and the momentum (UMD) portfolios from Ken’s French data library  and the low beta (BAB) factor
(Frazzini and Pedersen (2014)). Panel A reports results from our Long Sample of domestic stocks. The sample
period runs from July1963 to December 2016. Panel B reports results from our Broad Sample of global stocks.
The  sample  period  runs  from  June  1990  to  December  2016.  Returns  are  in  USD,  do  not  include  currency
hedging, and excess returns are over the U.S. Treasury bill rate. Returns and alphas are in monthly percent, t-
statistics  are  shown  below  the  coefficient  estimates,  and  5%  statistical  significance  is  indicated  in  bold.
“Information ratio” is equal to the 4-factor alpha divided by the standard deviation of the estimated residuals in
the time-series regression. Sharpe ratios and information ratios are annualized.

Quality Minus Junk – Asness, Frazzini, and Pedersen – Appendix – Page A13

QMJProfitabilitySafetyGrowthQMJProfitabilitySafetyGrowthExcess Returns0.260.290.220.070.330.380.200.13(3.01)(3.92)(2.26)(0.88)(2.84)(4.26)(1.49)(1.59)7-factor alpha0.300.300.290.180.230.260.120.17(6.38)(6.80)(4.68)(4.17)(3.74)(5.16)(1.90)(2.68)MKT-0.15-0.07-0.280.00-0.22-0.13-0.31-0.03(-13.15)(-6.83)(-18.43)(0.33)(-13.25)(-9.91)(-18.63)(-1.76)SMB-0.09-0.06-0.190.05-0.19-0.16-0.17-0.10(-5.64)(-4.21)(-8.78)(3.61)(-5.77)(-5.93)(-5.03)(-3.09)HML-0.25-0.28-0.21-0.23-0.27-0.09-0.30-0.04(-10.99)(-13.30)(-6.99)(-10.80)(-6.98)(-2.77)(-7.61)(-0.91)CMA-0.070.120.01-0.430.030.070.07-0.44(-0.01)(-0.05)(0.05)(-0.03)(0.05)(-0.02)(0.11)(-0.04)RMW-2.123.740.15-13.960.711.711.38-9.27(0.59)(0.60)(0.29)(0.40)(0.64)(0.60)(0.36)(0.36)UMD25.5728.179.4118.7912.8414.737.077.17(0.06)(0.02)(0.13)(0.03)(0.08)(0.03)(0.17)(0.03)BAB4.941.858.212.354.752.5210.221.95(-0.72)(-3.24)(2.36)(-2.10)(1.87)(-0.68)(4.02)(-1.29)Sharpe Ratio0.410.540.310.120.550.830.290.31Information Ratio0.941.000.690.620.801.110.410.58Adjusted R20.740.710.640.730.780.740.820.50Panel A: Long Sample (U.S. ,196307 - 201612)Panel B: Broad Sample  (Global , 199007 - 201612)

Table A9
Asset Pricing Tests: 4-Factor Model plus BAB

This table shows calen dar-time portfolio returns and factor loadings. Quality minus Junk (QMJ) factors are constructed as the intersection of six  value- weighted portfolios formed
on size and quality. At the end of each calendar month, stocks are assigned to two size-sorted portfolios based on their market capitalization. For U.S. securities, the size breakpoint
is  the  median  NYSE  market  equity.  For  other  markets  the  size  breakpoint  is  the  80th  percentile  by  country.  We  use  conditional  sorts,  first  sorting  on  size,  then  on  quality.
Portfolios are value-weighted, refreshed every calendar month, and rebalanced every calendar month to maintain value weights. The QMJ factor return is the average return on the
two  high  quality  portfolios  minus  the  average  return  on the two  low  quality  (junk)  portfolios. We  form  one  set of  portfolios  in  each  country  and  compute  global  portfolios  by
weighting  each  country’s  portfolio  by  the  country’s  total  (lagged)  market  capitalization.  Alpha  is  the  intercept  in  a  time-series  regression  of  monthly  excess  return.  The  test
portfolios  are the  Quality minus  Junk  (QMJ)  factor, the market (MKT ),  size (SMB),  book -to-market  (HML),  and  momentum  (UMD)  portfolios  from  Appendix  A2  and  the  low
beta (BAB) factor (Frazzini and Pedersen (2014)). We run a regression of each of SMB, HML, UMD and BAB on the remaining factors excludin g and including the QMJ factor as
explanatory variable. Panel  A  reports results  from our  Long Sample  of  domestic  stocks. T he  sample period runs  from  June 1957 to  December  2016. Panel  B  reports results  from
our Broad Sample of global stocks. The sample period runs from June 1989 to December 2016. Returns are in USD, do  not include c urrency hedging, and excess returns are over
the  U.S.  T reasury  bill  rate.  Returns  and  alphas  are  in  monthly  percent, t -statistics  are  shown  below  the  coefficient  estimates,  and  5%  statistical  significance  is  indicated  in  bold.
“Information ratio” is equal to regression intercept, divided by the standard deviation of the estimated residuals.  Sharpe ratios and inform ation ratios are annualized.

Quality Minus Junk – Asness, Frazzini, and Pedersen – Appendix – Page A14

Left-hand sideSMBSMBHMLHMLUMDUMDBABBABSMBSMBHMLHMLUMDUMDBABBABExcess Returns0.150.150.310.310.710.710.850.850.020.020.350.350.660.660.830.83(1.50)(1.50)(2.47)(2.47)(4.78)(4.78)(7.36)(7.36)(0.18)(0.18)(2.20)(2.20)(3.09)(3.09)(5.29)(5.29)Alpha0.120.420.610.790.790.970.450.210.030.370.520.740.680.820.26-0.07(1.15)(4.26)(6.66)(10.27)(7.42)(9.13)(3.84)(1.78)(0.26)(3.62)(5.06)(7.95)(5.30)(6.10)(1.83)(-0.47)MKT0.170.02-0.14-0.23-0.17-0.250.020.090.07-0.12-0.07-0.21-0.14-0.22-0.040.11(7.20)(0.97)(-6.84)(-12.76)(-7.13)(-9.55)(0.69)(3.21)(2.75)(-4.10)(-2.76)(-8.36)(-5.04)(-5.87)(-1.16)(2.77)SMB..-0.05-0.21-0.08-0.190.020.12..-0.20-0.39-0.24-0.340.300.48..(-1.40)(-7.08)(-2.00)(-4.50)(0.49)(2.74)..(-3.88)(-7.89)(-3.63)(-4.68)(4.29)(6.53)HML-0.06-0.31..-0.84-0.980.400.55-0.22-0.42..-0.98-1.070.600.77(-1.40)(-7.08)..(-27.38)(-27.53)(8.92)(10.88)(-3.88)(-7.89)..(-23.19)(-21.04)(9.12)(11.07)UMD-0.07-0.15-0.61-0.53..0.380.42-0.17-0.19-0.64-0.54..0.550.55(-2.00)(-4.50)(-27.38)(-27.53)..(10.18)(11.35)(-3.63)(-4.68)(-23.19)(-21.04)..(10.70)(11.25)BAB0.020.090.250.260.330.36..0.180.240.340.360.470.51..(0.49)(2.74)(8.92)(10.88)(10.18)(11.35)..(4.29)(6.53)(9.12)(11.07)(10.70)(11.25)..QMJ.-0.62.-0.71.-0.44.0.41.-0.66.-0.63.-0.30.0.57.(-11.45).(-17.46).(-6.99).(5.91).(-10.15).(-10.18).(-3.05).(5.74)Sharpe Ratio0.200.200.320.320.620.620.950.950.040.040.420.420.590.591.011.01Information Ratio0.160.630.921.431.011.290.540.260.050.811.031.671.081.320.38-0.11Adjusted R20.090.230.520.660.540.570.140.180.090.310.630.720.680.690.310.37Panel A: Long Sample (U.S. ,196307 - 201612)Panel B: Broad Sample  (Global , 199011 - 201612)

Table A10
Asset Pricing Tests: 5-Factor Model Plus UMD

This table shows calen dar-time portfolio returns and factor loadings. Quality minus Junk (QMJ) factors are constructed as the intersection of six value - weighted portfolios formed
on size and quality. At the end of each calendar month, stocks are assigned to two size-sorted portfolios based on their market capitalization. For U.S. securities, the size breakpoint
is  the  median  NYSE  market  equity.  For  other  markets  the  size  breakpoint  is  the  80th  percentile  by  country.  We  use  conditional  sorts,  first  sorting  on  size,  then  on  quality.
Portfolios are value-weighted, refreshed every calendar month, and rebalanced every calendar month to maintain value weights. The QMJ factor retur n is the average return on the
two high quality portfolios minus the average return on the two low quality (junk) portfolios. Port folios based on profitability, growth and safety scores are constructed in a similar
manner.  We  form  one  set of portfolios  in  each  country  and  compute  global  portfolios  by  weighting  each  country’s  portfolio  by  the  country’s  total  (lagged)  market  capitalization.
Alpha  is the  intercept  in  a  time-series  regression  of  monthly  excess  return. The  explanatory  variables  are the  returns  of the market  (MKT ),  size  (SMB),  book -to-market  (HML),
profitability  (RMW)  and  investment  (CMA)  portfolios  from  Fama  and  French  (20 15), the momentum  (UMD)  portfolios  from  Ken’s  French  data  library   and  and  the  low  beta
(BAB) factor (Frazzini and Pedersen (2014)). Panel A reports results from our Long Sample of domestic stocks. The sample period runs from  July 1963 to December 2016. Panel
B reports results from our Broad Sample of global  stocks. T he sample period runs from November 1990 to December 2016. Returns are in USD, do not include currency hedging,
and  excess  returns  are  over  the  U.S.  T reasury  bill  rate.  Returns  and  alphas  are  in  monthly  percent,  t-statistics  are  shown  below  the  coefficient  estimates,  and  5%  statistical
significance is indicated in  bold. “Information ratio” is equal to the 4-factor alpha divided  by the standard deviation of the estimated residuals in the time-series regression. Sharpe
ratios and information ratios are annualized.

Quality Minus Junk – Asness, Frazzini, and Pedersen – Appendix – Page A15

Left-hand sideSMBSMBHMLHMLCMACMARMWRMWUMDUMDSMBSMBHMLHMLCMACMARMWRMWUMDUMDExcess Returns0.270.270.370.370.310.310.240.240.660.660.150.150.360.360.250.250.330.330.580.58(2.20)(2.20)(3.35)(3.35)(3.91)(3.91)(2.74)(2.74)(3.98)(3.98)(1.34)(1.34)(2.77)(2.77)(2.31)(2.31)(4.01)(4.01)(2.62)(2.62)Alpha0.300.440.100.280.200.230.34-0.110.730.500.290.400.030.140.160.140.370.070.580.32(2.54)(3.80)(1.24)(3.67)(3.56)(4.01)(4.13)(-1.82)(4.35)(2.91)(2.61)(3.70)(0.30)(1.65)(2.14)(1.87)(5.22)(1.19)(2.63)(1.45)MKT0.130.040.01-0.10-0.10-0.12-0.090.09-0.13-0.02-0.12-0.220.10-0.01-0.15-0.14-0.160.04-0.110.09(4.68)(1.35)(0.27)(-4.69)(-7.81)(-8.00)(-4.64)(6.02)(-3.10)(-0.41)(-3.81)(-6.38)(4.32)(-0.43)(-8.05)(-5.50)(-8.99)(1.82)(-1.83)(1.19)SMB..0.03-0.04-0.03-0.04-0.23-0.020.070.13..0.170.07-0.12-0.11-0.23-0.040.380.50..(1.00)(-1.40)(-1.39)(-1.86)(-8.37)(-1.23)(1.17)(2.20)..(3.80)(1.63)(-3.17)(-2.75)(-6.41)(-1.22)(3.43)(4.51)HML0.06-0.08..0.470.440.180.31-0.54-0.350.260.12..0.600.610.230.28-0.78-0.54(1.00)(-1.40)..(23.34)(17.97)(4.44)(11.21)(-6.85)(-4.00)(3.80)(1.63)..(18.93)(17.53)(4.96)(7.80)(-5.88)(-3.79)CMA-0.11-0.150.980.77..-0.33-0.090.410.45-0.27-0.230.900.82..-0.19-0.140.410.35(-1.39)(-1.86)(23.34)(17.97)..(-5.68)(-2.13)(3.50)(3.86)(-3.17)(-2.75)(18.93)(17.53)..(-3.30)(-3.10)(2.41)(2.12)RMW-0.44-0.100.170.53-0.15-0.08..0.24-0.17-0.51-0.130.330.59-0.18-0.22..0.55-0.04(-8.37)(-1.23)(4.44)(11.21)(-5.68)(-2.13)..(3.09)(-1.46)(-6.41)(-1.22)(4.96)(7.80)(-3.30)(-3.10)..(3.32)(-0.17)UMD0.030.06-0.13-0.070.050.050.06-0.02..0.100.12-0.13-0.080.050.040.060.00..(1.17)(2.20)(-6.85)(-4.00)(3.50)(3.86)(3.09)(-1.46)..(3.43)(4.51)(-5.88)(-3.79)(2.41)(2.12)(3.32)(-0.17)..QMJ.-0.54.-0.66.-0.11.0.91.0.68.-0.51.-0.45.0.06.0.59.0.83.(-5.71).(-11.29).(-2.28).(26.84).(4.91).(-5.45).(-6.13).(0.85).(14.07).(4.34)Sharpe Ratio0.300.300.460.460.530.530.370.370.540.540.260.260.540.540.450.450.780.780.510.51Information Ratio0.370.570.180.550.520.600.60-0.270.630.440.560.810.070.370.460.411.080.270.560.32Adjusted R20.160.200.520.600.550.550.190.620.090.120.140.210.600.640.610.610.330.590.180.22Panel A: Long Sample (U.S. ,196307 - 201612)Panel B: Broad Sample  (Global , 199011 - 201612)

Table A11
Asset Pricing Tests: 5-Factor Model Plus UMD and BAB

This table shows calen dar-time portfolio returns and factor loadings. Quality minus Junk (QMJ) factors are constructed as the intersection of six value- weighted portfolios formed
on size and quality. At the end of each calendar month, stocks are assigned to two size-sorted portfolios based on their market capitalization. For U.S. securities, the size breakpoint
is  the  median  NYSE  market  equity.  For  other  markets  the  size  breakpoint  is  the  80th  percentile  by  country.  We  use  conditional  sorts,  first  sorting  on  size,  then  on  quality.
Portfolios are value-weighted, refreshed every calendar month, and rebalanced every calendar month to maintain value weights. The QMJ factor return is the average return on the
two high quality portfolios minus the average return on the two low quality (junk) portfolios. Portfolios based on profitabil ity, growth and safety scores are constructed in a similar
manner.  We  form  one  set of portfolios  in  each  country  and  compute  global  portfolios  by  weighting  each  country’s  portfolio  by  the  country’s  total  (lagged)  market  capitalization.
Alpha  is the  intercept  in  a  time-series  regression  of  monthly  excess  return. The  explanatory  variables  are the  returns  of the market  (MKT ),  size  (SMB),  book -to-market  (HML),
profitability (RMW) and investment (CMA) portfolios from Fama and French (2015) and the momentum (UMD) portfolios from Ken’s  French data library. Panel A reports results
from our Long Sample of domestic stocks. The sample period runs from July 1963 to December 2016. Panel B reports results from our Broad  Sample of global stocks. T he sample
period  runs  from  November 1990 to  December 2016.  Returns  are  in  USD,  do  not  include  currency  hedging,  and  excess  returns  are  over the  U.S.  T reasury  bill  rate.  Return s  and
alphas are in monthly percent, t -statistics are shown below the coefficient estimates, and 5% statistical significance is indicated in bold. “Information ratio” is equal to the 4-factor
alpha divided  by the standard deviation of the estimated residuals  in the time-series regression. Sharpe ratios and information ratios are annualized.

Quality Minus Junk – Asness, Frazzini, and Pedersen – Appendix – Page A16

Left-hand sideSMBSMBHMLHMLCMACMARMWRMWUMDUMDBABBABSMBSMBHMLHMLCMACMARMWRMWUMDUMDBABBABExcess Returns0.270.270.370.370.310.310.240.240.660.660.270.820.150.150.360.360.250.250.330.330.580.580.150.83(2.20)(2.20)(3.35)(3.35)(3.91)(3.91)(2.74)(2.74)(3.98)(3.98)(2.20)(6.48)(1.34)(1.34)(2.77)(2.77)(2.31)(2.31)(4.01)(4.01)(2.62)(2.62)(1.34)(5.16)Alpha0.260.410.060.240.170.190.24-0.140.590.370.260.330.200.320.000.120.140.130.280.060.440.260.200.09(2.23)(3.49)(0.74)(3.17)(2.97)(3.40)(3.00)(-2.43)(3.57)(2.18)(2.23)(2.79)(1.96)(3.14)(-0.02)(1.40)(1.94)(1.76)(4.23)(1.00)(2.10)(1.22)(1.96)(0.67)MKT0.120.03-0.01-0.10-0.11-0.12-0.110.08-0.15-0.050.120.09-0.13-0.240.08-0.04-0.15-0.14-0.160.02-0.150.02-0.130.16(4.26)(1.09)(-0.33)(-5.03)(-8.29)(-8.35)(-5.47)(5.11)(-3.77)(-1.00)(4.26)(2.70)(-4.45)(-7.27)(3.48)(-1.34)(-8.29)(-5.82)(-9.34)(0.92)(-2.48)(0.22)(-4.45)(3.45)SMB..0.01-0.04-0.03-0.04-0.23-0.030.030.09.0.09..0.09-0.02-0.15-0.14-0.29-0.090.130.25.0.51..(0.53)(-1.72)(-1.82)(-2.23)(-8.77)(-1.75)(0.57)(1.60).(2.31)..(1.83)(-0.39)(-3.79)(-3.39)(-8.44)(-2.70)(1.10)(2.12).(7.18)HML0.03-0.11..0.430.400.110.27-0.60-0.410.030.240.12-0.03..0.560.570.120.22-0.89-0.680.120.44(0.53)(-1.72)..(20.21)(16.06)(2.69)(9.52)(-7.67)(-4.74)(0.53)(3.85)(1.83)(-0.39)..(15.93)(14.57)(2.62)(5.79)(-6.93)(-4.90)(1.83)(5.02)CMA-0.15-0.180.910.72..-0.38-0.120.270.31-0.150.37-0.30-0.260.810.72..-0.21-0.150.260.23-0.300.23(-1.82)(-2.23)(20.21)(16.06)..(-6.85)(-3.13)(2.30)(2.66)(-1.82)(4.56)(-3.79)(-3.39)(15.93)(14.57)..(-3.95)(-3.53)(1.57)(1.43)(-3.79)(2.21)RMW-0.48-0.140.110.47-0.18-0.12..0.08-0.31-0.480.49-0.66-0.270.190.45-0.23-0.25..0.14-0.27-0.660.55........................UMD0.020.04-0.14-0.080.030.040.02-0.04..0.020.160.030.06-0.15-0.110.030.030.02-0.02..0.030.17(0.57)(1.60)(-7.67)(-4.74)(2.30)(2.66)(1.03)(-2.76)..(0.57)(5.84)(1.10)(2.12)(-6.93)(-4.90)(1.57)(1.43)(0.81)(-1.27)..(1.10)(4.86)BAB2.522.314.513.854.644.568.436.235.835.842.52.6.727.184.445.022.312.217.364.285.564.866.72.(-8.77)(-1.75)(2.69)(9.52)(-6.85)(-3.13)..(1.03)(-2.76)(-8.77)(6.23)(-8.44)(-2.70)(2.62)(5.79)(-3.95)(-3.53)..(0.81)(-1.27)(-8.44)(4.28)QMJ.-0.53.-0.64.-0.10.0.86.0.67.-0.06.-0.52.-0.47.0.04.0.52.0.65.0.29.(-5.62).(-11.00).(-2.12).(25.64).(4.93).(-0.63).(-5.99).(-6.58).(0.53).(12.14).(3.44).(2.41)Sharpe Ratio0.300.300.460.460.530.530.370.370.540.540.300.890.260.260.540.540.450.450.780.780.510.510.261.01Information Ratio0.330.530.110.480.430.510.44-0.370.520.330.330.420.420.690.000.310.420.390.890.220.450.270.420.15Adjusted R20.170.210.530.610.560.570.270.640.130.160.170.250.240.320.620.670.620.620.430.610.250.270.240.44Panel A: Long Sample (U.S. ,196307 - 201612)Panel B: Broad Sample  (Global , 199011 - 201612)
Figure A1
Cross Sectional Regressions Coefficient t-statistics by Industry

This  figure  plots coefficients  from  annual  Fama-Macbeth  regressions  regressions  within  71  GICS  industries.
The dependent variable is the log of a firm’s market to book ratio in June  of each calendar year (date t). The
explanatory variables are the quality scores on date t and a series of controls. “Firm size” is the log of the firm’s
market capitalization; “1-year return” is the firm’s stock return over the prior year. “Firm age” is the cumulative
number of years since the firm’s IPO. “Uncertainty about mean profitability” (Pastor and Veronesi (2003))  is
the standard deviation of the residuals of an AR(1) model for each  firm’s ROE, using the longest continuous
series  of  a  firm's  valid annual  ROE  up  to date  t. We  require a  minim  of  five  years of  non-missing  ROEs.
“Dividend  payer”  is  a  dummy  equal  to  one  if  the  firm  paid  any  dividends  over  the  prior  year.  With  the
exception of the “Dividend payer” dummy, all explanatory variables at time t are ranked cross-sectionally and
rescaled to have a zero cross-sectional mean and a cross-sectional standard deviation of one. We plot t-statistics
of the quality regression coefficient.

Quality Minus Junk – Asness, Frazzini, and Pedersen – Appendix – Page A17

-4-2024681012t-statisticsLong Sample -U.S. -t(qmj)-505101520t-statisticsBroad Sample -Global -t(qmj)

Figure A2
QMJ: 4-Factor Alphas by Year

This  figure  plots  4-factor  adjusted  information  ratios  of  Quality  minus  Junk  (QMJ)  factors.  For  U.S.  securities,  the  size
breakpoint  is  the  median  NYSE  market  equity.  For  other  markets  the  size  breakpoint  is  the  80th  percentile  by  country.
Information  ratios  are  equal  to  the  intercept  of  a  time-series  regression  of  monthly  excess  return  divided  by  the  standard
deviation of the  estimated  residuals.  T he  explanatory  variables  are  the  monthly  returns  of the market  (MKT ),  size  (SMB),
book-to-market (HML), and momentum (UMD) portfolios from Appendix A2. Returns are in USD, do not include currency
hedging,  and  excess  returns  are  over  the  U.S.  T reasury  bill  rate.  We  run  a  separate  regression  by  year.  Alphas  are
annualized.

Quality Minus Junk – Asness, Frazzini, and Pedersen – Appendix – Page A18

-15%-10%-5%0%5%10%15%20%25%30%195719581959196019611962196319641965196619671968196919701971197219731974197519761977197819791980198119821983198419851986198719881989199019911992199319941995199619971998199920002001200220032004200520062007200820092010201120122013201420152016Long Sample (U.S.)Broad Sample (Global)

Figure A3
QMJ: 4-Factor Adjusted Information Ratios by Size

This  figure  plots  4-factor  adjusted  information  ratios  of  Quality  minus  Junk  (QMJ)  factors.  For  U.S.  securities,  the  size
breakpoint  is  the  median  NYSE  market  equity.  For  other  markets  the  size  breakpoint  is  the  80th  percentile  by  country.
Information  ratios  are  equal  to  the  intercept  of  a  time-series  regression  of  monthly  excess  return  divided  by  the  standard
deviation of the  estimated  residuals.  T he  explanatory  variables  are  the  monthly  returns  of the market  (MKT ),  size  (SMB),
book-to-market (HML), and momentum (UMD) portfolios from Appendix A2. Returns are in USD, do not include currency
hedging,  and excess returns are over the U.S. T reasury bill rate. Information ratios are annualized.

Quality Minus Junk – Asness, Frazzini, and Pedersen – Appendix – Page A19

-0.40-0.200.000.200.400.600.801.001.201.40AustraliaAustriaBelgiumCanadaSwitzerlandGermanyDenmarkSpainFinlandFranceUnited KingdomGreeceHong KongIrelandIsraelItalyJapanNetherlandsNorwayNew ZealandPortugalSingaporeSwedenUnited StatesGlobalSmall CapLarge Cap

Figure A4
QMJ: 4-Factor Adjusted Information Ratios by Industry

This  figure  plots  4-factor  adjusted  information  ratios  of  Quality  minus  Junk  (QMJ)  factor  within  71  GICS  industries.
Information  ratios  are  equal  to  the  intercept  of  a  time-series  regression  of  monthly  excess  return  divided  by  the  standard
deviation of the  estimated  residuals.  T he  explanatory  variables  are  the  monthly  returns  of the market  (MKT ),  size  (SMB),
book-to-market (HML), and momentum (UMD) portfolios from Appendix A2. Returns are in USD, do not include currency
hedging,  and excess returns are over the U.S. T reasury bill rate. Information ratios are annualized.

Quality Minus Junk – Asness, Frazzini, and Pedersen – Appendix – Page A20

Panel A: Long Sample (U.S. , 1957 - 2016)Panel B: Broad Sample (Global , 1989 - 2016)-0.30-0.20-0.100.000.100.200.300.400.500.600.70Industry 1Industry 3Industry 5Industry 7Industry 9Industry 11Industry 13Industry 15Industry 17Industry 19Industry 21Industry 23Industry 25Industry 27Industry 29Industry 31Industry 33Industry 35Industry 37Industry 39Industry 41Industry 43Industry 45Industry 47Industry 49Industry 51Industry 53Industry 55Industry 57Industry 59Industry 61Industry 63Industry 65Industry 67Industry 69Industry 71-0.40-0.200.000.200.400.600.801.001.201.40Industry 1Industry 3Industry 5Industry 7Industry 9Industry 11Industry 13Industry 15Industry 17Industry 19Industry 21Industry 23Industry 25Industry 27Industry 29Industry 31Industry 33Industry 35Industry 37Industry 39Industry 41Industry 43Industry 45Industry 47Industry 49Industry 51Industry 53Industry 55Industry 57Industry 59Industry 61Industry 63Industry 65Industry 67Industry 69Industry 71

Figure A5
Cross Sectional Regressions Coefficient, the Price of Quality

This figure plots coefficients from monthly cross-sectional regressions. The dependent variable is the log of a
firm’s market to book ratio in in month t. The explanatory variables are the quality scores in month t. We plot
the time series of the cross sectional coefficients.

Quality Minus Junk – Asness, Frazzini, and Pedersen – Appendix – Page A21

0.0000.0500.1000.1500.2000.2500.3000.3500.4000.450195719591961196319651967196919711973197519771979198119831985198719891991199319951997199920012003200520072009201120132015Time Series of FMB Coefficients -Broad Sample (Global) QMJProfitabilitySafetyQMJ0.0000.0500.1000.1500.2000.2500.3001989199019911992199319941995199619971998199920002001200220032004200520062007200820092010201120122013201420152016Time Series of FMB Coefficients -Long Sample (United States)QMJProfitabilityGrowthSafety

Figure A6
Quality at a Reasonable Price (QARP)

This  figure  plots  monthly  returns  of  Quality  at  a  Reasonable  Price  (QARP) factors.  QARP  factors  are  constructed  as  the
𝑖 ) is
intersection  of  six  value-weighted  portfolios  formed  on  size  and  price  adjusted  quality 𝑛 𝑄𝑢𝑎𝑙𝑖𝑡𝑦𝑡
the z-score of a firm’s market to book and 𝑛 a constant. At the end of each calendar month, stocks are assigned to two size-
sorted  portfolios  based  on their  market  capitalization.  For  U.S.  securities, the  size  breakpoint  is the  median  N YSE  market
equity. For other markets the size breakpoint is the 80th percentile by country. We use conditional sorts, first sorting on size,
then  on  quality.  Portfolios  are  value-weighted,  refreshed  every  calendar  month,  and  rebalanced  every  calendar  month  to
maintain value  weights. T he  QARP factor  return  is the  average return  on  the two high  quality portfolios minus  the  average
return on the two low quality (junk) portfolios. We form one set of portfolios in each country and compute global portfolios
by  weighting  each  country’s  portfolio  by the  country’s  total  (lagged)  market  capitalization. The figure  reports  results  from
our  Long  Sample  of  domestic  stocks  and  from our  Broad  Sample  of  global  stocks. T he  long  sample  period  runs  from  July
1963 to  December  2016. T he  broad  sample  period  runs  from  June  1990 to  December  2016.  Returns  are  in  USD,  do  not
include  currency  hedging,  and  excess  returns  are  over  the  U.S.  T reasury  bill  rate. Alpha  is  the  intercept  in  a  time-series
regression  of  monthly  excess  return.  T he  explanatory  variables  are  t he  returns  of  the  market  (MKT )  portfolios  from
Appendix A2. T he figures plot the monthly alpha as function of 𝑛.

𝑖 )   where z(P 𝑡

𝑖 − z(P 𝑡

Quality Minus Junk – Asness, Frazzini, and Pedersen – Appendix – Page A22

0.300.350.400.450.500.550.600.6500.511.522.533.5Monthly ReturnPrice adjustment nCAPM Alpha Long Sample (Global)CAPM Alpha Long Sample (U.S.)

