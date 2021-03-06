import axios from 'axios';
import router from '../router';

const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    status: '',
    error: null
};

const getters = {
    // isLoggedIn: function (state) {
    //     if (state.token != '') {
    //         return true
    //     } else {
    //         return false
    //     }
    // }
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
    user: state => state.user,
    error: state => state.error
};

const actions = {
    // Login Action
    async login({
        commit
    }, user) {
        commit('auth_request');
        try {
            let res = await axios.post('http://localhost:5005/api/users/login', user)
            if (res.data.success) {
                console.log('user con sucesso');
                const token = res.data.token;
                const user = res.data.user;
                // Store the token into the localstorage
                localStorage.setItem('token', token);
                // Set the axios defaults
                axios.defaults.headers.common['Authorization'] = token;
                commit('auth_success', token, user);
            }
            return res;
        } catch (err) {
            commit('auth_error', err);
        }
    },
    // Register User
    async register({
        commit
    }, userData) {
        try {
            commit('register_request');
            let res = await axios.post('http://localhost:5005/api/users/register', userData);
            console.log('res: '+res);
            if (res.data.success !== undefined) {
                commit('register_success');
            }
            return res;
        } catch (err) {
            commit('register_error', err)
        }
    },
    
    // Confirm User
    async confirm({
        commit
    }, confirmationCode) {
        try {
            console.log('confirmationCode nel auth '+confirmationCode);
            commit('confirm_request');
            let res = await axios.post('http://localhost:5005/api/users/confirm',confirmationCode);
            console.log('res: '+JSON.stringify(res));
            if (res.data.success !== undefined) {
                commit('confirm_success');
            }
            return res;
        } catch (err) {
            commit('confirm_error', err)
        }
    },
    // Get the user Profile
    async getProfile({
        commit
    }) {
        commit('profile_request');
        try {
            console.log('token '+JSON.stringify({ Authorization: axios.defaults.headers.common['Authorization']}));
            let res = await axios.get('http://localhost:5005/api/users/profile',{ Authorization: axios.defaults.headers.common['Authorization']})
            commit('user_profile', res.data.user)
            return res;
        } catch (err) {
            commit('register_error', err)
        }       
    },
    // Logout the user
    async logout({
        commit
    }) {
        localStorage.removeItem('token');
        commit('logout');
        delete axios.defaults.headers.common['Authorization'];
        router.push('/login');
        return
    }
};

const mutations = {
    auth_request(state) {
        state.error = null
        state.status = 'loading'
    },
    auth_success(state, token, user) {
        state.token = token
        state.user = user
        state.status = 'success'
        state.error = null
    },
    auth_error(state, err) {
        state.error = err.response.data.msg
    },
    register_request(state) {
        state.error = null
        state.status = 'loading'
    },
    register_success(state) {
        state.error = null
        state.status = 'success'
    },
    register_error(state, err) {
        state.error = err.response.data.msg
    },
    confirm_request(state) {
        state.error = null
        state.status = 'loading'
    },
    confirm_success(state) {
        state.error = null
        state.status = 'success'
    },
    confirm_error(state, err) {
        state.error = err.response.data.msg
    },
    logout(state) {
        state.error = null
        state.status = ''
        state.token = ''
        state.user = ''
    },
    profile_request(state) {
        state.status = 'loading'
    },
    user_profile(state, user) {
        state.user = user
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};