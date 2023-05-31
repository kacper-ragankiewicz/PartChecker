

searchPhraze: string - what we are looking for

searchArray: 		obj[] 	- elementy które się wyświetlają po wyszukaniu
elementArray: 		obj[] 	- elementy wybrane po wyszukaniu

handleInputChange 	(e) 	- api for getting search from input
handleSubmit 		(e) 	- api to get submit action on form

elementGenerator 	</> 	- for displaying data from elementList
searchGenerator 	</> 	- for displaying data get from search

elementLlist: 		(obj) 	- genereting interface for all element in elementArray
searchListL 		(obj) 	- generating interface for all element in searchArray
addElement 		(obj)	- adding element from searchArray to elementArray
filterSearch		(obj)	- filtering search

call stack:

handleInput -> search -> handlesubmit(search) -> searchArray -> searchGenerator -> searchList -> addElement -> elementArray -> elementGenerator -> elementList -> filterSearch ->  removeElement

api endpoints:

/api/search

dataset:

[
  {
    id: 1,
    name: 'AMD RAZEN 5 5600',
    description: '',
    type: 2,
    standard: 10,
    price: '900.00'
  }
]
