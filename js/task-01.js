let len = document.querySelector('ul').children.length;
console.log('Number of categories:',len)
console.log('')

for (let i = 0; i<document.querySelector('ul').children.length; i+=1)
{
console.log('Category: ',document.querySelectorAll('.item')[i].querySelector('h2').textContent)
console.log('Elements: ',document.querySelectorAll('.item')[i].querySelector('ul').children.length)
console.log('')
}
