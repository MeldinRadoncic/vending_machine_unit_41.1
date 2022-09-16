import React from "react";
import {BrowserRouter,Route} from 'react-router-dom'
import Coin from "./Coin";
import './VendingMachine.css'
import Navbar from './Navbar'



const VendingMachine = () => {

    return (

        
        
        <div className="VendingMachine">
            <>


            <BrowserRouter>
            <Navbar/>
                <Route exact path={"/"}>
                    <div className="VendingMachine-title">
                    <h1>Crypto Vending Machine</h1>
                    <h3>Choose your Coin!</h3>
                    </div>
                <Coin name='BTC' img={'https://i.pinimg.com/564x/c8/05/83/c80583d4410bcd1bd6cce620087b40e0.jpg'}/>
                <Coin name='ETH' img={'https://i.pinimg.com/564x/5e/cd/2f/5ecd2f2d1952809dfd25df0c0331acf9.jpg'}/>
                <Coin name='HOLO' img={'https://i.pinimg.com/564x/0d/de/18/0dde1872b34abfc3c800bbe69c227f64.jpg'}/>

                </Route>

            <Route exact path={"/btc"}>
            
            <Coin title={'BITCOIN'} img={'https://i.pinimg.com/564x/c8/05/83/c80583d4410bcd1bd6cce620087b40e0.jpg'}/>

            </Route>

            <Route exact path={"/eth"}>
            <Coin title={'ETHEREUM'}  img={'https://i.pinimg.com/564x/5e/cd/2f/5ecd2f2d1952809dfd25df0c0331acf9.jpg'}/>
            </Route>

            <Route exact path={"/holo"}>
            <Coin title={'HOLOCHAIN'} img={'https://i.pinimg.com/564x/0d/de/18/0dde1872b34abfc3c800bbe69c227f64.jpg'}/>
            </Route>
            </BrowserRouter>
            
            </>
        </div>

       
    )

}


export default VendingMachine;