curl "http://tic-tac-toe.wdibos.com" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
