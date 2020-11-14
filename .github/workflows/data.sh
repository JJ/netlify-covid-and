#!/bin/bash

cat .github/workflows/header.js | tr '\n' ' ' > "functions/data.js"
wget https://www.juntadeandalucia.es/institutodeestadisticaycartografia/intranet/admin/rest/v1.0/consulta/38842 -O /tmp/temp.json --no-check-certificate
cat /tmp/temp.json >> functions/data.js
echo ";" >> functions/data.js
git config --global user.email "jjmerelo@gmail.com"
git config --global user.name "IV-COVID-AND-Bot"
cat functions/data.js
git add functions/data.js
git commit -m "Generado fichero con datos"
