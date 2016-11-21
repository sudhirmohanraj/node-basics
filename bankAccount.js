var account  = {
	// body...
	balance:0
};

//
function deposit(account, amount){
	console.log(account);
	account.balance = account.balance + amount;
}
/*
*/
function withdaw (account,amount) {
	// body...
	console.log(account);
	account.balance = account.balance - amount;
}

function getBalance (account) {
	console.log(account);
	console.log(account.balance);
	console.log(typeof(account));
	// body...
}

deposit(account,100);
withdaw(account,50);
getBalance(account);