import {auth} from './index';

/**
 * Login with email and password
 * @param email
 * @param password
 * @returns {Promise<firebase.auth.UserCredential>}
 */
export const loginWithEmailAndPassword = async (email, password) => {
	return new Promise(((resolve) => {
		resolve(auth.signInWithEmailAndPassword(email, password));
	}));
};

/**git 
 * Logout user
 * @returns {Promise<void>}
 */
export const logout = async () => {
	return new Promise(resolve => {
		resolve(auth.signOut());
	});
};
