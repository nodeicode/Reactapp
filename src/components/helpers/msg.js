const messaging = firebase.messaging();
messaging.usePublicVapidKey('BFIhXWWyGoz1rPRaKbpIs837xh3GLEfxf4XYYHpjuF-W0k51rQ6CJeHTF_FUAukZ0q0lIPjvAv3T_Wru-HQGXa8');

Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      // TODO(developer): Retrieve an Instance ID token for use with FCM.
      // ...
    } else {
      console.log('Unable to get permission to notify.');
    }
  });

  