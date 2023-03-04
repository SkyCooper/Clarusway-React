// jsx ortamında bootstrap'ten form kullanıldığı zaman html-to-jsx benzeri sitelerden dönüştürmek gerekir.
//* https://getbootstrap.com/docs/5.3/forms/overview/#overview
//* https://magic.reactjs.net/htmltojsx.htm
// değişen bölümden return içini kopyalayıp kullanabiliriz.

// htmlFor isimleri gereksiz uzun kendimize göre düzenleyebiliriz. o zaman id'de değişir.
<label htmlFor="username"></label>
// input içinden aria-describedby gereksiz, silinebilir.
<input type="text" id="username" value={username}/>

// form'a onSubmit tanımla
<form onSubmit={handleSubmit}></form>

// onSubmit'in default davranışı form içindekileri valueleri gönder/sil, sonra refresh et.
// bunu önlemek için  e.preventDefault() yani verileri silme ve refresh yapma sayfayı
  const handleSubmit = (e) => {
    e.preventDefault();
    }

// inputlara value probu ekle, içindeki değerleri okumak için ve dışarıdan prob olarak gelen değerlerin tutulması için
// value probu eklenirse o zaman onChange event kullanmak gerekli, böylece her değişikliği takip eder.

<label htmlFor="username" className="form-label">
    Username: <span className="text-danger">{username}</span>
</label>
<input
    type="text"
    className="form-control"
    id="username"
    value={username}
    onChange={handleUsername}
/>

// eğer pereventDefault kullandıysak, formu temizlemek için state'ler sıfırlanmalı
  const handleSubmit = (e) => {
    e.preventDefault();

    //? formu temizlemek için;
    setUsername("")
    setEmail("")
    setPassword("")
  };











