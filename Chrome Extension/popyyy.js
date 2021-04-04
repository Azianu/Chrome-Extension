var quotes = ['For life is not a paragraph and death I think is no paranthesis',
'Brave is going where no man has gone before',
'In order to write about life first you must live it',
'The unexamined life is not worth living',
'Life is not a problem to be solved, but a reality to be experienced',
'Live for each second without hesitation',
'Life is really simple, but men insist on making it complicated',
'In three words I can sum up everything I have learned about life: It goes on',
'Life is what we make it, always has been, always will be',
'Life is about making an impact, not making an income',
'Life shrinks or expands in proportion to ones courage',
'Too many of us are not living our dreams because we are living our fears',
'It is our choices that show what we truly are, far more than our abilities',
'There are no mistakes, only opportunities',
'Never take life seriously. Nobody gets out alive anyway',
'It is never too late, never too late to start over, never too late to be happy',
'The minute that you are not learning I believe you are dead',
'When we strive to become better than we are, everything around us becomes better too',
'In the long run, the sharpest weapon of all is a kind and gentle spirit',
'As you know, life is an echo; we get what we give'
]
document.getElementById("newQuote").addEventListener("click", quoteDisplay);


function quoteDisplay()
{
	var i = Math.floor(Math.random()*(quotes.length));
    document.getElementById('quoteDis').innerHTML=quotes[i];
}
