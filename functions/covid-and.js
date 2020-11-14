const data = require("./data" )

exports.handler = async event => {

  var weeks = {};
  for ( element in  data.data.data ) {
    const data_piece =  data.data.data[element];
    const week = data_piece[0].des;
    const cod = data_piece[1].cod[0];
    if ( !( week in weeks ) ) {
      weeks[week] = {};
    }
    weeks[week][cod] = data_piece[3].val? Math.round(parseFloat(data_piece[3].val)) : 0;
    if ( "total" in weeks[week] ) {
      weeks[week]['total'] +=  weeks[week][cod];
    } else {
      weeks[week]['total'] =  weeks[week][cod];
    }
  }

  const when = event.queryStringParameters.when || 'last';
  var result = 0;
  var week_keys = Object.keys(weeks);
  if ( when === "last" ) {
    result = weeks[ week_keys[ week_keys.length -1 ] ].total;
  } else if ( when in weeks ) {
    result = weeks[ when ].total;
  }

  return {
    statusCode: 200,
    body: result,
  }

}