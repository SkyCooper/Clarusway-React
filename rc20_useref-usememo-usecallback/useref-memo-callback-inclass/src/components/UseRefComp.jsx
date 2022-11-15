import React,{useEffect, useRef, useState} from 'react'

const UseRefComp = () => {
    const divRef = useRef()
    const inputRef = useRef()
    const [headerText,setHeaderText] = useState("useRef")

    const handleRef = ()=>{
        console.log(divRef.current)
        console.log(divRef.current.firstElementChild.innerText)
        console.log(divRef.current.lastElementChild.innerText)
        console.log(inputRef.current)
        console.log(inputRef.current.value)
        setHeaderText(inputRef.current.value)
        inputRef.current.value = ""
    }

    useEffect(() => {
      inputRef.current.focus()
    }, [])
    

    return (
        <div>
            <h5>{headerText}</h5>
            <div ref={divRef} >
                <p>First element child</p>
                <input type="text" ref={inputRef} />
                <p>Last element child</p>
            </div>
            <button onClick={handleRef}>useRef Click</button>
        </div>
    )
}

export default UseRefComp

// Bir değişken değiştiğinde useState component’in tekrar render olmasını tetikler useRef component’in tekrar render olmasını tetiklemez.

// useRef hook’u ile;

// DOM node’larına veya React elementlerine erişebiliriz.
// Mutable değişkenler tutabiliriz.
// Vanilla Javascript ile yazılmış kütüphaneleri React’a uyarlarken faydalanabiliriz.
// useRef hook’u kullanırken bunları dikkat etmeliyiz;
// useRef ile oluşturulan bir ref sadece component oluştuğunda (onMount) oluşturulur ve tüm lifecycle’ı boyunca korunur.
//Bir ref’i güncellemek “side effect” oluşturacağı için sadece useEffect, useLayoutEffect veya bir event handler içerisinde güncellenmelidir.

