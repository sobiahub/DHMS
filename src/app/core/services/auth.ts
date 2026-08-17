import {
  Injectable,
  inject,
  PLATFORM_ID
} from '@angular/core';

import {
  isPlatformBrowser
} from '@angular/common';

import {
  Observable,
  of,
  throwError,
  BehaviorSubject
} from 'rxjs';

import {
  delay
} from 'rxjs/operators';


// =======================================================
// REGISTER
// =======================================================

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}


// =======================================================
// LOGIN
// =======================================================

export interface LoginRequest {
  email: string;
  password: string;
}


// =======================================================
// USER
// =======================================================

export interface AuthUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: 'patient';
}


export interface UpdateProfileRequest {
  firstName: string;
  lastName: string;
  phone: string;
}

// =======================================================
// STORED USER
// =======================================================

interface StoredUser extends AuthUser {
  password: string;
}


// =======================================================
// FORGOT PASSWORD
// =======================================================

export interface ForgotPasswordRequest {
  email: string;
}


// =======================================================
// VERIFY CODE
// =======================================================

export interface VerifyCodeRequest {
  email: string;
  code: string;
}


// =======================================================
// RESET PASSWORD
// =======================================================

export interface ResetPasswordRequest {
  email: string;
  resetToken: string;
  password: string;
}


// =======================================================
// RESET SESSION
// =======================================================

interface ResetSession {
  email: string;
  code: string;
  resetToken: string;
  expiresAt: number;
  verified: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly platformId =
    inject(PLATFORM_ID);


  // =====================================================
  // LOCAL STORAGE KEYS
  // =====================================================

  private readonly USERS_KEY =
    'dhm_users';

  private readonly CURRENT_USER_KEY =
    'dhm_current_user';

  private readonly RESET_SESSION_KEY =
    'dhm_password_reset';


  // =====================================================
  // REACTIVE AUTH STATE
  // =====================================================

  private readonly currentUserSubject =
    new BehaviorSubject<AuthUser | null>(
      this.loadCurrentUser()
    );


  readonly currentUser$ =
    this.currentUserSubject.asObservable();


  // =====================================================
  // CURRENT USER
  // =====================================================

  getCurrentUser(): AuthUser | null {

    return this.currentUserSubject.value;

  }


  // =====================================================
  // IS LOGGED IN
  // =====================================================

  isLoggedIn(): boolean {

    return this.currentUserSubject.value !== null;

  }


  // =====================================================
  // REGISTER
  // =====================================================

  register(
    data: RegisterRequest
  ): Observable<AuthUser> {

    if (!isPlatformBrowser(this.platformId)) {

      return throwError(
        () =>
          new Error(
            'Registration is only available in the browser.'
          )
      );

    }


    const users =
      this.getUsers();


    // -----------------------------------------------
    // CHECK EXISTING EMAIL
    // -----------------------------------------------

    const existingUser =
      users.find(
        user =>
          user.email.toLowerCase() ===
          data.email.trim().toLowerCase()
      );


    if (existingUser) {

      return throwError(
        () =>
          new Error(
            'An account with this email already exists.'
          )
      );

    }


    // -----------------------------------------------
    // CREATE USER
    // -----------------------------------------------

    const newUser: AuthUser = {

      id: crypto.randomUUID(),

      firstName:
        data.firstName.trim(),

      lastName:
        data.lastName.trim(),

      email:
        data.email.trim().toLowerCase(),

      phone:
        data.phone.trim(),

      role:
        'patient'

    };


    const storedUser: StoredUser = {

      ...newUser,

      password:
        data.password

    };


    users.push(storedUser);


    localStorage.setItem(
      this.USERS_KEY,
      JSON.stringify(users)
    );


    return of(newUser).pipe(
      delay(900)
    );

  }


  // =====================================================
  // LOGIN
  // =====================================================

  login(
    data: LoginRequest
  ): Observable<AuthUser> {

    if (!isPlatformBrowser(this.platformId)) {

      return throwError(
        () =>
          new Error(
            'Login is only available in the browser.'
          )
      );

    }


    const email =
      data.email.trim().toLowerCase();


    const users =
      this.getUsers();


    const user =
      users.find(
        storedUser =>
          storedUser.email.toLowerCase() ===
            email &&
          storedUser.password ===
            data.password
      );


    if (!user) {

      return throwError(
        () =>
          new Error(
            'Invalid email or password.'
          )
      );

    }


    // -----------------------------------------------
    // AUTH USER
    // -----------------------------------------------

    const authUser: AuthUser = {

      id:
        user.id,

      firstName:
        user.firstName,

      lastName:
        user.lastName,

      email:
        user.email,

      phone:
        user.phone,

      role:
        user.role

    };


    // -----------------------------------------------
    // SAVE CURRENT USER
    // -----------------------------------------------

    localStorage.setItem(
      this.CURRENT_USER_KEY,
      JSON.stringify(authUser)
    );


    // -----------------------------------------------
    // UPDATE REACTIVE STATE
    // -----------------------------------------------

    this.currentUserSubject.next(
      authUser
    );


    return of(authUser).pipe(
      delay(700)
    );

  }


