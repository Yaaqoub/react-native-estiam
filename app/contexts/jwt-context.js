import {createContext, useCallback, useEffect, useReducer} from 'react';
import PropTypes from 'prop-types';
import {authApi} from "../api/auth-api";
import AsyncStorage from "@react-native-async-storage/async-storage";

var ActionType;

(function (ActionType) {
    ActionType['INITIALIZE'] = 'INITIALIZE';
    ActionType['SIGN_IN'] = 'SIGN_IN';
    ActionType['SIGN_OUT'] = 'SIGN_OUT';
})(ActionType || (ActionType = {}));

const initialState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null,
};

const handlers = {
    INITIALIZE: (state, action) => {
        const {isAuthenticated, user} = action.payload;

        return {
            ...state,
            isAuthenticated,
            isInitialized: true,
            user
        };
    },
    SIGN_IN: (state, action) => {
        const { user } = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user
        };
    },
    SIGN_OUT: (state) => ({
        ...state,
        isAuthenticated: false,
        user: null,
    }),
};

const reducer = (state, action) => (handlers[action.type]
    ? handlers[action.type](state, action)
    : state);

export const AuthContext = createContext({
    ...initialState,
    signIn: () => Promise.resolve(),
    signOut: () => Promise.resolve(),
});
export const AuthProvider = (props) => {
    const { children } = props;
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        console.log('helloooooooo!');
    }, []);

    const signIn = useCallback(async (email, password) => {
        const authResponse = await authApi.signIn({email, password});

        await AsyncStorage.setItem('ACCESS_TOKEN', authResponse.access_token);
        await AsyncStorage.setItem('REFRESH_TOKEN', authResponse.refresh_token);

        const user = await  authApi.me(authResponse.access_token);

        dispatch({
            type: ActionType.SIGN_IN,
            payload: {
                user
            }
        });
    }, [dispatch]);

    const signOut = useCallback(() => {}, []);

    return (
        <AuthContext.Provider
            value={{
                ...state,
                signIn,
                signOut
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.prototype = {
    children: PropTypes.node.isRequired
};

export const AuthConsumer = AuthProvider.Consumer;
