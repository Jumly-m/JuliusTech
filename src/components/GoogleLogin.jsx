import { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Auth = () => {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(false);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setUser(codeResponse);
            localStorage.setItem('user', JSON.stringify(codeResponse));
        },
        onError: (error) => console.error('Login Failed:', error)
    });

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    useEffect(() => {
        if (user && user.access_token) {
            setLoading(true);
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`)
                .then((res) => {
                    setProfile(res.data);
                })
                .catch((err) => {
                    console.error('Error fetching user profile:', err);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [user]);

    const logOut = () => {
        googleLogout();
        setUser(null);
        setProfile(null);
        localStorage.removeItem('user');
    };

    return (
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            {loading && <p>Loading...</p>}
            {user?.access_token ? (
                <div>
                    <img src={profile?.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile?.name}</p>
                    <p>Email Address: {profile?.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <button onClick={() => login()}>Sign in with Google 🚀 </button>
            )}
        </div>
    );
};

export default Auth;
