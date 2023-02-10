import { useParams ,Link } from 'react-router-dom';
import axios from 'axios';
import parse from 'html-react-parser';

import React, { useState, useEffect } from 'react';
import Echo from 'laravel-echo'



function Player(){
  window.pusher = require('pusher-js');
window.Echo = new Echo({
  broadcaster: 'pusher',
  key: 'laravelWebSocketKey',
  wsHost: '127.0.0.1',
  wsPort: 6001,
  cluster: 'mt1',
  // transports: ['pusher'],
  enabledTransports: ['ws'],
  forceTLS: false,
  encrypted: true,
  disableStats: false
})
window.Echo.channel('trades').listen('NewTrade', (e) =>{
    console.log(e);
})



  return (
    <div>
      <p>sa</p>
    </div>
  );
}
export default Player;