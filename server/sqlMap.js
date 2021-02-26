// sql statements
var sqlMap = {
  items: {
      // add a type and corresponding num
      add: 'insert into items(type, num) values (?, ?)',
      // search a type of items
      select: 'select * from items where type like "%"?"%"'
  }
}

module.exports = sqlMap;