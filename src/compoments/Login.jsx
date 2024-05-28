import "../App.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../compoments/SupaBase";

export default function Login() {
    const [errorCode, setErrorCode] = useState(0);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formObj = Object.fromEntries(formData);
        
        let { data, error } = await supabase.auth.signInWithPassword(formObj);

        if(error) {
            // console.table(error);
            setErrorCode(error.status);
            return;
        }

        navigate('/');
    }

    return (
        <>
            <h1>Giriş Yap</h1>
            {errorCode > 0 && <p style={{color: 'red'}}>Hata: Lütfen bilgilerinizi kontrol ederek tekrar deneyin!</p>}
            <form onSubmit={handleSubmit} autoComplete="off">
                <input required type="email" placeholder="E-Posta Adresi" name="email" /><br />
                <input required type="password" placeholder="Şifre" name="password" /><br />
                <button>Giriş Yap</button>
            </form>
            <p>Henüz kayıt olmadıysanız, <Link to="/kayit-ol">kayıt ol</Link>un.</p>
        </>
    )
}