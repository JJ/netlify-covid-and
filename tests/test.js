const data = require( "../functions/data" );

var weeks = {};
for ( element in  data.data.data ) {
  const data_piece =  data.data.data[element];
  console.log( data_piece );
  const week = data_piece[0].des;
  const cod = data_piece[1].cod[0];
  if ( !( week in weeks ) ) {
    weeks[week] = {};
  }
  weeks[week][cod] = data_piece[2].val? Math.round(parseFloat(data_piece[2].val)) : 0;
  if ( "total" in weeks[week] ) {
    weeks[week]['total'] +=  weeks[week][cod];
  } else {
    weeks[week]['total'] =  weeks[week][cod];
  }
}

console.log( weeks )