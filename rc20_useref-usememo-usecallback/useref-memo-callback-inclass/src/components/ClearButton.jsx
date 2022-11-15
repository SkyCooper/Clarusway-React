import React,{memo} from 'react'

//! react memo kullanmanın 2 yöntemi var,

//! 2ncisi async yazdığımız gibi fonksiyon başına memo yazıp bütün fonksiyonu içine almak;
const ClearButton = memo(({handleClear}) => {
    console.log("Render => ClearButton componenti")
    return (
        <div>
            <button className='btn btn-warning' onClick={handleClear} >ClearButton</button>
        </div>
    )
})

//! 1ncisi export edilen yerde fonksiyonu memo içine koymak --> memo(ClerarButton)
export default ClearButton