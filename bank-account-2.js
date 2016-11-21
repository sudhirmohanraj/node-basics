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
	accounts.forEach(function findAccount (account) {
		// body...
		if(account.userName===userName){
			matchedAccount = account;
		}
	})
	return matchedAccount;
}

console.log(getAccount('Cat'));

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
var existingAccount = getAccount('Cat');
console.log(existingAccount.balance);