import './App.css';
import React, {useState, useEffect} from 'react'
import Ring from './components/Ring'

import seven from './img/Seven.png'
import bar from './img/Bar.png'
import horseshoe from './img/Horseshoe.png'
import diamond from './img/Diamond.png'
import gold from './img/Gold Bar.png'
import money from './img/Money.png'
import { AppBtn } from './telegram'
import { useHttp } from './hooks/http.hooks';


const App = () => {
    const { loading, request } = useHttp()
    const [spin, setSpin] = useState(false)
    const [ring1, setRing1] = useState(0)
    const [ring2, setRing2] = useState(0)
    const [ring3, setRing3] = useState(0)
    const [price, setPrice] = useState(0)
    const [input, setInput] = useState(100)
    const [realBet, setRealBet] = useState(0)
    const [jackpot, setJackpot] = useState(0)
    const [balance, setBalance] = useState(1000)
    const [lemma, setLemma] = useState('none')
    const [addBalance, setAddBalance] = useState(false)

    useEffect(() => {
        AppBtn(addBalance)
    }, [addBalance])

    useEffect(() => {
        win()
        // eslint-disable-next-line
    }, [ring3])

const registerHandler = async () => {
    const data = await request('/api/post', 'POST', 
        {
            "email": "user@example.com",
            "password": "helloworld"
        },
        {
            "Content-Type": "application/json"
        })
        console.log(data)
    try{
        
    }
    catch(e){}
}

//const rings = ['🍓', '🍇', '🍊', '🥭']
const rings = [
    {img: seven}, //5 0
    {img: bar}, //20 1
    {img: horseshoe}, //50 2
    {img: diamond}, //50 3
    {img: gold}, //50 4
    {img: money} //25 5
]

 const row1 = () => {

    if (!spin) {
    return (
        <>
        <Ring order={0} items = {rings} />
        </>
            )
    } else if (spin && ring1 === undefined) {
    return (
        <>
        <Ring  items = {rings} />
        </>
            )
    } else if (ring1 >= 1 && ring1 <= 20 ) {
    return (
        <>
        <Ring order={0} items = {rings} />
        </>
            ) 
    } else if (ring1 > 20 && ring1 <= 40) {
        return (
            <>
            <Ring order={1} items = {rings} />
            </>
                )  
    } else if (ring1 > 40 && ring1 <= 60) {
        return (
            <>
            <Ring order={2} items = {rings} />
            </>
                )  
    } else if (ring1 > 60 && ring1 <= 80) {
        return (
            <>
            <Ring order={3} items = {rings} />
            </>
                ) 
    } else if (ring1 > 80 && ring1 <= 95) {
        return (
            <>
            <Ring order={4} items = {rings} />
            </>
                ) 
    } else if (ring1 > 95 && ring1 <= 100) {
        return (
            <>
            <Ring order={5} items = {rings} />
            </>
                ) 
    } 
 }
 const row2 = () => {

    if (!spin) {
    return (
        <>
        <Ring order={0} items = {rings} />
        </>
            )
    } else if (spin && ring2 === undefined) {
    return (
        <>
        <Ring  items = {rings} />
        </>
            )
    } else if (ring2 >= 1 && ring2 <= 20 ) {
    return (
        <>
        <Ring order={0} items = {rings} />
        </>
            ) 
    } else if (ring2 > 20 && ring2 <= 40) {
        return (
            <>
            <Ring order={1} items = {rings} />
            </>
                )  
    } else if (ring2 > 40 && ring2 <= 60) {
        return (
            <>
            <Ring order={2} items = {rings} />
            </>
                )  
    } else if (ring2 > 60 && ring2 <= 80) {
        return (
            <>
            <Ring order={3} items = {rings} />
            </>
                ) 
    } else if (ring2 > 80 && ring2 <= 95) {
        return (
            <>
            <Ring order={4} items = {rings} />
            </>
                ) 
    } else if (ring2 > 95 && ring2 <= 100) {
        return (
            <>
            <Ring order={5} items = {rings} />
            </>
                ) 
    } 
 }
 const row3 = () => {

    if (!spin) {
    return (
        <>
        <Ring order={0} items = {rings} />
        </>
            )
    } else if (spin && ring3 === undefined) {
    return (
        <>
        <Ring  items = {rings} />
        </>
            )
    } else if (ring3 >= 1 && ring3 <= 20 ) {
    return (
        <>
        <Ring order={0} items = {rings} />
        </>
            ) 
    } else if (ring3 > 20 && ring3 <= 40) {
        return (
            <>
            <Ring order={1} items = {rings} />
            </>
                )  
    } else if (ring3 > 40 && ring3 <= 60) {
        return (
            <>
            <Ring order={2} items = {rings} />
            </>
                )  
    } else if (ring3 > 60 && ring3 <= 80) {
        return (
            <>
            <Ring order={3} items = {rings} />
            </>
                ) 
    } else if (ring3 > 80 && ring3 <= 95) {
        return (
            <>
            <Ring order={4} items = {rings} />
            </>
                ) 
    } else if (ring3 > 95 && ring3 <= 100) {
        return (
            <>
            <Ring order={5} items = {rings} />
            </>
                ) 
    } 
 }

const rand = () => {
      setRing1(Math.floor(Math.random() * (100 - 1) + 1))
      setTimeout(() =>{ setRing2( Math.floor(Math.random() * (100 - 1) + 1)) }, 1000)
      setTimeout(() =>{ setRing3(Math.floor(Math.random() * (100 - 1) + 1)) }, 2000)
    }

    const play = () => {
        if (ring3 >= 1 || !spin){
        if (input <= balance && input >= 1){
        setRealBet(input)
        setSpin(true)
        setRing1()
        setRing2()
        setRing3()
        setBalance(balance - input)
        setJackpot(jackpot + (input / 2))
        setTimeout(() =>{
    rand()
        }, 2000)
        } else {
            setPrice(100)
        }
    }
}

const win = () => {
    //console.log('ring1: '+ring1)
    //console.log('ring2: '+ring2)
    //console.log('ring3: '+ring3)

    let ifRing = ring1 !== undefined
    if (ifRing && ring1 >= 1 && ring1 <= 20 && ring2 >= 1 && ring2 <= 20 && ring3 >= 1 && ring3 <= 20) {
        setPrice(1)
        setBalance(balance + input * 3)
    } else if (ifRing && ring1 > 20 && ring1 <= 40 && ring2 > 20 && ring2 <= 40 && ring3 > 20 && ring3 <= 40) {
        setPrice(2)
        setBalance(balance + input * 5)
    } else if (ifRing && ring1 > 40 && ring1 <= 60 && ring2 > 40 && ring2 <= 60 && ring3 > 40 && ring3 <= 60) {
        setPrice(3)
        setBalance(balance + input * 10)
    } else if (ifRing && ring1 > 60 && ring1 <= 80 && ring2 > 60 && ring2 <= 80 && ring3 > 60 && ring3 <= 80) {
        setPrice(4)
        setBalance(balance + input * 10)
    } else if (ifRing && ring1 > 80 && ring1 <= 95 && ring2 > 80 && ring2 <= 95 && ring3 > 80 && ring3 <= 95) {
        setPrice(5)
        setBalance(balance + input * 3)
    } else if (ifRing && ring1 > 95 && ring1 <= 100 && ring2 > 95 && ring2 <= 100 && ring3 > 95 && ring3 <= 100) {
        setPrice(6)
        setBalance(balance + jackpot)
        setJackpot(0)
        /* // 2 из 3 
    } else if (ifRing && ((ring1 >= 1 && ring1 <= 20 && ring2 >= 1 && ring2 <= 20) || 
                         //(ring1 >= 1 && ring1 <= 20 && ring3 >= 1 && ring3 <= 20) ||
                         (ring2 >= 1 && ring2 <= 20 && ring3 >= 1 && ring3 <= 20))) {
        setPrice(7)
        setBalance(balance + input * 2)*/
    } else if (ifRing && ((ring1 > 20 && ring1 <= 40 && ring2 > 20 && ring2 <= 40) || 
                         //(ring1 > 20 && ring1 <= 40 && ring3 > 20 && ring3 <= 40) ||
                         (ring2 > 20 && ring2 <= 40 && ring3 > 20 && ring3 <= 40))) {
        setPrice(8)
        setBalance(balance + input * 3)
    } else if (ifRing && ((ring1 > 40 && ring1 <= 60 && ring2 > 40 && ring2 <= 60) || 
                         //(ring1 > 40 && ring1 <= 60 && ring3 > 40 && ring3 <= 60) ||
                         (ring2 > 40 && ring2 <= 60 && ring3 > 40 && ring3 <= 60))) {
        setPrice(9)
        setBalance(balance + input * 3)
    } else if (ifRing && ((ring1 > 60 && ring1 <= 80 && ring2 > 60 && ring2 <= 80) || 
                         //(ring1 > 60 && ring1 <= 80 && ring3 > 60 && ring3 <= 80) ||
                         (ring2 > 60 && ring2 <= 80 && ring3 > 60 && ring3 <= 80))) {
        setPrice(10)
        setBalance(balance + input * 2)/*
    } else if (ifRing && ((ring1 > 80 && ring1 <= 95 && ring2 > 80 && ring2 <= 95) || 
                         //(ring1 > 80 && ring1 <= 95 && ring3 > 80 && ring3 <= 95) ||
                         (ring2 > 80 && ring2 <= 95 && ring3 > 80 && ring3 <= 95))) {
        setPrice(11)
        setBalance(balance + input * 2)*/
    } else if (ifRing && ((ring1 > 95 && ring1 <= 100 && ring2 > 95 && ring2 <= 100) || 
                         //(ring1 > 95 && ring1 <= 100 && ring3 > 95 && ring3 <= 100) ||
                         (ring2 > 95 && ring2 <= 100 && ring3 > 95 && ring3 <= 100))) {
        setPrice(12)
        setBalance(balance + input * 7)
       /* // BAR
    } else if (ifRing && ((ring1 >= 1 && ring1 <= 20) || (ring2 >= 1 && ring2 <= 20) || (ring3 >= 1 && ring3 <= 20))) {
        setPrice(13)
        setBalance(balance + input * 1) */
    } else {
        setPrice(0)
        ring3>=1&&balance<=900?setAddBalance(true):setAddBalance(false)
    } 
}

const premio = () => {
    if (price === 1 && ring3 >= 1) {
        return (
        <p className="priceInd"><img src={bar} alt="" /><img src={bar} alt="" /><img src={bar} alt="" />{"X3 Вы выиграли " + (realBet * 3) + "₽!"}</p>
        )
    } else if (price === 2 && ring3 >= 1) {
        return (
            <p className="priceInd"><img src={horseshoe} alt="" /><img src={horseshoe} alt="" /><img src={horseshoe} alt="" />{"X5 Вы выиграли " + (realBet * 5) + "₽!"}</p>
            )
    } else if (price === 3 && ring3 >= 1) {
        return (
            <p className="priceInd"><img src={diamond} alt="" /><img src={diamond} alt="" /><img src={diamond} alt="" />{"X10 Вы выиграли " + (realBet * 10) + "₽!"}</p>
            )
    } else if (price === 4 && ring3 >= 1) {
        return (
            <p className="priceInd"><img src={gold} alt="" /><img src={gold} alt="" /><img src={gold} alt="" />{"X10 Вы выиграли " + (realBet * 10) + "₽!"}</p>
            )
    } else if (price === 5 && ring3 >= 1) {
        return (
            <p className="priceInd"><img src={money} alt="" /><img src={money} alt="" /><img src={money} alt="" />{"X3 Вы выиграли " + (realBet * 3) + "₽!"}</p>
            )
    } else if (price === 6 && ring3 >= 1) {
        return (
            <p className="priceInd"><img src={seven} alt="" /><img src={seven} alt="" /><img src={seven} alt="" />{"Джекпот! Вы выиграли: " + (jackpot) + "₽!"}</p>
            )/*
            //2 из 3
    } else if (price === 7 && ring3 >= 1) {
        return (
            <p className="priceInd"><img src={bar} alt="" /><img src={bar} alt="" />{"X2 Вы выиграли! " + (realBet * 2) + "₽!"}</p>
            )*/
    } else if (price === 8 && ring3 >= 1) {
        return (
            <p className="priceInd"><img src={horseshoe} alt="" /><img src={horseshoe} alt="" />{"X3 Вы выиграли! " + (realBet * 3) + "₽!"}</p>
            )
    } else if (price === 9 && ring3 >= 1) {
        return (
            <p className="priceInd"><img src={diamond} alt="" /><img src={diamond} alt="" />{"X3 Вы выиграли! " + (realBet * 3) + "₽!"}</p>
            )
    } else if (price === 10 && ring3 >= 1) {
        return (
            <p className="priceInd"><img src={gold} alt="" /><img src={gold} alt="" />{"X2 Вы выиграли! " + (realBet * 2) + "₽!"}</p>
            )/*
    } else if (price === 11 && ring3 >= 1) {
        return (
            <p className="priceInd"><img src={money} alt="" /><img src={money} alt="" />{"X2 Вы выиграли! " + (realBet * 2) + "₽!"}</p>
            )*/
    } else if (price === 12 && ring3 >= 1) {
        return (
            <p className="priceInd"><img src={seven} alt="" /><img src={seven} alt="" />{"X7 Вы выиграли! " + (realBet * 7) + "₽!"}</p>
            )
        /*   //BAR
    } else if (price === 13 && ring3 >= 1) {
        return (
            <p className="priceInd"><img src={bar} alt="" />{"Вы выиграли! " + (realBet * 1) + "₽!"}</p>
            ) */
    } else if (price === 0 && ring3 >= 1) {      
        return (
            <p className="priceInd">😧 Не повезло...</p>
            )
    } else if (price === 100) {
        return (
            <p className="priceInd">🥶 <span style={{color: `red`}}>Не достаточно средств</span> </p>
            )
    }
}

const numChecker = (e) => {
    const value = e.target.value;
    const regex = /^[0-9]+$/;
    if ((value.match(regex) && parseInt(value) >= 0) || value === "") {
        setInput(value);
    }
}


const plusMinus = (e) => {

    let inp = input >= 0 ? Number(input)+ e : 0 + e

    if (inp <= 0){
        return setInput('')
    }
    return setInput(inp)
}

    return (
        <div className="fullSlot">
        <h1 className="casinoName">Telega Spin</h1>
        <div className='lemma' style={{display: lemma}}>
            <h3>Выигрышные комбинации</h3>
                <div className='close' onClick={()=>{setLemma('none')}}></div>
                <ul>
                    <li>
                        <img src={horseshoe} alt="" />
                        <img src={horseshoe} alt="" />
                        <span>X3</span>
                    </li>
                    <li>
                        <img src={diamond} alt="" />
                        <img src={diamond} alt="" />
                        <span>X3</span>
                    </li>
                    <li>
                        <img src={gold} alt="" />
                        <img src={gold} alt="" />
                        <span>X2</span>
                    </li>
                    <li>
                        <img src={seven} alt="" />
                        <img src={seven} alt="" />
                        <span>X7</span>
                    </li>
                    <li>
                        <img src={bar} alt="" />
                        <img src={bar} alt="" />
                        <img src={bar} alt="" />
                        <span>X3</span>
                    </li>
                    <li>
                        <img src={horseshoe} alt="" />
                        <img src={horseshoe} alt="" />
                        <img src={horseshoe} alt="" />
                        <span>X5</span>
                    </li>
                    <li>
                        <img src={diamond} alt="" />
                        <img src={diamond} alt="" />
                        <img src={diamond} alt="" />
                        <span>X10</span>
                    </li>
                    <li>
                        <img src={gold} alt="" />
                        <img src={gold} alt="" />
                        <img src={gold} alt="" />
                        <span>X10</span>
                    </li>
                    <li>
                        <img src={money} alt="" />
                        <img src={money} alt="" />
                        <img src={money} alt="" />
                        <span>X3</span>
                    </li>
                    <li>
                        <img src={seven} alt="" />
                        <img src={seven} alt="" />
                        <img src={seven} alt="" />
                        <span>Джекпот</span>
                    </li>
                </ul>
            </div>
        <div className="price">
            {"Джекпот: " + jackpot + "₽"}
        </div>
        <div className="slot">
        <div className="row">
        {row1()}
        </div>
        <div className="row">
        {row2()}
        </div>
        <div className="row">
        {row3()}
        </div>
        </div>
        <div className="price">
        {premio()}
        <div className='info' onClick={()=>{setLemma('block')}}>❓</div>
        </div>
        <div className="slotFoot">
        <div className="inputWrap">
            <span className="minus" onClick={()=>plusMinus(-50)}>-</span>
            <input value={input} type="number" className="betInput" onChange={(e) => numChecker(e)} placeholder="0₽"></input>
            <span className="plus" onClick={()=>plusMinus(+50)}>+</span>
        </div>
        <button className="spinButton" onClick={() => play()}>SPIN</button>
        </div>
        <h1 className="price">{"Баланс: " + Math.round((balance * 100)) / 100 + "₽"}</h1>
        {/*<button onClick={() => setBalance(balance + 1000)} className="buyMoreButton">Добавить 1000 ₽</button>*/}
        <button onClick={registerHandler} disabled={loading} className="buyMoreButton">test</button>
        
        </div>
        
    )
}

export default App;