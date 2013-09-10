exports.menu = {
  "contents":[
    { "type": "paragraph", "text": "Welcome to the Ninja RAM Monitor"},
    { "type": "paragraph", "text": "You can choose how often you want the RAM usage to be updated (in seconds). \n\rThe default refresh interval is 5 seconds."},
    { "type": "input_field_text", "field_name": "poll_interval", "value": "5", "label": "Update Interval", "required": true},
    { "type": "submit", "name": "Save", "rpc_method": "echo" },
  ]
};

exports.echo = {
  "contents":[
    { "type": "paragraph", "text": "Settings saved!"}
  ]
};
