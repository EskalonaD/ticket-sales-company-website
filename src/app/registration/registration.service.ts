import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';

export interface RegisterResponseData {
    kind: string,
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?: boolean
}

@Injectable({ providedIn: 'root' })
export class RegistrationService {

    user = new Subject<User>();

    constructor(private http: HttpClient) {

    }

    signup(email: string, password: string) {
        return this.http.post<RegisterResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAUxYoD2uGwwWSuiLPcjKDD34upkOuARiE',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        )
            .pipe(catchError(errorRes => {
                let errorMessage = 'An unknown error occured';
                if (!errorRes.error || !errorRes.error.error) {
                    return throwError(errorMessage)
                }
                switch (errorRes.error.error.message) {
                    case 'EMAIL_EXIST':
                        errorMessage = "this email exist";
                }
                return throwError(errorMessage)
            }), tap(resData => {
                this.handleRegister(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
            }));

    }

    login(email: string, password: string) {
        return this.http.post<RegisterResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAUxYoD2uGwwWSuiLPcjKDD34upkOuARiE',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        )
            .pipe(catchError(errorRes => {
                let errorMessage = 'An unknown error occured';
                if (!errorRes.error || !errorRes.error.error) {
                    return throwError(errorMessage)
                }
                switch (errorRes.error.error.message) {
                    case 'EMAIL_EXIST':
                        errorMessage = "this email exist";
                }
                return throwError(errorMessage)
            }), tap(resData => {
                this.handleRegister(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
            }));
    }



    private handleRegister(email: string, userId: string, token: string, expiresIn: number) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000)
        const user = new User(email, userId, token, expirationDate);
        this.user.next(user);
    }
}
