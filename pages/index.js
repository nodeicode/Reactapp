import React from 'react';
import Formp from '../src/components/Form/Form';
import '../static/index.css'
//import dynamic from 'next/dynamic'
//const {serviceWorker} = dynamic(()=> import('../src/serviceWorker'),{ssr:false})

function root() {
    return (<Formp/>)};


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
export default root;