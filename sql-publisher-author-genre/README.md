## SQL
Using [WWW SQL Designer](http://ondras.zarovi.cz/sql/demo/) or [DB designer](http://dbdsgnr.appspot.com/), draw the schema for the following data
* Create the following 3 tables (and any additional [junction tables](https://en.wikipedia.org/wiki/Junction_table) you might need) with the specified relationships:
  * [ ] publisher, has many authors, has one genre
  * [ ] author, has many publishers, has many genres
  * [ ] genre, has many publishers, has many authors
  * Be sure to include any foreign keys you will need, as columns of the tables you design
  * Export as an image and save to the `sql-publisher-author-genre` folder. To take a screen shot on a Mac, use the shortcut `Cmd+Shift+4` then drag a box around your desired image. The image will be saved to the desktop.
* [ ] Write an `INSERT` query that stores a new user record with a name, age, and location


sql designer 안해봐서 키, forignekey 생성 모르겠어서 
선 연결만 중점을 두고함 
다대다일때는 키로만 이루어진 테이블을 만들어 준다는 정도 이해했음.