  // =====================================================
  // LOGOUT
  // =====================================================

  logout(): void {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }


    localStorage.removeItem(
      this.CURRENT_USER_KEY
    );


    // -----------------------------------------------
    // UPDATE NAVBAR / APP STATE
    // -----------------------------------------------

    this.currentUserSubject.next(
      null
    );

  }


  // =====================================================
  // CHECK EMAIL
  // =====================================================

  isEmailRegistered(
    email: string
  ): boolean {

    if (!isPlatformBrowser(this.platformId)) {
      return false;
    }


    return this.getUsers().some(
      user =>
        user.email.toLowerCase() ===
        email.trim().toLowerCase()
    );

  }


  // =====================================================
  // FORGOT PASSWORD
  // =====================================================

  forgotPassword(
    data: ForgotPasswordRequest
  ): Observable<{ message: string }> {

    if (!isPlatformBrowser(this.platformId)) {

      return throwError(
        () =>
          new Error(
            'Password recovery is only available in the browser.'
          )
      );

    }


    const email =
      data.email.trim().toLowerCase();


    const users =
      this.getUsers();


    const user =
      users.find(
        storedUser =>
          storedUser.email.toLowerCase() ===
          email
      );


    if (!user) {

      return throwError(
        () =>
          new Error(
            'No account was found with this email address.'
          )
      );

    }


    // -----------------------------------------------
    // TEMPORARY FRONTEND CODE
    // -----------------------------------------------

    const code =
      '123456';


    // -----------------------------------------------
    // RESET TOKEN
    // -----------------------------------------------

    const resetToken =
      crypto.randomUUID();


    // -----------------------------------------------
    // EXPIRATION
    // -----------------------------------------------

    const expiresAt =
      Date.now() +
      10 * 60 * 1000;


    const resetSession: ResetSession = {

      email,

      code,

      resetToken,

      expiresAt,

      verified: false

    };


    localStorage.setItem(
      this.RESET_SESSION_KEY,
      JSON.stringify(resetSession)
    );


    return of({

      message:
        'A verification code has been sent to your email.'

    }).pipe(
      delay(800)
    );

  }


  // =====================================================
  // VERIFY RESET CODE
  // =====================================================

  verifyResetCode(
    data: VerifyCodeRequest
  ): Observable<{
    resetToken: string;
  }> {

    if (!isPlatformBrowser(this.platformId)) {

      return throwError(
        () =>
          new Error(
            'Code verification is only available in the browser.'
          )
      );

    }


    const session =
      this.getResetSession();


    if (!session) {

      return throwError(
        () =>
          new Error(
            'Your password reset session has expired. Please request a new code.'
          )
      );

    }


    // -----------------------------------------------
    // EMAIL CHECK
    // -----------------------------------------------

    if (
      session.email !==
      data.email.trim().toLowerCase()
    ) {

      return throwError(
        () =>
          new Error(
            'Invalid password reset session.'
          )
      );

    }


    // -----------------------------------------------
    // EXPIRATION
    // -----------------------------------------------

    if (
      Date.now() >
      session.expiresAt
    ) {

      this.clearPasswordResetSession();

      return throwError(
        () =>
          new Error(
            'This verification code has expired. Please request a new code.'
          )
      );

    }


    // -----------------------------------------------
    // CODE CHECK
    // -----------------------------------------------

    if (
      session.code !==
      data.code.trim()
    ) {

      return throwError(
        () =>
          new Error(
            'The verification code is incorrect.'
          )
      );

    }


    // -----------------------------------------------
    // VERIFIED
    // -----------------------------------------------

    session.verified =
      true;


    localStorage.setItem(
      this.RESET_SESSION_KEY,
      JSON.stringify(session)
    );


    return of({

      resetToken:
        session.resetToken

    }).pipe(
      delay(700)
    );

  }


  // =====================================================
  // RESET PASSWORD
  // =====================================================

  resetPassword(
    data: ResetPasswordRequest
  ): Observable<{ message: string }> {

    if (!isPlatformBrowser(this.platformId)) {

      return throwError(
        () =>
          new Error(
            'Password reset is only available in the browser.'
          )
      );

    }


    const session =
      this.getResetSession();


    if (!session) {

      return throwError(
        () =>
          new Error(
            'Your password reset session has expired.'
          )
      );

    }


    // -----------------------------------------------
    // EXPIRATION
    // -----------------------------------------------

    if (
      Date.now() >
      session.expiresAt
    ) {

      this.clearPasswordResetSession();

      return throwError(
        () =>
          new Error(
            'Your password reset session has expired. Please start again.'
          )
      );

    }


    // -----------------------------------------------
    // EMAIL
    // -----------------------------------------------

    if (
      session.email !==
      data.email.trim().toLowerCase()
    ) {

      return throwError(
        () =>
          new Error(
            'Invalid password reset request.'
          )
      );

    }


    // -----------------------------------------------
    // TOKEN
    // -----------------------------------------------

    if (
      session.resetToken !==
      data.resetToken
    ) {

      return throwError(
        () =>
          new Error(
            'Invalid or expired reset token.'
          )
      );

    }


    // -----------------------------------------------
    // VERIFIED
    // -----------------------------------------------

    if (!session.verified) {

      return throwError(
        () =>
          new Error(
            'Please verify your code before resetting your password.'
          )
      );

    }


    // -----------------------------------------------
    // USERS
    // -----------------------------------------------

    const users =
      this.getUsers();


    const userIndex =
      users.findIndex(
        user =>
          user.email.toLowerCase() ===
          session.email
      );


    if (userIndex === -1) {

      return throwError(
        () =>
          new Error(
            'Account could not be found.'
          )
      );

    }


    // -----------------------------------------------
    // UPDATE PASSWORD
    // -----------------------------------------------

    users[userIndex].password =
      data.password;


    localStorage.setItem(
      this.USERS_KEY,
      JSON.stringify(users)
    );


    // -----------------------------------------------
    // CLEAR RESET
    // -----------------------------------------------

    this.clearPasswordResetSession();


    return of({

      message:
        'Your password has been reset successfully.'

    }).pipe(
      delay(900)
    );

  }


  // =====================================================
  // RESEND CODE
  // =====================================================

  resendResetCode(
    email: string
  ): Observable<{ message: string }> {

    return this.forgotPassword({
      email
    });

  }


  // =====================================================
  // GET RESET SESSION
  // =====================================================

  getPasswordResetSession():
    ResetSession | null {

    return this.getResetSession();

  }


  // =====================================================
  // CLEAR RESET SESSION
  // =====================================================

  clearPasswordResetSession(): void {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }


    localStorage.removeItem(
      this.RESET_SESSION_KEY
    );

  }


  // =====================================================
  // PRIVATE: LOAD CURRENT USER
  // =====================================================

  private loadCurrentUser():
    AuthUser | null {

    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }


    const storedUser =
      localStorage.getItem(
        this.CURRENT_USER_KEY
      );


    if (!storedUser) {
      return null;
    }


    try {

      return JSON.parse(
        storedUser
      ) as AuthUser;

    } catch {

      localStorage.removeItem(
        this.CURRENT_USER_KEY
      );

      return null;

    }

  }


  // =====================================================
  // PRIVATE: GET USERS
  // =====================================================

  private getUsers():
    StoredUser[] {

    if (!isPlatformBrowser(this.platformId)) {
      return [];
    }


    const storedUsers =
      localStorage.getItem(
        this.USERS_KEY
      );


    if (!storedUsers) {
      return [];
    }


    try {

      const parsed =
        JSON.parse(storedUsers);


      if (!Array.isArray(parsed)) {
        return [];
      }


      return parsed as StoredUser[];

    } catch {

      return [];

    }

  }


   // =====================================================
