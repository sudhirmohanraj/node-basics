var accounts =[];
var account  = {
	// body...
	balance:10,
	userName:'Parrot'
};
var account1  = {
	// body...
	balance:100,
	userName:'Cat'
};
function createAccount(account){
	accounts.push(account);
	return accounts;
}
createAccount(account);
createAccount(account1);

function getAccount (userName) {
	// body...
	var matchedAccount;
	for (var i = accounts.length - 1; i >= 0; i--) {
		if(accounts[i].userName===userName){
			matchedAccount = account;
		}
	}
	return matchedAccount;
}

console.log(getAccount('Cat'));

function deposit(amount){
	//console.log(account);
	if(typeof(amount)==='number'){
	account.balance = account.balance + amount;
	}
}
/*
*/
function withdaw (amount) {
	// body...
	//console.log(account);
	if(typeof(amount)==='number'){
	account.balance = account.balance - amount;
	}
}

function getBalance (account) {
	//console.log(account);
	//console.log(account.balance);
	//console.log(typeof(account));
	// body...
}

function createBalanceGetter(account){
	return function () {
		// body...
		return account.balance;
	}
}

 deposit(100);
 withdaw(50);
 var existingAccount = getAccount('Cat');
 console.log(existingAccount.balance);
 console.log(createBalanceGetter(account));