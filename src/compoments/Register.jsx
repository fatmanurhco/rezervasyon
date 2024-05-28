import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../compoments/SupaBase";

export default function Register() {
    const [errorCode, setErrorCode] = useState(0);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formObj = Object.fromEntries(formData);

        let { data, error } = await supabase.auth.signUp(formObj);
        
        if(error) {
            // console.table(error)
            setErrorCode(error.status);
            return;
        }
        
        const { data: profile } = await supabase
            .from('profiles')
            .insert([{ name: formObj.name }])
            .select()

        // redirect to feed
        navigate('/');
    }

    return (
        <>
            <h1>Kayıt Ol</h1>
            {errorCode > 0 && <p>Kayıt olurken hata oluştu. Lütfen kontrol ederek tekrar deneyin.</p>}
            {errorCode === 400 && <p>Hata: Bu kullanıcı kayıtlı. Giriş yapmak için <Link to="/giris-yap">tıklayın</Link>ız.</p>}
            {errorCode === 422 && <p style={{color: 'red'}}>Hata: Şifreniz minimum 6 karakter olmalıdır.</p>}
            <form onSubmit={handleSubmit} autoComplete="off">
                <input required type="text" placeholder="Ad Soyad" name="name" /><br />
                <input required type="email" placeholder="E-Posta Adresi" name="email" /><br />
                <input required type="password" placeholder="Şifre" name="password" /><br />
                <button>Kayıt Ol</button>
            </form>
            <p>Daha önce kayıt olduysanız, <Link to="/giris-yap">giriş yap</Link>ın.</p>
        </>

    )
}