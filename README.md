CODING ADVENTURE

1. ¿Cuándo tengo que usar useCallback()?

Tengo que usar useCallback() cuando quiero memoizar una función.
Tengo que memoizar una función cuando quiero que ésta pueda ser usada en un hook sin que se ejecute cada vez que haya una renderización.
Por ejemplo, devolver memoizadas las funciones declaradas dentro de un custom hook para para que puedan ser usadas dentro de otro hook, como useEffect(), sin que sean llamadas cada vez que haya una renderización.
