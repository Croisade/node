function printFavoriteBooks() {
	  let bookCounter = favoriteBooks.length
	  console.log("Favorite books tallied " + bookCounter)
	  while (favoriteBooks.length > 0) {
		      let getValue = favoriteBooks.pop()
		      console.log(getValue)
		    }
}


function addFavoriteBook( bookName ) {
	  if( !bookName.includes('Great' )) {
		      favoriteBooks.push(bookName)
		      
		    }
}

let favoriteBooks = []

addFavoriteBook('Goosebumps')
addFavoriteBook('The Life of Times of Juniper Lee')
addFavoriteBook('Diary Of a Wimpy Kid')

printFavoriteBooks()
