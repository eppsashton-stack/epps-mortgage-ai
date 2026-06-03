const money = new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0});
function calculate(){
  const price=+document.getElementById('price').value||0, down=+document.getElementById('down').value||0;
  const annualRate=(+document.getElementById('rate').value||0)/100, term=(+document.getElementById('term').value||30)*12;
  const taxes=(+document.getElementById('taxes').value||0)/12, ins=(+document.getElementById('ins').value||0)/12, hoa=+document.getElementById('hoa').value||0;
  const loan=Math.max(price-down,0), r=annualRate/12;
  const pi = r ? loan*(r*Math.pow(1+r,term))/(Math.pow(1+r,term)-1) : loan/term;
  document.getElementById('payment').textContent=money.format(pi+taxes+ins+hoa);
  document.getElementById('loanAmount').textContent=`Estimated loan amount: ${money.format(loan)}`;
}
document.getElementById('calcBtn').addEventListener('click',calculate); calculate();
const answers=[
  {keys:['irrrl','streamline'],text:'A VA IRRRL is a VA Interest Rate Reduction Refinance Loan. It is usually meant to lower your rate/payment or move from an ARM to fixed, with less documentation than a full refinance.'},
  {keys:['down payment','downpayment'],text:'Down payment depends on the loan type. VA loans can be 0% down for eligible borrowers, FHA is often 3.5%, and conventional can be as low as 3% for some buyers.'},
  {keys:['credit','score'],text:'Credit score affects pricing, approval options, mortgage insurance, and sometimes how much documentation is needed. Higher scores usually unlock better terms.'},
  {keys:['rate','interest'],text:'Your rate is affected by credit, loan type, down payment/equity, points, occupancy, property type, market movement, and lender pricing.'},
  {keys:['refinance','refi'],text:'A refinance can make sense if the savings, debt strategy, cash-out need, or loan-term improvement outweighs closing costs. The breakeven point matters.'},
  {keys:['va loan','veteran'],text:'VA loans are for eligible veterans, active-duty service members, and certain surviving spouses. Benefits may include 0% down, no monthly PMI, and flexible refinance options.'}
];
document.getElementById('askBtn').addEventListener('click',()=>{
  const q=document.getElementById('question').value.toLowerCase();
  const hit=answers.find(a=>a.keys.some(k=>q.includes(k)));
  document.getElementById('answer').textContent = hit ? hit.text : 'Good question. For the most accurate answer, send your exact scenario through the contact form with your state, purchase/refi goal, credit range, price, and timeline.';
});
