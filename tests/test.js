const data = require( "../functions/data" );

var weeks = {};
for ( element in  data.data.data ) {
  const data_piece =  data.data.data[element];
  const week = data_piece[0].des;
  const cod = data_piece[1].cod[0];
  if ( !( week in weeks ) ) {
    weeks[week] = {};
  }
  weeks[week][cod] = data_piece[3].val? Math.round(parseFloat(data_piece[3].val)) : 0;

}

console.log( weeks )