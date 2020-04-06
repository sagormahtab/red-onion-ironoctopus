import React, { createContext } from 'react';
import { useState } from 'react';

const [user, setUser] = useState({
    email: '',
    password: '',
    name: '',
    isSignIn: false
   })
const AuthContext = createContext({
    user
});

export default AuthContext;