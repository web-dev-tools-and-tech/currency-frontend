## Questions:

1. We talked about adding `user-service` network request to the frontend
	* we already have a function for that: `this.fetchRatesForSymbols()`, but I'm not really sure how it works

	`export default (window.useCurrencyBackend ? fetchRatesFromCurrencyBackend : fetchRatesFromFixer)`

	What is window.useCurrencyBackend? where does it come from ? How do I make it true :) ?