// UPDATE PROFILE
// =====================================================



updateProfile(
  data: UpdateProfileRequest
): Observable<AuthUser> {

  if (!isPlatformBrowser(this.platformId)) {

    return throwError(
      () =>
        new Error(
          'Profile update is only available in the browser.'
        )
    );

  }

  const currentUser = this.getCurrentUser();

  if (!currentUser) {

    return throwError(
      () =>
        new Error(
          'You must be logged in to update your profile.'
        )
    );

  }

  const firstName = data.firstName.trim();
  const lastName = data.lastName.trim();
  const phone = data.phone.trim();

  if (!firstName || !lastName || !phone) {

    return throwError(
      () =>
        new Error(
          'Please complete all required profile fields.'
        )
    );

  }

  const users = this.getUsers();

  const userIndex = users.findIndex(
    user => user.id === currentUser.id
  );

  if (userIndex === -1) {

    return throwError(
      () =>
        new Error(
          'User account could not be found.'
        )
    );

  }

  // Update stored user
  users[userIndex].firstName = firstName;
  users[userIndex].lastName = lastName;
  users[userIndex].phone = phone;

  localStorage.setItem(
    this.USERS_KEY,
    JSON.stringify(users)
  );

  // Create updated auth user
  const updatedUser: AuthUser = {

    id: users[userIndex].id,

    firstName:
      users[userIndex].firstName,

    lastName:
      users[userIndex].lastName,

    email:
      users[userIndex].email,

    phone:
      users[userIndex].phone,

    role:
      users[userIndex].role

  };

  // Update current logged-in user
  localStorage.setItem(
    this.CURRENT_USER_KEY,
    JSON.stringify(updatedUser)
  );

  return of(updatedUser).pipe(
    delay(600)
  );
}


  // =====================================================
  // PRIVATE: GET RESET SESSION
  // =====================================================

  private getResetSession():
    ResetSession | null {

    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }


    const storedSession =
      localStorage.getItem(
        this.RESET_SESSION_KEY
      );


    if (!storedSession) {
      return null;
    }


    try {

      return JSON.parse(
        storedSession
      ) as ResetSession;

    } catch {

      return null;

    }

  }

}