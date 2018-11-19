curl http://tic-tac-toe.wdibos.com \
  --include \
  --request PATCH \
  --headers "Authorization: Token token=${TOKEN}" \
  --headers "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLD_PASSWORD}"'",
      "new": "'"${NEW_PASSWORD}"'"
    }
  }'

echo
